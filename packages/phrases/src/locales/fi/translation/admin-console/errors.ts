/* GetCertus addition (MPL-2.0, see GETCERTUS.md): admin console phrases. */
const errors = {
  something_went_wrong: 'Hups! Jokin meni pieleen.',
  page_not_found: 'Sivua ei löytynyt',
  unknown_server_error: 'Tapahtui tuntematon palvelinvirhe',
  empty: 'Ei tietoja',
  missing_total_number: 'Total-Number-tietoa ei löytynyt vastauksen otsakkeista',
  invalid_uri_format: 'Virheellinen URI-muoto',
  invalid_origin_format: 'Virheellinen URI-alkuperän muoto',
  invalid_json_format: 'Virheellinen JSON-muoto',
  invalid_parameters_format: 'Virheellinen parametrien muoto',
  invalid_regex: 'Virheellinen säännöllinen lauseke',
  invalid_error_message_format: 'Virheilmoituksen muoto on virheellinen.',
  required_field_missing: 'Anna {{field}}',
  required_field_missing_plural: 'Sinun on annettava vähintään yksi {{field}}',
  more_details: 'Lisätiedot',
  username_pattern_error:
    'Käyttäjänimessä saa olla vain kirjaimia, numeroita tai alaviivoja, eikä se saa alkaa numerolla.',
  email_pattern_error: 'Sähköpostiosoite on virheellinen.',
  phone_pattern_error: 'Puhelinnumero on virheellinen.',
  insecure_contexts: 'Suojaamattomia yhteyksiä (ei HTTPS) ei tueta.',
  unexpected_error: 'Tapahtui odottamaton virhe.',
  not_found: '404 ei löytynyt',
  create_internal_role_violation:
    'Olet luomassa uutta sisäistä roolia, mitä GetCertus ei salli. Valitse nimi, joka ei ala merkkijonolla "#internal:".',
  should_be_an_integer: 'On oltava kokonaisluku.',
  number_should_be_between_inclusive:
    'Luvun on oltava välillä {{min}}–{{max}} (päätepisteet mukaan lukien).',
};

export default Object.freeze(errors);
