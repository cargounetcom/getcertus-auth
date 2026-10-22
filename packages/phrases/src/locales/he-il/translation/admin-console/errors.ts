/* GetCertus addition (MPL-2.0, see GETCERTUS.md): admin console phrases. */
const errors = {
  something_went_wrong: 'אופס! משהו השתבש.',
  page_not_found: 'הדף לא נמצא',
  unknown_server_error: 'אירעה שגיאת שרת לא ידועה',
  empty: 'אין נתונים',
  missing_total_number: 'הכותרת Total-Number לא נמצאה בתגובה',
  invalid_uri_format: 'תבנית URI לא תקינה',
  invalid_origin_format: 'תבנית מקור URI לא תקינה',
  invalid_json_format: 'תבנית JSON לא תקינה',
  invalid_parameters_format: 'תבנית פרמטרים לא תקינה',
  invalid_regex: 'ביטוי רגולרי לא תקין',
  invalid_error_message_format: 'תבנית הודעת השגיאה אינה תקינה.',
  required_field_missing: 'יש להזין {{field}}',
  required_field_missing_plural: 'יש להזין לפחות {{field}} אחד',
  more_details: 'פרטים נוספים',
  username_pattern_error:
    'שם המשתמש יכול להכיל רק אותיות, ספרות או קווים תחתונים, ואינו יכול להתחיל בספרה.',
  email_pattern_error: 'כתובת האימייל אינה תקינה.',
  phone_pattern_error: 'מספר הטלפון אינו תקין.',
  insecure_contexts: 'הקשרים לא מאובטחים (ללא HTTPS) אינם נתמכים.',
  unexpected_error: 'אירעה שגיאה לא צפויה.',
  not_found: '404 לא נמצא',
  create_internal_role_violation:
    'ניסית ליצור תפקיד פנימי חדש, ו-GetCertus אינו מאפשר זאת. יש לבחור שם שאינו מתחיל ב-"#internal:".',
  should_be_an_integer: 'חייב להיות מספר שלם.',
  number_should_be_between_inclusive: 'המספר חייב להיות בין {{min}} ל-{{max}} (כולל).',
};

export default Object.freeze(errors);
