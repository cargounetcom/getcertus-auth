/* GetCertus addition (MPL-2.0, see GETCERTUS.md): admin console phrases. */
const signing_keys = {
  title: 'מפתחות חתימה',
  description: 'ניהול מאובטח של מפתחות החתימה שבהם משתמשות האפליקציות שלך.',
  private_key: 'מפתחות פרטיים של OIDC',
  private_keys_description: 'מפתחות פרטיים של OIDC משמשים לחתימה על טוקני JWT.',
  cookie_key: 'מפתחות cookie של OIDC',
  cookie_keys_description: 'מפתחות cookie של OIDC משמשים לחתימה על cookies.',
  private_keys_in_use: 'מפתחות פרטיים בשימוש',
  cookie_keys_in_use: 'מפתחות cookie בשימוש',
  rotate_private_keys: 'החלפת מפתחות פרטיים',
  rotate_cookie_keys: 'החלפת מפתחות cookie',
  rotate_private_keys_description:
    'פעולה זו תיצור מפתח חתימה פרטי חדש, תחליף את המפתח הנוכחי ותסיר את המפתח הקודם. טוקני JWT שנחתמו במפתח הנוכחי יישארו תקפים עד המחיקה או עד ההחלפה הבאה.',
  rotate_cookie_keys_description:
    'פעולה זו תיצור מפתח cookie חדש, תחליף את המפתח הנוכחי ותסיר את המפתח הקודם. cookies עם המפתח הנוכחי יישארו תקפים עד המחיקה או עד ההחלפה הבאה.',
  select_private_key_algorithm: 'בחירת אלגוריתם החתימה עבור המפתח הפרטי החדש',
  rotate_button: 'החלפה',
  table_column: {
    id: 'מזהה',
    status: 'סטטוס',
    algorithm: 'אלגוריתם חתימה',
    effective_at: 'בתוקף מ-',
  },
  status: {
    next: 'הבא',
    current: 'נוכחי',
    previous: 'קודם',
    effective_in: 'ייכנס לתוקף בעוד {{time}}',
  },
  reminder: {
    rotate_private_key:
      'האם להחליף את <strong>המפתחות הפרטיים של OIDC</strong>? טוקני JWT חדשים ייחתמו במפתח החדש. טוקני JWT קיימים יישארו תקפים עד ההחלפה הבאה.',
    rotate_cookie_key:
      'האם להחליף את <strong>מפתחות ה-cookie של OIDC</strong>? cookies חדשים שנוצרים בסשנים של כניסה ייחתמו במפתח ה-cookie החדש. cookies קיימים יישארו תקפים עד ההחלפה הבאה.',
    delete_private_key:
      'האם למחוק את <strong>המפתח הפרטי של OIDC</strong>? טוקני JWT קיימים שנחתמו במפתח זה לא יהיו תקפים עוד.',
    delete_cookie_key:
      'האם למחוק את <strong>מפתח ה-cookie של OIDC</strong>? סשנים ישנים של כניסה עם cookies שנחתמו במפתח זה לא יהיו תקפים עוד. משתמשים אלה יצטרכו לבצע אימות מחדש.',
  },
  messages: {
    rotate_key_success: 'מפתחות החתימה הוחלפו בהצלחה.',
    delete_key_success: 'המפתח נמחק בהצלחה.',
  },
};

export default Object.freeze(signing_keys);
