/* GetCertus addition (MPL-2.0, see GETCERTUS.md): admin console phrases. */
const user_identity_details = {
  social_identity_page_title: 'פרטי זהות חברתית',
  back_to_user_details: 'חזרה לפרטי המשתמש',
  delete_identity: 'הסרת חיבור הזהות',
  social_account: {
    title: 'חשבון חברתי',
    description: 'צפייה בנתוני המשתמש ובפרטי הפרופיל שסונכרנו מחשבון {{connectorName}} המקושר.',
    provider_name: 'שם ספק הזהות החברתית',
    identity_id: 'מזהה הזהות החברתית',
    user_profile: 'פרופיל משתמש שסונכרן מספק הזהות החברתית',
  },
  sso_account: {
    title: 'חשבון enterprise SSO',
    description: 'צפייה בנתוני המשתמש ובפרטי הפרופיל שסונכרנו מחשבון {{connectorName}} המקושר.',
    provider_name: 'שם ספק הזהות של enterprise SSO',
    identity_id: 'מזהה הזהות של enterprise SSO',
    user_profile: 'פרופיל משתמש שסונכרן מספק הזהות של enterprise SSO',
  },
  token_storage: {
    title: 'טוקן גישה',
    description:
      'אחסון טוקני גישה ורענון מ-{{connectorName}} ב-Secret Vault. מאפשר קריאות API אוטומטיות ללא הסכמה חוזרת של המשתמש.',
  },
  access_token: {
    title: 'טוקן גישה',
    description_active:
      'טוקן הגישה פעיל ומאוחסן באופן מאובטח ב-Secret Vault. המוצר שלך יכול להשתמש בו כדי לגשת לממשקי ה-API של {{connectorName}}.',
    description_inactive:
      'טוקן גישה זה אינו פעיל (לדוגמה, בוטל). משתמשים צריכים לאשר מחדש את הגישה כדי לשחזר את הפונקציונליות.',
    description_expired:
      'תוקף טוקן הגישה פג. החידוש מתבצע אוטומטית בבקשת ה-API הבאה באמצעות טוקן הרענון. אם טוקן הרענון אינו זמין, המשתמש צריך לבצע אימות מחדש.',
  },
  refresh_token: {
    available: 'טוקן רענון זמין. אם תוקף טוקן הגישה יפוג, הוא ירוענן אוטומטית באמצעות טוקן הרענון.',
    not_available:
      'טוקן רענון אינו זמין. לאחר שתוקף טוקן הגישה יפוג, משתמשים יצטרכו לבצע אימות מחדש כדי לקבל טוקנים חדשים.',
  },
  token_status: 'סטטוס הטוקן',
  created_at: 'נוצר ב-',
  updated_at: 'עודכן ב-',
  expires_at: 'תוקף עד',
  scopes: 'Scopes',
  delete_tokens: {
    title: 'מחיקת טוקנים',
    description:
      'מחיקת הטוקנים המאוחסנים. משתמשים צריכים לאשר מחדש את הגישה כדי לשחזר את הפונקציונליות.',
    confirmation_message:
      'האם למחוק את הטוקנים? ה-Secret Vault של GetCertus יסיר את טוקני הגישה והרענון המאוחסנים של {{connectorName}}. המשתמש יצטרך לאשר מחדש כדי לשחזר את הגישה ל-API של {{connectorName}}.',
  },
  token_storage_disabled: {
    title: 'אחסון טוקנים מושבת עבור מחבר זה',
    description:
      'כרגע משתמשים יכולים להשתמש ב-{{connectorName}} רק לכניסה, לקישור חשבונות או לסנכרון פרופילים בכל תהליך הסכמה. כדי לגשת לממשקי ה-API של {{connectorName}} ולבצע פעולות בשם משתמשים, יש להפעיל אחסון טוקנים ב-',
  },
};

export default Object.freeze(user_identity_details);
