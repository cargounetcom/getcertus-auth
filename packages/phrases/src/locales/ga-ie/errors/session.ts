/* GetCertus addition (MPL-2.0, see GETCERTUS.md): admin console phrases. */
const session = {
  not_found: 'Níor aimsíodh an seisiún. Téigh ar ais agus sínigh isteach arís.',
  invalid_credentials: 'Cuntas nó pasfhocal mícheart. Seiceáil an méid a chuir tú isteach.',
  invalid_sign_in_method: 'Níl an modh sínithe isteach reatha ar fáil.',
  invalid_connector_id:
    'Ní féidir nascóir atá ar fáil leis an aitheantas {{connectorId}} a aimsiú.',
  insufficient_info: 'Faisnéis sínithe isteach neamhleor.',
  connector_id_mismatch: 'Ní mheaitseálann an connectorId le taifead an tseisiúin.',
  connector_session_not_found:
    'Níor aimsíodh seisiún an nascóra. Téigh ar ais agus sínigh isteach arís.',
  verification_session_not_found:
    'Níor éirigh leis an bhfíorú. Atosaigh an sreabhadh fíoraithe agus bain triail eile as.',
  verification_expired:
    'Tá an nasc imithe in éag. Fíoraigh arís chun do chuntas a choinneáil slán.',
  verification_blocked_too_many_attempts:
    'An iomarca iarrachtaí in achar gearr. Bain triail eile as {{relativeTime}}.',
  unauthorized: 'Sínigh isteach ar dtús.',
  unsupported_prompt_name: 'Ainm leide nach dtacaítear leis.',
  forgot_password_not_enabled: 'Níl an pasfhocal dearmadta cumasaithe.',
  verification_failed:
    'Níor éirigh leis an bhfíorú. Atosaigh an sreabhadh fíoraithe agus bain triail eile as.',
  connector_validation_session_not_found:
    'Níor aimsíodh seisiún an nascóra le haghaidh bailíochtú an chomhartha.',
  csrf_token_mismatch: 'Ní mheaitseálann an comhartha CSRF.',
  identifier_not_found:
    'Níor aimsíodh aitheantóir an úsáideora. Téigh ar ais agus sínigh isteach arís.',
  interaction_not_found:
    'Níor aimsíodh seisiún na hidirghníomhaíochta. Téigh ar ais agus tosaigh an seisiún arís.',
  invalid_interaction_type:
    'Ní thacaítear leis an oibríocht seo don idirghníomhaíocht reatha. Tosaigh seisiún nua.',
  not_supported_for_forgot_password:
    'Ní thacaítear leis an oibríocht seo don phasfhocal dearmadta.',
  identity_conflict:
    'Braitheadh neamhréir aitheantais. Tosaigh seisiún nua chun leanúint ar aghaidh le haitheantas eile.',
  identifier_not_verified:
    'Níor fíoraíodh an t-aitheantóir {{identifier}}. Cruthaigh taifead fíoraithe don aitheantóir seo agus críochnaigh an próiseas fíoraithe.',
  mfa: {
    require_mfa_verification: 'Tá fíorú MFA riachtanach chun síniú isteach.',
    mfa_sign_in_only: 'Níl MFA ar fáil ach le haghaidh síniú isteach.',
    pending_info_not_found: 'Níor aimsíodh faisnéis MFA ar feitheamh; tosaigh MFA ar dtús.',
    invalid_totp_code: 'Cód TOTP neamhbhailí.',
    webauthn_verification_failed: 'Theip ar fhíorú WebAuthn.',
    webauthn_verification_not_found: 'Níor aimsíodh fíorú WebAuthn.',
    bind_mfa_existed: 'Tá MFA ann cheana.',
    backup_code_can_not_be_alone: 'Ní féidir le cód cúltaca a bheith mar an t-aon MFA amháin.',
    backup_code_required: 'Tá cód cúltaca riachtanach.',
    invalid_backup_code: 'Cód cúltaca neamhbhailí.',
    mfa_policy_not_user_controlled: 'Níl an polasaí MFA faoi smacht an úsáideora.',
    mfa_factor_not_enabled: 'Níl an fachtóir MFA cumasaithe.',
    suggest_additional_mfa:
      'Le haghaidh cosaint níos láidre, smaoinigh ar mhodh MFA eile a chur leis. Is féidir leat an chéim seo a scipeáil agus leanúint ar aghaidh.',
  },
  trusted_device_suggest_opt_in: 'Roghnaigh an bhfuil muinín agat as an ngléas seo.',
  step_up: {
    invalid_interaction_event:
      'Níl fíordheimhniú step-up ar fáil ach le haghaidh idirghníomhaíochtaí sínithe isteach.',
    subject_not_found:
      'Níor aimsíodh seisiún fíordheimhnithe le haghaidh fíordheimhniú step-up. Sínigh isteach arís.',
    forbidden_route: 'Ní cheadaítear an bealach seo le linn fíordheimhniú step-up.',
    forbidden_identifier:
      'Ní cheadaítear aitheantóir le linn fíordheimhniú step-up. Bain triail eile as gan réimse an aitheantóra.',
    acr_not_satisfied:
      'Ní shásaíonn an fíorú críochnaithe an comhthéacs fíordheimhnithe a iarradh. Fíoraigh le modh eile.',
    require_verification:
      'Tá fíorú le ceann de do mhodhanna atá ann cheana riachtanach chun an comhthéacs fíordheimhnithe a iarradh a bhaint amach.',
  },
  passkey_sign_in: {
    pending_info_not_found:
      'Níor aimsíodh faisnéis sínithe isteach le heochair phas ar feitheamh. Atosaigh an sreabhadh sínithe isteach.',
    conflict_rp_id:
      'Ní mheaitseálann aitheantas an Relying Party. Úsáid an cliant ceart chun síniú isteach.',
    sso_users_not_allowed: "Níl síniú isteach le heochair phas ar fáil d'úsáideoirí SSO.",
  },
  password_expiration: {
    reset_not_allowed:
      'Ní cheadaítear pasfhocal a athshocrú ach tar éis don phasfhocal dul in éag sa seisiún sínithe isteach reatha.',
  },
  sso_enabled: 'Tá síniú isteach aonair cumasaithe don ríomhphost seo. Sínigh isteach le SSO.',
  captcha_required: 'Tá captcha riachtanach.',
  captcha_failed: 'Theip ar fhíorú captcha.',
  email_blocklist: {
    disposable_email_validation_failed: 'Theip ar bhailíochtú an tseolta ríomhphoist.',
    invalid_email: 'Seoladh ríomhphoist neamhbhailí.',
    email_subaddressing_not_allowed: 'Ní cheadaítear fo-sheoltaí ríomhphoist.',
    email_not_allowed: 'Tá an seoladh ríomhphoist "{{email}}" srianta. Roghnaigh ceann eile.',
  },
  google_one_tap: {
    cookie_mismatch: 'Ní mheaitseálann fianán Google One Tap.',
    invalid_id_token: 'Comhartha ID Google neamhbhailí.',
    unverified_email: 'Ríomhphost neamhfhíoraithe.',
  },
};

export default Object.freeze(session);
