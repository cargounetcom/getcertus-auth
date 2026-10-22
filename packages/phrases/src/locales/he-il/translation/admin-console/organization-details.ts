/* GetCertus addition (MPL-2.0, see GETCERTUS.md): admin console phrases. */
const organization_details = {
  page_title: 'פרטי ארגון',
  delete_confirmation:
    'לאחר המחיקה, כל החברים יאבדו את החברות והתפקידים שלהם בארגון זה. לא ניתן לבטל פעולה זו.',
  organization_id: 'מזהה ארגון',
  settings_description:
    'ארגונים מייצגים את הצוותים, הלקוחות העסקיים והחברות השותפות שיכולים לגשת לאפליקציות שלך.',
  name_placeholder: 'שם הארגון; אינו חייב להיות ייחודי.',
  description_placeholder: 'תיאור הארגון.',
  member: 'חבר',
  member_other: 'חברים',
  add_members_to_organization: 'הוספת חברים לארגון {{name}}',
  add_members_to_organization_description:
    'ניתן למצוא משתמשים מתאימים בחיפוש לפי שם, דוא"ל, טלפון או מזהה משתמש. חברים קיימים אינם מוצגים בתוצאות החיפוש.',
  add_with_organization_role: 'הוספה עם תפקיד/ים בארגון',
  user: 'משתמש',
  application: 'אפליקציה',
  application_other: 'אפליקציות',
  add_applications_to_organization: 'הוספת אפליקציות לארגון {{name}}',
  add_applications_to_organization_description:
    'ניתן למצוא אפליקציות מתאימות בחיפוש לפי מזהה אפליקציה, שם או תיאור. אפליקציות קיימות אינן מוצגות בתוצאות החיפוש.',
  at_least_one_application: 'נדרשת לפחות אפליקציה אחת.',
  remove_application_from_organization: 'הסרת האפליקציה מהארגון',
  remove_application_from_organization_description:
    'לאחר ההסרה, האפליקציה תאבד את השיוך והתפקידים שלה בארגון זה. לא ניתן לבטל פעולה זו.',
  search_application_placeholder: 'חיפוש לפי מזהה אפליקציה, שם או תיאור',
  roles: 'תפקידים בארגון',
  authorize_to_roles: 'מתן הרשאה ל-{{name}} לגשת לתפקידים הבאים:',
  edit_organization_roles: 'עריכת תפקידים בארגון',
  edit_organization_roles_title: 'עריכת התפקידים בארגון של {{name}}',
  remove_user_from_organization: 'הסרת המשתמש מהארגון',
  remove_user_from_organization_description:
    'לאחר ההסרה, המשתמש יאבד את החברות והתפקידים שלו בארגון זה. לא ניתן לבטל פעולה זו.',
  search_user_placeholder: 'חיפוש לפי שם, דוא"ל, טלפון או מזהה משתמש',
  at_least_one_user: 'נדרש לפחות משתמש אחד.',
  organization_roles_tooltip: 'התפקידים שהוקצו ל-{{type}} בארגון זה.',
  custom_data: 'נתונים מותאמים אישית',
  custom_data_tip:
    'נתונים מותאמים אישית הם אובייקט JSON שבו ניתן לשמור נתונים נוספים הקשורים לארגון.',
  invalid_json_object: 'אובייקט JSON לא תקין.',
  branding: {
    name: 'מיתוג',
    description: 'התאמה אישית של חוויית הכניסה ברמת הארגון.',
    organization_level_sie: 'חוויית כניסה ברמת הארגון',
    organization_level_sie_switch:
      'הפעלת חוויית הכניסה ברמת הארגון והגדרת מיתוג ייעודי לארגון. אם האפשרות מושבתת, המערכת תחזור תחילה לכניסה ברמת האפליקציה ולאחר מכן לחוויית הכניסה הכללית.',
    logo: 'לוגואים של הארגון',
    logo_tooltip:
      'ניתן להעביר את מזהה הארגון כדי להציג לוגו זה בחוויית הכניסה; נדרשת גרסה כהה של הלוגו אם מצב כהה מופעל בהגדרות חוויית הכניסה הכללית. <a>מידע נוסף</a>',
  },
  jit: {
    title: 'הקצאה בזמן אמת (JIT)',
    description:
      'משתמשים יכולים להצטרף אוטומטית לארגון ולקבל תפקידים בכניסה הראשונה שלהם באמצעות שיטות אימות מסוימות. ניתן להגדיר תנאים להקצאה בזמן אמת.',
    email_domain: 'הקצאה לפי דומיין דוא"ל',
    email_domain_description:
      'משתמשים חדשים שנרשמים עם כתובת דוא"ל מאומתת, או בכניסה חברתית עם כתובת דוא"ל מאומתת, יצטרפו אוטומטית לארגון. <a>מידע נוסף</a>',
    email_domain_placeholder: 'הזנת דומייני דוא"ל להקצאה בזמן אמת',
    invalid_domain: 'דומיין לא תקין',
    domain_already_added: 'הדומיין כבר נוסף',
    sso_enabled_domain_warning:
      'הזנת דומייני דוא"ל המשויכים ל-enterprise SSO. משתמשים עם כתובות אלה יעברו בתהליך ה-SSO הרגיל ולא יתווספו לארגון זה, אלא אם הוגדרה הקצאה דרך enterprise SSO.',
    enterprise_sso: 'הקצאה דרך enterprise SSO',
    no_enterprise_connector_set:
      'עדיין לא הגדרת מחבר enterprise SSO. יש להוסיף תחילה מחברים כדי להפעיל הקצאה דרך enterprise SSO. <a>הגדרה</a>',
    add_enterprise_connector: 'הוספת מחבר enterprise',
    enterprise_sso_description:
      'משתמשים חדשים או קיימים שנכנסים דרך enterprise SSO בפעם הראשונה יצטרפו אוטומטית לארגון. <a>מידע נוסף</a>',
    organization_roles: 'תפקידי ברירת מחדל בארגון',
    organization_roles_description:
      'הקצאת תפקידים למשתמשים כשהם מצטרפים לארגון דרך הקצאה בזמן אמת.',
  },
  mfa: {
    title: 'אימות רב-שלבי (MFA)',
    tip: 'כש-MFA נדרש, משתמשים ללא MFA מוגדר יידחו כשינסו להמיר טוקן ארגון. הגדרה זו אינה משפיעה על אימות המשתמשים.',
    description: 'חיוב משתמשים להגדיר אימות רב-שלבי כדי לגשת לארגון זה.',
    no_mfa_warning:
      'לא הופעלה אף שיטת אימות רב-שלבי ב-tenant שלך. משתמשים לא יוכלו לגשת לארגון זה עד שתופעל לפחות <a>שיטת אימות רב-שלבי</a> אחת.',
  },
};

export default Object.freeze(organization_details);
