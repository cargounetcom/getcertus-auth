/* GetCertus addition (MPL-2.0, see GETCERTUS.md): admin console phrases. */
const organization_template = {
  title: 'Organisaatiomalli',
  subtitle:
    'Multi-tenant SaaS -sovelluksissa organisaatiomalli määrittää yhteiset pääsynhallintakäytännöt (käyttöoikeudet ja roolit) useille organisaatioille.',
  roles: {
    tab_name: 'Organisaation roolit',
    search_placeholder: 'Hae roolin nimellä',
    create_title: 'Luo organisaation rooli',
    role_column: 'Organisaation rooli',
    permissions_column: 'Käyttöoikeudet',
    placeholder_title: 'Organisaation rooli',
    placeholder_description:
      'Organisaation rooli on käyttöoikeuksien ryhmä, joka voidaan määrittää käyttäjille. Käyttöoikeuksien on oltava ennalta määritettyjä organisaation käyttöoikeuksia.',
    create_modal: {
      title: 'Luo organisaation rooli',
      create: 'Luo rooli',
      name: 'Roolin nimi',
      description: 'Kuvaus',
      type: 'Roolin tyyppi',
      created: 'Organisaation rooli {{name}} luotiin.',
    },
  },
  permissions: {
    tab_name: 'Organisaation käyttöoikeudet',
    search_placeholder: 'Hae käyttöoikeuden nimellä',
    create_org_permission: 'Luo organisaation käyttöoikeus',
    permission_column: 'Organisaation käyttöoikeus',
    description_column: 'Kuvaus',
    placeholder_title: 'Organisaation käyttöoikeus',
    placeholder_description:
      'Organisaation käyttöoikeus on valtuutus käyttää resurssia organisaation kontekstissa.',
    delete_confirm:
      'Jos tämä käyttöoikeus poistetaan, kaikki sen sisältävät organisaation roolit menettävät sen, ja sen omanneet käyttäjät menettävät sen antaman pääsyn.',
    create_title: 'Luo organisaation käyttöoikeus',
    edit_title: 'Muokkaa organisaation käyttöoikeutta',
    permission_field_name: 'Käyttöoikeuden nimi',
    description_field_name: 'Kuvaus',
    description_field_placeholder: 'Lue ajanvaraushistoria',
    create_permission: 'Luo käyttöoikeus',
    created: 'Organisaation käyttöoikeus {{name}} luotiin.',
  },
};

export default Object.freeze(organization_template);
