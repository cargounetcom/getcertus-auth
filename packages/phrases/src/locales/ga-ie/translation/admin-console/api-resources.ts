/* GetCertus addition (MPL-2.0, see GETCERTUS.md): admin console phrases. */
const api_resources = {
  page_title: 'Acmhainní API',
  title: 'Acmhainní API',
  subtitle: "Sainmhínigh na APIanna is féidir le d'fheidhmchláir údaraithe a úsáid.",
  create: 'Cruthaigh acmhainn API',
  api_name: 'Ainm an API',
  api_name_placeholder: 'Cuir isteach ainm an API',
  api_identifier: 'Aitheantóir API',
  api_identifier_placeholder: 'https://your-api-identifier',
  api_identifier_tip:
    'Aitheantóir uathúil na hacmhainne API. Caithfidh sé a bheith ina URI absalóideach gan chuid blúire (#). Is ionann é agus an <a>paraiméadar resource</a> in OAuth 2.0.',
  default_api: 'API réamhshocraithe',
  default_api_label:
    'Ní féidir ach API réamhshocraithe amháin ar a mhéad a shocrú in aghaidh an tionónta.\nNuair a ainmnítear API réamhshocraithe, is féidir an paraiméadar resource a fhágáil ar lár san iarratas fíordheimhnithe. Úsáidfidh malartuithe comharthaí ina dhiaidh sin an API sin mar audience de réir réamhshocraithe, agus eiseofar JWTanna dá bharr. <a>Tuilleadh eolais</a>',
  api_resource_created: 'Cruthaíodh an acmhainn API {{name}}',
  invalid_resource_indicator_format:
    'Caithfidh an táscaire API a bheith ina URI absalóideach bailí.',
};

export default Object.freeze(api_resources);
