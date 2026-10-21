/* GetCertus addition (MPL-2.0, see GETCERTUS.md): sign-in experience phrases. */
const mfa = {
  totp: 'Κωδικός μίας χρήσης από εφαρμογή ελέγχου ταυτότητας',
  webauthn: 'Κλειδί πρόσβασης',
  backup_code: 'Εφεδρικός κωδικός',
  email_verification_code: 'Κωδικός επαλήθευσης μέσω email',
  phone_verification_code: 'Κωδικός επαλήθευσης μέσω SMS',
  link_totp_description: 'Π.χ. Google Authenticator',
  link_webauthn_description: 'Συνδέστε τη συσκευή σας ή κλειδί USB',
  link_backup_code_description: 'Δημιουργήστε εφεδρικό κωδικό',
  link_email_verification_code_description: 'Συνδέστε τη διεύθυνση email σας',
  link_email_2fa_description: 'Συνδέστε τη διεύθυνση email σας για επαλήθευση σε 2 βήματα',
  link_phone_verification_code_description: 'Συνδέστε τον αριθμό τηλεφώνου σας',
  link_phone_2fa_description: 'Συνδέστε τον αριθμό τηλεφώνου σας για επαλήθευση σε 2 βήματα',
  verify_totp_description: 'Εισαγάγετε τον κωδικό μίας χρήσης από την εφαρμογή',
  verify_webauthn_description: 'Επαληθεύστε τη συσκευή σας ή το κλειδί USB',
  verify_backup_code_description: 'Επικολλήστε τον εφεδρικό κωδικό που αποθηκεύσατε',
  verify_email_verification_code_description: 'Εισαγάγετε τον κωδικό που στάλθηκε στο email σας',
  verify_phone_verification_code_description: 'Εισαγάγετε τον κωδικό που στάλθηκε στο τηλέφωνό σας',
  send_to_email: 'Αποστολή σε {{identifier}}',
  send_to_phone: 'Αποστολή σε {{identifier}}',
  onboarding: 'Ενεργοποίηση επαλήθευσης σε 2 βήματα',
  onboarding_description:
    'Προστατέψτε τον λογαριασμό σας με επαλήθευση σε 2 βήματα. Επιλέξτε μία ή περισσότερες μεθόδους: κλειδί πρόσβασης, εφαρμογή ελέγχου ταυτότητας (κωδικός μίας χρήσης), κωδικός επαλήθευσης μέσω SMS ή εφεδρικοί κωδικοί.',
  enable_mfa: 'Ενεργοποίηση επαλήθευσης σε 2 βήματα',
  add_mfa_factors: 'Προσθήκη επαλήθευσης σε 2 βήματα',
  add_mfa_description:
    'Η επαλήθευση σε 2 βήματα είναι ενεργή. Επιλέξτε τη δεύτερη μέθοδο επαλήθευσης για ασφαλή σύνδεση.',
  add_another_mfa_factor: 'Προσθήκη άλλης επαλήθευσης σε 2 βήματα',
  add_another_mfa_description:
    'Επιλέξτε άλλον τρόπο επαλήθευσης της ταυτότητάς σας κατά τη σύνδεση.',
  verify_mfa_factors: 'Επαλήθευση σε 2 βήματα',
  verify_mfa_description:
    'Η επαλήθευση σε 2 βήματα είναι ενεργή για αυτόν τον λογαριασμό. Επιλέξτε τον δεύτερο τρόπο επαλήθευσης της ταυτότητάς σας.',
  add_authenticator_app: 'Προσθήκη εφαρμογής ελέγχου ταυτότητας',
  replace_authenticator_app: 'Αντικατάσταση εφαρμογής ελέγχου ταυτότητας',
  step: 'Βήμα {{step, number}}: {{content}}',
  scan_qr_code: 'Σαρώστε αυτόν τον κωδικό QR',
  scan_qr_code_description:
    'Σαρώστε τον παρακάτω κωδικό QR με την εφαρμογή ελέγχου ταυτότητας, π.χ. Google Authenticator, Duo Mobile ή Authy.',
  qr_code_not_available: 'Δεν μπορείτε να σαρώσετε τον κωδικό QR;',
  copy_and_paste_key: 'Αντιγράψτε και επικολλήστε το κλειδί',
  copy_and_paste_key_description:
    'Αντιγράψτε το παρακάτω κλειδί και επικολλήστε το στην εφαρμογή ελέγχου ταυτότητας, π.χ. Google Authenticator, Duo Mobile ή Authy.',
  want_to_scan_qr_code: 'Θέλετε να σαρώσετε τον κωδικό QR;',
  enter_one_time_code: 'Εισαγάγετε τον κωδικό μίας χρήσης',
  enter_one_time_code_link_description:
    'Εισαγάγετε τον 6ψήφιο κωδικό επαλήθευσης από την εφαρμογή ελέγχου ταυτότητας.',
  enter_one_time_code_description:
    'Η επαλήθευση σε 2 βήματα είναι ενεργή για αυτόν τον λογαριασμό. Εισαγάγετε τον κωδικό μίας χρήσης που εμφανίζεται στη συνδεδεμένη εφαρμογή ελέγχου ταυτότητας.',
  enter_email_verification_code: 'Εισαγάγετε τον κωδικό επαλήθευσης από το email',
  enter_email_verification_code_description:
    'Η επαλήθευση σε 2 βήματα είναι ενεργή για αυτόν τον λογαριασμό. Εισαγάγετε τον κωδικό επαλήθευσης που στάλθηκε στο {{identifier}}.',
  enter_phone_verification_code: 'Εισαγάγετε τον κωδικό επαλήθευσης από το SMS',
  enter_phone_verification_code_description:
    'Η επαλήθευση σε 2 βήματα είναι ενεργή για αυτόν τον λογαριασμό. Εισαγάγετε τον κωδικό που στάλθηκε με SMS στο {{identifier}}.',
  link_another_mfa_factor: 'Αλλαγή σε άλλη μέθοδο',
  save_backup_code: 'Αποθηκεύστε τους εφεδρικούς κωδικούς',
  save_backup_code_description:
    'Αν η επαλήθευση σε 2 βήματα δεν λειτουργεί με άλλους τρόπους, μπορείτε να χρησιμοποιήσετε έναν από αυτούς τους εφεδρικούς κωδικούς για πρόσβαση στον λογαριασμό σας. Κάθε κωδικός χρησιμοποιείται μόνο μία φορά.',
  backup_code_hint: 'Αντιγράψτε τους και φυλάξτε τους σε ασφαλές μέρος.',
  new_backup_codes_generated:
    'Νέοι εφεδρικοί κωδικοί αντικατέστησαν τους παλιούς. Φυλάξτε τους σε ασφαλές μέρος το συντομότερο.',
  enter_a_backup_code: 'Εισαγάγετε εφεδρικό κωδικό',
  enter_backup_code_description:
    'Εισαγάγετε τον εφεδρικό κωδικό που αποθηκεύσατε όταν ενεργοποιήθηκε η επαλήθευση σε 2 βήματα.',
  create_a_passkey: 'Δημιουργία κλειδιού πρόσβασης',
  create_passkey_description:
    'Καταχωρίστε το κλειδί πρόσβασης με βιομετρικά στοιχεία της συσκευής, κλειδιά ασφαλείας (π.χ. YubiKey) ή άλλες διαθέσιμες μεθόδους.',
  try_another_verification_method: 'Δοκιμάστε άλλη μέθοδο επαλήθευσης',
  verify_via_passkey: 'Επαλήθευση με κλειδί πρόσβασης',
  verify_via_passkey_description:
    'Επαληθεύστε με κλειδί πρόσβασης μέσω του κωδικού ή των βιομετρικών της συσκευής σας, σαρώνοντας κωδικό QR ή με κλειδί ασφαλείας USB όπως το YubiKey.',
  trust_this_device_title: 'Εμπιστοσύνη σε αυτή τη συσκευή',
  trust_this_device_description:
    'Μπορείτε να παραλείπετε την επαλήθευση MFA σε αυτή τη συσκευή στις επόμενες συνδέσεις.',
  trust_this_device_one: 'Εμπιστοσύνη σε αυτή τη συσκευή για {{count}} ημέρα',
  trust_this_device_two: 'Εμπιστοσύνη σε αυτή τη συσκευή για {{count}} ημέρες',
  trust_this_device_few: 'Εμπιστοσύνη σε αυτή τη συσκευή για {{count}} ημέρες',
  trust_this_device_many: 'Εμπιστοσύνη σε αυτή τη συσκευή για {{count}} ημέρες',
  trust_this_device_other: 'Εμπιστοσύνη σε αυτή τη συσκευή για {{count}} ημέρες',
  secret_key_copied: 'Το μυστικό κλειδί αντιγράφηκε.',
  backup_code_copied: 'Ο εφεδρικός κωδικός αντιγράφηκε.',
  webauthn_not_ready: 'Το WebAuthn δεν είναι ακόμη έτοιμο. Δοκιμάστε ξανά αργότερα.',
  webauthn_not_supported: 'Το WebAuthn δεν υποστηρίζεται σε αυτό το πρόγραμμα περιήγησης.',
  webauthn_failed_to_create: 'Η δημιουργία απέτυχε. Δοκιμάστε ξανά.',
  webauthn_failed_to_verify: 'Η επαλήθευση απέτυχε. Δοκιμάστε ξανά.',
};

export default Object.freeze(mfa);
