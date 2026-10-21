/* GetCertus addition (MPL-2.0, see GETCERTUS.md): sign-in experience phrases. */
const mfa = {
  totp: 'Engångskod från autentiseringsapp',
  webauthn: 'Passkey',
  backup_code: 'Reservkod',
  email_verification_code: 'Verifieringskod via e-post',
  phone_verification_code: 'Verifieringskod via sms',
  link_totp_description: 'T.ex. Google Authenticator',
  link_webauthn_description: 'Koppla din enhet eller USB-nyckel',
  link_backup_code_description: 'Skapa en reservkod',
  link_email_verification_code_description: 'Koppla din e-postadress',
  link_email_2fa_description: 'Koppla din e-postadress för tvåstegsverifiering',
  link_phone_verification_code_description: 'Koppla ditt telefonnummer',
  link_phone_2fa_description: 'Koppla ditt telefonnummer för tvåstegsverifiering',
  verify_totp_description: 'Ange engångskoden från appen',
  verify_webauthn_description: 'Verifiera din enhet eller USB-nyckel',
  verify_backup_code_description: 'Klistra in reservkoden du sparade',
  verify_email_verification_code_description: 'Ange koden som skickades till din e-post',
  verify_phone_verification_code_description: 'Ange koden som skickades till din telefon',
  send_to_email: 'Skicka till {{identifier}}',
  send_to_phone: 'Skicka till {{identifier}}',
  onboarding: 'Aktivera tvåstegsverifiering',
  onboarding_description:
    'Skydda ditt konto med tvåstegsverifiering. Välj en eller flera metoder: passkey, autentiseringsapp (engångskod), verifieringskod via sms eller reservkoder.',
  enable_mfa: 'Aktivera tvåstegsverifiering',
  add_mfa_factors: 'Lägg till tvåstegsverifiering',
  add_mfa_description:
    'Tvåstegsverifiering är aktiverad. Välj din andra verifieringsmetod för säker inloggning.',
  add_another_mfa_factor: 'Lägg till ytterligare en tvåstegsverifiering',
  add_another_mfa_description: 'Välj ett annat sätt att verifiera din identitet vid inloggning.',
  verify_mfa_factors: 'Tvåstegsverifiering',
  verify_mfa_description:
    'Tvåstegsverifiering är aktiverad för det här kontot. Välj det andra sättet att verifiera din identitet.',
  add_authenticator_app: 'Lägg till autentiseringsapp',
  replace_authenticator_app: 'Byt autentiseringsapp',
  step: 'Steg {{step, number}}: {{content}}',
  scan_qr_code: 'Skanna den här QR-koden',
  scan_qr_code_description:
    'Skanna följande QR-kod med din autentiseringsapp, till exempel Google Authenticator, Duo Mobile eller Authy.',
  qr_code_not_available: 'Kan du inte skanna QR-koden?',
  copy_and_paste_key: 'Kopiera och klistra in nyckeln',
  copy_and_paste_key_description:
    'Kopiera följande nyckel och klistra in den i din autentiseringsapp, till exempel Google Authenticator, Duo Mobile eller Authy.',
  want_to_scan_qr_code: 'Vill du skanna QR-koden?',
  enter_one_time_code: 'Ange engångskoden',
  enter_one_time_code_link_description:
    'Ange den 6-siffriga verifieringskoden från autentiseringsappen.',
  enter_one_time_code_description:
    'Tvåstegsverifiering är aktiverad för det här kontot. Ange engångskoden som visas i din kopplade autentiseringsapp.',
  enter_email_verification_code: 'Ange verifieringskoden från e-posten',
  enter_email_verification_code_description:
    'Tvåstegsverifiering är aktiverad för det här kontot. Ange verifieringskoden som skickades till {{identifier}}.',
  enter_phone_verification_code: 'Ange verifieringskoden från sms',
  enter_phone_verification_code_description:
    'Tvåstegsverifiering är aktiverad för det här kontot. Ange verifieringskoden som skickades via sms till {{identifier}}.',
  link_another_mfa_factor: 'Byt till en annan metod',
  save_backup_code: 'Spara dina reservkoder',
  save_backup_code_description:
    'Om tvåstegsverifieringen inte fungerar på andra sätt kan du använda en av dessa reservkoder för att komma åt ditt konto. Varje kod kan bara användas en gång.',
  backup_code_hint: 'Kopiera dem och spara dem på ett säkert ställe.',
  new_backup_codes_generated:
    'Nya reservkoder har ersatt dina gamla. Spara dem på ett säkert ställe så snart som möjligt.',
  enter_a_backup_code: 'Ange en reservkod',
  enter_backup_code_description:
    'Ange reservkoden du sparade när tvåstegsverifieringen aktiverades.',
  create_a_passkey: 'Skapa en passkey',
  create_passkey_description:
    'Registrera din passkey med enhetens biometri, en säkerhetsnyckel (t.ex. YubiKey) eller en annan tillgänglig metod.',
  try_another_verification_method: 'Prova en annan verifieringsmetod',
  verify_via_passkey: 'Verifiera med passkey',
  verify_via_passkey_description:
    'Verifiera med passkey via enhetens lösenord eller biometri, genom att skanna en QR-kod eller med en USB-säkerhetsnyckel som YubiKey.',
  trust_this_device_title: 'Lita på den här enheten',
  trust_this_device_description:
    'Du kan hoppa över MFA-verifiering på den här enheten vid kommande inloggningar.',
  trust_this_device_one: 'Lita på den här enheten i {{count}} dag',
  trust_this_device_two: 'Lita på den här enheten i {{count}} dagar',
  trust_this_device_few: 'Lita på den här enheten i {{count}} dagar',
  trust_this_device_many: 'Lita på den här enheten i {{count}} dagar',
  trust_this_device_other: 'Lita på den här enheten i {{count}} dagar',
  secret_key_copied: 'Hemlig nyckel kopierad.',
  backup_code_copied: 'Reservkod kopierad.',
  webauthn_not_ready: 'WebAuthn är inte redo än. Försök igen senare.',
  webauthn_not_supported: 'WebAuthn stöds inte i den här webbläsaren.',
  webauthn_failed_to_create: 'Det gick inte att skapa. Försök igen.',
  webauthn_failed_to_verify: 'Det gick inte att verifiera. Försök igen.',
};

export default Object.freeze(mfa);
