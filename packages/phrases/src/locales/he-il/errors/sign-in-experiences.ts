/* GetCertus addition (MPL-2.0, see GETCERTUS.md): admin console phrases. */
const sign_in_experiences = {
  empty_content_url_of_terms_of_use:
    'כתובת התוכן של "תנאי השימוש" ריקה. יש להוסיף את כתובת התוכן אם "תנאי השימוש" מופעלים.',
  empty_social_connectors:
    'אין מחברים חברתיים. יש להוסיף מחברים חברתיים מופעלים כששיטת הכניסה החברתית מופעלת.',
  enabled_connector_not_found: 'מחבר {{type}} מופעל לא נמצא.',
  not_one_and_only_one_primary_sign_in_method:
    'חייבת להיות שיטת כניסה ראשית אחת בלבד. יש לבדוק את הפרטים שהוזנו.',
  username_requires_password: 'עבור מזהה ההרשמה שם משתמש יש להפעיל הגדרת סיסמה.',
  passwordless_requires_verify: 'עבור מזהה ההרשמה דוא"ל/טלפון יש להפעיל אימות.',
  miss_sign_up_identifier_in_sign_in: 'שיטות הכניסה חייבות לכלול את מזהה ההרשמה.',
  password_sign_in_must_be_enabled: 'כניסה עם סיסמה חייבת להיות מופעלת כשהגדרת סיסמה נדרשת בהרשמה.',
  code_sign_in_must_be_enabled:
    'כניסה עם קוד אימות חייבת להיות מופעלת כשהגדרת סיסמה אינה נדרשת בהרשמה.',
  unsupported_default_language: 'השפה {{language}} אינה נתמכת כרגע.',
  at_least_one_authentication_factor: 'יש לבחור לפחות גורם אימות אחד.',
  backup_code_cannot_be_enabled_alone: 'לא ניתן להפעיל קוד גיבוי לבדו.',
  duplicated_mfa_factors: 'גורמי MFA כפולים.',
  email_verification_code_cannot_be_used_for_mfa:
    'לא ניתן להשתמש בקוד אימות בדוא"ל עבור MFA כשאימות בדוא"ל מופעל לכניסה.',
  phone_verification_code_cannot_be_used_for_mfa:
    'לא ניתן להשתמש בקוד אימות ב-SMS עבור MFA כשאימות ב-SMS מופעל לכניסה.',
  email_verification_code_cannot_be_used_for_sign_in:
    'לא ניתן להשתמש בקוד אימות בדוא"ל לכניסה כשהוא מופעל עבור MFA.',
  phone_verification_code_cannot_be_used_for_sign_in:
    'לא ניתן להשתמש בקוד אימות ב-SMS לכניסה כשהוא מופעל עבור MFA.',
  adaptive_mfa_requires_mfa: 'יש להפעיל MFA לפני הפעלת MFA אדפטיבי.',
  adaptive_mfa_requires_non_skippable_policy:
    'MFA אדפטיבי דורש מדיניות בקשת MFA שאי אפשר לדלג עליה. יש להשתמש ב-PromptOnlyAtSignInMandatory או ב-PromptAtSignInAndSignUpMandatory.',
  non_adaptive_mfa_requires_skippable_policy:
    'כש-MFA אדפטיבי מושבת, מדיניות בקשת ה-MFA חייבת לאפשר דילוג. אין להשתמש ב-PromptOnlyAtSignInMandatory או ב-PromptAtSignInAndSignUpMandatory.',
  duplicated_sign_up_identifiers: 'זוהו מזהי הרשמה כפולים.',
  missing_sign_up_identifiers: 'מזהה ההרשמה הראשי לא יכול להיות ריק.',
  invalid_custom_email_blocklist_format:
    'פריטים לא תקינים ברשימת חסימת הדוא"ל המותאמת אישית: {{items, list(type:conjunction)}}. כל פריט חייב להיות כתובת דוא"ל או דומיין דוא"ל תקין, לדוגמה foo@example.com או @example.com.',
  forgot_password_method_requires_connector: 'שיטת שחזור הסיסמה דורשת מחבר {{method}} מוגדר.',
  password_expiration_requires_forgot_password:
    'תפוגת סיסמה דורשת לפחות שיטת שחזור סיסמה אחת עם מחבר תקין.',
  password_expiration_not_enabled:
    'מדיניות תפוגת הסיסמה אינה מופעלת. יש להפעיל אותה בהגדרות חוויית הכניסה לפני שמגדירים תפוגה לסיסמאות.',
  password_expiration_invalid_period_days:
    'מספר ימי התוקף חייב להיות מספר שלם חיובי כשתפוגת סיסמה מופעלת.',
  username_policy_case_conflicts_exist:
    'לא ניתן לעבור לשמות משתמש שאינם תלויי רישיות כל עוד קיימים שמות משתמש שנבדלים רק ברישיות. יש לפתור את ההתנגשויות ולנסות שוב.',
};

export default Object.freeze(sign_in_experiences);
