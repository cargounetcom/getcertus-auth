/* GetCertus addition (MPL-2.0, see GETCERTUS.md): admin console phrases. */
const custom_profile_fields = {
  entity_not_exists_with_names: 'לא נמצאו ישויות עם השמות שסופקו: {{names}}',
  invalid_min_max_input: 'ערכי מינימום ומקסימום לא תקינים.',
  invalid_default_value: 'ערך ברירת מחדל לא תקין.',
  invalid_options: 'אפשרויות שדה לא תקינות.',
  invalid_regex_format: 'פורמט regex לא תקין.',
  invalid_address_components: 'רכיבי כתובת לא תקינים.',
  invalid_fullname_components: 'רכיבי שם מלא לא תקינים.',
  invalid_sub_component_type: 'סוג תת-רכיב לא תקין.',
  name_exists: 'כבר קיים שדה בשם זה.',
  conflicted_sie_order: 'סדר שדות מתנגש בחוויית הכניסה.',
  invalid_name: 'שם שדה לא תקין; מותרים רק אותיות או ספרות, עם הבחנה בין אותיות גדולות לקטנות.',
  name_conflict_sign_in_identifier: 'שם שדה לא תקין. מפתחות שמורים של מזהי כניסה: {{name}}.',
  name_conflict_built_in_prop: 'שם שדה לא תקין. שמות שמורים של מאפייני פרופיל מובנים: {{name}}.',
  name_conflict_custom_data: 'שם שדה לא תקין. מפתחות שמורים של נתונים מותאמים אישית: {{name}}.',
  name_required: 'נדרש שם שדה.',
};

export default Object.freeze(custom_profile_fields);
