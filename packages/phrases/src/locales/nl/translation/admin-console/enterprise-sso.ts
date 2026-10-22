/* GetCertus addition (MPL-2.0, see GETCERTUS.md): admin console phrases. */
const enterprise_sso = {
  page_title: 'Enterprise SSO',
  title: 'Enterprise SSO',
  subtitle: 'Verbind de identiteitsprovider van een organisatie en schakel single sign-on in.',
  create: 'Enterprise-connector toevoegen',
  col_connector_name: 'Naam van connector',
  col_type: 'Type',
  col_email_domain: 'E-maildomein',
  placeholder_title: 'Enterprise-connector',
  placeholder_description:
    'GetCertus biedt veel ingebouwde enterprise-identiteitsproviders; je kunt ook je eigen connector maken met de protocollen SAML en OIDC.',
  create_modal: {
    title: 'Enterprise-connector toevoegen',
    text_divider: 'Of pas je connector aan met een standaardprotocol.',
    connector_name_field_title: 'Naam van connector',
    connector_name_field_placeholder: 'Bijv. {bedrijfsnaam} - {naam identiteitsprovider}',
    create_button_text: 'Connector maken',
  },
  guide: {
    subtitle: 'Een stapsgewijze handleiding om de enterprise-identiteitsprovider te verbinden.',
    finish_button_text: 'Doorgaan',
  },
  basic_info: {
    title: 'Configureer je service in de IdP',
    description:
      'Maak een nieuwe applicatie-integratie met SAML 2.0 in je identiteitsprovider {{name}}. Plak daarin daarna de volgende waarde.',
    saml: {
      acs_url_field_name: 'Assertion Consumer Service-URL (Reply-URL)',
      audience_uri_field_name: 'Audience-URI (SP Entity ID)',
      entity_id_field_name: 'Entity ID van serviceprovider (SP)',
      entity_id_field_tooltip:
        'De SP Entity ID kan elke tekenreeks zijn, meestal een URI of URL als identifier, maar dat is niet verplicht.',
      acs_url_field_placeholder: 'https://your-domain.com/api/saml/callback',
      entity_id_field_placeholder: 'urn:your-domain.com:sp:saml:{serviceProviderId}',
      sign_auth_request: 'Authenticatieverzoek ondertekenen',
      sign_auth_request_tooltip:
        'GetCertus ondertekent SAML-authenticatieverzoeken met een gegenereerd certificaat. Schakel dit alleen in als je identiteitsprovider is ingesteld om ondertekende verzoeken te verifiëren.',
      signing_certificate_field_name: 'Certificaat voor het ondertekenen van verzoeken',
      signing_keys_empty: 'Er zijn nog geen ondertekeningssleutels gegenereerd.',
      generate_signing_key: 'Nieuwe sleutel genereren',
      signing_key_generated: 'De ondertekeningssleutel is gegenereerd.',
      signing_key_activated: 'De ondertekeningssleutel is geactiveerd.',
      signing_key_deactivated: 'De ondertekeningssleutel is gedeactiveerd.',
      signing_key_deleted: 'De ondertekeningssleutel is verwijderd.',
      sign_auth_request_warning:
        'Genereer na het inschakelen hieronder een ondertekeningssleutel en registreer het certificaat bij je identiteitsprovider (en schakel daar verificatie van ondertekende verzoeken in). Totdat het certificaat is geregistreerd, mislukt inloggen via deze verbinding.',
    },
    oidc: {
      redirect_uri_field_name: 'Redirect-URI (callback-URL)',
      redirect_uri_field_description:
        'De redirect-URI is waar gebruikers na SSO-authenticatie naartoe worden gestuurd. Voeg deze URI toe aan de configuratie van je IdP.',
      redirect_uri_field_custom_domain_description:
        "Als je meerdere <a>aangepaste domeinen</a> in GetCertus gebruikt, voeg dan alle bijbehorende callback-URI's toe aan je IdP, zodat SSO op elk domein werkt.\n\nHet standaarddomein van GetCertus (*.logto.app) is altijd geldig — voeg het alleen toe als je ook SSO via dat domein wilt ondersteunen.",
    },
  },
  attribute_mapping: {
    title: 'Attribuuttoewijzingen',
    description:
      '`id` en `email` zijn vereist om het gebruikersprofiel vanuit de IdP te synchroniseren. Voer de volgende claimnaam en waarde in je IdP in.',
    col_sp_claims: 'Waarde van serviceprovider (GetCertus)',
    col_idp_claims: 'Claimnaam van identiteitsprovider',
    idp_claim_tooltip: 'De claimnaam van de identiteitsprovider',
  },
  metadata: {
    title: 'IdP-metadata configureren',
    description: 'Configureer de metadata van de identiteitsprovider',
    dropdown_trigger_text: 'Andere configuratiemethode gebruiken',
    dropdown_title: 'kies je configuratiemethode',
    metadata_format_url: 'Voer de metadata-URL in',
    metadata_format_xml: 'Upload het XML-bestand met metadata',
    metadata_format_manual: 'Voer de metadata handmatig in',
    saml: {
      metadata_url_field_name: 'Metadata-URL',
      metadata_url_description:
        'Haal gegevens dynamisch op via de metadata-URL en houd het certificaat actueel.',
      metadata_xml_field_name: 'XML-bestand met IdP-metadata',
      metadata_xml_uploader_text: 'XML-bestand met metadata uploaden',
      sign_in_endpoint_field_name: 'Aanmeld-URL',
      idp_entity_id_field_name: 'IdP Entity ID (Issuer)',
      certificate_field_name: 'Ondertekeningscertificaat',
      certificate_placeholder: 'Kopieer en plak het x509-certificaat',
      certificate_required: 'Een ondertekeningscertificaat is vereist.',
    },
    oidc: {
      client_id_field_name: 'Client-ID',
      client_secret_field_name: 'Clientgeheim',
      issuer_field_name: 'Issuer',
      scope_field_name: 'Scope',
      scope_field_placeholder: 'Voer de scopes in (gescheiden door een spatie)',
    },
  },
};

export default Object.freeze(enterprise_sso);
