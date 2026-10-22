/* GetCertus addition (MPL-2.0, see GETCERTUS.md): admin console phrases. */
const oidc_configs = {
  sessions_card_title: 'Περίοδοι σύνδεσης GetCertus',
  sessions_card_description:
    'Προσαρμόστε την πολιτική περιόδων σύνδεσης που αποθηκεύει ο διακομιστής εξουσιοδότησης του GetCertus. Καταγράφει τη συνολική κατάσταση ελέγχου ταυτότητας του χρήστη για SSO και αθόρυβη επανασύνδεση μεταξύ εφαρμογών.',
  session_max_ttl_in_days: 'Μέγιστη διάρκεια ζωής (TTL) περιόδου σύνδεσης σε ημέρες',
  session_max_ttl_in_days_tip:
    'Ένα απόλυτο όριο διάρκειας από τη δημιουργία της περιόδου σύνδεσης. Ανεξάρτητα από τη δραστηριότητα, η περίοδος λήγει όταν παρέλθει αυτή η σταθερή διάρκεια.',
  cloud_private_key_rotation_notice:
    'Στο GetCertus Cloud, η εναλλαγή ιδιωτικού κλειδιού τίθεται σε ισχύ μετά από περίοδο χάριτος 4 ωρών.',
};

export default Object.freeze(oidc_configs);
