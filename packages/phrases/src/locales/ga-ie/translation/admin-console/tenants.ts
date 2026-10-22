/* GetCertus addition (MPL-2.0, see GETCERTUS.md): admin console phrases. */
const tenants = {
  title: 'Socruithe',
  description: "Bainistigh socruithe an tionónta go héifeachtach agus saincheap d'fhearann.",
  oss_description:
    "Athraigh socruithe do chuntais agus bainistigh d'fhaisnéis phearsanta anseo chun do chuntas a choinneáil slán.",
  tabs: {
    settings: 'Socruithe',
    members: 'Baill',
    domains: 'Fearainn',
    oidc_configs: 'Cumraíochtaí OIDC',
    subscription: 'Plean agus billeáil',
    billing_history: 'Stair billeála',
    license: 'Ceadúnas',
  },
  license: {
    purchase_title: 'PLEANANNA FÉINÓSTÁILTE',
    purchase_description:
      "Díghlasálann Pro agus Enterprise féinóstáilte gnéithe íoctha ar do chás féin, mar shampla brandáil GetCertus a cheilt, do chomhéadan féin a úsáid, comhoibriú sa Console agus feidhmchláir SAML gan teorainn. Ceannaigh plean chun d'eochair cheadúnais a fháil.",
    purchase_button: 'Féach ar phleananna féinóstáilte',
    install_title: 'SUITEÁIL CEADÚNAS',
    install_description:
      'Greamaigh an eochair cheadúnais a fuair tú tar éis plean féinóstáilte a cheannach.',
    install_button: 'Suiteáil ceadúnas',
    key_field: 'Eochair cheadúnais',
    key_field_description:
      'Fíoraítear an eochair ar do chás agus ní fhágann sí riamh é. Déan teagmháil le GetCertus le haghaidh eochair nua má tá an ceann atá agat imithe in éag.',
    key_placeholder: "Greamaigh d'eochair cheadúnais anseo",
    installed_toast: 'Suiteáladh an ceadúnas.',
    details_title: 'CEADÚNAS',
    details_description: 'An ceadúnas atá suiteáilte ar an gcás seo agus a bhfuil ar fáil leis.',
    plan_field: 'Plean',
    environment_field: 'Timpeallacht',
    environment_production: 'Táirgeadh',
    environment_non_production: 'Neamhtháirgeadh',
    expires_at_field: 'Rachaidh in éag ar',
    installed_at_field: 'Suiteáilte ar',
    last_refreshed_at_field: 'Athnuaite go deireanach ar',
    grace_ends_at_field: 'Críochnaíonn an tréimhse chairde ar',
    refresh_expired_description:
      'Chuaigh an eochair cheadúnais in éag ar {{expiresAt}}. Fanfaidh na gnéithe ceadúnaithe ar fáil go dtí {{graceEndsAt}} fad a bhíonn GetCertus ag iarraidh í a athnuachan.',
    refresh_refused_description:
      'Diúltaíodh athnuachan an cheadúnais toisc go bhfuil an ceadúnas {{reason}}. Fanfaidh na gnéithe ceadúnaithe ar fáil go dtí {{graceEndsAt}}.',
    refusal_reason_canceled: 'cealaithe',
    refusal_reason_unpaid: 'gan íoc',
    refusal_reason_expired: 'imithe in éag',
    refusal_reason_revoked: 'cúlghairthe',
    refusal_reason_unknown: 'nach bhfuil ar fáil',
    grace_expired_description:
      "Chríochnaigh tréimhse chairde an cheadúnais ar {{graceEndsAt}}. D'fhill an imscaradh seo ar réamhshocruithe OSS. Déan teagmháil le GetCertus le haghaidh eochair cheadúnais nua agus suiteáil arís í.",
    get_fresh_key_button: 'Faigh eochair cheadúnais nua',
    replace_button: 'Athchuir an ceadúnas',
  },
  members: {
    card_title: 'Bainistigh tionóntaí níos sláine le GetCertus Cloud',
    card_description:
      'Cuir riarthóirí nó comhoibrithe le do thionónta gan cuntas riarthóra amháin a roinnt.',
    card_action: 'Fiosraigh GetCertus Cloud',
    self_hosted_card_title: 'Bainistigh tionóntaí níos sláine le pleananna féinóstáilte',
    self_hosted_card_description:
      'Cuir riarthóirí nó comhoibrithe le do thionónta gan cuntas riarthóra amháin a roinnt.',
    self_hosted_card_action: 'Fiosraigh pleananna féinóstáilte',
  },
  settings: {
    title: 'SOCRUITHE',
    description:
      'Socraigh ainm an tionónta agus féach ar réigiún óstála na sonraí agus ar chineál an tionónta.',
    tenant_id: 'Aitheantas an tionónta',
    tenant_name: 'Ainm an tionónta',
    tenant_instance: 'Roghnaigh do chás',
    tenant_instance_description:
      'Roghnaigh cá n-óstálfar do thionónta. Roghnaigh GetCertus Cloud le haghaidh bonneagar poiblí roinnte, nó cás príobháideach le haghaidh acmhainní tiomnaithe.',
    tenant_region: 'Réigiún sonraí',
    tenant_region_description:
      'An suíomh fisiceach ina n-óstáiltear acmhainní do thionónta (úsáideoirí, aipeanna, srl.). Ní féidir é seo a athrú tar éis é a chruthú.',
    tenant_region_tip: 'Óstáiltear acmhainní do thionónta i {{region}}. <a>Tuilleadh eolais</a>',
    environment_tag_development: 'Dev',
    environment_tag_production: 'Prod',
    tenant_type: 'Cineál tionónta',
    development_description:
      'Le haghaidh tástála amháin; níor cheart é a úsáid i dtáirgeadh. Níl síntiús ag teastáil. Tá gach gné Pro ann, ach le teorainneacha ar nós meirge sínithe isteach.',
    production_description:
      "Ceaptha d'aipeanna a úsáideann úsáideoirí deiridh; d'fhéadfadh síntiús íoctha a bheith ag teastáil.",
    tenant_info_saved: 'Sábháladh faisnéis an tionónta.',
    tenant_mfa: 'Fíordheimhniú ilfhachtóra',
    tenant_mfa_description:
      'Éiligh ar bhaill fíordheimhniú ilfhachtóra a shocrú chun rochtain a fháil ar an tionónta seo.',
    oss_description: 'Bainistigh conas a fhaigheann baill rochtain ar an Console ar an gcás seo.',
    tenant_mfa_confirm_title: 'MFA a éileamh ar gach ball?',
    tenant_mfa_confirm_description:
      'Níor shocraigh na baill seo MFA fós. Fanfaidh siad sínithe isteach, agus iarrfar orthu é a shocrú an chéad uair eile a shíníonn siad isteach:',
    tenant_mfa_confirm_self:
      'Níor shocraigh tusa MFA ach oiread. Socraigh é i socruithe do chuntais roimh do chéad síniú isteach eile.',
    tenant_mfa_confirm_button: 'Éiligh MFA',
    tenant_mfa_setup_required:
      'Éilíonn an tionónta seo fíordheimhniú ilfhachtóra. Socraigh anois é, nó iarrfar ort é a dhéanamh an chéad uair eile a shíníonn tú isteach.',
    tenant_mfa_setup_action: 'Socraigh MFA',
    enterprise_sso: 'Enterprise SSO',
    enterprise_sso_description:
      "Ar fáil ar phleananna íoctha. Déan teagmháil linn chun enterprise SSO a chumasú ionas gur féidir le gach ball síniú isteach sa GetCertus Cloud Console trí sholáthraí aitheantais d'eagraíochta.",
  },
  full_env_tag: {
    development: 'Forbairt',
    production: 'Táirgeadh',
  },
  deletion_card: {
    title: 'SCRIOS',
    tenant_deletion: 'Scrios an tionónta',
    tenant_deletion_description:
      'Má scriostar an tionónta, bainfear gach sonra úsáideora agus cumraíocht ghaolmhar go buan. Bí cúramach.',
    tenant_deletion_button: 'Scrios an tionónta',
  },
  leave_tenant_card: {
    title: 'FÁG',
    leave_tenant: 'Fág an tionónta',
    leave_tenant_description:
      'Fanfaidh gach acmhainn sa tionónta, ach ní bheidh rochtain agat ar an tionónta seo a thuilleadh.',
    last_admin_note:
      'Chun an tionónta seo a fhágáil, cinntigh go bhfuil ról riarthóra ag ball amháin eile ar a laghad.',
  },
  create_modal: {
    title: 'Cruthaigh tionónta',
    subtitle: 'Cruthaigh tionónta nua a bhfuil acmhainní agus úsáideoirí scoite aige.',
    tenant_id: 'Aitheantas an tionónta',
    tenant_usage_purpose: 'Cad chuige ar mian leat an tionónta seo a úsáid?',
    development_description:
      'Le haghaidh tástála amháin; níor cheart é a úsáid i dtáirgeadh. Níl síntiús ag teastáil.',
    development_description_for_private_regions:
      'Le haghaidh tástála amháin; níor cheart é a úsáid i dtáirgeadh.',
    development_hint: 'Tá gach gné Pro ann, ach le teorainneacha ar nós meirge sínithe isteach.',
    production_description:
      "Le húsáid ag úsáideoirí deiridh; d'fhéadfadh síntiús íoctha a bheith ag teastáil.",
    available_plan: 'Plean ar fáil:',
    create_button: 'Cruthaigh tionónta',
    tenant_name_placeholder: 'Mo thionónta',
    tenant_created: 'Cruthaíodh an tionónta.',
    invitation_failed:
      'Theip ar roinnt cuirí a sheoladh. Bain triail eile as níos déanaí i Socruithe -> Baill.',
    tenant_type_description: 'Ní féidir é seo a athrú tar éis é a chruthú.',
    tenant_id_invalid:
      'Ní féidir ach litreacha beaga, uimhreacha agus fleiscíní a bheith in aitheantas tionónta, agus ní féidir leis a bheith níos faide ná {{max}} carachtar.',
    tenant_id_placeholder: 'Aitheantas do thionónta',
    tenant_id_tip:
      'Saincheap aitheantas an tionónta. Má fhágtar folamh é, ginfidh GetCertus aitheantas réamhshocraithe. Ní féidir aitheantas an tionónta a athrú tar éis é a chruthú.',
  },
  dev_tenant_migration: {
    title:
      'Is féidir leat ár ngnéithe Pro a thriail saor in aisce anois trí "thionónta forbartha" nua a chruthú!',
    affect_title: 'Cén tionchar a bheidh aige seo ort?',
    hint_1:
      'Táimid ag cur dhá chineál tionónta nua in ionad na seanchlibeanna <strong>timpeallachta</strong>: <strong>“Forbairt”</strong> agus <strong>“Táirgeadh”</strong>.',
    hint_2:
      'Chun aistriú réidh agus feidhmiú gan bhriseadh a chinntiú, ardófar gach tionónta a cruthaíodh go luath go dtí an cineál tionónta <strong>Táirgeadh</strong> in éineacht le do shíntiús roimhe seo.',
    hint_3: 'Ná bí buartha, fanfaidh do shocruithe eile go léir mar an gcéanna.',
    about_tenant_type: 'Faoin gcineál tionónta',
  },
  delete_modal: {
    title: 'Scrios an tionónta',
    description_line1:
      'An bhfuil tú cinnte gur mian leat do thionónta "<span>{{name}}</span>" leis an gclib timpeallachta "<span>{{tag}}</span>" a scriosadh? Ní féidir é seo a chealú, agus scriosfar do shonraí agus faisnéis an tionónta go léir go buan.',
    description_line2:
      "Sula scriosann tú an tionónta, b'fhéidir go bhféadfaimis cabhrú leat. <span><a>Déan teagmháil linn trí ríomhphost</a></span>",
    description_line3:
      'Más mian leat leanúint ar aghaidh, cuir isteach ainm an tionónta "<span>{{name}}</span>" le deimhniú.',
    delete_button: 'Scrios go buan',
    cannot_delete_title: 'Ní féidir an tionónta seo a scriosadh',
    cannot_delete_description:
      'Ár leithscéal, ní féidir leat an tionónta seo a scriosadh faoi láthair. Cinntigh go bhfuil tú ar an bplean saor in aisce agus go bhfuil gach bille amuigh íoctha agat.',
  },
  leave_tenant_modal: {
    description: 'An bhfuil tú cinnte gur mian leat an tionónta seo a fhágáil?',
    leave_button: 'Fág',
  },
  tenant_landing_page: {
    title: 'Níor chruthaigh tú tionónta fós',
    description:
      'Chun tosú ag cumrú do thionscadail le GetCertus, cruthaigh tionónta nua. Más mian leat síniú amach nó do chuntas a scriosadh, cliceáil ar an gcnaipe abhatáir sa chúinne uachtarach ar dheis.',
    create_tenant_button: 'Cruthaigh tionónta',
  },
  status: {
    mau_exceeded: 'MAU sáraithe',
    token_exceeded: 'Comharthaí sáraithe',
    suspended: 'Ar fionraí',
    overdue: 'Thar téarma',
  },
  tenant_suspended_page: {
    title: 'Tionónta ar fionraí. Déan teagmháil linn chun rochtain a athbhunú.',
    description_1:
      'Is oth linn a chur in iúl duit gur cuireadh cuntas do thionónta ar fionraí go sealadach mar gheall ar mhí-úsáid, lena n-áirítear teorainneacha MAU a shárú, íocaíochtaí thar téarma nó gníomhartha neamhúdaraithe eile.',
    description_2:
      'Má theastaíonn tuilleadh soiléirithe uait, má tá ceisteanna agat, nó más mian leat feidhmiúlacht iomlán a athbhunú agus do thionóntaí a dhíbhlocáil, déan teagmháil linn láithreach.',
  },
  production_tenant_notification: {
    text: 'Tá tú i dtionónta forbartha le haghaidh tástála saor in aisce. Cruthaigh tionónta táirgthe chun dul beo.',
    action: 'Cruthaigh tionónta',
  },
};

export default Object.freeze(tenants);
