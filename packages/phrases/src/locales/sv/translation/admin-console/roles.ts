/* GetCertus addition (MPL-2.0, see GETCERTUS.md): admin console phrases. */
const roles = {
  page_title: 'Roller',
  title: 'Roller',
  subtitle:
    'Roller innehåller behörigheter som avgör vad en användare får göra. RBAC använder roller för att ge användare åtkomst till resurser för specifika åtgärder.',
  create: 'Skapa roll',
  role_name: 'Rollnamn',
  role_type: 'Rolltyp',
  type_user: 'Användare',
  type_machine_to_machine: 'Maskin-till-maskin',
  role_description: 'Beskrivning',
  role_name_placeholder: 'Ange rollens namn',
  role_description_placeholder: 'Ange en beskrivning av rollen',
  col_roles: 'Roller',
  col_type: 'Typ',
  col_description: 'Beskrivning',
  col_assigned_entities: 'Tilldelad',
  user_counts: '{{count}} användare',
  application_counts: '{{count}} appar',
  user_count: '{{count}} användare',
  application_count: '{{count}} app',
  assign_permissions: 'Tilldela behörigheter',
  create_role_title: 'Skapa roll',
  create_role_description:
    'Använd roller för att organisera behörigheter och tilldela dem till användare.',
  create_role_button: 'Skapa roll',
  role_created: 'Rollen {{name}} har skapats.',
  search: 'Sök på rollnamn, beskrivning eller ID',
  placeholder_title: 'Roller',
  placeholder_description:
    'Roller är grupper av behörigheter som kan tilldelas användare. Lägg till behörigheter innan du skapar roller.',
  assign_roles: 'Tilldela roller',
  management_api_access_notification:
    'För åtkomst till GetCertus Management API väljer du roller med Management API-behörigheter <flag/>.',
  with_management_api_access_tip:
    'Den här maskin-till-maskin-rollen har behörigheter för GetCertus Management API',
  role_creation_hint: 'Hittar du inte rätt roll? <a>Skapa en roll</a>',
};

export default Object.freeze(roles);
