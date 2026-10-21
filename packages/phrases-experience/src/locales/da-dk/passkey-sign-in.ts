/* GetCertus addition (MPL-2.0, see GETCERTUS.md): sign-in experience phrases. */
const passkey_sign_in = {
  setup_page: {
    title: 'Gør dit login enklere',
    subtitle: 'Opret en passkey',
    description:
      'Registrer din passkey med enhedens biometri, en sikkerhedsnøgle som YubiKey eller en anden tilgængelig metode.',
  },
  trigger_conditional_ui_failed: 'Automatisk udfyldning af passkey kunne ikke startes.',
};

export default Object.freeze(passkey_sign_in);
