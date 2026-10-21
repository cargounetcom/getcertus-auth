/* GetCertus addition (MPL-2.0, see GETCERTUS.md): sign-in experience phrases. */
const passkey_sign_in = {
  setup_page: {
    title: 'Simplifică-ți conectarea',
    subtitle: 'Creează o cheie de acces',
    description:
      'Înregistrează cheia de acces folosind biometria dispozitivului, chei de securitate precum YubiKey sau alte metode disponibile.',
  },
  trigger_conditional_ui_failed: 'Completarea automată a cheii de acces nu a putut fi pornită.',
};

export default Object.freeze(passkey_sign_in);
