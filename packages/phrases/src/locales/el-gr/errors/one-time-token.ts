/* GetCertus addition (MPL-2.0, see GETCERTUS.md): admin console phrases. */
const one_time_token = {
  token_not_found: 'Το token {{token}} δεν βρέθηκε.',
  email_mismatch: 'Το email δεν ταιριάζει με το δοθέν token.',
  interaction_event_mismatch: 'Το token δεν μπορεί να χρησιμοποιηθεί για αυτή την αλληλεπίδραση.',
  token_expired: 'Το token έχει λήξει.',
  token_consumed: 'Το token έχει ήδη χρησιμοποιηθεί.',
  token_revoked: 'Το token έχει ανακληθεί.',
  cannot_reactivate_token: 'Το token δεν μπορεί να επανενεργοποιηθεί.',
};

export default Object.freeze(one_time_token);
