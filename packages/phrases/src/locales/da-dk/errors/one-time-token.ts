/* GetCertus addition (MPL-2.0, see GETCERTUS.md): admin console phrases. */
const one_time_token = {
  token_not_found: 'Tokenet {{token}} blev ikke fundet.',
  email_mismatch: 'E-mailadressen stemmer ikke overens med det angivne token.',
  interaction_event_mismatch: 'Tokenet kan ikke bruges til denne interaktion.',
  token_expired: 'Tokenet er udløbet.',
  token_consumed: 'Tokenet er allerede brugt.',
  token_revoked: 'Tokenet er tilbagekaldt.',
  cannot_reactivate_token: 'Tokenet kan ikke genaktiveres.',
};

export default Object.freeze(one_time_token);
