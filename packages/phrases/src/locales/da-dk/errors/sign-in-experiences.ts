/* GetCertus addition (MPL-2.0, see GETCERTUS.md): admin console phrases. */
const sign_in_experiences = {
  empty_content_url_of_terms_of_use:
    'Indholds-URL\'en til "Vilkår for brug" er tom. Tilføj indholds-URL\'en, hvis "Vilkår for brug" er slået til.',
  empty_social_connectors:
    'Ingen sociale connectorer. Tilføj aktiverede sociale connectorer, når socialt login er slået til.',
  enabled_connector_not_found: 'Aktiveret {{type}}-connector blev ikke fundet.',
  not_one_and_only_one_primary_sign_in_method:
    'Der skal være præcis én primær loginmetode. Kontrollér dine indtastninger.',
  username_requires_password:
    'Adgangskode skal være slået til for tilmeldingsidentifikatoren brugernavn.',
  passwordless_requires_verify:
    'Verificering skal være slået til for tilmeldingsidentifikatoren e-mail/telefon.',
  miss_sign_up_identifier_in_sign_in: 'Loginmetoderne skal indeholde tilmeldingsidentifikatoren.',
  password_sign_in_must_be_enabled:
    'Login med adgangskode skal være slået til, når en adgangskode er påkrævet ved tilmelding.',
  code_sign_in_must_be_enabled:
    'Login med bekræftelseskode skal være slået til, når en adgangskode ikke er påkrævet ved tilmelding.',
  unsupported_default_language: 'Sproget {{language}} understøttes ikke i øjeblikket.',
  at_least_one_authentication_factor: 'Du skal vælge mindst én godkendelsesfaktor.',
  backup_code_cannot_be_enabled_alone: 'Backupkode kan ikke slås til alene.',
  duplicated_mfa_factors: 'Duplikerede MFA-faktorer.',
  email_verification_code_cannot_be_used_for_mfa:
    'Bekræftelseskode via e-mail kan ikke bruges til MFA, når e-mailverificering er slået til for login.',
  phone_verification_code_cannot_be_used_for_mfa:
    'Bekræftelseskode via sms kan ikke bruges til MFA, når sms-verificering er slået til for login.',
  email_verification_code_cannot_be_used_for_sign_in:
    'Bekræftelseskode via e-mail kan ikke bruges til login, når den er slået til for MFA.',
  phone_verification_code_cannot_be_used_for_sign_in:
    'Bekræftelseskode via sms kan ikke bruges til login, når den er slået til for MFA.',
  adaptive_mfa_requires_mfa: 'MFA skal være slået til, før adaptiv MFA slås til.',
  adaptive_mfa_requires_non_skippable_policy:
    'Adaptiv MFA kræver en MFA-opfordringspolitik, der ikke kan springes over. Brug PromptOnlyAtSignInMandatory eller PromptAtSignInAndSignUpMandatory.',
  non_adaptive_mfa_requires_skippable_policy:
    'Når adaptiv MFA er slået fra, skal MFA-opfordringspolitikken kunne springes over. Brug ikke PromptOnlyAtSignInMandatory eller PromptAtSignInAndSignUpMandatory.',
  duplicated_sign_up_identifiers: 'Der blev fundet duplikerede tilmeldingsidentifikatorer.',
  missing_sign_up_identifiers: 'Den primære tilmeldingsidentifikator må ikke være tom.',
  invalid_custom_email_blocklist_format:
    'Ugyldige elementer i den brugerdefinerede e-mailblokeringsliste: {{items, list(type:conjunction)}}. Hvert element skal være en gyldig e-mailadresse eller et e-maildomæne, f.eks. foo@example.com eller @example.com.',
  forgot_password_method_requires_connector:
    'Metoden til glemt adgangskode kræver en konfigureret {{method}}-connector.',
  password_expiration_requires_forgot_password:
    'Udløb af adgangskode kræver mindst én metode til glemt adgangskode med en gyldig connector.',
  password_expiration_not_enabled:
    'Politikken for udløb af adgangskode er ikke slået til. Slå den til i indstillingerne for loginoplevelsen, før du lader adgangskoder udløbe.',
  password_expiration_invalid_period_days:
    'Gyldighedsperioden i dage skal være et positivt heltal, når udløb af adgangskode er slået til.',
  username_policy_case_conflicts_exist:
    'Kan ikke skifte til brugernavne uden forskel på store og små bogstaver, så længe der findes brugernavne, der kun adskiller sig på den måde. Løs konflikterne, og prøv igen.',
};

export default Object.freeze(sign_in_experiences);
