/* GetCertus addition (MPL-2.0, see GETCERTUS.md): admin console phrases. */
const sign_in_exp = {
  page_title: 'Experiența de autentificare',
  page_title_with_account: 'Autentificare și cont',
  title: 'Autentificare și cont',
  description:
    'Personalizați fluxurile de autentificare și interfața și previzualizați în timp real experiența gata făcută.',
  tabs: {
    branding: 'Branding',
    sign_up_and_sign_in: 'Înregistrare și autentificare',
    collect_user_profile: 'Colectarea profilului utilizatorului',
    account_center: 'Centrul contului',
    content: 'Conținut',
    password_policy: 'Politica de parole',
  },
  welcome: {
    title: 'Personalizați experiența de autentificare',
    description:
      'Începeți rapid prima configurare a autentificării. Acest ghid vă prezintă toate setările necesare.',
    get_started: 'Începeți',
    apply_remind:
      'Rețineți că experiența de autentificare se aplică tuturor aplicațiilor din acest cont.',
  },
  color: {
    title: 'CULOARE',
    primary_color: 'Culoarea brandului',
    dark_primary_color: 'Culoarea brandului (întunecat)',
    dark_mode: 'Activați modul întunecat',
    dark_mode_description:
      'Aplicația va avea o temă întunecată generată automat pe baza culorii brandului și a algoritmului GetCertus. O puteți personaliza liber.',
    dark_mode_reset_tip: 'Recalculați culoarea modului întunecat pe baza culorii brandului.',
    reset: 'Recalculați',
  },
  branding: {
    title: 'BRANDING',
    ui_style: 'Stil',
    with_light: '{{value}}',
    with_dark: '{{value}} (întunecat)',
    app_logo_and_favicon: 'Logoul aplicației și favicon',
    company_logo_and_favicon: 'Logoul companiei și favicon',
    organization_logo_and_favicon: 'Logoul organizației și favicon',
    hide_logto_branding: 'Ascundeți brandingul GetCertus',
    hide_logto_branding_description:
      'Eliminați "Powered by GetCertus". Puneți în valoare doar brandul dvs. cu o experiență de autentificare curată și profesională.',
    hide_logto_branding_oss_note:
      'Ascunderea semnăturii necesită <a>suplimentul Branding</a> GetCertus.',
  },
  branding_uploads: {
    app_logo: {
      title: 'Logoul aplicației',
      url: 'URL logo aplicație',
      url_placeholder: 'https://your.cdn.domain/logo.png',
      error: 'Logoul aplicației: {{error}}',
    },
    company_logo: {
      title: 'Logoul companiei',
      url: 'URL logo companie',
      url_placeholder: 'https://your.cdn.domain/logo.png',
      error: 'Logoul companiei: {{error}}',
    },
    organization_logo: {
      title: 'Încărcați imaginea',
      url: 'URL logo organizație',
      url_placeholder: 'https://your.cdn.domain/logo.png',
      error: 'Logoul organizației: {{error}}',
    },
    connector_logo: {
      title: 'Încărcați imaginea',
      url: 'URL logo conector',
      url_placeholder: 'https://your.cdn.domain/logo.png',
      error: 'Logoul conectorului: {{error}}',
    },
    favicon: {
      title: 'Favicon',
      url: 'URL favicon',
      url_placeholder: 'https://your.cdn.domain/favicon.ico',
      error: 'Favicon: {{error}}',
    },
  },
  custom_ui: {
    title: 'Interfață personalizată',
    cloud_tag: 'Cloud',
    css_code_editor_title: 'CSS personalizat',
    css_code_editor_field_title: 'Suprascrieri CSS',
    css_code_editor_description1: 'Vedeți exemplul de CSS personalizat.',
    css_code_editor_description2: '<a>{{link}}</a>',
    css_code_editor_description_link_content: 'Aflați mai multe',
    css_code_editor_content_placeholder:
      'Introduceți aici suprascrierile CSS pentru a adapta stilul oricărui element exact cum doriți. Fiți creativi și faceți interfața să iasă în evidență.',
    bring_your_ui_title: 'Bring your UI',
    bring_your_ui_upload_title: 'Încărcați resursele interfeței personalizate',
    bring_your_ui_description:
      'Încărcați un pachet comprimat (.zip) pentru a înlocui interfața gata făcută GetCertus cu propriul cod. <a>Aflați mai multe</a>',
    bring_your_ui_oss_description: 'Personalizați interfața de autentificare cu propriul cod.',
    bring_your_ui_oss_card_description:
      'Încărcarea unei interfețe personalizate nu face încă parte din planurile GetCertus. <a>Vedeți planurile și suplimentele</a>.',
    bring_your_ui_oss_try_cloud: 'Vedeți planurile',
    preview_with_bring_your_ui_description:
      'Resursele interfeței personalizate au fost încărcate și sunt servite acum. Prin urmare, fereastra de previzualizare integrată a fost dezactivată.\nPentru a testa interfața de autentificare personalizată, faceți clic pe butonul "Previzualizare live" pentru a o deschide într-o filă nouă.',
    csp_description:
      'Permiteți expresii sursă suplimentare pentru interfața de autentificare personalizată. Valorile se aplică doar când sunt servite resursele interfeței personalizate.',
    csp_script_src: 'script-src permis',
    csp_script_src_tip:
      'Permiteți expresii sursă HTTPS pentru scripturile încărcate de interfața personalizată, de ex. https://scripts.example.com sau https://*.example.com.',
    csp_connect_src: 'connect-src permis',
    csp_connect_src_tip:
      'Permiteți expresii sursă HTTPS sau WSS pentru cererile de rețea ale interfeței personalizate, de ex. https://api.example.com sau wss://events.example.com.',
    csp_source_invalid_error:
      'Introduceți o expresie sursă validă. Folosiți URL-uri https://; connect-src acceptă și wss://. Cuvintele cheie CSP și punctul și virgula nu sunt acceptate.',
    csp_source_duplicate_error: 'Această expresie sursă este deja în listă.',
  },
  account_center: {
    title: 'CENTRUL CONTULUI',
    description:
      'Oferiți utilizatorilor finali un centru al contului pentru a-și gestiona securitatea contului și informațiile de profil.',
    enable_account_api: 'Activați centrul contului și Account API',
    enable_account_api_description:
      'Activați atât Account API pentru utilizatori, cât și centrul contului gata făcut al GetCertus. Când este dezactivat, ambele funcții sunt indisponibile.',
    field_options: {
      off: 'Dezactivat',
      edit: 'Editare',
      read_only: 'Doar citire',
      enabled: 'Activat',
      disabled: 'Dezactivat',
    },
    sections: {
      account_security: {
        title: 'SECURITATEA CONTULUI',
        description:
          'Gestionați accesul la Account API, astfel încât utilizatorii să își poată vedea sau edita informațiile de identitate și factorii de autentificare după ce se autentifică în aplicație.',
        security_verification: {
          title: 'Verificare de securitate',
          description:
            'Înainte de a modifica setările de securitate, utilizatorii trebuie să își verifice identitatea pentru a obține un ID de verificare valabil 10 minute. Pentru a activa o metodă de verificare (e-mail, telefon, parolă), setați mai jos permisiunea Account API la <strong>Doar citire</strong> (minim) sau <strong>Editare</strong>, ca sistemul să poată detecta dacă utilizatorul o are configurată. <a>Aflați mai multe</a>',
        },
        groups: {
          identifiers: {
            title: 'Identificatori',
          },
          authentication_factors: {
            title: 'Factori de autentificare',
          },
          session_management: {
            title: 'Gestionarea sesiunilor',
          },
        },
      },
      user_profile: {
        title: 'PROFILUL UTILIZATORULUI',
        description:
          'Gestionați accesul la Account API, astfel încât utilizatorii să își poată vedea sau edita datele de profil de bază sau personalizate după ce se autentifică.',
        groups: {
          profile_data: {
            title: 'Date de profil',
          },
        },
      },
      secret_vault: {
        title: 'SECRET VAULT',
        description:
          'Pentru conectorii sociali și pentru companii, stocați în siguranță tokenurile de acces terțe pentru a le apela API-urile (de ex. adăugarea de evenimente în Google Calendar).',
        third_party_token_storage: {
          title: 'Token terț',
          third_party_access_token_retrieval: 'Preluarea tokenului de acces terț',
          third_party_token_tooltip:
            'Pentru a stoca tokenuri, activați opțiunea în setările conectorului social sau pentru companii corespunzător.',
          third_party_token_description:
            'Odată activat Account API, preluarea tokenurilor terțe este activată automat.',
        },
      },
    },
    fields: {
      email: 'Adresă de e-mail',
      phone: 'Număr de telefon',
      social: 'Identități sociale',
      password: 'Parolă',
      mfa: 'Autentificare multifactor',
      mfa_description:
        'Permiteți utilizatorilor să își gestioneze metodele MFA din centrul contului.',
      passkey: 'Passkey',
      username: 'Nume de utilizator',
      name: 'Nume',
      avatar: 'Avatar',
      profile: 'Profil',
      profile_description: 'Controlați accesul la atributele de profil structurate.',
      custom_data: 'Date personalizate',
      custom_data_description:
        'Controlați accesul la datele JSON personalizate stocate pentru utilizator.',
      sessions: 'Sesiuni',
      trusted_devices: 'Dispozitive de încredere',
    },
    profile_fields: {
      title: 'Câmpuri de profil pentru centrul contului gata făcut',
      add_profile_fields: 'Adăugați câmpuri de profil',
      hint: {
        not_in_list: 'Nu este în listă?',
        set_up: 'Configurați',
        go_to: 'acum alte câmpuri de profil.',
      },
      disabled_hint: {
        name: "Pentru a adăuga acest câmp, setați mai întâi permisiunea 'Nume' la 'Editare / Doar citire' în secțiunea Profilul utilizatorului de mai jos.",
        avatar:
          "Pentru a adăuga acest câmp, setați mai întâi permisiunea 'Avatar' la 'Editare / Doar citire' în secțiunea Profilul utilizatorului de mai jos.",
        profile:
          "Pentru a adăuga acest câmp, setați mai întâi permisiunea 'Profil' la 'Editare / Doar citire' în secțiunea Profilul utilizatorului de mai jos.",
        custom_data:
          "Pentru a adăuga acest câmp, setați mai întâi permisiunea 'Date personalizate' la 'Editare / Doar citire' în secțiunea Profilul utilizatorului de mai jos.",
      },
    },
    webauthn_related_origins: 'Origini WebAuthn asociate',
    webauthn_related_origins_description:
      'Adăugați domeniile aplicațiilor front-end care au voie să înregistreze passkey-uri prin Account API.',
    webauthn_related_origins_error: 'Originea trebuie să înceapă cu https:// sau http://',
    delete_account_url: 'Ștergerea contului',
    delete_account_url_description:
      'Furnizați URL-ul propriului endpoint pentru a gestiona ștergerea conturilor cu logică personalizată.',
    prebuilt_ui: {
      title: 'INTEGRAȚI INTERFAȚA GATA FĂCUTĂ',
      description:
        'Integrați rapid centrul contului gata făcut, verificarea de securitate sau un flux de actualizare a profilului cu interfața gata făcută. Combinați domeniul cu ruta pentru a obține URL-ul centrului contului (de ex. https://auth.foo.com/account/email).',
      permission_notice:
        'Pentru a integra aceste fluxuri gata făcute, setați permisiunile Account API asociate la <strong>Editare</strong> în setările de mai jos.',
      account_center_title: 'Integrați centrul contului gata făcut',
      account_center_description:
        'Direcționați utilizatorii către centrul contului pentru a gestiona setări de securitate precum e-mailul, telefonul, numele de utilizator, parola, MFA și conturile conectate.',
      flows_title: 'Integrați fluxurile gata făcute pentru setările de securitate',
      single_task_flows_title: 'Integrați un flux gata făcut pentru o singură sarcină',
      flows_description:
        'Combinați domeniul cu ruta pentru a obține URL-ul setării contului (de ex. https://auth.foo.com/account/email). Opțional, adăugați `redirect=` pentru a readuce utilizatorii în aplicație după o actualizare reușită, `show_success=true` pentru a păstra vizibilă pagina de succes, `ui_locales=` pentru a suprascrie limba implicită sau `identifier=` pentru a precompleta câmpul identificatorului.',
      single_task_flows_description:
        'Direcționați utilizatorii direct către un anumit flux (de ex. asocierea e-mailului). Opțional, adăugați `redirect=` pentru a readuce utilizatorii în aplicație după o actualizare reușită, `show_success=true` pentru a păstra vizibilă pagina de succes, `ui_locales=` pentru a suprascrie limba implicită sau `identifier=` pentru a precompleta câmpul identificatorului.',
      tooltips: {
        email: 'Actualizați adresa de e-mail principală',
        phone: 'Actualizați numărul de telefon principal',
        username: 'Actualizați numele de utilizator',
        password: 'Setați o parolă nouă',
        social: 'Asociați un cont social pentru autentificare',
        social_change: 'Treceți la alt cont social asociat',
        social_remove: 'Eliminați un cont social asociat',
        authenticator_app:
          'Configurați o nouă aplicație de autentificare pentru autentificarea multifactor',
        authenticator_app_replace: 'Înlocuiți aplicația de autentificare existentă cu una nouă',
        passkey_add: 'Înregistrați un passkey nou',
        passkey_manage: 'Gestionați passkey-urile existente sau adăugați altele noi',
        backup_codes_generate: 'Generați un set nou de 10 coduri de rezervă',
        backup_codes_manage: 'Vedeți codurile de rezervă disponibile sau generați altele noi',
        account_center:
          'Accesați centrul contului pentru a gestiona setări de securitate precum e-mailul, telefonul, numele de utilizator, parola, MFA și conturile conectate',
        profile: 'Locul central pentru gestionarea informațiilor personale (de ex. nume, avatar)',
        sessions: 'Vedeți și gestionați sesiunile active pe toate dispozitivele',
      },
      customize_note: 'Nu doriți experiența gata făcută? Puteți',
      customize_link: 'personaliza complet fluxurile cu Account API.',
    },
    custom_css: {
      title: 'CSS PERSONALIZAT',
      description: 'Personalizați aspectul centrului contului cu CSS propriu.',
    },
  },
  sign_up_and_sign_in: {
    identifiers_email: 'Adresă de e-mail',
    identifiers_phone: 'Număr de telefon',
    identifiers_username: 'Nume de utilizator',
    identifiers_email_or_sms: 'Adresă de e-mail sau număr de telefon',
    identifiers_none: 'Nu se aplică',
    and: 'și',
    or: 'sau',
    sign_up: {
      title: 'ÎNREGISTRARE',
      sign_up_identifier: 'Identificatori de înregistrare',
      identifier_description:
        'Toți identificatorii selectați sunt obligatorii la crearea unui cont nou.',
      sign_up_authentication: 'Setarea autentificării la înregistrare',
      verification_tip:
        'Utilizatorii trebuie să verifice e-mailul sau numărul de telefon configurat introducând un cod de verificare la înregistrare.',
      authentication_description:
        'Toate acțiunile selectate vor fi obligatorii pentru finalizarea fluxului.',
      set_a_password_option: 'Creați-vă parola',
      verify_at_sign_up_option: 'Verificare la înregistrare',
      social_only_creation_description:
        '(Se aplică doar conturilor create exclusiv prin autentificare socială)',
      collect_user_profile: 'Colectarea profilului utilizatorului',
      add_profile_fields: 'Adăugați câmpuri de profil',
      profile_fields_hint: {
        not_in_list: 'Nu este în listă?',
        set_up: 'Configurați',
        go_to: 'acum alte câmpuri de profil.',
      },
    },
    sign_in: {
      title: 'AUTENTIFICARE',
      sign_in_identifier_and_auth: 'Setări de identificator și autentificare pentru conectare',
      description: 'Utilizatorii se pot autentifica folosind oricare dintre opțiunile disponibile.',
      add_sign_in_method: 'Adăugați metodă de autentificare',
      add_sign_up_method: 'Adăugați metodă de înregistrare',
      password_auth: 'Parolă',
      verification_code_auth: 'Cod de verificare',
      auth_swap_tip: 'Inversați opțiunile de mai jos pentru a stabili care apare prima în flux.',
      require_auth_factor: 'Trebuie să selectați cel puțin un factor de autentificare.',
      forgot_password: 'Parolă uitată',
      forgot_password_description:
        'Utilizatorii își pot reseta parola folosind orice metodă de verificare disponibilă.',
      add_verification_method: 'Adăugați metodă de verificare',
      email_verification_code: 'Cod de verificare prin e-mail',
      phone_verification_code: 'Cod de verificare prin telefon',
    },
    social_sign_in: {
      title: 'AUTENTIFICARE SOCIALĂ',
      social_sign_in: 'Autentificare socială',
      description:
        'În funcție de identificatorul obligatoriu configurat, utilizatorului i se poate cere un identificator la înregistrarea prin conector social.',
      add_social_connector: 'Adăugați conector social',
      set_up_hint: {
        not_in_list: 'Nu este în listă?',
        set_up_more: 'Configurați',
        go_to: 'acum alți conectori sociali.',
      },
      settings_title: 'Experiența de autentificare socială',
      automatic_account_linking: 'Asociați automat conturile cu același identificator',
      automatic_account_linking_tip:
        'Când este activat, dacă un utilizator se autentifică cu o identitate socială nouă și există exact un cont cu același identificator (de ex. o adresă de e-mail), GetCertus va asocia automat identitatea socială cu acel cont. Utilizatorul nu va fi întrebat dacă dorește asocierea conturilor.',
      required_sign_up_identifiers:
        'Solicitați utilizatorilor identificatorii de înregistrare lipsă',
      required_sign_up_identifiers_tip:
        'Când este activat, utilizatorii care se autentifică prin furnizori sociali trebuie să completeze identificatorii obligatorii lipsă (precum e-mailul) înainte de finalizarea autentificării. \n\nDacă este dezactivat, utilizatorii pot continua fără a furniza identificatorii lipsă, chiar dacă contul social nu i-a sincronizat.',
    },
    passkey_sign_in: {
      title: 'AUTENTIFICARE CU PASSKEY',
      passkey_sign_in: 'Autentificare cu passkey',
      enable_passkey_sign_in_description:
        'Permiteți utilizatorilor să acceseze rapid și sigur aplicația prin passkey (WebAuthn), folosind date biometrice, cheie de securitate etc.',
      prompts: 'Solicitări passkey',
      show_passkey_button: 'Afișați butonul „Continuați cu passkey” pe pagina de autentificare',
      show_passkey_button_tip:
        'Fără butonul „Continuați cu passkey”, fluxul de autentificare începe cu identificatorul și afișează opțiunile de parolă și passkey la pasul următor.',
      allow_autofill:
        'Permiteți sugerarea și completarea automată a passkey-urilor înregistrate în câmpurile de identificator',
    },
    tip: {
      set_a_password: 'O parolă unică pentru numele de utilizator este obligatorie.',
      verify_at_sign_up:
        'Momentan acceptăm doar e-mail și telefon verificate. Fără validare, baza de utilizatori poate conține multe adrese de e-mail sau numere de telefon de calitate slabă.',
      password_auth:
        'Este necesar, deoarece ați activat opțiunea de a seta o parolă la înregistrare.',
      verification_code_auth:
        'Este necesar, deoarece ați activat doar opțiunea de a furniza un cod de verificare la înregistrare. Puteți debifa caseta când setarea parolei este permisă la înregistrare.',
      email_mfa_enabled:
        'Codul de verificare prin e-mail este deja activat pentru MFA, deci din motive de securitate nu poate fi folosit și ca metodă principală de autentificare.',
      phone_mfa_enabled:
        'Codul de verificare prin telefon este deja activat pentru MFA, deci din motive de securitate nu poate fi folosit și ca metodă principală de autentificare.',
      delete_sign_in_method:
        'Este necesar, deoarece ați selectat {{identifier}} ca identificator obligatoriu.',
      password_disabled_notification:
        'Opțiunea "Creați-vă parola" este dezactivată pentru înregistrarea cu nume de utilizator, ceea ce poate împiedica autentificarea. Confirmați pentru a salva oricum.',
    },
    advanced_options: {
      title: 'OPȚIUNI AVANSATE',
      enable_single_sign_on: 'Activați autentificarea unică (SSO) pentru companii',
      enable_single_sign_on_description:
        'Permiteți utilizatorilor să se autentifice în aplicație prin autentificare unică, cu identitățile companiei.',
      single_sign_on_hint: {
        prefix: 'Accesați secțiunea ',
        link: '"SSO pentru companii"',
        suffix: 'pentru a configura mai mulți conectori pentru companii.',
      },
      enable_user_registration: 'Activați înregistrarea utilizatorilor',
      enable_user_registration_description:
        'Permiteți sau interziceți înregistrarea utilizatorilor. Odată dezactivată, utilizatorii pot fi încă adăugați în consola de administrare, dar nu își mai pot crea conturi prin interfața de autentificare.',
      unknown_session_redirect_url: 'URL de redirecționare pentru sesiune necunoscută',
      unknown_session_redirect_url_tip:
        'Uneori GetCertus nu recunoaște sesiunea unui utilizator pe pagina de autentificare, de exemplu când sesiunea a expirat sau utilizatorul a salvat ori a distribuit linkul de autentificare. Implicit apare o eroare 404 „sesiune necunoscută”. Pentru o experiență mai bună, setați un URL de rezervă care readuce utilizatorii în aplicație și repornește autentificarea.',
    },
    username_policy: {
      title: 'Politica numelor de utilizator',
      description:
        'Personalizați cerințele pentru numele de utilizator, inclusiv lungimea, caracterele permise și diferențierea majusculelor.',
      manage_button: 'Gestionați',
      modal_title: 'Politica numelor de utilizator',
      modal_description:
        'Personalizați cerințele pentru numele de utilizator ale utilizatorilor finali.',
      length: {
        title: 'Lungimea numelui de utilizator',
        minimum: 'Minim',
        maximum: 'Maxim',
        min_greater_than_max: 'Lungimea minimă nu poate fi mai mare decât lungimea maximă.',
      },
      allowed_chars: {
        title: 'Tipuri de caractere permise',
        uppercase: 'Majuscule (A-Z)',
        lowercase: 'Minuscule (a-z)',
        numbers: 'Cifre (0-9)',
        underscore: 'Liniuțe de subliniere (_)',
        no_valid_leading_char:
          'Doar cifrele nu sunt permise. Activați cel puțin majusculele, minusculele sau liniuțele de subliniere.',
        no_char_selected: 'Selectați cel puțin un tip de caractere.',
      },
      case_sensitive: {
        title: 'Nume de utilizator sensibile la majuscule',
        description:
          'Tratați majusculele și minusculele ca diferite. ‘user123’ și ‘User123’ vor fi nume de utilizator diferite.',
      },
      case_conflicts: {
        title: 'Au fost detectate conflicte între numele de utilizator existente',
        description:
          'Unele nume de utilizator ar intra în conflict dacă sensibilitatea la majuscule este dezactivată. Rezolvați cele {{count}} grupuri în conflict de mai jos înainte de salvare.',
        sample_title: 'Nume de utilizator în conflict',
      },
    },
  },
  content: {
    terms_of_use: {
      title: 'TERMENI',
      description:
        'Adăugați termenii și politica de confidențialitate pentru a respecta cerințele de conformitate.',
      terms_of_use: 'URL termeni de utilizare',
      terms_of_use_placeholder: 'https://your.terms.of.use/',
      privacy_policy: 'URL politică de confidențialitate',
      privacy_policy_placeholder: 'https://your.privacy.policy/',
      agree_to_terms: 'Acceptarea termenilor',
      agree_policies: {
        automatic: 'Acceptare automată a termenilor la continuare',
        manual_registration_only: 'Bifă de acceptare doar la înregistrare',
        manual: 'Bifă de acceptare atât la înregistrare, cât și la autentificare',
      },
    },
    languages: {
      title: 'LIMBI',
      enable_auto_detect: 'Activați detectarea automată',
      description:
        'Software-ul detectează setarea de limbă a utilizatorului și trece la limba locală. Puteți adăuga limbi noi traducând interfața din engleză.',
      manage_language: 'Gestionați limbile',
      default_language: 'Limba implicită',
      default_language_description_auto:
        'Limba implicită este folosită când limba detectată a utilizatorului nu se află în biblioteca de limbi actuală.',
      default_language_description_fixed:
        'Când detectarea automată este dezactivată, limba implicită este singura limbă afișată de software. Activați detectarea automată pentru mai multe limbi.',
    },
    support: {
      title: 'ASISTENȚĂ',
      subtitle: 'Afișați canalele de asistență pe paginile de eroare, pentru ajutor rapid.',
      support_email: 'E-mail de asistență',
      support_email_placeholder: 'support@email.com',
      support_website: 'Site de asistență',
      support_website_placeholder: 'https://your.website/support',
    },
    manage_language: {
      title: 'Gestionați limbile',
      subtitle:
        'Localizați experiența produsului adăugând limbi și traduceri. Contribuția dvs. poate fi setată ca limbă implicită.',
      add_language: 'Adăugați limbă',
      logto_provided: 'Oferit de GetCertus',
      key: 'Cheie',
      logto_source_values: 'Valori sursă GetCertus',
      custom_values: 'Valori personalizate',
      clear_all_tip: 'Ștergeți toate valorile',
      unsaved_description: 'Modificările nu vor fi salvate dacă părăsiți pagina fără să salvați.',
      deletion_tip: 'Ștergeți limba',
      deletion_title: 'Doriți să ștergeți limba adăugată?',
      deletion_description: 'După ștergere, utilizatorii nu vor mai putea folosi acea limbă.',
      default_language_deletion_title: 'Limba implicită nu poate fi ștearsă.',
      default_language_deletion_description:
        '{{language}} este setată ca limbă implicită și nu poate fi ștearsă. ',
    },
  },
  setup_warning: {
    no_connector_sms:
      'Nu a fost configurat încă niciun conector SMS. Până la finalizarea configurării, utilizatorii nu se vor putea autentifica prin această metodă. <a>{{link}}</a> în "Conectori"',
    no_connector_email:
      'Nu a fost configurat încă niciun conector de e-mail. Până la finalizarea configurării, utilizatorii nu se vor putea autentifica prin această metodă. <a>{{link}}</a> în "Conectori"',
    no_connector_social:
      'Nu ați configurat încă niciun conector social. Adăugați mai întâi conectori pentru a folosi metode de autentificare socială. <a>{{link}}</a> în "Conectori".',
    no_connector_email_account_center:
      'Nu a fost configurat încă niciun conector de e-mail. Configurați-l în <a>"Conectori e-mail și SMS"</a>.',
    no_connector_sms_account_center:
      'Nu a fost configurat încă niciun conector SMS. Configurați-l în <a>"Conectori e-mail și SMS"</a>.',
    no_connector_social_account_center:
      'Nu a fost configurat încă niciun conector social. Configurați-l în <a>"Conectori sociali"</a>.',
    no_mfa_factor: 'Nu a fost configurat încă niciun factor MFA. Configurați-l în <a>{{link}}</a>.',
    setup_link: 'Configurați',
  },
  save_alert: {
    description:
      'Implementați noi proceduri de autentificare și înregistrare. Toți utilizatorii pot fi afectați de noua configurare. Sigur doriți să aplicați modificarea?',
    before: 'Înainte',
    after: 'După',
    sign_up: 'Înregistrare',
    sign_in: 'Autentificare',
    social: 'Social',
    forgot_password_migration_notice:
      'Am actualizat verificarea pentru parola uitată ca să accepte metode personalizate. Anterior, aceasta era stabilită automat de conectorii de e-mail și SMS. Faceți clic pe <strong>Confirmați</strong> pentru a finaliza actualizarea.',
  },
  preview: {
    title: 'Previzualizarea autentificării',
    live_preview: 'Previzualizare live',
    live_preview_tip: 'Salvați pentru a previzualiza modificările',
    native: 'Nativ',
    desktop_web: 'Web desktop',
    mobile_web: 'Web mobil',
    desktop: 'Desktop',
    mobile: 'Mobil',
  },
  custom_profile_fields: {
    table: {
      add_button: 'Adăugați câmp de profil',
      title: {
        field_label: 'Eticheta câmpului',
        type: 'Tip',
        user_data_key: 'Cheia datelor utilizatorului',
      },
      placeholder: {
        title: 'Colectarea profilului utilizatorului',
        description:
          'Personalizați câmpurile pentru a colecta mai multe informații de profil la înregistrare.',
      },
    },
    type: {
      Text: 'Text',
      Number: 'Număr',
      Date: 'Dată',
      Checkbox: 'Casetă de bifat (boolean)',
      Select: 'Listă derulantă (o singură opțiune)',
      Url: 'URL',
      Regex: 'Expresie regulată',
      Address: 'Adresă (compusă)',
      Fullname: 'Nume complet (compus)',
    },
    modal: {
      title: 'Adăugați câmp de profil',
      subtitle:
        'Personalizați câmpurile pentru a colecta mai multe informații de profil la înregistrare.',
      built_in_properties: 'Date de bază ale utilizatorului',
      custom_properties: 'Date personalizate ale utilizatorului',
      custom_data_field_name: 'Cheia datelor utilizatorului',
      custom_data_field_input_placeholder:
        'Introduceți cheia datelor utilizatorului, de ex. `myFavoriteFieldName`',
      custom_field: {
        title: 'Date personalizate',
        description:
          'Proprietăți suplimentare ale utilizatorului pe care le puteți defini pentru cerințele specifice ale aplicației.',
      },
      type_required: 'Selectați un tip de proprietate',
      create_button: 'Creați câmp de profil',
      avatar: {
        description:
          'Permiteți utilizatorilor să își încarce fotografia de profil la înregistrare. URL-ul imaginii încărcate este salvat ca avatar.',
        storage_not_configured:
          'Încărcarea avatarului necesită un furnizor de stocare configurat. Configurați stocarea înainte de a adăuga acest câmp.',
      },
    },
    details: {
      page_title: 'Detalii câmp de profil',
      back_to_sie: 'Înapoi la experiența de autentificare',
      enter_field_name: 'Introduceți numele câmpului de profil',
      delete_description:
        'Această acțiune nu poate fi anulată. Sigur doriți să ștergeți acest câmp de profil?',
      field_deleted: 'Câmpul de profil {{name}} a fost șters.',
      key: 'Cheia datelor utilizatorului',
      field_name: 'Numele câmpului',
      field_type: 'Tipul câmpului',
      settings: 'Setări',
      settings_description:
        'Personalizați câmpurile pentru a colecta mai multe informații de profil la înregistrare.',
      address_format: 'Format adresă',
      single_line_address: 'Adresă pe un singur rând',
      multi_line_address:
        'Adresă pe mai multe rânduri (de ex. stradă, oraș, județ, cod poștal, țară)',
      components: 'Componente',
      components_tip: 'Selectați componentele care formează câmpul compus.',
      label: 'Eticheta câmpului',
      label_placeholder: 'Etichetă',
      label_tip:
        'Aveți nevoie de localizare? Adăugați limbi în <a>Experiența de autentificare > Conținut</a>',
      label_tooltip:
        'Etichetă plutitoare care arată la ce servește câmpul. Apare în interiorul câmpului și urcă deasupra lui când câmpul este activ sau are o valoare.',
      placeholder: 'Text substituent al câmpului',
      placeholder_placeholder: 'Text substituent',
      placeholder_tooltip:
        'Exemplu sau indiciu de format afișat în câmp. De obicei apare după ce eticheta urcă și trebuie să fie scurt (de ex. ZZ.LL.AAAA).',
      description: 'Descrierea câmpului',
      description_placeholder: 'Descriere',
      description_tooltip:
        'Text de ajutor afișat sub câmpul de text. Folosiți-l pentru instrucțiuni mai lungi sau note de accesibilitate.',
      options: 'Opțiuni',
      options_tip:
        'Introduceți fiecare opțiune pe un rând nou. Folosiți valoare:etichetă (de ex. red:Roșu). Puteți introduce și doar valoarea; fără etichetă, valoarea este afișată ca etichetă.',
      options_placeholder: 'value1:label1\nvalue2:label2\nvalue3:label3',
      regex: 'Expresie regulată',
      regex_tip: 'Definiți o expresie regulată pentru validarea datelor introduse.',
      regex_placeholder: '^[a-zA-Z0-9]+$',
      date_format: 'Format dată',
      date_format_us: 'MM/dd/yyyy (de ex. Statele Unite)',
      date_format_uk: 'dd/MM/yyyy (de ex. Regatul Unit și Europa)',
      date_format_iso: 'yyyy-MM-dd (standard internațional)',
      custom_date_format: 'Format de dată personalizat',
      custom_date_format_placeholder:
        'Introduceți formatul de dată personalizat, de ex. "MM-dd-yyyy"',
      custom_date_format_tip:
        'Consultați documentația <a>date-fns</a> pentru simbolurile de formatare valide.',
      input_length: 'Lungimea datelor introduse',
      value_range: 'Interval de valori',
      min: 'Minim',
      max: 'Maxim',
      default_value: 'Valoare implicită',
      checkbox_checked: 'Bifat (adevărat)',
      checkbox_unchecked: 'Nebifat (fals)',
      required: 'Obligatoriu',
      required_description:
        'Când este activat, utilizatorii trebuie să completeze acest câmp. Altfel este opțional.',
      avatar_upload_description:
        'Utilizatorii finali își încarcă avatarul la înregistrare. Valoarea stocată este URL-ul imaginii încărcate.',
    },
  },
};

export default Object.freeze(sign_in_exp);
