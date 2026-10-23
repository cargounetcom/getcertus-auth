/* GetCertus addition (MPL-2.0, see GETCERTUS.md): admin console phrases. */
const user = {
  id_already_in_use: 'Deze gebruikers-ID is al in gebruik.',
  username_already_in_use: 'Deze gebruikersnaam is al in gebruik.',
  username_starts_with_number: 'Een gebruikersnaam mag niet met een cijfer beginnen.',
  username_invalid_charset_hard:
    'Een gebruikersnaam mag alleen letters, cijfers en underscores bevatten.',
  username_too_short: 'De gebruikersnaam is te kort.',
  username_too_long: 'De gebruikersnaam is te lang.',
  username_uppercase_not_allowed: 'Een gebruikersnaam mag geen hoofdletters bevatten.',
  username_lowercase_not_allowed: 'Een gebruikersnaam mag geen kleine letters bevatten.',
  username_numbers_not_allowed: 'Een gebruikersnaam mag geen cijfers bevatten.',
  username_underscore_not_allowed: 'Een gebruikersnaam mag geen underscores bevatten.',
  email_already_in_use: 'Dit e-mailadres is gekoppeld aan een bestaand account.',
  phone_already_in_use: 'Dit telefoonnummer is gekoppeld aan een bestaand account.',
  invalid_email: 'Ongeldig e-mailadres.',
  invalid_phone: 'Ongeldig telefoonnummer.',
  email_not_exist: 'Dit e-mailadres is nog niet geregistreerd.',
  phone_not_exist: 'Dit telefoonnummer is nog niet geregistreerd.',
  identity_not_exist: 'Dit social-media-account is nog niet geregistreerd.',
  sso_identity_not_exist: 'Dit enterprise SSO-account is nog niet geregistreerd.',
  identity_already_in_use: 'Dit social-media-account is al gekoppeld aan een bestaand account.',
  social_account_exists_in_profile: 'Je hebt dit social-media-account al gekoppeld.',
  cannot_delete_self: 'Je kunt jezelf niet verwijderen.',
  sign_up_method_not_enabled: 'Deze registratiemethode is niet ingeschakeld.',
  sign_in_method_not_enabled: 'Deze inlogmethode is niet ingeschakeld.',
  same_password: 'Het nieuwe wachtwoord mag niet gelijk zijn aan je oude wachtwoord.',
  password_required_in_profile: 'Je moet een wachtwoord instellen voordat je kunt inloggen.',
  new_password_required_in_profile: 'Je moet een nieuw wachtwoord instellen.',
  password_exists_in_profile: 'Er staat al een wachtwoord in je profiel.',
  username_required_in_profile: 'Je moet een gebruikersnaam instellen voordat je kunt inloggen.',
  username_exists_in_profile: 'Er staat al een gebruikersnaam in je profiel.',
  email_required_in_profile: 'Je moet een e-mailadres toevoegen voordat je kunt inloggen.',
  email_exists_in_profile: 'Er is al een e-mailadres aan je profiel gekoppeld.',
  phone_required_in_profile: 'Je moet een telefoonnummer toevoegen voordat je kunt inloggen.',
  phone_exists_in_profile: 'Er is al een telefoonnummer aan je profiel gekoppeld.',
  email_or_phone_required_in_profile:
    'Je moet een e-mailadres of telefoonnummer toevoegen voordat je kunt inloggen.',
  suspended: 'Dit account is opgeschort.',
  user_not_exist: 'Gebruiker met {{ identifier }} bestaat niet.',
  missing_profile: 'Je moet aanvullende gegevens invullen voordat je kunt inloggen.',
  role_exists: 'De rol-ID {{roleId}} is al aan deze gebruiker toegevoegd',
  invalid_role_type:
    'Ongeldig roltype; een machine-to-machine-rol kan niet aan een gebruiker worden toegewezen.',
  suggest_mfa:
    'Voor een betere beveiliging van je account raden we aan MFA aan je account te koppelen.',
  missing_mfa: 'Je moet een extra MFA-methode koppelen voordat je kunt inloggen.',
  totp_already_in_use: 'TOTP is al in gebruik.',
  backup_code_already_in_use: 'De back-upcode is al in gebruik.',
  password_algorithm_required: 'Een wachtwoordalgoritme is verplicht.',
  password_and_digest:
    'Je kunt niet zowel een wachtwoord in platte tekst als een wachtwoord-digest instellen.',
  personal_access_token_name_exists: 'Er bestaat al een persoonlijk toegangstoken met deze naam.',
  totp_secret_invalid: 'Ongeldig TOTP-geheim opgegeven.',
  wrong_backup_code_format: 'De notatie van de back-upcode is ongeldig.',
  username_required:
    'De gebruikersnaam is een verplichte identifier en kan niet op null worden gezet.',
  email_or_phone_required:
    'E-mailadres of telefoonnummer is een verplichte identifier; minstens één is vereist.',
  last_sign_in_method_required: 'Je moet minstens één identifier in je account behouden.',
  email_required: 'Het e-mailadres is een verplichte identifier en kan niet op null worden gezet.',
  phone_required:
    'Het telefoonnummer is een verplichte identifier en kan niet op null worden gezet.',
  enterprise_sso_identity_not_exists:
    'De gebruiker heeft geen enterprise-identiteit gekoppeld aan de opgegeven SSO-connector-ID: {{ ssoConnectorId }}.',
  identity_not_exists_in_current_user:
    'De opgegeven identiteit bestaat niet in het huidige gebruikersaccount. Koppel de identiteit voordat je verdergaat.',
  passkey_preferred: 'Maak een passkey aan om het inloggen eenvoudiger te maken.',
};

export default Object.freeze(user);
