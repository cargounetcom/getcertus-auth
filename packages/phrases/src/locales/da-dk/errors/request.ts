/* GetCertus addition (MPL-2.0, see GETCERTUS.md): admin console phrases. */
const request = {
  invalid_input: 'Inputtet er ugyldigt. {{details}}',
  general: 'Der opstod en fejl i anmodningen.',
  range_not_satisfiable: 'Det anmodede interval kan ikke leveres.',
  feature_not_supported: 'Funktionen understøttes ikke i det aktuelle miljø.',
  rate_limited: 'For mange anmodninger. Prøv igen senere.',
  message_rate_limited: 'Der er sendt for mange beskeder til denne modtager. Prøv igen senere.',
};

export default Object.freeze(request);
