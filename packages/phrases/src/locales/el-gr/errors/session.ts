/* GetCertus addition (MPL-2.0, see GETCERTUS.md): admin console phrases. */
const session = {
  not_found: 'Η περίοδος σύνδεσης δεν βρέθηκε. Επιστρέψτε και συνδεθείτε ξανά.',
  invalid_credentials: 'Λανθασμένος λογαριασμός ή κωδικός. Ελέγξτε τα στοιχεία που εισαγάγατε.',
  invalid_sign_in_method: 'Η τρέχουσα μέθοδος σύνδεσης δεν είναι διαθέσιμη.',
  invalid_connector_id: 'Δεν βρέθηκε διαθέσιμος σύνδεσμος με ID {{connectorId}}.',
  insufficient_info: 'Ανεπαρκή στοιχεία σύνδεσης.',
  connector_id_mismatch: 'Το connectorId δεν ταιριάζει με την εγγραφή της περιόδου σύνδεσης.',
  connector_session_not_found:
    'Η περίοδος σύνδεσης του συνδέσμου δεν βρέθηκε. Επιστρέψτε και συνδεθείτε ξανά.',
  verification_session_not_found:
    'Η επαλήθευση δεν ολοκληρώθηκε. Ξεκινήστε ξανά τη ροή επαλήθευσης και δοκιμάστε ξανά.',
  verification_expired:
    'Η σύνδεση έληξε. Επαληθεύστε ξανά για να διασφαλίσετε την ασφάλεια του λογαριασμού σας.',
  verification_blocked_too_many_attempts:
    'Πάρα πολλές προσπάθειες σε σύντομο χρόνο. Δοκιμάστε ξανά {{relativeTime}}.',
  unauthorized: 'Συνδεθείτε πρώτα.',
  unsupported_prompt_name: 'Μη υποστηριζόμενο όνομα prompt.',
  forgot_password_not_enabled: 'Η επαναφορά ξεχασμένου κωδικού δεν είναι ενεργή.',
  verification_failed:
    'Η επαλήθευση δεν ολοκληρώθηκε. Ξεκινήστε ξανά τη ροή επαλήθευσης και δοκιμάστε ξανά.',
  connector_validation_session_not_found:
    'Δεν βρέθηκε η περίοδος σύνδεσης του συνδέσμου για την επικύρωση του token.',
  csrf_token_mismatch: 'Το CSRF token δεν ταιριάζει.',
  identifier_not_found: 'Το αναγνωριστικό χρήστη δεν βρέθηκε. Επιστρέψτε και συνδεθείτε ξανά.',
  interaction_not_found: 'Η περίοδος αλληλεπίδρασης δεν βρέθηκε. Επιστρέψτε και ξεκινήστε ξανά.',
  invalid_interaction_type:
    'Αυτή η λειτουργία δεν υποστηρίζεται για την τρέχουσα αλληλεπίδραση. Ξεκινήστε νέα περίοδο σύνδεσης.',
  not_supported_for_forgot_password:
    'Αυτή η λειτουργία δεν υποστηρίζεται για την επαναφορά ξεχασμένου κωδικού.',
  identity_conflict:
    'Εντοπίστηκε ασυμφωνία ταυτότητας. Ξεκινήστε νέα περίοδο σύνδεσης για να συνεχίσετε με άλλη ταυτότητα.',
  identifier_not_verified:
    'Το αναγνωριστικό {{identifier}} δεν έχει επαληθευτεί. Δημιουργήστε εγγραφή επαλήθευσης για αυτό το αναγνωριστικό και ολοκληρώστε τη διαδικασία επαλήθευσης.',
  mfa: {
    require_mfa_verification: 'Απαιτείται επαλήθευση MFA για σύνδεση.',
    mfa_sign_in_only: 'Το MFA είναι διαθέσιμο μόνο κατά τη σύνδεση.',
    pending_info_not_found: 'Δεν βρέθηκαν εκκρεμή στοιχεία MFA· ξεκινήστε πρώτα το MFA.',
    invalid_totp_code: 'Μη έγκυρος κωδικός TOTP.',
    webauthn_verification_failed: 'Η επαλήθευση WebAuthn απέτυχε.',
    webauthn_verification_not_found: 'Η επαλήθευση WebAuthn δεν βρέθηκε.',
    bind_mfa_existed: 'Το MFA υπάρχει ήδη.',
    backup_code_can_not_be_alone: 'Ο εφεδρικός κωδικός δεν μπορεί να είναι η μόνη μέθοδος MFA.',
    backup_code_required: 'Απαιτείται εφεδρικός κωδικός.',
    invalid_backup_code: 'Μη έγκυρος εφεδρικός κωδικός.',
    mfa_policy_not_user_controlled: 'Η πολιτική MFA δεν ελέγχεται από τον χρήστη.',
    mfa_factor_not_enabled: 'Ο παράγοντας MFA δεν είναι ενεργός.',
    suggest_additional_mfa:
      'Για ισχυρότερη προστασία, σκεφτείτε να προσθέσετε άλλη μία μέθοδο MFA. Μπορείτε να παραλείψετε αυτό το βήμα και να συνεχίσετε.',
  },
  trusted_device_suggest_opt_in: 'Επιλέξτε αν θέλετε να ορίσετε αυτή τη συσκευή ως αξιόπιστη.',
  step_up: {
    invalid_interaction_event:
      'Ο step-up έλεγχος ταυτότητας είναι διαθέσιμος μόνο κατά τη σύνδεση.',
    subject_not_found:
      'Δεν βρέθηκε πιστοποιημένη περίοδος σύνδεσης για step-up έλεγχο ταυτότητας. Συνδεθείτε ξανά.',
    forbidden_route: 'Αυτή η διαδρομή δεν επιτρέπεται κατά τον step-up έλεγχο ταυτότητας.',
    forbidden_identifier:
      'Δεν επιτρέπεται αναγνωριστικό κατά τον step-up έλεγχο ταυτότητας. Δοκιμάστε ξανά χωρίς το πεδίο αναγνωριστικού.',
    acr_not_satisfied:
      'Η επαλήθευση που ολοκληρώθηκε δεν ικανοποιεί το ζητούμενο πλαίσιο ελέγχου ταυτότητας. Επαληθεύστε με άλλη μέθοδο.',
    require_verification:
      'Απαιτείται επαλήθευση με μία από τις υπάρχουσες μεθόδους σας για να επιτευχθεί το ζητούμενο πλαίσιο ελέγχου ταυτότητας.',
  },
  passkey_sign_in: {
    pending_info_not_found:
      'Δεν βρέθηκαν εκκρεμή στοιχεία σύνδεσης με κλειδί πρόσβασης. Ξεκινήστε ξανά τη ροή σύνδεσης.',
    conflict_rp_id:
      'Το αναγνωριστικό Relying Party δεν ταιριάζει. Χρησιμοποιήστε τον σωστό client για σύνδεση.',
    sso_users_not_allowed: 'Η σύνδεση με κλειδί πρόσβασης δεν είναι διαθέσιμη για χρήστες SSO.',
  },
  password_expiration: {
    reset_not_allowed:
      'Η επαναφορά κωδικού επιτρέπεται μόνο αφού λήξει ο κωδικός στην τρέχουσα περίοδο σύνδεσης.',
  },
  sso_enabled: 'Το single sign-on είναι ενεργό για αυτό το email. Συνδεθείτε με SSO.',
  captcha_required: 'Απαιτείται captcha.',
  captcha_failed: 'Η επαλήθευση captcha απέτυχε.',
  email_blocklist: {
    disposable_email_validation_failed: 'Η επικύρωση της διεύθυνσης email απέτυχε.',
    invalid_email: 'Μη έγκυρη διεύθυνση email.',
    email_subaddressing_not_allowed: 'Δεν επιτρέπεται η υποδιευθυνσιοδότηση email.',
    email_not_allowed: 'Η διεύθυνση email "{{email}}" είναι περιορισμένη. Επιλέξτε διαφορετική.',
  },
  google_one_tap: {
    cookie_mismatch: 'Το cookie του Google One Tap δεν ταιριάζει.',
    invalid_id_token: 'Μη έγκυρο Google ID token.',
    unverified_email: 'Μη επαληθευμένο email.',
  },
};

export default Object.freeze(session);
