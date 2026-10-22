/* GetCertus addition (MPL-2.0, see GETCERTUS.md): admin console phrases. */
const role_details = {
  back_to_roles: 'Takaisin rooleihin',
  identifier: 'Tunniste',
  delete_description:
    'Tällöin roolin käyttöoikeudet poistetaan asianomaisilta käyttäjiltä ja roolien, käyttäjien ja käyttöoikeuksien väliset liitokset poistetaan.',
  role_deleted: '{{name}} on poistettu.',
  general_tab: 'Yleiset',
  users_tab: 'Käyttäjät',
  m2m_apps_tab: 'Kone-koneelle-sovellukset',
  permissions_tab: 'Käyttöoikeudet',
  settings: 'Asetukset',
  settings_description:
    'Roolit ovat käyttöoikeuksien ryhmiä, joita voi määrittää käyttäjille. Ne myös kokoavat eri API:en käyttöoikeudet, joten oikeuksien lisääminen, poistaminen tai muuttaminen on tehokkaampaa kuin niiden määrittäminen käyttäjille yksitellen.',
  field_name: 'Nimi',
  field_description: 'Kuvaus',
  field_is_default: 'Oletusrooli',
  field_is_default_description:
    'Aseta rooli uusien käyttäjien oletusrooliksi. Oletusrooleja voi olla useita. Tämä vaikuttaa myös Management API:n kautta luotujen käyttäjien oletusrooleihin.',
  type_m2m_role_tag: 'Kone-koneelle',
  type_user_role_tag: 'Käyttäjä',
  m2m_role_notification:
    'Määritä tämä kone-koneelle-rooli kone-koneelle-sovellukselle antaaksesi pääsyn vastaaviin API-resursseihin. <a>Luo kone-koneelle-sovellus</a> ensin, jos et ole vielä tehnyt niin.',
  permission: {
    assign_button: 'Määritä käyttöoikeuksia',
    assign_title: 'Määritä käyttöoikeuksia',
    assign_subtitle:
      'Määritä rooliin käyttöoikeuksia. Rooli saa lisätyt oikeudet, ja roolin käyttäjät perivät ne.',
    assign_form_field: 'Määritä käyttöoikeuksia',
    added_text: '{{count, number}} käyttöoikeus lisätty',
    added_text_other: '{{count, number}} käyttöoikeutta lisätty',
    api_permission_count: '{{count, number}} käyttöoikeus',
    api_permission_count_other: '{{count, number}} käyttöoikeutta',
    confirm_assign: 'Määritä käyttöoikeudet',
    permission_assigned: 'Valitut käyttöoikeudet on määritetty roolille',
    deletion_description:
      'Jos käyttöoikeus poistetaan, roolin käyttäjät menettävät sen antaman pääsyn.',
    permission_deleted: 'Käyttöoikeus "{{name}}" on poistettu roolista',
    empty: 'Ei saatavilla olevia käyttöoikeuksia',
  },
  users: {
    assign_button: 'Määritä käyttäjiä',
    name_column: 'Käyttäjä',
    app_column: 'Sovellus',
    latest_sign_in_column: 'Viimeisin kirjautuminen',
    delete_description:
      'Käyttäjä säilyy käyttäjäkannassasi, mutta menettää tämän roolin valtuutuksen.',
    deleted: '{{name}} on poistettu roolista',
    assign_title: 'Määritä käyttäjiä rooliin {{name}}',
    assign_subtitle:
      'Etsi sopivat käyttäjät nimellä, sähköpostilla, puhelinnumerolla tai käyttäjätunnuksella.',
    assign_field: 'Määritä käyttäjiä',
    confirm_assign: 'Määritä käyttäjät',
    assigned_toast_text: 'Valitut käyttäjät on määritetty roolille',
    empty: 'Ei saatavilla olevia käyttäjiä',
  },
  applications: {
    assign_button: 'Määritä kone-koneelle-sovelluksia',
    name_column: 'Sovellus',
    app_column: 'Kone-koneelle-sovellus',
    description_column: 'Kuvaus',
    delete_description:
      'Sovellus säilyy sovelluksissasi, mutta menettää tämän roolin valtuutuksen.',
    deleted: '{{name}} on poistettu roolista',
    assign_title: 'Määritä kone-koneelle-sovelluksia rooliin {{name}}',
    assign_subtitle:
      'Etsi sopivat kone-koneelle-sovellukset nimellä, kuvauksella tai sovelluksen tunnuksella.',
    assign_field: 'Määritä kone-koneelle-sovelluksia',
    confirm_assign: 'Määritä kone-koneelle-sovellukset',
    assigned_toast_text: 'Valitut sovellukset on määritetty roolille',
    empty: 'Ei saatavilla olevia sovelluksia',
  },
};

export default Object.freeze(role_details);
