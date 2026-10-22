/* GetCertus addition (MPL-2.0, see GETCERTUS.md): admin console phrases. */
const webhooks = {
  page_title: 'Webhooks',
  title: 'Webhooks',
  subtitle: 'Skapa webhooks för att enkelt få uppdateringar i realtid om specifika händelser.',
  create: 'Skapa webhook',
  schemas: {
    interaction: 'Användarinteraktion',
    user: 'Användare',
    trusted_device: 'Betrodd enhet',
    organization: 'Organisation',
    role: 'Roll',
    scope: 'Behörighet',
    organization_role: 'Organisationsroll',
    organization_scope: 'Organisationsbehörighet',
    security: 'Säkerhet',
  },
  table: {
    name: 'Namn',
    events: 'Händelser',
    success_rate: 'Lyckandegrad (24 h)',
    requests: 'Förfrågningar (24 h)',
  },
  placeholder: {
    title: 'Webhook',
    description:
      'Skapa en webhook för att få uppdateringar i realtid via POST-förfrågningar till din slutpunkts-URL. Håll dig informerad och agera direkt på händelser som "Skapa konto", "Logga in" och "Återställ lösenord".',
    create_webhook: 'Skapa webhook',
  },
  create_form: {
    title: 'Skapa webhook',
    subtitle:
      'Lägg till webhooken för att skicka en POST-förfrågan med detaljer om användarhändelser till slutpunkts-URL:en.',
    events: 'Händelser',
    events_description: 'Välj de händelser då GetCertus skickar POST-förfrågan.',
    name: 'Namn',
    name_placeholder: 'Ange webhookens namn',
    endpoint_url: 'Slutpunkts-URL',
    endpoint_url_placeholder: 'https://your.webhook.endpoint.url',
    endpoint_url_tip:
      'Ange URL:en till slutpunkten som webhookens payload skickas till när händelsen inträffar.',
    create_webhook: 'Skapa webhook',
    missing_event_error: 'Du måste välja minst en händelse.',
  },
  webhook_created: 'Webhooken {{name}} har skapats.',
};

export default Object.freeze(webhooks);
