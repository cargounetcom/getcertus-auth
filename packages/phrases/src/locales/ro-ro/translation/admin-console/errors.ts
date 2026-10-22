/* GetCertus addition (MPL-2.0, see GETCERTUS.md): admin console phrases. */
const errors = {
  something_went_wrong: 'Hopa! Ceva nu a funcționat.',
  page_not_found: 'Pagina nu a fost găsită',
  unknown_server_error: 'A apărut o eroare de server necunoscută',
  empty: 'Nu există date',
  missing_total_number: 'Total-Number nu a fost găsit în antetele răspunsului',
  invalid_uri_format: 'Format URI nevalid',
  invalid_origin_format: 'Format nevalid pentru originea URI',
  invalid_json_format: 'Format JSON nevalid',
  invalid_parameters_format: 'Format nevalid al parametrilor',
  invalid_regex: 'Expresie regulată nevalidă',
  invalid_error_message_format: 'Formatul mesajului de eroare nu este valid.',
  required_field_missing: 'Introdu {{field}}',
  required_field_missing_plural: 'Trebuie să introduci cel puțin un {{field}}',
  more_details: 'Mai multe detalii',
  username_pattern_error:
    'Numele de utilizator poate conține doar litere, cifre sau liniuțe de subliniere și nu poate începe cu o cifră.',
  email_pattern_error: 'Adresa de e-mail nu este validă.',
  phone_pattern_error: 'Numărul de telefon nu este valid.',
  insecure_contexts: 'Contextele nesigure (fără HTTPS) nu sunt acceptate.',
  unexpected_error: 'A apărut o eroare neașteptată.',
  not_found: '404 – negăsit',
  create_internal_role_violation:
    'Creezi un rol intern nou, ceea ce GetCertus nu permite. Alege alt nume, care nu începe cu "#internal:".',
  should_be_an_integer: 'Trebuie să fie un număr întreg.',
  number_should_be_between_inclusive: 'Numărul trebuie să fie între {{min}} și {{max}} (inclusiv).',
};

export default Object.freeze(errors);
