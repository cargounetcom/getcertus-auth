/* GetCertus addition (MPL-2.0, see GETCERTUS.md): admin console phrases. */
const protected_app = {
  name: 'אפליקציה מוגנת',
  title: 'יצירת אפליקציה מוגנת: הוספת אימות בפשטות ובמהירות שיא',
  fast_create: 'יצירה מהירה',
  modal_title: 'יצירת אפליקציה מוגנת',
  modal_subtitle:
    'הפעלת הגנה מאובטחת ומהירה בכמה לחיצות. הוספת אימות לאפליקציית האינטרנט הקיימת שלך בקלות.',
  form: {
    url_field_label: 'כתובת ה-URL המקורית שלך',
    url_field_placeholder: 'https://domain.com/',
    url_field_description: 'יש לציין את כתובת האפליקציה שדורשת הגנת אימות.',
    url_field_modification_notice:
      'שינויים בכתובת ה-URL המקורית עשויים להימשך 1-2 דקות עד שייכנסו לתוקף בכל מיקומי הרשת הגלובליים.',
    url_field_tooltip:
      "יש לציין את כתובת האפליקציה, ללא '/נתיב'. לאחר היצירה ניתן להתאים כללי אימות לכל נתיב.\n\nהערה: כתובת ה-URL המקורית עצמה אינה דורשת אימות; ההגנה חלה רק על גישה דרך דומיין האפליקציה שהוגדר.",
    domain_field_label: 'דומיין האפליקציה',
    domain_field_placeholder: 'your-domain',
    domain_field_description:
      'כתובת URL זו משמשת כ-proxy להגנת אימות עבור הכתובת המקורית. ניתן להחיל דומיין מותאם אישית לאחר היצירה.',
    domain_field_description_short: 'כתובת URL זו משמשת כ-proxy להגנת אימות עבור הכתובת המקורית.',
    domain_field_tooltip:
      "אפליקציות שמוגנות על ידי GetCertus מתארחות כברירת מחדל ב-'your-domain.{{domain}}'. ניתן להחיל דומיין מותאם אישית לאחר היצירה.",
    create_application: 'יצירת אפליקציה',
    create_protected_app: 'יצירה מהירה',
    errors: {
      domain_required: 'נדרש דומיין.',
      domain_in_use: 'שם תת-הדומיין כבר בשימוש.',
      invalid_domain_format:
        "פורמט תת-דומיין לא תקין: יש להשתמש רק באותיות קטנות, ספרות ומקפים '-'.",
      url_required: 'נדרשת כתובת URL מקורית.',
      invalid_url:
        "פורמט כתובת URL מקורית לא תקין: יש להשתמש ב-http:// או https://. הערה: '/נתיב' אינו נתמך כרגע.",
      localhost: 'יש לחשוף תחילה את השרת המקומי לאינטרנט. מידע נוסף על <a>פיתוח מקומי</a>.',
    },
  },
  id_token_claims: {
    card_title: 'Claims בטוקן ה-ID',
    card_description:
      'בקשת scopes נוספים של משתמש בזמן הכניסה לאפליקציה המוגנת, כדי לכלול claims מורחבים מופעלים בטוקן ה-ID המועבר.',
    field_title: 'Scopes נוספים',
    field_description:
      'Claims נכללים רק אם הם מופעלים ב-<a>JWT מותאם אישית > טוקן ID</a> וה-scope המתאים מתבקש כאן.',
    table_column_scope: 'Scope',
    table_column_claims_forwarded: 'Claims מועברים',
    disabled_claims_hint:
      'Claims באפור עדיין לא מועברים. יש להפעיל אותם ב-<a>JWT מותאם אישית > טוקן ID</a> כדי לכלול אותם בטוקן ה-ID.',
  },
  success_message: '🎉 אימות האפליקציה הופעל בהצלחה! גלה/י את החוויה החדשה של האתר שלך.',
};

export default Object.freeze(protected_app);
