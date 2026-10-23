/* GetCertus addition (MPL-2.0, see GETCERTUS.md): admin console phrases. */
const verification_code = {
  phone_email_empty: 'Både telefon og e-mail er tomme.',
  not_found: 'Bekræftelseskoden blev ikke fundet. Send en bekræftelseskode først.',
  phone_mismatch: 'Telefonnummeret stemmer ikke overens. Anmod om en ny bekræftelseskode.',
  email_mismatch: 'E-mailadressen stemmer ikke overens. Anmod om en ny bekræftelseskode.',
  code_mismatch: 'Ugyldig bekræftelseskode.',
  expired: 'Bekræftelseskoden er udløbet. Anmod om en ny bekræftelseskode.',
  exceed_max_try:
    'Det maksimale antal forsøg for bekræftelseskoden er overskredet. Anmod om en ny bekræftelseskode.',
};

export default Object.freeze(verification_code);
