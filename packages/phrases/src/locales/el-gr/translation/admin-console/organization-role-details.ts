/* GetCertus addition (MPL-2.0, see GETCERTUS.md): admin console phrases. */
const organization_role_details = {
  page_title: 'Λεπτομέρειες ρόλου οργανισμού',
  back_to_org_roles: 'Επιστροφή στους ρόλους οργανισμού',
  delete_confirm:
    'Έτσι θα αφαιρεθούν τα δικαιώματα του ρόλου από τους επηρεαζόμενους χρήστες και θα διαγραφούν οι σχέσεις μεταξύ ρόλων οργανισμού, μελών του οργανισμού και δικαιωμάτων οργανισμού.',
  deleted: 'Ο ρόλος οργανισμού {{name}} διαγράφηκε.',
  permissions: {
    tab: 'Δικαιώματα',
    name_column: 'Δικαίωμα',
    description_column: 'Περιγραφή',
    type_column: 'Τύπος δικαιώματος',
    type: {
      api: 'Δικαίωμα API',
      org: 'Δικαίωμα οργανισμού',
    },
    assign_permissions: 'Ανάθεση δικαιωμάτων',
    remove_permission: 'Αφαίρεση δικαιώματος',
    remove_confirmation:
      'Αν αφαιρεθεί αυτό το δικαίωμα, ο χρήστης με αυτόν τον ρόλο οργανισμού θα χάσει την πρόσβαση που παρείχε.',
    removed: 'Το δικαίωμα {{name}} αφαιρέθηκε από αυτόν τον ρόλο οργανισμού',
    assign_description:
      'Αναθέστε δικαιώματα στους ρόλους αυτού του οργανισμού. Μπορούν να είναι τόσο δικαιώματα οργανισμού όσο και δικαιώματα API.',
    organization_permissions: 'Δικαιώματα οργανισμού',
    api_permissions: 'Δικαιώματα API',
    assign_organization_permissions: 'Ανάθεση δικαιωμάτων οργανισμού',
    assign_api_permissions: 'Ανάθεση δικαιωμάτων API',
  },
  general: {
    tab: 'Γενικά',
    settings: 'Ρυθμίσεις',
    description:
      'Ο ρόλος οργανισμού είναι μια ομάδα δικαιωμάτων που μπορεί να ανατεθεί σε χρήστες. Τα δικαιώματα μπορούν να προέρχονται από τα προκαθορισμένα δικαιώματα οργανισμού και τα δικαιώματα API.',
    name_field: 'Όνομα',
    description_field: 'Περιγραφή',
    description_field_placeholder: 'Χρήστες με δικαιώματα μόνο προβολής',
  },
};

export default Object.freeze(organization_role_details);
