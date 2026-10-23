/* GetCertus addition (MPL-2.0, see GETCERTUS.md): admin console phrases. */
const jwt_claims = {
  title: 'JWT saincheaptha',
  description:
    "Saincheap an comhartha rochtana nó an comhartha ID chun faisnéis bhreise a sholáthar d'fheidhmchlár.",
  access_token: {
    card_title: 'Comhartha rochtana',
    card_description:
      'Is é an comhartha rochtana an dintiúr a úsáideann APIanna chun iarratais a údarú, agus níl ann ach na héilimh is gá do chinntí rochtana.',
  },
  user_jwt: {
    card_field: 'Comhartha rochtana úsáideora',
    card_description:
      'Cuir sonraí a bhaineann go sonrach leis an úsáideoir leis nuair a eisítear an comhartha rochtana.',
    for: 'don úsáideoir',
  },
  machine_to_machine_jwt: {
    card_field: 'Comhartha rochtana meaisín go meaisín',
    card_description: 'Cuir sonraí breise leis nuair a eisítear comharthaí meaisín go meaisín.',
    for: 'do M2M',
  },
  id_token: {
    card_title: 'Comhartha ID',
    card_description:
      'Is dearbhú aitheantais é an comhartha ID a fhaightear tar éis síniú isteach, ina bhfuil éilimh aitheantais an úsáideora don chliant le húsáid le haghaidh taispeána nó chun seisiún a chruthú.',
    card_field: 'Comhartha ID úsáideora',
    card_field_description:
      "Bíonn na héilimh 'sub', 'email', 'phone', 'profile' agus 'address' ar fáil i gcónaí. Ní mór éilimh eile a chumasú anseo ar dtús. I ngach cás, ní mór d'aip na scóip chomhfhreagracha a iarraidh le linn an chomhtháthaithe chun iad a fháil.",
  },
  code_editor_title: 'Saincheap éilimh an {{token}}',
  custom_jwt_create_button: 'Cuir éilimh shaincheaptha leis',
  custom_jwt_item: 'Éilimh shaincheaptha {{for}}',
  delete_modal_title: 'Scrios na héilimh shaincheaptha',
  delete_modal_content: 'An bhfuil tú cinnte gur mian leat na héilimh shaincheaptha a scriosadh?',
  clear: 'Tosaigh arís',
  cleared: 'Glanta',
  restore: 'Athchóirigh na réamhshocruithe',
  restored: 'Athchóirithe',
  data_source_tab: 'Foinse sonraí',
  error_handling_tab: 'Láimhseáil earráidí',
  test_tab: 'Comhthéacs tástála',
  jwt_claims_description:
    'Cuirtear éilimh réamhshocraithe san  go huathoibríoch agus ní féidir iad a shárú.',
  user_data: {
    title: 'Comhthéacs úsáideora',
    subtitle:
      'Úsáid an paraiméadar ionchuir `context.user` chun faisnéis thábhachtach úsáideora a sholáthar.',
  },
  grant_data: {
    title: 'Comhthéacs deontais',
    subtitle:
      'Úsáid an paraiméadar ionchuir `context.grant` chun faisnéis thábhachtach deontais a sholáthar; ar fáil do mhalartú comharthaí amháin.',
  },
  interaction_data: {
    title: 'Comhthéacs idirghníomhaíochta úsáideora',
    subtitle:
      'Úsáid an paraiméadar `context.interaction` chun rochtain a fháil ar shonraí idirghníomhaíochta an úsáideora don seisiún fíordheimhnithe reatha.',
  },
  application_data: {
    title: 'Comhthéacs feidhmchláir',
    subtitle:
      'Úsáid an paraiméadar ionchuir `context.application` chun faisnéis an fheidhmchláir a bhaineann leis an gcomhartha a sholáthar.',
  },
  organization_data: {
    title: 'Comhthéacs eagraíochta',
    subtitle:
      'Úsáid an paraiméadar ionchuir `context.organization` chun faisnéis na heagraíochta sprice a sholáthar; ar fáil do chomharthaí eagraíochta amháin.',
  },
  token_data: {
    title: 'Payload an chomhartha',
    subtitle:
      'Úsáid an paraiméadar ionchuir `token` le haghaidh payload an chomhartha rochtana reatha. ',
  },
  api_context: {
    title: 'Comhthéacs API: rialú rochtana',
    subtitle: 'Úsáid an modh `api.denyAccess` chun an t-iarratas ar chomhartha a dhiúltú.',
  },
  error_handling: {
    title: 'Láimhseáil earráidí',
    subtitle: 'Rialaigh ar cheart eisiúint comharthaí a bhlocáil nuair a theipeann ar an script.',
    input_field_title: 'Iompar eisiúna comharthaí ar earráid scripte',
    block_issuance_switch: 'Blocáil eisiúint comharthaí nuair a bhíonn earráid sa script',
    default_hint_create:
      'De réir réamhshocraithe, blocálann scripteanna nua éileamh saincheaptha eisiúint comharthaí nuair a theipeann ar an script. Má sholáthraíonn an API luach cheana, úsáidtear an luach sábháilte ina ionad.',
    default_hint_edit:
      'Coinníonn scripteanna éileamh saincheaptha atá ann cheana gan an socrú seo an seanréamhshocrú (múchta) go dtí go sábhálann tú luach go sainráite.',
    warning:
      'Nuair atá sé cumasaithe, diúltaíonn earráidí ama rite sa script don iarratas ar chomhartha le `invalid_request` (400) agus `error_description` logánaithe. Filleann glaonna ar `api.denyAccess` `access_denied` fós.',
  },
  fetch_external_data: {
    title: 'Faigh sonraí seachtracha',
    subtitle: "Ionchorpraigh sonraí ó d'APIanna seachtracha go díreach in éilimh.",
    description:
      "Úsáid an fheidhm `fetch` chun glaoch ar d'APIanna seachtracha agus na sonraí a áireamh i d'éilimh shaincheaptha. Sampla: ",
  },
  environment_variables: {
    title: 'Socraigh athróga timpeallachta',
    subtitle: 'Úsáid athróga timpeallachta chun faisnéis íogair a stóráil.',
    input_field_title: 'Cuir athróga timpeallachta leis',
    sample_code:
      'Rochtain ar athróga timpeallachta i do láimhseálaí éileamh saincheaptha comharthaí. Sampla: ',
  },
  jwt_claims_hint:
    'Coinnigh éilimh shaincheaptha faoi 50KB. Cuirtear éilimh réamhshocraithe sa chomhartha go huathoibríoch agus ní féidir iad a shárú.',
  tester: {
    subtitle: 'Coigeartaigh an comhartha agus na sonraí úsáideora bréige le haghaidh tástála.',
    run_button: 'Rith tástáil',
    result_title: 'Toradh na tástála',
  },
  sandbox_warning: {
    title: 'Ritheann scripteanna le pribhléidí freastalaí',
    description:
      'Ar GetCertus féinóstáilte, ritheann an script seo sa timpeallacht chéanna le GetCertus féin: is féidir léi athróga timpeallachta an fhreastalaí a léamh agus seirbhísí ar do líonra inmheánach a shroicheadh. Ní ritheann sí i mbosca gainimh. Ná tabhair rochtain ar an leathanach seo ach do dhaoine a mbeadh muinín agat astu le rochtain ar an bhfreastalaí.',
  },
  form_error: {
    invalid_json: 'Formáid JSON neamhbhailí',
  },
};

export default Object.freeze(jwt_claims);
