/* GetCertus addition (MPL-2.0, see GETCERTUS.md): admin console phrases. */
const enterprise_sso = {
  page_title: 'Enterprise SSO',
  title: 'Enterprise SSO',
  subtitle: 'Forbind virksomhedens identitetsudbyder, og aktivér single sign-on.',
  create: 'Tilføj virksomheds-connector',
  col_connector_name: 'Connectorens navn',
  col_type: 'Type',
  col_email_domain: 'E-maildomæne',
  placeholder_title: 'Virksomheds-connector',
  placeholder_description:
    'GetCertus har mange indbyggede identitetsudbydere til virksomheder, og du kan også oprette dine egne med protokollerne SAML og OIDC.',
  create_modal: {
    title: 'Tilføj virksomheds-connector',
    text_divider: 'Eller tilpas din connector med en standardprotokol.',
    connector_name_field_title: 'Connectorens navn',
    connector_name_field_placeholder: 'F.eks. {virksomhedsnavn} - {identitetsudbyderens navn}',
    create_button_text: 'Opret connector',
  },
  guide: {
    subtitle: 'En trin-for-trin-guide til at forbinde virksomhedens identitetsudbyder.',
    finish_button_text: 'Fortsæt',
  },
  basic_info: {
    title: "Konfigurér din tjeneste i IdP'en",
    description:
      'Opret en ny applikationsintegration med SAML 2.0 i din identitetsudbyder {{name}}. Indsæt derefter følgende værdi i den.',
    saml: {
      acs_url_field_name: 'URL til Assertion Consumer Service (Reply URL)',
      audience_uri_field_name: 'Audience-URI (SP Entity ID)',
      entity_id_field_name: 'Tjenesteudbyderens (SP) Entity ID',
      entity_id_field_tooltip:
        'SP Entity ID kan være en vilkårlig streng, typisk en URI eller URL som identifikator, men det er ikke påkrævet.',
      acs_url_field_placeholder: 'https://your-domain.com/api/saml/callback',
      entity_id_field_placeholder: 'urn:your-domain.com:sp:saml:{serviceProviderId}',
      sign_auth_request: 'Signér godkendelsesanmodning',
      sign_auth_request_tooltip:
        'GetCertus signerer SAML-godkendelsesanmodninger med et genereret certifikat. Aktivér kun, hvis din identitetsudbyder er konfigureret til at verificere signerede anmodninger.',
      signing_certificate_field_name: 'Certifikat til signering af anmodninger',
      signing_keys_empty: 'Der er ikke genereret nogen signeringsnøgler.',
      generate_signing_key: 'Generér ny nøgle',
      signing_key_generated: 'Signeringsnøglen er genereret.',
      signing_key_activated: 'Signeringsnøglen er aktiveret.',
      signing_key_deactivated: 'Signeringsnøglen er deaktiveret.',
      signing_key_deleted: 'Signeringsnøglen er slettet.',
      sign_auth_request_warning:
        'Generér efter aktivering en signeringsnøgle nedenfor, og registrér dens certifikat hos din identitetsudbyder (og slå verificering af signerede anmodninger til der). Indtil certifikatet er registreret, mislykkes login via denne forbindelse.',
    },
    oidc: {
      redirect_uri_field_name: 'Omdirigerings-URI (callback-URL)',
      redirect_uri_field_description:
        "Omdirigerings-URI'en er der, hvor brugere sendes hen efter SSO-godkendelse. Tilføj URI'en til din IdP's konfiguration.",
      redirect_uri_field_custom_domain_description:
        "Hvis du bruger flere <a>brugerdefinerede domæner</a> i GetCertus, så tilføj alle tilsvarende callback-URI'er til din IdP, så SSO virker på alle domæner.\n\nGetCertus' standarddomæne (*.logto.app) er altid gyldigt — tilføj det kun, hvis du også vil understøtte SSO via det domæne.",
    },
  },
  attribute_mapping: {
    title: 'Attributtilknytninger',
    description:
      "`id` og `email` er påkrævet for at synkronisere brugerprofilen fra IdP'en. Indtast følgende claim-navn og værdi i din IdP.",
    col_sp_claims: 'Tjenesteudbyderens værdi (GetCertus)',
    col_idp_claims: 'Identitetsudbyderens claim-navn',
    idp_claim_tooltip: 'Identitetsudbyderens claim-navn',
  },
  metadata: {
    title: 'Konfigurér IdP-metadata',
    description: 'Konfigurér metadata fra identitetsudbyderen',
    dropdown_trigger_text: 'Brug en anden konfigurationsmetode',
    dropdown_title: 'vælg din konfigurationsmetode',
    metadata_format_url: "Indtast metadata-URL'en",
    metadata_format_xml: 'Upload XML-filen med metadata',
    metadata_format_manual: 'Indtast metadata manuelt',
    saml: {
      metadata_url_field_name: 'Metadata-URL',
      metadata_url_description:
        "Hent data dynamisk fra metadata-URL'en, og hold certifikatet opdateret.",
      metadata_xml_field_name: 'XML-fil med IdP-metadata',
      metadata_xml_uploader_text: 'Upload XML-fil med metadata',
      sign_in_endpoint_field_name: 'Login-URL',
      idp_entity_id_field_name: 'IdP Entity ID (Issuer)',
      certificate_field_name: 'Signeringscertifikat',
      certificate_placeholder: 'Kopiér og indsæt x509-certifikatet',
      certificate_required: 'Signeringscertifikat er påkrævet.',
    },
    oidc: {
      client_id_field_name: 'Klient-ID',
      client_secret_field_name: 'Klienthemmelighed',
      issuer_field_name: 'Udsteder',
      scope_field_name: 'Scope',
      scope_field_placeholder: 'Indtast scopes (adskilt af mellemrum)',
    },
  },
};

export default Object.freeze(enterprise_sso);
