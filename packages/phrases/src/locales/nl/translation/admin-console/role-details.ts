/* GetCertus addition (MPL-2.0, see GETCERTUS.md): admin console phrases. */
const role_details = {
  back_to_roles: 'Terug naar rollen',
  identifier: 'Identifier',
  delete_description:
    'Hierdoor worden de rechten van deze rol bij de betrokken gebruikers ingetrokken en wordt de koppeling tussen rollen, gebruikers en rechten verwijderd.',
  role_deleted: '{{name}} is verwijderd.',
  general_tab: 'Algemeen',
  users_tab: 'Gebruikers',
  m2m_apps_tab: 'Machine-to-machine-apps',
  permissions_tab: 'Rechten',
  settings: 'Instellingen',
  settings_description:
    "Rollen zijn groepen rechten die je aan gebruikers kunt toewijzen. Ze bundelen ook rechten van verschillende API's, waardoor je rechten efficiënter toevoegt, verwijdert of aanpast dan door ze per gebruiker toe te wijzen.",
  field_name: 'Naam',
  field_description: 'Beschrijving',
  field_is_default: 'Standaardrol',
  field_is_default_description:
    'Stel deze rol in als standaardrol voor nieuwe gebruikers. Je kunt meerdere standaardrollen instellen. Dit geldt ook voor gebruikers die via de Management API worden aangemaakt.',
  type_m2m_role_tag: 'Machine-to-machine',
  type_user_role_tag: 'Gebruiker',
  m2m_role_notification:
    'Wijs deze machine-to-machine-rol toe aan een machine-to-machine-app om toegang te geven tot de bijbehorende API-resources. <a>Maak eerst een machine-to-machine-app</a> als je dat nog niet hebt gedaan.',
  permission: {
    assign_button: 'Rechten toewijzen',
    assign_title: 'Rechten toewijzen',
    assign_subtitle:
      'Wijs rechten toe aan deze rol. De rol krijgt de toegevoegde rechten en gebruikers met deze rol erven ze.',
    assign_form_field: 'Rechten toewijzen',
    added_text: '{{count, number}} recht toegevoegd',
    added_text_other: '{{count, number}} rechten toegevoegd',
    api_permission_count: '{{count, number}} recht',
    api_permission_count_other: '{{count, number}} rechten',
    confirm_assign: 'Rechten toewijzen',
    permission_assigned: 'De gekozen rechten zijn aan deze rol toegewezen',
    deletion_description:
      'Als dit recht wordt verwijderd, verliezen gebruikers met deze rol de toegang die het gaf.',
    permission_deleted: 'Het recht "{{name}}" is van deze rol verwijderd',
    empty: 'Geen recht beschikbaar',
  },
  users: {
    assign_button: 'Gebruikers toewijzen',
    name_column: 'Gebruiker',
    app_column: 'App',
    latest_sign_in_column: 'Laatst ingelogd',
    delete_description:
      'De gebruiker blijft in je gebruikersbestand, maar verliest de autorisatie voor deze rol.',
    deleted: '{{name}} is van deze rol verwijderd',
    assign_title: 'Gebruikers toewijzen aan {{name}}',
    assign_subtitle: 'Zoek passende gebruikers op naam, e-mail, telefoon of gebruikers-ID.',
    assign_field: 'Gebruikers toewijzen',
    confirm_assign: 'Gebruikers toewijzen',
    assigned_toast_text: 'De gekozen gebruikers zijn aan deze rol toegewezen',
    empty: 'Geen gebruiker beschikbaar',
  },
  applications: {
    assign_button: 'Machine-to-machine-apps toewijzen',
    name_column: 'Applicatie',
    app_column: 'Machine-to-machine-app',
    description_column: 'Beschrijving',
    delete_description:
      'De applicatie blijft in je applicaties, maar verliest de autorisatie voor deze rol.',
    deleted: '{{name}} is van deze rol verwijderd',
    assign_title: 'Machine-to-machine-apps toewijzen aan {{name}}',
    assign_subtitle: 'Zoek passende machine-to-machine-apps op naam, beschrijving of app-ID.',
    assign_field: 'Machine-to-machine-apps toewijzen',
    confirm_assign: 'Machine-to-machine-apps toewijzen',
    assigned_toast_text: 'De gekozen applicaties zijn aan deze rol toegewezen',
    empty: 'Geen applicatie beschikbaar',
  },
};

export default Object.freeze(role_details);
