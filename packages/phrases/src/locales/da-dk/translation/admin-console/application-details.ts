/* GetCertus addition (MPL-2.0, see GETCERTUS.md): admin console phrases. */
const application_details = {
  page_title: 'Applikationsdetaljer',
  back_to_applications: 'Tilbage til applikationer',
  check_guide: 'Se vejledningen',
  settings: 'Indstillinger',
  settings_description:
    'En "applikation" er registreret software eller en tjeneste, der kan læse brugeroplysninger eller handle på en brugers vegne. Applikationer hjælper med at genkende, hvem der beder GetCertus om hvad, og håndterer login og tilladelser. Udfyld de påkrævede felter til godkendelse.',
  integration: 'Integration',
  integration_description:
    "Udrul med GetCertus' sikre workers på Cloudflares edge-netværk for topydelse og 0 ms kolde starter i hele verden.",
  service_configuration: 'Tjenestekonfiguration',
  service_configuration_description: 'Fuldfør den nødvendige konfiguration i din tjeneste.',
  session: 'Session',
  endpoints_and_credentials: 'Endpoints og legitimationsoplysninger',
  endpoints_and_credentials_description:
    'Brug følgende endpoints og legitimationsoplysninger til at opsætte OIDC-forbindelsen i din applikation.',
  refresh_token_settings: 'Opdateringstoken',
  refresh_token_settings_description:
    'Administrer reglerne for opdateringstokens i denne applikation.',
  machine_logs: 'Maskinlogs',
  application_name: 'Applikationens navn',
  application_name_placeholder: 'Min app',
  description: 'Beskrivelse',
  description_placeholder: 'Indtast en beskrivelse af applikationen',
  config_endpoint: 'Konfigurations-endpoint for OpenID-udbyderen',
  issuer_endpoint: 'Udsteder-endpoint',
  jwks_uri: 'JWKS-URI',
  authorization_endpoint: 'Autorisations-endpoint',
  authorization_endpoint_tip:
    'Endpointet til godkendelse og autorisation. Det bruges til OpenID Connect-<a>godkendelse</a>.',
  show_endpoint_details: 'Vis detaljer om endpoints',
  hide_endpoint_details: 'Skjul detaljer om endpoints',
  logto_endpoint: 'GetCertus-endpoint',
  application_id: 'App-ID',
  application_id_tip:
    'Applikationens unikke ID, normalt genereret af GetCertus. Det svarer også til “<a>client_id</a>” i OpenID Connect.',
  application_secret: 'App-hemmelighed',
  application_secret_other: 'App-hemmeligheder',
  redirect_uri: 'Omdirigerings-URI',
  redirect_uris: "Omdirigerings-URI'er",
  redirect_uri_placeholder: 'https://your.website.com/app',
  redirect_uri_placeholder_native: 'io.logto://callback',
  redirect_uri_tip:
    "URI'en, som brugeren sendes til efter login (vellykket eller ej). Se OpenID Connect <a>AuthRequest</a> for mere information.",
  mixed_redirect_uri_warning:
    "Applikationstypen passer ikke til mindst én af omdirigerings-URI'erne. Det følger ikke bedste praksis, og vi anbefaler kraftigt, at omdirigerings-URI'erne holdes ensartede.",
  wildcard_redirect_uri_warning:
    "Omdirigerings-URI'er med jokertegn er ikke standard-OIDC og kan øge angrebsfladen. Brug dem forsigtigt, og vælg præcise URI'er, når det er muligt.",
  post_sign_out_redirect_uri: 'Omdirigerings-URI efter log ud',
  post_sign_out_redirect_uris: "Omdirigerings-URI'er efter log ud",
  post_sign_out_redirect_uri_placeholder: 'https://your.website.com/home',
  post_sign_out_redirect_uri_tip:
    "URI'en, som brugeren sendes til efter log ud (valgfrit). For nogle apptyper har den ingen praktisk effekt.",
  cors_allowed_origins: 'Tilladte CORS-oprindelser',
  cors_allowed_origins_placeholder: 'https://your.website.com',
  cors_allowed_origins_tip:
    "Som standard er alle oprindelser fra omdirigerings-URI'erne tilladt. Normalt skal du ikke gøre noget her. Se <a>MDN-dokumentationen</a> for detaljer.",
  token_endpoint: 'Token-endpoint',
  user_info_endpoint: 'Userinfo-endpoint',
  enable_admin_access: 'Slå administratoradgang til',
  enable_admin_access_label:
    'Slå adgang til Management API til eller fra. Når det er slået til, kan du bruge adgangstokens til at kalde Management API på vegne af denne applikation.',
  always_issue_refresh_token: 'Udsted altid opdateringstoken',
  always_issue_refresh_token_label:
    'Når dette er slået til, udsteder GetCertus altid opdateringstokens, uanset om `prompt=consent` er med i godkendelsesanmodningen. Gør det kun, hvis det er nødvendigt: det er ikke kompatibelt med OpenID Connect og kan give problemer.',
  refresh_token_ttl: 'Opdateringstokens levetid (TTL) i dage',
  refresh_token_ttl_tip:
    'Hvor længe et opdateringstoken kan bruges til at anmode om nye adgangstokens, før det udløber. Hver tokenanmodning forlænger levetiden til denne værdi.',
  rotate_refresh_token: 'Rotér opdateringstoken',
  rotate_refresh_token_label:
    'Når dette er slået til, udsteder GetCertus et nyt opdateringstoken ved tokenanmodninger, når 70 % af den oprindelige levetid (TTL) er gået, eller bestemte betingelser er opfyldt. <a>Læs mere</a>',
  rotate_refresh_token_label_for_public_clients:
    'Når dette er slået til, udsteder GetCertus et nyt opdateringstoken ved hver tokenanmodning. <a>Læs mere</a>',
  backchannel_logout: 'Backchannel-log ud',
  backchannel_logout_description:
    'Konfigurer OpenID Connect-endpointet til backchannel-log ud, og om denne applikation kræver session.',
  backchannel_logout_uri: 'URI til backchannel-log ud',
  backchannel_logout_uri_session_required: 'Kræves session?',
  backchannel_logout_uri_session_required_description:
    'Når dette er slået til, kræver RP, at log ud-tokenet indeholder et `sid`-krav (sessions-ID), der identificerer RP-sessionen hos OP, når `backchannel_logout_uri` bruges.',
  token_exchange: 'Tokenudveksling',
  token_exchange_description:
    'Administrer indstillingerne for tokenudveksling i denne applikation.',
  allow_token_exchange: 'Tillad tokenudveksling',
  allow_token_exchange_description:
    'Tillad applikationen at starte anmodninger om tokenudveksling. Det kræves til <impersonationLink>brugerefterligning</impersonationLink> og <patLink>personlige adgangstokens</patLink>.',
  allow_token_exchange_public_client_warning:
    'Det frarådes at slå tokenudveksling til for offentlige klienter (single page-app / native-app). Offentlige klienter kan ikke opbevare legitimationsoplysninger sikkert, hvilket kan udsætte applikationen for risiko for tokenefterligning.',
  device_flow_tag: 'Enhedsflow',
  device_flow_notification:
    'Appen bruger OAuth 2.0 Device Authorization Flow til enheder med begrænset input eller headless-apps (f.eks. tv, CLI). Brugere fuldfører login på en anden enhed ved at indtaste en enhedskode eller scanne en QR-kode. <a>Læs mere</a>',
  device_flow_try_demo: 'Prøv demoen',
  delete_description:
    'Handlingen kan ikke fortrydes. Applikationen slettes permanent. Indtast applikationens navn <span>{{name}}</span> for at bekræfte.',
  enter_your_application_name: 'Indtast applikationens navn',
  application_deleted: 'Applikationen {{name}} er slettet',
  redirect_uri_required: 'Du skal indtaste mindst én omdirigerings-URI',
  app_domain_description_1:
    'Brug gerne dit domæne med {{domain}} via GetCertus; det er gyldigt permanent.',
  app_domain_description_2:
    'Brug gerne dit domæne <domain>{{domain}}</domain>; det er gyldigt permanent.',
  custom_rules: 'Tilpassede godkendelsesregler',
  custom_rules_placeholder: '^/(admin|privacy)/.+$',
  custom_rules_description:
    'Angiv regler med regulære udtryk for ruter, der kræver godkendelse. Standard: hele webstedet beskyttes, hvis feltet er tomt.',
  authentication_routes: 'Godkendelsesruter',
  custom_rules_tip:
    "To eksempler:<ol><li>Beskyt kun ruterne '/admin' og '/privacy' med godkendelse: ^/(admin|privacy)/.*</li><li>Undtag JPG-billeder fra godkendelse: ^(?!.*\\.jpg$).*$</li></ol>",
  authentication_routes_description:
    'Omdiriger godkendelsesknappen via de angivne ruter. Bemærk: ruterne kan ikke erstattes.',
  protect_origin_server: 'Beskyt din oprindelsesserver',
  protect_origin_server_description:
    'Sørg for, at oprindelsesserveren ikke kan nås direkte. Se vejledningen for <a>detaljerede instruktioner</a>.',
  third_party_settings_description:
    'Integrer tredjepartsapplikationer med GetCertus som identitetsudbyder (IdP) via OIDC / OAuth 2.0, med en samtykkeskærm til brugerens autorisation.',
  session_duration: 'Sessionens varighed (dage)',
  try_it: 'Prøv det',
  no_organization_placeholder: 'Ingen organisation fundet. <a>Gå til organisationer</a>',
  field_custom_data: 'Brugerdefinerede data',
  field_custom_data_tip:
    'Yderligere applikationsoplysninger, der ikke findes blandt de foruddefinerede egenskaber, f.eks. forretningsspecifikke indstillinger og konfigurationer.',
  custom_data_invalid: 'Brugerdefinerede data skal være et gyldigt JSON-objekt',
  access_control: {
    name: 'Regler',
    title: 'Adgangskontrol',
    description: 'Tilpas reglerne for adgangskontrol på appniveau.',
    enable: 'Slå adgangskontrol på appniveau til',
    enable_description:
      'Slå detaljeret adgangskontrol til for at begrænse, hvilke brugere der kan bruge applikationen. Hvis den er slået fra, har alle registrerede brugere adgang.',
    enable_without_rules_notice: 'Tilføj mindst én adgangsregel, før du slår adgangskontrol til.',
    load_error: 'Adgangsreglerne kunne ikke indlæses.',
    custom_allow_rules: 'Tilpassede tilladelsesregler',
    custom_allow_rules_description:
      'Opret regler, så brugere med bestemte egenskaber automatisk får adgang. Der kræves mindst én regel, når det er slået til.',
    rules: 'Adgangsregler',
    add_rules: 'Tilføj regler',
    rules_description:
      'Brugere har adgang til appen, hvis de opfylder en af de konfigurerede regler.',
    empty_rules_description: 'Der er endnu ingen regler.',
    delete_rule_confirmation: 'Er du sikker på, at du vil fjerne denne regel?',
    rule_table_rules: 'Regler',
    rule_table_description: 'Beskrivelse',
    rule_table_users: 'Brugere',
    rule_table_members: 'Medlemmer',
    rule_table_user_id: 'Bruger-ID',
    rule_count: '{{count}} regel',
    rule_count_other: '{{count}} regler',
    rule_users: 'Brugere',
    rule_users_description: 'Bestemte brugere har adgang til appen.',
    rule_roles: 'Roller',
    rule_user_roles: 'Brugerroller',
    rule_user_roles_description: 'Brugere med de valgte brugerroller har adgang til appen.',
    rule_organizations: 'Organisationer',
    rule_organizations_description:
      'Alle nuværende og fremtidige medlemmer af de valgte organisationer har adgang til appen.',
    rule_organization_roles: 'Organisationsroller',
    rule_organization_roles_description:
      'Medlemmer med de valgte organisationsroller i de valgte organisationer har adgang til appen.',
  },
  branding: {
    name: 'Branding',
    description: 'Tilpas appens logo og brandfarve til oplevelsen på appniveau.',
    description_third_party: 'Tilpas applikationens visningsnavn og logo på samtykkeskærmen.',
    app_logo: 'App-logo',
    app_level_sie: 'Login-oplevelse på appniveau',
    app_level_sie_switch:
      'Slå login-oplevelsen på appniveau til, og opsæt app-specifik branding. Hvis den er slået fra, bruges den fælles login-oplevelse.',
    more_info: 'Mere information',
    more_info_description: 'Giv brugerne flere oplysninger om applikationen på samtykkeskærmen.',
    display_name: 'Visningsnavn',
    application_logo: 'Applikationens logo',
    application_logo_dark: 'Applikationens logo (mørkt)',
    brand_color: 'Brandfarve',
    brand_color_dark: 'Brandfarve (mørk)',
    terms_of_use_url: 'URL til applikationens brugervilkår',
    privacy_policy_url: 'URL til applikationens privatlivspolitik',
  },
  permissions: {
    name: 'Tilladelser',
    description:
      'Vælg de tilladelser, som tredjepartsapplikationen skal bruge for med brugerens autorisation at få adgang til bestemte datatyper.',
    user_permissions: 'Personlige brugerdata',
    organization_permissions: 'Adgang til organisation',
    table_name: 'Giv tilladelser',
    field_name: 'Tilladelse',
    field_description: 'Vises på samtykkeskærmen',
    delete_text: 'Fjern tilladelse',
    permission_delete_confirm:
      'Tredjepartsappens tilladelser trækkes tilbage, så den ikke længere kan anmode om brugerens autorisation til bestemte datatyper. Vil du fortsætte?',
    permissions_assignment_description:
      'Vælg de tilladelser, som tredjepartsapplikationen anmoder om for med brugerens autorisation at få adgang til bestemte datatyper.',
    user_profile: 'Brugerdata',
    api_permissions: 'API-tilladelser',
    organization: 'Organisationstilladelser',
    user_permissions_assignment_form_title: 'Tilføj tilladelser til brugerprofilen',
    organization_permissions_assignment_form_title: 'Tilføj organisationstilladelser',
    api_resource_permissions_assignment_form_title: 'Tilføj tilladelser til API-ressourcer',
    user_data_permission_description_tips:
      'Du kan ændre beskrivelsen af tilladelserne til personlige brugerdata via "Login-oplevelse > Indhold > Administrer sprog"',
    permission_description_tips:
      'Når GetCertus er identitetsudbyder (IdP) til godkendelse i tredjepartsapps, og brugere bliver bedt om autorisation, vises denne beskrivelse på samtykkeskærmen.',
    user_title: 'Bruger',
    user_description:
      'Vælg de tilladelser, som tredjepartsappen anmoder om for at få adgang til bestemte brugerdata.',
    grant_user_level_permissions: 'Giv tilladelser til brugerdata',
    organization_title: 'Organisation',
    organization_description:
      'Vælg de tilladelser, som tredjepartsappen anmoder om for at få adgang til bestemte organisationsdata.',
    grant_organization_level_permissions: 'Giv tilladelser til organisationsdata',
    oidc_title: 'OIDC',
    oidc_description:
      'Grundlæggende OIDC-tilladelser konfigureres automatisk for appen. Disse scopes er nødvendige for godkendelse og vises ikke på samtykkeskærmen.',
    default_oidc_permissions: 'Standard-OIDC-tilladelser',
    permission_column: 'Tilladelse',
    guide_column: 'Forklaring',
    openid_permission: 'openid',
    openid_permission_guide:
      "Valgfri for adgang til OAuth-ressourcer.\nPåkrævet for OIDC-godkendelse. Giver et ID-token og adgang til 'userinfo_endpoint'.",
    offline_access_permission: 'offline_access',
    offline_access_permission_guide:
      'Valgfri. Henter opdateringstokens til langvarig adgang eller baggrundsopgaver.',
  },
  roles: {
    assign_button: 'Tildel roller',
    delete_description:
      'Rollen fjernes fra denne maskine-til-maskine-app. Selve rollen findes stadig, men er ikke længere knyttet til appen.',
    deleted: '{{name}} er fjernet fra denne bruger.',
    assign_title: 'Tildel roller til {{name}}',
    assign_subtitle:
      'Maskine-til-maskine-apps skal have roller af typen maskine-til-maskine for at få adgang til de tilhørende API-ressourcer.',
    assign_role_field: 'Tildel roller',
    role_search_placeholder: 'Søg efter rollenavn',
    added_text: '{{value, number}} tilføjet',
    assigned_app_count: '{{value, number}} applikationer',
    confirm_assign: 'Tildel roller',
    role_assigned: 'Rolle(r) tildelt',
    search: 'Søg efter rollenavn, beskrivelse eller ID',
    empty: 'Ingen rolle tilgængelig',
  },
  secrets: {
    value: 'Værdi',
    empty: 'Applikationen har ingen hemmeligheder.',
    created_at: 'Oprettet',
    expires_at: 'Udløber',
    never: 'Aldrig',
    create_new_secret: 'Opret ny hemmelighed',
    delete_confirmation:
      'Handlingen kan ikke fortrydes. Er du sikker på, at du vil slette hemmeligheden?',
    deleted: 'Hemmeligheden er slettet.',
    activated: 'Hemmeligheden er aktiveret.',
    deactivated: 'Hemmeligheden er deaktiveret.',
    legacy_secret: 'Ældre hemmelighed',
    expired: 'Udløbet',
    expired_tooltip: 'Hemmeligheden udløb {{date}}.',
    create_modal: {
      title: 'Opret applikationshemmelighed',
      expiration: 'Udløb',
      expiration_description: 'Hemmeligheden udløber {{date}}.',
      expiration_description_never:
        'Hemmeligheden udløber aldrig. Vi anbefaler en udløbsdato for bedre sikkerhed.',
      days: '{{count}} dag',
      days_other: '{{count}} dage',
      years: '{{count}} år',
      years_other: '{{count}} år',
      created: 'Hemmeligheden {{name}} er oprettet.',
    },
    edit_modal: {
      title: 'Rediger applikationshemmelighed',
      edited: 'Hemmeligheden {{name}} er redigeret.',
    },
  },
  saml_idp_config: {
    title: 'SAML IdP-metadata',
    description:
      'Brug følgende metadata og certifikat til at konfigurere SAML IdP i din applikation.',
    metadata_url_label: 'URL til IdP-metadata',
    single_sign_on_service_url_label: 'URL til single sign-on-tjenesten',
    idp_entity_id_label: "IdP'ens enheds-ID",
  },
  saml_idp_certificates: {
    title: 'SAML-signeringscertifikat',
    expires_at: 'Udløber',
    finger_print: 'Fingeraftryk',
    status: 'Status',
    active: 'Aktiv',
    inactive: 'Inaktiv',
  },
  saml_idp_name_id_format: {
    title: 'Format for Name ID',
    description: "Vælg SAML IdP'ens format for Name ID.",
    persistent: 'Vedvarende',
    persistent_description: 'Brug GetCertus-bruger-ID som Name ID',
    transient: 'Midlertidig',
    transient_description: 'Brug et engangs-bruger-ID som Name ID',
    unspecified: 'Ikke angivet',
    unspecified_description: 'Brug GetCertus-bruger-ID som Name ID',
    email_address: 'E-mailadresse',
    email_address_description: 'Brug e-mailadressen som Name ID',
  },
  saml_idp_authentication: {
    always_force_authn: 'Gennemtving altid godkendelse',
    always_force_authn_description:
      'Kræv, at brugere logger ind igen, hver gang de åbner applikationen, selv hvis de allerede har en GetCertus-session.',
    always_force_authn_tip:
      'Når dette er slået til, beder GetCertus altid brugerne om at logge ind igen for applikationen. Ellers genbruges en eksisterende GetCertus-session, medmindre tjenesteudbyderen beder om ny godkendelse med ForceAuthn.',
  },
  saml_encryption_config: {
    encrypt_assertion: 'Kryptér SAML-assertion',
    encrypt_assertion_description: 'Med denne indstilling krypteres SAML-assertion.',
    encrypt_then_sign: 'Kryptér, derefter signér',
    encrypt_then_sign_description:
      'Med denne indstilling krypteres SAML-assertion først og signeres derefter; ellers signeres den først og krypteres derefter.',
    certificate: 'Certifikat',
    certificate_tooltip:
      'Kopiér og indsæt x509-certifikatet fra din tjenesteudbyder for at kryptere SAML-assertion.',
    certificate_placeholder:
      '-----BEGIN CERTIFICATE-----\nMIICYDCCAcmgAwIBA...\n-----END CERTIFICATE-----\n',
    certificate_missing_error: 'Certifikat er påkrævet.',
    certificate_invalid_format_error:
      'Ugyldigt certifikatformat. Kontrollér formatet, og prøv igen.',
  },
  saml_app_attribute_mapping: {
    name: 'Attributtilknytninger',
    title: 'Grundlæggende attributtilknytninger',
    description:
      'Tilføj attributtilknytninger for at synkronisere brugerprofilen fra GetCertus til din applikation.',
    col_logto_claims: 'Værdi i GetCertus',
    col_sp_claims: 'Værdiens navn i din applikation',
    add_button: 'Tilføj en mere',
  },
  concurrent_device_limit: {
    title: 'Grænse for samtidige enheder',
    enable: 'Slå grænse for samtidige enheder til',
    enable_description:
      'Når dette er slået til, håndhæver GetCertus det maksimale antal aktive tildelinger pr. bruger for appen.',
    field: 'Grænse for samtidige enheder pr. app',
    field_description:
      'Begræns, hvor mange enheder en bruger kan være logget ind på samtidig. GetCertus begrænser aktive tildelinger og tilbagekalder automatisk den ældste, når grænsen overskrides.',
    field_placeholder: 'Lad stå tomt for ingen grænse',
    should_be_greater_than_zero: 'Skal være større end 0.',
  },
};

export default Object.freeze(application_details);
