/* GetCertus addition (MPL-2.0, see GETCERTUS.md): admin console phrases. */
const invitation = {
  find_your_tenants: 'חיפוש ה-tenants שלך',
  find_tenants_description:
    'ייתכן שכתובת הדוא"ל שלך כבר רשומה בכמה tenants. אפשר להצטרף לקיימים או ליצור tenant חדש.',
  create_new_tenant: 'יצירת tenant חדש',
  email_not_match_title: 'את/ה מחובר/ת כרגע בתור\n{{email}}',
  email_not_match_description: 'יש להיכנס עם החשבון הנכון כדי לאשר את ההזמנה ולהצטרף לארגון.',
  switch_account: 'כניסה עם חשבון אחר',
  invalid_invitation_status: 'הזמנה לא תקינה. יש לפנות למנהל ולנסות שוב.',
  invitation_not_found: 'ההזמנה לא נמצאה. יש לפנות למנהל.',
};

export default Object.freeze(invitation);
