/* GetCertus addition (MPL-2.0, see GETCERTUS.md): admin console phrases. */
const sign_in_experiences = {
  empty_content_url_of_terms_of_use:
    'URL-ul conținutului pentru "Termenii de utilizare" este gol. Adaugă URL-ul conținutului dacă "Termenii de utilizare" sunt activați.',
  empty_social_connectors:
    'Nu există conectori sociali. Adaugă conectori sociali activați când metoda de autentificare socială este activată.',
  enabled_connector_not_found: 'Conectorul {{type}} activat nu a fost găsit.',
  not_one_and_only_one_primary_sign_in_method:
    'Trebuie să existe exact o metodă principală de autentificare. Verifică datele introduse.',
  username_requires_password:
    'Pentru identificatorul de înregistrare nume de utilizator trebuie activată setarea unei parole.',
  passwordless_requires_verify:
    'Pentru identificatorul de înregistrare e-mail/telefon trebuie activată verificarea.',
  miss_sign_up_identifier_in_sign_in:
    'Metodele de autentificare trebuie să conțină identificatorul de înregistrare.',
  password_sign_in_must_be_enabled:
    'Autentificarea cu parolă trebuie activată când setarea unei parole este obligatorie la înregistrare.',
  code_sign_in_must_be_enabled:
    'Autentificarea cu cod de verificare trebuie activată când setarea unei parole nu este obligatorie la înregistrare.',
  unsupported_default_language: 'Limba {{language}} nu este acceptată momentan.',
  at_least_one_authentication_factor: 'Trebuie să alegi cel puțin un factor de autentificare.',
  backup_code_cannot_be_enabled_alone: 'Codul de rezervă nu poate fi activat singur.',
  duplicated_mfa_factors: 'Factori MFA duplicați.',
  email_verification_code_cannot_be_used_for_mfa:
    'Codul de verificare prin e-mail nu poate fi folosit pentru MFA când verificarea prin e-mail este activată pentru autentificare.',
  phone_verification_code_cannot_be_used_for_mfa:
    'Codul de verificare prin SMS nu poate fi folosit pentru MFA când verificarea prin SMS este activată pentru autentificare.',
  email_verification_code_cannot_be_used_for_sign_in:
    'Codul de verificare prin e-mail nu poate fi folosit pentru autentificare când este activat pentru MFA.',
  phone_verification_code_cannot_be_used_for_sign_in:
    'Codul de verificare prin SMS nu poate fi folosit pentru autentificare când este activat pentru MFA.',
  adaptive_mfa_requires_mfa: 'MFA trebuie activat înainte de activarea MFA adaptiv.',
  adaptive_mfa_requires_non_skippable_policy:
    'MFA adaptiv necesită o politică de solicitare MFA care nu poate fi omisă. Folosește PromptOnlyAtSignInMandatory sau PromptAtSignInAndSignUpMandatory.',
  non_adaptive_mfa_requires_skippable_policy:
    'Când MFA adaptiv este dezactivat, politica de solicitare MFA trebuie să poată fi omisă. Nu folosi PromptOnlyAtSignInMandatory sau PromptAtSignInAndSignUpMandatory.',
  duplicated_sign_up_identifiers: 'Au fost detectați identificatori de înregistrare duplicați.',
  missing_sign_up_identifiers: 'Identificatorul principal de înregistrare nu poate fi gol.',
  invalid_custom_email_blocklist_format:
    'Elemente nevalide în lista de blocare personalizată a e-mailurilor: {{items, list(type:conjunction)}}. Fiecare element trebuie să fie o adresă de e-mail sau un domeniu de e-mail valid, de ex. foo@example.com sau @example.com.',
  forgot_password_method_requires_connector:
    'Metoda de parolă uitată necesită configurarea unui conector {{method}} corespunzător.',
  password_expiration_requires_forgot_password:
    'Expirarea parolei necesită cel puțin o metodă de parolă uitată cu un conector valid.',
  password_expiration_not_enabled:
    'Politica de expirare a parolei nu este activată. Activeaz-o în setările experienței de autentificare înainte de a face parolele să expire.',
  password_expiration_invalid_period_days:
    'Numărul de zile de valabilitate trebuie să fie un număr întreg pozitiv când expirarea parolei este activată.',
  username_policy_case_conflicts_exist:
    'Nu se poate trece la nume de utilizator care nu țin cont de majuscule cât timp există nume de utilizator care diferă doar prin majuscule. Rezolvă conflictele și încearcă din nou.',
};

export default Object.freeze(sign_in_experiences);
