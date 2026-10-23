/* GetCertus addition (MPL-2.0, see GETCERTUS.md): admin console phrases. */
const oidc = {
  aborted: 'Slutbrugeren afbrød interaktionen.',
  invalid_scope: 'Ugyldigt scope: {{scope}}.',
  invalid_token: 'Ugyldigt token angivet.',
  invalid_client_metadata: 'Ugyldige klientmetadata angivet.',
  insufficient_scope: 'Tokenet mangler scope `{{scope}}`.',
  invalid_request: 'Anmodningen er ugyldig.',
  invalid_grant: 'Grant-anmodningen er ugyldig.',
  invalid_issuer: 'Ugyldig udsteder.',
  invalid_redirect_uri:
    '`redirect_uri` matchede ikke nogen af klientens registrerede `redirect_uris`.',
  access_denied: 'Adgang nægtet.',
  invalid_target: 'Ugyldig ressourceindikator.',
  unsupported_grant_type: 'Den anmodede `grant_type` understøttes ikke.',
  unsupported_response_mode: 'Den anmodede `response_mode` understøttes ikke.',
  unsupported_response_type: 'Den anmodede `response_type` understøttes ikke.',
  provider_error: 'Intern OIDC-fejl: {{message}}.',
  server_error: 'Der opstod en ukendt OIDC-fejl. Prøv igen senere.',
  provider_error_fallback: 'Der opstod en OIDC-fejl: {{code}}.',
  custom_claims_script_error: 'Fejl i scriptet til brugerdefinerede claims: {{error_description}}',
  key_required: 'Der kræves mindst én nøgle.',
  key_not_found: 'Nøglen med ID {{id}} blev ikke fundet.',
  only_previous_key_can_be_deleted: 'Kun en tidligere nøgle kan slettes.',
  invalid_session_payload: 'Ugyldig sessions-payload.',
  session_not_found: 'Sessionen blev ikke fundet.',
  invalid_session_account_id: 'Sessionens accountId stemmer ikke overens.',
  failed_to_revoke_grant: 'Grant kunne ikke tilbagekaldes.',
  failed_to_cleanup_session_authorization: 'Sessionsautorisationen kunne ikke ryddes op.',
};

export default Object.freeze(oidc);
