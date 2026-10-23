/* GetCertus addition (MPL-2.0, see GETCERTUS.md): admin console phrases. */
const storage = {
  not_configured: 'ספק האחסון אינו מוגדר.',
  missing_parameter: 'חסר הפרמטר {{parameter}} עבור ספק האחסון.',
  upload_error: 'העלאת הקובץ לספק האחסון נכשלה.',
  download_error: 'הורדת הקובץ מספק האחסון נכשלה.',
  invalid_custom_ui_zip:
    'לא ניתן לקרוא את הארכיון. יש ליצור קובץ ZIP שאינו ריק, בדחיסת Deflate או ללא דחיסה, ולהעלות אותו שוב.',
  custom_ui_file_too_large:
    'הקובץ שחולץ "{{name}}" חייב להיות קטן מ-10 MiB. יש להקטין את הקובץ ולהעלות שוב.',
  custom_ui_too_many_entries:
    'קובץ ה-ZIP מכיל יותר מדי פריטים. יש לכלול עד 200 קבצים ותיקיות ולהעלות שוב.',
};

export default Object.freeze(storage);
