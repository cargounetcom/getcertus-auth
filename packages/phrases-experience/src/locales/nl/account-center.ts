/* eslint-disable max-lines -- Locale catalog mirrors the complete Account Center phrase schema. */
/* GetCertus addition (MPL-2.0, see GETCERTUS.md): sign-in experience phrases. */
const account_center = {
  home: {
    title: 'Pagina niet gevonden',
    description: 'Deze pagina is niet beschikbaar.',
  },
  page: {
    title: 'Account',
    security_title: 'Beveiliging',
    security_description: 'Wijzig hier je accountinstellingen om je account veilig te houden.',
    profile_title: 'Persoonlijke gegevens',
    profile_description: 'Wijzig hier je persoonlijke gegevens.',
    sidebar_personal_info: 'Persoonlijke gegevens',
    sidebar_security: 'Beveiliging',
    sidebar_sessions: 'Sessies',
    support: 'Support',
    user_menu: 'Gebruikersmenu',
    sign_out: 'Uitloggen',
  },
  verification: {
    title: 'Beveiligingsverificatie',
    description:
      'Bevestig dat jij het bent om je account te beschermen. Kies een methode om je identiteit te verifiëren.',
    error_send_failed: 'Verzenden van de verificatiecode mislukt. Probeer het later opnieuw.',
    error_invalid_code: 'De verificatiecode is ongeldig of verlopen.',
    error_verify_failed: 'Verificatie mislukt. Voer de code opnieuw in.',
    verification_required: 'Verificatie verlopen. Verifieer je identiteit opnieuw.',
    try_another_method: 'Probeer een andere verificatiemethode',
    no_available_methods_title: 'Geen verificatiemethoden beschikbaar',
    no_available_methods_description:
      'Je hebt nog geen verificatiemethoden ingesteld. Voeg eerst een wachtwoord, e-mailadres of telefoonnummer toe aan je account.',
  },
  password_verification: {
    title: 'Wachtwoord verifiëren',
    description: 'Bevestig dat jij het bent om je account te beschermen. Voer je wachtwoord in.',
    error_failed: 'Onjuist wachtwoord. Controleer je invoer.',
  },
  verification_method: {
    password: {
      name: 'Wachtwoord',
      description: 'Verifieer je wachtwoord',
    },
    email: {
      name: 'Verificatiecode per e-mail',
      description: 'Verificatiecode naar je e-mailadres sturen',
    },
    phone: {
      name: 'Verificatiecode per telefoon',
      description: 'Verificatiecode naar je telefoonnummer sturen',
    },
  },
  email: {
    title: 'E-mailadres koppelen',
    description: 'Koppel je e-mailadres om in te loggen of je account te herstellen.',
    verification_title: 'Voer de verificatiecode uit je e-mail in',
    verification_description:
      'De verificatiecode is verzonden naar je e-mailadres {{email_address}}.',
    success: 'Primair e-mailadres gekoppeld.',
    verification_required: 'Verificatie verlopen. Verifieer je identiteit opnieuw.',
  },
  phone: {
    title: 'Telefoonnummer koppelen',
    description: 'Koppel je telefoonnummer om in te loggen of je account te herstellen.',
    verification_title: 'Voer de sms-verificatiecode in',
    verification_description: 'De verificatiecode is verzonden naar je telefoon {{phone_number}}.',
    success: 'Primair telefoonnummer gekoppeld.',
    verification_required: 'Verificatie verlopen. Verifieer je identiteit opnieuw.',
  },
  username: {
    title: 'Gebruikersnaam instellen',
    description: 'Een gebruikersnaam mag alleen letters, cijfers en underscores bevatten.',
    policy_description: '{{requirements}}',
    success: 'Gebruikersnaam bijgewerkt.',
  },
  security: {
    add: 'Toevoegen',
    change: 'Wijzigen',
    remove: 'Verwijderen',
    not_set: 'Niet ingesteld',
    social_sign_in: 'Inloggen via sociale media',
    social_not_linked: 'Niet gekoppeld',
    email_phone: 'E-mail / telefoon',
    email: 'E-mail',
    phone: 'Telefoon',
    password: 'Wachtwoord',
    configured: 'Ingesteld',
    not_configured: 'Niet ingesteld',
    two_step_verification: 'Verificatie in twee stappen',
    authenticator_app: 'Authenticator-app',
    passkeys: 'Passkeys',
    backup_codes: 'Back-upcodes',
    email_verification_code: 'Verificatiecode per e-mail',
    phone_verification_code: 'Verificatiecode per telefoon',
    passkeys_count_one: '{{count}} passkey',
    passkeys_count_other: '{{count}} passkeys',
    backup_codes_count_one: 'Nog {{count}} code over',
    backup_codes_count_other: 'Nog {{count}} codes over',
    view: 'Bekijken',
    manage: 'Beheren',
    turn_on_2_step_verification_description:
      'Voeg een extra beveiligingslaag toe. Bij het inloggen wordt om een tweede verificatiestap gevraagd.',
    turn_off_2_step_verification: 'Verificatie in twee stappen uitschakelen',
    turn_off_2_step_verification_description:
      'Als je verificatie in twee stappen uitschakelt, verdwijnt de extra bescherming van je account bij het inloggen. Weet je zeker dat je wilt doorgaan?',
    disable_2_step_verification: 'Uitschakelen',
    no_verification_method_warning:
      'Je hebt nog geen tweede verificatiemethode toegevoegd. Voeg er minimaal één toe om verificatie in twee stappen bij het inloggen in te schakelen.',
    passkey_sign_in_prompt: 'Vragen om een passkey in te stellen',
    passkey_sign_in_prompt_description:
      'Als dit aan staat, word je gevraagd een passkey in te stellen om sneller en veiliger in te loggen.',
    account_removal: 'Account verwijderen',
    delete_your_account: 'Je account verwijderen',
    delete_account: 'Account verwijderen',
    remove_username_confirmation_title: 'Gebruikersnaam verwijderen',
    remove_username_confirmation_description:
      'Na verwijderen kun je niet meer inloggen met deze gebruikersnaam. Weet je zeker dat je wilt doorgaan?',
    remove_email_confirmation_title: 'E-mailadres verwijderen',
    remove_email_confirmation_description:
      'Na verwijderen kun je niet meer inloggen met dit e-mailadres. Weet je zeker dat je wilt doorgaan?',
    remove_phone_confirmation_title: 'Telefoonnummer verwijderen',
    remove_phone_confirmation_description:
      'Na verwijderen kun je niet meer inloggen met dit telefoonnummer. Weet je zeker dat je wilt doorgaan?',
    email_removed: 'E-mailadres verwijderd.',
    phone_removed: 'Telefoonnummer verwijderd.',
    username_removed: 'Gebruikersnaam verwijderd.',
    trusted_devices: {
      title: 'Vertrouwde apparaten voor MFA',
      current_device: 'Huidig apparaat',
      expires_on: 'Verloopt op {{date}}',
      unknown_location: 'Onbekende locatie',
      remove: 'Verwijderen',
      removed: 'Vertrouwd apparaat verwijderd.',
      loading: 'Laden...',
      empty: 'Geen vertrouwde apparaten.',
      load_failed: 'Laden van vertrouwde apparaten mislukt. Probeer het opnieuw.',
      retry: 'Opnieuw proberen',
      remove_confirmation_title: 'Vertrouwd apparaat verwijderen?',
      remove_confirmation_description:
        'De volgende keer dat je op dit apparaat inlogt, moet je MFA opnieuw doorlopen. Je huidige sessie blijft actief.',
    },
    passkeys_count_two: '{{count}} passkeys',
    passkeys_count_few: '{{count}} passkeys',
    passkeys_count_many: '{{count}} passkeys',
    backup_codes_count_two: 'Nog {{count}} codes over',
    backup_codes_count_few: 'Nog {{count}} codes over',
    backup_codes_count_many: 'Nog {{count}} codes over',
  },
  social: {
    linked: '{{connector}} gekoppeld.',
    removed: '{{connector}} verwijderd.',
    not_enabled:
      'Deze manier van inloggen via sociale media is niet ingeschakeld. Neem contact op met je beheerder voor hulp.',
    remove_confirmation_title: 'Sociaal account verwijderen',
    remove_confirmation_description:
      'Als je {{connector}} verwijdert, kun je er mogelijk niet meer mee inloggen totdat je het opnieuw toevoegt.',
  },
  password: {
    title: 'Wachtwoord instellen',
    description: 'Maak een nieuw wachtwoord aan om je account te beveiligen.',
    success: 'Wachtwoord bijgewerkt.',
  },
  code_verification: {
    send: 'Verificatiecode verzenden',
    resend: 'Nog niet ontvangen? <a>Verificatiecode opnieuw verzenden</a>',
    resend_countdown: 'Nog niet ontvangen? Opnieuw verzenden over {{seconds}} s',
  },
  email_verification: {
    title: 'Verifieer je e-mailadres',
    prepare_description:
      'Bevestig dat jij het bent om je account te beschermen. Stuur de verificatiecode naar je e-mailadres.',
    email_label: 'E-mailadres',
    send: 'Verificatiecode verzenden',
    description:
      'De verificatiecode is verzonden naar je e-mailadres {{email}}. Voer de code in om door te gaan.',
    resend: 'Nog niet ontvangen? <a>Verificatiecode opnieuw verzenden</a>',
    not_received: 'Nog niet ontvangen?',
    resend_action: 'Verificatiecode opnieuw verzenden',
    resend_countdown: 'Nog niet ontvangen? Opnieuw verzenden over {{seconds}} s',
    error_send_failed: 'Verzenden van de verificatiecode mislukt. Probeer het later opnieuw.',
    error_verify_failed: 'Verificatie mislukt. Voer de code opnieuw in.',
    error_invalid_code: 'De verificatiecode is ongeldig of verlopen.',
  },
  phone_verification: {
    title: 'Verifieer je telefoonnummer',
    prepare_description:
      'Bevestig dat jij het bent om je account te beschermen. Stuur de verificatiecode naar je telefoon.',
    phone_label: 'Telefoonnummer',
    send: 'Verificatiecode verzenden',
    description:
      'De verificatiecode is verzonden naar je telefoon {{phone}}. Voer de code in om door te gaan.',
    resend: 'Nog niet ontvangen? <a>Verificatiecode opnieuw verzenden</a>',
    resend_countdown: 'Nog niet ontvangen? Opnieuw verzenden over {{seconds}} s',
    error_send_failed: 'Verzenden van de verificatiecode mislukt. Probeer het later opnieuw.',
    error_verify_failed: 'Verificatie mislukt. Voer de code opnieuw in.',
    error_invalid_code: 'De verificatiecode is ongeldig of verlopen.',
  },
  mfa: {
    totp_already_added:
      'Je hebt al een authenticator-app toegevoegd. Verwijder eerst de bestaande.',
    totp_not_enabled:
      'Eenmalige codes uit een authenticator-app zijn niet ingeschakeld. Neem contact op met je beheerder voor hulp.',
    backup_code_already_added:
      'Je hebt al actieve back-upcodes. Gebruik of verwijder ze voordat je nieuwe genereert.',
    backup_code_not_enabled:
      'Back-upcodes zijn niet ingeschakeld. Neem contact op met je beheerder voor hulp.',
    backup_code_requires_other_mfa:
      'Voor back-upcodes moet je eerst een andere MFA-methode instellen.',
    passkey_not_enabled:
      'Passkeys zijn niet ingeschakeld. Neem contact op met je beheerder voor hulp.',
    passkey_already_registered:
      'Deze passkey is al geregistreerd voor je account. Gebruik een andere authenticator.',
  },
  update_success: {
    default: {
      title: 'Bijgewerkt',
      description: 'Je wijzigingen zijn opgeslagen.',
    },
    email: {
      title: 'E-mailadres bijgewerkt!',
      description: 'Het e-mailadres van je account is gewijzigd.',
    },
    phone: {
      title: 'Telefoonnummer bijgewerkt!',
      description: 'Het telefoonnummer van je account is gewijzigd.',
    },
    username: {
      title: 'Gebruikersnaam bijgewerkt!',
      description: 'De gebruikersnaam van je account is gewijzigd.',
    },
    password: {
      title: 'Wachtwoord bijgewerkt!',
      description: 'Het wachtwoord van je account is gewijzigd.',
    },
    totp: {
      title: 'Authenticator-app toegevoegd!',
      description: 'Je authenticator-app is gekoppeld aan je account.',
    },
    totp_replaced: {
      title: 'Authenticator-app vervangen!',
      description: 'Je authenticator-app is vervangen.',
    },
    backup_code: {
      title: 'Back-upcodes gegenereerd!',
      description: 'Je back-upcodes zijn opgeslagen. Bewaar ze op een veilige plek.',
    },
    passkey: {
      title: 'Passkey toegevoegd!',
      description: 'Je passkey is gekoppeld aan je account.',
    },
    social: {
      title: 'Sociaal account gekoppeld!',
      description: 'Je sociale account is gekoppeld.',
    },
  },
  backup_code: {
    title: 'Back-upcodes',
    description:
      'Als verificatie in twee stappen op een andere manier niet lukt, kun je met een van deze back-upcodes toegang krijgen tot je account. Elke code kan maar één keer worden gebruikt.',
    copy_hint: 'Kopieer ze en bewaar ze op een veilige plek.',
    generate_new_title: 'Nieuwe back-upcodes genereren',
    generate_new: 'Nieuwe back-upcodes genereren',
  },
  passkey: {
    title: 'Passkeys',
    added: 'Toegevoegd: {{date}}',
    last_used: 'Laatst gebruikt: {{date}}',
    never_used: 'Nooit',
    unnamed: 'Passkey zonder naam',
    renamed: 'Passkey hernoemd.',
    deleted: 'Passkey verwijderd.',
    add_another_title: 'Nog een passkey toevoegen',
    add_another_description:
      'Registreer je passkey met biometrie van je apparaat, een beveiligingssleutel (bijv. YubiKey) of een andere beschikbare methode.',
    add_passkey: 'Passkey toevoegen',
    delete_confirmation_title: 'Je passkey verwijderen',
    delete_confirmation_description:
      'Als je deze passkey verwijdert, kun je er niet meer mee verifiëren.',
    rename_passkey: 'Passkey hernoemen',
    rename_description: 'Voer een nieuwe naam in voor deze passkey.',
    name_this_passkey: 'Geef de passkey van dit apparaat een naam',
    name_passkey_description:
      'Je hebt dit apparaat geverifieerd voor verificatie in twee stappen. Geef het een herkenbare naam als je meerdere sleutels hebt.',
    name_input_label: 'Naam',
  },
  sessions: {
    page_title: 'Sessies',
    page_description: 'Beheer je actieve sessies en geautoriseerde apps van derden.',
    title: 'Sessies',
    current_session: 'Huidige sessie',
    signed_in_at: 'Ingelogd {{date}}',
    revoke_session: 'Uitloggen',
    revoke_session_title: 'Sessie uitloggen',
    revoke_session_description:
      'Hiermee wordt de sessie uitgelogd en alle bijbehorende toegang ingetrokken. Weet je zeker dat je wilt doorgaan?',
    no_other_sessions: 'Geen andere actieve sessies.',
    loading: 'Laden...',
    third_party_apps_title: 'Apps van derden',
    no_third_party_apps: 'Geen geautoriseerde apps van derden.',
    third_party_apps_load_failed: 'Laden van apps van derden mislukt. Probeer het opnieuw.',
    granted_at: 'Geautoriseerd {{date}}',
    dynamic_app: 'Dynamische app',
    client_id: 'Client-ID: {{clientId}}',
    revoke_grant: 'Verwijderen',
    revoke_grant_title: 'Toegang van app van derden intrekken',
    revoke_grant_description:
      'Hiermee wordt de toegang van deze applicatie ingetrokken. Eerder uitgegeven toegangstokens kunnen geldig blijven tot ze verlopen. Weet je zeker dat je wilt doorgaan?',
    revoke_grant_failed: 'Intrekken van sommige toegangsrechten mislukt. Probeer het opnieuw.',
  },
};

export default Object.freeze(account_center);
/* eslint-enable max-lines */
