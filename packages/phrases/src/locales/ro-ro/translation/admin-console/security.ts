/* GetCertus addition (MPL-2.0, see GETCERTUS.md): admin console phrases. */
const security = {
  page_title: 'Securitate',
  title: 'Securitate',
  subtitle: 'Configurați protecție avansată împotriva atacurilor sofisticate.',
  tabs: {
    captcha: 'CAPTCHA',
    password_policy: 'Politica de parole',
    blocklist: 'Listă de blocare',
    general: 'General',
  },
  bot_protection: {
    title: 'Protecție împotriva boților',
    description:
      'Activați CAPTCHA la înregistrare, autentificare și recuperarea parolei pentru a bloca amenințările automate.',
    captcha: {
      title: 'CAPTCHA',
      placeholder: 'Selectați un furnizor CAPTCHA și configurați integrarea.',
      add: 'Adăugați CAPTCHA',
    },
    settings: 'Setări',
    enable_captcha: 'Activați CAPTCHA',
    enable_captcha_description:
      'Activați verificarea CAPTCHA pentru înregistrare, autentificare și recuperarea parolei.',
    custom_ui_captcha_notice:
      'Folosiți Bring your UI. Este necesară o configurare suplimentară pentru a activa CAPTCHA în interfața personalizată. <a>Vedeți ghidul</a>.',
  },
  create_captcha: {
    setup_captcha: 'Configurați CAPTCHA',
  },
  captcha_providers: {
    recaptcha_enterprise: {
      name: 'reCAPTCHA Enterprise',
      description:
        'Soluția CAPTCHA de nivel enterprise de la Google, cu detectare avansată a amenințărilor și analize de securitate detaliate care vă protejează site-ul de fraude.',
    },
    turnstile: {
      name: 'Cloudflare Turnstile',
      description:
        'Alternativa CAPTCHA inteligentă de la Cloudflare, care protejează discret împotriva boților și asigură o experiență fluidă, fără puzzle-uri vizuale.',
    },
    cap: {
      name: 'Cap',
      description:
        'CAPTCHA proof-of-work open-source, găzduit de dvs., fără puzzle-uri vizuale sau servicii terțe; ideal pentru regiuni în care alte servicii CAPTCHA nu sunt accesibile.',
    },
  },
  captcha_details: {
    back_to_security: 'Înapoi la securitate',
    page_title: 'Detalii CAPTCHA',
    check_readme: 'Consultați README',
    options_change_captcha: 'Schimbați furnizorul CAPTCHA',
    connection: 'Conexiune',
    description: 'Configurați conexiunile CAPTCHA.',
    site_key: 'Cheia site-ului',
    secret_key: 'Cheie secretă',
    project_id: 'ID proiect',
    domain: 'Domeniu (opțional)',
    domain_placeholder: 'www.google.com (implicit) sau recaptcha.net',
    recaptcha_key_id: 'ID cheie reCAPTCHA',
    recaptcha_api_key: 'Cheia API a proiectului',
    cap_endpoint: 'Endpoint Cap',
    cap_endpoint_placeholder: 'https://cap.example.com',
    cap_endpoint_http_notice:
      'Acest endpoint folosește HTTP, potrivit doar pentru dezvoltare locală. Browserele blochează cererile HTTP dintr-o pagină de autentificare HTTPS, iar cheia secretă ar fi trimisă necriptat. Folosiți HTTPS în producție.',
    deletion_description: 'Sigur doriți să ștergeți acest furnizor CAPTCHA?',
    captcha_deleted: 'Furnizorul CAPTCHA a fost șters',
    setup_captcha: 'Configurați CAPTCHA',
    mode: 'Mod de verificare',
    mode_invisible: 'Invizibil',
    mode_checkbox: 'Casetă de bifat',
    mode_notice:
      'Modul de verificare este definit în setările cheii reCAPTCHA din Google Cloud Console. Schimbarea modului aici necesită un tip de cheie corespunzător.',
    score_threshold: 'Prag de scor',
    score_threshold_description:
      'Scorurile sub prag sunt respinse. 0.0 permite tot, 1.0 permite doar scoruri perfecte. Implicit 0.5.',
    score_threshold_error: 'Pragul de scor trebuie să fie între 0 și 1.',
  },
  password_policy: {
    password_requirements: 'Cerințe pentru parolă',
    password_requirements_description:
      'Întăriți cerințele pentru parolă pentru a vă apăra de credential stuffing și de atacurile asupra parolelor slabe. ',
    minimum_length: 'Lungime minimă',
    minimum_length_description: 'NIST recomandă <a>cel puțin 8 caractere</a> pentru produsele web.',
    minimum_length_error: 'Lungimea minimă trebuie să fie între {{min}} și {{max}} (inclusiv).',
    minimum_required_char_types: 'Număr minim de tipuri de caractere',
    minimum_required_char_types_description:
      'Tipuri de caractere: majuscule (A-Z), minuscule (a-z), cifre (0-9) și simboluri speciale ({{symbols}}).',
    password_rejection: 'Respingerea parolelor',
    compromised_passwords: 'Respingeți parolele compromise',
    breached_passwords: 'Parole scurse',
    breached_passwords_description:
      'Respingeți parolele găsite anterior în baze de date cu scurgeri.',
    restricted_phrases: 'Restricționați expresiile nesigure',
    restricted_phrases_tooltip:
      'Parola ar trebui să evite aceste expresii, cu excepția cazului în care le combinați cu 3 sau mai multe caractere suplimentare.',
    repetitive_or_sequential_characters: 'Caractere repetitive sau secvențiale',
    repetitive_or_sequential_characters_description: 'De ex. "AAAA", "1234" și "abcd".',
    user_information: 'Informații despre utilizator',
    user_information_description:
      'De ex. adresă de e-mail, număr de telefon, nume de utilizator etc.',
    custom_words: 'Cuvinte personalizate',
    custom_words_description:
      'Adăugați cuvinte specifice contextului, fără a ține cont de majuscule, câte unul pe rând.',
    custom_words_placeholder: 'Numele serviciului, numele companiei etc.',
    password_expiration: 'Expirarea parolei',
    password_expiration_description:
      'Solicitați utilizatorilor să își reseteze parola după un anumit număr de zile. Utilizatorii care se autentifică prin SSO sau passkey nu sunt afectați.',
    enable_password_expiration: 'Activați expirarea parolei',
    enable_password_expiration_description:
      'Solicitați utilizatorilor să își reseteze periodic parola. Pentru utilizatorii existenți fără o dată înregistrată a schimbării parolei, calculul pornește de la data activării politicii.',
    enable_password_expiration_tip:
      'Expirarea parolei poate fi activată doar după ce configurați cel puțin o metodă de recuperare a parolei cu un conector valid în experiența de autentificare.',
    expiration_period: 'Perioada de valabilitate a parolei (zile)',
    expiration_period_description:
      'Numărul de zile în care o parolă rămâne valabilă înainte de a expira.',
    expiration_period_error:
      'Perioada de valabilitate a parolei trebuie să fie între {{min}} și {{max}} zile.',
    password_expiration_recovery_reminder:
      'Unii utilizatori pot să nu aibă o adresă de e-mail sau un număr de telefon pentru a primi un cod de recuperare, deci nu vor putea reseta o parolă expirată. Solicitați e-mail sau număr de telefon la înregistrare, ca fiecare utilizator să își poată recupera parola.',
  },
  verification_code_policy: {
    card_title: 'Cod de verificare',
    card_description:
      'Configurați durata de expirare și numărul maxim de încercări pentru codurile de verificare folosite la autentificare, înregistrare și resetarea parolei.',
    enable: {
      title: 'Personalizați setările codului de verificare',
      description:
        'Permiteți personalizarea duratei de expirare și a numărului maxim de încercări pentru codurile de verificare.',
    },
    expiration_duration: {
      title: 'Durata de expirare (secunde)',
      description: 'Durata în secunde în care un cod de verificare rămâne valabil după trimitere.',
      error_message: 'Durata de expirare trebuie să fie între 60 și 3600 de secunde.',
    },
    max_retry_attempts: {
      title: 'Număr maxim de încercări',
      description:
        'Numărul maxim de încercări de verificare eșuate permise înainte ca codul să fie invalidat.',
      error_message: 'Numărul maxim de încercări trebuie să fie între 1 și 100.',
    },
  },
  sentinel_policy: {
    card_title: 'Blocarea identificatorului',
    card_description:
      'Blocarea este disponibilă tuturor utilizatorilor cu setările implicite, dar o puteți personaliza pentru mai mult control.\n\nBlocați temporar un identificator după mai multe încercări de autentificare eșuate (de ex. parolă sau cod de verificare greșite consecutiv) pentru a preveni accesul prin forță brută.',
    enable_sentinel_policy: {
      title: 'Personalizați blocarea',
      description:
        'Permiteți personalizarea numărului maxim de încercări de autentificare eșuate înainte de blocare, a duratei blocării și a deblocării manuale imediate.',
    },
    max_attempts: {
      title: 'Număr maxim de încercări eșuate',
      description:
        'Blocați temporar un identificator după atingerea numărului maxim de încercări de autentificare eșuate într-o oră.',
      error_message: 'Numărul maxim de încercări eșuate trebuie să fie mai mare decât 0.',
    },
    lockout_duration: {
      title: 'Durata blocării (minute)',
      description:
        'Blocați autentificările pentru o perioadă după depășirea limitei de încercări eșuate.',
      error_message: 'Durata blocării trebuie să fie de cel puțin 1 minut.',
    },
    manual_unlock: {
      title: 'Deblocare manuală',
      description:
        'Deblocați imediat utilizatorii confirmându-le identitatea și introducându-le identificatorul.',
      unblock_by_identifiers: 'Deblocați după identificator',
      modal_description_1:
        'Un identificator a fost blocat temporar din cauza mai multor încercări eșuate de autentificare sau înregistrare. Pentru siguranță, accesul se va restabili automat după expirarea blocării.',
      modal_description_2:
        ' Deblocați manual doar dacă ați confirmat identitatea utilizatorului și v-ați asigurat că nu au existat încercări de acces neautorizat.',
      placeholder:
        'Introduceți identificatori (adresă de e-mail / număr de telefon / nume de utilizator)',
      confirm_button_text: 'Deblocați acum',
      success_toast: 'Deblocat cu succes',
      duplicate_identifier_error: 'Identificatorul a fost deja adăugat',
      empty_identifier_error: 'Introduceți cel puțin un identificator',
    },
  },
  blocklist: {
    card_title: 'Listă de blocare e-mail',
    card_description:
      'Preluați controlul asupra bazei de utilizatori blocând adresele de e-mail riscante sau nedorite.',
    custom_email_allowlist: {
      title: 'Permiteți adrese de e-mail personalizate',
      description:
        'Adăugați reguli pentru a permite doar anumite domenii de e-mail, adrese de e-mail sau modele cu metacaractere pentru înregistrările noi și adresele asociate recent. Exemple: bar@example.com, @example.com, foo*@example.com, *@example.com. Domeniile gmail.com și googlemail.com sunt tratate ca echivalente, iar punctele din partea locală sunt ignorate, deci foo.bar@gmail.com corespunde cu foobar@googlemail.com.',
      placeholder: 'Introduceți o adresă de e-mail, un domeniu sau un model cu metacaractere',
      duplicate_error:
        'Adresa de e-mail, domeniul sau modelul cu metacaractere a fost deja adăugat',
      invalid_format_error:
        'Trebuie să fie o adresă de e-mail validă (bar@example.com), un domeniu (@example.com) sau un model cu metacaractere (foo*@example.com, *@example.com)',
      warnings: {
        identical_entries:
          'Unele intrări din lista de permisiuni există și în regulile de blocare. E-mailurile corespunzătoare pot fi în continuare blocate.',
        blocked_exact_email:
          'Unele e-mailuri exacte din lista de permisiuni corespund unei reguli de blocare. E-mailurile corespunzătoare pot fi în continuare blocate.',
        blocked_subaddressing:
          'Unele intrări din lista de permisiuni conțin semnul plus (+), dar subadresarea e-mailurilor este blocată.',
        effectively_unusable:
          'Pe baza acestor verificări, lista de permisiuni actuală s-ar putea să nu lase să treacă niciun e-mail nou.',
      },
    },
    disposable_email: {
      title: 'Blocați adresele de e-mail de unică folosință',
      description:
        'Activați pentru a respinge înregistrările cu adrese de e-mail de unică folosință, ceea ce poate preveni spamul și îmbunătăți calitatea utilizatorilor.',
    },
    email_subaddressing: {
      title: 'Blocați subadresarea e-mailurilor',
      description:
        'Activați pentru a respinge înregistrările cu subadrese de e-mail care conțin semnul plus (+) și caractere suplimentare (de ex. user+alias@foo.com).',
    },
    custom_email_address: {
      title: 'Blocați adrese de e-mail personalizate',
      description:
        'Adăugați reguli pentru a bloca anumite domenii de e-mail, adrese de e-mail sau modele cu metacaractere la înregistrare sau asociere prin interfață. Exemple: bar@example.com, @example.com, foo*@example.com, *@example.com. Domeniile gmail.com și googlemail.com sunt tratate ca echivalente, iar punctele din partea locală sunt ignorate, deci foo.bar@gmail.com corespunde cu foobar@googlemail.com.',
      placeholder: 'Introduceți o adresă de e-mail, un domeniu sau un model cu metacaractere',
      duplicate_error:
        'Adresa de e-mail, domeniul sau modelul cu metacaractere a fost deja adăugat',
      invalid_format_error:
        'Trebuie să fie o adresă de e-mail validă (bar@example.com), un domeniu (@example.com) sau un model cu metacaractere (foo*@example.com, *@example.com)',
    },
  },
};

export default Object.freeze(security);
