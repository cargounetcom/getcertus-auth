/* GetCertus addition (MPL-2.0, see GETCERTUS.md): admin console phrases. */
const application = {
  invalid_type: 'Ní féidir róil cheangailte a bheith ach ag feidhmchláir mheaisín go meaisín.',
  role_exists: 'Cuireadh an t-aitheantas róil {{roleId}} leis an bhfeidhmchlár seo cheana.',
  invalid_role_type:
    "Ní féidir ról de chineál úsáideora a shannadh d'fheidhmchlár meaisín go meaisín.",
  invalid_third_party_application_type:
    'Ní féidir ach aipeanna gréasáin traidisiúnta, aipeanna leathanaigh aonair agus aipeanna dúchasacha a mharcáil mar aipeanna tríú páirtí.',
  third_party_application_only: "Níl an ghné ar fáil ach d'fheidhmchláir tríú páirtí.",
  third_party_application_cannot_enable_token_exchange:
    "Ní cheadaítear d'fheidhmchláir tríú páirtí malartú comharthaí a chumasú.",
  user_consent_scopes_not_found: 'Scóip toilithe úsáideora neamhbhailí.',
  consent_management_api_scopes_not_allowed: 'Ní cheadaítear scóip Management API.',
  device_flow_native_only: "Níl an device flow ar fáil ach d'fheidhmchláir dhúchasacha.",
  device_flow_not_changeable: 'Ní féidir an device flow a athrú tar éis an feidhmchlár a chruthú.',
  protected_app_metadata_is_required: 'Tá meiteashonraí na haipe cosanta riachtanach.',
  protected_app_not_configured:
    'Níl soláthraí aipeanna cosanta cumraithe. Níl an ghné seo ar fáil sa leagan foinse oscailte.',
  cloudflare_unknown_error: 'Earráid anaithnid agus API Cloudflare á iarraidh',
  protected_application_only: "Níl an ghné ar fáil ach d'fheidhmchláir chosanta.",
  protected_application_misconfigured: 'Tá an feidhmchlár cosanta míchumraithe.',
  protected_application_subdomain_exists:
    'Tá fofhearann an fheidhmchláir chosanta in úsáid cheana.',
  invalid_subdomain: 'Fofhearann neamhbhailí.',
  custom_domain_not_found: 'Níor aimsíodh an fearann saincheaptha.',
  should_delete_custom_domains_first: 'Scrios na fearainn shaincheaptha ar dtús.',
  no_legacy_secret_found: 'Níl sean-rún ag an bhfeidhmchlár.',
  secret_name_exists: 'Tá rún leis an ainm seo ann cheana.',
  sync_application_secret_failed: 'Theip ar shioncronú rún an fheidhmchláir.',
  saml: {
    use_saml_app_api:
      'Úsáid an API `[METHOD] /saml-applications(/.*)?` chun aipeanna SAML a láimhseáil.',
    saml_application_only: "Níl an API ar fáil ach d'fheidhmchláir SAML.",
    reach_oss_limit:
      'NÍ FÉIDIR leat níos mó aipeanna SAML a chruthú toisc gur sroicheadh an teorainn de {{limit}}.',
    acs_url_binding_not_supported:
      'Ní thacaítear ach le ceangal HTTP-POST chun dearbhuithe SAML a fháil.',
    acs_url_scheme_not_supported:
      'Ní thacaítear ach leis na scéimeanna HTTP agus HTTPS do URL an Assertion Consumer Service.',
    can_not_delete_active_secret: 'Ní féidir an rún gníomhach a scriosadh.',
    no_active_secret: 'Níor aimsíodh aon rún gníomhach.',
    entity_id_required: 'Tá Entity ID riachtanach chun meiteashonraí a ghiniúint.',
    name_id_format_required: 'Tá formáid Name ID riachtanach.',
    unsupported_name_id_format: 'Formáid Name ID nach dtacaítear léi.',
    missing_email_address: 'Níl seoladh ríomhphoist ag an úsáideoir.',
    email_address_unverified: 'Níl seoladh ríomhphoist an úsáideora fíoraithe.',
    invalid_certificate_pem_format: 'Formáid PEM an teastais neamhbhailí',
    acs_url_required: 'Tá URL an Assertion Consumer Service riachtanach.',
    private_key_required: 'Tá eochair phríobháideach riachtanach.',
    certificate_required: 'Tá teastas riachtanach.',
    invalid_saml_request: 'Iarratas fíordheimhnithe SAML neamhbhailí.',
    auth_request_issuer_not_match:
      'Ní mheaitseálann eisitheoir an iarratais fhíordheimhnithe SAML le Entity ID an tsoláthraí seirbhíse.',
    sp_initiated_saml_sso_session_not_found_in_cookies:
      'Níor aimsíodh aitheantas an tseisiúin SAML SSO a thionscain an soláthraí seirbhíse sna fianáin.',
    sp_initiated_saml_sso_session_not_found:
      'Níor aimsíodh an seisiún SAML SSO a thionscain an soláthraí seirbhíse.',
    state_mismatch: 'Ní mheaitseálann `state`.',
  },
};

export default Object.freeze(application);
