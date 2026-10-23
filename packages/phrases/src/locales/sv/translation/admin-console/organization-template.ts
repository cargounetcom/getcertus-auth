/* GetCertus addition (MPL-2.0, see GETCERTUS.md): admin console phrases. */
const organization_template = {
  title: 'Organisationsmall',
  subtitle:
    'I multi-tenant SaaS-applikationer definierar en organisationsmall gemensamma åtkomstpolicyer (behörigheter och roller) för flera organisationer.',
  roles: {
    tab_name: 'Organisationsroller',
    search_placeholder: 'Sök på rollnamn',
    create_title: 'Skapa organisationsroll',
    role_column: 'Organisationsroll',
    permissions_column: 'Behörigheter',
    placeholder_title: 'Organisationsroll',
    placeholder_description:
      'En organisationsroll är en grupp behörigheter som kan tilldelas användare. Behörigheterna måste komma från de fördefinierade organisationsbehörigheterna.',
    create_modal: {
      title: 'Skapa organisationsroll',
      create: 'Skapa roll',
      name: 'Rollnamn',
      description: 'Beskrivning',
      type: 'Rolltyp',
      created: 'Organisationsrollen {{name}} har skapats.',
    },
  },
  permissions: {
    tab_name: 'Organisationsbehörigheter',
    search_placeholder: 'Sök på behörighetsnamn',
    create_org_permission: 'Skapa organisationsbehörighet',
    permission_column: 'Organisationsbehörighet',
    description_column: 'Beskrivning',
    placeholder_title: 'Organisationsbehörighet',
    placeholder_description:
      'En organisationsbehörighet är rätten att komma åt en resurs inom ramen för en organisation.',
    delete_confirm:
      'Om behörigheten tas bort förlorar alla organisationsroller som har den behörigheten, och användare som hade den förlorar den åtkomst den gav.',
    create_title: 'Skapa organisationsbehörighet',
    edit_title: 'Redigera organisationsbehörighet',
    permission_field_name: 'Behörighetsnamn',
    description_field_name: 'Beskrivning',
    description_field_placeholder: 'Läs bokningshistorik',
    create_permission: 'Skapa behörighet',
    created: 'Organisationsbehörigheten {{name}} har skapats.',
  },
};

export default Object.freeze(organization_template);
