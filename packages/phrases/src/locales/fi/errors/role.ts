/* GetCertus addition (MPL-2.0, see GETCERTUS.md): admin console phrases. */
const role = {
  name_in_use: 'Roolin nimi {{name}} on jo käytössä',
  scope_exists: 'Scope-tunnus {{scopeId}} on jo lisätty tähän rooliin',
  management_api_scopes_not_assignable_to_user_role:
    'Management API -scopeja ei voi määrittää käyttäjäroolille.',
  user_exists: 'Käyttäjätunnus {{userId}} on jo lisätty tähän rooliin',
  application_exists: 'Sovellustunnus {{applicationId}} on jo lisätty tähän rooliin',
  default_role_missing: 'Osa oletusrooleista (roleNames) puuttuu tietokannasta; luo roolit ensin',
  internal_role_violation:
    'Saatat yrittää päivittää tai poistaa sisäistä roolia, mitä GetCertus ei salli. Jos luot uutta roolia, valitse nimi, joka ei ala merkkijonolla "#internal:".',
};

export default Object.freeze(role);
