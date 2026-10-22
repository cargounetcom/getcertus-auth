/* GetCertus addition (MPL-2.0, see GETCERTUS.md): admin console phrases. */
const api_resources = {
  page_title: 'API-resources',
  title: 'API-resources',
  subtitle: "Definieer API's die je geautoriseerde applicaties kunnen gebruiken.",
  create: 'API-resource maken',
  api_name: 'API-naam',
  api_name_placeholder: 'Voer de naam van je API in',
  api_identifier: 'API-identifier',
  api_identifier_placeholder: 'https://your-api-identifier',
  api_identifier_tip:
    'De unieke identifier van de API-resource. Dit moet een absolute URI zijn zonder fragment (#). Gelijk aan de <a>resource-parameter</a> in OAuth 2.0.',
  default_api: 'Standaard-API',
  default_api_label:
    "Per tenant kan nul of één standaard-API worden ingesteld.\nAls er een standaard-API is, kan de resource-parameter in het auth-verzoek worden weggelaten. Volgende token-uitwisselingen gebruiken die API dan standaard als audience, waardoor JWT's worden uitgegeven. <a>Meer informatie</a>",
  api_resource_created: 'De API-resource {{name}} is aangemaakt',
  invalid_resource_indicator_format: 'De API-indicator moet een geldige absolute URI zijn.',
};

export default Object.freeze(api_resources);
