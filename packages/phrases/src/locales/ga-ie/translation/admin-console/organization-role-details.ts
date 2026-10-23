/* GetCertus addition (MPL-2.0, see GETCERTUS.md): admin console phrases. */
const organization_role_details = {
  page_title: 'Sonraí an róil eagraíochta',
  back_to_org_roles: 'Ar ais chuig róil eagraíochta',
  delete_confirm:
    'Bainfear ceadanna an róil seo de na húsáideoirí lena mbaineann, agus scriosfar na gaolta idir róil eagraíochta, baill na heagraíochta agus ceadanna eagraíochta.',
  deleted: 'Scriosadh an ról eagraíochta {{name}}.',
  permissions: {
    tab: 'Ceadanna',
    name_column: 'Cead',
    description_column: 'Cur síos',
    type_column: 'Cineál ceada',
    type: {
      api: 'Cead API',
      org: 'Cead eagraíochta',
    },
    assign_permissions: 'Sann ceadanna',
    remove_permission: 'Bain an cead',
    remove_confirmation:
      'Má bhaintear an cead seo, caillfidh an t-úsáideoir a bhfuil an ról eagraíochta seo aige an rochtain a thug an cead seo.',
    removed: 'Baineadh an cead {{name}} den ról eagraíochta seo',
    assign_description:
      'Sann ceadanna do na róil san eagraíocht seo. Is féidir ceadanna eagraíochta agus ceadanna API araon a áireamh.',
    organization_permissions: 'Ceadanna eagraíochta',
    api_permissions: 'Ceadanna API',
    assign_organization_permissions: 'Sann ceadanna eagraíochta',
    assign_api_permissions: 'Sann ceadanna API',
  },
  general: {
    tab: 'Ginearálta',
    settings: 'Socruithe',
    description:
      "Is grúpa ceadanna é ról eagraíochta is féidir a shannadh d'úsáideoirí. Is féidir leis na ceadanna teacht ó cheadanna réamhshainithe na heagraíochta agus ó cheadanna API.",
    name_field: 'Ainm',
    description_field: 'Cur síos',
    description_field_placeholder: 'Úsáideoirí le ceadanna amharc amháin',
  },
};

export default Object.freeze(organization_role_details);
