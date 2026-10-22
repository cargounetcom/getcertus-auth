/* GetCertus addition (MPL-2.0, see GETCERTUS.md): admin console phrases. */
const application_details = {
  page_title: 'Sonraí an fheidhmchláir',
  back_to_applications: 'Ar ais chuig feidhmchláir',
  check_guide: 'Féach ar an treoir',
  settings: 'Socruithe',
  settings_description:
    'Is éard is "Feidhmchlár" ann ná bogearra nó seirbhís chláraithe ar féidir léi rochtain a fháil ar fhaisnéis úsáideora nó gníomhú thar ceann úsáideora. Cabhraíonn feidhmchláir le GetCertus a aithint cé atá ag iarraidh céard, agus láimhseálann siad an síniú isteach agus na ceadanna. Líon isteach na réimsí riachtanacha don fhíordheimhniú.',
  integration: 'Comhtháthú',
  integration_description:
    'Imscaoil le hoibrithe slána GetCertus, ar líonra imeall Cloudflare, le haghaidh feidhmíochta den scoth agus tosaithe fuara 0ms ar fud an domhain.',
  service_configuration: 'Cumraíocht na seirbhíse',
  service_configuration_description: 'Críochnaigh na cumraíochtaí riachtanacha i do sheirbhís.',
  session: 'Seisiún',
  endpoints_and_credentials: 'Críochphointí & dintiúir',
  endpoints_and_credentials_description:
    "Úsáid na críochphointí agus na dintiúir seo a leanas chun an nasc OIDC a shocrú i d'fheidhmchlár.",
  refresh_token_settings: 'Comhartha athnuachana',
  refresh_token_settings_description:
    'Bainistigh rialacha an chomhartha athnuachana don fheidhmchlár seo.',
  machine_logs: 'Logaí meaisín',
  application_name: 'Ainm an fheidhmchláir',
  application_name_placeholder: "M'fheidhmchlár",
  description: 'Cur síos',
  description_placeholder: 'Cuir isteach cur síos ar an bhfeidhmchlár',
  config_endpoint: 'Críochphointe cumraíochta an tsoláthraí OpenID',
  issuer_endpoint: 'Críochphointe an eisitheora',
  jwks_uri: 'URI JWKS',
  authorization_endpoint: 'Críochphointe údaraithe',
  authorization_endpoint_tip:
    'An críochphointe a dhéanann fíordheimhniú agus údarú. Úsáidtear é le haghaidh <a>Fíordheimhniú</a> OpenID Connect.',
  show_endpoint_details: 'Taispeáin sonraí na gcríochphointí',
  hide_endpoint_details: 'Folaigh sonraí na gcríochphointí',
  logto_endpoint: 'Críochphointe GetCertus',
  application_id: 'ID an fheidhmchláir',
  application_id_tip:
    'Aitheantóir uathúil an fheidhmchláir, a ghineann GetCertus de ghnáth. Seasann sé freisin don “<a>client_id</a>” in OpenID Connect.',
  application_secret: 'Rún an fheidhmchláir',
  application_secret_other: 'Rúin an fheidhmchláir',
  redirect_uri: 'URI atreoraithe',
  redirect_uris: 'URIanna atreoraithe',
  redirect_uri_placeholder: 'https://your.website.com/app',
  redirect_uri_placeholder_native: 'io.logto://callback',
  redirect_uri_tip:
    "An URI a atreoraítear chuige tar éis d'úsáideoir síniú isteach (cibé ar éirigh leis nó nár éirigh). Féach <a>AuthRequest</a> OpenID Connect le haghaidh tuilleadh eolais.",
  mixed_redirect_uri_warning:
    "Níl cineál d'fheidhmchláir comhoiriúnach le URI atreoraithe amháin ar a laghad. Ní leanann sé seo an dea-chleachtas, agus molaimid go láidir na URIanna atreoraithe a choinneáil comhsheasmhach.",
  wildcard_redirect_uri_warning:
    'Ní cuid de chaighdeán OIDC iad URIanna atreoraithe le saoróga agus féadann siad an dromchla ionsaithe a mhéadú. Úsáid go cúramach iad, agus is fearr URIanna cruinne nuair is féidir.',
  post_sign_out_redirect_uri: 'URI atreoraithe tar éis síniú amach',
  post_sign_out_redirect_uris: 'URIanna atreoraithe tar éis síniú amach',
  post_sign_out_redirect_uri_placeholder: 'https://your.website.com/home',
  post_sign_out_redirect_uri_tip:
    "An URI a atreoraítear chuige tar éis d'úsáideoir síniú amach (roghnach). B'fhéidir nach mbeadh aon éifeacht phraiticiúil aige i gcineálacha áirithe feidhmchlár.",
  cors_allowed_origins: 'Bunáiteanna ceadaithe CORS',
  cors_allowed_origins_placeholder: 'https://your.website.com',
  cors_allowed_origins_tip:
    'De réir réamhshocraithe, ceadaítear bunáiteanna uile na URIanna atreoraithe. De ghnáth ní gá aon rud a dhéanamh sa réimse seo. Féach an <a>doiciméad MDN</a> le haghaidh sonraí.',
  token_endpoint: 'Críochphointe comharthaí',
  user_info_endpoint: 'Críochphointe userinfo',
  enable_admin_access: 'Cumasaigh rochtain riarthóra',
  enable_admin_access_label:
    'Cumasaigh nó díchumasaigh rochtain ar an Management API. Nuair a bhíonn sé cumasaithe, is féidir leat comharthaí rochtana a úsáid chun an Management API a ghlaoch thar ceann an fheidhmchláir seo.',
  always_issue_refresh_token: 'Eisigh comhartha athnuachana i gcónaí',
  always_issue_refresh_token_label:
    "Nuair a bhíonn sé cumasaithe, eiseoidh GetCertus comharthaí athnuachana i gcónaí, cibé an bhfuil `prompt=consent` san iarratas fíordheimhnithe nó nach bhfuil. Ní mholtar é seo mura bhfuil gá leis, áfach, mar níl sé comhoiriúnach le OpenID Connect agus d'fhéadfadh sé fadhbanna a chruthú.",
  refresh_token_ttl: 'Saolré (TTL) an chomhartha athnuachana i laethanta',
  refresh_token_ttl_tip:
    'An tréimhse inar féidir comhartha athnuachana a úsáid chun comharthaí rochtana nua a iarraidh sula dtéann sé in éag agus go n-éiríonn sé neamhbhailí. Síneann iarratais ar chomharthaí saolré an chomhartha athnuachana go dtí an luach seo.',
  rotate_refresh_token: 'Uainíocht an chomhartha athnuachana',
  rotate_refresh_token_label:
    "Nuair a bhíonn sé cumasaithe, eiseoidh GetCertus comhartha athnuachana nua d'iarratais ar chomharthaí nuair a bheidh 70% den saolré (TTL) bunaidh caite nó nuair a chomhlíontar coinníollacha áirithe. <a>Tuilleadh eolais</a>",
  rotate_refresh_token_label_for_public_clients:
    'Nuair a bhíonn sé cumasaithe, eiseoidh GetCertus comhartha athnuachana nua do gach iarratas ar chomhartha. <a>Tuilleadh eolais</a>',
  backchannel_logout: 'Logáil amach backchannel',
  backchannel_logout_description:
    'Cumraigh críochphointe logála amach backchannel OpenID Connect agus cé acu an bhfuil seisiún riachtanach don fheidhmchlár seo nó nach bhfuil.',
  backchannel_logout_uri: 'URI logála amach backchannel',
  backchannel_logout_uri_session_required: 'An bhfuil seisiún riachtanach?',
  backchannel_logout_uri_session_required_description:
    'Nuair a bhíonn sé cumasaithe, éilíonn an RP go mbeadh éileamh `sid` (ID seisiúin) sa chomhartha logála amach chun seisiún an RP leis an OP a aithint nuair a úsáidtear `backchannel_logout_uri`.',
  token_exchange: 'Malartú comharthaí',
  token_exchange_description: 'Bainistigh socruithe malartaithe comharthaí don fheidhmchlár seo.',
  allow_token_exchange: 'Ceadaigh malartú comharthaí',
  allow_token_exchange_description:
    'Ceadaigh don fheidhmchlár seo iarratais ar mhalartú comharthaí a thionscnamh. Tá sé seo riachtanach le haghaidh <impersonationLink>pearsanú úsáideoirí</impersonationLink> agus <patLink>comharthaí rochtana pearsanta</patLink>.',
  allow_token_exchange_public_client_warning:
    "Ní mholtar malartú comharthaí a chumasú do chliaint phoiblí (feidhmchlár aonleathanaigh / feidhmchlár dúchasach). Ní féidir le cliaint phoiblí dintiúir a stóráil go slán, rud a d'fhéadfadh d'fheidhmchlár a nochtadh do riosca pearsanaithe trí chomharthaí.",
  device_flow_tag: 'Sreabhadh gléis',
  device_flow_notification:
    "Úsáideann an feidhmchlár seo OAuth 2.0 Device Authorization Flow do ghléasanna le hionchur teoranta nó d'fheidhmchláir gan chomhéadan (m.sh. teilifíseáin, CLI). Críochnaíonn úsáideoirí an logáil isteach ar ghléas eile trí chód gléis a chur isteach nó cód QR a scanadh. <a>Tuilleadh eolais</a>",
  device_flow_try_demo: 'Bain triail as an taispeántas',
  delete_description:
    'Ní féidir an gníomh seo a chealú. Scriosfar an feidhmchlár go buan. Cuir isteach ainm an fheidhmchláir <span>{{name}}</span> le deimhniú.',
  enter_your_application_name: 'Cuir isteach ainm an fheidhmchláir',
  application_deleted: 'Scriosadh an feidhmchlár {{name}}',
  redirect_uri_required: 'Ní mór URI atreoraithe amháin ar a laghad a chur isteach',
  app_domain_description_1:
    "Is féidir leat d'fhearann a úsáid le {{domain}} trí GetCertus; tá sé bailí go buan.",
  app_domain_description_2:
    "Is féidir leat d'fhearann <domain>{{domain}}</domain> a úsáid; tá sé bailí go buan.",
  custom_rules: 'Rialacha fíordheimhnithe saincheaptha',
  custom_rules_placeholder: '^/(admin|privacy)/.+$',
  custom_rules_description:
    'Socraigh rialacha le sloinn rialta do bhealaí a éilíonn fíordheimhniú. Réamhshocrú: cosnaítear an suíomh ar fad má fhágtar bán é.',
  authentication_routes: 'Bealaí fíordheimhnithe',
  custom_rules_tip:
    "Seo dhá shampla:<ol><li>Chun na bealaí '/admin' agus '/privacy' amháin a chosaint le fíordheimhniú: ^/(admin|privacy)/.*</li><li>Chun íomhánna JPG a eisiamh ó fhíordheimhniú: ^(?!.*\\.jpg$).*$</li></ol>",
  authentication_routes_description:
    'Atreoraigh do chnaipe fíordheimhnithe trí na bealaí sonraithe. Nóta: ní féidir na bealaí seo a athsholáthar.',
  protect_origin_server: 'Cosain do fhreastalaí bunaidh',
  protect_origin_server_description:
    'Cinntigh go bhfuil do fhreastalaí bunaidh cosanta ar rochtain dhíreach. Féach an treoir le haghaidh <a>treoracha mionsonraithe</a>.',
  third_party_settings_description:
    "Comhtháthaigh feidhmchláir tríú páirtí le GetCertus mar Sholáthraí Aitheantais (IdP) trí OIDC / OAuth 2.0, le scáileán toilithe d'údarú úsáideoirí.",
  session_duration: 'Fad an tseisiúin (laethanta)',
  try_it: 'Bain triail as',
  no_organization_placeholder: 'Níor aimsíodh eagraíocht. <a>Téigh chuig eagraíochtaí</a>',
  field_custom_data: 'Sonraí saincheaptha',
  field_custom_data_tip:
    'Faisnéis bhreise faoin bhfeidhmchlár nach bhfuil sna hairíonna réamhshainithe, mar shampla socruithe agus cumraíochtaí gnó.',
  custom_data_invalid: 'Caithfidh na sonraí saincheaptha a bheith ina réad JSON bailí',
  access_control: {
    name: 'Rialacha',
    title: 'Rialú rochtana',
    description: 'Saincheap do rialacha rialaithe rochtana ar leibhéal an fheidhmchláir.',
    enable: 'Cumasaigh rialú rochtana ar leibhéal an fheidhmchláir',
    enable_description:
      'Cumasaigh rialú rochtana mionsonraithe chun srian a chur ar na húsáideoirí ar féidir leo an feidhmchlár seo a úsáid. Má tá sé díchumasaithe, is féidir le gach úsáideoir cláraithe sa chóras rochtain a fháil air.',
    enable_without_rules_notice:
      'Cuir riail rochtana amháin ar a laghad leis sula gcumasaíonn tú rialú rochtana.',
    load_error: 'Theip ar luchtú na rialacha rialaithe rochtana.',
    custom_allow_rules: 'Rialacha ceadaithe saincheaptha',
    custom_allow_rules_description:
      'Cruthaigh rialacha ionas go bhfaighidh úsáideoirí le tréithe áirithe rochtain go huathoibríoch. Tá riail amháin ar a laghad riachtanach nuair a bhíonn sé cumasaithe.',
    rules: 'Rialacha rochtana',
    add_rules: 'Cuir rialacha leis',
    rules_description:
      'Is féidir le húsáideoirí an feidhmchlár seo a úsáid nuair a chomhlíonann siad ceann ar bith de na rialacha cumraithe.',
    empty_rules_description: 'Níl aon rialacha cumraithe fós.',
    delete_rule_confirmation: 'An bhfuil tú cinnte gur mian leat an riail seo a bhaint?',
    rule_table_rules: 'Rialacha',
    rule_table_description: 'Cur síos',
    rule_table_users: 'Úsáideoirí',
    rule_table_members: 'Baill',
    rule_table_user_id: 'ID úsáideora',
    rule_count: '{{count}} riail',
    rule_count_other: '{{count}} riail',
    rule_users: 'Úsáideoirí',
    rule_users_description: 'Is féidir le húsáideoirí sonracha an feidhmchlár seo a úsáid.',
    rule_roles: 'Róil',
    rule_user_roles: 'Róil úsáideora',
    rule_user_roles_description:
      'Is féidir le húsáideoirí a bhfuil na róil úsáideora roghnaithe acu an feidhmchlár seo a úsáid.',
    rule_organizations: 'Eagraíochtaí',
    rule_organizations_description:
      'Is féidir le gach ball reatha agus amach anseo de na heagraíochtaí roghnaithe an feidhmchlár seo a úsáid.',
    rule_organization_roles: 'Róil eagraíochta',
    rule_organization_roles_description:
      'Is féidir le baill a bhfuil na róil eagraíochta roghnaithe acu sna heagraíochtaí roghnaithe an feidhmchlár seo a úsáid.',
  },
  branding: {
    name: 'Brandáil',
    description:
      'Saincheap lógó agus dath branda an fheidhmchláir don eispéireas ar leibhéal an fheidhmchláir.',
    description_third_party:
      "Saincheap ainm taispeána agus lógó d'fheidhmchláir ar an scáileán toilithe.",
    app_logo: 'Lógó an fheidhmchláir',
    app_level_sie: 'Eispéireas síniú isteach ar leibhéal an fheidhmchláir',
    app_level_sie_switch:
      'Cumasaigh an t-eispéireas síniú isteach ar leibhéal an fheidhmchláir agus socraigh brandáil shonrach don fheidhmchlár. Má tá sé díchumasaithe, úsáidfear an t-eispéireas síniú isteach ginearálta.',
    more_info: 'Tuilleadh eolais',
    more_info_description:
      "Tabhair tuilleadh sonraí d'úsáideoirí faoi d'fheidhmchlár ar an scáileán toilithe.",
    display_name: 'Ainm taispeána',
    application_logo: 'Lógó an fheidhmchláir',
    application_logo_dark: 'Lógó an fheidhmchláir (dorcha)',
    brand_color: 'Dath branda',
    brand_color_dark: 'Dath branda (dorcha)',
    terms_of_use_url: 'URL théarmaí úsáide an fheidhmchláir',
    privacy_policy_url: 'URL pholasaí príobháideachais an fheidhmchláir',
  },
  permissions: {
    name: 'Ceadanna',
    description:
      'Roghnaigh na ceadanna a theastaíonn ón bhfeidhmchlár tríú páirtí chun, le húdarú an úsáideora, rochtain a fháil ar chineálacha sonracha sonraí.',
    user_permissions: 'Sonraí pearsanta úsáideora',
    organization_permissions: 'Rochtain eagraíochta',
    table_name: 'Deonaigh ceadanna',
    field_name: 'Cead',
    field_description: 'Taispeántar é ar an scáileán toilithe',
    delete_text: 'Bain an cead',
    permission_delete_confirm:
      'Tarraingeoidh an gníomh seo siar na ceadanna a deonaíodh don fheidhmchlár tríú páirtí, ionas nach féidir leis údarú úsáideora a iarraidh do chineálacha sonracha sonraí. An bhfuil tú cinnte gur mian leat leanúint ar aghaidh?',
    permissions_assignment_description:
      'Roghnaigh na ceadanna a iarrann an feidhmchlár tríú páirtí chun, le húdarú an úsáideora, rochtain a fháil ar chineálacha sonracha sonraí.',
    user_profile: 'Sonraí úsáideora',
    api_permissions: 'Ceadanna API',
    organization: 'Ceadanna eagraíochta',
    user_permissions_assignment_form_title: 'Cuir ceadanna phróifíl an úsáideora leis',
    organization_permissions_assignment_form_title: 'Cuir ceadanna eagraíochta leis',
    api_resource_permissions_assignment_form_title: 'Cuir ceadanna acmhainní API leis',
    user_data_permission_description_tips:
      'Is féidir leat cur síos na gceadanna do shonraí pearsanta úsáideora a athrú trí "Eispéireas síniú isteach > Ábhar > Bainistigh teanga"',
    permission_description_tips:
      'Nuair a úsáidtear GetCertus mar Sholáthraí Aitheantais (IdP) le haghaidh fíordheimhnithe i bhfeidhmchláir tríú páirtí agus go n-iarrtar údarú ar úsáideoirí, taispeántar an cur síos seo ar an scáileán toilithe.',
    user_title: 'Úsáideoir',
    user_description:
      'Roghnaigh na ceadanna a iarrann an feidhmchlár tríú páirtí chun rochtain a fháil ar shonraí sonracha úsáideora.',
    grant_user_level_permissions: 'Deonaigh ceadanna ar shonraí úsáideora',
    organization_title: 'Eagraíocht',
    organization_description:
      'Roghnaigh na ceadanna a iarrann an feidhmchlár tríú páirtí chun rochtain a fháil ar shonraí sonracha eagraíochta.',
    grant_organization_level_permissions: 'Deonaigh ceadanna ar shonraí eagraíochta',
    oidc_title: 'OIDC',
    oidc_description:
      "Cumraítear ceadanna lárnacha OIDC go huathoibríoch d'fheidhmchlár. Tá na scóip seo riachtanach don fhíordheimhniú agus ní thaispeántar iad ar scáileán toilithe an úsáideora.",
    default_oidc_permissions: 'Ceadanna réamhshocraithe OIDC',
    permission_column: 'Cead',
    guide_column: 'Treoir',
    openid_permission: 'openid',
    openid_permission_guide:
      "Roghnach le haghaidh rochtana ar acmhainní OAuth.\nRiachtanach d'fhíordheimhniú OIDC. Tugann sé comhartha ID agus rochtain ar an 'userinfo_endpoint'.",
    offline_access_permission: 'offline_access',
    offline_access_permission_guide:
      'Roghnach. Faigheann sé comharthaí athnuachana le haghaidh rochtana fadtéarma nó tascanna cúlra.',
  },
  roles: {
    assign_button: 'Sann róil',
    delete_description:
      'Bainfidh an gníomh seo an ról ón bhfeidhmchlár meaisín go meaisín seo. Beidh an ról féin ann fós, ach ní bheidh sé nasctha leis an bhfeidhmchlár seo a thuilleadh.',
    deleted: 'Baineadh {{name}} ón úsáideoir seo.',
    assign_title: 'Sann róil do {{name}}',
    assign_subtitle:
      'Ní mór róil den chineál meaisín go meaisín a bheith ag feidhmchláir meaisín go meaisín chun rochtain a fháil ar na hacmhainní API gaolmhara.',
    assign_role_field: 'Sann róil',
    role_search_placeholder: 'Cuardaigh de réir ainm róil',
    added_text: '{{value, number}} curtha leis',
    assigned_app_count: '{{value, number}} feidhmchlár',
    confirm_assign: 'Sann róil',
    role_assigned: 'Sannadh na róil',
    search: 'Cuardaigh de réir ainm róil, cur síos nó ID',
    empty: 'Níl aon ról ar fáil',
  },
  secrets: {
    value: 'Luach',
    empty: 'Níl aon rúin ag an bhfeidhmchlár.',
    created_at: 'Cruthaithe',
    expires_at: 'Rachaidh in éag',
    never: 'Riamh',
    create_new_secret: 'Cruthaigh rún nua',
    delete_confirmation:
      'Ní féidir an gníomh seo a chealú. An bhfuil tú cinnte gur mian leat an rún seo a scriosadh?',
    deleted: 'Scriosadh an rún.',
    activated: 'Gníomhachtaíodh an rún.',
    deactivated: 'Díghníomhachtaíodh an rún.',
    legacy_secret: 'Rún oidhreachta',
    expired: 'Imithe in éag',
    expired_tooltip: 'Chuaigh an rún seo in éag ar {{date}}.',
    create_modal: {
      title: 'Cruthaigh rún feidhmchláir',
      expiration: 'Dul in éag',
      expiration_description: 'Rachaidh an rún in éag ar {{date}}.',
      expiration_description_never:
        'Ní rachaidh an rún in éag riamh. Molaimid dáta éaga a shocrú le haghaidh slándála níos fearr.',
      days: '{{count}} lá',
      days_other: '{{count}} lá',
      years: '{{count}} bhliain',
      years_other: '{{count}} bliain',
      created: 'Cruthaíodh an rún {{name}}.',
    },
    edit_modal: {
      title: 'Cuir rún an fheidhmchláir in eagar',
      edited: 'Cuireadh an rún {{name}} in eagar.',
    },
  },
  saml_idp_config: {
    title: 'Meiteashonraí SAML IdP',
    description:
      "Úsáid na meiteashonraí agus an teastas seo a leanas chun an SAML IdP a chumrú i d'fheidhmchlár.",
    metadata_url_label: 'URL mheiteashonraí an IdP',
    single_sign_on_service_url_label: 'URL na seirbhíse aonsínithe isteach',
    idp_entity_id_label: 'ID aonáin an IdP',
  },
  saml_idp_certificates: {
    title: 'Teastas sínithe SAML',
    expires_at: 'Rachaidh in éag',
    finger_print: 'Méarlorg',
    status: 'Stádas',
    active: 'Gníomhach',
    inactive: 'Neamhghníomhach',
  },
  saml_idp_name_id_format: {
    title: 'Formáid Name ID',
    description: 'Roghnaigh formáid Name ID an SAML IdP.',
    persistent: 'Buan',
    persistent_description: 'Úsáid ID úsáideora GetCertus mar Name ID',
    transient: 'Sealadach',
    transient_description: 'Úsáid ID úsáideora aon uaire mar Name ID',
    unspecified: 'Neamhshonraithe',
    unspecified_description: 'Úsáid ID úsáideora GetCertus mar Name ID',
    email_address: 'Seoladh ríomhphoist',
    email_address_description: 'Úsáid an seoladh ríomhphoist mar Name ID',
  },
  saml_idp_authentication: {
    always_force_authn: 'Éiligh fíordheimhniú i gcónaí',
    always_force_authn_description:
      'Éiligh ar úsáideoirí síniú isteach arís gach uair a úsáideann siad an feidhmchlár seo, fiú má tá seisiún GetCertus acu cheana.',
    always_force_authn_tip:
      'Nuair a bhíonn sé cumasaithe, iarrann GetCertus ar úsáideoirí síniú isteach arís don fheidhmchlár seo i gcónaí. Nuair a bhíonn sé díchumasaithe, athúsáidtear seisiún GetCertus atá ann cheana, mura n-iarrann an soláthraí seirbhíse fíordheimhniú nua le ForceAuthn.',
  },
  saml_encryption_config: {
    encrypt_assertion: 'Criptigh an dearbhú SAML',
    encrypt_assertion_description: 'Má chumasaíonn tú an rogha seo, cripteofar an dearbhú SAML.',
    encrypt_then_sign: 'Criptigh ansin sínigh',
    encrypt_then_sign_description:
      'Má chumasaíonn tú an rogha seo, criptítear an dearbhú SAML agus ansin síntear é; murach sin, síntear é agus ansin criptítear é.',
    certificate: 'Teastas',
    certificate_tooltip:
      'Cóipeáil agus greamaigh an teastas x509 a fhaigheann tú ó do sholáthraí seirbhíse chun an dearbhú SAML a chriptiú.',
    certificate_placeholder:
      '-----BEGIN CERTIFICATE-----\nMIICYDCCAcmgAwIBA...\n-----END CERTIFICATE-----\n',
    certificate_missing_error: 'Tá teastas riachtanach.',
    certificate_invalid_format_error:
      'Formáid neamhbhailí teastais. Seiceáil formáid an teastais agus bain triail eile as.',
  },
  saml_app_attribute_mapping: {
    name: 'Mapálacha tréithe',
    title: 'Mapálacha bunúsacha tréithe',
    description:
      "Cuir mapálacha tréithe leis chun próifíl an úsáideora a shioncronú ó GetCertus chuig d'fheidhmchlár.",
    col_logto_claims: 'Luach in GetCertus',
    col_sp_claims: "Ainm an luacha i d'fheidhmchlár",
    add_button: 'Cuir ceann eile leis',
  },
  concurrent_device_limit: {
    title: 'Teorainn gléasanna comhuaineacha',
    enable: 'Cumasaigh teorainn gléasanna comhuaineacha',
    enable_description:
      'Nuair a bhíonn sé cumasaithe, cuireann GetCertus uaslíon na ndeontas gníomhach in aghaidh an úsáideora i bhfeidhm don fheidhmchlár seo.',
    field: 'Teorainn gléasanna comhuaineacha in aghaidh an fheidhmchláir',
    field_description:
      'Cuir teorainn le cé mhéad gléas ar féidir le húsáideoir a bheith sínithe isteach orthu ag an am céanna. Cuireann GetCertus é seo i bhfeidhm trí na deontais ghníomhacha a theorannú, agus cúlghairtear an deontas is sine go huathoibríoch nuair a sháraítear an teorainn.',
    field_placeholder: 'Fág folamh le haghaidh gan teorainn',
    should_be_greater_than_zero: 'Caithfidh sé a bheith níos mó ná 0.',
  },
};

export default Object.freeze(application_details);
