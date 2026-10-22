/* GetCertus addition (MPL-2.0, see GETCERTUS.md): admin console phrases. */
const webhooks = {
  page_title: 'Webhooks',
  title: 'Webhooks',
  subtitle: 'Opret webhooks for nemt at modtage opdateringer i realtid om bestemte hændelser.',
  create: 'Opret webhook',
  schemas: {
    interaction: 'Brugerinteraktion',
    user: 'Bruger',
    trusted_device: 'Betroet enhed',
    organization: 'Organisation',
    role: 'Rolle',
    scope: 'Tilladelse',
    organization_role: 'Organisationsrolle',
    organization_scope: 'Organisationstilladelse',
    security: 'Sikkerhed',
  },
  table: {
    name: 'Navn',
    events: 'Hændelser',
    success_rate: 'Succesrate (24 t)',
    requests: 'Anmodninger (24 t)',
  },
  placeholder: {
    title: 'Webhook',
    description:
      'Opret en webhook for at modtage opdateringer i realtid via POST-anmodninger til din endpoint-URL. Hold dig orienteret, og reagér straks på hændelser som "Opret konto", "Log ind" og "Nulstil adgangskode".',
    create_webhook: 'Opret webhook',
  },
  create_form: {
    title: 'Opret webhook',
    subtitle:
      "Tilføj webhooken for at sende en POST-anmodning med detaljer om brugerhændelser til endpoint-URL'en.",
    events: 'Hændelser',
    events_description: 'Vælg de hændelser, hvor GetCertus sender POST-anmodningen.',
    name: 'Navn',
    name_placeholder: 'Indtast webhookens navn',
    endpoint_url: 'Endpoint-URL',
    endpoint_url_placeholder: 'https://your.webhook.endpoint.url',
    endpoint_url_tip:
      "Indtast URL'en til det endpoint, som webhookens payload sendes til, når hændelsen sker.",
    create_webhook: 'Opret webhook',
    missing_event_error: 'Du skal vælge mindst én hændelse.',
  },
  webhook_created: 'Webhooken {{name}} er oprettet.',
};

export default Object.freeze(webhooks);
