/* GetCertus addition (MPL-2.0, see GETCERTUS.md): admin console phrases. */
const enterprise_sso = {
  page_title: 'Εταιρικό SSO',
  title: 'Εταιρικό SSO',
  subtitle: 'Συνδέστε τον εταιρικό πάροχο ταυτότητας και ενεργοποιήστε την ενιαία σύνδεση (SSO).',
  create: 'Προσθήκη εταιρικού συνδέσμου',
  col_connector_name: 'Όνομα συνδέσμου',
  col_type: 'Τύπος',
  col_email_domain: 'Τομέας email',
  placeholder_title: 'Εταιρικός σύνδεσμος',
  placeholder_description:
    'Το GetCertus παρέχει πολλούς ενσωματωμένους εταιρικούς παρόχους ταυτότητας, ενώ μπορείτε επίσης να δημιουργήσετε τους δικούς σας με τα πρωτόκολλα SAML και OIDC.',
  create_modal: {
    title: 'Προσθήκη εταιρικού συνδέσμου',
    text_divider: 'Ή προσαρμόστε τον σύνδεσμο με ένα τυπικό πρωτόκολλο.',
    connector_name_field_title: 'Όνομα συνδέσμου',
    connector_name_field_placeholder: 'Π.χ. {όνομα εταιρείας} - {όνομα παρόχου ταυτότητας}',
    create_button_text: 'Δημιουργία συνδέσμου',
  },
  guide: {
    subtitle: 'Οδηγός βήμα προς βήμα για τη σύνδεση του εταιρικού παρόχου ταυτότητας.',
    finish_button_text: 'Συνέχεια',
  },
  basic_info: {
    title: 'Ρυθμίστε την υπηρεσία σας στον IdP',
    description:
      'Δημιουργήστε νέα ενσωμάτωση εφαρμογής με SAML 2.0 στον πάροχο ταυτότητας {{name}}. Έπειτα επικολλήστε σε αυτήν την παρακάτω τιμή.',
    saml: {
      acs_url_field_name: 'URL υπηρεσίας Assertion Consumer (Reply URL)',
      audience_uri_field_name: 'Audience URI (SP Entity ID)',
      entity_id_field_name: 'Entity ID παρόχου υπηρεσίας (SP)',
      entity_id_field_tooltip:
        'Το SP Entity ID μπορεί να είναι οποιαδήποτε συμβολοσειρά, συνήθως URI ή URL ως αναγνωριστικό, αλλά δεν είναι υποχρεωτικό.',
      acs_url_field_placeholder: 'https://your-domain.com/api/saml/callback',
      entity_id_field_placeholder: 'urn:your-domain.com:sp:saml:{serviceProviderId}',
      sign_auth_request: 'Υπογραφή αιτήματος ελέγχου ταυτότητας',
      sign_auth_request_tooltip:
        'Το GetCertus υπογράφει τα αιτήματα ελέγχου ταυτότητας SAML με παραγόμενο πιστοποιητικό. Ενεργοποιήστε μόνο αν ο πάροχος ταυτότητας είναι ρυθμισμένος να επαληθεύει υπογεγραμμένα αιτήματα.',
      signing_certificate_field_name: 'Πιστοποιητικό υπογραφής αιτημάτων',
      signing_keys_empty: 'Δεν έχουν δημιουργηθεί κλειδιά υπογραφής.',
      generate_signing_key: 'Δημιουργία νέου κλειδιού',
      signing_key_generated: 'Το κλειδί υπογραφής δημιουργήθηκε.',
      signing_key_activated: 'Το κλειδί υπογραφής ενεργοποιήθηκε.',
      signing_key_deactivated: 'Το κλειδί υπογραφής απενεργοποιήθηκε.',
      signing_key_deleted: 'Το κλειδί υπογραφής διαγράφηκε.',
      sign_auth_request_warning:
        'Μετά την ενεργοποίηση, δημιουργήστε παρακάτω ένα κλειδί υπογραφής και καταχωρίστε το πιστοποιητικό του στον πάροχο ταυτότητας (και ενεργοποιήστε εκεί την επαλήθευση υπογεγραμμένων αιτημάτων). Μέχρι να καταχωριστεί το πιστοποιητικό, η σύνδεση μέσω αυτής της σύνδεσης θα αποτυγχάνει.',
    },
    oidc: {
      redirect_uri_field_name: 'URI ανακατεύθυνσης (callback URL)',
      redirect_uri_field_description:
        'Το URI ανακατεύθυνσης είναι η διεύθυνση όπου ανακατευθύνονται οι χρήστες μετά τον έλεγχο ταυτότητας SSO. Προσθέστε αυτό το URI στις ρυθμίσεις του IdP σας.',
      redirect_uri_field_custom_domain_description:
        'Αν χρησιμοποιείτε πολλούς <a>προσαρμοσμένους τομείς</a> στο GetCertus, προσθέστε όλα τα αντίστοιχα callback URI στον IdP σας, ώστε το SSO να λειτουργεί σε κάθε τομέα.\n\nΟ προεπιλεγμένος τομέας του GetCertus (*.logto.app) είναι πάντα έγκυρος — συμπεριλάβετέ τον μόνο αν θέλετε να υποστηρίζετε SSO και μέσω αυτού.',
    },
  },
  attribute_mapping: {
    title: 'Αντιστοιχίσεις χαρακτηριστικών',
    description:
      'Τα `id` και `email` απαιτούνται για τον συγχρονισμό του προφίλ χρήστη από τον IdP. Εισαγάγετε το παρακάτω όνομα και την τιμή claim στον IdP σας.',
    col_sp_claims: 'Τιμή παρόχου υπηρεσίας (GetCertus)',
    col_idp_claims: 'Όνομα claim του παρόχου ταυτότητας',
    idp_claim_tooltip: 'Το όνομα claim του παρόχου ταυτότητας',
  },
  metadata: {
    title: 'Ρύθμιση μεταδεδομένων IdP',
    description: 'Ρυθμίστε τα μεταδεδομένα από τον πάροχο ταυτότητας',
    dropdown_trigger_text: 'Χρήση άλλης μεθόδου ρύθμισης',
    dropdown_title: 'επιλέξτε μέθοδο ρύθμισης',
    metadata_format_url: 'Εισαγάγετε το URL μεταδεδομένων',
    metadata_format_xml: 'Μεταφορτώστε το αρχείο XML μεταδεδομένων',
    metadata_format_manual: 'Εισαγάγετε τα μεταδεδομένα χειροκίνητα',
    saml: {
      metadata_url_field_name: 'URL μεταδεδομένων',
      metadata_url_description:
        'Ανάκτηση δεδομένων δυναμικά από το URL μεταδεδομένων και διατήρηση του πιστοποιητικού ενημερωμένου.',
      metadata_xml_field_name: 'Αρχείο XML μεταδεδομένων IdP',
      metadata_xml_uploader_text: 'Μεταφόρτωση αρχείου XML μεταδεδομένων',
      sign_in_endpoint_field_name: 'URL σύνδεσης',
      idp_entity_id_field_name: 'Entity ID του IdP (Issuer)',
      certificate_field_name: 'Πιστοποιητικό υπογραφής',
      certificate_placeholder: 'Αντιγράψτε και επικολλήστε το πιστοποιητικό x509',
      certificate_required: 'Το πιστοποιητικό υπογραφής είναι υποχρεωτικό.',
    },
    oidc: {
      client_id_field_name: 'Client ID',
      client_secret_field_name: 'Μυστικό client',
      issuer_field_name: 'Εκδότης',
      scope_field_name: 'Scope',
      scope_field_placeholder: 'Εισαγάγετε τα scopes (χωρισμένα με κενό)',
    },
  },
};

export default Object.freeze(enterprise_sso);
