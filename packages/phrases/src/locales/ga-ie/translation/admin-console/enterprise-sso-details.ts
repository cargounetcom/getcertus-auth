/* GetCertus addition (MPL-2.0, see GETCERTUS.md): admin console phrases. */
const enterprise_sso_details = {
  back_to_sso_connectors: 'Ar ais chuig SSO fiontair',
  page_title: 'Sonraí an nascóra SSO fiontair',
  readme_drawer_title: 'SSO fiontair',
  readme_drawer_subtitle: "Socraigh nascóirí SSO fiontair chun SSO a chumasú d'úsáideoirí deiridh",
  tab_experience: 'Eispéireas SSO',
  tab_connection: 'Nasc',
  tab_idp_initiated_auth: 'SSO tionscanta ag an IdP',
  general_settings_title: 'Ginearálta',
  general_settings_description:
    'Cumraigh eispéireas an úsáideora deiridh agus nasc fearann ríomhphoist an fhiontair le haghaidh sreabhadh SSO tionscanta ag an SP.',
  custom_branding_title: 'Taispeáint',
  custom_branding_description:
    "Saincheap an t-ainm agus an lógó a thaispeántar d'úsáideoirí deiridh sa sreabhadh aonsínithe isteach. Má tá siad folamh, úsáidtear na réamhshocruithe.",
  email_domain_field_name: 'Fearainn ríomhphoist an fhiontair',
  email_domain_field_description:
    'Is féidir le húsáideoirí a bhfuil na fearainn ríomhphoist seo acu SSO a úsáid le haghaidh fíordheimhnithe. Fíoraigh úinéireacht an fhearainn sula gcuireann tú leis é.',
  email_domain_field_placeholder:
    'Cuir isteach fearann ríomhphoist amháin nó níos mó (m.sh. do-chomhlacht.ie)',
  sync_profile_field_name: 'Sioncronaigh faisnéis phróifíle ón soláthraí aitheantais',
  sync_profile_option: {
    register_only: 'Sioncronaigh ag an gcéad síniú isteach amháin',
    each_sign_in: 'Sioncronaigh i gcónaí ag gach síniú isteach',
  },
  connector_name_field_name: 'Ainm an nascóra',
  display_name_field_name: 'Ainm taispeána',
  connector_logo_field_name: 'Lógó taispeána',
  connector_logo_field_description:
    'Ní mór do gach íomhá a bheith faoi 500KB; SVG, PNG, JPG, JPEG amháin.',
  branding_logo_context: 'Uaslódáil lógó',
  branding_logo_error: 'Earráid ag uaslódáil an lógó: {{error}}',
  branding_light_logo_context: 'Uaslódáil lógó don mhód geal',
  branding_light_logo_error: 'Earráid ag uaslódáil an lógó don mhód geal: {{error}}',
  branding_logo_field_name: 'Lógó',
  branding_logo_field_placeholder: 'https://your.domain/logo.png',
  branding_dark_logo_context: 'Uaslódáil lógó don mhód dorcha',
  branding_dark_logo_error: 'Earráid ag uaslódáil an lógó don mhód dorcha: {{error}}',
  branding_dark_logo_field_name: 'Lógó (mód dorcha)',
  branding_dark_logo_field_placeholder: 'https://your.domain/dark-mode-logo.png',
  check_connection_guide: 'Treoir nasctha',
  enterprise_sso_deleted: 'Scriosadh an nascóir SSO fiontair',
  delete_confirm_modal_title: 'Scrios an nascóir SSO fiontair',
  delete_confirm_modal_content:
    'An bhfuil tú cinnte gur mian leat an nascóir fiontair seo a scriosadh? Ní bheidh úsáideoirí ó sholáthraithe aitheantais in ann aonsíniú isteach a úsáid a thuilleadh.',
  upload_idp_metadata_title_saml: 'Uaslódáil na meiteashonraí',
  upload_idp_metadata_description_saml:
    'Cumraigh na meiteashonraí a cóipeáladh ón soláthraí aitheantais.',
  upload_idp_metadata_title_oidc: 'Uaslódáil na dintiúir',
  upload_idp_metadata_description_oidc:
    'Cumraigh na dintiúir agus faisnéis an chomhartha OIDC a cóipeáladh ón soláthraí aitheantais.',
  upload_idp_metadata_button_text: 'Uaslódáil comhad XML meiteashonraí',
  upload_signing_certificate_button_text: 'Uaslódáil comhad an teastais sínithe',
  configure_domain_field_info_text:
    'Cuir fearann ríomhphoist leis chun úsáideoirí an fhiontair a threorú chuig a soláthraí aitheantais le haghaidh aonsíniú isteach.',
  email_domain_field_required: 'Tá fearann ríomhphoist riachtanach chun SSO fiontair a chumasú.',
  upload_saml_idp_metadata_info_text_url:
    'Greamaigh URL na meiteashonraí ón soláthraí aitheantais chun nascadh.',
  upload_saml_idp_metadata_info_text_xml:
    'Greamaigh na meiteashonraí ón soláthraí aitheantais chun nascadh.',
  upload_saml_idp_metadata_info_text_manual:
    'Líon isteach na meiteashonraí ón soláthraí aitheantais chun nascadh.',
  upload_oidc_idp_info_text: 'Líon isteach an fhaisnéis ón soláthraí aitheantais chun nascadh.',
  service_provider_property_title: 'Cumraigh san IdP',
  service_provider_property_description:
    'Socraigh comhtháthú feidhmchláir le {{protocol}} i do sholáthraí aitheantais. Cuir isteach na sonraí a sholáthraíonn GetCertus.',
  attribute_mapping_title: 'Mapálacha tréithe',
  attribute_mapping_description:
    'Sioncronaigh próifílí úsáideoirí ón soláthraí aitheantais trí mhapáil tréithe a chumrú ar thaobh an tsoláthraí aitheantais nó ar thaobh GetCertus.',
  saml_preview: {
    sign_on_url: 'URL síniú isteach',
    entity_id: 'Eisitheoir',
    x509_certificate: 'Teastas sínithe',
    certificate_content: 'Rachaidh in éag {{date}}',
  },
  oidc_preview: {
    authorization_endpoint: 'Críochphointe údaraithe',
    token_endpoint: 'Críochphointe comharthaí',
    userinfo_endpoint: 'Críochphointe faisnéise úsáideora',
    jwks_uri: 'Críochphointe JSON Web Key Set',
    issuer: 'Eisitheoir',
  },
  idp_initiated_auth_config: {
    card_title: 'SSO tionscanta ag an IdP',
    card_description:
      "De ghnáth tosaíonn úsáideoirí an fíordheimhniú ó d'fheidhmchlár tríd an sreabhadh SSO tionscanta ag an SP. NÁ cumasaigh an ghné seo mura bhfuil sé fíor-riachtanach.",
    enable_idp_initiated_sso: 'Cumasaigh SSO tionscanta ag an IdP',
    enable_idp_initiated_sso_description:
      "Lig d'úsáideoirí an fhiontair an fíordheimhniú a thosú go díreach ó thairseach an tsoláthraí aitheantais. Tuig na rioscaí slándála féideartha sula gcumasaíonn tú an ghné seo.",
    default_application: 'Feidhmchlár réamhshocraithe',
    default_application_tooltip:
      'An feidhmchlár sprice a n-atreorófar an t-úsáideoir chuige tar éis fíordheimhnithe.',
    empty_applications_error:
      'Níor aimsíodh aon fheidhmchlár. Cuir ceann leis sa chuid <a>Feidhmchláir</a>.',
    empty_applications_placeholder: 'Gan feidhmchláir',
    authentication_type: 'Cineál fíordheimhnithe',
    auto_authentication_disabled_title:
      'Atreoraigh chuig an gcliant le haghaidh SSO tionscanta ag an SP',
    auto_authentication_disabled_description:
      'Molta. Atreoraigh úsáideoirí chuig feidhmchlár an chliaint chun fíordheimhniú OIDC slán tionscanta ag an SP a thosú. Cuireann sé seo cosc ar ionsaithe CSRF.',
    auto_authentication_enabled_title: 'Sínigh isteach go díreach le SSO tionscanta ag an IdP',
    auto_authentication_enabled_description:
      'Tar éis síniú isteach rathúil, atreorófar úsáideoirí chuig an URI atreoraithe sonraithe leis an gcód údaraithe (gan bailíochtú state agus PKCE).',
    auto_authentication_disabled_app:
      'Le haghaidh feidhmchlár gréasáin traidisiúnta agus feidhmchlár aonleathanaigh (SPA)',
    auto_authentication_enabled_app: 'Le haghaidh feidhmchlár gréasáin traidisiúnta',
    idp_initiated_auth_callback_uri: 'URI aisghlaoigh an chliaint',
    idp_initiated_auth_callback_uri_tooltip:
      'URI aisghlaoigh an chliaint chun sreabhadh fíordheimhnithe SSO tionscanta ag an SP a thosú. Cuirfear ssoConnectorId leis an URI mar pharaiméadar fiosraithe. (m.sh. https://your.domain/sso/callback?connectorId={{ssoConnectorId}})',
    redirect_uri: 'URI atreoraithe tar éis síniú isteach',
    redirect_uri_tooltip:
      'An URI a gcuirtear úsáideoirí chuige tar éis síniú isteach rathúil. Úsáidfidh GetCertus an URI seo mar URI atreoraithe OIDC san iarratas údaraithe. Úsáid URI ar leith don sreabhadh SSO tionscanta ag an IdP le haghaidh slándála níos fearr.',
    empty_redirect_uris_error:
      'Níor cláraíodh aon URI atreoraithe don fheidhmchlár. Cuir ceann leis ar dtús.',
    redirect_uri_placeholder: 'Roghnaigh URI atreoraithe tar éis síniú isteach',
    auth_params: 'Paraiméadair fíordheimhnithe bhreise',
    auth_params_tooltip:
      'Paraiméadair bhreise a sheolfar san iarratas údaraithe. De réir réamhshocraithe ní iarrtar ach na scóip (openid profile); is féidir leat scóip bhreise nó luach state eisiach a shonrú anseo. (m.sh. { "scope": "organizations email", "state": "secret_state" }).',
  },
  trust_unverified_email: 'Bíodh muinín agat as ríomhphost neamhfhíoraithe',
  trust_unverified_email_label:
    'Bíodh muinín agat i gcónaí as seoltaí ríomhphoist neamhfhíoraithe ón soláthraí aitheantais',
  trust_unverified_email_tip:
    'Ní thugann nascóir Entra ID (OIDC) an t-éileamh `email_verified` ar ais, mar sin níl aon ráthaíocht go bhfuil seoltaí ríomhphoist ó Azure fíoraithe. De réir réamhshocraithe, ní shioncronaíonn GetCertus seoltaí ríomhphoist neamhfhíoraithe le próifíl an úsáideora. Ná cumasaigh an rogha seo ach má tá muinín agat as gach seoladh ríomhphoist san eolaire Entra ID.',
  trust_unverified_email_tip_oidc:
    "B'fhéidir nach dtugann an nascóir OIDC an t-éileamh `email_verified` ar ais, mar sin níl aon ráthaíocht go bhfuil seoltaí ríomhphoist ón soláthraí aitheantais fíoraithe. De réir réamhshocraithe, ní shioncronaíonn GetCertus seoltaí ríomhphoist neamhfhíoraithe le próifíl an úsáideora. Ná cumasaigh an rogha seo ach má tá muinín agat as gach seoladh ríomhphoist ón soláthraí aitheantais.",
  offline_access: {
    label: 'Athnuaigh an comhartha rochtana',
    description:
      "Cumasaigh rochtain `offline` Google chun comhartha athnuachana a iarraidh, ionas gur féidir le d'fheidhmchlár an comhartha rochtana a athnuachan gan athúdarú ón úsáideoir.",
  },
};

export default Object.freeze(enterprise_sso_details);
