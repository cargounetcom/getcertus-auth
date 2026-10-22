/* GetCertus addition (MPL-2.0, see GETCERTUS.md): admin console phrases. */
const api_resources = {
  page_title: 'Resurse API',
  title: 'Resurse API',
  subtitle: 'Definiți API-urile pe care le pot folosi aplicațiile autorizate.',
  create: 'Creați resursă API',
  api_name: 'Nume API',
  api_name_placeholder: 'Introduceți numele API-ului',
  api_identifier: 'Identificator API',
  api_identifier_placeholder: 'https://your-api-identifier',
  api_identifier_tip:
    'Identificatorul unic al resursei API. Trebuie să fie un URI absolut, fără fragment (#). Echivalent cu <a>parametrul resource</a> din OAuth 2.0.',
  default_api: 'API implicit',
  default_api_label:
    'Pentru fiecare tenant se poate seta cel mult un API implicit.\nCând este desemnat un API implicit, parametrul resource poate lipsi din cererea de autentificare. Schimburile de token ulterioare vor folosi implicit acel API ca audience, ceea ce duce la emiterea de JWT-uri. <a>Aflați mai multe</a>',
  api_resource_created: 'Resursa API {{name}} a fost creată',
  invalid_resource_indicator_format: 'Indicatorul API trebuie să fie un URI absolut valid.',
};

export default Object.freeze(api_resources);
