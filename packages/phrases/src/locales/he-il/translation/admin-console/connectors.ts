/* GetCertus addition (MPL-2.0, see GETCERTUS.md): admin console phrases. */
const connectors = {
  page_title: 'מחברים',
  title: 'מחברים',
  subtitle: 'הגדירו מחברים להתחברות ללא סיסמה ובאמצעות רשתות חברתיות',
  create: 'הוספת מחבר חברתי',
  config_sie_notice: 'הגדרתם מחברים. הקפידו להגדיר אותם גם ב<a>{{link}}</a>.',
  config_sie_link_text: 'חוויית ההתחברות',
  tab_email_sms: 'מחברי אימייל ו-SMS',
  tab_social: 'מחברים חברתיים',
  connector_name: 'שם המחבר',
  demo_tip: 'מחבר ההדגמה מוגבל ל-100 הודעות לכל היותר ואינו מומלץ לסביבת ייצור.',
  social_demo_tip: 'מחבר ההדגמה מיועד להדגמה בלבד ואינו מומלץ לסביבת ייצור.',
  connector_type: 'סוג',
  placeholder_title: 'מחבר חברתי',
  placeholder_description:
    'GetCertus מספק מחברים נפוצים רבים להתחברות חברתית, ואפשר גם ליצור מחברים משלכם עם פרוטוקולים סטנדרטיים.',
  save_and_done: 'שמירה וסיום',
  type: {
    email: 'מחבר אימייל',
    sms: 'מחבר SMS',
    social: 'מחבר חברתי',
  },
  setup_title: {
    email: 'הגדרת מחבר אימייל',
    sms: 'הגדרת מחבר SMS',
    social: 'הוספת מחבר חברתי',
  },
  guide: {
    subtitle: 'מדריך שלב אחר שלב להגדרת המחבר',
    general_setting: 'הגדרות כלליות',
    parameter_configuration: 'הגדרת פרמטרים',
    test_connection: 'בדיקת חיבור',
    name: 'שם לכפתור ההתחברות החברתית',
    name_placeholder: 'הזינו שם לכפתור ההתחברות החברתית',
    name_tip: 'כפתור המחבר יוצג כ-"המשך עם {{name}}". שימו לב שהשם לא יהיה ארוך מדי.',
    connector_logo: 'לוגו המחבר',
    connector_logo_tip: 'הלוגו יוצג על כפתור ההתחברות של המחבר.',
    target: 'שם ספק הזהויות',
    target_placeholder: 'הזינו את שם ספק הזהויות של המחבר',
    target_tip: 'הערך “שם IdP” יכול להיות מחרוזת מזהה ייחודית שמבדילה בין הזהויות החברתיות שלכם.',
    target_tip_standard:
      'הערך “שם IdP” יכול להיות מחרוזת מזהה ייחודית שמבדילה בין הזהויות החברתיות שלכם. לא ניתן לשנות הגדרה זו לאחר יצירת המחבר.',
    target_tooltip:
      '"שם IdP" במחברים החברתיים של GetCertus מתייחס ל"מקור" של הזהויות החברתיות שלכם. כדי למנוע התנגשויות, GetCertus לא מקבל את אותו "שם IdP" לפלטפורמה מסוימת. היזהרו לפני הוספת מחבר, כי לא תוכלו לשנות את הערך לאחר היצירה. <a>מידע נוסף</a>',
    target_conflict:
      'שם ה-IdP שהוזן תואם למחבר הקיים <span>name</span>. שימוש באותו שם IdP עלול לגרום להתנהגות התחברות בלתי צפויה, שבה משתמשים ניגשים לאותו חשבון דרך שני מחברים שונים.',
    target_conflict_line2:
      'אם ברצונכם להחליף את המחבר הנוכחי באותו ספק זהויות ולאפשר למשתמשים קיימים להתחבר בלי להירשם מחדש, מחקו את המחבר <span>name</span> וצרו מחבר חדש עם אותו "שם IdP".',
    target_conflict_line3: 'אם ברצונכם להתחבר לספק זהויות אחר, שנו את "שם IdP" והמשיכו.',
    config: 'הזינו את קובץ ה-JSON של ההגדרות',
    sync_profile: 'סנכרון פרטי הפרופיל',
    sync_profile_only_at_sign_up: 'סנכרון רק בהרשמה',
    sync_profile_each_sign_in: 'סנכרון בכל התחברות',
    sync_profile_tip: 'סנכרון הפרופיל הבסיסי מהספק החברתי, כמו שמות ותמונות פרופיל של משתמשים.',
    enable_token_storage: {
      title: 'שמירת אסימונים לגישת API מתמשכת',
      description:
        'שמירת אסימוני גישה ורענון ב-Secret Vault. מאפשרת קריאות API אוטומטיות בלי לבקש הסכמה מהמשתמש שוב ושוב. לדוגמה: לתת לסוכן ה-AI שלכם להוסיף אירועים ליומן Google עם הרשאה מתמשכת. <a>למדו איך לקרוא ל-API של צד שלישי</a>',
    },
    callback_uri: 'URI להפניה (Callback URI)',
    callback_uri_description:
      'כתובות ה-URI להפניה הן המקומות שאליהם מופנים המשתמשים לאחר הרשאה חברתית. הוסיפו את כל הכתובות המוצגות להגדרות ה-IdP שלכם.',
    callback_uri_custom_domain_description:
      'אם אתם משתמשים בכמה <a>דומיינים מותאמים</a> ב-GetCertus, הוסיפו את כל כתובות ה-callback המתאימות ל-IdP כדי שההתחברות החברתית תעבוד בכל דומיין.\n\nדומיין ברירת המחדל של GetCertus (*.logto.app) תמיד תקף — הוסיפו אותו רק אם תרצו לתמוך גם בהתחברות דרכו.',
    acs_url: 'כתובת שירות Assertion Consumer',
  },
  platform: {
    universal: 'אוניברסלי',
    web: 'ווב',
    native: 'נייטיב',
  },
  add_multi_platform: ' תומך בכמה פלטפורמות, בחרו פלטפורמה כדי להמשיך',
  drawer_title: 'מדריך המחבר',
  drawer_subtitle: 'עקבו אחר ההוראות כדי לשלב את המחבר',
  unknown: 'מחבר לא ידוע',
  standard_connectors: 'מחברים סטנדרטיים',
  create_form: {
    third_party_connectors:
      'שלבו ספקי צד שלישי להתחברות חברתית מהירה, קישור חשבונות חברתיים וגישת API. <a>מידע נוסף</a>',
    email_connector_upsell: {
      title: 'שירות האימייל המובנה של GetCertus',
      description: 'שליחת אימייל ללא הגדרות. שלחו קודי אימות וקישורי קסם מיד.',
    },
    standard_connectors: 'או התאימו את המחבר החברתי באמצעות פרוטוקול סטנדרטי.',
  },
};

export default Object.freeze(connectors);
