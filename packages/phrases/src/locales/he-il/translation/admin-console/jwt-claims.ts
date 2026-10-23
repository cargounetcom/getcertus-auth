/* GetCertus addition (MPL-2.0, see GETCERTUS.md): admin console phrases. */
const jwt_claims = {
  title: 'JWT מותאם אישית',
  description: 'התאמה אישית של טוקן הגישה או טוקן ה-ID כדי לספק מידע נוסף לאפליקציה שלך.',
  access_token: {
    card_title: 'טוקן גישה',
    card_description:
      'טוקן גישה הוא האישור שבו ממשקי API משתמשים כדי לאשר בקשות, והוא מכיל רק את ה-claims הנדרשים להחלטות גישה.',
  },
  user_jwt: {
    card_field: 'טוקן גישה של משתמש',
    card_description: 'הוספת נתונים ספציפיים למשתמש בעת הנפקת טוקן הגישה.',
    for: 'עבור משתמש',
  },
  machine_to_machine_jwt: {
    card_field: 'טוקן גישה מכונה למכונה',
    card_description: 'הוספת נתונים נוספים בעת הנפקת טוקנים מכונה למכונה.',
    for: 'עבור M2M',
  },
  id_token: {
    card_title: 'טוקן ID',
    card_description:
      'טוקן ID הוא הצהרת זהות שמתקבלת לאחר הכניסה, ומכיל claims של זהות המשתמש שהלקוח יכול להשתמש בהם לתצוגה או ליצירת סשן.',
    card_field: 'טוקן ID של משתמש',
    card_field_description:
      "ה-claims 'sub', 'email', 'phone', 'profile' ו-'address' זמינים תמיד. claims אחרים יש להפעיל כאן קודם. בכל מקרה, האפליקציה שלך צריכה לבקש את ה-scopes המתאימים במהלך האינטגרציה כדי לקבל אותם.",
  },
  code_editor_title: 'התאמה אישית של ה-claims של {{token}}',
  custom_jwt_create_button: 'הוספת claims מותאמים אישית',
  custom_jwt_item: 'claims מותאמים אישית {{for}}',
  delete_modal_title: 'מחיקת claims מותאמים אישית',
  delete_modal_content: 'האם למחוק את ה-claims המותאמים אישית?',
  clear: 'להתחיל מחדש',
  cleared: 'נוקה',
  restore: 'שחזור ברירות מחדל',
  restored: 'שוחזר',
  data_source_tab: 'מקור נתונים',
  error_handling_tab: 'טיפול בשגיאות',
  test_tab: 'הקשר בדיקה',
  jwt_claims_description: 'claims ברירת מחדל נכללים אוטומטית ב-  ולא ניתן לדרוס אותם.',
  user_data: {
    title: 'הקשר משתמש',
    subtitle: 'יש להשתמש בפרמטר הקלט `context.user` כדי לספק מידע חיוני על המשתמש.',
  },
  grant_data: {
    title: 'הקשר grant',
    subtitle:
      'יש להשתמש בפרמטר הקלט `context.grant` כדי לספק מידע חיוני על ה-grant; זמין רק ב-token exchange.',
  },
  interaction_data: {
    title: 'הקשר אינטראקציית משתמש',
    subtitle:
      'יש להשתמש בפרמטר `context.interaction` כדי לגשת לפרטי האינטראקציה של המשתמש בסשן האימות הנוכחי.',
  },
  application_data: {
    title: 'הקשר אפליקציה',
    subtitle:
      'יש להשתמש בפרמטר הקלט `context.application` כדי לספק את פרטי האפליקציה המשויכת לטוקן.',
  },
  organization_data: {
    title: 'הקשר ארגון',
    subtitle:
      'יש להשתמש בפרמטר הקלט `context.organization` כדי לספק את פרטי ארגון היעד; זמין רק לטוקנים של ארגון.',
  },
  token_data: {
    title: 'Payload של הטוקן',
    subtitle: 'יש להשתמש בפרמטר הקלט `token` עבור ה-payload של טוקן הגישה הנוכחי. ',
  },
  api_context: {
    title: 'הקשר API: בקרת גישה',
    subtitle: 'יש להשתמש במתודה `api.denyAccess` כדי לדחות את בקשת הטוקן.',
  },
  error_handling: {
    title: 'טיפול בשגיאות',
    subtitle: 'קביעה אם לחסום הנפקת טוקן כשהסקריפט נכשל.',
    input_field_title: 'התנהגות הנפקת הטוקן בשגיאת סקריפט',
    block_issuance_switch: 'חסימת הנפקת הטוקן כשהסקריפט נכשל',
    default_hint_create:
      'סקריפטים חדשים של claims מותאמים אישית חוסמים כברירת מחדל את הנפקת הטוקן כשהסקריפט נכשל. אם ה-API כבר מספק ערך, נעשה שימוש בערך השמור.',
    default_hint_edit:
      'סקריפטים קיימים של claims מותאמים אישית ללא הגדרה זו שומרים על ברירת המחדל הישנה (כבוי) עד שתשמור/י ערך במפורש.',
    warning:
      'כשהאפשרות מופעלת, שגיאות זמן ריצה בסקריפט דוחות את בקשת הטוקן עם `invalid_request` (400) ו-`error_description` מתורגם. קריאות ל-`api.denyAccess` עדיין מחזירות `access_denied`.',
  },
  fetch_external_data: {
    title: 'שליפת נתונים חיצוניים',
    subtitle: 'שילוב נתונים מממשקי ה-API החיצוניים שלך ישירות ב-claims.',
    description:
      'יש להשתמש בפונקציה `fetch` כדי לקרוא לממשקי ה-API החיצוניים שלך ולכלול את הנתונים ב-claims המותאמים אישית. דוגמה: ',
  },
  environment_variables: {
    title: 'הגדרת משתני סביבה',
    subtitle: 'שימוש במשתני סביבה לאחסון מידע רגיש.',
    input_field_title: 'הוספת משתני סביבה',
    sample_code: 'גישה למשתני סביבה ב-handler של claims מותאמים אישית לטוקן. דוגמה: ',
  },
  jwt_claims_hint:
    'יש להגביל claims מותאמים אישית לפחות מ-50KB. claims ברירת מחדל נכללים אוטומטית בטוקן ולא ניתן לדרוס אותם.',
  tester: {
    subtitle: 'התאמת טוקן ונתוני משתמש מדומים לבדיקה.',
    run_button: 'הרצת בדיקה',
    result_title: 'תוצאת הבדיקה',
  },
  sandbox_warning: {
    title: 'סקריפטים רצים עם הרשאות שרת',
    description:
      'ב-GetCertus באירוח עצמי, הסקריפט רץ באותה סביבה כמו GetCertus עצמו: הוא יכול לקרוא משתני סביבה של השרת ולגשת לשירותים ברשת הפנימית שלך. הוא אינו רץ בסביבת sandbox. יש לתת גישה לעמוד זה רק לאנשים שהיית סומך/ת עליהם עם גישה לשרת.',
  },
  form_error: {
    invalid_json: 'פורמט JSON לא תקין',
  },
};

export default Object.freeze(jwt_claims);
