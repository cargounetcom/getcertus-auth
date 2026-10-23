/* GetCertus addition (MPL-2.0, see GETCERTUS.md): admin console phrases. */
const role = {
  name_in_use: 'שם התפקיד {{name}} כבר בשימוש',
  scope_exists: 'מזהה ה-scope {{scopeId}} כבר נוסף לתפקיד זה',
  management_api_scopes_not_assignable_to_user_role:
    'לא ניתן להקצות scopes של Management API לתפקיד משתמש.',
  user_exists: 'מזהה המשתמש {{userId}} כבר נוסף לתפקיד זה',
  application_exists: 'מזהה האפליקציה {{applicationId}} כבר נוסף לתפקיד זה',
  default_role_missing:
    'חלק מתפקידי ברירת המחדל (roleNames) אינם קיימים במסד הנתונים; יש ליצור קודם את התפקידים',
  internal_role_violation:
    'ייתכן שאת/ה מנסה לעדכן או למחוק תפקיד פנימי, ו-GetCertus אינו מאפשר זאת. אם את/ה יוצר/ת תפקיד חדש, יש לבחור שם שאינו מתחיל ב-"#internal:".',
};

export default Object.freeze(role);
