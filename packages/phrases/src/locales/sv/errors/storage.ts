/* GetCertus addition (MPL-2.0, see GETCERTUS.md): admin console phrases. */
const storage = {
  not_configured: 'Ingen lagringsleverantör är konfigurerad.',
  missing_parameter: 'Parametern {{parameter}} saknas för lagringsleverantören.',
  upload_error: 'Det gick inte att ladda upp filen till lagringsleverantören.',
  download_error: 'Det gick inte att ladda ned filen från lagringsleverantören.',
  invalid_custom_ui_zip:
    'Arkivet kunde inte läsas. Skapa en ZIP som inte är tom, med Deflate eller utan komprimering, och ladda upp den igen.',
  custom_ui_file_too_large:
    'Den uppackade filen "{{name}}" måste vara mindre än 10 MiB. Minska filstorleken och ladda upp igen.',
  custom_ui_too_many_entries:
    'ZIP-filen innehåller för många poster. Ta med högst 200 filer och mappar och ladda upp igen.',
};

export default Object.freeze(storage);
