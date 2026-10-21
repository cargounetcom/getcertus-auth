/* GetCertus addition (MPL-2.0, see GETCERTUS.md): sign-in experience phrases. */
const description = {
  email: 'email',
  phone_number: 'αριθμός τηλεφώνου',
  username: 'όνομα χρήστη',
  reminder: 'Υπενθύμιση',
  not_found: '404 Δεν βρέθηκε',
  agree_with_terms: 'Έχω διαβάσει και αποδέχομαι τους ',
  agree_with_terms_modal: 'Για να συνεχίσετε, αποδεχτείτε τους <link></link>.',
  terms_of_use: 'Όρους χρήσης',
  sign_in: 'Σύνδεση',
  privacy_policy: 'Πολιτική απορρήτου',
  create_account: 'Δημιουργία λογαριασμού',
  switch_account: 'Αλλαγή λογαριασμού',
  or: 'ή',
  and: 'και',
  enter_passcode: 'Ο κωδικός επαλήθευσης στάλθηκε στο {{address}} {{target}}',
  passcode_sent: 'Ο κωδικός επαλήθευσης στάλθηκε ξανά',
  resend_after_seconds: 'Δεν τον λάβατε; Νέα αποστολή σε <span>{{seconds}}</span> δευτερόλεπτα',
  resend_passcode: 'Δεν τον λάβατε; <a>Αποστολή νέου κωδικού επαλήθευσης</a>',
  create_account_id_exists: 'Υπάρχει ήδη λογαριασμός με {{value}}. Συνεχίστε για να συνδεθείτε.',
  link_account_id_exists:
    'Ο λογαριασμός με {{type}} {{value}} υπάρχει ήδη. Θέλετε να τον συνδέσετε;',
  sign_in_id_does_not_exist: 'Δεν βρέθηκε λογαριασμός για {{value}}. Θέλετε να δημιουργήσετε νέο;',
  sign_in_id_does_not_exist_alert: 'Ο λογαριασμός με {{type}} {{value}} δεν υπάρχει.',
  create_account_id_exists_alert:
    'Ο λογαριασμός με {{type}} {{value}} είναι συνδεδεμένος με άλλο λογαριασμό. Δοκιμάστε άλλο {{type}}.',
  social_identity_exist:
    'Το {{type}} {{value}} είναι συνδεδεμένο με άλλο λογαριασμό. Δοκιμάστε άλλο {{type}}.',
  bind_account_title: 'Σύνδεση ή δημιουργία λογαριασμού',
  social_create_account: 'Μπορείτε να δημιουργήσετε νέο λογαριασμό.',
  social_link_email: 'Μπορείτε να συνδέσετε άλλο email',
  social_link_phone: 'Μπορείτε να συνδέσετε άλλο τηλέφωνο',
  social_link_email_or_phone: 'Μπορείτε να συνδέσετε άλλο email ή τηλέφωνο',
  social_bind_with_existing:
    'Βρήκαμε σχετικό εγγεγραμμένο λογαριασμό, τον οποίο μπορείτε να συνδέσετε απευθείας.',
  skip_social_linking: 'Παράλειψη σύνδεσης με υπάρχοντα λογαριασμό;',
  reset_password: 'Επαναφορά κωδικού',
  reset_password_description:
    'Εισαγάγετε το {{types, list(type: disjunction;)}} του λογαριασμού σας και θα σας στείλουμε κωδικό επαλήθευσης για επαναφορά του κωδικού πρόσβασης.',
  reset_password_magic_link_description:
    'Εισαγάγετε τη διεύθυνση email του λογαριασμού σας για να συνεχίσετε την επαναφορά του κωδικού.',
  new_password: 'Νέος κωδικός',
  set_password: 'Ορισμός κωδικού',
  password_changed: 'Ο κωδικός άλλαξε',
  no_account: 'Δεν έχετε λογαριασμό; ',
  have_account: 'Έχετε ήδη λογαριασμό;',
  enter_password: 'Εισαγωγή κωδικού',
  enter_password_for: 'Συνδεθείτε με τον κωδικό για {{method}} {{value}}',
  enter_username: 'Ορισμός ονόματος χρήστη',
  enter_username_description:
    'Το όνομα χρήστη μπορεί επίσης να χρησιμοποιηθεί για σύνδεση. Μπορεί να περιέχει μόνο γράμματα, αριθμούς και κάτω παύλες.',
  enter_username_policy_description:
    'Το όνομα χρήστη μπορεί επίσης να χρησιμοποιηθεί για σύνδεση. {{requirements}}',
  link_email: 'Σύνδεση email',
  link_phone: 'Σύνδεση τηλεφώνου',
  link_email_or_phone: 'Σύνδεση email ή τηλεφώνου',
  link_email_description: 'Για μεγαλύτερη ασφάλεια, συνδέστε το email σας με τον λογαριασμό.',
  link_phone_description: 'Για μεγαλύτερη ασφάλεια, συνδέστε το τηλέφωνό σας με τον λογαριασμό.',
  link_email_or_phone_description:
    'Για μεγαλύτερη ασφάλεια, συνδέστε το email ή το τηλέφωνό σας με τον λογαριασμό.',
  continue_with_more_information:
    'Για μεγαλύτερη ασφάλεια, συμπληρώστε τα παρακάτω στοιχεία λογαριασμού.',
  create_your_account: 'Δημιουργήστε τον λογαριασμό σας',
  sign_in_to_your_account: 'Συνδεθείτε στον λογαριασμό σας',
  device_activation: 'Ενεργοποίηση συσκευής',
  device_activation_description:
    'Εισαγάγετε τον κωδικό που εμφανίζεται στη συσκευή σας. Βεβαιωθείτε ότι ταιριάζει και συνεχίστε για να συνδεθείτε σε αυτή τη συσκευή.',
  device_activation_error_description: 'Εισαγάγετε τον κωδικό που εμφανίζεται στη συσκευή σας.',
  device_activation_success: 'Η συσκευή σας συνδέθηκε!',
  device_activation_success_description: 'Επιστρέψτε στη συσκευή σας για να συνεχίσετε.',
  no_region_code_found: 'Δεν βρέθηκε κωδικός χώρας',
  verify_email: 'Επαληθεύστε το email σας',
  verify_phone: 'Επαληθεύστε τον αριθμό τηλεφώνου σας',
  password_requirements: 'Ο κωδικός {{items, list}}.',
  password_requirement: {
    length_one: 'πρέπει να έχει τουλάχιστον {{count}} χαρακτήρα',
    length_two: 'πρέπει να έχει τουλάχιστον {{count}} χαρακτήρες',
    length_few: 'πρέπει να έχει τουλάχιστον {{count}} χαρακτήρες',
    length_many: 'πρέπει να έχει τουλάχιστον {{count}} χαρακτήρες',
    length_other: 'πρέπει να έχει τουλάχιστον {{count}} χαρακτήρες',
    character_types_one:
      'πρέπει να περιέχει τουλάχιστον {{count}} τύπο από κεφαλαία, πεζά, αριθμούς και σύμβολα',
    character_types_two:
      'πρέπει να περιέχει τουλάχιστον {{count}} τύπους από κεφαλαία, πεζά, αριθμούς και σύμβολα',
    character_types_few:
      'πρέπει να περιέχει τουλάχιστον {{count}} τύπους από κεφαλαία, πεζά, αριθμούς και σύμβολα',
    character_types_many:
      'πρέπει να περιέχει τουλάχιστον {{count}} τύπους από κεφαλαία, πεζά, αριθμούς και σύμβολα',
    character_types_other:
      'πρέπει να περιέχει τουλάχιστον {{count}} τύπους από κεφαλαία, πεζά, αριθμούς και σύμβολα',
  },
  username_requirements: 'Το όνομα χρήστη {{items, list}}.',
  username_requirement: {
    length: 'πρέπει να έχει {{min}} έως {{max}} χαρακτήρες',
    characters: 'μπορεί να περιέχει μόνο {{characters, list}}',
  },
  username_character: {
    uppercase: 'κεφαλαία γράμματα',
    lowercase: 'πεζά γράμματα',
    number: 'αριθμούς',
    underscore: 'κάτω παύλες',
  },
  use: 'Χρήση',
  single_sign_on_email_form: 'Εισαγάγετε το εταιρικό σας email',
  single_sign_on_connectors_list:
    'Ο οργανισμός σας έχει ενεργοποιήσει την ενιαία σύνδεση για τον λογαριασμό email {{email}}. Μπορείτε να συνδεθείτε μέσω των παρακάτω παρόχων SSO.',
  single_sign_on_enabled: 'Η ενιαία σύνδεση είναι ενεργή για αυτόν τον λογαριασμό',
  authorize_title: 'Εξουσιοδότηση {{name}}',
  unregistered_client_notice:
    'Η εφαρμογή, μαζί με το όνομα και το λογότυπό της, δηλώνεται από το ίδιο το <hostname>{{host}}</hostname>. Ελέγξτε το όνομα κεντρικού υπολογιστή πριν συνεχίσετε.',
  request_permission: 'Η εφαρμογή {{name}} ζητά πρόσβαση σε:',
  grant_organization_access: 'Παραχώρηση πρόσβασης στον οργανισμό:',
  authorize_personal_data_usage: 'Εξουσιοδοτήστε τη χρήση των προσωπικών σας δεδομένων:',
  authorize_organization_access: 'Εξουσιοδοτήστε την πρόσβαση στον συγκεκριμένο οργανισμό:',
  user_scopes: 'Προσωπικά δεδομένα χρήστη',
  organization_scopes: 'Πρόσβαση στον οργανισμό',
  authorize_agreement:
    'Με την παραχώρηση πρόσβασης αποδέχεστε τους <link></link> της εφαρμογής {{name}}.',
  authorize_agreement_with_redirect:
    'Με την παραχώρηση πρόσβασης αποδέχεστε τους <link></link> της εφαρμογής {{name}} και θα μεταφερθείτε στο {{uri}}.',
  not_you: 'Δεν είστε εσείς;',
  user_id: 'ID χρήστη: {{id}}',
  redirect_to: 'Θα μεταφερθείτε στο {{name}}.',
  auto_agreement: 'Συνεχίζοντας, αποδέχεστε τους <link></link>.',
  identifier_sign_in_description:
    'Εισαγάγετε το {{types, list(type: disjunction;)}} σας για να συνδεθείτε.',
  all_sign_in_options: 'Όλες οι επιλογές σύνδεσης',
  identifier_register_description:
    'Εισαγάγετε το {{types, list(type: disjunction;)}} σας για να δημιουργήσετε νέο λογαριασμό.',
  all_account_creation_options: 'Όλες οι επιλογές δημιουργίας λογαριασμού',
  back_to_sign_in: 'Επιστροφή στη σύνδεση',
  password_expired: 'Ο κωδικός σας έχει λήξει και πρέπει να επαναφερθεί για να συνδεθείτε.',
  password_expiration_reset: 'Επαναφορά κωδικού',
  support_email: 'Email υποστήριξης: <link></link>',
  support_website: 'Ιστότοπος υποστήριξης: <link></link>',
  switch_account_title: 'Είστε συνδεδεμένοι ως {{account}}',
  switch_account_description:
    'Για να συνεχίσετε, θα αποσυνδεθείτε από τον τρέχοντα λογαριασμό και θα μεταβείτε αυτόματα στον νέο.',
  about_yourself: 'Πείτε μας για εσάς',
  verify_identity: 'Επαληθεύστε την ταυτότητά σας',
  choose_verification_method: 'Επιλέξτε πώς θέλετε να συνδεθείτε',
  verification_method: {
    passkey: 'Κλειδί πρόσβασης',
    passkey_description: 'Επαλήθευση μέσω της συσκευής σας ή κλειδιού USB',
    password: 'Κωδικός πρόσβασης',
    password_description: 'Εισαγάγετε τον κωδικό σας',
    email_verification_code: 'Κωδικός επαλήθευσης μέσω email',
    phone_verification_code: 'Κωδικός επαλήθευσης μέσω τηλεφώνου',
    verification_code_description: 'Αποστολή σε {{target}}',
  },
};

export default Object.freeze(description);
