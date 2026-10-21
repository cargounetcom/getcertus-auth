/* GetCertus addition (MPL-2.0, see GETCERTUS.md): sign-in experience phrases. */
const mfa = {
  totp: 'Engangskode fra godkendelsesapp',
  webauthn: 'Passkey',
  backup_code: 'Backupkode',
  email_verification_code: 'Bekræftelseskode via e-mail',
  phone_verification_code: 'Bekræftelseskode via sms',
  link_totp_description: 'F.eks. Google Authenticator',
  link_webauthn_description: 'Knyt din enhed eller USB-nøgle',
  link_backup_code_description: 'Opret en backupkode',
  link_email_verification_code_description: 'Knyt din e-mailadresse',
  link_email_2fa_description: 'Knyt din e-mailadresse til totrinsbekræftelse',
  link_phone_verification_code_description: 'Knyt dit telefonnummer',
  link_phone_2fa_description: 'Knyt dit telefonnummer til totrinsbekræftelse',
  verify_totp_description: 'Indtast engangskoden fra appen',
  verify_webauthn_description: 'Bekræft din enhed eller USB-nøgle',
  verify_backup_code_description: 'Indsæt den backupkode, du har gemt',
  verify_email_verification_code_description: 'Indtast koden, der blev sendt til din e-mail',
  verify_phone_verification_code_description: 'Indtast koden, der blev sendt til din telefon',
  send_to_email: 'Send til {{identifier}}',
  send_to_phone: 'Send til {{identifier}}',
  onboarding: 'Slå totrinsbekræftelse til',
  onboarding_description:
    'Beskyt din konto med totrinsbekræftelse. Vælg en eller flere metoder: passkey, godkendelsesapp (engangskode), bekræftelseskode via sms eller backupkoder.',
  enable_mfa: 'Slå totrinsbekræftelse til',
  add_mfa_factors: 'Tilføj totrinsbekræftelse',
  add_mfa_description:
    'Totrinsbekræftelse er slået til. Vælg din anden bekræftelsesmetode for sikkert login.',
  add_another_mfa_factor: 'Tilføj endnu en totrinsbekræftelse',
  add_another_mfa_description: 'Vælg en anden måde at bekræfte din identitet på ved login.',
  verify_mfa_factors: 'Totrinsbekræftelse',
  verify_mfa_description:
    'Totrinsbekræftelse er slået til for denne konto. Vælg den anden måde at bekræfte din identitet på.',
  add_authenticator_app: 'Tilføj godkendelsesapp',
  replace_authenticator_app: 'Udskift godkendelsesapp',
  step: 'Trin {{step, number}}: {{content}}',
  scan_qr_code: 'Scan denne QR-kode',
  scan_qr_code_description:
    'Scan følgende QR-kode med din godkendelsesapp, f.eks. Google Authenticator, Duo Mobile eller Authy.',
  qr_code_not_available: 'Kan du ikke scanne QR-koden?',
  copy_and_paste_key: 'Kopiér og indsæt nøglen',
  copy_and_paste_key_description:
    'Kopiér følgende nøgle, og indsæt den i din godkendelsesapp, f.eks. Google Authenticator, Duo Mobile eller Authy.',
  want_to_scan_qr_code: 'Vil du scanne QR-koden?',
  enter_one_time_code: 'Indtast engangskoden',
  enter_one_time_code_link_description:
    'Indtast den 6-cifrede bekræftelseskode fra godkendelsesappen.',
  enter_one_time_code_description:
    'Totrinsbekræftelse er slået til for denne konto. Indtast engangskoden, der vises i din tilknyttede godkendelsesapp.',
  enter_email_verification_code: 'Indtast bekræftelseskoden fra e-mailen',
  enter_email_verification_code_description:
    'Totrinsbekræftelse er slået til for denne konto. Indtast bekræftelseskoden, der blev sendt til {{identifier}}.',
  enter_phone_verification_code: 'Indtast bekræftelseskoden fra sms',
  enter_phone_verification_code_description:
    'Totrinsbekræftelse er slået til for denne konto. Indtast bekræftelseskoden, der blev sendt via sms til {{identifier}}.',
  link_another_mfa_factor: 'Skift til en anden metode',
  save_backup_code: 'Gem dine backupkoder',
  save_backup_code_description:
    'Hvis totrinsbekræftelsen ikke virker på andre måder, kan du bruge en af disse backupkoder til at få adgang til din konto. Hver kode kan kun bruges én gang.',
  backup_code_hint: 'Kopiér dem, og gem dem et sikkert sted.',
  new_backup_codes_generated:
    'Nye backupkoder har erstattet dine gamle koder. Gem dem et sikkert sted hurtigst muligt.',
  enter_a_backup_code: 'Indtast en backupkode',
  enter_backup_code_description:
    'Indtast den backupkode, du gemte, da totrinsbekræftelsen blev slået til.',
  create_a_passkey: 'Opret en passkey',
  create_passkey_description:
    'Registrer din passkey med enhedens biometri, en sikkerhedsnøgle (f.eks. YubiKey) eller en anden tilgængelig metode.',
  try_another_verification_method: 'Prøv en anden bekræftelsesmetode',
  verify_via_passkey: 'Bekræft med passkey',
  verify_via_passkey_description:
    'Bekræft med passkey via enhedens adgangskode eller biometri, ved at scanne en QR-kode eller med en USB-sikkerhedsnøgle som YubiKey.',
  trust_this_device_title: 'Stol på denne enhed',
  trust_this_device_description:
    'Du kan springe MFA-bekræftelse over på denne enhed ved fremtidige login.',
  trust_this_device_one: 'Stol på denne enhed i {{count}} dag',
  trust_this_device_two: 'Stol på denne enhed i {{count}} dage',
  trust_this_device_few: 'Stol på denne enhed i {{count}} dage',
  trust_this_device_many: 'Stol på denne enhed i {{count}} dage',
  trust_this_device_other: 'Stol på denne enhed i {{count}} dage',
  secret_key_copied: 'Hemmelig nøgle kopieret.',
  backup_code_copied: 'Backupkode kopieret.',
  webauthn_not_ready: 'WebAuthn er ikke klar endnu. Prøv igen senere.',
  webauthn_not_supported: 'WebAuthn understøttes ikke i denne browser.',
  webauthn_failed_to_create: 'Kunne ikke oprettes. Prøv igen.',
  webauthn_failed_to_verify: 'Kunne ikke bekræftes. Prøv igen.',
};

export default Object.freeze(mfa);
