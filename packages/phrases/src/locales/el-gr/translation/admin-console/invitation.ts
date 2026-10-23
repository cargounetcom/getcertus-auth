/* GetCertus addition (MPL-2.0, see GETCERTUS.md): admin console phrases. */
const invitation = {
  find_your_tenants: 'Βρείτε τους tenants σας',
  find_tenants_description:
    'Η διεύθυνση email σας μπορεί να είναι ήδη καταχωρισμένη σε πολλούς tenants. Μπορείτε να συμμετάσχετε στους υπάρχοντες ή να δημιουργήσετε νέο.',
  create_new_tenant: 'Δημιουργία νέου tenant',
  email_not_match_title: 'Είστε συνδεδεμένοι ως\n{{email}}',
  email_not_match_description:
    'Συνδεθείτε με τον σωστό λογαριασμό για να αποδεχτείτε την πρόσκληση και να γίνετε μέλος του οργανισμού.',
  switch_account: 'Σύνδεση με άλλον λογαριασμό',
  invalid_invitation_status:
    'Μη έγκυρη πρόσκληση. Επικοινωνήστε με τον διαχειριστή και δοκιμάστε ξανά.',
  invitation_not_found: 'Η πρόσκληση δεν βρέθηκε. Επικοινωνήστε με τον διαχειριστή.',
};

export default Object.freeze(invitation);
