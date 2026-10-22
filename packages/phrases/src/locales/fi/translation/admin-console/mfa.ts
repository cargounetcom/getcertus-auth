/* GetCertus addition (MPL-2.0, see GETCERTUS.md): admin console phrases. */
const mfa = {
  title: 'Monivaiheinen tunnistautuminen',
  description:
    'Lisää monivaiheinen tunnistautuminen parantaaksesi kirjautumiskokemuksesi turvallisuutta.',
  factors: 'Tekijät',
  multi_factors: 'Monivaiheiset tekijät',
  multi_factors_description:
    'Käyttäjien on vahvistettava jokin käytössä olevista tekijöistä kaksivaiheista vahvistusta varten.',
  totp: 'Todennussovellus',
  otp_description:
    'Yhdistä Google Authenticator tai vastaava kertakäyttösalasanojen vahvistamiseen.',
  webauthn: 'Pääsyavaimet',
  webauthn_description:
    'Vahvista selaimen tukemalla tavalla: biometriikka, puhelimella skannaus, suojausavain jne.',
  webauthn_domain_tip:
    'WebAuthn sitoo julkiset avaimet tiettyyn verkkotunnukseen. Jos muutat palvelun verkkotunnusta, käyttäjät eivät voi enää tunnistautua olemassa olevilla pääsyavaimilla.',
  backup_code: 'Varakoodit',
  backup_code_description:
    'Luo 10 kertakäyttöistä varakoodia, kun käyttäjä on ottanut käyttöön jonkin MFA-menetelmän.',
  backup_code_setup_hint:
    'Kun käyttäjät eivät voi vahvistaa yllä olevia MFA-tekijöitä, he voivat käyttää varavaihtoehtoa.',
  backup_code_error_hint:
    'Varakoodin käyttö edellyttää vähintään yhtä muuta MFA-menetelmää onnistuneeseen tunnistautumiseen.',
  email_verification_code: 'Vahvistuskoodi sähköpostitse',
  email_verification_code_description:
    'Yhdistä sähköpostiosoite vahvistuskoodien vastaanottamiseen ja vahvistamiseen.',
  phone_verification_code: 'Vahvistuskoodi tekstiviestillä',
  phone_verification_code_description:
    'Yhdistä puhelinnumero tekstiviestivahvistuskoodien vastaanottamiseen ja vahvistamiseen.',
  policy: 'Käytäntö',
  policy_description: 'Määritä MFA-käytäntö kirjautumista ja rekisteröitymistä varten.',
  two_step_sign_in_policy: 'Kaksivaiheisen vahvistuksen käytäntö kirjautuessa',
  user_controlled: 'Käyttäjät voivat itse ottaa MFA:n käyttöön tai poistaa sen käytöstä',
  user_controlled_tip:
    'Käyttäjät voivat ohittaa MFA:n käyttöönoton ensimmäisellä kirjautumis- tai rekisteröitymiskerralla tai ottaa sen käyttöön ja poistaa käytöstä tiliasetuksissa.',
  mandatory: 'Käyttäjien on aina käytettävä MFA:ta kirjautuessa',
  mandatory_tip:
    'Käyttäjien on otettava MFA käyttöön ensimmäisellä kirjautumis- tai rekisteröitymiskerralla ja käytettävä sitä kaikissa tulevissa kirjautumisissa.',
  require_mfa: 'Vaadi MFA',
  require_mfa_label:
    'Ota tämä käyttöön, jos haluat kaksivaiheisen vahvistuksen olevan pakollinen sovellustesi käyttämiseksi. Jos se ei ole käytössä, käyttäjät voivat itse päättää, ottavatko he MFA:n käyttöön.',
  require_mfa_optional:
    'Valinnainen MFA: käyttäjät voivat itse ottaa MFA:n käyttöön tilinsä suojaamiseksi',
  require_mfa_adaptive:
    'Mukautuva MFA: pyydä MFA:ta vain, kun kirjautuminen vaikuttaa riskialttiilta (esim. uusi maa tai pitkä passiivisuus)',
  require_mfa_mandatory:
    'Pakollinen MFA: kaikkien käyttäjien on suoritettava MFA joka kirjautumisella',
  set_up_prompt: 'Kehote MFA:n käyttöönottoon',
  no_prompt: 'Älä pyydä käyttäjiä ottamaan MFA:ta käyttöön',
  prompt_at_sign_in_and_sign_up:
    'Pyydä käyttäjiä ottamaan MFA käyttöön rekisteröitymisen yhteydessä (ohitettavissa, kertaluonteinen kehote)',
  prompt_only_at_sign_in:
    'Pyydä käyttäjiä ottamaan MFA käyttöön seuraavalla kirjautumiskerralla rekisteröitymisen jälkeen (ohitettavissa, kertaluonteinen kehote)',
  prompt_at_sign_in_and_sign_up_mandatory:
    'Pyydä käyttäjiä ottamaan MFA käyttöön rekisteröitymisen yhteydessä (ei ohitettavissa)',
  prompt_only_at_sign_in_mandatory:
    'Pyydä käyttäjiä ottamaan MFA käyttöön seuraavalla kirjautumiskerralla rekisteröitymisen jälkeen (ei ohitettavissa)',
  set_up_organization_required_mfa_prompt:
    'Kehote MFA:n käyttöönottoon, kun organisaatio on ottanut MFA:n käyttöön',
  prompt_at_sign_in_non_skippable:
    'Pyydä käyttäjiä ottamaan MFA käyttöön seuraavalla kirjautumiskerralla (ei ohitettavissa)',
  email_primary_method_tip:
    'Sähköpostin vahvistuskoodi on jo ensisijainen kirjautumistapasi. Turvallisuuden vuoksi sitä ei voi käyttää uudelleen MFA:ssa.',
  phone_primary_method_tip:
    'Tekstiviestin vahvistuskoodi on jo ensisijainen kirjautumistapasi. Turvallisuuden vuoksi sitä ei voi käyttää uudelleen MFA:ssa.',
  no_email_connector_warning:
    'Sähköpostiliitintä ei ole vielä määritetty. Ennen kuin määritys on valmis, käyttäjät eivät voi käyttää sähköpostin vahvistuskoodeja MFA:ssa. <a>{{link}}</a> kohdassa "Liittimet".',
  no_sms_connector_warning:
    'Tekstiviestiliitintä ei ole vielä määritetty. Ennen kuin määritys on valmis, käyttäjät eivät voi käyttää tekstiviestin vahvistuskoodeja MFA:ssa. <a>{{link}}</a> kohdassa "Liittimet".',
  no_email_connector_error:
    'Sähköpostin vahvistuskoodiin perustuvaa MFA:ta ei voi ottaa käyttöön ilman sähköpostiliitintä. Määritä ensin sähköpostiliitin.',
  no_sms_connector_error:
    'Tekstiviestin vahvistuskoodiin perustuvaa MFA:ta ei voi ottaa käyttöön ilman tekstiviestiliitintä. Määritä ensin tekstiviestiliitin.',
  setup_link: 'Määritä',
  trusted_device: {
    title: 'Luotetut laitteet',
    description:
      'Anna luotettujen selainten suorittaa MFA-vahvistus automaattisesti, kun nykyinen MFA-kulku sitä vaatii.',
    enable_title: 'Ota luotetut laitteet käyttöön',
    enable_description:
      'Salli käyttäjien luottaa tähän selaimeen hyväksytyn MFA-tekijän suorittamisen jälkeen.',
    duration_title: 'Luottamuksen kesto (päivää)',
    duration_error: 'Anna kokonaisluku väliltä {{min}}–{{max}}.',
    duration_note: 'Luottamuksen keston muutokset koskevat vain sen jälkeen luotettuja laitteita.',
    organization_allow_title: 'Salli luotetut laitteet',
    organization_allow_tip:
      'Organisaatio voi vain rajoittaa tenantin luotettujen laitteiden käytäntöä; se ei voi ottaa ominaisuutta käyttöön, jos tenantin käytäntö on pois päältä.',
    organization_allow_description:
      'Salli luotettujen laitteiden vahvistus tämän organisaation jäsenille.',
    organization_global_disabled:
      'Ota luotetut laitteet käyttöön tenantin MFA-asetuksissa ennen kuin sallit ne tälle organisaatiolle.',
    management_description:
      'Hallitse selaimia, joihin tämä käyttäjä on luottanut MFA:n jälkeen. Jos poistat selaimen, MFA vaaditaan siinä uudelleen seuraavalla kirjautumiskerralla.',
    management_hint: 'Viimeisin sijainti on vain tiedoksi.',
    management_empty: 'Tällä käyttäjällä ei ole aktiivisia luotettuja laitteita.',
    management_deletion_confirmation:
      'Poistetaanko {{name}}? Tämä selain vaatii MFA:n uudelleen seuraavalla kirjautumiskerralla.',
    management_removed: 'Luotettu laite poistettu.',
  },
};

export default Object.freeze(mfa);
