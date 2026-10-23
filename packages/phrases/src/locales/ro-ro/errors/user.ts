/* GetCertus addition (MPL-2.0, see GETCERTUS.md): admin console phrases. */
const user = {
  id_already_in_use: 'Acest ID de utilizator este deja folosit.',
  username_already_in_use: 'Acest nume de utilizator este deja folosit.',
  username_starts_with_number: 'Numele de utilizator nu poate începe cu o cifră.',
  username_invalid_charset_hard:
    'Numele de utilizator poate conține doar litere, cifre și caractere de subliniere.',
  username_too_short: 'Numele de utilizator este prea scurt.',
  username_too_long: 'Numele de utilizator este prea lung.',
  username_uppercase_not_allowed: 'Numele de utilizator nu poate conține litere mari.',
  username_lowercase_not_allowed: 'Numele de utilizator nu poate conține litere mici.',
  username_numbers_not_allowed: 'Numele de utilizator nu poate conține cifre.',
  username_underscore_not_allowed: 'Numele de utilizator nu poate conține caractere de subliniere.',
  email_already_in_use: 'Această adresă de e-mail este asociată cu un cont existent.',
  phone_already_in_use: 'Acest număr de telefon este asociat cu un cont existent.',
  invalid_email: 'Adresă de e-mail nevalidă.',
  invalid_phone: 'Număr de telefon nevalid.',
  email_not_exist: 'Adresa de e-mail nu a fost încă înregistrată.',
  phone_not_exist: 'Numărul de telefon nu a fost încă înregistrat.',
  identity_not_exist: 'Contul social nu a fost încă înregistrat.',
  sso_identity_not_exist: 'Contul enterprise SSO nu a fost încă înregistrat.',
  identity_already_in_use: 'Contul social este deja asociat cu un cont existent.',
  social_account_exists_in_profile: 'Ai asociat deja acest cont social.',
  cannot_delete_self: 'Nu te poți șterge pe tine însuți.',
  sign_up_method_not_enabled: 'Această metodă de înregistrare nu este activată.',
  sign_in_method_not_enabled: 'Această metodă de autentificare nu este activată.',
  same_password: 'Parola nouă nu poate fi la fel cu cea veche.',
  password_required_in_profile: 'Trebuie să setezi o parolă înainte de autentificare.',
  new_password_required_in_profile: 'Trebuie să setezi o parolă nouă.',
  password_exists_in_profile: 'Profilul tău are deja o parolă.',
  username_required_in_profile: 'Trebuie să setezi un nume de utilizator înainte de autentificare.',
  username_exists_in_profile: 'Profilul tău are deja un nume de utilizator.',
  email_required_in_profile: 'Trebuie să adaugi o adresă de e-mail înainte de autentificare.',
  email_exists_in_profile: 'Profilul tău este deja asociat cu o adresă de e-mail.',
  phone_required_in_profile: 'Trebuie să adaugi un număr de telefon înainte de autentificare.',
  phone_exists_in_profile: 'Profilul tău este deja asociat cu un număr de telefon.',
  email_or_phone_required_in_profile:
    'Trebuie să adaugi o adresă de e-mail sau un număr de telefon înainte de autentificare.',
  suspended: 'Acest cont este suspendat.',
  user_not_exist: 'Utilizatorul cu {{ identifier }} nu există.',
  missing_profile: 'Trebuie să furnizezi informații suplimentare înainte de autentificare.',
  role_exists: 'ID-ul de rol {{roleId}} a fost deja adăugat acestui utilizator',
  invalid_role_type:
    'Tip de rol nevalid: un rol mașină la mașină nu poate fi atribuit unui utilizator.',
  suggest_mfa:
    'Pentru o securitate mai bună a contului, îți recomandăm să asociezi MFA contului tău.',
  missing_mfa: 'Trebuie să asociezi o metodă MFA suplimentară înainte de autentificare.',
  totp_already_in_use: 'TOTP este deja folosit.',
  backup_code_already_in_use: 'Codul de rezervă este deja folosit.',
  password_algorithm_required: 'Algoritmul parolei este obligatoriu.',
  password_and_digest: 'Nu poți seta atât o parolă în text simplu, cât și un digest al parolei.',
  personal_access_token_name_exists: 'Există deja un token de acces personal cu acest nume.',
  totp_secret_invalid: 'Secretul TOTP furnizat nu este valid.',
  wrong_backup_code_format: 'Formatul codului de rezervă nu este valid.',
  username_required:
    'Numele de utilizator este un identificator obligatoriu și nu poate fi setat la null.',
  email_or_phone_required:
    'Adresa de e-mail sau numărul de telefon este un identificator obligatoriu; este necesar cel puțin unul.',
  last_sign_in_method_required: 'Trebuie să păstrezi cel puțin un identificator în cont.',
  email_required:
    'Adresa de e-mail este un identificator obligatoriu și nu poate fi setată la null.',
  phone_required:
    'Numărul de telefon este un identificator obligatoriu și nu poate fi setat la null.',
  enterprise_sso_identity_not_exists:
    'Utilizatorul nu are o identitate enterprise asociată cu ID-ul de conector SSO specificat: {{ ssoConnectorId }}.',
  identity_not_exists_in_current_user:
    'Identitatea specificată nu există în contul utilizatorului curent. Asociază identitatea înainte de a continua.',
  passkey_preferred: 'Creează un passkey pentru a simplifica autentificarea.',
};

export default Object.freeze(user);
