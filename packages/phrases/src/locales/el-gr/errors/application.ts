/* GetCertus addition (MPL-2.0, see GETCERTUS.md): admin console phrases. */
const application = {
  invalid_type: 'Μόνο οι εφαρμογές μηχανής προς μηχανή μπορούν να έχουν συσχετισμένους ρόλους.',
  role_exists: 'Το αναγνωριστικό ρόλου {{roleId}} έχει ήδη προστεθεί σε αυτή την εφαρμογή.',
  invalid_role_type: 'Δεν μπορεί να ανατεθεί ρόλος τύπου χρήστη σε εφαρμογή μηχανής προς μηχανή.',
  invalid_third_party_application_type:
    'Μόνο οι παραδοσιακές web εφαρμογές, οι εφαρμογές μίας σελίδας και οι εγγενείς εφαρμογές μπορούν να επισημανθούν ως εφαρμογές τρίτων.',
  third_party_application_only: 'Η λειτουργία είναι διαθέσιμη μόνο για εφαρμογές τρίτων.',
  third_party_application_cannot_enable_token_exchange:
    'Οι εφαρμογές τρίτων δεν επιτρέπεται να ενεργοποιούν το token exchange.',
  user_consent_scopes_not_found: 'Μη έγκυρα scopes συναίνεσης χρήστη.',
  consent_management_api_scopes_not_allowed: 'Τα scopes του Management API δεν επιτρέπονται.',
  device_flow_native_only: 'Το device flow είναι διαθέσιμο μόνο για εγγενείς εφαρμογές.',
  device_flow_not_changeable:
    'Το device flow δεν μπορεί να αλλάξει μετά τη δημιουργία της εφαρμογής.',
  protected_app_metadata_is_required:
    'Τα μεταδεδομένα της προστατευμένης εφαρμογής είναι υποχρεωτικά.',
  protected_app_not_configured:
    'Δεν έχει ρυθμιστεί πάροχος προστατευμένων εφαρμογών. Η λειτουργία δεν είναι διαθέσιμη στην έκδοση ανοιχτού κώδικα.',
  cloudflare_unknown_error: 'Άγνωστο σφάλμα κατά την κλήση του Cloudflare API',
  protected_application_only: 'Η λειτουργία είναι διαθέσιμη μόνο για προστατευμένες εφαρμογές.',
  protected_application_misconfigured: 'Η προστατευμένη εφαρμογή δεν έχει ρυθμιστεί σωστά.',
  protected_application_subdomain_exists:
    'Ο υποτομέας της προστατευμένης εφαρμογής χρησιμοποιείται ήδη.',
  invalid_subdomain: 'Μη έγκυρος υποτομέας.',
  custom_domain_not_found: 'Ο προσαρμοσμένος τομέας δεν βρέθηκε.',
  should_delete_custom_domains_first: 'Διαγράψτε πρώτα τους προσαρμοσμένους τομείς.',
  no_legacy_secret_found: 'Η εφαρμογή δεν έχει παλαιό μυστικό.',
  secret_name_exists: 'Υπάρχει ήδη μυστικό με αυτό το όνομα.',
  sync_application_secret_failed: 'Ο συγχρονισμός του μυστικού της εφαρμογής απέτυχε.',
  saml: {
    use_saml_app_api:
      'Χρησιμοποιήστε το API `[METHOD] /saml-applications(/.*)?` για διαχείριση εφαρμογών SAML.',
    saml_application_only: 'Το API είναι διαθέσιμο μόνο για εφαρμογές SAML.',
    reach_oss_limit:
      'ΔΕΝ μπορείτε να δημιουργήσετε άλλες εφαρμογές SAML, καθώς συμπληρώθηκε το όριο των {{limit}}.',
    acs_url_binding_not_supported:
      'Για τη λήψη SAML assertions υποστηρίζεται μόνο το binding HTTP-POST.',
    acs_url_scheme_not_supported:
      'Για το URL του Assertion Consumer Service υποστηρίζονται μόνο τα σχήματα HTTP και HTTPS.',
    can_not_delete_active_secret: 'Το ενεργό μυστικό δεν μπορεί να διαγραφεί.',
    no_active_secret: 'Δεν βρέθηκε ενεργό μυστικό.',
    entity_id_required: 'Απαιτείται Entity ID για τη δημιουργία μεταδεδομένων.',
    name_id_format_required: 'Απαιτείται μορφή Name ID.',
    unsupported_name_id_format: 'Μη υποστηριζόμενη μορφή Name ID.',
    missing_email_address: 'Ο χρήστης δεν έχει διεύθυνση email.',
    email_address_unverified: 'Η διεύθυνση email του χρήστη δεν έχει επαληθευτεί.',
    invalid_certificate_pem_format: 'Μη έγκυρη μορφή PEM πιστοποιητικού',
    acs_url_required: 'Απαιτείται URL του Assertion Consumer Service.',
    private_key_required: 'Απαιτείται ιδιωτικό κλειδί.',
    certificate_required: 'Απαιτείται πιστοποιητικό.',
    invalid_saml_request: 'Μη έγκυρο αίτημα ελέγχου ταυτότητας SAML.',
    auth_request_issuer_not_match:
      'Ο εκδότης του αιτήματος ελέγχου ταυτότητας SAML δεν ταιριάζει με το Entity ID του παρόχου υπηρεσιών.',
    sp_initiated_saml_sso_session_not_found_in_cookies:
      'Το αναγνωριστικό της περιόδου SAML SSO που ξεκίνησε ο πάροχος υπηρεσιών δεν βρέθηκε στα cookies.',
    sp_initiated_saml_sso_session_not_found:
      'Η περίοδος SAML SSO που ξεκίνησε ο πάροχος υπηρεσιών δεν βρέθηκε.',
    state_mismatch: 'Το `state` δεν ταιριάζει.',
  },
};

export default Object.freeze(application);
