/* GetCertus addition (MPL-2.0, see GETCERTUS.md): sign-in experience phrases. */
const mfa = {
  totp: 'Cod unic din aplicația de autentificare',
  webauthn: 'Cheie de acces',
  backup_code: 'Cod de rezervă',
  email_verification_code: 'Cod de verificare prin e-mail',
  phone_verification_code: 'Cod de verificare prin SMS',
  link_totp_description: 'De ex. Google Authenticator',
  link_webauthn_description: 'Asociază dispozitivul sau cheia USB',
  link_backup_code_description: 'Generează un cod de rezervă',
  link_email_verification_code_description: 'Asociază adresa de e-mail',
  link_email_2fa_description: 'Asociază adresa de e-mail pentru verificarea în doi pași',
  link_phone_verification_code_description: 'Asociază numărul de telefon',
  link_phone_2fa_description: 'Asociază numărul de telefon pentru verificarea în doi pași',
  verify_totp_description: 'Introdu codul unic din aplicație',
  verify_webauthn_description: 'Verifică dispozitivul sau cheia USB',
  verify_backup_code_description: 'Lipește codul de rezervă salvat',
  verify_email_verification_code_description: 'Introdu codul trimis pe e-mail',
  verify_phone_verification_code_description: 'Introdu codul trimis pe telefon',
  send_to_email: 'Trimite la {{identifier}}',
  send_to_phone: 'Trimite la {{identifier}}',
  onboarding: 'Activează verificarea în doi pași',
  onboarding_description:
    'Protejează-ți contul cu verificarea în doi pași. Alege una sau mai multe metode: cheie de acces, aplicație de autentificare (cod unic), cod de verificare prin SMS sau coduri de rezervă.',
  enable_mfa: 'Activează verificarea în doi pași',
  add_mfa_factors: 'Adaugă verificarea în doi pași',
  add_mfa_description:
    'Verificarea în doi pași este activată. Alege a doua metodă de verificare pentru o conectare sigură.',
  add_another_mfa_factor: 'Adaugă încă o verificare în doi pași',
  add_another_mfa_description: 'Alege altă modalitate de a-ți verifica identitatea la conectare.',
  verify_mfa_factors: 'Verificare în doi pași',
  verify_mfa_description:
    'Verificarea în doi pași este activată pentru acest cont. Alege a doua modalitate de a-ți verifica identitatea.',
  add_authenticator_app: 'Adaugă aplicația de autentificare',
  replace_authenticator_app: 'Înlocuiește aplicația de autentificare',
  step: 'Pasul {{step, number}}: {{content}}',
  scan_qr_code: 'Scanează acest cod QR',
  scan_qr_code_description:
    'Scanează codul QR de mai jos cu aplicația de autentificare, de exemplu Google Authenticator, Duo Mobile sau Authy.',
  qr_code_not_available: 'Nu poți scana codul QR?',
  copy_and_paste_key: 'Copiază și lipește cheia',
  copy_and_paste_key_description:
    'Copiază cheia de mai jos și lipește-o în aplicația de autentificare, de exemplu Google Authenticator, Duo Mobile sau Authy.',
  want_to_scan_qr_code: 'Vrei să scanezi codul QR?',
  enter_one_time_code: 'Introdu codul unic',
  enter_one_time_code_link_description:
    'Introdu codul de verificare din 6 cifre generat de aplicația de autentificare.',
  enter_one_time_code_description:
    'Verificarea în doi pași este activată pentru acest cont. Introdu codul unic afișat în aplicația de autentificare asociată.',
  enter_email_verification_code: 'Introdu codul de verificare din e-mail',
  enter_email_verification_code_description:
    'Verificarea în doi pași este activată pentru acest cont. Introdu codul de verificare trimis la {{identifier}}.',
  enter_phone_verification_code: 'Introdu codul de verificare din SMS',
  enter_phone_verification_code_description:
    'Verificarea în doi pași este activată pentru acest cont. Introdu codul de verificare trimis prin SMS la {{identifier}}.',
  link_another_mfa_factor: 'Comută la altă metodă',
  save_backup_code: 'Salvează codurile de rezervă',
  save_backup_code_description:
    'Dacă verificarea în doi pași nu funcționează în alt mod, poți folosi unul dintre aceste coduri de rezervă pentru a-ți accesa contul. Fiecare cod poate fi folosit o singură dată.',
  backup_code_hint: 'Copiază-le și păstrează-le într-un loc sigur.',
  new_backup_codes_generated:
    'Codurile de rezervă noi le-au înlocuit pe cele vechi. Păstrează-le cât mai repede într-un loc sigur.',
  enter_a_backup_code: 'Introdu un cod de rezervă',
  enter_backup_code_description:
    'Introdu codul de rezervă salvat când ai activat verificarea în doi pași.',
  create_a_passkey: 'Creează o cheie de acces',
  create_passkey_description:
    'Înregistrează cheia de acces folosind biometria dispozitivului, chei de securitate (de ex. YubiKey) sau alte metode disponibile.',
  try_another_verification_method: 'Încearcă altă metodă de verificare',
  verify_via_passkey: 'Verifică prin cheie de acces',
  verify_via_passkey_description:
    'Verifică prin cheie de acces cu parola sau biometria dispozitivului, scanând un cod QR sau cu o cheie de securitate USB, precum YubiKey.',
  trust_this_device_title: 'Ai încredere în acest dispozitiv',
  trust_this_device_description:
    'Poți omite verificarea MFA pe acest dispozitiv la conectările viitoare.',
  trust_this_device_one: 'Ai încredere în acest dispozitiv timp de {{count}} zi',
  trust_this_device_two: 'Ai încredere în acest dispozitiv timp de {{count}} zile',
  trust_this_device_few: 'Ai încredere în acest dispozitiv timp de {{count}} zile',
  trust_this_device_many: 'Ai încredere în acest dispozitiv timp de {{count}} de zile',
  trust_this_device_other: 'Ai încredere în acest dispozitiv timp de {{count}} de zile',
  secret_key_copied: 'Cheia secretă a fost copiată.',
  backup_code_copied: 'Codul de rezervă a fost copiat.',
  webauthn_not_ready: 'WebAuthn nu este încă pregătit. Încearcă din nou mai târziu.',
  webauthn_not_supported: 'WebAuthn nu este acceptat în acest browser.',
  webauthn_failed_to_create: 'Crearea a eșuat. Încearcă din nou.',
  webauthn_failed_to_verify: 'Verificarea a eșuat. Încearcă din nou.',
};

export default Object.freeze(mfa);
