/* GetCertus addition (MPL-2.0, see GETCERTUS.md): sign-in experience phrases. */
const mfa = {
  totp: 'Eenmalige code uit authenticator-app',
  webauthn: 'Passkey',
  backup_code: 'Back-upcode',
  email_verification_code: 'Verificatiecode per e-mail',
  phone_verification_code: 'Verificatiecode per sms',
  link_totp_description: 'Bijv. Google Authenticator',
  link_webauthn_description: 'Koppel je apparaat of USB-sleutel',
  link_backup_code_description: 'Genereer een back-upcode',
  link_email_verification_code_description: 'Koppel je e-mailadres',
  link_email_2fa_description: 'Koppel je e-mailadres voor verificatie in twee stappen',
  link_phone_verification_code_description: 'Koppel je telefoonnummer',
  link_phone_2fa_description: 'Koppel je telefoonnummer voor verificatie in twee stappen',
  verify_totp_description: 'Voer de eenmalige code uit de app in',
  verify_webauthn_description: 'Verifieer je apparaat of USB-sleutel',
  verify_backup_code_description: 'Plak de back-upcode die je hebt bewaard',
  verify_email_verification_code_description:
    'Voer de code in die naar je e-mailadres is verzonden',
  verify_phone_verification_code_description: 'Voer de code in die naar je telefoon is verzonden',
  send_to_email: 'Verzenden naar {{identifier}}',
  send_to_phone: 'Verzenden naar {{identifier}}',
  onboarding: 'Verificatie in twee stappen inschakelen',
  onboarding_description:
    'Bescherm je account met verificatie in twee stappen. Kies een of meer methoden: passkey, authenticator-app (eenmalige code), verificatiecode per sms of back-upcodes.',
  enable_mfa: 'Verificatie in twee stappen inschakelen',
  add_mfa_factors: 'Verificatie in twee stappen toevoegen',
  add_mfa_description:
    'Verificatie in twee stappen is ingeschakeld. Kies je tweede verificatiemethode om veilig in te loggen.',
  add_another_mfa_factor: 'Nog een tweede verificatiestap toevoegen',
  add_another_mfa_description:
    'Kies een andere manier om je identiteit bij het inloggen te verifiëren.',
  verify_mfa_factors: 'Verificatie in twee stappen',
  verify_mfa_description:
    'Verificatie in twee stappen is ingeschakeld voor dit account. Kies de tweede manier om je identiteit te verifiëren.',
  add_authenticator_app: 'Authenticator-app toevoegen',
  replace_authenticator_app: 'Authenticator-app vervangen',
  step: 'Stap {{step, number}}: {{content}}',
  scan_qr_code: 'Scan deze QR-code',
  scan_qr_code_description:
    'Scan de volgende QR-code met je authenticator-app, zoals Google Authenticator, Duo Mobile of Authy.',
  qr_code_not_available: 'Kun je de QR-code niet scannen?',
  copy_and_paste_key: 'Kopieer en plak de sleutel',
  copy_and_paste_key_description:
    'Kopieer de volgende sleutel en plak deze in je authenticator-app, zoals Google Authenticator, Duo Mobile of Authy.',
  want_to_scan_qr_code: 'Wil je de QR-code scannen?',
  enter_one_time_code: 'Voer de eenmalige code in',
  enter_one_time_code_link_description:
    'Voer de 6-cijferige verificatiecode uit de authenticator-app in.',
  enter_one_time_code_description:
    'Verificatie in twee stappen is ingeschakeld voor dit account. Voer de eenmalige code in die je gekoppelde authenticator-app toont.',
  enter_email_verification_code: 'Voer de verificatiecode uit je e-mail in',
  enter_email_verification_code_description:
    'Verificatie in twee stappen is ingeschakeld voor dit account. Voer de verificatiecode in die naar {{identifier}} is gemaild.',
  enter_phone_verification_code: 'Voer de sms-verificatiecode in',
  enter_phone_verification_code_description:
    'Verificatie in twee stappen is ingeschakeld voor dit account. Voer de sms-verificatiecode in die naar {{identifier}} is verzonden.',
  link_another_mfa_factor: 'Andere methode kiezen',
  save_backup_code: 'Bewaar je back-upcodes',
  save_backup_code_description:
    'Als verificatie in twee stappen op een andere manier niet lukt, kun je met een van deze back-upcodes toegang krijgen tot je account. Elke code kan maar één keer worden gebruikt.',
  backup_code_hint: 'Kopieer ze en bewaar ze op een veilige plek.',
  new_backup_codes_generated:
    'Nieuwe back-upcodes hebben je oude codes vervangen. Bewaar ze zo snel mogelijk op een veilige plek.',
  enter_a_backup_code: 'Voer een back-upcode in',
  enter_backup_code_description:
    'Voer de back-upcode in die je hebt bewaard toen verificatie in twee stappen werd ingeschakeld.',
  create_a_passkey: 'Maak een passkey aan',
  create_passkey_description:
    'Registreer je passkey met biometrie van je apparaat, een beveiligingssleutel (bijv. YubiKey) of een andere beschikbare methode.',
  try_another_verification_method: 'Probeer een andere verificatiemethode',
  verify_via_passkey: 'Verifiëren met passkey',
  verify_via_passkey_description:
    'Verifieer met een passkey via het wachtwoord of de biometrie van je apparaat, door een QR-code te scannen of met een USB-beveiligingssleutel zoals YubiKey.',
  trust_this_device_title: 'Dit apparaat vertrouwen',
  trust_this_device_description:
    'Je kunt MFA-verificatie op dit apparaat overslaan bij volgende keren inloggen.',
  trust_this_device_one: 'Dit apparaat {{count}} dag vertrouwen',
  trust_this_device_two: 'Dit apparaat {{count}} dagen vertrouwen',
  trust_this_device_few: 'Dit apparaat {{count}} dagen vertrouwen',
  trust_this_device_many: 'Dit apparaat {{count}} dagen vertrouwen',
  trust_this_device_other: 'Dit apparaat {{count}} dagen vertrouwen',
  secret_key_copied: 'Geheime sleutel gekopieerd.',
  backup_code_copied: 'Back-upcode gekopieerd.',
  webauthn_not_ready: 'WebAuthn is nog niet klaar. Probeer het later opnieuw.',
  webauthn_not_supported: 'WebAuthn wordt niet ondersteund in deze browser.',
  webauthn_failed_to_create: 'Aanmaken mislukt. Probeer het opnieuw.',
  webauthn_failed_to_verify: 'Verifiëren mislukt. Probeer het opnieuw.',
};

export default Object.freeze(mfa);
