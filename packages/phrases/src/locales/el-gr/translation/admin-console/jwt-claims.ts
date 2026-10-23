/* GetCertus addition (MPL-2.0, see GETCERTUS.md): admin console phrases. */
const jwt_claims = {
  title: 'Προσαρμοσμένο JWT',
  description:
    'Προσαρμόστε το access token ή το ID token για να παρέχετε επιπλέον πληροφορίες στην εφαρμογή σας.',
  access_token: {
    card_title: 'Access token',
    card_description:
      'Το access token είναι το διαπιστευτήριο που χρησιμοποιούν τα API για την εξουσιοδότηση αιτημάτων και περιέχει μόνο τα claims που χρειάζονται για αποφάσεις πρόσβασης.',
  },
  user_jwt: {
    card_field: 'Access token χρήστη',
    card_description:
      'Προσθέστε δεδομένα συγκεκριμένα για τον χρήστη κατά την έκδοση του access token.',
    for: 'για χρήστη',
  },
  machine_to_machine_jwt: {
    card_field: 'Access token μηχανής προς μηχανή',
    card_description: 'Προσθέστε επιπλέον δεδομένα κατά την έκδοση token μηχανής προς μηχανή.',
    for: 'για M2M',
  },
  id_token: {
    card_title: 'ID token',
    card_description:
      'Το ID token είναι μια βεβαίωση ταυτότητας που λαμβάνεται μετά τη σύνδεση και περιέχει claims ταυτότητας του χρήστη για χρήση από τον client στην προβολή ή στη δημιουργία περιόδου σύνδεσης.',
    card_field: 'ID token χρήστη',
    card_field_description:
      "Τα claims 'sub', 'email', 'phone', 'profile' και 'address' είναι πάντα διαθέσιμα. Τα υπόλοιπα claims πρέπει πρώτα να ενεργοποιηθούν εδώ. Σε κάθε περίπτωση, η εφαρμογή σας πρέπει να ζητά τα αντίστοιχα scopes κατά την ενσωμάτωση για να τα λαμβάνει.",
  },
  code_editor_title: 'Προσαρμογή των claims του {{token}}',
  custom_jwt_create_button: 'Προσθήκη προσαρμοσμένων claims',
  custom_jwt_item: 'Προσαρμοσμένα claims {{for}}',
  delete_modal_title: 'Διαγραφή προσαρμοσμένων claims',
  delete_modal_content: 'Θέλετε σίγουρα να διαγράψετε τα προσαρμοσμένα claims;',
  clear: 'Από την αρχή',
  cleared: 'Εκκαθαρίστηκε',
  restore: 'Επαναφορά προεπιλογών',
  restored: 'Επαναφέρθηκε',
  data_source_tab: 'Πηγή δεδομένων',
  error_handling_tab: 'Χειρισμός σφαλμάτων',
  test_tab: 'Πλαίσιο δοκιμής',
  jwt_claims_description:
    'Τα προεπιλεγμένα claims περιλαμβάνονται αυτόματα στο  και δεν μπορούν να αντικατασταθούν.',
  user_data: {
    title: 'Πλαίσιο χρήστη',
    subtitle: 'Χρησιμοποιήστε την παράμετρο εισόδου `context.user` για βασικές πληροφορίες χρήστη.',
  },
  grant_data: {
    title: 'Πλαίσιο grant',
    subtitle:
      'Χρησιμοποιήστε την παράμετρο εισόδου `context.grant` για βασικές πληροφορίες grant· διαθέσιμη μόνο για token exchange.',
  },
  interaction_data: {
    title: 'Πλαίσιο αλληλεπίδρασης χρήστη',
    subtitle:
      'Χρησιμοποιήστε την παράμετρο `context.interaction` για τις λεπτομέρειες αλληλεπίδρασης του χρήστη στην τρέχουσα περίοδο ελέγχου ταυτότητας.',
  },
  application_data: {
    title: 'Πλαίσιο εφαρμογής',
    subtitle:
      'Χρησιμοποιήστε την παράμετρο εισόδου `context.application` για τις πληροφορίες της εφαρμογής που σχετίζεται με το token.',
  },
  organization_data: {
    title: 'Πλαίσιο οργανισμού',
    subtitle:
      'Χρησιμοποιήστε την παράμετρο εισόδου `context.organization` για τις πληροφορίες του οργανισμού-στόχου· διαθέσιμη μόνο για tokens οργανισμού.',
  },
  token_data: {
    title: 'Payload του token',
    subtitle:
      'Χρησιμοποιήστε την παράμετρο εισόδου `token` για το payload του τρέχοντος access token. ',
  },
  api_context: {
    title: 'Πλαίσιο API: έλεγχος πρόσβασης',
    subtitle: 'Χρησιμοποιήστε τη μέθοδο `api.denyAccess` για απόρριψη του αιτήματος token.',
  },
  error_handling: {
    title: 'Χειρισμός σφαλμάτων',
    subtitle: 'Ελέγξτε αν η έκδοση token θα αποκλείεται όταν το script αποτυγχάνει.',
    input_field_title: 'Συμπεριφορά έκδοσης token σε σφάλμα script',
    block_issuance_switch: 'Αποκλεισμός έκδοσης token όταν το script έχει σφάλμα',
    default_hint_create:
      'Τα νέα scripts προσαρμοσμένων claims αποκλείουν από προεπιλογή την έκδοση token όταν το script αποτυγχάνει. Αν το API παρέχει ήδη τιμή, χρησιμοποιείται η αποθηκευμένη τιμή.',
    default_hint_edit:
      'Τα υπάρχοντα scripts προσαρμοσμένων claims χωρίς αυτή τη ρύθμιση διατηρούν την παλιά προεπιλογή (απενεργοποιημένη) μέχρι να αποθηκεύσετε ρητά μια τιμή.',
    warning:
      'Όταν είναι ενεργή, τα σφάλματα εκτέλεσης του script απορρίπτουν το αίτημα token με `invalid_request` (400) και τοπικοποιημένο `error_description`. Οι κλήσεις στο `api.denyAccess` εξακολουθούν να επιστρέφουν `access_denied`.',
  },
  fetch_external_data: {
    title: 'Λήψη εξωτερικών δεδομένων',
    subtitle: 'Ενσωματώστε δεδομένα από τα εξωτερικά API σας απευθείας στα claims.',
    description:
      'Χρησιμοποιήστε τη συνάρτηση `fetch` για να καλέσετε τα εξωτερικά API σας και να συμπεριλάβετε τα δεδομένα στα προσαρμοσμένα claims. Παράδειγμα: ',
  },
  environment_variables: {
    title: 'Ορισμός μεταβλητών περιβάλλοντος',
    subtitle: 'Χρησιμοποιήστε μεταβλητές περιβάλλοντος για την αποθήκευση ευαίσθητων πληροφοριών.',
    input_field_title: 'Προσθήκη μεταβλητών περιβάλλοντος',
    sample_code:
      'Πρόσβαση σε μεταβλητές περιβάλλοντος στον handler προσαρμοσμένων claims του token. Παράδειγμα: ',
  },
  jwt_claims_hint:
    'Κρατήστε τα προσαρμοσμένα claims κάτω από 50 KB. Τα προεπιλεγμένα claims περιλαμβάνονται αυτόματα στο token και δεν μπορούν να αντικατασταθούν.',
  tester: {
    subtitle: 'Προσαρμόστε το δοκιμαστικό token και τα δοκιμαστικά δεδομένα χρήστη.',
    run_button: 'Εκτέλεση δοκιμής',
    result_title: 'Αποτέλεσμα δοκιμής',
  },
  sandbox_warning: {
    title: 'Τα scripts εκτελούνται με δικαιώματα διακομιστή',
    description:
      'Στο self-hosted GetCertus, αυτό το script εκτελείται στο ίδιο περιβάλλον με το GetCertus: μπορεί να διαβάζει τις μεταβλητές περιβάλλοντος του διακομιστή και να προσεγγίζει υπηρεσίες του εσωτερικού δικτύου σας. Δεν εκτελείται σε sandbox. Δώστε πρόσβαση σε αυτή τη σελίδα μόνο σε άτομα που θα εμπιστευόσασταν με πρόσβαση στον διακομιστή.',
  },
  form_error: {
    invalid_json: 'Μη έγκυρη μορφή JSON',
  },
};

export default Object.freeze(jwt_claims);
