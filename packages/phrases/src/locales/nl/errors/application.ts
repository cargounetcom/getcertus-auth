/* GetCertus addition (MPL-2.0, see GETCERTUS.md): admin console phrases. */
const application = {
  invalid_type: 'Alleen machine-to-machine-applicaties kunnen gekoppelde rollen hebben.',
  role_exists: 'De rol-ID {{roleId}} is al aan deze applicatie toegevoegd.',
  invalid_role_type:
    'Een rol van het type gebruiker kan niet aan een machine-to-machine-applicatie worden toegewezen.',
  invalid_third_party_application_type:
    'Alleen traditionele web-, single-page- en native applicaties kunnen als apps van derden worden gemarkeerd.',
  third_party_application_only: 'Deze functie is alleen beschikbaar voor applicaties van derden.',
  third_party_application_cannot_enable_token_exchange:
    'Applicaties van derden mogen token exchange niet inschakelen.',
  user_consent_scopes_not_found: 'Ongeldige toestemmingsscopes van de gebruiker.',
  consent_management_api_scopes_not_allowed: 'Management API-scopes zijn niet toegestaan.',
  device_flow_native_only: 'De device flow is alleen beschikbaar voor native applicaties.',
  device_flow_not_changeable:
    'De device flow kan na het aanmaken van de applicatie niet worden gewijzigd.',
  protected_app_metadata_is_required: 'Metadata van de beveiligde app zijn verplicht.',
  protected_app_not_configured:
    'Er is geen provider voor beveiligde apps geconfigureerd. Deze functie is niet beschikbaar in de open-sourceversie.',
  cloudflare_unknown_error: 'Onbekende fout bij het aanroepen van de Cloudflare API',
  protected_application_only: 'Deze functie is alleen beschikbaar voor beveiligde applicaties.',
  protected_application_misconfigured: 'De beveiligde applicatie is verkeerd geconfigureerd.',
  protected_application_subdomain_exists:
    'Het subdomein van de beveiligde applicatie is al in gebruik.',
  invalid_subdomain: 'Ongeldig subdomein.',
  custom_domain_not_found: 'Eigen domein niet gevonden.',
  should_delete_custom_domains_first: 'Verwijder eerst de eigen domeinen.',
  no_legacy_secret_found: 'De applicatie heeft geen oud geheim.',
  secret_name_exists: 'Er bestaat al een geheim met deze naam.',
  sync_application_secret_failed: 'Synchroniseren van het applicatiegeheim is mislukt.',
  saml: {
    use_saml_app_api: 'Gebruik de API `[METHOD] /saml-applications(/.*)?` om SAML-apps te beheren.',
    saml_application_only: 'Deze API is alleen beschikbaar voor SAML-applicaties.',
    reach_oss_limit: 'Je kunt GEEN SAML-apps meer maken: de limiet van {{limit}} is bereikt.',
    acs_url_binding_not_supported:
      'Alleen HTTP-POST-binding wordt ondersteund voor het ontvangen van SAML-assertions.',
    acs_url_scheme_not_supported:
      "Alleen de schema's HTTP en HTTPS worden ondersteund voor de URL van de Assertion Consumer Service.",
    can_not_delete_active_secret: 'Het actieve geheim kan niet worden verwijderd.',
    no_active_secret: 'Geen actief geheim gevonden.',
    entity_id_required: 'Een entity-ID is vereist om metadata te genereren.',
    name_id_format_required: 'Het Name ID-formaat is vereist.',
    unsupported_name_id_format: 'Niet-ondersteund Name ID-formaat.',
    missing_email_address: 'De gebruiker heeft geen e-mailadres.',
    email_address_unverified: 'Het e-mailadres van de gebruiker is niet geverifieerd.',
    invalid_certificate_pem_format: 'Ongeldige PEM-notatie van het certificaat',
    acs_url_required: 'De URL van de Assertion Consumer Service is vereist.',
    private_key_required: 'Een private sleutel is vereist.',
    certificate_required: 'Een certificaat is vereist.',
    invalid_saml_request: 'Ongeldig SAML-authenticatieverzoek.',
    auth_request_issuer_not_match:
      'De issuer van het SAML-authenticatieverzoek komt niet overeen met de entity-ID van de serviceprovider.',
    sp_initiated_saml_sso_session_not_found_in_cookies:
      'De sessie-ID van de door de serviceprovider gestarte SAML SSO is niet gevonden in de cookies.',
    sp_initiated_saml_sso_session_not_found:
      'De door de serviceprovider gestarte SAML SSO-sessie is niet gevonden.',
    state_mismatch: '`state` komt niet overeen.',
  },
};

export default Object.freeze(application);
