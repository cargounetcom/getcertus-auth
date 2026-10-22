/* GetCertus addition (MPL-2.0, see GETCERTUS.md): admin console phrases. */
const tenant_members = {
  members: 'חברים',
  invitations: 'הזמנות',
  invite_members: 'הזמנת חברים',
  user: 'משתמש',
  roles: 'תפקידים',
  admin: 'מנהל',
  collaborator: 'משתף פעולה',
  invitation_status: 'סטטוס הזמנה',
  inviter: 'מזמין',
  expiration_date: 'תאריך תפוגה',
  invite_modal: {
    title: 'הזמנת אנשים ל-GetCertus Cloud',
    subtitle: 'כדי להצטרף לארגון, המוזמנים צריכים לאשר את ההזמנה.',
    subtitle_oss: 'חברים מוזמנים מקבלים גישת מנהל מלאה למופע GetCertus זה.',
    to: 'אל',
    added_as: 'נוספים עם התפקידים',
    email_input_placeholder: 'johndoe@example.com',
  },
  invitation_statuses: {
    pending: 'ממתינה',
    accepted: 'התקבלה',
    expired: 'פג תוקף',
    revoked: 'בוטלה',
  },
  invitation_empty_placeholder: {
    title: 'הזמנת חברי צוות',
    description:
      'עדיין לא הוזמנו חברים ל-tenant שלך.\nכדי לסייע באינטגרציה, כדאי להוסיף עוד חברים או מנהלים.',
  },
  menu_options: {
    edit: 'עריכת תפקיד ב-tenant',
    delete: 'הסרת המשתמש מה-tenant',
    resend_invite: 'שליחת ההזמנה מחדש',
    revoke: 'ביטול ההזמנה',
    delete_invitation_record: 'מחיקת רשומת ההזמנה',
  },
  edit_modal: {
    title: 'שינוי התפקידים של {{name}}',
  },
  delete_user_confirm: 'האם להסיר את המשתמש הזה מה-tenant?',
  assign_admin_confirm:
    'האם להפוך את המשתמשים שנבחרו למנהלים? גישת מנהל תעניק להם את ההרשאות הבאות.<ul><li>שינוי תוכנית החיוב של ה-tenant</li><li>הוספה או הסרה של משתפי פעולה</li><li>מחיקת ה-tenant</li></ul>',
  revoke_invitation_confirm: 'האם לבטל את ההזמנה הזו?',
  delete_invitation_confirm: 'האם למחוק את רשומת ההזמנה הזו?',
  messages: {
    invitation_sent: 'ההזמנה נשלחה.',
    invitation_revoked: 'ההזמנה בוטלה.',
    invitation_resend: 'ההזמנה נשלחה מחדש.',
    invitation_deleted: 'רשומת ההזמנה נמחקה.',
  },
  errors: {
    email_required: 'נדרשת כתובת הדוא"ל של המוזמן.',
    email_exists: 'כתובת הדוא"ל כבר קיימת.',
    member_exists: 'המשתמש כבר חבר בארגון זה.',
    pending_invitation_exists:
      'כבר קיימת הזמנה ממתינה. יש למחוק את כתובת הדוא"ל הרלוונטית או לבטל את ההזמנה.',
    invalid_email: 'כתובת הדוא"ל אינה תקינה. יש לוודא שהיא בפורמט הנכון.',
    max_member_limit: 'הגעת למספר החברים המרבי ({{limit}}) עבור tenant זה.',
  },
};

export default Object.freeze(tenant_members);
