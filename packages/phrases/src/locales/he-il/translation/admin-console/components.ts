/* GetCertus addition (MPL-2.0, see GETCERTUS.md): admin console phrases. */
const components = {
  uploader: {
    action_description: 'גרירה ושחרור או עיון',
    uploading: 'מעלה...',
    image_limit:
      'יש להעלות תמונה קטנה מ-{{size, number}} KB, רק {{extensions, list(style: narrow; type: conjunction;)}}.',
    error_upload: 'משהו השתבש. העלאת הקובץ נכשלה.',
    error_file_size: 'הקובץ גדול מדי. יש להעלות קובץ קטן מ-{{limitWithUnit}}.',
    error_file_type:
      'סוג הקובץ אינו נתמך. רק {{extensions, list(style: narrow; type: conjunction;)}}.',
    error_file_count: 'ניתן להעלות קובץ אחד בלבד.',
  },
};

export default Object.freeze(components);
