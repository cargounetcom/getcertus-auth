/* GetCertus addition (MPL-2.0, see GETCERTUS.md): admin console phrases. */
const organization_template = {
  title: 'Teimpléad eagraíochta',
  subtitle:
    "In aipeanna SaaS ilthionónta, sainmhíníonn teimpléad eagraíochta polasaithe rialaithe rochtana roinnte (ceadanna agus róil) d'eagraíochtaí iomadúla.",
  roles: {
    tab_name: 'Róil eagraíochta',
    search_placeholder: 'Cuardaigh de réir ainm róil',
    create_title: 'Cruthaigh ról eagraíochta',
    role_column: 'Ról eagraíochta',
    permissions_column: 'Ceadanna',
    placeholder_title: 'Ról eagraíochta',
    placeholder_description:
      "Is grúpa ceadanna é ról eagraíochta is féidir a shannadh d'úsáideoirí. Caithfidh na ceadanna teacht ó cheadanna réamhshainithe na heagraíochta.",
    create_modal: {
      title: 'Cruthaigh ról eagraíochta',
      create: 'Cruthaigh ról',
      name: 'Ainm an róil',
      description: 'Cur síos',
      type: 'Cineál róil',
      created: 'Cruthaíodh an ról eagraíochta {{name}}.',
    },
  },
  permissions: {
    tab_name: 'Ceadanna eagraíochta',
    search_placeholder: 'Cuardaigh de réir ainm ceada',
    create_org_permission: 'Cruthaigh cead eagraíochta',
    permission_column: 'Cead eagraíochta',
    description_column: 'Cur síos',
    placeholder_title: 'Cead eagraíochta',
    placeholder_description:
      'Is éard is cead eagraíochta ann ná údarú chun rochtain a fháil ar acmhainn i gcomhthéacs eagraíochta.',
    delete_confirm:
      'Má scriostar an cead seo, caillfidh gach ról eagraíochta ina bhfuil sé é, agus caillfidh úsáideoirí a raibh sé acu an rochtain a thug sé dóibh.',
    create_title: 'Cruthaigh cead eagraíochta',
    edit_title: 'Cuir cead eagraíochta in eagar',
    permission_field_name: 'Ainm an cheada',
    description_field_name: 'Cur síos',
    description_field_placeholder: 'Léigh stair na gcoinní',
    create_permission: 'Cruthaigh cead',
    created: 'Cruthaíodh an cead eagraíochta {{name}}.',
  },
};

export default Object.freeze(organization_template);
