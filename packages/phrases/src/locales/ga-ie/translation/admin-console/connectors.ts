/* GetCertus addition (MPL-2.0, see GETCERTUS.md): admin console phrases. */
const connectors = {
  page_title: 'Nascóirí',
  title: 'Nascóirí',
  subtitle:
    'Socraigh nascóirí le haghaidh síniú isteach gan phasfhocal agus trí na meáin shóisialta',
  create: 'Cuir nascóir sóisialta leis',
  config_sie_notice:
    'Tá nascóirí socraithe agat. Cinntigh go gcumraíonn tú iad in <a>{{link}}</a> freisin.',
  config_sie_link_text: 'eispéireas síniú isteach',
  tab_email_sms: 'Nascóirí ríomhphoist agus SMS',
  tab_social: 'Nascóirí sóisialta',
  connector_name: 'Ainm an nascóra',
  demo_tip:
    'Tá an nascóir taispeántais seo teoranta do 100 teachtaireacht ar a mhéad agus ní mholtar é le haghaidh timpeallacht táirgeachta.',
  social_demo_tip:
    'Tá an nascóir taispeántais ceaptha le haghaidh taispeántas amháin agus ní mholtar é le haghaidh timpeallacht táirgeachta.',
  connector_type: 'Cineál',
  placeholder_title: 'Nascóir sóisialta',
  placeholder_description:
    'Cuireann GetCertus go leor nascóirí síniú isteach sóisialta coitianta ar fáil, agus is féidir leat do chuid féin a chruthú le prótacail chaighdeánacha.',
  save_and_done: 'Sábháil agus críochnaigh',
  type: {
    email: 'Nascóir ríomhphoist',
    sms: 'Nascóir SMS',
    social: 'Nascóir sóisialta',
  },
  setup_title: {
    email: 'Socraigh nascóir ríomhphoist',
    sms: 'Socraigh nascóir SMS',
    social: 'Cuir nascóir sóisialta leis',
  },
  guide: {
    subtitle: 'Treoir céim ar chéim chun do nascóir a chumrú',
    general_setting: 'Socruithe ginearálta',
    parameter_configuration: 'Cumraíocht paraiméadar',
    test_connection: 'Tástáil an nasc',
    name: 'Ainm don chnaipe síniú isteach sóisialta',
    name_placeholder: 'Cuir isteach ainm don chnaipe síniú isteach sóisialta',
    name_tip:
      'Taispeánfar cnaipe an nascóra mar "Lean ar aghaidh le {{name}}". Bí cúramach nach mbeidh an t-ainm rófhada.',
    connector_logo: 'Lógó an nascóra',
    connector_logo_tip: 'Taispeánfar an lógó ar chnaipe síniú isteach an nascóra.',
    target: 'Ainm an tsoláthraí aitheantais',
    target_placeholder: 'Cuir isteach ainm sholáthraí aitheantais an nascóra',
    target_tip:
      "Is féidir le luach “Ainm IdP” a bheith ina theaghrán aitheantóra uathúil a dhéanann idirdhealú idir d'aitheantais shóisialta.",
    target_tip_standard:
      "Is féidir le luach “Ainm IdP” a bheith ina theaghrán aitheantóra uathúil a dhéanann idirdhealú idir d'aitheantais shóisialta. Ní féidir an socrú seo a athrú tar éis an nascóir a chruthú.",
    target_tooltip:
      'Tagraíonn "Ainm IdP" i nascóirí sóisialta GetCertus don "fhoinse" atá ag d\'aitheantais shóisialta. Chun coimhlintí a sheachaint, ní ghlacann GetCertus leis an "Ainm IdP" céanna d\'ardán ar leith. Bí an-chúramach sula gcuireann tú nascóir leis, mar NÍ FÉIDIR an luach a athrú tar éis é a chruthú. <a>Tuilleadh eolais</a>',
    target_conflict:
      "Meaitseálann an tAinm IdP a cuireadh isteach leis an nascóir <span>name</span> atá ann cheana. D'fhéadfadh an t-ainm IdP céanna iompar síniú isteach gan choinne a chruthú, ina bhfaigheann úsáideoirí rochtain ar an gcuntas céanna trí dhá nascóir éagsúla.",
    target_conflict_line2:
      'Más mian leat an nascóir reatha a athsholáthar leis an soláthraí aitheantais céanna agus ligean d\'úsáideoirí roimhe seo síniú isteach gan clárú arís, scrios an nascóir <span>name</span> agus cruthaigh ceann nua leis an "Ainm IdP" céanna.',
    target_conflict_line3:
      'Más mian leat nascadh le soláthraí aitheantais eile, athraigh an "Ainm IdP" agus lean ar aghaidh.',
    config: 'Cuir isteach do JSON cumraíochta',
    sync_profile: 'Sioncronaigh faisnéis phróifíle',
    sync_profile_only_at_sign_up: 'Sioncronaigh ag clárú amháin',
    sync_profile_each_sign_in: 'Sioncronaigh i gcónaí ag gach síniú isteach',
    sync_profile_tip:
      'Sioncronaigh an phróifíl bhunúsach ón soláthraí sóisialta, mar ainmneacha agus abhatáir na n-úsáideoirí.',
    enable_token_storage: {
      title: 'Stóráil comharthaí le haghaidh rochtain API leanúnach',
      description:
        'Stóráil comharthaí rochtana agus athnuachana sa Secret Vault. Ceadaíonn sé glaonna API uathoibrithe gan toiliú úsáideora arís agus arís eile. Sampla: lig do do ghníomhaire AI imeachtaí a chur le Google Calendar le húdarú leanúnach. <a>Foghlaim conas APIanna tríú páirtí a ghlaoch</a>',
    },
    callback_uri: 'URI atreoraithe (URI aisghlaoigh)',
    callback_uri_description:
      'Is iad URIanna atreoraithe na háiteanna a gcuirtear úsáideoirí chucu tar éis údarú sóisialta. Cuir na URIanna uile a thaispeántar le cumraíocht do IdP.',
    callback_uri_custom_domain_description:
      'Má úsáideann tú roinnt <a>fearann saincheaptha</a> in GetCertus, cuir na URIanna aisghlaoigh comhfhreagracha uile le do IdP ionas go n-oibreoidh síniú isteach sóisialta ar gach fearann.\n\nTá fearann réamhshocraithe GetCertus (*.logto.app) bailí i gcónaí — ná cuir san áireamh é ach más mian leat tacú le síniú isteach tríd an bhfearann sin freisin.',
    acs_url: 'URL na seirbhíse Assertion Consumer',
  },
  platform: {
    universal: 'Uilíoch',
    web: 'Gréasán',
    native: 'Dúchasach',
  },
  add_multi_platform: ' tacaíonn sé le hardáin iolracha, roghnaigh ardán chun leanúint ar aghaidh',
  drawer_title: 'Treoir an nascóra',
  drawer_subtitle: 'Lean na treoracha chun do nascóir a chomhtháthú',
  unknown: 'Nascóir anaithnid',
  standard_connectors: 'Nascóirí caighdeánacha',
  create_form: {
    third_party_connectors:
      'Comhtháthaigh soláthraithe tríú páirtí le haghaidh síniú isteach sóisialta tapa, nascadh cuntas sóisialta agus rochtain API. <a>Tuilleadh eolais</a>',
    email_connector_upsell: {
      title: 'Seirbhís ríomhphoist ionsuite GetCertus',
      description:
        'Seachadadh ríomhphoist gan chumraíocht. Seol cóid fíoraithe agus naisc draíochta láithreach.',
    },
    standard_connectors: 'Nó saincheap do nascóir sóisialta le prótacal caighdeánach.',
  },
};

export default Object.freeze(connectors);
