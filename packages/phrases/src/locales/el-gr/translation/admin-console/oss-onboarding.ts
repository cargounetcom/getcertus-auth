/* GetCertus addition (MPL-2.0, see GETCERTUS.md): admin console phrases. */
const oss_onboarding = {
  page_title: 'Εισαγωγή',
  title: 'Λίγα λόγια για εσάς',
  description:
    'Πείτε μας λίγα λόγια για εσάς και το έργο σας. Μας βοηθά να κάνουμε το GetCertus καλύτερο για όλους.',
  email: {
    label: 'Διεύθυνση email',
    description:
      'Θα χρησιμοποιήσουμε αυτή τη διεύθυνση αν χρειαστεί να επικοινωνήσουμε μαζί σας για τον λογαριασμό σας.',
    placeholder: 'email@example.com',
  },
  newsletter:
    'Λάβετε ενημερώσεις προϊόντος, ειδοποιήσεις ασφαλείας και επιλεγμένο περιεχόμενο από το GetCertus.',
  project: {
    label: 'Χρησιμοποιώ το GetCertus για',
    personal: 'Προσωπικό έργο',
    company: 'Εταιρικό έργο',
  },
  project_name: {
    label: 'Όνομα έργου',
    placeholder: 'Το έργο μου',
  },
  company_name: {
    label: 'Όνομα εταιρείας',
    placeholder: 'Acme.co',
  },
  company_size: {
    label: 'Πόσο μεγάλη είναι η εταιρεία σας;',
  },
  errors: {
    email_required: 'Η διεύθυνση email είναι υποχρεωτική',
    email_invalid: 'Εισαγάγετε έγκυρη διεύθυνση email',
    project_name_too_long: 'Το όνομα του έργου μπορεί να έχει έως 200 χαρακτήρες',
  },
};

export default Object.freeze(oss_onboarding);
