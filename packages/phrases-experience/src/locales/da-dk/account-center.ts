/* eslint-disable max-lines -- Locale catalog mirrors the complete Account Center phrase schema. */
/* GetCertus addition (MPL-2.0, see GETCERTUS.md): sign-in experience phrases. */
const account_center = {
  home: {
    title: 'Siden blev ikke fundet',
    description: 'Denne side er ikke tilgængelig.',
  },
  page: {
    title: 'Konto',
    security_title: 'Sikkerhed',
    security_description: 'Skift dine kontoindstillinger her for at holde din konto sikker.',
    profile_title: 'Personlige oplysninger',
    profile_description: 'Skift dine personlige oplysninger her.',
    sidebar_personal_info: 'Personlige oplysninger',
    sidebar_security: 'Sikkerhed',
    sidebar_sessions: 'Sessioner',
    support: 'Support',
    user_menu: 'Brugermenu',
    sign_out: 'Log ud',
  },
  verification: {
    title: 'Sikkerhedsbekræftelse',
    description:
      'Bekræft, at det er dig, for at beskytte din konto. Vælg en metode til at bekræfte din identitet.',
    error_send_failed: 'Bekræftelseskoden kunne ikke sendes. Prøv igen senere.',
    error_invalid_code: 'Bekræftelseskoden er ugyldig eller udløbet.',
    error_verify_failed: 'Bekræftelsen mislykkedes. Indtast koden igen.',
    verification_required: 'Bekræftelsen er udløbet. Bekræft din identitet igen.',
    try_another_method: 'Prøv en anden bekræftelsesmetode',
    no_available_methods_title: 'Ingen bekræftelsesmetoder tilgængelige',
    no_available_methods_description:
      'Du har ingen bekræftelsesmetoder. Tilføj først en adgangskode, en e-mail eller et telefonnummer til din konto.',
  },
  password_verification: {
    title: 'Bekræft adgangskode',
    description: 'Bekræft, at det er dig, for at beskytte din konto. Indtast din adgangskode.',
    error_failed: 'Forkert adgangskode. Kontrollér det, du har indtastet.',
  },
  verification_method: {
    password: {
      name: 'Adgangskode',
      description: 'Bekræft din adgangskode',
    },
    email: {
      name: 'Bekræftelseskode via e-mail',
      description: 'Send bekræftelseskode til din e-mail',
    },
    phone: {
      name: 'Bekræftelseskode via telefon',
      description: 'Send bekræftelseskode til dit telefonnummer',
    },
  },
  email: {
    title: 'Knyt e-mail',
    description: 'Knyt din e-mail for at logge ind eller gendanne din konto.',
    verification_title: 'Indtast bekræftelseskoden fra e-mailen',
    verification_description: 'Bekræftelseskoden er sendt til din e-mail {{email_address}}.',
    success: 'Primær e-mail er knyttet.',
    verification_required: 'Bekræftelsen er udløbet. Bekræft din identitet igen.',
  },
  phone: {
    title: 'Knyt telefonnummer',
    description: 'Knyt dit telefonnummer for at logge ind eller gendanne din konto.',
    verification_title: 'Indtast bekræftelseskoden fra sms',
    verification_description: 'Bekræftelseskoden er sendt til din telefon {{phone_number}}.',
    success: 'Primært telefonnummer er knyttet.',
    verification_required: 'Bekræftelsen er udløbet. Bekræft din identitet igen.',
  },
  username: {
    title: 'Angiv brugernavn',
    description: 'Brugernavnet må kun indeholde bogstaver, tal og understreger.',
    policy_description: '{{requirements}}',
    success: 'Brugernavnet er opdateret.',
  },
  security: {
    add: 'Tilføj',
    change: 'Skift',
    remove: 'Fjern',
    not_set: 'Ikke angivet',
    social_sign_in: 'Socialt login',
    social_not_linked: 'Ikke knyttet',
    email_phone: 'E-mail / telefon',
    email: 'E-mail',
    phone: 'Telefon',
    password: 'Adgangskode',
    configured: 'Konfigureret',
    not_configured: 'Ikke konfigureret',
    two_step_verification: 'Totrinsbekræftelse',
    authenticator_app: 'Godkendelsesapp',
    passkeys: 'Passkeys',
    backup_codes: 'Backupkoder',
    email_verification_code: 'Bekræftelseskode via e-mail',
    phone_verification_code: 'Bekræftelseskode via telefon',
    passkeys_count_one: '{{count}} passkey',
    passkeys_count_other: '{{count}} passkeys',
    backup_codes_count_one: '{{count}} kode tilbage',
    backup_codes_count_other: '{{count}} koder tilbage',
    view: 'Vis',
    manage: 'Administrer',
    turn_on_2_step_verification_description:
      'Tilføj et ekstra sikkerhedslag. Du bliver bedt om et ekstra bekræftelsestrin ved login.',
    turn_off_2_step_verification: 'Slå totrinsbekræftelse fra',
    turn_off_2_step_verification_description:
      'Hvis du slår totrinsbekræftelse fra, fjernes den ekstra beskyttelse af din konto ved login. Vil du fortsætte?',
    disable_2_step_verification: 'Slå fra',
    no_verification_method_warning:
      'Du har ikke tilføjet en anden bekræftelsesmetode. Tilføj mindst én for at slå totrinsbekræftelse til ved login.',
    passkey_sign_in_prompt: 'Foreslå at oprette en passkey',
    passkey_sign_in_prompt_description:
      'Når dette er slået til, bliver du bedt om at oprette en passkey for hurtigere og mere sikkert login.',
    account_removal: 'Sletning af konto',
    delete_your_account: 'Slet din konto',
    delete_account: 'Slet konto',
    remove_username_confirmation_title: 'Fjern brugernavn',
    remove_username_confirmation_description:
      'Når det er fjernet, kan du ikke længere logge ind med dette brugernavn. Vil du fortsætte?',
    remove_email_confirmation_title: 'Fjern e-mailadresse',
    remove_email_confirmation_description:
      'Når den er fjernet, kan du ikke længere logge ind med denne e-mailadresse. Vil du fortsætte?',
    remove_phone_confirmation_title: 'Fjern telefonnummer',
    remove_phone_confirmation_description:
      'Når det er fjernet, kan du ikke længere logge ind med dette telefonnummer. Vil du fortsætte?',
    email_removed: 'E-mailadressen er fjernet.',
    phone_removed: 'Telefonnummeret er fjernet.',
    username_removed: 'Brugernavnet er fjernet.',
    trusted_devices: {
      title: 'Betroede enheder til MFA',
      current_device: 'Denne enhed',
      expires_on: 'Udløber {{date}}',
      unknown_location: 'Ukendt placering',
      remove: 'Fjern',
      removed: 'Den betroede enhed er fjernet.',
      loading: 'Indlæser...',
      empty: 'Ingen betroede enheder.',
      load_failed: 'Betroede enheder kunne ikke indlæses. Prøv igen.',
      retry: 'Prøv igen',
      remove_confirmation_title: 'Fjern betroet enhed?',
      remove_confirmation_description:
        'Næste gang du logger ind på denne enhed, skal du gennemføre MFA igen. Din nuværende session forbliver aktiv.',
    },
    passkeys_count_two: '{{count}} passkeys',
    passkeys_count_few: '{{count}} passkeys',
    passkeys_count_many: '{{count}} passkeys',
    backup_codes_count_two: '{{count}} koder tilbage',
    backup_codes_count_few: '{{count}} koder tilbage',
    backup_codes_count_many: '{{count}} koder tilbage',
  },
  social: {
    linked: '{{connector}} er knyttet.',
    removed: '{{connector}} er fjernet.',
    not_enabled:
      'Denne metode til socialt login er ikke slået til. Kontakt din administrator for at få hjælp.',
    remove_confirmation_title: 'Fjern social konto',
    remove_confirmation_description:
      'Hvis du fjerner {{connector}}, kan du muligvis ikke logge ind med den, før du tilføjer den igen.',
  },
  password: {
    title: 'Angiv adgangskode',
    description: 'Opret en ny adgangskode for at beskytte din konto.',
    success: 'Adgangskoden er opdateret.',
  },
  code_verification: {
    send: 'Send bekræftelseskode',
    resend: 'Ikke modtaget endnu? <a>Send bekræftelseskoden igen</a>',
    resend_countdown: 'Ikke modtaget endnu? Send igen om {{seconds}} s',
  },
  email_verification: {
    title: 'Bekræft din e-mail',
    prepare_description:
      'Bekræft, at det er dig, for at beskytte din konto. Send bekræftelseskoden til din e-mail.',
    email_label: 'E-mailadresse',
    send: 'Send bekræftelseskode',
    description:
      'Bekræftelseskoden er sendt til din e-mail {{email}}. Indtast koden for at fortsætte.',
    resend: 'Ikke modtaget endnu? <a>Send bekræftelseskoden igen</a>',
    not_received: 'Ikke modtaget endnu?',
    resend_action: 'Send bekræftelseskoden igen',
    resend_countdown: 'Ikke modtaget endnu? Send igen om {{seconds}} s',
    error_send_failed: 'Bekræftelseskoden kunne ikke sendes. Prøv igen senere.',
    error_verify_failed: 'Bekræftelsen mislykkedes. Indtast koden igen.',
    error_invalid_code: 'Bekræftelseskoden er ugyldig eller udløbet.',
  },
  phone_verification: {
    title: 'Bekræft din telefon',
    prepare_description:
      'Bekræft, at det er dig, for at beskytte din konto. Send bekræftelseskoden til din telefon.',
    phone_label: 'Telefonnummer',
    send: 'Send bekræftelseskode',
    description:
      'Bekræftelseskoden er sendt til din telefon {{phone}}. Indtast koden for at fortsætte.',
    resend: 'Ikke modtaget endnu? <a>Send bekræftelseskoden igen</a>',
    resend_countdown: 'Ikke modtaget endnu? Send igen om {{seconds}} s',
    error_send_failed: 'Bekræftelseskoden kunne ikke sendes. Prøv igen senere.',
    error_verify_failed: 'Bekræftelsen mislykkedes. Indtast koden igen.',
    error_invalid_code: 'Bekræftelseskoden er ugyldig eller udløbet.',
  },
  mfa: {
    totp_already_added:
      'Du har allerede tilføjet en godkendelsesapp. Fjern den eksisterende først.',
    totp_not_enabled:
      'Engangskode fra godkendelsesapp er ikke slået til. Kontakt din administrator for at få hjælp.',
    backup_code_already_added:
      'Du har allerede aktive backupkoder. Brug eller fjern dem, før du opretter nye.',
    backup_code_not_enabled:
      'Backupkoder er ikke slået til. Kontakt din administrator for at få hjælp.',
    backup_code_requires_other_mfa: 'Backupkoder kræver, at en anden MFA-metode er sat op først.',
    passkey_not_enabled: 'Passkey er ikke slået til. Kontakt din administrator for at få hjælp.',
    passkey_already_registered:
      'Denne passkey er allerede registreret på din konto. Brug en anden godkendelsesenhed.',
  },
  update_success: {
    default: {
      title: 'Opdateret',
      description: 'Dine ændringer er gemt.',
    },
    email: {
      title: 'E-mailadressen er opdateret!',
      description: 'E-mailadressen på din konto er ændret.',
    },
    phone: {
      title: 'Telefonnummeret er opdateret!',
      description: 'Telefonnummeret på din konto er ændret.',
    },
    username: {
      title: 'Brugernavnet er opdateret!',
      description: 'Brugernavnet på din konto er ændret.',
    },
    password: {
      title: 'Adgangskoden er opdateret!',
      description: 'Adgangskoden til din konto er ændret.',
    },
    totp: {
      title: 'Godkendelsesapp tilføjet!',
      description: 'Din godkendelsesapp er knyttet til din konto.',
    },
    totp_replaced: {
      title: 'Godkendelsesapp udskiftet!',
      description: 'Din godkendelsesapp er udskiftet.',
    },
    backup_code: {
      title: 'Backupkoder oprettet!',
      description: 'Dine backupkoder er gemt. Opbevar dem et sikkert sted.',
    },
    passkey: {
      title: 'Passkey tilføjet!',
      description: 'Din passkey er knyttet til din konto.',
    },
    social: {
      title: 'Social konto knyttet!',
      description: 'Din sociale konto er knyttet.',
    },
  },
  backup_code: {
    title: 'Backupkoder',
    description:
      'Hvis totrinsbekræftelsen ikke virker på andre måder, kan du bruge en af disse backupkoder til at få adgang til din konto. Hver kode kan kun bruges én gang.',
    copy_hint: 'Kopiér dem, og gem dem et sikkert sted.',
    generate_new_title: 'Opret nye backupkoder',
    generate_new: 'Opret nye backupkoder',
  },
  passkey: {
    title: 'Passkeys',
    added: 'Tilføjet: {{date}}',
    last_used: 'Sidst brugt: {{date}}',
    never_used: 'Aldrig',
    unnamed: 'Unavngivet passkey',
    renamed: 'Passkeyen er omdøbt.',
    deleted: 'Passkeyen er fjernet.',
    add_another_title: 'Tilføj endnu en passkey',
    add_another_description:
      'Registrer din passkey med enhedens biometri, en sikkerhedsnøgle (f.eks. YubiKey) eller en anden tilgængelig metode.',
    add_passkey: 'Tilføj en passkey',
    delete_confirmation_title: 'Fjern din passkey',
    delete_confirmation_description:
      'Hvis du fjerner denne passkey, kan du ikke længere bekræfte med den.',
    rename_passkey: 'Omdøb passkey',
    rename_description: 'Indtast et nyt navn til denne passkey.',
    name_this_passkey: 'Navngiv denne enheds passkey',
    name_passkey_description:
      'Du har bekræftet denne enhed til totrinsbekræftelse. Giv den et navn, så du kan genkende den, hvis du har flere nøgler.',
    name_input_label: 'Navn',
  },
  sessions: {
    page_title: 'Sessioner',
    page_description: 'Administrer dine aktive sessioner og godkendte tredjepartsapps.',
    title: 'Sessioner',
    current_session: 'Nuværende session',
    signed_in_at: 'Logget ind {{date}}',
    revoke_session: 'Log ud',
    revoke_session_title: 'Log sessionen ud',
    revoke_session_description:
      'Sessionen bliver logget ud, og al tilknyttet adgang tilbagekaldes. Vil du fortsætte?',
    no_other_sessions: 'Ingen andre aktive sessioner.',
    loading: 'Indlæser...',
    third_party_apps_title: 'Tredjepartsapps',
    no_third_party_apps: 'Ingen godkendte tredjepartsapps.',
    third_party_apps_load_failed: 'Tredjepartsapps kunne ikke indlæses. Prøv igen.',
    granted_at: 'Godkendt {{date}}',
    dynamic_app: 'Dynamisk app',
    client_id: 'Klient-ID: {{clientId}}',
    revoke_grant: 'Fjern',
    revoke_grant_title: 'Fjern tredjepartsappens adgang',
    revoke_grant_description:
      'Adgangen, der er givet til denne applikation, tilbagekaldes. Tidligere udstedte adgangstokens kan forblive gyldige, indtil de udløber. Vil du fortsætte?',
    revoke_grant_failed: 'Nogle tilladelser kunne ikke tilbagekaldes. Prøv igen.',
  },
};

export default Object.freeze(account_center);
/* eslint-enable max-lines */
