/* GetCertus addition (MPL-2.0, see GETCERTUS.md): admin console phrases. */
const webhooks = {
  page_title: 'Webhooks',
  title: 'Webhooks',
  subtitle: 'יצירת webhooks לקבלת עדכונים בזמן אמת על אירועים מסוימים בקלות.',
  create: 'יצירת webhook',
  schemas: {
    interaction: 'אינטראקציית משתמש',
    user: 'משתמש',
    trusted_device: 'מכשיר מהימן',
    organization: 'ארגון',
    role: 'תפקיד',
    scope: 'הרשאה',
    organization_role: 'תפקיד בארגון',
    organization_scope: 'הרשאה בארגון',
    security: 'אבטחה',
  },
  table: {
    name: 'שם',
    events: 'אירועים',
    success_rate: 'שיעור הצלחה (24 שעות)',
    requests: 'בקשות (24 שעות)',
  },
  placeholder: {
    title: 'Webhook',
    description:
      'יצירת webhook לקבלת עדכונים בזמן אמת באמצעות בקשות POST לכתובת ה-URL של נקודת הקצה שלך. הישאר/י מעודכן/ת והגב/י מיד לאירועים כמו "יצירת חשבון", "כניסה" ו"איפוס סיסמה".',
    create_webhook: 'יצירת webhook',
  },
  create_form: {
    title: 'יצירת webhook',
    subtitle: 'הוספת ה-webhook לשליחת בקשת POST עם פרטי אירועי משתמשים לכתובת ה-URL של נקודת הקצה.',
    events: 'אירועים',
    events_description: 'בחירת האירועים שבהם GetCertus ישלח את בקשת ה-POST.',
    name: 'שם',
    name_placeholder: 'הזנת שם ה-webhook',
    endpoint_url: 'כתובת URL של נקודת קצה',
    endpoint_url_placeholder: 'https://your.webhook.endpoint.url',
    endpoint_url_tip:
      'הזנת כתובת ה-URL של נקודת הקצה שאליה יישלח ה-payload של ה-webhook כשהאירוע מתרחש.',
    create_webhook: 'יצירת webhook',
    missing_event_error: 'יש לבחור לפחות אירוע אחד.',
  },
  webhook_created: 'ה-webhook {{name}} נוצר בהצלחה.',
};

export default Object.freeze(webhooks);
