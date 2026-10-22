/* GetCertus addition (MPL-2.0, see GETCERTUS.md): admin console phrases. */
const api_resource_details = {
  page_title: 'Λεπτομέρειες πόρου API',
  back_to_api_resources: 'Πίσω στους πόρους API',
  general_tab: 'Γενικά',
  permissions_tab: 'Δικαιώματα',
  settings: 'Ρυθμίσεις',
  settings_description:
    'Οι πόροι API, γνωστοί και ως Resource Indicators, δηλώνουν τις υπηρεσίες ή τους πόρους-στόχους που ζητούνται, συνήθως μια μεταβλητή σε μορφή URI που αντιπροσωπεύει την ταυτότητα του πόρου.',
  management_api_settings_description:
    'Το GetCertus Management API είναι μια πλήρης συλλογή API που επιτρέπει στους διαχειριστές να χειρίζονται ποικίλες εργασίες ταυτότητας, να επιβάλλουν πολιτικές ασφαλείας και να συμμορφώνονται με κανονισμούς και πρότυπα.',
  management_api_notice:
    'Αυτό το API αντιπροσωπεύει οντότητα του GetCertus και δεν μπορεί να τροποποιηθεί ή να διαγραφεί. Δημιουργήστε μια εφαρμογή μηχανής προς μηχανή για να καλέσετε το GetCertus Management API. <a>Μάθετε περισσότερα</a>',
  token_expiration_time_in_seconds: 'Χρόνος λήξης διακριτικού (σε δευτερόλεπτα)',
  token_expiration_time_in_seconds_placeholder: 'Εισαγάγετε τον χρόνο λήξης του διακριτικού',
  delete_description:
    'Η ενέργεια δεν αναιρείται. Ο πόρος API θα διαγραφεί οριστικά. Εισαγάγετε το όνομα του πόρου API <span>{{name}}</span> για επιβεβαίωση.',
  enter_your_api_resource_name: 'Εισαγάγετε το όνομα του πόρου API',
  api_resource_deleted: 'Ο πόρος API {{name}} διαγράφηκε',
  permission: {
    create_button: 'Δημιουργία δικαιώματος',
    create_title: 'Δημιουργία δικαιώματος',
    create_subtitle: 'Ορίστε τα δικαιώματα (scopes) που χρειάζεται αυτό το API.',
    confirm_create: 'Δημιουργία δικαιώματος',
    edit_title: 'Επεξεργασία δικαιώματος API',
    edit_subtitle: 'Ορίστε τα δικαιώματα (scopes) που χρειάζεται το API {{resourceName}}.',
    name: 'Όνομα δικαιώματος',
    name_placeholder: 'read:resource',
    forbidden_space_in_name: 'Το όνομα του δικαιώματος δεν πρέπει να περιέχει κενά.',
    description: 'Περιγραφή',
    description_placeholder: 'Μπορεί να διαβάζει τους πόρους',
    permission_created: 'Το δικαίωμα {{name}} δημιουργήθηκε',
    delete_description:
      'Αν διαγραφεί αυτό το δικαίωμα, οι χρήστες που το είχαν θα χάσουν την πρόσβαση που παρείχε.',
    deleted: 'Το δικαίωμα "{{name}}" διαγράφηκε.',
  },
};

export default Object.freeze(api_resource_details);
