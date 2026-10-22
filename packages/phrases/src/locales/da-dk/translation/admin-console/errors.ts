/* GetCertus addition (MPL-2.0, see GETCERTUS.md): admin console phrases. */
const errors = {
  something_went_wrong: 'Ups! Noget gik galt.',
  page_not_found: 'Siden blev ikke fundet',
  unknown_server_error: 'Der opstod en ukendt serverfejl',
  empty: 'Ingen data',
  missing_total_number: 'Total-Number blev ikke fundet i svarets headere',
  invalid_uri_format: 'Ugyldigt URI-format',
  invalid_origin_format: 'Ugyldigt format for URI-oprindelse',
  invalid_json_format: 'Ugyldigt JSON-format',
  invalid_parameters_format: 'Ugyldigt parameterformat',
  invalid_regex: 'Ugyldigt regulært udtryk',
  invalid_error_message_format: 'Fejlmeddelelsens format er ugyldigt.',
  required_field_missing: 'Indtast {{field}}',
  required_field_missing_plural: 'Du skal indtaste mindst én {{field}}',
  more_details: 'Flere detaljer',
  username_pattern_error:
    'Brugernavnet må kun indeholde bogstaver, tal eller understreger og må ikke starte med et tal.',
  email_pattern_error: 'E-mailadressen er ugyldig.',
  phone_pattern_error: 'Telefonnummeret er ugyldigt.',
  insecure_contexts: 'Usikre kontekster (uden HTTPS) understøttes ikke.',
  unexpected_error: 'Der opstod en uventet fejl.',
  not_found: '404 ikke fundet',
  create_internal_role_violation:
    'Du opretter en ny intern rolle, hvilket GetCertus ikke tillader. Vælg et navn, der ikke starter med "#internal:".',
  should_be_an_integer: 'Skal være et heltal.',
  number_should_be_between_inclusive: 'Tallet skal være mellem {{min}} og {{max}} (inklusive).',
};

export default Object.freeze(errors);
