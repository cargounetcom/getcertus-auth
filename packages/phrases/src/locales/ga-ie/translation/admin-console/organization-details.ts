/* GetCertus addition (MPL-2.0, see GETCERTUS.md): admin console phrases. */
const organization_details = {
  page_title: 'Sonraí na heagraíochta',
  delete_confirmation:
    'Nuair a scriosfar í, caillfidh gach ball a mballraíocht agus a róil san eagraíocht seo. Ní féidir é seo a chealú.',
  organization_id: 'Aitheantas na heagraíochta',
  settings_description:
    "Léiríonn eagraíochtaí na foirne, na custaiméirí gnó agus na comhlachtaí comhpháirtíochta ar féidir leo rochtain a fháil ar d'fheidhmchláir.",
  name_placeholder: 'Ainm na heagraíochta; ní gá dó a bheith uathúil.',
  description_placeholder: 'Cur síos ar an eagraíocht.',
  member: 'Ball',
  member_other: 'Baill',
  add_members_to_organization: 'Cuir baill leis an eagraíocht {{name}}',
  add_members_to_organization_description:
    'Aimsigh úsáideoirí oiriúnacha trí ainm, ríomhphost, guthán nó aitheantas úsáideora a chuardach. Ní thaispeántar baill atá ann cheana sna torthaí cuardaigh.',
  add_with_organization_role: 'Cuir leis le ról(anna) eagraíochta',
  user: 'Úsáideoir',
  application: 'Feidhmchlár',
  application_other: 'Feidhmchláir',
  add_applications_to_organization: 'Cuir feidhmchláir leis an eagraíocht {{name}}',
  add_applications_to_organization_description:
    'Aimsigh feidhmchláir oiriúnacha trí aitheantas, ainm nó cur síos an aip a chuardach. Ní thaispeántar feidhmchláir atá ann cheana sna torthaí cuardaigh.',
  at_least_one_application: 'Tá feidhmchlár amháin ar a laghad riachtanach.',
  remove_application_from_organization: 'Bain an feidhmchlár den eagraíocht',
  remove_application_from_organization_description:
    'Nuair a bhainfear é, caillfidh an feidhmchlár a cheangal agus a róil san eagraíocht seo. Ní féidir é seo a chealú.',
  search_application_placeholder: 'Cuardaigh de réir aitheantas, ainm nó cur síos na haipe',
  roles: 'Róil eagraíochta',
  authorize_to_roles: 'Údaraigh {{name}} chun rochtain a fháil ar na róil seo a leanas:',
  edit_organization_roles: 'Cuir róil eagraíochta in eagar',
  edit_organization_roles_title: 'Cuir róil eagraíochta {{name}} in eagar',
  remove_user_from_organization: 'Bain an t-úsáideoir den eagraíocht',
  remove_user_from_organization_description:
    'Nuair a bhainfear é, caillfidh an t-úsáideoir a bhallraíocht agus a róil san eagraíocht seo. Ní féidir é seo a chealú.',
  search_user_placeholder: 'Cuardaigh de réir ainm, ríomhphost, guthán nó aitheantas úsáideora',
  at_least_one_user: 'Tá úsáideoir amháin ar a laghad riachtanach.',
  organization_roles_tooltip: 'Na róil a sannadh don {{type}} san eagraíocht seo.',
  custom_data: 'Sonraí saincheaptha',
  custom_data_tip:
    'Is réad JSON iad sonraí saincheaptha ar féidir iad a úsáid chun sonraí breise a bhaineann leis an eagraíocht a stóráil.',
  invalid_json_object: 'Réad JSON neamhbhailí.',
  branding: {
    name: 'brandáil',
    description: 'Saincheap an síniú isteach ar leibhéal na heagraíochta.',
    organization_level_sie: 'Síniú isteach ar leibhéal na heagraíochta',
    organization_level_sie_switch:
      'Cumasaigh an síniú isteach ar leibhéal na heagraíochta agus socraigh brandáil shonrach don eagraíocht. Má tá sé díchumasaithe, úsáidfear an síniú isteach ar leibhéal an fheidhmchláir ar dtús, agus ansin an síniú isteach ginearálta.',
    logo: 'Lógónna na heagraíochta',
    logo_tooltip:
      'Is féidir leat aitheantas na heagraíochta a sheoladh chun an lógó seo a thaispeáint sa síniú isteach; teastaíonn leagan dorcha den lógó má tá mód dorcha cumasaithe i socruithe an tsínithe isteach ghinearálta. <a>Tuilleadh eolais</a>',
  },
  jit: {
    title: 'Soláthar díreach in am',
    description:
      'Is féidir le húsáideoirí dul isteach san eagraíocht go huathoibríoch agus róil a fháil an chéad uair a shíníonn siad isteach trí mhodhanna fíordheimhnithe áirithe. Is féidir leat riachtanais a shocrú don soláthar díreach in am.',
    email_domain: 'Soláthar de réir fearann ríomhphoist',
    email_domain_description:
      'Rachaidh úsáideoirí nua a chláraíonn le seoltaí ríomhphoist fíoraithe, nó trí shíniú isteach sóisialta le seoltaí ríomhphoist fíoraithe, isteach san eagraíocht go huathoibríoch. <a>Tuilleadh eolais</a>',
    email_domain_placeholder:
      'Cuir isteach fearainn ríomhphoist le haghaidh soláthar díreach in am',
    invalid_domain: 'Fearann neamhbhailí',
    domain_already_added: 'Cuireadh an fearann leis cheana',
    sso_enabled_domain_warning:
      'Chuir tú isteach fearann ríomhphoist amháin nó níos mó atá ceangailte le enterprise SSO. Leanfaidh úsáideoirí leis na ríomhphoist seo an gnáthshreabhadh SSO agus ní chuirfear leis an eagraíocht seo iad mura bhfuil soláthar enterprise SSO cumraithe.',
    enterprise_sso: 'Soláthar enterprise SSO',
    no_enterprise_connector_set:
      'Níor shocraigh tú aon nascóir enterprise SSO fós. Cuir nascóirí leis ar dtús chun soláthar enterprise SSO a chumasú. <a>Socraigh</a>',
    add_enterprise_connector: 'Cuir nascóir enterprise leis',
    enterprise_sso_description:
      'Rachaidh úsáideoirí nua nó úsáideoirí atá ann cheana a shíníonn isteach trí enterprise SSO den chéad uair isteach san eagraíocht go huathoibríoch. <a>Tuilleadh eolais</a>',
    organization_roles: 'Róil réamhshocraithe eagraíochta',
    organization_roles_description:
      "Sann róil d'úsáideoirí nuair a théann siad isteach san eagraíocht trí sholáthar díreach in am.",
  },
  mfa: {
    title: 'Fíordheimhniú ilfhachtóra (MFA)',
    tip: "Nuair a bhíonn MFA riachtanach, diúltófar d'úsáideoirí nach bhfuil MFA cumraithe acu nuair a dhéanann siad iarracht comhartha eagraíochta a mhalartú. Ní théann an socrú seo i bhfeidhm ar fhíordheimhniú úsáideoirí.",
    description:
      'Éiligh ar úsáideoirí fíordheimhniú ilfhachtóra a chumrú chun rochtain a fháil ar an eagraíocht seo.',
    no_mfa_warning:
      'Níl aon mhodh fíordheimhnithe ilfhachtóra cumasaithe do do thionónta. Ní bheidh úsáideoirí in ann rochtain a fháil ar an eagraíocht seo go dtí go mbeidh <a>modh fíordheimhnithe ilfhachtóra</a> amháin ar a laghad cumasaithe.',
  },
};

export default Object.freeze(organization_details);
