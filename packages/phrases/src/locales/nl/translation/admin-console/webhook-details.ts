/* GetCertus addition (MPL-2.0, see GETCERTUS.md): admin console phrases. */
const webhook_details = {
  page_title: 'Details webhook',
  back_to_webhooks: 'Terug naar webhooks',
  not_in_use: 'Niet in gebruik',
  success_rate: 'slagingspercentage',
  requests: '{{value, number}} verzoeken in 24 u',
  disable_webhook: 'Webhook uitschakelen',
  disable_reminder:
    'Weet je zeker dat je deze webhook wilt uitschakelen? Er worden dan geen HTTP-verzoeken meer naar de endpoint-URL gestuurd.',
  webhook_disabled: 'De webhook is uitgeschakeld.',
  webhook_reactivated: 'De webhook is weer ingeschakeld.',
  reactivate_webhook: 'Webhook weer inschakelen',
  delete_webhook: 'Webhook verwijderen',
  deletion_reminder:
    'Je verwijdert deze webhook. Daarna worden er geen HTTP-verzoeken meer naar de endpoint-URL gestuurd.',
  deleted: 'De webhook is verwijderd.',
  settings_tab: 'Instellingen',
  recent_requests_tab: 'Recente verzoeken (24 u)',
  settings: {
    settings: 'Instellingen',
    settings_description:
      'Met webhooks ontvang je realtime updates over bepaalde gebeurtenissen zodra ze plaatsvinden, via een POST-verzoek naar je endpoint-URL. Zo kun je direct handelen op basis van de nieuwe informatie.',
    events: 'Gebeurtenissen',
    events_description: 'Kies de gebeurtenissen waarbij GetCertus het POST-verzoek verstuurt.',
    name: 'Naam',
    endpoint_url: 'Endpoint-URL',
    signing_key: 'Ondertekeningssleutel',
    signing_key_tip:
      'Voeg de geheime sleutel van GetCertus als request-header toe aan je endpoint om de echtheid van de payload van de webhook te garanderen.',
    regenerate: 'Opnieuw genereren',
    regenerate_key_title: 'Ondertekeningssleutel opnieuw genereren',
    regenerate_key_reminder:
      'Weet je zeker dat je de ondertekeningssleutel wilt wijzigen? Een nieuwe sleutel werkt direct. Vergeet niet de sleutel tegelijk in je endpoint aan te passen.',
    regenerated: 'De ondertekeningssleutel is opnieuw gegenereerd.',
    custom_headers: 'Aangepaste headers',
    custom_headers_tip:
      'Je kunt optioneel aangepaste headers aan de payload van de webhook toevoegen voor extra context of metadata over de gebeurtenis.',
    key_duplicated_error: 'Een sleutel mag niet dubbel voorkomen.',
    key_missing_error: 'Een sleutel is vereist.',
    value_missing_error: 'Een waarde is vereist.',
    invalid_key_error: 'Ongeldige sleutel',
    invalid_value_error: 'Ongeldige waarde',
    test: 'Testen',
    test_webhook: 'Test je webhook',
    test_webhook_description:
      'Configureer de webhook en test hem met voorbeeldpayloads voor elke gekozen gebeurtenis om te controleren of ze goed worden ontvangen en verwerkt.',
    send_test_payload: 'Testpayload versturen',
    test_result: {
      endpoint_url: 'Endpoint-URL: {{url}}',
      message: 'Bericht: {{message}}',
      response_status: 'Responsstatus: {{status, number}}',
      response_body: 'Responsbody: {{body}}',
      request_time: 'Verzoektijd: {{time}}',
      test_success: 'De webhooktest naar het endpoint is geslaagd.',
    },
  },
};

export default Object.freeze(webhook_details);
