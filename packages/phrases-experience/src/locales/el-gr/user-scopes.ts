/* GetCertus addition (MPL-2.0, see GETCERTUS.md): sign-in experience phrases. */
const user_scopes = {
  descriptions: {
    custom_data: 'Τα προσαρμοσμένα δεδομένα σας',
    email: 'Η διεύθυνση email σας',
    phone: 'Ο αριθμός τηλεφώνου σας',
    profile: 'Το όνομα, το όνομα χρήστη, το avatar και άλλα στοιχεία προφίλ',
    roles: 'Οι ρόλοι σας',
    identities: 'Οι συνδεδεμένες κοινωνικές σας ταυτότητες',
    'urn:logto:scope:organizations': 'Πληροφορίες για τους οργανισμούς σας',
    'urn:logto:scope:organization_roles': 'Οι ρόλοι σας σε οργανισμούς',
    address: 'Η διεύθυνσή σας',
    'urn:logto:scope:sessions': 'Οι ενεργές συνεδρίες σας',
    'urn:logto:scope:trusted_devices': 'Οι αξιόπιστες συσκευές σας',
  },
};

export default Object.freeze(user_scopes);
