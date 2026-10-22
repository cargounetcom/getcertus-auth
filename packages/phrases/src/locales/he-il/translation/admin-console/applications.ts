/* GetCertus addition (MPL-2.0, see GETCERTUS.md): admin console phrases. */
const applications = {
  page_title: 'אפליקציות',
  title: 'אפליקציות',
  subtitle: 'יצירה וניהול של אפליקציות לאימות OIDC.',
  subtitle_with_app_type: 'הגדרת אימות GetCertus לאפליקציית {{name}} שלך',
  create_device_flow_description:
    'יצירת אפליקציה נייטיב שמשתמשת ב-OAuth 2.0 Device Authorization Grant עבור מכשירים עם קלט מוגבל או אפליקציות ללא ממשק.',
  create: 'יצירת אפליקציה',
  create_third_party: 'יצירת אפליקציית צד שלישי',
  create_thrid_party_modal_title: 'יצירת אפליקציית צד שלישי ({{type}})',
  application_name: 'שם האפליקציה',
  application_name_placeholder: 'האפליקציה שלי',
  application_description: 'תיאור האפליקציה',
  application_description_placeholder: 'יש להזין תיאור של האפליקציה',
  select_application_type: 'בחירת סוג אפליקציה',
  no_application_type_selected: 'עדיין לא נבחר סוג אפליקציה',
  application_created: 'האפליקציה נוצרה בהצלחה.',
  tab: {
    my_applications: 'האפליקציות שלי',
    third_party_applications: 'אפליקציות צד שלישי',
  },
  app_id: 'מזהה אפליקציה',
  type: {
    native: {
      title: 'אפליקציה נייטיב',
      subtitle: 'אפליקציה שרצה בסביבה נייטיב',
      description: 'לדוגמה אפליקציית iOS, ‏Android, מחשב שולחני, טלוויזיה, CLI',
    },
    spa: {
      title: 'אפליקציית עמוד יחיד',
      subtitle: 'אפליקציה שרצה בדפדפן ומעדכנת נתונים במקום',
      description: 'לדוגמה אפליקציית React DOM, אפליקציית Vue',
    },
    traditional: {
      title: 'אתר מסורתי',
      subtitle: 'אפליקציה שהעמודים שלה נוצרים ומתעדכנים על ידי שרת האינטרנט בלבד',
      description: 'לדוגמה Next.js,‏ PHP',
    },
    machine_to_machine: {
      title: 'מכונה למכונה',
      subtitle: 'אפליקציה (בדרך כלל שירות) שמתקשרת ישירות עם משאבים',
      description: 'לדוגמה שירות צד שרת',
    },
    protected: {
      title: 'אפליקציה מוגנת',
      subtitle: 'אפליקציה שמוגנת על ידי GetCertus',
      description: 'לא רלוונטי',
    },
    saml: {
      title: 'אפליקציית SAML',
      subtitle: 'אפליקציה שמשמשת כמחבר SAML IdP',
      description: 'לדוגמה SAML',
    },
    third_party: {
      title: 'אפליקציית צד שלישי',
      subtitle: 'אפליקציה שמשמשת כמחבר IdP של צד שלישי',
      description: 'לדוגמה OIDC',
    },
  },
  authorization_flow: {
    title: 'זרימת הרשאה',
    tooltip: 'יש לבחור את זרימת ההרשאה של האפליקציה. לאחר ההגדרה אי אפשר לשנות אותה.',
    authorization_code: {
      title: 'קוד הרשאה',
      description:
        'סוג ההענקה המוגדר כברירת מחדל והנפוץ ביותר. המשתמשים מועברים לדף התחברות כדי לאשר גישה ישירות.',
    },
    device_flow: {
      title: 'זרימת מכשיר',
      description:
        'למכשירים עם קלט מוגבל או אפליקציות ללא ממשק (לדוגמה טלוויזיות, CLI). המשתמשים משלימים את ההתחברות במכשיר אחר על ידי הזנת קוד מכשיר או סריקת קוד QR.',
    },
  },
  placeholder_title: 'יש לבחור סוג אפליקציה כדי להמשיך',
  placeholder_description:
    'GetCertus משתמש בישות אפליקציה עבור OIDC, למשל כדי לזהות את האפליקציות שלך, לנהל התחברות וליצור יומני ביקורת.',
  third_party_application_placeholder_description:
    'אפשר להשתמש ב-GetCertus כספק זהות כדי לתת הרשאת OAuth לשירותי צד שלישי, כולל מסך הסכמה מוכן לגישה למשאבים. <a>מידע נוסף</a>',
  dynamic_app: {
    title: 'אפליקציה דינמית',
    subtitle: 'CIMD',
    description: 'אפליקציה דינמית מאפשרת ללקוחות OAuth להתחבר ללא רישום מראש.',
    settings_description:
      'אפליקציה דינמית מאפשרת ללקוחות OAuth להתחבר ללא רישום מראש. משתמשת במפרט OAuth Client ID Metadata Document ‏(CIMD).',
    beta_notice:
      'אפליקציות דינמיות נמצאות בגרסת בטא. מוזמנים לנסות ו<ContactLink>לשתף משוב</ContactLink>.',
    app_id_placeholder: 'מסופק באופן דינמי על ידי כל לקוח',
    enable_confirm_modal: {
      title: 'להפעיל גישה דינמית ללקוחות?',
      content:
        'כל לקוח OAuth עם כתובת URL ציבורית תקינה ב-HTTPS כמזהה לקוח יוכל להתחיל הרשאה עבור הדייר הזה ללא רישום מראש. הגישה עדיין מוגבלת בהרשאות המרביות ובהסכמת המשתמש.',
      beta_pricing_notice:
        'אפליקציות דינמיות חינמיות בזמן הבטא. לאחר מכן ייתכן תמחור כתוסף. נודיע מראש, ואפשר לכבות זאת בכל עת.',
    },
    enabled: 'האפליקציה הדינמית הופעלה.',
    disable_confirm_modal: {
      title: 'להשבית את האפליקציה הדינמית?',
      content:
        'לקוחות CIMD לא יוכלו עוד להתחיל בקשות הרשאה חדשות. הענקות קיימות יישמרו, ואסימוני גישה שכבר הונפקו עשויים להישאר בתוקף עד שיפוג תוקפם.',
    },
    disabled: 'האפליקציה הדינמית הושבתה.',
    permissions: {
      user_title: 'משתמש',
      user_description: 'יש לבחור את ההרשאות שלקוחות OAuth מבקשים לגישה לנתוני משתמש מסוימים.',
      grant_user_level_permissions: 'הענקת הרשאות משתמש',
      organization_title: 'ארגון',
      organization_description:
        'יש לבחור את ההרשאות שלקוחות OAuth מבקשים לגישה לנתוני ארגון מסוימים.',
      grant_organization_level_permissions: 'הענקת הרשאות ארגון',
      permission_delete_confirm:
        'ההרשאה תוסר מהאפליקציה הדינמית, ולקוחות OAuth לא יוכלו עוד לבקש עבורה הרשאה מהמשתמש. להמשיך?',
    },
    client_compatibility: {
      title: 'תאימות לקוחות',
      description:
        'כאן קובעים איך GetCertus מטפל בבקשות הרשאה מלקוחות OAuth שעדיין לא תומכים באופן מלא ב-OpenID Connect. ההגדרות ניסיוניות ועשויות להשתנות או להיעלם.',
      add_consent_prompt_for_offline_access: 'הוספת בקשת הסכמה לגישה לא מקוונת',
      add_consent_prompt_for_offline_access_description:
        'כשלקוח OAuth מבקש `offline_access` בלי `prompt=consent`, ‏GetCertus מוסיף את בקשת ההסכמה כדי שהלקוח יוכל לקבל אסימון רענון. מומלץ ללקוחות כמו ChatGPT ו-Codex.',
    },
  },
  guide: {
    third_party: {
      title: 'שילוב אפליקציית צד שלישי',
      description:
        'אפשר להשתמש ב-GetCertus כספק הזהות שלך כדי לתת הרשאת OAuth לשירותי צד שלישי, כולל מסך הסכמה מוכן לגישה מאובטחת למשאבים. <a>מידע נוסף</a>',
    },
  },
};

export default Object.freeze(applications);
