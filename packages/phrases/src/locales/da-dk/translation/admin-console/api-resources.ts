/* GetCertus addition (MPL-2.0, see GETCERTUS.md): admin console phrases. */
const api_resources = {
  page_title: 'API-ressourcer',
  title: 'API-ressourcer',
  subtitle: "Definér API'er, som dine autoriserede applikationer kan bruge.",
  create: 'Opret API-ressource',
  api_name: 'API-navn',
  api_name_placeholder: 'Indtast navnet på dit API',
  api_identifier: 'API-identifikator',
  api_identifier_placeholder: 'https://your-api-identifier',
  api_identifier_tip:
    'Den unikke identifikator for API-ressourcen. Den skal være en absolut URI uden fragment (#). Svarer til <a>resource-parameteren</a> i OAuth 2.0.',
  default_api: 'Standard-API',
  default_api_label:
    "Der kan højst angives ét standard-API pr. tenant.\nNår et standard-API er angivet, kan resource-parameteren udelades i auth-anmodningen. Efterfølgende tokenudvekslinger bruger så det API som audience som standard, hvilket giver udstedte JWT'er. <a>Læs mere</a>",
  api_resource_created: 'API-ressourcen {{name}} er oprettet',
  invalid_resource_indicator_format: 'API-indikatoren skal være en gyldig absolut URI.',
};

export default Object.freeze(api_resources);
