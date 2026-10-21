/* eslint-disable max-lines -- Locale catalog mirrors the complete Account Center phrase schema. */
/* GetCertus addition (MPL-2.0, see GETCERTUS.md): sign-in experience phrases. */
const account_center = {
  home: {
    title: 'Sidan hittades inte',
    description: 'Den här sidan är inte tillgänglig.',
  },
  page: {
    title: 'Konto',
    security_title: 'Säkerhet',
    security_description: 'Ändra dina kontoinställningar här för att hålla kontot säkert.',
    profile_title: 'Personuppgifter',
    profile_description: 'Ändra dina personuppgifter här.',
    sidebar_personal_info: 'Personuppgifter',
    sidebar_security: 'Säkerhet',
    sidebar_sessions: 'Sessioner',
    support: 'Support',
    user_menu: 'Användarmeny',
    sign_out: 'Logga ut',
  },
  verification: {
    title: 'Säkerhetsverifiering',
    description:
      'Bekräfta att det är du för att skydda ditt konto. Välj en metod för att verifiera din identitet.',
    error_send_failed: 'Det gick inte att skicka verifieringskoden. Försök igen senare.',
    error_invalid_code: 'Verifieringskoden är ogiltig eller har gått ut.',
    error_verify_failed: 'Verifieringen misslyckades. Ange koden igen.',
    verification_required: 'Verifieringen har gått ut. Verifiera din identitet igen.',
    try_another_method: 'Prova en annan verifieringsmetod',
    no_available_methods_title: 'Inga verifieringsmetoder tillgängliga',
    no_available_methods_description:
      'Du har inga verifieringsmetoder. Lägg först till ett lösenord, en e-postadress eller ett telefonnummer på ditt konto.',
  },
  password_verification: {
    title: 'Verifiera lösenord',
    description: 'Bekräfta att det är du för att skydda ditt konto. Ange ditt lösenord.',
    error_failed: 'Fel lösenord. Kontrollera det du skrev.',
  },
  verification_method: {
    password: {
      name: 'Lösenord',
      description: 'Verifiera ditt lösenord',
    },
    email: {
      name: 'Verifieringskod via e-post',
      description: 'Skicka verifieringskod till din e-post',
    },
    phone: {
      name: 'Verifieringskod via telefon',
      description: 'Skicka verifieringskod till ditt telefonnummer',
    },
  },
  email: {
    title: 'Koppla e-post',
    description: 'Koppla din e-postadress för att logga in eller återställa kontot.',
    verification_title: 'Ange verifieringskoden från e-posten',
    verification_description: 'Verifieringskoden har skickats till din e-post {{email_address}}.',
    success: 'Primär e-postadress kopplad.',
    verification_required: 'Verifieringen har gått ut. Verifiera din identitet igen.',
  },
  phone: {
    title: 'Koppla telefonnummer',
    description: 'Koppla ditt telefonnummer för att logga in eller återställa kontot.',
    verification_title: 'Ange verifieringskoden från sms',
    verification_description: 'Verifieringskoden har skickats till din telefon {{phone_number}}.',
    success: 'Primärt telefonnummer kopplat.',
    verification_required: 'Verifieringen har gått ut. Verifiera din identitet igen.',
  },
  username: {
    title: 'Ange användarnamn',
    description: 'Användarnamnet får bara innehålla bokstäver, siffror och understreck.',
    policy_description: '{{requirements}}',
    success: 'Användarnamnet har uppdaterats.',
  },
  security: {
    add: 'Lägg till',
    change: 'Ändra',
    remove: 'Ta bort',
    not_set: 'Inte angivet',
    social_sign_in: 'Social inloggning',
    social_not_linked: 'Inte kopplat',
    email_phone: 'E-post / telefon',
    email: 'E-post',
    phone: 'Telefon',
    password: 'Lösenord',
    configured: 'Konfigurerat',
    not_configured: 'Inte konfigurerat',
    two_step_verification: 'Tvåstegsverifiering',
    authenticator_app: 'Autentiseringsapp',
    passkeys: 'Passkeys',
    backup_codes: 'Reservkoder',
    email_verification_code: 'Verifieringskod via e-post',
    phone_verification_code: 'Verifieringskod via telefon',
    passkeys_count_one: '{{count}} passkey',
    passkeys_count_other: '{{count}} passkeys',
    backup_codes_count_one: '{{count}} kod kvar',
    backup_codes_count_other: '{{count}} koder kvar',
    view: 'Visa',
    manage: 'Hantera',
    turn_on_2_step_verification_description:
      'Lägg till ett extra säkerhetslager. Du ombeds göra ett andra verifieringssteg vid inloggning.',
    turn_off_2_step_verification: 'Inaktivera tvåstegsverifiering',
    turn_off_2_step_verification_description:
      'Om du inaktiverar tvåstegsverifiering försvinner det extra skyddet för ditt konto vid inloggning. Vill du fortsätta?',
    disable_2_step_verification: 'Inaktivera',
    no_verification_method_warning:
      'Du har inte lagt till någon andra verifieringsmetod. Lägg till minst en för att aktivera tvåstegsverifiering vid inloggning.',
    passkey_sign_in_prompt: 'Föreslå att skapa en passkey',
    passkey_sign_in_prompt_description:
      'När detta är på ombeds du skapa en passkey för snabbare och säkrare inloggning.',
    account_removal: 'Ta bort konto',
    delete_your_account: 'Ta bort ditt konto',
    delete_account: 'Ta bort konto',
    remove_username_confirmation_title: 'Ta bort användarnamn',
    remove_username_confirmation_description:
      'När det har tagits bort kan du inte längre logga in med det här användarnamnet. Vill du fortsätta?',
    remove_email_confirmation_title: 'Ta bort e-postadress',
    remove_email_confirmation_description:
      'När den har tagits bort kan du inte längre logga in med den här e-postadressen. Vill du fortsätta?',
    remove_phone_confirmation_title: 'Ta bort telefonnummer',
    remove_phone_confirmation_description:
      'När det har tagits bort kan du inte längre logga in med det här telefonnumret. Vill du fortsätta?',
    email_removed: 'E-postadressen har tagits bort.',
    phone_removed: 'Telefonnumret har tagits bort.',
    username_removed: 'Användarnamnet har tagits bort.',
    trusted_devices: {
      title: 'Betrodda enheter för MFA',
      current_device: 'Den här enheten',
      expires_on: 'Går ut {{date}}',
      unknown_location: 'Okänd plats',
      remove: 'Ta bort',
      removed: 'Den betrodda enheten har tagits bort.',
      loading: 'Laddar...',
      empty: 'Inga betrodda enheter.',
      load_failed: 'Det gick inte att läsa in betrodda enheter. Försök igen.',
      retry: 'Försök igen',
      remove_confirmation_title: 'Ta bort betrodd enhet?',
      remove_confirmation_description:
        'Nästa gång du loggar in på den här enheten måste du göra MFA igen. Din nuvarande session förblir aktiv.',
    },
    passkeys_count_two: '{{count}} passkeys',
    passkeys_count_few: '{{count}} passkeys',
    passkeys_count_many: '{{count}} passkeys',
    backup_codes_count_two: '{{count}} koder kvar',
    backup_codes_count_few: '{{count}} koder kvar',
    backup_codes_count_many: '{{count}} koder kvar',
  },
  social: {
    linked: '{{connector}} har kopplats.',
    removed: '{{connector}} har tagits bort.',
    not_enabled:
      'Den här sociala inloggningsmetoden är inte aktiverad. Kontakta din administratör för hjälp.',
    remove_confirmation_title: 'Ta bort socialt konto',
    remove_confirmation_description:
      'Om du tar bort {{connector}} kan du kanske inte logga in med det förrän du lägger till det igen.',
  },
  password: {
    title: 'Ange lösenord',
    description: 'Skapa ett nytt lösenord för att skydda ditt konto.',
    success: 'Lösenordet har uppdaterats.',
  },
  code_verification: {
    send: 'Skicka verifieringskod',
    resend: 'Inte fått den ännu? <a>Skicka verifieringskoden igen</a>',
    resend_countdown: 'Inte fått den ännu? Skicka igen om {{seconds}} s',
  },
  email_verification: {
    title: 'Verifiera din e-postadress',
    prepare_description:
      'Bekräfta att det är du för att skydda ditt konto. Skicka verifieringskoden till din e-post.',
    email_label: 'E-postadress',
    send: 'Skicka verifieringskod',
    description:
      'Verifieringskoden har skickats till din e-post {{email}}. Ange koden för att fortsätta.',
    resend: 'Inte fått den ännu? <a>Skicka verifieringskoden igen</a>',
    not_received: 'Inte fått den ännu?',
    resend_action: 'Skicka verifieringskoden igen',
    resend_countdown: 'Inte fått den ännu? Skicka igen om {{seconds}} s',
    error_send_failed: 'Det gick inte att skicka verifieringskoden. Försök igen senare.',
    error_verify_failed: 'Verifieringen misslyckades. Ange koden igen.',
    error_invalid_code: 'Verifieringskoden är ogiltig eller har gått ut.',
  },
  phone_verification: {
    title: 'Verifiera din telefon',
    prepare_description:
      'Bekräfta att det är du för att skydda ditt konto. Skicka verifieringskoden till din telefon.',
    phone_label: 'Telefonnummer',
    send: 'Skicka verifieringskod',
    description:
      'Verifieringskoden har skickats till din telefon {{phone}}. Ange koden för att fortsätta.',
    resend: 'Inte fått den ännu? <a>Skicka verifieringskoden igen</a>',
    resend_countdown: 'Inte fått den ännu? Skicka igen om {{seconds}} s',
    error_send_failed: 'Det gick inte att skicka verifieringskoden. Försök igen senare.',
    error_verify_failed: 'Verifieringen misslyckades. Ange koden igen.',
    error_invalid_code: 'Verifieringskoden är ogiltig eller har gått ut.',
  },
  mfa: {
    totp_already_added:
      'Du har redan lagt till en autentiseringsapp. Ta bort den befintliga först.',
    totp_not_enabled:
      'Engångskod från autentiseringsapp är inte aktiverad. Kontakta din administratör för hjälp.',
    backup_code_already_added:
      'Du har redan aktiva reservkoder. Använd eller ta bort dem innan du skapar nya.',
    backup_code_not_enabled:
      'Reservkoder är inte aktiverade. Kontakta din administratör för hjälp.',
    backup_code_requires_other_mfa:
      'Reservkoder kräver att en annan MFA-metod har konfigurerats först.',
    passkey_not_enabled: 'Passkey är inte aktiverat. Kontakta din administratör för hjälp.',
    passkey_already_registered:
      'Den här passkeyn är redan registrerad på ditt konto. Använd en annan autentiserare.',
  },
  update_success: {
    default: {
      title: 'Uppdaterat',
      description: 'Dina ändringar har sparats.',
    },
    email: {
      title: 'E-postadressen har uppdaterats!',
      description: 'E-postadressen för ditt konto har ändrats.',
    },
    phone: {
      title: 'Telefonnumret har uppdaterats!',
      description: 'Telefonnumret för ditt konto har ändrats.',
    },
    username: {
      title: 'Användarnamnet har uppdaterats!',
      description: 'Användarnamnet för ditt konto har ändrats.',
    },
    password: {
      title: 'Lösenordet har uppdaterats!',
      description: 'Lösenordet för ditt konto har ändrats.',
    },
    totp: {
      title: 'Autentiseringsapp tillagd!',
      description: 'Din autentiseringsapp har kopplats till ditt konto.',
    },
    totp_replaced: {
      title: 'Autentiseringsappen har bytts!',
      description: 'Din autentiseringsapp har bytts ut.',
    },
    backup_code: {
      title: 'Reservkoder skapade!',
      description: 'Dina reservkoder har sparats. Förvara dem på ett säkert ställe.',
    },
    passkey: {
      title: 'Passkey tillagd!',
      description: 'Din passkey har kopplats till ditt konto.',
    },
    social: {
      title: 'Socialt konto kopplat!',
      description: 'Ditt sociala konto har kopplats.',
    },
  },
  backup_code: {
    title: 'Reservkoder',
    description:
      'Om tvåstegsverifieringen inte fungerar på andra sätt kan du använda en av dessa reservkoder för att komma åt ditt konto. Varje kod kan bara användas en gång.',
    copy_hint: 'Kopiera dem och spara dem på ett säkert ställe.',
    generate_new_title: 'Skapa nya reservkoder',
    generate_new: 'Skapa nya reservkoder',
  },
  passkey: {
    title: 'Passkeys',
    added: 'Tillagd: {{date}}',
    last_used: 'Senast använd: {{date}}',
    never_used: 'Aldrig',
    unnamed: 'Namnlös passkey',
    renamed: 'Passkeyn har bytt namn.',
    deleted: 'Passkeyn har tagits bort.',
    add_another_title: 'Lägg till ytterligare en passkey',
    add_another_description:
      'Registrera din passkey med enhetens biometri, en säkerhetsnyckel (t.ex. YubiKey) eller en annan tillgänglig metod.',
    add_passkey: 'Lägg till en passkey',
    delete_confirmation_title: 'Ta bort din passkey',
    delete_confirmation_description:
      'Om du tar bort den här passkeyn kan du inte längre verifiera med den.',
    rename_passkey: 'Byt namn på passkey',
    rename_description: 'Ange ett nytt namn för den här passkeyn.',
    name_this_passkey: 'Namnge den här enhetens passkey',
    name_passkey_description:
      'Du har verifierat den här enheten för tvåstegsverifiering. Ge den ett namn så att du känner igen den om du har flera nycklar.',
    name_input_label: 'Namn',
  },
  sessions: {
    page_title: 'Sessioner',
    page_description: 'Hantera dina aktiva sessioner och auktoriserade tredjepartsappar.',
    title: 'Sessioner',
    current_session: 'Nuvarande session',
    signed_in_at: 'Inloggad {{date}}',
    revoke_session: 'Logga ut',
    revoke_session_title: 'Logga ut sessionen',
    revoke_session_description:
      'Sessionen loggas ut och all tillhörande åtkomst återkallas. Vill du fortsätta?',
    no_other_sessions: 'Inga andra aktiva sessioner.',
    loading: 'Laddar...',
    third_party_apps_title: 'Tredjepartsappar',
    no_third_party_apps: 'Inga auktoriserade tredjepartsappar.',
    third_party_apps_load_failed: 'Det gick inte att läsa in tredjepartsappar. Försök igen.',
    granted_at: 'Auktoriserad {{date}}',
    dynamic_app: 'Dynamisk app',
    client_id: 'Klient-ID: {{clientId}}',
    revoke_grant: 'Ta bort',
    revoke_grant_title: 'Ta bort tredjepartsappens åtkomst',
    revoke_grant_description:
      'Åtkomsten som getts till applikationen återkallas. Tidigare utfärdade åtkomsttoken kan förbli giltiga tills de går ut. Vill du fortsätta?',
    revoke_grant_failed: 'Det gick inte att återkalla vissa behörigheter. Försök igen.',
  },
};

export default Object.freeze(account_center);
/* eslint-enable max-lines */
