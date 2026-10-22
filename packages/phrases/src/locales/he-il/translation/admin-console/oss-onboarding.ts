/* GetCertus addition (MPL-2.0, see GETCERTUS.md): admin console phrases. */
const oss_onboarding = {
  page_title: 'היכרות',
  title: 'קצת עליך',
  description: 'ספר/י לנו קצת על עצמך ועל הפרויקט שלך. זה עוזר לנו לשפר את GetCertus עבור כולם.',
  email: {
    label: 'כתובת דוא"ל',
    description: 'נשתמש בכתובת זו אם נצטרך ליצור איתך קשר בנוגע לחשבון.',
    placeholder: 'email@example.com',
  },
  newsletter: 'קבלת עדכוני מוצר, התראות אבטחה ותוכן נבחר מ-GetCertus.',
  project: {
    label: 'אני משתמש/ת ב-GetCertus עבור',
    personal: 'פרויקט אישי',
    company: 'פרויקט של חברה',
  },
  project_name: {
    label: 'שם הפרויקט',
    placeholder: 'הפרויקט שלי',
  },
  company_name: {
    label: 'שם החברה',
    placeholder: 'Acme.co',
  },
  company_size: {
    label: 'מה גודל החברה שלך?',
  },
  errors: {
    email_required: 'נדרשת כתובת דוא"ל',
    email_invalid: 'יש להזין כתובת דוא"ל תקינה',
    project_name_too_long: 'שם הפרויקט יכול להכיל עד 200 תווים',
  },
};

export default Object.freeze(oss_onboarding);
