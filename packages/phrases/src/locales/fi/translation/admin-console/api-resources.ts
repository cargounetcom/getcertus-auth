/* GetCertus addition (MPL-2.0, see GETCERTUS.md): admin console phrases. */
const api_resources = {
  page_title: 'API-resurssit',
  title: 'API-resurssit',
  subtitle: 'Määritä API:t, joita valtuutetut sovelluksesi voivat käyttää.',
  create: 'Luo API-resurssi',
  api_name: 'API:n nimi',
  api_name_placeholder: 'Anna API:n nimi',
  api_identifier: 'API-tunniste',
  api_identifier_placeholder: 'https://your-api-identifier',
  api_identifier_tip:
    'API-resurssin yksilöllinen tunniste. Sen on oltava absoluuttinen URI ilman fragmenttia (#). Vastaa OAuth 2.0:n <a>resource-parametria</a>.',
  default_api: 'Oletus-API',
  default_api_label:
    'Tenantille voi asettaa enintään yhden oletus-API:n.\nKun oletus-API on asetettu, resource-parametrin voi jättää pois todennuspyynnöstä. Myöhemmät tunnusten vaihdot käyttävät silloin oletuksena kyseistä API:a audiencena, jolloin myönnetään JWT:itä. <a>Lue lisää</a>',
  api_resource_created: 'API-resurssi {{name}} on luotu',
  invalid_resource_indicator_format: 'API-indikaattorin on oltava kelvollinen absoluuttinen URI.',
};

export default Object.freeze(api_resources);
