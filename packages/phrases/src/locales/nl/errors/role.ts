/* GetCertus addition (MPL-2.0, see GETCERTUS.md): admin console phrases. */
const role = {
  name_in_use: 'De rolnaam {{name}} is al in gebruik',
  scope_exists: 'De scope-ID {{scopeId}} is al aan deze rol toegevoegd',
  management_api_scopes_not_assignable_to_user_role:
    'Management API-scopes kunnen niet aan een gebruikersrol worden toegewezen.',
  user_exists: 'De gebruikers-ID {{userId}} is al aan deze rol toegevoegd',
  application_exists: 'De applicatie-ID {{applicationId}} is al aan deze rol toegevoegd',
  default_role_missing:
    'Sommige standaard-roleNames bestaan niet in de database; maak eerst de rollen aan',
  internal_role_violation:
    'Je probeert mogelijk een interne rol bij te werken of te verwijderen, wat GetCertus niet toestaat. Maak je een nieuwe rol, kies dan een naam die niet begint met "#internal:".',
};

export default Object.freeze(role);
