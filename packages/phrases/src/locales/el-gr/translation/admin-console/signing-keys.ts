/* GetCertus addition (MPL-2.0, see GETCERTUS.md): admin console phrases. */
const signing_keys = {
  title: 'Κλειδιά υπογραφής',
  description:
    'Διαχειριστείτε με ασφάλεια τα κλειδιά υπογραφής που χρησιμοποιούν οι εφαρμογές σας.',
  private_key: 'Ιδιωτικά κλειδιά OIDC',
  private_keys_description:
    'Τα ιδιωτικά κλειδιά OIDC χρησιμοποιούνται για την υπογραφή JWT tokens.',
  cookie_key: 'Κλειδιά cookie OIDC',
  cookie_keys_description: 'Τα κλειδιά cookie OIDC χρησιμοποιούνται για την υπογραφή cookies.',
  private_keys_in_use: 'Ιδιωτικά κλειδιά σε χρήση',
  cookie_keys_in_use: 'Κλειδιά cookie σε χρήση',
  rotate_private_keys: 'Εναλλαγή ιδιωτικών κλειδιών',
  rotate_cookie_keys: 'Εναλλαγή κλειδιών cookie',
  rotate_private_keys_description:
    'Αυτή η ενέργεια δημιουργεί νέο ιδιωτικό κλειδί υπογραφής, εναλλάσσει το τρέχον κλειδί και αφαιρεί το προηγούμενο. Τα JWT tokens που υπογράφηκαν με το τρέχον κλειδί παραμένουν έγκυρα μέχρι τη διαγραφή ή την επόμενη εναλλαγή.',
  rotate_cookie_keys_description:
    'Αυτή η ενέργεια δημιουργεί νέο κλειδί cookie, εναλλάσσει το τρέχον κλειδί και αφαιρεί το προηγούμενο. Τα cookies με το τρέχον κλειδί παραμένουν έγκυρα μέχρι τη διαγραφή ή την επόμενη εναλλαγή.',
  select_private_key_algorithm: 'Επιλέξτε αλγόριθμο υπογραφής για το νέο ιδιωτικό κλειδί',
  rotate_button: 'Εναλλαγή',
  table_column: {
    id: 'ID',
    status: 'Κατάσταση',
    algorithm: 'Αλγόριθμος υπογραφής',
    effective_at: 'Ισχύει από',
  },
  status: {
    next: 'Επόμενο',
    current: 'Τρέχον',
    previous: 'Προηγούμενο',
    effective_in: 'Ισχύει σε {{time}}',
  },
  reminder: {
    rotate_private_key:
      'Θέλετε σίγουρα να εναλλάξετε τα <strong>ιδιωτικά κλειδιά OIDC</strong>; Τα νέα JWT tokens θα υπογράφονται με το νέο κλειδί. Τα υπάρχοντα JWT tokens παραμένουν έγκυρα μέχρι την επόμενη εναλλαγή.',
    rotate_cookie_key:
      'Θέλετε σίγουρα να εναλλάξετε τα <strong>κλειδιά cookie OIDC</strong>; Τα νέα cookies στις περιόδους σύνδεσης θα υπογράφονται με το νέο κλειδί cookie. Τα υπάρχοντα cookies παραμένουν έγκυρα μέχρι την επόμενη εναλλαγή.',
    delete_private_key:
      'Θέλετε σίγουρα να διαγράψετε το <strong>ιδιωτικό κλειδί OIDC</strong>; Τα υπάρχοντα JWT tokens που υπογράφηκαν με αυτό το κλειδί δεν θα είναι πλέον έγκυρα.',
    delete_cookie_key:
      'Θέλετε σίγουρα να διαγράψετε το <strong>κλειδί cookie OIDC</strong>; Παλαιότερες περίοδοι σύνδεσης με cookies υπογεγραμμένα με αυτό το κλειδί δεν θα είναι πλέον έγκυρες. Αυτοί οι χρήστες θα πρέπει να συνδεθούν ξανά.',
  },
  messages: {
    rotate_key_success: 'Η εναλλαγή των κλειδιών υπογραφής ολοκληρώθηκε.',
    delete_key_success: 'Το κλειδί διαγράφηκε.',
  },
};

export default Object.freeze(signing_keys);
