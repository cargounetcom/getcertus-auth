/* GetCertus addition (MPL-2.0, see GETCERTUS.md): admin console phrases. */
const components = {
  uploader: {
    action_description: 'Slepen en neerzetten of bladeren',
    uploading: 'Uploaden...',
    image_limit:
      'Upload een afbeelding kleiner dan {{size, number}} KB, alleen {{extensions, list(style: narrow; type: conjunction;)}}.',
    error_upload: 'Er ging iets mis. Het uploaden van het bestand is mislukt.',
    error_file_size: 'Het bestand is te groot. Upload een bestand kleiner dan {{limitWithUnit}}.',
    error_file_type:
      'Dit bestandstype wordt niet ondersteund. Alleen {{extensions, list(style: narrow; type: conjunction;)}}.',
    error_file_count: 'Je kunt maar 1 bestand uploaden.',
  },
};

export default Object.freeze(components);
