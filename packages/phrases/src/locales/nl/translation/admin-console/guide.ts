/* GetCertus addition (MPL-2.0, see GETCERTUS.md): admin console phrases. */
const guide = {
  start_building: 'Begin met bouwen',
  get_started: 'Aan de slag',
  categories: {
    featured: 'Populair en voor jou',
    Traditional: 'Traditionele webapp',
    SPA: 'Single-page-app',
    Native: 'Native',
    MachineToMachine: 'Machine-to-machine',
    Protected: 'Integratie zonder SDK',
    ThirdParty: 'App van derden',
    SAML: 'SAML-app',
  },
  filter: {
    title: 'Framework filteren',
    placeholder: 'Zoeken naar framework',
  },
  checkout_tutorial: 'Bekijk de tutorial voor {{name}}',
  do_not_need_tutorial:
    'Heb je geen tutorial nodig, dan kun je doorgaan zonder frameworkhandleiding',
  finish_and_done: 'Afronden',
  cannot_find_guide: 'Kun je je handleiding niet vinden?',
  describe_guide_looking_for: 'Beschrijf de handleiding die je zoekt',
  request_guide_successfully: 'Je verzoek is verstuurd. Bedankt!',
  app: {
    select_framework_or_tutorial: 'Kies een framework of tutorial',
    guide_modal_title: 'Begin met SDK en handleidingen',
    modal_subtitle:
      'Geef je appontwikkeling een vliegende start met onze kant-en-klare SDK en tutorials.',
    select_a_framework: 'Kies een framework',
    continue_without_framework: 'App maken zonder framework',
    describe_guide_looking_for_placeholder:
      'Bijv. Ik wil GetCertus integreren in mijn Angular-app.',
  },
  api: {
    modal_title: 'Begin met tutorials',
    modal_subtitle: 'Geef je appontwikkeling een vliegende start met onze kant-en-klare tutorials.',
    select_a_tutorial: 'Kies een tutorial',
    continue_without_tutorial: 'Doorgaan zonder tutorial',
    describe_guide_looking_for_placeholder: 'Bijv. Ik wil mijn API beveiligen met Deno.',
  },
};

export default Object.freeze(guide);
