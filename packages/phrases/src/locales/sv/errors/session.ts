/* GetCertus addition (MPL-2.0, see GETCERTUS.md): admin console phrases. */
const session = {
  not_found: 'Sessionen hittades inte. Gå tillbaka och logga in igen.',
  invalid_credentials: 'Fel konto eller lösenord. Kontrollera det du angav.',
  invalid_sign_in_method: 'Den aktuella inloggningsmetoden är inte tillgänglig.',
  invalid_connector_id:
    'Det gick inte att hitta någon tillgänglig anslutning med ID {{connectorId}}.',
  insufficient_info: 'Otillräcklig inloggningsinformation.',
  connector_id_mismatch: 'connectorId stämmer inte med sessionsposten.',
  connector_session_not_found: 'Anslutningssessionen hittades inte. Gå tillbaka och logga in igen.',
  verification_session_not_found:
    'Verifieringen lyckades inte. Starta om verifieringsflödet och försök igen.',
  verification_expired: 'Anslutningen har tidsgränsats. Verifiera igen för att skydda ditt konto.',
  verification_blocked_too_many_attempts:
    'För många försök på kort tid. Försök igen {{relativeTime}}.',
  unauthorized: 'Logga in först.',
  unsupported_prompt_name: 'Promptnamnet stöds inte.',
  forgot_password_not_enabled: 'Glömt lösenord är inte aktiverat.',
  verification_failed: 'Verifieringen lyckades inte. Starta om verifieringsflödet och försök igen.',
  connector_validation_session_not_found: 'Anslutningssessionen för tokenvalidering hittades inte.',
  csrf_token_mismatch: 'CSRF-token stämmer inte.',
  identifier_not_found: 'Användaridentifieraren hittades inte. Gå tillbaka och logga in igen.',
  interaction_not_found:
    'Interaktionssessionen hittades inte. Gå tillbaka och starta sessionen igen.',
  invalid_interaction_type:
    'Åtgärden stöds inte för den aktuella interaktionen. Starta en ny session.',
  not_supported_for_forgot_password: 'Åtgärden stöds inte för glömt lösenord.',
  identity_conflict:
    'Identiteterna stämmer inte överens. Starta en ny session för att fortsätta med en annan identitet.',
  identifier_not_verified:
    'Den angivna identifieraren {{identifier}} har inte verifierats. Skapa en verifieringspost för identifieraren och slutför verifieringen.',
  mfa: {
    require_mfa_verification: 'MFA-verifiering krävs för att logga in.',
    mfa_sign_in_only: 'MFA är bara tillgängligt vid inloggning.',
    pending_info_not_found: 'Väntande MFA-information hittades inte. Starta MFA först.',
    invalid_totp_code: 'Ogiltig TOTP-kod.',
    webauthn_verification_failed: 'WebAuthn-verifieringen misslyckades.',
    webauthn_verification_not_found: 'WebAuthn-verifieringen hittades inte.',
    bind_mfa_existed: 'MFA finns redan.',
    backup_code_can_not_be_alone: 'Reservkod kan inte vara den enda MFA-metoden.',
    backup_code_required: 'Reservkod krävs.',
    invalid_backup_code: 'Ogiltig reservkod.',
    mfa_policy_not_user_controlled: 'MFA-policyn styrs inte av användaren.',
    mfa_factor_not_enabled: 'MFA-faktorn är inte aktiverad.',
    suggest_additional_mfa:
      'Lägg gärna till en till MFA-metod för starkare skydd. Du kan hoppa över steget och fortsätta.',
  },
  trusted_device_suggest_opt_in: 'Välj om du vill lita på den här enheten.',
  step_up: {
    invalid_interaction_event: 'Step-up-autentisering är bara tillgänglig vid inloggning.',
    subject_not_found:
      'Ingen autentiserad session hittades för step-up-autentisering. Logga in igen.',
    forbidden_route: 'Den här routen är inte tillåten under step-up-autentisering.',
    forbidden_identifier:
      'En identifierare är inte tillåten under step-up-autentisering. Försök igen utan identifierarfältet.',
    acr_not_satisfied:
      'Den slutförda verifieringen uppfyller inte den begärda autentiseringskontexten. Verifiera med en annan metod.',
    require_verification:
      'Verifiering med någon av dina befintliga metoder krävs för att nå den begärda autentiseringskontexten.',
  },
  passkey_sign_in: {
    pending_info_not_found:
      'Väntande information för inloggning med passkey hittades inte. Starta om inloggningen.',
    conflict_rp_id: 'Relying Party-ID stämmer inte. Använd rätt klient för att logga in.',
    sso_users_not_allowed: 'Inloggning med passkey är inte tillgänglig för SSO-användare.',
  },
  password_expiration: {
    reset_not_allowed:
      'Lösenordsåterställning är bara tillåten efter att lösenordet har gått ut i den aktuella inloggningssessionen.',
  },
  sso_enabled: 'Single sign-on är aktiverat för den här e-postadressen. Logga in med SSO.',
  captcha_required: 'Captcha krävs.',
  captcha_failed: 'Captcha-verifieringen misslyckades.',
  email_blocklist: {
    disposable_email_validation_failed: 'Valideringen av e-postadressen misslyckades.',
    invalid_email: 'Ogiltig e-postadress.',
    email_subaddressing_not_allowed: 'Underadressering av e-post är inte tillåten.',
    email_not_allowed: 'E-postadressen "{{email}}" är begränsad. Välj en annan.',
  },
  google_one_tap: {
    cookie_mismatch: 'Google One Tap-cookien stämmer inte.',
    invalid_id_token: 'Ogiltig Google ID-token.',
    unverified_email: 'Overifierad e-postadress.',
  },
};

export default Object.freeze(session);
