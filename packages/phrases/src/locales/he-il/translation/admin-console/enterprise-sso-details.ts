/* GetCertus addition (MPL-2.0, see GETCERTUS.md): admin console phrases. */
const enterprise_sso_details = {
  back_to_sso_connectors: 'חזרה ל-SSO ארגוני',
  page_title: 'פרטי מחבר SSO ארגוני',
  readme_drawer_title: 'SSO ארגוני',
  readme_drawer_subtitle: 'הגדירו מחברי SSO ארגוניים כדי לאפשר SSO למשתמשי הקצה',
  tab_experience: 'חוויית SSO',
  tab_connection: 'חיבור',
  tab_idp_initiated_auth: 'SSO ביוזמת IdP',
  general_settings_title: 'כללי',
  general_settings_description:
    'הגדירו את חוויית משתמש הקצה וקשרו את דומיין האימייל הארגוני לזרימת SSO ביוזמת SP.',
  custom_branding_title: 'תצוגה',
  custom_branding_description:
    'התאימו את השם והלוגו שמוצגים למשתמשי הקצה בזרימת ההתחברות היחידה. אם השדות ריקים, ישמשו ברירות המחדל.',
  email_domain_field_name: 'דומייני אימייל ארגוניים',
  email_domain_field_description:
    'משתמשים עם דומייני האימייל האלה יכולים להשתמש ב-SSO לאימות. אמתו את הבעלות על הדומיין לפני ההוספה.',
  email_domain_field_placeholder: 'הזינו דומיין אימייל אחד או יותר (לדוגמה yourcompany.co.il)',
  sync_profile_field_name: 'סנכרון פרטי הפרופיל מספק הזהויות',
  sync_profile_option: {
    register_only: 'סנכרון רק בהתחברות הראשונה',
    each_sign_in: 'סנכרון בכל התחברות',
  },
  connector_name_field_name: 'שם המחבר',
  display_name_field_name: 'שם תצוגה',
  connector_logo_field_name: 'לוגו לתצוגה',
  connector_logo_field_description:
    'כל תמונה צריכה להיות קטנה מ-500KB, בפורמט SVG, PNG, JPG או JPEG בלבד.',
  branding_logo_context: 'העלאת לוגו',
  branding_logo_error: 'שגיאה בהעלאת הלוגו: {{error}}',
  branding_light_logo_context: 'העלאת לוגו למצב בהיר',
  branding_light_logo_error: 'שגיאה בהעלאת הלוגו למצב בהיר: {{error}}',
  branding_logo_field_name: 'לוגו',
  branding_logo_field_placeholder: 'https://your.domain/logo.png',
  branding_dark_logo_context: 'העלאת לוגו למצב כהה',
  branding_dark_logo_error: 'שגיאה בהעלאת הלוגו למצב כהה: {{error}}',
  branding_dark_logo_field_name: 'לוגו (מצב כהה)',
  branding_dark_logo_field_placeholder: 'https://your.domain/dark-mode-logo.png',
  check_connection_guide: 'מדריך החיבור',
  enterprise_sso_deleted: 'מחבר ה-SSO הארגוני נמחק בהצלחה',
  delete_confirm_modal_title: 'מחיקת מחבר SSO ארגוני',
  delete_confirm_modal_content:
    'האם אתם בטוחים שברצונכם למחוק את המחבר הארגוני? משתמשים מספקי הזהויות לא יוכלו עוד להשתמש בהתחברות יחידה.',
  upload_idp_metadata_title_saml: 'העלאת המטא-נתונים',
  upload_idp_metadata_description_saml: 'הגדירו את המטא-נתונים שהועתקו מספק הזהויות.',
  upload_idp_metadata_title_oidc: 'העלאת פרטי הגישה',
  upload_idp_metadata_description_oidc:
    'הגדירו את פרטי הגישה ואת פרטי אסימון ה-OIDC שהועתקו מספק הזהויות.',
  upload_idp_metadata_button_text: 'העלאת קובץ XML של מטא-נתונים',
  upload_signing_certificate_button_text: 'העלאת קובץ תעודת חתימה',
  configure_domain_field_info_text:
    'הוסיפו דומיין אימייל כדי להפנות משתמשים ארגוניים לספק הזהויות שלהם להתחברות יחידה.',
  email_domain_field_required: 'נדרש דומיין אימייל כדי להפעיל SSO ארגוני.',
  upload_saml_idp_metadata_info_text_url: 'הדביקו את כתובת המטא-נתונים מספק הזהויות כדי להתחבר.',
  upload_saml_idp_metadata_info_text_xml: 'הדביקו את המטא-נתונים מספק הזהויות כדי להתחבר.',
  upload_saml_idp_metadata_info_text_manual: 'מלאו את המטא-נתונים מספק הזהויות כדי להתחבר.',
  upload_oidc_idp_info_text: 'מלאו את הפרטים מספק הזהויות כדי להתחבר.',
  service_provider_property_title: 'הגדרה ב-IdP',
  service_provider_property_description:
    'הגדירו שילוב אפליקציה באמצעות {{protocol}} בספק הזהויות. הזינו את הפרטים ש-GetCertus מספק.',
  attribute_mapping_title: 'מיפוי מאפיינים',
  attribute_mapping_description:
    'סנכרנו את פרופילי המשתמשים מספק הזהויות באמצעות הגדרת מיפוי מאפיינים בצד ספק הזהויות או בצד GetCertus.',
  saml_preview: {
    sign_on_url: 'כתובת התחברות',
    entity_id: 'מנפיק',
    x509_certificate: 'תעודת חתימה',
    certificate_content: 'פג תוקף ב-{{date}}',
  },
  oidc_preview: {
    authorization_endpoint: 'נקודת קצה להרשאה',
    token_endpoint: 'נקודת קצה לאסימונים',
    userinfo_endpoint: 'נקודת קצה לפרטי משתמש',
    jwks_uri: 'נקודת קצה ל-JSON Web Key Set',
    issuer: 'מנפיק',
  },
  idp_initiated_auth_config: {
    card_title: 'SSO ביוזמת IdP',
    card_description:
      'משתמשים בדרך כלל מתחילים את האימות מהאפליקציה שלכם בזרימת SSO ביוזמת SP. אל תפעילו תכונה זו אלא אם יש בה צורך מוחלט.',
    enable_idp_initiated_sso: 'הפעלת SSO ביוזמת IdP',
    enable_idp_initiated_sso_description:
      'אפשרו למשתמשים ארגוניים להתחיל את האימות ישירות מהפורטל של ספק הזהויות. הבינו את סיכוני האבטחה האפשריים לפני ההפעלה.',
    default_application: 'אפליקציית ברירת מחדל',
    default_application_tooltip: 'אפליקציית היעד שאליה המשתמש יופנה לאחר האימות.',
    empty_applications_error: 'לא נמצאו אפליקציות. הוסיפו אחת באזור <a>אפליקציות</a>.',
    empty_applications_placeholder: 'אין אפליקציות',
    authentication_type: 'סוג אימות',
    auto_authentication_disabled_title: 'הפניה ללקוח עבור SSO ביוזמת SP',
    auto_authentication_disabled_description:
      'מומלץ. הפנו את המשתמשים לאפליקציית הלקוח כדי להתחיל אימות OIDC מאובטח ביוזמת SP. זה מונע מתקפות CSRF.',
    auto_authentication_enabled_title: 'התחברות ישירה באמצעות SSO ביוזמת IdP',
    auto_authentication_enabled_description:
      'לאחר התחברות מוצלחת, המשתמשים יופנו ל-URI ההפניה שהוגדר עם קוד ההרשאה (ללא אימות state ו-PKCE).',
    auto_authentication_disabled_app: 'לאפליקציית ווב מסורתית ולאפליקציית עמוד יחיד (SPA)',
    auto_authentication_enabled_app: 'לאפליקציית ווב מסורתית',
    idp_initiated_auth_callback_uri: 'Callback URI של הלקוח',
    idp_initiated_auth_callback_uri_tooltip:
      'ה-callback URI של הלקוח להתחלת זרימת אימות SSO ביוזמת SP. ל-URI יתווסף ssoConnectorId כפרמטר שאילתה. (לדוגמה https://your.domain/sso/callback?connectorId={{ssoConnectorId}})',
    redirect_uri: 'URI להפניה לאחר התחברות',
    redirect_uri_tooltip:
      'ה-URI שאליו מופנים המשתמשים לאחר התחברות מוצלחת. GetCertus ישתמש בו כ-URI ההפניה של OIDC בבקשת ההרשאה. לאבטחה טובה יותר, השתמשו ב-URI ייעודי לזרימת SSO ביוזמת IdP.',
    empty_redirect_uris_error: 'לא נרשם URI הפניה לאפליקציה. הוסיפו אחד קודם.',
    redirect_uri_placeholder: 'בחרו URI להפניה לאחר התחברות',
    auth_params: 'פרמטרי אימות נוספים',
    auth_params_tooltip:
      'פרמטרים נוספים שיישלחו בבקשת ההרשאה. כברירת מחדל מתבקשים רק ה-scopes (openid profile); כאן אפשר לציין scopes נוספים או ערך state ייחודי. (לדוגמה { "scope": "organizations email", "state": "secret_state" }).',
  },
  trust_unverified_email: 'אמון באימייל לא מאומת',
  trust_unverified_email_label: 'תמיד לסמוך על כתובות אימייל לא מאומתות שמוחזרות מספק הזהויות',
  trust_unverified_email_tip:
    'מחבר Entra ID (OIDC) לא מחזיר את ה-claim `email_verified`, ולכן אין ודאות שכתובות האימייל מ-Azure מאומתות. כברירת מחדל, GetCertus לא מסנכרן כתובות אימייל לא מאומתות לפרופיל המשתמש. הפעילו אפשרות זו רק אם אתם סומכים על כל כתובות האימייל בספריית Entra ID.',
  trust_unverified_email_tip_oidc:
    'ייתכן שמחבר ה-OIDC לא מחזיר את ה-claim `email_verified`, ולכן אין ודאות שכתובות האימייל מספק הזהויות מאומתות. כברירת מחדל, GetCertus לא מסנכרן כתובות אימייל לא מאומתות לפרופיל המשתמש. הפעילו אפשרות זו רק אם אתם סומכים על כל כתובות האימייל מספק הזהויות.',
  offline_access: {
    label: 'רענון אסימון הגישה',
    description:
      'הפעילו גישת `offline` של Google כדי לבקש אסימון רענון, כך שהאפליקציה תוכל לרענן את אסימון הגישה בלי הרשאה מחודשת מהמשתמש.',
  },
};

export default Object.freeze(enterprise_sso_details);
