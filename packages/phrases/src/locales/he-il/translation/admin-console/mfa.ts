/* GetCertus addition (MPL-2.0, see GETCERTUS.md): admin console phrases. */
const mfa = {
  title: 'אימות רב-שלבי',
  description: 'הוספת אימות רב-שלבי לשיפור האבטחה של חוויית הכניסה.',
  factors: 'גורמים',
  multi_factors: 'גורמים מרובים',
  multi_factors_description: 'משתמשים צריכים לאמת אחד מהגורמים המופעלים לאימות דו-שלבי.',
  totp: 'אפליקציית אימות',
  otp_description: 'קישור Google Authenticator או אפליקציה דומה לאימות סיסמאות חד-פעמיות.',
  webauthn: 'מפתחות גישה',
  webauthn_description: "אימות בשיטה שהדפדפן תומך בה: ביומטריה, סריקה בטלפון, מפתח אבטחה וכו'.",
  webauthn_domain_tip:
    'WebAuthn קושר מפתחות ציבוריים לדומיין מסוים. שינוי דומיין השירות ימנע ממשתמשים לבצע אימות עם מפתחות הגישה הקיימים.',
  backup_code: 'קודי גיבוי',
  backup_code_description: 'יצירת 10 קודי גיבוי חד-פעמיים לאחר שמשתמשים מגדירים שיטת MFA כלשהי.',
  backup_code_setup_hint:
    'כשמשתמשים לא יכולים לאמת את גורמי ה-MFA שלמעלה, הם יכולים להשתמש באפשרות הגיבוי.',
  backup_code_error_hint: 'כדי להשתמש בקוד גיבוי, נדרשת לפחות שיטת MFA נוספת אחת לאימות מוצלח.',
  email_verification_code: 'קוד אימות בדוא"ל',
  email_verification_code_description: 'קישור כתובת דוא"ל לקבלה ואימות של קודי אימות.',
  phone_verification_code: 'קוד אימות ב-SMS',
  phone_verification_code_description: 'קישור מספר טלפון לקבלה ואימות של קודי אימות ב-SMS.',
  policy: 'מדיניות',
  policy_description: 'הגדרת מדיניות MFA לתהליכי הכניסה וההרשמה.',
  two_step_sign_in_policy: 'מדיניות אימות דו-שלבי בכניסה',
  user_controlled: 'משתמשים יכולים להפעיל או להשבית MFA בעצמם',
  user_controlled_tip:
    'משתמשים יכולים לדלג על הגדרת MFA בפעם הראשונה בכניסה או בהרשמה, או להפעיל/להשבית אותו בהגדרות החשבון.',
  mandatory: 'משתמשים חייבים תמיד להשתמש ב-MFA בכניסה',
  mandatory_tip:
    'משתמשים חייבים להגדיר MFA בפעם הראשונה בכניסה או בהרשמה, ולהשתמש בו בכל כניסה עתידית.',
  require_mfa: 'חיוב MFA',
  require_mfa_label:
    'יש להפעיל זאת כדי להפוך אימות דו-שלבי לחובה לגישה לאפליקציות שלך. אם האפשרות מושבתת, משתמשים יכולים להחליט בעצמם אם להפעיל MFA.',
  require_mfa_optional: 'MFA אופציונלי: משתמשים בוחרים בעצמם אם להפעיל MFA לאבטחת החשבון',
  require_mfa_adaptive:
    'MFA אדפטיבי: בקשת MFA רק כשכניסה נראית מסוכנת (לדוגמה, מדינה חדשה / חוסר פעילות ממושך)',
  require_mfa_mandatory: 'MFA חובה: כל המשתמשים חייבים להשלים MFA בכל כניסה',
  set_up_prompt: 'בקשה להגדרת MFA',
  no_prompt: 'לא לבקש ממשתמשים להגדיר MFA',
  prompt_at_sign_in_and_sign_up: 'לבקש ממשתמשים להגדיר MFA בזמן ההרשמה (ניתן לדלג, בקשה חד-פעמית)',
  prompt_only_at_sign_in:
    'לבקש ממשתמשים להגדיר MFA בכניסה הבאה אחרי ההרשמה (ניתן לדלג, בקשה חד-פעמית)',
  prompt_at_sign_in_and_sign_up_mandatory: 'לבקש ממשתמשים להגדיר MFA בזמן ההרשמה (לא ניתן לדלג)',
  prompt_only_at_sign_in_mandatory:
    'לבקש ממשתמשים להגדיר MFA בכניסה הבאה אחרי ההרשמה (לא ניתן לדלג)',
  set_up_organization_required_mfa_prompt: 'בקשה להגדרת MFA לאחר שהארגון מפעיל MFA',
  prompt_at_sign_in_non_skippable: 'לבקש ממשתמשים להגדיר MFA בכניסה הבאה (לא ניתן לדלג)',
  email_primary_method_tip:
    'קוד אימות בדוא"ל הוא כבר שיטת הכניסה העיקרית שלך. משיקולי אבטחה, לא ניתן להשתמש בו שוב עבור MFA.',
  phone_primary_method_tip:
    'קוד אימות ב-SMS הוא כבר שיטת הכניסה העיקרית שלך. משיקולי אבטחה, לא ניתן להשתמש בו שוב עבור MFA.',
  no_email_connector_warning:
    'עדיין לא הוגדר מחבר דוא"ל. עד להשלמת ההגדרה, משתמשים לא יוכלו להשתמש בקודי אימות בדוא"ל עבור MFA. <a>{{link}}</a> ב"מחברים".',
  no_sms_connector_warning:
    'עדיין לא הוגדר מחבר SMS. עד להשלמת ההגדרה, משתמשים לא יוכלו להשתמש בקודי אימות ב-SMS עבור MFA. <a>{{link}}</a> ב"מחברים".',
  no_email_connector_error:
    'לא ניתן להפעיל MFA עם קוד אימות בדוא"ל ללא מחבר דוא"ל. יש להגדיר תחילה מחבר דוא"ל.',
  no_sms_connector_error:
    'לא ניתן להפעיל MFA עם קוד אימות ב-SMS ללא מחבר SMS. יש להגדיר תחילה מחבר SMS.',
  setup_link: 'הגדרה',
  trusted_device: {
    title: 'מכשירים מהימנים',
    description:
      'לאפשר לדפדפנים מהימנים להשלים אוטומטית את אימות ה-MFA כשתהליך ה-MFA הנוכחי דורש זאת.',
    enable_title: 'הפעלת מכשירים מהימנים',
    enable_description: 'לאפשר למשתמשים לסמן דפדפן זה כמהימן לאחר השלמת גורם MFA מתאים.',
    duration_title: 'משך האמון (ימים)',
    duration_error: 'יש להזין מספר שלם בין {{min}} ל-{{max}}.',
    duration_note: 'שינויים במשך האמון חלים רק על מכשירים שיסומנו כמהימנים לאחר השינוי.',
    organization_allow_title: 'לאפשר מכשירים מהימנים',
    organization_allow_tip:
      'ארגון יכול רק להגביל את מדיניות המכשירים המהימנים של ה-tenant; הוא לא יכול להפעיל את התכונה כשמדיניות ה-tenant כבויה.',
    organization_allow_description: 'לאפשר אימות באמצעות מכשירים מהימנים לחברי הארגון הזה.',
    organization_global_disabled:
      'יש להפעיל מכשירים מהימנים בהגדרות ה-MFA של ה-tenant לפני שמאפשרים אותם לארגון זה.',
    management_description:
      'ניהול הדפדפנים שמשתמש זה סימן כמהימנים לאחר השלמת MFA. הסרת דפדפן תחייב MFA מחדש בדפדפן זה בכניסה הבאה.',
    management_hint: 'המיקום האחרון מוצג לידיעה בלבד.',
    management_empty: 'למשתמש זה אין מכשירים מהימנים פעילים.',
    management_deletion_confirmation: 'להסיר את {{name}}? דפדפן זה ידרוש MFA שוב בכניסה הבאה.',
    management_removed: 'המכשיר המהימן הוסר.',
  },
};

export default Object.freeze(mfa);
