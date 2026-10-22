/* GetCertus addition (MPL-2.0, see GETCERTUS.md): admin console phrases. */
const user_details = {
  page_title: 'Sonraí an úsáideora',
  back_to_users: 'Ar ais chuig bainistíocht úsáideoirí',
  created_title: 'Cruthaíodh an t-úsáideoir seo',
  created_guide: 'Seo an fhaisnéis chun cabhrú leis an úsáideoir síniú isteach.',
  created_email: 'Seoladh ríomhphoist:',
  created_phone: 'Uimhir theileafóin:',
  created_username: 'Ainm úsáideora:',
  created_password: 'Pasfhocal:',
  menu_delete: 'Scrios',
  delete_description: 'Ní féidir an gníomh seo a chealú. Scriosfar an t-úsáideoir go buan.',
  deleted: 'Scriosadh an t-úsáideoir',
  reset_password: {
    reset_title: 'An bhfuil tú cinnte gur mian leat an pasfhocal a athshocrú?',
    generate_title: 'An bhfuil tú cinnte gur mian leat pasfhocal a ghiniúint?',
    content: 'Ní féidir an gníomh seo a chealú. Nuashonrófar faisnéis síniú isteach an úsáideora.',
    reset_complete: 'Athshocraíodh an pasfhocal',
    generate_complete: 'Gineadh an pasfhocal',
    new_password: 'Pasfhocal nua:',
    password: 'Pasfhocal:',
  },
  expire_password: {
    button: 'Cuir in éag',
    title: 'An bhfuil tú cinnte gur mian leat an pasfhocal seo a chur in éag?',
    content:
      'Beidh ar an úsáideoir a phasfhocal a athshocrú ag an gcéad síniú isteach eile. Ní féidir an gníomh seo a chealú.',
    success: 'Marcáladh pasfhocal an úsáideora mar imithe in éag.',
    not_enabled_tooltip: 'Níl an polasaí maidir le dul in éag pasfhocal cumasaithe.',
  },
  tab_settings: 'Socruithe',
  tab_roles: 'Róil',
  tab_logs: 'Logaí úsáideora',
  tab_organizations: 'Eagraíochtaí',
  authentication: 'Fíordheimhniú',
  authentication_description:
    'Tá próifíl ag gach úsáideoir ina bhfuil a fhaisnéis uile: bunsonraí, aitheantais shóisialta agus sonraí saincheaptha.',
  user_profile: 'Sonraí úsáideora',
  field_email: 'Seoladh ríomhphoist',
  field_phone: 'Uimhir theileafóin',
  field_username: 'Ainm úsáideora',
  field_password: 'Pasfhocal',
  field_name: 'Ainm',
  field_avatar: 'URL íomhá an abhatáir',
  field_avatar_placeholder: 'https://your.cdn.domain/avatar.png',
  field_custom_data: 'Sonraí saincheaptha',
  field_custom_data_tip:
    'Faisnéis bhreise faoin úsáideoir nach bhfuil sna hairíonna réamhshainithe, mar shampla an dath agus an teanga is fearr leis.',
  field_profile: 'Próifíl',
  field_profile_tip:
    "Éilimh chaighdeánacha bhreise OpenID Connect nach bhfuil in airíonna an úsáideora. Bainfear gach airí anaithnid. Féach ar an <a>tagairt d'airíonna próifíle</a> le haghaidh tuilleadh eolais.",
  field_connectors: 'Naisc shóisialta',
  field_sso_connectors: 'Naisc fiontair',
  custom_data_invalid: 'Caithfidh na sonraí saincheaptha a bheith ina réad JSON bailí',
  profile_invalid: 'Caithfidh an phróifíl a bheith ina réad JSON bailí',
  password_already_set: 'Tá pasfhocal socraithe cheana',
  no_password_set: 'Níl aon phasfhocal socraithe',
  connectors: {
    connectors: 'Nascóirí',
    user_id: 'ID úsáideora',
    remove: 'Bain',
    connected: 'Tá an t-úsáideoir seo nasctha le roinnt nascóirí sóisialta.',
    not_connected: 'Níl an t-úsáideoir nasctha le haon nascóir sóisialta',
    deletion_confirmation:
      'Tá tú ag baint an aitheantais <name/> atá ann cheana. An bhfuil tú cinnte gur mian leat leanúint ar aghaidh?',
  },
  sso_connectors: {
    connectors: 'Nascóirí',
    enterprise_id: 'ID fiontair',
    connected:
      'Tá an t-úsáideoir seo nasctha le roinnt soláthraithe aitheantais fiontair le haghaidh aonsíniú isteach.',
    not_connected:
      'Níl an t-úsáideoir nasctha le haon soláthraí aitheantais fiontair le haghaidh aonsíniú isteach.',
  },
  mfa: {
    field_name: 'Fíordheimhniú ilfhachtóireach',
    field_description: 'Tá fachtóirí fíoraithe dhá chéim cumasaithe ag an úsáideoir seo.',
    name_column: 'Ilfhachtóir',
    field_description_empty:
      'Níl aon fhachtóirí fíoraithe dhá chéim cumasaithe ag an úsáideoir seo.',
    deletion_confirmation:
      'Tá tú ag baint an <name/> atá ann cheana don fhíorú dhá chéim. An bhfuil tú cinnte gur mian leat leanúint ar aghaidh?',
  },
  passkey: {
    field_name: 'Eochracha rochtana',
    field_description_empty:
      'Níl síniú isteach le heochair rochtana cumasaithe ag an úsáideoir seo.',
    deletion_confirmation:
      'Tá tú ag baint an <name/> atá ann cheana le haghaidh síniú isteach le heochair rochtana. An bhfuil tú cinnte gur mian leat leanúint ar aghaidh?',
  },
  suspended: 'Ar fionraí',
  suspend_user: 'Cuir an t-úsáideoir ar fionraí',
  suspend_user_reminder:
    "An bhfuil tú cinnte gur mian leat an t-úsáideoir seo a chur ar fionraí? Ní bheidh sé in ann síniú isteach ar d'fheidhmchlár ná comhartha rochtana nua a fháil nuair a rachaidh an ceann reatha in éag. Ina theannta sin, teipfidh ar gach iarratas API ón úsáideoir seo.",
  suspend_action: 'Cuir ar fionraí',
  user_suspended: 'Cuireadh an t-úsáideoir ar fionraí.',
  reactivate_user: 'Athghníomhachtaigh an t-úsáideoir',
  reactivate_user_reminder:
    'An bhfuil tú cinnte gur mian leat an t-úsáideoir seo a athghníomhachtú? Ceadófar iarrachtaí síniú isteach an úsáideora seo arís.',
  reactivate_action: 'Athghníomhachtaigh',
  user_reactivated: 'Athghníomhachtaíodh an t-úsáideoir.',
  roles: {
    name_column: 'Ról úsáideora',
    description_column: 'Cur síos',
    assign_button: 'Sann róil',
    delete_description:
      'Bainfidh an gníomh seo an ról ón úsáideoir seo. Beidh an ról féin ann fós, ach ní bheidh sé nasctha leis an úsáideoir seo a thuilleadh.',
    deleted: 'Baineadh {{name}} ón úsáideoir seo.',
    assign_title: 'Sann róil do {{name}}',
    assign_subtitle:
      'Aimsigh róil úsáideora oiriúnacha trí chuardach de réir ainm, cur síos nó ID róil.',
    assign_role_field: 'Sann róil',
    role_search_placeholder: 'Cuardaigh de réir ainm róil',
    added_text: '{{value, number}} curtha leis',
    assigned_user_count: '{{value, number}} úsáideoir',
    confirm_assign: 'Sann róil',
    role_assigned: 'Sannadh na róil',
    search: 'Cuardaigh de réir ainm róil, cur síos nó ID',
    empty: 'Níl aon ról ar fáil',
  },
  warning_no_sign_in_identifier:
    'Ní mór aitheantóir síniú isteach amháin ar a laghad (ainm úsáideora, ríomhphost, uimhir theileafóin nó cuntas sóisialta) a bheith ag an úsáideoir chun síniú isteach. An bhfuil tú cinnte gur mian leat leanúint ar aghaidh?',
  personal_access_tokens: {
    title: 'Comhartha rochtana pearsanta',
    title_other: 'Comharthaí rochtana pearsanta',
    title_short: 'comhartha',
    empty: 'Níl aon chomharthaí rochtana pearsanta ag an úsáideoir.',
    create: 'Cruthaigh comhartha nua',
    tip: "Tugann comharthaí rochtana pearsanta (PAT) bealach slán d'úsáideoirí comharthaí rochtana a fháil gan a ndintiúir ná síniú isteach idirghníomhach a úsáid. Úsáideach do CI/CD, do scripteanna nó d'fheidhmchláir a dteastaíonn rochtain ríomhchláraithe ar acmhainní uathu.",
    value: 'Luach',
    created_at: 'Cruthaithe',
    expires_at: 'Rachaidh in éag',
    never: 'Riamh',
    create_new_token: 'Cruthaigh comhartha nua',
    delete_confirmation:
      'Ní féidir an gníomh seo a chealú. An bhfuil tú cinnte gur mian leat an comhartha seo a scriosadh?',
    expired: 'Imithe in éag',
    expired_tooltip: 'Chuaigh an comhartha seo in éag ar {{date}}.',
    create_modal: {
      title: 'Cruthaigh comhartha rochtana pearsanta',
      expiration: 'Dul in éag',
      expiration_description: 'Rachaidh an comhartha in éag ar {{date}}.',
      expiration_description_never:
        'Ní rachaidh an comhartha in éag riamh. Molaimid dáta éaga a shocrú le haghaidh slándála níos fearr.',
      days: '{{count}} lá',
      days_other: '{{count}} lá',
      created: 'Cruthaíodh an comhartha {{name}}.',
    },
    edit_modal: {
      title: 'Cuir an comhartha rochtana pearsanta in eagar',
      edited: 'Cuireadh an comhartha {{name}} in eagar.',
    },
  },
  sessions: {
    title: 'Seisiúin',
    description:
      "Bainistigh seisiúin a choinníonn freastalaí údaraithe GetCertus. Má chúlghairtear seisiún GetCertus anseo, ní thabharfar toiliú uathoibríoch d'iarratais údaraithe amach anseo.",
    field_name: 'Seisiúin',
    multiple_signed_in:
      'Tá an t-úsáideoir seo sínithe isteach ar roinnt gléasanna nó brabhsálaithe.',
    not_found:
      'Níor aimsíodh aon seisiún gníomhach GetCertus. Níl an t-úsáideoir sínithe isteach ar aon ghléas faoi láthair.',
    name_column: 'Ainm',
    session_id_column: 'ID seisiúin',
    location_column: 'Suíomh',
    browser_on_os: '{{browser}} ar {{os}}',
    user: 'Úsáideoir',
    applications: 'Feidhmchláir',
    signed_in_at: 'Sínithe isteach go deireanach',
    ip: 'IP',
    browser_name: 'Brabhsálaí',
    os_name: 'Córas oibriúcháin',
    device_model: 'Samhail ghléis',
    revoke_session: 'Cúlghair an seisiún',
    revoke_session_confirmation:
      'Má bhaineann tú an seisiún seo, beidh ar úsáideoirí fíordheimhniú a dhéanamh arís.',
  },
  third_party_apps: {
    title: 'Feidhmchláir tríú páirtí',
    description:
      'Úsáid GetCertus mar sholáthraí aitheantais chun feidhmchláir tríú páirtí a údarú. Féach ar na feidhmchláir ar thug an t-úsáideoir seo rochtain dóibh agus bainistigh iad.',
    field_name: 'Feidhmchláir tríú páirtí údaraithe',
    multiple_authorized:
      'Tá roinnt feidhmchlár agus seirbhísí tríú páirtí údaraithe ag an úsáideoir seo.',
    not_authorized:
      'Níl aon fheidhmchlár ná seirbhís tríú páirtí údaraithe ag an úsáideoir seo fós.',
    name_column: 'Ainm',
    app_id_column: 'ID an fheidhmchláir',
    access_created_at_column: 'Rochtain cruthaithe',
    revoke_access_title: 'Cúlghair an rochtain?',
    revoke_access_description:
      "Cúlghairfidh sé seo rochtain an fheidhmchláir ar chuntas an úsáideora ar gach gléas. Ní mór don úsáideoir údarú arís chun an rochtain a athbhunú. D'fhéadfadh comharthaí rochtana a eisíodh cheana fanacht bailí go dtí go rachaidh siad in éag.",
  },
  connections: {
    title: 'Nasc',
    description:
      'Nascann an t-úsáideoir cuntais tríú páirtí le haghaidh síniú isteach sóisialta, SSO fiontair nó rochtain ar acmhainní.',
    token_status_column: 'Stádas an chomhartha',
    token_status: {
      active: 'Gníomhach',
      expired: 'Imithe in éag',
      inactive: 'Neamhghníomhach',
      not_applicable: 'Ní bhaineann',
      available: 'Ar fáil',
      not_available: 'Níl ar fáil',
    },
  },
};

export default Object.freeze(user_details);
