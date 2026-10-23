/* GetCertus addition (MPL-2.0, see GETCERTUS.md): admin console phrases. */
const organization_template = {
  title: 'Organisationsskabelon',
  subtitle:
    'I multi-tenant SaaS-applikationer definerer en organisationsskabelon fælles adgangspolitikker (tilladelser og roller) for flere organisationer.',
  roles: {
    tab_name: 'Organisationsroller',
    search_placeholder: 'Søg på rollenavn',
    create_title: 'Opret organisationsrolle',
    role_column: 'Organisationsrolle',
    permissions_column: 'Tilladelser',
    placeholder_title: 'Organisationsrolle',
    placeholder_description:
      'En organisationsrolle er en gruppe tilladelser, der kan tildeles brugere. Tilladelserne skal komme fra de foruddefinerede organisationstilladelser.',
    create_modal: {
      title: 'Opret organisationsrolle',
      create: 'Opret rolle',
      name: 'Rollenavn',
      description: 'Beskrivelse',
      type: 'Rolletype',
      created: 'Organisationsrollen {{name}} er oprettet.',
    },
  },
  permissions: {
    tab_name: 'Organisationstilladelser',
    search_placeholder: 'Søg på tilladelsesnavn',
    create_org_permission: 'Opret organisationstilladelse',
    permission_column: 'Organisationstilladelse',
    description_column: 'Beskrivelse',
    placeholder_title: 'Organisationstilladelse',
    placeholder_description:
      'En organisationstilladelse er retten til at tilgå en ressource i en organisations kontekst.',
    delete_confirm:
      'Hvis tilladelsen slettes, mister alle organisationsroller med denne tilladelse den, og brugere, der havde den, mister den adgang, den gav.',
    create_title: 'Opret organisationstilladelse',
    edit_title: 'Redigér organisationstilladelse',
    permission_field_name: 'Tilladelsesnavn',
    description_field_name: 'Beskrivelse',
    description_field_placeholder: 'Læs aftalehistorik',
    create_permission: 'Opret tilladelse',
    created: 'Organisationstilladelsen {{name}} er oprettet.',
  },
};

export default Object.freeze(organization_template);
