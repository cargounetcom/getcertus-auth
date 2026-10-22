/* GetCertus addition (MPL-2.0, see GETCERTUS.md): admin console phrases. */
const guide = {
  start_building: 'Begynd at bygge',
  get_started: 'Kom i gang',
  categories: {
    featured: 'Populært og til dig',
    Traditional: 'Traditionel webapp',
    SPA: 'Single-page-app',
    Native: 'Native',
    MachineToMachine: 'Maskine-til-maskine',
    Protected: 'Integration uden SDK',
    ThirdParty: 'Tredjepartsapp',
    SAML: 'SAML-app',
  },
  filter: {
    title: 'Filtrér framework',
    placeholder: 'Søg efter framework',
  },
  checkout_tutorial: 'Se vejledningen til {{name}}',
  do_not_need_tutorial:
    'Hvis du ikke har brug for en vejledning, kan du fortsætte uden en frameworkguide',
  finish_and_done: 'Afslut',
  cannot_find_guide: 'Kan du ikke finde din guide?',
  describe_guide_looking_for: 'Beskriv den guide, du leder efter',
  request_guide_successfully: 'Din anmodning er sendt. Tak!',
  app: {
    select_framework_or_tutorial: 'Vælg et framework eller en vejledning',
    guide_modal_title: 'Kom i gang med SDK og guides',
    modal_subtitle: 'Sæt skub i din appudvikling med vores færdige SDK og vejledninger.',
    select_a_framework: 'Vælg et framework',
    continue_without_framework: 'Opret app uden framework',
    describe_guide_looking_for_placeholder: 'F.eks. Jeg vil integrere GetCertus i min Angular-app.',
  },
  api: {
    modal_title: 'Kom i gang med vejledninger',
    modal_subtitle: 'Sæt skub i din appudvikling med vores færdige vejledninger.',
    select_a_tutorial: 'Vælg en vejledning',
    continue_without_tutorial: 'Fortsæt uden vejledning',
    describe_guide_looking_for_placeholder: 'F.eks. Jeg vil beskytte mit API med Deno.',
  },
};

export default Object.freeze(guide);
