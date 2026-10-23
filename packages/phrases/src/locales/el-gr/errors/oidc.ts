/* GetCertus addition (MPL-2.0, see GETCERTUS.md): admin console phrases. */
const oidc = {
  aborted: 'Ο τελικός χρήστης διέκοψε την αλληλεπίδραση.',
  invalid_scope: 'Μη έγκυρο scope: {{scope}}.',
  invalid_token: 'Δόθηκε μη έγκυρο token.',
  invalid_client_metadata: 'Δόθηκαν μη έγκυρα μεταδεδομένα client.',
  insufficient_scope: 'Λείπει το scope `{{scope}}` από το token.',
  invalid_request: 'Το αίτημα δεν είναι έγκυρο.',
  invalid_grant: 'Το αίτημα grant δεν είναι έγκυρο.',
  invalid_issuer: 'Μη έγκυρος εκδότης.',
  invalid_redirect_uri:
    'Το `redirect_uri` δεν αντιστοιχεί σε κανένα από τα καταχωρισμένα `redirect_uris` του client.',
  access_denied: 'Η πρόσβαση απορρίφθηκε.',
  invalid_target: 'Μη έγκυρη ένδειξη πόρου.',
  unsupported_grant_type: 'Το ζητούμενο `grant_type` δεν υποστηρίζεται.',
  unsupported_response_mode: 'Το ζητούμενο `response_mode` δεν υποστηρίζεται.',
  unsupported_response_type: 'Το ζητούμενο `response_type` δεν υποστηρίζεται.',
  provider_error: 'Εσωτερικό σφάλμα OIDC: {{message}}.',
  server_error: 'Παρουσιάστηκε άγνωστο σφάλμα OIDC. Δοκιμάστε ξανά αργότερα.',
  provider_error_fallback: 'Παρουσιάστηκε σφάλμα OIDC: {{code}}.',
  custom_claims_script_error: 'Σφάλμα στο script προσαρμοσμένων claims: {{error_description}}',
  key_required: 'Απαιτείται τουλάχιστον ένα κλειδί.',
  key_not_found: 'Το κλειδί με ID {{id}} δεν βρέθηκε.',
  only_previous_key_can_be_deleted: 'Μόνο ένα προηγούμενο κλειδί μπορεί να διαγραφεί.',
  invalid_session_payload: 'Μη έγκυρο payload περιόδου σύνδεσης.',
  session_not_found: 'Η περίοδος σύνδεσης δεν βρέθηκε.',
  invalid_session_account_id: 'Το accountId της περιόδου σύνδεσης δεν ταιριάζει.',
  failed_to_revoke_grant: 'Η ανάκληση του grant απέτυχε.',
  failed_to_cleanup_session_authorization:
    'Ο καθαρισμός της εξουσιοδότησης περιόδου σύνδεσης απέτυχε.',
};

export default Object.freeze(oidc);
