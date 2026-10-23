/* GetCertus addition (MPL-2.0, see GETCERTUS.md): admin console phrases. */
const single_sign_on = {
  forbidden_domains: 'Οι δημόσιοι τομείς email δεν επιτρέπονται.',
  duplicated_domains: 'Υπάρχουν διπλότυποι τομείς.',
  invalid_domain_format: 'Μη έγκυρη μορφή τομέα.',
  duplicate_connector_name: 'Το όνομα του συνδέσμου υπάρχει ήδη. Επιλέξτε διαφορετικό όνομα.',
  idp_initiated_authentication_not_supported:
    'Ο έλεγχος ταυτότητας που ξεκινά από τον IdP υποστηρίζεται αποκλειστικά για συνδέσμους SAML.',
  idp_initiated_authentication_invalid_application_type:
    'Μη έγκυρος τύπος εφαρμογής. Επιτρέπονται μόνο εφαρμογές {{type}}.',
  idp_initiated_authentication_redirect_uri_not_registered:
    'Το redirect_uri δεν είναι καταχωρισμένο. Ελέγξτε τις ρυθμίσεις της εφαρμογής.',
  idp_initiated_authentication_client_callback_uri_not_found:
    'Δεν βρέθηκε το callback URI του client για έλεγχο ταυτότητας που ξεκινά από τον IdP. Ελέγξτε τις ρυθμίσεις του συνδέσμου.',
  sso_signing_unavailable:
    'Δεν ήταν δυνατή η ολοκλήρωση της σύνδεσης μέσω του παρόχου ταυτότητάς σας. Επικοινωνήστε με τον διαχειριστή σας.',
  can_not_delete_active_signing_key:
    'Το ενεργό κλειδί υπογραφής δεν μπορεί να διαγραφεί. Ενεργοποιήστε άλλο κλειδί ή απενεργοποιήστε πρώτα αυτό.',
  can_not_deactivate_signing_key_in_use:
    'Το κλειδί υπογραφής δεν μπορεί να απενεργοποιηθεί όσο είναι ενεργά τα υπογεγραμμένα αιτήματα ελέγχου ταυτότητας. Απενεργοποιήστε πρώτα τα υπογεγραμμένα αιτήματα.',
  active_signing_key_required:
    'Δεν βρέθηκε ενεργό κλειδί υπογραφής. Δημιουργήστε και ενεργοποιήστε κλειδί υπογραφής πριν ενεργοποιήσετε τα υπογεγραμμένα αιτήματα ελέγχου ταυτότητας.',
};

export default Object.freeze(single_sign_on);
