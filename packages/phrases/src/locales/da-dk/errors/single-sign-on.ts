/* GetCertus addition (MPL-2.0, see GETCERTUS.md): admin console phrases. */
const single_sign_on = {
  forbidden_domains: 'Offentlige e-maildomæner er ikke tilladt.',
  duplicated_domains: 'Der er duplikerede domæner.',
  invalid_domain_format: 'Ugyldigt domæneformat.',
  duplicate_connector_name: 'Connector-navnet findes allerede. Vælg et andet navn.',
  idp_initiated_authentication_not_supported:
    'IdP-initieret godkendelse understøttes kun for SAML-connectorer.',
  idp_initiated_authentication_invalid_application_type:
    'Ugyldig applikationstype. Kun {{type}}-applikationer er tilladt.',
  idp_initiated_authentication_redirect_uri_not_registered:
    'redirect_uri er ikke registreret. Kontrollér applikationsindstillingerne.',
  idp_initiated_authentication_client_callback_uri_not_found:
    'Klientens callback-URI til IdP-initieret godkendelse blev ikke fundet. Kontrollér connector-indstillingerne.',
  sso_signing_unavailable:
    'Vi kunne ikke gennemføre login hos din identitetsudbyder. Kontakt din administrator.',
  can_not_delete_active_signing_key:
    'Den aktive signeringsnøgle kan ikke slettes. Aktivér en anden nøgle, eller deaktivér denne nøgle først.',
  can_not_deactivate_signing_key_in_use:
    'Signeringsnøglen kan ikke deaktiveres, mens signerede godkendelsesanmodninger er slået til. Slå signerede godkendelsesanmodninger fra først.',
  active_signing_key_required:
    'Der blev ikke fundet nogen aktiv signeringsnøgle. Generér og aktivér en signeringsnøgle, før du slår signerede godkendelsesanmodninger til.',
};

export default Object.freeze(single_sign_on);
