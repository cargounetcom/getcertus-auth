/* GetCertus addition (MPL-2.0, see GETCERTUS.md): admin console phrases. */
const auth = {
  authorization_header_missing: 'כותרת ההרשאה חסרה.',
  authorization_token_type_not_supported: 'סוג ההרשאה אינו נתמך.',
  unauthorized: 'אין הרשאה. יש לבדוק את פרטי ההתחברות ואת ה-scope שלהם.',
  forbidden: 'הגישה נדחתה. יש לבדוק את התפקידים וההרשאות של המשתמש.',
  expected_role_not_found: 'התפקיד הצפוי לא נמצא. יש לבדוק את התפקידים וההרשאות של המשתמש.',
  jwt_sub_missing: 'חסר `sub` ב-JWT.',
  require_re_authentication: 'נדרש אימות מחדש כדי לבצע פעולה מוגנת.',
  exceed_token_limit: 'חריגה ממגבלת הטוקנים. יש לפנות למנהל.',
  third_party_application_forbidden: 'אפליקציות צד שלישי אינן יכולות לשנות נתוני חשבון דרך API זה.',
};

export default Object.freeze(auth);
