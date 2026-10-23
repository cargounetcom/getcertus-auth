/* GetCertus addition (MPL-2.0, see GETCERTUS.md): admin console phrases. */
const session = {
  not_found: 'Sessie niet gevonden. Ga terug en log opnieuw in.',
  invalid_credentials: 'Onjuist account of wachtwoord. Controleer je invoer.',
  invalid_sign_in_method: 'De huidige inlogmethode is niet beschikbaar.',
  invalid_connector_id: 'Er is geen beschikbare connector met ID {{connectorId}} gevonden.',
  insufficient_info: 'Onvoldoende inloggegevens.',
  connector_id_mismatch: 'De connectorId komt niet overeen met de sessiegegevens.',
  connector_session_not_found: 'Connectorsessie niet gevonden. Ga terug en log opnieuw in.',
  verification_session_not_found:
    'De verificatie is niet gelukt. Start de verificatie opnieuw en probeer het nog eens.',
  verification_expired:
    'De verbinding is verlopen. Verifieer opnieuw om je account veilig te houden.',
  verification_blocked_too_many_attempts:
    'Te veel pogingen in korte tijd. Probeer het {{relativeTime}} opnieuw.',
  unauthorized: 'Log eerst in.',
  unsupported_prompt_name: 'Niet-ondersteunde promptnaam.',
  forgot_password_not_enabled: 'Wachtwoord vergeten is niet ingeschakeld.',
  verification_failed:
    'De verificatie is niet gelukt. Start de verificatie opnieuw en probeer het nog eens.',
  connector_validation_session_not_found:
    'De connectorsessie voor tokenvalidatie is niet gevonden.',
  csrf_token_mismatch: 'Het CSRF-token komt niet overeen.',
  identifier_not_found: 'Gebruikersidentifier niet gevonden. Ga terug en log opnieuw in.',
  interaction_not_found: 'Interactiesessie niet gevonden. Ga terug en start de sessie opnieuw.',
  invalid_interaction_type:
    'Deze bewerking wordt niet ondersteund voor de huidige interactie. Start een nieuwe sessie.',
  not_supported_for_forgot_password:
    'Deze bewerking wordt niet ondersteund bij wachtwoord vergeten.',
  identity_conflict:
    'Er is een identiteitsconflict gedetecteerd. Start een nieuwe sessie om met een andere identiteit verder te gaan.',
  identifier_not_verified:
    'De opgegeven identifier {{identifier}} is niet geverifieerd. Maak een verificatierecord voor deze identifier aan en voltooi de verificatie.',
  mfa: {
    require_mfa_verification: 'MFA-verificatie is vereist om in te loggen.',
    mfa_sign_in_only: 'MFA is alleen beschikbaar bij inloginteracties.',
    pending_info_not_found: 'Openstaande MFA-gegevens niet gevonden; start eerst MFA.',
    invalid_totp_code: 'Ongeldige TOTP-code.',
    webauthn_verification_failed: 'WebAuthn-verificatie is mislukt.',
    webauthn_verification_not_found: 'WebAuthn-verificatie niet gevonden.',
    bind_mfa_existed: 'MFA bestaat al.',
    backup_code_can_not_be_alone: 'Een back-upcode kan niet de enige MFA zijn.',
    backup_code_required: 'Een back-upcode is vereist.',
    invalid_backup_code: 'Ongeldige back-upcode.',
    mfa_policy_not_user_controlled: 'Het MFA-beleid wordt niet door de gebruiker beheerd.',
    mfa_factor_not_enabled: 'Deze MFA-factor is niet ingeschakeld.',
    suggest_additional_mfa:
      'Voeg voor extra bescherming een andere MFA-methode toe. Je kunt deze stap overslaan en doorgaan.',
  },
  trusted_device_suggest_opt_in: 'Kies of je dit apparaat wilt vertrouwen.',
  step_up: {
    invalid_interaction_event: 'Step-up-authenticatie is alleen beschikbaar bij inloginteracties.',
    subject_not_found:
      'Er is geen geauthenticeerde sessie gevonden voor step-up-authenticatie. Log opnieuw in.',
    forbidden_route: 'Deze route is niet toegestaan tijdens step-up-authenticatie.',
    forbidden_identifier:
      'Een identifier is niet toegestaan tijdens step-up-authenticatie. Probeer het opnieuw zonder het identifierveld.',
    acr_not_satisfied:
      'De voltooide verificatie voldoet niet aan de gevraagde authenticatiecontext. Verifieer met een andere methode.',
    require_verification:
      'Verificatie met een van je bestaande methoden is vereist om de gevraagde authenticatiecontext te bereiken.',
  },
  passkey_sign_in: {
    pending_info_not_found:
      'Openstaande gegevens voor inloggen met passkey niet gevonden. Start het inlogproces opnieuw.',
    conflict_rp_id:
      'De Relying Party-ID komt niet overeen. Gebruik de juiste client om in te loggen.',
    sso_users_not_allowed: 'Inloggen met passkey is niet beschikbaar voor SSO-gebruikers.',
  },
  password_expiration: {
    reset_not_allowed:
      'Het wachtwoord opnieuw instellen is alleen toegestaan nadat het wachtwoord in de huidige inlogsessie is verlopen.',
  },
  sso_enabled: 'Single sign-on is ingeschakeld voor dit e-mailadres. Log in met SSO.',
  captcha_required: 'Captcha is vereist.',
  captcha_failed: 'Captcha-verificatie is mislukt.',
  email_blocklist: {
    disposable_email_validation_failed: 'Validatie van het e-mailadres is mislukt.',
    invalid_email: 'Ongeldig e-mailadres.',
    email_subaddressing_not_allowed: 'E-mailsubadressering is niet toegestaan.',
    email_not_allowed: 'Het e-mailadres "{{email}}" is beperkt. Kies een ander adres.',
  },
  google_one_tap: {
    cookie_mismatch: 'De Google One Tap-cookie komt niet overeen.',
    invalid_id_token: 'Ongeldig Google ID-token.',
    unverified_email: 'Niet-geverifieerd e-mailadres.',
  },
};

export default Object.freeze(session);
