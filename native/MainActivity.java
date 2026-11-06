package com.mywallet.app;

import android.os.Bundle;

import com.getcapacitor.BridgeActivity;

public class MainActivity extends BridgeActivity {
    @Override
    public void onCreate(Bundle savedInstanceState) {
        registerPlugin(BiometricLockPlugin.class);
        super.onCreate(savedInstanceState);
    }
}
