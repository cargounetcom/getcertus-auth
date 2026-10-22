/* GetCertus addition (MPL-2.0, see GETCERTUS.md): admin console phrases. */
const enterprise_sso_details = {
  back_to_sso_connectors: 'Πίσω στο εταιρικό SSO',
  page_title: 'Λεπτομέρειες συνδέσμου εταιρικού SSO',
  readme_drawer_title: 'Εταιρικό SSO',
  readme_drawer_subtitle:
    'Ρυθμίστε συνδέσμους εταιρικού SSO για να ενεργοποιήσετε το SSO για τους τελικούς χρήστες',
  tab_experience: 'Εμπειρία SSO',
  tab_connection: 'Σύνδεση',
  tab_idp_initiated_auth: 'SSO με εκκίνηση από IdP',
  general_settings_title: 'Γενικά',
  general_settings_description:
    'Ρυθμίστε την εμπειρία του τελικού χρήστη και συνδέστε τον εταιρικό τομέα email για τη ροή SSO με εκκίνηση από SP.',
  custom_branding_title: 'Εμφάνιση',
  custom_branding_description:
    'Προσαρμόστε το όνομα και το λογότυπο που βλέπουν οι τελικοί χρήστες στη ροή ενιαίας σύνδεσης. Αν μείνουν κενά, χρησιμοποιούνται οι προεπιλογές.',
  email_domain_field_name: 'Εταιρικοί τομείς email',
  email_domain_field_description:
    'Οι χρήστες με αυτούς τους τομείς email μπορούν να χρησιμοποιούν SSO για έλεγχο ταυτότητας. Επαληθεύστε την κυριότητα του τομέα πριν τον προσθέσετε.',
  email_domain_field_placeholder:
    'Εισαγάγετε έναν ή περισσότερους τομείς email (π.χ. yourcompany.gr)',
  sync_profile_field_name: 'Συγχρονισμός πληροφοριών προφίλ από τον πάροχο ταυτότητας',
  sync_profile_option: {
    register_only: 'Συγχρονισμός μόνο στην πρώτη σύνδεση',
    each_sign_in: 'Συγχρονισμός σε κάθε σύνδεση',
  },
  connector_name_field_name: 'Όνομα συνδέσμου',
  display_name_field_name: 'Εμφανιζόμενο όνομα',
  connector_logo_field_name: 'Εμφανιζόμενο λογότυπο',
  connector_logo_field_description:
    'Κάθε εικόνα πρέπει να είναι κάτω από 500KB, μόνο SVG, PNG, JPG, JPEG.',
  branding_logo_context: 'Μεταφόρτωση λογοτύπου',
  branding_logo_error: 'Σφάλμα μεταφόρτωσης λογοτύπου: {{error}}',
  branding_light_logo_context: 'Μεταφόρτωση λογοτύπου φωτεινής λειτουργίας',
  branding_light_logo_error: 'Σφάλμα μεταφόρτωσης λογοτύπου φωτεινής λειτουργίας: {{error}}',
  branding_logo_field_name: 'Λογότυπο',
  branding_logo_field_placeholder: 'https://your.domain/logo.png',
  branding_dark_logo_context: 'Μεταφόρτωση λογοτύπου σκοτεινής λειτουργίας',
  branding_dark_logo_error: 'Σφάλμα μεταφόρτωσης λογοτύπου σκοτεινής λειτουργίας: {{error}}',
  branding_dark_logo_field_name: 'Λογότυπο (σκοτεινή λειτουργία)',
  branding_dark_logo_field_placeholder: 'https://your.domain/dark-mode-logo.png',
  check_connection_guide: 'Οδηγός σύνδεσης',
  enterprise_sso_deleted: 'Ο σύνδεσμος εταιρικού SSO διαγράφηκε',
  delete_confirm_modal_title: 'Διαγραφή συνδέσμου εταιρικού SSO',
  delete_confirm_modal_content:
    'Θέλετε σίγουρα να διαγράψετε αυτόν τον εταιρικό σύνδεσμο; Οι χρήστες των παρόχων ταυτότητας δεν θα μπορούν πλέον να χρησιμοποιούν ενιαία σύνδεση.',
  upload_idp_metadata_title_saml: 'Μεταφόρτωση μεταδεδομένων',
  upload_idp_metadata_description_saml:
    'Ρυθμίστε τα μεταδεδομένα που αντιγράψατε από τον πάροχο ταυτότητας.',
  upload_idp_metadata_title_oidc: 'Μεταφόρτωση διαπιστευτηρίων',
  upload_idp_metadata_description_oidc:
    'Ρυθμίστε τα διαπιστευτήρια και τις πληροφορίες διακριτικού OIDC που αντιγράψατε από τον πάροχο ταυτότητας.',
  upload_idp_metadata_button_text: 'Μεταφόρτωση αρχείου XML μεταδεδομένων',
  upload_signing_certificate_button_text: 'Μεταφόρτωση αρχείου πιστοποιητικού υπογραφής',
  configure_domain_field_info_text:
    'Προσθέστε τομέα email για να κατευθύνετε τους εταιρικούς χρήστες στον πάροχο ταυτότητάς τους για ενιαία σύνδεση.',
  email_domain_field_required: 'Απαιτείται τομέας email για την ενεργοποίηση του εταιρικού SSO.',
  upload_saml_idp_metadata_info_text_url:
    'Επικολλήστε το URL μεταδεδομένων του παρόχου ταυτότητας για σύνδεση.',
  upload_saml_idp_metadata_info_text_xml:
    'Επικολλήστε τα μεταδεδομένα του παρόχου ταυτότητας για σύνδεση.',
  upload_saml_idp_metadata_info_text_manual:
    'Συμπληρώστε τα μεταδεδομένα του παρόχου ταυτότητας για σύνδεση.',
  upload_oidc_idp_info_text: 'Συμπληρώστε τις πληροφορίες του παρόχου ταυτότητας για σύνδεση.',
  service_provider_property_title: 'Ρύθμιση στον IdP',
  service_provider_property_description:
    'Ρυθμίστε ενσωμάτωση εφαρμογής με {{protocol}} στον πάροχο ταυτότητας. Εισαγάγετε τα στοιχεία που παρέχει το GetCertus.',
  attribute_mapping_title: 'Αντιστοιχίσεις χαρακτηριστικών',
  attribute_mapping_description:
    'Συγχρονίστε τα προφίλ χρηστών από τον πάροχο ταυτότητας ρυθμίζοντας την αντιστοίχιση χαρακτηριστικών είτε στον πάροχο ταυτότητας είτε στο GetCertus.',
  saml_preview: {
    sign_on_url: 'URL σύνδεσης',
    entity_id: 'Εκδότης',
    x509_certificate: 'Πιστοποιητικό υπογραφής',
    certificate_content: 'Λήγει {{date}}',
  },
  oidc_preview: {
    authorization_endpoint: 'Τελικό σημείο εξουσιοδότησης',
    token_endpoint: 'Τελικό σημείο διακριτικών',
    userinfo_endpoint: 'Τελικό σημείο πληροφοριών χρήστη',
    jwks_uri: 'Τελικό σημείο JSON Web Key Set',
    issuer: 'Εκδότης',
  },
  idp_initiated_auth_config: {
    card_title: 'SSO με εκκίνηση από IdP',
    card_description:
      'Οι χρήστες συνήθως ξεκινούν τον έλεγχο ταυτότητας από την εφαρμογή σας μέσω της ροής SSO με εκκίνηση από SP. ΜΗΝ ενεργοποιήσετε αυτή τη λειτουργία εκτός αν είναι απολύτως απαραίτητο.',
    enable_idp_initiated_sso: 'Ενεργοποίηση SSO με εκκίνηση από IdP',
    enable_idp_initiated_sso_description:
      'Επιτρέψτε στους εταιρικούς χρήστες να ξεκινούν τον έλεγχο ταυτότητας απευθείας από την πύλη του παρόχου ταυτότητας. Κατανοήστε τους πιθανούς κινδύνους ασφαλείας πριν ενεργοποιήσετε τη λειτουργία.',
    default_application: 'Προεπιλεγμένη εφαρμογή',
    default_application_tooltip:
      'Η εφαρμογή-στόχος όπου θα ανακατευθυνθεί ο χρήστης μετά τον έλεγχο ταυτότητας.',
    empty_applications_error:
      'Δεν βρέθηκαν εφαρμογές. Προσθέστε μία στην ενότητα <a>Εφαρμογές</a>.',
    empty_applications_placeholder: 'Δεν υπάρχουν εφαρμογές',
    authentication_type: 'Τύπος ελέγχου ταυτότητας',
    auto_authentication_disabled_title: 'Ανακατεύθυνση στον client για SSO με εκκίνηση από SP',
    auto_authentication_disabled_description:
      'Συνιστάται. Ανακατευθύνετε τους χρήστες στην εφαρμογή client για να ξεκινήσει ασφαλής έλεγχος ταυτότητας OIDC με εκκίνηση από SP. Αυτό αποτρέπει επιθέσεις CSRF.',
    auto_authentication_enabled_title: 'Απευθείας σύνδεση μέσω SSO με εκκίνηση από IdP',
    auto_authentication_enabled_description:
      'Μετά την επιτυχή σύνδεση, οι χρήστες ανακατευθύνονται στο καθορισμένο URI ανακατεύθυνσης με τον κωδικό εξουσιοδότησης (χωρίς επαλήθευση state και PKCE).',
    auto_authentication_disabled_app:
      'Για παραδοσιακές εφαρμογές web και εφαρμογές μίας σελίδας (SPA)',
    auto_authentication_enabled_app: 'Για παραδοσιακές εφαρμογές web',
    idp_initiated_auth_callback_uri: 'Callback URI του client',
    idp_initiated_auth_callback_uri_tooltip:
      'Το callback URI του client για την έναρξη ροής ελέγχου ταυτότητας SSO με εκκίνηση από SP. Στο URI θα προστεθεί ως παράμετρος ερωτήματος ένα ssoConnectorId. (π.χ. https://your.domain/sso/callback?connectorId={{ssoConnectorId}})',
    redirect_uri: 'URI ανακατεύθυνσης μετά τη σύνδεση',
    redirect_uri_tooltip:
      'Το URI όπου ανακατευθύνονται οι χρήστες μετά την επιτυχή σύνδεση. Το GetCertus θα χρησιμοποιήσει αυτό το URI ως URI ανακατεύθυνσης OIDC στο αίτημα εξουσιοδότησης. Για καλύτερη ασφάλεια, χρησιμοποιήστε ξεχωριστό URI για τη ροή SSO με εκκίνηση από IdP.',
    empty_redirect_uris_error:
      'Δεν έχει καταχωριστεί URI ανακατεύθυνσης για την εφαρμογή. Προσθέστε ένα πρώτα.',
    redirect_uri_placeholder: 'Επιλέξτε URI ανακατεύθυνσης μετά τη σύνδεση',
    auth_params: 'Πρόσθετες παράμετροι ελέγχου ταυτότητας',
    auth_params_tooltip:
      'Πρόσθετες παράμετροι που θα σταλούν στο αίτημα εξουσιοδότησης. Από προεπιλογή ζητούνται μόνο τα scopes (openid profile)· εδώ μπορείτε να ορίσετε επιπλέον scopes ή μια αποκλειστική τιμή state. (π.χ. { "scope": "organizations email", "state": "secret_state" }).',
  },
  trust_unverified_email: 'Εμπιστοσύνη σε μη επαληθευμένα email',
  trust_unverified_email_label:
    'Πάντα εμπιστοσύνη στις μη επαληθευμένες διευθύνσεις email από τον πάροχο ταυτότητας',
  trust_unverified_email_tip:
    'Ο σύνδεσμος Entra ID (OIDC) δεν επιστρέφει το claim `email_verified`, άρα οι διευθύνσεις email από το Azure δεν είναι εγγυημένα επαληθευμένες. Από προεπιλογή, το GetCertus δεν συγχρονίζει μη επαληθευμένες διευθύνσεις email στο προφίλ χρήστη. Ενεργοποιήστε την επιλογή μόνο αν εμπιστεύεστε όλες τις διευθύνσεις email του καταλόγου Entra ID.',
  trust_unverified_email_tip_oidc:
    'Ο σύνδεσμος OIDC ίσως δεν επιστρέφει το claim `email_verified`, άρα οι διευθύνσεις email από τον πάροχο ταυτότητας δεν είναι εγγυημένα επαληθευμένες. Από προεπιλογή, το GetCertus δεν συγχρονίζει μη επαληθευμένες διευθύνσεις email στο προφίλ χρήστη. Ενεργοποιήστε την επιλογή μόνο αν εμπιστεύεστε όλες τις διευθύνσεις email του παρόχου ταυτότητας.',
  offline_access: {
    label: 'Ανανέωση διακριτικού πρόσβασης',
    description:
      'Ενεργοποιήστε την πρόσβαση `offline` της Google για να ζητάτε διακριτικό ανανέωσης, ώστε η εφαρμογή να ανανεώνει το διακριτικό πρόσβασης χωρίς νέα εξουσιοδότηση από τον χρήστη.',
  },
};

export default Object.freeze(enterprise_sso_details);
