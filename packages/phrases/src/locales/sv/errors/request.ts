/* GetCertus addition (MPL-2.0, see GETCERTUS.md): admin console phrases. */
const request = {
  invalid_input: 'Ogiltig indata. {{details}}',
  general: 'Ett fel uppstod i förfrågan.',
  range_not_satisfiable: 'Det begärda intervallet kan inte levereras.',
  feature_not_supported: 'Funktionen stöds inte i den aktuella miljön.',
  rate_limited: 'För många förfrågningar. Försök igen senare.',
  message_rate_limited:
    'För många meddelanden har skickats till den här mottagaren. Försök igen senare.',
};

export default Object.freeze(request);
