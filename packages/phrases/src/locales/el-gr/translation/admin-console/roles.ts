/* GetCertus addition (MPL-2.0, see GETCERTUS.md): admin console phrases. */
const roles = {
  page_title: 'Ρόλοι',
  title: 'Ρόλοι',
  subtitle:
    'Οι ρόλοι περιλαμβάνουν δικαιώματα που καθορίζουν τι μπορεί να κάνει ένας χρήστης. Το RBAC χρησιμοποιεί ρόλους για να δίνει στους χρήστες πρόσβαση σε πόρους για συγκεκριμένες ενέργειες.',
  create: 'Δημιουργία ρόλου',
  role_name: 'Όνομα ρόλου',
  role_type: 'Τύπος ρόλου',
  type_user: 'Χρήστης',
  type_machine_to_machine: 'Μηχανή προς μηχανή',
  role_description: 'Περιγραφή',
  role_name_placeholder: 'Εισαγάγετε το όνομα του ρόλου',
  role_description_placeholder: 'Εισαγάγετε την περιγραφή του ρόλου',
  col_roles: 'Ρόλοι',
  col_type: 'Τύπος',
  col_description: 'Περιγραφή',
  col_assigned_entities: 'Ανατεθειμένοι',
  user_counts: '{{count}} χρήστες',
  application_counts: '{{count}} εφαρμογές',
  user_count: '{{count}} χρήστης',
  application_count: '{{count}} εφαρμογή',
  assign_permissions: 'Ανάθεση δικαιωμάτων',
  create_role_title: 'Δημιουργία ρόλου',
  create_role_description:
    'Χρησιμοποιήστε ρόλους για να οργανώσετε δικαιώματα και να τα αναθέσετε σε χρήστες.',
  create_role_button: 'Δημιουργία ρόλου',
  role_created: 'Ο ρόλος {{name}} δημιουργήθηκε.',
  search: 'Αναζήτηση με όνομα ρόλου, περιγραφή ή ID',
  placeholder_title: 'Ρόλοι',
  placeholder_description:
    'Οι ρόλοι είναι ομάδες δικαιωμάτων που μπορούν να ανατεθούν σε χρήστες. Προσθέστε πρώτα δικαιώματα πριν δημιουργήσετε ρόλους.',
  assign_roles: 'Ανάθεση ρόλων',
  management_api_access_notification:
    'Για πρόσβαση στο GetCertus Management API, επιλέξτε ρόλους με δικαιώματα Management API <flag/>.',
  with_management_api_access_tip:
    'Αυτός ο ρόλος μηχανής προς μηχανή περιλαμβάνει δικαιώματα του GetCertus Management API',
  role_creation_hint: 'Δεν βρίσκετε τον σωστό ρόλο; <a>Δημιουργήστε ρόλο</a>',
};

export default Object.freeze(roles);
