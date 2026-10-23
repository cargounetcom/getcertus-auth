/* GetCertus addition (MPL-2.0, see GETCERTUS.md): admin console phrases. */
const request = {
  invalid_input: 'Datele de intrare nu sunt valide. {{details}}',
  general: 'A apărut o eroare la cerere.',
  range_not_satisfiable: 'Intervalul solicitat nu poate fi furnizat.',
  feature_not_supported: 'Această funcție nu este acceptată în mediul curent.',
  rate_limited: 'Prea multe cereri. Încearcă din nou mai târziu.',
  message_rate_limited:
    'Au fost trimise prea multe mesaje către acest destinatar. Încearcă din nou mai târziu.',
};

export default Object.freeze(request);
