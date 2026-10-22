/* GetCertus addition (MPL-2.0, see GETCERTUS.md): admin console phrases. */
const profile = {
  link_account: {
    anonymous: 'Gan ainm',
  },
  delete_account: {
    title: 'SCRIOS AN CUNTAS',
    label: 'Scrios an cuntas',
    description:
      "Má scriosann tú an cuntas, bainfear d'fhaisnéis phearsanta, sonraí úsáideora agus cumraíocht ar fad. Ní féidir é seo a chealú.",
    button: 'Scrios an cuntas',
    p: {
      has_issue:
        'Is oth linn gur mian leat do chuntas a scriosadh. Sular féidir leat é a scriosadh, ní mór duit na fadhbanna seo a leanas a réiteach.',
      after_resolved:
        'Nuair a bheidh na fadhbanna réitithe, is féidir leat do chuntas a scriosadh. Ná bíodh leisce ort teagmháil a dhéanamh linn má theastaíonn cabhair uait.',
      check_information:
        'Is oth linn gur mian leat do chuntas a scriosadh. Seiceáil an fhaisnéis seo a leanas go cúramach sula leanann tú ar aghaidh.',
      remove_all_data:
        'Má scriosann tú an cuntas, bainfear na sonraí go léir fút as GetCertus Cloud go buan. Déan cúltaca de shonraí tábhachtacha sula leanann tú ar aghaidh.',
      confirm_information:
        'Deimhnigh go bhfuil an fhaisnéis thuas mar a bhí súil agat. Nuair a bheidh an cuntas scriosta, ní bheidh muid in ann é a aisghabháil.',
      has_admin_role:
        'Ós rud é go bhfuil ról riarthóra agat sa tionónta seo a leanas, scriosfar é in éineacht le do chuntas:',
      has_admin_role_other:
        'Ós rud é go bhfuil ról riarthóra agat sna tionóntaí seo a leanas, scriosfar iad in éineacht le do chuntas:',
      quit_tenant: 'Tá tú ar tí an tionónta seo a leanas a fhágáil:',
      quit_tenant_other: 'Tá tú ar tí na tionóntaí seo a leanas a fhágáil:',
    },
    issues: {
      paid_plan: 'Tá plean íoctha ag an tionónta seo a leanas; cealaigh an síntiús ar dtús:',
      paid_plan_other:
        'Tá pleananna íoctha ag na tionóntaí seo a leanas; cealaigh na síntiúis ar dtús:',
      subscription_status: 'Tá fadhb le stádas an tsíntiúis ag an tionónta seo a leanas:',
      subscription_status_other:
        'Tá fadhbanna le stádas an tsíntiúis ag na tionóntaí seo a leanas:',
      open_invoice: 'Tá sonrasc gan íoc ag an tionónta seo a leanas:',
      open_invoice_other: 'Tá sonraisc gan íoc ag na tionóntaí seo a leanas:',
    },
    error_occurred: 'Tharla earráid',
    error_occurred_description: 'Chuaigh rud éigin amú agus do chuntas á scriosadh:',
    request_id: 'Aitheantas an iarratais: {{requestId}}',
    try_again_later:
      'Bain triail eile as ar ball. Má leanann an fhadhb, déan teagmháil le foireann GetCertus agus luaigh aitheantas an iarratais.',
    final_confirmation: 'Deimhniú deiridh',
    about_to_start_deletion: 'Tá tú ar tí an próiseas scriosta a thosú, agus ní féidir é a chealú.',
    permanently_delete: 'Scrios go buan',
  },
  fields: {
    name: 'Ainm',
    name_description:
      'Ainm iomlán an úsáideora i bhfoirm inléite, lena n-áirítear gach cuid den ainm (m.sh., “Seán Ó Murchú”).',
    avatar: 'Abhatár',
    avatar_description: "URL d'íomhá abhatáir an úsáideora.",
    familyName: 'Sloinne',
    familyName_description: 'Sloinne an úsáideora (m.sh., "Ó Murchú").',
    givenName: 'Céadainm',
    givenName_description: 'Céadainm an úsáideora (m.sh., "Seán").',
    middleName: 'Ainm láir',
    middleName_description: 'Ainm láir an úsáideora (m.sh., "Pádraig").',
    nickname: 'Leasainm',
    nickname_description:
      "Ainm neamhfhoirmiúil an úsáideora, a d'fhéadfadh a bheith difriúil ón ainm dlíthiúil.",
    preferredUsername: 'Ainm úsáideora roghnaithe',
    preferredUsername_description:
      'Aitheantóir gearr ar fearr leis an úsáideoir a bheith á thabhairt air.',
    profile: 'Próifíl',
    profile_description:
      'URL de leathanach próifíle an úsáideora (m.sh., próifíl ar na meáin shóisialta).',
    website: 'Suíomh gréasáin',
    website_description: 'URL de shuíomh gréasáin pearsanta nó blag an úsáideora.',
    gender: 'Inscne',
    gender_description:
      'An inscne lena n-ionannaíonn an t-úsáideoir é féin (m.sh., "Bean", "Fear", "Neamhdhénártha")',
    birthdate: 'Dáta breithe',
    birthdate_description:
      'Dáta breithe an úsáideora i bhformáid shonraithe (m.sh., "MM-dd-yyyy").',
    zoneinfo: 'Crios ama',
    zoneinfo_description:
      'Crios ama an úsáideora i bhformáid IANA (m.sh., "America/New_York" nó "Europe/Paris").',
    locale: 'Teanga',
    locale_description: 'Teanga an úsáideora i bhformáid IETF BCP 47 (m.sh., "en-US" nó "zh-CN").',
    address: {
      formatted: 'Seoladh',
      streetAddress: 'Seoladh sráide',
      locality: 'Baile',
      region: 'Contae',
      postalCode: 'Éirchód',
      country: 'Tír',
    },
    address_description:
      'Seoladh iomlán an úsáideora i bhfoirm inléite, lena n-áirítear gach cuid den seoladh (m.sh., "123 Main St, Anytown, USA 12345").',
    fullname: 'Ainm iomlán',
    fullname_description:
      'Comhcheanglaíonn sé familyName, givenName agus middleName go solúbtha de réir na cumraíochta.',
  },
};

export default Object.freeze(profile);
