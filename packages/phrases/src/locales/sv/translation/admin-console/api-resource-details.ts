/* GetCertus addition (MPL-2.0, see GETCERTUS.md): admin console phrases. */
const api_resource_details = {
  page_title: 'Detaljer för API-resurs',
  back_to_api_resources: 'Tillbaka till API-resurser',
  general_tab: 'Allmänt',
  permissions_tab: 'Behörigheter',
  settings: 'Inställningar',
  settings_description:
    'API-resurser, även kallade Resource Indicators, anger de måltjänster eller resurser som begärs, vanligtvis en variabel i URI-format som representerar resursens identitet.',
  management_api_settings_description:
    'GetCertus Management API är en omfattande samling API:er som låter administratörer hantera många identitetsrelaterade uppgifter, upprätthålla säkerhetspolicyer och följa regler och standarder.',
  management_api_notice:
    'Detta API representerar en GetCertus-entitet och kan inte ändras eller tas bort. Skapa en maskin-till-maskin-app för att anropa GetCertus Management API. <a>Läs mer</a>',
  token_expiration_time_in_seconds: 'Tokens giltighetstid (i sekunder)',
  token_expiration_time_in_seconds_placeholder: 'Ange tokens giltighetstid',
  delete_description:
    'Åtgärden kan inte ångras. API-resursen tas bort permanent. Ange namnet på API-resursen <span>{{name}}</span> för att bekräfta.',
  enter_your_api_resource_name: 'Ange namnet på din API-resurs',
  api_resource_deleted: 'API-resursen {{name}} har tagits bort',
  permission: {
    create_button: 'Skapa behörighet',
    create_title: 'Skapa behörighet',
    create_subtitle: 'Definiera de behörigheter (scopes) som detta API behöver.',
    confirm_create: 'Skapa behörighet',
    edit_title: 'Redigera API-behörighet',
    edit_subtitle: 'Definiera de behörigheter (scopes) som API:et {{resourceName}} behöver.',
    name: 'Behörighetens namn',
    name_placeholder: 'read:resource',
    forbidden_space_in_name: 'Behörighetens namn får inte innehålla mellanslag.',
    description: 'Beskrivning',
    description_placeholder: 'Kan läsa resurserna',
    permission_created: 'Behörigheten {{name}} har skapats',
    delete_description:
      'Om behörigheten tas bort förlorar användare som hade den den åtkomst den gav.',
    deleted: 'Behörigheten "{{name}}" har tagits bort.',
  },
};

export default Object.freeze(api_resource_details);
