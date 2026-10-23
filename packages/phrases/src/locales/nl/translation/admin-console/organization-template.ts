/* GetCertus addition (MPL-2.0, see GETCERTUS.md): admin console phrases. */
const organization_template = {
  title: 'Organisatiesjabloon',
  subtitle:
    'In multi-tenant SaaS-applicaties definieert een organisatiesjabloon gedeeld toegangsbeleid (rechten en rollen) voor meerdere organisaties.',
  roles: {
    tab_name: 'Organisatierollen',
    search_placeholder: 'Zoeken op rolnaam',
    create_title: 'Organisatierol maken',
    role_column: 'Organisatierol',
    permissions_column: 'Rechten',
    placeholder_title: 'Organisatierol',
    placeholder_description:
      'Een organisatierol is een groep rechten die aan gebruikers kan worden toegewezen. De rechten moeten afkomstig zijn uit de vooraf gedefinieerde organisatierechten.',
    create_modal: {
      title: 'Organisatierol maken',
      create: 'Rol maken',
      name: 'Rolnaam',
      description: 'Beschrijving',
      type: 'Roltype',
      created: 'De organisatierol {{name}} is aangemaakt.',
    },
  },
  permissions: {
    tab_name: 'Organisatierechten',
    search_placeholder: 'Zoeken op rechtnaam',
    create_org_permission: 'Organisatierecht maken',
    permission_column: 'Organisatierecht',
    description_column: 'Beschrijving',
    placeholder_title: 'Organisatierecht',
    placeholder_description:
      'Een organisatierecht is de autorisatie om een resource te gebruiken binnen de context van een organisatie.',
    delete_confirm:
      'Als dit recht wordt verwijderd, verliezen alle organisatierollen met dit recht het, en verliezen gebruikers die het hadden de toegang die het gaf.',
    create_title: 'Organisatierecht maken',
    edit_title: 'Organisatierecht bewerken',
    permission_field_name: 'Rechtnaam',
    description_field_name: 'Beschrijving',
    description_field_placeholder: 'Afsprakengeschiedenis lezen',
    create_permission: 'Recht maken',
    created: 'Het organisatierecht {{name}} is aangemaakt.',
  },
};

export default Object.freeze(organization_template);
