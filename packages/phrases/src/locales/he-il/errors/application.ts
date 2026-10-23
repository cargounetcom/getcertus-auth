/* GetCertus addition (MPL-2.0, see GETCERTUS.md): admin console phrases. */
const application = {
  invalid_type: 'רק לאפליקציות מכונה למכונה יכולים להיות תפקידים משויכים.',
  role_exists: 'מזהה התפקיד {{roleId}} כבר נוסף לאפליקציה זו.',
  invalid_role_type: 'לא ניתן להקצות תפקיד מסוג משתמש לאפליקציית מכונה למכונה.',
  invalid_third_party_application_type:
    'רק אפליקציות אינטרנט מסורתיות, אפליקציות עמוד יחיד ואפליקציות נייטיב יכולות להיות מסומנות כאפליקציות צד שלישי.',
  third_party_application_only: 'התכונה זמינה רק לאפליקציות צד שלישי.',
  third_party_application_cannot_enable_token_exchange:
    'אפליקציות צד שלישי אינן רשאיות להפעיל token exchange.',
  user_consent_scopes_not_found: 'scopes של הסכמת משתמש אינם תקינים.',
  consent_management_api_scopes_not_allowed: 'scopes של Management API אינם מותרים.',
  device_flow_native_only: 'Device flow זמין רק לאפליקציות נייטיב.',
  device_flow_not_changeable: 'לא ניתן לשנות את ה-device flow לאחר יצירת האפליקציה.',
  protected_app_metadata_is_required: 'נדרשים מטא-נתונים של האפליקציה המוגנת.',
  protected_app_not_configured:
    'ספק האפליקציות המוגנות אינו מוגדר. התכונה אינה זמינה בגרסת הקוד הפתוח.',
  cloudflare_unknown_error: 'שגיאה לא ידועה בבקשה ל-Cloudflare API',
  protected_application_only: 'התכונה זמינה רק לאפליקציות מוגנות.',
  protected_application_misconfigured: 'האפליקציה המוגנת מוגדרת באופן שגוי.',
  protected_application_subdomain_exists: 'תת-הדומיין של האפליקציה המוגנת כבר בשימוש.',
  invalid_subdomain: 'תת-דומיין לא תקין.',
  custom_domain_not_found: 'הדומיין המותאם אישית לא נמצא.',
  should_delete_custom_domains_first: 'יש למחוק קודם את הדומיינים המותאמים אישית.',
  no_legacy_secret_found: 'לאפליקציה אין סוד ישן.',
  secret_name_exists: 'כבר קיים סוד בשם זה.',
  sync_application_secret_failed: 'סנכרון סוד האפליקציה נכשל.',
  saml: {
    use_saml_app_api:
      'יש להשתמש ב-API `[METHOD] /saml-applications(/.*)?` כדי לנהל אפליקציות SAML.',
    saml_application_only: 'ה-API זמין רק לאפליקציות SAML.',
    reach_oss_limit: 'לא ניתן ליצור עוד אפליקציות SAML, כי הגעת למגבלה של {{limit}}.',
    acs_url_binding_not_supported: 'לקבלת SAML assertions נתמך רק binding מסוג HTTP-POST.',
    acs_url_scheme_not_supported:
      'עבור כתובת ה-URL של Assertion Consumer Service נתמכות רק הסכמות HTTP ו-HTTPS.',
    can_not_delete_active_secret: 'לא ניתן למחוק את הסוד הפעיל.',
    no_active_secret: 'לא נמצא סוד פעיל.',
    entity_id_required: 'נדרש Entity ID כדי ליצור מטא-נתונים.',
    name_id_format_required: 'נדרש פורמט Name ID.',
    unsupported_name_id_format: 'פורמט Name ID שאינו נתמך.',
    missing_email_address: 'למשתמש אין כתובת דוא"ל.',
    email_address_unverified: 'כתובת הדוא"ל של המשתמש לא אומתה.',
    invalid_certificate_pem_format: 'פורמט PEM לא תקין של התעודה',
    acs_url_required: 'נדרשת כתובת URL של Assertion Consumer Service.',
    private_key_required: 'נדרש מפתח פרטי.',
    certificate_required: 'נדרשת תעודה.',
    invalid_saml_request: 'בקשת אימות SAML לא תקינה.',
    auth_request_issuer_not_match:
      'המנפיק של בקשת אימות ה-SAML אינו תואם ל-Entity ID של ספק השירות.',
    sp_initiated_saml_sso_session_not_found_in_cookies:
      'מזהה הסשן של SAML SSO שיזם ספק השירות לא נמצא ב-cookies.',
    sp_initiated_saml_sso_session_not_found: 'סשן ה-SAML SSO שיזם ספק השירות לא נמצא.',
    state_mismatch: '`state` אינו תואם.',
  },
};

export default Object.freeze(application);
