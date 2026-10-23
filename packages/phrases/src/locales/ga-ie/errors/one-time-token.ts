/* GetCertus addition (MPL-2.0, see GETCERTUS.md): admin console phrases. */
const one_time_token = {
  token_not_found: 'Níor aimsíodh an comhartha {{token}}.',
  email_mismatch: 'Ní mheaitseálann an ríomhphost leis an gcomhartha a tugadh.',
  interaction_event_mismatch: 'Ní féidir an comhartha a úsáid don idirghníomhaíocht seo.',
  token_expired: 'Tá an comhartha imithe in éag.',
  token_consumed: 'Úsáideadh an comhartha cheana.',
  token_revoked: 'Cúlghaireadh an comhartha.',
  cannot_reactivate_token: 'Ní féidir an comhartha a athghníomhachtú.',
};

export default Object.freeze(one_time_token);
