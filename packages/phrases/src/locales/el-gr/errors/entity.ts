/* GetCertus addition (MPL-2.0, see GETCERTUS.md): admin console phrases. */
const entity = {
  invalid_input: 'Μη έγκυρη είσοδος. Η λίστα τιμών δεν μπορεί να είναι κενή.',
  value_too_long: 'Η τιμή είναι πολύ μεγάλη και υπερβαίνει το όριο.',
  create_failed: 'Η δημιουργία του {{name}} απέτυχε.',
  db_constraint_violated: 'Παραβιάστηκε περιορισμός της βάσης δεδομένων.',
  not_exists: 'Το {{name}} δεν υπάρχει.',
  not_exists_with_id: 'Το {{name}} με ID `{{id}}` δεν υπάρχει.',
  not_found: 'Ο πόρος δεν υπάρχει.',
  relation_foreign_key_not_found:
    'Δεν βρέθηκαν ένα ή περισσότερα ξένα κλειδιά. Ελέγξτε την είσοδο και βεβαιωθείτε ότι υπάρχουν όλες οι οντότητες που αναφέρονται.',
  unique_integrity_violation: 'Η οντότητα υπάρχει ήδη. Ελέγξτε την είσοδο και δοκιμάστε ξανά.',
};

export default Object.freeze(entity);
