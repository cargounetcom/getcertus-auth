/* GetCertus addition (MPL-2.0, see GETCERTUS.md): admin console phrases. */
const entity = {
  invalid_input: 'קלט לא תקין. רשימת הערכים לא יכולה להיות ריקה.',
  value_too_long: 'הערך ארוך מדי וחורג מהמגבלה.',
  create_failed: 'יצירת {{name}} נכשלה.',
  db_constraint_violated: 'הופרה מגבלה של מסד הנתונים.',
  not_exists: '{{name}} אינו קיים.',
  not_exists_with_id: '{{name}} עם המזהה `{{id}}` אינו קיים.',
  not_found: 'המשאב אינו קיים.',
  relation_foreign_key_not_found:
    'לא נמצאו מפתח זר אחד או יותר. יש לבדוק את הקלט ולוודא שכל הישויות המוזכרות קיימות.',
  unique_integrity_violation: 'הישות כבר קיימת. יש לבדוק את הקלט ולנסות שוב.',
};

export default Object.freeze(entity);
