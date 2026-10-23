/* GetCertus addition (MPL-2.0, see GETCERTUS.md): admin console phrases. */
const custom_profile_fields = {
  entity_not_exists_with_names: 'Δεν βρέθηκαν οντότητες με τα δοθέντα ονόματα: {{names}}',
  invalid_min_max_input: 'Μη έγκυρες τιμές ελάχιστου και μέγιστου.',
  invalid_default_value: 'Μη έγκυρη προεπιλεγμένη τιμή.',
  invalid_options: 'Μη έγκυρες επιλογές πεδίου.',
  invalid_regex_format: 'Μη έγκυρη μορφή regex.',
  invalid_address_components: 'Μη έγκυρα στοιχεία διεύθυνσης.',
  invalid_fullname_components: 'Μη έγκυρα στοιχεία ονοματεπωνύμου.',
  invalid_sub_component_type: 'Μη έγκυρος τύπος υποστοιχείου.',
  name_exists: 'Υπάρχει ήδη πεδίο με αυτό το όνομα.',
  conflicted_sie_order: 'Συγκρουόμενη σειρά πεδίων για την εμπειρία σύνδεσης.',
  invalid_name:
    'Μη έγκυρο όνομα πεδίου· επιτρέπονται μόνο γράμματα ή αριθμοί, με διάκριση πεζών-κεφαλαίων.',
  name_conflict_sign_in_identifier:
    'Μη έγκυρο όνομα πεδίου. Δεσμευμένα κλειδιά αναγνωριστικών σύνδεσης: {{name}}.',
  name_conflict_built_in_prop:
    'Μη έγκυρο όνομα πεδίου. Δεσμευμένα ονόματα ενσωματωμένων ιδιοτήτων προφίλ: {{name}}.',
  name_conflict_custom_data:
    'Μη έγκυρο όνομα πεδίου. Δεσμευμένα κλειδιά προσαρμοσμένων δεδομένων: {{name}}.',
  name_required: 'Το όνομα πεδίου είναι υποχρεωτικό.',
};

export default Object.freeze(custom_profile_fields);
