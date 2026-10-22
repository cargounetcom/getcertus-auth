/* GetCertus addition (MPL-2.0, see GETCERTUS.md): admin console phrases. */
const application_details = {
  page_title: 'Λεπτομέρειες εφαρμογής',
  back_to_applications: 'Πίσω στις εφαρμογές',
  check_guide: 'Δείτε τον οδηγό',
  settings: 'Ρυθμίσεις',
  settings_description:
    'Μια «εφαρμογή» είναι καταχωρισμένο λογισμικό ή υπηρεσία που μπορεί να έχει πρόσβαση σε στοιχεία χρήστη ή να ενεργεί για λογαριασμό του. Οι εφαρμογές βοηθούν να αναγνωρίζεται ποιος ζητά τι από το GetCertus και χειρίζονται τη σύνδεση και τα δικαιώματα. Συμπληρώστε τα υποχρεωτικά πεδία για τον έλεγχο ταυτότητας.',
  integration: 'Ενσωμάτωση',
  integration_description:
    'Αναπτύξτε με τους ασφαλείς workers του GetCertus στο δίκτυο edge της Cloudflare, για κορυφαία απόδοση και ψυχρές εκκινήσεις 0 ms σε όλο τον κόσμο.',
  service_configuration: 'Ρύθμιση υπηρεσίας',
  service_configuration_description: 'Ολοκληρώστε τις απαραίτητες ρυθμίσεις στην υπηρεσία σας.',
  session: 'Συνεδρία',
  endpoints_and_credentials: 'Τελικά σημεία & διαπιστευτήρια',
  endpoints_and_credentials_description:
    'Χρησιμοποιήστε τα παρακάτω τελικά σημεία και διαπιστευτήρια για να ρυθμίσετε τη σύνδεση OIDC στην εφαρμογή σας.',
  refresh_token_settings: 'Διακριτικό ανανέωσης',
  refresh_token_settings_description:
    'Διαχειριστείτε τους κανόνες των διακριτικών ανανέωσης για αυτή την εφαρμογή.',
  machine_logs: 'Αρχεία μηχανής',
  application_name: 'Όνομα εφαρμογής',
  application_name_placeholder: 'Η εφαρμογή μου',
  description: 'Περιγραφή',
  description_placeholder: 'Εισαγάγετε μια περιγραφή της εφαρμογής',
  config_endpoint: 'Τελικό σημείο ρυθμίσεων του παρόχου OpenID',
  issuer_endpoint: 'Τελικό σημείο εκδότη',
  jwks_uri: 'URI JWKS',
  authorization_endpoint: 'Τελικό σημείο εξουσιοδότησης',
  authorization_endpoint_tip:
    'Το τελικό σημείο για έλεγχο ταυτότητας και εξουσιοδότηση. Χρησιμοποιείται για τον <a>έλεγχο ταυτότητας</a> OpenID Connect.',
  show_endpoint_details: 'Εμφάνιση λεπτομερειών τελικών σημείων',
  hide_endpoint_details: 'Απόκρυψη λεπτομερειών τελικών σημείων',
  logto_endpoint: 'Τελικό σημείο GetCertus',
  application_id: 'ID εφαρμογής',
  application_id_tip:
    'Το μοναδικό αναγνωριστικό της εφαρμογής, που συνήθως δημιουργεί το GetCertus. Αντιστοιχεί επίσης στο “<a>client_id</a>” του OpenID Connect.',
  application_secret: 'Μυστικό εφαρμογής',
  application_secret_other: 'Μυστικά εφαρμογής',
  redirect_uri: 'URI ανακατεύθυνσης',
  redirect_uris: 'URI ανακατεύθυνσης',
  redirect_uri_placeholder: 'https://your.website.com/app',
  redirect_uri_placeholder_native: 'io.logto://callback',
  redirect_uri_tip:
    'Το URI όπου ανακατευθύνεται ο χρήστης μετά τη σύνδεση (επιτυχή ή όχι). Δείτε το <a>AuthRequest</a> του OpenID Connect για περισσότερα.',
  mixed_redirect_uri_warning:
    'Ο τύπος της εφαρμογής δεν είναι συμβατός με τουλάχιστον ένα από τα URI ανακατεύθυνσης. Αυτό δεν ακολουθεί τις βέλτιστες πρακτικές· συνιστούμε έντονα να διατηρείτε τα URI ανακατεύθυνσης συνεπή.',
  wildcard_redirect_uri_warning:
    'Τα URI ανακατεύθυνσης με χαρακτήρες μπαλαντέρ δεν είναι τυπικό OIDC και μπορεί να διευρύνουν την επιφάνεια επίθεσης. Χρησιμοποιήστε τα με προσοχή και προτιμήστε ακριβή URI όποτε γίνεται.',
  post_sign_out_redirect_uri: 'URI ανακατεύθυνσης μετά την αποσύνδεση',
  post_sign_out_redirect_uris: 'URI ανακατεύθυνσης μετά την αποσύνδεση',
  post_sign_out_redirect_uri_placeholder: 'https://your.website.com/home',
  post_sign_out_redirect_uri_tip:
    'Το URI όπου ανακατευθύνεται ο χρήστης μετά την αποσύνδεση (προαιρετικό). Σε ορισμένους τύπους εφαρμογών ίσως δεν έχει πρακτική επίδραση.',
  cors_allowed_origins: 'Επιτρεπόμενες προελεύσεις CORS',
  cors_allowed_origins_placeholder: 'https://your.website.com',
  cors_allowed_origins_tip:
    'Από προεπιλογή επιτρέπονται όλες οι προελεύσεις των URI ανακατεύθυνσης. Συνήθως δεν χρειάζεται να κάνετε κάτι εδώ. Δείτε την <a>τεκμηρίωση MDN</a> για λεπτομέρειες.',
  token_endpoint: 'Τελικό σημείο διακριτικών',
  user_info_endpoint: 'Τελικό σημείο userinfo',
  enable_admin_access: 'Ενεργοποίηση πρόσβασης διαχειριστή',
  enable_admin_access_label:
    'Ενεργοποιήστε ή απενεργοποιήστε την πρόσβαση στο Management API. Όταν είναι ενεργή, μπορείτε να καλείτε το Management API για λογαριασμό αυτής της εφαρμογής με διακριτικά πρόσβασης.',
  always_issue_refresh_token: 'Πάντα έκδοση διακριτικού ανανέωσης',
  always_issue_refresh_token_label:
    'Όταν είναι ενεργό, το GetCertus εκδίδει πάντα διακριτικά ανανέωσης, είτε υπάρχει είτε όχι το `prompt=consent` στο αίτημα ελέγχου ταυτότητας. Χρησιμοποιήστε το μόνο αν χρειάζεται: δεν είναι συμβατό με το OpenID Connect και μπορεί να προκαλέσει προβλήματα.',
  refresh_token_ttl: 'Διάρκεια ζωής (TTL) διακριτικού ανανέωσης σε ημέρες',
  refresh_token_ttl_tip:
    'Για πόσο μπορεί να χρησιμοποιείται ένα διακριτικό ανανέωσης για νέα διακριτικά πρόσβασης πριν λήξει. Κάθε αίτημα διακριτικού επεκτείνει τη διάρκεια ζωής σε αυτή την τιμή.',
  rotate_refresh_token: 'Εναλλαγή διακριτικού ανανέωσης',
  rotate_refresh_token_label:
    'Όταν είναι ενεργό, το GetCertus εκδίδει νέο διακριτικό ανανέωσης στα αιτήματα διακριτικών όταν έχει περάσει το 70% της αρχικής διάρκειας ζωής (TTL) ή ισχύουν ορισμένες προϋποθέσεις. <a>Μάθετε περισσότερα</a>',
  rotate_refresh_token_label_for_public_clients:
    'Όταν είναι ενεργό, το GetCertus εκδίδει νέο διακριτικό ανανέωσης σε κάθε αίτημα διακριτικού. <a>Μάθετε περισσότερα</a>',
  backchannel_logout: 'Αποσύνδεση backchannel',
  backchannel_logout_description:
    'Ρυθμίστε το τελικό σημείο αποσύνδεσης backchannel του OpenID Connect και αν η εφαρμογή απαιτεί συνεδρία.',
  backchannel_logout_uri: 'URI αποσύνδεσης backchannel',
  backchannel_logout_uri_session_required: 'Απαιτείται συνεδρία;',
  backchannel_logout_uri_session_required_description:
    'Όταν είναι ενεργό, ο RP απαιτεί το διακριτικό αποσύνδεσης να περιέχει αξίωση `sid` (ID συνεδρίας) που προσδιορίζει τη συνεδρία του RP στον OP όταν χρησιμοποιείται το `backchannel_logout_uri`.',
  token_exchange: 'Ανταλλαγή διακριτικών',
  token_exchange_description:
    'Διαχειριστείτε τις ρυθμίσεις ανταλλαγής διακριτικών για αυτή την εφαρμογή.',
  allow_token_exchange: 'Να επιτρέπεται η ανταλλαγή διακριτικών',
  allow_token_exchange_description:
    'Επιτρέψτε στην εφαρμογή να ξεκινά αιτήματα ανταλλαγής διακριτικών. Απαιτείται για την <impersonationLink>πλαστοπροσωπία χρηστών</impersonationLink> και τα <patLink>προσωπικά διακριτικά πρόσβασης</patLink>.',
  allow_token_exchange_public_client_warning:
    'Δεν συνιστάται η ενεργοποίηση της ανταλλαγής διακριτικών για δημόσιους πελάτες (εφαρμογή μίας σελίδας / εγγενής εφαρμογή). Οι δημόσιοι πελάτες δεν μπορούν να αποθηκεύουν με ασφάλεια διαπιστευτήρια, κάτι που μπορεί να εκθέσει την εφαρμογή σε κίνδυνο πλαστοπροσωπίας διακριτικών.',
  device_flow_tag: 'Ροή συσκευής',
  device_flow_notification:
    'Η εφαρμογή χρησιμοποιεί το OAuth 2.0 Device Authorization Flow για συσκευές με περιορισμένη εισαγωγή ή εφαρμογές χωρίς διεπαφή (π.χ. τηλεοράσεις, CLI). Οι χρήστες ολοκληρώνουν τη σύνδεση σε άλλη συσκευή εισάγοντας κωδικό συσκευής ή σαρώνοντας κωδικό QR. <a>Μάθετε περισσότερα</a>',
  device_flow_try_demo: 'Δοκιμάστε την επίδειξη',
  delete_description:
    'Η ενέργεια δεν αναιρείται. Η εφαρμογή θα διαγραφεί οριστικά. Εισαγάγετε το όνομα της εφαρμογής <span>{{name}}</span> για επιβεβαίωση.',
  enter_your_application_name: 'Εισαγάγετε το όνομα της εφαρμογής',
  application_deleted: 'Η εφαρμογή {{name}} διαγράφηκε',
  redirect_uri_required: 'Πρέπει να εισαγάγετε τουλάχιστον ένα URI ανακατεύθυνσης',
  app_domain_description_1:
    'Μπορείτε να χρησιμοποιήσετε τον τομέα σας με {{domain}} μέσω του GetCertus· ισχύει μόνιμα.',
  app_domain_description_2:
    'Μπορείτε να χρησιμοποιήσετε τον τομέα σας <domain>{{domain}}</domain>· ισχύει μόνιμα.',
  custom_rules: 'Προσαρμοσμένοι κανόνες ελέγχου ταυτότητας',
  custom_rules_placeholder: '^/(admin|privacy)/.+$',
  custom_rules_description:
    'Ορίστε με κανονικές εκφράσεις κανόνες για διαδρομές που απαιτούν έλεγχο ταυτότητας. Προεπιλογή: προστατεύεται ολόκληρος ο ιστότοπος αν μείνει κενό.',
  authentication_routes: 'Διαδρομές ελέγχου ταυτότητας',
  custom_rules_tip:
    "Δύο παραδείγματα:<ol><li>Προστασία μόνο των διαδρομών '/admin' και '/privacy' με έλεγχο ταυτότητας: ^/(admin|privacy)/.*</li><li>Εξαίρεση εικόνων JPG από τον έλεγχο ταυτότητας: ^(?!.*\\.jpg$).*$</li></ol>",
  authentication_routes_description:
    'Ανακατευθύνετε το κουμπί ελέγχου ταυτότητας μέσω των καθορισμένων διαδρομών. Σημείωση: αυτές οι διαδρομές δεν αντικαθίστανται.',
  protect_origin_server: 'Προστατέψτε τον διακομιστή προέλευσης',
  protect_origin_server_description:
    'Βεβαιωθείτε ότι ο διακομιστής προέλευσης δεν είναι άμεσα προσβάσιμος. Δείτε τον οδηγό για <a>αναλυτικές οδηγίες</a>.',
  third_party_settings_description:
    'Ενσωματώστε εφαρμογές τρίτων με το GetCertus ως πάροχο ταυτότητας (IdP) μέσω OIDC / OAuth 2.0, με οθόνη συναίνεσης για την εξουσιοδότηση του χρήστη.',
  session_duration: 'Διάρκεια συνεδρίας (ημέρες)',
  try_it: 'Δοκιμάστε το',
  no_organization_placeholder: 'Δεν βρέθηκε οργανισμός. <a>Μετάβαση στους οργανισμούς</a>',
  field_custom_data: 'Προσαρμοσμένα δεδομένα',
  field_custom_data_tip:
    'Επιπλέον στοιχεία εφαρμογής που δεν περιλαμβάνονται στις προκαθορισμένες ιδιότητες, όπως επιχειρησιακές ρυθμίσεις και διαμορφώσεις.',
  custom_data_invalid: 'Τα προσαρμοσμένα δεδομένα πρέπει να είναι έγκυρο αντικείμενο JSON',
  access_control: {
    name: 'Κανόνες',
    title: 'Έλεγχος πρόσβασης',
    description: 'Προσαρμόστε τους κανόνες ελέγχου πρόσβασης σε επίπεδο εφαρμογής.',
    enable: 'Ενεργοποίηση ελέγχου πρόσβασης σε επίπεδο εφαρμογής',
    enable_description:
      'Ενεργοποιήστε λεπτομερή έλεγχο πρόσβασης για να περιορίσετε ποιοι χρήστες μπορούν να χρησιμοποιούν την εφαρμογή. Αν είναι ανενεργός, πρόσβαση έχουν όλοι οι εγγεγραμμένοι χρήστες.',
    enable_without_rules_notice:
      'Προσθέστε τουλάχιστον έναν κανόνα πρόσβασης πριν ενεργοποιήσετε τον έλεγχο πρόσβασης.',
    load_error: 'Η φόρτωση των κανόνων πρόσβασης απέτυχε.',
    custom_allow_rules: 'Προσαρμοσμένοι κανόνες άδειας',
    custom_allow_rules_description:
      'Δημιουργήστε κανόνες ώστε οι χρήστες με ορισμένα χαρακτηριστικά να αποκτούν πρόσβαση αυτόματα. Όταν είναι ενεργό, απαιτείται τουλάχιστον ένας κανόνας.',
    rules: 'Κανόνες πρόσβασης',
    add_rules: 'Προσθήκη κανόνων',
    rules_description:
      'Οι χρήστες έχουν πρόσβαση στην εφαρμογή όταν πληρούν οποιονδήποτε από τους ρυθμισμένους κανόνες.',
    empty_rules_description: 'Δεν υπάρχουν ακόμη κανόνες.',
    delete_rule_confirmation: 'Θέλετε σίγουρα να αφαιρέσετε αυτόν τον κανόνα;',
    rule_table_rules: 'Κανόνες',
    rule_table_description: 'Περιγραφή',
    rule_table_users: 'Χρήστες',
    rule_table_members: 'Μέλη',
    rule_table_user_id: 'ID χρήστη',
    rule_count: '{{count}} κανόνας',
    rule_count_other: '{{count}} κανόνες',
    rule_users: 'Χρήστες',
    rule_users_description: 'Συγκεκριμένοι χρήστες έχουν πρόσβαση σε αυτή την εφαρμογή.',
    rule_roles: 'Ρόλοι',
    rule_user_roles: 'Ρόλοι χρηστών',
    rule_user_roles_description:
      'Οι χρήστες με τους επιλεγμένους ρόλους χρήστη έχουν πρόσβαση σε αυτή την εφαρμογή.',
    rule_organizations: 'Οργανισμοί',
    rule_organizations_description:
      'Όλα τα τρέχοντα και μελλοντικά μέλη των επιλεγμένων οργανισμών έχουν πρόσβαση σε αυτή την εφαρμογή.',
    rule_organization_roles: 'Ρόλοι οργανισμού',
    rule_organization_roles_description:
      'Τα μέλη με τους επιλεγμένους ρόλους στους επιλεγμένους οργανισμούς έχουν πρόσβαση σε αυτή την εφαρμογή.',
  },
  branding: {
    name: 'Ταυτότητα',
    description:
      'Προσαρμόστε το λογότυπο και το χρώμα της εφαρμογής για την εμπειρία σε επίπεδο εφαρμογής.',
    description_third_party:
      'Προσαρμόστε το εμφανιζόμενο όνομα και το λογότυπο της εφαρμογής στην οθόνη συναίνεσης.',
    app_logo: 'Λογότυπο εφαρμογής',
    app_level_sie: 'Εμπειρία σύνδεσης σε επίπεδο εφαρμογής',
    app_level_sie_switch:
      'Ενεργοποιήστε την εμπειρία σύνδεσης σε επίπεδο εφαρμογής και ορίστε ταυτότητα ειδικά για την εφαρμογή. Αν είναι ανενεργή, χρησιμοποιείται η κοινή εμπειρία σύνδεσης.',
    more_info: 'Περισσότερες πληροφορίες',
    more_info_description:
      'Δώστε στους χρήστες περισσότερες πληροφορίες για την εφαρμογή στην οθόνη συναίνεσης.',
    display_name: 'Εμφανιζόμενο όνομα',
    application_logo: 'Λογότυπο εφαρμογής',
    application_logo_dark: 'Λογότυπο εφαρμογής (σκοτεινό)',
    brand_color: 'Χρώμα επωνυμίας',
    brand_color_dark: 'Χρώμα επωνυμίας (σκοτεινό)',
    terms_of_use_url: 'URL όρων χρήσης της εφαρμογής',
    privacy_policy_url: 'URL πολιτικής απορρήτου της εφαρμογής',
  },
  permissions: {
    name: 'Δικαιώματα',
    description:
      'Επιλέξτε τα δικαιώματα που χρειάζεται η εφαρμογή τρίτου για να αποκτά, με την εξουσιοδότηση του χρήστη, πρόσβαση σε συγκεκριμένους τύπους δεδομένων.',
    user_permissions: 'Προσωπικά δεδομένα χρήστη',
    organization_permissions: 'Πρόσβαση στον οργανισμό',
    table_name: 'Παραχώρηση δικαιωμάτων',
    field_name: 'Δικαίωμα',
    field_description: 'Εμφανίζεται στην οθόνη συναίνεσης',
    delete_text: 'Αφαίρεση δικαιώματος',
    permission_delete_confirm:
      'Τα δικαιώματα της εφαρμογής τρίτου θα ανακληθούν και δεν θα μπορεί πλέον να ζητά την εξουσιοδότηση του χρήστη για συγκεκριμένους τύπους δεδομένων. Θέλετε σίγουρα να συνεχίσετε;',
    permissions_assignment_description:
      'Επιλέξτε τα δικαιώματα που ζητά η εφαρμογή τρίτου για να αποκτά, με την εξουσιοδότηση του χρήστη, πρόσβαση σε συγκεκριμένους τύπους δεδομένων.',
    user_profile: 'Δεδομένα χρήστη',
    api_permissions: 'Δικαιώματα API',
    organization: 'Δικαιώματα οργανισμού',
    user_permissions_assignment_form_title: 'Προσθήκη δικαιωμάτων προφίλ χρήστη',
    organization_permissions_assignment_form_title: 'Προσθήκη δικαιωμάτων οργανισμού',
    api_resource_permissions_assignment_form_title: 'Προσθήκη δικαιωμάτων πόρων API',
    user_data_permission_description_tips:
      'Μπορείτε να αλλάξετε την περιγραφή των δικαιωμάτων προσωπικών δεδομένων χρήστη από «Εμπειρία σύνδεσης > Περιεχόμενο > Διαχείριση γλώσσας»',
    permission_description_tips:
      'Όταν το GetCertus είναι πάροχος ταυτότητας (IdP) για έλεγχο ταυτότητας σε εφαρμογές τρίτων και ζητείται εξουσιοδότηση από τους χρήστες, αυτή η περιγραφή εμφανίζεται στην οθόνη συναίνεσης.',
    user_title: 'Χρήστης',
    user_description:
      'Επιλέξτε τα δικαιώματα που ζητά η εφαρμογή τρίτου για πρόσβαση σε συγκεκριμένα δεδομένα χρήστη.',
    grant_user_level_permissions: 'Παραχώρηση δικαιωμάτων δεδομένων χρήστη',
    organization_title: 'Οργανισμός',
    organization_description:
      'Επιλέξτε τα δικαιώματα που ζητά η εφαρμογή τρίτου για πρόσβαση σε συγκεκριμένα δεδομένα οργανισμού.',
    grant_organization_level_permissions: 'Παραχώρηση δικαιωμάτων δεδομένων οργανισμού',
    oidc_title: 'OIDC',
    oidc_description:
      'Τα βασικά δικαιώματα OIDC ρυθμίζονται αυτόματα για την εφαρμογή. Αυτά τα scopes είναι απαραίτητα για τον έλεγχο ταυτότητας και δεν εμφανίζονται στην οθόνη συναίνεσης.',
    default_oidc_permissions: 'Προεπιλεγμένα δικαιώματα OIDC',
    permission_column: 'Δικαίωμα',
    guide_column: 'Επεξήγηση',
    openid_permission: 'openid',
    openid_permission_guide:
      "Προαιρετικό για πρόσβαση σε πόρους OAuth.\nΑπαιτείται για έλεγχο ταυτότητας OIDC. Παρέχει διακριτικό ID και πρόσβαση στο 'userinfo_endpoint'.",
    offline_access_permission: 'offline_access',
    offline_access_permission_guide:
      'Προαιρετικό. Λαμβάνει διακριτικά ανανέωσης για μακροχρόνια πρόσβαση ή εργασίες στο παρασκήνιο.',
  },
  roles: {
    assign_button: 'Ανάθεση ρόλων',
    delete_description:
      'Ο ρόλος θα αφαιρεθεί από αυτή την εφαρμογή μηχανής προς μηχανή. Ο ρόλος παραμένει, αλλά δεν θα συνδέεται πλέον με την εφαρμογή.',
    deleted: 'Το {{name}} αφαιρέθηκε από αυτόν τον χρήστη.',
    assign_title: 'Ανάθεση ρόλων σε {{name}}',
    assign_subtitle:
      'Οι εφαρμογές μηχανής προς μηχανή χρειάζονται ρόλους τύπου μηχανής προς μηχανή για πρόσβαση στους σχετικούς πόρους API.',
    assign_role_field: 'Ανάθεση ρόλων',
    role_search_placeholder: 'Αναζήτηση με όνομα ρόλου',
    added_text: '{{value, number}} προστέθηκαν',
    assigned_app_count: '{{value, number}} εφαρμογές',
    confirm_assign: 'Ανάθεση ρόλων',
    role_assigned: 'Η ανάθεση ρόλων ολοκληρώθηκε',
    search: 'Αναζήτηση με όνομα ρόλου, περιγραφή ή ID',
    empty: 'Δεν υπάρχει διαθέσιμος ρόλος',
  },
  secrets: {
    value: 'Τιμή',
    empty: 'Η εφαρμογή δεν έχει μυστικά.',
    created_at: 'Δημιουργήθηκε',
    expires_at: 'Λήγει',
    never: 'Ποτέ',
    create_new_secret: 'Δημιουργία νέου μυστικού',
    delete_confirmation: 'Η ενέργεια δεν αναιρείται. Θέλετε σίγουρα να διαγράψετε αυτό το μυστικό;',
    deleted: 'Το μυστικό διαγράφηκε.',
    activated: 'Το μυστικό ενεργοποιήθηκε.',
    deactivated: 'Το μυστικό απενεργοποιήθηκε.',
    legacy_secret: 'Παλαιό μυστικό',
    expired: 'Έληξε',
    expired_tooltip: 'Αυτό το μυστικό έληξε στις {{date}}.',
    create_modal: {
      title: 'Δημιουργία μυστικού εφαρμογής',
      expiration: 'Λήξη',
      expiration_description: 'Το μυστικό θα λήξει στις {{date}}.',
      expiration_description_never:
        'Το μυστικό δεν θα λήξει ποτέ. Συνιστούμε ημερομηνία λήξης για μεγαλύτερη ασφάλεια.',
      days: '{{count}} ημέρα',
      days_other: '{{count}} ημέρες',
      years: '{{count}} έτος',
      years_other: '{{count}} έτη',
      created: 'Το μυστικό {{name}} δημιουργήθηκε.',
    },
    edit_modal: {
      title: 'Επεξεργασία μυστικού εφαρμογής',
      edited: 'Το μυστικό {{name}} ενημερώθηκε.',
    },
  },
  saml_idp_config: {
    title: 'Μεταδεδομένα SAML IdP',
    description:
      'Χρησιμοποιήστε τα παρακάτω μεταδεδομένα και το πιστοποιητικό για να ρυθμίσετε το SAML IdP στην εφαρμογή σας.',
    metadata_url_label: 'URL μεταδεδομένων IdP',
    single_sign_on_service_url_label: 'URL υπηρεσίας ενιαίας σύνδεσης',
    idp_entity_id_label: 'ID οντότητας IdP',
  },
  saml_idp_certificates: {
    title: 'Πιστοποιητικό υπογραφής SAML',
    expires_at: 'Λήγει',
    finger_print: 'Δακτυλικό αποτύπωμα',
    status: 'Κατάσταση',
    active: 'Ενεργό',
    inactive: 'Ανενεργό',
  },
  saml_idp_name_id_format: {
    title: 'Μορφή Name ID',
    description: 'Επιλέξτε τη μορφή Name ID του SAML IdP.',
    persistent: 'Μόνιμο',
    persistent_description: 'Χρήση του ID χρήστη GetCertus ως Name ID',
    transient: 'Προσωρινό',
    transient_description: 'Χρήση ID χρήστη μίας χρήσης ως Name ID',
    unspecified: 'Μη καθορισμένο',
    unspecified_description: 'Χρήση του ID χρήστη GetCertus ως Name ID',
    email_address: 'Διεύθυνση email',
    email_address_description: 'Χρήση της διεύθυνσης email ως Name ID',
  },
  saml_idp_authentication: {
    always_force_authn: 'Πάντα υποχρεωτικός έλεγχος ταυτότητας',
    always_force_authn_description:
      'Οι χρήστες πρέπει να συνδέονται ξανά κάθε φορά που ανοίγουν την εφαρμογή, ακόμη κι αν έχουν ήδη συνεδρία GetCertus.',
    always_force_authn_tip:
      'Όταν είναι ενεργό, το GetCertus ζητά πάντα από τους χρήστες να συνδεθούν ξανά για αυτή την εφαρμογή. Αλλιώς, επαναχρησιμοποιείται η υπάρχουσα συνεδρία GetCertus, εκτός αν ο πάροχος υπηρεσίας ζητήσει νέο έλεγχο ταυτότητας με ForceAuthn.',
  },
  saml_encryption_config: {
    encrypt_assertion: 'Κρυπτογράφηση του SAML assertion',
    encrypt_assertion_description: 'Με αυτή την επιλογή το SAML assertion κρυπτογραφείται.',
    encrypt_then_sign: 'Κρυπτογράφηση και μετά υπογραφή',
    encrypt_then_sign_description:
      'Με αυτή την επιλογή το SAML assertion πρώτα κρυπτογραφείται και μετά υπογράφεται· αλλιώς πρώτα υπογράφεται και μετά κρυπτογραφείται.',
    certificate: 'Πιστοποιητικό',
    certificate_tooltip:
      'Αντιγράψτε και επικολλήστε το πιστοποιητικό x509 από τον πάροχο υπηρεσίας για να κρυπτογραφηθεί το SAML assertion.',
    certificate_placeholder:
      '-----BEGIN CERTIFICATE-----\nMIICYDCCAcmgAwIBA...\n-----END CERTIFICATE-----\n',
    certificate_missing_error: 'Το πιστοποιητικό είναι υποχρεωτικό.',
    certificate_invalid_format_error:
      'Μη έγκυρη μορφή πιστοποιητικού. Ελέγξτε τη μορφή και δοκιμάστε ξανά.',
  },
  saml_app_attribute_mapping: {
    name: 'Αντιστοιχίσεις χαρακτηριστικών',
    title: 'Βασικές αντιστοιχίσεις χαρακτηριστικών',
    description:
      'Προσθέστε αντιστοιχίσεις χαρακτηριστικών για συγχρονισμό του προφίλ χρήστη από το GetCertus στην εφαρμογή σας.',
    col_logto_claims: 'Τιμή στο GetCertus',
    col_sp_claims: 'Όνομα τιμής στην εφαρμογή σας',
    add_button: 'Προσθήκη άλλου',
  },
  concurrent_device_limit: {
    title: 'Όριο ταυτόχρονων συσκευών',
    enable: 'Ενεργοποίηση ορίου ταυτόχρονων συσκευών',
    enable_description:
      'Όταν είναι ενεργό, το GetCertus επιβάλλει τον μέγιστο αριθμό ενεργών εγκρίσεων ανά χρήστη για αυτή την εφαρμογή.',
    field: 'Όριο ταυτόχρονων συσκευών ανά εφαρμογή',
    field_description:
      'Περιορίστε σε πόσες συσκευές μπορεί να είναι συνδεδεμένος ταυτόχρονα ένας χρήστης. Το GetCertus περιορίζει τις ενεργές εγκρίσεις και ανακαλεί αυτόματα την παλαιότερη όταν ξεπεραστεί το όριο.',
    field_placeholder: 'Αφήστε κενό για χωρίς όριο',
    should_be_greater_than_zero: 'Πρέπει να είναι μεγαλύτερο από 0.',
  },
};

export default Object.freeze(application_details);
