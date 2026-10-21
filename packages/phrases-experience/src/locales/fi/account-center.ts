/* eslint-disable max-lines -- Locale catalog mirrors the complete Account Center phrase schema. */
/* GetCertus addition (MPL-2.0, see GETCERTUS.md): sign-in experience phrases. */
const account_center = {
  home: {
    title: 'Sivua ei löytynyt',
    description: 'Tämä sivu ei ole käytettävissä.',
  },
  page: {
    title: 'Tili',
    security_title: 'Turvallisuus',
    security_description: 'Muuta tilisi asetuksia täällä pitääksesi tilisi turvassa.',
    profile_title: 'Henkilötiedot',
    profile_description: 'Muuta henkilötietojasi täällä.',
    sidebar_personal_info: 'Henkilötiedot',
    sidebar_security: 'Turvallisuus',
    sidebar_sessions: 'Istunnot',
    support: 'Tuki',
    user_menu: 'Käyttäjävalikko',
    sign_out: 'Kirjaudu ulos',
  },
  verification: {
    title: 'Turvavahvistus',
    description:
      'Vahvista, että olet sinä, suojataksesi tilisi. Valitse tapa vahvistaa henkilöllisyytesi.',
    error_send_failed: 'Vahvistuskoodin lähetys epäonnistui. Yritä myöhemmin uudelleen.',
    error_invalid_code: 'Vahvistuskoodi on virheellinen tai vanhentunut.',
    error_verify_failed: 'Vahvistus epäonnistui. Syötä koodi uudelleen.',
    verification_required: 'Vahvistus on vanhentunut. Vahvista henkilöllisyytesi uudelleen.',
    try_another_method: 'Kokeile toista vahvistustapaa',
    no_available_methods_title: 'Vahvistustapoja ei ole käytettävissä',
    no_available_methods_description:
      'Sinulla ei ole yhtään vahvistustapaa. Lisää ensin tilillesi salasana, sähköposti tai puhelinnumero.',
  },
  password_verification: {
    title: 'Vahvista salasana',
    description: 'Vahvista, että olet sinä, suojataksesi tilisi. Syötä salasanasi.',
    error_failed: 'Väärä salasana. Tarkista syöttämäsi tiedot.',
  },
  verification_method: {
    password: {
      name: 'Salasana',
      description: 'Vahvista salasanasi',
    },
    email: {
      name: 'Vahvistuskoodi sähköpostiin',
      description: 'Lähetä vahvistuskoodi sähköpostiisi',
    },
    phone: {
      name: 'Vahvistuskoodi puhelimeen',
      description: 'Lähetä vahvistuskoodi puhelinnumeroosi',
    },
  },
  email: {
    title: 'Liitä sähköposti',
    description: 'Liitä sähköpostisi kirjautumista tai tilin palauttamista varten.',
    verification_title: 'Syötä sähköpostin vahvistuskoodi',
    verification_description: 'Vahvistuskoodi on lähetetty sähköpostiisi {{email_address}}.',
    success: 'Ensisijainen sähköposti liitetty.',
    verification_required: 'Vahvistus on vanhentunut. Vahvista henkilöllisyytesi uudelleen.',
  },
  phone: {
    title: 'Liitä puhelinnumero',
    description: 'Liitä puhelinnumerosi kirjautumista tai tilin palauttamista varten.',
    verification_title: 'Syötä tekstiviestin vahvistuskoodi',
    verification_description: 'Vahvistuskoodi on lähetetty puhelimeesi {{phone_number}}.',
    success: 'Ensisijainen puhelinnumero liitetty.',
    verification_required: 'Vahvistus on vanhentunut. Vahvista henkilöllisyytesi uudelleen.',
  },
  username: {
    title: 'Aseta käyttäjänimi',
    description: 'Käyttäjänimessä saa olla vain kirjaimia, numeroita ja alaviivoja.',
    policy_description: '{{requirements}}',
    success: 'Käyttäjänimi päivitetty.',
  },
  security: {
    add: 'Lisää',
    change: 'Muuta',
    remove: 'Poista',
    not_set: 'Ei asetettu',
    social_sign_in: 'Sosiaalinen kirjautuminen',
    social_not_linked: 'Ei liitetty',
    email_phone: 'Sähköposti / puhelin',
    email: 'Sähköposti',
    phone: 'Puhelin',
    password: 'Salasana',
    configured: 'Määritetty',
    not_configured: 'Ei määritetty',
    two_step_verification: 'Kaksivaiheinen vahvistus',
    authenticator_app: 'Todennussovellus',
    passkeys: 'Pääsyavaimet',
    backup_codes: 'Varakoodit',
    email_verification_code: 'Vahvistuskoodi sähköpostiin',
    phone_verification_code: 'Vahvistuskoodi puhelimeen',
    passkeys_count_one: '{{count}} pääsyavain',
    passkeys_count_other: '{{count}} pääsyavainta',
    backup_codes_count_one: '{{count}} koodi jäljellä',
    backup_codes_count_other: '{{count}} koodia jäljellä',
    view: 'Näytä',
    manage: 'Hallitse',
    turn_on_2_step_verification_description:
      'Lisää ylimääräinen suojaustaso. Kirjautuessa sinulta pyydetään toinen vahvistusvaihe.',
    turn_off_2_step_verification: 'Poista kaksivaiheinen vahvistus käytöstä',
    turn_off_2_step_verification_description:
      'Jos poistat kaksivaiheisen vahvistuksen käytöstä, tilisi ylimääräinen suojaus kirjautuessa poistuu. Haluatko varmasti jatkaa?',
    disable_2_step_verification: 'Poista käytöstä',
    no_verification_method_warning:
      'Et ole lisännyt toista vahvistustapaa. Lisää vähintään yksi ottaaksesi kaksivaiheisen vahvistuksen käyttöön kirjautuessa.',
    passkey_sign_in_prompt: 'Ehdota pääsyavaimen luomista',
    passkey_sign_in_prompt_description:
      'Kun tämä on päällä, sinua pyydetään luomaan pääsyavain nopeampaa ja turvallisempaa kirjautumista varten.',
    account_removal: 'Tilin poistaminen',
    delete_your_account: 'Poista tilisi',
    delete_account: 'Poista tili',
    remove_username_confirmation_title: 'Poista käyttäjänimi',
    remove_username_confirmation_description:
      'Poistamisen jälkeen et voi enää kirjautua tällä käyttäjänimellä. Haluatko varmasti jatkaa?',
    remove_email_confirmation_title: 'Poista sähköpostiosoite',
    remove_email_confirmation_description:
      'Poistamisen jälkeen et voi enää kirjautua tällä sähköpostiosoitteella. Haluatko varmasti jatkaa?',
    remove_phone_confirmation_title: 'Poista puhelinnumero',
    remove_phone_confirmation_description:
      'Poistamisen jälkeen et voi enää kirjautua tällä puhelinnumerolla. Haluatko varmasti jatkaa?',
    email_removed: 'Sähköpostiosoite poistettu.',
    phone_removed: 'Puhelinnumero poistettu.',
    username_removed: 'Käyttäjänimi poistettu.',
    trusted_devices: {
      title: 'MFA:n luotetut laitteet',
      current_device: 'Tämä laite',
      expires_on: 'Vanhenee {{date}}',
      unknown_location: 'Tuntematon sijainti',
      remove: 'Poista',
      removed: 'Luotettu laite poistettu.',
      loading: 'Ladataan...',
      empty: 'Ei luotettuja laitteita.',
      load_failed: 'Luotettujen laitteiden lataus epäonnistui. Yritä uudelleen.',
      retry: 'Yritä uudelleen',
      remove_confirmation_title: 'Poistetaanko luotettu laite?',
      remove_confirmation_description:
        'Kun seuraavan kerran kirjaudut tällä laitteella, sinun on tehtävä MFA uudelleen. Nykyinen istuntosi pysyy voimassa.',
    },
    passkeys_count_two: '{{count}} pääsyavainta',
    passkeys_count_few: '{{count}} pääsyavainta',
    passkeys_count_many: '{{count}} pääsyavainta',
    backup_codes_count_two: '{{count}} koodia jäljellä',
    backup_codes_count_few: '{{count}} koodia jäljellä',
    backup_codes_count_many: '{{count}} koodia jäljellä',
  },
  social: {
    linked: '{{connector}} liitetty.',
    removed: '{{connector}} poistettu.',
    not_enabled:
      'Tämä sosiaalinen kirjautumistapa ei ole käytössä. Ota yhteyttä ylläpitäjään saadaksesi apua.',
    remove_confirmation_title: 'Poista sosiaalinen tili',
    remove_confirmation_description:
      'Jos poistat palvelun {{connector}}, et ehkä voi kirjautua sillä, ennen kuin lisäät sen uudelleen.',
  },
  password: {
    title: 'Aseta salasana',
    description: 'Luo uusi salasana suojataksesi tilisi.',
    success: 'Salasana päivitetty.',
  },
  code_verification: {
    send: 'Lähetä vahvistuskoodi',
    resend: 'Etkö saanut koodia? <a>Lähetä vahvistuskoodi uudelleen</a>',
    resend_countdown: 'Etkö saanut koodia? Lähetä uudelleen {{seconds}} s kuluttua',
  },
  email_verification: {
    title: 'Vahvista sähköpostisi',
    prepare_description:
      'Vahvista, että olet sinä, suojataksesi tilisi. Lähetä vahvistuskoodi sähköpostiisi.',
    email_label: 'Sähköpostiosoite',
    send: 'Lähetä vahvistuskoodi',
    description: 'Vahvistuskoodi on lähetetty sähköpostiisi {{email}}. Syötä koodi jatkaaksesi.',
    resend: 'Etkö saanut koodia? <a>Lähetä vahvistuskoodi uudelleen</a>',
    not_received: 'Etkö saanut koodia?',
    resend_action: 'Lähetä vahvistuskoodi uudelleen',
    resend_countdown: 'Etkö saanut koodia? Lähetä uudelleen {{seconds}} s kuluttua',
    error_send_failed: 'Vahvistuskoodin lähetys epäonnistui. Yritä myöhemmin uudelleen.',
    error_verify_failed: 'Vahvistus epäonnistui. Syötä koodi uudelleen.',
    error_invalid_code: 'Vahvistuskoodi on virheellinen tai vanhentunut.',
  },
  phone_verification: {
    title: 'Vahvista puhelimesi',
    prepare_description:
      'Vahvista, että olet sinä, suojataksesi tilisi. Lähetä vahvistuskoodi puhelimeesi.',
    phone_label: 'Puhelinnumero',
    send: 'Lähetä vahvistuskoodi',
    description: 'Vahvistuskoodi on lähetetty puhelimeesi {{phone}}. Syötä koodi jatkaaksesi.',
    resend: 'Etkö saanut koodia? <a>Lähetä vahvistuskoodi uudelleen</a>',
    resend_countdown: 'Etkö saanut koodia? Lähetä uudelleen {{seconds}} s kuluttua',
    error_send_failed: 'Vahvistuskoodin lähetys epäonnistui. Yritä myöhemmin uudelleen.',
    error_verify_failed: 'Vahvistus epäonnistui. Syötä koodi uudelleen.',
    error_invalid_code: 'Vahvistuskoodi on virheellinen tai vanhentunut.',
  },
  mfa: {
    totp_already_added: 'Olet jo lisännyt todennussovelluksen. Poista nykyinen ensin.',
    totp_not_enabled:
      'Todennussovelluksen kertakäyttökoodi ei ole käytössä. Ota yhteyttä ylläpitäjään saadaksesi apua.',
    backup_code_already_added:
      'Sinulla on jo voimassa olevia varakoodeja. Käytä tai poista ne ennen uusien luomista.',
    backup_code_not_enabled:
      'Varakoodit eivät ole käytössä. Ota yhteyttä ylläpitäjään saadaksesi apua.',
    backup_code_requires_other_mfa:
      'Varakoodit edellyttävät, että toinen MFA-tapa on ensin määritetty.',
    passkey_not_enabled: 'Pääsyavain ei ole käytössä. Ota yhteyttä ylläpitäjään saadaksesi apua.',
    passkey_already_registered:
      'Tämä pääsyavain on jo rekisteröity tilillesi. Käytä toista todenninta.',
  },
  update_success: {
    default: {
      title: 'Päivitetty',
      description: 'Muutoksesi on tallennettu.',
    },
    email: {
      title: 'Sähköpostiosoite päivitetty!',
      description: 'Tilisi sähköpostiosoite on vaihdettu.',
    },
    phone: {
      title: 'Puhelinnumero päivitetty!',
      description: 'Tilisi puhelinnumero on vaihdettu.',
    },
    username: {
      title: 'Käyttäjänimi päivitetty!',
      description: 'Tilisi käyttäjänimi on vaihdettu.',
    },
    password: {
      title: 'Salasana päivitetty!',
      description: 'Tilisi salasana on vaihdettu.',
    },
    totp: {
      title: 'Todennussovellus lisätty!',
      description: 'Todennussovelluksesi on liitetty tiliisi.',
    },
    totp_replaced: {
      title: 'Todennussovellus vaihdettu!',
      description: 'Todennussovelluksesi on vaihdettu.',
    },
    backup_code: {
      title: 'Varakoodit luotu!',
      description: 'Varakoodisi on tallennettu. Säilytä ne turvallisessa paikassa.',
    },
    passkey: {
      title: 'Pääsyavain lisätty!',
      description: 'Pääsyavaimesi on liitetty tiliisi.',
    },
    social: {
      title: 'Sosiaalinen tili liitetty!',
      description: 'Sosiaalinen tilisi on liitetty.',
    },
  },
  backup_code: {
    title: 'Varakoodit',
    description:
      'Jos kaksivaiheinen vahvistus ei muilla tavoilla onnistu, voit käyttää jotakin näistä varakoodeista päästäksesi tilillesi. Kutakin koodia voi käyttää vain kerran.',
    copy_hint: 'Kopioi ne ja tallenna turvalliseen paikkaan.',
    generate_new_title: 'Luo uudet varakoodit',
    generate_new: 'Luo uudet varakoodit',
  },
  passkey: {
    title: 'Pääsyavaimet',
    added: 'Lisätty: {{date}}',
    last_used: 'Viimeksi käytetty: {{date}}',
    never_used: 'Ei koskaan',
    unnamed: 'Nimetön pääsyavain',
    renamed: 'Pääsyavain nimetty uudelleen.',
    deleted: 'Pääsyavain poistettu.',
    add_another_title: 'Lisää toinen pääsyavain',
    add_another_description:
      'Rekisteröi pääsyavaimesi laitteen biometriikalla, suojausavaimella (esim. YubiKey) tai muulla käytettävissä olevalla tavalla.',
    add_passkey: 'Lisää pääsyavain',
    delete_confirmation_title: 'Poista pääsyavaimesi',
    delete_confirmation_description: 'Jos poistat tämän pääsyavaimen, et voi enää vahvistaa sillä.',
    rename_passkey: 'Nimeä pääsyavain uudelleen',
    rename_description: 'Syötä tälle pääsyavaimelle uusi nimi.',
    name_this_passkey: 'Nimeä tämän laitteen pääsyavain',
    name_passkey_description:
      'Olet vahvistanut tämän laitteen kaksivaiheista vahvistusta varten. Anna sille nimi, jotta tunnistat sen, jos sinulla on useita avaimia.',
    name_input_label: 'Nimi',
  },
  sessions: {
    page_title: 'Istunnot',
    page_description:
      'Hallitse aktiivisia istuntojasi ja valtuutettuja kolmannen osapuolen sovelluksia.',
    title: 'Istunnot',
    current_session: 'Nykyinen istunto',
    signed_in_at: 'Kirjautunut {{date}}',
    revoke_session: 'Kirjaudu ulos',
    revoke_session_title: 'Kirjaa istunto ulos',
    revoke_session_description:
      'Istunto kirjataan ulos ja kaikki siihen liittyvä pääsy perutaan. Haluatko varmasti jatkaa?',
    no_other_sessions: 'Ei muita aktiivisia istuntoja.',
    loading: 'Ladataan...',
    third_party_apps_title: 'Kolmannen osapuolen sovellukset',
    no_third_party_apps: 'Ei valtuutettuja kolmannen osapuolen sovelluksia.',
    third_party_apps_load_failed:
      'Kolmannen osapuolen sovellusten lataus epäonnistui. Yritä uudelleen.',
    granted_at: 'Valtuutettu {{date}}',
    dynamic_app: 'Dynaaminen sovellus',
    client_id: 'Asiakastunnus: {{clientId}}',
    revoke_grant: 'Poista',
    revoke_grant_title: 'Poista kolmannen osapuolen sovelluksen pääsy',
    revoke_grant_description:
      'Tälle sovellukselle myönnetty pääsy perutaan. Aiemmin myönnetyt käyttöoikeustunnukset voivat olla voimassa, kunnes ne vanhenevat. Haluatko varmasti jatkaa?',
    revoke_grant_failed: 'Joidenkin käyttöoikeuksien peruminen epäonnistui. Yritä uudelleen.',
  },
};

export default Object.freeze(account_center);
/* eslint-enable max-lines */
