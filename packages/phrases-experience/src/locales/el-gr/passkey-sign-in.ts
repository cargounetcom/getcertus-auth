/* GetCertus addition (MPL-2.0, see GETCERTUS.md): sign-in experience phrases. */
const passkey_sign_in = {
  setup_page: {
    title: 'Απλοποιήστε τη σύνδεσή σας',
    subtitle: 'Δημιουργία κλειδιού πρόσβασης',
    description:
      'Καταχωρίστε το κλειδί πρόσβασης με βιομετρικά στοιχεία της συσκευής, κλειδιά ασφαλείας όπως το YubiKey ή άλλες διαθέσιμες μεθόδους.',
  },
  trigger_conditional_ui_failed: 'Η αυτόματη συμπλήρωση του κλειδιού πρόσβασης δεν ξεκίνησε.',
};

export default Object.freeze(passkey_sign_in);
