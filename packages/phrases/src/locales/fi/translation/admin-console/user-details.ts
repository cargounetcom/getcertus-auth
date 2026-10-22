/* GetCertus addition (MPL-2.0, see GETCERTUS.md): admin console phrases. */
const user_details = {
  page_title: 'Käyttäjän tiedot',
  back_to_users: 'Takaisin käyttäjähallintaan',
  created_title: 'Käyttäjä on luotu',
  created_guide: 'Tässä tiedot, joiden avulla käyttäjä pääsee kirjautumaan.',
  created_email: 'Sähköpostiosoite:',
  created_phone: 'Puhelinnumero:',
  created_username: 'Käyttäjänimi:',
  created_password: 'Salasana:',
  menu_delete: 'Poista',
  delete_description: 'Toimintoa ei voi kumota. Käyttäjä poistetaan pysyvästi.',
  deleted: 'Käyttäjä on poistettu',
  reset_password: {
    reset_title: 'Haluatko varmasti vaihtaa salasanan?',
    generate_title: 'Haluatko varmasti luoda salasanan?',
    content: 'Toimintoa ei voi kumota. Käyttäjän kirjautumistiedot päivitetään.',
    reset_complete: 'Salasana on vaihdettu',
    generate_complete: 'Salasana on luotu',
    new_password: 'Uusi salasana:',
    password: 'Salasana:',
  },
  expire_password: {
    button: 'Vanhenna',
    title: 'Haluatko varmasti vanhentaa tämän salasanan?',
    content:
      'Käyttäjän on vaihdettava salasanansa seuraavalla kirjautumiskerralla. Toimintoa ei voi kumota.',
    success: 'Käyttäjän salasana on merkitty vanhentuneeksi.',
    not_enabled_tooltip: 'Salasanan vanhenemiskäytäntö ei ole käytössä.',
  },
  tab_settings: 'Asetukset',
  tab_roles: 'Roolit',
  tab_logs: 'Käyttäjälokit',
  tab_organizations: 'Organisaatiot',
  authentication: 'Todennus',
  authentication_description:
    'Jokaisella käyttäjällä on profiili, joka sisältää kaikki käyttäjätiedot: perustiedot, sosiaaliset identiteetit ja mukautetut tiedot.',
  user_profile: 'Käyttäjätiedot',
  field_email: 'Sähköpostiosoite',
  field_phone: 'Puhelinnumero',
  field_username: 'Käyttäjänimi',
  field_password: 'Salasana',
  field_name: 'Nimi',
  field_avatar: 'Avatar-kuvan URL',
  field_avatar_placeholder: 'https://your.cdn.domain/avatar.png',
  field_custom_data: 'Mukautetut tiedot',
  field_custom_data_tip:
    'Lisätiedot käyttäjästä, joita ei ole ennalta määritetyissä ominaisuuksissa, kuten käyttäjän suosima väri ja kieli.',
  field_profile: 'Profiili',
  field_profile_tip:
    'OpenID Connectin vakioclaimit, joita ei ole käyttäjän ominaisuuksissa. Tuntemattomat ominaisuudet poistetaan. Katso lisätietoja <a>profiiliominaisuuksien viitteestä</a>.',
  field_connectors: 'Sosiaaliset yhteydet',
  field_sso_connectors: 'Yritysyhteydet',
  custom_data_invalid: 'Mukautettujen tietojen on oltava kelvollinen JSON-objekti',
  profile_invalid: 'Profiilin on oltava kelvollinen JSON-objekti',
  password_already_set: 'Salasana on jo asetettu',
  no_password_set: 'Salasanaa ei ole asetettu',
  connectors: {
    connectors: 'Liittimet',
    user_id: 'Käyttäjätunnus',
    remove: 'Poista',
    connected: 'Käyttäjä on yhdistetty useisiin sosiaalisiin liittimiin.',
    not_connected: 'Käyttäjää ei ole yhdistetty mihinkään sosiaaliseen liittimeen',
    deletion_confirmation:
      'Olet poistamassa olemassa olevaa identiteettiä <name/>. Haluatko varmasti jatkaa?',
  },
  sso_connectors: {
    connectors: 'Liittimet',
    enterprise_id: 'Yritystunnus',
    connected:
      'Käyttäjä on yhdistetty useisiin yritysten identiteetintarjoajiin kertakirjautumista varten.',
    not_connected:
      'Käyttäjää ei ole yhdistetty mihinkään yrityksen identiteetintarjoajaan kertakirjautumista varten.',
  },
  mfa: {
    field_name: 'Monivaiheinen todennus',
    field_description: 'Käyttäjä on ottanut käyttöön kaksivaiheisen vahvistuksen tekijöitä.',
    name_column: 'Monivaiheinen tekijä',
    field_description_empty:
      'Käyttäjä ei ole ottanut käyttöön kaksivaiheisen vahvistuksen tekijöitä.',
    deletion_confirmation:
      'Olet poistamassa kaksivaiheisen vahvistuksen tekijää <name/>. Haluatko varmasti jatkaa?',
  },
  passkey: {
    field_name: 'Pääsyavaimet',
    field_description_empty: 'Käyttäjä ei ole ottanut käyttöön kirjautumista pääsyavaimella.',
    deletion_confirmation:
      'Olet poistamassa pääsyavainkirjautumisen tekijää <name/>. Haluatko varmasti jatkaa?',
  },
  suspended: 'Jäädytetty',
  suspend_user: 'Jäädytä käyttäjä',
  suspend_user_reminder:
    'Haluatko varmasti jäädyttää tämän käyttäjän? Käyttäjä ei voi kirjautua sovellukseesi eikä saa uutta käyttötunnusta nykyisen vanhennuttua. Lisäksi kaikki käyttäjän API-pyynnöt epäonnistuvat.',
  suspend_action: 'Jäädytä',
  user_suspended: 'Käyttäjä on jäädytetty.',
  reactivate_user: 'Aktivoi käyttäjä uudelleen',
  reactivate_user_reminder:
    'Haluatko varmasti aktivoida tämän käyttäjän uudelleen? Käyttäjän kirjautumisyritykset sallitaan silloin taas.',
  reactivate_action: 'Aktivoi uudelleen',
  user_reactivated: 'Käyttäjä on aktivoitu uudelleen.',
  roles: {
    name_column: 'Käyttäjärooli',
    description_column: 'Kuvaus',
    assign_button: 'Määritä rooleja',
    delete_description:
      'Rooli poistetaan tältä käyttäjältä. Rooli itse säilyy, mutta sitä ei enää liitetä tähän käyttäjään.',
    deleted: '{{name}} on poistettu tältä käyttäjältä.',
    assign_title: 'Määritä rooleja käyttäjälle {{name}}',
    assign_subtitle: 'Etsi sopivia käyttäjärooleja nimellä, kuvauksella tai roolitunnuksella.',
    assign_role_field: 'Määritä rooleja',
    role_search_placeholder: 'Hae roolin nimellä',
    added_text: '{{value, number}} lisätty',
    assigned_user_count: '{{value, number}} käyttäjää',
    confirm_assign: 'Määritä roolit',
    role_assigned: 'Roolit määritetty',
    search: 'Hae roolin nimellä, kuvauksella tai tunnuksella',
    empty: 'Ei saatavilla olevia rooleja',
  },
  warning_no_sign_in_identifier:
    'Käyttäjällä on oltava vähintään yksi kirjautumistunniste (käyttäjänimi, sähköposti, puhelinnumero tai sosiaalinen tili) kirjautuakseen. Haluatko varmasti jatkaa?',
  personal_access_tokens: {
    title: 'Henkilökohtainen käyttötunnus',
    title_other: 'Henkilökohtaiset käyttötunnukset',
    title_short: 'tunnus',
    empty: 'Käyttäjällä ei ole henkilökohtaisia käyttötunnuksia.',
    create: 'Luo uusi tunnus',
    tip: 'Henkilökohtaiset käyttötunnukset (PAT) tarjoavat käyttäjille turvallisen tavan saada käyttötunnuksia ilman kirjautumistietoja ja vuorovaikutteista kirjautumista. Hyödyllinen CI/CD:ssä, skripteissä tai sovelluksissa, jotka tarvitsevat ohjelmallista pääsyä resursseihin.',
    value: 'Arvo',
    created_at: 'Luotu',
    expires_at: 'Vanhenee',
    never: 'Ei koskaan',
    create_new_token: 'Luo uusi tunnus',
    delete_confirmation: 'Toimintoa ei voi kumota. Haluatko varmasti poistaa tämän tunnuksen?',
    expired: 'Vanhentunut',
    expired_tooltip: 'Tämä tunnus vanheni {{date}}.',
    create_modal: {
      title: 'Luo henkilökohtainen käyttötunnus',
      expiration: 'Vanheneminen',
      expiration_description: 'Tunnus vanhenee {{date}}.',
      expiration_description_never:
        'Tunnus ei vanhene koskaan. Suosittelemme vanhenemispäivää paremman tietoturvan vuoksi.',
      days: '{{count}} päivä',
      days_other: '{{count}} päivää',
      created: 'Tunnus {{name}} on luotu.',
    },
    edit_modal: {
      title: 'Muokkaa henkilökohtaista käyttötunnusta',
      edited: 'Tunnusta {{name}} on muokattu.',
    },
  },
  sessions: {
    title: 'Istunnot',
    description:
      'Hallitse GetCertuksen valtuutuspalvelimen ylläpitämiä istuntoja. GetCertus-istunnon peruuttaminen täällä estää automaattisen suostumuksen tulevissa valtuutuspyynnöissä.',
    field_name: 'Istunnot',
    multiple_signed_in: 'Käyttäjä on kirjautunut useille laitteille tai selaimiin.',
    not_found:
      'Aktiivisia GetCertus-istuntoja ei löytynyt. Käyttäjä ei ole tällä hetkellä kirjautuneena millään laitteella.',
    name_column: 'Nimi',
    session_id_column: 'Istunnon tunnus',
    location_column: 'Sijainti',
    browser_on_os: '{{browser}} – {{os}}',
    user: 'Käyttäjä',
    applications: 'Sovellukset',
    signed_in_at: 'Viimeksi kirjautunut',
    ip: 'IP',
    browser_name: 'Selain',
    os_name: 'Käyttöjärjestelmä',
    device_model: 'Laitemalli',
    revoke_session: 'Peruuta istunto',
    revoke_session_confirmation:
      'Jos poistat tämän istunnon, käyttäjien on todennettava itsensä uudelleen.',
  },
  third_party_apps: {
    title: 'Kolmansien osapuolten sovellukset',
    description:
      'Käytä GetCertusta identiteetintarjoajana kolmansien osapuolten sovellusten valtuuttamiseen. Näytä ja hallitse sovelluksia, joille käyttäjä on antanut pääsyn.',
    field_name: 'Valtuutetut kolmansien osapuolten sovellukset',
    multiple_authorized:
      'Käyttäjä on valtuuttanut useita kolmansien osapuolten sovelluksia ja palveluja.',
    not_authorized:
      'Käyttäjä ei ole vielä valtuuttanut yhtään kolmannen osapuolen sovellusta tai palvelua.',
    name_column: 'Nimi',
    app_id_column: 'Sovelluksen tunnus',
    access_created_at_column: 'Pääsy luotu',
    revoke_access_title: 'Peruuta pääsy?',
    revoke_access_description:
      'Sovelluksen pääsy käyttäjän tiliin peruutetaan kaikilla laitteilla. Käyttäjän on valtuutettava uudelleen palauttaakseen pääsyn. Aiemmin myönnetyt käyttötunnukset voivat pysyä voimassa vanhenemiseensa asti.',
  },
  connections: {
    title: 'Yhteys',
    description:
      'Käyttäjä linkittää kolmansien osapuolten tilejä sosiaalista kirjautumista, yritys-SSO:ta tai resurssien käyttöä varten.',
    token_status_column: 'Tunnuksen tila',
    token_status: {
      active: 'Aktiivinen',
      expired: 'Vanhentunut',
      inactive: 'Ei aktiivinen',
      not_applicable: 'Ei sovellettavissa',
      available: 'Saatavilla',
      not_available: 'Ei saatavilla',
    },
  },
};

export default Object.freeze(user_details);
