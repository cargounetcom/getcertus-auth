/* GetCertus addition (MPL-2.0, see GETCERTUS.md): admin console phrases. */
const connector_details = {
  page_title: 'פרטי המחבר',
  back_to_connectors: 'חזרה למחברים',
  check_readme: 'ל-README',
  settings: 'הגדרות כלליות',
  settings_description: 'שלבו ספקי צד שלישי להתחברות חברתית מהירה ולקישור חשבונות חברתיים',
  setting_description_with_token_storage_supported:
    'שלבו ספקי צד שלישי להתחברות חברתית מהירה, קישור חשבונות חברתיים וגישת API.',
  email_connector_settings_description:
    'שלבו את ספק האימייל שלכם כדי לאפשר למשתמשי הקצה להירשם ולהתחבר ללא סיסמה באמצעות אימייל.',
  parameter_configuration: 'הגדרת פרמטרים',
  test_connection: 'בדיקה',
  save_error_empty_config: 'הזינו הגדרות',
  send: 'שליחה',
  send_error_invalid_format: 'קלט לא תקין',
  edit_config_label: 'הזינו כאן את ה-JSON',
  test_email_sender: 'בדקו את מחבר האימייל',
  test_sms_sender: 'בדקו את מחבר ה-SMS',
  test_email_placeholder: 'john.doe@example.com',
  test_sms_placeholder: '+1 555-123-4567',
  test_message_sent: 'הודעת הבדיקה נשלחה',
  test_sender_description:
    'GetCertus משתמש בתבנית "Generic" לבדיקה. תקבלו הודעה אם המחבר מוגדר נכון.',
  options_change_email: 'החלפת מחבר אימייל',
  options_change_sms: 'החלפת מחבר SMS',
  connector_deleted: 'המחבר נמחק בהצלחה',
  type_email: 'מחבר אימייל',
  type_sms: 'מחבר SMS',
  type_social: 'מחבר חברתי',
  in_used_social_deletion_description:
    'המחבר הזה משמש בחוויית ההתחברות שלכם. מחיקתו תסיר את ההתחברות עם <name/> מהגדרות חוויית ההתחברות. תצטרכו להגדיר אותו מחדש אם תחליטו להוסיף אותו שוב.',
  in_used_passwordless_deletion_description:
    '{{name}} זה משמש בחוויית ההתחברות שלכם. לאחר המחיקה, חוויית ההתחברות לא תעבוד כראוי עד שתפתרו את ההתנגשות. תצטרכו להגדיר אותו מחדש אם תחליטו להוסיף אותו שוב.',
  deletion_description:
    'אתם מסירים את המחבר הזה. לא ניתן לבטל פעולה זו, ותצטרכו להגדיר אותו מחדש אם תחליטו להוסיף אותו שוב.',
  logto_email: {
    total_email_sent: 'סך הכול אימיילים שנשלחו: {{value, number}}',
    total_email_sent_tip:
      'GetCertus משתמש ב-SendGrid לאימייל מובנה מאובטח ויציב. השימוש בחינם לגמרי. <a>מידע נוסף</a>',
    hosted_email_usage: {
      daily: 'יומי <value>{{usage, number}}</value> / {{limit, number}}',
      daily_unlimited: 'יומי <value>{{usage, number}}</value>',
      monthly: 'חודשי <value>{{usage, number}}</value> / {{limit, number}}',
      monthly_unlimited: 'חודשי <value>{{usage, number}}</value>',
      tip: 'תוכניות Free ו-Development כוללות מגבלות יומיות וחודשיות לשירות האימייל המובנה.',
      banner: {
        approaching:
          'אתם מתקרבים למגבלת השליחה של שירות האימייל המובנה של GetCertus. <provider>חברו ספק אימייל משלכם</provider> או <upgrade>שדרגו את התוכנית</upgrade> כדי להמשיך להשתמש בשירות האימייל המובנה.',
        reached:
          'הגעתם למגבלת השליחה של שירות האימייל המובנה של GetCertus, מה שעלול לשבש אימיילים של התחברות. <provider>חברו ספק אימייל משלכם</provider> או <upgrade>שדרגו את התוכנית</upgrade> כדי להמשיך להשתמש בשירות האימייל המובנה.',
      },
    },
    email_template_title: 'תבנית אימייל',
    template_description:
      'האימייל המובנה משתמש בתבניות ברירת מחדל לשליחה חלקה של אימיילי אימות. אין צורך בהגדרות, ואפשר להתאים פרטי מותג בסיסיים.',
    template_description_link_text: 'צפייה בתבניות',
    description_action_text: 'צפייה בתבניות',
    from_email_field: 'כתובת השולח',
    sender_name_field: 'שם השולח',
    sender_name_tip:
      'התאימו את שם השולח של האימיילים. אם השדה ריק, ישמש השם "Verification" כברירת מחדל.',
    sender_name_placeholder: 'שם השולח שלכם',
    company_information_field: 'פרטי החברה',
    company_information_description:
      'הציגו את שם החברה, הכתובת או המיקוד בתחתית האימיילים לאמינות רבה יותר.',
    company_information_placeholder: 'הפרטים הבסיסיים של החברה',
    email_logo_field: 'לוגו לאימייל',
    email_logo_tip: 'הציגו את לוגו המותג בראש האימיילים. השתמשו באותה תמונה למצב בהיר ולמצב כהה.',
    urls_not_allowed: 'אסור להזין כתובות URL',
    test_notes: 'GetCertus משתמש בתבנית “Generic” לבדיקה.',
  },
  google_one_tap: {
    title: 'Google One Tap',
    description: 'Google One Tap היא דרך מאובטחת ופשוטה למשתמשים להתחבר לאתר שלכם.',
    enable_google_one_tap: 'הפעלת Google One Tap',
    enable_google_one_tap_description:
      'הפעילו את Google One Tap בחוויית ההתחברות: משתמשים שכבר מחוברים במכשיר שלהם יוכלו להירשם או להתחבר במהירות עם חשבון Google.',
    configure_google_one_tap: 'הגדרת Google One Tap',
    auto_select: 'בחירה אוטומטית של פרטי ההתחברות כשאפשר',
    close_on_tap_outside: 'ביטול החלון אם המשתמש לוחץ/מקיש מחוצה לו',
    itp_support: 'הפעלת <a>חוויית One Tap משופרת בדפדפני ITP</a>',
  },
  sign_in_experience: {
    in_use: 'מופעל להתחברות ',
    not_in_use: 'מושבת להתחברות ',
  },
  email_logs: {
    title: 'יומני אימייל',
    time: 'זמן',
    recipient: 'נמען',
    recipient_placeholder: 'חיפוש לפי כתובת הנמען המלאה',
    template_type: 'סוג תבנית',
    status: 'סטטוס',
    status_sent: 'נשלח',
    status_failed: 'נכשל',
    language_tag: 'שפה',
    provider_message_id: 'מזהה הודעה אצל הספק',
  },
};

export default Object.freeze(connector_details);
