/* GetCertus addition (MPL-2.0, see GETCERTUS.md): admin console phrases. */
const one_time_token = {
  token_not_found: 'Token {{token}} niet gevonden.',
  email_mismatch: 'Het e-mailadres komt niet overeen met het opgegeven token.',
  interaction_event_mismatch: 'Het token kan niet voor deze interactie worden gebruikt.',
  token_expired: 'Het token is verlopen.',
  token_consumed: 'Het token is al gebruikt.',
  token_revoked: 'Het token is ingetrokken.',
  cannot_reactivate_token: 'Het token kan niet opnieuw worden geactiveerd.',
};

export default Object.freeze(one_time_token);
