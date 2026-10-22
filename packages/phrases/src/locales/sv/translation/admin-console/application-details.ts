/* GetCertus addition (MPL-2.0, see GETCERTUS.md): admin console phrases. */
const application_details = {
  page_title: 'Applikationsdetaljer',
  back_to_applications: 'Tillbaka till applikationer',
  check_guide: 'Visa guiden',
  settings: 'Inställningar',
  settings_description:
    'En "applikation" är registrerad programvara eller en tjänst som kan läsa användarinformation eller agera för en användare. Applikationer hjälper till att känna igen vem som begär vad från GetCertus och hanterar inloggning och behörigheter. Fyll i de obligatoriska fälten för autentisering.',
  integration: 'Integration',
  integration_description:
    'Driftsätt med GetCertus säkra workers på Cloudflares edge-nätverk, för topprestanda och 0 ms kallstarter i hela världen.',
  service_configuration: 'Tjänstekonfiguration',
  service_configuration_description: 'Slutför den nödvändiga konfigurationen i din tjänst.',
  session: 'Session',
  endpoints_and_credentials: 'Slutpunkter och autentiseringsuppgifter',
  endpoints_and_credentials_description:
    'Använd följande slutpunkter och autentiseringsuppgifter för att konfigurera OIDC-anslutningen i applikationen.',
  refresh_token_settings: 'Uppdateringstoken',
  refresh_token_settings_description: 'Hantera reglerna för uppdateringstoken i denna applikation.',
  machine_logs: 'Maskinloggar',
  application_name: 'Applikationens namn',
  application_name_placeholder: 'Min app',
  description: 'Beskrivning',
  description_placeholder: 'Ange en beskrivning av applikationen',
  config_endpoint: 'Konfigurationsslutpunkt för OpenID-leverantören',
  issuer_endpoint: 'Utfärdarslutpunkt',
  jwks_uri: 'JWKS-URI',
  authorization_endpoint: 'Auktoriseringsslutpunkt',
  authorization_endpoint_tip:
    'Slutpunkten för autentisering och auktorisering. Den används för OpenID Connect-<a>autentisering</a>.',
  show_endpoint_details: 'Visa detaljer om slutpunkter',
  hide_endpoint_details: 'Dölj detaljer om slutpunkter',
  logto_endpoint: 'GetCertus-slutpunkt',
  application_id: 'App-ID',
  application_id_tip:
    'Applikationens unika ID, oftast genererat av GetCertus. Det motsvarar också “<a>client_id</a>” i OpenID Connect.',
  application_secret: 'App-hemlighet',
  application_secret_other: 'App-hemligheter',
  redirect_uri: 'Omdirigerings-URI',
  redirect_uris: 'Omdirigerings-URI:er',
  redirect_uri_placeholder: 'https://your.website.com/app',
  redirect_uri_placeholder_native: 'io.logto://callback',
  redirect_uri_tip:
    'URI:n som användaren skickas till efter inloggning (lyckad eller inte). Se OpenID Connect <a>AuthRequest</a> för mer information.',
  mixed_redirect_uri_warning:
    'Applikationstypen passar inte minst en av omdirigerings-URI:erna. Det följer inte bästa praxis, och vi rekommenderar starkt att omdirigerings-URI:erna hålls konsekventa.',
  wildcard_redirect_uri_warning:
    'Omdirigerings-URI:er med jokertecken är inte standard-OIDC och kan öka attackytan. Använd dem försiktigt och välj exakta URI:er när det går.',
  post_sign_out_redirect_uri: 'Omdirigerings-URI efter utloggning',
  post_sign_out_redirect_uris: 'Omdirigerings-URI:er efter utloggning',
  post_sign_out_redirect_uri_placeholder: 'https://your.website.com/home',
  post_sign_out_redirect_uri_tip:
    'URI:n som användaren skickas till efter utloggning (valfritt). För vissa apptyper har den ingen praktisk effekt.',
  cors_allowed_origins: 'Tillåtna CORS-ursprung',
  cors_allowed_origins_placeholder: 'https://your.website.com',
  cors_allowed_origins_tip:
    'Som standard tillåts alla ursprung från omdirigerings-URI:erna. Oftast behöver du inte göra något här. Se <a>MDN-dokumentationen</a> för detaljer.',
  token_endpoint: 'Tokenslutpunkt',
  user_info_endpoint: 'Userinfo-slutpunkt',
  enable_admin_access: 'Aktivera administratörsåtkomst',
  enable_admin_access_label:
    'Aktivera eller inaktivera åtkomst till Management API. När det är aktiverat kan du använda åtkomsttoken för att anropa Management API för denna applikation.',
  always_issue_refresh_token: 'Utfärda alltid uppdateringstoken',
  always_issue_refresh_token_label:
    'När detta är aktiverat utfärdar GetCertus alltid uppdateringstoken, oavsett om `prompt=consent` finns i autentiseringsbegäran. Gör det bara om det behövs: det är inte kompatibelt med OpenID Connect och kan orsaka problem.',
  refresh_token_ttl: 'Uppdateringstokens livslängd (TTL) i dagar',
  refresh_token_ttl_tip:
    'Hur länge en uppdateringstoken kan användas för att begära nya åtkomsttoken innan den går ut. Varje tokenbegäran förlänger livslängden till detta värde.',
  rotate_refresh_token: 'Rotera uppdateringstoken',
  rotate_refresh_token_label:
    'När detta är aktiverat utfärdar GetCertus en ny uppdateringstoken vid tokenbegäran när 70 % av den ursprungliga livslängden (TTL) har gått eller vissa villkor är uppfyllda. <a>Läs mer</a>',
  rotate_refresh_token_label_for_public_clients:
    'När detta är aktiverat utfärdar GetCertus en ny uppdateringstoken vid varje tokenbegäran. <a>Läs mer</a>',
  backchannel_logout: 'Backchannel-utloggning',
  backchannel_logout_description:
    'Konfigurera OpenID Connect-slutpunkten för backchannel-utloggning och om denna applikation kräver session.',
  backchannel_logout_uri: 'URI för backchannel-utloggning',
  backchannel_logout_uri_session_required: 'Krävs session?',
  backchannel_logout_uri_session_required_description:
    'När detta är aktiverat kräver RP att utloggningstoken innehåller ett `sid`-anspråk (sessions-ID) som identifierar RP-sessionen hos OP när `backchannel_logout_uri` används.',
  token_exchange: 'Tokenutbyte',
  token_exchange_description: 'Hantera inställningarna för tokenutbyte i denna applikation.',
  allow_token_exchange: 'Tillåt tokenutbyte',
  allow_token_exchange_description:
    'Tillåt applikationen att starta begäranden om tokenutbyte. Det krävs för <impersonationLink>användarimitation</impersonationLink> och <patLink>personliga åtkomsttoken</patLink>.',
  allow_token_exchange_public_client_warning:
    'Att aktivera tokenutbyte för publika klienter (single page-app / native-app) rekommenderas inte. Publika klienter kan inte lagra autentiseringsuppgifter säkert, vilket kan utsätta applikationen för risk för tokenimitation.',
  device_flow_tag: 'Enhetsflöde',
  device_flow_notification:
    'Appen använder OAuth 2.0 Device Authorization Flow för enheter med begränsad inmatning eller headless-appar (t.ex. tv, CLI). Användare slutför inloggningen på en annan enhet genom att ange en enhetskod eller skanna en QR-kod. <a>Läs mer</a>',
  device_flow_try_demo: 'Prova demon',
  delete_description:
    'Åtgärden kan inte ångras. Applikationen tas bort permanent. Ange applikationens namn <span>{{name}}</span> för att bekräfta.',
  enter_your_application_name: 'Ange applikationens namn',
  application_deleted: 'Applikationen {{name}} har tagits bort',
  redirect_uri_required: 'Du måste ange minst en omdirigerings-URI',
  app_domain_description_1:
    'Använd gärna din domän med {{domain}} via GetCertus, den gäller permanent.',
  app_domain_description_2:
    'Använd gärna din domän <domain>{{domain}}</domain>, den gäller permanent.',
  custom_rules: 'Anpassade autentiseringsregler',
  custom_rules_placeholder: '^/(admin|privacy)/.+$',
  custom_rules_description:
    'Ange regler med reguljära uttryck för vägar som kräver autentisering. Standard: hela webbplatsen skyddas om fältet lämnas tomt.',
  authentication_routes: 'Autentiseringsvägar',
  custom_rules_tip:
    "Två exempel:<ol><li>Skydda bara vägarna '/admin' och '/privacy' med autentisering: ^/(admin|privacy)/.*</li><li>Undanta JPG-bilder från autentisering: ^(?!.*\\.jpg$).*$</li></ol>",
  authentication_routes_description:
    'Omdirigera autentiseringsknappen via de angivna vägarna. Obs! Vägarna kan inte ersättas.',
  protect_origin_server: 'Skydda din ursprungsserver',
  protect_origin_server_description:
    'Se till att ursprungsservern inte kan nås direkt. Se guiden för <a>detaljerade instruktioner</a>.',
  third_party_settings_description:
    'Integrera tredjepartsapplikationer med GetCertus som identitetsleverantör (IdP) via OIDC / OAuth 2.0, med en samtyckesskärm för användarens auktorisering.',
  session_duration: 'Sessionens längd (dagar)',
  try_it: 'Prova',
  no_organization_placeholder: 'Ingen organisation hittades. <a>Gå till organisationer</a>',
  field_custom_data: 'Anpassade data',
  field_custom_data_tip:
    'Ytterligare applikationsinformation som inte finns bland de fördefinierade egenskaperna, till exempel verksamhetsspecifika inställningar och konfigurationer.',
  custom_data_invalid: 'Anpassade data måste vara ett giltigt JSON-objekt',
  access_control: {
    name: 'Regler',
    title: 'Åtkomstkontroll',
    description: 'Anpassa reglerna för åtkomstkontroll på appnivå.',
    enable: 'Aktivera åtkomstkontroll på appnivå',
    enable_description:
      'Aktivera detaljerad åtkomstkontroll för att begränsa vilka användare som kan använda applikationen. Om den är inaktiverad har alla registrerade användare åtkomst.',
    enable_without_rules_notice:
      'Lägg till minst en åtkomstregel innan du aktiverar åtkomstkontroll.',
    load_error: 'Det gick inte att läsa in åtkomstreglerna.',
    custom_allow_rules: 'Anpassade tillåtelseregler',
    custom_allow_rules_description:
      'Skapa regler så att användare med vissa attribut får åtkomst automatiskt. Minst en regel krävs när det är aktiverat.',
    rules: 'Åtkomstregler',
    add_rules: 'Lägg till regler',
    rules_description:
      'Användare har åtkomst till appen om de uppfyller någon av de konfigurerade reglerna.',
    empty_rules_description: 'Inga regler har konfigurerats än.',
    delete_rule_confirmation: 'Vill du verkligen ta bort denna regel?',
    rule_table_rules: 'Regler',
    rule_table_description: 'Beskrivning',
    rule_table_users: 'Användare',
    rule_table_members: 'Medlemmar',
    rule_table_user_id: 'Användar-ID',
    rule_count: '{{count}} regel',
    rule_count_other: '{{count}} regler',
    rule_users: 'Användare',
    rule_users_description: 'Specifika användare har åtkomst till appen.',
    rule_roles: 'Roller',
    rule_user_roles: 'Användarroller',
    rule_user_roles_description: 'Användare med de valda användarrollerna har åtkomst till appen.',
    rule_organizations: 'Organisationer',
    rule_organizations_description:
      'Alla nuvarande och framtida medlemmar i de valda organisationerna har åtkomst till appen.',
    rule_organization_roles: 'Organisationsroller',
    rule_organization_roles_description:
      'Medlemmar med de valda organisationsrollerna i de valda organisationerna har åtkomst till appen.',
  },
  branding: {
    name: 'Varumärke',
    description: 'Anpassa appens logotyp och varumärkesfärg för upplevelsen på appnivå.',
    description_third_party: 'Anpassa applikationens visningsnamn och logotyp på samtyckesskärmen.',
    app_logo: 'Applogotyp',
    app_level_sie: 'Inloggningsupplevelse på appnivå',
    app_level_sie_switch:
      'Aktivera inloggningsupplevelsen på appnivå och ställ in appspecifikt varumärke. Om den är inaktiverad används den gemensamma inloggningsupplevelsen.',
    more_info: 'Mer information',
    more_info_description: 'Ge användarna mer information om applikationen på samtyckesskärmen.',
    display_name: 'Visningsnamn',
    application_logo: 'Applikationens logotyp',
    application_logo_dark: 'Applikationens logotyp (mörk)',
    brand_color: 'Varumärkesfärg',
    brand_color_dark: 'Varumärkesfärg (mörk)',
    terms_of_use_url: 'URL till applikationens användarvillkor',
    privacy_policy_url: 'URL till applikationens integritetspolicy',
  },
  permissions: {
    name: 'Behörigheter',
    description:
      'Välj de behörigheter som tredjepartsapplikationen behöver för att med användarens auktorisering få åtkomst till vissa datatyper.',
    user_permissions: 'Personliga användaruppgifter',
    organization_permissions: 'Åtkomst till organisation',
    table_name: 'Ge behörigheter',
    field_name: 'Behörighet',
    field_description: 'Visas på samtyckesskärmen',
    delete_text: 'Ta bort behörighet',
    permission_delete_confirm:
      'Tredjepartsappens behörigheter dras tillbaka, så att den inte längre kan begära användarens auktorisering för vissa datatyper. Vill du fortsätta?',
    permissions_assignment_description:
      'Välj de behörigheter som tredjepartsapplikationen begär för att med användarens auktorisering få åtkomst till vissa datatyper.',
    user_profile: 'Användardata',
    api_permissions: 'API-behörigheter',
    organization: 'Organisationsbehörigheter',
    user_permissions_assignment_form_title: 'Lägg till behörigheter för användarprofilen',
    organization_permissions_assignment_form_title: 'Lägg till organisationsbehörigheter',
    api_resource_permissions_assignment_form_title: 'Lägg till behörigheter för API-resurser',
    user_data_permission_description_tips:
      'Du kan ändra beskrivningen av behörigheterna för personliga användaruppgifter via "Inloggningsupplevelse > Innehåll > Hantera språk"',
    permission_description_tips:
      'När GetCertus är identitetsleverantör (IdP) för autentisering i tredjepartsappar och användare ombeds om auktorisering visas denna beskrivning på samtyckesskärmen.',
    user_title: 'Användare',
    user_description:
      'Välj de behörigheter som tredjepartsappen begär för åtkomst till specifika användardata.',
    grant_user_level_permissions: 'Ge behörigheter för användardata',
    organization_title: 'Organisation',
    organization_description:
      'Välj de behörigheter som tredjepartsappen begär för åtkomst till specifika organisationsdata.',
    grant_organization_level_permissions: 'Ge behörigheter för organisationsdata',
    oidc_title: 'OIDC',
    oidc_description:
      'Grundläggande OIDC-behörigheter konfigureras automatiskt för appen. Dessa scopes krävs för autentisering och visas inte på samtyckesskärmen.',
    default_oidc_permissions: 'Standardbehörigheter för OIDC',
    permission_column: 'Behörighet',
    guide_column: 'Förklaring',
    openid_permission: 'openid',
    openid_permission_guide:
      "Valfritt för åtkomst till OAuth-resurser.\nKrävs för OIDC-autentisering. Ger en ID-token och åtkomst till 'userinfo_endpoint'.",
    offline_access_permission: 'offline_access',
    offline_access_permission_guide:
      'Valfritt. Hämtar uppdateringstoken för långvarig åtkomst eller bakgrundsuppgifter.',
  },
  roles: {
    assign_button: 'Tilldela roller',
    delete_description:
      'Rollen tas bort från denna maskin-till-maskin-app. Själva rollen finns kvar men är inte längre kopplad till appen.',
    deleted: '{{name}} har tagits bort från denna användare.',
    assign_title: 'Tilldela roller till {{name}}',
    assign_subtitle:
      'Maskin-till-maskin-appar behöver roller av maskin-till-maskin-typ för att komma åt tillhörande API-resurser.',
    assign_role_field: 'Tilldela roller',
    role_search_placeholder: 'Sök på rollnamn',
    added_text: '{{value, number}} tillagda',
    assigned_app_count: '{{value, number}} applikationer',
    confirm_assign: 'Tilldela roller',
    role_assigned: 'Roll(er) tilldelade',
    search: 'Sök på rollnamn, beskrivning eller ID',
    empty: 'Ingen roll tillgänglig',
  },
  secrets: {
    value: 'Värde',
    empty: 'Applikationen har inga hemligheter.',
    created_at: 'Skapad',
    expires_at: 'Går ut',
    never: 'Aldrig',
    create_new_secret: 'Skapa ny hemlighet',
    delete_confirmation: 'Åtgärden kan inte ångras. Vill du verkligen ta bort hemligheten?',
    deleted: 'Hemligheten har tagits bort.',
    activated: 'Hemligheten har aktiverats.',
    deactivated: 'Hemligheten har inaktiverats.',
    legacy_secret: 'Äldre hemlighet',
    expired: 'Utgången',
    expired_tooltip: 'Hemligheten gick ut {{date}}.',
    create_modal: {
      title: 'Skapa applikationshemlighet',
      expiration: 'Giltighetstid',
      expiration_description: 'Hemligheten går ut {{date}}.',
      expiration_description_never:
        'Hemligheten går aldrig ut. Vi rekommenderar ett utgångsdatum för bättre säkerhet.',
      days: '{{count}} dag',
      days_other: '{{count}} dagar',
      years: '{{count}} år',
      years_other: '{{count}} år',
      created: 'Hemligheten {{name}} har skapats.',
    },
    edit_modal: {
      title: 'Redigera applikationshemlighet',
      edited: 'Hemligheten {{name}} har redigerats.',
    },
  },
  saml_idp_config: {
    title: 'SAML IdP-metadata',
    description:
      'Använd följande metadata och certifikat för att konfigurera SAML IdP i applikationen.',
    metadata_url_label: 'URL till IdP-metadata',
    single_sign_on_service_url_label: 'URL till tjänsten för enkel inloggning',
    idp_entity_id_label: 'IdP:ns entitets-ID',
  },
  saml_idp_certificates: {
    title: 'SAML-signeringscertifikat',
    expires_at: 'Går ut',
    finger_print: 'Fingeravtryck',
    status: 'Status',
    active: 'Aktiv',
    inactive: 'Inaktiv',
  },
  saml_idp_name_id_format: {
    title: 'Format för Name ID',
    description: 'Välj SAML IdP:ns format för Name ID.',
    persistent: 'Beständigt',
    persistent_description: 'Använd GetCertus användar-ID som Name ID',
    transient: 'Tillfälligt',
    transient_description: 'Använd ett engångs-användar-ID som Name ID',
    unspecified: 'Ospecificerat',
    unspecified_description: 'Använd GetCertus användar-ID som Name ID',
    email_address: 'E-postadress',
    email_address_description: 'Använd e-postadressen som Name ID',
  },
  saml_idp_authentication: {
    always_force_authn: 'Tvinga alltid autentisering',
    always_force_authn_description:
      'Kräv att användare loggar in igen varje gång de öppnar applikationen, även om de redan har en GetCertus-session.',
    always_force_authn_tip:
      'När detta är aktiverat ber GetCertus alltid användare att logga in igen för applikationen. Annars återanvänds en befintlig GetCertus-session, om inte tjänsteleverantören begär ny autentisering med ForceAuthn.',
  },
  saml_encryption_config: {
    encrypt_assertion: 'Kryptera SAML-assertion',
    encrypt_assertion_description: 'Med detta alternativ krypteras SAML-assertion.',
    encrypt_then_sign: 'Kryptera, sedan signera',
    encrypt_then_sign_description:
      'Med detta alternativ krypteras SAML-assertion först och signeras sedan; annars signeras den först och krypteras sedan.',
    certificate: 'Certifikat',
    certificate_tooltip:
      'Kopiera och klistra in x509-certifikatet från tjänsteleverantören för att kryptera SAML-assertion.',
    certificate_placeholder:
      '-----BEGIN CERTIFICATE-----\nMIICYDCCAcmgAwIBA...\n-----END CERTIFICATE-----\n',
    certificate_missing_error: 'Certifikat krävs.',
    certificate_invalid_format_error:
      'Ogiltigt certifikatformat. Kontrollera formatet och försök igen.',
  },
  saml_app_attribute_mapping: {
    name: 'Attributmappningar',
    title: 'Grundläggande attributmappningar',
    description:
      'Lägg till attributmappningar för att synkronisera användarprofilen från GetCertus till applikationen.',
    col_logto_claims: 'Värde i GetCertus',
    col_sp_claims: 'Värdets namn i din applikation',
    add_button: 'Lägg till en till',
  },
  concurrent_device_limit: {
    title: 'Gräns för samtidiga enheter',
    enable: 'Aktivera gräns för samtidiga enheter',
    enable_description:
      'När detta är aktiverat tillämpar GetCertus maximalt antal aktiva medgivanden per användare för appen.',
    field: 'Gräns för samtidiga enheter per app',
    field_description:
      'Begränsa hur många enheter en användare kan vara inloggad på samtidigt. GetCertus begränsar aktiva medgivanden och återkallar automatiskt det äldsta när gränsen överskrids.',
    field_placeholder: 'Lämna tomt för ingen gräns',
    should_be_greater_than_zero: 'Måste vara större än 0.',
  },
};

export default Object.freeze(application_details);
