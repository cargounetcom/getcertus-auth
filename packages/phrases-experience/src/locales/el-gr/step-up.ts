/* GetCertus addition (MPL-2.0, see GETCERTUS.md): sign-in experience phrases. */
const step_up = {
  verify_your_identity: 'Επαληθεύστε την ταυτότητά σας',
  choose_method_description:
    'Για να συνεχίσετε, επιβεβαιώστε ότι είστε εσείς με μία από τις παρακάτω μεθόδους.',
  password: 'Κωδικός πρόσβασης',
  password_description: 'Εισαγάγετε τον κωδικό του λογαριασμού σας',
  enter_password_description: 'Εισαγάγετε τον κωδικό του λογαριασμού σας για να συνεχίσετε.',
  enter_verification_code_description:
    'Εισαγάγετε τον κωδικό επαλήθευσης που στάλθηκε στο {{identifier}}.',
  subject_proof_description:
    'Για να συνεχίσετε, επιβεβαιώστε ότι είστε εσείς μέσω λογαριασμού συνδεδεμένου με τον δικό σας. Έπειτα μπορείτε να ρυθμίσετε μέθοδο επαλήθευσης.',
  no_method_available: 'Δεν υπάρχει διαθέσιμη μέθοδος επαλήθευσης',
  no_method_available_description:
    'Ο λογαριασμός σας δεν έχει μέθοδο που να ολοκληρώνει αυτή την επαλήθευση. Επικοινωνήστε με τον διαχειριστή σας για βοήθεια.',
};

export default Object.freeze(step_up);
