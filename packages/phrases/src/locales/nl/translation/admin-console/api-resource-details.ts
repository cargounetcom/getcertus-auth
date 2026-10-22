/* GetCertus addition (MPL-2.0, see GETCERTUS.md): admin console phrases. */
const api_resource_details = {
  page_title: 'Details API-resource',
  back_to_api_resources: 'Terug naar API-resources',
  general_tab: 'Algemeen',
  permissions_tab: 'Rechten',
  settings: 'Instellingen',
  settings_description:
    'API-resources, ook wel Resource Indicators genoemd, geven de doelservices of -resources aan die worden aangevraagd, meestal een variabele in URI-formaat die de identiteit van de resource weergeeft.',
  management_api_settings_description:
    "De GetCertus Management API is een uitgebreide verzameling API's waarmee beheerders allerlei identiteitstaken kunnen beheren, beveiligingsbeleid kunnen afdwingen en aan regels en standaarden kunnen voldoen.",
  management_api_notice:
    'Deze API vertegenwoordigt een GetCertus-entiteit en kan niet worden gewijzigd of verwijderd. Maak een machine-to-machine-app om de GetCertus Management API aan te roepen. <a>Meer informatie</a>',
  token_expiration_time_in_seconds: 'Verlooptijd van token (in seconden)',
  token_expiration_time_in_seconds_placeholder: 'Voer de verlooptijd van het token in',
  delete_description:
    'Deze actie kan niet ongedaan worden gemaakt. De API-resource wordt definitief verwijderd. Voer de naam van de API-resource <span>{{name}}</span> in om te bevestigen.',
  enter_your_api_resource_name: 'Voer de naam van je API-resource in',
  api_resource_deleted: 'De API-resource {{name}} is verwijderd',
  permission: {
    create_button: 'Recht maken',
    create_title: 'Recht maken',
    create_subtitle: 'Definieer de rechten (scopes) die deze API nodig heeft.',
    confirm_create: 'Recht maken',
    edit_title: 'API-recht bewerken',
    edit_subtitle: 'Definieer de rechten (scopes) die de API {{resourceName}} nodig heeft.',
    name: 'Naam van recht',
    name_placeholder: 'read:resource',
    forbidden_space_in_name: 'De naam van het recht mag geen spaties bevatten.',
    description: 'Beschrijving',
    description_placeholder: 'Kan de resources lezen',
    permission_created: 'Het recht {{name}} is aangemaakt',
    delete_description:
      'Als dit recht wordt verwijderd, verliest de gebruiker die het had de toegang die het gaf.',
    deleted: 'Het recht "{{name}}" is verwijderd.',
  },
};

export default Object.freeze(api_resource_details);
