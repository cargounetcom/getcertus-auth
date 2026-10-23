/* GetCertus addition (MPL-2.0, see GETCERTUS.md): admin console phrases. */
const verification_code = {
  phone_email_empty: 'Både telefon och e-post är tomma.',
  not_found: 'Verifieringskoden hittades inte. Skicka en verifieringskod först.',
  phone_mismatch: 'Telefonnumret stämmer inte. Begär en ny verifieringskod.',
  email_mismatch: 'E-postadressen stämmer inte. Begär en ny verifieringskod.',
  code_mismatch: 'Ogiltig verifieringskod.',
  expired: 'Verifieringskoden har gått ut. Begär en ny verifieringskod.',
  exceed_max_try:
    'Maxantalet försök för verifieringskoden har överskridits. Begär en ny verifieringskod.',
};

export default Object.freeze(verification_code);
