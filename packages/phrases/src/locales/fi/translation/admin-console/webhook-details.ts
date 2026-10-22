/* GetCertus addition (MPL-2.0, see GETCERTUS.md): admin console phrases. */
const webhook_details = {
  page_title: 'Webhookin tiedot',
  back_to_webhooks: 'Takaisin webhookeihin',
  not_in_use: 'Ei käytössä',
  success_rate: 'onnistumisprosentti',
  requests: '{{value, number}} pyyntöä 24 h:ssa',
  disable_webhook: 'Poista webhook käytöstä',
  disable_reminder:
    'Haluatko varmasti poistaa webhookin käytöstä? Sen jälkeen päätepisteen URL-osoitteeseen ei lähetetä HTTP-pyyntöjä.',
  webhook_disabled: 'Webhook on poistettu käytöstä.',
  webhook_reactivated: 'Webhook on otettu uudelleen käyttöön.',
  reactivate_webhook: 'Ota webhook uudelleen käyttöön',
  delete_webhook: 'Poista webhook',
  deletion_reminder:
    'Olet poistamassa tätä webhookia. Poiston jälkeen päätepisteen URL-osoitteeseen ei lähetetä HTTP-pyyntöjä.',
  deleted: 'Webhook on poistettu.',
  settings_tab: 'Asetukset',
  recent_requests_tab: 'Viimeisimmät pyynnöt (24 h)',
  settings: {
    settings: 'Asetukset',
    settings_description:
      'Webhookien avulla saat reaaliaikaisia päivityksiä tietyistä tapahtumista niiden sattuessa POST-pyyntönä päätepisteesi URL-osoitteeseen. Näin voit toimia heti uusien tietojen perusteella.',
    events: 'Tapahtumat',
    events_description: 'Valitse tapahtumat, joiden yhteydessä GetCertus lähettää POST-pyynnön.',
    name: 'Nimi',
    endpoint_url: 'Päätepisteen URL',
    signing_key: 'Allekirjoitusavain',
    signing_key_tip:
      'Lisää GetCertusin antama salainen avain päätepisteeseesi pyynnön otsakkeena varmistaaksesi, että webhookin payload on aito.',
    regenerate: 'Luo uudelleen',
    regenerate_key_title: 'Luo allekirjoitusavain uudelleen',
    regenerate_key_reminder:
      'Haluatko varmasti vaihtaa allekirjoitusavaimen? Uusi avain tulee voimaan heti. Muista päivittää avain samalla päätepisteeseesi.',
    regenerated: 'Allekirjoitusavain on luotu uudelleen.',
    custom_headers: 'Mukautetut otsakkeet',
    custom_headers_tip:
      'Voit halutessasi lisätä webhookin payloadiin mukautettuja otsakkeita, jotka antavat lisäkontekstia tai metatietoja tapahtumasta.',
    key_duplicated_error: 'Avain ei voi toistua.',
    key_missing_error: 'Avain vaaditaan.',
    value_missing_error: 'Arvo vaaditaan.',
    invalid_key_error: 'Virheellinen avain',
    invalid_value_error: 'Virheellinen arvo',
    test: 'Testaa',
    test_webhook: 'Testaa webhookia',
    test_webhook_description:
      'Määritä webhook ja testaa sitä esimerkkipayloadeilla jokaiselle valitulle tapahtumalle varmistaaksesi, että ne vastaanotetaan ja käsitellään oikein.',
    send_test_payload: 'Lähetä testipayload',
    test_result: {
      endpoint_url: 'Päätepisteen URL: {{url}}',
      message: 'Viesti: {{message}}',
      response_status: 'Vastauksen tila: {{status, number}}',
      response_body: 'Vastauksen sisältö: {{body}}',
      request_time: 'Pyynnön aika: {{time}}',
      test_success: 'Webhook-testi päätepisteeseen onnistui.',
    },
  },
};

export default Object.freeze(webhook_details);
