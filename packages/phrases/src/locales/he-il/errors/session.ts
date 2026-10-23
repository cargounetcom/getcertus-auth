/* GetCertus addition (MPL-2.0, see GETCERTUS.md): admin console phrases. */
const session = {
  not_found: 'הסשן לא נמצא. יש לחזור ולהיכנס שוב.',
  invalid_credentials: 'חשבון או סיסמה שגויים. יש לבדוק את הפרטים שהוזנו.',
  invalid_sign_in_method: 'שיטת הכניסה הנוכחית אינה זמינה.',
  invalid_connector_id: 'לא נמצא מחבר זמין עם המזהה {{connectorId}}.',
  insufficient_info: 'פרטי הכניסה אינם מספיקים.',
  connector_id_mismatch: 'ה-connectorId אינו תואם לרשומת הסשן.',
  connector_session_not_found: 'סשן המחבר לא נמצא. יש לחזור ולהיכנס שוב.',
  verification_session_not_found: 'האימות לא הצליח. יש להתחיל מחדש את תהליך האימות ולנסות שוב.',
  verification_expired: 'פג הזמן של החיבור. יש לאמת שוב כדי לשמור על אבטחת החשבון.',
  verification_blocked_too_many_attempts:
    'יותר מדי ניסיונות בזמן קצר. יש לנסות שוב {{relativeTime}}.',
  unauthorized: 'יש להיכנס קודם.',
  unsupported_prompt_name: 'שם prompt שאינו נתמך.',
  forgot_password_not_enabled: 'שחזור סיסמה אינו מופעל.',
  verification_failed: 'האימות לא הצליח. יש להתחיל מחדש את תהליך האימות ולנסות שוב.',
  connector_validation_session_not_found: 'סשן המחבר לאימות הטוקן לא נמצא.',
  csrf_token_mismatch: 'טוקן ה-CSRF אינו תואם.',
  identifier_not_found: 'מזהה המשתמש לא נמצא. יש לחזור ולהיכנס שוב.',
  interaction_not_found: 'סשן האינטראקציה לא נמצא. יש לחזור ולהתחיל את הסשן מחדש.',
  invalid_interaction_type: 'הפעולה אינה נתמכת באינטראקציה הנוכחית. יש להתחיל סשן חדש.',
  not_supported_for_forgot_password: 'הפעולה אינה נתמכת בשחזור סיסמה.',
  identity_conflict: 'זוהתה אי-התאמה בזהות. יש להתחיל סשן חדש כדי להמשיך עם זהות אחרת.',
  identifier_not_verified:
    'המזהה שסופק {{identifier}} לא אומת. יש ליצור רשומת אימות עבור מזהה זה ולהשלים את תהליך האימות.',
  mfa: {
    require_mfa_verification: 'נדרש אימות MFA כדי להיכנס.',
    mfa_sign_in_only: 'MFA זמין רק באינטראקציית כניסה.',
    pending_info_not_found: 'לא נמצא מידע MFA ממתין; יש להתחיל קודם את ה-MFA.',
    invalid_totp_code: 'קוד TOTP לא תקין.',
    webauthn_verification_failed: 'אימות WebAuthn נכשל.',
    webauthn_verification_not_found: 'אימות WebAuthn לא נמצא.',
    bind_mfa_existed: 'MFA כבר קיים.',
    backup_code_can_not_be_alone: 'קוד גיבוי לא יכול להיות שיטת ה-MFA היחידה.',
    backup_code_required: 'נדרש קוד גיבוי.',
    invalid_backup_code: 'קוד גיבוי לא תקין.',
    mfa_policy_not_user_controlled: 'מדיניות ה-MFA אינה בשליטת המשתמש.',
    mfa_factor_not_enabled: 'גורם ה-MFA אינו מופעל.',
    suggest_additional_mfa:
      'להגנה חזקה יותר, כדאי להוסיף שיטת MFA נוספת. אפשר לדלג על שלב זה ולהמשיך.',
  },
  trusted_device_suggest_opt_in: 'יש לבחור אם לסמן מכשיר זה כמהימן.',
  step_up: {
    invalid_interaction_event: 'אימות step-up זמין רק באינטראקציות כניסה.',
    subject_not_found: 'לא נמצא סשן מאומת לאימות step-up. יש להיכנס שוב.',
    forbidden_route: 'נתיב זה אינו מותר במהלך אימות step-up.',
    forbidden_identifier: 'מזהה אינו מותר במהלך אימות step-up. יש לנסות שוב בלי שדה המזהה.',
    acr_not_satisfied: 'האימות שהושלם אינו עומד בהקשר האימות המבוקש. יש לאמת בשיטה אחרת.',
    require_verification: 'נדרש אימות באחת מהשיטות הקיימות שלך כדי להגיע להקשר האימות המבוקש.',
  },
  passkey_sign_in: {
    pending_info_not_found:
      'לא נמצא מידע ממתין לכניסה עם מפתח גישה. יש להתחיל מחדש את תהליך הכניסה.',
    conflict_rp_id: 'מזהה ה-Relying Party אינו תואם. יש להשתמש בלקוח הנכון כדי להיכנס.',
    sso_users_not_allowed: 'כניסה עם מפתח גישה אינה זמינה למשתמשי SSO.',
  },
  password_expiration: {
    reset_not_allowed: 'איפוס סיסמה מותר רק לאחר שתוקף הסיסמה פג בסשן הכניסה הנוכחי.',
  },
  sso_enabled: 'כניסה יחידה (SSO) מופעלת עבור כתובת דוא"ל זו. יש להיכנס עם SSO.',
  captcha_required: 'נדרש captcha.',
  captcha_failed: 'אימות ה-captcha נכשל.',
  email_blocklist: {
    disposable_email_validation_failed: 'אימות כתובת הדוא"ל נכשל.',
    invalid_email: 'כתובת דוא"ל לא תקינה.',
    email_subaddressing_not_allowed: 'תת-כתובות בדוא"ל אינן מותרות.',
    email_not_allowed: 'כתובת הדוא"ל "{{email}}" מוגבלת. יש לבחור כתובת אחרת.',
  },
  google_one_tap: {
    cookie_mismatch: 'ה-cookie של Google One Tap אינו תואם.',
    invalid_id_token: 'טוקן ID של Google לא תקין.',
    unverified_email: 'כתובת דוא"ל לא מאומתת.',
  },
};

export default Object.freeze(session);
