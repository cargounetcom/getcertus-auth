/* GetCertus addition (MPL-2.0, see GETCERTUS.md): admin console phrases. */
const organization_details = {
  page_title: 'Organisaation tiedot',
  delete_confirmation:
    'Poiston jälkeen kaikki jäsenet menettävät jäsenyytensä ja roolinsa tässä organisaatiossa. Toimintoa ei voi perua.',
  organization_id: 'Organisaation tunnus',
  settings_description:
    'Organisaatiot edustavat tiimejä, yritysasiakkaita ja kumppaniyrityksiä, joilla on pääsy sovelluksiisi.',
  name_placeholder: 'Organisaation nimi, jonka ei tarvitse olla yksilöllinen.',
  description_placeholder: 'Kuvaus organisaatiosta.',
  member: 'Jäsen',
  member_other: 'Jäsenet',
  add_members_to_organization: 'Lisää jäseniä organisaatioon {{name}}',
  add_members_to_organization_description:
    'Etsi sopivat käyttäjät nimellä, sähköpostilla, puhelinnumerolla tai käyttäjätunnuksella. Nykyisiä jäseniä ei näytetä hakutuloksissa.',
  add_with_organization_role: 'Lisää organisaation roolilla tai rooleilla',
  user: 'Käyttäjä',
  application: 'Sovellus',
  application_other: 'Sovellukset',
  add_applications_to_organization: 'Lisää sovelluksia organisaatioon {{name}}',
  add_applications_to_organization_description:
    'Etsi sopivat sovellukset sovellustunnuksella, nimellä tai kuvauksella. Nykyisiä sovelluksia ei näytetä hakutuloksissa.',
  at_least_one_application: 'Vähintään yksi sovellus vaaditaan.',
  remove_application_from_organization: 'Poista sovellus organisaatiosta',
  remove_application_from_organization_description:
    'Poiston jälkeen sovellus menettää yhteytensä ja roolinsa tässä organisaatiossa. Toimintoa ei voi perua.',
  search_application_placeholder: 'Hae sovellustunnuksella, nimellä tai kuvauksella',
  roles: 'Organisaation roolit',
  authorize_to_roles: 'Anna käyttäjälle {{name}} pääsy seuraaviin rooleihin:',
  edit_organization_roles: 'Muokkaa organisaation rooleja',
  edit_organization_roles_title: 'Muokkaa käyttäjän {{name}} organisaatiorooleja',
  remove_user_from_organization: 'Poista käyttäjä organisaatiosta',
  remove_user_from_organization_description:
    'Poiston jälkeen käyttäjä menettää jäsenyytensä ja roolinsa tässä organisaatiossa. Toimintoa ei voi perua.',
  search_user_placeholder: 'Hae nimellä, sähköpostilla, puhelinnumerolla tai käyttäjätunnuksella',
  at_least_one_user: 'Vähintään yksi käyttäjä vaaditaan.',
  organization_roles_tooltip:
    'Roolit, jotka on määritetty kohteelle {{type}} tässä organisaatiossa.',
  custom_data: 'Mukautetut tiedot',
  custom_data_tip:
    'Mukautetut tiedot ovat JSON-objekti, johon voi tallentaa organisaatioon liittyviä lisätietoja.',
  invalid_json_object: 'Virheellinen JSON-objekti.',
  branding: {
    name: 'brändäys',
    description: 'Mukauta organisaatiotason kirjautumiskokemusta.',
    organization_level_sie: 'Organisaatiotason kirjautumiskokemus',
    organization_level_sie_switch:
      'Ota käyttöön organisaatiotason kirjautumiskokemus ja määritä organisaatiokohtainen brändäys. Jos se ei ole käytössä, käytetään ensin sovellustason kirjautumista ja sitten yleistä kirjautumiskokemusta.',
    logo: 'Organisaation logot',
    logo_tooltip:
      'Voit välittää organisaation tunnuksen näyttääksesi tämän logon kirjautumiskokemuksessa; logon tumma versio tarvitaan, jos tumma tila on käytössä yleisen kirjautumiskokemuksen asetuksissa. <a>Lue lisää</a>',
  },
  jit: {
    title: 'Just-in-time-provisiointi',
    description:
      'Käyttäjät voivat liittyä organisaatioon automaattisesti ja saada roolit ensimmäisellä kirjautumiskerrallaan tiettyjen tunnistautumistapojen kautta. Voit asettaa ehtoja just-in-time-provisioinnille.',
    email_domain: 'Provisiointi sähköpostin verkkotunnuksen perusteella',
    email_domain_description:
      'Uudet käyttäjät, jotka rekisteröityvät vahvistetulla sähköpostiosoitteella tai sosiaalisella kirjautumisella vahvistetun sähköpostiosoitteen kanssa, liittyvät automaattisesti organisaatioon. <a>Lue lisää</a>',
    email_domain_placeholder: 'Anna sähköpostin verkkotunnukset just-in-time-provisiointia varten',
    invalid_domain: 'Virheellinen verkkotunnus',
    domain_already_added: 'Verkkotunnus on jo lisätty',
    sso_enabled_domain_warning:
      'Olet antanut yhden tai useamman enterprise SSO:hon liitetyn sähköpostin verkkotunnuksen. Näitä sähköpostiosoitteita käyttävät noudattavat tavallista SSO-kulkua, eikä heitä lisätä tähän organisaatioon, ellei enterprise SSO -provisiointia ole määritetty.',
    enterprise_sso: 'Enterprise SSO -provisiointi',
    no_enterprise_connector_set:
      'Et ole vielä määrittänyt yhtään enterprise SSO -liitintä. Lisää ensin liittimet ottaaksesi enterprise SSO -provisioinnin käyttöön. <a>Määritä</a>',
    add_enterprise_connector: 'Lisää enterprise-liitin',
    enterprise_sso_description:
      'Uudet tai olemassa olevat käyttäjät, jotka kirjautuvat enterprise SSO:n kautta ensimmäistä kertaa, liittyvät automaattisesti organisaatioon. <a>Lue lisää</a>',
    organization_roles: 'Organisaation oletusroolit',
    organization_roles_description:
      'Määritä käyttäjille roolit, kun he liittyvät organisaatioon just-in-time-provisioinnin kautta.',
  },
  mfa: {
    title: 'Monivaiheinen tunnistautuminen (MFA)',
    tip: 'Kun MFA vaaditaan, käyttäjät, joilla ei ole MFA:ta määritettynä, hylätään heidän yrittäessään vaihtaa organisaatiotokenin. Tämä asetus ei vaikuta käyttäjän tunnistautumiseen.',
    description:
      'Vaadi käyttäjiä määrittämään monivaiheinen tunnistautuminen tämän organisaation käyttämiseksi.',
    no_mfa_warning:
      'Tenantissasi ei ole käytössä yhtään monivaiheisen tunnistautumisen menetelmää. Käyttäjät eivät pääse tähän organisaatioon ennen kuin vähintään yksi <a>monivaiheisen tunnistautumisen menetelmä</a> on otettu käyttöön.',
  },
};

export default Object.freeze(organization_details);
