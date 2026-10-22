/* GetCertus addition (MPL-2.0, see GETCERTUS.md): admin console phrases. */
const roles = {
  page_title: 'תפקידים',
  title: 'תפקידים',
  subtitle:
    'תפקידים כוללים הרשאות שקובעות מה משתמש יכול לעשות. RBAC משתמש בתפקידים כדי לתת למשתמשים גישה למשאבים לפעולות מסוימות.',
  create: 'יצירת תפקיד',
  role_name: 'שם התפקיד',
  role_type: 'סוג התפקיד',
  type_user: 'משתמש',
  type_machine_to_machine: 'מכונה-למכונה',
  role_description: 'תיאור',
  role_name_placeholder: 'הזינו את שם התפקיד',
  role_description_placeholder: 'הזינו את תיאור התפקיד',
  col_roles: 'תפקידים',
  col_type: 'סוג',
  col_description: 'תיאור',
  col_assigned_entities: 'הוקצו',
  user_counts: '{{count}} משתמשים',
  application_counts: '{{count}} אפליקציות',
  user_count: 'משתמש {{count}}',
  application_count: 'אפליקציה {{count}}',
  assign_permissions: 'הקצאת הרשאות',
  create_role_title: 'יצירת תפקיד',
  create_role_description: 'השתמשו בתפקידים כדי לארגן הרשאות ולהקצות אותן למשתמשים.',
  create_role_button: 'יצירת תפקיד',
  role_created: 'התפקיד {{name}} נוצר בהצלחה.',
  search: 'חיפוש לפי שם תפקיד, תיאור או מזהה',
  placeholder_title: 'תפקידים',
  placeholder_description:
    'תפקידים הם קבוצות של הרשאות שאפשר להקצות למשתמשים. הקפידו להוסיף הרשאות לפני יצירת תפקידים.',
  assign_roles: 'הקצאת תפקידים',
  management_api_access_notification:
    'לגישה ל-GetCertus Management API, בחרו תפקידים עם הרשאות Management API <flag/>.',
  with_management_api_access_tip: 'תפקיד מכונה-למכונה זה כולל הרשאות ל-GetCertus Management API',
  role_creation_hint: 'לא מוצאים את התפקיד המתאים? <a>צרו תפקיד</a>',
};

export default Object.freeze(roles);
