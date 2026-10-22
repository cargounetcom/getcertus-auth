/* GetCertus addition (MPL-2.0, see GETCERTUS.md): admin console phrases. */
const user_details = {
  page_title: 'Gebruikersdetails',
  back_to_users: 'Terug naar gebruikersbeheer',
  created_title: 'Deze gebruiker is aangemaakt',
  created_guide: 'Hier zijn de gegevens om de gebruiker te helpen met inloggen.',
  created_email: 'E-mailadres:',
  created_phone: 'Telefoonnummer:',
  created_username: 'Gebruikersnaam:',
  created_password: 'Wachtwoord:',
  menu_delete: 'Verwijderen',
  delete_description:
    'Deze actie kan niet ongedaan worden gemaakt. De gebruiker wordt definitief verwijderd.',
  deleted: 'De gebruiker is verwijderd',
  reset_password: {
    reset_title: 'Weet je zeker dat je het wachtwoord opnieuw wilt instellen?',
    generate_title: 'Weet je zeker dat je een wachtwoord wilt genereren?',
    content:
      'Deze actie kan niet ongedaan worden gemaakt. De inloggegevens van de gebruiker worden bijgewerkt.',
    reset_complete: 'Het wachtwoord is opnieuw ingesteld',
    generate_complete: 'Het wachtwoord is gegenereerd',
    new_password: 'Nieuw wachtwoord:',
    password: 'Wachtwoord:',
  },
  expire_password: {
    button: 'Laten verlopen',
    title: 'Weet je zeker dat je dit wachtwoord wilt laten verlopen?',
    content:
      'De gebruiker moet bij de volgende aanmelding een nieuw wachtwoord instellen. Deze actie kan niet ongedaan worden gemaakt.',
    success: 'Het wachtwoord van de gebruiker is als verlopen gemarkeerd.',
    not_enabled_tooltip: 'Het beleid voor verlopen van wachtwoorden is niet ingeschakeld.',
  },
  tab_settings: 'Instellingen',
  tab_roles: 'Rollen',
  tab_logs: 'Gebruikerslogboek',
  tab_organizations: 'Organisaties',
  authentication: 'Authenticatie',
  authentication_description:
    'Elke gebruiker heeft een profiel met alle gebruikersgegevens: basisgegevens, sociale identiteiten en aangepaste gegevens.',
  user_profile: 'Gebruikersgegevens',
  field_email: 'E-mailadres',
  field_phone: 'Telefoonnummer',
  field_username: 'Gebruikersnaam',
  field_password: 'Wachtwoord',
  field_name: 'Naam',
  field_avatar: 'URL van avatar',
  field_avatar_placeholder: 'https://your.cdn.domain/avatar.png',
  field_custom_data: 'Aangepaste gegevens',
  field_custom_data_tip:
    'Extra gebruikersgegevens die niet in de vooraf gedefinieerde eigenschappen staan, zoals voorkeurskleur en -taal.',
  field_profile: 'Profiel',
  field_profile_tip:
    'Extra standaardclaims van OpenID Connect die niet in de eigenschappen van de gebruiker staan. Onbekende eigenschappen worden verwijderd. Zie de <a>referentie voor profieleigenschappen</a> voor meer informatie.',
  field_connectors: 'Sociale verbindingen',
  field_sso_connectors: 'Enterprise-verbindingen',
  custom_data_invalid: 'Aangepaste gegevens moeten een geldig JSON-object zijn',
  profile_invalid: 'Het profiel moet een geldig JSON-object zijn',
  password_already_set: 'Wachtwoord al ingesteld',
  no_password_set: 'Geen wachtwoord ingesteld',
  connectors: {
    connectors: 'Connectors',
    user_id: 'Gebruikers-ID',
    remove: 'Verwijderen',
    connected: 'Deze gebruiker is gekoppeld aan meerdere sociale connectors.',
    not_connected: 'De gebruiker is niet gekoppeld aan een sociale connector',
    deletion_confirmation:
      'Je verwijdert de bestaande identiteit <name/>. Weet je zeker dat je wilt doorgaan?',
  },
  sso_connectors: {
    connectors: 'Connectors',
    enterprise_id: 'Enterprise-ID',
    connected:
      'Deze gebruiker is gekoppeld aan meerdere enterprise-identiteitsproviders voor single sign-on.',
    not_connected:
      'De gebruiker is niet gekoppeld aan een enterprise-identiteitsprovider voor single sign-on.',
  },
  mfa: {
    field_name: 'Meervoudige authenticatie',
    field_description:
      'Deze gebruiker heeft factoren voor verificatie in twee stappen ingeschakeld.',
    name_column: 'Meervoudige factor',
    field_description_empty:
      'Deze gebruiker heeft geen factoren voor verificatie in twee stappen ingeschakeld.',
    deletion_confirmation:
      'Je verwijdert de bestaande <name/> voor verificatie in twee stappen. Weet je zeker dat je wilt doorgaan?',
  },
  passkey: {
    field_name: 'Passkeys',
    field_description_empty: 'Deze gebruiker heeft inloggen met een passkey niet ingeschakeld.',
    deletion_confirmation:
      'Je verwijdert de bestaande <name/> voor inloggen met een passkey. Weet je zeker dat je wilt doorgaan?',
  },
  suspended: 'Geblokkeerd',
  suspend_user: 'Gebruiker blokkeren',
  suspend_user_reminder:
    'Weet je zeker dat je deze gebruiker wilt blokkeren? De gebruiker kan dan niet meer inloggen op je app en krijgt geen nieuw toegangstoken meer nadat het huidige is verlopen. Ook mislukken alle API-verzoeken van deze gebruiker.',
  suspend_action: 'Blokkeren',
  user_suspended: 'De gebruiker is geblokkeerd.',
  reactivate_user: 'Gebruiker heractiveren',
  reactivate_user_reminder:
    'Weet je zeker dat je deze gebruiker wilt heractiveren? De gebruiker kan dan weer inloggen.',
  reactivate_action: 'Heractiveren',
  user_reactivated: 'De gebruiker is geheractiveerd.',
  roles: {
    name_column: 'Gebruikersrol',
    description_column: 'Beschrijving',
    assign_button: 'Rollen toewijzen',
    delete_description:
      'Deze rol wordt van deze gebruiker verwijderd. De rol zelf blijft bestaan, maar is niet meer aan deze gebruiker gekoppeld.',
    deleted: '{{name}} is van deze gebruiker verwijderd.',
    assign_title: 'Rollen toewijzen aan {{name}}',
    assign_subtitle: 'Zoek passende gebruikersrollen op naam, beschrijving of rol-ID.',
    assign_role_field: 'Rollen toewijzen',
    role_search_placeholder: 'Zoeken op rolnaam',
    added_text: '{{value, number}} toegevoegd',
    assigned_user_count: '{{value, number}} gebruikers',
    confirm_assign: 'Rollen toewijzen',
    role_assigned: 'Rol(len) toegewezen',
    search: 'Zoeken op rolnaam, beschrijving of ID',
    empty: 'Geen rol beschikbaar',
  },
  warning_no_sign_in_identifier:
    'De gebruiker heeft minstens één inlog-identifier nodig (gebruikersnaam, e-mail, telefoonnummer of sociaal account) om in te loggen. Weet je zeker dat je wilt doorgaan?',
  personal_access_tokens: {
    title: 'Persoonlijk toegangstoken',
    title_other: 'Persoonlijke toegangstokens',
    title_short: 'token',
    empty: 'De gebruiker heeft geen persoonlijke toegangstokens.',
    create: 'Nieuw token maken',
    tip: "Met persoonlijke toegangstokens (PAT's) kunnen gebruikers veilig toegangstokens verkrijgen zonder hun inloggegevens of interactief inloggen te gebruiken. Handig voor CI/CD, scripts of applicaties die programmatisch toegang tot resources nodig hebben.",
    value: 'Waarde',
    created_at: 'Aangemaakt op',
    expires_at: 'Verloopt op',
    never: 'Nooit',
    create_new_token: 'Nieuw token maken',
    delete_confirmation:
      'Deze actie kan niet ongedaan worden gemaakt. Weet je zeker dat je dit token wilt verwijderen?',
    expired: 'Verlopen',
    expired_tooltip: 'Dit token is verlopen op {{date}}.',
    create_modal: {
      title: 'Persoonlijk toegangstoken maken',
      expiration: 'Vervaldatum',
      expiration_description: 'Het token verloopt op {{date}}.',
      expiration_description_never:
        'Het token verloopt nooit. We raden een vervaldatum aan voor betere beveiliging.',
      days: '{{count}} dag',
      days_other: '{{count}} dagen',
      created: 'Het token {{name}} is aangemaakt.',
    },
    edit_modal: {
      title: 'Persoonlijk toegangstoken bewerken',
      edited: 'Het token {{name}} is bewerkt.',
    },
  },
  sessions: {
    title: 'Sessies',
    description:
      'Beheer sessies die de GetCertus-autorisatieserver bijhoudt. Als je hier een GetCertus-sessie intrekt, wordt er bij volgende autorisatieverzoeken niet meer automatisch toestemming gegeven.',
    field_name: 'Sessies',
    multiple_signed_in: 'Deze gebruiker is op meerdere apparaten of browsers ingelogd.',
    not_found:
      'Geen actieve GetCertus-sessies gevonden. De gebruiker is momenteel op geen enkel apparaat ingelogd.',
    name_column: 'Naam',
    session_id_column: 'Sessie-ID',
    location_column: 'Locatie',
    browser_on_os: '{{browser}} op {{os}}',
    user: 'Gebruiker',
    applications: 'Applicaties',
    signed_in_at: 'Laatst ingelogd',
    ip: 'IP',
    browser_name: 'Browsernaam',
    os_name: 'Besturingssysteem',
    device_model: 'Apparaatmodel',
    revoke_session: 'Sessie intrekken',
    revoke_session_confirmation:
      'Als je deze sessie verwijdert, moeten gebruikers zich opnieuw authenticeren.',
  },
  third_party_apps: {
    title: 'Apps van derden',
    description:
      'Gebruik GetCertus als identiteitsprovider om apps van derden te autoriseren. Bekijk en beheer de apps waaraan deze gebruiker toegang heeft gegeven.',
    field_name: 'Geautoriseerde apps van derden',
    multiple_authorized: 'Deze gebruiker heeft meerdere apps en diensten van derden geautoriseerd.',
    not_authorized: 'Deze gebruiker heeft nog geen apps of diensten van derden geautoriseerd.',
    name_column: 'Naam',
    app_id_column: 'App-ID',
    access_created_at_column: 'Toegang gegeven op',
    revoke_access_title: 'Toegang intrekken?',
    revoke_access_description:
      'Hiermee wordt de toegang van de app tot het account van deze gebruiker op alle apparaten ingetrokken. De gebruiker moet opnieuw autoriseren om toegang te herstellen. Eerder uitgegeven toegangstokens kunnen geldig blijven tot ze verlopen.',
  },
  connections: {
    title: 'Verbinding',
    description:
      'De gebruiker koppelt accounts van derden voor sociaal inloggen, enterprise SSO of toegang tot resources.',
    token_status_column: 'Tokenstatus',
    token_status: {
      active: 'Actief',
      expired: 'Verlopen',
      inactive: 'Inactief',
      not_applicable: 'Niet van toepassing',
      available: 'Beschikbaar',
      not_available: 'Niet beschikbaar',
    },
  },
};

export default Object.freeze(user_details);
