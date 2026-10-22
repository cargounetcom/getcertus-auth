/* GetCertus addition (MPL-2.0, see GETCERTUS.md): admin console phrases. */
const sign_in_exp = {
  page_title: 'חוויית התחברות',
  page_title_with_account: 'התחברות וחשבון',
  title: 'התחברות וחשבון',
  description: 'התאימו את זרימות האימות ואת הממשק, וצפו בזמן אמת בחוויה המוכנה.',
  tabs: {
    branding: 'מיתוג',
    sign_up_and_sign_in: 'הרשמה והתחברות',
    collect_user_profile: 'איסוף פרופיל משתמש',
    account_center: 'מרכז החשבון',
    content: 'תוכן',
    password_policy: 'מדיניות סיסמאות',
  },
  welcome: {
    title: 'התאמת חוויית ההתחברות',
    description: 'התחילו מהר עם הגדרת ההתחברות הראשונה. המדריך יעביר אתכם בכל ההגדרות הנדרשות.',
    get_started: 'בואו נתחיל',
    apply_remind: 'שימו לב שחוויית ההתחברות חלה על כל האפליקציות בחשבון זה.',
  },
  color: {
    title: 'צבע',
    primary_color: 'צבע המותג',
    dark_primary_color: 'צבע המותג (כהה)',
    dark_mode: 'הפעלת מצב כהה',
    dark_mode_description:
      'לאפליקציה יהיה ערכת נושא כהה שנוצרת אוטומטית על סמך צבע המותג והאלגוריתם של GetCertus. אפשר להתאים אותה כרצונכם.',
    dark_mode_reset_tip: 'חישוב מחדש של צבע המצב הכהה לפי צבע המותג.',
    reset: 'חישוב מחדש',
  },
  branding: {
    title: 'מיתוג',
    ui_style: 'סגנון',
    with_light: '{{value}}',
    with_dark: '{{value}} (כהה)',
    app_logo_and_favicon: 'לוגו האפליקציה ו-favicon',
    company_logo_and_favicon: 'לוגו החברה ו-favicon',
    organization_logo_and_favicon: 'לוגו הארגון ו-favicon',
    hide_logto_branding: 'הסתרת המיתוג של GetCertus',
    hide_logto_branding_description:
      'הסירו את "Powered by GetCertus". הציגו רק את המותג שלכם עם חוויית התחברות נקייה ומקצועית.',
    hide_logto_branding_oss_note: 'הסתרת החתימה מחייבת את <a>תוסף ה-Branding</a> של GetCertus.',
  },
  branding_uploads: {
    app_logo: {
      title: 'לוגו האפליקציה',
      url: 'כתובת לוגו האפליקציה',
      url_placeholder: 'https://your.cdn.domain/logo.png',
      error: 'לוגו האפליקציה: {{error}}',
    },
    company_logo: {
      title: 'לוגו החברה',
      url: 'כתובת לוגו החברה',
      url_placeholder: 'https://your.cdn.domain/logo.png',
      error: 'לוגו החברה: {{error}}',
    },
    organization_logo: {
      title: 'העלאת תמונה',
      url: 'כתובת לוגו הארגון',
      url_placeholder: 'https://your.cdn.domain/logo.png',
      error: 'לוגו הארגון: {{error}}',
    },
    connector_logo: {
      title: 'העלאת תמונה',
      url: 'כתובת לוגו המחבר',
      url_placeholder: 'https://your.cdn.domain/logo.png',
      error: 'לוגו המחבר: {{error}}',
    },
    favicon: {
      title: 'Favicon',
      url: 'כתובת ה-favicon',
      url_placeholder: 'https://your.cdn.domain/favicon.ico',
      error: 'Favicon: {{error}}',
    },
  },
  custom_ui: {
    title: 'ממשק מותאם',
    cloud_tag: 'Cloud',
    css_code_editor_title: 'CSS מותאם',
    css_code_editor_field_title: 'דריסות CSS',
    css_code_editor_description1: 'ראו את הדוגמה ל-CSS מותאם.',
    css_code_editor_description2: '<a>{{link}}</a>',
    css_code_editor_description_link_content: 'מידע נוסף',
    css_code_editor_content_placeholder:
      'הזינו כאן את דריסות ה-CSS כדי להתאים את הסגנון של כל רכיב בדיוק כפי שתרצו. תנו ליצירתיות שלכם לבלוט.',
    bring_your_ui_title: 'Bring your UI',
    bring_your_ui_upload_title: 'העלאת קובצי ממשק מותאם',
    bring_your_ui_description:
      'העלו חבילה דחוסה (.zip) כדי להחליף את הממשק המוכן של GetCertus בקוד שלכם. <a>מידע נוסף</a>',
    bring_your_ui_oss_description: 'התאימו את ממשק ההתחברות עם הקוד שלכם.',
    bring_your_ui_oss_card_description:
      'העלאת ממשק מותאם עדיין אינה חלק מהתוכניות של GetCertus. <a>לתוכניות ולתוספים</a>.',
    bring_your_ui_oss_try_cloud: 'לתוכניות',
    preview_with_bring_your_ui_description:
      'קובצי הממשק המותאם הועלו ומוגשים כעת. לכן חלון התצוגה המקדימה המובנה הושבת.\nכדי לבדוק את ממשק ההתחברות המותאם, לחצו על הכפתור "תצוגה מקדימה חיה" כדי לפתוח אותו בלשונית חדשה.',
    csp_description:
      'אפשרו ביטויי מקור נוספים לממשק ההתחברות המותאם. הערכים חלים רק כשמוגשים קובצי ממשק מותאם.',
    csp_script_src: 'script-src מותר',
    csp_script_src_tip:
      'אפשרו ביטויי מקור HTTPS לסקריפטים שהממשק המותאם טוען, כמו https://scripts.example.com או https://*.example.com.',
    csp_connect_src: 'connect-src מותר',
    csp_connect_src_tip:
      'אפשרו ביטויי מקור HTTPS או WSS לבקשות רשת של הממשק המותאם, כמו https://api.example.com או wss://events.example.com.',
    csp_source_invalid_error:
      'הזינו ביטוי מקור תקין. השתמשו בכתובות https://; connect-src תומך גם ב-wss://. מילות מפתח של CSP ונקודה-פסיק אינן נתמכות.',
    csp_source_duplicate_error: 'ביטוי המקור הזה כבר ברשימה.',
  },
  account_center: {
    title: 'מרכז החשבון',
    description: 'ספקו למשתמשי הקצה מרכז חשבון לניהול אבטחת החשבון ופרטי הפרופיל.',
    enable_account_api: 'הפעלת מרכז החשבון ו-Account API',
    enable_account_api_description:
      'הפעילו גם את ה-Account API למשתמשים וגם את מרכז החשבון המוכן של GetCertus. כשהאפשרות כבויה, שתי התכונות אינן זמינות.',
    field_options: {
      off: 'כבוי',
      edit: 'עריכה',
      read_only: 'קריאה בלבד',
      enabled: 'מופעל',
      disabled: 'מושבת',
    },
    sections: {
      account_security: {
        title: 'אבטחת החשבון',
        description:
          'נהלו את הגישה ל-Account API, כדי שמשתמשים יוכלו לאחר ההתחברות לצפות בפרטי הזהות ובגורמי האימות שלהם או לערוך אותם.',
        security_verification: {
          title: 'אימות אבטחה',
          description:
            'לפני שינוי הגדרות אבטחה, משתמשים צריכים לאמת את זהותם כדי לקבל מזהה אימות שתקף ל-10 דקות. כדי להפעיל שיטת אימות (אימייל, טלפון, סיסמה), הגדירו למטה את הרשאת ה-Account API ל<strong>קריאה בלבד</strong> (לפחות) או ל<strong>עריכה</strong>, כדי שהמערכת תוכל לזהות אם המשתמש הגדיר אותה. <a>מידע נוסף</a>',
        },
        groups: {
          identifiers: {
            title: 'מזהים',
          },
          authentication_factors: {
            title: 'גורמי אימות',
          },
          session_management: {
            title: 'ניהול סשנים',
          },
        },
      },
      user_profile: {
        title: 'פרופיל משתמש',
        description:
          'נהלו את הגישה ל-Account API, כדי שמשתמשים יוכלו לאחר ההתחברות לצפות בנתוני פרופיל בסיסיים או מותאמים או לערוך אותם.',
        groups: {
          profile_data: {
            title: 'נתוני פרופיל',
          },
        },
      },
      secret_vault: {
        title: 'SECRET VAULT',
        description:
          'עבור מחברים חברתיים וארגוניים, אחסנו בבטחה אסימוני גישה של צד שלישי כדי לקרוא לממשקי ה-API שלהם (למשל הוספת אירועים ליומן Google).',
        third_party_token_storage: {
          title: 'אסימון צד שלישי',
          third_party_access_token_retrieval: 'שליפת אסימון גישה של צד שלישי',
          third_party_token_tooltip:
            'כדי לאחסן אסימונים, הפעילו זאת בהגדרות של המחבר החברתי או הארגוני המתאים.',
          third_party_token_description:
            'ברגע שה-Account API מופעל, שליפת אסימוני צד שלישי מופעלת אוטומטית.',
        },
      },
    },
    fields: {
      email: 'כתובת אימייל',
      phone: 'מספר טלפון',
      social: 'זהויות חברתיות',
      password: 'סיסמה',
      mfa: 'אימות רב-שלבי',
      mfa_description: 'אפשרו למשתמשים לנהל את שיטות ה-MFA שלהם ממרכז החשבון.',
      passkey: 'מפתח גישה',
      username: 'שם משתמש',
      name: 'שם',
      avatar: 'תמונת פרופיל',
      profile: 'פרופיל',
      profile_description: 'שליטה בגישה למאפייני פרופיל מובנים.',
      custom_data: 'נתונים מותאמים',
      custom_data_description: 'שליטה בגישה לנתוני JSON מותאמים שנשמרים אצל המשתמש.',
      sessions: 'סשנים',
      trusted_devices: 'מכשירים מהימנים',
    },
    profile_fields: {
      title: 'שדות פרופיל למרכז החשבון המוכן',
      add_profile_fields: 'הוספת שדות פרופיל',
      hint: {
        not_in_list: 'לא ברשימה?',
        set_up: 'הגדירו',
        go_to: 'שדות פרופיל נוספים עכשיו.',
      },
      disabled_hint: {
        name: "כדי להוסיף שדה זה, הגדירו קודם את ההרשאה 'שם' ל'עריכה / קריאה בלבד' באזור פרופיל משתמש למטה.",
        avatar:
          "כדי להוסיף שדה זה, הגדירו קודם את ההרשאה 'תמונת פרופיל' ל'עריכה / קריאה בלבד' באזור פרופיל משתמש למטה.",
        profile:
          "כדי להוסיף שדה זה, הגדירו קודם את ההרשאה 'פרופיל' ל'עריכה / קריאה בלבד' באזור פרופיל משתמש למטה.",
        custom_data:
          "כדי להוסיף שדה זה, הגדירו קודם את ההרשאה 'נתונים מותאמים' ל'עריכה / קריאה בלבד' באזור פרופיל משתמש למטה.",
      },
    },
    webauthn_related_origins: 'מקורות WebAuthn קשורים',
    webauthn_related_origins_description:
      'הוסיפו את הדומיינים של אפליקציות ה-frontend שמורשות לרשום מפתחות גישה דרך ה-Account API.',
    webauthn_related_origins_error: 'המקור חייב להתחיל ב-https:// או ב-http://',
    delete_account_url: 'מחיקת חשבון',
    delete_account_url_description:
      'ספקו כתובת לנקודת קצה משלכם שתטפל במחיקת חשבונות עם לוגיקה מותאמת.',
    prebuilt_ui: {
      title: 'שילוב ממשק מוכן',
      description:
        'שלבו במהירות את מרכז החשבון המוכן, את אימות האבטחה או זרימה בודדת לעדכון פרופיל עם ממשק מוכן. שלבו את הדומיין שלכם עם הנתיב כדי ליצור את כתובת מרכז החשבון (למשל https://auth.foo.com/account/email).',
      permission_notice:
        'כדי לשלב את הזרימות המוכנות האלה, הגדירו את הרשאות ה-Account API הרלוונטיות ל<strong>עריכה</strong> בהגדרות למטה.',
      account_center_title: 'שילוב מרכז החשבון המוכן',
      account_center_description:
        'הפנו משתמשים למרכז החשבון לניהול הגדרות אבטחה כמו אימייל, טלפון, שם משתמש, סיסמה, MFA וחשבונות מקושרים.',
      flows_title: 'שילוב זרימות מוכנות להגדרות אבטחה',
      single_task_flows_title: 'שילוב זרימה מוכנה למשימה אחת',
      flows_description:
        'שלבו את הדומיין שלכם עם הנתיב כדי ליצור את כתובת הגדרת החשבון (למשל https://auth.foo.com/account/email). אפשר להוסיף `redirect=` כדי להחזיר משתמשים לאפליקציה לאחר עדכון מוצלח, `show_success=true` כדי להשאיר את דף ההצלחה גלוי, `ui_locales=` כדי לדרוס את שפת ברירת המחדל, או `identifier=` כדי למלא מראש את שדה המזהה.',
      single_task_flows_description:
        'הפנו משתמשים ישירות לזרימה מסוימת (למשל קישור אימייל). אפשר להוסיף `redirect=` כדי להחזיר משתמשים לאפליקציה לאחר עדכון מוצלח, `show_success=true` כדי להשאיר את דף ההצלחה גלוי, `ui_locales=` כדי לדרוס את שפת ברירת המחדל, או `identifier=` כדי למלא מראש את שדה המזהה.',
      tooltips: {
        email: 'עדכון כתובת האימייל הראשית',
        phone: 'עדכון מספר הטלפון הראשי',
        username: 'עדכון שם המשתמש',
        password: 'הגדרת סיסמה חדשה',
        social: 'קישור חשבון חברתי להתחברות',
        social_change: 'מעבר לחשבון חברתי מקושר אחר',
        social_remove: 'הסרת חשבון חברתי מקושר',
        authenticator_app: 'הגדרת אפליקציית אימות חדשה לאימות רב-שלבי',
        authenticator_app_replace: 'החלפת אפליקציית האימות הקיימת בחדשה',
        passkey_add: 'רישום מפתח גישה חדש',
        passkey_manage: 'ניהול מפתחות הגישה הקיימים או הוספת חדשים',
        backup_codes_generate: 'יצירת סדרה חדשה של 10 קודי גיבוי',
        backup_codes_manage: 'צפייה בקודי הגיבוי הזמינים או יצירת חדשים',
        account_center:
          'גישה למרכז החשבון לניהול הגדרות אבטחה כמו אימייל, טלפון, שם משתמש, סיסמה, MFA וחשבונות מקושרים',
        profile: 'המקום המרכזי לניהול הפרטים האישיים (למשל שם, תמונת פרופיל)',
        sessions: 'צפייה בסשנים הפעילים בכל המכשירים וניהולם',
      },
      customize_note: 'לא רוצים את החוויה המוכנה? אפשר',
      customize_link: 'להתאים את הזרימות במלואן עם ה-Account API.',
    },
    custom_css: {
      title: 'CSS מותאם',
      description: 'התאימו את מראה מרכז החשבון באמצעות CSS מותאם.',
    },
  },
  sign_up_and_sign_in: {
    identifiers_email: 'כתובת אימייל',
    identifiers_phone: 'מספר טלפון',
    identifiers_username: 'שם משתמש',
    identifiers_email_or_sms: 'כתובת אימייל או מספר טלפון',
    identifiers_none: 'לא רלוונטי',
    and: 'וגם',
    or: 'או',
    sign_up: {
      title: 'הרשמה',
      sign_up_identifier: 'מזהי הרשמה',
      identifier_description: 'כל המזהים שנבחרו נדרשים ביצירת חשבון חדש.',
      sign_up_authentication: 'הגדרת אימות להרשמה',
      verification_tip:
        'משתמשים חייבים לאמת את האימייל או מספר הטלפון שהגדרתם על ידי הזנת קוד אימות בזמן ההרשמה.',
      authentication_description: 'כל הפעולות שנבחרו יהיו חובה להשלמת הזרימה.',
      set_a_password_option: 'יצירת סיסמה',
      verify_at_sign_up_option: 'אימות בהרשמה',
      social_only_creation_description: '(חל רק על חשבונות שנוצרים בהתחברות חברתית בלבד)',
      collect_user_profile: 'איסוף פרופיל משתמש',
      add_profile_fields: 'הוספת שדות פרופיל',
      profile_fields_hint: {
        not_in_list: 'לא ברשימה?',
        set_up: 'הגדירו',
        go_to: 'שדות פרופיל נוספים עכשיו.',
      },
    },
    sign_in: {
      title: 'התחברות',
      sign_in_identifier_and_auth: 'הגדרות מזהה ואימות להתחברות',
      description: 'משתמשים יכולים להתחבר בכל אחת מהאפשרויות הזמינות.',
      add_sign_in_method: 'הוספת שיטת התחברות',
      add_sign_up_method: 'הוספת שיטת הרשמה',
      password_auth: 'סיסמה',
      verification_code_auth: 'קוד אימות',
      auth_swap_tip: 'החליפו את סדר האפשרויות למטה כדי לקבוע איזו תופיע ראשונה בזרימה.',
      require_auth_factor: 'יש לבחור לפחות גורם אימות אחד.',
      forgot_password: 'שכחתי סיסמה',
      forgot_password_description: 'משתמשים יכולים לאפס את הסיסמה בכל שיטת אימות זמינה.',
      add_verification_method: 'הוספת שיטת אימות',
      email_verification_code: 'קוד אימות באימייל',
      phone_verification_code: 'קוד אימות בטלפון',
    },
    social_sign_in: {
      title: 'התחברות חברתית',
      social_sign_in: 'התחברות חברתית',
      description:
        'בהתאם למזהה החובה שהגדרתם, ייתכן שהמשתמש יתבקש לספק מזהה בהרשמה דרך מחבר חברתי.',
      add_social_connector: 'הוספת מחבר חברתי',
      set_up_hint: {
        not_in_list: 'לא ברשימה?',
        set_up_more: 'הגדירו',
        go_to: 'מחברים חברתיים נוספים עכשיו.',
      },
      settings_title: 'חוויית התחברות חברתית',
      automatic_account_linking: 'קישור אוטומטי של חשבונות עם אותו מזהה',
      automatic_account_linking_tip:
        'כשמופעל, אם משתמש מתחבר עם זהות חברתית חדשה ויש בדיוק חשבון קיים אחד עם אותו מזהה (למשל כתובת אימייל), GetCertus יקשר אוטומטית את הזהות החברתית לחשבון זה. המשתמש לא יתבקש לבחור אם לקשר את החשבונות.',
      required_sign_up_identifiers: 'לחייב משתמשים לספק מזהי הרשמה חסרים',
      required_sign_up_identifiers_tip:
        'כשמופעל, משתמשים שמתחברים דרך ספקים חברתיים חייבים למלא מזהי חובה חסרים (כמו אימייל) לפני השלמת ההתחברות. \n\nאם מושבת, משתמשים יכולים להמשיך בלי לספק את המזהים החסרים, גם אם החשבון החברתי לא סנכרן אותם.',
    },
    passkey_sign_in: {
      title: 'התחברות עם מפתח גישה',
      passkey_sign_in: 'התחברות עם מפתח גישה',
      enable_passkey_sign_in_description:
        "אפשרו למשתמשים לגשת לאפליקציה במהירות ובבטחה באמצעות מפתח גישה (WebAuthn), עם ביומטריה, מפתח אבטחה וכו'.",
      prompts: 'הנחיות מפתח גישה',
      show_passkey_button: 'הצגת הכפתור “המשך עם מפתח גישה” בדף ההתחברות',
      show_passkey_button_tip:
        'בלי הכפתור “המשך עם מפתח גישה”, זרימת ההתחברות מתחילה מהמזהה ומציגה את אפשרויות הסיסמה ומפתח הגישה בשלב הבא.',
      allow_autofill: 'לאפשר הצעה ומילוי אוטומטי של מפתחות גישה רשומים בשדות המזהה',
    },
    tip: {
      set_a_password: 'סיסמה ייחודית לשם המשתמש היא חובה.',
      verify_at_sign_up:
        'כרגע אנו תומכים רק באימייל ובטלפון מאומתים. ללא אימות, בסיס המשתמשים עלול לכלול כתובות אימייל או מספרי טלפון רבים באיכות נמוכה.',
      password_auth: 'זה הכרחי, כי הפעלתם את האפשרות להגדיר סיסמה במהלך ההרשמה.',
      verification_code_auth:
        'זה הכרחי, כי הפעלתם רק את האפשרות לספק קוד אימות בהרשמה. אפשר לבטל את הסימון כשמותר להגדיר סיסמה בהרשמה.',
      email_mfa_enabled:
        'קוד האימות באימייל כבר מופעל ל-MFA, ולכן מטעמי אבטחה לא ניתן להשתמש בו גם כשיטת ההתחברות הראשית.',
      phone_mfa_enabled:
        'קוד האימות בטלפון כבר מופעל ל-MFA, ולכן מטעמי אבטחה לא ניתן להשתמש בו גם כשיטת ההתחברות הראשית.',
      delete_sign_in_method: 'זה הכרחי, כי בחרתם ב-{{identifier}} כמזהה חובה.',
      password_disabled_notification:
        'האפשרות "יצירת סיסמה" מושבתת בהרשמה עם שם משתמש, מה שעלול למנוע ממשתמשים להתחבר. אשרו כדי לשמור בכל זאת.',
    },
    advanced_options: {
      title: 'אפשרויות מתקדמות',
      enable_single_sign_on: 'הפעלת התחברות יחידה (SSO) ארגונית',
      enable_single_sign_on_description:
        'אפשרו למשתמשים להתחבר לאפליקציה בהתחברות יחידה עם הזהויות הארגוניות שלהם.',
      single_sign_on_hint: {
        prefix: 'עברו לאזור ',
        link: '"SSO ארגוני"',
        suffix: 'כדי להגדיר מחברים ארגוניים נוספים.',
      },
      enable_user_registration: 'הפעלת הרשמת משתמשים',
      enable_user_registration_description:
        'אפשרו או חסמו הרשמת משתמשים. לאחר ההשבתה עדיין אפשר להוסיף משתמשים בקונסולת הניהול, אבל משתמשים לא יוכלו עוד ליצור חשבונות דרך ממשק ההתחברות.',
      unknown_session_redirect_url: 'כתובת הפניה לסשן לא מוכר',
      unknown_session_redirect_url_tip:
        'לפעמים GetCertus לא מזהה את הסשן של המשתמש בדף ההתחברות, למשל כשהסשן פג או כשהמשתמש שמר את קישור ההתחברות בסימניות או שיתף אותו. כברירת מחדל מוצגת שגיאת 404 “סשן לא מוכר”. לחוויה טובה יותר, הגדירו כתובת חלופית שתחזיר את המשתמשים לאפליקציה ותתחיל את האימות מחדש.',
    },
    username_policy: {
      title: 'מדיניות שמות משתמש',
      description: 'התאימו את הדרישות לשמות משתמש, כולל אורך, תווים מותרים ורגישות לרישיות.',
      manage_button: 'ניהול',
      modal_title: 'מדיניות שמות משתמש',
      modal_description: 'התאימו את הדרישות לשמות המשתמש של משתמשי הקצה.',
      length: {
        title: 'אורך שם המשתמש',
        minimum: 'מינימום',
        maximum: 'מקסימום',
        min_greater_than_max: 'האורך המינימלי לא יכול להיות גדול מהאורך המקסימלי.',
      },
      allowed_chars: {
        title: 'סוגי תווים מותרים',
        uppercase: 'אותיות גדולות (A-Z)',
        lowercase: 'אותיות קטנות (a-z)',
        numbers: 'ספרות (0-9)',
        underscore: 'קווים תחתונים (_)',
        no_valid_leading_char:
          'ספרות בלבד אינן מותרות. הפעילו לפחות אותיות גדולות, אותיות קטנות או קווים תחתונים.',
        no_char_selected: 'בחרו לפחות סוג תווים אחד.',
      },
      case_sensitive: {
        title: 'שמות משתמש תלויי רישיות',
        description:
          'אותיות גדולות וקטנות נחשבות שונות. ‘user123’ ו-‘User123’ ייחשבו לשמות משתמש שונים.',
      },
      case_conflicts: {
        title: 'זוהו התנגשויות בין שמות משתמש קיימים',
        description:
          'חלק משמות המשתמש יתנגשו אם הרגישות לרישיות תכובה. פתרו את {{count}} קבוצות ההתנגשות למטה לפני השמירה.',
        sample_title: 'שמות משתמש מתנגשים',
      },
    },
  },
  content: {
    terms_of_use: {
      title: 'תנאים',
      description: 'הוסיפו תנאי שימוש ומדיניות פרטיות כדי לעמוד בדרישות הרגולציה.',
      terms_of_use: 'כתובת תנאי השימוש',
      terms_of_use_placeholder: 'https://your.terms.of.use/',
      privacy_policy: 'כתובת מדיניות הפרטיות',
      privacy_policy_placeholder: 'https://your.privacy.policy/',
      agree_to_terms: 'הסכמה לתנאים',
      agree_policies: {
        automatic: 'הסכמה אוטומטית לתנאים בהמשך',
        manual_registration_only: 'חובת סימון הסכמה בהרשמה בלבד',
        manual: 'חובת סימון הסכמה גם בהרשמה וגם בהתחברות',
      },
    },
    languages: {
      title: 'שפות',
      enable_auto_detect: 'הפעלת זיהוי אוטומטי',
      description:
        'התוכנה מזהה את הגדרת השפה של המשתמש ועוברת לשפה המקומית. אפשר להוסיף שפות חדשות על ידי תרגום הממשק מאנגלית.',
      manage_language: 'ניהול שפות',
      default_language: 'שפת ברירת מחדל',
      default_language_description_auto:
        'שפת ברירת המחדל משמשת כשהשפה שזוהתה אצל המשתמש לא נמצאת בספריית השפות הנוכחית.',
      default_language_description_fixed:
        'כשהזיהוי האוטומטי כבוי, שפת ברירת המחדל היא השפה היחידה שהתוכנה מציגה. הפעילו זיהוי אוטומטי כדי לתמוך בשפות נוספות.',
    },
    support: {
      title: 'תמיכה',
      subtitle: 'הציגו את ערוצי התמיכה בדפי שגיאה כדי שמשתמשים יקבלו עזרה מהר.',
      support_email: 'אימייל תמיכה',
      support_email_placeholder: 'support@email.com',
      support_website: 'אתר תמיכה',
      support_website_placeholder: 'https://your.website/support',
    },
    manage_language: {
      title: 'ניהול שפות',
      subtitle:
        'התאימו את חוויית המוצר לשפות שונות על ידי הוספת שפות ותרגומים. התרומה שלכם יכולה להיות מוגדרת כשפת ברירת המחדל.',
      add_language: 'הוספת שפה',
      logto_provided: 'מסופק על ידי GetCertus',
      key: 'מפתח',
      logto_source_values: 'ערכי המקור של GetCertus',
      custom_values: 'ערכים מותאמים',
      clear_all_tip: 'ניקוי כל הערכים',
      unsaved_description: 'השינויים לא יישמרו אם תעזבו את הדף בלי לשמור.',
      deletion_tip: 'מחיקת השפה',
      deletion_title: 'למחוק את השפה שנוספה?',
      deletion_description: 'לאחר המחיקה, המשתמשים לא יוכלו עוד להשתמש בשפה זו.',
      default_language_deletion_title: 'לא ניתן למחוק את שפת ברירת המחדל.',
      default_language_deletion_description:
        '{{language}} מוגדרת כשפת ברירת המחדל ולא ניתן למחוק אותה. ',
    },
  },
  setup_warning: {
    no_connector_sms:
      'עדיין לא הוגדר מחבר SMS. עד להשלמת ההגדרה, משתמשים לא יוכלו להתחבר בשיטה זו. <a>{{link}}</a> ב"מחברים"',
    no_connector_email:
      'עדיין לא הוגדר מחבר אימייל. עד להשלמת ההגדרה, משתמשים לא יוכלו להתחבר בשיטה זו. <a>{{link}}</a> ב"מחברים"',
    no_connector_social:
      'עדיין לא הגדרתם מחבר חברתי. הוסיפו קודם מחברים כדי להשתמש בשיטות התחברות חברתיות. <a>{{link}}</a> ב"מחברים".',
    no_connector_email_account_center:
      'עדיין לא הוגדר מחבר אימייל. הגדירו אותו ב<a>"מחברי אימייל ו-SMS"</a>.',
    no_connector_sms_account_center:
      'עדיין לא הוגדר מחבר SMS. הגדירו אותו ב<a>"מחברי אימייל ו-SMS"</a>.',
    no_connector_social_account_center:
      'עדיין לא הוגדר מחבר חברתי. הגדירו אותו ב<a>"מחברים חברתיים"</a>.',
    no_mfa_factor: 'עדיין לא הוגדר גורם MFA. הגדירו אותו ב<a>{{link}}</a>.',
    setup_link: 'הגדרה',
  },
  save_alert: {
    description:
      'אתם מיישמים נהלי התחברות והרשמה חדשים. כל המשתמשים שלכם עלולים להיות מושפעים מההגדרה החדשה. האם אתם בטוחים שברצונכם לבצע את השינוי?',
    before: 'לפני',
    after: 'אחרי',
    sign_up: 'הרשמה',
    sign_in: 'התחברות',
    social: 'חברתי',
    forgot_password_migration_notice:
      'שדרגנו את האימות של שכחתי סיסמה כך שיתמוך בשיטות מותאמות. בעבר זה נקבע אוטומטית לפי מחברי האימייל וה-SMS שלכם. לחצו על <strong>אישור</strong> כדי להשלים את השדרוג.',
  },
  preview: {
    title: 'תצוגה מקדימה של ההתחברות',
    live_preview: 'תצוגה מקדימה חיה',
    live_preview_tip: 'שמרו כדי לראות את השינויים',
    native: 'נייטיב',
    desktop_web: 'ווב במחשב',
    mobile_web: 'ווב בנייד',
    desktop: 'מחשב',
    mobile: 'נייד',
  },
  custom_profile_fields: {
    table: {
      add_button: 'הוספת שדה פרופיל',
      title: {
        field_label: 'תווית השדה',
        type: 'סוג',
        user_data_key: 'מפתח נתוני משתמש',
      },
      placeholder: {
        title: 'איסוף פרופיל משתמש',
        description: 'התאימו שדות כדי לאסוף יותר פרטי פרופיל בזמן ההרשמה.',
      },
    },
    type: {
      Text: 'טקסט',
      Number: 'מספר',
      Date: 'תאריך',
      Checkbox: 'תיבת סימון (בוליאני)',
      Select: 'רשימה נפתחת (בחירה אחת)',
      Url: 'URL',
      Regex: 'ביטוי רגולרי',
      Address: 'כתובת (מורכב)',
      Fullname: 'שם מלא (מורכב)',
    },
    modal: {
      title: 'הוספת שדה פרופיל',
      subtitle: 'התאימו שדות כדי לאסוף יותר פרטי פרופיל בזמן ההרשמה.',
      built_in_properties: 'נתוני משתמש בסיסיים',
      custom_properties: 'נתוני משתמש מותאמים',
      custom_data_field_name: 'מפתח נתוני משתמש',
      custom_data_field_input_placeholder: 'הזינו את מפתח נתוני המשתמש, למשל `myFavoriteFieldName`',
      custom_field: {
        title: 'נתונים מותאמים',
        description: 'מאפייני משתמש נוספים שאפשר להגדיר לפי הצרכים הייחודיים של האפליקציה.',
      },
      type_required: 'בחרו סוג מאפיין',
      create_button: 'יצירת שדה פרופיל',
      avatar: {
        description:
          'אפשרו למשתמשים להעלות תמונת פרופיל בזמן ההרשמה. כתובת התמונה שהועלתה נשמרת כתמונת הפרופיל של המשתמש.',
        storage_not_configured:
          'העלאת תמונת פרופיל מחייבת ספק אחסון מוגדר. הגדירו אחסון לפני הוספת השדה.',
      },
    },
    details: {
      page_title: 'פרטי שדה פרופיל',
      back_to_sie: 'חזרה לחוויית ההתחברות',
      enter_field_name: 'הזינו את שם שדה הפרופיל',
      delete_description: 'לא ניתן לבטל פעולה זו. האם אתם בטוחים שברצונכם למחוק את שדה הפרופיל?',
      field_deleted: 'שדה הפרופיל {{name}} נמחק בהצלחה.',
      key: 'מפתח נתוני משתמש',
      field_name: 'שם השדה',
      field_type: 'סוג השדה',
      settings: 'הגדרות',
      settings_description: 'התאימו שדות כדי לאסוף יותר פרטי פרופיל בזמן ההרשמה.',
      address_format: 'פורמט כתובת',
      single_line_address: 'כתובת בשורה אחת',
      multi_line_address: 'כתובת בכמה שורות (למשל רחוב, עיר, מחוז, מיקוד, מדינה)',
      components: 'רכיבים',
      components_tip: 'בחרו את הרכיבים שמרכיבים את השדה המורכב.',
      label: 'תווית השדה',
      label_placeholder: 'תווית',
      label_tip: 'צריכים תרגום? הוסיפו שפות ב<a>חוויית התחברות > תוכן</a>',
      label_tooltip:
        'תווית צפה שמציינת למה השדה משמש. היא מופיעה בתוך השדה ועולה מעליו כשהשדה בפוקוס או מכיל ערך.',
      placeholder: 'טקסט ממלא מקום',
      placeholder_placeholder: 'טקסט ממלא מקום',
      placeholder_tooltip:
        'דוגמה או רמז לפורמט שמוצג בתוך השדה. בדרך כלל מופיע אחרי שהתווית עולה וצריך להיות קצר (למשל DD/MM/YYYY).',
      description: 'תיאור השדה',
      description_placeholder: 'תיאור',
      description_tooltip:
        'טקסט עזר שמוצג מתחת לשדה הטקסט. השתמשו בו להוראות ארוכות יותר או להערות נגישות.',
      options: 'אפשרויות',
      options_tip:
        'הזינו כל אפשרות בשורה חדשה. השתמשו בפורמט ערך:תווית (למשל red:אדום). אפשר להזין גם ערך בלבד; ללא תווית, הערך מוצג כתווית.',
      options_placeholder: 'value1:label1\nvalue2:label2\nvalue3:label3',
      regex: 'ביטוי רגולרי',
      regex_tip: 'הגדירו ביטוי רגולרי לאימות הקלט.',
      regex_placeholder: '^[a-zA-Z0-9]+$',
      date_format: 'פורמט תאריך',
      date_format_us: 'MM/dd/yyyy (למשל ארה״ב)',
      date_format_uk: 'dd/MM/yyyy (למשל בריטניה ואירופה)',
      date_format_iso: 'yyyy-MM-dd (תקן בינלאומי)',
      custom_date_format: 'פורמט תאריך מותאם',
      custom_date_format_placeholder: 'הזינו פורמט תאריך מותאם, למשל "MM-dd-yyyy"',
      custom_date_format_tip: 'ראו את התיעוד של <a>date-fns</a> לסימני עיצוב תקינים.',
      input_length: 'אורך קלט',
      value_range: 'טווח ערכים',
      min: 'מינימום',
      max: 'מקסימום',
      default_value: 'ערך ברירת מחדל',
      checkbox_checked: 'מסומן (True)',
      checkbox_unchecked: 'לא מסומן (False)',
      required: 'חובה',
      required_description: 'כשמופעל, המשתמשים חייבים למלא את השדה. אחרת השדה אופציונלי.',
      avatar_upload_description:
        'משתמשי הקצה מעלים תמונת פרופיל בזמן ההרשמה. הערך שנשמר הוא כתובת התמונה שהועלתה.',
    },
  },
};

export default Object.freeze(sign_in_exp);
