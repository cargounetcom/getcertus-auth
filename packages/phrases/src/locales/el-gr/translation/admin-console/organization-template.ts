/* GetCertus addition (MPL-2.0, see GETCERTUS.md): admin console phrases. */
const organization_template = {
  title: 'Πρότυπο οργανισμού',
  subtitle:
    'Σε εφαρμογές SaaS multi-tenant, ένα πρότυπο οργανισμού ορίζει κοινές πολιτικές ελέγχου πρόσβασης (δικαιώματα και ρόλους) για πολλούς οργανισμούς.',
  roles: {
    tab_name: 'Ρόλοι οργανισμού',
    search_placeholder: 'Αναζήτηση με όνομα ρόλου',
    create_title: 'Δημιουργία ρόλου οργανισμού',
    role_column: 'Ρόλος οργανισμού',
    permissions_column: 'Δικαιώματα',
    placeholder_title: 'Ρόλος οργανισμού',
    placeholder_description:
      'Ο ρόλος οργανισμού είναι μια ομάδα δικαιωμάτων που μπορεί να ανατεθεί σε χρήστες. Τα δικαιώματα πρέπει να προέρχονται από τα προκαθορισμένα δικαιώματα οργανισμού.',
    create_modal: {
      title: 'Δημιουργία ρόλου οργανισμού',
      create: 'Δημιουργία ρόλου',
      name: 'Όνομα ρόλου',
      description: 'Περιγραφή',
      type: 'Τύπος ρόλου',
      created: 'Ο ρόλος οργανισμού {{name}} δημιουργήθηκε.',
    },
  },
  permissions: {
    tab_name: 'Δικαιώματα οργανισμού',
    search_placeholder: 'Αναζήτηση με όνομα δικαιώματος',
    create_org_permission: 'Δημιουργία δικαιώματος οργανισμού',
    permission_column: 'Δικαίωμα οργανισμού',
    description_column: 'Περιγραφή',
    placeholder_title: 'Δικαίωμα οργανισμού',
    placeholder_description:
      'Το δικαίωμα οργανισμού είναι η εξουσιοδότηση πρόσβασης σε έναν πόρο στο πλαίσιο ενός οργανισμού.',
    delete_confirm:
      'Αν διαγραφεί αυτό το δικαίωμα, όλοι οι ρόλοι οργανισμού που το περιλαμβάνουν θα το χάσουν και οι χρήστες που το είχαν θα χάσουν την πρόσβαση που παρείχε.',
    create_title: 'Δημιουργία δικαιώματος οργανισμού',
    edit_title: 'Επεξεργασία δικαιώματος οργανισμού',
    permission_field_name: 'Όνομα δικαιώματος',
    description_field_name: 'Περιγραφή',
    description_field_placeholder: 'Ανάγνωση ιστορικού ραντεβού',
    create_permission: 'Δημιουργία δικαιώματος',
    created: 'Το δικαίωμα οργανισμού {{name}} δημιουργήθηκε.',
  },
};

export default Object.freeze(organization_template);
