/* GetCertus addition (MPL-2.0, see GETCERTUS.md): admin console phrases. */
const components = {
  uploader: {
    action_description: 'Trage și plasează sau răsfoiește',
    uploading: 'Se încarcă...',
    image_limit:
      'Încarcă o imagine sub {{size, number}} KB, doar {{extensions, list(style: narrow; type: conjunction;)}}.',
    error_upload: 'A apărut o problemă. Încărcarea fișierului a eșuat.',
    error_file_size: 'Fișierul este prea mare. Încarcă un fișier sub {{limitWithUnit}}.',
    error_file_type:
      'Tipul de fișier nu este acceptat. Doar {{extensions, list(style: narrow; type: conjunction;)}}.',
    error_file_count: 'Poți încărca doar 1 fișier.',
  },
};

export default Object.freeze(components);
