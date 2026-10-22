/* GetCertus addition (MPL-2.0, see GETCERTUS.md): admin console phrases. */
const components = {
  uploader: {
    action_description: 'Σύρετε και αφήστε ή περιηγηθείτε',
    uploading: 'Μεταφόρτωση...',
    image_limit:
      'Μεταφορτώστε εικόνα κάτω από {{size, number}} KB, μόνο {{extensions, list(style: narrow; type: conjunction;)}}.',
    error_upload: 'Κάτι πήγε στραβά. Η μεταφόρτωση του αρχείου απέτυχε.',
    error_file_size: 'Το αρχείο είναι πολύ μεγάλο. Μεταφορτώστε αρχείο κάτω από {{limitWithUnit}}.',
    error_file_type:
      'Ο τύπος αρχείου δεν υποστηρίζεται. Μόνο {{extensions, list(style: narrow; type: conjunction;)}}.',
    error_file_count: 'Μπορείτε να μεταφορτώσετε μόνο 1 αρχείο.',
  },
};

export default Object.freeze(components);
