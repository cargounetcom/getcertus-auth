/* GetCertus addition (MPL-2.0, see GETCERTUS.md): admin console phrases. */
const webhook_details = {
  page_title: 'פרטי webhook',
  back_to_webhooks: 'חזרה ל-webhooks',
  not_in_use: 'לא בשימוש',
  success_rate: 'שיעור הצלחה',
  requests: '{{value, number}} בקשות ב-24 שעות',
  disable_webhook: 'השבתת webhook',
  disable_reminder:
    'האם להשבית את ה-webhook? לאחר ההשבתה לא יישלחו בקשות HTTP לכתובת ה-URL של נקודת הקצה.',
  webhook_disabled: 'ה-webhook הושבת.',
  webhook_reactivated: 'ה-webhook הופעל מחדש.',
  reactivate_webhook: 'הפעלה מחדש של webhook',
  delete_webhook: 'מחיקת webhook',
  deletion_reminder:
    'את/ה מוחק/ת את ה-webhook הזה. לאחר המחיקה לא יישלחו בקשות HTTP לכתובת ה-URL של נקודת הקצה.',
  deleted: 'ה-webhook נמחק.',
  settings_tab: 'הגדרות',
  recent_requests_tab: 'בקשות אחרונות (24 שעות)',
  settings: {
    settings: 'הגדרות',
    settings_description:
      'Webhooks שולחים לך עדכונים בזמן אמת על אירועים מסוימים ברגע שהם מתרחשים, באמצעות בקשת POST לכתובת ה-URL של נקודת הקצה שלך. כך אפשר לפעול מיד על סמך המידע החדש.',
    events: 'אירועים',
    events_description: 'בחירת האירועים שבהם GetCertus ישלח את בקשת ה-POST.',
    name: 'שם',
    endpoint_url: 'כתובת URL של נקודת קצה',
    signing_key: 'מפתח חתימה',
    signing_key_tip:
      'יש להוסיף את המפתח הסודי שמספק GetCertus לנקודת הקצה שלך ככותרת בקשה, כדי להבטיח את אמינות ה-payload של ה-webhook.',
    regenerate: 'יצירה מחדש',
    regenerate_key_title: 'יצירה מחדש של מפתח החתימה',
    regenerate_key_reminder:
      'האם לשנות את מפתח החתימה? המפתח החדש ייכנס לתוקף מיד. יש לזכור לעדכן את המפתח גם בנקודת הקצה שלך.',
    regenerated: 'מפתח החתימה נוצר מחדש.',
    custom_headers: 'כותרות מותאמות אישית',
    custom_headers_tip:
      'ניתן להוסיף כותרות מותאמות אישית ל-payload של ה-webhook כדי לספק הקשר או מטא-נתונים נוספים על האירוע.',
    key_duplicated_error: 'מפתח לא יכול לחזור על עצמו.',
    key_missing_error: 'נדרש מפתח.',
    value_missing_error: 'נדרש ערך.',
    invalid_key_error: 'מפתח לא תקין',
    invalid_value_error: 'ערך לא תקין',
    test: 'בדיקה',
    test_webhook: 'בדיקת ה-webhook',
    test_webhook_description:
      'יש להגדיר את ה-webhook ולבדוק אותו עם payloads לדוגמה עבור כל אירוע שנבחר, כדי לוודא שהם מתקבלים ומעובדים כראוי.',
    send_test_payload: 'שליחת payload לבדיקה',
    test_result: {
      endpoint_url: 'כתובת URL של נקודת קצה: {{url}}',
      message: 'הודעה: {{message}}',
      response_status: 'סטטוס תגובה: {{status, number}}',
      response_body: 'גוף התגובה: {{body}}',
      request_time: 'זמן הבקשה: {{time}}',
      test_success: 'בדיקת ה-webhook לנקודת הקצה הצליחה.',
    },
  },
};

export default Object.freeze(webhook_details);
