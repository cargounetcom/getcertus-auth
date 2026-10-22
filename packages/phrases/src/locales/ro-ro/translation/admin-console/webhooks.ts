/* GetCertus addition (MPL-2.0, see GETCERTUS.md): admin console phrases. */
const webhooks = {
  page_title: 'Webhook-uri',
  title: 'Webhook-uri',
  subtitle:
    'Creează webhook-uri pentru a primi fără efort actualizări în timp real despre anumite evenimente.',
  create: 'Creează webhook',
  schemas: {
    interaction: 'Interacțiunea utilizatorului',
    user: 'Utilizator',
    trusted_device: 'Dispozitiv de încredere',
    organization: 'Organizație',
    role: 'Rol',
    scope: 'Permisiune',
    organization_role: 'Rol în organizație',
    organization_scope: 'Permisiune în organizație',
    security: 'Securitate',
  },
  table: {
    name: 'Nume',
    events: 'Evenimente',
    success_rate: 'Rată de succes (24 h)',
    requests: 'Cereri (24 h)',
  },
  placeholder: {
    title: 'Webhook',
    description:
      'Creează un webhook pentru a primi actualizări în timp real prin cereri POST către URL-ul endpoint-ului tău. Rămâi la curent și reacționează imediat la evenimente precum "Creare cont", "Autentificare" și "Resetare parolă".',
    create_webhook: 'Creează webhook',
  },
  create_form: {
    title: 'Creează webhook',
    subtitle:
      'Adaugă webhook-ul pentru a trimite o cerere POST cu detaliile evenimentelor utilizatorilor către URL-ul endpoint-ului.',
    events: 'Evenimente',
    events_description: 'Alege evenimentele la care GetCertus trimite cererea POST.',
    name: 'Nume',
    name_placeholder: 'Introdu numele webhook-ului',
    endpoint_url: 'URL endpoint',
    endpoint_url_placeholder: 'https://your.webhook.endpoint.url',
    endpoint_url_tip:
      'Introdu URL-ul endpoint-ului către care se trimite payload-ul webhook-ului când are loc evenimentul.',
    create_webhook: 'Creează webhook',
    missing_event_error: 'Trebuie să alegi cel puțin un eveniment.',
  },
  webhook_created: 'Webhook-ul {{name}} a fost creat.',
};

export default Object.freeze(webhooks);
