/* GetCertus addition (MPL-2.0, see GETCERTUS.md): admin console phrases. */
const sign_in_experiences = {
  empty_content_url_of_terms_of_use:
    'De content-URL van de "Gebruiksvoorwaarden" is leeg. Voeg de content-URL toe als de "Gebruiksvoorwaarden" zijn ingeschakeld.',
  empty_social_connectors:
    'Geen social connectoren. Voeg ingeschakelde social connectoren toe als de inlogmethode via social media is ingeschakeld.',
  enabled_connector_not_found: 'Ingeschakelde {{type}}-connector niet gevonden.',
  not_one_and_only_one_primary_sign_in_method:
    'Er moet precies één primaire inlogmethode zijn. Controleer je invoer.',
  username_requires_password:
    'Voor de registratie-identifier gebruikersnaam moet het instellen van een wachtwoord zijn ingeschakeld.',
  passwordless_requires_verify:
    'Voor de registratie-identifier e-mail/telefoon moet verificatie zijn ingeschakeld.',
  miss_sign_up_identifier_in_sign_in: 'De inlogmethoden moeten de registratie-identifier bevatten.',
  password_sign_in_must_be_enabled:
    'Inloggen met wachtwoord moet zijn ingeschakeld als het instellen van een wachtwoord bij registratie verplicht is.',
  code_sign_in_must_be_enabled:
    'Inloggen met verificatiecode moet zijn ingeschakeld als het instellen van een wachtwoord bij registratie niet verplicht is.',
  unsupported_default_language: 'De taal {{language}} wordt momenteel niet ondersteund.',
  at_least_one_authentication_factor: 'Je moet minstens één authenticatiefactor kiezen.',
  backup_code_cannot_be_enabled_alone: 'Back-upcodes kunnen niet als enige worden ingeschakeld.',
  duplicated_mfa_factors: 'Dubbele MFA-factoren.',
  email_verification_code_cannot_be_used_for_mfa:
    'Een verificatiecode per e-mail kan niet voor MFA worden gebruikt als e-mailverificatie is ingeschakeld voor inloggen.',
  phone_verification_code_cannot_be_used_for_mfa:
    'Een verificatiecode per sms kan niet voor MFA worden gebruikt als sms-verificatie is ingeschakeld voor inloggen.',
  email_verification_code_cannot_be_used_for_sign_in:
    'Een verificatiecode per e-mail kan niet voor inloggen worden gebruikt als deze is ingeschakeld voor MFA.',
  phone_verification_code_cannot_be_used_for_sign_in:
    'Een verificatiecode per sms kan niet voor inloggen worden gebruikt als deze is ingeschakeld voor MFA.',
  adaptive_mfa_requires_mfa: 'MFA moet zijn ingeschakeld voordat je adaptieve MFA inschakelt.',
  adaptive_mfa_requires_non_skippable_policy:
    'Adaptieve MFA vereist een MFA-meldingsbeleid dat niet kan worden overgeslagen. Gebruik PromptOnlyAtSignInMandatory of PromptAtSignInAndSignUpMandatory.',
  non_adaptive_mfa_requires_skippable_policy:
    'Als adaptieve MFA is uitgeschakeld, moet het MFA-meldingsbeleid kunnen worden overgeslagen. Gebruik geen PromptOnlyAtSignInMandatory of PromptAtSignInAndSignUpMandatory.',
  duplicated_sign_up_identifiers: 'Dubbele registratie-identifiers gevonden.',
  missing_sign_up_identifiers: 'De primaire registratie-identifier mag niet leeg zijn.',
  invalid_custom_email_blocklist_format:
    'Ongeldige items in de aangepaste e-mailblokkeerlijst: {{items, list(type:conjunction)}}. Elk item moet een geldig e-mailadres of e-maildomein zijn, bijv. foo@example.com of @example.com.',
  forgot_password_method_requires_connector:
    'De methode voor wachtwoord vergeten vereist een geconfigureerde {{method}}-connector.',
  password_expiration_requires_forgot_password:
    'Wachtwoordverloop vereist minstens één methode voor wachtwoord vergeten met een geldige connector.',
  password_expiration_not_enabled:
    'Het beleid voor wachtwoordverloop is niet ingeschakeld. Schakel het in via de instellingen van de inlogervaring voordat je wachtwoorden laat verlopen.',
  password_expiration_invalid_period_days:
    'Het aantal geldigheidsdagen moet een positief geheel getal zijn als wachtwoordverloop is ingeschakeld.',
  username_policy_case_conflicts_exist:
    'Kan niet overschakelen naar hoofdletterongevoelige gebruikersnamen zolang er gebruikersnamen bestaan die alleen in hoofdletters verschillen. Los de conflicten op en probeer het opnieuw.',
};

export default Object.freeze(sign_in_experiences);
