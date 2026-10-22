/* GetCertus addition (MPL-2.0, see GETCERTUS.md): admin console phrases. */
const role_details = {
  back_to_roles: 'Tilbage til roller',
  identifier: 'Identifikator',
  delete_description:
    'Rollens tilladelser fjernes da fra de berørte brugere, og tilknytningen mellem roller, brugere og tilladelser slettes.',
  role_deleted: '{{name}} er slettet.',
  general_tab: 'Generelt',
  users_tab: 'Brugere',
  m2m_apps_tab: 'Maskine-til-maskine-apps',
  permissions_tab: 'Tilladelser',
  settings: 'Indstillinger',
  settings_description:
    "Roller er grupper af tilladelser, der kan tildeles brugere. De samler også tilladelser fra forskellige API'er, så det er mere effektivt at tilføje, fjerne eller justere tilladelser end at tildele dem til hver bruger.",
  field_name: 'Navn',
  field_description: 'Beskrivelse',
  field_is_default: 'Standardrolle',
  field_is_default_description:
    'Angiv rollen som standardrolle for nye brugere. Der kan angives flere standardroller. Det påvirker også standardrollerne for brugere, der oprettes via Management API.',
  type_m2m_role_tag: 'Maskine-til-maskine',
  type_user_role_tag: 'Bruger',
  m2m_role_notification:
    'Tildel denne maskine-til-maskine-rolle til en maskine-til-maskine-app for at give adgang til de relaterede API-ressourcer. <a>Opret en maskine-til-maskine-app</a> først, hvis du ikke allerede har gjort det.',
  permission: {
    assign_button: 'Tildel tilladelser',
    assign_title: 'Tildel tilladelser',
    assign_subtitle:
      'Tildel tilladelser til rollen. Rollen får de tilføjede tilladelser, og brugere med rollen arver dem.',
    assign_form_field: 'Tildel tilladelser',
    added_text: '{{count, number}} tilladelse tilføjet',
    added_text_other: '{{count, number}} tilladelser tilføjet',
    api_permission_count: '{{count, number}} tilladelse',
    api_permission_count_other: '{{count, number}} tilladelser',
    confirm_assign: 'Tildel tilladelser',
    permission_assigned: 'De valgte tilladelser er tildelt rollen',
    deletion_description:
      'Hvis tilladelsen fjernes, mister brugere med rollen den adgang, tilladelsen gav.',
    permission_deleted: 'Tilladelsen "{{name}}" er fjernet fra rollen',
    empty: 'Ingen tilgængelige tilladelser',
  },
  users: {
    assign_button: 'Tildel brugere',
    name_column: 'Bruger',
    app_column: 'App',
    latest_sign_in_column: 'Seneste login',
    delete_description:
      'Brugeren forbliver i din brugerbase, men mister autorisationen for rollen.',
    deleted: '{{name}} er fjernet fra rollen',
    assign_title: 'Tildel brugere til {{name}}',
    assign_subtitle: 'Find passende brugere ved at søge på navn, e-mail, telefon eller bruger-ID.',
    assign_field: 'Tildel brugere',
    confirm_assign: 'Tildel brugere',
    assigned_toast_text: 'De valgte brugere er tildelt rollen',
    empty: 'Ingen tilgængelige brugere',
  },
  applications: {
    assign_button: 'Tildel maskine-til-maskine-apps',
    name_column: 'Applikation',
    app_column: 'Maskine-til-maskine-app',
    description_column: 'Beskrivelse',
    delete_description:
      'Applikationen forbliver blandt dine applikationer, men mister autorisationen for rollen.',
    deleted: '{{name}} er fjernet fra rollen',
    assign_title: 'Tildel maskine-til-maskine-apps til {{name}}',
    assign_subtitle:
      'Find passende maskine-til-maskine-apps ved at søge på navn, beskrivelse eller app-ID.',
    assign_field: 'Tildel maskine-til-maskine-apps',
    confirm_assign: 'Tildel maskine-til-maskine-apps',
    assigned_toast_text: 'De valgte applikationer er tildelt rollen',
    empty: 'Ingen tilgængelige applikationer',
  },
};

export default Object.freeze(role_details);
