/* GetCertus addition (MPL-2.0, see GETCERTUS.md): admin console phrases. */
const connector_details = {
  page_title: 'Sonraí an nascóra',
  back_to_connectors: 'Ar ais chuig nascóirí',
  check_readme: 'Féach ar an README',
  settings: 'Socruithe ginearálta',
  settings_description:
    'Comhtháthaigh soláthraithe tríú páirtí le haghaidh síniú isteach sóisialta tapa agus nascadh cuntas sóisialta',
  setting_description_with_token_storage_supported:
    'Comhtháthaigh soláthraithe tríú páirtí le haghaidh síniú isteach sóisialta tapa, nascadh cuntas sóisialta agus rochtain API.',
  email_connector_settings_description:
    'Comhtháthaigh le do sholáthraí ríomhphoist ionas gur féidir le húsáideoirí deiridh clárú agus síniú isteach gan phasfhocal trí ríomhphost.',
  parameter_configuration: 'Cumraíocht paraiméadar',
  test_connection: 'Tástáil',
  save_error_empty_config: 'Cuir isteach cumraíocht',
  send: 'Seol',
  send_error_invalid_format: 'Ionchur neamhbhailí',
  edit_config_label: 'Cuir isteach do JSON anseo',
  test_email_sender: 'Tástáil do nascóir ríomhphoist',
  test_sms_sender: 'Tástáil do nascóir SMS',
  test_email_placeholder: 'john.doe@example.com',
  test_sms_placeholder: '+1 555-123-4567',
  test_message_sent: 'Seoladh an teachtaireacht tástála',
  test_sender_description:
    'Úsáideann GetCertus an teimpléad "Generic" le haghaidh tástála. Gheobhaidh tú teachtaireacht má tá do nascóir cumraithe i gceart.',
  options_change_email: 'Athraigh an nascóir ríomhphoist',
  options_change_sms: 'Athraigh an nascóir SMS',
  connector_deleted: 'Scriosadh an nascóir',
  type_email: 'Nascóir ríomhphoist',
  type_sms: 'Nascóir SMS',
  type_social: 'Nascóir sóisialta',
  in_used_social_deletion_description:
    "Tá an nascóir seo in úsáid i d'eispéireas síniú isteach. Má scriosann tú é, bainfear síniú isteach le <name/> ó shocruithe an eispéiris síniú isteach. Beidh ort é a athchumrú má shocraíonn tú é a chur ar ais.",
  in_used_passwordless_deletion_description:
    "Tá an {{name}} seo in úsáid i d'eispéireas síniú isteach. Má scriosann tú é, ní oibreoidh d'eispéireas síniú isteach i gceart go dtí go réitíonn tú an choimhlint. Beidh ort é a athchumrú má shocraíonn tú é a chur ar ais.",
  deletion_description:
    'Tá tú ag baint an nascóra seo. Ní féidir é a chealú, agus beidh ort é a athchumrú má shocraíonn tú é a chur ar ais.',
  logto_email: {
    total_email_sent: 'Ríomhphoist seolta san iomlán: {{value, number}}',
    total_email_sent_tip:
      'Úsáideann GetCertus SendGrid le haghaidh ríomhphoist ionsuite slán agus cobhsaí. Tá sé saor in aisce go hiomlán. <a>Tuilleadh eolais</a>',
    hosted_email_usage: {
      daily: 'Go laethúil <value>{{usage, number}}</value> / {{limit, number}}',
      daily_unlimited: 'Go laethúil <value>{{usage, number}}</value>',
      monthly: 'Go míosúil <value>{{usage, number}}</value> / {{limit, number}}',
      monthly_unlimited: 'Go míosúil <value>{{usage, number}}</value>',
      tip: 'Tá teorainneacha laethúla agus míosúla ar an tseirbhís ríomhphoist ionsuite sna pleananna Saor in Aisce agus Forbartha.',
      banner: {
        approaching:
          'Tá tú ag druidim le teorainn seolta sheirbhís ríomhphoist ionsuite GetCertus. <provider>Nasc do sholáthraí ríomhphoist féin</provider>, nó <upgrade>uasghrádaigh do phlean</upgrade> chun leanúint den tseirbhís ríomhphoist ionsuite a úsáid.',
        reached:
          "Shroich tú teorainn seolta sheirbhís ríomhphoist ionsuite GetCertus, rud a d'fhéadfadh ríomhphoist síniú isteach a bhriseadh. <provider>Nasc do sholáthraí ríomhphoist féin</provider>, nó <upgrade>uasghrádaigh do phlean</upgrade> chun leanúint den tseirbhís ríomhphoist ionsuite a úsáid.",
      },
    },
    email_template_title: 'Teimpléad ríomhphoist',
    template_description:
      'Úsáideann an ríomhphost ionsuite teimpléid réamhshocraithe chun ríomhphoist fíoraithe a sheachadadh gan stró. Níl aon chumraíocht ag teastáil, agus is féidir leat bunfhaisnéis an bhranda a shaincheapadh.',
    template_description_link_text: 'Féach ar na teimpléid',
    description_action_text: 'Féach ar na teimpléid',
    from_email_field: 'Seoladh an tseoltóra',
    sender_name_field: 'Ainm an tseoltóra',
    sender_name_tip:
      'Saincheap ainm an tseoltóra do ríomhphoist. Má fhágtar folamh é, úsáidfear "Verification" mar ainm réamhshocraithe.',
    sender_name_placeholder: 'Ainm do sheoltóra',
    company_information_field: 'Faisnéis an chomhlachta',
    company_information_description:
      'Taispeáin ainm, seoladh nó cód poist do chomhlachta ag bun na ríomhphost chun iontaofacht a mhéadú.',
    company_information_placeholder: 'Bunfhaisnéis do chomhlachta',
    email_logo_field: 'Lógó ríomhphoist',
    email_logo_tip:
      'Taispeáin lógó do bhranda ag barr na ríomhphost. Úsáid an íomhá chéanna don mhód geal agus don mhód dorcha.',
    urls_not_allowed: 'Ní cheadaítear URLanna',
    test_notes: 'Úsáideann GetCertus an teimpléad “Generic” le haghaidh tástála.',
  },
  google_one_tap: {
    title: 'Google One Tap',
    description: 'Is bealach slán éasca é Google One Tap le síniú isteach ar do shuíomh gréasáin.',
    enable_google_one_tap: 'Cumasaigh Google One Tap',
    enable_google_one_tap_description:
      "Cumasaigh Google One Tap i d'eispéireas síniú isteach: lig d'úsáideoirí atá sínithe isteach ar a ngléas cheana clárú nó síniú isteach go tapa lena gcuntas Google.",
    configure_google_one_tap: 'Cumraigh Google One Tap',
    auto_select: 'Roghnaigh dintiúir go huathoibríoch más féidir',
    close_on_tap_outside:
      'Cealaigh an leid má chliceálann/má thapálann an t-úsáideoir taobh amuigh de',
    itp_support: 'Cumasaigh <a>eispéireas One Tap feabhsaithe i mbrabhsálaithe ITP</a>',
  },
  sign_in_experience: {
    in_use: 'Cumasaithe le haghaidh síniú isteach ',
    not_in_use: 'Díchumasaithe le haghaidh síniú isteach ',
  },
  email_logs: {
    title: 'Logaí ríomhphoist',
    time: 'Am',
    recipient: 'Faighteoir',
    recipient_placeholder: 'Cuardaigh de réir sheoladh iomlán an fhaighteora',
    template_type: 'Cineál teimpléid',
    status: 'Stádas',
    status_sent: 'Seolta',
    status_failed: 'Theip air',
    language_tag: 'Teanga',
    provider_message_id: 'ID teachtaireachta an tsoláthraí',
  },
};

export default Object.freeze(connector_details);
