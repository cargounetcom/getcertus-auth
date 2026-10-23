/* GetCertus addition (MPL-2.0, see GETCERTUS.md): admin console phrases. */
const organization_role_details = {
  page_title: 'Organisaation roolin tiedot',
  back_to_org_roles: 'Takaisin organisaation rooleihin',
  delete_confirm:
    'Tämä poistaa roolin käyttöoikeudet asianomaisilta käyttäjiltä ja poistaa organisaation roolien, organisaation jäsenten ja organisaation käyttöoikeuksien väliset suhteet.',
  deleted: 'Organisaation rooli {{name}} poistettiin.',
  permissions: {
    tab: 'Käyttöoikeudet',
    name_column: 'Käyttöoikeus',
    description_column: 'Kuvaus',
    type_column: 'Käyttöoikeuden tyyppi',
    type: {
      api: 'API-käyttöoikeus',
      org: 'Organisaation käyttöoikeus',
    },
    assign_permissions: 'Määritä käyttöoikeudet',
    remove_permission: 'Poista käyttöoikeus',
    remove_confirmation:
      'Jos tämä käyttöoikeus poistetaan, tämän organisaation roolin omaava käyttäjä menettää käyttöoikeuden antaman pääsyn.',
    removed: 'Käyttöoikeus {{name}} poistettiin tästä organisaation roolista',
    assign_description:
      'Määritä käyttöoikeuksia tämän organisaation rooleille. Ne voivat olla sekä organisaation käyttöoikeuksia että API-käyttöoikeuksia.',
    organization_permissions: 'Organisaation käyttöoikeudet',
    api_permissions: 'API-käyttöoikeudet',
    assign_organization_permissions: 'Määritä organisaation käyttöoikeudet',
    assign_api_permissions: 'Määritä API-käyttöoikeudet',
  },
  general: {
    tab: 'Yleiset',
    settings: 'Asetukset',
    description:
      'Organisaation rooli on käyttöoikeuksien ryhmä, joka voidaan määrittää käyttäjille. Käyttöoikeudet voivat olla ennalta määritettyjä organisaation käyttöoikeuksia ja API-käyttöoikeuksia.',
    name_field: 'Nimi',
    description_field: 'Kuvaus',
    description_field_placeholder: 'Käyttäjät, joilla on vain lukuoikeudet',
  },
};

export default Object.freeze(organization_role_details);
