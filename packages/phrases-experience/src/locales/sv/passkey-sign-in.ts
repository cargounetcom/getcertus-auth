/* GetCertus addition (MPL-2.0, see GETCERTUS.md): sign-in experience phrases. */
const passkey_sign_in = {
  setup_page: {
    title: 'Förenkla din inloggning',
    subtitle: 'Skapa en passkey',
    description:
      'Registrera din passkey med enhetens biometri, en säkerhetsnyckel som YubiKey eller en annan tillgänglig metod.',
  },
  trigger_conditional_ui_failed: 'Det gick inte att starta automatisk ifyllning av passkey.',
};

export default Object.freeze(passkey_sign_in);
