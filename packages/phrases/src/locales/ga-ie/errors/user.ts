/* GetCertus addition (MPL-2.0, see GETCERTUS.md): admin console phrases. */
const user = {
  id_already_in_use: 'Tá an t-aitheantas úsáideora seo in úsáid cheana.',
  username_already_in_use: 'Tá an t-ainm úsáideora seo in úsáid cheana.',
  username_starts_with_number: 'Ní féidir le hainm úsáideora tosú le huimhir.',
  username_invalid_charset_hard:
    'Ní féidir ach litreacha, uimhreacha agus fostríocanna a bheith in ainm úsáideora.',
  username_too_short: 'Tá an t-ainm úsáideora róghearr.',
  username_too_long: 'Tá an t-ainm úsáideora rófhada.',
  username_uppercase_not_allowed: 'Ní féidir ceannlitreacha a bheith in ainm úsáideora.',
  username_lowercase_not_allowed: 'Ní féidir litreacha beaga a bheith in ainm úsáideora.',
  username_numbers_not_allowed: 'Ní féidir uimhreacha a bheith in ainm úsáideora.',
  username_underscore_not_allowed: 'Ní féidir fostríocanna a bheith in ainm úsáideora.',
  email_already_in_use: 'Tá an ríomhphost seo ceangailte le cuntas atá ann cheana.',
  phone_already_in_use: 'Tá an uimhir ghutháin seo ceangailte le cuntas atá ann cheana.',
  invalid_email: 'Seoladh ríomhphoist neamhbhailí.',
  invalid_phone: 'Uimhir ghutháin neamhbhailí.',
  email_not_exist: 'Níor cláraíodh an seoladh ríomhphoist fós.',
  phone_not_exist: 'Níor cláraíodh an uimhir ghutháin fós.',
  identity_not_exist: 'Níor cláraíodh an cuntas sóisialta fós.',
  sso_identity_not_exist: 'Níor cláraíodh an cuntas enterprise SSO fós.',
  identity_already_in_use: 'Tá an cuntas sóisialta ceangailte le cuntas atá ann cheana.',
  social_account_exists_in_profile: 'Tá an cuntas sóisialta seo ceangailte agat cheana.',
  cannot_delete_self: 'Ní féidir leat tú féin a scriosadh.',
  sign_up_method_not_enabled: 'Níl an modh clárúcháin seo cumasaithe.',
  sign_in_method_not_enabled: 'Níl an modh sínithe isteach seo cumasaithe.',
  same_password: 'Ní féidir leis an bpasfhocal nua a bheith mar an gcéanna leis an seanphasfhocal.',
  password_required_in_profile: 'Ní mór duit pasfhocal a shocrú sula síníonn tú isteach.',
  new_password_required_in_profile: 'Ní mór duit pasfhocal nua a shocrú.',
  password_exists_in_profile: 'Tá pasfhocal i do phróifíl cheana.',
  username_required_in_profile: 'Ní mór duit ainm úsáideora a shocrú sula síníonn tú isteach.',
  username_exists_in_profile: 'Tá ainm úsáideora i do phróifíl cheana.',
  email_required_in_profile: 'Ní mór duit seoladh ríomhphoist a chur leis sula síníonn tú isteach.',
  email_exists_in_profile: 'Tá seoladh ríomhphoist ceangailte le do phróifíl cheana.',
  phone_required_in_profile: 'Ní mór duit uimhir ghutháin a chur leis sula síníonn tú isteach.',
  phone_exists_in_profile: 'Tá uimhir ghutháin ceangailte le do phróifíl cheana.',
  email_or_phone_required_in_profile:
    'Ní mór duit seoladh ríomhphoist nó uimhir ghutháin a chur leis sula síníonn tú isteach.',
  suspended: 'Tá an cuntas seo ar fionraí.',
  user_not_exist: 'Níl úsáideoir le {{ identifier }} ann.',
  missing_profile: 'Ní mór duit faisnéis bhreise a thabhairt sula síníonn tú isteach.',
  role_exists: 'Cuireadh an t-aitheantas róil {{roleId}} leis an úsáideoir seo cheana',
  invalid_role_type:
    "Cineál róil neamhbhailí; ní féidir ról meaisín go meaisín a shannadh d'úsáideoir.",
  suggest_mfa: 'Ar mhaithe le slándáil níos fearr, molaimid MFA a cheangal le do chuntas.',
  missing_mfa: 'Ní mór duit MFA breise a cheangal sula síníonn tú isteach.',
  totp_already_in_use: 'Tá TOTP in úsáid cheana.',
  backup_code_already_in_use: 'Tá an cód cúltaca in úsáid cheana.',
  password_algorithm_required: 'Tá algartam pasfhocail riachtanach.',
  password_and_digest:
    'Ní féidir leat pasfhocal gnáththéacs agus achoimre pasfhocail araon a shocrú.',
  personal_access_token_name_exists: 'Tá comhartha rochtana pearsanta leis an ainm sin ann cheana.',
  totp_secret_invalid: 'Tugadh rún TOTP neamhbhailí.',
  wrong_backup_code_format: 'Tá formáid an chóid chúltaca neamhbhailí.',
  username_required:
    'Is aitheantóir riachtanach é an t-ainm úsáideora, ní féidir é a shocrú go null.',
  email_or_phone_required:
    'Is aitheantóir riachtanach é seoladh ríomhphoist nó uimhir ghutháin; tá ceann amháin ar a laghad riachtanach.',
  last_sign_in_method_required:
    'Ní mór duit aitheantóir amháin ar a laghad a choinneáil i do chuntas.',
  email_required:
    'Is aitheantóir riachtanach é an seoladh ríomhphoist, ní féidir é a shocrú go null.',
  phone_required: 'Is aitheantóir riachtanach í an uimhir ghutháin, ní féidir í a shocrú go null.',
  enterprise_sso_identity_not_exists:
    'Níl aitheantas fiontair ag an úsáideoir atá nasctha leis an aitheantas nascóra SSO a sonraíodh: {{ ssoConnectorId }}.',
  identity_not_exists_in_current_user:
    'Níl an t-aitheantas a sonraíodh i gcuntas an úsáideora reatha. Nasc an t-aitheantas sula leanann tú ar aghaidh.',
  passkey_preferred: 'Cruthaigh eochair phas chun do shíniú isteach a shimpliú.',
};

export default Object.freeze(user);
