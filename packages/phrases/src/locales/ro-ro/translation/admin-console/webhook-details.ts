/* GetCertus addition (MPL-2.0, see GETCERTUS.md): admin console phrases. */
const webhook_details = {
  page_title: 'Detalii webhook',
  back_to_webhooks: 'Înapoi la webhook-uri',
  not_in_use: 'Neutilizat',
  success_rate: 'rată de succes',
  requests: '{{value, number}} cereri în 24 h',
  disable_webhook: 'Dezactivează webhook-ul',
  disable_reminder:
    'Sigur vrei să dezactivezi webhook-ul? După dezactivare, nu se vor mai trimite cereri HTTP către URL-ul endpoint-ului.',
  webhook_disabled: 'Webhook-ul a fost dezactivat.',
  webhook_reactivated: 'Webhook-ul a fost reactivat.',
  reactivate_webhook: 'Reactivează webhook-ul',
  delete_webhook: 'Șterge webhook-ul',
  deletion_reminder:
    'Ștergi acest webhook. După ștergere, nu se vor mai trimite cereri HTTP către URL-ul endpoint-ului.',
  deleted: 'Webhook-ul a fost șters.',
  settings_tab: 'Setări',
  recent_requests_tab: 'Cereri recente (24 h)',
  settings: {
    settings: 'Setări',
    settings_description:
      'Webhook-urile îți trimit actualizări în timp real despre anumite evenimente, în momentul în care au loc, printr-o cerere POST către URL-ul endpoint-ului. Astfel poți acționa imediat pe baza noilor informații.',
    events: 'Evenimente',
    events_description: 'Alege evenimentele la care GetCertus trimite cererea POST.',
    name: 'Nume',
    endpoint_url: 'URL endpoint',
    signing_key: 'Cheie de semnare',
    signing_key_tip:
      'Adaugă cheia secretă furnizată de GetCertus în endpoint ca header al cererii, pentru a garanta autenticitatea payload-ului webhook-ului.',
    regenerate: 'Regenerează',
    regenerate_key_title: 'Regenerează cheia de semnare',
    regenerate_key_reminder:
      'Sigur vrei să modifici cheia de semnare? Noua cheie intră în vigoare imediat. Nu uita să actualizezi cheia și în endpoint.',
    regenerated: 'Cheia de semnare a fost regenerată.',
    custom_headers: 'Headere personalizate',
    custom_headers_tip:
      'Opțional, poți adăuga headere personalizate la payload-ul webhook-ului pentru context sau metadate suplimentare despre eveniment.',
    key_duplicated_error: 'Cheia nu se poate repeta.',
    key_missing_error: 'Cheia este obligatorie.',
    value_missing_error: 'Valoarea este obligatorie.',
    invalid_key_error: 'Cheie nevalidă',
    invalid_value_error: 'Valoare nevalidă',
    test: 'Testează',
    test_webhook: 'Testează webhook-ul',
    test_webhook_description:
      'Configurează webhook-ul și testează-l cu payload-uri de exemplu pentru fiecare eveniment ales, ca să verifici că sunt primite și procesate corect.',
    send_test_payload: 'Trimite payload de test',
    test_result: {
      endpoint_url: 'URL endpoint: {{url}}',
      message: 'Mesaj: {{message}}',
      response_status: 'Stare răspuns: {{status, number}}',
      response_body: 'Corp răspuns: {{body}}',
      request_time: 'Ora cererii: {{time}}',
      test_success: 'Testul webhook-ului către endpoint a reușit.',
    },
  },
};

export default Object.freeze(webhook_details);
