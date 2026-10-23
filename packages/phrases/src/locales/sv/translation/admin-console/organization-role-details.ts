/* GetCertus addition (MPL-2.0, see GETCERTUS.md): admin console phrases. */
const organization_role_details = {
  page_title: 'Detaljer för organisationsroll',
  back_to_org_roles: 'Tillbaka till organisationsroller',
  delete_confirm:
    'Detta tar bort rollens behörigheter från berörda användare och raderar kopplingarna mellan organisationsroller, medlemmar i organisationen och organisationsbehörigheter.',
  deleted: 'Organisationsrollen {{name}} har tagits bort.',
  permissions: {
    tab: 'Behörigheter',
    name_column: 'Behörighet',
    description_column: 'Beskrivning',
    type_column: 'Behörighetstyp',
    type: {
      api: 'API-behörighet',
      org: 'Organisationsbehörighet',
    },
    assign_permissions: 'Tilldela behörigheter',
    remove_permission: 'Ta bort behörighet',
    remove_confirmation:
      'Om behörigheten tas bort förlorar användare med den här organisationsrollen den åtkomst som behörigheten gav.',
    removed: 'Behörigheten {{name}} har tagits bort från organisationsrollen',
    assign_description:
      'Tilldela behörigheter till rollerna i organisationen. De kan vara både organisationsbehörigheter och API-behörigheter.',
    organization_permissions: 'Organisationsbehörigheter',
    api_permissions: 'API-behörigheter',
    assign_organization_permissions: 'Tilldela organisationsbehörigheter',
    assign_api_permissions: 'Tilldela API-behörigheter',
  },
  general: {
    tab: 'Allmänt',
    settings: 'Inställningar',
    description:
      'En organisationsroll är en grupp behörigheter som kan tilldelas användare. Behörigheterna kan komma från de fördefinierade organisationsbehörigheterna och API-behörigheterna.',
    name_field: 'Namn',
    description_field: 'Beskrivning',
    description_field_placeholder: 'Användare med enbart läsbehörighet',
  },
};

export default Object.freeze(organization_role_details);
