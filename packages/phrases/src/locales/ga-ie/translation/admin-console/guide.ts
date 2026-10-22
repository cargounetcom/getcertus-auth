/* GetCertus addition (MPL-2.0, see GETCERTUS.md): admin console phrases. */
const guide = {
  start_building: 'Tosaigh ag tógáil',
  get_started: 'Tosaigh',
  categories: {
    featured: 'Coitianta agus duitse',
    Traditional: 'Aip ghréasáin thraidisiúnta',
    SPA: 'Aip leathanaigh aonair',
    Native: 'Dúchasach',
    MachineToMachine: 'Meaisín go meaisín',
    Protected: 'Comhtháthú gan SDK',
    ThirdParty: 'Aip tríú páirtí',
    SAML: 'Aip SAML',
  },
  filter: {
    title: 'Scag creatlach',
    placeholder: 'Cuardaigh creatlach',
  },
  checkout_tutorial: 'Féach ar an rang teagaisc {{name}}',
  do_not_need_tutorial:
    'Mura dteastaíonn rang teagaisc uait, is féidir leat leanúint ar aghaidh gan treoir chreatlaí',
  finish_and_done: 'Críochnaigh',
  cannot_find_guide: 'Ní féidir leat do threoir a aimsiú?',
  describe_guide_looking_for: 'Déan cur síos ar an treoir atá uait',
  request_guide_successfully: "Seoladh d'iarratas. Go raibh maith agat!",
  app: {
    select_framework_or_tutorial: 'Roghnaigh creatlach nó rang teagaisc',
    guide_modal_title: 'Tosaigh le SDK agus treoracha',
    modal_subtitle:
      "Cuir tús faoi luas le forbairt d'aip lenár SDK agus ranganna teagaisc réamhdhéanta.",
    select_a_framework: 'Roghnaigh creatlach',
    continue_without_framework: 'Cruthaigh aip gan chreatlach',
    describe_guide_looking_for_placeholder:
      "M.sh., ba mhaith liom GetCertus a chomhtháthú i m'aip Angular.",
  },
  api: {
    modal_title: 'Tosaigh le ranganna teagaisc',
    modal_subtitle: "Cuir tús faoi luas le forbairt d'aip lenár ranganna teagaisc réamhdhéanta.",
    select_a_tutorial: 'Roghnaigh rang teagaisc',
    continue_without_tutorial: 'Lean ar aghaidh gan rang teagaisc',
    describe_guide_looking_for_placeholder: "M.sh., ba mhaith liom m'API a chosaint le Deno.",
  },
};

export default Object.freeze(guide);
