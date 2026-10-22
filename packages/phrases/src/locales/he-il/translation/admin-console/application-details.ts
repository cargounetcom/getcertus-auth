/* GetCertus addition (MPL-2.0, see GETCERTUS.md): admin console phrases. */
const application_details = {
  page_title: 'פרטי אפליקציה',
  back_to_applications: 'חזרה לאפליקציות',
  check_guide: 'למדריך',
  settings: 'הגדרות',
  settings_description:
    '"אפליקציה" היא תוכנה או שירות רשומים שיכולים לגשת למידע של משתמש או לפעול בשמו. אפליקציות עוזרות לזהות מי מבקש מה מ-GetCertus ומטפלות בהתחברות ובהרשאות. מלאו את השדות הנדרשים לאימות.',
  integration: 'שילוב',
  integration_description:
    'פריסה עם ה-workers המאובטחים של GetCertus, על גבי רשת הקצה של Cloudflare, לביצועים מהשורה הראשונה והפעלה קרה של 0ms בכל העולם.',
  service_configuration: 'הגדרת השירות',
  service_configuration_description: 'השלימו את ההגדרות הנדרשות בשירות שלכם.',
  session: 'סשן',
  endpoints_and_credentials: 'נקודות קצה ופרטי גישה',
  endpoints_and_credentials_description:
    'השתמשו בנקודות הקצה ובפרטי הגישה הבאים כדי להגדיר את חיבור ה-OIDC באפליקציה שלכם.',
  refresh_token_settings: 'אסימון רענון',
  refresh_token_settings_description: 'ניהול כללי אסימון הרענון של אפליקציה זו.',
  machine_logs: 'יומני מכונה',
  application_name: 'שם האפליקציה',
  application_name_placeholder: 'האפליקציה שלי',
  description: 'תיאור',
  description_placeholder: 'הזינו תיאור לאפליקציה',
  config_endpoint: 'נקודת קצה להגדרות ספק OpenID',
  issuer_endpoint: 'נקודת קצה של המנפיק',
  jwks_uri: 'JWKS URI',
  authorization_endpoint: 'נקודת קצה להרשאה',
  authorization_endpoint_tip:
    'נקודת הקצה לביצוע אימות והרשאה. משמשת ל<a>אימות</a> של OpenID Connect.',
  show_endpoint_details: 'הצגת פרטי נקודות הקצה',
  hide_endpoint_details: 'הסתרת פרטי נקודות הקצה',
  logto_endpoint: 'נקודת קצה של GetCertus',
  application_id: 'מזהה אפליקציה',
  application_id_tip:
    'המזהה הייחודי של האפליקציה, שבדרך כלל נוצר על ידי GetCertus. הוא גם ה-“<a>client_id</a>” ב-OpenID Connect.',
  application_secret: 'סוד האפליקציה',
  application_secret_other: 'סודות האפליקציה',
  redirect_uri: 'URI להפניה',
  redirect_uris: 'כתובות URI להפניה',
  redirect_uri_placeholder: 'https://your.website.com/app',
  redirect_uri_placeholder_native: 'io.logto://callback',
  redirect_uri_tip:
    'ה-URI שאליו המשתמש מופנה לאחר התחברות (מוצלחת או לא). ראו <a>AuthRequest</a> של OpenID Connect למידע נוסף.',
  mixed_redirect_uri_warning:
    'סוג האפליקציה אינו תואם לפחות לאחד מכתובות ה-URI להפניה. זה לא תואם לשיטות העבודה המומלצות, ואנו ממליצים בחום לשמור על כתובות הפניה עקביות.',
  wildcard_redirect_uri_warning:
    'כתובות הפניה עם תווים כלליים אינן חלק מתקן OIDC ועלולות להרחיב את משטח התקיפה. השתמשו בהן בזהירות והעדיפו כתובות מדויקות כשאפשר.',
  post_sign_out_redirect_uri: 'URI להפניה אחרי התנתקות',
  post_sign_out_redirect_uris: 'כתובות URI להפניה אחרי התנתקות',
  post_sign_out_redirect_uri_placeholder: 'https://your.website.com/home',
  post_sign_out_redirect_uri_tip:
    'ה-URI שאליו המשתמש מופנה לאחר התנתקות (אופציונלי). בחלק מסוגי האפליקציות ייתכן שאין לו השפעה מעשית.',
  cors_allowed_origins: 'מקורות מותרים ב-CORS',
  cors_allowed_origins_placeholder: 'https://your.website.com',
  cors_allowed_origins_tip:
    'כברירת מחדל, כל המקורות של כתובות ההפניה מותרים. בדרך כלל אין צורך לעשות דבר בשדה זה. ראו את <a>תיעוד MDN</a> לפרטים.',
  token_endpoint: 'נקודת קצה לאסימונים',
  user_info_endpoint: 'נקודת קצה של userinfo',
  enable_admin_access: 'הפעלת גישת מנהל',
  enable_admin_access_label:
    'הפעלה או השבתה של הגישה ל-Management API. לאחר ההפעלה תוכלו להשתמש באסימוני גישה כדי לקרוא ל-Management API בשם אפליקציה זו.',
  always_issue_refresh_token: 'תמיד להנפיק אסימון רענון',
  always_issue_refresh_token_label:
    'כשמופעל, GetCertus תמיד ינפיק אסימוני רענון, בין אם `prompt=consent` מופיע בבקשת האימות ובין אם לא. עם זאת, לא מומלץ לעשות זאת אלא אם יש צורך, כי זה אינו תואם ל-OpenID Connect ועלול לגרום לבעיות.',
  refresh_token_ttl: 'משך החיים (TTL) של אסימון הרענון בימים',
  refresh_token_ttl_tip:
    'משך הזמן שבו אפשר להשתמש באסימון רענון כדי לבקש אסימוני גישה חדשים לפני שהוא פג ונעשה לא תקף. בקשות אסימון מאריכות את משך החיים של אסימון הרענון לערך זה.',
  rotate_refresh_token: 'החלפת אסימון רענון',
  rotate_refresh_token_label:
    'כשמופעל, GetCertus ינפיק אסימון רענון חדש בבקשות אסימון כאשר חלפו 70% ממשך החיים (TTL) המקורי או כשמתקיימים תנאים מסוימים. <a>מידע נוסף</a>',
  rotate_refresh_token_label_for_public_clients:
    'כשמופעל, GetCertus ינפיק אסימון רענון חדש בכל בקשת אסימון. <a>מידע נוסף</a>',
  backchannel_logout: 'התנתקות Backchannel',
  backchannel_logout_description:
    'הגדרת נקודת הקצה להתנתקות backchannel של OpenID Connect, והאם נדרש סשן עבור אפליקציה זו.',
  backchannel_logout_uri: 'URI להתנתקות backchannel',
  backchannel_logout_uri_session_required: 'האם נדרש סשן?',
  backchannel_logout_uri_session_required_description:
    'כשמופעל, ה-RP דורש שאסימון ההתנתקות יכלול טענת `sid` (מזהה סשן) כדי לזהות את סשן ה-RP מול ה-OP כאשר משתמשים ב-`backchannel_logout_uri`.',
  token_exchange: 'החלפת אסימונים',
  token_exchange_description: 'ניהול הגדרות החלפת האסימונים של אפליקציה זו.',
  allow_token_exchange: 'לאפשר החלפת אסימונים',
  allow_token_exchange_description:
    'לאפשר לאפליקציה זו ליזום בקשות להחלפת אסימונים. נדרש עבור <impersonationLink>התחזות למשתמש</impersonationLink> ו<patLink>אסימוני גישה אישיים</patLink>.',
  allow_token_exchange_public_client_warning:
    'לא מומלץ להפעיל החלפת אסימונים עבור לקוחות ציבוריים (אפליקציית עמוד יחיד / אפליקציה נייטיב). לקוחות ציבוריים אינם יכולים לשמור פרטי גישה באופן מאובטח, מה שעלול לחשוף את האפליקציה לסיכוני התחזות באמצעות אסימונים.',
  device_flow_tag: 'זרימת מכשיר',
  device_flow_notification:
    'אפליקציה זו משתמשת ב-OAuth 2.0 Device Authorization Flow עבור מכשירים עם קלט מוגבל או אפליקציות ללא ממשק (למשל טלוויזיות, CLI). המשתמשים משלימים את ההתחברות במכשיר אחר על ידי הזנת קוד מכשיר או סריקת קוד QR. <a>מידע נוסף</a>',
  device_flow_try_demo: 'נסו את ההדגמה',
  delete_description:
    'לא ניתן לבטל פעולה זו. האפליקציה תימחק לצמיתות. הזינו את שם האפליקציה <span>{{name}}</span> לאישור.',
  enter_your_application_name: 'הזינו את שם האפליקציה',
  application_deleted: 'האפליקציה {{name}} נמחקה בהצלחה',
  redirect_uri_required: 'יש להזין לפחות URI הפניה אחד',
  app_domain_description_1:
    'אתם מוזמנים להשתמש בדומיין שלכם עם {{domain}} באמצעות GetCertus; הוא תקף לצמיתות.',
  app_domain_description_2:
    'אתם מוזמנים להשתמש בדומיין שלכם <domain>{{domain}}</domain>; הוא תקף לצמיתות.',
  custom_rules: 'כללי אימות מותאמים',
  custom_rules_placeholder: '^/(admin|privacy)/.+$',
  custom_rules_description:
    'הגדירו באמצעות ביטויים רגולריים כללים לנתיבים שדורשים אימות. ברירת מחדל: אם השדה ריק, כל האתר מוגן.',
  authentication_routes: 'נתיבי אימות',
  custom_rules_tip:
    "שתי דוגמאות:<ol><li>להגן באימות רק על הנתיבים '/admin' ו-'/privacy': ^/(admin|privacy)/.*</li><li>להחריג תמונות JPG מאימות: ^(?!.*\\.jpg$).*$</li></ol>",
  authentication_routes_description:
    'הפנו את כפתור האימות דרך הנתיבים שהוגדרו. שימו לב: לא ניתן להחליף נתיבים אלה.',
  protect_origin_server: 'הגנה על שרת המקור',
  protect_origin_server_description:
    'ודאו ששרת המקור מוגן מגישה ישירה. ראו את המדריך ל<a>הוראות מפורטות</a>.',
  third_party_settings_description:
    'שלבו אפליקציות צד שלישי עם GetCertus כספק הזהויות (IdP) באמצעות OIDC / OAuth 2.0, כולל מסך הסכמה להרשאת המשתמש.',
  session_duration: 'משך הסשן (ימים)',
  try_it: 'נסו',
  no_organization_placeholder: 'לא נמצא ארגון. <a>מעבר לארגונים</a>',
  field_custom_data: 'נתונים מותאמים',
  field_custom_data_tip:
    'מידע נוסף על האפליקציה שאינו כלול במאפיינים המוגדרים מראש, כמו הגדרות ותצורות עסקיות.',
  custom_data_invalid: 'הנתונים המותאמים חייבים להיות אובייקט JSON תקין',
  access_control: {
    name: 'כללים',
    title: 'בקרת גישה',
    description: 'התאימו את כללי בקרת הגישה ברמת האפליקציה.',
    enable: 'הפעלת בקרת גישה ברמת האפליקציה',
    enable_description:
      'הפעילו בקרת גישה מפורטת כדי להגביל אילו משתמשים יכולים לגשת לאפליקציה. אם היא מושבתת, כל המשתמשים הרשומים במערכת יכולים לגשת.',
    enable_without_rules_notice: 'הוסיפו לפחות כלל גישה אחד לפני הפעלת בקרת הגישה.',
    load_error: 'טעינת כללי בקרת הגישה נכשלה.',
    custom_allow_rules: 'כללי היתר מותאמים',
    custom_allow_rules_description:
      'צרו כללים כך שמשתמשים עם מאפיינים מסוימים יקבלו גישה אוטומטית. כשהאפשרות מופעלת, נדרש לפחות כלל אחד.',
    rules: 'כללי גישה',
    add_rules: 'הוספת כללים',
    rules_description: 'משתמשים יכולים לגשת לאפליקציה כאשר הם עומדים באחד מהכללים שהוגדרו.',
    empty_rules_description: 'עדיין לא הוגדרו כללים.',
    delete_rule_confirmation: 'האם אתם בטוחים שברצונכם להסיר את הכלל?',
    rule_table_rules: 'כללים',
    rule_table_description: 'תיאור',
    rule_table_users: 'משתמשים',
    rule_table_members: 'חברים',
    rule_table_user_id: 'מזהה משתמש',
    rule_count: 'כלל {{count}}',
    rule_count_other: '{{count}} כללים',
    rule_users: 'משתמשים',
    rule_users_description: 'משתמשים מסוימים יכולים לגשת לאפליקציה.',
    rule_roles: 'תפקידים',
    rule_user_roles: 'תפקידי משתמש',
    rule_user_roles_description: 'משתמשים שהוקצו להם תפקידי המשתמש שנבחרו יכולים לגשת לאפליקציה.',
    rule_organizations: 'ארגונים',
    rule_organizations_description:
      'כל החברים הנוכחיים והעתידיים בארגונים שנבחרו יכולים לגשת לאפליקציה.',
    rule_organization_roles: 'תפקידים בארגון',
    rule_organization_roles_description:
      'חברים עם תפקידי הארגון שנבחרו בארגונים שנבחרו יכולים לגשת לאפליקציה.',
  },
  branding: {
    name: 'מיתוג',
    description: 'התאימו את הלוגו ואת צבע המיתוג של האפליקציה לחוויה ברמת האפליקציה.',
    description_third_party: 'התאימו את שם התצוגה והלוגו של האפליקציה במסך ההסכמה.',
    app_logo: 'לוגו האפליקציה',
    app_level_sie: 'חוויית התחברות ברמת האפליקציה',
    app_level_sie_switch:
      'הפעילו חוויית התחברות ברמת האפליקציה והגדירו מיתוג ייעודי לאפליקציה. אם האפשרות מושבתת, תשמש חוויית ההתחברות הכללית.',
    more_info: 'מידע נוסף',
    more_info_description: 'הציגו למשתמשים פרטים נוספים על האפליקציה במסך ההסכמה.',
    display_name: 'שם תצוגה',
    application_logo: 'לוגו האפליקציה',
    application_logo_dark: 'לוגו האפליקציה (כהה)',
    brand_color: 'צבע המותג',
    brand_color_dark: 'צבע המותג (כהה)',
    terms_of_use_url: 'כתובת תנאי השימוש של האפליקציה',
    privacy_policy_url: 'כתובת מדיניות הפרטיות של האפליקציה',
  },
  permissions: {
    name: 'הרשאות',
    description:
      'בחרו את ההרשאות שאפליקציית הצד השלישי צריכה כדי לקבל, בהרשאת המשתמש, גישה לסוגי נתונים מסוימים.',
    user_permissions: 'נתוני משתמש אישיים',
    organization_permissions: 'גישה לארגון',
    table_name: 'הענקת הרשאות',
    field_name: 'הרשאה',
    field_description: 'מוצג במסך ההסכמה',
    delete_text: 'הסרת הרשאה',
    permission_delete_confirm:
      'פעולה זו תבטל את ההרשאות שניתנו לאפליקציית הצד השלישי, והיא לא תוכל עוד לבקש הרשאת משתמש לסוגי נתונים מסוימים. האם להמשיך?',
    permissions_assignment_description:
      'בחרו את ההרשאות שאפליקציית הצד השלישי מבקשת כדי לקבל, בהרשאת המשתמש, גישה לסוגי נתונים מסוימים.',
    user_profile: 'נתוני משתמש',
    api_permissions: 'הרשאות API',
    organization: 'הרשאות ארגון',
    user_permissions_assignment_form_title: 'הוספת הרשאות פרופיל משתמש',
    organization_permissions_assignment_form_title: 'הוספת הרשאות ארגון',
    api_resource_permissions_assignment_form_title: 'הוספת הרשאות משאבי API',
    user_data_permission_description_tips:
      'אפשר לשנות את תיאור ההרשאות לנתוני משתמש אישיים דרך "חוויית התחברות > תוכן > ניהול שפות"',
    permission_description_tips:
      'כאשר GetCertus משמש כספק זהויות (IdP) לאימות באפליקציות צד שלישי ומבקשים מהמשתמשים הרשאה, התיאור הזה מוצג במסך ההסכמה.',
    user_title: 'משתמש',
    user_description: 'בחרו את ההרשאות שאפליקציית הצד השלישי מבקשת לגישה לנתוני משתמש מסוימים.',
    grant_user_level_permissions: 'הענקת הרשאות לנתוני משתמש',
    organization_title: 'ארגון',
    organization_description:
      'בחרו את ההרשאות שאפליקציית הצד השלישי מבקשת לגישה לנתוני ארגון מסוימים.',
    grant_organization_level_permissions: 'הענקת הרשאות לנתוני ארגון',
    oidc_title: 'OIDC',
    oidc_description:
      'הרשאות הליבה של OIDC מוגדרות אוטומטית לאפליקציה. ה-scopes האלה חיוניים לאימות ואינם מוצגים במסך ההסכמה של המשתמש.',
    default_oidc_permissions: 'הרשאות OIDC ברירת מחדל',
    permission_column: 'הרשאה',
    guide_column: 'הסבר',
    openid_permission: 'openid',
    openid_permission_guide:
      "אופציונלי לגישה למשאבי OAuth.\nנדרש לאימות OIDC. מעניק אסימון ID וגישה ל-'userinfo_endpoint'.",
    offline_access_permission: 'offline_access',
    offline_access_permission_guide:
      'אופציונלי. מקבל אסימוני רענון לגישה ארוכת טווח או למשימות ברקע.',
  },
  roles: {
    assign_button: 'הקצאת תפקידים',
    delete_description:
      'פעולה זו תסיר את התפקיד מאפליקציית מכונה-למכונה זו. התפקיד עצמו ימשיך להתקיים, אבל לא יהיה משויך עוד לאפליקציה.',
    deleted: '{{name}} הוסר בהצלחה ממשתמש זה.',
    assign_title: 'הקצאת תפקידים ל-{{name}}',
    assign_subtitle:
      'אפליקציות מכונה-למכונה חייבות תפקידים מסוג מכונה-למכונה כדי לגשת למשאבי ה-API הרלוונטיים.',
    assign_role_field: 'הקצאת תפקידים',
    role_search_placeholder: 'חיפוש לפי שם תפקיד',
    added_text: 'נוספו {{value, number}}',
    assigned_app_count: '{{value, number}} אפליקציות',
    confirm_assign: 'הקצאת תפקידים',
    role_assigned: 'התפקידים הוקצו בהצלחה',
    search: 'חיפוש לפי שם תפקיד, תיאור או מזהה',
    empty: 'אין תפקיד זמין',
  },
  secrets: {
    value: 'ערך',
    empty: 'לאפליקציה אין סודות.',
    created_at: 'נוצר ב',
    expires_at: 'תוקף עד',
    never: 'אף פעם',
    create_new_secret: 'יצירת סוד חדש',
    delete_confirmation: 'לא ניתן לבטל פעולה זו. האם אתם בטוחים שברצונכם למחוק את הסוד?',
    deleted: 'הסוד נמחק בהצלחה.',
    activated: 'הסוד הופעל בהצלחה.',
    deactivated: 'הסוד הושבת בהצלחה.',
    legacy_secret: 'סוד מדור קודם',
    expired: 'פג תוקף',
    expired_tooltip: 'תוקף הסוד פג ב-{{date}}.',
    create_modal: {
      title: 'יצירת סוד אפליקציה',
      expiration: 'תפוגה',
      expiration_description: 'תוקף הסוד יפוג ב-{{date}}.',
      expiration_description_never:
        'תוקף הסוד לא יפוג לעולם. מומלץ להגדיר תאריך תפוגה לאבטחה טובה יותר.',
      days: 'יום {{count}}',
      days_other: '{{count}} ימים',
      years: 'שנה {{count}}',
      years_other: '{{count}} שנים',
      created: 'הסוד {{name}} נוצר בהצלחה.',
    },
    edit_modal: {
      title: 'עריכת סוד אפליקציה',
      edited: 'הסוד {{name}} נערך בהצלחה.',
    },
  },
  saml_idp_config: {
    title: 'מטא-נתונים של SAML IdP',
    description: 'השתמשו במטא-נתונים ובתעודה הבאים כדי להגדיר את ה-SAML IdP באפליקציה שלכם.',
    metadata_url_label: 'כתובת מטא-נתוני IdP',
    single_sign_on_service_url_label: 'כתובת שירות ההתחברות היחידה (SSO)',
    idp_entity_id_label: 'מזהה ישות IdP',
  },
  saml_idp_certificates: {
    title: 'תעודת חתימה של SAML',
    expires_at: 'תוקף עד',
    finger_print: 'טביעת אצבע',
    status: 'סטטוס',
    active: 'פעילה',
    inactive: 'לא פעילה',
  },
  saml_idp_name_id_format: {
    title: 'פורמט Name ID',
    description: 'בחרו את פורמט ה-Name ID של ה-SAML IdP.',
    persistent: 'קבוע',
    persistent_description: 'שימוש במזהה המשתמש ב-GetCertus כ-Name ID',
    transient: 'זמני',
    transient_description: 'שימוש במזהה משתמש חד-פעמי כ-Name ID',
    unspecified: 'לא מוגדר',
    unspecified_description: 'שימוש במזהה המשתמש ב-GetCertus כ-Name ID',
    email_address: 'כתובת אימייל',
    email_address_description: 'שימוש בכתובת האימייל כ-Name ID',
  },
  saml_idp_authentication: {
    always_force_authn: 'תמיד לחייב אימות',
    always_force_authn_description:
      'לחייב משתמשים להתחבר מחדש בכל פעם שהם נכנסים לאפליקציה, גם אם כבר יש להם סשן GetCertus.',
    always_force_authn_tip:
      'כשמופעל, GetCertus תמיד מבקש מהמשתמשים להתחבר מחדש לאפליקציה זו. כשמושבת, נעשה שימוש חוזר בסשן GetCertus קיים, אלא אם ספק השירות מבקש אימות חדש באמצעות ForceAuthn.',
  },
  saml_encryption_config: {
    encrypt_assertion: 'הצפנת ה-SAML assertion',
    encrypt_assertion_description: 'הפעלת האפשרות תצפין את ה-SAML assertion.',
    encrypt_then_sign: 'הצפנה ואז חתימה',
    encrypt_then_sign_description:
      'כשהאפשרות מופעלת, ה-SAML assertion מוצפן ואז נחתם; אחרת הוא נחתם ואז מוצפן.',
    certificate: 'תעודה',
    certificate_tooltip:
      'העתיקו והדביקו את תעודת ה-x509 שקיבלתם מספק השירות כדי להצפין את ה-SAML assertion.',
    certificate_placeholder:
      '-----BEGIN CERTIFICATE-----\nMIICYDCCAcmgAwIBA...\n-----END CERTIFICATE-----\n',
    certificate_missing_error: 'נדרשת תעודה.',
    certificate_invalid_format_error: 'פורמט התעודה אינו תקין. בדקו את הפורמט ונסו שוב.',
  },
  saml_app_attribute_mapping: {
    name: 'מיפוי מאפיינים',
    title: 'מיפוי מאפיינים בסיסי',
    description: 'הוסיפו מיפוי מאפיינים כדי לסנכרן את פרופיל המשתמש מ-GetCertus לאפליקציה שלכם.',
    col_logto_claims: 'ערך ב-GetCertus',
    col_sp_claims: 'שם הערך באפליקציה שלכם',
    add_button: 'הוספת עוד',
  },
  concurrent_device_limit: {
    title: 'מגבלת מכשירים במקביל',
    enable: 'הפעלת מגבלת מכשירים במקביל',
    enable_description:
      'כשמופעל, GetCertus אוכף מספר מרבי של הענקות פעילות לכל משתמש באפליקציה זו.',
    field: 'מגבלת מכשירים במקביל לאפליקציה',
    field_description:
      'הגבילו בכמה מכשירים משתמש יכול להיות מחובר בו-זמנית. GetCertus אוכף זאת על ידי הגבלת ההענקות הפעילות ומבטל אוטומטית את ההענקה הישנה ביותר כשהמגבלה נחצית.',
    field_placeholder: 'השאירו ריק ללא מגבלה',
    should_be_greater_than_zero: 'חייב להיות גדול מ-0.',
  },
};

export default Object.freeze(application_details);
