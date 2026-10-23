/* GetCertus addition (MPL-2.0, see GETCERTUS.md): admin console phrases. */
const one_time_token = {
  token_not_found: 'Token {{token}} hittades inte.',
  email_mismatch: 'E-postadressen stämmer inte med angiven token.',
  interaction_event_mismatch: 'Token kan inte användas för den här interaktionen.',
  token_expired: 'Token har gått ut.',
  token_consumed: 'Token har redan använts.',
  token_revoked: 'Token har återkallats.',
  cannot_reactivate_token: 'Token kan inte återaktiveras.',
};

export default Object.freeze(one_time_token);
