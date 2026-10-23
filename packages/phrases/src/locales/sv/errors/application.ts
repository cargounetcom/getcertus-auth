/* GetCertus addition (MPL-2.0, see GETCERTUS.md): admin console phrases. */
const application = {
  invalid_type: 'Endast maskin-till-maskin-applikationer kan ha kopplade roller.',
  role_exists: 'Roll-ID {{roleId}} har redan lagts till i applikationen.',
  invalid_role_type: 'En roll av användartyp kan inte tilldelas en maskin-till-maskin-applikation.',
  invalid_third_party_application_type:
    'Endast traditionella webb-, ensides- och native-applikationer kan markeras som tredjepartsappar.',
  third_party_application_only: 'Funktionen är bara tillgänglig för tredjepartsapplikationer.',
  third_party_application_cannot_enable_token_exchange:
    'Tredjepartsapplikationer får inte aktivera token exchange.',
  user_consent_scopes_not_found: 'Ogiltiga scopes för användarsamtycke.',
  consent_management_api_scopes_not_allowed: 'Management API-scopes är inte tillåtna.',
  device_flow_native_only: 'Device flow är bara tillgängligt för native-applikationer.',
  device_flow_not_changeable: 'Device flow kan inte ändras efter att applikationen skapats.',
  protected_app_metadata_is_required: 'Metadata för den skyddade appen krävs.',
  protected_app_not_configured:
    'Ingen leverantör för skyddade appar är konfigurerad. Funktionen är inte tillgänglig i öppen källkodsversionen.',
  cloudflare_unknown_error: 'Okänt fel vid anrop till Cloudflare API',
  protected_application_only: 'Funktionen är bara tillgänglig för skyddade applikationer.',
  protected_application_misconfigured: 'Den skyddade applikationen är felkonfigurerad.',
  protected_application_subdomain_exists: 'Den skyddade applikationens underdomän används redan.',
  invalid_subdomain: 'Ogiltig underdomän.',
  custom_domain_not_found: 'Den anpassade domänen hittades inte.',
  should_delete_custom_domains_first: 'Ta bort de anpassade domänerna först.',
  no_legacy_secret_found: 'Applikationen har ingen äldre hemlighet.',
  secret_name_exists: 'Det finns redan en hemlighet med det namnet.',
  sync_application_secret_failed: 'Synkroniseringen av applikationshemligheten misslyckades.',
  saml: {
    use_saml_app_api:
      'Använd API:et `[METHOD] /saml-applications(/.*)?` för att hantera SAML-appar.',
    saml_application_only: 'API:et är bara tillgängligt för SAML-applikationer.',
    reach_oss_limit: 'Du KAN INTE skapa fler SAML-appar eftersom gränsen på {{limit}} har nåtts.',
    acs_url_binding_not_supported:
      'Endast HTTP-POST-bindning stöds för att ta emot SAML-assertions.',
    acs_url_scheme_not_supported:
      'Endast schemana HTTP och HTTPS stöds för Assertion Consumer Service-URL:en.',
    can_not_delete_active_secret: 'Den aktiva hemligheten kan inte tas bort.',
    no_active_secret: 'Ingen aktiv hemlighet hittades.',
    entity_id_required: 'Entity-ID krävs för att generera metadata.',
    name_id_format_required: 'Name ID-format krävs.',
    unsupported_name_id_format: 'Name ID-formatet stöds inte.',
    missing_email_address: 'Användaren har ingen e-postadress.',
    email_address_unverified: 'Användarens e-postadress är inte verifierad.',
    invalid_certificate_pem_format: 'Ogiltigt PEM-format för certifikatet',
    acs_url_required: 'Assertion Consumer Service-URL krävs.',
    private_key_required: 'Privat nyckel krävs.',
    certificate_required: 'Certifikat krävs.',
    invalid_saml_request: 'Ogiltig SAML-autentiseringsbegäran.',
    auth_request_issuer_not_match:
      'Utfärdaren av SAML-autentiseringsbegäran stämmer inte med tjänsteleverantörens entity-ID.',
    sp_initiated_saml_sso_session_not_found_in_cookies:
      'Sessions-ID för SAML SSO initierad av tjänsteleverantören hittades inte i cookies.',
    sp_initiated_saml_sso_session_not_found:
      'SAML SSO-sessionen initierad av tjänsteleverantören hittades inte.',
    state_mismatch: '`state` stämmer inte.',
  },
};

export default Object.freeze(application);
