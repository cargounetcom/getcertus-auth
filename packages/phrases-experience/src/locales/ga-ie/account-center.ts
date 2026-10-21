/* eslint-disable max-lines -- Locale catalog mirrors the complete Account Center phrase schema. */
/* GetCertus addition (MPL-2.0, see GETCERTUS.md): sign-in experience phrases. */
const account_center = {
  home: {
    title: 'Níor aimsíodh an leathanach',
    description: 'Níl an leathanach seo ar fáil.',
  },
  page: {
    title: 'Cuntas',
    security_title: 'Slándáil',
    security_description: 'Athraigh socruithe do chuntais anseo chun é a choinneáil slán.',
    profile_title: 'Faisnéis phearsanta',
    profile_description: 'Athraigh d’fhaisnéis phearsanta anseo.',
    sidebar_personal_info: 'Faisnéis phearsanta',
    sidebar_security: 'Slándáil',
    sidebar_sessions: 'Seisiúin',
    support: 'Tacaíocht',
    user_menu: 'Roghchlár úsáideora',
    sign_out: 'Sínigh amach',
  },
  verification: {
    title: 'Fíorú slándála',
    description:
      'Fíoraigh gur tusa atá ann chun do chuntas a chosaint. Roghnaigh modh chun d’aitheantas a fhíorú.',
    error_send_failed: 'Theip ar sheoladh an chóid fíoraithe. Bain triail eile as ar ball.',
    error_invalid_code: 'Tá an cód fíoraithe neamhbhailí nó imithe in éag.',
    error_verify_failed: 'Theip ar an bhfíorú. Cuir isteach an cód arís.',
    verification_required: 'Chuaigh an fíorú in éag. Fíoraigh d’aitheantas arís.',
    try_another_method: 'Bain triail as modh fíoraithe eile',
    no_available_methods_title: 'Níl aon mhodh fíoraithe ar fáil',
    no_available_methods_description:
      'Níl aon mhodh fíoraithe socraithe agat. Cuir pasfhocal, ríomhphost nó uimhir ghutháin le do chuntas ar dtús.',
  },
  password_verification: {
    title: 'Fíoraigh an pasfhocal',
    description:
      'Fíoraigh gur tusa atá ann chun do chuntas a chosaint. Cuir isteach do phasfhocal.',
    error_failed: 'Pasfhocal mícheart. Seiceáil an méid a chuir tú isteach.',
  },
  verification_method: {
    password: {
      name: 'Pasfhocal',
      description: 'Fíoraigh do phasfhocal',
    },
    email: {
      name: 'Cód fíoraithe ríomhphoist',
      description: 'Seol cód fíoraithe chuig do ríomhphost',
    },
    phone: {
      name: 'Cód fíoraithe gutháin',
      description: 'Seol cód fíoraithe chuig d’uimhir ghutháin',
    },
  },
  email: {
    title: 'Nasc ríomhphost',
    description: 'Nasc do ríomhphost chun síniú isteach nó chun do chuntas a aisghabháil.',
    verification_title: 'Cuir isteach an cód fíoraithe ríomhphoist',
    verification_description: 'Seoladh an cód fíoraithe chuig do ríomhphost {{email_address}}.',
    success: 'Nascadh an príomhríomhphost.',
    verification_required: 'Chuaigh an fíorú in éag. Fíoraigh d’aitheantas arís.',
  },
  phone: {
    title: 'Nasc uimhir ghutháin',
    description: 'Nasc d’uimhir ghutháin chun síniú isteach nó chun do chuntas a aisghabháil.',
    verification_title: 'Cuir isteach an cód fíoraithe SMS',
    verification_description: 'Seoladh an cód fíoraithe chuig d’fhón {{phone_number}}.',
    success: 'Nascadh an príomhfhón.',
    verification_required: 'Chuaigh an fíorú in éag. Fíoraigh d’aitheantas arís.',
  },
  username: {
    title: 'Socraigh ainm úsáideora',
    description: 'Ní cheadaítear in ainm úsáideora ach litreacha, uimhreacha agus fostríoca.',
    policy_description: '{{requirements}}',
    success: 'Nuashonraíodh an t-ainm úsáideora.',
  },
  security: {
    add: 'Cuir leis',
    change: 'Athraigh',
    remove: 'Bain',
    not_set: 'Gan socrú',
    social_sign_in: 'Síniú isteach sóisialta',
    social_not_linked: 'Gan nascadh',
    email_phone: 'Ríomhphost / Fón',
    email: 'Ríomhphost',
    phone: 'Fón',
    password: 'Pasfhocal',
    configured: 'Cumraithe',
    not_configured: 'Gan chumrú',
    two_step_verification: 'Fíorú dhá chéim',
    authenticator_app: 'Aip fíordheimhnithe',
    passkeys: 'Eochracha rochtana',
    backup_codes: 'Cóid chúltaca',
    email_verification_code: 'Cód fíoraithe ríomhphoist',
    phone_verification_code: 'Cód fíoraithe gutháin',
    passkeys_count_one: '{{count}} eochair rochtana',
    passkeys_count_two: '{{count}} eochair rochtana',
    passkeys_count_few: '{{count}} eochair rochtana',
    passkeys_count_many: '{{count}} n-eochair rochtana',
    passkeys_count_other: '{{count}} eochair rochtana',
    backup_codes_count_one: '{{count}} chód fágtha',
    backup_codes_count_two: '{{count}} chód fágtha',
    backup_codes_count_few: '{{count}} chód fágtha',
    backup_codes_count_many: '{{count}} gcód fágtha',
    backup_codes_count_other: '{{count}} cód fágtha',
    view: 'Féach',
    manage: 'Bainistigh',
    turn_on_2_step_verification_description:
      'Cuir sraith bhreise slándála leis. Iarrfar an dara céim fíoraithe ort agus tú ag síniú isteach.',
    turn_off_2_step_verification: 'Múch fíorú dhá chéim',
    turn_off_2_step_verification_description:
      'Má mhúchann tú fíorú dhá chéim, bainfear an chosaint bhreise de do chuntas ag síniú isteach. An bhfuil tú cinnte gur mian leat leanúint ar aghaidh?',
    disable_2_step_verification: 'Díchumasaigh',
    no_verification_method_warning:
      'Níor chuir tú an dara modh fíoraithe leis. Cuir ceann amháin ar a laghad leis chun fíorú dhá chéim a chumasú ag síniú isteach.',
    passkey_sign_in_prompt: 'Spreag socrú eochrach rochtana',
    passkey_sign_in_prompt_description:
      'Nuair atá sé seo ar siúl, iarrfar ort eochair rochtana a shocrú chun síniú isteach níos tapúla agus níos sláine.',
    account_removal: 'Scriosadh cuntais',
    delete_your_account: 'Scrios do chuntas',
    delete_account: 'Scrios an cuntas',
    remove_username_confirmation_title: 'Bain an t-ainm úsáideora',
    remove_username_confirmation_description:
      'Nuair a bhainfear é, ní bheidh tú in ann síniú isteach leis an ainm úsáideora seo a thuilleadh. An bhfuil tú cinnte gur mian leat leanúint ar aghaidh?',
    remove_email_confirmation_title: 'Bain an seoladh ríomhphoist',
    remove_email_confirmation_description:
      'Nuair a bhainfear é, ní bheidh tú in ann síniú isteach leis an seoladh ríomhphoist seo a thuilleadh. An bhfuil tú cinnte gur mian leat leanúint ar aghaidh?',
    remove_phone_confirmation_title: 'Bain an uimhir ghutháin',
    remove_phone_confirmation_description:
      'Nuair a bhainfear í, ní bheidh tú in ann síniú isteach leis an uimhir ghutháin seo a thuilleadh. An bhfuil tú cinnte gur mian leat leanúint ar aghaidh?',
    email_removed: 'Baineadh an seoladh ríomhphoist.',
    phone_removed: 'Baineadh an uimhir ghutháin.',
    username_removed: 'Baineadh an t-ainm úsáideora.',
    trusted_devices: {
      title: 'Gléasanna iontaofa MFA',
      current_device: 'An gléas reatha',
      expires_on: 'Rachaidh in éag ar {{date}}',
      unknown_location: 'Suíomh anaithnid',
      remove: 'Bain',
      removed: 'Baineadh an gléas iontaofa.',
      loading: 'Á lódáil...',
      empty: 'Níl aon ghléas iontaofa ann.',
      load_failed: 'Theip ar lódáil na ngléasanna iontaofa. Bain triail eile as.',
      retry: 'Bain triail eile as',
      remove_confirmation_title: 'Bain an gléas iontaofa?',
      remove_confirmation_description:
        'An chéad uair eile a shíneoidh tú isteach ar an ngléas seo, beidh ort MFA a chur i gcrích arís. Fanfaidh do sheisiún reatha gníomhach.',
    },
  },
  social: {
    linked: 'Nascadh {{connector}}.',
    removed: 'Baineadh {{connector}}.',
    not_enabled:
      'Níl an modh síniú isteach sóisialta seo cumasaithe. Déan teagmháil le do riarthóir chun cabhair a fháil.',
    remove_confirmation_title: 'Bain an cuntas sóisialta',
    remove_confirmation_description:
      'Má bhaineann tú {{connector}}, b’fhéidir nach mbeidh tú in ann síniú isteach leis go dtí go gcuirfidh tú leis arís é.',
  },
  password: {
    title: 'Socraigh pasfhocal',
    description: 'Cruthaigh pasfhocal nua chun do chuntas a chosaint.',
    success: 'Nuashonraíodh an pasfhocal.',
  },
  code_verification: {
    send: 'Seol cód fíoraithe',
    resend: 'Nár tháinig sé fós? <a>Seol an cód fíoraithe arís</a>',
    resend_countdown: 'Nár tháinig sé fós? Seol arís i gceann {{seconds}} s',
  },
  email_verification: {
    title: 'Fíoraigh do ríomhphost',
    prepare_description:
      'Fíoraigh gur tusa atá ann chun do chuntas a chosaint. Seol an cód fíoraithe chuig do ríomhphost.',
    email_label: 'Seoladh ríomhphoist',
    send: 'Seol cód fíoraithe',
    description:
      'Seoladh an cód fíoraithe chuig do ríomhphost {{email}}. Cuir isteach an cód chun leanúint ar aghaidh.',
    resend: 'Nár tháinig sé fós? <a>Seol an cód fíoraithe arís</a>',
    not_received: 'Nár tháinig sé fós?',
    resend_action: 'Seol an cód fíoraithe arís',
    resend_countdown: 'Nár tháinig sé fós? Seol arís i gceann {{seconds}} s',
    error_send_failed: 'Theip ar sheoladh an chóid fíoraithe. Bain triail eile as ar ball.',
    error_verify_failed: 'Theip ar an bhfíorú. Cuir isteach an cód arís.',
    error_invalid_code: 'Tá an cód fíoraithe neamhbhailí nó imithe in éag.',
  },
  phone_verification: {
    title: 'Fíoraigh d’fhón',
    prepare_description:
      'Fíoraigh gur tusa atá ann chun do chuntas a chosaint. Seol an cód fíoraithe chuig d’fhón.',
    phone_label: 'Uimhir ghutháin',
    send: 'Seol cód fíoraithe',
    description:
      'Seoladh an cód fíoraithe chuig d’fhón {{phone}}. Cuir isteach an cód chun leanúint ar aghaidh.',
    resend: 'Nár tháinig sé fós? <a>Seol an cód fíoraithe arís</a>',
    resend_countdown: 'Nár tháinig sé fós? Seol arís i gceann {{seconds}} s',
    error_send_failed: 'Theip ar sheoladh an chóid fíoraithe. Bain triail eile as ar ball.',
    error_verify_failed: 'Theip ar an bhfíorú. Cuir isteach an cód arís.',
    error_invalid_code: 'Tá an cód fíoraithe neamhbhailí nó imithe in éag.',
  },
  mfa: {
    totp_already_added:
      'Tá aip fíordheimhnithe curtha leis agat cheana. Bain an ceann atá ann ar dtús.',
    totp_not_enabled:
      'Níl cód aonúsáide ó aip fíordheimhnithe cumasaithe. Déan teagmháil le do riarthóir chun cabhair a fháil.',
    backup_code_already_added:
      'Tá cóid chúltaca ghníomhacha agat cheana. Úsáid nó bain iad sula ngineann tú cinn nua.',
    backup_code_not_enabled:
      'Níl cóid chúltaca cumasaithe. Déan teagmháil le do riarthóir chun cabhair a fháil.',
    backup_code_requires_other_mfa:
      'Ní mór modh MFA eile a shocrú ar dtús chun cóid chúltaca a úsáid.',
    passkey_not_enabled:
      'Níl eochair rochtana cumasaithe. Déan teagmháil le do riarthóir chun cabhair a fháil.',
    passkey_already_registered:
      'Tá an eochair rochtana seo cláraithe le do chuntas cheana. Úsáid fíordheimhneoir eile.',
  },
  update_success: {
    default: {
      title: 'Nuashonrú déanta',
      description: 'Sábháladh d’athruithe.',
    },
    email: {
      title: 'Nuashonraíodh an seoladh ríomhphoist!',
      description: 'Athraíodh seoladh ríomhphoist do chuntais.',
    },
    phone: {
      title: 'Nuashonraíodh an uimhir ghutháin!',
      description: 'Athraíodh uimhir ghutháin do chuntais.',
    },
    username: {
      title: 'Nuashonraíodh an t-ainm úsáideora!',
      description: 'Athraíodh ainm úsáideora do chuntais.',
    },
    password: {
      title: 'Nuashonraíodh an pasfhocal!',
      description: 'Athraíodh pasfhocal do chuntais.',
    },
    totp: {
      title: 'Cuireadh an aip fíordheimhnithe leis!',
      description: 'Nascadh d’aip fíordheimhnithe le do chuntas.',
    },
    totp_replaced: {
      title: 'Athchuireadh an aip fíordheimhnithe!',
      description: 'Athchuireadh d’aip fíordheimhnithe.',
    },
    backup_code: {
      title: 'Gineadh cóid chúltaca!',
      description: 'Sábháladh do chóid chúltaca. Coinnigh in áit shábháilte iad.',
    },
    passkey: {
      title: 'Cuireadh an eochair rochtana leis!',
      description: 'Nascadh d’eochair rochtana le do chuntas.',
    },
    social: {
      title: 'Nascadh an cuntas sóisialta!',
      description: 'Nascadh do chuntas sóisialta.',
    },
  },
  backup_code: {
    title: 'Cóid chúltaca',
    description:
      'Mura n-éiríonn le fíorú dhá chéim ar bhealaí eile, is féidir leat ceann de na cóid chúltaca seo a úsáid chun do chuntas a rochtain. Ní féidir gach cód a úsáid ach uair amháin.',
    copy_hint: 'Cóipeáil iad agus coinnigh in áit shábháilte iad.',
    generate_new_title: 'Gin cóid chúltaca nua',
    generate_new: 'Gin cóid chúltaca nua',
  },
  passkey: {
    title: 'Eochracha rochtana',
    added: 'Curtha leis: {{date}}',
    last_used: 'Úsáidte go deireanach: {{date}}',
    never_used: 'Riamh',
    unnamed: 'Eochair rochtana gan ainm',
    renamed: 'Athainmníodh an eochair rochtana.',
    deleted: 'Baineadh an eochair rochtana.',
    add_another_title: 'Cuir eochair rochtana eile leis',
    add_another_description:
      'Cláraigh d’eochair rochtana le bithmhéadracht an ghléis, eochracha slándála (m.sh. YubiKey) nó modhanna eile atá ar fáil.',
    add_passkey: 'Cuir eochair rochtana leis',
    delete_confirmation_title: 'Bain d’eochair rochtana',
    delete_confirmation_description:
      'Má bhaineann tú an eochair rochtana seo, ní bheidh tú in ann fíorú léi a thuilleadh.',
    rename_passkey: 'Athainmnigh an eochair rochtana',
    rename_description: 'Cuir isteach ainm nua don eochair rochtana seo.',
    name_this_passkey: 'Tabhair ainm d’eochair rochtana an ghléis seo',
    name_passkey_description:
      'D’fhíoraigh tú an gléas seo le haghaidh fíoraithe dhá chéim. Tabhair ainm dó ionas go n-aithneoidh tú é má tá níos mó ná eochair amháin agat.',
    name_input_label: 'Ainm',
  },
  sessions: {
    page_title: 'Seisiúin',
    page_description: 'Bainistigh do sheisiúin ghníomhacha agus aipeanna tríú páirtí údaraithe.',
    title: 'Seisiúin',
    current_session: 'An seisiún reatha',
    signed_in_at: 'Sínithe isteach {{date}}',
    revoke_session: 'Sínigh amach',
    revoke_session_title: 'Sínigh amach an seisiún',
    revoke_session_description:
      'Sínífear amach an seisiún seo agus cúlghairfear gach rochtain a bhaineann leis. An bhfuil tú cinnte gur mian leat leanúint ar aghaidh?',
    no_other_sessions: 'Níl aon seisiún gníomhach eile ann.',
    loading: 'Á lódáil...',
    third_party_apps_title: 'Aipeanna tríú páirtí',
    no_third_party_apps: 'Níl aon aip tríú páirtí údaraithe.',
    third_party_apps_load_failed: 'Theip ar lódáil na n-aipeanna tríú páirtí. Bain triail eile as.',
    granted_at: 'Údaraithe {{date}}',
    dynamic_app: 'Aip dhinimiciúil',
    client_id: 'Aitheantas cliaint: {{clientId}}',
    revoke_grant: 'Bain',
    revoke_grant_title: 'Bain rochtain na haipe tríú páirtí',
    revoke_grant_description:
      'Cúlghairfear an rochtain a tugadh don fheidhmchlár seo. D’fhéadfadh comharthaí rochtana a eisíodh roimhe seo fanacht bailí go dtí go rachaidh siad in éag. An bhfuil tú cinnte gur mian leat leanúint ar aghaidh?',
    revoke_grant_failed: 'Theip ar chúlghairm roinnt ceadanna. Bain triail eile as.',
  },
};

export default Object.freeze(account_center);
/* eslint-enable max-lines */
