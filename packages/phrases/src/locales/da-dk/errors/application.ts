/* GetCertus addition (MPL-2.0, see GETCERTUS.md): admin console phrases. */
const application = {
  invalid_type: 'Kun maskine-til-maskine-applikationer kan have tilknyttede roller.',
  role_exists: "Rolle-ID'et {{roleId}} er allerede tilføjet til denne applikation.",
  invalid_role_type:
    'En rolle af brugertypen kan ikke tildeles en maskine-til-maskine-applikation.',
  invalid_third_party_application_type:
    'Kun traditionelle web-, single-page- og native applikationer kan markeres som tredjepartsapps.',
  third_party_application_only: 'Funktionen er kun tilgængelig for tredjepartsapplikationer.',
  third_party_application_cannot_enable_token_exchange:
    'Tredjepartsapplikationer må ikke slå token exchange til.',
  user_consent_scopes_not_found: 'Ugyldige scopes for brugersamtykke.',
  consent_management_api_scopes_not_allowed: 'Management API-scopes er ikke tilladt.',
  device_flow_native_only: 'Device flow er kun tilgængeligt for native applikationer.',
  device_flow_not_changeable: 'Device flow kan ikke ændres, efter at applikationen er oprettet.',
  protected_app_metadata_is_required: 'Metadata for den beskyttede app er påkrævet.',
  protected_app_not_configured:
    'Der er ikke konfigureret nogen udbyder af beskyttede apps. Funktionen er ikke tilgængelig i open source-versionen.',
  cloudflare_unknown_error: 'Ukendt fejl ved kald til Cloudflare API',
  protected_application_only: 'Funktionen er kun tilgængelig for beskyttede applikationer.',
  protected_application_misconfigured: 'Den beskyttede applikation er fejlkonfigureret.',
  protected_application_subdomain_exists:
    'Den beskyttede applikations underdomæne er allerede i brug.',
  invalid_subdomain: 'Ugyldigt underdomæne.',
  custom_domain_not_found: 'Det brugerdefinerede domæne blev ikke fundet.',
  should_delete_custom_domains_first: 'Slet de brugerdefinerede domæner først.',
  no_legacy_secret_found: 'Applikationen har ingen ældre hemmelighed.',
  secret_name_exists: 'Der findes allerede en hemmelighed med dette navn.',
  sync_application_secret_failed: 'Synkroniseringen af applikationshemmeligheden mislykkedes.',
  saml: {
    use_saml_app_api: "Brug API'et `[METHOD] /saml-applications(/.*)?` til at håndtere SAML-apps.",
    saml_application_only: "API'et er kun tilgængeligt for SAML-applikationer.",
    reach_oss_limit: 'Du KAN IKKE oprette flere SAML-apps, da grænsen på {{limit}} er nået.',
    acs_url_binding_not_supported:
      'Kun HTTP-POST-binding understøttes til modtagelse af SAML-assertions.',
    acs_url_scheme_not_supported:
      "Kun skemaerne HTTP og HTTPS understøttes for Assertion Consumer Service-URL'en.",
    can_not_delete_active_secret: 'Den aktive hemmelighed kan ikke slettes.',
    no_active_secret: 'Der blev ikke fundet nogen aktiv hemmelighed.',
    entity_id_required: 'Entity-ID er påkrævet for at generere metadata.',
    name_id_format_required: 'Name ID-format er påkrævet.',
    unsupported_name_id_format: 'Name ID-formatet understøttes ikke.',
    missing_email_address: 'Brugeren har ingen e-mailadresse.',
    email_address_unverified: 'Brugerens e-mailadresse er ikke bekræftet.',
    invalid_certificate_pem_format: 'Ugyldigt PEM-format for certifikatet',
    acs_url_required: 'Assertion Consumer Service-URL er påkrævet.',
    private_key_required: 'Privat nøgle er påkrævet.',
    certificate_required: 'Certifikat er påkrævet.',
    invalid_saml_request: 'Ugyldig SAML-godkendelsesanmodning.',
    auth_request_issuer_not_match:
      'Udstederen af SAML-godkendelsesanmodningen stemmer ikke overens med tjenesteudbyderens entity-ID.',
    sp_initiated_saml_sso_session_not_found_in_cookies:
      "Sessions-ID'et for SAML SSO startet af tjenesteudbyderen blev ikke fundet i cookies.",
    sp_initiated_saml_sso_session_not_found:
      'SAML SSO-sessionen startet af tjenesteudbyderen blev ikke fundet.',
    state_mismatch: '`state` stemmer ikke overens.',
  },
};

export default Object.freeze(application);
