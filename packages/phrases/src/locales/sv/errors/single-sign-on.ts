/* GetCertus addition (MPL-2.0, see GETCERTUS.md): admin console phrases. */
const single_sign_on = {
  forbidden_domains: 'Publika e-postdomäner är inte tillåtna.',
  duplicated_domains: 'Det finns dubbletter av domäner.',
  invalid_domain_format: 'Ogiltigt domänformat.',
  duplicate_connector_name: 'Anslutningsnamnet finns redan. Välj ett annat namn.',
  idp_initiated_authentication_not_supported:
    'IdP-initierad autentisering stöds bara för SAML-anslutningar.',
  idp_initiated_authentication_invalid_application_type:
    'Ogiltig applikationstyp. Endast {{type}}-applikationer är tillåtna.',
  idp_initiated_authentication_redirect_uri_not_registered:
    'redirect_uri är inte registrerad. Kontrollera applikationsinställningarna.',
  idp_initiated_authentication_client_callback_uri_not_found:
    'Klientens callback-URI för IdP-initierad autentisering hittades inte. Kontrollera anslutningsinställningarna.',
  sso_signing_unavailable:
    'Vi kunde inte slutföra inloggningen hos din identitetsleverantör. Kontakta din administratör.',
  can_not_delete_active_signing_key:
    'Den aktiva signeringsnyckeln kan inte tas bort. Aktivera en annan nyckel eller inaktivera den här nyckeln först.',
  can_not_deactivate_signing_key_in_use:
    'Signeringsnyckeln kan inte inaktiveras medan signerade autentiseringsbegäranden är aktiverade. Inaktivera signerade autentiseringsbegäranden först.',
  active_signing_key_required:
    'Ingen aktiv signeringsnyckel hittades. Generera och aktivera en signeringsnyckel innan du aktiverar signerade autentiseringsbegäranden.',
};

export default Object.freeze(single_sign_on);
