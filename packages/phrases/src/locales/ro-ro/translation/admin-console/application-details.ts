/* GetCertus addition (MPL-2.0, see GETCERTUS.md): admin console phrases. */
const application_details = {
  page_title: 'Detalii aplicație',
  back_to_applications: 'Înapoi la aplicații',
  check_guide: 'Vezi ghidul',
  settings: 'Setări',
  settings_description:
    'O „aplicație” este un software sau un serviciu înregistrat care poate accesa informațiile utilizatorului sau poate acționa în numele lui. Aplicațiile ajută la identificarea celui care cere ceva de la GetCertus și gestionează conectarea și permisiunile. Completează câmpurile obligatorii pentru autentificare.',
  integration: 'Integrare',
  integration_description:
    'Implementează cu workerii securizați GetCertus pe rețeaua edge Cloudflare, pentru performanță de top și porniri la rece de 0 ms în toată lumea.',
  service_configuration: 'Configurarea serviciului',
  service_configuration_description: 'Finalizează configurările necesare în serviciul tău.',
  session: 'Sesiune',
  endpoints_and_credentials: 'Endpointuri și date de acces',
  endpoints_and_credentials_description:
    'Folosește endpointurile și datele de acces de mai jos pentru a configura conexiunea OIDC în aplicația ta.',
  refresh_token_settings: 'Token de reîmprospătare',
  refresh_token_settings_description:
    'Gestionează regulile pentru tokenurile de reîmprospătare ale acestei aplicații.',
  machine_logs: 'Jurnale de mașină',
  application_name: 'Numele aplicației',
  application_name_placeholder: 'Aplicația mea',
  description: 'Descriere',
  description_placeholder: 'Introdu descrierea aplicației',
  config_endpoint: 'Endpoint de configurare al furnizorului OpenID',
  issuer_endpoint: 'Endpoint emitent',
  jwks_uri: 'URI JWKS',
  authorization_endpoint: 'Endpoint de autorizare',
  authorization_endpoint_tip:
    'Endpointul pentru autentificare și autorizare. Este folosit pentru <a>autentificarea</a> OpenID Connect.',
  show_endpoint_details: 'Arată detaliile endpointurilor',
  hide_endpoint_details: 'Ascunde detaliile endpointurilor',
  logto_endpoint: 'Endpoint GetCertus',
  application_id: 'ID aplicație',
  application_id_tip:
    'Identificatorul unic al aplicației, generat de obicei de GetCertus. Corespunde și „<a>client_id</a>” din OpenID Connect.',
  application_secret: 'Secret aplicație',
  application_secret_other: 'Secrete aplicație',
  redirect_uri: 'URI de redirecționare',
  redirect_uris: 'URI-uri de redirecționare',
  redirect_uri_placeholder: 'https://your.website.com/app',
  redirect_uri_placeholder_native: 'io.logto://callback',
  redirect_uri_tip:
    'URI-ul spre care este trimis utilizatorul după conectare (reușită sau nu). Vezi OpenID Connect <a>AuthRequest</a> pentru detalii.',
  mixed_redirect_uri_warning:
    'Tipul aplicației nu este compatibil cu cel puțin unul dintre URI-urile de redirecționare. Nu este o practică bună; îți recomandăm insistent să păstrezi URI-urile de redirecționare consecvente.',
  wildcard_redirect_uri_warning:
    'URI-urile de redirecționare cu metacaractere nu sunt OIDC standard și pot mări suprafața de atac. Folosește-le cu grijă și preferă URI-uri exacte ori de câte ori se poate.',
  post_sign_out_redirect_uri: 'URI de redirecționare după deconectare',
  post_sign_out_redirect_uris: 'URI-uri de redirecționare după deconectare',
  post_sign_out_redirect_uri_placeholder: 'https://your.website.com/home',
  post_sign_out_redirect_uri_tip:
    'URI-ul spre care este trimis utilizatorul după deconectare (opțional). La unele tipuri de aplicații poate să nu aibă efect practic.',
  cors_allowed_origins: 'Origini CORS permise',
  cors_allowed_origins_placeholder: 'https://your.website.com',
  cors_allowed_origins_tip:
    'Implicit sunt permise toate originile URI-urilor de redirecționare. De obicei nu trebuie să faci nimic aici. Vezi <a>documentația MDN</a> pentru detalii.',
  token_endpoint: 'Endpoint pentru tokenuri',
  user_info_endpoint: 'Endpoint userinfo',
  enable_admin_access: 'Activează accesul de administrator',
  enable_admin_access_label:
    'Activează sau dezactivează accesul la Management API. Când este activat, poți folosi tokenuri de acces pentru a apela Management API în numele acestei aplicații.',
  always_issue_refresh_token: 'Emite mereu token de reîmprospătare',
  always_issue_refresh_token_label:
    'Când este activat, GetCertus emite mereu tokenuri de reîmprospătare, indiferent dacă `prompt=consent` apare în cererea de autentificare. Folosește-l doar dacă e necesar: nu este compatibil cu OpenID Connect și poate cauza probleme.',
  refresh_token_ttl: 'Durata de viață (TTL) a tokenului de reîmprospătare, în zile',
  refresh_token_ttl_tip:
    'Cât timp poate fi folosit un token de reîmprospătare pentru a cere tokenuri de acces noi înainte să expire. Fiecare cerere de token prelungește durata de viață până la această valoare.',
  rotate_refresh_token: 'Rotește tokenul de reîmprospătare',
  rotate_refresh_token_label:
    'Când este activat, GetCertus emite un token de reîmprospătare nou la cererile de token după ce a trecut 70% din durata de viață inițială (TTL) sau sunt îndeplinite anumite condiții. <a>Află mai multe</a>',
  rotate_refresh_token_label_for_public_clients:
    'Când este activat, GetCertus emite un token de reîmprospătare nou la fiecare cerere de token. <a>Află mai multe</a>',
  backchannel_logout: 'Deconectare backchannel',
  backchannel_logout_description:
    'Configurează endpointul OpenID Connect pentru deconectarea backchannel și dacă aplicația necesită sesiune.',
  backchannel_logout_uri: 'URI pentru deconectarea backchannel',
  backchannel_logout_uri_session_required: 'Este necesară sesiunea?',
  backchannel_logout_uri_session_required_description:
    'Când este activat, RP cere ca tokenul de deconectare să conțină o revendicare `sid` (ID de sesiune) care identifică sesiunea RP la OP atunci când se folosește `backchannel_logout_uri`.',
  token_exchange: 'Schimb de tokenuri',
  token_exchange_description:
    'Gestionează setările pentru schimbul de tokenuri al acestei aplicații.',
  allow_token_exchange: 'Permite schimbul de tokenuri',
  allow_token_exchange_description:
    'Permite acestei aplicații să inițieze cereri de schimb de tokenuri. Este necesar pentru <impersonationLink>impersonarea utilizatorilor</impersonationLink> și <patLink>tokenurile de acces personale</patLink>.',
  allow_token_exchange_public_client_warning:
    'Nu recomandăm activarea schimbului de tokenuri pentru clienții publici (aplicație cu o singură pagină / aplicație nativă). Clienții publici nu pot păstra în siguranță datele de acces, ceea ce poate expune aplicația la riscul impersonării prin tokenuri.',
  device_flow_tag: 'Flux pentru dispozitive',
  device_flow_notification:
    'Această aplicație folosește OAuth 2.0 Device Authorization Flow pentru dispozitive cu introducere limitată sau aplicații fără interfață (de ex. TV, CLI). Utilizatorii finalizează conectarea pe alt dispozitiv, introducând un cod sau scanând un cod QR. <a>Află mai multe</a>',
  device_flow_try_demo: 'Încearcă demonstrația',
  delete_description:
    'Acțiunea nu poate fi anulată. Aplicația va fi ștearsă definitiv. Introdu numele aplicației <span>{{name}}</span> pentru a confirma.',
  enter_your_application_name: 'Introdu numele aplicației',
  application_deleted: 'Aplicația {{name}} a fost ștearsă',
  redirect_uri_required: 'Trebuie să introduci cel puțin un URI de redirecționare',
  app_domain_description_1:
    'Poți folosi domeniul tău cu {{domain}} prin GetCertus; este valabil permanent.',
  app_domain_description_2:
    'Poți folosi domeniul tău <domain>{{domain}}</domain>; este valabil permanent.',
  custom_rules: 'Reguli de autentificare personalizate',
  custom_rules_placeholder: '^/(admin|privacy)/.+$',
  custom_rules_description:
    'Definește cu expresii regulate regulile pentru rutele care necesită autentificare. Implicit: tot site-ul este protejat dacă lași câmpul gol.',
  authentication_routes: 'Rute de autentificare',
  custom_rules_tip:
    "Două exemple:<ol><li>Protejează cu autentificare doar rutele '/admin' și '/privacy': ^/(admin|privacy)/.*</li><li>Exclude imaginile JPG de la autentificare: ^(?!.*\\.jpg$).*$</li></ol>",
  authentication_routes_description:
    'Redirecționează butonul de autentificare prin rutele indicate. Notă: aceste rute nu pot fi înlocuite.',
  protect_origin_server: 'Protejează serverul de origine',
  protect_origin_server_description:
    'Asigură-te că serverul de origine nu poate fi accesat direct. Vezi ghidul pentru <a>instrucțiuni detaliate</a>.',
  third_party_settings_description:
    'Integrează aplicații terțe cu GetCertus ca furnizor de identitate (IdP) prin OIDC / OAuth 2.0, cu un ecran de consimțământ pentru autorizarea utilizatorului.',
  session_duration: 'Durata sesiunii (zile)',
  try_it: 'Încearcă',
  no_organization_placeholder: 'Nu s-a găsit nicio organizație. <a>Mergi la organizații</a>',
  field_custom_data: 'Date personalizate',
  field_custom_data_tip:
    'Informații suplimentare despre aplicație care nu se regăsesc în proprietățile predefinite, cum ar fi setări și configurări specifice afacerii.',
  custom_data_invalid: 'Datele personalizate trebuie să fie un obiect JSON valid',
  access_control: {
    name: 'Reguli',
    title: 'Controlul accesului',
    description: 'Personalizează regulile pentru controlul accesului la nivel de aplicație.',
    enable: 'Activează controlul accesului la nivel de aplicație',
    enable_description:
      'Activează un control detaliat al accesului pentru a limita ce utilizatori pot folosi aplicația. Dacă este dezactivat, toți utilizatorii înregistrați au acces.',
    enable_without_rules_notice:
      'Adaugă cel puțin o regulă de acces înainte de a activa controlul accesului.',
    load_error: 'Regulile de acces nu au putut fi încărcate.',
    custom_allow_rules: 'Reguli de permitere personalizate',
    custom_allow_rules_description:
      'Creează reguli prin care utilizatorii cu anumite atribute primesc acces automat. Când este activat, este necesară cel puțin o regulă.',
    rules: 'Reguli de acces',
    add_rules: 'Adaugă reguli',
    rules_description:
      'Utilizatorii au acces la aplicație dacă îndeplinesc oricare dintre regulile configurate.',
    empty_rules_description: 'Nu există încă reguli configurate.',
    delete_rule_confirmation: 'Sigur vrei să elimini această regulă?',
    rule_table_rules: 'Reguli',
    rule_table_description: 'Descriere',
    rule_table_users: 'Utilizatori',
    rule_table_members: 'Membri',
    rule_table_user_id: 'ID utilizator',
    rule_count: '{{count}} regulă',
    rule_count_other: '{{count}} reguli',
    rule_users: 'Utilizatori',
    rule_users_description: 'Anumiți utilizatori au acces la această aplicație.',
    rule_roles: 'Roluri',
    rule_user_roles: 'Roluri de utilizator',
    rule_user_roles_description:
      'Utilizatorii cu rolurile de utilizator selectate au acces la această aplicație.',
    rule_organizations: 'Organizații',
    rule_organizations_description:
      'Toți membrii actuali și viitori ai organizațiilor selectate au acces la această aplicație.',
    rule_organization_roles: 'Roluri în organizație',
    rule_organization_roles_description:
      'Membrii cu rolurile selectate în organizațiile selectate au acces la această aplicație.',
  },
  branding: {
    name: 'Identitate vizuală',
    description:
      'Personalizează sigla și culoarea de brand a aplicației pentru experiența la nivel de aplicație.',
    description_third_party:
      'Personalizează numele afișat și sigla aplicației pe ecranul de consimțământ.',
    app_logo: 'Sigla aplicației',
    app_level_sie: 'Experiență de conectare la nivel de aplicație',
    app_level_sie_switch:
      'Activează experiența de conectare la nivel de aplicație și configurează o identitate vizuală proprie. Dacă este dezactivată, se folosește experiența de conectare comună.',
    more_info: 'Mai multe informații',
    more_info_description:
      'Oferă utilizatorilor mai multe detalii despre aplicație pe ecranul de consimțământ.',
    display_name: 'Nume afișat',
    application_logo: 'Sigla aplicației',
    application_logo_dark: 'Sigla aplicației (întunecată)',
    brand_color: 'Culoare de brand',
    brand_color_dark: 'Culoare de brand (întunecată)',
    terms_of_use_url: 'URL-ul termenilor de utilizare ai aplicației',
    privacy_policy_url: 'URL-ul politicii de confidențialitate a aplicației',
  },
  permissions: {
    name: 'Permisiuni',
    description:
      'Alege permisiunile de care are nevoie aplicația terță pentru a accesa, cu autorizarea utilizatorului, anumite tipuri de date.',
    user_permissions: 'Date personale ale utilizatorului',
    organization_permissions: 'Acces la organizație',
    table_name: 'Acordă permisiuni',
    field_name: 'Permisiune',
    field_description: 'Afișată pe ecranul de consimțământ',
    delete_text: 'Elimină permisiunea',
    permission_delete_confirm:
      'Permisiunile acordate aplicației terțe vor fi retrase, iar aceasta nu va mai putea cere autorizarea utilizatorului pentru anumite tipuri de date. Sigur vrei să continui?',
    permissions_assignment_description:
      'Alege permisiunile pe care aplicația terță le cere pentru a accesa, cu autorizarea utilizatorului, anumite tipuri de date.',
    user_profile: 'Date de utilizator',
    api_permissions: 'Permisiuni API',
    organization: 'Permisiuni de organizație',
    user_permissions_assignment_form_title: 'Adaugă permisiunile pentru profilul utilizatorului',
    organization_permissions_assignment_form_title: 'Adaugă permisiunile de organizație',
    api_resource_permissions_assignment_form_title: 'Adaugă permisiunile pentru resursele API',
    user_data_permission_description_tips:
      'Poți modifica descrierea permisiunilor pentru datele personale ale utilizatorului din „Experiența de conectare > Conținut > Gestionează limba”',
    permission_description_tips:
      'Când GetCertus este folosit ca furnizor de identitate (IdP) pentru autentificarea în aplicații terțe și utilizatorilor li se cere autorizarea, această descriere apare pe ecranul de consimțământ.',
    user_title: 'Utilizator',
    user_description:
      'Alege permisiunile cerute de aplicația terță pentru acces la anumite date ale utilizatorului.',
    grant_user_level_permissions: 'Acordă permisiuni pentru datele utilizatorului',
    organization_title: 'Organizație',
    organization_description:
      'Alege permisiunile cerute de aplicația terță pentru acces la anumite date ale organizației.',
    grant_organization_level_permissions: 'Acordă permisiuni pentru datele organizației',
    oidc_title: 'OIDC',
    oidc_description:
      'Permisiunile OIDC de bază sunt configurate automat pentru aplicație. Aceste scopuri sunt esențiale pentru autentificare și nu apar pe ecranul de consimțământ.',
    default_oidc_permissions: 'Permisiuni OIDC implicite',
    permission_column: 'Permisiune',
    guide_column: 'Explicație',
    openid_permission: 'openid',
    openid_permission_guide:
      "Opțional pentru accesul la resurse OAuth.\nObligatoriu pentru autentificarea OIDC. Oferă un token ID și acces la 'userinfo_endpoint'.",
    offline_access_permission: 'offline_access',
    offline_access_permission_guide:
      'Opțional. Obține tokenuri de reîmprospătare pentru acces de lungă durată sau sarcini în fundal.',
  },
  roles: {
    assign_button: 'Atribuie roluri',
    delete_description:
      'Rolul va fi eliminat din această aplicație mașină la mașină. Rolul în sine continuă să existe, dar nu mai este asociat cu aplicația.',
    deleted: '{{name}} a fost eliminat de la acest utilizator.',
    assign_title: 'Atribuie roluri pentru {{name}}',
    assign_subtitle:
      'Aplicațiile mașină la mașină au nevoie de roluri de tip mașină la mașină pentru a accesa resursele API asociate.',
    assign_role_field: 'Atribuie roluri',
    role_search_placeholder: 'Caută după numele rolului',
    added_text: '{{value, number}} adăugate',
    assigned_app_count: '{{value, number}} aplicații',
    confirm_assign: 'Atribuie roluri',
    role_assigned: 'Rolurile au fost atribuite',
    search: 'Caută după numele rolului, descriere sau ID',
    empty: 'Niciun rol disponibil',
  },
  secrets: {
    value: 'Valoare',
    empty: 'Aplicația nu are secrete.',
    created_at: 'Creat la',
    expires_at: 'Expiră la',
    never: 'Niciodată',
    create_new_secret: 'Creează un secret nou',
    delete_confirmation: 'Acțiunea nu poate fi anulată. Sigur vrei să ștergi acest secret?',
    deleted: 'Secretul a fost șters.',
    activated: 'Secretul a fost activat.',
    deactivated: 'Secretul a fost dezactivat.',
    legacy_secret: 'Secret vechi',
    expired: 'Expirat',
    expired_tooltip: 'Acest secret a expirat pe {{date}}.',
    create_modal: {
      title: 'Creează secret de aplicație',
      expiration: 'Expirare',
      expiration_description: 'Secretul va expira pe {{date}}.',
      expiration_description_never:
        'Secretul nu va expira niciodată. Pentru mai multă securitate, recomandăm o dată de expirare.',
      days: '{{count}} zi',
      days_other: '{{count}} zile',
      years: '{{count}} an',
      years_other: '{{count}} ani',
      created: 'Secretul {{name}} a fost creat.',
    },
    edit_modal: {
      title: 'Editează secretul de aplicație',
      edited: 'Secretul {{name}} a fost editat.',
    },
  },
  saml_idp_config: {
    title: 'Metadate SAML IdP',
    description:
      'Folosește metadatele și certificatul de mai jos pentru a configura SAML IdP în aplicația ta.',
    metadata_url_label: 'URL-ul metadatelor IdP',
    single_sign_on_service_url_label: 'URL-ul serviciului de autentificare unică',
    idp_entity_id_label: 'ID-ul entității IdP',
  },
  saml_idp_certificates: {
    title: 'Certificat de semnare SAML',
    expires_at: 'Expiră la',
    finger_print: 'Amprentă',
    status: 'Stare',
    active: 'Activ',
    inactive: 'Inactiv',
  },
  saml_idp_name_id_format: {
    title: 'Formatul Name ID',
    description: 'Alege formatul Name ID al SAML IdP.',
    persistent: 'Persistent',
    persistent_description: 'Folosește ID-ul de utilizator GetCertus ca Name ID',
    transient: 'Temporar',
    transient_description: 'Folosește un ID de utilizator de unică folosință ca Name ID',
    unspecified: 'Nespecificat',
    unspecified_description: 'Folosește ID-ul de utilizator GetCertus ca Name ID',
    email_address: 'Adresă de e-mail',
    email_address_description: 'Folosește adresa de e-mail ca Name ID',
  },
  saml_idp_authentication: {
    always_force_authn: 'Impune mereu autentificarea',
    always_force_authn_description:
      'Cere utilizatorilor să se conecteze din nou de fiecare dată când accesează aplicația, chiar dacă au deja o sesiune GetCertus.',
    always_force_authn_tip:
      'Când este activat, GetCertus cere mereu utilizatorilor să se conecteze din nou pentru această aplicație. Altfel, se refolosește sesiunea GetCertus existentă, cu excepția cazului în care furnizorul de servicii cere o autentificare nouă cu ForceAuthn.',
  },
  saml_encryption_config: {
    encrypt_assertion: 'Criptează aserțiunea SAML',
    encrypt_assertion_description: 'Cu această opțiune, aserțiunea SAML va fi criptată.',
    encrypt_then_sign: 'Criptează, apoi semnează',
    encrypt_then_sign_description:
      'Cu această opțiune, aserțiunea SAML este întâi criptată și apoi semnată; altfel, este întâi semnată și apoi criptată.',
    certificate: 'Certificat',
    certificate_tooltip:
      'Copiază și lipește certificatul x509 primit de la furnizorul de servicii pentru a cripta aserțiunea SAML.',
    certificate_placeholder:
      '-----BEGIN CERTIFICATE-----\nMIICYDCCAcmgAwIBA...\n-----END CERTIFICATE-----\n',
    certificate_missing_error: 'Certificatul este obligatoriu.',
    certificate_invalid_format_error:
      'Format de certificat nevalid. Verifică formatul și încearcă din nou.',
  },
  saml_app_attribute_mapping: {
    name: 'Mapări de atribute',
    title: 'Mapări de bază ale atributelor',
    description:
      'Adaugă mapări de atribute pentru a sincroniza profilul utilizatorului din GetCertus în aplicația ta.',
    col_logto_claims: 'Valoare în GetCertus',
    col_sp_claims: 'Numele valorii în aplicația ta',
    add_button: 'Adaugă încă una',
  },
  concurrent_device_limit: {
    title: 'Limita de dispozitive simultane',
    enable: 'Activează limita de dispozitive simultane',
    enable_description:
      'Când este activat, GetCertus impune numărul maxim de acorduri active per utilizator pentru această aplicație.',
    field: 'Limita de dispozitive simultane per aplicație',
    field_description:
      'Limitează pe câte dispozitive poate fi conectat un utilizator în același timp. GetCertus limitează acordurile active și revocă automat cel mai vechi acord când limita este depășită.',
    field_placeholder: 'Lasă gol pentru nicio limită',
    should_be_greater_than_zero: 'Trebuie să fie mai mare decât 0.',
  },
};

export default Object.freeze(application_details);
