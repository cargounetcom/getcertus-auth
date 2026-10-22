/* GetCertus addition (MPL-2.0, see GETCERTUS.md): admin console phrases. */
const api_resource_details = {
  page_title: 'Detaljer for API-ressource',
  back_to_api_resources: 'Tilbage til API-ressourcer',
  general_tab: 'Generelt',
  permissions_tab: 'Tilladelser',
  settings: 'Indstillinger',
  settings_description:
    'API-ressourcer, også kaldet Resource Indicators, angiver de måltjenester eller ressourcer, der anmodes om, typisk en variabel i URI-format, der repræsenterer ressourcens identitet.',
  management_api_settings_description:
    "GetCertus Management API er en omfattende samling API'er, der giver administratorer mulighed for at håndtere mange identitetsrelaterede opgaver, håndhæve sikkerhedspolitikker og overholde regler og standarder.",
  management_api_notice:
    'Dette API repræsenterer en GetCertus-enhed og kan ikke ændres eller slettes. Opret en maskine-til-maskine-app for at kalde GetCertus Management API. <a>Læs mere</a>',
  token_expiration_time_in_seconds: 'Tokens udløbstid (i sekunder)',
  token_expiration_time_in_seconds_placeholder: 'Indtast tokens udløbstid',
  delete_description:
    'Handlingen kan ikke fortrydes. API-ressourcen slettes permanent. Indtast navnet på API-ressourcen <span>{{name}}</span> for at bekræfte.',
  enter_your_api_resource_name: 'Indtast navnet på din API-ressource',
  api_resource_deleted: 'API-ressourcen {{name}} er slettet',
  permission: {
    create_button: 'Opret tilladelse',
    create_title: 'Opret tilladelse',
    create_subtitle: 'Definér de tilladelser (scopes), som dette API har brug for.',
    confirm_create: 'Opret tilladelse',
    edit_title: 'Redigér API-tilladelse',
    edit_subtitle: "Definér de tilladelser (scopes), som API'et {{resourceName}} har brug for.",
    name: 'Tilladelsens navn',
    name_placeholder: 'read:resource',
    forbidden_space_in_name: 'Tilladelsens navn må ikke indeholde mellemrum.',
    description: 'Beskrivelse',
    description_placeholder: 'Kan læse ressourcerne',
    permission_created: 'Tilladelsen {{name}} er oprettet',
    delete_description:
      'Hvis tilladelsen slettes, mister brugere, der havde den, den adgang, den gav.',
    deleted: 'Tilladelsen "{{name}}" er slettet.',
  },
};

export default Object.freeze(api_resource_details);
