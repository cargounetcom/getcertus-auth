/* GetCertus addition (MPL-2.0, see GETCERTUS.md): admin console phrases. */
const oss_onboarding = {
  page_title: 'Ionduchtú',
  title: 'Beagán fút féin',
  description:
    'Inis dúinn beagán fút féin agus faoi do thionscadal. Cabhraíonn sé seo linn GetCertus níos fearr a thógáil do chách.',
  email: {
    label: 'Seoladh ríomhphoist',
    description:
      'Úsáidfimid an seoladh seo má bhíonn orainn teagmháil a dhéanamh leat faoi do chuntas.',
    placeholder: 'email@example.com',
  },
  newsletter: 'Faigh nuashonruithe táirge, comhairlí slándála agus ábhar roghnaithe ó GetCertus.',
  project: {
    label: 'Táim ag úsáid GetCertus le haghaidh',
    personal: 'Tionscadal pearsanta',
    company: 'Tionscadal comhlachta',
  },
  project_name: {
    label: 'Ainm an tionscadail',
    placeholder: 'Mo thionscadal',
  },
  company_name: {
    label: 'Ainm an chomhlachta',
    placeholder: 'Acme.co',
  },
  company_size: {
    label: 'Cén méid atá i do chomhlacht?',
  },
  errors: {
    email_required: 'Tá seoladh ríomhphoist riachtanach',
    email_invalid: 'Cuir isteach seoladh ríomhphoist bailí',
    project_name_too_long: 'Ní féidir le hainm an tionscadail a bheith níos faide ná 200 carachtar',
  },
};

export default Object.freeze(oss_onboarding);
