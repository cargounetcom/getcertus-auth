/* GetCertus addition (MPL-2.0, see GETCERTUS.md): admin console phrases. */
const enterprise_sso_details = {
  back_to_sso_connectors: 'Tillbaka till Enterprise SSO',
  page_title: 'Detaljer för Enterprise SSO-koppling',
  readme_drawer_title: 'Enterprise SSO',
  readme_drawer_subtitle:
    'Konfigurera Enterprise SSO-kopplingar för att aktivera SSO för slutanvändare',
  tab_experience: 'SSO-upplevelse',
  tab_connection: 'Anslutning',
  tab_idp_initiated_auth: 'IdP-initierad SSO',
  general_settings_title: 'Allmänt',
  general_settings_description:
    'Konfigurera slutanvändarnas upplevelse och länka företagets e-postdomän för SP-initierat SSO-flöde.',
  custom_branding_title: 'Visning',
  custom_branding_description:
    'Anpassa namnet och logotypen som visas för slutanvändare i flödet för enkel inloggning. Om fälten är tomma används standardvärden.',
  email_domain_field_name: 'Företagets e-postdomäner',
  email_domain_field_description:
    'Användare med dessa e-postdomäner kan autentisera sig med SSO. Verifiera domänägarskapet innan du lägger till dem.',
  email_domain_field_placeholder: 'Ange en eller flera e-postdomäner (t.ex. dittforetag.se)',
  sync_profile_field_name: 'Synkronisera profilinformation från identitetsleverantören',
  sync_profile_option: {
    register_only: 'Synkronisera endast vid första inloggningen',
    each_sign_in: 'Synkronisera alltid vid varje inloggning',
  },
  connector_name_field_name: 'Kopplingens namn',
  display_name_field_name: 'Visningsnamn',
  connector_logo_field_name: 'Visningslogotyp',
  connector_logo_field_description:
    'Varje bild ska vara under 500 KB, endast SVG, PNG, JPG och JPEG.',
  branding_logo_context: 'Ladda upp logotyp',
  branding_logo_error: 'Fel vid uppladdning av logotyp: {{error}}',
  branding_light_logo_context: 'Ladda upp logotyp för ljust läge',
  branding_light_logo_error: 'Fel vid uppladdning av logotyp för ljust läge: {{error}}',
  branding_logo_field_name: 'Logotyp',
  branding_logo_field_placeholder: 'https://your.domain/logo.png',
  branding_dark_logo_context: 'Ladda upp logotyp för mörkt läge',
  branding_dark_logo_error: 'Fel vid uppladdning av logotyp för mörkt läge: {{error}}',
  branding_dark_logo_field_name: 'Logotyp (mörkt läge)',
  branding_dark_logo_field_placeholder: 'https://your.domain/dark-mode-logo.png',
  check_connection_guide: 'Anslutningsguide',
  enterprise_sso_deleted: 'Enterprise SSO-kopplingen har tagits bort',
  delete_confirm_modal_title: 'Ta bort Enterprise SSO-koppling',
  delete_confirm_modal_content:
    'Vill du verkligen ta bort den här företagskopplingen? Användare från identitetsleverantörer kommer inte längre att kunna använda enkel inloggning.',
  upload_idp_metadata_title_saml: 'Ladda upp metadata',
  upload_idp_metadata_description_saml:
    'Konfigurera metadata som kopierats från identitetsleverantören.',
  upload_idp_metadata_title_oidc: 'Ladda upp inloggningsuppgifter',
  upload_idp_metadata_description_oidc:
    'Konfigurera inloggningsuppgifter och OIDC-tokeninformation som kopierats från identitetsleverantören.',
  upload_idp_metadata_button_text: 'Ladda upp XML-fil med metadata',
  upload_signing_certificate_button_text: 'Ladda upp fil med signeringscertifikat',
  configure_domain_field_info_text:
    'Lägg till en e-postdomän för att leda företagets användare till deras identitetsleverantör för enkel inloggning.',
  email_domain_field_required: 'En e-postdomän krävs för att aktivera Enterprise SSO.',
  upload_saml_idp_metadata_info_text_url:
    'Klistra in metadata-URL:en från identitetsleverantören för att ansluta.',
  upload_saml_idp_metadata_info_text_xml:
    'Klistra in metadata från identitetsleverantören för att ansluta.',
  upload_saml_idp_metadata_info_text_manual:
    'Fyll i metadata från identitetsleverantören för att ansluta.',
  upload_oidc_idp_info_text: 'Fyll i informationen från identitetsleverantören för att ansluta.',
  service_provider_property_title: 'Konfigurera i IdP:n',
  service_provider_property_description:
    'Konfigurera en applikationsintegration med {{protocol}} i din identitetsleverantör. Ange uppgifterna som GetCertus tillhandahåller.',
  attribute_mapping_title: 'Attributmappningar',
  attribute_mapping_description:
    'Synkronisera användarprofiler från identitetsleverantören genom att konfigurera attributmappning på antingen identitetsleverantörens eller GetCertus sida.',
  saml_preview: {
    sign_on_url: 'Inloggnings-URL',
    entity_id: 'Utfärdare',
    x509_certificate: 'Signeringscertifikat',
    certificate_content: 'Upphör {{date}}',
  },
  oidc_preview: {
    authorization_endpoint: 'Auktoriseringsslutpunkt',
    token_endpoint: 'Tokenslutpunkt',
    userinfo_endpoint: 'Slutpunkt för användarinformation',
    jwks_uri: 'Slutpunkt för JSON Web Key Set',
    issuer: 'Utfärdare',
  },
  idp_initiated_auth_config: {
    card_title: 'IdP-initierad SSO',
    card_description:
      'Användare startar vanligtvis autentiseringen från din app via det SP-initierade SSO-flödet. Aktivera INTE den här funktionen om det inte är absolut nödvändigt.',
    enable_idp_initiated_sso: 'Aktivera IdP-initierad SSO',
    enable_idp_initiated_sso_description:
      'Låt företagets användare starta autentiseringen direkt från identitetsleverantörens portal. Se till att du förstår de möjliga säkerhetsriskerna innan du aktiverar funktionen.',
    default_application: 'Standardapplikation',
    default_application_tooltip:
      'Målapplikationen som användaren omdirigeras till efter autentisering.',
    empty_applications_error:
      'Inga applikationer hittades. Lägg till en under <a>Applikationer</a>.',
    empty_applications_placeholder: 'Inga applikationer',
    authentication_type: 'Autentiseringstyp',
    auto_authentication_disabled_title: 'Omdirigera till klienten för SP-initierad SSO',
    auto_authentication_disabled_description:
      'Rekommenderas. Omdirigera användare till klientapplikationen för att starta en säker SP-initierad OIDC-autentisering. Detta förhindrar CSRF-attacker.',
    auto_authentication_enabled_title: 'Logga in direkt med IdP-initierad SSO',
    auto_authentication_enabled_description:
      'Efter lyckad inloggning omdirigeras användare till angiven omdirigerings-URI med auktoriseringskoden (utan state- och PKCE-validering).',
    auto_authentication_disabled_app: 'För traditionella webbappar och single-page-appar (SPA)',
    auto_authentication_enabled_app: 'För traditionella webbappar',
    idp_initiated_auth_callback_uri: 'Klientens callback-URI',
    idp_initiated_auth_callback_uri_tooltip:
      'Klientens callback-URI för att starta ett SP-initierat SSO-flöde. Ett ssoConnectorId läggs till i URI:n som frågeparameter. (t.ex. https://your.domain/sso/callback?connectorId={{ssoConnectorId}})',
    redirect_uri: 'Omdirigerings-URI efter inloggning',
    redirect_uri_tooltip:
      'Omdirigerings-URI:n dit användare skickas efter lyckad inloggning. GetCertus använder denna URI som OIDC-omdirigerings-URI i auktoriseringsbegäran. Använd en separat URI för det IdP-initierade SSO-flödet för bättre säkerhet.',
    empty_redirect_uris_error:
      'Ingen omdirigerings-URI har registrerats för applikationen. Lägg till en först.',
    redirect_uri_placeholder: 'Välj en omdirigerings-URI efter inloggning',
    auth_params: 'Ytterligare autentiseringsparametrar',
    auth_params_tooltip:
      'Ytterligare parametrar som skickas i auktoriseringsbegäran. Som standard begärs endast scopes (openid profile); här kan du ange fler scopes eller ett eget state-värde. (t.ex. { "scope": "organizations email", "state": "secret_state" }).',
  },
  trust_unverified_email: 'Lita på overifierad e-post',
  trust_unverified_email_label:
    'Lita alltid på overifierade e-postadresser från identitetsleverantören',
  trust_unverified_email_tip:
    'Entra ID-kopplingen (OIDC) returnerar inte claim-värdet `email_verified`, vilket betyder att e-postadresser från Azure inte garanterat är verifierade. Som standard synkroniserar GetCertus inte overifierade e-postadresser till användarprofilen. Aktivera detta endast om du litar på alla e-postadresser i Entra ID-katalogen.',
  trust_unverified_email_tip_oidc:
    'OIDC-kopplingen returnerar kanske inte claim-värdet `email_verified`, vilket betyder att e-postadresser från identitetsleverantören inte garanterat är verifierade. Som standard synkroniserar GetCertus inte overifierade e-postadresser till användarprofilen. Aktivera detta endast om du litar på alla e-postadresser från identitetsleverantören.',
  offline_access: {
    label: 'Uppdatera åtkomsttoken',
    description:
      'Aktivera Googles `offline`-åtkomst för att begära en uppdateringstoken, så att din app kan förnya åtkomsttoken utan att användaren behöver auktorisera igen.',
  },
};

export default Object.freeze(enterprise_sso_details);
