/* GetCertus addition (MPL-2.0, see GETCERTUS.md): admin console phrases. */
const storage = {
  not_configured: 'Der er ikke konfigureret nogen lagerudbyder.',
  missing_parameter: 'Parameteren {{parameter}} mangler for lagerudbyderen.',
  upload_error: 'Filen kunne ikke uploades til lagerudbyderen.',
  download_error: 'Filen kunne ikke downloades fra lagerudbyderen.',
  invalid_custom_ui_zip:
    'Arkivet kunne ikke læses. Opret en ZIP, der ikke er tom, med Deflate eller uden komprimering, og upload den igen.',
  custom_ui_file_too_large:
    'Den udpakkede fil "{{name}}" skal være mindre end 10 MiB. Reducér filstørrelsen, og upload igen.',
  custom_ui_too_many_entries:
    'ZIP-filen indeholder for mange elementer. Medtag højst 200 filer og mapper, og upload igen.',
};

export default Object.freeze(storage);
