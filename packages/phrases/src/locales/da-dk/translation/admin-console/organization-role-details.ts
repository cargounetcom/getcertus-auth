/* GetCertus addition (MPL-2.0, see GETCERTUS.md): admin console phrases. */
const organization_role_details = {
  page_title: 'Detaljer for organisationsrolle',
  back_to_org_roles: 'Tilbage til organisationsroller',
  delete_confirm:
    'Det fjerner rollens tilladelser fra de berørte brugere og sletter relationerne mellem organisationsroller, medlemmer af organisationen og organisationstilladelser.',
  deleted: 'Organisationsrollen {{name}} er slettet.',
  permissions: {
    tab: 'Tilladelser',
    name_column: 'Tilladelse',
    description_column: 'Beskrivelse',
    type_column: 'Tilladelsestype',
    type: {
      api: 'API-tilladelse',
      org: 'Organisationstilladelse',
    },
    assign_permissions: 'Tildel tilladelser',
    remove_permission: 'Fjern tilladelse',
    remove_confirmation:
      'Hvis tilladelsen fjernes, mister brugere med denne organisationsrolle den adgang, tilladelsen gav.',
    removed: 'Tilladelsen {{name}} er fjernet fra denne organisationsrolle',
    assign_description:
      'Tildel tilladelser til rollerne i denne organisation. Det kan være både organisationstilladelser og API-tilladelser.',
    organization_permissions: 'Organisationstilladelser',
    api_permissions: 'API-tilladelser',
    assign_organization_permissions: 'Tildel organisationstilladelser',
    assign_api_permissions: 'Tildel API-tilladelser',
  },
  general: {
    tab: 'Generelt',
    settings: 'Indstillinger',
    description:
      'En organisationsrolle er en gruppe tilladelser, der kan tildeles brugere. Tilladelserne kan komme fra de foruddefinerede organisationstilladelser og API-tilladelser.',
    name_field: 'Navn',
    description_field: 'Beskrivelse',
    description_field_placeholder: 'Brugere med kun læseadgang',
  },
};

export default Object.freeze(organization_role_details);
