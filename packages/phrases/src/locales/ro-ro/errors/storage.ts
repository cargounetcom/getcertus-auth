/* GetCertus addition (MPL-2.0, see GETCERTUS.md): admin console phrases. */
const storage = {
  not_configured: 'Furnizorul de stocare nu este configurat.',
  missing_parameter: 'Lipsește parametrul {{parameter}} pentru furnizorul de stocare.',
  upload_error: 'Încărcarea fișierului la furnizorul de stocare a eșuat.',
  download_error: 'Descărcarea fișierului de la furnizorul de stocare a eșuat.',
  invalid_custom_ui_zip:
    'Arhiva nu a putut fi citită. Creează o arhivă ZIP care nu este goală, cu Deflate sau fără compresie, apoi încarc-o din nou.',
  custom_ui_file_too_large:
    'Fișierul extras "{{name}}" trebuie să aibă sub 10 MiB. Redu dimensiunea fișierului și încarcă din nou.',
  custom_ui_too_many_entries:
    'Arhiva ZIP conține prea multe elemente. Include cel mult 200 de fișiere și foldere și încarcă din nou.',
};

export default Object.freeze(storage);
