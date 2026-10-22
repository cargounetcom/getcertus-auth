/* GetCertus addition (MPL-2.0, see GETCERTUS.md): admin console phrases. */
const api_resource_details = {
  page_title: 'Detalii resursă API',
  back_to_api_resources: 'Înapoi la resursele API',
  general_tab: 'General',
  permissions_tab: 'Permisiuni',
  settings: 'Setări',
  settings_description:
    'Resursele API, numite și Resource Indicators, indică serviciile sau resursele țintă solicitate, de obicei o variabilă în format URI care reprezintă identitatea resursei.',
  management_api_settings_description:
    'GetCertus Management API este o colecție completă de API-uri care le permite administratorilor să gestioneze numeroase sarcini legate de identitate, să aplice politici de securitate și să respecte reglementări și standarde.',
  management_api_notice:
    'Acest API reprezintă o entitate GetCertus și nu poate fi modificat sau șters. Creați o aplicație machine-to-machine pentru a apela GetCertus Management API. <a>Aflați mai multe</a>',
  token_expiration_time_in_seconds: 'Timp de expirare a tokenului (în secunde)',
  token_expiration_time_in_seconds_placeholder: 'Introduceți timpul de expirare a tokenului',
  delete_description:
    'Această acțiune nu poate fi anulată. Resursa API va fi ștearsă definitiv. Introduceți numele resursei API <span>{{name}}</span> pentru a confirma.',
  enter_your_api_resource_name: 'Introduceți numele resursei API',
  api_resource_deleted: 'Resursa API {{name}} a fost ștearsă',
  permission: {
    create_button: 'Creați permisiune',
    create_title: 'Creați permisiune',
    create_subtitle: 'Definiți permisiunile (scopes) necesare acestui API.',
    confirm_create: 'Creați permisiune',
    edit_title: 'Editați permisiunea API',
    edit_subtitle: 'Definiți permisiunile (scopes) necesare API-ului {{resourceName}}.',
    name: 'Numele permisiunii',
    name_placeholder: 'read:resource',
    forbidden_space_in_name: 'Numele permisiunii nu poate conține spații.',
    description: 'Descriere',
    description_placeholder: 'Poate citi resursele',
    permission_created: 'Permisiunea {{name}} a fost creată',
    delete_description:
      'Dacă această permisiune este ștearsă, utilizatorii care o aveau vor pierde accesul acordat de ea.',
    deleted: 'Permisiunea "{{name}}" a fost ștearsă.',
  },
};

export default Object.freeze(api_resource_details);
