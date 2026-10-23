/* GetCertus addition (MPL-2.0, see GETCERTUS.md): admin console phrases. */
const oidc = {
  aborted: 'Slutanvändaren avbröt interaktionen.',
  invalid_scope: 'Ogiltigt scope: {{scope}}.',
  invalid_token: 'Ogiltig token angavs.',
  invalid_client_metadata: 'Ogiltiga klientmetadata angavs.',
  insufficient_scope: 'Token saknar scope `{{scope}}`.',
  invalid_request: 'Förfrågan är ogiltig.',
  invalid_grant: 'Grant-förfrågan är ogiltig.',
  invalid_issuer: 'Ogiltig utfärdare.',
  invalid_redirect_uri:
    '`redirect_uri` matchade inte någon av klientens registrerade `redirect_uris`.',
  access_denied: 'Åtkomst nekad.',
  invalid_target: 'Ogiltig resursindikator.',
  unsupported_grant_type: '`grant_type` som begärdes stöds inte.',
  unsupported_response_mode: '`response_mode` som begärdes stöds inte.',
  unsupported_response_type: '`response_type` som begärdes stöds inte.',
  provider_error: 'Internt OIDC-fel: {{message}}.',
  server_error: 'Ett okänt OIDC-fel uppstod. Försök igen senare.',
  provider_error_fallback: 'Ett OIDC-fel uppstod: {{code}}.',
  custom_claims_script_error: 'Fel i skriptet för anpassade claims: {{error_description}}',
  key_required: 'Minst en nyckel krävs.',
  key_not_found: 'Nyckel med ID {{id}} hittades inte.',
  only_previous_key_can_be_deleted: 'Endast en tidigare nyckel kan tas bort.',
  invalid_session_payload: 'Ogiltig sessions-payload.',
  session_not_found: 'Sessionen hittades inte.',
  invalid_session_account_id: 'Sessionens accountId stämmer inte.',
  failed_to_revoke_grant: 'Det gick inte att återkalla grant.',
  failed_to_cleanup_session_authorization: 'Det gick inte att rensa sessionens auktorisering.',
};

export default Object.freeze(oidc);
