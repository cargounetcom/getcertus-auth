/* GetCertus addition (MPL-2.0, see GETCERTUS.md): admin console phrases. */
const guide = {
  start_building: 'Ξεκινήστε την κατασκευή',
  get_started: 'Ξεκινήστε',
  categories: {
    featured: 'Δημοφιλή και για εσάς',
    Traditional: 'Παραδοσιακή web εφαρμογή',
    SPA: 'Εφαρμογή μίας σελίδας',
    Native: 'Εγγενής',
    MachineToMachine: 'Μηχανή προς μηχανή',
    Protected: 'Ενσωμάτωση χωρίς SDK',
    ThirdParty: 'Εφαρμογή τρίτου',
    SAML: 'Εφαρμογή SAML',
  },
  filter: {
    title: 'Φιλτράρισμα framework',
    placeholder: 'Αναζήτηση framework',
  },
  checkout_tutorial: 'Δείτε τον οδηγό για {{name}}',
  do_not_need_tutorial: 'Αν δεν χρειάζεστε οδηγό, μπορείτε να συνεχίσετε χωρίς οδηγό framework',
  finish_and_done: 'Ολοκλήρωση',
  cannot_find_guide: 'Δεν βρίσκετε τον οδηγό σας;',
  describe_guide_looking_for: 'Περιγράψτε τον οδηγό που αναζητάτε',
  request_guide_successfully: 'Το αίτημά σας υποβλήθηκε. Ευχαριστούμε!',
  app: {
    select_framework_or_tutorial: 'Επιλέξτε framework ή οδηγό',
    guide_modal_title: 'Ξεκινήστε με SDK και οδηγούς',
    modal_subtitle:
      'Επιταχύνετε την ανάπτυξη της εφαρμογής σας με τα έτοιμα SDK και τους οδηγούς μας.',
    select_a_framework: 'Επιλέξτε framework',
    continue_without_framework: 'Δημιουργία εφαρμογής χωρίς framework',
    describe_guide_looking_for_placeholder:
      'Π.χ. Θέλω να ενσωματώσω το GetCertus στην εφαρμογή μου σε Angular.',
  },
  api: {
    modal_title: 'Ξεκινήστε με οδηγούς',
    modal_subtitle: 'Επιταχύνετε την ανάπτυξη της εφαρμογής σας με τους έτοιμους οδηγούς μας.',
    select_a_tutorial: 'Επιλέξτε οδηγό',
    continue_without_tutorial: 'Συνέχεια χωρίς οδηγό',
    describe_guide_looking_for_placeholder: 'Π.χ. Θέλω να προστατεύσω το API μου με Deno.',
  },
};

export default Object.freeze(guide);
