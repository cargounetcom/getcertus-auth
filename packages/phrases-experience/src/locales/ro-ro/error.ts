/* GetCertus addition (MPL-2.0, see GETCERTUS.md): sign-in experience phrases. */
const error = {
  general_required: '{{types, list(type: disjunction;)}} este obligatoriu',
  general_invalid: '{{types, list(type: disjunction;)}} nu este valid',
  invalid_min_max_input: 'Valoarea trebuie să fie între {{minValue}} și {{maxValue}}',
  invalid_min_max_length: 'Lungimea valorii trebuie să fie între {{minLength}} și {{maxLength}}',
  username_required: 'Numele de utilizator este obligatoriu',
  password_required: 'Parola este obligatorie',
  username_exists: 'Numele de utilizator există deja',
  username_should_not_start_with_number: 'Numele de utilizator nu trebuie să înceapă cu o cifră',
  username_invalid_charset:
    'Numele de utilizator poate conține doar litere, cifre sau liniuțe de subliniere.',
  username_too_short: 'Numele de utilizator trebuie să aibă cel puțin {{min}} caractere.',
  username_too_long: 'Numele de utilizator poate avea cel mult {{max}} caractere.',
  username_uppercase_not_allowed: 'Majusculele nu sunt permise în numele de utilizator.',
  username_lowercase_not_allowed: 'Minusculele nu sunt permise în numele de utilizator.',
  username_numbers_not_allowed: 'Cifrele nu sunt permise în numele de utilizator.',
  username_underscore_not_allowed:
    'Liniuțele de subliniere nu sunt permise în numele de utilizator.',
  invalid_email: 'E-mailul nu este valid',
  invalid_phone: 'Numărul de telefon nu este valid',
  passwords_do_not_match: 'Parolele nu se potrivesc.',
  invalid_passcode: 'Codul de verificare nu este valid.',
  device_code_required: 'Codul este obligatoriu.',
  invalid_device_code: 'Codul dispozitivului nu este valid.',
  device_flow_aborted: 'Cererea de conectare a fost întreruptă.',
  invalid_connector_auth: 'Autorizarea nu este validă',
  invalid_connector_request: 'Datele conectorului nu sunt valide',
  unknown: 'Eroare necunoscută.',
  invalid_session: 'Sesiunea nu a fost găsită. Întoarce-te și conectează-te din nou.',
  timeout: 'Cererea a expirat.',
  password_rejected: {
    too_short: 'Lungimea minimă este {{min}}.',
    too_long: 'Lungimea maximă este {{max}}.',
    character_types: 'Sunt necesare cel puțin {{min}} tipuri de caractere.',
    unsupported_characters: 'S-a găsit un caracter neacceptat.',
    pwned: 'Evită parolele simple, ușor de ghicit.',
    restricted_found: 'Evită folosirea excesivă a {{list, list}}.',
    restricted: {
      repetition: 'caracterelor repetate',
      sequence: 'caracterelor consecutive',
      user_info: 'informațiilor tale personale',
      words: 'cuvintelor legate de produs',
    },
  },
  sso_not_enabled: 'Autentificarea unică nu este activată pentru acest cont de e-mail.',
  invalid_link: 'Link nevalid',
  invalid_link_description:
    'Tokenul tău de unică folosință poate să fi expirat sau nu mai este valid.',
  captcha_verification_failed: 'Verificarea captcha a eșuat.',
  send_verification_code_failed:
    'Codul de verificare nu a putut fi trimis. Încearcă din nou mai târziu.',
  send_verification_code_failed_use_password:
    'Codul de verificare nu a putut fi trimis. Conectează-te cu parola.',
  terms_acceptance_required: 'Este necesară acceptarea termenilor',
  terms_acceptance_required_description: 'Trebuie să accepți termenii pentru a continua.',
  something_went_wrong: 'Ceva nu a funcționat',
  account_suspended: 'Cont suspendat',
  account_suspended_description:
    'Acest cont a fost suspendat. Contactează administratorul pentru asistență.',
  access_denied: 'Acces refuzat',
  application_access_denied:
    'Nu ai permisiunea de a accesa această aplicație.\nContactează administratorul pentru asistență.',
  feature_not_enabled:
    'Nu ai permisiunea de a accesa această funcție. Contactează administratorul pentru asistență.',
};

export default Object.freeze(error);
