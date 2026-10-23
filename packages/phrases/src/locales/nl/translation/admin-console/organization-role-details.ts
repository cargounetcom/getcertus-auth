/* GetCertus addition (MPL-2.0, see GETCERTUS.md): admin console phrases. */
const organization_role_details = {
  page_title: 'Details organisatierol',
  back_to_org_roles: 'Terug naar organisatierollen',
  delete_confirm:
    'Hierdoor worden de rechten van deze rol ingetrokken bij de betrokken gebruikers en worden de relaties tussen organisatierollen, leden van de organisatie en organisatierechten verwijderd.',
  deleted: 'De organisatierol {{name}} is verwijderd.',
  permissions: {
    tab: 'Rechten',
    name_column: 'Recht',
    description_column: 'Beschrijving',
    type_column: 'Type recht',
    type: {
      api: 'API-recht',
      org: 'Organisatierecht',
    },
    assign_permissions: 'Rechten toewijzen',
    remove_permission: 'Recht intrekken',
    remove_confirmation:
      'Als dit recht wordt ingetrokken, verliest de gebruiker met deze organisatierol de toegang die dit recht gaf.',
    removed: 'Het recht {{name}} is uit deze organisatierol verwijderd',
    assign_description:
      'Wijs rechten toe aan de rollen binnen deze organisatie. Dit kunnen zowel organisatierechten als API-rechten zijn.',
    organization_permissions: 'Organisatierechten',
    api_permissions: 'API-rechten',
    assign_organization_permissions: 'Organisatierechten toewijzen',
    assign_api_permissions: 'API-rechten toewijzen',
  },
  general: {
    tab: 'Algemeen',
    settings: 'Instellingen',
    description:
      'Een organisatierol is een groep rechten die aan gebruikers kan worden toegewezen. De rechten kunnen afkomstig zijn uit de vooraf gedefinieerde organisatierechten en API-rechten.',
    name_field: 'Naam',
    description_field: 'Beschrijving',
    description_field_placeholder: 'Gebruikers met alleen-lezenrechten',
  },
};

export default Object.freeze(organization_role_details);
