/* GetCertus addition (MPL-2.0, see GETCERTUS.md): sign-in experience phrases. */
const error = {
  general_required: '{{types, list(type: disjunction;)}} is verplicht',
  general_invalid: 'Het {{types, list(type: disjunction;)}} is ongeldig',
  invalid_min_max_input: 'De waarde moet tussen {{minValue}} en {{maxValue}} liggen',
  invalid_min_max_length:
    'De lengte van de waarde moet tussen {{minLength}} en {{maxLength}} liggen',
  username_required: 'Gebruikersnaam is verplicht',
  password_required: 'Wachtwoord is verplicht',
  username_exists: 'Gebruikersnaam bestaat al',
  username_should_not_start_with_number: 'Gebruikersnaam mag niet met een cijfer beginnen',
  username_invalid_charset: 'Gebruikersnaam mag alleen letters, cijfers of underscores bevatten.',
  username_too_short: 'Gebruikersnaam moet minimaal {{min}} tekens lang zijn.',
  username_too_long: 'Gebruikersnaam mag maximaal {{max}} tekens lang zijn.',
  username_uppercase_not_allowed: 'Hoofdletters zijn niet toegestaan in gebruikersnamen.',
  username_lowercase_not_allowed: 'Kleine letters zijn niet toegestaan in gebruikersnamen.',
  username_numbers_not_allowed: 'Cijfers zijn niet toegestaan in gebruikersnamen.',
  username_underscore_not_allowed: 'Underscores zijn niet toegestaan in gebruikersnamen.',
  invalid_email: 'Het e-mailadres is ongeldig',
  invalid_phone: 'Het telefoonnummer is ongeldig',
  passwords_do_not_match: 'Je wachtwoorden komen niet overeen.',
  invalid_passcode: 'De verificatiecode is ongeldig.',
  device_code_required: 'Code is verplicht.',
  invalid_device_code: 'De apparaatcode is ongeldig.',
  device_flow_aborted: 'Het inlogverzoek is onderbroken.',
  invalid_connector_auth: 'De autorisatie is ongeldig',
  invalid_connector_request: 'De connectorgegevens zijn ongeldig',
  unknown: 'Onbekende fout.',
  invalid_session: 'Sessie niet gevonden. Ga terug en log opnieuw in.',
  timeout: 'Time-out van het verzoek.',
  password_rejected: {
    too_short: 'Minimale lengte is {{min}}.',
    too_long: 'Maximale lengte is {{max}}.',
    character_types: 'Er zijn minimaal {{min}} soorten tekens nodig.',
    unsupported_characters: 'Niet-ondersteund teken gevonden.',
    pwned: 'Vermijd eenvoudige wachtwoorden die makkelijk te raden zijn.',
    restricted_found: 'Vermijd overmatig gebruik van {{list, list}}.',
    restricted: {
      repetition: 'herhaalde tekens',
      sequence: 'opeenvolgende tekens',
      user_info: 'je persoonlijke gegevens',
      words: 'productgerelateerde woorden',
    },
  },
  sso_not_enabled: 'Single sign-on is niet ingeschakeld voor dit e-mailaccount.',
  invalid_link: 'Ongeldige link',
  invalid_link_description: 'Je eenmalige token is mogelijk verlopen of niet meer geldig.',
  captcha_verification_failed: 'Captcha-verificatie is mislukt.',
  send_verification_code_failed:
    'Verzenden van de verificatiecode is mislukt. Probeer het later opnieuw.',
  send_verification_code_failed_use_password:
    'Verzenden van de verificatiecode is mislukt. Log in plaats daarvan in met je wachtwoord.',
  terms_acceptance_required: 'Akkoord met voorwaarden vereist',
  terms_acceptance_required_description: 'Je moet akkoord gaan met de voorwaarden om door te gaan.',
  something_went_wrong: 'Er is iets misgegaan',
  account_suspended: 'Account opgeschort',
  account_suspended_description:
    'Dit account is opgeschort. Neem contact op met de beheerder voor hulp.',
  access_denied: 'Toegang geweigerd',
  application_access_denied:
    'Je hebt geen toegang tot deze applicatie.\nNeem contact op met je beheerder voor hulp.',
  feature_not_enabled:
    'Je hebt geen toegang tot deze functie. Neem contact op met je beheerder voor hulp.',
};

export default Object.freeze(error);
