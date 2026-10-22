/* GetCertus addition (MPL-2.0, see GETCERTUS.md): admin console phrases. */
const enterprise_sso = {
  page_title: 'SSO fiontair',
  title: 'SSO fiontair',
  subtitle: 'Nasc soláthraí aitheantais an fhiontair agus cumasaigh aonsíniú isteach.',
  create: 'Cuir nascóir fiontair leis',
  col_connector_name: 'Ainm an nascóra',
  col_type: 'Cineál',
  col_email_domain: 'Fearann ríomhphoist',
  placeholder_title: 'Nascóir fiontair',
  placeholder_description:
    'Cuireann GetCertus go leor soláthraithe aitheantais fiontair ionsuite ar fáil, agus is féidir leat do chuid féin a chruthú leis na prótacail SAML agus OIDC.',
  create_modal: {
    title: 'Cuir nascóir fiontair leis',
    text_divider: 'Nó saincheap do nascóir le prótacal caighdeánach.',
    connector_name_field_title: 'Ainm an nascóra',
    connector_name_field_placeholder:
      'M.sh., {ainm an chomhlachta} - {ainm an tsoláthraí aitheantais}',
    create_button_text: 'Cruthaigh nascóir',
  },
  guide: {
    subtitle: 'Treoir céim ar chéim chun soláthraí aitheantais an fhiontair a nascadh.',
    finish_button_text: 'Lean ar aghaidh',
  },
  basic_info: {
    title: 'Cumraigh do sheirbhís san IdP',
    description:
      'Cruthaigh comhtháthú feidhmchláir nua le SAML 2.0 i do sholáthraí aitheantais {{name}}. Ansin greamaigh an luach seo a leanas ann.',
    saml: {
      acs_url_field_name: 'URL na seirbhíse Assertion Consumer (Reply URL)',
      audience_uri_field_name: 'URI Audience (SP Entity ID)',
      entity_id_field_name: 'Entity ID an tSoláthraí Seirbhíse (SP)',
      entity_id_field_tooltip:
        'Is féidir leis an SP Entity ID a bheith in aon fhormáid teaghráin, de ghnáth URI nó URL mar aitheantóir, ach níl sé sin éigeantach.',
      acs_url_field_placeholder: 'https://your-domain.com/api/saml/callback',
      entity_id_field_placeholder: 'urn:your-domain.com:sp:saml:{serviceProviderId}',
      sign_auth_request: 'Sínigh an t-iarratas fíordheimhnithe',
      sign_auth_request_tooltip:
        'Síníonn GetCertus iarratais fíordheimhnithe SAML le teastas ginte. Ná cumasaigh ach má tá do sholáthraí aitheantais cumraithe chun iarratais sínithe a fhíorú.',
      signing_certificate_field_name: 'Teastas sínithe iarratas',
      signing_keys_empty: 'Níor gineadh aon eochracha sínithe.',
      generate_signing_key: 'Gin eochair nua',
      signing_key_generated: 'Gineadh an eochair shínithe.',
      signing_key_activated: 'Gníomhachtaíodh an eochair shínithe.',
      signing_key_deactivated: 'Díghníomhachtaíodh an eochair shínithe.',
      signing_key_deleted: 'Scriosadh an eochair shínithe.',
      sign_auth_request_warning:
        'Tar éis é a chumasú, gin eochair shínithe thíos agus cláraigh a teastas le do sholáthraí aitheantais (agus cuir fíorú iarratas sínithe ar siúl ansin). Go dtí go mbeidh an teastas cláraithe, teipfidh ar shíniú isteach tríd an nasc seo.',
    },
    oidc: {
      redirect_uri_field_name: 'URI atreoraithe (URL aisghlaoigh)',
      redirect_uri_field_description:
        'Is é an URI atreoraithe an áit a gcuirtear úsáideoirí tar éis fíordheimhniú SSO. Cuir an URI seo le cumraíocht do IdP.',
      redirect_uri_field_custom_domain_description:
        'Má úsáideann tú roinnt <a>fearann saincheaptha</a> in GetCertus, cuir na URIanna aisghlaoigh comhfhreagracha uile le do IdP ionas go n-oibreoidh SSO ar gach fearann.\n\nTá fearann réamhshocraithe GetCertus (*.logto.app) bailí i gcónaí — ná cuir san áireamh é ach más mian leat tacú le SSO tríd an bhfearann sin freisin.',
    },
  },
  attribute_mapping: {
    title: 'Mapálacha tréithe',
    description:
      'Tá `id` agus `email` riachtanach chun próifíl an úsáideora a shioncronú ón IdP. Cuir isteach ainm agus luach an éilimh seo a leanas i do IdP.',
    col_sp_claims: 'Luach an tsoláthraí seirbhíse (GetCertus)',
    col_idp_claims: 'Ainm éilimh an tsoláthraí aitheantais',
    idp_claim_tooltip: 'Ainm éilimh an tsoláthraí aitheantais',
  },
  metadata: {
    title: 'Cumraigh meiteashonraí an IdP',
    description: 'Cumraigh na meiteashonraí ón soláthraí aitheantais',
    dropdown_trigger_text: 'Úsáid modh cumraíochta eile',
    dropdown_title: 'roghnaigh do mhodh cumraíochta',
    metadata_format_url: 'Cuir isteach URL na meiteashonraí',
    metadata_format_xml: 'Uaslódáil an comhad XML meiteashonraí',
    metadata_format_manual: 'Cuir isteach na meiteashonraí de láimh',
    saml: {
      metadata_url_field_name: 'URL na meiteashonraí',
      metadata_url_description:
        'Faigh sonraí go dinimiciúil ó URL na meiteashonraí agus coinnigh an teastas cothrom le dáta.',
      metadata_xml_field_name: 'Comhad XML meiteashonraí an IdP',
      metadata_xml_uploader_text: 'Uaslódáil comhad XML meiteashonraí',
      sign_in_endpoint_field_name: 'URL síniú isteach',
      idp_entity_id_field_name: 'Entity ID an IdP (Issuer)',
      certificate_field_name: 'Teastas sínithe',
      certificate_placeholder: 'Cóipeáil agus greamaigh an teastas x509',
      certificate_required: 'Tá teastas sínithe riachtanach.',
    },
    oidc: {
      client_id_field_name: 'ID cliaint',
      client_secret_field_name: 'Rún cliaint',
      issuer_field_name: 'Eisitheoir',
      scope_field_name: 'Scóip',
      scope_field_placeholder: 'Cuir isteach na scóip (scartha le spás)',
    },
  },
};

export default Object.freeze(enterprise_sso);
