/* GetCertus addition (MPL-2.0, see GETCERTUS.md): admin console phrases. */
const api_resources = {
  page_title: 'משאבי API',
  title: 'משאבי API',
  subtitle: 'הגדירו ממשקי API שהאפליקציות המורשות שלכם יכולות להשתמש בהם.',
  create: 'יצירת משאב API',
  api_name: 'שם ה-API',
  api_name_placeholder: 'הזינו את שם ה-API',
  api_identifier: 'מזהה API',
  api_identifier_placeholder: 'https://your-api-identifier',
  api_identifier_tip:
    'המזהה הייחודי של משאב ה-API. חייב להיות URI מוחלט ללא רכיב fragment (#). שווה ל<a>פרמטר resource</a> ב-OAuth 2.0.',
  default_api: 'API ברירת מחדל',
  default_api_label:
    'בכל tenant אפשר להגדיר לכל היותר API ברירת מחדל אחד.\nכשמוגדר API ברירת מחדל, אפשר להשמיט את פרמטר ה-resource בבקשת האימות. החלפות אסימונים בהמשך ישתמשו בו כ-audience כברירת מחדל, וכך יונפקו JWT. <a>מידע נוסף</a>',
  api_resource_created: 'משאב ה-API {{name}} נוצר בהצלחה',
  invalid_resource_indicator_format: 'מחוון ה-API חייב להיות URI מוחלט ותקין.',
};

export default Object.freeze(api_resources);
