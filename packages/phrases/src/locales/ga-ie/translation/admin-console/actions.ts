/* GetCertus addition (MPL-2.0, see GETCERTUS.md): admin console phrases. */
const actions = {
  page_title: 'Gníomhartha',
  title: 'Gníomhartha',
  subtitle:
    'Rith cód saincheaptha ag pointí ar leith sa sreabhadh fíordheimhnithe chun iompar GetCertus a leathnú.',
  status: {
    not_configured: 'Gan chumrú',
    configured: 'Cumraithe',
    enabled: 'Cumasaithe',
    disabled: 'Díchumasaithe',
  },
  types: {
    post_first_factor_verification: {
      name: 'Tar éis fíorú an chéad fhachtóra',
      description:
        'Rith loighic shaincheaptha tar éis don fhíorú pasfhocail áitiúil teip le linn síniú isteach.',
    },
    post_sign_in: {
      name: 'Tar éis síniú isteach',
      description: "Rith loighic shaincheaptha tar éis d'úsáideoir síniú isteach go rathúil.",
    },
  },
  data_source_tab: 'Foinse sonraí',
  test_tab: 'Comhthéacs tástála',
  settings_tab: 'Socruithe',
  event_data: {
    title: 'Payload na himeachta',
    subtitle:
      'Úsáid an paraiméadar ionchuir `event` le haghaidh sonraí na himeachta fíordheimhnithe.',
  },
  result_data: {
    title: 'Toradh an ghnímh',
    subtitle: 'Fill réad toraidh a thuigeann GetCertus don chineál gnímh seo.',
  },
  environment_variables: {
    title: 'Socraigh athróga timpeallachta',
    subtitle: 'Úsáid athróga timpeallachta chun faisnéis íogair a stóráil.',
    input_field_title: 'Cuir athróga timpeallachta leis',
    sample_code: 'Rochtain ar athróga timpeallachta i láimhseálaí do ghnímh. Sampla:',
  },
  fetch_external_data: {
    title: 'Faigh sonraí seachtracha',
    subtitle: 'Glaoigh ar APIanna seachtracha ó script do ghnímh.',
    description:
      "Úsáid an fheidhm `fetch` chun glaoch ar d'APIanna seachtracha agus na sonraí a áireamh i dtoradh an ghnímh. Sampla:",
  },
  settings: {
    title: 'Socruithe',
    subtitle:
      'Rialaigh an bhfuil an gníomh gníomhach agus conas a láimhseáiltear earráidí ama rite.',
    enabled: {
      title: 'Cumasaigh an gníomh',
      description: 'Rith an script seo nuair a spreagtar an imeacht fíordheimhnithe.',
    },
    on_execution_error: {
      title: 'Ar earráid scripte',
      description:
        'Roghnaigh conas ba cheart do GetCertus iompar nuair a theipeann ar an script le linn rite.',
      block: 'Blocáil an sreabhadh fíordheimhnithe',
      allow: 'Lig don sreabhadh fíordheimhnithe leanúint ar aghaidh',
      post_first_factor_description:
        'Nuair a theipeann ar an script seo, diúltaíonn GetCertus i gcónaí do dhintiúir neamhbhailí ionas nach féidir an fíorú pasfhocail a sheachaint.',
    },
  },
  test_context: {
    subtitle: 'Coigeartaigh an payload bréige imeachta a úsáidtear agus tástálacha á rith.',
    input_field_title: 'JSON samplach na himeachta',
  },
  script: {
    title: 'Script',
    restore: 'Athchóirigh na réamhshocruithe',
    restored: 'Athchóirithe',
  },
  tester: {
    run_button: 'Rith tástáil',
    result_title: 'Toradh na tástála',
  },
  form_error: {
    invalid_json: 'Formáid JSON neamhbhailí',
  },
  sandbox_and_security_warning: {
    title: 'Ritheann scripteanna le pribhléidí freastalaí',
    description:
      "Ar GetCertus féinóstáilte, ritheann an script seo sa timpeallacht chéanna le GetCertus féin: is féidir léi athróga timpeallachta an fhreastalaí a léamh agus seirbhísí ar do líonra inmheánach a shroicheadh. Ní ritheann sí i mbosca gainimh. Ná tabhair rochtain ar an leathanach seo ach do dhaoine a mbeadh muinín agat astu le rochtain ar an bhfreastalaí. Ní ritheann an gníomh seo ach tar éis don fhíorú pasfhocail áitiúil teip — ná fill `passwordVerified: true` ach tar éis duit an pasfhocal a cuireadh isteach a fhíorú go neamhspleách. Seachnaíonn úsáideoirí a sholáthraítear tríd an ngníomh seo seiceálacha a bhaineann le clárú amháin, lena n-áirítear an liosta bloc ríomhphoist, fearainn SSO amháin, mód clárúcháin díchumasaithe agus seiceálacha próifíle éigeantaí clárúcháin. Déantar athruithe próifíle agus pasfhocail d'úsáideoirí atá ann cheana sula gcríochnaítear MFA freisin.",
  },
  sandbox_warning: {
    title: 'Ritheann scripteanna le pribhléidí freastalaí',
    description:
      'Ar GetCertus féinóstáilte, ritheann an script seo sa timpeallacht chéanna le GetCertus féin: is féidir léi athróga timpeallachta an fhreastalaí a léamh agus seirbhísí ar do líonra inmheánach a shroicheadh. Ní ritheann sí i mbosca gainimh. Ná tabhair rochtain ar an leathanach seo ach do dhaoine a mbeadh muinín agat astu le rochtain ar an bhfreastalaí.',
  },
  security_warning: {
    title: 'Rabhadh slándála',
    description:
      "Ní ritheann an gníomh seo ach tar éis don fhíorú pasfhocail áitiúil teip. Ná fill `passwordVerified: true` ach tar éis duit an pasfhocal a cuireadh isteach a fhíorú go neamhspleách. Seachnaíonn úsáideoirí a sholáthraítear tríd an ngníomh seo seiceálacha a bhaineann le clárú amháin, lena n-áirítear an liosta bloc ríomhphoist, fearainn SSO amháin, mód clárúcháin díchumasaithe agus seiceálacha próifíle éigeantaí clárúcháin. Déantar athruithe próifíle agus pasfhocail d'úsáideoirí atá ann cheana sula gcríochnaítear MFA freisin.",
  },
  delete_modal_title: 'Scrios an gníomh',
  delete_modal_content:
    'An bhfuil tú cinnte gur mian leat an gníomh seo a scriosadh? Ní ritheann an sreabhadh fíordheimhnithe an script seo a thuilleadh.',
  deleted: 'Scriosadh an gníomh',
  created: 'Cruthaíodh an gníomh',
  saved: 'Sábháladh an gníomh',
};

export default Object.freeze(actions);
