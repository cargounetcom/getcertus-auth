/* GetCertus addition (MPL-2.0, see GETCERTUS.md): admin console phrases. */
const enterprise_sso = {
  page_title: 'Enterprise SSO',
  title: 'Enterprise SSO',
  subtitle: 'Anslut företagets identitetsleverantör och aktivera enkel inloggning (SSO).',
  create: 'Lägg till företagskoppling',
  col_connector_name: 'Kopplingens namn',
  col_type: 'Typ',
  col_email_domain: 'E-postdomän',
  placeholder_title: 'Företagskoppling',
  placeholder_description:
    'GetCertus har många inbyggda identitetsleverantörer för företag, och du kan även skapa egna med protokollen SAML och OIDC.',
  create_modal: {
    title: 'Lägg till företagskoppling',
    text_divider: 'Eller anpassa din koppling med ett standardprotokoll.',
    connector_name_field_title: 'Kopplingens namn',
    connector_name_field_placeholder: 'T.ex. {företagsnamn} - {identitetsleverantörens namn}',
    create_button_text: 'Skapa koppling',
  },
  guide: {
    subtitle: 'En steg-för-steg-guide för att ansluta företagets identitetsleverantör.',
    finish_button_text: 'Fortsätt',
  },
  basic_info: {
    title: 'Konfigurera din tjänst i IdP:n',
    description:
      'Skapa en ny applikationsintegration med SAML 2.0 i din identitetsleverantör {{name}}. Klistra sedan in följande värde i den.',
    saml: {
      acs_url_field_name: 'URL för Assertion Consumer Service (Reply URL)',
      audience_uri_field_name: 'Audience-URI (SP Entity ID)',
      entity_id_field_name: 'Tjänsteleverantörens (SP) Entity ID',
      entity_id_field_tooltip:
        'SP Entity ID kan vara vilken sträng som helst, vanligtvis en URI eller URL som identifierare, men det är inte obligatoriskt.',
      acs_url_field_placeholder: 'https://your-domain.com/api/saml/callback',
      entity_id_field_placeholder: 'urn:your-domain.com:sp:saml:{serviceProviderId}',
      sign_auth_request: 'Signera autentiseringsbegäran',
      sign_auth_request_tooltip:
        'GetCertus signerar SAML-autentiseringsbegäranden med ett genererat certifikat. Aktivera endast om din identitetsleverantör är konfigurerad att verifiera signerade begäranden.',
      signing_certificate_field_name: 'Certifikat för signering av begäranden',
      signing_keys_empty: 'Inga signeringsnycklar har genererats.',
      generate_signing_key: 'Generera ny nyckel',
      signing_key_generated: 'Signeringsnyckeln har genererats.',
      signing_key_activated: 'Signeringsnyckeln har aktiverats.',
      signing_key_deactivated: 'Signeringsnyckeln har inaktiverats.',
      signing_key_deleted: 'Signeringsnyckeln har tagits bort.',
      sign_auth_request_warning:
        'Generera efter aktiveringen en signeringsnyckel nedan och registrera dess certifikat hos din identitetsleverantör (och aktivera verifiering av signerade begäranden där). Tills certifikatet är registrerat misslyckas inloggning via denna anslutning.',
    },
    oidc: {
      redirect_uri_field_name: 'Omdirigerings-URI (callback-URL)',
      redirect_uri_field_description:
        'Omdirigerings-URI:n är dit användare skickas efter SSO-autentisering. Lägg till URI:n i din IdP:s konfiguration.',
      redirect_uri_field_custom_domain_description:
        'Om du använder flera <a>anpassade domäner</a> i GetCertus, lägg till alla motsvarande callback-URI:er i din IdP så att SSO fungerar på varje domän.\n\nGetCertus standarddomän (*.logto.app) är alltid giltig — lägg bara till den om du även vill stödja SSO via den domänen.',
    },
  },
  attribute_mapping: {
    title: 'Attributmappningar',
    description:
      '`id` och `email` krävs för att synkronisera användarprofilen från IdP:n. Ange följande claim-namn och värde i din IdP.',
    col_sp_claims: 'Tjänsteleverantörens värde (GetCertus)',
    col_idp_claims: 'Identitetsleverantörens claim-namn',
    idp_claim_tooltip: 'Identitetsleverantörens claim-namn',
  },
  metadata: {
    title: 'Konfigurera IdP-metadata',
    description: 'Konfigurera metadata från identitetsleverantören',
    dropdown_trigger_text: 'Använd en annan konfigurationsmetod',
    dropdown_title: 'välj konfigurationsmetod',
    metadata_format_url: 'Ange metadata-URL:en',
    metadata_format_xml: 'Ladda upp XML-filen med metadata',
    metadata_format_manual: 'Ange metadata manuellt',
    saml: {
      metadata_url_field_name: 'Metadata-URL',
      metadata_url_description:
        'Hämta data dynamiskt från metadata-URL:en och håll certifikatet uppdaterat.',
      metadata_xml_field_name: 'XML-fil med IdP-metadata',
      metadata_xml_uploader_text: 'Ladda upp XML-fil med metadata',
      sign_in_endpoint_field_name: 'Inloggnings-URL',
      idp_entity_id_field_name: 'IdP Entity ID (Issuer)',
      certificate_field_name: 'Signeringscertifikat',
      certificate_placeholder: 'Kopiera och klistra in x509-certifikatet',
      certificate_required: 'Signeringscertifikat krävs.',
    },
    oidc: {
      client_id_field_name: 'Klient-ID',
      client_secret_field_name: 'Klienthemlighet',
      issuer_field_name: 'Utfärdare',
      scope_field_name: 'Scope',
      scope_field_placeholder: 'Ange scopes (separerade med mellanslag)',
    },
  },
};

export default Object.freeze(enterprise_sso);
