/* GetCertus addition (MPL-2.0, see GETCERTUS.md): sign-in experience phrases. */
const passkey_sign_in = {
  setup_page: {
    title: 'Inloggen makkelijker maken',
    subtitle: 'Maak een passkey aan',
    description:
      'Registreer je passkey met biometrie van je apparaat, een beveiligingssleutel zoals YubiKey of een andere beschikbare methode.',
  },
  trigger_conditional_ui_failed: 'Automatisch invullen van passkey kon niet worden gestart.',
};

export default Object.freeze(passkey_sign_in);
