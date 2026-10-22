/* GetCertus addition (MPL-2.0, see GETCERTUS.md): admin console phrases. */
const webhooks = {
  page_title: 'Webhooks',
  title: 'Webhooks',
  subtitle:
    'Δημιουργήστε webhooks για να λαμβάνετε εύκολα ενημερώσεις σε πραγματικό χρόνο για συγκεκριμένα συμβάντα.',
  create: 'Δημιουργία webhook',
  schemas: {
    interaction: 'Αλληλεπίδραση χρήστη',
    user: 'Χρήστης',
    trusted_device: 'Αξιόπιστη συσκευή',
    organization: 'Οργανισμός',
    role: 'Ρόλος',
    scope: 'Δικαίωμα',
    organization_role: 'Ρόλος οργανισμού',
    organization_scope: 'Δικαίωμα οργανισμού',
    security: 'Ασφάλεια',
  },
  table: {
    name: 'Όνομα',
    events: 'Συμβάντα',
    success_rate: 'Ποσοστό επιτυχίας (24 ώρες)',
    requests: 'Αιτήματα (24 ώρες)',
  },
  placeholder: {
    title: 'Webhook',
    description:
      'Δημιουργήστε webhook για να λαμβάνετε ενημερώσεις σε πραγματικό χρόνο μέσω αιτημάτων POST στο URL του endpoint σας. Μείνετε ενημερωμένοι και αντιδράστε αμέσως σε συμβάντα όπως "Δημιουργία λογαριασμού", "Σύνδεση" και "Επαναφορά κωδικού".',
    create_webhook: 'Δημιουργία webhook',
  },
  create_form: {
    title: 'Δημιουργία webhook',
    subtitle:
      'Προσθέστε το webhook για να στέλνει αίτημα POST με λεπτομέρειες για συμβάντα χρηστών στο URL του endpoint.',
    events: 'Συμβάντα',
    events_description: 'Επιλέξτε τα συμβάντα για τα οποία το GetCertus θα στέλνει το αίτημα POST.',
    name: 'Όνομα',
    name_placeholder: 'Εισαγάγετε το όνομα του webhook',
    endpoint_url: 'URL endpoint',
    endpoint_url_placeholder: 'https://your.webhook.endpoint.url',
    endpoint_url_tip:
      'Εισαγάγετε το URL του endpoint στο οποίο θα στέλνεται το payload του webhook όταν συμβαίνει το συμβάν.',
    create_webhook: 'Δημιουργία webhook',
    missing_event_error: 'Πρέπει να επιλέξετε τουλάχιστον ένα συμβάν.',
  },
  webhook_created: 'Το webhook {{name}} δημιουργήθηκε.',
};

export default Object.freeze(webhooks);
