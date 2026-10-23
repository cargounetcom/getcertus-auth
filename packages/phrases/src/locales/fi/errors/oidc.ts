/* GetCertus addition (MPL-2.0, see GETCERTUS.md): admin console phrases. */
const oidc = {
  aborted: 'Loppukäyttäjä keskeytti vuorovaikutuksen.',
  invalid_scope: 'Virheellinen scope: {{scope}}.',
  invalid_token: 'Annettu tunnus on virheellinen.',
  invalid_client_metadata: 'Annetut asiakkaan metatiedot ovat virheelliset.',
  insufficient_scope: 'Tunnuksesta puuttuu scope `{{scope}}`.',
  invalid_request: 'Pyyntö on virheellinen.',
  invalid_grant: 'Grant-pyyntö on virheellinen.',
  invalid_issuer: 'Virheellinen myöntäjä.',
  invalid_redirect_uri:
    '`redirect_uri` ei vastannut mitään asiakkaan rekisteröidyistä `redirect_uris`-osoitteista.',
  access_denied: 'Pääsy evätty.',
  invalid_target: 'Virheellinen resurssin ilmaisin.',
  unsupported_grant_type: 'Pyydettyä `grant_type`-arvoa ei tueta.',
  unsupported_response_mode: 'Pyydettyä `response_mode`-arvoa ei tueta.',
  unsupported_response_type: 'Pyydettyä `response_type`-arvoa ei tueta.',
  provider_error: 'OIDC:n sisäinen virhe: {{message}}.',
  server_error: 'Tapahtui tuntematon OIDC-virhe. Yritä myöhemmin uudelleen.',
  provider_error_fallback: 'Tapahtui OIDC-virhe: {{code}}.',
  custom_claims_script_error: 'Virhe mukautettujen claimien skriptissä: {{error_description}}',
  key_required: 'Vähintään yksi avain vaaditaan.',
  key_not_found: 'Avainta tunnuksella {{id}} ei löytynyt.',
  only_previous_key_can_be_deleted: 'Vain edellisen avaimen voi poistaa.',
  invalid_session_payload: 'Virheellinen istunnon payload.',
  session_not_found: 'Istuntoa ei löytynyt.',
  invalid_session_account_id: 'Istunnon accountId ei täsmää.',
  failed_to_revoke_grant: 'Grantin peruminen epäonnistui.',
  failed_to_cleanup_session_authorization: 'Istunnon valtuutuksen siivoaminen epäonnistui.',
};

export default Object.freeze(oidc);
