/* GetCertus addition (MPL-2.0, see GETCERTUS.md): sign-in experience phrases. */
const error = {
  general_required: 'Tá {{types, list(type: disjunction;)}} riachtanach',
  general_invalid: 'Tá an {{types, list(type: disjunction;)}} neamhbhailí',
  invalid_min_max_input: 'Ba chóir an luach a bheith idir {{minValue}} agus {{maxValue}}',
  invalid_min_max_length: 'Ba chóir fad an luacha a bheith idir {{minLength}} agus {{maxLength}}',
  username_required: 'Tá ainm úsáideora riachtanach',
  password_required: 'Tá pasfhocal riachtanach',
  username_exists: 'Tá an t-ainm úsáideora in úsáid cheana',
  username_should_not_start_with_number: 'Níor cheart d’ainm úsáideora tosú le huimhir',
  username_invalid_charset:
    'Ní cheadaítear in ainm úsáideora ach litreacha, uimhreacha nó fostríoca.',
  username_too_short: 'Caithfidh an t-ainm úsáideora a bheith {{min}} carachtar ar a laghad.',
  username_too_long: 'Ní féidir leis an ainm úsáideora a bheith níos faide ná {{max}} carachtar.',
  username_uppercase_not_allowed: 'Ní cheadaítear litreacha móra in ainmneacha úsáideora.',
  username_lowercase_not_allowed: 'Ní cheadaítear litreacha beaga in ainmneacha úsáideora.',
  username_numbers_not_allowed: 'Ní cheadaítear uimhreacha in ainmneacha úsáideora.',
  username_underscore_not_allowed: 'Ní cheadaítear fostríoca in ainmneacha úsáideora.',
  invalid_email: 'Tá an ríomhphost neamhbhailí',
  invalid_phone: 'Tá an uimhir ghutháin neamhbhailí',
  passwords_do_not_match: 'Níl na pasfhocail mar an gcéanna.',
  invalid_passcode: 'Tá an cód fíoraithe neamhbhailí.',
  device_code_required: 'Tá cód riachtanach.',
  invalid_device_code: 'Tá cód an ghléis neamhbhailí.',
  device_flow_aborted: 'Cuireadh isteach ar an iarratas síniú isteach.',
  invalid_connector_auth: 'Tá an t-údarú neamhbhailí',
  invalid_connector_request: 'Tá sonraí an nascóra neamhbhailí',
  unknown: 'Earráid anaithnid.',
  invalid_session: 'Níor aimsíodh an seisiún. Téigh siar agus sínigh isteach arís.',
  timeout: 'Chuaigh an t-iarratas thar am.',
  password_rejected: {
    too_short: 'Is é {{min}} an fad íosta.',
    too_long: 'Is é {{max}} an fad uasta.',
    character_types: 'Tá {{min}} chineál carachtar ar a laghad riachtanach.',
    unsupported_characters: 'Aimsíodh carachtar nach dtacaítear leis.',
    pwned: 'Seachain pasfhocail shimplí atá éasca le tomhas.',
    restricted_found: 'Seachain an iomarca úsáide de {{list, list}}.',
    restricted: {
      repetition: 'charachtair athráite',
      sequence: 'charachtair as a chéile',
      user_info: 'd’fhaisnéis phearsanta',
      words: 'fhocail a bhaineann leis an táirge',
    },
  },
  sso_not_enabled: 'Níl sínithe isteach aonair cumasaithe don chuntas ríomhphoist seo.',
  invalid_link: 'Nasc neamhbhailí',
  invalid_link_description:
    'B’fhéidir go bhfuil do chomhartha aonúsáide imithe in éag nó nach bhfuil sé bailí a thuilleadh.',
  captcha_verification_failed: 'Theip ar fhíorú captcha.',
  send_verification_code_failed:
    'Theip ar sheoladh an chóid fíoraithe. Bain triail eile as ar ball.',
  send_verification_code_failed_use_password:
    'Theip ar sheoladh an chóid fíoraithe. Sínigh isteach le do phasfhocal ina ionad.',
  terms_acceptance_required: 'Caithfear glacadh leis na téarmaí',
  terms_acceptance_required_description:
    'Caithfidh tú aontú leis na téarmaí chun leanúint ar aghaidh.',
  something_went_wrong: 'Chuaigh rud éigin amú',
  account_suspended: 'Cuntas curtha ar fionraí',
  account_suspended_description:
    'Cuireadh an cuntas seo ar fionraí. Déan teagmháil leis an riarthóir chun cabhair a fháil.',
  access_denied: 'Diúltaíodh rochtain',
  application_access_denied:
    'Níl cead agat an feidhmchlár seo a rochtain.\nDéan teagmháil le do riarthóir chun cabhair a fháil.',
  feature_not_enabled:
    'Níl cead agat an ghné seo a rochtain. Déan teagmháil le do riarthóir chun cabhair a fháil.',
};

export default Object.freeze(error);
