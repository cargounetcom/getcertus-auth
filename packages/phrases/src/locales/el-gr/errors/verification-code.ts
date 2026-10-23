/* GetCertus addition (MPL-2.0, see GETCERTUS.md): admin console phrases. */
const verification_code = {
  phone_email_empty: 'Και το τηλέφωνο και το email είναι κενά.',
  not_found: 'Ο κωδικός επαλήθευσης δεν βρέθηκε. Στείλτε πρώτα κωδικό επαλήθευσης.',
  phone_mismatch: 'Το τηλέφωνο δεν ταιριάζει. Ζητήστε νέο κωδικό επαλήθευσης.',
  email_mismatch: 'Το email δεν ταιριάζει. Ζητήστε νέο κωδικό επαλήθευσης.',
  code_mismatch: 'Μη έγκυρος κωδικός επαλήθευσης.',
  expired: 'Ο κωδικός επαλήθευσης έχει λήξει. Ζητήστε νέο κωδικό επαλήθευσης.',
  exceed_max_try:
    'Έγινε υπέρβαση του ορίου προσπαθειών για τον κωδικό επαλήθευσης. Ζητήστε νέο κωδικό επαλήθευσης.',
};

export default Object.freeze(verification_code);
