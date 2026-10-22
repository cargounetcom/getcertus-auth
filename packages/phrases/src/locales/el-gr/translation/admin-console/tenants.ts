/* GetCertus addition (MPL-2.0, see GETCERTUS.md): admin console phrases. */
const tenants = {
  title: 'Ρυθμίσεις',
  description:
    'Διαχειριστείτε αποτελεσματικά τις ρυθμίσεις του tenant και προσαρμόστε τον τομέα σας.',
  oss_description:
    'Αλλάξτε εδώ τις ρυθμίσεις του λογαριασμού σας και διαχειριστείτε τα προσωπικά σας στοιχεία για την ασφάλεια του λογαριασμού.',
  tabs: {
    settings: 'Ρυθμίσεις',
    members: 'Μέλη',
    domains: 'Τομείς',
    oidc_configs: 'Ρυθμίσεις OIDC',
    subscription: 'Πρόγραμμα και χρεώσεις',
    billing_history: 'Ιστορικό χρεώσεων',
    license: 'Άδεια χρήσης',
  },
  license: {
    purchase_title: 'ΠΡΟΓΡΑΜΜΑΤΑ SELF-HOSTED',
    purchase_description:
      'Τα self-hosted Pro και Enterprise ξεκλειδώνουν επί πληρωμή λειτουργίες στη δική σας εγκατάσταση, όπως απόκρυψη του branding του GetCertus, δικό σας UI, συνεργασία στο Console και απεριόριστες εφαρμογές SAML. Αγοράστε ένα πρόγραμμα για να λάβετε το κλειδί άδειας.',
    purchase_button: 'Προβολή προγραμμάτων self-hosted',
    install_title: 'ΕΓΚΑΤΑΣΤΑΣΗ ΑΔΕΙΑΣ',
    install_description:
      'Επικολλήστε το κλειδί άδειας που λάβατε μετά την αγορά ενός προγράμματος self-hosted.',
    install_button: 'Εγκατάσταση άδειας',
    key_field: 'Κλειδί άδειας',
    key_field_description:
      'Το κλειδί επαληθεύεται στην εγκατάστασή σας και δεν φεύγει ποτέ από αυτήν. Επικοινωνήστε με το GetCertus για νέο κλειδί αν το τρέχον έχει λήξει.',
    key_placeholder: 'Επικολλήστε εδώ το κλειδί άδειας',
    installed_toast: 'Η άδεια εγκαταστάθηκε.',
    details_title: 'ΑΔΕΙΑ',
    details_description: 'Η άδεια που είναι εγκατεστημένη σε αυτή την εγκατάσταση και τι παρέχει.',
    plan_field: 'Πρόγραμμα',
    environment_field: 'Περιβάλλον',
    environment_production: 'Παραγωγή',
    environment_non_production: 'Μη παραγωγικό',
    expires_at_field: 'Λήγει στις',
    installed_at_field: 'Εγκαταστάθηκε στις',
    last_refreshed_at_field: 'Τελευταία ανανέωση στις',
    grace_ends_at_field: 'Η περίοδος χάριτος λήγει στις',
    refresh_expired_description:
      'Το κλειδί άδειας έληξε στις {{expiresAt}}. Οι αδειοδοτημένες λειτουργίες παραμένουν διαθέσιμες έως τις {{graceEndsAt}}, όσο το GetCertus προσπαθεί να το ανανεώσει.',
    refresh_refused_description:
      'Η ανανέωση της άδειας απορρίφθηκε επειδή η άδεια είναι {{reason}}. Οι αδειοδοτημένες λειτουργίες παραμένουν διαθέσιμες έως τις {{graceEndsAt}}.',
    refusal_reason_canceled: 'ακυρωμένη',
    refusal_reason_unpaid: 'απλήρωτη',
    refusal_reason_expired: 'ληγμένη',
    refusal_reason_revoked: 'ανακληθείσα',
    refusal_reason_unknown: 'μη διαθέσιμη',
    grace_expired_description:
      'Η περίοδος χάριτος της άδειας έληξε στις {{graceEndsAt}}. Αυτή η εγκατάσταση επανήλθε στις προεπιλογές OSS. Επικοινωνήστε με το GetCertus για νέο κλειδί άδειας και εγκαταστήστε το ξανά.',
    get_fresh_key_button: 'Λήψη νέου κλειδιού άδειας',
    replace_button: 'Αντικατάσταση άδειας',
  },
  members: {
    card_title: 'Διαχειριστείτε tenants με μεγαλύτερη ασφάλεια με το GetCertus Cloud',
    card_description:
      'Προσθέστε διαχειριστές ή συνεργάτες στον tenant σας χωρίς να μοιράζεστε έναν κοινό λογαριασμό διαχειριστή.',
    card_action: 'Εξερευνήστε το GetCertus Cloud',
    self_hosted_card_title:
      'Διαχειριστείτε tenants με μεγαλύτερη ασφάλεια με τα προγράμματα self-hosted',
    self_hosted_card_description:
      'Προσθέστε διαχειριστές ή συνεργάτες στον tenant σας χωρίς να μοιράζεστε έναν κοινό λογαριασμό διαχειριστή.',
    self_hosted_card_action: 'Εξερευνήστε τα προγράμματα self-hosted',
  },
  settings: {
    title: 'ΡΥΘΜΙΣΕΙΣ',
    description:
      'Ορίστε το όνομα του tenant και δείτε την περιοχή φιλοξενίας δεδομένων και τον τύπο του tenant.',
    tenant_id: 'Αναγνωριστικό tenant',
    tenant_name: 'Όνομα tenant',
    tenant_instance: 'Επιλέξτε εγκατάσταση',
    tenant_instance_description:
      'Επιλέξτε πού θα φιλοξενείται ο tenant σας. Επιλέξτε GetCertus Cloud για κοινόχρηστη δημόσια υποδομή ή ιδιωτική εγκατάσταση για αποκλειστικούς πόρους.',
    tenant_region: 'Περιοχή δεδομένων',
    tenant_region_description:
      'Η φυσική τοποθεσία όπου φιλοξενούνται οι πόροι του tenant (χρήστες, εφαρμογές κ.λπ.). Δεν μπορεί να αλλάξει μετά τη δημιουργία.',
    tenant_region_tip:
      'Οι πόροι του tenant σας φιλοξενούνται στην περιοχή {{region}}. <a>Μάθετε περισσότερα</a>',
    environment_tag_development: 'Dev',
    environment_tag_production: 'Prod',
    tenant_type: 'Τύπος tenant',
    development_description:
      'Μόνο για δοκιμές, όχι για παραγωγή. Δεν απαιτείται συνδρομή. Διαθέτει όλες τις λειτουργίες Pro, αλλά με περιορισμούς όπως ένα banner σύνδεσης.',
    production_description:
      'Για εφαρμογές που χρησιμοποιούνται από τελικούς χρήστες· μπορεί να απαιτεί συνδρομή επί πληρωμή.',
    tenant_info_saved: 'Οι πληροφορίες του tenant αποθηκεύτηκαν.',
    tenant_mfa: 'Έλεγχος ταυτότητας πολλαπλών παραγόντων',
    tenant_mfa_description:
      'Απαιτήστε από τα μέλη να ρυθμίσουν έλεγχο ταυτότητας πολλαπλών παραγόντων για πρόσβαση σε αυτόν τον tenant.',
    oss_description:
      'Διαχειριστείτε πώς αποκτούν πρόσβαση τα μέλη στο Console σε αυτή την εγκατάσταση.',
    tenant_mfa_confirm_title: 'Απαίτηση MFA για όλα τα μέλη;',
    tenant_mfa_confirm_description:
      'Αυτά τα μέλη δεν έχουν ρυθμίσει ακόμα MFA. Παραμένουν συνδεδεμένα και θα τους ζητηθεί να το ρυθμίσουν στην επόμενη σύνδεσή τους:',
    tenant_mfa_confirm_self:
      'Ούτε εσείς έχετε ρυθμίσει MFA. Ρυθμίστε το στις ρυθμίσεις του λογαριασμού σας πριν από την επόμενη σύνδεση.',
    tenant_mfa_confirm_button: 'Απαίτηση MFA',
    tenant_mfa_setup_required:
      'Αυτός ο tenant απαιτεί έλεγχο ταυτότητας πολλαπλών παραγόντων. Ρυθμίστε τον τώρα, αλλιώς θα σας ζητηθεί στην επόμενη σύνδεση.',
    tenant_mfa_setup_action: 'Ρύθμιση MFA',
    enterprise_sso: 'Enterprise SSO',
    enterprise_sso_description:
      'Διαθέσιμο στα προγράμματα επί πληρωμή. Επικοινωνήστε μαζί μας για να ενεργοποιήσετε το enterprise SSO, ώστε όλα τα μέλη να συνδέονται στο GetCertus Cloud Console μέσω του παρόχου ταυτότητας του οργανισμού σας.',
  },
  full_env_tag: {
    development: 'Ανάπτυξη',
    production: 'Παραγωγή',
  },
  deletion_card: {
    title: 'ΔΙΑΓΡΑΦΗ',
    tenant_deletion: 'Διαγραφή tenant',
    tenant_deletion_description:
      'Η διαγραφή του tenant αφαιρεί οριστικά όλα τα σχετικά δεδομένα χρηστών και τις ρυθμίσεις. Προχωρήστε με προσοχή.',
    tenant_deletion_button: 'Διαγραφή tenant',
  },
  leave_tenant_card: {
    title: 'ΑΠΟΧΩΡΗΣΗ',
    leave_tenant: 'Αποχώρηση από tenant',
    leave_tenant_description:
      'Όλοι οι πόροι του tenant παραμένουν, αλλά δεν θα έχετε πλέον πρόσβαση σε αυτόν.',
    last_admin_note:
      'Για να αποχωρήσετε από τον tenant, βεβαιωθείτε ότι τουλάχιστον ένα ακόμα μέλος έχει τον ρόλο διαχειριστή.',
  },
  create_modal: {
    title: 'Δημιουργία tenant',
    subtitle: 'Δημιουργήστε νέο tenant με απομονωμένους πόρους και χρήστες.',
    tenant_id: 'Αναγνωριστικό tenant',
    tenant_usage_purpose: 'Για ποιον σκοπό θέλετε να χρησιμοποιήσετε αυτόν τον tenant;',
    development_description: 'Μόνο για δοκιμές, όχι για παραγωγή. Δεν απαιτείται συνδρομή.',
    development_description_for_private_regions: 'Μόνο για δοκιμές, όχι για παραγωγή.',
    development_hint:
      'Διαθέτει όλες τις λειτουργίες Pro, αλλά με περιορισμούς όπως ένα banner σύνδεσης.',
    production_description:
      'Για χρήση από τελικούς χρήστες· μπορεί να απαιτεί συνδρομή επί πληρωμή.',
    available_plan: 'Διαθέσιμο πρόγραμμα:',
    create_button: 'Δημιουργία tenant',
    tenant_name_placeholder: 'Ο tenant μου',
    tenant_created: 'Ο tenant δημιουργήθηκε.',
    invitation_failed:
      'Ορισμένες προσκλήσεις δεν στάλθηκαν. Δοκιμάστε ξανά αργότερα από Ρυθμίσεις -> Μέλη.',
    tenant_type_description: 'Δεν μπορεί να αλλάξει μετά τη δημιουργία.',
    tenant_id_invalid:
      'Το αναγνωριστικό tenant μπορεί να περιέχει μόνο πεζά γράμματα, αριθμούς και παύλες και δεν μπορεί να υπερβαίνει τους {{max}} χαρακτήρες.',
    tenant_id_placeholder: 'Το αναγνωριστικό του tenant σας',
    tenant_id_tip:
      'Προσαρμόστε το αναγνωριστικό tenant. Αν το αφήσετε κενό, το GetCertus θα δημιουργήσει προεπιλεγμένο αναγνωριστικό. Το αναγνωριστικό tenant δεν μπορεί να αλλάξει μετά τη δημιουργία.',
  },
  dev_tenant_migration: {
    title:
      'Μπορείτε πλέον να δοκιμάσετε δωρεάν τις λειτουργίες Pro δημιουργώντας έναν νέο «tenant ανάπτυξης»!',
    affect_title: 'Πώς σας επηρεάζει αυτό;',
    hint_1:
      'Αντικαθιστούμε τις παλιές <strong>ετικέτες περιβάλλοντος</strong> με δύο νέους τύπους tenant: <strong>«Ανάπτυξη»</strong> και <strong>«Παραγωγή»</strong>.',
    hint_2:
      'Για ομαλή μετάβαση και αδιάλειπτη λειτουργία, όλοι οι tenants που δημιουργήθηκαν νωρίτερα θα μεταφερθούν στον τύπο <strong>Παραγωγή</strong> μαζί με την υπάρχουσα συνδρομή σας.',
    hint_3: 'Μην ανησυχείτε, όλες οι άλλες ρυθμίσεις σας παραμένουν ίδιες.',
    about_tenant_type: 'Σχετικά με τον τύπο tenant',
  },
  delete_modal: {
    title: 'Διαγραφή tenant',
    description_line1:
      'Θέλετε σίγουρα να διαγράψετε τον tenant "<span>{{name}}</span>" με ετικέτα περιβάλλοντος "<span>{{tag}}</span>"; Η ενέργεια δεν αναιρείται και θα οδηγήσει στην οριστική διαγραφή όλων των δεδομένων και των πληροφοριών του tenant.',
    description_line2:
      'Πριν διαγράψετε τον tenant, ίσως μπορούμε να βοηθήσουμε. <span><a>Επικοινωνήστε μαζί μας μέσω email</a></span>',
    description_line3:
      'Αν θέλετε να συνεχίσετε, πληκτρολογήστε το όνομα του tenant "<span>{{name}}</span>" για επιβεβαίωση.',
    delete_button: 'Οριστική διαγραφή',
    cannot_delete_title: 'Δεν είναι δυνατή η διαγραφή του tenant',
    cannot_delete_description:
      'Λυπούμαστε, δεν μπορείτε να διαγράψετε αυτόν τον tenant αυτή τη στιγμή. Βεβαιωθείτε ότι είστε στο δωρεάν πρόγραμμα και ότι έχετε εξοφλήσει όλες τις εκκρεμείς χρεώσεις.',
  },
  leave_tenant_modal: {
    description: 'Θέλετε σίγουρα να αποχωρήσετε από αυτόν τον tenant;',
    leave_button: 'Αποχώρηση',
  },
  tenant_landing_page: {
    title: 'Δεν έχετε δημιουργήσει ακόμα tenant',
    description:
      'Για να ξεκινήσετε τη ρύθμιση του έργου σας με το GetCertus, δημιουργήστε νέο tenant. Αν θέλετε να αποσυνδεθείτε ή να διαγράψετε τον λογαριασμό σας, πατήστε το κουμπί avatar πάνω δεξιά.',
    create_tenant_button: 'Δημιουργία tenant',
  },
  status: {
    mau_exceeded: 'Υπέρβαση MAU',
    token_exceeded: 'Υπέρβαση tokens',
    suspended: 'Σε αναστολή',
    overdue: 'Ληξιπρόθεσμο',
  },
  tenant_suspended_page: {
    title: 'Ο tenant τέθηκε σε αναστολή. Επικοινωνήστε μαζί μας για επαναφορά της πρόσβασης.',
    description_1:
      'Λυπούμαστε που σας ενημερώνουμε ότι ο λογαριασμός του tenant σας τέθηκε προσωρινά σε αναστολή λόγω ακατάλληλης χρήσης, όπως υπέρβαση των ορίων MAU, ληξιπρόθεσμες πληρωμές ή άλλες μη εξουσιοδοτημένες ενέργειες.',
    description_2:
      'Αν χρειάζεστε περισσότερες διευκρινίσεις, έχετε απορίες ή θέλετε να επαναφέρετε την πλήρη λειτουργία και να ξεμπλοκάρετε τους tenants σας, επικοινωνήστε αμέσως μαζί μας.',
  },
  production_tenant_notification: {
    text: 'Βρίσκεστε σε tenant ανάπτυξης για δωρεάν δοκιμές. Δημιουργήστε tenant παραγωγής για να βγείτε live.',
    action: 'Δημιουργία tenant',
  },
};

export default Object.freeze(tenants);
