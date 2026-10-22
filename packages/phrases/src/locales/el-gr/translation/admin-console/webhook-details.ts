/* GetCertus addition (MPL-2.0, see GETCERTUS.md): admin console phrases. */
const webhook_details = {
  page_title: 'Λεπτομέρειες webhook',
  back_to_webhooks: 'Επιστροφή στα webhooks',
  not_in_use: 'Εκτός χρήσης',
  success_rate: 'ποσοστό επιτυχίας',
  requests: '{{value, number}} αιτήματα σε 24 ώρες',
  disable_webhook: 'Απενεργοποίηση webhook',
  disable_reminder:
    'Θέλετε σίγουρα να απενεργοποιήσετε το webhook; Μετά δεν θα στέλνονται αιτήματα HTTP στο URL του endpoint.',
  webhook_disabled: 'Το webhook απενεργοποιήθηκε.',
  webhook_reactivated: 'Το webhook ενεργοποιήθηκε ξανά.',
  reactivate_webhook: 'Επανενεργοποίηση webhook',
  delete_webhook: 'Διαγραφή webhook',
  deletion_reminder:
    'Διαγράφετε αυτό το webhook. Μετά τη διαγραφή δεν θα στέλνονται αιτήματα HTTP στο URL του endpoint.',
  deleted: 'Το webhook διαγράφηκε.',
  settings_tab: 'Ρυθμίσεις',
  recent_requests_tab: 'Πρόσφατα αιτήματα (24 ώρες)',
  settings: {
    settings: 'Ρυθμίσεις',
    settings_description:
      'Τα webhooks σάς στέλνουν ενημερώσεις σε πραγματικό χρόνο για συγκεκριμένα συμβάντα τη στιγμή που συμβαίνουν, μέσω αιτήματος POST στο URL του endpoint σας. Έτσι μπορείτε να ενεργήσετε αμέσως με βάση τις νέες πληροφορίες.',
    events: 'Συμβάντα',
    events_description: 'Επιλέξτε τα συμβάντα για τα οποία το GetCertus θα στέλνει το αίτημα POST.',
    name: 'Όνομα',
    endpoint_url: 'URL endpoint',
    signing_key: 'Κλειδί υπογραφής',
    signing_key_tip:
      'Προσθέστε το μυστικό κλειδί που παρέχει το GetCertus στο endpoint σας ως κεφαλίδα αιτήματος, για να διασφαλίσετε τη γνησιότητα του payload του webhook.',
    regenerate: 'Αναδημιουργία',
    regenerate_key_title: 'Αναδημιουργία κλειδιού υπογραφής',
    regenerate_key_reminder:
      'Θέλετε σίγουρα να αλλάξετε το κλειδί υπογραφής; Το νέο κλειδί ισχύει αμέσως. Θυμηθείτε να ενημερώσετε ταυτόχρονα το κλειδί στο endpoint σας.',
    regenerated: 'Το κλειδί υπογραφής αναδημιουργήθηκε.',
    custom_headers: 'Προσαρμοσμένες κεφαλίδες',
    custom_headers_tip:
      'Προαιρετικά, μπορείτε να προσθέσετε προσαρμοσμένες κεφαλίδες στο payload του webhook για επιπλέον πλαίσιο ή μεταδεδομένα σχετικά με το συμβάν.',
    key_duplicated_error: 'Το κλειδί δεν μπορεί να επαναλαμβάνεται.',
    key_missing_error: 'Το κλειδί είναι υποχρεωτικό.',
    value_missing_error: 'Η τιμή είναι υποχρεωτική.',
    invalid_key_error: 'Μη έγκυρο κλειδί',
    invalid_value_error: 'Μη έγκυρη τιμή',
    test: 'Δοκιμή',
    test_webhook: 'Δοκιμάστε το webhook σας',
    test_webhook_description:
      'Ρυθμίστε το webhook και δοκιμάστε το με παραδείγματα payload για κάθε επιλεγμένο συμβάν, ώστε να επαληθεύσετε ότι λαμβάνονται και επεξεργάζονται σωστά.',
    send_test_payload: 'Αποστολή δοκιμαστικού payload',
    test_result: {
      endpoint_url: 'URL endpoint: {{url}}',
      message: 'Μήνυμα: {{message}}',
      response_status: 'Κατάσταση απόκρισης: {{status, number}}',
      response_body: 'Σώμα απόκρισης: {{body}}',
      request_time: 'Ώρα αιτήματος: {{time}}',
      test_success: 'Η δοκιμή του webhook στο endpoint ολοκληρώθηκε με επιτυχία.',
    },
  },
};

export default Object.freeze(webhook_details);
