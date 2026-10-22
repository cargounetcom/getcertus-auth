/* GetCertus addition (MPL-2.0, see GETCERTUS.md): admin console phrases. */
const errors = {
  something_went_wrong: 'Oeps! Er is iets misgegaan.',
  page_not_found: 'Pagina niet gevonden',
  unknown_server_error: 'Er is een onbekende serverfout opgetreden',
  empty: 'Geen gegevens',
  missing_total_number: 'Total-Number niet gevonden in de antwoordheaders',
  invalid_uri_format: 'Ongeldige URI-indeling',
  invalid_origin_format: 'Ongeldige indeling van de URI-origin',
  invalid_json_format: 'Ongeldige JSON-indeling',
  invalid_parameters_format: 'Ongeldige indeling van de parameters',
  invalid_regex: 'Ongeldige reguliere expressie',
  invalid_error_message_format: 'De indeling van de foutmelding is ongeldig.',
  required_field_missing: 'Voer {{field}} in',
  required_field_missing_plural: 'Je moet minimaal één {{field}} invoeren',
  more_details: 'Meer details',
  username_pattern_error:
    'Een gebruikersnaam mag alleen letters, cijfers of underscores bevatten en niet met een cijfer beginnen.',
  email_pattern_error: 'Het e-mailadres is ongeldig.',
  phone_pattern_error: 'Het telefoonnummer is ongeldig.',
  insecure_contexts: 'Onveilige contexten (niet-HTTPS) worden niet ondersteund.',
  unexpected_error: 'Er is een onverwachte fout opgetreden.',
  not_found: '404 niet gevonden',
  create_internal_role_violation:
    'Je maakt een nieuwe interne rol aan, wat GetCertus niet toestaat. Kies een andere naam die niet begint met "#internal:".',
  should_be_an_integer: 'Moet een geheel getal zijn.',
  number_should_be_between_inclusive:
    'Het getal moet tussen {{min}} en {{max}} liggen (inclusief).',
};

export default Object.freeze(errors);
