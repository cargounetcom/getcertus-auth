/* GetCertus addition (MPL-2.0, see GETCERTUS.md): admin console phrases. */
const webhooks = {
  page_title: 'Webhooks',
  title: 'Webhooks',
  subtitle:
    'Maak webhooks om moeiteloos realtime updates over bepaalde gebeurtenissen te ontvangen.',
  create: 'Webhook maken',
  schemas: {
    interaction: 'Gebruikersinteractie',
    user: 'Gebruiker',
    trusted_device: 'Vertrouwd apparaat',
    organization: 'Organisatie',
    role: 'Rol',
    scope: 'Recht',
    organization_role: 'Organisatierol',
    organization_scope: 'Organisatierecht',
    security: 'Beveiliging',
  },
  table: {
    name: 'Naam',
    events: 'Gebeurtenissen',
    success_rate: 'Slagingspercentage (24 u)',
    requests: 'Verzoeken (24 u)',
  },
  placeholder: {
    title: 'Webhook',
    description:
      'Maak een webhook om realtime updates te ontvangen via POST-verzoeken naar je endpoint-URL. Blijf op de hoogte en reageer direct op gebeurtenissen als "Account aanmaken", "Inloggen" en "Wachtwoord opnieuw instellen".',
    create_webhook: 'Webhook maken',
  },
  create_form: {
    title: 'Webhook maken',
    subtitle:
      'Voeg de webhook toe om een POST-verzoek met details over gebruikersgebeurtenissen naar de endpoint-URL te sturen.',
    events: 'Gebeurtenissen',
    events_description: 'Kies de gebeurtenissen waarbij GetCertus het POST-verzoek verstuurt.',
    name: 'Naam',
    name_placeholder: 'Voer de naam van de webhook in',
    endpoint_url: 'Endpoint-URL',
    endpoint_url_placeholder: 'https://your.webhook.endpoint.url',
    endpoint_url_tip:
      'Voer de URL in van het endpoint waarnaar de payload van de webhook wordt gestuurd als de gebeurtenis plaatsvindt.',
    create_webhook: 'Webhook maken',
    missing_event_error: 'Je moet minstens één gebeurtenis kiezen.',
  },
  webhook_created: 'De webhook {{name}} is aangemaakt.',
};

export default Object.freeze(webhooks);
