/* GetCertus addition (MPL-2.0, see GETCERTUS.md): admin console phrases. */
const security = {
  page_title: 'אבטחה',
  title: 'אבטחה',
  subtitle: 'הגדירו הגנה מתקדמת מפני מתקפות מתוחכמות.',
  tabs: {
    captcha: 'CAPTCHA',
    password_policy: 'מדיניות סיסמאות',
    blocklist: 'רשימת חסימה',
    general: 'כללי',
  },
  bot_protection: {
    title: 'הגנה מבוטים',
    description: 'הפעילו CAPTCHA בהרשמה, בהתחברות ובשחזור סיסמה כדי לחסום איומים אוטומטיים.',
    captcha: {
      title: 'CAPTCHA',
      placeholder: 'בחרו ספק CAPTCHA והגדירו את השילוב.',
      add: 'הוספת CAPTCHA',
    },
    settings: 'הגדרות',
    enable_captcha: 'הפעלת CAPTCHA',
    enable_captcha_description: 'הפעילו אימות CAPTCHA בזרימות ההרשמה, ההתחברות ושחזור הסיסמה.',
    custom_ui_captcha_notice:
      'אתם משתמשים ב-Bring your UI. נדרשת הגדרה נוספת כדי להפעיל CAPTCHA בממשק המותאם שלכם. <a>למדריך ההגדרה</a>.',
  },
  create_captcha: {
    setup_captcha: 'הגדרת CAPTCHA',
  },
  captcha_providers: {
    recaptcha_enterprise: {
      name: 'reCAPTCHA Enterprise',
      description:
        'פתרון ה-CAPTCHA הארגוני של Google, עם זיהוי איומים מתקדם וניתוחי אבטחה מפורטים שמגנים על האתר שלכם מפני הונאות.',
    },
    turnstile: {
      name: 'Cloudflare Turnstile',
      description:
        'החלופה החכמה של Cloudflare ל-CAPTCHA, שמגנה מפני בוטים בלי להפריע ומבטיחה חוויה חלקה בלי חידות חזותיות.',
    },
    cap: {
      name: 'Cap',
      description:
        'CAPTCHA בקוד פתוח מבוסס proof-of-work, באירוח עצמי, בלי חידות חזותיות או שירותי צד שלישי; אידיאלי לאזורים שבהם שירותי CAPTCHA אחרים לא נגישים.',
    },
  },
  captcha_details: {
    back_to_security: 'חזרה לאבטחה',
    page_title: 'פרטי CAPTCHA',
    check_readme: 'ל-README',
    options_change_captcha: 'החלפת ספק CAPTCHA',
    connection: 'חיבור',
    description: 'הגדירו את חיבורי ה-CAPTCHA.',
    site_key: 'מפתח אתר',
    secret_key: 'מפתח סודי',
    project_id: 'מזהה פרויקט',
    domain: 'דומיין (אופציונלי)',
    domain_placeholder: 'www.google.com (ברירת מחדל) או recaptcha.net',
    recaptcha_key_id: 'מזהה מפתח reCAPTCHA',
    recaptcha_api_key: 'מפתח ה-API של הפרויקט',
    cap_endpoint: 'נקודת קצה של Cap',
    cap_endpoint_placeholder: 'https://cap.example.com',
    cap_endpoint_http_notice:
      'נקודת קצה זו משתמשת ב-HTTP, שמתאים רק לפיתוח מקומי. דפדפנים חוסמים בקשות HTTP מדף התחברות ב-HTTPS, והמפתח הסודי יישלח ללא הצפנה. השתמשו ב-HTTPS בסביבת ייצור.',
    deletion_description: 'האם אתם בטוחים שברצונכם למחוק את ספק ה-CAPTCHA?',
    captcha_deleted: 'ספק ה-CAPTCHA נמחק בהצלחה',
    setup_captcha: 'הגדרת CAPTCHA',
    mode: 'מצב אימות',
    mode_invisible: 'בלתי נראה',
    mode_checkbox: 'תיבת סימון',
    mode_notice:
      'מצב האימות מוגדר בהגדרות מפתח ה-reCAPTCHA ב-Google Cloud Console. שינוי המצב כאן מחייב סוג מפתח תואם.',
    score_threshold: 'סף ציון',
    score_threshold_description:
      'ציונים מתחת לסף נדחים. 0.0 מאפשר הכול, 1.0 מאפשר רק ציון מושלם. ברירת המחדל היא 0.5.',
    score_threshold_error: 'סף הציון חייב להיות בין 0 ל-1.',
  },
  password_policy: {
    password_requirements: 'דרישות סיסמה',
    password_requirements_description:
      'החמירו את דרישות הסיסמה כדי להתגונן מפני credential stuffing ומתקפות על סיסמאות חלשות. ',
    minimum_length: 'אורך מינימלי',
    minimum_length_description: 'NIST ממליץ על <a>8 תווים לפחות</a> במוצרי ווב.',
    minimum_length_error: 'האורך המינימלי חייב להיות בין {{min}} ל-{{max}} (כולל).',
    minimum_required_char_types: 'מספר מינימלי של סוגי תווים',
    minimum_required_char_types_description:
      'סוגי תווים: אותיות גדולות (A-Z), אותיות קטנות (a-z), ספרות (0-9) וסימנים מיוחדים ({{symbols}}).',
    password_rejection: 'דחיית סיסמאות',
    compromised_passwords: 'דחיית סיסמאות שנפרצו',
    breached_passwords: 'סיסמאות שדלפו',
    breached_passwords_description: 'דחיית סיסמאות שנמצאו בעבר במאגרי דליפות.',
    restricted_phrases: 'הגבלת ביטויים חלשים',
    restricted_phrases_tooltip:
      'הסיסמה צריכה להימנע מביטויים אלה, אלא אם הם משולבים עם 3 תווים נוספים או יותר.',
    repetitive_or_sequential_characters: 'תווים חוזרים או עוקבים',
    repetitive_or_sequential_characters_description: 'לדוגמה "AAAA", "1234" ו-"abcd".',
    user_information: 'פרטי המשתמש',
    user_information_description: "לדוגמה כתובת אימייל, מספר טלפון, שם משתמש וכו'.",
    custom_words: 'מילים מותאמות',
    custom_words_description: 'הוסיפו מילים ספציפיות להקשר, ללא תלות ברישיות, מילה אחת בכל שורה.',
    custom_words_placeholder: "שם השירות, שם החברה וכו'.",
    password_expiration: 'תפוגת סיסמה',
    password_expiration_description:
      'חייבו משתמשים לאפס את הסיסמה לאחר מספר ימים קבוע. משתמשים שמתחברים באמצעות SSO או מפתח גישה לא מושפעים.',
    enable_password_expiration: 'הפעלת תפוגת סיסמה',
    enable_password_expiration_description:
      'חייבו משתמשים לאפס את הסיסמה מדי פעם. עבור משתמשים קיימים ללא תאריך שינוי סיסמה רשום, הספירה תתחיל מהתאריך שבו המדיניות הופעלה.',
    enable_password_expiration_tip:
      'אפשר להפעיל תפוגת סיסמה רק לאחר שהגדרתם בחוויית ההתחברות לפחות שיטה אחת לשחזור סיסמה עם מחבר תקין.',
    expiration_period: 'תקופת תוקף הסיסמה (ימים)',
    expiration_period_description: 'מספר הימים שבהם סיסמה תקפה לפני שתוקפה פג.',
    expiration_period_error: 'תקופת תוקף הסיסמה חייבת להיות בין {{min}} ל-{{max}} ימים.',
    password_expiration_recovery_reminder:
      'לחלק מהמשתמשים אולי אין כתובת אימייל או מספר טלפון לקבלת קוד שחזור, ולכן הם לא יוכלו לאפס סיסמה שפג תוקפה. חייבו אימייל או מספר טלפון בהרשמה, כדי שכל משתמש יוכל לשחזר את הסיסמה.',
  },
  verification_code_policy: {
    card_title: 'קוד אימות',
    card_description:
      'הגדירו את משך התוקף ואת מספר הניסיונות המרבי לקודי אימות בזרימות ההתחברות, ההרשמה ואיפוס הסיסמה.',
    enable: {
      title: 'התאמת הגדרות קוד האימות',
      description: 'אפשרו התאמה של משך התוקף ומספר הניסיונות המרבי לקודי אימות.',
    },
    expiration_duration: {
      title: 'משך תוקף (שניות)',
      description: 'משך הזמן בשניות שבו קוד אימות תקף לאחר שליחתו.',
      error_message: 'משך התוקף חייב להיות בין 60 ל-3600 שניות.',
    },
    max_retry_attempts: {
      title: 'מספר ניסיונות מרבי',
      description: 'המספר המרבי של ניסיונות אימות כושלים לפני שהקוד מבוטל.',
      error_message: 'מספר הניסיונות המרבי חייב להיות בין 1 ל-100.',
    },
  },
  sentinel_policy: {
    card_title: 'נעילת מזהה',
    card_description:
      'הנעילה זמינה לכל המשתמשים עם הגדרות ברירת מחדל, אבל אפשר להתאים אותה לשליטה רבה יותר.\n\nנעלו מזהה באופן זמני לאחר מספר ניסיונות אימות כושלים (למשל סיסמה או קוד אימות שגויים ברצף) כדי למנוע גישה בכוח גס.',
    enable_sentinel_policy: {
      title: 'התאמת הנעילה',
      description:
        'אפשרו התאמה של מספר ניסיונות ההתחברות הכושלים המרבי לפני נעילה, משך הנעילה ושחרור ידני מיידי.',
    },
    max_attempts: {
      title: 'מספר ניסיונות כושלים מרבי',
      description: 'נעלו מזהה באופן זמני כשמגיעים למספר המרבי של ניסיונות התחברות כושלים בתוך שעה.',
      error_message: 'מספר הניסיונות הכושלים המרבי חייב להיות גדול מ-0.',
    },
    lockout_duration: {
      title: 'משך הנעילה (דקות)',
      description: 'חסמו התחברויות לפרק זמן לאחר חריגה ממגבלת הניסיונות הכושלים.',
      error_message: 'משך הנעילה חייב להיות לפחות דקה אחת.',
    },
    manual_unlock: {
      title: 'שחרור ידני',
      description: 'שחררו משתמשים מיד לאחר אימות זהותם והזנת המזהה שלהם.',
      unblock_by_identifiers: 'שחרור לפי מזהה',
      modal_description_1:
        'מזהה ננעל זמנית בעקבות מספר ניסיונות התחברות/הרשמה כושלים. כדי להגן על האבטחה, הגישה תשוחזר אוטומטית בתום משך הנעילה.',
      modal_description_2:
        ' שחררו ידנית רק אם אימתתם את זהות המשתמש ווידאתם שלא היו ניסיונות גישה לא מורשים.',
      placeholder: 'הזינו מזהים (כתובת אימייל / מספר טלפון / שם משתמש)',
      confirm_button_text: 'שחרור עכשיו',
      success_toast: 'השחרור הצליח',
      duplicate_identifier_error: 'המזהה כבר נוסף',
      empty_identifier_error: 'הזינו לפחות מזהה אחד',
    },
  },
  blocklist: {
    card_title: 'רשימת חסימת אימיילים',
    card_description: 'שלטו בבסיס המשתמשים שלכם באמצעות חסימת כתובות אימייל מסוכנות או לא רצויות.',
    custom_email_allowlist: {
      title: 'התרת כתובות אימייל מותאמות',
      description:
        'הוסיפו כללים שמתירים רק דומייני אימייל, כתובות אימייל או תבניות עם תווים כלליים מסוימים בהרשמות חדשות ובאימיילים שקושרו לאחרונה. דוגמאות: bar@example.com, @example.com, foo*@example.com, *@example.com. הדומיינים gmail.com ו-googlemail.com נחשבים זהים, ונקודות בחלק המקומי מתעלמים מהן, כך ש-foo.bar@gmail.com תואם ל-foobar@googlemail.com.',
      placeholder: 'הזינו כתובת אימייל, דומיין או תבנית עם תווים כלליים',
      duplicate_error: 'כתובת האימייל, הדומיין או התבנית כבר נוספו',
      invalid_format_error:
        'חייב להיות כתובת אימייל תקינה (bar@example.com), דומיין (@example.com) או תבנית עם תווים כלליים (foo*@example.com, *@example.com)',
      warnings: {
        identical_entries:
          'חלק מהרשומות ברשימת ההיתר קיימות גם בכללי החסימה. אימיילים תואמים עדיין עלולים להיחסם.',
        blocked_exact_email:
          'חלק מהאימיילים המדויקים ברשימת ההיתר תואמים לכלל חסימה. אימיילים תואמים עדיין עלולים להיחסם.',
        blocked_subaddressing:
          'חלק מהרשומות ברשימת ההיתר מכילות סימן פלוס (+), אבל כתובות משנה באימייל חסומות.',
        effectively_unusable:
          'על סמך הבדיקות האלה, ייתכן שרשימת ההיתר הנוכחית לא מאפשרת לאף אימייל חדש לעבור.',
      },
    },
    disposable_email: {
      title: 'חסימת כתובות אימייל חד-פעמיות',
      description:
        'הפעילו כדי לדחות הרשמות עם כתובת אימייל חד-פעמית, מה שעוזר למנוע ספאם ומשפר את איכות המשתמשים.',
    },
    email_subaddressing: {
      title: 'חסימת כתובות משנה באימייל',
      description:
        'הפעילו כדי לדחות הרשמות עם כתובות משנה באימייל שכוללות סימן פלוס (+) ותווים נוספים (לדוגמה user+alias@foo.com).',
    },
    custom_email_address: {
      title: 'חסימת כתובות אימייל מותאמות',
      description:
        'הוסיפו כללים לחסימת דומייני אימייל, כתובות אימייל או תבניות עם תווים כלליים מסוימים מהרשמה או מקישור דרך הממשק. דוגמאות: bar@example.com, @example.com, foo*@example.com, *@example.com. הדומיינים gmail.com ו-googlemail.com נחשבים זהים, ונקודות בחלק המקומי מתעלמים מהן, כך ש-foo.bar@gmail.com תואם ל-foobar@googlemail.com.',
      placeholder: 'הזינו כתובת אימייל, דומיין או תבנית עם תווים כלליים',
      duplicate_error: 'כתובת האימייל, הדומיין או התבנית כבר נוספו',
      invalid_format_error:
        'חייב להיות כתובת אימייל תקינה (bar@example.com), דומיין (@example.com) או תבנית עם תווים כלליים (foo*@example.com, *@example.com)',
    },
  },
};

export default Object.freeze(security);
