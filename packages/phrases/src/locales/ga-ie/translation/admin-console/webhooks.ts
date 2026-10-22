/* GetCertus addition (MPL-2.0, see GETCERTUS.md): admin console phrases. */
const webhooks = {
  page_title: 'Webhooks',
  title: 'Webhooks',
  subtitle:
    'Cruthaigh webhooks chun nuashonruithe fíor-ama a fháil go héasca faoi imeachtaí áirithe.',
  create: 'Cruthaigh webhook',
  schemas: {
    interaction: 'Idirghníomhú úsáideora',
    user: 'Úsáideoir',
    trusted_device: 'Gléas iontaofa',
    organization: 'Eagraíocht',
    role: 'Ról',
    scope: 'Cead',
    organization_role: 'Ról eagraíochta',
    organization_scope: 'Cead eagraíochta',
    security: 'Slándáil',
  },
  table: {
    name: 'Ainm',
    events: 'Imeachtaí',
    success_rate: 'Ráta ratha (24 u)',
    requests: 'Iarratais (24 u)',
  },
  placeholder: {
    title: 'Webhook',
    description:
      'Cruthaigh webhook chun nuashonruithe fíor-ama a fháil trí iarratais POST chuig URL do chríochphointe. Coinnigh ar an eolas agus freagair láithreach d\'imeachtaí ar nós "Cruthaigh cuntas", "Sínigh isteach" agus "Athshocraigh pasfhocal".',
    create_webhook: 'Cruthaigh webhook',
  },
  create_form: {
    title: 'Cruthaigh webhook',
    subtitle:
      'Cuir an webhook leis chun iarratas POST le sonraí imeachtaí úsáideora a sheoladh chuig URL an chríochphointe.',
    events: 'Imeachtaí',
    events_description:
      'Roghnaigh na himeachtaí a seolfaidh GetCertus an t-iarratas POST ina leith.',
    name: 'Ainm',
    name_placeholder: 'Cuir isteach ainm an webhook',
    endpoint_url: 'URL an chríochphointe',
    endpoint_url_placeholder: 'https://your.webhook.endpoint.url',
    endpoint_url_tip:
      'Cuir isteach URL an chríochphointe a seolfar payload an webhook chuige nuair a tharlaíonn an imeacht.',
    create_webhook: 'Cruthaigh webhook',
    missing_event_error: 'Caithfidh tú imeacht amháin ar a laghad a roghnú.',
  },
  webhook_created: 'Cruthaíodh an webhook {{name}}.',
};

export default Object.freeze(webhooks);
