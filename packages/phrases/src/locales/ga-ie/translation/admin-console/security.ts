/* GetCertus addition (MPL-2.0, see GETCERTUS.md): admin console phrases. */
const security = {
  page_title: 'Slándáil',
  title: 'Slándáil',
  subtitle: 'Cumraigh cosaint ardleibhéil ar ionsaithe sofaisticiúla.',
  tabs: {
    captcha: 'CAPTCHA',
    password_policy: 'Polasaí pasfhocal',
    blocklist: 'Liosta blocála',
    general: 'Ginearálta',
  },
  bot_protection: {
    title: 'Cosaint ar bhotaí',
    description:
      'Cumasaigh CAPTCHA le haghaidh clárú, síniú isteach agus aisghabháil pasfhocail chun bagairtí uathoibrithe a bhlocáil.',
    captcha: {
      title: 'CAPTCHA',
      placeholder: 'Roghnaigh soláthraí CAPTCHA agus socraigh an comhtháthú.',
      add: 'Cuir CAPTCHA leis',
    },
    settings: 'Socruithe',
    enable_captcha: 'Cumasaigh CAPTCHA',
    enable_captcha_description:
      'Cumasaigh fíorú CAPTCHA le haghaidh sreafaí clárúcháin, síniú isteach agus aisghabhála pasfhocail.',
    custom_ui_captcha_notice:
      'Tá Bring your UI in úsáid agat. Tá cumraíocht bhreise ag teastáil chun CAPTCHA a chumasú i do chomhéadan saincheaptha. <a>Féach ar an treoir socraithe</a>.',
  },
  create_captcha: {
    setup_captcha: 'Socraigh CAPTCHA',
  },
  captcha_providers: {
    recaptcha_enterprise: {
      name: 'reCAPTCHA Enterprise',
      description:
        'Réiteach CAPTCHA fiontair Google a sholáthraíonn braiteoireacht bagartha chun cinn agus anailís slándála mhionsonraithe chun do shuíomh gréasáin a chosaint ar chalaois.',
    },
    turnstile: {
      name: 'Cloudflare Turnstile',
      description:
        'Rogha chliste Cloudflare in ionad CAPTCHA a sholáthraíonn cosaint neamhshoiléir ar bhotaí agus eispéireas réidh gan dúcheisteanna amhairc.',
    },
    cap: {
      name: 'Cap',
      description:
        'CAPTCHA foinse oscailte proof-of-work, féin-óstáilte, gan dúcheisteanna amhairc ná seirbhísí tríú páirtí; oiriúnach do réigiúin nach féidir seirbhísí CAPTCHA eile a bhaint amach iontu.',
    },
  },
  captcha_details: {
    back_to_security: 'Ar ais chuig slándáil',
    page_title: 'Sonraí CAPTCHA',
    check_readme: 'Féach ar an README',
    options_change_captcha: 'Athraigh an soláthraí CAPTCHA',
    connection: 'Nasc',
    description: 'Cumraigh do naisc CAPTCHA.',
    site_key: 'Eochair an tsuímh',
    secret_key: 'Eochair rúnda',
    project_id: 'ID an tionscadail',
    domain: 'Fearann (roghnach)',
    domain_placeholder: 'www.google.com (réamhshocrú) nó recaptcha.net',
    recaptcha_key_id: 'ID eochrach reCAPTCHA',
    recaptcha_api_key: 'Eochair API an tionscadail',
    cap_endpoint: 'Críochphointe Cap',
    cap_endpoint_placeholder: 'https://cap.example.com',
    cap_endpoint_http_notice:
      "Úsáideann an críochphointe seo HTTP, nach bhfuil oiriúnach ach d'fhorbairt áitiúil. Blocálann brabhsálaithe iarratais HTTP ó leathanach síniú isteach HTTPS, agus sheolfaí an eochair rúnda gan chriptiú. Úsáid HTTPS i dtáirgeacht.",
    deletion_description: 'An bhfuil tú cinnte gur mian leat an soláthraí CAPTCHA seo a scriosadh?',
    captcha_deleted: 'Scriosadh an soláthraí CAPTCHA',
    setup_captcha: 'Socraigh CAPTCHA',
    mode: 'Mód fíoraithe',
    mode_invisible: 'Dofheicthe',
    mode_checkbox: 'Ticbhosca',
    mode_notice:
      "Sainmhínítear an mód fíoraithe i socruithe d'eochrach reCAPTCHA in Google Cloud Console. Má athraíonn tú an mód anseo, tá cineál eochrach comhoiriúnach ag teastáil.",
    score_threshold: 'Tairseach scóir',
    score_threshold_description:
      'Diúltaítear do scóir faoin tairseach. Ceadaíonn 0.0 gach rud, ní cheadaíonn 1.0 ach scóir fhoirfe. Is é 0.5 an réamhshocrú.',
    score_threshold_error: 'Caithfidh an tairseach scóir a bheith idir 0 agus 1.',
  },
  password_policy: {
    password_requirements: 'Riachtanais phasfhocail',
    password_requirements_description:
      'Neartaigh riachtanais phasfhocail chun cosaint a fháil ar credential stuffing agus ar ionsaithe ar phasfhocail laga. ',
    minimum_length: 'Fad íosta',
    minimum_length_description: 'Molann NIST <a>8 gcarachtar ar a laghad</a> do tháirgí gréasáin.',
    minimum_length_error:
      'Caithfidh an fad íosta a bheith idir {{min}} agus {{max}} (san áireamh).',
    minimum_required_char_types: 'Líon íosta na gcineálacha carachtar',
    minimum_required_char_types_description:
      'Cineálacha carachtar: ceannlitreacha (A-Z), litreacha beaga (a-z), uimhreacha (0-9) agus siombailí speisialta ({{symbols}}).',
    password_rejection: 'Diúltú pasfhocal',
    compromised_passwords: 'Diúltaigh do phasfhocail atá i mbaol',
    breached_passwords: 'Pasfhocail sceite',
    breached_passwords_description:
      'Diúltaigh do phasfhocail a aimsíodh roimhe seo i mbunachair sonraí sceite.',
    restricted_phrases: 'Srian a chur ar fhrásaí lag-shlándála',
    restricted_phrases_tooltip:
      'Ba cheart don phasfhocal na frásaí seo a sheachaint mura gcuirtear 3 charachtar bhreise nó níos mó leo.',
    repetitive_or_sequential_characters: 'Carachtair athchleachtacha nó seicheamhacha',
    repetitive_or_sequential_characters_description: 'M.sh. "AAAA", "1234" agus "abcd".',
    user_information: 'Faisnéis an úsáideora',
    user_information_description:
      'M.sh. seoladh ríomhphoist, uimhir theileafóin, ainm úsáideora, srl.',
    custom_words: 'Focail shaincheaptha',
    custom_words_description:
      'Cuir focail a bhaineann leis an gcomhthéacs leis, gan aird ar chás na litreacha, focal amháin in aghaidh na líne.',
    custom_words_placeholder: 'Ainm do sheirbhíse, ainm do chomhlachta, srl.',
    password_expiration: 'Dul in éag an phasfhocail',
    password_expiration_description:
      'Éiligh ar úsáideoirí a bpasfhocal a athshocrú tar éis líon socraithe laethanta. Ní bhaineann sé seo le húsáideoirí a shíníonn isteach trí SSO nó eochair rochtana.',
    enable_password_expiration: 'Cumasaigh dul in éag an phasfhocail',
    enable_password_expiration_description:
      "Éiligh ar úsáideoirí a bpasfhocal a athshocrú go tréimhsiúil. D'úsáideoirí atá ann cheana gan dáta athraithe pasfhocail taifeadta, ríomhfar ón dáta a gcumasaítear an polasaí seo.",
    enable_password_expiration_tip:
      'Ní féidir dul in éag an phasfhocail a chumasú go dtí go gcumraíonn tú modh amháin ar a laghad do phasfhocal dearmadta le nascóir bailí san eispéireas síniú isteach.',
    expiration_period: 'Tréimhse bhailíochta an phasfhocail (laethanta)',
    expiration_period_description:
      'Líon na laethanta a fhanann pasfhocal bailí sula dtéann sé in éag.',
    expiration_period_error:
      'Caithfidh tréimhse bhailíochta an phasfhocail a bheith idir {{min}} agus {{max}} lá.',
    password_expiration_recovery_reminder:
      "B'fhéidir nach bhfuil seoladh ríomhphoist nó uimhir theileafóin ag roinnt úsáideoirí chun cód aisghabhála a fháil, mar sin ní bheidh siad in ann pasfhocal atá imithe in éag a athshocrú. Éiligh ríomhphost nó uimhir theileafóin ag clárú ionas gur féidir le gach úsáideoir a bpasfhocal a aisghabháil.",
  },
  verification_code_policy: {
    card_title: 'Cód fíoraithe',
    card_description:
      'Cumraigh fad bailíochta agus uaslíon na n-iarrachtaí do chóid fíoraithe a úsáidtear i sreafaí síniú isteach, clárúcháin agus athshocraithe pasfhocail.',
    enable: {
      title: 'Saincheap socruithe an chóid fhíoraithe',
      description:
        'Ceadaigh saincheapadh ar fhad bailíochta agus ar uaslíon na n-iarrachtaí do chóid fíoraithe.',
    },
    expiration_duration: {
      title: 'Fad bailíochta (soicindí)',
      description: 'An fad i soicindí a fhanann cód fíoraithe bailí tar éis é a sheoladh.',
      error_message: 'Caithfidh an fad bailíochta a bheith idir 60 agus 3600 soicind.',
    },
    max_retry_attempts: {
      title: 'Uaslíon iarrachtaí',
      description:
        'Uaslíon na n-iarrachtaí fíoraithe teipthe a cheadaítear sula gcuirtear an cód ó bhail.',
      error_message: 'Caithfidh uaslíon na n-iarrachtaí a bheith idir 1 agus 100.',
    },
  },
  sentinel_policy: {
    card_title: 'Glasáil aitheantóra',
    card_description:
      'Tá glasáil ar fáil do gach úsáideoir leis na socruithe réamhshocraithe, ach is féidir leat í a shaincheapadh le haghaidh níos mó smachta.\n\nGlasáil aitheantóir go sealadach tar éis roinnt iarrachtaí fíordheimhnithe teipthe (m.sh. pasfhocal nó cód fíoraithe mícheart arís agus arís eile) chun rochtain brute force a chosc.',
    enable_sentinel_policy: {
      title: 'Saincheap an ghlasáil',
      description:
        'Ceadaigh saincheapadh ar uaslíon na n-iarrachtaí logála isteach teipthe roimh ghlasáil, ar fhad na glasála agus ar dhíghlasáil láimhe láithreach.',
    },
    max_attempts: {
      title: 'Uaslíon iarrachtaí teipthe',
      description:
        "Glasáil aitheantóir go sealadach nuair a shroichtear uaslíon na n-iarrachtaí logála isteach teipthe laistigh d'uair an chloig.",
      error_message: 'Caithfidh uaslíon na n-iarrachtaí teipthe a bheith níos mó ná 0.',
    },
    lockout_duration: {
      title: 'Fad na glasála (nóiméid)',
      description:
        'Blocáil sínithe isteach ar feadh tréimhse tar éis teorainn na n-iarrachtaí teipthe a shárú.',
      error_message: 'Caithfidh fad na glasála a bheith nóiméad amháin ar a laghad.',
    },
    manual_unlock: {
      title: 'Díghlasáil láimhe',
      description:
        'Díghlasáil úsáideoirí láithreach trína n-aitheantas a dheimhniú agus a n-aitheantóir a chur isteach.',
      unblock_by_identifiers: 'Díbhlocáil de réir aitheantóra',
      modal_description_1:
        'Glasáladh aitheantóir go sealadach de bharr roinnt iarrachtaí teipthe síniú isteach/clárú. Ar mhaithe le slándáil, aischuirfear an rochtain go huathoibríoch tar éis fhad na glasála.',
      modal_description_2:
        ' Ná díghlasáil de láimh ach amháin má tá aitheantas an úsáideora deimhnithe agat agus má chinntigh tú nach raibh aon iarrachtaí rochtana neamhúdaraithe ann.',
      placeholder:
        'Cuir isteach aitheantóirí (seoladh ríomhphoist / uimhir theileafóin / ainm úsáideora)',
      confirm_button_text: 'Díghlasáil anois',
      success_toast: 'Díghlasáladh',
      duplicate_identifier_error: 'Tá an t-aitheantóir curtha leis cheana',
      empty_identifier_error: 'Cuir isteach aitheantóir amháin ar a laghad',
    },
  },
  blocklist: {
    card_title: 'Liosta blocála ríomhphoist',
    card_description:
      'Bíodh smacht agat ar do bhonn úsáideoirí trí sheoltaí ríomhphoist ardriosca nó nach dteastaíonn a bhlocáil.',
    custom_email_allowlist: {
      title: 'Ceadaigh seoltaí ríomhphoist saincheaptha',
      description:
        'Cuir rialacha leis chun fearainn ríomhphoist, seoltaí ríomhphoist nó patrúin saoróige áirithe amháin a cheadú do chláruithe nua agus do ríomhphoist nasctha nua. Samplaí: bar@example.com, @example.com, foo*@example.com, *@example.com. Caitear leis na fearainn gmail.com agus googlemail.com mar an gcéanna, agus déantar neamhaird de phoncanna sa chuid áitiúil, mar sin meaitseálann foo.bar@gmail.com le foobar@googlemail.com.',
      placeholder: 'Cuir isteach seoladh ríomhphoist, fearann nó patrún saoróige',
      duplicate_error:
        'Tá an seoladh ríomhphoist, an fearann nó an patrún saoróige curtha leis cheana',
      invalid_format_error:
        'Caithfidh sé a bheith ina sheoladh ríomhphoist bailí (bar@example.com), ina fhearann (@example.com) nó ina phatrún saoróige (foo*@example.com, *@example.com)',
      warnings: {
        identical_entries:
          "Tá roinnt iontrálacha sa liosta ceadaithe sna rialacha blocála freisin. D'fhéadfaí ríomhphoist mheaitseálacha a bhlocáil fós.",
        blocked_exact_email:
          "Meaitseálann roinnt ríomhphost cruinn sa liosta ceadaithe le riail bhlocála. D'fhéadfaí ríomhphoist mheaitseálacha a bhlocáil fós.",
        blocked_subaddressing:
          'Tá comhartha móide (+) i roinnt iontrálacha sa liosta ceadaithe, ach tá fo-sheoltaí ríomhphoist blocáilte.',
        effectively_unusable:
          "Bunaithe ar na seiceálacha seo, b'fhéidir nach ligfidh an liosta ceadaithe reatha d'aon ríomhphost nua dul tríd.",
      },
    },
    disposable_email: {
      title: 'Blocáil seoltaí ríomhphoist indiúscartha',
      description:
        "Cumasaigh chun diúltú d'aon iarracht chlárúcháin le seoladh ríomhphoist indiúscartha, rud a chuireann cosc ar thurscar agus a fheabhsaíonn cáilíocht na n-úsáideoirí.",
    },
    email_subaddressing: {
      title: 'Blocáil fo-sheoltaí ríomhphoist',
      description:
        "Cumasaigh chun diúltú d'iarrachtaí clárúcháin le fo-sheoltaí ríomhphoist ina bhfuil comhartha móide (+) agus carachtair bhreise (m.sh. user+alias@foo.com).",
    },
    custom_email_address: {
      title: 'Blocáil seoltaí ríomhphoist saincheaptha',
      description:
        'Cuir rialacha leis chun fearainn ríomhphoist, seoltaí ríomhphoist nó patrúin saoróige áirithe a chosc ó chlárú nó ó nascadh tríd an gcomhéadan. Samplaí: bar@example.com, @example.com, foo*@example.com, *@example.com. Caitear leis na fearainn gmail.com agus googlemail.com mar an gcéanna, agus déantar neamhaird de phoncanna sa chuid áitiúil, mar sin meaitseálann foo.bar@gmail.com le foobar@googlemail.com.',
      placeholder: 'Cuir isteach seoladh ríomhphoist, fearann nó patrún saoróige',
      duplicate_error:
        'Tá an seoladh ríomhphoist, an fearann nó an patrún saoróige curtha leis cheana',
      invalid_format_error:
        'Caithfidh sé a bheith ina sheoladh ríomhphoist bailí (bar@example.com), ina fhearann (@example.com) nó ina phatrún saoróige (foo*@example.com, *@example.com)',
    },
  },
};

export default Object.freeze(security);
