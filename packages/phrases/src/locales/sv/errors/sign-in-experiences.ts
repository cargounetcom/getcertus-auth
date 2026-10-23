/* GetCertus addition (MPL-2.0, see GETCERTUS.md): admin console phrases. */
const sign_in_experiences = {
  empty_content_url_of_terms_of_use:
    'Innehålls-URL för "Användarvillkor" saknas. Lägg till innehålls-URL:en om "Användarvillkor" är aktiverade.',
  empty_social_connectors:
    'Inga sociala anslutningar. Lägg till aktiverade sociala anslutningar när social inloggning är aktiverad.',
  enabled_connector_not_found: 'Ingen aktiverad {{type}}-anslutning hittades.',
  not_one_and_only_one_primary_sign_in_method:
    'Det måste finnas exakt en primär inloggningsmetod. Kontrollera det du angav.',
  username_requires_password:
    'Lösenord måste aktiveras för registreringsidentifieraren användarnamn.',
  passwordless_requires_verify:
    'Verifiering måste aktiveras för registreringsidentifieraren e-post/telefon.',
  miss_sign_up_identifier_in_sign_in:
    'Inloggningsmetoderna måste innehålla registreringsidentifieraren.',
  password_sign_in_must_be_enabled:
    'Inloggning med lösenord måste vara aktiverad när lösenord krävs vid registrering.',
  code_sign_in_must_be_enabled:
    'Inloggning med verifieringskod måste vara aktiverad när lösenord inte krävs vid registrering.',
  unsupported_default_language: 'Språket {{language}} stöds inte för närvarande.',
  at_least_one_authentication_factor: 'Du måste välja minst en autentiseringsfaktor.',
  backup_code_cannot_be_enabled_alone: 'Reservkod kan inte aktiveras ensam.',
  duplicated_mfa_factors: 'Dubbletter av MFA-faktorer.',
  email_verification_code_cannot_be_used_for_mfa:
    'Verifieringskod via e-post kan inte användas för MFA när e-postverifiering är aktiverad för inloggning.',
  phone_verification_code_cannot_be_used_for_mfa:
    'Verifieringskod via sms kan inte användas för MFA när sms-verifiering är aktiverad för inloggning.',
  email_verification_code_cannot_be_used_for_sign_in:
    'Verifieringskod via e-post kan inte användas för inloggning när den är aktiverad för MFA.',
  phone_verification_code_cannot_be_used_for_sign_in:
    'Verifieringskod via sms kan inte användas för inloggning när den är aktiverad för MFA.',
  adaptive_mfa_requires_mfa: 'MFA måste vara aktiverat innan adaptiv MFA aktiveras.',
  adaptive_mfa_requires_non_skippable_policy:
    'Adaptiv MFA kräver en MFA-uppmaningspolicy som inte kan hoppas över. Använd PromptOnlyAtSignInMandatory eller PromptAtSignInAndSignUpMandatory.',
  non_adaptive_mfa_requires_skippable_policy:
    'När adaptiv MFA är inaktiverad måste MFA-uppmaningspolicyn kunna hoppas över. Använd inte PromptOnlyAtSignInMandatory eller PromptAtSignInAndSignUpMandatory.',
  duplicated_sign_up_identifiers: 'Dubbletter av registreringsidentifierare hittades.',
  missing_sign_up_identifiers: 'Den primära registreringsidentifieraren får inte vara tom.',
  invalid_custom_email_blocklist_format:
    'Ogiltiga poster i den anpassade e-postspärrlistan: {{items, list(type:conjunction)}}. Varje post måste vara en giltig e-postadress eller e-postdomän, t.ex. foo@example.com eller @example.com.',
  forgot_password_method_requires_connector:
    'Metoden för glömt lösenord kräver en konfigurerad {{method}}-anslutning.',
  password_expiration_requires_forgot_password:
    'Lösenordsutgång kräver minst en metod för glömt lösenord med en giltig anslutning.',
  password_expiration_not_enabled:
    'Policyn för lösenordsutgång är inte aktiverad. Aktivera den i inställningarna för inloggningsupplevelsen innan du låter lösenord gå ut.',
  password_expiration_invalid_period_days:
    'Giltighetsperioden i dagar måste vara ett positivt heltal när lösenordsutgång är aktiverad.',
  username_policy_case_conflicts_exist:
    'Det går inte att byta till skiftlägesokänsliga användarnamn så länge det finns användarnamn som bara skiljer sig i skiftläge. Lös konflikterna och försök igen.',
};

export default Object.freeze(sign_in_experiences);
