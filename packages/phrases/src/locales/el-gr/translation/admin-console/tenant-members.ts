/* GetCertus addition (MPL-2.0, see GETCERTUS.md): admin console phrases. */
const tenant_members = {
  members: 'Μέλη',
  invitations: 'Προσκλήσεις',
  invite_members: 'Πρόσκληση μελών',
  user: 'Χρήστης',
  roles: 'Ρόλοι',
  admin: 'Διαχειριστής',
  collaborator: 'Συνεργάτης',
  invitation_status: 'Κατάσταση πρόσκλησης',
  inviter: 'Αποστολέας πρόσκλησης',
  expiration_date: 'Ημερομηνία λήξης',
  invite_modal: {
    title: 'Πρόσκληση ατόμων στο GetCertus Cloud',
    subtitle:
      'Για να γίνουν μέλη ενός οργανισμού, οι προσκεκλημένοι πρέπει να αποδεχτούν την πρόσκληση.',
    subtitle_oss:
      'Τα προσκεκλημένα μέλη λαμβάνουν πλήρη πρόσβαση διαχειριστή σε αυτή την εγκατάσταση GetCertus.',
    to: 'Προς',
    added_as: 'Προστίθενται με ρόλους',
    email_input_placeholder: 'johndoe@example.com',
  },
  invitation_statuses: {
    pending: 'Σε εκκρεμότητα',
    accepted: 'Αποδεκτή',
    expired: 'Ληγμένη',
    revoked: 'Ανακλήθηκε',
  },
  invitation_empty_placeholder: {
    title: 'Πρόσκληση μελών ομάδας',
    description:
      'Δεν έχουν προσκληθεί ακόμα μέλη στον tenant σας.\nΓια να σας βοηθήσουν με την ενσωμάτωση, σκεφτείτε να προσθέσετε περισσότερα μέλη ή διαχειριστές.',
  },
  menu_options: {
    edit: 'Επεξεργασία ρόλου tenant',
    delete: 'Αφαίρεση χρήστη από τον tenant',
    resend_invite: 'Επαναποστολή πρόσκλησης',
    revoke: 'Ανάκληση πρόσκλησης',
    delete_invitation_record: 'Διαγραφή αυτής της πρόσκλησης',
  },
  edit_modal: {
    title: 'Αλλαγή ρόλων του/της {{name}}',
  },
  delete_user_confirm: 'Θέλετε σίγουρα να αφαιρέσετε αυτόν τον χρήστη από τον tenant;',
  assign_admin_confirm:
    'Θέλετε σίγουρα να κάνετε διαχειριστές τους επιλεγμένους χρήστες; Η πρόσβαση διαχειριστή τούς δίνει τα παρακάτω δικαιώματα.<ul><li>Αλλαγή του προγράμματος χρέωσης του tenant</li><li>Προσθήκη ή αφαίρεση συνεργατών</li><li>Διαγραφή του tenant</li></ul>',
  revoke_invitation_confirm: 'Θέλετε σίγουρα να ανακαλέσετε αυτή την πρόσκληση;',
  delete_invitation_confirm: 'Θέλετε σίγουρα να διαγράψετε αυτή την πρόσκληση;',
  messages: {
    invitation_sent: 'Η πρόσκληση στάλθηκε.',
    invitation_revoked: 'Η πρόσκληση ανακλήθηκε.',
    invitation_resend: 'Η πρόσκληση στάλθηκε ξανά.',
    invitation_deleted: 'Η πρόσκληση διαγράφηκε.',
  },
  errors: {
    email_required: 'Το email του προσκεκλημένου είναι υποχρεωτικό.',
    email_exists: 'Η διεύθυνση email υπάρχει ήδη.',
    member_exists: 'Ο χρήστης είναι ήδη μέλος του οργανισμού.',
    pending_invitation_exists:
      'Υπάρχει ήδη εκκρεμής πρόσκληση. Διαγράψτε το σχετικό email ή ανακαλέστε την πρόσκληση.',
    invalid_email: 'Η διεύθυνση email δεν είναι έγκυρη. Βεβαιωθείτε ότι έχει τη σωστή μορφή.',
    max_member_limit: 'Έχετε φτάσει τον μέγιστο αριθμό μελών ({{limit}}) για αυτόν τον tenant.',
  },
};

export default Object.freeze(tenant_members);
