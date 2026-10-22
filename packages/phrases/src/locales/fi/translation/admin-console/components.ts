/* GetCertus addition (MPL-2.0, see GETCERTUS.md): admin console phrases. */
const components = {
  uploader: {
    action_description: 'Vedä ja pudota tai selaa',
    uploading: 'Ladataan...',
    image_limit:
      'Lataa alle {{size, number}} kt:n kuva, vain {{extensions, list(style: narrow; type: conjunction;)}}.',
    error_upload: 'Jokin meni vikaan. Tiedoston lataus epäonnistui.',
    error_file_size: 'Tiedosto on liian suuri. Lataa alle {{limitWithUnit}}:n tiedosto.',
    error_file_type:
      'Tiedostotyyppiä ei tueta. Vain {{extensions, list(style: narrow; type: conjunction;)}}.',
    error_file_count: 'Voit ladata vain 1 tiedoston.',
  },
};

export default Object.freeze(components);
