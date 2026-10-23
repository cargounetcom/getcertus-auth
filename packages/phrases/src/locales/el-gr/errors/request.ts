/* GetCertus addition (MPL-2.0, see GETCERTUS.md): admin console phrases. */
const request = {
  invalid_input: 'Μη έγκυρη είσοδος. {{details}}',
  general: 'Παρουσιάστηκε σφάλμα στο αίτημα.',
  range_not_satisfiable: 'Το ζητούμενο εύρος δεν μπορεί να εξυπηρετηθεί.',
  feature_not_supported: 'Αυτή η λειτουργία δεν υποστηρίζεται στο τρέχον περιβάλλον.',
  rate_limited: 'Πάρα πολλά αιτήματα. Δοκιμάστε ξανά αργότερα.',
  message_rate_limited:
    'Στάλθηκαν πάρα πολλά μηνύματα σε αυτόν τον παραλήπτη. Δοκιμάστε ξανά αργότερα.',
};

export default Object.freeze(request);
