/* GetCertus addition (MPL-2.0, see GETCERTUS.md): admin console phrases. */
const user_details = {
  page_title: 'Detalii utilizator',
  back_to_users: 'Înapoi la gestionarea utilizatorilor',
  created_title: 'Utilizatorul a fost creat',
  created_guide: 'Iată informațiile care îl ajută pe utilizator să se autentifice.',
  created_email: 'Adresă de e-mail:',
  created_phone: 'Număr de telefon:',
  created_username: 'Nume de utilizator:',
  created_password: 'Parolă:',
  menu_delete: 'Ștergeți',
  delete_description: 'Această acțiune nu poate fi anulată. Utilizatorul va fi șters definitiv.',
  deleted: 'Utilizatorul a fost șters',
  reset_password: {
    reset_title: 'Sigur doriți să resetați parola?',
    generate_title: 'Sigur doriți să generați o parolă?',
    content:
      'Această acțiune nu poate fi anulată. Datele de autentificare ale utilizatorului vor fi actualizate.',
    reset_complete: 'Parola a fost resetată',
    generate_complete: 'Parola a fost generată',
    new_password: 'Parolă nouă:',
    password: 'Parolă:',
  },
  expire_password: {
    button: 'Expirați',
    title: 'Sigur doriți să marcați această parolă ca expirată?',
    content:
      'Utilizatorul va trebui să își reseteze parola la următoarea autentificare. Această acțiune nu poate fi anulată.',
    success: 'Parola utilizatorului a fost marcată ca expirată.',
    not_enabled_tooltip: 'Politica de expirare a parolelor nu este activată.',
  },
  tab_settings: 'Setări',
  tab_roles: 'Roluri',
  tab_logs: 'Jurnale utilizator',
  tab_organizations: 'Organizații',
  authentication: 'Autentificare',
  authentication_description:
    'Fiecare utilizator are un profil cu toate informațiile sale: date de bază, identități sociale și date personalizate.',
  user_profile: 'Date utilizator',
  field_email: 'Adresă de e-mail',
  field_phone: 'Număr de telefon',
  field_username: 'Nume de utilizator',
  field_password: 'Parolă',
  field_name: 'Nume',
  field_avatar: 'URL imagine avatar',
  field_avatar_placeholder: 'https://your.cdn.domain/avatar.png',
  field_custom_data: 'Date personalizate',
  field_custom_data_tip:
    'Informații suplimentare despre utilizator care nu sunt în proprietățile predefinite, cum ar fi culoarea și limba preferate.',
  field_profile: 'Profil',
  field_profile_tip:
    'Claims standard OpenID Connect suplimentare care nu sunt incluse în proprietățile utilizatorului. Proprietățile necunoscute vor fi eliminate. Consultați <a>referința proprietăților de profil</a> pentru mai multe informații.',
  field_connectors: 'Conexiuni sociale',
  field_sso_connectors: 'Conexiuni pentru companii',
  custom_data_invalid: 'Datele personalizate trebuie să fie un obiect JSON valid',
  profile_invalid: 'Profilul trebuie să fie un obiect JSON valid',
  password_already_set: 'Parola este deja setată',
  no_password_set: 'Nicio parolă setată',
  connectors: {
    connectors: 'Conectori',
    user_id: 'ID utilizator',
    remove: 'Eliminați',
    connected: 'Acest utilizator este conectat prin mai mulți conectori sociali.',
    not_connected: 'Utilizatorul nu este conectat la niciun conector social',
    deletion_confirmation: 'Eliminați identitatea existentă <name/>. Sigur doriți să continuați?',
  },
  sso_connectors: {
    connectors: 'Conectori',
    enterprise_id: 'ID companie',
    connected:
      'Acest utilizator este conectat la mai mulți furnizori de identitate pentru companii pentru autentificare unică.',
    not_connected:
      'Utilizatorul nu este conectat la niciun furnizor de identitate pentru companii pentru autentificare unică.',
  },
  mfa: {
    field_name: 'Autentificare multifactor',
    field_description: 'Acest utilizator a activat factori de verificare în doi pași.',
    name_column: 'Multifactor',
    field_description_empty: 'Acest utilizator nu a activat factori de verificare în doi pași.',
    deletion_confirmation:
      'Eliminați <name/> existent pentru verificarea în doi pași. Sigur doriți să continuați?',
  },
  passkey: {
    field_name: 'Passkey-uri',
    field_description_empty: 'Acest utilizator nu a activat autentificarea cu passkey.',
    deletion_confirmation:
      'Eliminați <name/> existent pentru autentificarea cu passkey. Sigur doriți să continuați?',
  },
  suspended: 'Suspendat',
  suspend_user: 'Suspendați utilizatorul',
  suspend_user_reminder:
    'Sigur doriți să suspendați acest utilizator? Nu se va mai putea autentifica în aplicație și nu va mai putea obține un token de acces nou după ce cel actual expiră. De asemenea, toate cererile API ale acestui utilizator vor eșua.',
  suspend_action: 'Suspendați',
  user_suspended: 'Utilizatorul a fost suspendat.',
  reactivate_user: 'Reactivați utilizatorul',
  reactivate_user_reminder:
    'Sigur doriți să reactivați acest utilizator? Astfel, încercările lui de autentificare vor fi permise din nou.',
  reactivate_action: 'Reactivați',
  user_reactivated: 'Utilizatorul a fost reactivat.',
  roles: {
    name_column: 'Rol utilizator',
    description_column: 'Descriere',
    assign_button: 'Atribuiți roluri',
    delete_description:
      'Rolul va fi eliminat de la acest utilizator. Rolul în sine va exista în continuare, dar nu va mai fi asociat cu acest utilizator.',
    deleted: '{{name}} a fost eliminat de la acest utilizator.',
    assign_title: 'Atribuiți roluri pentru {{name}}',
    assign_subtitle: 'Găsiți rolurile potrivite căutând după nume, descriere sau ID-ul rolului.',
    assign_role_field: 'Atribuiți roluri',
    role_search_placeholder: 'Căutați după numele rolului',
    added_text: '{{value, number}} adăugate',
    assigned_user_count: '{{value, number}} utilizatori',
    confirm_assign: 'Atribuiți roluri',
    role_assigned: 'Rolurile au fost atribuite',
    search: 'Căutați după numele rolului, descriere sau ID',
    empty: 'Niciun rol disponibil',
  },
  warning_no_sign_in_identifier:
    'Utilizatorul trebuie să aibă cel puțin un identificator de autentificare (nume de utilizator, e-mail, număr de telefon sau cont social) pentru a se autentifica. Sigur doriți să continuați?',
  personal_access_tokens: {
    title: 'Token de acces personal',
    title_other: 'Tokenuri de acces personal',
    title_short: 'token',
    empty: 'Utilizatorul nu are tokenuri de acces personal.',
    create: 'Creați token nou',
    tip: 'Tokenurile de acces personal (PAT) oferă utilizatorilor o modalitate sigură de a obține tokenuri de acces fără a-și folosi datele de autentificare și autentificarea interactivă. Utile pentru CI/CD, scripturi sau aplicații care au nevoie de acces programatic la resurse.',
    value: 'Valoare',
    created_at: 'Creat la',
    expires_at: 'Expiră la',
    never: 'Niciodată',
    create_new_token: 'Creați token nou',
    delete_confirmation:
      'Această acțiune nu poate fi anulată. Sigur doriți să ștergeți acest token?',
    expired: 'Expirat',
    expired_tooltip: 'Acest token a expirat la {{date}}.',
    create_modal: {
      title: 'Creați token de acces personal',
      expiration: 'Expirare',
      expiration_description: 'Tokenul va expira la {{date}}.',
      expiration_description_never:
        'Tokenul nu va expira niciodată. Recomandăm setarea unei date de expirare pentru mai multă securitate.',
      days: '{{count}} zi',
      days_other: '{{count}} zile',
      created: 'Tokenul {{name}} a fost creat.',
    },
    edit_modal: {
      title: 'Editați tokenul de acces personal',
      edited: 'Tokenul {{name}} a fost editat.',
    },
  },
  sessions: {
    title: 'Sesiuni',
    description:
      'Gestionați sesiunile menținute de serverul de autorizare GetCertus. Revocarea unei sesiuni GetCertus aici împiedică consimțământul automat la cererile de autorizare viitoare.',
    field_name: 'Sesiuni',
    multiple_signed_in: 'Acest utilizator s-a autentificat pe mai multe dispozitive sau browsere.',
    not_found:
      'Nu s-au găsit sesiuni GetCertus active. Utilizatorul nu este autentificat în prezent pe niciun dispozitiv.',
    name_column: 'Nume',
    session_id_column: 'ID sesiune',
    location_column: 'Locație',
    browser_on_os: '{{browser}} pe {{os}}',
    user: 'Utilizator',
    applications: 'Aplicații',
    signed_in_at: 'Ultima autentificare',
    ip: 'IP',
    browser_name: 'Browser',
    os_name: 'Sistem de operare',
    device_model: 'Model dispozitiv',
    revoke_session: 'Revocați sesiunea',
    revoke_session_confirmation:
      'Dacă eliminați această sesiune, utilizatorii vor trebui să se autentifice din nou.',
  },
  third_party_apps: {
    title: 'Aplicații terțe',
    description:
      'Folosiți GetCertus ca furnizor de identitate pentru a autoriza aplicații terțe. Vedeți și gestionați aplicațiile cărora acest utilizator le-a acordat acces.',
    field_name: 'Aplicații terțe autorizate',
    multiple_authorized: 'Acest utilizator a autorizat mai multe aplicații și servicii terțe.',
    not_authorized: 'Acest utilizator nu a autorizat încă nicio aplicație sau serviciu terț.',
    name_column: 'Nume',
    app_id_column: 'ID aplicație',
    access_created_at_column: 'Acces creat la',
    revoke_access_title: 'Revocați accesul?',
    revoke_access_description:
      'Accesul aplicației la contul acestui utilizator va fi revocat pe toate dispozitivele. Utilizatorul trebuie să autorizeze din nou pentru a restabili accesul. Tokenurile de acces emise anterior pot rămâne valabile până expiră.',
  },
  connections: {
    title: 'Conexiune',
    description:
      'Utilizatorul asociază conturi terțe pentru autentificare socială, SSO pentru companii sau acces la resurse.',
    token_status_column: 'Starea tokenului',
    token_status: {
      active: 'Activ',
      expired: 'Expirat',
      inactive: 'Inactiv',
      not_applicable: 'Nu se aplică',
      available: 'Disponibil',
      not_available: 'Indisponibil',
    },
  },
};

export default Object.freeze(user_details);
