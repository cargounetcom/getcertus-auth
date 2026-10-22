/* GetCertus addition (MPL-2.0, see GETCERTUS.md): admin console phrases. */
const errors = {
  something_went_wrong: 'Ωχ! Κάτι πήγε στραβά.',
  page_not_found: 'Η σελίδα δεν βρέθηκε',
  unknown_server_error: 'Παρουσιάστηκε άγνωστο σφάλμα διακομιστή',
  empty: 'Δεν υπάρχουν δεδομένα',
  missing_total_number: 'Δεν βρέθηκε το Total-Number στις κεφαλίδες της απόκρισης',
  invalid_uri_format: 'Μη έγκυρη μορφή URI',
  invalid_origin_format: 'Μη έγκυρη μορφή προέλευσης URI',
  invalid_json_format: 'Μη έγκυρη μορφή JSON',
  invalid_parameters_format: 'Μη έγκυρη μορφή παραμέτρων',
  invalid_regex: 'Μη έγκυρη κανονική έκφραση',
  invalid_error_message_format: 'Η μορφή του μηνύματος σφάλματος δεν είναι έγκυρη.',
  required_field_missing: 'Εισαγάγετε {{field}}',
  required_field_missing_plural: 'Πρέπει να εισαγάγετε τουλάχιστον ένα {{field}}',
  more_details: 'Περισσότερες λεπτομέρειες',
  username_pattern_error:
    'Το όνομα χρήστη μπορεί να περιέχει μόνο γράμματα, αριθμούς ή κάτω παύλες και δεν πρέπει να ξεκινά με αριθμό.',
  email_pattern_error: 'Η διεύθυνση email δεν είναι έγκυρη.',
  phone_pattern_error: 'Ο αριθμός τηλεφώνου δεν είναι έγκυρος.',
  insecure_contexts: 'Τα μη ασφαλή περιβάλλοντα (χωρίς HTTPS) δεν υποστηρίζονται.',
  unexpected_error: 'Παρουσιάστηκε απρόσμενο σφάλμα.',
  not_found: '404 δεν βρέθηκε',
  create_internal_role_violation:
    'Δημιουργείτε νέο εσωτερικό ρόλο, κάτι που δεν επιτρέπει το GetCertus. Επιλέξτε όνομα που δεν ξεκινά με "#internal:".',
  should_be_an_integer: 'Πρέπει να είναι ακέραιος αριθμός.',
  number_should_be_between_inclusive:
    'Ο αριθμός πρέπει να είναι μεταξύ {{min}} και {{max}} (συμπεριλαμβανομένων).',
};

export default Object.freeze(errors);
