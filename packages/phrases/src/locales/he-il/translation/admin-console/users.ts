/* GetCertus addition (MPL-2.0, see GETCERTUS.md): admin console phrases. */
const users = {
  page_title: 'ניהול משתמשים',
  title: 'ניהול משתמשים',
  subtitle:
    'ניהול זהויות משתמשים: יצירת משתמשים, עריכת פרטים, צפייה ביומני משתמשים, איפוס סיסמאות ומחיקת משתמשים.',
  create: 'הוספת משתמש',
  create_subtitle: 'מלאו לפחות אחד מהשדות הבאים כדי להמשיך.',
  error_missing_identifier: 'יש לספק לפחות מזהה אחד כדי ליצור משתמש.',
  user_name: 'משתמש',
  application_name: 'מאפליקציה',
  latest_sign_in: 'התחברות אחרונה',
  create_form_username: 'שם משתמש',
  create_form_password: 'סיסמה',
  create_form_name: 'שם מלא',
  placeholder_name: 'ישראל ישראלי',
  placeholder_email: 'jdoe@example.com',
  placeholder_username: 'user123',
  placeholder_phone: '+1 (555) 555-5555',
  unnamed: 'ללא שם',
  search: 'חיפוש לפי שם, אימייל, טלפון או שם משתמש',
  check_user_detail: 'צפייה בפרטי המשתמש',
  placeholder_title: 'ניהול משתמשים',
  placeholder_description:
    'לכל משתמש יש פרופיל עם כל פרטי המשתמש: נתונים בסיסיים, זהויות חברתיות ונתונים מותאמים.',
  dev_tenant_data_retention_notice:
    'ב-tenants של פיתוח, חשבונות משתמשים בני יותר מ-90 יום נמחקים אוטומטית. <a>מידע נוסף</a>',
};

export default Object.freeze(users);
