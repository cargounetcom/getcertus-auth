/* GetCertus addition (MPL-2.0, see GETCERTUS.md): admin console phrases. */
const guide = {
  start_building: 'Aloita rakentaminen',
  get_started: 'Aloita',
  categories: {
    featured: 'Suosittuja ja sinulle',
    Traditional: 'Perinteinen verkkosovellus',
    SPA: 'Yhden sivun sovellus',
    Native: 'Natiivi',
    MachineToMachine: 'Koneelta koneelle',
    Protected: 'Integraatio ilman SDK:ta',
    ThirdParty: 'Kolmannen osapuolen sovellus',
    SAML: 'SAML-sovellus',
  },
  filter: {
    title: 'Suodata kehyksiä',
    placeholder: 'Hae kehystä',
  },
  checkout_tutorial: 'Katso {{name}}-opas',
  do_not_need_tutorial: 'Jos et tarvitse opasta, voit jatkaa ilman kehysopasta',
  finish_and_done: 'Valmis',
  cannot_find_guide: 'Etkö löydä opastasi?',
  describe_guide_looking_for: 'Kuvaile etsimääsi opasta',
  request_guide_successfully: 'Pyyntösi on lähetetty. Kiitos!',
  app: {
    select_framework_or_tutorial: 'Valitse kehys tai opas',
    guide_modal_title: 'Aloita SDK:n ja oppaiden avulla',
    modal_subtitle: 'Vauhdita sovelluskehitystäsi valmiilla SDK:lla ja oppailla.',
    select_a_framework: 'Valitse kehys',
    continue_without_framework: 'Luo sovellus ilman kehystä',
    describe_guide_looking_for_placeholder:
      'Esim. Haluan integroida GetCertusin Angular-sovellukseeni.',
  },
  api: {
    modal_title: 'Aloita oppaiden avulla',
    modal_subtitle: 'Vauhdita sovelluskehitystäsi valmiilla oppailla.',
    select_a_tutorial: 'Valitse opas',
    continue_without_tutorial: 'Jatka ilman opasta',
    describe_guide_looking_for_placeholder: 'Esim. Haluan suojata API:ni Denolla.',
  },
};

export default Object.freeze(guide);
