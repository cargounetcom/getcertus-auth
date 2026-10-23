/* GetCertus addition (MPL-2.0, see GETCERTUS.md): admin console phrases. */
const organization = {
  require_membership: 'Ο χρήστης πρέπει να είναι μέλος του οργανισμού για να συνεχίσει.',
  role_names_not_found:
    'Εντοπίστηκαν μη έγκυρα ονόματα ρόλων: {{names,list(type:conjunction)}}. Δημιουργήστε πρώτα αυτούς τους ρόλους πριν συνεχίσετε.',
};

export default Object.freeze(organization);
