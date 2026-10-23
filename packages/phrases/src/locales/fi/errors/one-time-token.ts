/* GetCertus addition (MPL-2.0, see GETCERTUS.md): admin console phrases. */
const one_time_token = {
  token_not_found: 'Tunnusta {{token}} ei löytynyt.',
  email_mismatch: 'Sähköpostiosoite ei vastaa annettua tunnusta.',
  interaction_event_mismatch: 'Tunnusta ei voi käyttää tähän vuorovaikutukseen.',
  token_expired: 'Tunnus on vanhentunut.',
  token_consumed: 'Tunnus on jo käytetty.',
  token_revoked: 'Tunnus on mitätöity.',
  cannot_reactivate_token: 'Tunnusta ei voi aktivoida uudelleen.',
};

export default Object.freeze(one_time_token);
