/* GetCertus addition (MPL-2.0, see GETCERTUS.md): admin console phrases. */
const guide = {
  start_building: 'Börja bygga',
  get_started: 'Kom igång',
  categories: {
    featured: 'Populärt och för dig',
    Traditional: 'Traditionell webbapp',
    SPA: 'Ensidesapp',
    Native: 'Native',
    MachineToMachine: 'Maskin-till-maskin',
    Protected: 'Integration utan SDK',
    ThirdParty: 'Tredjepartsapp',
    SAML: 'SAML-app',
  },
  filter: {
    title: 'Filtrera ramverk',
    placeholder: 'Sök efter ramverk',
  },
  checkout_tutorial: 'Se guiden för {{name}}',
  do_not_need_tutorial: 'Om du inte behöver en guide kan du fortsätta utan ramverksguide',
  finish_and_done: 'Slutför',
  cannot_find_guide: 'Hittar du inte din guide?',
  describe_guide_looking_for: 'Beskriv guiden du letar efter',
  request_guide_successfully: 'Din förfrågan har skickats. Tack!',
  app: {
    select_framework_or_tutorial: 'Välj ett ramverk eller en guide',
    guide_modal_title: 'Börja med SDK och guider',
    modal_subtitle: 'Kickstarta din apputveckling med våra färdiga SDK:er och guider.',
    select_a_framework: 'Välj ett ramverk',
    continue_without_framework: 'Skapa app utan ramverk',
    describe_guide_looking_for_placeholder: 'T.ex. Jag vill integrera GetCertus i min Angular-app.',
  },
  api: {
    modal_title: 'Börja med guider',
    modal_subtitle: 'Kickstarta din apputveckling med våra färdiga guider.',
    select_a_tutorial: 'Välj en guide',
    continue_without_tutorial: 'Fortsätt utan guide',
    describe_guide_looking_for_placeholder: 'T.ex. Jag vill skydda mitt API med Deno.',
  },
};

export default Object.freeze(guide);
