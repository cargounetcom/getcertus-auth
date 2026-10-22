/* GetCertus addition (MPL-2.0, see GETCERTUS.md): admin console phrases. */
const role_details = {
  back_to_roles: 'Tillbaka till roller',
  identifier: 'Identifierare',
  delete_description:
    'Rollens behörigheter tas då bort från berörda användare och kopplingen mellan roller, användare och behörigheter raderas.',
  role_deleted: '{{name}} har tagits bort.',
  general_tab: 'Allmänt',
  users_tab: 'Användare',
  m2m_apps_tab: 'Maskin-till-maskin-appar',
  permissions_tab: 'Behörigheter',
  settings: 'Inställningar',
  settings_description:
    'Roller är grupper av behörigheter som kan tilldelas användare. De samlar också behörigheter från olika API:er, så att det blir effektivare att lägga till, ta bort eller justera behörigheter än att tilldela dem till varje användare.',
  field_name: 'Namn',
  field_description: 'Beskrivning',
  field_is_default: 'Standardroll',
  field_is_default_description:
    'Ange rollen som standardroll för nya användare. Flera standardroller kan anges. Detta påverkar även standardroller för användare som skapas via Management API.',
  type_m2m_role_tag: 'Maskin-till-maskin',
  type_user_role_tag: 'Användare',
  m2m_role_notification:
    'Tilldela den här maskin-till-maskin-rollen till en maskin-till-maskin-app för att ge åtkomst till relaterade API-resurser. <a>Skapa en maskin-till-maskin-app</a> först om du inte redan har gjort det.',
  permission: {
    assign_button: 'Tilldela behörigheter',
    assign_title: 'Tilldela behörigheter',
    assign_subtitle:
      'Tilldela behörigheter till rollen. Rollen får de tillagda behörigheterna och användare med rollen ärver dem.',
    assign_form_field: 'Tilldela behörigheter',
    added_text: '{{count, number}} behörighet tillagd',
    added_text_other: '{{count, number}} behörigheter tillagda',
    api_permission_count: '{{count, number}} behörighet',
    api_permission_count_other: '{{count, number}} behörigheter',
    confirm_assign: 'Tilldela behörigheter',
    permission_assigned: 'De valda behörigheterna har tilldelats rollen',
    deletion_description:
      'Om behörigheten tas bort förlorar användare med rollen den åtkomst som behörigheten gav.',
    permission_deleted: 'Behörigheten "{{name}}" har tagits bort från rollen',
    empty: 'Ingen behörighet tillgänglig',
  },
  users: {
    assign_button: 'Tilldela användare',
    name_column: 'Användare',
    app_column: 'App',
    latest_sign_in_column: 'Senaste inloggning',
    delete_description:
      'Användaren finns kvar i din användarbas men förlorar auktoriseringen för rollen.',
    deleted: '{{name}} har tagits bort från rollen',
    assign_title: 'Tilldela användare till {{name}}',
    assign_subtitle:
      'Hitta lämpliga användare genom att söka på namn, e-post, telefon eller användar-ID.',
    assign_field: 'Tilldela användare',
    confirm_assign: 'Tilldela användare',
    assigned_toast_text: 'De valda användarna har tilldelats rollen',
    empty: 'Ingen användare tillgänglig',
  },
  applications: {
    assign_button: 'Tilldela maskin-till-maskin-appar',
    name_column: 'Applikation',
    app_column: 'Maskin-till-maskin-app',
    description_column: 'Beskrivning',
    delete_description:
      'Applikationen finns kvar bland dina applikationer men förlorar auktoriseringen för rollen.',
    deleted: '{{name}} har tagits bort från rollen',
    assign_title: 'Tilldela maskin-till-maskin-appar till {{name}}',
    assign_subtitle:
      'Hitta lämpliga maskin-till-maskin-appar genom att söka på namn, beskrivning eller app-ID.',
    assign_field: 'Tilldela maskin-till-maskin-appar',
    confirm_assign: 'Tilldela maskin-till-maskin-appar',
    assigned_toast_text: 'De valda applikationerna har tilldelats rollen',
    empty: 'Ingen applikation tillgänglig',
  },
};

export default Object.freeze(role_details);
