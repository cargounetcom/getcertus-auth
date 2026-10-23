/* GetCertus addition (MPL-2.0, see GETCERTUS.md): admin console phrases. */
const session = {
  not_found: 'Sesiunea nu a fost găsită. Întoarce-te și autentifică-te din nou.',
  invalid_credentials: 'Cont sau parolă incorectă. Verifică datele introduse.',
  invalid_sign_in_method: 'Metoda de autentificare curentă nu este disponibilă.',
  invalid_connector_id: 'Nu s-a găsit niciun conector disponibil cu ID-ul {{connectorId}}.',
  insufficient_info: 'Informații de autentificare insuficiente.',
  connector_id_mismatch: 'connectorId nu corespunde înregistrării sesiunii.',
  connector_session_not_found:
    'Sesiunea conectorului nu a fost găsită. Întoarce-te și autentifică-te din nou.',
  verification_session_not_found:
    'Verificarea nu a reușit. Reia fluxul de verificare și încearcă din nou.',
  verification_expired: 'Conexiunea a expirat. Verifică din nou pentru a-ți proteja contul.',
  verification_blocked_too_many_attempts:
    'Prea multe încercări într-un timp scurt. Încearcă din nou {{relativeTime}}.',
  unauthorized: 'Autentifică-te mai întâi.',
  unsupported_prompt_name: 'Nume de prompt neacceptat.',
  forgot_password_not_enabled: 'Funcția de parolă uitată nu este activată.',
  verification_failed: 'Verificarea nu a reușit. Reia fluxul de verificare și încearcă din nou.',
  connector_validation_session_not_found:
    'Sesiunea conectorului pentru validarea tokenului nu a fost găsită.',
  csrf_token_mismatch: 'Tokenul CSRF nu corespunde.',
  identifier_not_found:
    'Identificatorul utilizatorului nu a fost găsit. Întoarce-te și autentifică-te din nou.',
  interaction_not_found:
    'Sesiunea de interacțiune nu a fost găsită. Întoarce-te și începe din nou sesiunea.',
  invalid_interaction_type:
    'Această operațiune nu este acceptată pentru interacțiunea curentă. Începe o sesiune nouă.',
  not_supported_for_forgot_password: 'Această operațiune nu este acceptată pentru parola uitată.',
  identity_conflict:
    'A fost detectată o nepotrivire de identitate. Începe o sesiune nouă pentru a continua cu altă identitate.',
  identifier_not_verified:
    'Identificatorul furnizat {{identifier}} nu a fost verificat. Creează o înregistrare de verificare pentru acest identificator și finalizează procesul de verificare.',
  mfa: {
    require_mfa_verification: 'Verificarea MFA este necesară pentru autentificare.',
    mfa_sign_in_only: 'MFA este disponibil doar pentru interacțiunea de autentificare.',
    pending_info_not_found:
      'Informațiile MFA în așteptare nu au fost găsite; inițiază mai întâi MFA.',
    invalid_totp_code: 'Cod TOTP nevalid.',
    webauthn_verification_failed: 'Verificarea WebAuthn a eșuat.',
    webauthn_verification_not_found: 'Verificarea WebAuthn nu a fost găsită.',
    bind_mfa_existed: 'MFA există deja.',
    backup_code_can_not_be_alone: 'Codul de rezervă nu poate fi singura metodă MFA.',
    backup_code_required: 'Codul de rezervă este obligatoriu.',
    invalid_backup_code: 'Cod de rezervă nevalid.',
    mfa_policy_not_user_controlled: 'Politica MFA nu este controlată de utilizator.',
    mfa_factor_not_enabled: 'Factorul MFA nu este activat.',
    suggest_additional_mfa:
      'Pentru o protecție mai bună, adaugă încă o metodă MFA. Poți sări peste acest pas și continua.',
  },
  trusted_device_suggest_opt_in:
    'Alege dacă vrei să marchezi acest dispozitiv ca fiind de încredere.',
  step_up: {
    invalid_interaction_event:
      'Autentificarea step-up este disponibilă doar pentru interacțiunile de autentificare.',
    subject_not_found:
      'Nu s-a găsit nicio sesiune autentificată pentru autentificarea step-up. Autentifică-te din nou.',
    forbidden_route: 'Această rută nu este permisă în timpul autentificării step-up.',
    forbidden_identifier:
      'Un identificator nu este permis în timpul autentificării step-up. Încearcă din nou fără câmpul de identificator.',
    acr_not_satisfied:
      'Verificarea finalizată nu îndeplinește contextul de autentificare solicitat. Verifică prin altă metodă.',
    require_verification:
      'Pentru a atinge contextul de autentificare solicitat este necesară verificarea printr-una dintre metodele existente.',
  },
  passkey_sign_in: {
    pending_info_not_found:
      'Informațiile în așteptare pentru autentificarea cu passkey nu au fost găsite. Reia fluxul de autentificare.',
    conflict_rp_id:
      'ID-ul Relying Party nu corespunde. Folosește clientul corect pentru autentificare.',
    sso_users_not_allowed: 'Autentificarea cu passkey nu este disponibilă pentru utilizatorii SSO.',
  },
  password_expiration: {
    reset_not_allowed:
      'Resetarea parolei este permisă doar după ce parola a expirat în sesiunea de autentificare curentă.',
  },
  sso_enabled:
    'Single sign-on este activat pentru această adresă de e-mail. Autentifică-te cu SSO.',
  captcha_required: 'Captcha este obligatoriu.',
  captcha_failed: 'Verificarea captcha a eșuat.',
  email_blocklist: {
    disposable_email_validation_failed: 'Validarea adresei de e-mail a eșuat.',
    invalid_email: 'Adresă de e-mail nevalidă.',
    email_subaddressing_not_allowed: 'Subadresarea e-mailului nu este permisă.',
    email_not_allowed: 'Adresa de e-mail "{{email}}" este restricționată. Alege alta.',
  },
  google_one_tap: {
    cookie_mismatch: 'Cookie-ul Google One Tap nu corespunde.',
    invalid_id_token: 'Token ID Google nevalid.',
    unverified_email: 'Adresă de e-mail neverificată.',
  },
};

export default Object.freeze(session);
