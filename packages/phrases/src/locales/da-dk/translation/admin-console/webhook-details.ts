/* GetCertus addition (MPL-2.0, see GETCERTUS.md): admin console phrases. */
const webhook_details = {
  page_title: 'Detaljer for webhook',
  back_to_webhooks: 'Tilbage til webhooks',
  not_in_use: 'Ikke i brug',
  success_rate: 'succesrate',
  requests: '{{value, number}} anmodninger på 24 t',
  disable_webhook: 'Deaktivér webhook',
  disable_reminder:
    "Er du sikker på, at du vil deaktivere webhooken? Så sendes der ikke længere HTTP-anmodninger til endpoint-URL'en.",
  webhook_disabled: 'Webhooken er deaktiveret.',
  webhook_reactivated: 'Webhooken er genaktiveret.',
  reactivate_webhook: 'Genaktivér webhook',
  delete_webhook: 'Slet webhook',
  deletion_reminder:
    "Du fjerner denne webhook. Efter sletning sendes der ikke længere HTTP-anmodninger til endpoint-URL'en.",
  deleted: 'Webhooken er slettet.',
  settings_tab: 'Indstillinger',
  recent_requests_tab: 'Seneste anmodninger (24 t)',
  settings: {
    settings: 'Indstillinger',
    settings_description:
      'Med webhooks modtager du opdateringer i realtid om bestemte hændelser, når de sker, via en POST-anmodning til din endpoint-URL. Så kan du handle med det samme på baggrund af de nye oplysninger.',
    events: 'Hændelser',
    events_description: 'Vælg de hændelser, hvor GetCertus sender POST-anmodningen.',
    name: 'Navn',
    endpoint_url: 'Endpoint-URL',
    signing_key: 'Signeringsnøgle',
    signing_key_tip:
      'Tilføj den hemmelige nøgle fra GetCertus til dit endpoint som request-header for at sikre, at webhookens payload er ægte.',
    regenerate: 'Generér igen',
    regenerate_key_title: 'Generér signeringsnøgle igen',
    regenerate_key_reminder:
      'Er du sikker på, at du vil ændre signeringsnøglen? Den nye nøgle træder i kraft med det samme. Husk samtidig at opdatere nøglen i dit endpoint.',
    regenerated: 'Signeringsnøglen er genereret igen.',
    custom_headers: 'Brugerdefinerede headers',
    custom_headers_tip:
      'Du kan valgfrit tilføje brugerdefinerede headers til webhookens payload for at give ekstra kontekst eller metadata om hændelsen.',
    key_duplicated_error: 'En nøgle må ikke gentages.',
    key_missing_error: 'Nøgle er påkrævet.',
    value_missing_error: 'Værdi er påkrævet.',
    invalid_key_error: 'Ugyldig nøgle',
    invalid_value_error: 'Ugyldig værdi',
    test: 'Test',
    test_webhook: 'Test din webhook',
    test_webhook_description:
      'Konfigurér webhooken, og test den med eksempel-payloads for hver valgt hændelse for at kontrollere, at de modtages og behandles korrekt.',
    send_test_payload: 'Send test-payload',
    test_result: {
      endpoint_url: 'Endpoint-URL: {{url}}',
      message: 'Besked: {{message}}',
      response_status: 'Svarstatus: {{status, number}}',
      response_body: 'Svarindhold: {{body}}',
      request_time: 'Anmodningstidspunkt: {{time}}',
      test_success: 'Webhooktesten mod endpointet lykkedes.',
    },
  },
};

export default Object.freeze(webhook_details);
