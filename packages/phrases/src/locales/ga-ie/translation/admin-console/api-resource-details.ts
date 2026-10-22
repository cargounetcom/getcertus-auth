/* GetCertus addition (MPL-2.0, see GETCERTUS.md): admin console phrases. */
const api_resource_details = {
  page_title: 'Sonraí na hacmhainne API',
  back_to_api_resources: 'Ar ais chuig acmhainní API',
  general_tab: 'Ginearálta',
  permissions_tab: 'Ceadanna',
  settings: 'Socruithe',
  settings_description:
    "Léiríonn acmhainní API, ar a dtugtar Resource Indicators freisin, na spriocsheirbhísí nó na hacmhainní a iarrtar, de ghnáth athróg i bhformáid URI a sheasann d'aitheantas na hacmhainne.",
  management_api_settings_description:
    'Is bailiúchán cuimsitheach APIanna é GetCertus Management API a ligeann do riarthóirí réimse leathan tascanna aitheantais a bhainistiú, polasaithe slándála a fhorfheidhmiú agus rialacháin agus caighdeáin a chomhlíonadh.',
  management_api_notice:
    "Seasann an API seo d'aonán GetCertus agus ní féidir é a athrú ná a scriosadh. Cruthaigh feidhmchlár meaisín go meaisín chun GetCertus Management API a ghlaoch. <a>Tuilleadh eolais</a>",
  token_expiration_time_in_seconds: 'Am éaga an chomhartha (i soicindí)',
  token_expiration_time_in_seconds_placeholder: 'Cuir isteach am éaga an chomhartha',
  delete_description:
    'Ní féidir an gníomh seo a chealú. Scriosfar an acmhainn API go buan. Cuir isteach ainm na hacmhainne API <span>{{name}}</span> le deimhniú.',
  enter_your_api_resource_name: 'Cuir isteach ainm na hacmhainne API',
  api_resource_deleted: 'Scriosadh an acmhainn API {{name}}',
  permission: {
    create_button: 'Cruthaigh cead',
    create_title: 'Cruthaigh cead',
    create_subtitle: 'Sainmhínigh na ceadanna (scóip) a theastaíonn ón API seo.',
    confirm_create: 'Cruthaigh cead',
    edit_title: 'Cuir cead API in eagar',
    edit_subtitle: 'Sainmhínigh na ceadanna (scóip) a theastaíonn ón API {{resourceName}}.',
    name: 'Ainm an chead',
    name_placeholder: 'read:resource',
    forbidden_space_in_name: 'Ní cheadaítear spásanna in ainm an chead.',
    description: 'Cur síos',
    description_placeholder: 'Is féidir na hacmhainní a léamh',
    permission_created: 'Cruthaíodh an cead {{name}}',
    delete_description:
      'Má scriostar an cead seo, caillfidh an t-úsáideoir a raibh sé aige an rochtain a thug sé.',
    deleted: 'Scriosadh an cead "{{name}}".',
  },
};

export default Object.freeze(api_resource_details);
