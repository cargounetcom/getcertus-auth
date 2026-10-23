/* GetCertus addition (MPL-2.0, see GETCERTUS.md): admin console phrases. */
const organization_role_details = {
  page_title: 'פרטי תפקיד בארגון',
  back_to_org_roles: 'חזרה לתפקידים בארגון',
  delete_confirm:
    'פעולה זו תסיר את ההרשאות של תפקיד זה מהמשתמשים המושפעים ותמחק את הקשרים בין תפקידים בארגון, חברי הארגון והרשאות הארגון.',
  deleted: 'התפקיד בארגון {{name}} נמחק בהצלחה.',
  permissions: {
    tab: 'הרשאות',
    name_column: 'הרשאה',
    description_column: 'תיאור',
    type_column: 'סוג הרשאה',
    type: {
      api: 'הרשאת API',
      org: 'הרשאה בארגון',
    },
    assign_permissions: 'הקצאת הרשאות',
    remove_permission: 'הסרת הרשאה',
    remove_confirmation: 'אם הרשאה זו תוסר, משתמש עם תפקיד זה בארגון יאבד את הגישה שהעניקה ההרשאה.',
    removed: 'ההרשאה {{name}} הוסרה בהצלחה מתפקיד זה בארגון',
    assign_description:
      'הקצאת הרשאות לתפקידים בארגון זה. אלה יכולות לכלול גם הרשאות ארגון וגם הרשאות API.',
    organization_permissions: 'הרשאות בארגון',
    api_permissions: 'הרשאות API',
    assign_organization_permissions: 'הקצאת הרשאות בארגון',
    assign_api_permissions: 'הקצאת הרשאות API',
  },
  general: {
    tab: 'כללי',
    settings: 'הגדרות',
    description:
      'תפקיד בארגון הוא קבוצת הרשאות שניתן להקצות למשתמשים. ההרשאות יכולות להגיע מההרשאות המוגדרות מראש של הארגון ומהרשאות API.',
    name_field: 'שם',
    description_field: 'תיאור',
    description_field_placeholder: 'משתמשים עם הרשאות צפייה בלבד',
  },
};

export default Object.freeze(organization_role_details);
