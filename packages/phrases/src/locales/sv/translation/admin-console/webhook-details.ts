/* GetCertus addition (MPL-2.0, see GETCERTUS.md): admin console phrases. */
const webhook_details = {
  page_title: 'Detaljer för webhook',
  back_to_webhooks: 'Tillbaka till webhooks',
  not_in_use: 'Används inte',
  success_rate: 'lyckandegrad',
  requests: '{{value, number}} förfrågningar på 24 h',
  disable_webhook: 'Inaktivera webhook',
  disable_reminder:
    'Vill du verkligen inaktivera webhooken? Då skickas inga HTTP-förfrågningar till slutpunkts-URL:en.',
  webhook_disabled: 'Webhooken har inaktiverats.',
  webhook_reactivated: 'Webhooken har återaktiverats.',
  reactivate_webhook: 'Återaktivera webhook',
  delete_webhook: 'Ta bort webhook',
  deletion_reminder:
    'Du tar bort webhooken. Efter borttagningen skickas inga HTTP-förfrågningar till slutpunkts-URL:en.',
  deleted: 'Webhooken har tagits bort.',
  settings_tab: 'Inställningar',
  recent_requests_tab: 'Senaste förfrågningar (24 h)',
  settings: {
    settings: 'Inställningar',
    settings_description:
      'Med webhooks får du uppdateringar i realtid om specifika händelser när de sker, genom en POST-förfrågan till din slutpunkts-URL. Det gör att du kan agera direkt utifrån den nya informationen.',
    events: 'Händelser',
    events_description: 'Välj de händelser då GetCertus skickar POST-förfrågan.',
    name: 'Namn',
    endpoint_url: 'Slutpunkts-URL',
    signing_key: 'Signeringsnyckel',
    signing_key_tip:
      'Lägg till den hemliga nyckeln från GetCertus i din slutpunkt som request-header för att säkerställa att webhookens payload är äkta.',
    regenerate: 'Generera om',
    regenerate_key_title: 'Generera om signeringsnyckel',
    regenerate_key_reminder:
      'Vill du verkligen ändra signeringsnyckeln? Den nya nyckeln gäller direkt. Kom ihåg att samtidigt uppdatera nyckeln i din slutpunkt.',
    regenerated: 'Signeringsnyckeln har genererats om.',
    custom_headers: 'Anpassade headers',
    custom_headers_tip:
      'Du kan valfritt lägga till anpassade headers i webhookens payload för ytterligare sammanhang eller metadata om händelsen.',
    key_duplicated_error: 'En nyckel får inte upprepas.',
    key_missing_error: 'Nyckel krävs.',
    value_missing_error: 'Värde krävs.',
    invalid_key_error: 'Ogiltig nyckel',
    invalid_value_error: 'Ogiltigt värde',
    test: 'Testa',
    test_webhook: 'Testa din webhook',
    test_webhook_description:
      'Konfigurera webhooken och testa den med exempel-payloads för varje vald händelse för att kontrollera att de tas emot och hanteras korrekt.',
    send_test_payload: 'Skicka test-payload',
    test_result: {
      endpoint_url: 'Slutpunkts-URL: {{url}}',
      message: 'Meddelande: {{message}}',
      response_status: 'Svarsstatus: {{status, number}}',
      response_body: 'Svarsinnehåll: {{body}}',
      request_time: 'Tid för förfrågan: {{time}}',
      test_success: 'Webhooktestet mot slutpunkten lyckades.',
    },
  },
};

export default Object.freeze(webhook_details);
