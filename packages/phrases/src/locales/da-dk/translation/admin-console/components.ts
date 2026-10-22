/* GetCertus addition (MPL-2.0, see GETCERTUS.md): admin console phrases. */
const components = {
  uploader: {
    action_description: 'Træk og slip eller gennemse',
    uploading: 'Uploader...',
    image_limit:
      'Upload et billede under {{size, number}} KB, kun {{extensions, list(style: narrow; type: conjunction;)}}.',
    error_upload: 'Noget gik galt. Upload af filen mislykkedes.',
    error_file_size: 'Filen er for stor. Upload en fil under {{limitWithUnit}}.',
    error_file_type:
      'Filtypen understøttes ikke. Kun {{extensions, list(style: narrow; type: conjunction;)}}.',
    error_file_count: 'Du kan kun uploade 1 fil.',
  },
};

export default Object.freeze(components);
