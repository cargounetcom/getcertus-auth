/* GetCertus addition (MPL-2.0, see GETCERTUS.md): admin console phrases. */
const role_details = {
  back_to_roles: 'חזרה לתפקידים',
  identifier: 'מזהה',
  delete_description:
    'פעולה זו תסיר את ההרשאות של התפקיד מהמשתמשים המושפעים ותמחק את הקישור בין תפקידים, משתמשים והרשאות.',
  role_deleted: '{{name}} נמחק בהצלחה.',
  general_tab: 'כללי',
  users_tab: 'משתמשים',
  m2m_apps_tab: 'אפליקציות מכונה-למכונה',
  permissions_tab: 'הרשאות',
  settings: 'הגדרות',
  settings_description:
    'תפקידים הם קבוצות של הרשאות שאפשר להקצות למשתמשים. הם גם מאגדים הרשאות שהוגדרו לממשקי API שונים, כך שקל יותר להוסיף, להסיר או לשנות הרשאות מאשר להקצות אותן לכל משתמש בנפרד.',
  field_name: 'שם',
  field_description: 'תיאור',
  field_is_default: 'תפקיד ברירת מחדל',
  field_is_default_description:
    'הגדירו תפקיד זה כתפקיד ברירת מחדל למשתמשים חדשים. אפשר להגדיר כמה תפקידי ברירת מחדל. זה משפיע גם על משתמשים שנוצרים דרך ה-Management API.',
  type_m2m_role_tag: 'מכונה-למכונה',
  type_user_role_tag: 'משתמש',
  m2m_role_notification:
    'הקצו תפקיד מכונה-למכונה זה לאפליקציית מכונה-למכונה כדי להעניק גישה למשאבי ה-API הרלוונטיים. <a>צרו אפליקציית מכונה-למכונה</a> קודם, אם עדיין לא עשיתם זאת.',
  permission: {
    assign_button: 'הקצאת הרשאות',
    assign_title: 'הקצאת הרשאות',
    assign_subtitle:
      'הקצו הרשאות לתפקיד זה. התפקיד יקבל את ההרשאות שנוספו, ומשתמשים עם התפקיד יירשו אותן.',
    assign_form_field: 'הקצאת הרשאות',
    added_text: 'נוספה הרשאה {{count, number}}',
    added_text_other: 'נוספו {{count, number}} הרשאות',
    api_permission_count: 'הרשאה {{count, number}}',
    api_permission_count_other: '{{count, number}} הרשאות',
    confirm_assign: 'הקצאת הרשאות',
    permission_assigned: 'ההרשאות שנבחרו הוקצו לתפקיד בהצלחה',
    deletion_description: 'אם ההרשאה תוסר, משתמשים עם תפקיד זה יאבדו את הגישה שהיא העניקה.',
    permission_deleted: 'ההרשאה "{{name}}" הוסרה מהתפקיד בהצלחה',
    empty: 'אין הרשאה זמינה',
  },
  users: {
    assign_button: 'הקצאת משתמשים',
    name_column: 'משתמש',
    app_column: 'אפליקציה',
    latest_sign_in_column: 'התחברות אחרונה',
    delete_description: 'המשתמש יישאר במאגר המשתמשים, אבל יאבד את ההרשאה של תפקיד זה.',
    deleted: '{{name}} הוסר מהתפקיד בהצלחה',
    assign_title: 'הקצאת משתמשים ל-{{name}}',
    assign_subtitle: 'מצאו משתמשים מתאימים באמצעות חיפוש לפי שם, אימייל, טלפון או מזהה משתמש.',
    assign_field: 'הקצאת משתמשים',
    confirm_assign: 'הקצאת משתמשים',
    assigned_toast_text: 'המשתמשים שנבחרו הוקצו לתפקיד בהצלחה',
    empty: 'אין משתמש זמין',
  },
  applications: {
    assign_button: 'הקצאת אפליקציות מכונה-למכונה',
    name_column: 'אפליקציה',
    app_column: 'אפליקציית מכונה-למכונה',
    description_column: 'תיאור',
    delete_description: 'האפליקציה תישאר במאגר האפליקציות, אבל תאבד את ההרשאה של תפקיד זה.',
    deleted: '{{name}} הוסרה מהתפקיד בהצלחה',
    assign_title: 'הקצאת אפליקציות מכונה-למכונה ל-{{name}}',
    assign_subtitle:
      'מצאו אפליקציות מכונה-למכונה מתאימות באמצעות חיפוש לפי שם, תיאור או מזהה אפליקציה.',
    assign_field: 'הקצאת אפליקציות מכונה-למכונה',
    confirm_assign: 'הקצאת אפליקציות מכונה-למכונה',
    assigned_toast_text: 'האפליקציות שנבחרו הוקצו לתפקיד בהצלחה',
    empty: 'אין אפליקציה זמינה',
  },
};

export default Object.freeze(role_details);
