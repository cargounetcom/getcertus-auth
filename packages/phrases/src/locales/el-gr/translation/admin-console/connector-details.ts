/* GetCertus addition (MPL-2.0, see GETCERTUS.md): admin console phrases. */
const connector_details = {
  page_title: 'Λεπτομέρειες συνδέσμου',
  back_to_connectors: 'Πίσω στους συνδέσμους',
  check_readme: 'Δείτε το README',
  settings: 'Γενικές ρυθμίσεις',
  settings_description:
    'Ενσωματώστε παρόχους τρίτων για γρήγορη κοινωνική σύνδεση και σύνδεση κοινωνικών λογαριασμών',
  setting_description_with_token_storage_supported:
    'Ενσωματώστε παρόχους τρίτων για γρήγορη κοινωνική σύνδεση, σύνδεση κοινωνικών λογαριασμών και πρόσβαση API.',
  email_connector_settings_description:
    'Ενσωματώστε τον πάροχο email σας για εγγραφή και σύνδεση χωρίς κωδικό μέσω email για τους τελικούς χρήστες.',
  parameter_configuration: 'Ρύθμιση παραμέτρων',
  test_connection: 'Δοκιμή',
  save_error_empty_config: 'Εισαγάγετε ρυθμίσεις',
  send: 'Αποστολή',
  send_error_invalid_format: 'Μη έγκυρη εισαγωγή',
  edit_config_label: 'Εισαγάγετε το JSON εδώ',
  test_email_sender: 'Δοκιμάστε τον σύνδεσμο email',
  test_sms_sender: 'Δοκιμάστε τον σύνδεσμο SMS',
  test_email_placeholder: 'john.doe@example.com',
  test_sms_placeholder: '+1 555-123-4567',
  test_message_sent: 'Το δοκιμαστικό μήνυμα στάλθηκε',
  test_sender_description:
    'Το GetCertus χρησιμοποιεί το πρότυπο "Generic" για δοκιμές. Θα λάβετε μήνυμα αν ο σύνδεσμος είναι σωστά ρυθμισμένος.',
  options_change_email: 'Αλλαγή συνδέσμου email',
  options_change_sms: 'Αλλαγή συνδέσμου SMS',
  connector_deleted: 'Ο σύνδεσμος διαγράφηκε',
  type_email: 'Σύνδεσμος email',
  type_sms: 'Σύνδεσμος SMS',
  type_social: 'Κοινωνικός σύνδεσμος',
  in_used_social_deletion_description:
    'Ο σύνδεσμος χρησιμοποιείται στην εμπειρία σύνδεσης. Αν τον διαγράψετε, η σύνδεση με <name/> θα αφαιρεθεί από τις ρυθμίσεις της εμπειρίας σύνδεσης. Θα χρειαστεί να τον ρυθμίσετε ξανά αν αποφασίσετε να τον επαναφέρετε.',
  in_used_passwordless_deletion_description:
    'Αυτός ο {{name}} χρησιμοποιείται στην εμπειρία σύνδεσης. Αν τον διαγράψετε, η εμπειρία σύνδεσης δεν θα λειτουργεί σωστά μέχρι να λυθεί η σύγκρουση. Θα χρειαστεί να τον ρυθμίσετε ξανά αν αποφασίσετε να τον επαναφέρετε.',
  deletion_description:
    'Αφαιρείτε αυτόν τον σύνδεσμο. Η ενέργεια δεν αναιρείται και θα χρειαστεί να τον ρυθμίσετε ξανά αν αποφασίσετε να τον επαναφέρετε.',
  logto_email: {
    total_email_sent: 'Σύνολο απεσταλμένων email: {{value, number}}',
    total_email_sent_tip:
      'Το GetCertus χρησιμοποιεί το SendGrid για ασφαλές και σταθερό ενσωματωμένο email. Η χρήση είναι εντελώς δωρεάν. <a>Μάθετε περισσότερα</a>',
    hosted_email_usage: {
      daily: 'Ημερησίως <value>{{usage, number}}</value> / {{limit, number}}',
      daily_unlimited: 'Ημερησίως <value>{{usage, number}}</value>',
      monthly: 'Μηνιαίως <value>{{usage, number}}</value> / {{limit, number}}',
      monthly_unlimited: 'Μηνιαίως <value>{{usage, number}}</value>',
      tip: 'Τα πακέτα Free και Development έχουν ημερήσια και μηνιαία όρια για την ενσωματωμένη υπηρεσία email.',
      banner: {
        approaching:
          'Πλησιάζετε το όριο αποστολής της ενσωματωμένης υπηρεσίας email του GetCertus. <provider>Συνδέστε τον δικό σας πάροχο email</provider> ή <upgrade>αναβαθμίστε το πακέτο σας</upgrade> για να συνεχίσετε να χρησιμοποιείτε την ενσωματωμένη υπηρεσία email.',
        reached:
          'Φτάσατε το όριο αποστολής της ενσωματωμένης υπηρεσίας email του GetCertus, κάτι που μπορεί να διακόψει τα email σύνδεσης. <provider>Συνδέστε τον δικό σας πάροχο email</provider> ή <upgrade>αναβαθμίστε το πακέτο σας</upgrade> για να συνεχίσετε να χρησιμοποιείτε την ενσωματωμένη υπηρεσία email.',
      },
    },
    email_template_title: 'Πρότυπο email',
    template_description:
      'Το ενσωματωμένο email χρησιμοποιεί προεπιλεγμένα πρότυπα για απρόσκοπτη αποστολή email επαλήθευσης. Δεν απαιτούνται ρυθμίσεις και μπορείτε να προσαρμόσετε βασικά στοιχεία της επωνυμίας σας.',
    template_description_link_text: 'Προβολή προτύπων',
    description_action_text: 'Προβολή προτύπων',
    from_email_field: 'Διεύθυνση αποστολέα',
    sender_name_field: 'Όνομα αποστολέα',
    sender_name_tip:
      'Προσαρμόστε το όνομα αποστολέα των email. Αν μείνει κενό, χρησιμοποιείται το προεπιλεγμένο όνομα "Verification".',
    sender_name_placeholder: 'Το όνομα αποστολέα',
    company_information_field: 'Στοιχεία εταιρείας',
    company_information_description:
      'Εμφανίστε το όνομα, τη διεύθυνση ή τον ταχυδρομικό κώδικα της εταιρείας στο κάτω μέρος των email για μεγαλύτερη αξιοπιστία.',
    company_information_placeholder: 'Βασικά στοιχεία της εταιρείας σας',
    email_logo_field: 'Λογότυπο email',
    email_logo_tip:
      'Εμφανίστε το λογότυπό σας στο πάνω μέρος των email. Χρησιμοποιήστε την ίδια εικόνα για φωτεινή και σκοτεινή λειτουργία.',
    urls_not_allowed: 'Δεν επιτρέπονται URL',
    test_notes: 'Το GetCertus χρησιμοποιεί το πρότυπο “Generic” για δοκιμές.',
  },
  google_one_tap: {
    title: 'Google One Tap',
    description:
      'Το Google One Tap είναι ένας ασφαλής και εύκολος τρόπος σύνδεσης των χρηστών στον ιστότοπό σας.',
    enable_google_one_tap: 'Ενεργοποίηση Google One Tap',
    enable_google_one_tap_description:
      'Ενεργοποιήστε το Google One Tap στην εμπειρία σύνδεσης: οι χρήστες που είναι ήδη συνδεδεμένοι στη συσκευή τους μπορούν να εγγραφούν ή να συνδεθούν γρήγορα με τον λογαριασμό Google τους.',
    configure_google_one_tap: 'Ρύθμιση Google One Tap',
    auto_select: 'Αυτόματη επιλογή διαπιστευτηρίων όταν είναι δυνατό',
    close_on_tap_outside: 'Ακύρωση του παραθύρου αν ο χρήστης κάνει κλικ/πατήσει έξω από αυτό',
    itp_support: 'Ενεργοποίηση <a>βελτιωμένης εμπειρίας One Tap σε προγράμματα περιήγησης ITP</a>',
  },
  sign_in_experience: {
    in_use: 'Ενεργό για σύνδεση ',
    not_in_use: 'Ανενεργό για σύνδεση ',
  },
  email_logs: {
    title: 'Αρχεία email',
    time: 'Ώρα',
    recipient: 'Παραλήπτης',
    recipient_placeholder: 'Αναζήτηση με την πλήρη διεύθυνση του παραλήπτη',
    template_type: 'Τύπος προτύπου',
    status: 'Κατάσταση',
    status_sent: 'Στάλθηκε',
    status_failed: 'Απέτυχε',
    language_tag: 'Γλώσσα',
    provider_message_id: 'ID μηνύματος παρόχου',
  },
};

export default Object.freeze(connector_details);
