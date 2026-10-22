/* GetCertus addition (MPL-2.0, see GETCERTUS.md): admin console phrases. */
const errors = {
  something_went_wrong: 'Hoppsan! Något gick fel.',
  page_not_found: 'Sidan hittades inte',
  unknown_server_error: 'Ett okänt serverfel inträffade',
  empty: 'Inga data',
  missing_total_number: 'Total-Number hittades inte i svarshuvudena',
  invalid_uri_format: 'Ogiltigt URI-format',
  invalid_origin_format: 'Ogiltigt format för URI-ursprung',
  invalid_json_format: 'Ogiltigt JSON-format',
  invalid_parameters_format: 'Ogiltigt parameterformat',
  invalid_regex: 'Ogiltigt reguljärt uttryck',
  invalid_error_message_format: 'Formatet på felmeddelandet är ogiltigt.',
  required_field_missing: 'Ange {{field}}',
  required_field_missing_plural: 'Du måste ange minst en {{field}}',
  more_details: 'Mer information',
  username_pattern_error:
    'Användarnamnet får bara innehålla bokstäver, siffror eller understreck och får inte börja med en siffra.',
  email_pattern_error: 'E-postadressen är ogiltig.',
  phone_pattern_error: 'Telefonnumret är ogiltigt.',
  insecure_contexts: 'Osäkra kontexter (utan HTTPS) stöds inte.',
  unexpected_error: 'Ett oväntat fel inträffade.',
  not_found: '404 hittades inte',
  create_internal_role_violation:
    'Du skapar en ny intern roll, vilket GetCertus inte tillåter. Välj ett namn som inte börjar med "#internal:".',
  should_be_an_integer: 'Måste vara ett heltal.',
  number_should_be_between_inclusive: 'Talet ska vara mellan {{min}} och {{max}} (inklusive).',
};

export default Object.freeze(errors);
