/* GetCertus addition (MPL-2.0, see GETCERTUS.md): admin console phrases. */
const applications = {
  page_title: 'Feidhmchláir',
  title: 'Feidhmchláir',
  subtitle: 'Cruthaigh agus bainistigh feidhmchláir le haghaidh fíordheimhniú OIDC.',
  subtitle_with_app_type: 'Socraigh fíordheimhniú GetCertus do d’fheidhmchlár {{name}}',
  create_device_flow_description:
    'Cruthaigh feidhmchlár dúchais a úsáideann OAuth 2.0 Device Authorization Grant do ghléasanna le hionchur teoranta nó feidhmchláir gan chomhéadan.',
  create: 'Cruthaigh feidhmchlár',
  create_third_party: 'Cruthaigh feidhmchlár tríú páirtí',
  create_thrid_party_modal_title: 'Cruthaigh aip tríú páirtí ({{type}})',
  application_name: 'Ainm an fheidhmchláir',
  application_name_placeholder: 'M’aip',
  application_description: 'Cur síos ar an bhfeidhmchlár',
  application_description_placeholder: 'Cuir isteach cur síos ar d’fheidhmchlár',
  select_application_type: 'Roghnaigh cineál feidhmchláir',
  no_application_type_selected: 'Níor roghnaigh tú cineál feidhmchláir fós',
  application_created: 'Cruthaíodh an feidhmchlár.',
  tab: {
    my_applications: 'M’aipeanna',
    third_party_applications: 'Aipeanna tríú páirtí',
  },
  app_id: 'Aitheantas aipe',
  type: {
    native: {
      title: 'Aip dhúchais',
      subtitle: 'Aip a ritheann i dtimpeallacht dhúchais',
      description: 'M.sh. aip iOS, aip Android, aip deisce, teilifís, CLI',
    },
    spa: {
      title: 'Aip aon leathanaigh',
      subtitle: 'Aip a ritheann sa bhrabhsálaí agus a nuashonraíonn sonraí san áit',
      description: 'M.sh. aip React DOM, aip Vue',
    },
    traditional: {
      title: 'Gréasán traidisiúnta',
      subtitle:
        'Aip a ndéanann an freastalaí gréasáin amháin a leathanaigh a rindreáil agus a nuashonrú',
      description: 'M.sh. Next.js, PHP',
    },
    machine_to_machine: {
      title: 'Meaisín go meaisín',
      subtitle: 'Aip (seirbhís de ghnáth) a labhraíonn go díreach le hacmhainní',
      description: 'M.sh. seirbhís inneall',
    },
    protected: {
      title: 'Aip chosanta',
      subtitle: 'Aip atá cosanta ag GetCertus',
      description: 'N/B',
    },
    saml: {
      title: 'Aip SAML',
      subtitle: 'Aip a úsáidtear mar nascóir SAML IdP',
      description: 'M.sh. SAML',
    },
    third_party: {
      title: 'Aip tríú páirtí',
      subtitle: 'Aip a úsáidtear mar nascóir IdP tríú páirtí',
      description: 'M.sh. OIDC',
    },
  },
  authorization_flow: {
    title: 'Sreabhadh údaraithe',
    tooltip:
      'Roghnaigh an sreabhadh údaraithe do d’fheidhmchlár. Ní féidir é a athrú ina dhiaidh sin.',
    authorization_code: {
      title: 'Cód údaraithe',
      description:
        'An cineál deontais réamhshocraithe agus is coitianta. Atreoraítear úsáideoirí chuig leathanach síniú isteach chun rochtain a údarú go díreach.',
    },
    device_flow: {
      title: 'Sreabhadh gléis',
      description:
        'Do ghléasanna le hionchur teoranta nó aipeanna gan chomhéadan (m.sh. teilifíseáin, CLI). Críochnaíonn úsáideoirí an síniú isteach ar ghléas eile trí chód gléis a chur isteach nó cód QR a scanadh.',
    },
  },
  placeholder_title: 'Roghnaigh cineál feidhmchláir chun leanúint ar aghaidh',
  placeholder_description:
    'Úsáideann GetCertus aonán feidhmchláir le haghaidh OIDC, mar shampla chun d’aipeanna a aithint, síniú isteach a bhainistiú agus logaí iniúchta a chruthú.',
  third_party_application_placeholder_description:
    'Úsáid GetCertus mar sholáthraí aitheantais chun údarú OAuth a thabhairt do sheirbhísí tríú páirtí, le scáileán toilithe réamhdhéanta chun rochtain a fháil ar acmhainní. <a>Tuilleadh eolais</a>',
  dynamic_app: {
    title: 'Aip dhinimiciúil',
    subtitle: 'CIMD',
    description: 'Ligeann aip dhinimiciúil do chliaint OAuth nascadh gan réamhchlárú.',
    settings_description:
      'Ligeann aip dhinimiciúil do chliaint OAuth nascadh gan réamhchlárú. Úsáideann sí sonraíocht OAuth Client ID Metadata Document (CIMD).',
    beta_notice:
      'Tá aipeanna dinimiciúla i mbéite faoi láthair. Bain triail astu agus <ContactLink>roinn d’aiseolas</ContactLink>.',
    app_id_placeholder: 'Soláthraíonn gach cliant é go dinimiciúil',
    enable_confirm_modal: {
      title: 'Cumasaigh rochtain dhinimiciúil do chliaint?',
      content:
        'Is féidir le haon chliant OAuth a bhfuil URL poiblí HTTPS bailí aige mar aitheantas cliaint údarú a thosú don tionónta seo gan chlárú. Bíonn an rochtain fós teoranta ag d’uasceadanna agus ag toiliú an úsáideora.',
      beta_pricing_notice:
        'Tá aipeanna dinimiciúla saor in aisce le linn na béite. Ina dhiaidh sin d’fhéadfadh praghas breiseáin a bheith i gceist. Cuirfimid in iúl duit roimh ré, agus is féidir leat é a mhúchadh am ar bith.',
    },
    enabled: 'Cumasaíodh an aip dhinimiciúil.',
    disable_confirm_modal: {
      title: 'Díchumasaigh an aip dhinimiciúil?',
      content:
        'Ní bheidh cliaint CIMD in ann iarratais údaraithe nua a thosú. Coimeádfar na deontais atá ann, agus d’fhéadfadh comharthaí rochtana a eisíodh fanacht bailí go dtí go rachaidh siad in éag.',
    },
    disabled: 'Díchumasaíodh an aip dhinimiciúil.',
    permissions: {
      user_title: 'Úsáideoir',
      user_description:
        'Roghnaigh na ceadanna a iarrann cliaint OAuth chun rochtain a fháil ar shonraí áirithe úsáideora.',
      grant_user_level_permissions: 'Tabhair ceadanna úsáideora',
      organization_title: 'Eagraíocht',
      organization_description:
        'Roghnaigh na ceadanna a iarrann cliaint OAuth chun rochtain a fháil ar shonraí áirithe eagraíochta.',
      grant_organization_level_permissions: 'Tabhair ceadanna eagraíochta',
      permission_delete_confirm:
        'Bainfear an cead den aip dhinimiciúil, agus ní bheidh cliaint OAuth in ann údarú úsáideora a iarraidh dó a thuilleadh. An bhfuil tú cinnte gur mian leat leanúint ar aghaidh?',
    },
    client_compatibility: {
      title: 'Comhoiriúnacht cliant',
      description:
        'Coigeartaigh conas a láimhseálann GetCertus iarratais údaraithe ó chliaint OAuth nach dtacaíonn go hiomlán le OpenID Connect fós. Is socruithe turgnamhacha iad seo agus d’fhéadfaidís athrú nó imeacht.',
      add_consent_prompt_for_offline_access: 'Cuir leid toilithe leis le haghaidh rochtain as líne',
      add_consent_prompt_for_offline_access_description:
        'Nuair a iarrann cliant OAuth `offline_access` gan `prompt=consent`, cuireann GetCertus an leid toilithe leis ionas gur féidir leis an gcliant comhartha athnuachana a fháil. Moltar é do chliaint ar nós ChatGPT agus Codex.',
    },
  },
  guide: {
    third_party: {
      title: 'Comhtháthaigh feidhmchlár tríú páirtí',
      description:
        'Úsáid GetCertus mar sholáthraí aitheantais chun údarú OAuth a thabhairt do sheirbhísí tríú páirtí, le scáileán toilithe réamhdhéanta chun rochtain shlán a fháil ar acmhainní. <a>Tuilleadh eolais</a>',
    },
  },
};

export default Object.freeze(applications);
