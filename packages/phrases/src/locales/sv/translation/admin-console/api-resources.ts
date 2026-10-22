/* GetCertus addition (MPL-2.0, see GETCERTUS.md): admin console phrases. */
const api_resources = {
  page_title: 'API-resurser',
  title: 'API-resurser',
  subtitle: 'Definiera API:er som dina auktoriserade applikationer kan använda.',
  create: 'Skapa API-resurs',
  api_name: 'API-namn',
  api_name_placeholder: 'Ange namnet på ditt API',
  api_identifier: 'API-identifierare',
  api_identifier_placeholder: 'https://your-api-identifier',
  api_identifier_tip:
    'Den unika identifieraren för API-resursen. Den måste vara en absolut URI utan fragment (#). Motsvarar <a>resource-parametern</a> i OAuth 2.0.',
  default_api: 'Standard-API',
  default_api_label:
    'Högst ett standard-API kan anges per tenant.\nNär ett standard-API är angivet kan resource-parametern utelämnas i auth-begäran. Efterföljande tokenutbyten använder då det API:et som audience som standard, vilket ger utfärdade JWT:er. <a>Läs mer</a>',
  api_resource_created: 'API-resursen {{name}} har skapats',
  invalid_resource_indicator_format: 'API-indikatorn måste vara en giltig absolut URI.',
};

export default Object.freeze(api_resources);
