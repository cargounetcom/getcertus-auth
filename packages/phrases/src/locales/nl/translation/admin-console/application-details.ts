/* GetCertus addition (MPL-2.0, see GETCERTUS.md): admin console phrases. */
const application_details = {
  page_title: 'Applicatiedetails',
  back_to_applications: 'Terug naar applicaties',
  check_guide: 'Handleiding bekijken',
  settings: 'Instellingen',
  settings_description:
    'Een "applicatie" is geregistreerde software of een dienst die gebruikersgegevens kan opvragen of namens een gebruiker kan handelen. Applicaties helpen herkennen wie wat aan GetCertus vraagt, en regelen inloggen en machtigingen. Vul de verplichte velden voor authenticatie in.',
  integration: 'Integratie',
  integration_description:
    'Implementeer met de beveiligde GetCertus-workers op het edge-netwerk van Cloudflare, voor topprestaties en 0 ms koude starts wereldwijd.',
  service_configuration: 'Serviceconfiguratie',
  service_configuration_description: 'Rond de nodige configuratie in je service af.',
  session: 'Sessie',
  endpoints_and_credentials: 'Endpoints & inloggegevens',
  endpoints_and_credentials_description:
    'Gebruik de volgende endpoints en inloggegevens om de OIDC-verbinding in je applicatie in te stellen.',
  refresh_token_settings: 'Vernieuwingstoken',
  refresh_token_settings_description:
    'Beheer de regels voor vernieuwingstokens van deze applicatie.',
  machine_logs: 'Machinelogs',
  application_name: 'Naam van de applicatie',
  application_name_placeholder: 'Mijn app',
  description: 'Beschrijving',
  description_placeholder: 'Voer een beschrijving van je applicatie in',
  config_endpoint: 'Configuratie-endpoint van de OpenID-provider',
  issuer_endpoint: 'Issuer-endpoint',
  jwks_uri: 'JWKS-URI',
  authorization_endpoint: 'Autorisatie-endpoint',
  authorization_endpoint_tip:
    'Het endpoint voor authenticatie en autorisatie. Het wordt gebruikt voor OpenID Connect-<a>authenticatie</a>.',
  show_endpoint_details: 'Endpointdetails tonen',
  hide_endpoint_details: 'Endpointdetails verbergen',
  logto_endpoint: 'GetCertus-endpoint',
  application_id: 'App-ID',
  application_id_tip:
    'De unieke applicatie-ID, meestal door GetCertus gegenereerd. Dit is ook de “<a>client_id</a>” in OpenID Connect.',
  application_secret: 'App-secret',
  application_secret_other: 'App-secrets',
  redirect_uri: 'Redirect-URI',
  redirect_uris: "Redirect-URI's",
  redirect_uri_placeholder: 'https://your.website.com/app',
  redirect_uri_placeholder_native: 'io.logto://callback',
  redirect_uri_tip:
    'De URI waarnaar wordt doorgestuurd na het inloggen (geslaagd of niet). Zie OpenID Connect <a>AuthRequest</a> voor meer informatie.',
  mixed_redirect_uri_warning:
    "Je applicatietype past niet bij minstens één van de redirect-URI's. Dat is geen goede praktijk; we raden sterk aan de redirect-URI's consistent te houden.",
  wildcard_redirect_uri_warning:
    "Redirect-URI's met jokertekens zijn geen standaard-OIDC en vergroten het aanvalsoppervlak. Gebruik ze voorzichtig en kies waar mogelijk exacte redirect-URI's.",
  post_sign_out_redirect_uri: 'Redirect-URI na uitloggen',
  post_sign_out_redirect_uris: "Redirect-URI's na uitloggen",
  post_sign_out_redirect_uri_placeholder: 'https://your.website.com/home',
  post_sign_out_redirect_uri_tip:
    'De URI waarnaar wordt doorgestuurd na het uitloggen (optioneel). Bij sommige apptypes heeft dit geen praktisch effect.',
  cors_allowed_origins: 'Toegestane CORS-origins',
  cors_allowed_origins_placeholder: 'https://your.website.com',
  cors_allowed_origins_tip:
    "Standaard zijn alle origins van de redirect-URI's toegestaan. Meestal hoef je hier niets te doen. Zie de <a>MDN-documentatie</a> voor details.",
  token_endpoint: 'Token-endpoint',
  user_info_endpoint: 'Userinfo-endpoint',
  enable_admin_access: 'Beheerderstoegang inschakelen',
  enable_admin_access_label:
    'Schakel toegang tot de Management API in of uit. Als dit aan staat, kun je met toegangstokens namens deze applicatie de Management API aanroepen.',
  always_issue_refresh_token: 'Altijd een vernieuwingstoken uitgeven',
  always_issue_refresh_token_label:
    'Als dit aan staat, geeft GetCertus altijd vernieuwingstokens uit, ook als `prompt=consent` niet in het authenticatieverzoek staat. Doe dit alleen als het nodig is: het is niet compatibel met OpenID Connect en kan problemen geven.',
  refresh_token_ttl: 'Geldigheidsduur (TTL) van het vernieuwingstoken in dagen',
  refresh_token_ttl_tip:
    'Hoe lang een vernieuwingstoken nieuwe toegangstokens kan opvragen voordat het verloopt. Elk tokenverzoek verlengt de TTL van het vernieuwingstoken tot deze waarde.',
  rotate_refresh_token: 'Vernieuwingstoken roteren',
  rotate_refresh_token_label:
    'Als dit aan staat, geeft GetCertus bij een tokenverzoek een nieuw vernieuwingstoken uit zodra 70% van de oorspronkelijke geldigheidsduur (TTL) voorbij is of aan bepaalde voorwaarden is voldaan. <a>Meer informatie</a>',
  rotate_refresh_token_label_for_public_clients:
    'Als dit aan staat, geeft GetCertus bij elk tokenverzoek een nieuw vernieuwingstoken uit. <a>Meer informatie</a>',
  backchannel_logout: 'Backchannel-uitloggen',
  backchannel_logout_description:
    'Stel het OpenID Connect-endpoint voor backchannel-uitloggen in en of deze applicatie een sessie vereist.',
  backchannel_logout_uri: 'URI voor backchannel-uitloggen',
  backchannel_logout_uri_session_required: 'Sessie vereist?',
  backchannel_logout_uri_session_required_description:
    'Als dit aan staat, vereist de RP dat het uitlogtoken een `sid`-claim (sessie-ID) bevat om de RP-sessie bij de OP te identificeren wanneer `backchannel_logout_uri` wordt gebruikt.',
  token_exchange: 'Tokenuitwisseling',
  token_exchange_description: 'Beheer de instellingen voor tokenuitwisseling van deze applicatie.',
  allow_token_exchange: 'Tokenuitwisseling toestaan',
  allow_token_exchange_description:
    'Sta deze applicatie toe tokenuitwisselingsverzoeken te starten. Dit is nodig voor <impersonationLink>gebruikersimitatie</impersonationLink> en <patLink>persoonlijke toegangstokens</patLink>.',
  allow_token_exchange_public_client_warning:
    'Tokenuitwisseling inschakelen voor openbare clients (single-page-app / native app) wordt afgeraden. Openbare clients kunnen inloggegevens niet veilig opslaan, waardoor je applicatie risico loopt op tokenimitatie.',
  device_flow_tag: 'Apparaatstroom',
  device_flow_notification:
    "Deze app gebruikt de OAuth 2.0 Device Authorization Flow voor apparaten met beperkte invoer of headless apps (bijv. tv's, CLI). Gebruikers ronden het inloggen af op een ander apparaat door een apparaatcode in te voeren of een QR-code te scannen. <a>Meer informatie</a>",
  device_flow_try_demo: 'Demo proberen',
  delete_description:
    'Dit kan niet ongedaan worden gemaakt. De applicatie wordt definitief verwijderd. Voer de naam van de applicatie <span>{{name}}</span> in om te bevestigen.',
  enter_your_application_name: 'Voer de naam van je applicatie in',
  application_deleted: 'Applicatie {{name}} is verwijderd',
  redirect_uri_required: 'Je moet minimaal één redirect-URI invoeren',
  app_domain_description_1:
    'Gebruik gerust je domein met {{domain}} via GetCertus; het blijft permanent geldig.',
  app_domain_description_2:
    'Gebruik gerust je domein <domain>{{domain}}</domain>; het blijft permanent geldig.',
  custom_rules: 'Aangepaste authenticatieregels',
  custom_rules_placeholder: '^/(admin|privacy)/.+$',
  custom_rules_description:
    'Stel met reguliere expressies regels in voor routes die authenticatie vereisen. Standaard: de hele site wordt beschermd als dit leeg blijft.',
  authentication_routes: 'Authenticatieroutes',
  custom_rules_tip:
    "Twee voorbeelden:<ol><li>Alleen de routes '/admin' en '/privacy' met authenticatie beschermen: ^/(admin|privacy)/.*</li><li>JPG-afbeeldingen uitsluiten van authenticatie: ^(?!.*\\.jpg$).*$</li></ol>",
  authentication_routes_description:
    'Stuur je authenticatieknop door via de opgegeven routes. Let op: deze routes zijn niet vervangbaar.',
  protect_origin_server: 'Bescherm je originserver',
  protect_origin_server_description:
    'Zorg dat je originserver niet rechtstreeks bereikbaar is. Zie de handleiding voor <a>gedetailleerde instructies</a>.',
  third_party_settings_description:
    'Integreer applicaties van derden met GetCertus als identiteitsprovider (IdP) via OIDC / OAuth 2.0, met een toestemmingsscherm voor de autorisatie van gebruikers.',
  session_duration: 'Sessieduur (dagen)',
  try_it: 'Proberen',
  no_organization_placeholder: 'Geen organisatie gevonden. <a>Naar organisaties</a>',
  field_custom_data: 'Aangepaste gegevens',
  field_custom_data_tip:
    'Extra aangepaste applicatiegegevens die niet in de vooraf gedefinieerde eigenschappen staan, zoals bedrijfsspecifieke instellingen en configuraties.',
  custom_data_invalid: 'Aangepaste gegevens moeten een geldig JSON-object zijn',
  access_control: {
    name: 'Regels',
    title: 'Toegangsbeheer',
    description: 'Stel je regels in voor toegangsbeheer op appniveau.',
    enable: 'Toegangsbeheer op appniveau inschakelen',
    enable_description:
      'Schakel fijnmazig toegangsbeheer in om te bepalen welke gebruikers deze applicatie kunnen gebruiken. Als dit uit staat, hebben alle geregistreerde gebruikers toegang.',
    enable_without_rules_notice:
      'Voeg minimaal één toegangsregel toe voordat je toegangsbeheer inschakelt.',
    load_error: 'Laden van de toegangsregels mislukt.',
    custom_allow_rules: 'Aangepaste toestaanregels',
    custom_allow_rules_description:
      'Maak regels zodat gebruikers met bepaalde kenmerken automatisch toegang krijgen. Als dit aan staat, is minimaal één regel nodig.',
    rules: 'Toegangsregels',
    add_rules: 'Regels toevoegen',
    rules_description:
      'Gebruikers hebben toegang tot deze app als ze aan een van de ingestelde regels voldoen.',
    empty_rules_description: 'Er zijn nog geen regels ingesteld.',
    delete_rule_confirmation: 'Weet je zeker dat je deze regel wilt verwijderen?',
    rule_table_rules: 'Regels',
    rule_table_description: 'Beschrijving',
    rule_table_users: 'Gebruikers',
    rule_table_members: 'Leden',
    rule_table_user_id: 'Gebruikers-ID',
    rule_count: '{{count}} regel',
    rule_count_other: '{{count}} regels',
    rule_users: 'Gebruikers',
    rule_users_description: 'Specifieke gebruikers hebben toegang tot deze app.',
    rule_roles: 'Rollen',
    rule_user_roles: 'Gebruikersrollen',
    rule_user_roles_description:
      'Gebruikers met de gekozen gebruikersrollen hebben toegang tot deze app.',
    rule_organizations: 'Organisaties',
    rule_organizations_description:
      'Alle huidige en toekomstige leden van de gekozen organisaties hebben toegang tot deze app.',
    rule_organization_roles: 'Organisatierollen',
    rule_organization_roles_description:
      'Leden met de gekozen organisatierollen in de gekozen organisaties hebben toegang tot deze app.',
  },
  branding: {
    name: 'Huisstijl',
    description: 'Pas het logo en de merkkleur van je app aan voor de ervaring op appniveau.',
    description_third_party:
      'Pas de weergavenaam en het logo van je applicatie aan op het toestemmingsscherm.',
    app_logo: 'App-logo',
    app_level_sie: 'Inlogervaring op appniveau',
    app_level_sie_switch:
      'Schakel de inlogervaring op appniveau in en stel een app-specifieke huisstijl in. Als dit uit staat, wordt de algemene inlogervaring gebruikt.',
    more_info: 'Meer informatie',
    more_info_description:
      'Geef gebruikers meer informatie over je applicatie op het toestemmingsscherm.',
    display_name: 'Weergavenaam',
    application_logo: 'Applicatielogo',
    application_logo_dark: 'Applicatielogo (donker)',
    brand_color: 'Merkkleur',
    brand_color_dark: 'Merkkleur (donker)',
    terms_of_use_url: 'URL van de gebruiksvoorwaarden van de applicatie',
    privacy_policy_url: 'URL van het privacybeleid van de applicatie',
  },
  permissions: {
    name: 'Machtigingen',
    description:
      'Kies de machtigingen die de applicatie van derden nodig heeft om met toestemming van de gebruiker bepaalde gegevenstypen te openen.',
    user_permissions: 'Persoonlijke gebruikersgegevens',
    organization_permissions: 'Toegang tot organisatie',
    table_name: 'Machtigingen verlenen',
    field_name: 'Machtiging',
    field_description: 'Getoond op het toestemmingsscherm',
    delete_text: 'Machtiging verwijderen',
    permission_delete_confirm:
      'Hiermee worden de machtigingen van de app van derden ingetrokken, zodat die geen gebruikersautorisatie meer kan vragen voor bepaalde gegevenstypen. Weet je zeker dat je wilt doorgaan?',
    permissions_assignment_description:
      'Kies de machtigingen die de applicatie van derden aanvraagt om met toestemming van de gebruiker bepaalde gegevenstypen te openen.',
    user_profile: 'Gebruikersgegevens',
    api_permissions: 'API-machtigingen',
    organization: 'Organisatiemachtigingen',
    user_permissions_assignment_form_title: 'Machtigingen voor gebruikersprofiel toevoegen',
    organization_permissions_assignment_form_title: 'Organisatiemachtigingen toevoegen',
    api_resource_permissions_assignment_form_title: 'Machtigingen voor API-resources toevoegen',
    user_data_permission_description_tips:
      'Je kunt de beschrijving van de machtigingen voor persoonlijke gebruikersgegevens wijzigen via "Inlogervaring > Inhoud > Taal beheren"',
    permission_description_tips:
      'Als GetCertus de identiteitsprovider (IdP) is voor authenticatie in apps van derden en gebruikers om autorisatie wordt gevraagd, verschijnt deze beschrijving op het toestemmingsscherm.',
    user_title: 'Gebruiker',
    user_description:
      'Kies de machtigingen die de app van derden aanvraagt voor toegang tot specifieke gebruikersgegevens.',
    grant_user_level_permissions: 'Machtigingen voor gebruikersgegevens verlenen',
    organization_title: 'Organisatie',
    organization_description:
      'Kies de machtigingen die de app van derden aanvraagt voor toegang tot specifieke organisatiegegevens.',
    grant_organization_level_permissions: 'Machtigingen voor organisatiegegevens verlenen',
    oidc_title: 'OIDC',
    oidc_description:
      'De basis-OIDC-machtigingen worden automatisch voor je app ingesteld. Deze scopes zijn nodig voor authenticatie en verschijnen niet op het toestemmingsscherm.',
    default_oidc_permissions: 'Standaard OIDC-machtigingen',
    permission_column: 'Machtiging',
    guide_column: 'Toelichting',
    openid_permission: 'openid',
    openid_permission_guide:
      "Optioneel voor toegang tot OAuth-resources.\nVerplicht voor OIDC-authenticatie. Geeft toegang tot een ID-token en tot het 'userinfo_endpoint'.",
    offline_access_permission: 'offline_access',
    offline_access_permission_guide:
      'Optioneel. Haalt vernieuwingstokens op voor langdurige toegang of achtergrondtaken.',
  },
  roles: {
    assign_button: 'Rollen toewijzen',
    delete_description:
      'Hiermee wordt deze rol uit deze machine-to-machine-app verwijderd. De rol zelf blijft bestaan, maar is niet meer aan deze app gekoppeld.',
    deleted: '{{name}} is van deze gebruiker verwijderd.',
    assign_title: 'Rollen toewijzen aan {{name}}',
    assign_subtitle:
      'Machine-to-machine-apps hebben machine-to-machine-rollen nodig om de bijbehorende API-resources te gebruiken.',
    assign_role_field: 'Rollen toewijzen',
    role_search_placeholder: 'Zoeken op rolnaam',
    added_text: '{{value, number}} toegevoegd',
    assigned_app_count: '{{value, number}} applicaties',
    confirm_assign: 'Rollen toewijzen',
    role_assigned: 'Rol(len) toegewezen',
    search: 'Zoeken op rolnaam, beschrijving of ID',
    empty: 'Geen rol beschikbaar',
  },
  secrets: {
    value: 'Waarde',
    empty: 'De applicatie heeft geen secrets.',
    created_at: 'Aangemaakt op',
    expires_at: 'Verloopt op',
    never: 'Nooit',
    create_new_secret: 'Nieuw secret aanmaken',
    delete_confirmation:
      'Dit kan niet ongedaan worden gemaakt. Weet je zeker dat je dit secret wilt verwijderen?',
    deleted: 'Het secret is verwijderd.',
    activated: 'Het secret is geactiveerd.',
    deactivated: 'Het secret is gedeactiveerd.',
    legacy_secret: 'Verouderd secret',
    expired: 'Verlopen',
    expired_tooltip: 'Dit secret is verlopen op {{date}}.',
    create_modal: {
      title: 'Applicatiesecret aanmaken',
      expiration: 'Vervaldatum',
      expiration_description: 'Het secret verloopt op {{date}}.',
      expiration_description_never:
        'Het secret verloopt nooit. We raden een vervaldatum aan voor betere beveiliging.',
      days: '{{count}} dag',
      days_other: '{{count}} dagen',
      years: '{{count}} jaar',
      years_other: '{{count}} jaar',
      created: 'Het secret {{name}} is aangemaakt.',
    },
    edit_modal: {
      title: 'Applicatiesecret bewerken',
      edited: 'Het secret {{name}} is bewerkt.',
    },
  },
  saml_idp_config: {
    title: 'SAML IdP-metadata',
    description:
      'Gebruik de volgende metadata en het certificaat om de SAML IdP in je applicatie in te stellen.',
    metadata_url_label: 'URL van de IdP-metadata',
    single_sign_on_service_url_label: 'URL van de single sign-on-service',
    idp_entity_id_label: 'Entity-ID van de IdP',
  },
  saml_idp_certificates: {
    title: 'SAML-ondertekeningscertificaat',
    expires_at: 'Verloopt op',
    finger_print: 'Vingerafdruk',
    status: 'Status',
    active: 'Actief',
    inactive: 'Inactief',
  },
  saml_idp_name_id_format: {
    title: 'Name ID-indeling',
    description: 'Kies de Name ID-indeling van de SAML IdP.',
    persistent: 'Persistent',
    persistent_description: 'GetCertus-gebruikers-ID gebruiken als Name ID',
    transient: 'Tijdelijk',
    transient_description: 'Eenmalige gebruikers-ID gebruiken als Name ID',
    unspecified: 'Niet gespecificeerd',
    unspecified_description: 'GetCertus-gebruikers-ID gebruiken als Name ID',
    email_address: 'E-mailadres',
    email_address_description: 'E-mailadres gebruiken als Name ID',
  },
  saml_idp_authentication: {
    always_force_authn: 'Altijd authenticatie afdwingen',
    always_force_authn_description:
      'Gebruikers moeten bij elke toegang tot deze applicatie opnieuw inloggen, ook als ze al een GetCertus-sessie hebben.',
    always_force_authn_tip:
      'Als dit aan staat, vraagt GetCertus gebruikers altijd opnieuw in te loggen voor deze applicatie. Als dit uit staat, wordt een bestaande GetCertus-sessie hergebruikt, tenzij de serviceprovider met ForceAuthn om nieuwe authenticatie vraagt.',
  },
  saml_encryption_config: {
    encrypt_assertion: 'SAML-assertion versleutelen',
    encrypt_assertion_description: 'Met deze optie wordt de SAML-assertion versleuteld.',
    encrypt_then_sign: 'Eerst versleutelen, dan ondertekenen',
    encrypt_then_sign_description:
      'Met deze optie wordt de SAML-assertion eerst versleuteld en dan ondertekend; anders eerst ondertekend en dan versleuteld.',
    certificate: 'Certificaat',
    certificate_tooltip:
      'Kopieer en plak het x509-certificaat van je serviceprovider om de SAML-assertion te versleutelen.',
    certificate_placeholder:
      '-----BEGIN CERTIFICATE-----\nMIICYDCCAcmgAwIBA...\n-----END CERTIFICATE-----\n',
    certificate_missing_error: 'Certificaat is verplicht.',
    certificate_invalid_format_error:
      'Ongeldige certificaatindeling. Controleer de indeling en probeer het opnieuw.',
  },
  saml_app_attribute_mapping: {
    name: 'Attribuuttoewijzingen',
    title: 'Basisattribuuttoewijzingen',
    description:
      'Voeg attribuuttoewijzingen toe om het gebruikersprofiel van GetCertus met je applicatie te synchroniseren.',
    col_logto_claims: 'Waarde in GetCertus',
    col_sp_claims: 'Naam van de waarde in je applicatie',
    add_button: 'Nog een toevoegen',
  },
  concurrent_device_limit: {
    title: 'Limiet gelijktijdige apparaten',
    enable: 'Limiet gelijktijdige apparaten inschakelen',
    enable_description:
      'Als dit aan staat, handhaaft GetCertus het maximum aantal actieve toekenningen per gebruiker voor deze app.',
    field: 'Limiet gelijktijdige apparaten per app',
    field_description:
      'Beperk op hoeveel apparaten een gebruiker tegelijk ingelogd kan zijn. GetCertus beperkt de actieve toekenningen en trekt automatisch de oudste in als de limiet wordt overschreden.',
    field_placeholder: 'Leeg laten voor geen limiet',
    should_be_greater_than_zero: 'Moet groter zijn dan 0.',
  },
};

export default Object.freeze(application_details);
