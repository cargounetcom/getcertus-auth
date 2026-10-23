/* GetCertus addition (MPL-2.0, see GETCERTUS.md): admin console phrases. */
const storage = {
  not_configured: 'Tallennuspalvelua ei ole määritetty.',
  missing_parameter: 'Tallennuspalvelulta puuttuu parametri {{parameter}}.',
  upload_error: 'Tiedoston lataaminen tallennuspalveluun epäonnistui.',
  download_error: 'Tiedoston lataaminen tallennuspalvelusta epäonnistui.',
  invalid_custom_ui_zip:
    'Arkistoa ei voitu lukea. Luo ZIP, joka ei ole tyhjä, Deflate-pakkauksella tai ilman pakkausta, ja lataa se uudelleen.',
  custom_ui_file_too_large:
    'Puretun tiedoston "{{name}}" on oltava alle 10 MiB. Pienennä tiedostoa ja lataa uudelleen.',
  custom_ui_too_many_entries:
    'ZIP sisältää liian monta kohdetta. Sisällytä enintään 200 tiedostoa ja kansiota ja lataa uudelleen.',
};

export default Object.freeze(storage);
