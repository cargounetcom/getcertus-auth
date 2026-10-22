/* GetCertus addition (MPL-2.0, see GETCERTUS.md): admin console phrases. */
const api_resource_details = {
  page_title: 'פרטי משאב API',
  back_to_api_resources: 'חזרה למשאבי API',
  general_tab: 'כללי',
  permissions_tab: 'הרשאות',
  settings: 'הגדרות',
  settings_description:
    'משאבי API, הידועים גם כ-Resource Indicators, מציינים את שירותי היעד או המשאבים המבוקשים, בדרך כלל משתנה בפורמט URI שמייצג את זהות המשאב.',
  management_api_settings_description:
    'GetCertus Management API הוא אוסף מקיף של ממשקים שמאפשר למנהלים לטפל במגוון משימות זהות, לאכוף מדיניות אבטחה ולעמוד בתקנות ובתקנים.',
  management_api_notice:
    'API זה מייצג ישות של GetCertus ולא ניתן לשנות או למחוק אותו. צרו אפליקציית מכונה-למכונה כדי לקרוא ל-GetCertus Management API. <a>מידע נוסף</a>',
  token_expiration_time_in_seconds: 'זמן תפוגת אסימון (בשניות)',
  token_expiration_time_in_seconds_placeholder: 'הזינו את זמן תפוגת האסימון',
  delete_description:
    'לא ניתן לבטל פעולה זו. משאב ה-API יימחק לצמיתות. הזינו את שם משאב ה-API <span>{{name}}</span> לאישור.',
  enter_your_api_resource_name: 'הזינו את שם משאב ה-API',
  api_resource_deleted: 'משאב ה-API {{name}} נמחק בהצלחה',
  permission: {
    create_button: 'יצירת הרשאה',
    create_title: 'יצירת הרשאה',
    create_subtitle: 'הגדירו את ההרשאות (scopes) שה-API הזה צריך.',
    confirm_create: 'יצירת הרשאה',
    edit_title: 'עריכת הרשאת API',
    edit_subtitle: 'הגדירו את ההרשאות (scopes) שה-API {{resourceName}} צריך.',
    name: 'שם ההרשאה',
    name_placeholder: 'read:resource',
    forbidden_space_in_name: 'שם ההרשאה לא יכול להכיל רווחים.',
    description: 'תיאור',
    description_placeholder: 'יכול לקרוא את המשאבים',
    permission_created: 'ההרשאה {{name}} נוצרה בהצלחה',
    delete_description: 'אם ההרשאה תימחק, משתמשים שהייתה להם יאבדו את הגישה שהיא העניקה.',
    deleted: 'ההרשאה "{{name}}" נמחקה בהצלחה.',
  },
};

export default Object.freeze(api_resource_details);
