/* GetCertus addition (MPL-2.0, see GETCERTUS.md): sign-in experience phrases. */
const passkey_sign_in = {
  setup_page: {
    title: 'Helpota kirjautumista',
    subtitle: 'Luo pääsyavain',
    description:
      'Rekisteröi pääsyavaimesi laitteen biometriikalla, suojausavaimella, kuten YubiKey, tai muulla käytettävissä olevalla tavalla.',
  },
  trigger_conditional_ui_failed: 'Pääsyavaimen automaattista täyttöä ei voitu käynnistää.',
};

export default Object.freeze(passkey_sign_in);
