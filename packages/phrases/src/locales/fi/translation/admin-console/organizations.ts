/* GetCertus addition (MPL-2.0, see GETCERTUS.md): admin console phrases. */
const organizations = {
  organization: 'Organisaatio',
  page_title: 'Organisaatiot',
  title: 'Organisaatiot',
  subtitle:
    'Organisaatioita käytetään yleensä SaaS- tai vastaavissa multi-tenant-sovelluksissa, ja ne edustavat asiakkaitasi, jotka ovat tiimejä, organisaatioita tai kokonaisia yrityksiä. Organisaatiot ovat B2B-tunnistautumisen ja -valtuutuksen perusta.',
  organization_template: 'Organisaatiomalli',
  organization_id: 'Organisaation tunnus',
  members: 'Jäsenet',
  machine_to_machine: 'Koneelta koneelle -sovellukset',
  branding: 'Brändäys',
  create_organization: 'Luo organisaatio',
  setup_organization: 'Määritä organisaatiosi',
  organization_list_placeholder_title: 'Organisaatio',
  organization_list_placeholder_text:
    'Organisaatioita käytetään usein parhaana käytäntönä SaaS- tai vastaavissa multi-tenant-sovelluksissa. Niiden avulla voit kehittää sovelluksia, joissa asiakkaat voivat luoda ja hallita organisaatioita, kutsua jäseniä ja määrittää rooleja.',
  organization_name_placeholder: 'Oma organisaatio',
  organization_description_placeholder: 'Lyhyt kuvaus organisaatiosta',
  organization_permission: 'Organisaation käyttöoikeus',
  organization_permission_other: 'Organisaation käyttöoikeudet',
  create_permission_placeholder: 'Lue ajanvaraushistoria',
  organization_role: 'Organisaation rooli',
  organization_role_other: 'Organisaation roolit',
  organization_role_description:
    'Organisaation rooli on käyttöoikeuksien ryhmä, joka voidaan määrittää käyttäjille. Käyttöoikeuksien on oltava ennalta määritettyjä organisaation käyttöoikeuksia.',
  role: 'Rooli',
  search_placeholder: 'Hae organisaation nimellä tai tunnuksella',
  search_role_placeholder: 'Kirjoita hakeaksesi ja valitaksesi rooleja',
  empty_placeholder: '🤔 Et ole vielä määrittänyt yhtään kohdetta: {{entity}}.',
  organization_and_member: 'Organisaatio ja jäsen',
  organization_and_member_description:
    'Organisaatio on käyttäjäryhmä, joka voi edustaa tiimejä, yritysasiakkaita ja kumppaniyrityksiä, ja jokainen käyttäjä on "jäsen". Ne voivat olla multi-tenant-tarpeidesi perusyksiköitä.',
  guide: {
    title: 'Aloita oppaiden avulla',
    subtitle: 'Vauhdita organisaatioasetuksiasi oppaidemme avulla',
    introduction: {
      title: 'Näin organisaatiot toimivat GetCertusissa',
      section_1: {
        title: 'Organisaatio on käyttäjien (identiteettien) ryhmä',
      },
      section_2: {
        title: 'Organisaatiomalli on suunniteltu multi-tenant-sovellusten pääsynhallintaan',
        description:
          'Multi-tenant SaaS -sovelluksissa useat organisaatiot jakavat usein saman pääsynhallintamallin, joka sisältää käyttöoikeudet ja roolit. GetCertusissa sitä kutsutaan "organisaatiomalliksi".',
        permission_description:
          'Organisaation käyttöoikeus on valtuutus käyttää resurssia organisaation kontekstissa.',
        role_description_deprecated:
          'Organisaation rooli on organisaation käyttöoikeuksien ryhmä, joka voidaan määrittää jäsenille.',
        role_description:
          'Organisaation rooli on organisaation käyttöoikeuksien tai API-käyttöoikeuksien ryhmä, joka voidaan määrittää jäsenille.',
      },
      section_3: {
        title: 'Voinko määrittää API-käyttöoikeuksia organisaation rooleille?',
        description:
          'Kyllä, voit määrittää API-käyttöoikeuksia organisaation rooleille. GetCertus tarjoaa joustavuutta organisaatiosi roolien tehokkaaseen hallintaan, joten voit sisällyttää rooleihin sekä organisaation käyttöoikeuksia että API-käyttöoikeuksia.',
      },
      section_4: {
        title: 'Tutki kuvaa nähdäksesi, miten kaikki liittyy yhteen',
        description:
          'Esimerkki: John ja Sarah kuuluvat eri organisaatioihin, ja heillä on eri roolit eri organisaatioissa. Vie osoitin eri moduulien päälle ja katso, mitä tapahtuu.',
      },
    },
    organization_permissions: 'Organisaation käyttöoikeudet',
    organization_roles: 'Organisaation roolit',
    admin: 'Ylläpitäjä',
    member: 'Jäsen',
    guest: 'Vieras',
    role_description: 'Rooli "{{role}}" käyttää samaa organisaatiomallia eri organisaatioissa.',
    john: 'John',
    john_tip:
      'John kuuluu kahteen organisaatioon, ja hänen ainoa tunnisteensa on sähköpostiosoite "john@email.com". Hän on organisaation A ylläpitäjä ja organisaation B vieras.',
    sarah: 'Sarah',
    sarah_tip:
      'Sarah kuuluu yhteen organisaatioon, ja hänen ainoa tunnisteensa on sähköpostiosoite "sarah@email.com". Hän on organisaation B ylläpitäjä.',
  },
};

export default Object.freeze(organizations);
