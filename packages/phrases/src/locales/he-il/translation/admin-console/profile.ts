/* GetCertus addition (MPL-2.0, see GETCERTUS.md): admin console phrases. */
const profile = {
  link_account: {
    anonymous: 'אנונימי',
  },
  delete_account: {
    title: 'מחיקת חשבון',
    label: 'מחיקת חשבון',
    description:
      'מחיקת החשבון תסיר את כל המידע האישי, נתוני המשתמש וההגדרות שלך. לא ניתן לבטל פעולה זו.',
    button: 'מחיקת חשבון',
    p: {
      has_issue:
        'צר לנו שברצונך למחוק את החשבון. לפני שתוכל/י למחוק אותו, יש לפתור את הבעיות הבאות.',
      after_resolved:
        'לאחר פתרון הבעיות תוכל/י למחוק את החשבון. אל תהסס/י לפנות אלינו אם נדרשת עזרה.',
      check_information:
        'צר לנו שברצונך למחוק את החשבון. יש לבדוק בעיון את המידע הבא לפני שממשיכים.',
      remove_all_data:
        'מחיקת החשבון תסיר לצמיתות את כל הנתונים שלך מ-GetCertus Cloud. מומלץ לגבות נתונים חשובים לפני שממשיכים.',
      confirm_information:
        'יש לאשר שהמידע שלמעלה תואם את הציפיות. לאחר המחיקה לא נוכל לשחזר את החשבון.',
      has_admin_role: 'מכיוון שיש לך תפקיד מנהל ב-tenant הבא, הוא יימחק יחד עם החשבון שלך:',
      has_admin_role_other:
        'מכיוון שיש לך תפקיד מנהל ב-tenants הבאים, הם יימחקו יחד עם החשבון שלך:',
      quit_tenant: 'את/ה עומד/ת לעזוב את ה-tenant הבא:',
      quit_tenant_other: 'את/ה עומד/ת לעזוב את ה-tenants הבאים:',
    },
    issues: {
      paid_plan: 'ל-tenant הבא יש תוכנית בתשלום, יש לבטל תחילה את המינוי:',
      paid_plan_other: 'ל-tenants הבאים יש תוכניות בתשלום, יש לבטל תחילה את המינויים:',
      subscription_status: 'ל-tenant הבא יש בעיה בסטטוס המינוי:',
      subscription_status_other: 'ל-tenants הבאים יש בעיות בסטטוס המינוי:',
      open_invoice: 'ל-tenant הבא יש חשבונית פתוחה:',
      open_invoice_other: 'ל-tenants הבאים יש חשבוניות פתוחות:',
    },
    error_occurred: 'אירעה שגיאה',
    error_occurred_description: 'משהו השתבש במחיקת החשבון שלך:',
    request_id: 'מזהה בקשה: {{requestId}}',
    try_again_later:
      'יש לנסות שוב מאוחר יותר. אם הבעיה נמשכת, יש לפנות לצוות GetCertus ולציין את מזהה הבקשה.',
    final_confirmation: 'אישור סופי',
    about_to_start_deletion: 'את/ה עומד/ת להתחיל את תהליך המחיקה, ולא ניתן לבטל פעולה זו.',
    permanently_delete: 'מחיקה לצמיתות',
  },
  fields: {
    name: 'שם',
    name_description: 'השם המלא של המשתמש בצורה להצגה, כולל כל חלקי השם (לדוגמה, “ישראל ישראלי”).',
    avatar: 'אווטאר',
    avatar_description: 'כתובת URL של תמונת האווטאר של המשתמש.',
    familyName: 'שם משפחה',
    familyName_description: 'שם המשפחה של המשתמש (לדוגמה, "ישראלי").',
    givenName: 'שם פרטי',
    givenName_description: 'השם הפרטי של המשתמש (לדוגמה, "ישראל").',
    middleName: 'שם אמצעי',
    middleName_description: 'השם האמצעי של המשתמש (לדוגמה, "דוד").',
    nickname: 'כינוי',
    nickname_description: 'שם לא רשמי של המשתמש, שעשוי להיות שונה מהשם החוקי.',
    preferredUsername: 'שם משתמש מועדף',
    preferredUsername_description: 'מזהה קצר שבו המשתמש מעדיף שיפנו אליו.',
    profile: 'פרופיל',
    profile_description: 'כתובת URL של דף הפרופיל של המשתמש (לדוגמה, פרופיל ברשת חברתית).',
    website: 'אתר אינטרנט',
    website_description: 'כתובת URL של האתר האישי או הבלוג של המשתמש.',
    gender: 'מגדר',
    gender_description: 'המגדר שהמשתמש מזדהה איתו (לדוגמה, "אישה", "גבר", "א-בינארי")',
    birthdate: 'תאריך לידה',
    birthdate_description: 'תאריך הלידה של המשתמש בתבנית מוגדרת (לדוגמה, "MM-dd-yyyy").',
    zoneinfo: 'אזור זמן',
    zoneinfo_description:
      'אזור הזמן של המשתמש בתבנית IANA (לדוגמה, "America/New_York" או "Europe/Paris").',
    locale: 'שפה',
    locale_description: 'השפה של המשתמש בתבנית IETF BCP 47 (לדוגמה, "en-US" או "zh-CN").',
    address: {
      formatted: 'כתובת',
      streetAddress: 'רחוב ומספר',
      locality: 'יישוב',
      region: 'מחוז',
      postalCode: 'מיקוד',
      country: 'מדינה',
    },
    address_description:
      'הכתובת המלאה של המשתמש בצורה להצגה, כולל כל חלקי הכתובת (לדוגמה, "123 Main St, Anytown, USA 12345").',
    fullname: 'שם מלא',
    fullname_description: 'משלב בגמישות את familyName, givenName ו-middleName בהתאם להגדרות.',
  },
};

export default Object.freeze(profile);
