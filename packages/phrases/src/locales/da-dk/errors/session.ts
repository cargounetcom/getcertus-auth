/* GetCertus addition (MPL-2.0, see GETCERTUS.md): admin console phrases. */
const session = {
  not_found: 'Sessionen blev ikke fundet. Gå tilbage, og log ind igen.',
  invalid_credentials: 'Forkert konto eller adgangskode. Kontrollér dine indtastninger.',
  invalid_sign_in_method: 'Den aktuelle loginmetode er ikke tilgængelig.',
  invalid_connector_id: 'Kan ikke finde en tilgængelig connector med ID {{connectorId}}.',
  insufficient_info: 'Utilstrækkelige loginoplysninger.',
  connector_id_mismatch: 'connectorId stemmer ikke overens med sessionsposten.',
  connector_session_not_found: 'Connector-sessionen blev ikke fundet. Gå tilbage, og log ind igen.',
  verification_session_not_found:
    'Verificeringen lykkedes ikke. Start verificeringsflowet forfra, og prøv igen.',
  verification_expired: 'Forbindelsen er udløbet. Verificér igen for at beskytte din konto.',
  verification_blocked_too_many_attempts:
    'For mange forsøg på kort tid. Prøv igen {{relativeTime}}.',
  unauthorized: 'Log ind først.',
  unsupported_prompt_name: 'Promptnavnet understøttes ikke.',
  forgot_password_not_enabled: 'Glemt adgangskode er ikke slået til.',
  verification_failed:
    'Verificeringen lykkedes ikke. Start verificeringsflowet forfra, og prøv igen.',
  connector_validation_session_not_found:
    'Connector-sessionen til tokenvalidering blev ikke fundet.',
  csrf_token_mismatch: 'CSRF-tokenet stemmer ikke overens.',
  identifier_not_found: 'Brugeridentifikatoren blev ikke fundet. Gå tilbage, og log ind igen.',
  interaction_not_found:
    'Interaktionssessionen blev ikke fundet. Gå tilbage, og start sessionen igen.',
  invalid_interaction_type:
    'Handlingen understøttes ikke for den aktuelle interaktion. Start en ny session.',
  not_supported_for_forgot_password: 'Handlingen understøttes ikke ved glemt adgangskode.',
  identity_conflict:
    'Der blev registreret en identitetskonflikt. Start en ny session for at fortsætte med en anden identitet.',
  identifier_not_verified:
    'Den angivne identifikator {{identifier}} er ikke verificeret. Opret en verificeringspost for identifikatoren, og gennemfør verificeringen.',
  mfa: {
    require_mfa_verification: 'MFA-verificering er påkrævet for at logge ind.',
    mfa_sign_in_only: 'MFA er kun tilgængelig ved login.',
    pending_info_not_found: 'Afventende MFA-oplysninger blev ikke fundet. Start MFA først.',
    invalid_totp_code: 'Ugyldig TOTP-kode.',
    webauthn_verification_failed: 'WebAuthn-verificeringen mislykkedes.',
    webauthn_verification_not_found: 'WebAuthn-verificeringen blev ikke fundet.',
    bind_mfa_existed: 'MFA findes allerede.',
    backup_code_can_not_be_alone: 'Backupkode kan ikke være den eneste MFA.',
    backup_code_required: 'Backupkode er påkrævet.',
    invalid_backup_code: 'Ugyldig backupkode.',
    mfa_policy_not_user_controlled: 'MFA-politikken styres ikke af brugeren.',
    mfa_factor_not_enabled: 'MFA-faktoren er ikke slået til.',
    suggest_additional_mfa:
      'Overvej at tilføje endnu en MFA-metode for bedre beskyttelse. Du kan springe dette trin over og fortsætte.',
  },
  trusted_device_suggest_opt_in: 'Vælg, om du vil stole på denne enhed.',
  step_up: {
    invalid_interaction_event: 'Step-up-godkendelse er kun tilgængelig ved login.',
    subject_not_found:
      'Der blev ikke fundet en godkendt session til step-up-godkendelse. Log ind igen.',
    forbidden_route: 'Denne route er ikke tilladt under step-up-godkendelse.',
    forbidden_identifier:
      'En identifikator er ikke tilladt under step-up-godkendelse. Prøv igen uden identifikatorfeltet.',
    acr_not_satisfied:
      'Den gennemførte verificering opfylder ikke den anmodede godkendelseskontekst. Verificér med en anden metode.',
    require_verification:
      'Verificering med en af dine eksisterende metoder er påkrævet for at nå den anmodede godkendelseskontekst.',
  },
  passkey_sign_in: {
    pending_info_not_found:
      'Afventende oplysninger til login med passkey blev ikke fundet. Start loginflowet forfra.',
    conflict_rp_id:
      "Relying Party-ID'et stemmer ikke overens. Brug den rigtige klient til at logge ind.",
    sso_users_not_allowed: 'Login med passkey er ikke tilgængeligt for SSO-brugere.',
  },
  password_expiration: {
    reset_not_allowed:
      'Nulstilling af adgangskode er kun tilladt, efter at adgangskoden er udløbet i den aktuelle loginsession.',
  },
  sso_enabled: 'Single sign-on er slået til for denne e-mailadresse. Log ind med SSO.',
  captcha_required: 'Captcha er påkrævet.',
  captcha_failed: 'Captcha-verificeringen mislykkedes.',
  email_blocklist: {
    disposable_email_validation_failed: 'Valideringen af e-mailadressen mislykkedes.',
    invalid_email: 'Ugyldig e-mailadresse.',
    email_subaddressing_not_allowed: 'Underadressering af e-mail er ikke tilladt.',
    email_not_allowed: 'E-mailadressen "{{email}}" er begrænset. Vælg en anden.',
  },
  google_one_tap: {
    cookie_mismatch: 'Google One Tap-cookien stemmer ikke overens.',
    invalid_id_token: 'Ugyldigt Google ID-token.',
    unverified_email: 'Ubekræftet e-mailadresse.',
  },
};

export default Object.freeze(session);
