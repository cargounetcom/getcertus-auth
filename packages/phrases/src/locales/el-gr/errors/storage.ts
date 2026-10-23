/* GetCertus addition (MPL-2.0, see GETCERTUS.md): admin console phrases. */
const storage = {
  not_configured: 'Δεν έχει ρυθμιστεί πάροχος αποθήκευσης.',
  missing_parameter: 'Λείπει η παράμετρος {{parameter}} για τον πάροχο αποθήκευσης.',
  upload_error: 'Η μεταφόρτωση του αρχείου στον πάροχο αποθήκευσης απέτυχε.',
  download_error: 'Η λήψη του αρχείου από τον πάροχο αποθήκευσης απέτυχε.',
  invalid_custom_ui_zip:
    'Δεν ήταν δυνατή η ανάγνωση του αρχείου. Δημιουργήστε ένα μη κενό ZIP με Deflate ή χωρίς συμπίεση και μεταφορτώστε το ξανά.',
  custom_ui_file_too_large:
    'Το αποσυμπιεσμένο αρχείο "{{name}}" πρέπει να είναι μικρότερο από 10 MiB. Μειώστε το μέγεθος του αρχείου και μεταφορτώστε ξανά.',
  custom_ui_too_many_entries:
    'Το ZIP περιέχει πάρα πολλά στοιχεία. Συμπεριλάβετε έως 200 αρχεία και φακέλους και μεταφορτώστε ξανά.',
};

export default Object.freeze(storage);
