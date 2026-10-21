/* eslint-disable max-lines -- Locale catalog mirrors the complete Account Center phrase schema. */
/* GetCertus addition (MPL-2.0, see GETCERTUS.md): sign-in experience phrases. */
const account_center = {
  home: {
    title: 'Pagina nu a fost găsită',
    description: 'Această pagină nu este disponibilă.',
  },
  page: {
    title: 'Cont',
    security_title: 'Securitate',
    security_description: 'Modifică aici setările contului pentru a-l păstra în siguranță.',
    profile_title: 'Informații personale',
    profile_description: 'Modifică aici informațiile personale.',
    sidebar_personal_info: 'Informații personale',
    sidebar_security: 'Securitate',
    sidebar_sessions: 'Sesiuni',
    support: 'Asistență',
    user_menu: 'Meniul utilizatorului',
    sign_out: 'Deconectează-te',
  },
  verification: {
    title: 'Verificare de securitate',
    description:
      'Confirmă că ești tu pentru a-ți proteja contul. Alege o metodă de verificare a identității.',
    error_send_failed: 'Codul de verificare nu a putut fi trimis. Încearcă din nou mai târziu.',
    error_invalid_code: 'Codul de verificare nu este valid sau a expirat.',
    error_verify_failed: 'Verificarea a eșuat. Introdu codul din nou.',
    verification_required: 'Verificarea a expirat. Verifică-ți din nou identitatea.',
    try_another_method: 'Încearcă altă metodă de verificare',
    no_available_methods_title: 'Nu există metode de verificare disponibile',
    no_available_methods_description:
      'Nu ai configurată nicio metodă de verificare. Adaugă mai întâi o parolă, un e-mail sau un număr de telefon la cont.',
  },
  password_verification: {
    title: 'Verifică parola',
    description: 'Confirmă că ești tu pentru a-ți proteja contul. Introdu parola.',
    error_failed: 'Parolă greșită. Verifică ce ai introdus.',
  },
  verification_method: {
    password: {
      name: 'Parolă',
      description: 'Verifică parola',
    },
    email: {
      name: 'Cod de verificare prin e-mail',
      description: 'Trimite codul de verificare pe e-mail',
    },
    phone: {
      name: 'Cod de verificare prin telefon',
      description: 'Trimite codul de verificare pe telefon',
    },
  },
  email: {
    title: 'Asociază e-mailul',
    description: 'Asociază e-mailul pentru conectare sau recuperarea contului.',
    verification_title: 'Introdu codul de verificare din e-mail',
    verification_description: 'Codul de verificare a fost trimis la adresa {{email_address}}.',
    success: 'E-mailul principal a fost asociat.',
    verification_required: 'Verificarea a expirat. Verifică-ți din nou identitatea.',
  },
  phone: {
    title: 'Asociază numărul de telefon',
    description: 'Asociază numărul de telefon pentru conectare sau recuperarea contului.',
    verification_title: 'Introdu codul de verificare din SMS',
    verification_description: 'Codul de verificare a fost trimis la numărul {{phone_number}}.',
    success: 'Telefonul principal a fost asociat.',
    verification_required: 'Verificarea a expirat. Verifică-ți din nou identitatea.',
  },
  username: {
    title: 'Setează numele de utilizator',
    description: 'Numele de utilizator poate conține doar litere, cifre și liniuțe de subliniere.',
    policy_description: '{{requirements}}',
    success: 'Numele de utilizator a fost actualizat.',
  },
  security: {
    add: 'Adaugă',
    change: 'Schimbă',
    remove: 'Elimină',
    not_set: 'Nesetat',
    social_sign_in: 'Conectare socială',
    social_not_linked: 'Neasociat',
    email_phone: 'E-mail / telefon',
    email: 'E-mail',
    phone: 'Telefon',
    password: 'Parolă',
    configured: 'Configurat',
    not_configured: 'Neconfigurat',
    two_step_verification: 'Verificare în doi pași',
    authenticator_app: 'Aplicație de autentificare',
    passkeys: 'Chei de acces',
    backup_codes: 'Coduri de rezervă',
    email_verification_code: 'Cod de verificare prin e-mail',
    phone_verification_code: 'Cod de verificare prin telefon',
    passkeys_count_one: '{{count}} cheie de acces',
    passkeys_count_few: '{{count}} chei de acces',
    passkeys_count_other: '{{count}} de chei de acces',
    backup_codes_count_one: '{{count}} cod rămas',
    backup_codes_count_few: '{{count}} coduri rămase',
    backup_codes_count_other: '{{count}} de coduri rămase',
    view: 'Vezi',
    manage: 'Gestionează',
    turn_on_2_step_verification_description:
      'Adaugă un nivel suplimentar de securitate. La conectare ți se va cere un al doilea pas de verificare.',
    turn_off_2_step_verification: 'Dezactivează verificarea în doi pași',
    turn_off_2_step_verification_description:
      'Dezactivarea verificării în doi pași elimină protecția suplimentară a contului la conectare. Sigur vrei să continui?',
    disable_2_step_verification: 'Dezactivează',
    no_verification_method_warning:
      'Nu ai adăugat o a doua metodă de verificare. Adaugă cel puțin una pentru a activa verificarea în doi pași la conectare.',
    passkey_sign_in_prompt: 'Sugerează configurarea unei chei de acces',
    passkey_sign_in_prompt_description:
      'Când este activat, ți se va cere să configurezi o cheie de acces pentru o conectare mai rapidă și mai sigură.',
    account_removal: 'Ștergerea contului',
    delete_your_account: 'Șterge-ți contul',
    delete_account: 'Șterge contul',
    remove_username_confirmation_title: 'Elimină numele de utilizator',
    remove_username_confirmation_description:
      'După eliminare nu te vei mai putea conecta cu acest nume de utilizator. Sigur vrei să continui?',
    remove_email_confirmation_title: 'Elimină adresa de e-mail',
    remove_email_confirmation_description:
      'După eliminare nu te vei mai putea conecta cu această adresă de e-mail. Sigur vrei să continui?',
    remove_phone_confirmation_title: 'Elimină numărul de telefon',
    remove_phone_confirmation_description:
      'După eliminare nu te vei mai putea conecta cu acest număr de telefon. Sigur vrei să continui?',
    email_removed: 'Adresa de e-mail a fost eliminată.',
    phone_removed: 'Numărul de telefon a fost eliminat.',
    username_removed: 'Numele de utilizator a fost eliminat.',
    trusted_devices: {
      title: 'Dispozitive de încredere pentru MFA',
      current_device: 'Dispozitivul curent',
      expires_on: 'Expiră pe {{date}}',
      unknown_location: 'Locație necunoscută',
      remove: 'Elimină',
      removed: 'Dispozitivul de încredere a fost eliminat.',
      loading: 'Se încarcă...',
      empty: 'Nu există dispozitive de încredere.',
      load_failed: 'Dispozitivele de încredere nu au putut fi încărcate. Încearcă din nou.',
      retry: 'Încearcă din nou',
      remove_confirmation_title: 'Elimini dispozitivul de încredere?',
      remove_confirmation_description:
        'La următoarea conectare pe acest dispozitiv va trebui să treci din nou prin MFA. Sesiunea curentă rămâne activă.',
    },
    passkeys_count_two: '{{count}} de chei de acces',
    passkeys_count_many: '{{count}} de chei de acces',
    backup_codes_count_two: '{{count}} de coduri rămase',
    backup_codes_count_many: '{{count}} de coduri rămase',
  },
  social: {
    linked: '{{connector}} a fost asociat.',
    removed: '{{connector}} a fost eliminat.',
    not_enabled:
      'Această metodă de conectare socială nu este activată. Contactează administratorul pentru asistență.',
    remove_confirmation_title: 'Elimină contul social',
    remove_confirmation_description:
      'Dacă elimini {{connector}}, este posibil să nu te mai poți conecta cu el până nu îl adaugi din nou.',
  },
  password: {
    title: 'Setează parola',
    description: 'Creează o parolă nouă pentru a-ți proteja contul.',
    success: 'Parola a fost actualizată.',
  },
  code_verification: {
    send: 'Trimite codul de verificare',
    resend: 'Nu l-ai primit? <a>Retrimite codul de verificare</a>',
    resend_countdown: 'Nu l-ai primit? Retrimite peste {{seconds}} s',
  },
  email_verification: {
    title: 'Verifică-ți e-mailul',
    prepare_description:
      'Confirmă că ești tu pentru a-ți proteja contul. Trimite codul de verificare pe e-mail.',
    email_label: 'Adresă de e-mail',
    send: 'Trimite codul de verificare',
    description:
      'Codul de verificare a fost trimis la adresa {{email}}. Introdu codul pentru a continua.',
    resend: 'Nu l-ai primit? <a>Retrimite codul de verificare</a>',
    not_received: 'Nu l-ai primit?',
    resend_action: 'Retrimite codul de verificare',
    resend_countdown: 'Nu l-ai primit? Retrimite peste {{seconds}} s',
    error_send_failed: 'Codul de verificare nu a putut fi trimis. Încearcă din nou mai târziu.',
    error_verify_failed: 'Verificarea a eșuat. Introdu codul din nou.',
    error_invalid_code: 'Codul de verificare nu este valid sau a expirat.',
  },
  phone_verification: {
    title: 'Verifică-ți telefonul',
    prepare_description:
      'Confirmă că ești tu pentru a-ți proteja contul. Trimite codul de verificare pe telefon.',
    phone_label: 'Număr de telefon',
    send: 'Trimite codul de verificare',
    description:
      'Codul de verificare a fost trimis la numărul {{phone}}. Introdu codul pentru a continua.',
    resend: 'Nu l-ai primit? <a>Retrimite codul de verificare</a>',
    resend_countdown: 'Nu l-ai primit? Retrimite peste {{seconds}} s',
    error_send_failed: 'Codul de verificare nu a putut fi trimis. Încearcă din nou mai târziu.',
    error_verify_failed: 'Verificarea a eșuat. Introdu codul din nou.',
    error_invalid_code: 'Codul de verificare nu este valid sau a expirat.',
  },
  mfa: {
    totp_already_added:
      'Ai adăugat deja o aplicație de autentificare. Elimin-o mai întâi pe cea existentă.',
    totp_not_enabled:
      'Codul unic din aplicația de autentificare nu este activat. Contactează administratorul pentru asistență.',
    backup_code_already_added:
      'Ai deja coduri de rezervă active. Folosește-le sau elimină-le înainte de a genera altele noi.',
    backup_code_not_enabled:
      'Codurile de rezervă nu sunt activate. Contactează administratorul pentru asistență.',
    backup_code_requires_other_mfa:
      'Codurile de rezervă necesită mai întâi configurarea altei metode MFA.',
    passkey_not_enabled:
      'Cheia de acces nu este activată. Contactează administratorul pentru asistență.',
    passkey_already_registered:
      'Această cheie de acces este deja înregistrată în contul tău. Folosește alt autentificator.',
  },
  update_success: {
    default: {
      title: 'Actualizare reușită',
      description: 'Modificările au fost salvate.',
    },
    email: {
      title: 'Adresa de e-mail a fost actualizată!',
      description: 'Adresa de e-mail a contului a fost schimbată.',
    },
    phone: {
      title: 'Numărul de telefon a fost actualizat!',
      description: 'Numărul de telefon al contului a fost schimbat.',
    },
    username: {
      title: 'Numele de utilizator a fost actualizat!',
      description: 'Numele de utilizator al contului a fost schimbat.',
    },
    password: {
      title: 'Parola a fost actualizată!',
      description: 'Parola contului a fost schimbată.',
    },
    totp: {
      title: 'Aplicația de autentificare a fost adăugată!',
      description: 'Aplicația de autentificare a fost asociată cu contul tău.',
    },
    totp_replaced: {
      title: 'Aplicația de autentificare a fost înlocuită!',
      description: 'Aplicația de autentificare a fost înlocuită.',
    },
    backup_code: {
      title: 'Codurile de rezervă au fost generate!',
      description: 'Codurile de rezervă au fost salvate. Păstrează-le într-un loc sigur.',
    },
    passkey: {
      title: 'Cheia de acces a fost adăugată!',
      description: 'Cheia de acces a fost asociată cu contul tău.',
    },
    social: {
      title: 'Contul social a fost asociat!',
      description: 'Contul tău social a fost asociat.',
    },
  },
  backup_code: {
    title: 'Coduri de rezervă',
    description:
      'Dacă verificarea în doi pași nu funcționează în alt mod, poți folosi unul dintre aceste coduri de rezervă pentru a-ți accesa contul. Fiecare cod poate fi folosit o singură dată.',
    copy_hint: 'Copiază-le și păstrează-le într-un loc sigur.',
    generate_new_title: 'Generează coduri de rezervă noi',
    generate_new: 'Generează coduri de rezervă noi',
  },
  passkey: {
    title: 'Chei de acces',
    added: 'Adăugată: {{date}}',
    last_used: 'Folosită ultima dată: {{date}}',
    never_used: 'Niciodată',
    unnamed: 'Cheie de acces fără nume',
    renamed: 'Cheia de acces a fost redenumită.',
    deleted: 'Cheia de acces a fost eliminată.',
    add_another_title: 'Adaugă încă o cheie de acces',
    add_another_description:
      'Înregistrează cheia de acces folosind biometria dispozitivului, chei de securitate (de ex. YubiKey) sau alte metode disponibile.',
    add_passkey: 'Adaugă o cheie de acces',
    delete_confirmation_title: 'Elimină cheia de acces',
    delete_confirmation_description:
      'Dacă elimini această cheie de acces, nu te vei mai putea verifica cu ea.',
    rename_passkey: 'Redenumește cheia de acces',
    rename_description: 'Introdu un nume nou pentru această cheie de acces.',
    name_this_passkey: 'Denumește cheia de acces a acestui dispozitiv',
    name_passkey_description:
      'Ai verificat acest dispozitiv pentru verificarea în doi pași. Dă-i un nume ca să îl recunoști dacă ai mai multe chei.',
    name_input_label: 'Nume',
  },
  sessions: {
    page_title: 'Sesiuni',
    page_description: 'Gestionează sesiunile active și aplicațiile terțe autorizate.',
    title: 'Sesiuni',
    current_session: 'Sesiunea curentă',
    signed_in_at: 'Conectat {{date}}',
    revoke_session: 'Deconectează',
    revoke_session_title: 'Deconectează sesiunea',
    revoke_session_description:
      'Sesiunea va fi deconectată și tot accesul asociat va fi revocat. Sigur vrei să continui?',
    no_other_sessions: 'Nu există alte sesiuni active.',
    loading: 'Se încarcă...',
    third_party_apps_title: 'Aplicații terțe',
    no_third_party_apps: 'Nu există aplicații terțe autorizate.',
    third_party_apps_load_failed: 'Aplicațiile terțe nu au putut fi încărcate. Încearcă din nou.',
    granted_at: 'Autorizată {{date}}',
    dynamic_app: 'Aplicație dinamică',
    client_id: 'ID client: {{clientId}}',
    revoke_grant: 'Elimină',
    revoke_grant_title: 'Elimină accesul aplicației terțe',
    revoke_grant_description:
      'Accesul acordat acestei aplicații va fi revocat. Tokenurile de acces emise anterior pot rămâne valabile până la expirare. Sigur vrei să continui?',
    revoke_grant_failed: 'Unele permisiuni nu au putut fi revocate. Încearcă din nou.',
  },
};

export default Object.freeze(account_center);
/* eslint-enable max-lines */
