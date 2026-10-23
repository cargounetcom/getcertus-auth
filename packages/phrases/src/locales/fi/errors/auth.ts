/* GetCertus addition (MPL-2.0, see GETCERTUS.md): admin console phrases. */
const auth = {
  authorization_header_missing: 'Valtuutusotsake puuttuu.',
  authorization_token_type_not_supported: 'Valtuutustyyppiä ei tueta.',
  unauthorized: 'Ei valtuutusta. Tarkista tunnistetiedot ja niiden scope.',
  forbidden: 'Pääsy estetty. Tarkista käyttäjäroolisi ja käyttöoikeutesi.',
  expected_role_not_found:
    'Odotettua roolia ei löytynyt. Tarkista käyttäjäroolisi ja käyttöoikeutesi.',
  jwt_sub_missing: '`sub` puuttuu JWT:stä.',
  require_re_authentication:
    'Suojatun toiminnon suorittaminen edellyttää uudelleentunnistautumista.',
  exceed_token_limit: 'Tunnusraja ylitetty. Ota yhteyttä ylläpitäjään.',
  third_party_application_forbidden:
    'Kolmannen osapuolen sovellukset eivät voi muokata tilitietoja tämän API:n kautta.',
};

export default Object.freeze(auth);
