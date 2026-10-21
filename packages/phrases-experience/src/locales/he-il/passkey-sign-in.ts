/* GetCertus addition (MPL-2.0, see GETCERTUS.md): sign-in experience phrases. */
const passkey_sign_in = {
  setup_page: {
    title: 'התחברות פשוטה יותר',
    subtitle: 'יצירת מפתח גישה',
    description:
      'רישום מפתח גישה באמצעות ביומטריה של המכשיר, מפתחות אבטחה כמו YubiKey או שיטות זמינות אחרות.',
  },
  trigger_conditional_ui_failed: 'המילוי האוטומטי של מפתח הגישה לא הופעל.',
};

export default Object.freeze(passkey_sign_in);
