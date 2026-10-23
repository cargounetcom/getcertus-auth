/* GetCertus addition (MPL-2.0, see GETCERTUS.md): admin console phrases. */
const oidc = {
  aborted: 'De eindgebruiker heeft de interactie afgebroken.',
  invalid_scope: 'Ongeldige scope: {{scope}}.',
  invalid_token: 'Ongeldig token opgegeven.',
  invalid_client_metadata: 'Ongeldige clientmetadata opgegeven.',
  insufficient_scope: 'Het token mist scope `{{scope}}`.',
  invalid_request: 'Het verzoek is ongeldig.',
  invalid_grant: 'Het grantverzoek is ongeldig.',
  invalid_issuer: 'Ongeldige issuer.',
  invalid_redirect_uri:
    '`redirect_uri` komt niet overeen met een van de geregistreerde `redirect_uris` van de client.',
  access_denied: 'Toegang geweigerd.',
  invalid_target: 'Ongeldige resource-indicator.',
  unsupported_grant_type: 'Niet-ondersteund `grant_type` aangevraagd.',
  unsupported_response_mode: 'Niet-ondersteunde `response_mode` aangevraagd.',
  unsupported_response_type: 'Niet-ondersteund `response_type` aangevraagd.',
  provider_error: 'Interne OIDC-fout: {{message}}.',
  server_error: 'Er is een onbekende OIDC-fout opgetreden. Probeer het later opnieuw.',
  provider_error_fallback: 'Er is een OIDC-fout opgetreden: {{code}}.',
  custom_claims_script_error: 'Fout in het script voor aangepaste claims: {{error_description}}',
  key_required: 'Er is minstens één sleutel vereist.',
  key_not_found: 'Sleutel met ID {{id}} is niet gevonden.',
  only_previous_key_can_be_deleted: 'Alleen een vorige sleutel kan worden verwijderd.',
  invalid_session_payload: 'Ongeldige sessie-payload.',
  session_not_found: 'Sessie niet gevonden.',
  invalid_session_account_id: 'De accountId van de sessie komt niet overeen.',
  failed_to_revoke_grant: 'De grant kon niet worden ingetrokken.',
  failed_to_cleanup_session_authorization: 'De sessieautorisatie kon niet worden opgeschoond.',
};

export default Object.freeze(oidc);
