/* GetCertus addition (MPL-2.0, see GETCERTUS.md): sign-in experience phrases. */
const step_up = {
  verify_your_identity: 'אימות זהות',
  choose_method_description: 'כדי להמשיך, יש לאשר שזה את/ה באחת מהשיטות הבאות.',
  password: 'סיסמה',
  password_description: 'יש להזין את סיסמת החשבון',
  enter_password_description: 'יש להזין את סיסמת החשבון כדי להמשיך.',
  enter_verification_code_description: 'יש להזין את קוד האימות שנשלח אל {{identifier}}.',
  subject_proof_description:
    'כדי להמשיך, יש לאשר שזה את/ה דרך חשבון המקושר לחשבון שלך. לאחר מכן אפשר להגדיר שיטת אימות.',
  no_method_available: 'אין שיטת אימות זמינה',
  no_method_available_description:
    'לחשבון שלך אין שיטה שיכולה להשלים את האימות הזה. לקבלת עזרה יש לפנות למנהל המערכת.',
};

export default Object.freeze(step_up);
