/* GetCertus addition (MPL-2.0, see GETCERTUS.md): admin console phrases. */
const enterprise_sso_details = {
  back_to_sso_connectors: 'Tilbage til Enterprise SSO',
  page_title: 'Detaljer for Enterprise SSO-connector',
  readme_drawer_title: 'Enterprise SSO',
  readme_drawer_subtitle: 'Opsæt Enterprise SSO-connectorer for at aktivere SSO for slutbrugere',
  tab_experience: 'SSO-oplevelse',
  tab_connection: 'Forbindelse',
  tab_idp_initiated_auth: 'IdP-initieret SSO',
  general_settings_title: 'Generelt',
  general_settings_description:
    'Konfigurér slutbrugeroplevelsen, og tilknyt virksomhedens e-maildomæne til det SP-initierede SSO-flow.',
  custom_branding_title: 'Visning',
  custom_branding_description:
    'Tilpas navnet og logoet, som slutbrugere ser i single sign-on-flowet. Hvis felterne er tomme, bruges standardværdier.',
  email_domain_field_name: 'Virksomhedens e-maildomæner',
  email_domain_field_description:
    'Brugere med disse e-maildomæner kan bruge SSO til godkendelse. Bekræft ejerskabet af domænet, før du tilføjer det.',
  email_domain_field_placeholder: 'Indtast et eller flere e-maildomæner (f.eks. ditfirma.dk)',
  sync_profile_field_name: 'Synkronisér profiloplysninger fra identitetsudbyderen',
  sync_profile_option: {
    register_only: 'Synkronisér kun ved første login',
    each_sign_in: 'Synkronisér altid ved hvert login',
  },
  connector_name_field_name: 'Connectorens navn',
  display_name_field_name: 'Visningsnavn',
  connector_logo_field_name: 'Visningslogo',
  connector_logo_field_description:
    'Hvert billede skal være under 500 KB, kun SVG, PNG, JPG og JPEG.',
  branding_logo_context: 'Upload logo',
  branding_logo_error: 'Fejl ved upload af logo: {{error}}',
  branding_light_logo_context: 'Upload logo til lys tilstand',
  branding_light_logo_error: 'Fejl ved upload af logo til lys tilstand: {{error}}',
  branding_logo_field_name: 'Logo',
  branding_logo_field_placeholder: 'https://your.domain/logo.png',
  branding_dark_logo_context: 'Upload logo til mørk tilstand',
  branding_dark_logo_error: 'Fejl ved upload af logo til mørk tilstand: {{error}}',
  branding_dark_logo_field_name: 'Logo (mørk tilstand)',
  branding_dark_logo_field_placeholder: 'https://your.domain/dark-mode-logo.png',
  check_connection_guide: 'Forbindelsesguide',
  enterprise_sso_deleted: 'Enterprise SSO-connectoren er slettet',
  delete_confirm_modal_title: 'Slet Enterprise SSO-connector',
  delete_confirm_modal_content:
    'Er du sikker på, at du vil slette denne virksomheds-connector? Brugere fra identitetsudbydere vil ikke længere kunne bruge single sign-on.',
  upload_idp_metadata_title_saml: 'Upload metadata',
  upload_idp_metadata_description_saml:
    'Konfigurér de metadata, der er kopieret fra identitetsudbyderen.',
  upload_idp_metadata_title_oidc: 'Upload loginoplysninger',
  upload_idp_metadata_description_oidc:
    'Konfigurér de loginoplysninger og OIDC-tokenoplysninger, der er kopieret fra identitetsudbyderen.',
  upload_idp_metadata_button_text: 'Upload XML-fil med metadata',
  upload_signing_certificate_button_text: 'Upload fil med signeringscertifikat',
  configure_domain_field_info_text:
    'Tilføj et e-maildomæne for at lede virksomhedens brugere til deres identitetsudbyder til single sign-on.',
  email_domain_field_required: 'Et e-maildomæne er påkrævet for at aktivere Enterprise SSO.',
  upload_saml_idp_metadata_info_text_url:
    "Indsæt metadata-URL'en fra identitetsudbyderen for at forbinde.",
  upload_saml_idp_metadata_info_text_xml:
    'Indsæt metadata fra identitetsudbyderen for at forbinde.',
  upload_saml_idp_metadata_info_text_manual:
    'Udfyld metadata fra identitetsudbyderen for at forbinde.',
  upload_oidc_idp_info_text: 'Udfyld oplysningerne fra identitetsudbyderen for at forbinde.',
  service_provider_property_title: "Konfigurér i IdP'en",
  service_provider_property_description:
    'Opsæt en applikationsintegration med {{protocol}} i din identitetsudbyder. Indtast de oplysninger, som GetCertus leverer.',
  attribute_mapping_title: 'Attributtilknytninger',
  attribute_mapping_description:
    'Synkronisér brugerprofiler fra identitetsudbyderen ved at konfigurere attributtilknytning enten hos identitetsudbyderen eller i GetCertus.',
  saml_preview: {
    sign_on_url: 'Login-URL',
    entity_id: 'Udsteder',
    x509_certificate: 'Signeringscertifikat',
    certificate_content: 'Udløber {{date}}',
  },
  oidc_preview: {
    authorization_endpoint: 'Autorisations-endpoint',
    token_endpoint: 'Token-endpoint',
    userinfo_endpoint: 'Endpoint til brugeroplysninger',
    jwks_uri: 'Endpoint til JSON Web Key Set',
    issuer: 'Udsteder',
  },
  idp_initiated_auth_config: {
    card_title: 'IdP-initieret SSO',
    card_description:
      'Brugere starter typisk godkendelsen fra din app via det SP-initierede SSO-flow. Aktivér IKKE denne funktion, medmindre det er absolut nødvendigt.',
    enable_idp_initiated_sso: 'Aktivér IdP-initieret SSO',
    enable_idp_initiated_sso_description:
      'Lad virksomhedens brugere starte godkendelsen direkte fra identitetsudbyderens portal. Sørg for at forstå de mulige sikkerhedsrisici, før du aktiverer funktionen.',
    default_application: 'Standardapplikation',
    default_application_tooltip:
      'Den målapplikation, som brugeren omdirigeres til efter godkendelse.',
    empty_applications_error: 'Ingen applikationer fundet. Tilføj en under <a>Applikationer</a>.',
    empty_applications_placeholder: 'Ingen applikationer',
    authentication_type: 'Godkendelsestype',
    auto_authentication_disabled_title: 'Omdirigér til klienten for SP-initieret SSO',
    auto_authentication_disabled_description:
      'Anbefales. Omdirigér brugere til klientapplikationen for at starte en sikker SP-initieret OIDC-godkendelse. Det forhindrer CSRF-angreb.',
    auto_authentication_enabled_title: 'Log direkte ind med IdP-initieret SSO',
    auto_authentication_enabled_description:
      'Efter vellykket login omdirigeres brugere til den angivne omdirigerings-URI med autorisationskoden (uden state- og PKCE-validering).',
    auto_authentication_disabled_app: 'Til traditionelle webapps og single-page-apps (SPA)',
    auto_authentication_enabled_app: 'Til traditionelle webapps',
    idp_initiated_auth_callback_uri: 'Klientens callback-URI',
    idp_initiated_auth_callback_uri_tooltip:
      "Klientens callback-URI til at starte et SP-initieret SSO-flow. Et ssoConnectorId tilføjes URI'en som forespørgselsparameter. (f.eks. https://your.domain/sso/callback?connectorId={{ssoConnectorId}})",
    redirect_uri: 'Omdirigerings-URI efter login',
    redirect_uri_tooltip:
      'Den omdirigerings-URI, som brugere sendes til efter vellykket login. GetCertus bruger denne URI som OIDC-omdirigerings-URI i autorisationsanmodningen. Brug en separat URI til det IdP-initierede SSO-flow for bedre sikkerhed.',
    empty_redirect_uris_error:
      'Der er ikke registreret nogen omdirigerings-URI for applikationen. Tilføj en først.',
    redirect_uri_placeholder: 'Vælg en omdirigerings-URI efter login',
    auth_params: 'Yderligere godkendelsesparametre',
    auth_params_tooltip:
      'Yderligere parametre, der sendes med i autorisationsanmodningen. Som standard anmodes der kun om scopes (openid profile); her kan du angive flere scopes eller en eksklusiv state-værdi. (f.eks. { "scope": "organizations email", "state": "secret_state" }).',
  },
  trust_unverified_email: 'Stol på ubekræftet e-mail',
  trust_unverified_email_label: 'Stol altid på ubekræftede e-mailadresser fra identitetsudbyderen',
  trust_unverified_email_tip:
    'Entra ID-connectoren (OIDC) returnerer ikke claimet `email_verified`, så e-mailadresser fra Azure er ikke garanteret bekræftede. Som standard synkroniserer GetCertus ikke ubekræftede e-mailadresser til brugerprofilen. Aktivér kun dette, hvis du stoler på alle e-mailadresser i Entra ID-kataloget.',
  trust_unverified_email_tip_oidc:
    'OIDC-connectoren returnerer muligvis ikke claimet `email_verified`, så e-mailadresser fra identitetsudbyderen er ikke garanteret bekræftede. Som standard synkroniserer GetCertus ikke ubekræftede e-mailadresser til brugerprofilen. Aktivér kun dette, hvis du stoler på alle e-mailadresser fra identitetsudbyderen.',
  offline_access: {
    label: 'Opdatér adgangstoken',
    description:
      'Aktivér Googles `offline`-adgang for at anmode om et opdateringstoken, så din app kan forny adgangstokenet uden ny autorisation fra brugeren.',
  },
};

export default Object.freeze(enterprise_sso_details);
