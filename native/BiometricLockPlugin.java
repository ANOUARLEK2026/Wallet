package com.mywallet.app;

import android.app.KeyguardManager;
import android.content.Context;
import android.os.Build;
import android.view.Window;
import android.view.WindowManager;

import androidx.biometric.BiometricManager;
import androidx.biometric.BiometricManager.Authenticators;
import androidx.biometric.BiometricPrompt;
import androidx.core.content.ContextCompat;

import com.getcapacitor.JSObject;
import com.getcapacitor.Plugin;
import com.getcapacitor.PluginCall;
import com.getcapacitor.PluginMethod;
import com.getcapacitor.annotation.CapacitorPlugin;

/**
 * Fingerprint / device-credential lock for MyWallet.
 * JS: Capacitor.Plugins.BiometricLock.{isAvailable, authenticate, setSecure}
 */
@CapacitorPlugin(name = "BiometricLock")
public class BiometricLockPlugin extends Plugin {

    private boolean busy = false;

    @PluginMethod
    public void isAvailable(PluginCall call) {
        int status = BiometricManager.from(getContext()).canAuthenticate(Authenticators.BIOMETRIC_WEAK);
        boolean biometric = status == BiometricManager.BIOMETRIC_SUCCESS;

        KeyguardManager km = (KeyguardManager) getContext().getSystemService(Context.KEYGUARD_SERVICE);
        boolean credential = Build.VERSION.SDK_INT >= 23 && km != null && km.isDeviceSecure();

        JSObject ret = new JSObject();
        ret.put("biometric", biometric);
        ret.put("credential", credential);
        ret.put("status", status);
        call.resolve(ret);
    }

    @PluginMethod
    public void authenticate(final PluginCall call) {
        if (busy) {
            call.reject("Authentication already in progress", "busy");
            return;
        }
        final String title = call.getString("title", "MyWallet");
        final String subtitle = call.getString("subtitle", "");
        final String cancel = call.getString("cancel", "Cancel");
        final boolean allowCredential = call.getBoolean("allowDeviceCredential", true);

        busy = true;
        getActivity().runOnUiThread(() -> {
            try {
                BiometricPrompt.PromptInfo.Builder b = new BiometricPrompt.PromptInfo.Builder()
                        .setTitle(title)
                        .setConfirmationRequired(false);
                if (!subtitle.isEmpty()) b.setSubtitle(subtitle);
                if (allowCredential) {
                    // fingerprint first, phone PIN / pattern / password as fallback
                    b.setAllowedAuthenticators(Authenticators.BIOMETRIC_WEAK | Authenticators.DEVICE_CREDENTIAL);
                } else {
                    b.setAllowedAuthenticators(Authenticators.BIOMETRIC_WEAK);
                    b.setNegativeButtonText(cancel);
                }

                BiometricPrompt prompt = new BiometricPrompt(
                        getActivity(),
                        ContextCompat.getMainExecutor(getContext()),
                        new BiometricPrompt.AuthenticationCallback() {
                            @Override
                            public void onAuthenticationSucceeded(BiometricPrompt.AuthenticationResult result) {
                                busy = false;
                                JSObject ret = new JSObject();
                                ret.put("verified", true);
                                call.resolve(ret);
                            }

                            @Override
                            public void onAuthenticationError(int errorCode, CharSequence errString) {
                                busy = false;
                                call.reject(String.valueOf(errString), String.valueOf(errorCode));
                            }
                            // onAuthenticationFailed: the prompt stays open so the user can retry
                        });
                prompt.authenticate(b.build());
            } catch (Exception e) {
                busy = false;
                call.reject(String.valueOf(e.getMessage()), "error");
            }
        });
    }

    /** Hides the app in the recent-apps switcher and blocks screenshots. */
    @PluginMethod
    public void setSecure(final PluginCall call) {
        final boolean enabled = call.getBoolean("enabled", false);
        getActivity().runOnUiThread(() -> {
            Window w = getActivity().getWindow();
            if (enabled) w.addFlags(WindowManager.LayoutParams.FLAG_SECURE);
            else w.clearFlags(WindowManager.LayoutParams.FLAG_SECURE);
            call.resolve();
        });
    }
}
