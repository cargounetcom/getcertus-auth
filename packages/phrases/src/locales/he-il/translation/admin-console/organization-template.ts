/* GetCertus addition (MPL-2.0, see GETCERTUS.md): admin console phrases. */
const organization_template = {
  title: 'תבנית ארגון',
  subtitle:
    'באפליקציות SaaS מסוג multi-tenant, תבנית ארגון מגדירה מדיניות בקרת גישה משותפת (הרשאות ותפקידים) לארגונים מרובים.',
  roles: {
    tab_name: 'תפקידים בארגון',
    search_placeholder: 'חיפוש לפי שם תפקיד',
    create_title: 'יצירת תפקיד בארגון',
    role_column: 'תפקיד בארגון',
    permissions_column: 'הרשאות',
    placeholder_title: 'תפקיד בארגון',
    placeholder_description:
      'תפקיד בארגון הוא קבוצת הרשאות שניתן להקצות למשתמשים. ההרשאות חייבות להגיע מההרשאות המוגדרות מראש של הארגון.',
    create_modal: {
      title: 'יצירת תפקיד בארגון',
      create: 'יצירת תפקיד',
      name: 'שם התפקיד',
      description: 'תיאור',
      type: 'סוג התפקיד',
      created: 'התפקיד בארגון {{name}} נוצר בהצלחה.',
    },
  },
  permissions: {
    tab_name: 'הרשאות בארגון',
    search_placeholder: 'חיפוש לפי שם הרשאה',
    create_org_permission: 'יצירת הרשאה בארגון',
    permission_column: 'הרשאה בארגון',
    description_column: 'תיאור',
    placeholder_title: 'הרשאה בארגון',
    placeholder_description: 'הרשאה בארגון היא אישור לגשת למשאב בהקשר של ארגון.',
    delete_confirm:
      'אם הרשאה זו תימחק, כל התפקידים בארגון שכוללים אותה יאבדו אותה, ומשתמשים שהייתה להם יאבדו את הגישה שהיא העניקה.',
    create_title: 'יצירת הרשאה בארגון',
    edit_title: 'עריכת הרשאה בארגון',
    permission_field_name: 'שם ההרשאה',
    description_field_name: 'תיאור',
    description_field_placeholder: 'קריאת היסטוריית תורים',
    create_permission: 'יצירת הרשאה',
    created: 'ההרשאה בארגון {{name}} נוצרה בהצלחה.',
  },
};

export default Object.freeze(organization_template);
