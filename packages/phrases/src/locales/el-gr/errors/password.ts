/* GetCertus addition (MPL-2.0, see GETCERTUS.md): admin console phrases. */
const password = {
  unsupported_encryption_method: 'Η μέθοδος κρυπτογράφησης {{name}} δεν υποστηρίζεται.',
  pepper_not_found: 'Δεν βρέθηκε το pepper κωδικού. Ελέγξτε τις μεταβλητές περιβάλλοντος του core.',
  rejected: 'Ο κωδικός απορρίφθηκε. Ελέγξτε αν ο κωδικός σας πληροί τις απαιτήσεις.',
  invalid_legacy_password_format: 'Μη έγκυρη μορφή παλαιού κωδικού.',
  unsupported_legacy_hash_algorithm: 'Μη υποστηριζόμενος παλαιός αλγόριθμος hash: {{algorithm}}.',
  expired: 'Ο κωδικός σας έχει λήξει. Επαναφέρετε τον κωδικό σας για να συνεχίσετε.',
};

export default Object.freeze(password);
