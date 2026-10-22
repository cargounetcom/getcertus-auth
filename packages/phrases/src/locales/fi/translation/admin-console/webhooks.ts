/* GetCertus addition (MPL-2.0, see GETCERTUS.md): admin console phrases. */
const webhooks = {
  page_title: 'Webhookit',
  title: 'Webhookit',
  subtitle: 'Luo webhookeja ja saa vaivatta reaaliaikaisia päivityksiä tietyistä tapahtumista.',
  create: 'Luo webhook',
  schemas: {
    interaction: 'Käyttäjän vuorovaikutus',
    user: 'Käyttäjä',
    trusted_device: 'Luotettu laite',
    organization: 'Organisaatio',
    role: 'Rooli',
    scope: 'Käyttöoikeus',
    organization_role: 'Organisaation rooli',
    organization_scope: 'Organisaation käyttöoikeus',
    security: 'Tietoturva',
  },
  table: {
    name: 'Nimi',
    events: 'Tapahtumat',
    success_rate: 'Onnistumisprosentti (24 h)',
    requests: 'Pyynnöt (24 h)',
  },
  placeholder: {
    title: 'Webhook',
    description:
      'Luo webhook ja saa reaaliaikaisia päivityksiä POST-pyyntöinä päätepisteesi URL-osoitteeseen. Pysy ajan tasalla ja reagoi heti tapahtumiin, kuten "Luo tili", "Kirjaudu sisään" ja "Nollaa salasana".',
    create_webhook: 'Luo webhook',
  },
  create_form: {
    title: 'Luo webhook',
    subtitle:
      'Lisää webhook, joka lähettää POST-pyynnön käyttäjätapahtumien tiedoilla päätepisteen URL-osoitteeseen.',
    events: 'Tapahtumat',
    events_description: 'Valitse tapahtumat, joiden yhteydessä GetCertus lähettää POST-pyynnön.',
    name: 'Nimi',
    name_placeholder: 'Anna webhookin nimi',
    endpoint_url: 'Päätepisteen URL',
    endpoint_url_placeholder: 'https://your.webhook.endpoint.url',
    endpoint_url_tip:
      'Anna sen päätepisteen URL-osoite, johon webhookin payload lähetetään tapahtuman sattuessa.',
    create_webhook: 'Luo webhook',
    missing_event_error: 'Valitse vähintään yksi tapahtuma.',
  },
  webhook_created: 'Webhook {{name}} on luotu.',
};

export default Object.freeze(webhooks);
