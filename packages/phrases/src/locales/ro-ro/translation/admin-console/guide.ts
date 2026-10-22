/* GetCertus addition (MPL-2.0, see GETCERTUS.md): admin console phrases. */
const guide = {
  start_building: 'Începe să construiești',
  get_started: 'Începe',
  categories: {
    featured: 'Populare și pentru tine',
    Traditional: 'Aplicație web tradițională',
    SPA: 'Aplicație single-page',
    Native: 'Nativă',
    MachineToMachine: 'Mașină la mașină',
    Protected: 'Integrare fără SDK',
    ThirdParty: 'Aplicație terță',
    SAML: 'Aplicație SAML',
  },
  filter: {
    title: 'Filtrează frameworkul',
    placeholder: 'Caută un framework',
  },
  checkout_tutorial: 'Vezi tutorialul {{name}}',
  do_not_need_tutorial: 'Dacă nu ai nevoie de un tutorial, poți continua fără ghid de framework',
  finish_and_done: 'Finalizează',
  cannot_find_guide: 'Nu găsești ghidul?',
  describe_guide_looking_for: 'Descrie ghidul pe care îl cauți',
  request_guide_successfully: 'Solicitarea ta a fost trimisă. Mulțumim!',
  app: {
    select_framework_or_tutorial: 'Alege un framework sau un tutorial',
    guide_modal_title: 'Începe cu SDK și ghiduri',
    modal_subtitle:
      'Accelerează dezvoltarea aplicației cu SDK-ul și tutorialele noastre gata făcute.',
    select_a_framework: 'Alege un framework',
    continue_without_framework: 'Creează aplicația fără framework',
    describe_guide_looking_for_placeholder:
      'De ex., vreau să integrez GetCertus în aplicația mea Angular.',
  },
  api: {
    modal_title: 'Începe cu tutoriale',
    modal_subtitle: 'Accelerează dezvoltarea aplicației cu tutorialele noastre gata făcute.',
    select_a_tutorial: 'Alege un tutorial',
    continue_without_tutorial: 'Continuă fără tutorial',
    describe_guide_looking_for_placeholder: 'De ex., vreau să îmi protejez API-ul cu Deno.',
  },
};

export default Object.freeze(guide);
