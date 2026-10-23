/* GetCertus addition (MPL-2.0, see GETCERTUS.md): admin console phrases. */
const oidc = {
  aborted: 'Chuir an t-úsáideoir deiridh deireadh leis an idirghníomhaíocht.',
  invalid_scope: 'Scóip neamhbhailí: {{scope}}.',
  invalid_token: 'Tugadh comhartha neamhbhailí.',
  invalid_client_metadata: 'Tugadh meiteashonraí cliaint neamhbhailí.',
  insufficient_scope: 'Tá an scóip `{{scope}}` in easnamh ar an gcomhartha.',
  invalid_request: 'Tá an t-iarratas neamhbhailí.',
  invalid_grant: 'Tá an t-iarratas deontais neamhbhailí.',
  invalid_issuer: 'Eisitheoir neamhbhailí.',
  invalid_redirect_uri:
    'Níor mheaitseáil `redirect_uri` aon cheann de `redirect_uris` cláraithe an chliaint.',
  access_denied: 'Diúltaíodh rochtain.',
  invalid_target: 'Táscaire acmhainne neamhbhailí.',
  unsupported_grant_type: 'Iarradh `grant_type` nach dtacaítear leis.',
  unsupported_response_mode: 'Iarradh `response_mode` nach dtacaítear leis.',
  unsupported_response_type: 'Iarradh `response_type` nach dtacaítear leis.',
  provider_error: 'Earráid inmheánach OIDC: {{message}}.',
  server_error: 'Tharla earráid OIDC anaithnid. Bain triail eile as ar ball.',
  provider_error_fallback: 'Tharla earráid OIDC: {{code}}.',
  custom_claims_script_error: 'Earráid i script na n-éileamh saincheaptha: {{error_description}}',
  key_required: 'Tá eochair amháin ar a laghad riachtanach.',
  key_not_found: 'Níor aimsíodh an eochair leis an aitheantas {{id}}.',
  only_previous_key_can_be_deleted: 'Ní féidir ach eochair roimhe seo a scriosadh.',
  invalid_session_payload: 'Payload seisiúin neamhbhailí.',
  session_not_found: 'Níor aimsíodh an seisiún.',
  invalid_session_account_id: 'Ní mheaitseálann accountId an tseisiúin.',
  failed_to_revoke_grant: 'Theip ar an deontas a chúlghairm.',
  failed_to_cleanup_session_authorization: 'Theip ar údarú an tseisiúin a ghlanadh.',
};

export default Object.freeze(oidc);
