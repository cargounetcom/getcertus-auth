/* GetCertus addition (MPL-2.0, see GETCERTUS.md): admin console phrases. */
const connector = {
  general: 'Liittimessä tapahtui virhe: {{errorDescription}}',
  not_found: 'Käytettävissä olevaa liitintä tyypille {{type}} ei löytynyt.',
  not_enabled: 'Liitin ei ole käytössä.',
  invalid_metadata: 'Liittimen metatiedot ovat virheelliset.',
  invalid_config_guard: 'Liittimen config guard on virheellinen.',
  unexpected_type: 'Liittimen tyyppi on odottamaton.',
  invalid_request_parameters: 'Pyynnössä on virheellisiä syöteparametreja.',
  insufficient_request_parameters: 'Pyynnöstä saattaa puuttua syöteparametreja.',
  invalid_config: 'Liittimen määritys on virheellinen.',
  invalid_certificate:
    'Liittimen varmenne on virheellinen; varmista, että varmenne on PEM-koodattu.',
  invalid_response: 'Liittimen vastaus on virheellinen.',
  template_not_found: 'Oikeaa mallia ei löytynyt liittimen määrityksestä.',
  template_not_supported: 'Liitin ei tue tätä mallityyppiä.',
  rate_limit_exceeded: 'Nopeusraja saavutettu. Yritä myöhemmin uudelleen.',
  usage_limit_exceeded: 'Sähköpostipalvelun käyttöraja on saavutettu.',
  not_implemented: '{{method}}: ei ole vielä toteutettu.',
  social_invalid_access_token: 'Liittimen käyttötunnus on virheellinen.',
  invalid_auth_code: 'Liittimen valtuutuskoodi on virheellinen.',
  social_invalid_id_token: 'Liittimen ID-token on virheellinen.',
  authorization_failed: 'Käyttäjän valtuutus epäonnistui.',
  social_auth_code_invalid: 'Käyttötunnusta ei saatu; tarkista valtuutuskoodi.',
  more_than_one_sms: 'Tekstiviestiliittimiä on enemmän kuin 1.',
  more_than_one_email: 'Sähköpostiliittimiä on enemmän kuin 1.',
  more_than_one_connector_factory:
    'Löytyi useita liitintehtaita (tunnuksilla {{connectorIds}}); voit poistaa tarpeettomat.',
  db_connector_type_mismatch: 'Tietokannassa on liitin, jonka tyyppi ei täsmää.',
  not_found_with_connector_id: 'Liitintä annetulla vakioliittimen tunnuksella ei löytynyt.',
  multiple_instances_not_supported: 'Valitusta vakioliittimestä ei voi luoda useita instansseja.',
  invalid_type_for_syncing_profile:
    'Käyttäjäprofiilin voi synkronoida vain sosiaalisilla liittimillä.',
  can_not_modify_target: "Liittimen 'target'-arvoa ei voi muuttaa.",
  should_specify_target: "Sinun on määritettävä 'target'.",
  multiple_target_with_same_platform:
    'Sinulla ei voi olla useita sosiaalisia liittimiä, joilla on sama target ja alusta.',
  cannot_overwrite_metadata_for_non_standard_connector:
    "Tämän liittimen 'metadata'-tietoja ei voi korvata.",
  email_connector: {
    bulk_deletion_no_filter:
      'Ominaisuuksiin perustuva joukkopoisto edellyttää vähintään yhtä suodatusehtoa. Tuetut ominaisuudet: {{properties, list(type:conjunction)}}.',
  },
  token_storage_not_supported: 'Tämä liitin ei tue tunnusten tallennusta. ',
};

export default Object.freeze(connector);
