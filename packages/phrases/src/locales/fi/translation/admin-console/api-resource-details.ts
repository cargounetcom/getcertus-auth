/* GetCertus addition (MPL-2.0, see GETCERTUS.md): admin console phrases. */
const api_resource_details = {
  page_title: 'API-resurssin tiedot',
  back_to_api_resources: 'Takaisin API-resursseihin',
  general_tab: 'Yleiset',
  permissions_tab: 'Käyttöoikeudet',
  settings: 'Asetukset',
  settings_description:
    'API-resurssit, eli Resource Indicatorit, ilmaisevat pyydettävät kohdepalvelut tai -resurssit, yleensä URI-muotoisena muuttujana, joka kuvaa resurssin identiteettiä.',
  management_api_settings_description:
    'GetCertus Management API on kattava kokoelma API:ja, joiden avulla ylläpitäjät voivat hoitaa monenlaisia identiteettiin liittyviä tehtäviä, valvoa tietoturvakäytäntöjä sekä noudattaa säädöksiä ja standardeja.',
  management_api_notice:
    'Tämä API edustaa GetCertus-entiteettiä, eikä sitä voi muokata tai poistaa. Luo kone-koneelle-sovellus kutsuaksesi GetCertus Management API:a. <a>Lue lisää</a>',
  token_expiration_time_in_seconds: 'Tunnuksen voimassaoloaika (sekunteina)',
  token_expiration_time_in_seconds_placeholder: 'Anna tunnuksen voimassaoloaika',
  delete_description:
    'Toimintoa ei voi kumota. API-resurssi poistetaan pysyvästi. Vahvista kirjoittamalla API-resurssin nimi <span>{{name}}</span>.',
  enter_your_api_resource_name: 'Anna API-resurssin nimi',
  api_resource_deleted: 'API-resurssi {{name}} on poistettu',
  permission: {
    create_button: 'Luo käyttöoikeus',
    create_title: 'Luo käyttöoikeus',
    create_subtitle: 'Määritä käyttöoikeudet (scopet), joita tämä API tarvitsee.',
    confirm_create: 'Luo käyttöoikeus',
    edit_title: 'Muokkaa API-käyttöoikeutta',
    edit_subtitle: 'Määritä käyttöoikeudet (scopet), joita API {{resourceName}} tarvitsee.',
    name: 'Käyttöoikeuden nimi',
    name_placeholder: 'read:resource',
    forbidden_space_in_name: 'Käyttöoikeuden nimessä ei saa olla välilyöntejä.',
    description: 'Kuvaus',
    description_placeholder: 'Voi lukea resursseja',
    permission_created: 'Käyttöoikeus {{name}} on luotu',
    delete_description:
      'Jos käyttöoikeus poistetaan, sen saaneet käyttäjät menettävät sen antaman pääsyn.',
    deleted: 'Käyttöoikeus "{{name}}" on poistettu.',
  },
};

export default Object.freeze(api_resource_details);
