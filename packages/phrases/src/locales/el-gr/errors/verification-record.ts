/* GetCertus addition (MPL-2.0, see GETCERTUS.md): admin console phrases. */
const verification_record = {
  not_found: 'Η εγγραφή επαλήθευσης δεν βρέθηκε.',
  permission_denied: 'Δεν επιτρέπεται· συνδεθείτε ξανά.',
  not_supported_for_google_one_tap: 'Αυτό το API δεν υποστηρίζει το Google One Tap.',
  social_verification: {
    invalid_target:
      'Μη έγκυρη εγγραφή επαλήθευσης. Αναμενόταν {{expected}}, αλλά λήφθηκε {{actual}}.',
    token_response_not_found:
      'Δεν βρέθηκε απόκριση token. Ελέγξτε ότι η αποθήκευση tokens υποστηρίζεται και είναι ενεργή για τον κοινωνικό σύνδεσμο.',
  },
};

export default Object.freeze(verification_record);
