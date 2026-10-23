/* GetCertus addition (MPL-2.0, see GETCERTUS.md): admin console phrases. */
const user = {
  id_already_in_use: 'Αυτό το αναγνωριστικό χρήστη χρησιμοποιείται ήδη.',
  username_already_in_use: 'Αυτό το όνομα χρήστη χρησιμοποιείται ήδη.',
  username_starts_with_number: 'Το όνομα χρήστη δεν μπορεί να ξεκινά με αριθμό.',
  username_invalid_charset_hard:
    'Το όνομα χρήστη μπορεί να περιέχει μόνο γράμματα, αριθμούς και κάτω παύλες.',
  username_too_short: 'Το όνομα χρήστη είναι πολύ σύντομο.',
  username_too_long: 'Το όνομα χρήστη είναι πολύ μεγάλο.',
  username_uppercase_not_allowed: 'Το όνομα χρήστη δεν μπορεί να περιέχει κεφαλαία γράμματα.',
  username_lowercase_not_allowed: 'Το όνομα χρήστη δεν μπορεί να περιέχει πεζά γράμματα.',
  username_numbers_not_allowed: 'Το όνομα χρήστη δεν μπορεί να περιέχει αριθμούς.',
  username_underscore_not_allowed: 'Το όνομα χρήστη δεν μπορεί να περιέχει κάτω παύλες.',
  email_already_in_use: 'Αυτό το email σχετίζεται με υπάρχοντα λογαριασμό.',
  phone_already_in_use: 'Αυτός ο αριθμός τηλεφώνου σχετίζεται με υπάρχοντα λογαριασμό.',
  invalid_email: 'Μη έγκυρη διεύθυνση email.',
  invalid_phone: 'Μη έγκυρος αριθμός τηλεφώνου.',
  email_not_exist: 'Η διεύθυνση email δεν έχει καταχωριστεί ακόμα.',
  phone_not_exist: 'Ο αριθμός τηλεφώνου δεν έχει καταχωριστεί ακόμα.',
  identity_not_exist: 'Ο κοινωνικός λογαριασμός δεν έχει καταχωριστεί ακόμα.',
  sso_identity_not_exist: 'Ο λογαριασμός enterprise SSO δεν έχει καταχωριστεί ακόμα.',
  identity_already_in_use: 'Ο κοινωνικός λογαριασμός έχει ήδη συνδεθεί με υπάρχοντα λογαριασμό.',
  social_account_exists_in_profile: 'Έχετε ήδη συνδέσει αυτόν τον κοινωνικό λογαριασμό.',
  cannot_delete_self: 'Δεν μπορείτε να διαγράψετε τον εαυτό σας.',
  sign_up_method_not_enabled: 'Αυτή η μέθοδος εγγραφής δεν είναι ενεργή.',
  sign_in_method_not_enabled: 'Αυτή η μέθοδος σύνδεσης δεν είναι ενεργή.',
  same_password: 'Ο νέος κωδικός δεν μπορεί να είναι ίδιος με τον παλιό.',
  password_required_in_profile: 'Πρέπει να ορίσετε κωδικό πριν συνδεθείτε.',
  new_password_required_in_profile: 'Πρέπει να ορίσετε νέο κωδικό.',
  password_exists_in_profile: 'Υπάρχει ήδη κωδικός στο προφίλ σας.',
  username_required_in_profile: 'Πρέπει να ορίσετε όνομα χρήστη πριν συνδεθείτε.',
  username_exists_in_profile: 'Υπάρχει ήδη όνομα χρήστη στο προφίλ σας.',
  email_required_in_profile: 'Πρέπει να προσθέσετε διεύθυνση email πριν συνδεθείτε.',
  email_exists_in_profile: 'Το προφίλ σας έχει ήδη συνδεθεί με διεύθυνση email.',
  phone_required_in_profile: 'Πρέπει να προσθέσετε αριθμό τηλεφώνου πριν συνδεθείτε.',
  phone_exists_in_profile: 'Το προφίλ σας έχει ήδη συνδεθεί με αριθμό τηλεφώνου.',
  email_or_phone_required_in_profile:
    'Πρέπει να προσθέσετε διεύθυνση email ή αριθμό τηλεφώνου πριν συνδεθείτε.',
  suspended: 'Αυτός ο λογαριασμός έχει τεθεί σε αναστολή.',
  user_not_exist: 'Ο χρήστης με {{ identifier }} δεν υπάρχει.',
  missing_profile: 'Πρέπει να δώσετε επιπλέον στοιχεία πριν συνδεθείτε.',
  role_exists: 'Το αναγνωριστικό ρόλου {{roleId}} έχει ήδη προστεθεί σε αυτόν τον χρήστη',
  invalid_role_type:
    'Μη έγκυρος τύπος ρόλου· δεν μπορεί να ανατεθεί ρόλος μηχανής προς μηχανή σε χρήστη.',
  suggest_mfa:
    'Για καλύτερη ασφάλεια του λογαριασμού, συνιστούμε να συνδέσετε MFA στον λογαριασμό σας.',
  missing_mfa: 'Πρέπει να συνδέσετε επιπλέον MFA πριν συνδεθείτε.',
  totp_already_in_use: 'Το TOTP χρησιμοποιείται ήδη.',
  backup_code_already_in_use: 'Ο εφεδρικός κωδικός χρησιμοποιείται ήδη.',
  password_algorithm_required: 'Απαιτείται αλγόριθμος κωδικού.',
  password_and_digest:
    'Δεν μπορείτε να ορίσετε ταυτόχρονα κωδικό σε απλό κείμενο και digest κωδικού.',
  personal_access_token_name_exists: 'Υπάρχει ήδη προσωπικό access token με αυτό το όνομα.',
  totp_secret_invalid: 'Δόθηκε μη έγκυρο μυστικό TOTP.',
  wrong_backup_code_format: 'Η μορφή του εφεδρικού κωδικού δεν είναι έγκυρη.',
  username_required:
    'Το όνομα χρήστη είναι υποχρεωτικό αναγνωριστικό και δεν μπορεί να οριστεί σε null.',
  email_or_phone_required:
    'Η διεύθυνση email ή ο αριθμός τηλεφώνου είναι υποχρεωτικό αναγνωριστικό· απαιτείται τουλάχιστον ένα.',
  last_sign_in_method_required:
    'Πρέπει να διατηρείτε τουλάχιστον ένα αναγνωριστικό στον λογαριασμό σας.',
  email_required:
    'Η διεύθυνση email είναι υποχρεωτικό αναγνωριστικό και δεν μπορεί να οριστεί σε null.',
  phone_required:
    'Ο αριθμός τηλεφώνου είναι υποχρεωτικό αναγνωριστικό και δεν μπορεί να οριστεί σε null.',
  enterprise_sso_identity_not_exists:
    'Ο χρήστης δεν έχει εταιρική ταυτότητα συνδεδεμένη με το καθορισμένο αναγνωριστικό συνδέσμου SSO: {{ ssoConnectorId }}.',
  identity_not_exists_in_current_user:
    'Η καθορισμένη ταυτότητα δεν υπάρχει στον τρέχοντα λογαριασμό χρήστη. Συνδέστε την ταυτότητα πριν συνεχίσετε.',
  passkey_preferred: 'Δημιουργήστε ένα κλειδί πρόσβασης για να απλοποιήσετε τη σύνδεση.',
};

export default Object.freeze(user);
