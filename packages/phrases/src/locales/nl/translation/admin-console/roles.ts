/* GetCertus addition (MPL-2.0, see GETCERTUS.md): admin console phrases. */
const roles = {
  page_title: 'Rollen',
  title: 'Rollen',
  subtitle:
    'Rollen bevatten rechten die bepalen wat een gebruiker mag doen. RBAC gebruikt rollen om gebruikers toegang tot resources te geven voor specifieke acties.',
  create: 'Rol maken',
  role_name: 'Rolnaam',
  role_type: 'Roltype',
  type_user: 'Gebruiker',
  type_machine_to_machine: 'Machine-to-machine',
  role_description: 'Beschrijving',
  role_name_placeholder: 'Voer de naam van je rol in',
  role_description_placeholder: 'Voer een beschrijving van je rol in',
  col_roles: 'Rollen',
  col_type: 'Type',
  col_description: 'Beschrijving',
  col_assigned_entities: 'Toegewezen',
  user_counts: '{{count}} gebruikers',
  application_counts: '{{count}} apps',
  user_count: '{{count}} gebruiker',
  application_count: '{{count}} app',
  assign_permissions: 'Rechten toewijzen',
  create_role_title: 'Rol maken',
  create_role_description: 'Gebruik rollen om rechten te ordenen en aan gebruikers toe te wijzen.',
  create_role_button: 'Rol maken',
  role_created: 'De rol {{name}} is aangemaakt.',
  search: 'Zoeken op rolnaam, beschrijving of ID',
  placeholder_title: 'Rollen',
  placeholder_description:
    'Rollen zijn groepen rechten die je aan gebruikers kunt toewijzen. Voeg eerst rechten toe voordat je rollen maakt.',
  assign_roles: 'Rollen toewijzen',
  management_api_access_notification:
    'Kies voor toegang tot de GetCertus Management API rollen met Management API-rechten <flag/>.',
  with_management_api_access_tip:
    'Deze machine-to-machine-rol bevat rechten voor de GetCertus Management API',
  role_creation_hint: 'Kun je de juiste rol niet vinden? <a>Maak een rol</a>',
};

export default Object.freeze(roles);
