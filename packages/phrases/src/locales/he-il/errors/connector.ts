/* GetCertus addition (MPL-2.0, see GETCERTUS.md): admin console phrases. */
const connector = {
  general: 'אירעה שגיאה במחבר: {{errorDescription}}',
  not_found: 'לא נמצא מחבר זמין מסוג: {{type}}.',
  not_enabled: 'המחבר אינו מופעל.',
  invalid_metadata: 'המטא-נתונים של המחבר אינם תקינים.',
  invalid_config_guard: 'ה-config guard של המחבר אינו תקין.',
  unexpected_type: 'סוג המחבר אינו צפוי.',
  invalid_request_parameters: 'הבקשה כוללת פרמטרי קלט שגויים.',
  insufficient_request_parameters: 'ייתכן שחסרים בבקשה פרמטרי קלט.',
  invalid_config: 'ההגדרות של המחבר אינן תקינות.',
  invalid_certificate: 'התעודה של המחבר אינה תקינה; יש לוודא שהיא בקידוד PEM.',
  invalid_response: 'התגובה של המחבר אינה תקינה.',
  template_not_found: 'לא נמצאה התבנית הנכונה בהגדרות המחבר.',
  template_not_supported: 'המחבר אינו תומך בסוג תבנית זה.',
  rate_limit_exceeded: 'הגעת למגבלת הקצב. יש לנסות שוב מאוחר יותר.',
  usage_limit_exceeded: 'הגעת למגבלת השימוש בשירות הדוא"ל.',
  not_implemented: '{{method}}: עדיין לא מומש.',
  social_invalid_access_token: 'טוקן הגישה של המחבר אינו תקין.',
  invalid_auth_code: 'קוד ההרשאה של המחבר אינו תקין.',
  social_invalid_id_token: 'טוקן ה-ID של המחבר אינו תקין.',
  authorization_failed: 'תהליך ההרשאה של המשתמש נכשל.',
  social_auth_code_invalid: 'לא ניתן לקבל טוקן גישה; יש לבדוק את קוד ההרשאה.',
  more_than_one_sms: 'יש יותר ממחבר SMS אחד.',
  more_than_one_email: 'יש יותר ממחבר דוא"ל אחד.',
  more_than_one_connector_factory:
    'נמצאו כמה connector factories (עם id {{connectorIds}}); אפשר להסיר את המיותרים.',
  db_connector_type_mismatch: 'יש במסד הנתונים מחבר שסוגו אינו תואם.',
  not_found_with_connector_id: 'לא נמצא מחבר עם מזהה המחבר הסטנדרטי שסופק.',
  multiple_instances_not_supported: 'לא ניתן ליצור כמה מופעים של המחבר הסטנדרטי שנבחר.',
  invalid_type_for_syncing_profile: 'ניתן לסנכרן את פרופיל המשתמש רק עם מחברים חברתיים.',
  can_not_modify_target: "לא ניתן לשנות את ה-'target' של המחבר.",
  should_specify_target: "יש לציין 'target'.",
  multiple_target_with_same_platform:
    'לא ניתן להגדיר כמה מחברים חברתיים עם אותו target ואותה פלטפורמה.',
  cannot_overwrite_metadata_for_non_standard_connector: "לא ניתן לדרוס את ה-'metadata' של מחבר זה.",
  email_connector: {
    bulk_deletion_no_filter:
      'כדי לבצע מחיקה מרובה לפי מאפיינים יש לספק לפחות תנאי סינון אחד. המאפיינים הנתמכים הם: {{properties, list(type:conjunction)}}.',
  },
  token_storage_not_supported: 'מחבר זה אינו תומך באחסון טוקנים. ',
};

export default Object.freeze(connector);
