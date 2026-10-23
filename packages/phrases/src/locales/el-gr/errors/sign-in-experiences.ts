/* GetCertus addition (MPL-2.0, see GETCERTUS.md): admin console phrases. */
const sign_in_experiences = {
  empty_content_url_of_terms_of_use:
    'Το URL περιεχομένου των "Όρων χρήσης" είναι κενό. Προσθέστε το URL περιεχομένου αν οι "Όροι χρήσης" είναι ενεργοί.',
  empty_social_connectors:
    'Δεν υπάρχουν κοινωνικοί σύνδεσμοι. Προσθέστε ενεργούς κοινωνικούς συνδέσμους όταν είναι ενεργή η κοινωνική σύνδεση.',
  enabled_connector_not_found: 'Δεν βρέθηκε ενεργός σύνδεσμος {{type}}.',
  not_one_and_only_one_primary_sign_in_method:
    'Πρέπει να υπάρχει μία και μόνο μία κύρια μέθοδος σύνδεσης. Ελέγξτε τα στοιχεία που εισαγάγατε.',
  username_requires_password:
    'Για το αναγνωριστικό εγγραφής όνομα χρήστη πρέπει να ενεργοποιηθεί ο ορισμός κωδικού.',
  passwordless_requires_verify:
    'Για το αναγνωριστικό εγγραφής email/τηλέφωνο πρέπει να ενεργοποιηθεί η επαλήθευση.',
  miss_sign_up_identifier_in_sign_in:
    'Οι μέθοδοι σύνδεσης πρέπει να περιλαμβάνουν το αναγνωριστικό εγγραφής.',
  password_sign_in_must_be_enabled:
    'Η σύνδεση με κωδικό πρέπει να είναι ενεργή όταν απαιτείται ορισμός κωδικού κατά την εγγραφή.',
  code_sign_in_must_be_enabled:
    'Η σύνδεση με κωδικό επαλήθευσης πρέπει να είναι ενεργή όταν δεν απαιτείται ορισμός κωδικού κατά την εγγραφή.',
  unsupported_default_language: 'Η γλώσσα {{language}} δεν υποστηρίζεται προς το παρόν.',
  at_least_one_authentication_factor:
    'Πρέπει να επιλέξετε τουλάχιστον έναν παράγοντα ελέγχου ταυτότητας.',
  backup_code_cannot_be_enabled_alone: 'Ο εφεδρικός κωδικός δεν μπορεί να ενεργοποιηθεί μόνος του.',
  duplicated_mfa_factors: 'Διπλότυποι παράγοντες MFA.',
  email_verification_code_cannot_be_used_for_mfa:
    'Ο κωδικός επαλήθευσης μέσω email δεν μπορεί να χρησιμοποιηθεί για MFA όταν η επαλήθευση μέσω email είναι ενεργή για τη σύνδεση.',
  phone_verification_code_cannot_be_used_for_mfa:
    'Ο κωδικός επαλήθευσης μέσω SMS δεν μπορεί να χρησιμοποιηθεί για MFA όταν η επαλήθευση μέσω SMS είναι ενεργή για τη σύνδεση.',
  email_verification_code_cannot_be_used_for_sign_in:
    'Ο κωδικός επαλήθευσης μέσω email δεν μπορεί να χρησιμοποιηθεί για σύνδεση όταν είναι ενεργός για MFA.',
  phone_verification_code_cannot_be_used_for_sign_in:
    'Ο κωδικός επαλήθευσης μέσω SMS δεν μπορεί να χρησιμοποιηθεί για σύνδεση όταν είναι ενεργός για MFA.',
  adaptive_mfa_requires_mfa:
    'Το MFA πρέπει να είναι ενεργό πριν ενεργοποιηθεί το προσαρμοστικό MFA.',
  adaptive_mfa_requires_non_skippable_policy:
    'Το προσαρμοστικό MFA απαιτεί πολιτική υπενθύμισης MFA χωρίς δυνατότητα παράλειψης. Χρησιμοποιήστε PromptOnlyAtSignInMandatory ή PromptAtSignInAndSignUpMandatory.',
  non_adaptive_mfa_requires_skippable_policy:
    'Όταν το προσαρμοστικό MFA είναι ανενεργό, η πολιτική υπενθύμισης MFA πρέπει να επιτρέπει παράλειψη. Μη χρησιμοποιείτε PromptOnlyAtSignInMandatory ή PromptAtSignInAndSignUpMandatory.',
  duplicated_sign_up_identifiers: 'Εντοπίστηκαν διπλότυπα αναγνωριστικά εγγραφής.',
  missing_sign_up_identifiers: 'Το κύριο αναγνωριστικό εγγραφής δεν μπορεί να είναι κενό.',
  invalid_custom_email_blocklist_format:
    'Μη έγκυρα στοιχεία στην προσαρμοσμένη λίστα αποκλεισμού email: {{items, list(type:conjunction)}}. Κάθε στοιχείο πρέπει να είναι έγκυρη διεύθυνση email ή τομέας email, π.χ. foo@example.com ή @example.com.',
  forgot_password_method_requires_connector:
    'Η μέθοδος επαναφοράς ξεχασμένου κωδικού απαιτεί ρυθμισμένο σύνδεσμο {{method}}.',
  password_expiration_requires_forgot_password:
    'Η λήξη κωδικού απαιτεί τουλάχιστον μία μέθοδο επαναφοράς ξεχασμένου κωδικού με έγκυρο σύνδεσμο.',
  password_expiration_not_enabled:
    'Η πολιτική λήξης κωδικού δεν είναι ενεργή. Ενεργοποιήστε την στις ρυθμίσεις εμπειρίας σύνδεσης πριν κάνετε τους κωδικούς να λήξουν.',
  password_expiration_invalid_period_days:
    'Οι ημέρες ισχύος πρέπει να είναι θετικός ακέραιος όταν η λήξη κωδικού είναι ενεργή.',
  username_policy_case_conflicts_exist:
    'Δεν είναι δυνατή η μετάβαση σε ονόματα χρήστη χωρίς διάκριση πεζών-κεφαλαίων ενώ υπάρχουν ονόματα που διαφέρουν μόνο ως προς αυτό. Επιλύστε τις διενέξεις και δοκιμάστε ξανά.',
};

export default Object.freeze(sign_in_experiences);
