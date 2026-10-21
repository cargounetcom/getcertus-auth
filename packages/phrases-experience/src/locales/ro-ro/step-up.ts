/* GetCertus addition (MPL-2.0, see GETCERTUS.md): sign-in experience phrases. */
const step_up = {
  verify_your_identity: 'Verifică-ți identitatea',
  choose_method_description:
    'Pentru a continua, confirmă că ești tu prin una dintre metodele următoare.',
  password: 'Parolă',
  password_description: 'Introdu parola contului',
  enter_password_description: 'Introdu parola contului pentru a continua.',
  enter_verification_code_description: 'Introdu codul de verificare trimis la {{identifier}}.',
  subject_proof_description:
    'Pentru a continua, confirmă că ești tu printr-un cont asociat cu al tău. Apoi poți configura o metodă de verificare.',
  no_method_available: 'Nicio metodă de verificare disponibilă',
  no_method_available_description:
    'Contul tău nu are nicio metodă care să finalizeze această verificare. Contactează administratorul pentru asistență.',
};

export default Object.freeze(step_up);
