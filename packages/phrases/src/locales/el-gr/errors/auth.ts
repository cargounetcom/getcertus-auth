/* GetCertus addition (MPL-2.0, see GETCERTUS.md): admin console phrases. */
const auth = {
  authorization_header_missing: 'Λείπει η κεφαλίδα εξουσιοδότησης.',
  authorization_token_type_not_supported: 'Ο τύπος εξουσιοδότησης δεν υποστηρίζεται.',
  unauthorized: 'Μη εξουσιοδοτημένο. Ελέγξτε τα διαπιστευτήρια και το scope τους.',
  forbidden: 'Απαγορεύεται. Ελέγξτε τους ρόλους και τα δικαιώματα του χρήστη σας.',
  expected_role_not_found:
    'Ο αναμενόμενος ρόλος δεν βρέθηκε. Ελέγξτε τους ρόλους και τα δικαιώματα του χρήστη σας.',
  jwt_sub_missing: 'Λείπει το `sub` από το JWT.',
  require_re_authentication:
    'Απαιτείται εκ νέου έλεγχος ταυτότητας για την εκτέλεση προστατευμένης ενέργειας.',
  exceed_token_limit: 'Έγινε υπέρβαση του ορίου tokens. Επικοινωνήστε με τον διαχειριστή σας.',
  third_party_application_forbidden:
    'Οι εφαρμογές τρίτων δεν μπορούν να τροποποιούν δεδομένα λογαριασμού μέσω αυτού του API.',
};

export default Object.freeze(auth);
