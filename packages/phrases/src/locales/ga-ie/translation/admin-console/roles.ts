/* GetCertus addition (MPL-2.0, see GETCERTUS.md): admin console phrases. */
const roles = {
  page_title: 'Róil',
  title: 'Róil',
  subtitle:
    "Cuimsíonn róil ceadanna a chinneann cad is féidir le húsáideoir a dhéanamh. Úsáideann RBAC róil chun rochtain ar acmhainní a thabhairt d'úsáideoirí le haghaidh gníomhartha sonracha.",
  create: 'Cruthaigh ról',
  role_name: 'Ainm an róil',
  role_type: 'Cineál an róil',
  type_user: 'Úsáideoir',
  type_machine_to_machine: 'Meaisín go meaisín',
  role_description: 'Cur síos',
  role_name_placeholder: 'Cuir isteach ainm an róil',
  role_description_placeholder: 'Cuir isteach cur síos ar an ról',
  col_roles: 'Róil',
  col_type: 'Cineál',
  col_description: 'Cur síos',
  col_assigned_entities: 'Sannta',
  user_counts: '{{count}} úsáideoir',
  application_counts: '{{count}} feidhmchlár',
  user_count: '{{count}} úsáideoir',
  application_count: '{{count}} feidhmchlár',
  assign_permissions: 'Sann ceadanna',
  create_role_title: 'Cruthaigh ról',
  create_role_description: "Úsáid róil chun ceadanna a eagrú agus iad a shannadh d'úsáideoirí.",
  create_role_button: 'Cruthaigh ról',
  role_created: 'Cruthaíodh an ról {{name}}.',
  search: 'Cuardaigh de réir ainm róil, cur síos nó ID',
  placeholder_title: 'Róil',
  placeholder_description:
    "Is grúpaí ceadanna iad róil ar féidir iad a shannadh d'úsáideoirí. Cuir ceadanna leis ar dtús sula gcruthaíonn tú róil.",
  assign_roles: 'Sann róil',
  management_api_access_notification:
    'Le haghaidh rochtain ar GetCertus Management API, roghnaigh róil a bhfuil ceadanna Management API acu <flag/>.',
  with_management_api_access_tip:
    'Tá ceadanna GetCertus Management API sa ról meaisín go meaisín seo',
  role_creation_hint: 'Ní féidir leat an ról ceart a aimsiú? <a>Cruthaigh ról</a>',
};

export default Object.freeze(roles);
