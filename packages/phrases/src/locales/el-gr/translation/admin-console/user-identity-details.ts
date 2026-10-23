/* GetCertus addition (MPL-2.0, see GETCERTUS.md): admin console phrases. */
const user_identity_details = {
  social_identity_page_title: 'Λεπτομέρειες κοινωνικής ταυτότητας',
  back_to_user_details: 'Επιστροφή στις λεπτομέρειες χρήστη',
  delete_identity: 'Αφαίρεση σύνδεσης ταυτότητας',
  social_account: {
    title: 'Κοινωνικός λογαριασμός',
    description:
      'Δείτε δεδομένα χρήστη και πληροφορίες προφίλ που συγχρονίστηκαν από τον συνδεδεμένο λογαριασμό {{connectorName}}.',
    provider_name: 'Όνομα παρόχου κοινωνικής ταυτότητας',
    identity_id: 'Αναγνωριστικό κοινωνικής ταυτότητας',
    user_profile: 'Προφίλ χρήστη συγχρονισμένο από τον πάροχο κοινωνικής ταυτότητας',
  },
  sso_account: {
    title: 'Λογαριασμός enterprise SSO',
    description:
      'Δείτε δεδομένα χρήστη και πληροφορίες προφίλ που συγχρονίστηκαν από τον συνδεδεμένο λογαριασμό {{connectorName}}.',
    provider_name: 'Όνομα παρόχου ταυτότητας enterprise SSO',
    identity_id: 'Αναγνωριστικό ταυτότητας enterprise SSO',
    user_profile: 'Προφίλ χρήστη συγχρονισμένο από τον πάροχο ταυτότητας enterprise SSO',
  },
  token_storage: {
    title: 'Access token',
    description:
      'Αποθήκευση access και refresh tokens από το {{connectorName}} στο Secret Vault. Επιτρέπει αυτοματοποιημένες κλήσεις API χωρίς επαναλαμβανόμενη συναίνεση του χρήστη.',
  },
  access_token: {
    title: 'Access token',
    description_active:
      'Το access token είναι ενεργό και αποθηκευμένο με ασφάλεια στο Secret Vault. Το προϊόν σας μπορεί να το χρησιμοποιεί για πρόσβαση στα API του {{connectorName}}.',
    description_inactive:
      'Αυτό το access token είναι ανενεργό (π.χ. ανακλήθηκε). Οι χρήστες πρέπει να εξουσιοδοτήσουν ξανά την πρόσβαση για να αποκατασταθεί η λειτουργία.',
    description_expired:
      'Αυτό το access token έχει λήξει. Ανανεώνεται αυτόματα στο επόμενο αίτημα API με χρήση του refresh token. Αν δεν υπάρχει refresh token, ο χρήστης πρέπει να συνδεθεί ξανά.',
  },
  refresh_token: {
    available:
      'Υπάρχει refresh token. Αν λήξει το access token, θα ανανεωθεί αυτόματα μέσω του refresh token.',
    not_available:
      'Δεν υπάρχει refresh token. Μόλις λήξει το access token, οι χρήστες πρέπει να συνδεθούν ξανά για να λάβουν νέα tokens.',
  },
  token_status: 'Κατάσταση token',
  created_at: 'Δημιουργήθηκε',
  updated_at: 'Ενημερώθηκε',
  expires_at: 'Λήγει',
  scopes: 'Scopes',
  delete_tokens: {
    title: 'Διαγραφή tokens',
    description:
      'Διαγραφή των αποθηκευμένων tokens. Οι χρήστες πρέπει να εξουσιοδοτήσουν ξανά την πρόσβαση για να αποκατασταθεί η λειτουργία.',
    confirmation_message:
      'Θέλετε σίγουρα να διαγράψετε τα tokens; Το GetCertus Secret Vault θα αφαιρέσει τα αποθηκευμένα access και refresh tokens του {{connectorName}}. Ο χρήστης θα πρέπει να εξουσιοδοτήσει ξανά για να αποκατασταθεί η πρόσβαση στο API του {{connectorName}}.',
  },
  token_storage_disabled: {
    title: 'Η αποθήκευση tokens είναι απενεργοποιημένη για αυτόν τον σύνδεσμο',
    description:
      'Οι χρήστες μπορούν προς το παρόν να χρησιμοποιούν το {{connectorName}} μόνο για σύνδεση, σύνδεση λογαριασμών ή συγχρονισμό προφίλ σε κάθε ροή συναίνεσης. Για πρόσβαση στα API του {{connectorName}} και εκτέλεση ενεργειών εκ μέρους των χρηστών, ενεργοποιήστε την αποθήκευση tokens στο',
  },
};

export default Object.freeze(user_identity_details);
