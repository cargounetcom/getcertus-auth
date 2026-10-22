/* GetCertus addition (MPL-2.0, see GETCERTUS.md): admin console phrases. */
const components = {
  uploader: {
    action_description: 'Dra och släpp eller bläddra',
    uploading: 'Laddar upp...',
    image_limit:
      'Ladda upp en bild under {{size, number}} KB, endast {{extensions, list(style: narrow; type: conjunction;)}}.',
    error_upload: 'Något gick fel. Uppladdningen misslyckades.',
    error_file_size: 'Filen är för stor. Ladda upp en fil under {{limitWithUnit}}.',
    error_file_type:
      'Filtypen stöds inte. Endast {{extensions, list(style: narrow; type: conjunction;)}}.',
    error_file_count: 'Du kan bara ladda upp 1 fil.',
  },
};

export default Object.freeze(components);
