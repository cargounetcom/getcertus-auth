/* GetCertus addition (MPL-2.0, see GETCERTUS.md): admin console phrases. */
const role = {
  name_in_use: 'Rollenavnet {{name}} er allerede i brug',
  scope_exists: "Scope-ID'et {{scopeId}} er allerede tilføjet til denne rolle",
  management_api_scopes_not_assignable_to_user_role:
    'Management API-scopes kan ikke tildeles en brugerrolle.',
  user_exists: "Bruger-ID'et {{userId}} er allerede tilføjet til denne rolle",
  application_exists: "Applikations-ID'et {{applicationId}} er allerede tilføjet til denne rolle",
  default_role_missing:
    'Nogle af standardrollerne (roleNames) findes ikke i databasen. Opret rollerne først',
  internal_role_violation:
    'Du forsøger muligvis at opdatere eller slette en intern rolle, hvilket GetCertus ikke tillader. Hvis du opretter en ny rolle, så vælg et navn, der ikke starter med "#internal:".',
};

export default Object.freeze(role);
