/* GetCertus addition (MPL-2.0, see GETCERTUS.md): admin console phrases. */
const sign_in_exp = {
  page_title: 'Eispéireas síniú isteach',
  page_title_with_account: 'Síniú isteach & cuntas',
  title: 'Síniú isteach & cuntas',
  description:
    'Saincheap na sreafaí fíordheimhnithe agus an comhéadan, agus féach ar an eispéireas réamhdhéanta i bhfíor-am.',
  tabs: {
    branding: 'Brandáil',
    sign_up_and_sign_in: 'Clárú agus síniú isteach',
    collect_user_profile: 'Bailigh próifíl an úsáideora',
    account_center: 'Ionad an chuntais',
    content: 'Ábhar',
    password_policy: 'Polasaí pasfhocal',
  },
  welcome: {
    title: 'Saincheap an t-eispéireas síniú isteach',
    description:
      'Tosaigh go tapa le do chéad socrú síniú isteach. Tógfaidh an treoir seo tú trí na socruithe riachtanacha uile.',
    get_started: 'Tosaigh',
    apply_remind:
      'Tabhair faoi deara go mbaineann an t-eispéireas síniú isteach le gach feidhmchlár faoin gcuntas seo.',
  },
  color: {
    title: 'DATH',
    primary_color: 'Dath branda',
    dark_primary_color: 'Dath branda (dorcha)',
    dark_mode: 'Cumasaigh an mód dorcha',
    dark_mode_description:
      "Gheobhaidh d'fheidhmchlár téama dorcha uathghinte bunaithe ar do dhath branda agus ar algartam GetCertus. Is féidir leat é a shaincheapadh mar is mian leat.",
    dark_mode_reset_tip: 'Athríomh dath an mhóid dhorcha bunaithe ar an dath branda.',
    reset: 'Athríomh',
  },
  branding: {
    title: 'BRANDÁIL',
    ui_style: 'Stíl',
    with_light: '{{value}}',
    with_dark: '{{value}} (dorcha)',
    app_logo_and_favicon: 'Lógó an fheidhmchláir agus favicon',
    company_logo_and_favicon: 'Lógó an chomhlachta agus favicon',
    organization_logo_and_favicon: 'Lógó na heagraíochta agus favicon',
    hide_logto_branding: 'Folaigh brandáil GetCertus',
    hide_logto_branding_description:
      'Bain "Powered by GetCertus". Cuir do bhranda féin amháin chun tosaigh le heispéireas síniú isteach glan gairmiúil.',
    hide_logto_branding_oss_note:
      'Chun an síniú a fholú, teastaíonn <a>breiseán Branding</a> GetCertus.',
  },
  branding_uploads: {
    app_logo: {
      title: 'Lógó an fheidhmchláir',
      url: 'URL lógó an fheidhmchláir',
      url_placeholder: 'https://your.cdn.domain/logo.png',
      error: 'Lógó an fheidhmchláir: {{error}}',
    },
    company_logo: {
      title: 'Lógó an chomhlachta',
      url: 'URL lógó an chomhlachta',
      url_placeholder: 'https://your.cdn.domain/logo.png',
      error: 'Lógó an chomhlachta: {{error}}',
    },
    organization_logo: {
      title: 'Uaslódáil íomhá',
      url: 'URL lógó na heagraíochta',
      url_placeholder: 'https://your.cdn.domain/logo.png',
      error: 'Lógó na heagraíochta: {{error}}',
    },
    connector_logo: {
      title: 'Uaslódáil íomhá',
      url: 'URL lógó an nascóra',
      url_placeholder: 'https://your.cdn.domain/logo.png',
      error: 'Lógó an nascóra: {{error}}',
    },
    favicon: {
      title: 'Favicon',
      url: 'URL an favicon',
      url_placeholder: 'https://your.cdn.domain/favicon.ico',
      error: 'Favicon: {{error}}',
    },
  },
  custom_ui: {
    title: 'Comhéadan saincheaptha',
    cloud_tag: 'Cloud',
    css_code_editor_title: 'CSS saincheaptha',
    css_code_editor_field_title: 'Sárúcháin CSS',
    css_code_editor_description1: 'Féach ar shampla de CSS saincheaptha.',
    css_code_editor_description2: '<a>{{link}}</a>',
    css_code_editor_description_link_content: 'Tuilleadh eolais',
    css_code_editor_content_placeholder:
      'Cuir isteach do shárúcháin CSS anseo chun stíl aon ruda a chur in oiriúint go díreach do do riachtanais. Bí cruthaitheach agus cuir do chomhéadan chun suntais.',
    bring_your_ui_title: 'Bring your UI',
    bring_your_ui_upload_title: 'Uaslódáil sócmhainní an chomhéadain shaincheaptha',
    bring_your_ui_description:
      'Uaslódáil pacáiste comhbhrúite (.zip) chun do chód féin a chur in ionad chomhéadan réamhdhéanta GetCertus. <a>Tuilleadh eolais</a>',
    bring_your_ui_oss_description: 'Saincheap an comhéadan síniú isteach le do chód féin.',
    bring_your_ui_oss_card_description:
      'Níl uaslódáil comhéadain shaincheaptha mar chuid de phleananna GetCertus fós. <a>Féach ar na pleananna agus na breiseáin</a>.',
    bring_your_ui_oss_try_cloud: 'Féach ar na pleananna',
    preview_with_bring_your_ui_description:
      'Uaslódáladh sócmhainní do chomhéadain shaincheaptha agus tá siad á riar anois. Dá bharr sin, díchumasaíodh an fhuinneog réamhamhairc ionsuite.\nChun do chomhéadan síniú isteach pearsantaithe a thástáil, cliceáil an cnaipe "Réamhamharc beo" chun é a oscailt i gcluaisín nua.',
    csp_description:
      'Ceadaigh sloinn foinse bhreise do do chomhéadan síniú isteach saincheaptha. Ní chuirtear na luachanna seo i bhfeidhm ach nuair a riartar sócmhainní comhéadain shaincheaptha.',
    csp_script_src: 'script-src ceadaithe',
    csp_script_src_tip:
      'Ceadaigh sloinn foinse HTTPS do scripteanna a luchtaíonn do chomhéadan saincheaptha, mar shampla https://scripts.example.com nó https://*.example.com.',
    csp_connect_src: 'connect-src ceadaithe',
    csp_connect_src_tip:
      "Ceadaigh sloinn foinse HTTPS nó WSS d'iarratais líonra ó do chomhéadan saincheaptha, mar shampla https://api.example.com nó wss://events.example.com.",
    csp_source_invalid_error:
      'Cuir isteach slonn foinse bailí. Úsáid URLanna https://; tacaíonn connect-src le wss:// freisin. Ní thacaítear le heochairfhocail CSP ná le leathstadanna.',
    csp_source_duplicate_error: 'Tá an slonn foinse seo ar an liosta cheana.',
  },
  account_center: {
    title: 'IONAD AN CHUNTAIS',
    description:
      "Cuir ionad cuntais ar fáil d'úsáideoirí deiridh chun slándáil a gcuntais agus faisnéis a bpróifíle a bhainistiú.",
    enable_account_api: 'Cumasaigh ionad an chuntais agus an Account API',
    enable_account_api_description:
      "Cuir ar siúl an Account API d'úsáideoirí agus ionad cuntais réamhdhéanta GetCertus araon. Nuair atá sé múchta, níl ceachtar gné ar fáil.",
    field_options: {
      off: 'Múchta',
      edit: 'Eagarthóireacht',
      read_only: 'Léamh amháin',
      enabled: 'Cumasaithe',
      disabled: 'Díchumasaithe',
    },
    sections: {
      account_security: {
        title: 'SLÁNDÁIL AN CHUNTAIS',
        description:
          'Bainistigh rochtain ar an Account API, ionas gur féidir le húsáideoirí a bhfaisnéis aitheantais agus a bhfachtóirí fíordheimhnithe a fheiceáil nó a chur in eagar tar éis síniú isteach.',
        security_verification: {
          title: 'Fíorú slándála',
          description:
            "Sula n-athraítear socruithe slándála, ní mór d'úsáideoirí a n-aitheantas a fhíorú chun ID taifid fhíoraithe a fháil atá bailí ar feadh 10 nóiméad. Chun modh fíoraithe (ríomhphost, fón, pasfhocal) a chumasú, socraigh cead an Account API thíos go <strong>Léamh amháin</strong> (ar a laghad) nó <strong>Eagarthóireacht</strong> ionas gur féidir leis an gcóras a bhrath an bhfuil sé cumraithe ag an úsáideoir. <a>Tuilleadh eolais</a>",
        },
        groups: {
          identifiers: {
            title: 'Aitheantóirí',
          },
          authentication_factors: {
            title: 'Fachtóirí fíordheimhnithe',
          },
          session_management: {
            title: 'Bainistíocht seisiún',
          },
        },
      },
      user_profile: {
        title: 'PRÓIFÍL AN ÚSÁIDEORA',
        description:
          'Bainistigh rochtain ar an Account API, ionas gur féidir le húsáideoirí sonraí próifíle bunúsacha nó saincheaptha a fheiceáil nó a chur in eagar tar éis síniú isteach.',
        groups: {
          profile_data: {
            title: 'Sonraí próifíle',
          },
        },
      },
      secret_vault: {
        title: 'SECRET VAULT',
        description:
          'Do nascóirí sóisialta agus fiontair, stóráil comharthaí rochtana tríú páirtí go slán chun a gcuid APIanna a ghlaoch (m.sh. imeachtaí a chur le Google Calendar).',
        third_party_token_storage: {
          title: 'Comhartha tríú páirtí',
          third_party_access_token_retrieval: 'Aisghabháil comhartha rochtana tríú páirtí',
          third_party_token_tooltip:
            'Chun comharthaí a stóráil, is féidir leat é seo a chumasú i socruithe an nascóra shóisialta nó fiontair chomhfhreagraigh.',
          third_party_token_description:
            'Nuair a chumasaítear an Account API, gníomhachtaítear aisghabháil comharthaí tríú páirtí go huathoibríoch.',
        },
      },
    },
    fields: {
      email: 'Seoladh ríomhphoist',
      phone: 'Uimhir theileafóin',
      social: 'Aitheantais shóisialta',
      password: 'Pasfhocal',
      mfa: 'Fíordheimhniú ilfhachtóireach',
      mfa_description: "Lig d'úsáideoirí a modhanna MFA a bhainistiú ó ionad an chuntais.",
      passkey: 'Eochair rochtana',
      username: 'Ainm úsáideora',
      name: 'Ainm',
      avatar: 'Abhatár',
      profile: 'Próifíl',
      profile_description: 'Rialaigh rochtain ar thréithe próifíle struchtúrtha.',
      custom_data: 'Sonraí saincheaptha',
      custom_data_description:
        'Rialaigh rochtain ar shonraí JSON saincheaptha atá stóráilte don úsáideoir.',
      sessions: 'Seisiúin',
      trusted_devices: 'Gléasanna iontaofa',
    },
    profile_fields: {
      title: "Réimsí próifíle d'ionad an chuntais réamhdhéanta",
      add_profile_fields: 'Cuir réimsí próifíle leis',
      hint: {
        not_in_list: 'Níl sé ar an liosta?',
        set_up: 'Socraigh',
        go_to: 'réimsí próifíle eile anois.',
      },
      disabled_hint: {
        name: "Chun an réimse seo a chur leis, socraigh an cead 'Ainm' go 'Eagarthóireacht / Léamh amháin' sa chuid Próifíl an úsáideora thíos ar dtús.",
        avatar:
          "Chun an réimse seo a chur leis, socraigh an cead 'Abhatár' go 'Eagarthóireacht / Léamh amháin' sa chuid Próifíl an úsáideora thíos ar dtús.",
        profile:
          "Chun an réimse seo a chur leis, socraigh an cead 'Próifíl' go 'Eagarthóireacht / Léamh amháin' sa chuid Próifíl an úsáideora thíos ar dtús.",
        custom_data:
          "Chun an réimse seo a chur leis, socraigh an cead 'Sonraí saincheaptha' go 'Eagarthóireacht / Léamh amháin' sa chuid Próifíl an úsáideora thíos ar dtús.",
      },
    },
    webauthn_related_origins: 'Bunáiteanna gaolmhara WebAuthn',
    webauthn_related_origins_description:
      "Cuir fearainn d'fheidhmchlár tosaigh leis a bhfuil cead acu eochracha rochtana a chlárú tríd an Account API.",
    webauthn_related_origins_error: 'Caithfidh an bhunáit tosú le https:// nó http://',
    delete_account_url: 'Scrios an cuntas',
    delete_account_url_description:
      'Tabhair URL do chríochphointe féin chun scriosadh cuntas a láimhseáil le loighic shaincheaptha.',
    prebuilt_ui: {
      title: 'COMHTHÁTHAIGH COMHÉADAN RÉAMHDHÉANTA',
      description:
        "Comhtháthaigh go tapa ionad an chuntais réamhdhéanta, fíorú slándála, nó sreabhadh aonair nuashonraithe próifíle le comhéadan réamhdhéanta. Cuir d'fhearann agus an bealach le chéile chun URL ionad do chuntais a chruthú (m.sh. https://auth.foo.com/account/email).",
      permission_notice:
        'Chun na sreafaí réamhdhéanta seo a chomhtháthú, socraigh na ceadanna Account API gaolmhara go <strong>Eagarthóireacht</strong> sna socruithe thíos.',
      account_center_title: 'Comhtháthaigh ionad an chuntais réamhdhéanta',
      account_center_description:
        'Seol úsáideoirí chuig ionad an chuntais chun socruithe slándála a bhainistiú, mar ríomhphost, fón, ainm úsáideora, pasfhocal, MFA agus cuntais nasctha.',
      flows_title: 'Comhtháthaigh sreafaí réamhdhéanta socruithe slándála',
      single_task_flows_title: 'Comhtháthaigh sreabhadh réamhdhéanta aon tasc',
      flows_description:
        "Cuir d'fhearann agus an bealach le chéile chun URL socraithe do chuntais a chruthú (m.sh. https://auth.foo.com/account/email). Más mian leat, cuir `redirect=` leis chun úsáideoirí a sheoladh ar ais chuig d'fheidhmchlár tar éis nuashonrú rathúil, `show_success=true` chun an leathanach ratha a choinneáil le feiceáil, `ui_locales=` chun an teanga réamhshocraithe a shárú, nó `identifier=` chun réimse an aitheantóra a réamhlíonadh.",
      single_task_flows_description:
        "Seol úsáideoirí díreach chuig sreabhadh ar leith (m.sh. nascadh ríomhphoist). Más mian leat, cuir `redirect=` leis chun úsáideoirí a sheoladh ar ais chuig d'fheidhmchlár tar éis nuashonrú rathúil, `show_success=true` chun an leathanach ratha a choinneáil le feiceáil, `ui_locales=` chun an teanga réamhshocraithe a shárú, nó `identifier=` chun réimse an aitheantóra a réamhlíonadh.",
      tooltips: {
        email: 'Nuashonraigh do phríomhsheoladh ríomhphoist',
        phone: 'Nuashonraigh do phríomhuimhir theileafóin',
        username: "Nuashonraigh d'ainm úsáideora",
        password: 'Socraigh pasfhocal nua',
        social: 'Nasc cuntas sóisialta le haghaidh síniú isteach',
        social_change: 'Athraigh go cuntas sóisialta nasctha eile',
        social_remove: 'Bain cuntas sóisialta nasctha',
        authenticator_app:
          'Socraigh aip fhíordheimhnitheora nua le haghaidh fíordheimhniú ilfhachtóireach',
        authenticator_app_replace: "Cuir aip nua in ionad d'aip fhíordheimhnitheora reatha",
        passkey_add: 'Cláraigh eochair rochtana nua',
        passkey_manage: "Bainistigh d'eochracha rochtana reatha nó cuir cinn nua leis",
        backup_codes_generate: 'Gin sraith nua de 10 gcód cúltaca',
        backup_codes_manage: 'Féach ar do chóid chúltaca atá ar fáil nó gin cinn nua',
        account_center:
          'Téigh chuig ionad an chuntais chun socruithe slándála a bhainistiú, mar ríomhphost, fón, ainm úsáideora, pasfhocal, MFA agus cuntais nasctha',
        profile: 'An lárionad chun do fhaisnéis phearsanta a bhainistiú (m.sh. ainm, abhatár)',
        sessions: 'Féach ar do sheisiúin ghníomhacha ar gach gléas agus bainistigh iad',
      },
      customize_note: 'Nach dteastaíonn an t-eispéireas réamhdhéanta uait? Is féidir leat',
      customize_link: 'do shreafaí a shaincheapadh go hiomlán leis an Account API ina ionad.',
    },
    custom_css: {
      title: 'CSS SAINCHEAPTHA',
      description: 'Saincheap cuma ionad an chuntais le CSS saincheaptha.',
    },
  },
  sign_up_and_sign_in: {
    identifiers_email: 'Seoladh ríomhphoist',
    identifiers_phone: 'Uimhir theileafóin',
    identifiers_username: 'Ainm úsáideora',
    identifiers_email_or_sms: 'Seoladh ríomhphoist nó uimhir theileafóin',
    identifiers_none: 'Ní bhaineann',
    and: 'agus',
    or: 'nó',
    sign_up: {
      title: 'CLÁRÚ',
      sign_up_identifier: 'Aitheantóirí clárúcháin',
      identifier_description:
        'Tá gach aitheantóir roghnaithe riachtanach nuair a chruthaítear cuntas nua.',
      sign_up_authentication: 'Socrú fíordheimhnithe don chlárú',
      verification_tip:
        "Ní mór d'úsáideoirí an ríomhphost nó an uimhir theileafóin a chumraigh tú a fhíorú trí chód fíoraithe a chur isteach le linn an chlárúcháin.",
      authentication_description:
        'Beidh gach gníomh roghnaithe éigeantach chun an sreabhadh a chríochnú.',
      set_a_password_option: 'Cruthaigh do phasfhocal',
      verify_at_sign_up_option: 'Fíoraigh ag clárú',
      social_only_creation_description:
        '(Baineann sé seo le cuntais a chruthaítear trí shíniú isteach sóisialta amháin)',
      collect_user_profile: 'Bailigh próifíl an úsáideora',
      add_profile_fields: 'Cuir réimsí próifíle leis',
      profile_fields_hint: {
        not_in_list: 'Níl sé ar an liosta?',
        set_up: 'Socraigh',
        go_to: 'réimsí próifíle eile anois.',
      },
    },
    sign_in: {
      title: 'SÍNIÚ ISTEACH',
      sign_in_identifier_and_auth: 'Socruithe aitheantóra agus fíordheimhnithe don síniú isteach',
      description:
        'Is féidir le húsáideoirí síniú isteach le haon cheann de na roghanna atá ar fáil.',
      add_sign_in_method: 'Cuir modh síniú isteach leis',
      add_sign_up_method: 'Cuir modh clárúcháin leis',
      password_auth: 'Pasfhocal',
      verification_code_auth: 'Cód fíoraithe',
      auth_swap_tip:
        'Malartaigh na roghanna thíos chun a shocrú cén ceann a thaispeántar ar dtús sa sreabhadh.',
      require_auth_factor: 'Ní mór duit fachtóir fíordheimhnithe amháin ar a laghad a roghnú.',
      forgot_password: 'Pasfhocal dearmadta',
      forgot_password_description:
        'Is féidir le húsáideoirí a bpasfhocal a athshocrú le haon mhodh fíoraithe atá ar fáil.',
      add_verification_method: 'Cuir modh fíoraithe leis',
      email_verification_code: 'Cód fíoraithe ríomhphoist',
      phone_verification_code: 'Cód fíoraithe fóin',
    },
    social_sign_in: {
      title: 'SÍNIÚ ISTEACH SÓISIALTA',
      social_sign_in: 'Síniú isteach sóisialta',
      description:
        "Ag brath ar an aitheantóir éigeantach a shocraigh tú, d'fhéadfaí iarraidh ar d'úsáideoir aitheantóir a sholáthar agus é ag clárú trí nascóir sóisialta.",
      add_social_connector: 'Cuir nascóir sóisialta leis',
      set_up_hint: {
        not_in_list: 'Níl sé ar an liosta?',
        set_up_more: 'Socraigh',
        go_to: 'nascóirí sóisialta eile anois.',
      },
      settings_title: 'Eispéireas síniú isteach sóisialta',
      automatic_account_linking: 'Nasc cuntais leis an aitheantóir céanna go huathoibríoch',
      automatic_account_linking_tip:
        'Nuair a bhíonn sé cumasaithe, má shíníonn úsáideoir isteach le haitheantas sóisialta nua agus go bhfuil díreach cuntas amháin ann leis an aitheantóir céanna (m.sh. seoladh ríomhphoist), nascfaidh GetCertus an t-aitheantas sóisialta leis an gcuntas sin go huathoibríoch. Ní iarrfar ar an úsáideoir an mian leis na cuntais a nascadh.',
      required_sign_up_identifiers:
        'Éiligh ar úsáideoirí aitheantóirí clárúcháin atá in easnamh a sholáthar',
      required_sign_up_identifiers_tip:
        "Nuair a bhíonn sé cumasaithe, ní mór d'úsáideoirí a shíníonn isteach trí sholáthraithe sóisialta aon aitheantóir riachtanach atá in easnamh (mar ríomhphost) a líonadh sula gcríochnaítear an síniú isteach. \n\nMá tá sé díchumasaithe, is féidir le húsáideoirí leanúint ar aghaidh gan aitheantóirí atá in easnamh a sholáthar, fiú mura ndearna an cuntas sóisialta iad a shioncronú.",
    },
    passkey_sign_in: {
      title: 'SÍNIÚ ISTEACH LE HEOCHAIR ROCHTANA',
      passkey_sign_in: 'Síniú isteach le heochair rochtana',
      enable_passkey_sign_in_description:
        "Lig d'úsáideoirí rochtain thapa shlán a fháil ar an bhfeidhmchlár trí eochair rochtana (WebAuthn), le bithmhéadracht, eochair slándála, srl.",
      prompts: 'Leideanna eochrach rochtana',
      show_passkey_button:
        'Taispeáin an cnaipe “Lean ar aghaidh le heochair rochtana” ar an leathanach síniú isteach',
      show_passkey_button_tip:
        'Gan an cnaipe “Lean ar aghaidh le heochair rochtana”, tosaíonn an sreabhadh síniú isteach leis an aitheantóir agus taispeántar na roghanna pasfhocail agus eochrach rochtana sa chéad chéim eile.',
      allow_autofill:
        'Ceadaigh moltaí agus uathlíonadh eochracha rochtana cláraithe i réimsí aitheantóra',
    },
    tip: {
      set_a_password: "Is gá pasfhocal uathúil a bheith ag d'ainm úsáideora.",
      verify_at_sign_up:
        "Faoi láthair ní thacaímid ach le ríomhphost agus fón fíoraithe. Gan bhailíochtú, d'fhéadfadh go leor seoltaí ríomhphoist nó uimhreacha teileafóin de dhrochcháilíocht a bheith i do bhonn úsáideoirí.",
      password_auth:
        'Tá sé seo riachtanach mar gur chumasaigh tú an rogha pasfhocal a shocrú le linn an chlárúcháin.',
      verification_code_auth:
        'Tá sé seo riachtanach mar nár chumasaigh tú ach an rogha cód fíoraithe a sholáthar ag clárú. Is féidir leat an bosca a dhíthiceáil nuair a cheadaítear pasfhocal a shocrú le linn an chlárúcháin.',
      email_mfa_enabled:
        'Tá an cód fíoraithe ríomhphoist cumasaithe cheana le haghaidh MFA, mar sin ar mhaithe le slándáil ní féidir é a athúsáid mar phríomh-mhodh síniú isteach.',
      phone_mfa_enabled:
        'Tá an cód fíoraithe fóin cumasaithe cheana le haghaidh MFA, mar sin ar mhaithe le slándáil ní féidir é a athúsáid mar phríomh-mhodh síniú isteach.',
      delete_sign_in_method:
        'Tá sé seo riachtanach mar gur roghnaigh tú {{identifier}} mar aitheantóir riachtanach.',
      password_disabled_notification:
        'Tá an rogha "Cruthaigh do phasfhocal" díchumasaithe do chlárú le hainm úsáideora, rud a d\'fhéadfadh cosc a chur ar úsáideoirí síniú isteach. Deimhnigh chun sábháil mar sin féin.',
    },
    advanced_options: {
      title: 'ARDROGHANNA',
      enable_single_sign_on: 'Cumasaigh aonsíniú isteach (SSO) fiontair',
      enable_single_sign_on_description:
        "Lig d'úsáideoirí síniú isteach ar an bhfeidhmchlár le haonsíniú isteach trína n-aitheantais fiontair.",
      single_sign_on_hint: {
        prefix: 'Téigh chuig an gcuid ',
        link: '"SSO fiontair"',
        suffix: 'chun tuilleadh nascóirí fiontair a shocrú.',
      },
      enable_user_registration: 'Cumasaigh clárú úsáideoirí',
      enable_user_registration_description:
        'Ceadaigh nó cuir cosc ar chlárú úsáideoirí. Nuair a bhíonn sé díchumasaithe, is féidir úsáideoirí a chur leis sa chonsól riaracháin fós, ach ní féidir le húsáideoirí cuntais a chruthú trí chomhéadan an tsínithe isteach a thuilleadh.',
      unknown_session_redirect_url: 'URL atreoraithe do sheisiún anaithnid',
      unknown_session_redirect_url_tip:
        "Uaireanta ní aithníonn GetCertus seisiún úsáideora ar an leathanach síniú isteach, mar shampla nuair a théann seisiún in éag nó nuair a chuireann an t-úsáideoir an nasc síniú isteach i leabharmharc nó nuair a roinneann sé é. De réir réamhshocraithe, taispeántar earráid 404 “seisiún anaithnid”. Le haghaidh eispéireas níos fearr, socraigh URL cúltaca chun úsáideoirí a atreorú ar ais chuig d'fheidhmchlár agus an fíordheimhniú a atosú.",
    },
    username_policy: {
      title: 'Polasaí ainmneacha úsáideora',
      description:
        'Saincheap riachtanais ainmneacha úsáideora, lena n-áirítear fad, carachtair cheadaithe agus íogaireacht cháis.',
      manage_button: 'Bainistigh',
      modal_title: 'Polasaí ainmneacha úsáideora',
      modal_description: "Saincheap riachtanais ainmneacha úsáideora do d'úsáideoirí deiridh.",
      length: {
        title: 'Fad an ainm úsáideora',
        minimum: 'Íosmhéid',
        maximum: 'Uasmhéid',
        min_greater_than_max: 'Ní féidir leis an bhfad íosta a bheith níos mó ná an fad uasta.',
      },
      allowed_chars: {
        title: 'Cineálacha carachtar ceadaithe',
        uppercase: 'Ceannlitreacha (A-Z)',
        lowercase: 'Litreacha beaga (a-z)',
        numbers: 'Uimhreacha (0-9)',
        underscore: 'Fostríocanna (_)',
        no_valid_leading_char:
          'Ní cheadaítear uimhreacha amháin. Cumasaigh ceannlitreacha, litreacha beaga nó fostríocanna ar a laghad.',
        no_char_selected: 'Roghnaigh cineál carachtar amháin ar a laghad.',
      },
      case_sensitive: {
        title: 'Ainmneacha úsáideora cás-íogair',
        description:
          'Caith le ceannlitreacha agus litreacha beaga mar rudaí difriúla. Is ainmneacha úsáideora difriúla iad ‘user123’ agus ‘User123’.',
      },
      case_conflicts: {
        title: 'Braitheadh coimhlintí idir ainmneacha úsáideora atá ann cheana',
        description:
          'Bheadh coimhlint idir roinnt ainmneacha úsáideora dá múchfaí an íogaireacht cháis. Réitigh an {{count}} grúpa coimhlinteach thíos sula sábhálann tú.',
        sample_title: 'Ainmneacha úsáideora coimhlinteacha',
      },
    },
  },
  content: {
    terms_of_use: {
      title: 'TÉARMAÍ',
      description:
        'Cuir téarmaí agus polasaí príobháideachais leis chun riachtanais chomhlíonta a shásamh.',
      terms_of_use: 'URL na dtéarmaí úsáide',
      terms_of_use_placeholder: 'https://your.terms.of.use/',
      privacy_policy: 'URL an pholasaí príobháideachais',
      privacy_policy_placeholder: 'https://your.privacy.policy/',
      agree_to_terms: 'Aontaigh leis na téarmaí',
      agree_policies: {
        automatic: 'Aontaítear leis na téarmaí go huathoibríoch ach leanúint ar aghaidh',
        manual_registration_only: 'Éiligh aontú le ticbhosca ag clárú amháin',
        manual: 'Éiligh aontú le ticbhosca ag clárú agus ag síniú isteach araon',
      },
    },
    languages: {
      title: 'TEANGACHA',
      enable_auto_detect: 'Cumasaigh uathbhrath',
      description:
        'Braitheann do bhogearraí socrú teanga an úsáideora agus athraíonn siad go dtí an teanga áitiúil. Is féidir leat teangacha nua a chur leis tríd an gcomhéadan a aistriú ón mBéarla.',
      manage_language: 'Bainistigh teangacha',
      default_language: 'Teanga réamhshocraithe',
      default_language_description_auto:
        'Úsáidfear an teanga réamhshocraithe nuair nach bhfuil teanga bhraite an úsáideora sa leabharlann teangacha reatha.',
      default_language_description_fixed:
        'Nuair atá an t-uathbhrath múchta, is í an teanga réamhshocraithe an t-aon teanga a thaispeánfaidh do bhogearraí. Cuir an t-uathbhrath ar siúl le haghaidh tuilleadh teangacha.',
    },
    support: {
      title: 'TACAÍOCHT',
      subtitle:
        "Taispeáin do chainéil tacaíochta ar leathanaigh earráide le cabhair thapa a thabhairt d'úsáideoirí.",
      support_email: 'Ríomhphost tacaíochta',
      support_email_placeholder: 'support@email.com',
      support_website: 'Suíomh gréasáin tacaíochta',
      support_website_placeholder: 'https://your.website/support',
    },
    manage_language: {
      title: 'Bainistigh teangacha',
      subtitle:
        'Logánaigh eispéireas an táirge trí theangacha agus aistriúcháin a chur leis. Is féidir do chuid oibre a shocrú mar an teanga réamhshocraithe.',
      add_language: 'Cuir teanga leis',
      logto_provided: 'Ó GetCertus',
      key: 'Eochair',
      logto_source_values: 'Luachanna foinse GetCertus',
      custom_values: 'Luachanna saincheaptha',
      clear_all_tip: 'Glan gach luach',
      unsaved_description: 'Ní shábhálfar athruithe má fhágann tú an leathanach seo gan sábháil.',
      deletion_tip: 'Scrios an teanga',
      deletion_title: 'An mian leat an teanga a cuireadh leis a scriosadh?',
      deletion_description:
        "Tar éis í a scriosadh, ní bheidh d'úsáideoirí in ann an teanga sin a úsáid a thuilleadh.",
      default_language_deletion_title: 'Ní féidir an teanga réamhshocraithe a scriosadh.',
      default_language_deletion_description:
        'Tá {{language}} socraithe mar do theanga réamhshocraithe agus ní féidir í a scriosadh. ',
    },
  },
  setup_warning: {
    no_connector_sms:
      'Níl aon nascóir SMS socraithe fós. Go dtí go mbeidh an chumraíocht críochnaithe, ní bheidh úsáideoirí in ann síniú isteach leis an modh seo. <a>{{link}}</a> in "Nascóirí"',
    no_connector_email:
      'Níl aon nascóir ríomhphoist socraithe fós. Go dtí go mbeidh an chumraíocht críochnaithe, ní bheidh úsáideoirí in ann síniú isteach leis an modh seo. <a>{{link}}</a> in "Nascóirí"',
    no_connector_social:
      'Níl aon nascóir sóisialta socraithe agat fós. Cuir nascóirí leis ar dtús chun modhanna síniú isteach sóisialta a úsáid. <a>{{link}}</a> in "Nascóirí".',
    no_connector_email_account_center:
      'Níl aon nascóir ríomhphoist socraithe fós. Socraigh é in <a>"Nascóirí ríomhphoist agus SMS"</a>.',
    no_connector_sms_account_center:
      'Níl aon nascóir SMS socraithe fós. Socraigh é in <a>"Nascóirí ríomhphoist agus SMS"</a>.',
    no_connector_social_account_center:
      'Níl aon nascóir sóisialta socraithe fós. Socraigh é in <a>"Nascóirí sóisialta"</a>.',
    no_mfa_factor: 'Níl aon fhachtóir MFA socraithe fós. Socraigh é in <a>{{link}}</a>.',
    setup_link: 'Socraigh',
  },
  save_alert: {
    description:
      "Tá tú ag cur nósanna imeachta nua síniú isteach agus clárúcháin i bhfeidhm. D'fhéadfadh tionchar a bheith ag an socrú nua ar gach úsáideoir. An bhfuil tú cinnte gur mian leat an t-athrú a chur i bhfeidhm?",
    before: 'Roimh',
    after: 'Tar éis',
    sign_up: 'Clárú',
    sign_in: 'Síniú isteach',
    social: 'Sóisialta',
    forgot_password_migration_notice:
      "D'uasghrádaíomar fíorú an phasfhocail dearmadta chun tacú le modhanna saincheaptha. Roimhe seo, bhí sé seo socraithe go huathoibríoch ag do nascóirí ríomhphoist agus SMS. Cliceáil <strong>Deimhnigh</strong> chun an t-uasghrádú a chríochnú.",
  },
  preview: {
    title: 'Réamhamharc ar an síniú isteach',
    live_preview: 'Réamhamharc beo',
    live_preview_tip: 'Sábháil chun réamhamharc a fháil ar na hathruithe',
    native: 'Dúchasach',
    desktop_web: 'Gréasán deisce',
    mobile_web: 'Gréasán soghluaiste',
    desktop: 'Deasc',
    mobile: 'Soghluaiste',
  },
  custom_profile_fields: {
    table: {
      add_button: 'Cuir réimse próifíle leis',
      title: {
        field_label: 'Lipéad an réimse',
        type: 'Cineál',
        user_data_key: 'Eochair sonraí úsáideora',
      },
      placeholder: {
        title: 'Bailigh próifíl an úsáideora',
        description:
          'Saincheap réimsí chun tuilleadh faisnéise próifíle a bhailiú le linn an chlárúcháin.',
      },
    },
    type: {
      Text: 'Téacs',
      Number: 'Uimhir',
      Date: 'Dáta',
      Checkbox: 'Ticbhosca (Boole)',
      Select: 'Roghchlár anuas (rogha amháin)',
      Url: 'URL',
      Regex: 'Slonn rialta',
      Address: 'Seoladh (comhdhéanta)',
      Fullname: 'Ainm iomlán (comhdhéanta)',
    },
    modal: {
      title: 'Cuir réimse próifíle leis',
      subtitle:
        'Saincheap réimsí chun tuilleadh faisnéise próifíle a bhailiú le linn an chlárúcháin.',
      built_in_properties: 'Bunsonraí úsáideora',
      custom_properties: 'Sonraí úsáideora saincheaptha',
      custom_data_field_name: 'Eochair sonraí úsáideora',
      custom_data_field_input_placeholder:
        'Cuir isteach eochair sonraí úsáideora, m.sh. `myFavoriteFieldName`',
      custom_field: {
        title: 'Sonraí saincheaptha',
        description:
          "Airíonna úsáideora breise ar féidir leat a shainiú chun riachtanais uathúla d'fheidhmchláir a shásamh.",
      },
      type_required: 'Roghnaigh cineál airí',
      create_button: 'Cruthaigh réimse próifíle',
      avatar: {
        description:
          "Lig d'úsáideoirí a bpictiúr próifíle a uaslódáil le linn an chlárúcháin. Stóráiltear URL na híomhá mar abhatár an úsáideora.",
        storage_not_configured:
          'Teastaíonn soláthraí stórála cumraithe chun abhatáir a uaslódáil. Cumraigh stóráil sula gcuireann tú an réimse seo leis.',
      },
    },
    details: {
      page_title: 'Sonraí an réimse próifíle',
      back_to_sie: 'Ar ais chuig an eispéireas síniú isteach',
      enter_field_name: 'Cuir isteach ainm an réimse próifíle',
      delete_description:
        'Ní féidir an gníomh seo a chealú. An bhfuil tú cinnte gur mian leat an réimse próifíle seo a scriosadh?',
      field_deleted: 'Scriosadh an réimse próifíle {{name}}.',
      key: 'Eochair sonraí úsáideora',
      field_name: 'Ainm an réimse',
      field_type: 'Cineál an réimse',
      settings: 'Socruithe',
      settings_description:
        'Saincheap réimsí chun tuilleadh faisnéise próifíle a bhailiú le linn an chlárúcháin.',
      address_format: 'Formáid seolta',
      single_line_address: 'Seoladh aonlíne',
      multi_line_address: 'Seoladh illíne (m.sh. sráid, cathair, contae, Éirchód, tír)',
      components: 'Comhpháirteanna',
      components_tip: 'Roghnaigh na comhpháirteanna a dhéanann suas an réimse comhdhéanta.',
      label: 'Lipéad an réimse',
      label_placeholder: 'Lipéad',
      label_tip:
        'An bhfuil logánú uait? Cuir teangacha leis in <a>Eispéireas síniú isteach > Ábhar</a>',
      label_tooltip:
        'Lipéad snámhach a léiríonn cad chuige an réimse. Taispeántar é taobh istigh den réimse agus bogann sé os a chionn nuair a bhíonn fócas ar an réimse nó luach ann.',
      placeholder: 'Ionadchoinneálaí an réimse',
      placeholder_placeholder: 'Ionadchoinneálaí',
      placeholder_tooltip:
        'Sampla nó leid formáide a thaispeántar taobh istigh den réimse. De ghnáth taispeántar é tar éis don lipéad bogadh suas agus ba cheart dó a bheith gearr (m.sh. LL/MM/BBBB).',
      description: 'Cur síos ar an réimse',
      description_placeholder: 'Cur síos',
      description_tooltip:
        'Téacs tacaíochta faoin réimse téacs. Úsáid é le haghaidh treoracha níos faide nó nótaí inrochtaineachta.',
      options: 'Roghanna',
      options_tip:
        'Cuir isteach gach rogha ar líne nua. Úsáid luach:lipéad (m.sh. red:Dearg). Is féidir leat luach amháin a chur isteach freisin; gan lipéad, taispeántar an luach mar lipéad.',
      options_placeholder: 'value1:label1\nvalue2:label2\nvalue3:label3',
      regex: 'Slonn rialta',
      regex_tip: 'Sainmhínigh slonn rialta chun an t-ionchur a bhailíochtú.',
      regex_placeholder: '^[a-zA-Z0-9]+$',
      date_format: 'Formáid dáta',
      date_format_us: 'MM/dd/yyyy (m.sh. Stáit Aontaithe)',
      date_format_uk: 'dd/MM/yyyy (m.sh. an RA agus an Eoraip)',
      date_format_iso: 'yyyy-MM-dd (caighdeán idirnáisiúnta)',
      custom_date_format: 'Formáid dáta shaincheaptha',
      custom_date_format_placeholder:
        'Cuir isteach an fhormáid dáta shaincheaptha, m.sh. "MM-dd-yyyy"',
      custom_date_format_tip:
        'Féach doiciméid <a>date-fns</a> le haghaidh comharthaí formáidithe bailí.',
      input_length: 'Fad an ionchuir',
      value_range: 'Raon luachanna',
      min: 'Íosmhéid',
      max: 'Uasmhéid',
      default_value: 'Luach réamhshocraithe',
      checkbox_checked: 'Ticeáilte (True)',
      checkbox_unchecked: 'Gan ticeáil (False)',
      required: 'Riachtanach',
      required_description:
        "Nuair a bhíonn sé cumasaithe, ní mór d'úsáideoirí an réimse seo a líonadh. Murach sin, is roghnach é.",
      avatar_upload_description:
        'Uaslódálann úsáideoirí deiridh a n-abhatár le linn an chlárúcháin. Is é URL na híomhá uaslódáilte an luach a stóráiltear.',
    },
  },
};

export default Object.freeze(sign_in_exp);
