/* GetCertus addition (MPL-2.0, see GETCERTUS.md): admin console phrases. */
const roles = {
  page_title: 'Roolit',
  title: 'Roolit',
  subtitle:
    'Roolit sisältävät käyttöoikeuksia, jotka määräävät, mitä käyttäjä voi tehdä. RBAC antaa rooleilla käyttäjille pääsyn resursseihin tiettyjä toimintoja varten.',
  create: 'Luo rooli',
  role_name: 'Roolin nimi',
  role_type: 'Roolin tyyppi',
  type_user: 'Käyttäjä',
  type_machine_to_machine: 'Kone-koneelle',
  role_description: 'Kuvaus',
  role_name_placeholder: 'Anna roolin nimi',
  role_description_placeholder: 'Anna roolin kuvaus',
  col_roles: 'Roolit',
  col_type: 'Tyyppi',
  col_description: 'Kuvaus',
  col_assigned_entities: 'Määritetty',
  user_counts: '{{count}} käyttäjää',
  application_counts: '{{count}} sovellusta',
  user_count: '{{count}} käyttäjä',
  application_count: '{{count}} sovellus',
  assign_permissions: 'Määritä käyttöoikeuksia',
  create_role_title: 'Luo rooli',
  create_role_description: 'Järjestä käyttöoikeudet rooleiksi ja määritä ne käyttäjille.',
  create_role_button: 'Luo rooli',
  role_created: 'Rooli {{name}} on luotu.',
  search: 'Hae roolin nimellä, kuvauksella tai tunnuksella',
  placeholder_title: 'Roolit',
  placeholder_description:
    'Roolit ovat käyttöoikeuksien ryhmiä, joita voi määrittää käyttäjille. Lisää käyttöoikeudet ennen roolien luomista.',
  assign_roles: 'Määritä rooleja',
  management_api_access_notification:
    'GetCertus Management API -pääsyä varten valitse roolit, joilla on Management API -käyttöoikeudet <flag/>.',
  with_management_api_access_tip:
    'Tällä kone-koneelle-roolilla on GetCertus Management API -käyttöoikeuksia',
  role_creation_hint: 'Etkö löydä oikeaa roolia? <a>Luo rooli</a>',
};

export default Object.freeze(roles);
