/* GetCertus addition (MPL-2.0, see GETCERTUS.md): admin console phrases. */
const user_details = {
  page_title: 'Användardetaljer',
  back_to_users: 'Tillbaka till användarhantering',
  created_title: 'Användaren har skapats',
  created_guide: 'Här är informationen som hjälper användaren att logga in.',
  created_email: 'E-postadress:',
  created_phone: 'Telefonnummer:',
  created_username: 'Användarnamn:',
  created_password: 'Lösenord:',
  menu_delete: 'Ta bort',
  delete_description: 'Åtgärden kan inte ångras. Användaren tas bort permanent.',
  deleted: 'Användaren har tagits bort',
  reset_password: {
    reset_title: 'Vill du verkligen återställa lösenordet?',
    generate_title: 'Vill du verkligen generera ett lösenord?',
    content: 'Åtgärden kan inte ångras. Användarens inloggningsuppgifter uppdateras.',
    reset_complete: 'Lösenordet har återställts',
    generate_complete: 'Lösenordet har genererats',
    new_password: 'Nytt lösenord:',
    password: 'Lösenord:',
  },
  expire_password: {
    button: 'Låt upphöra',
    title: 'Vill du verkligen låta detta lösenord upphöra?',
    content:
      'Användaren måste återställa sitt lösenord vid nästa inloggning. Åtgärden kan inte ångras.',
    success: 'Användarens lösenord har markerats som utgånget.',
    not_enabled_tooltip: 'Policyn för utgående lösenord är inte aktiverad.',
  },
  tab_settings: 'Inställningar',
  tab_roles: 'Roller',
  tab_logs: 'Användarloggar',
  tab_organizations: 'Organisationer',
  authentication: 'Autentisering',
  authentication_description:
    'Varje användare har en profil med all användarinformation: grunddata, sociala identiteter och anpassade data.',
  user_profile: 'Användardata',
  field_email: 'E-postadress',
  field_phone: 'Telefonnummer',
  field_username: 'Användarnamn',
  field_password: 'Lösenord',
  field_name: 'Namn',
  field_avatar: 'URL till avatarbild',
  field_avatar_placeholder: 'https://your.cdn.domain/avatar.png',
  field_custom_data: 'Anpassade data',
  field_custom_data_tip:
    'Ytterligare användarinformation som inte finns bland de fördefinierade egenskaperna, till exempel önskad färg och språk.',
  field_profile: 'Profil',
  field_profile_tip:
    'Ytterligare standardclaims i OpenID Connect som inte ingår i användarens egenskaper. Okända egenskaper tas bort. Se <a>referensen för profilegenskaper</a> för mer information.',
  field_connectors: 'Sociala anslutningar',
  field_sso_connectors: 'Företagsanslutningar',
  custom_data_invalid: 'Anpassade data måste vara ett giltigt JSON-objekt',
  profile_invalid: 'Profilen måste vara ett giltigt JSON-objekt',
  password_already_set: 'Lösenord redan angivet',
  no_password_set: 'Inget lösenord angivet',
  connectors: {
    connectors: 'Kopplingar',
    user_id: 'Användar-ID',
    remove: 'Ta bort',
    connected: 'Användaren är ansluten via flera sociala kopplingar.',
    not_connected: 'Användaren är inte ansluten till någon social koppling',
    deletion_confirmation:
      'Du tar bort den befintliga identiteten <name/>. Vill du verkligen fortsätta?',
  },
  sso_connectors: {
    connectors: 'Kopplingar',
    enterprise_id: 'Företags-ID',
    connected:
      'Användaren är ansluten till flera identitetsleverantörer för företag för enkel inloggning.',
    not_connected:
      'Användaren är inte ansluten till någon identitetsleverantör för företag för enkel inloggning.',
  },
  mfa: {
    field_name: 'Multifaktorautentisering',
    field_description: 'Användaren har aktiverat faktorer för tvåstegsverifiering.',
    name_column: 'Multifaktor',
    field_description_empty:
      'Användaren har inte aktiverat några faktorer för tvåstegsverifiering.',
    deletion_confirmation:
      'Du tar bort den befintliga <name/> för tvåstegsverifiering. Vill du verkligen fortsätta?',
  },
  passkey: {
    field_name: 'Passkeys',
    field_description_empty: 'Användaren har inte aktiverat inloggning med passkey.',
    deletion_confirmation:
      'Du tar bort den befintliga <name/> för inloggning med passkey. Vill du verkligen fortsätta?',
  },
  suspended: 'Avstängd',
  suspend_user: 'Stäng av användare',
  suspend_user_reminder:
    'Vill du verkligen stänga av användaren? Användaren kan då inte logga in i din app och får ingen ny åtkomsttoken när den nuvarande upphör. Alla API-förfrågningar från användaren misslyckas också.',
  suspend_action: 'Stäng av',
  user_suspended: 'Användaren har stängts av.',
  reactivate_user: 'Återaktivera användare',
  reactivate_user_reminder:
    'Vill du verkligen återaktivera användaren? Då tillåts inloggningsförsök för användaren igen.',
  reactivate_action: 'Återaktivera',
  user_reactivated: 'Användaren har återaktiverats.',
  roles: {
    name_column: 'Användarroll',
    description_column: 'Beskrivning',
    assign_button: 'Tilldela roller',
    delete_description:
      'Rollen tas bort från användaren. Själva rollen finns kvar, men är inte längre kopplad till användaren.',
    deleted: '{{name}} har tagits bort från användaren.',
    assign_title: 'Tilldela roller till {{name}}',
    assign_subtitle:
      'Hitta lämpliga användarroller genom att söka på namn, beskrivning eller roll-ID.',
    assign_role_field: 'Tilldela roller',
    role_search_placeholder: 'Sök på rollnamn',
    added_text: '{{value, number}} tillagda',
    assigned_user_count: '{{value, number}} användare',
    confirm_assign: 'Tilldela roller',
    role_assigned: 'Rollerna har tilldelats',
    search: 'Sök på rollnamn, beskrivning eller ID',
    empty: 'Ingen roll tillgänglig',
  },
  warning_no_sign_in_identifier:
    'Användaren behöver minst en inloggningsidentifierare (användarnamn, e-post, telefonnummer eller socialt konto) för att kunna logga in. Vill du verkligen fortsätta?',
  personal_access_tokens: {
    title: 'Personlig åtkomsttoken',
    title_other: 'Personliga åtkomsttokens',
    title_short: 'token',
    empty: 'Användaren har inga personliga åtkomsttokens.',
    create: 'Skapa ny token',
    tip: 'Personliga åtkomsttokens (PAT) ger användare ett säkert sätt att få åtkomsttokens utan att använda sina inloggningsuppgifter och interaktiv inloggning. Användbart för CI/CD, skript eller applikationer som behöver programmatisk åtkomst till resurser.',
    value: 'Värde',
    created_at: 'Skapad',
    expires_at: 'Upphör',
    never: 'Aldrig',
    create_new_token: 'Skapa ny token',
    delete_confirmation: 'Åtgärden kan inte ångras. Vill du verkligen ta bort denna token?',
    expired: 'Utgången',
    expired_tooltip: 'Denna token upphörde den {{date}}.',
    create_modal: {
      title: 'Skapa personlig åtkomsttoken',
      expiration: 'Giltighet',
      expiration_description: 'Token upphör {{date}}.',
      expiration_description_never:
        'Token upphör aldrig. Vi rekommenderar ett utgångsdatum för ökad säkerhet.',
      days: '{{count}} dag',
      days_other: '{{count}} dagar',
      created: 'Token {{name}} har skapats.',
    },
    edit_modal: {
      title: 'Redigera personlig åtkomsttoken',
      edited: 'Token {{name}} har redigerats.',
    },
  },
  sessions: {
    title: 'Sessioner',
    description:
      'Hantera sessioner som GetCertus auktoriseringsserver upprätthåller. Om du återkallar en GetCertus-session här ges inte längre automatiskt samtycke vid framtida auktoriseringsbegäranden.',
    field_name: 'Sessioner',
    multiple_signed_in: 'Användaren har loggat in på flera enheter eller webbläsare.',
    not_found:
      'Inga aktiva GetCertus-sessioner hittades. Användaren är för närvarande inte inloggad på någon enhet.',
    name_column: 'Namn',
    session_id_column: 'Sessions-ID',
    location_column: 'Plats',
    browser_on_os: '{{browser}} på {{os}}',
    user: 'Användare',
    applications: 'Applikationer',
    signed_in_at: 'Senast inloggad',
    ip: 'IP',
    browser_name: 'Webbläsare',
    os_name: 'Operativsystem',
    device_model: 'Enhetsmodell',
    revoke_session: 'Återkalla session',
    revoke_session_confirmation: 'Om du tar bort sessionen måste användarna autentisera sig igen.',
  },
  third_party_apps: {
    title: 'Tredjepartsappar',
    description:
      'Använd GetCertus som identitetsleverantör för att auktorisera tredjepartsappar. Visa och hantera apparna som användaren har gett åtkomst.',
    field_name: 'Auktoriserade tredjepartsappar',
    multiple_authorized: 'Användaren har auktoriserat flera tredjepartsappar och tjänster.',
    not_authorized: 'Användaren har ännu inte auktoriserat några tredjepartsappar eller tjänster.',
    name_column: 'Namn',
    app_id_column: 'App-ID',
    access_created_at_column: 'Åtkomst skapad',
    revoke_access_title: 'Återkalla åtkomst?',
    revoke_access_description:
      'Appens åtkomst till användarens konto återkallas på alla enheter. Användaren måste auktorisera igen för att återställa åtkomsten. Tidigare utfärdade åtkomsttokens kan vara giltiga tills de upphör.',
  },
  connections: {
    title: 'Anslutning',
    description:
      'Användaren länkar tredjepartskonton för social inloggning, Enterprise SSO eller åtkomst till resurser.',
    token_status_column: 'Tokenstatus',
    token_status: {
      active: 'Aktiv',
      expired: 'Utgången',
      inactive: 'Inaktiv',
      not_applicable: 'Ej tillämpligt',
      available: 'Tillgänglig',
      not_available: 'Ej tillgänglig',
    },
  },
};

export default Object.freeze(user_details);
