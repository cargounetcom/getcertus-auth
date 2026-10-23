/* GetCertus addition (MPL-2.0, see GETCERTUS.md): admin console phrases. */
const storage = {
  not_configured: 'Er is geen opslagprovider geconfigureerd.',
  missing_parameter: 'Parameter {{parameter}} ontbreekt voor de opslagprovider.',
  upload_error: 'Het bestand kon niet naar de opslagprovider worden geüpload.',
  download_error: 'Het bestand kon niet van de opslagprovider worden gedownload.',
  invalid_custom_ui_zip:
    'Het archief kan niet worden gelezen. Maak een niet-lege ZIP met Deflate of zonder compressie en upload het opnieuw.',
  custom_ui_file_too_large:
    'Het uitgepakte bestand "{{name}}" moet kleiner zijn dan 10 MiB. Verklein het bestand en upload opnieuw.',
  custom_ui_too_many_entries:
    'De ZIP bevat te veel items. Neem maximaal 200 bestanden en mappen op en upload opnieuw.',
};

export default Object.freeze(storage);
