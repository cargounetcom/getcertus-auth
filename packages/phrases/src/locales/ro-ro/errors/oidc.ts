/* GetCertus addition (MPL-2.0, see GETCERTUS.md): admin console phrases. */
const oidc = {
  aborted: 'Utilizatorul final a întrerupt interacțiunea.',
  invalid_scope: 'Scop nevalid: {{scope}}.',
  invalid_token: 'Tokenul furnizat nu este valid.',
  invalid_client_metadata: 'Metadatele clientului furnizate nu sunt valide.',
  insufficient_scope: 'Tokenului îi lipsește scopul `{{scope}}`.',
  invalid_request: 'Cererea nu este validă.',
  invalid_grant: 'Cererea de grant nu este validă.',
  invalid_issuer: 'Emitent nevalid.',
  invalid_redirect_uri:
    '`redirect_uri` nu corespunde niciunuia dintre `redirect_uris` înregistrate ale clientului.',
  access_denied: 'Acces refuzat.',
  invalid_target: 'Indicator de resursă nevalid.',
  unsupported_grant_type: '`grant_type` solicitat nu este acceptat.',
  unsupported_response_mode: '`response_mode` solicitat nu este acceptat.',
  unsupported_response_type: '`response_type` solicitat nu este acceptat.',
  provider_error: 'Eroare internă OIDC: {{message}}.',
  server_error: 'A apărut o eroare OIDC necunoscută. Încearcă din nou mai târziu.',
  provider_error_fallback: 'A apărut o eroare OIDC: {{code}}.',
  custom_claims_script_error:
    'Eroare în scriptul de claim-uri personalizate: {{error_description}}',
  key_required: 'Este necesară cel puțin o cheie.',
  key_not_found: 'Cheia cu ID-ul {{id}} nu a fost găsită.',
  only_previous_key_can_be_deleted: 'Doar o cheie anterioară poate fi ștearsă.',
  invalid_session_payload: 'Payload de sesiune nevalid.',
  session_not_found: 'Sesiunea nu a fost găsită.',
  invalid_session_account_id: 'accountId al sesiunii nu corespunde.',
  failed_to_revoke_grant: 'Revocarea grantului a eșuat.',
  failed_to_cleanup_session_authorization: 'Curățarea autorizării sesiunii a eșuat.',
};

export default Object.freeze(oidc);
