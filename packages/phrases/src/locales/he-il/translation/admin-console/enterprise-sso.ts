/* GetCertus addition (MPL-2.0, see GETCERTUS.md): admin console phrases. */
const enterprise_sso = {
  page_title: 'SSO ארגוני',
  title: 'SSO ארגוני',
  subtitle: 'חברו את ספק הזהויות הארגוני והפעילו התחברות יחידה (SSO).',
  create: 'הוספת מחבר ארגוני',
  col_connector_name: 'שם המחבר',
  col_type: 'סוג',
  col_email_domain: 'דומיין אימייל',
  placeholder_title: 'מחבר ארגוני',
  placeholder_description:
    'GetCertus מספק ספקי זהויות ארגוניים מובנים רבים, ואפשר גם ליצור מחברים משלכם עם הפרוטוקולים SAML ו-OIDC.',
  create_modal: {
    title: 'הוספת מחבר ארגוני',
    text_divider: 'או התאימו את המחבר באמצעות פרוטוקול סטנדרטי.',
    connector_name_field_title: 'שם המחבר',
    connector_name_field_placeholder: 'לדוגמה: {שם החברה} - {שם ספק הזהויות}',
    create_button_text: 'יצירת מחבר',
  },
  guide: {
    subtitle: 'מדריך שלב אחר שלב לחיבור ספק הזהויות הארגוני.',
    finish_button_text: 'המשך',
  },
  basic_info: {
    title: 'הגדירו את השירות שלכם ב-IdP',
    description:
      'צרו שילוב אפליקציה חדש באמצעות SAML 2.0 בספק הזהויות {{name}}. לאחר מכן הדביקו בו את הערך הבא.',
    saml: {
      acs_url_field_name: 'כתובת שירות Assertion Consumer (Reply URL)',
      audience_uri_field_name: 'Audience URI (SP Entity ID)',
      entity_id_field_name: 'Entity ID של ספק השירות (SP)',
      entity_id_field_tooltip:
        'ה-SP Entity ID יכול להיות כל מחרוזת, בדרך כלל URI או URL כמזהה, אבל זו לא חובה.',
      acs_url_field_placeholder: 'https://your-domain.com/api/saml/callback',
      entity_id_field_placeholder: 'urn:your-domain.com:sp:saml:{serviceProviderId}',
      sign_auth_request: 'חתימה על בקשת האימות',
      sign_auth_request_tooltip:
        'GetCertus חותם על בקשות אימות SAML באמצעות תעודה שנוצרה. הפעילו רק אם ספק הזהויות מוגדר לאמת בקשות חתומות.',
      signing_certificate_field_name: 'תעודה לחתימת בקשות',
      signing_keys_empty: 'לא נוצרו מפתחות חתימה.',
      generate_signing_key: 'יצירת מפתח חדש',
      signing_key_generated: 'מפתח החתימה נוצר.',
      signing_key_activated: 'מפתח החתימה הופעל.',
      signing_key_deactivated: 'מפתח החתימה הושבת.',
      signing_key_deleted: 'מפתח החתימה נמחק.',
      sign_auth_request_warning:
        'לאחר ההפעלה, צרו למטה מפתח חתימה ורשמו את התעודה שלו אצל ספק הזהויות (והפעילו שם אימות של בקשות חתומות). עד שהתעודה תירשם, ההתחברות דרך החיבור הזה תיכשל.',
    },
    oidc: {
      redirect_uri_field_name: 'URI להפניה (Callback URL)',
      redirect_uri_field_description:
        'ה-URI להפניה הוא המקום שאליו מופנים המשתמשים לאחר אימות SSO. הוסיפו URI זה להגדרות ה-IdP שלכם.',
      redirect_uri_field_custom_domain_description:
        'אם אתם משתמשים בכמה <a>דומיינים מותאמים</a> ב-GetCertus, הוסיפו את כל כתובות ה-callback המתאימות ל-IdP כדי שה-SSO יעבוד בכל דומיין.\n\nדומיין ברירת המחדל של GetCertus (*.logto.app) תמיד תקף — הוסיפו אותו רק אם תרצו לתמוך גם ב-SSO דרכו.',
    },
  },
  attribute_mapping: {
    title: 'מיפוי מאפיינים',
    description:
      'השדות `id` ו-`email` נדרשים כדי לסנכרן את פרופיל המשתמש מה-IdP. הזינו ב-IdP את שם ה-claim והערך הבאים.',
    col_sp_claims: 'ערך של ספק השירות (GetCertus)',
    col_idp_claims: 'שם ה-claim אצל ספק הזהויות',
    idp_claim_tooltip: 'שם ה-claim אצל ספק הזהויות',
  },
  metadata: {
    title: 'הגדרת המטא-נתונים של ה-IdP',
    description: 'הגדירו את המטא-נתונים מספק הזהויות',
    dropdown_trigger_text: 'שימוש בשיטת הגדרה אחרת',
    dropdown_title: 'בחרו את שיטת ההגדרה',
    metadata_format_url: 'הזינו את כתובת המטא-נתונים',
    metadata_format_xml: 'העלו את קובץ ה-XML של המטא-נתונים',
    metadata_format_manual: 'הזינו את המטא-נתונים ידנית',
    saml: {
      metadata_url_field_name: 'כתובת המטא-נתונים',
      metadata_url_description:
        'שליפה דינמית של הנתונים מכתובת המטא-נתונים ושמירה על התעודה מעודכנת.',
      metadata_xml_field_name: 'קובץ XML של מטא-נתוני ה-IdP',
      metadata_xml_uploader_text: 'העלאת קובץ XML של מטא-נתונים',
      sign_in_endpoint_field_name: 'כתובת התחברות',
      idp_entity_id_field_name: 'Entity ID של ה-IdP (Issuer)',
      certificate_field_name: 'תעודת חתימה',
      certificate_placeholder: 'העתיקו והדביקו את תעודת ה-x509',
      certificate_required: 'נדרשת תעודת חתימה.',
    },
    oidc: {
      client_id_field_name: 'Client ID',
      client_secret_field_name: 'סוד לקוח',
      issuer_field_name: 'מנפיק',
      scope_field_name: 'Scope',
      scope_field_placeholder: 'הזינו את ה-scopes (מופרדים ברווח)',
    },
  },
};

export default Object.freeze(enterprise_sso);
