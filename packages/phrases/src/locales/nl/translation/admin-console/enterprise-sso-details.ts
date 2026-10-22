/* GetCertus addition (MPL-2.0, see GETCERTUS.md): admin console phrases. */
const enterprise_sso_details = {
  back_to_sso_connectors: 'Terug naar enterprise SSO',
  page_title: 'Details enterprise SSO-connector',
  readme_drawer_title: 'Enterprise SSO',
  readme_drawer_subtitle:
    'Stel enterprise SSO-connectors in om SSO voor eindgebruikers mogelijk te maken',
  tab_experience: 'SSO-ervaring',
  tab_connection: 'Verbinding',
  tab_idp_initiated_auth: 'Door IdP gestarte SSO',
  general_settings_title: 'Algemeen',
  general_settings_description:
    'Configureer de ervaring van eindgebruikers en koppel het e-maildomein van de organisatie voor de door SP gestarte SSO-flow.',
  custom_branding_title: 'Weergave',
  custom_branding_description:
    'Pas de naam en het logo aan die eindgebruikers zien in de single sign-on-flow. Leeg betekent standaardwaarden.',
  email_domain_field_name: 'E-maildomeinen van de organisatie',
  email_domain_field_description:
    'Gebruikers met deze e-maildomeinen kunnen SSO gebruiken om zich te authenticeren. Controleer eerst of het domein van jullie is voordat je het toevoegt.',
  email_domain_field_placeholder: 'Voer een of meer e-maildomeinen in (bijv. jouwbedrijf.nl)',
  sync_profile_field_name: 'Profielgegevens synchroniseren vanuit de identiteitsprovider',
  sync_profile_option: {
    register_only: 'Alleen synchroniseren bij eerste aanmelding',
    each_sign_in: 'Bij elke aanmelding synchroniseren',
  },
  connector_name_field_name: 'Naam van connector',
  display_name_field_name: 'Weergavenaam',
  connector_logo_field_name: 'Weergavelogo',
  connector_logo_field_description:
    'Elke afbeelding moet kleiner zijn dan 500 KB; alleen SVG, PNG, JPG en JPEG.',
  branding_logo_context: 'Logo uploaden',
  branding_logo_error: 'Fout bij uploaden van logo: {{error}}',
  branding_light_logo_context: 'Logo voor lichte modus uploaden',
  branding_light_logo_error: 'Fout bij uploaden van logo voor lichte modus: {{error}}',
  branding_logo_field_name: 'Logo',
  branding_logo_field_placeholder: 'https://your.domain/logo.png',
  branding_dark_logo_context: 'Logo voor donkere modus uploaden',
  branding_dark_logo_error: 'Fout bij uploaden van logo voor donkere modus: {{error}}',
  branding_dark_logo_field_name: 'Logo (donkere modus)',
  branding_dark_logo_field_placeholder: 'https://your.domain/dark-mode-logo.png',
  check_connection_guide: 'Verbindingshandleiding',
  enterprise_sso_deleted: 'De enterprise SSO-connector is verwijderd',
  delete_confirm_modal_title: 'Enterprise SSO-connector verwijderen',
  delete_confirm_modal_content:
    'Weet je zeker dat je deze enterprise-connector wilt verwijderen? Gebruikers van identiteitsproviders kunnen dan geen single sign-on meer gebruiken.',
  upload_idp_metadata_title_saml: 'Metadata uploaden',
  upload_idp_metadata_description_saml:
    'Configureer de metadata die je hebt gekopieerd uit de identiteitsprovider.',
  upload_idp_metadata_title_oidc: 'Inloggegevens uploaden',
  upload_idp_metadata_description_oidc:
    'Configureer de inloggegevens en OIDC-tokeninformatie die je hebt gekopieerd uit de identiteitsprovider.',
  upload_idp_metadata_button_text: 'XML-bestand met metadata uploaden',
  upload_signing_certificate_button_text: 'Bestand met ondertekeningscertificaat uploaden',
  configure_domain_field_info_text:
    'Voeg een e-maildomein toe om gebruikers van de organisatie naar hun identiteitsprovider te leiden voor single sign-on.',
  email_domain_field_required: 'Een e-maildomein is vereist om enterprise SSO in te schakelen.',
  upload_saml_idp_metadata_info_text_url:
    'Plak de metadata-URL van de identiteitsprovider om te verbinden.',
  upload_saml_idp_metadata_info_text_xml:
    'Plak de metadata van de identiteitsprovider om te verbinden.',
  upload_saml_idp_metadata_info_text_manual:
    'Vul de metadata van de identiteitsprovider in om te verbinden.',
  upload_oidc_idp_info_text: 'Vul de gegevens van de identiteitsprovider in om te verbinden.',
  service_provider_property_title: 'Configureren in de IdP',
  service_provider_property_description:
    'Stel een applicatie-integratie in met {{protocol}} in je identiteitsprovider. Voer de gegevens in die GetCertus verstrekt.',
  attribute_mapping_title: 'Attribuuttoewijzingen',
  attribute_mapping_description:
    'Synchroniseer gebruikersprofielen vanuit de identiteitsprovider door attribuuttoewijzingen te configureren aan de kant van de identiteitsprovider of van GetCertus.',
  saml_preview: {
    sign_on_url: 'Aanmeld-URL',
    entity_id: 'Issuer',
    x509_certificate: 'Ondertekeningscertificaat',
    certificate_content: 'Verloopt {{date}}',
  },
  oidc_preview: {
    authorization_endpoint: 'Autorisatie-endpoint',
    token_endpoint: 'Token-endpoint',
    userinfo_endpoint: 'Endpoint voor gebruikersinformatie',
    jwks_uri: 'Endpoint voor JSON Web Key Set',
    issuer: 'Issuer',
  },
  idp_initiated_auth_config: {
    card_title: 'Door IdP gestarte SSO',
    card_description:
      'Gebruikers starten de authenticatie meestal vanuit je app via de door SP gestarte SSO-flow. Schakel deze functie ALLEEN in als het echt nodig is.',
    enable_idp_initiated_sso: 'Door IdP gestarte SSO inschakelen',
    enable_idp_initiated_sso_description:
      "Laat gebruikers van de organisatie de authenticatie direct starten vanuit het portaal van de identiteitsprovider. Zorg dat je de mogelijke beveiligingsrisico's begrijpt voordat je dit inschakelt.",
    default_application: 'Standaardapplicatie',
    default_application_tooltip:
      'De doelapplicatie waarnaar de gebruiker na authenticatie wordt doorgestuurd.',
    empty_applications_error:
      'Geen applicaties gevonden. Voeg er een toe in het onderdeel <a>Applicaties</a>.',
    empty_applications_placeholder: 'Geen applicaties',
    authentication_type: 'Type authenticatie',
    auto_authentication_disabled_title: 'Doorsturen naar client voor door SP gestarte SSO',
    auto_authentication_disabled_description:
      'Aanbevolen. Stuur gebruikers door naar de clientapplicatie om een veilige, door SP gestarte OIDC-authenticatie te beginnen. Dit voorkomt CSRF-aanvallen.',
    auto_authentication_enabled_title: 'Direct inloggen via door IdP gestarte SSO',
    auto_authentication_enabled_description:
      'Na succesvol inloggen worden gebruikers met de autorisatiecode doorgestuurd naar de opgegeven redirect-URI (zonder state- en PKCE-validatie).',
    auto_authentication_disabled_app: 'Voor traditionele webapps en single-page apps (SPA)',
    auto_authentication_enabled_app: 'Voor traditionele webapps',
    idp_initiated_auth_callback_uri: 'Callback-URI van de client',
    idp_initiated_auth_callback_uri_tooltip:
      'De callback-URI van de client om een door SP gestarte SSO-authenticatie te beginnen. Er wordt een ssoConnectorId als queryparameter aan de URI toegevoegd. (bijv. https://your.domain/sso/callback?connectorId={{ssoConnectorId}})',
    redirect_uri: 'Redirect-URI na inloggen',
    redirect_uri_tooltip:
      'De redirect-URI waarnaar gebruikers na succesvol inloggen worden gestuurd. GetCertus gebruikt deze URI als OIDC-redirect-URI in het autorisatieverzoek. Gebruik voor meer veiligheid een aparte URI voor de door IdP gestarte SSO-flow.',
    empty_redirect_uris_error:
      'Er is geen redirect-URI geregistreerd voor de applicatie. Voeg er eerst een toe.',
    redirect_uri_placeholder: 'Kies een redirect-URI na inloggen',
    auth_params: 'Extra authenticatieparameters',
    auth_params_tooltip:
      'Extra parameters die in het autorisatieverzoek worden meegestuurd. Standaard worden alleen de scopes (openid profile) aangevraagd; hier kun je extra scopes of een eigen state-waarde opgeven. (bijv. { "scope": "organizations email", "state": "secret_state" }).',
  },
  trust_unverified_email: 'Niet-geverifieerde e-mail vertrouwen',
  trust_unverified_email_label:
    'Niet-geverifieerde e-mailadressen van de identiteitsprovider altijd vertrouwen',
  trust_unverified_email_tip:
    'De Entra ID-connector (OIDC) geeft de claim `email_verified` niet terug, dus e-mailadressen uit Azure zijn niet gegarandeerd geverifieerd. Standaard synchroniseert GetCertus geen niet-geverifieerde e-mailadressen naar het gebruikersprofiel. Schakel dit alleen in als je alle e-mailadressen uit de Entra ID-directory vertrouwt.',
  trust_unverified_email_tip_oidc:
    'De OIDC-connector geeft mogelijk de claim `email_verified` niet terug, dus e-mailadressen van de identiteitsprovider zijn niet gegarandeerd geverifieerd. Standaard synchroniseert GetCertus geen niet-geverifieerde e-mailadressen naar het gebruikersprofiel. Schakel dit alleen in als je alle e-mailadressen van de identiteitsprovider vertrouwt.',
  offline_access: {
    label: 'Toegangstoken vernieuwen',
    description:
      'Schakel Google `offline`-toegang in om een vernieuwingstoken aan te vragen, zodat je app het toegangstoken kan vernieuwen zonder dat de gebruiker opnieuw toestemming geeft.',
  },
};

export default Object.freeze(enterprise_sso_details);
