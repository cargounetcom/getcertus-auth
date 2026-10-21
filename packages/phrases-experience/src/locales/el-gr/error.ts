/* GetCertus addition (MPL-2.0, see GETCERTUS.md): sign-in experience phrases. */
const error = {
  general_required: 'Το {{types, list(type: disjunction;)}} είναι υποχρεωτικό',
  general_invalid: 'Το {{types, list(type: disjunction;)}} δεν είναι έγκυρο',
  invalid_min_max_input: 'Η τιμή πρέπει να είναι μεταξύ {{minValue}} και {{maxValue}}',
  invalid_min_max_length:
    'Το μήκος της τιμής πρέπει να είναι μεταξύ {{minLength}} και {{maxLength}}',
  username_required: 'Το όνομα χρήστη είναι υποχρεωτικό',
  password_required: 'Ο κωδικός είναι υποχρεωτικός',
  username_exists: 'Το όνομα χρήστη υπάρχει ήδη',
  username_should_not_start_with_number: 'Το όνομα χρήστη δεν πρέπει να ξεκινά με αριθμό',
  username_invalid_charset:
    'Το όνομα χρήστη μπορεί να περιέχει μόνο γράμματα, αριθμούς ή κάτω παύλες.',
  username_too_short: 'Το όνομα χρήστη πρέπει να έχει τουλάχιστον {{min}} χαρακτήρες.',
  username_too_long: 'Το όνομα χρήστη μπορεί να έχει έως {{max}} χαρακτήρες.',
  username_uppercase_not_allowed: 'Δεν επιτρέπονται κεφαλαία γράμματα στα ονόματα χρήστη.',
  username_lowercase_not_allowed: 'Δεν επιτρέπονται πεζά γράμματα στα ονόματα χρήστη.',
  username_numbers_not_allowed: 'Δεν επιτρέπονται αριθμοί στα ονόματα χρήστη.',
  username_underscore_not_allowed: 'Δεν επιτρέπονται κάτω παύλες στα ονόματα χρήστη.',
  invalid_email: 'Το email δεν είναι έγκυρο',
  invalid_phone: 'Ο αριθμός τηλεφώνου δεν είναι έγκυρος',
  passwords_do_not_match: 'Οι κωδικοί δεν ταιριάζουν.',
  invalid_passcode: 'Ο κωδικός επαλήθευσης δεν είναι έγκυρος.',
  device_code_required: 'Ο κωδικός είναι υποχρεωτικός.',
  invalid_device_code: 'Ο κωδικός συσκευής δεν είναι έγκυρος.',
  device_flow_aborted: 'Το αίτημα σύνδεσης διακόπηκε.',
  invalid_connector_auth: 'Η εξουσιοδότηση δεν είναι έγκυρη',
  invalid_connector_request: 'Τα δεδομένα της σύνδεσης δεν είναι έγκυρα',
  unknown: 'Άγνωστο σφάλμα.',
  invalid_session: 'Η συνεδρία δεν βρέθηκε. Επιστρέψτε και συνδεθείτε ξανά.',
  timeout: 'Λήξη χρόνου αιτήματος.',
  password_rejected: {
    too_short: 'Το ελάχιστο μήκος είναι {{min}}.',
    too_long: 'Το μέγιστο μήκος είναι {{max}}.',
    character_types: 'Απαιτούνται τουλάχιστον {{min}} τύποι χαρακτήρων.',
    unsupported_characters: 'Βρέθηκε χαρακτήρας που δεν υποστηρίζεται.',
    pwned: 'Αποφύγετε απλούς κωδικούς που μαντεύονται εύκολα.',
    restricted_found: 'Αποφύγετε την υπερβολική χρήση: {{list, list}}.',
    restricted: {
      repetition: 'επαναλαμβανόμενοι χαρακτήρες',
      sequence: 'διαδοχικοί χαρακτήρες',
      user_info: 'τα προσωπικά σας στοιχεία',
      words: 'λέξεις σχετικές με το προϊόν',
    },
  },
  sso_not_enabled: 'Η ενιαία σύνδεση δεν είναι ενεργή για αυτόν τον λογαριασμό email.',
  invalid_link: 'Μη έγκυρος σύνδεσμος',
  invalid_link_description: 'Το διακριτικό μίας χρήσης ίσως έχει λήξει ή δεν είναι πλέον έγκυρο.',
  captcha_verification_failed: 'Η επαλήθευση captcha απέτυχε.',
  send_verification_code_failed:
    'Η αποστολή του κωδικού επαλήθευσης απέτυχε. Δοκιμάστε ξανά αργότερα.',
  send_verification_code_failed_use_password:
    'Η αποστολή του κωδικού επαλήθευσης απέτυχε. Συνδεθείτε με τον κωδικό πρόσβασής σας.',
  terms_acceptance_required: 'Απαιτείται αποδοχή των όρων',
  terms_acceptance_required_description: 'Πρέπει να αποδεχτείτε τους όρους για να συνεχίσετε.',
  something_went_wrong: 'Κάτι πήγε στραβά',
  account_suspended: 'Ο λογαριασμός έχει ανασταλεί',
  account_suspended_description:
    'Αυτός ο λογαριασμός έχει ανασταλεί. Επικοινωνήστε με τον διαχειριστή για βοήθεια.',
  access_denied: 'Άρνηση πρόσβασης',
  application_access_denied:
    'Δεν έχετε δικαίωμα πρόσβασης σε αυτή την εφαρμογή.\nΕπικοινωνήστε με τον διαχειριστή σας για βοήθεια.',
  feature_not_enabled:
    'Δεν έχετε δικαίωμα πρόσβασης σε αυτή τη λειτουργία. Επικοινωνήστε με τον διαχειριστή σας για βοήθεια.',
};

export default Object.freeze(error);
