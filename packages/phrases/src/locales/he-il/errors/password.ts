/* GetCertus addition (MPL-2.0, see GETCERTUS.md): admin console phrases. */
const password = {
  unsupported_encryption_method: 'שיטת ההצפנה {{name}} אינה נתמכת.',
  pepper_not_found: 'ה-pepper של הסיסמה לא נמצא. יש לבדוק את משתני הסביבה של ה-core.',
  rejected: 'הסיסמה נדחתה. יש לבדוק שהסיסמה עומדת בדרישות.',
  invalid_legacy_password_format: 'פורמט סיסמה ישנה לא תקין.',
  unsupported_legacy_hash_algorithm: 'אלגוריתם hash ישן שאינו נתמך: {{algorithm}}.',
  expired: 'תוקף הסיסמה שלך פג. יש לאפס את הסיסמה כדי להמשיך.',
};

export default Object.freeze(password);
