/* GetCertus addition (MPL-2.0, see GETCERTUS.md): admin console phrases. */
const connector = {
  general: 'Παρουσιάστηκε σφάλμα στον σύνδεσμο: {{errorDescription}}',
  not_found: 'Δεν βρέθηκε διαθέσιμος σύνδεσμος για τον τύπο: {{type}}.',
  not_enabled: 'Ο σύνδεσμος δεν είναι ενεργός.',
  invalid_metadata: 'Τα μεταδεδομένα του συνδέσμου δεν είναι έγκυρα.',
  invalid_config_guard: 'Το config guard του συνδέσμου δεν είναι έγκυρο.',
  unexpected_type: 'Ο τύπος του συνδέσμου είναι μη αναμενόμενος.',
  invalid_request_parameters: 'Το αίτημα έχει λανθασμένες παραμέτρους εισόδου.',
  insufficient_request_parameters: 'Ίσως λείπουν ορισμένες παράμετροι εισόδου από το αίτημα.',
  invalid_config: 'Η ρύθμιση του συνδέσμου δεν είναι έγκυρη.',
  invalid_certificate:
    'Το πιστοποιητικό του συνδέσμου δεν είναι έγκυρο· βεβαιωθείτε ότι είναι σε κωδικοποίηση PEM.',
  invalid_response: 'Η απόκριση του συνδέσμου δεν είναι έγκυρη.',
  template_not_found: 'Δεν βρέθηκε το σωστό πρότυπο στη ρύθμιση του συνδέσμου.',
  template_not_supported: 'Ο σύνδεσμος δεν υποστηρίζει αυτόν τον τύπο προτύπου.',
  rate_limit_exceeded: 'Έγινε υπέρβαση του ορίου ρυθμού. Δοκιμάστε ξανά αργότερα.',
  usage_limit_exceeded: 'Συμπληρώθηκε το όριο χρήσης της υπηρεσίας email.',
  not_implemented: '{{method}}: δεν έχει υλοποιηθεί ακόμα.',
  social_invalid_access_token: 'Το access token του συνδέσμου δεν είναι έγκυρο.',
  invalid_auth_code: 'Ο κωδικός εξουσιοδότησης του συνδέσμου δεν είναι έγκυρος.',
  social_invalid_id_token: 'Το ID token του συνδέσμου δεν είναι έγκυρο.',
  authorization_failed: 'Η διαδικασία εξουσιοδότησης του χρήστη απέτυχε.',
  social_auth_code_invalid:
    'Δεν ήταν δυνατή η λήψη access token· ελέγξτε τον κωδικό εξουσιοδότησης.',
  more_than_one_sms: 'Υπάρχουν περισσότεροι από 1 σύνδεσμοι SMS.',
  more_than_one_email: 'Υπάρχουν περισσότεροι από 1 σύνδεσμοι email.',
  more_than_one_connector_factory:
    'Βρέθηκαν πολλά connector factories (με id {{connectorIds}})· μπορείτε να απεγκαταστήσετε όσα δεν χρειάζονται.',
  db_connector_type_mismatch: 'Υπάρχει σύνδεσμος στη βάση δεδομένων με τύπο που δεν ταιριάζει.',
  not_found_with_connector_id: 'Δεν βρέθηκε σύνδεσμος με το δοθέν αναγνωριστικό τυπικού συνδέσμου.',
  multiple_instances_not_supported:
    'Δεν είναι δυνατή η δημιουργία πολλαπλών instances του επιλεγμένου τυπικού συνδέσμου.',
  invalid_type_for_syncing_profile:
    'Μπορείτε να συγχρονίσετε το προφίλ χρήστη μόνο με κοινωνικούς συνδέσμους.',
  can_not_modify_target: "Το 'target' του συνδέσμου δεν μπορεί να τροποποιηθεί.",
  should_specify_target: "Πρέπει να ορίσετε 'target'.",
  multiple_target_with_same_platform:
    'Δεν μπορείτε να έχετε πολλούς κοινωνικούς συνδέσμους με το ίδιο target και την ίδια πλατφόρμα.',
  cannot_overwrite_metadata_for_non_standard_connector:
    "Τα 'metadata' αυτού του συνδέσμου δεν μπορούν να αντικατασταθούν.",
  email_connector: {
    bulk_deletion_no_filter:
      'Για μαζική διαγραφή βάσει ιδιοτήτων πρέπει να δοθεί τουλάχιστον μία συνθήκη φίλτρου. Υποστηριζόμενες ιδιότητες: {{properties, list(type:conjunction)}}.',
  },
  token_storage_not_supported: 'Αυτός ο σύνδεσμος δεν υποστηρίζει αποθήκευση tokens. ',
};

export default Object.freeze(connector);
