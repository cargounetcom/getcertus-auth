/* GetCertus addition (MPL-2.0, see GETCERTUS.md): admin console phrases. */
const request = {
  invalid_input: 'Syöte on virheellinen. {{details}}',
  general: 'Pyynnössä tapahtui virhe.',
  range_not_satisfiable: 'Pyydettyä aluetta ei voida toimittaa.',
  feature_not_supported: 'Tätä ominaisuutta ei tueta nykyisessä ympäristössä.',
  rate_limited: 'Liian monta pyyntöä. Yritä myöhemmin uudelleen.',
  message_rate_limited:
    'Tälle vastaanottajalle on lähetetty liian monta viestiä. Yritä myöhemmin uudelleen.',
};

export default Object.freeze(request);
