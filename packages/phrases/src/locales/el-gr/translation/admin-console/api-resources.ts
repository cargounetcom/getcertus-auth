/* GetCertus addition (MPL-2.0, see GETCERTUS.md): admin console phrases. */
const api_resources = {
  page_title: 'Πόροι API',
  title: 'Πόροι API',
  subtitle: 'Ορίστε τα API που μπορούν να χρησιμοποιούν οι εξουσιοδοτημένες εφαρμογές σας.',
  create: 'Δημιουργία πόρου API',
  api_name: 'Όνομα API',
  api_name_placeholder: 'Εισαγάγετε το όνομα του API',
  api_identifier: 'Αναγνωριστικό API',
  api_identifier_placeholder: 'https://your-api-identifier',
  api_identifier_tip:
    'Το μοναδικό αναγνωριστικό του πόρου API. Πρέπει να είναι απόλυτο URI χωρίς τμήμα fragment (#). Αντιστοιχεί στην <a>παράμετρο resource</a> του OAuth 2.0.',
  default_api: 'Προεπιλεγμένο API',
  default_api_label:
    'Ανά tenant μπορεί να οριστεί το πολύ ένα προεπιλεγμένο API.\nΌταν οριστεί προεπιλεγμένο API, η παράμετρος resource μπορεί να παραλειφθεί από το αίτημα ελέγχου ταυτότητας. Οι επόμενες ανταλλαγές διακριτικών θα χρησιμοποιούν από προεπιλογή αυτό το API ως audience, με αποτέλεσμα την έκδοση JWT. <a>Μάθετε περισσότερα</a>',
  api_resource_created: 'Ο πόρος API {{name}} δημιουργήθηκε',
  invalid_resource_indicator_format: 'Ο δείκτης API πρέπει να είναι έγκυρο απόλυτο URI.',
};

export default Object.freeze(api_resources);
