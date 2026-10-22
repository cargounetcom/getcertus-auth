/* GetCertus addition (MPL-2.0, see GETCERTUS.md): admin console phrases. */
const organizations = {
  organization: 'Eagraíocht',
  page_title: 'Eagraíochtaí',
  title: 'Eagraíochtaí',
  subtitle:
    'Úsáidtear eagraíochtaí de ghnáth in aipeanna SaaS nó ilthionónta cosúil leo, agus léiríonn siad do chliaint: foirne, eagraíochtaí nó comhlachtaí iomlána. Is iad eagraíochtaí bunchloch fhíordheimhniú agus údarú B2B.',
  organization_template: 'Teimpléad eagraíochta',
  organization_id: 'Aitheantas na heagraíochta',
  members: 'Baill',
  machine_to_machine: 'Aipeanna meaisín go meaisín',
  branding: 'Brandáil',
  create_organization: 'Cruthaigh eagraíocht',
  setup_organization: "Socraigh d'eagraíocht",
  organization_list_placeholder_title: 'Eagraíocht',
  organization_list_placeholder_text:
    'Úsáidtear eagraíochtaí go minic mar dhea-chleachtas in aipeanna SaaS nó ilthionónta cosúil leo. Ligeann siad duit aipeanna a fhorbairt inar féidir le cliaint eagraíochtaí a chruthú agus a bhainistiú, cuireadh a thabhairt do bhaill agus róil a shannadh.',
  organization_name_placeholder: "M'eagraíocht",
  organization_description_placeholder: 'Cur síos gearr ar an eagraíocht',
  organization_permission: 'Cead eagraíochta',
  organization_permission_other: 'Ceadanna eagraíochta',
  create_permission_placeholder: 'Léigh stair na gcoinní',
  organization_role: 'Ról eagraíochta',
  organization_role_other: 'Róil eagraíochta',
  organization_role_description:
    "Is grúpa ceadanna é ról eagraíochta is féidir a shannadh d'úsáideoirí. Caithfidh na ceadanna teacht ó cheadanna réamhshainithe na heagraíochta.",
  role: 'Ról',
  search_placeholder: 'Cuardaigh de réir ainm nó aitheantas na heagraíochta',
  search_role_placeholder: 'Clóscríobh chun róil a chuardach agus a roghnú',
  empty_placeholder: '🤔 Níl aon {{entity}} socraithe agat fós.',
  organization_and_member: 'Eagraíocht agus ball',
  organization_and_member_description:
    'Is grúpa úsáideoirí é eagraíocht agus is féidir léi foirne, custaiméirí gnó agus comhlachtaí comhpháirtíochta a léiriú, agus is "ball" gach úsáideoir. Is féidir leo seo a bheith ina mbuneintitis chun do riachtanais ilthionónta a láimhseáil.',
  guide: {
    title: 'Tosaigh le treoracha',
    subtitle: "Cuir tús faoi luas le socruithe d'eagraíochta lenár dtreoracha",
    introduction: {
      title: 'Conas a oibríonn eagraíochtaí in GetCertus',
      section_1: {
        title: 'Is grúpa úsáideoirí (aitheantais) é eagraíocht',
      },
      section_2: {
        title: 'Tá an teimpléad eagraíochta deartha do rialú rochtana in aipeanna ilthionónta',
        description:
          'In aipeanna SaaS ilthionónta, is minic a roinneann go leor eagraíochtaí an teimpléad rialaithe rochtana céanna, lena n-áirítear ceadanna agus róil. In GetCertus, tugaimid "teimpléad eagraíochta" air.',
        permission_description:
          'Is éard is cead eagraíochta ann ná údarú chun rochtain a fháil ar acmhainn i gcomhthéacs eagraíochta.',
        role_description_deprecated:
          'Is grúpa ceadanna eagraíochta é ról eagraíochta is féidir a shannadh do bhaill.',
        role_description:
          'Is grúpa ceadanna eagraíochta nó ceadanna API é ról eagraíochta is féidir a shannadh do bhaill.',
      },
      section_3: {
        title: 'An féidir liom ceadanna API a shannadh do róil eagraíochta?',
        description:
          "Is féidir, is féidir leat ceadanna API a shannadh do róil eagraíochta. Tugann GetCertus an tsolúbthacht duit róil d'eagraíochta a bhainistiú go héifeachtach, ionas gur féidir leat ceadanna eagraíochta agus ceadanna API araon a áireamh sna róil sin.",
      },
      section_4: {
        title: 'Idirghníomhaigh leis an léaráid chun a fheiceáil conas a nasctar gach rud',
        description:
          'Glacaimis sampla. Tá John agus Sarah in eagraíochtaí éagsúla le róil éagsúla i ngach eagraíocht. Cuir an luch os cionn na modúl éagsúil agus féach cad a tharlaíonn.',
      },
    },
    organization_permissions: 'Ceadanna eagraíochta',
    organization_roles: 'Róil eagraíochta',
    admin: 'Riarthóir',
    member: 'Ball',
    guest: 'Aoi',
    role_description:
      'Roinneann an ról "{{role}}" an teimpléad eagraíochta céanna thar eagraíochtaí éagsúla.',
    john: 'John',
    john_tip:
      'Baineann John le dhá eagraíocht leis an ríomhphost "john@email.com" mar aon aitheantóir amháin. Is é riarthóir eagraíocht A é agus aoi in eagraíocht B.',
    sarah: 'Sarah',
    sarah_tip:
      'Baineann Sarah le heagraíocht amháin leis an ríomhphost "sarah@email.com" mar aon aitheantóir amháin. Is í riarthóir eagraíocht B í.',
  },
};

export default Object.freeze(organizations);
