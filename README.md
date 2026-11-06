# MyWallet for Android (v4)

## New in v4: full financial picture
- **Wealth tab:** net worth (assets minus debts) with monthly history, accounts with transfers, assets (property, gold, shares…) with gain/loss, debts and money owed to you with Pay buttons, savings goals with monthly-needed and ETA.
- **Plan tab:** 1 to 5 year forecast with what-if sliders (income, spending, asset growth, one-off expense), cash-out warning, next-30-days bills, financial health score (0-100) with advice, budgets and recurring items.
- **Tools:** can-I-afford-it, loan calculator, investment growth with inflation, retirement planner (4% rule), 50/30/20 check, debt payoff (avalanche vs snowball).
- Backups, undo and snapshots cover all of the above.

Same features as MyWallet 2.2 for Windows (quick-add with smart amounts, history with search/filters/bulk edit,
dashboard with period comparison, statistics, budgets, recurring items, undo, dark/light, CSV import/export,
JSON backup/restore, auto-snapshots), redesigned for one-handed phone use. 100% offline; data stays on the phone.

## Fastest: install as an app (no APK needed)
1. Put the `www` folder on any HTTPS host (GitHub Pages, Netlify drop, Cloudflare Pages — all free).
2. Open the link in Chrome on your phone → menu ⋮ → **Install app**.

## Real APK (no Android Studio needed)
1. Create a GitHub repo and upload this whole folder.
2. Actions tab → **Build MyWallet APK** → Run. About 4 minutes later download `MyWallet-apk` → `app-debug.apk`.
3. Copy to the phone, open it, allow "install unknown apps".
(With Android Studio: `npm install && npx cap add android && npx cap sync && npx cap open android`.)

## Moving your Windows data
Windows MyWallet → Export → **CSV**. On the phone: More → **Import CSV**. Duplicates are skipped.

## Using it
- Type an amount and press **Add**. `12k`, `1.5m`, `800+250`, `3*450` all work. Start with `+` for income.
- Long-press a transaction to multi-select (set category / type / delete). Tap to edit or duplicate.
- Every change has an **Undo** in the toast.

## النسخة العربية (RTL)
واجهة عربية كاملة من اليمين لليسار. الترجمة في `www/ar.js` (قاموس + مترجم تلقائي)، وتبقى البيانات المخزّنة بمفاتيحها الإنجليزية لتبقى النسخ الاحتياطية وملفات CSV القديمة متوافقة. لإضافة ترجمة نص جديد أضف سطراً `English|عربي` في القاموس.

## App lock (fingerprint)
More → **App lock** turns on fingerprint unlock (the phone's PIN/pattern is the fallback). Options: lock after (immediately / 30 s / 1 min / 5 min) and *Hide in recent apps* (also blocks screenshots). Turning the lock on or off asks for your fingerprint first.
Native code lives in `native/` and is copied into the Android project by `scripts/apply-native.sh` (already run on `android/`, and run automatically by the GitHub workflow). If you regenerate `android/` yourself, run `bash scripts/apply-native.sh` after `npx cap sync`.
Works only in the APK; in the browser/PWA the switch is disabled.
