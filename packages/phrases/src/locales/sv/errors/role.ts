/* GetCertus addition (MPL-2.0, see GETCERTUS.md): admin console phrases. */
const role = {
  name_in_use: 'Rollnamnet {{name}} används redan',
  scope_exists: 'Scope-ID {{scopeId}} har redan lagts till i rollen',
  management_api_scopes_not_assignable_to_user_role:
    'Management API-scopes kan inte tilldelas en användarroll.',
  user_exists: 'Användar-ID {{userId}} har redan lagts till i rollen',
  application_exists: 'Applikations-ID {{applicationId}} har redan lagts till i rollen',
  default_role_missing:
    'Några av standardrollerna (roleNames) finns inte i databasen. Skapa rollerna först',
  internal_role_violation:
    'Du försöker kanske uppdatera eller ta bort en intern roll, vilket GetCertus inte tillåter. Om du skapar en ny roll, välj ett namn som inte börjar med "#internal:".',
};

export default Object.freeze(role);
