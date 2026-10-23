/* GetCertus addition (MPL-2.0, see GETCERTUS.md): admin console phrases. */
const domain = {
  not_configured: 'Δεν έχει ρυθμιστεί πάροχος ονομάτων κεντρικού υπολογιστή για τομείς.',
  cloudflare_data_missing: 'Λείπει το cloudflare_data, ελέγξτε.',
  cloudflare_unknown_error: 'Άγνωστο σφάλμα κατά την κλήση του Cloudflare API',
  cloudflare_response_error: 'Λήφθηκε μη αναμενόμενη απόκριση από το Cloudflare.',
  limit_to_one_domain: 'Μπορείτε να έχετε μόνο έναν προσαρμοσμένο τομέα.',
  hostname_already_exists: 'Αυτός ο τομέας υπάρχει ήδη στον διακομιστή μας.',
  cloudflare_not_found: 'Δεν βρέθηκε το όνομα κεντρικού υπολογιστή στο Cloudflare',
  domain_is_not_allowed: 'Αυτός ο τομέας δεν επιτρέπεται.',
  domain_in_use: 'Ο τομέας {{domain}} χρησιμοποιείται ήδη',
  exceed_domain_limit: 'Μπορείτε να έχετε έως {{limit}} προσαρμοσμένους τομείς.',
};

export default Object.freeze(domain);
