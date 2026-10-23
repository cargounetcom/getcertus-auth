/* GetCertus addition (MPL-2.0, see GETCERTUS.md): admin console phrases. */
const verification_code = {
  phone_email_empty: 'גם הטלפון וגם הדוא"ל ריקים.',
  not_found: 'קוד האימות לא נמצא. יש לשלוח קודם קוד אימות.',
  phone_mismatch: 'מספר הטלפון אינו תואם. יש לבקש קוד אימות חדש.',
  email_mismatch: 'כתובת הדוא"ל אינה תואמת. יש לבקש קוד אימות חדש.',
  code_mismatch: 'קוד אימות לא תקין.',
  expired: 'תוקף קוד האימות פג. יש לבקש קוד אימות חדש.',
  exceed_max_try: 'חריגה ממספר הניסיונות לקוד האימות. יש לבקש קוד אימות חדש.',
};

export default Object.freeze(verification_code);
