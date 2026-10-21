/* GetCertus addition (MPL-2.0, see GETCERTUS.md): sign-in experience phrases. */
const description = {
  email: 'ríomhphost',
  phone_number: 'uimhir ghutháin',
  username: 'ainm úsáideora',
  reminder: 'Meabhrúchán',
  not_found: '404 Gan aimsiú',
  agree_with_terms: 'Léigh mé agus aontaím le ',
  agree_with_terms_modal: 'Chun leanúint ar aghaidh, aontaigh leis na <link></link>.',
  terms_of_use: 'Téarmaí Úsáide',
  sign_in: 'Sínigh isteach',
  privacy_policy: 'Beartas Príobháideachais',
  create_account: 'Cruthaigh cuntas',
  switch_account: 'Athraigh cuntas',
  or: 'nó',
  and: 'agus',
  enter_passcode: 'Seoladh an cód fíoraithe chuig do {{address}} {{target}}',
  passcode_sent: 'Seoladh an cód fíoraithe arís',
  resend_after_seconds: 'Nár tháinig sé fós? Seol arís i gceann <span>{{seconds}}</span> soicind',
  resend_passcode: 'Nár tháinig sé fós? <a>Seol an cód fíoraithe arís</a>',
  create_account_id_exists:
    'Tá cuntas le {{value}} ann cheana. Lean ar aghaidh chun síniú isteach.',
  link_account_id_exists:
    'Tá an cuntas le {{type}} {{value}} ann cheana. Ar mhaith leat é a nascadh?',
  sign_in_id_does_not_exist: 'Níor aimsíodh cuntas do {{value}}. Cruthaigh cuntas nua?',
  sign_in_id_does_not_exist_alert: 'Níl an cuntas le {{type}} {{value}} ann.',
  create_account_id_exists_alert:
    'Tá an cuntas le {{type}} {{value}} nasctha le cuntas eile. Bain triail as {{type}} eile.',
  social_identity_exist:
    'Tá {{type}} {{value}} nasctha le cuntas eile. Bain triail as {{type}} eile.',
  bind_account_title: 'Nasc nó cruthaigh cuntas',
  social_create_account: 'Is féidir leat cuntas nua a chruthú.',
  social_link_email: 'Is féidir leat ríomhphost eile a nascadh',
  social_link_phone: 'Is féidir leat fón eile a nascadh',
  social_link_email_or_phone: 'Is féidir leat ríomhphost nó fón eile a nascadh',
  social_bind_with_existing:
    'D’aimsíomar cuntas cláraithe gaolmhar, agus is féidir leat é a nascadh go díreach.',
  skip_social_linking: 'Scipeáil an nascadh leis an gcuntas atá ann?',
  reset_password: 'Athshocraigh an pasfhocal',
  reset_password_description:
    'Cuir isteach an {{types, list(type: disjunction;)}} a bhaineann le do chuntas, agus seolfaimid cód fíoraithe chugat chun do phasfhocal a athshocrú.',
  reset_password_magic_link_description:
    'Cuir isteach an seoladh ríomhphoist a bhaineann le do chuntas chun leanúint ar aghaidh le hathshocrú an phasfhocail.',
  new_password: 'Pasfhocal nua',
  set_password: 'Socraigh pasfhocal',
  password_changed: 'Athraíodh an pasfhocal',
  no_account: 'Gan cuntas fós? ',
  have_account: 'An bhfuil cuntas agat cheana?',
  enter_password: 'Cuir isteach an pasfhocal',
  enter_password_for: 'Sínigh isteach leis an bpasfhocal do {{method}} {{value}}',
  enter_username: 'Socraigh ainm úsáideora',
  enter_username_description:
    'Is féidir síniú isteach le hainm úsáideora freisin. Ní cheadaítear ann ach litreacha, uimhreacha agus fostríoca.',
  enter_username_policy_description:
    'Is féidir síniú isteach le hainm úsáideora freisin. {{requirements}}',
  link_email: 'Nasc ríomhphost',
  link_phone: 'Nasc fón',
  link_email_or_phone: 'Nasc ríomhphost nó fón',
  link_email_description: 'Ar mhaithe le slándáil bhreise, nasc do ríomhphost leis an gcuntas.',
  link_phone_description: 'Ar mhaithe le slándáil bhreise, nasc d’fhón leis an gcuntas.',
  link_email_or_phone_description:
    'Ar mhaithe le slándáil bhreise, nasc do ríomhphost nó d’fhón leis an gcuntas.',
  continue_with_more_information:
    'Ar mhaithe le slándáil bhreise, comhlánaigh sonraí an chuntais thíos.',
  create_your_account: 'Cruthaigh do chuntas',
  sign_in_to_your_account: 'Sínigh isteach i do chuntas',
  device_activation: 'Gníomhachtú gléis',
  device_activation_description:
    'Cuir isteach an cód atá ar taispeáint ar do ghléas. Deimhnigh go bhfuil sé mar an gcéanna, ansin lean ar aghaidh chun síniú isteach ar an ngléas seo.',
  device_activation_error_description: 'Cuir isteach an cód atá ar taispeáint ar do ghléas.',
  device_activation_success: 'Tá do ghléas ceangailte anois!',
  device_activation_success_description: 'Fill ar do ghléas chun leanúint ar aghaidh.',
  no_region_code_found: 'Níor aimsíodh cód tíre',
  verify_email: 'Fíoraigh do ríomhphost',
  verify_phone: 'Fíoraigh d’uimhir ghutháin',
  password_requirements: 'Pasfhocal: {{items, list}}.',
  password_requirement: {
    length_one: '{{count}} charachtar ar a laghad',
    length_two: '{{count}} charachtar ar a laghad',
    length_few: '{{count}} charachtar ar a laghad',
    length_many: '{{count}} gcarachtar ar a laghad',
    length_other: '{{count}} carachtar ar a laghad',
    character_types_one:
      '{{count}} chineál ar a laghad de litreacha móra, litreacha beaga, uimhreacha agus siombailí',
    character_types_two:
      '{{count}} chineál ar a laghad de litreacha móra, litreacha beaga, uimhreacha agus siombailí',
    character_types_few:
      '{{count}} chineál ar a laghad de litreacha móra, litreacha beaga, uimhreacha agus siombailí',
    character_types_many:
      '{{count}} gcineál ar a laghad de litreacha móra, litreacha beaga, uimhreacha agus siombailí',
    character_types_other:
      '{{count}} cineál ar a laghad de litreacha móra, litreacha beaga, uimhreacha agus siombailí',
  },
  username_requirements: 'Ainm úsáideora: {{items, list}}.',
  username_requirement: {
    length: 'idir {{min}} agus {{max}} carachtar',
    characters: '{{characters, list}} amháin',
  },
  username_character: {
    uppercase: 'litreacha móra',
    lowercase: 'litreacha beaga',
    number: 'uimhreacha',
    underscore: 'fostríoca',
  },
  use: 'Úsáid',
  single_sign_on_email_form: 'Cuir isteach seoladh ríomhphoist d’eagraíochta',
  single_sign_on_connectors_list:
    'Tá sínithe isteach aonair cumasaithe ag d’eagraíocht don chuntas ríomhphoist {{email}}. Is féidir leat síniú isteach trí na soláthraithe SSO seo a leanas.',
  single_sign_on_enabled: 'Tá sínithe isteach aonair cumasaithe don chuntas seo',
  authorize_title: 'Údaraigh {{name}}',
  unregistered_client_notice:
    'Is é <hostname>{{host}}</hostname> féin a d’fhógair an aip seo, a hainm agus a lógó san áireamh. Seiceáil an t-óstainm sula leanfaidh tú ar aghaidh.',
  request_permission: 'Tá {{name}} ag iarraidh rochtain ar:',
  grant_organization_access: 'Tabhair rochtain don eagraíocht:',
  authorize_personal_data_usage: 'Údaraigh úsáid do shonraí pearsanta:',
  authorize_organization_access: 'Údaraigh rochtain ar an eagraíocht shonrach:',
  user_scopes: 'Sonraí pearsanta úsáideora',
  organization_scopes: 'Rochtain ar an eagraíocht',
  authorize_agreement: 'Tríd an rochtain a údarú, aontaíonn tú le <link></link> {{name}}.',
  authorize_agreement_with_redirect:
    'Tríd an rochtain a údarú, aontaíonn tú le <link></link> {{name}}, agus atreorófar thú chuig {{uri}}.',
  not_you: 'Nach tusa atá ann?',
  user_id: 'Aitheantas úsáideora: {{id}}',
  redirect_to: 'Atreorófar thú chuig {{name}}.',
  auto_agreement: 'Trí leanúint ar aghaidh, aontaíonn tú leis na <link></link>.',
  identifier_sign_in_description:
    'Cuir isteach do {{types, list(type: disjunction;)}} chun síniú isteach.',
  all_sign_in_options: 'Gach rogha síniú isteach',
  identifier_register_description:
    'Cuir isteach do {{types, list(type: disjunction;)}} chun cuntas nua a chruthú.',
  all_account_creation_options: 'Gach rogha chun cuntas a chruthú',
  back_to_sign_in: 'Ar ais chuig síniú isteach',
  password_expired:
    'Tá do phasfhocal imithe in éag agus caithfear é a athshocrú sular féidir leat síniú isteach.',
  password_expiration_reset: 'Athshocraigh an pasfhocal',
  support_email: 'Ríomhphost tacaíochta: <link></link>',
  support_website: 'Suíomh tacaíochta: <link></link>',
  switch_account_title: 'Tá tú sínithe isteach faoi láthair mar {{account}}',
  switch_account_description:
    'Chun leanúint ar aghaidh, sínífear amach thú as an gcuntas reatha agus aistreofar go huathoibríoch thú chuig an gcuntas nua.',
  about_yourself: 'Inis dúinn fút féin',
  verify_identity: 'Fíoraigh d’aitheantas',
  choose_verification_method: 'Roghnaigh conas is mian leat síniú isteach',
  verification_method: {
    passkey: 'Eochair rochtana',
    passkey_description: 'Fíoraigh le do ghléas nó le heochair USB',
    password: 'Pasfhocal',
    password_description: 'Cuir isteach do phasfhocal',
    email_verification_code: 'Cód fíoraithe ríomhphoist',
    phone_verification_code: 'Cód fíoraithe gutháin',
    verification_code_description: 'Seol chuig {{target}}',
  },
};

export default Object.freeze(description);
