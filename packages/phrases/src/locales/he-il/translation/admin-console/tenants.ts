/* GetCertus addition (MPL-2.0, see GETCERTUS.md): admin console phrases. */
const tenants = {
  title: 'הגדרות',
  description: 'ניהול יעיל של הגדרות ה-tenant והתאמה אישית של הדומיין שלך.',
  oss_description:
    'כאן ניתן לשנות את הגדרות החשבון ולנהל את המידע האישי שלך כדי לשמור על אבטחת החשבון.',
  tabs: {
    settings: 'הגדרות',
    members: 'חברים',
    domains: 'דומיינים',
    oidc_configs: 'הגדרות OIDC',
    subscription: 'תוכנית וחיוב',
    billing_history: 'היסטוריית חיובים',
    license: 'רישיון',
  },
  license: {
    purchase_title: 'תוכניות באירוח עצמי',
    purchase_description:
      'Pro ו-Enterprise באירוח עצמי פותחות תכונות בתשלום במופע שלך, כמו הסתרת המיתוג של GetCertus, ממשק משתמש משלך, שיתוף פעולה ב-Console ואפליקציות SAML ללא הגבלה. יש לרכוש תוכנית כדי לקבל מפתח רישיון.',
    purchase_button: 'צפייה בתוכניות באירוח עצמי',
    install_title: 'התקנת רישיון',
    install_description: 'יש להדביק את מפתח הרישיון שקיבלת לאחר רכישת תוכנית באירוח עצמי.',
    install_button: 'התקנת רישיון',
    key_field: 'מפתח רישיון',
    key_field_description:
      'המפתח מאומת במופע שלך ולעולם אינו יוצא ממנו. אם המפתח שלך פג תוקף, יש לפנות ל-GetCertus לקבלת מפתח חדש.',
    key_placeholder: 'יש להדביק כאן את מפתח הרישיון',
    installed_toast: 'הרישיון הותקן בהצלחה.',
    details_title: 'רישיון',
    details_description: 'הרישיון המותקן במופע זה ומה הוא מעניק.',
    plan_field: 'תוכנית',
    environment_field: 'סביבה',
    environment_production: 'ייצור',
    environment_non_production: 'לא ייצור',
    expires_at_field: 'תאריך תפוגה',
    installed_at_field: 'תאריך התקנה',
    last_refreshed_at_field: 'חידוש אחרון',
    grace_ends_at_field: 'סיום תקופת החסד',
    refresh_expired_description:
      'תוקף מפתח הרישיון פג ב-{{expiresAt}}. התכונות המורשות יישארו זמינות עד {{graceEndsAt}} בזמן ש-GetCertus מנסה לחדש אותו.',
    refresh_refused_description:
      'חידוש הרישיון נדחה כי הרישיון {{reason}}. התכונות המורשות יישארו זמינות עד {{graceEndsAt}}.',
    refusal_reason_canceled: 'בוטל',
    refusal_reason_unpaid: 'לא שולם',
    refusal_reason_expired: 'פג תוקף',
    refusal_reason_revoked: 'נשלל',
    refusal_reason_unknown: 'לא זמין',
    grace_expired_description:
      'תקופת החסד של הרישיון הסתיימה ב-{{graceEndsAt}}. התקנה זו חזרה להגדרות ברירת המחדל של OSS. יש לפנות ל-GetCertus לקבלת מפתח רישיון חדש ולהתקין אותו מחדש.',
    get_fresh_key_button: 'קבלת מפתח רישיון חדש',
    replace_button: 'החלפת רישיון',
  },
  members: {
    card_title: 'ניהול tenants בצורה מאובטחת יותר עם GetCertus Cloud',
    card_description: 'הוספת מנהלים או משתפי פעולה ל-tenant בלי לשתף חשבון מנהל יחיד.',
    card_action: 'גילוי GetCertus Cloud',
    self_hosted_card_title: 'ניהול tenants בצורה מאובטחת יותר עם תוכניות באירוח עצמי',
    self_hosted_card_description: 'הוספת מנהלים או משתפי פעולה ל-tenant בלי לשתף חשבון מנהל יחיד.',
    self_hosted_card_action: 'גילוי תוכניות באירוח עצמי',
  },
  settings: {
    title: 'הגדרות',
    description: 'הגדרת שם ה-tenant וצפייה באזור אחסון הנתונים ובסוג ה-tenant.',
    tenant_id: 'מזהה tenant',
    tenant_name: 'שם tenant',
    tenant_instance: 'בחירת מופע',
    tenant_instance_description:
      'בחירת המקום שבו יתארח ה-tenant. יש לבחור GetCertus Cloud לתשתית ציבורית משותפת, או מופע פרטי למשאבים ייעודיים.',
    tenant_region: 'אזור נתונים',
    tenant_region_description:
      "המיקום הפיזי שבו מתארחים משאבי ה-tenant (משתמשים, אפליקציות וכו'). לא ניתן לשנות זאת לאחר היצירה.",
    tenant_region_tip: 'משאבי ה-tenant שלך מתארחים ב-{{region}}. <a>מידע נוסף</a>',
    environment_tag_development: 'Dev',
    environment_tag_production: 'Prod',
    tenant_type: 'סוג tenant',
    development_description:
      'לבדיקות בלבד ואין להשתמש בו בייצור. לא נדרש מינוי. כולל את כל תכונות Pro, אבל עם מגבלות כמו באנר בעת כניסה.',
    production_description: 'מיועד לאפליקציות שבשימוש משתמשי קצה ועשוי לדרוש מינוי בתשלום.',
    tenant_info_saved: 'פרטי ה-tenant נשמרו בהצלחה.',
    tenant_mfa: 'אימות רב-שלבי',
    tenant_mfa_description: 'חיוב החברים להגדיר אימות רב-שלבי כדי לגשת ל-tenant זה.',
    oss_description: 'ניהול האופן שבו חברים ניגשים ל-Console במופע זה.',
    tenant_mfa_confirm_title: 'לחייב MFA לכל החברים?',
    tenant_mfa_confirm_description:
      'החברים האלה עדיין לא הגדירו MFA. הם יישארו מחוברים, ויתבקשו להגדיר אותו בכניסה הבאה שלהם:',
    tenant_mfa_confirm_self:
      'גם את/ה עדיין לא הגדרת MFA. יש להגדיר אותו בהגדרות החשבון לפני הכניסה הבאה.',
    tenant_mfa_confirm_button: 'חיוב MFA',
    tenant_mfa_setup_required:
      'tenant זה דורש אימות רב-שלבי. יש להגדיר אותו עכשיו, אחרת תתבקש/י לעשות זאת בכניסה הבאה.',
    tenant_mfa_setup_action: 'הגדרת MFA',
    enterprise_sso: 'Enterprise SSO',
    enterprise_sso_description:
      'זמין בתוכניות בתשלום. יש לפנות אלינו כדי להפעיל enterprise SSO, כך שכל החברים יוכלו להיכנס ל-GetCertus Cloud Console דרך ספק הזהויות של הארגון שלך.',
  },
  full_env_tag: {
    development: 'פיתוח',
    production: 'ייצור',
  },
  deletion_card: {
    title: 'מחיקה',
    tenant_deletion: 'מחיקת tenant',
    tenant_deletion_description:
      'מחיקת ה-tenant תגרום להסרה לצמיתות של כל נתוני המשתמשים וההגדרות המשויכים. יש לפעול בזהירות.',
    tenant_deletion_button: 'מחיקת tenant',
  },
  leave_tenant_card: {
    title: 'עזיבה',
    leave_tenant: 'עזיבת tenant',
    leave_tenant_description: 'כל המשאבים ב-tenant יישארו, אבל לא תהיה לך עוד גישה ל-tenant זה.',
    last_admin_note: 'כדי לעזוב את ה-tenant, יש לוודא שלפחות לחבר נוסף אחד יש תפקיד מנהל.',
  },
  create_modal: {
    title: 'יצירת tenant',
    subtitle: 'יצירת tenant חדש עם משאבים ומשתמשים מבודדים.',
    tenant_id: 'מזהה tenant',
    tenant_usage_purpose: 'לאיזו מטרה ישמש ה-tenant?',
    development_description: 'לבדיקות בלבד ואין להשתמש בו בייצור. לא נדרש מינוי.',
    development_description_for_private_regions: 'לבדיקות בלבד ואין להשתמש בו בייצור.',
    development_hint: 'כולל את כל תכונות Pro, אבל עם מגבלות כמו באנר בעת כניסה.',
    production_description: 'לשימוש משתמשי קצה ועשוי לדרוש מינוי בתשלום.',
    available_plan: 'תוכנית זמינה:',
    create_button: 'יצירת tenant',
    tenant_name_placeholder: 'ה-tenant שלי',
    tenant_created: 'ה-tenant נוצר בהצלחה.',
    invitation_failed: 'חלק מההזמנות לא נשלחו. יש לנסות שוב מאוחר יותר דרך הגדרות -> חברים.',
    tenant_type_description: 'לא ניתן לשנות זאת לאחר היצירה.',
    tenant_id_invalid:
      'מזהה tenant יכול להכיל רק אותיות קטנות, ספרות ומקפים, ואורכו לא יעלה על {{max}} תווים.',
    tenant_id_placeholder: 'מזהה ה-tenant שלך',
    tenant_id_tip:
      'התאמה אישית של מזהה ה-tenant. אם השדה יישאר ריק, GetCertus ייצור מזהה ברירת מחדל. לא ניתן לשנות את מזהה ה-tenant לאחר היצירה.',
  },
  dev_tenant_migration: {
    title: 'עכשיו אפשר לנסות את תכונות Pro בחינם על ידי יצירת "tenant פיתוח" חדש!',
    affect_title: 'איך זה משפיע עליך?',
    hint_1:
      'אנחנו מחליפים את <strong>תגי הסביבה</strong> הישנים בשני סוגי tenant חדשים: <strong>“פיתוח”</strong> ו<strong>“ייצור”</strong>.',
    hint_2:
      'כדי להבטיח מעבר חלק ופעילות רציפה, כל ה-tenants שנוצרו מוקדם יותר יועברו לסוג <strong>ייצור</strong> יחד עם המינוי הקודם שלך.',
    hint_3: 'אין מה לדאוג, כל שאר ההגדרות שלך יישארו כפי שהן.',
    about_tenant_type: 'על סוג ה-tenant',
  },
  delete_modal: {
    title: 'מחיקת tenant',
    description_line1:
      'האם למחוק את ה-tenant "<span>{{name}}</span>" עם תג הסביבה "<span>{{tag}}</span>"? לא ניתן לבטל פעולה זו, והיא תגרום למחיקה לצמיתות של כל הנתונים ופרטי ה-tenant.',
    description_line2:
      'לפני מחיקת ה-tenant, אולי נוכל לעזור. <span><a>פנייה אלינו בדוא"ל</a></span>',
    description_line3: 'כדי להמשיך, יש להזין את שם ה-tenant "<span>{{name}}</span>" לאישור.',
    delete_button: 'מחיקה לצמיתות',
    cannot_delete_title: 'לא ניתן למחוק את ה-tenant',
    cannot_delete_description:
      'מצטערים, לא ניתן למחוק את ה-tenant כרגע. יש לוודא שאת/ה בתוכנית החינמית ושכל החיובים הפתוחים שולמו.',
  },
  leave_tenant_modal: {
    description: 'האם לעזוב את ה-tenant הזה?',
    leave_button: 'עזיבה',
  },
  tenant_landing_page: {
    title: 'עדיין לא יצרת tenant',
    description:
      'כדי להתחיל להגדיר את הפרויקט עם GetCertus, יש ליצור tenant חדש. כדי להתנתק או למחוק את החשבון, יש ללחוץ על כפתור האווטאר בפינה הימנית העליונה.',
    create_tenant_button: 'יצירת tenant',
  },
  status: {
    mau_exceeded: 'חריגה מ-MAU',
    token_exceeded: 'חריגה מטוקנים',
    suspended: 'מושעה',
    overdue: 'באיחור',
  },
  tenant_suspended_page: {
    title: 'ה-tenant הושעה. יש לפנות אלינו כדי לשחזר את הגישה.',
    description_1:
      'אנו מצטערים להודיע שחשבון ה-tenant שלך הושעה זמנית עקב שימוש לא תקין, כולל חריגה ממגבלות MAU, תשלומים באיחור או פעולות לא מורשות אחרות.',
    description_2:
      'אם נדרשת הבהרה נוספת, יש לך שאלות או ברצונך לשחזר את הפונקציונליות המלאה ולבטל את חסימת ה-tenants, אל תהסס/י לפנות אלינו מיד.',
  },
  production_tenant_notification: {
    text: 'את/ה ב-tenant פיתוח לבדיקות בחינם. יש ליצור tenant ייצור כדי לעלות לאוויר.',
    action: 'יצירת tenant',
  },
};

export default Object.freeze(tenants);
