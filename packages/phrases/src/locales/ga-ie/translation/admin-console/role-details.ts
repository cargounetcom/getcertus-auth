/* GetCertus addition (MPL-2.0, see GETCERTUS.md): admin console phrases. */
const role_details = {
  back_to_roles: 'Ar ais chuig róil',
  identifier: 'Aitheantóir',
  delete_description:
    'Bainfidh sé seo na ceadanna a bhaineann leis an ról seo ó na húsáideoirí lena mbaineann agus scriosfaidh sé an mhapáil idir róil, úsáideoirí agus ceadanna.',
  role_deleted: 'Scriosadh {{name}}.',
  general_tab: 'Ginearálta',
  users_tab: 'Úsáideoirí',
  m2m_apps_tab: 'Feidhmchláir meaisín go meaisín',
  permissions_tab: 'Ceadanna',
  settings: 'Socruithe',
  settings_description:
    "Is grúpaí ceadanna iad róil ar féidir iad a shannadh d'úsáideoirí. Bailíonn siad freisin ceadanna a shainmhínítear do APIanna éagsúla, rud a fhágann gur éifeachtaí ceadanna a chur leis, a bhaint nó a choigeartú ná iad a shannadh do gach úsáideoir ar leith.",
  field_name: 'Ainm',
  field_description: 'Cur síos',
  field_is_default: 'Ról réamhshocraithe',
  field_is_default_description:
    "Socraigh an ról seo mar ról réamhshocraithe d'úsáideoirí nua. Is féidir roinnt ról réamhshocraithe a shocrú. Bainfidh sé seo freisin le húsáideoirí a chruthaítear tríd an Management API.",
  type_m2m_role_tag: 'Meaisín go meaisín',
  type_user_role_tag: 'Úsáideoir',
  m2m_role_notification:
    "Sann an ról meaisín go meaisín seo d'fheidhmchlár meaisín go meaisín chun rochtain a thabhairt ar na hacmhainní API gaolmhara. <a>Cruthaigh feidhmchlár meaisín go meaisín</a> ar dtús mura bhfuil sin déanta agat cheana.",
  permission: {
    assign_button: 'Sann ceadanna',
    assign_title: 'Sann ceadanna',
    assign_subtitle:
      'Sann ceadanna don ról seo. Gheobhaidh an ról na ceadanna a cuireadh leis, agus gheobhaidh úsáideoirí leis an ról seo le hoidhreacht iad.',
    assign_form_field: 'Sann ceadanna',
    added_text: '{{count, number}} cead curtha leis',
    added_text_other: '{{count, number}} cead curtha leis',
    api_permission_count: '{{count, number}} cead',
    api_permission_count_other: '{{count, number}} cead',
    confirm_assign: 'Sann ceadanna',
    permission_assigned: 'Sannadh na ceadanna roghnaithe don ról seo',
    deletion_description:
      'Má bhaintear an cead seo, caillfidh úsáideoirí leis an ról seo an rochtain a thug sé.',
    permission_deleted: 'Baineadh an cead "{{name}}" ón ról seo',
    empty: 'Níl aon chead ar fáil',
  },
  users: {
    assign_button: 'Sann úsáideoirí',
    name_column: 'Úsáideoir',
    app_column: 'Feidhmchlár',
    latest_sign_in_column: 'Síniú isteach is déanaí',
    delete_description:
      'Fanfaidh sé i do bhonn úsáideoirí ach caillfidh sé an t-údarú don ról seo.',
    deleted: 'Baineadh {{name}} ón ról seo',
    assign_title: 'Sann úsáideoirí do {{name}}',
    assign_subtitle:
      'Aimsigh úsáideoirí oiriúnacha trí chuardach de réir ainm, ríomhphoist, fóin nó ID úsáideora.',
    assign_field: 'Sann úsáideoirí',
    confirm_assign: 'Sann úsáideoirí',
    assigned_toast_text: 'Sannadh na húsáideoirí roghnaithe don ról seo',
    empty: 'Níl aon úsáideoir ar fáil',
  },
  applications: {
    assign_button: 'Sann feidhmchláir meaisín go meaisín',
    name_column: 'Feidhmchlár',
    app_column: 'Feidhmchlár meaisín go meaisín',
    description_column: 'Cur síos',
    delete_description:
      "Fanfaidh sé i measc d'fheidhmchlár ach caillfidh sé an t-údarú don ról seo.",
    deleted: 'Baineadh {{name}} ón ról seo',
    assign_title: 'Sann feidhmchláir meaisín go meaisín do {{name}}',
    assign_subtitle:
      'Aimsigh feidhmchláir meaisín go meaisín oiriúnacha trí chuardach de réir ainm, cur síos nó ID feidhmchláir.',
    assign_field: 'Sann feidhmchláir meaisín go meaisín',
    confirm_assign: 'Sann feidhmchláir meaisín go meaisín',
    assigned_toast_text: 'Sannadh na feidhmchláir roghnaithe don ról seo',
    empty: 'Níl aon fheidhmchlár ar fáil',
  },
};

export default Object.freeze(role_details);
