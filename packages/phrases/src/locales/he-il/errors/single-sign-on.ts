/* GetCertus addition (MPL-2.0, see GETCERTUS.md): admin console phrases. */
const single_sign_on = {
  forbidden_domains: 'דומייני דוא"ל ציבוריים אינם מותרים.',
  duplicated_domains: 'יש דומיינים כפולים.',
  invalid_domain_format: 'פורמט דומיין לא תקין.',
  duplicate_connector_name: 'שם המחבר כבר קיים. יש לבחור שם אחר.',
  idp_initiated_authentication_not_supported: 'אימות שיוזם ה-IdP נתמך רק עבור מחברי SAML.',
  idp_initiated_authentication_invalid_application_type:
    'סוג אפליקציה לא תקין. רק אפליקציות {{type}} מותרות.',
  idp_initiated_authentication_redirect_uri_not_registered:
    'ה-redirect_uri אינו רשום. יש לבדוק את הגדרות האפליקציה.',
  idp_initiated_authentication_client_callback_uri_not_found:
    'כתובת ה-callback של הלקוח לאימות שיוזם ה-IdP לא נמצאה. יש לבדוק את הגדרות המחבר.',
  sso_signing_unavailable: 'לא הצלחנו להשלים את הכניסה דרך ספק הזהות שלך. יש לפנות למנהל.',
  can_not_delete_active_signing_key:
    'לא ניתן למחוק את מפתח החתימה הפעיל. יש להפעיל מפתח אחר או להשבית קודם מפתח זה.',
  can_not_deactivate_signing_key_in_use:
    'לא ניתן להשבית את מפתח החתימה כל עוד בקשות אימות חתומות מופעלות. יש להשבית קודם את בקשות האימות החתומות.',
  active_signing_key_required:
    'לא נמצא מפתח חתימה פעיל. יש ליצור ולהפעיל מפתח חתימה לפני הפעלת בקשות אימות חתומות.',
};

export default Object.freeze(single_sign_on);
