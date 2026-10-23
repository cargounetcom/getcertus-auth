/* GetCertus addition (MPL-2.0, see GETCERTUS.md): admin console phrases. */
const one_time_token = {
  token_not_found: 'Tokenul {{token}} nu a fost găsit.',
  email_mismatch: 'E-mailul nu corespunde cu tokenul dat.',
  interaction_event_mismatch: 'Tokenul nu poate fi folosit pentru această interacțiune.',
  token_expired: 'Tokenul a expirat.',
  token_consumed: 'Tokenul a fost deja folosit.',
  token_revoked: 'Tokenul a fost revocat.',
  cannot_reactivate_token: 'Tokenul nu poate fi reactivat.',
};

export default Object.freeze(one_time_token);
