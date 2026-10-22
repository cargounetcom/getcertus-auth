/* GetCertus addition (MPL-2.0, see GETCERTUS.md): admin console phrases. */
const roles = {
  page_title: 'Roller',
  title: 'Roller',
  subtitle:
    'Roller indeholder tilladelser, der bestemmer, hvad en bruger må. RBAC bruger roller til at give brugere adgang til ressourcer for bestemte handlinger.',
  create: 'Opret rolle',
  role_name: 'Rollenavn',
  role_type: 'Rolletype',
  type_user: 'Bruger',
  type_machine_to_machine: 'Maskine-til-maskine',
  role_description: 'Beskrivelse',
  role_name_placeholder: 'Indtast rollens navn',
  role_description_placeholder: 'Indtast en beskrivelse af rollen',
  col_roles: 'Roller',
  col_type: 'Type',
  col_description: 'Beskrivelse',
  col_assigned_entities: 'Tildelt',
  user_counts: '{{count}} brugere',
  application_counts: '{{count}} apps',
  user_count: '{{count}} bruger',
  application_count: '{{count}} app',
  assign_permissions: 'Tildel tilladelser',
  create_role_title: 'Opret rolle',
  create_role_description: 'Brug roller til at organisere tilladelser og tildele dem til brugere.',
  create_role_button: 'Opret rolle',
  role_created: 'Rollen {{name}} er oprettet.',
  search: 'Søg på rollenavn, beskrivelse eller ID',
  placeholder_title: 'Roller',
  placeholder_description:
    'Roller er grupper af tilladelser, der kan tildeles brugere. Tilføj tilladelser, før du opretter roller.',
  assign_roles: 'Tildel roller',
  management_api_access_notification:
    'For adgang til GetCertus Management API skal du vælge roller med Management API-tilladelser <flag/>.',
  with_management_api_access_tip:
    'Denne maskine-til-maskine-rolle indeholder tilladelser til GetCertus Management API',
  role_creation_hint: 'Kan du ikke finde den rigtige rolle? <a>Opret en rolle</a>',
};

export default Object.freeze(roles);
