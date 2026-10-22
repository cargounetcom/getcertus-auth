/* GetCertus addition (MPL-2.0, see GETCERTUS.md): admin console phrases. */
const mfa = {
  title: 'Fíordheimhniú ilfhachtóra',
  description: 'Cuir fíordheimhniú ilfhachtóra leis chun slándáil do shínithe isteach a mhéadú.',
  factors: 'Fachtóirí',
  multi_factors: 'Ilfhachtóirí',
  multi_factors_description:
    "Ní mór d'úsáideoirí ceann de na fachtóirí cumasaithe a fhíorú le haghaidh fíorú dhá chéim.",
  totp: 'Aip fíordheimhnithe',
  otp_description: 'Nasc Google Authenticator nó aip chosúil chun pasfhocail aonuaire a fhíorú.',
  webauthn: 'Eochracha pas',
  webauthn_description:
    'Fíoraigh trí mhodh a dtacaíonn an brabhsálaí leis: bithmhéadracht, scanadh guthán, eochair shlándála, srl.',
  webauthn_domain_tip:
    'Ceanglaíonn WebAuthn eochracha poiblí le fearann ar leith. Má athraíonn tú fearann do sheirbhíse, ní bheidh úsáideoirí in ann fíordheimhniú le heochracha pas atá acu cheana.',
  backup_code: 'Cóid chúltaca',
  backup_code_description:
    "Gin 10 gcód cúltaca aonuaire tar éis d'úsáideoirí modh MFA ar bith a shocrú.",
  backup_code_setup_hint:
    'Nuair nach féidir le húsáideoirí na fachtóirí MFA thuas a fhíorú, is féidir leo an rogha chúltaca a úsáid.',
  backup_code_error_hint:
    'Chun cód cúltaca a úsáid, teastaíonn modh MFA amháin eile ar a laghad le haghaidh fíordheimhniú rathúil.',
  email_verification_code: 'Cód fíoraithe ríomhphoist',
  email_verification_code_description:
    'Nasc seoladh ríomhphoist chun cóid fíoraithe a fháil agus a fhíorú.',
  phone_verification_code: 'Cód fíoraithe SMS',
  phone_verification_code_description:
    'Nasc uimhir ghutháin chun cóid fíoraithe SMS a fháil agus a fhíorú.',
  policy: 'Polasaí',
  policy_description: 'Socraigh an polasaí MFA do na sreafaí sínithe isteach agus clárúcháin.',
  two_step_sign_in_policy: 'Polasaí fíoraithe dhá chéim ag síniú isteach',
  user_controlled: 'Is féidir le húsáideoirí MFA a chumasú nó a dhíchumasú iad féin',
  user_controlled_tip:
    'Is féidir le húsáideoirí socrú MFA a scipeáil an chéad uair a shíníonn siad isteach nó a chláraíonn siad, nó é a chumasú/a dhíchumasú i socruithe an chuntais.',
  mandatory: "Ní mór d'úsáideoirí MFA a úsáid i gcónaí ag síniú isteach",
  mandatory_tip:
    "Ní mór d'úsáideoirí MFA a shocrú an chéad uair a shíníonn siad isteach nó a chláraíonn siad, agus é a úsáid do gach síniú isteach amach anseo.",
  require_mfa: 'Éiligh MFA',
  require_mfa_label:
    "Cumasaigh é seo chun fíorú dhá chéim a dhéanamh éigeantach le rochtain a fháil ar d'fheidhmchláir. Má tá sé díchumasaithe, is féidir le húsáideoirí cinneadh a dhéanamh iad féin ar cheart MFA a chumasú.",
  require_mfa_optional:
    "MFA roghnach: lig d'úsáideoirí roghnú MFA a chumasú ar mhaithe le slándáil a gcuntais",
  require_mfa_adaptive:
    'MFA oiriúnaitheach: ná hiarr MFA ach amháin nuair is cosúil go bhfuil síniú isteach contúirteach (m.sh., tír nua / neamhghníomhaíocht fhada)',
  require_mfa_mandatory:
    'MFA éigeantach: ní mór do gach úsáideoir MFA a chríochnú gach uair a shíníonn siad isteach',
  set_up_prompt: 'Leid socraithe MFA',
  no_prompt: 'Ná hiarr ar úsáideoirí MFA a shocrú',
  prompt_at_sign_in_and_sign_up:
    'Iarr ar úsáideoirí MFA a shocrú le linn clárúcháin (is féidir é a scipeáil, leid aonuaire)',
  prompt_only_at_sign_in:
    'Iarr ar úsáideoirí MFA a shocrú an chéad uair eile a shíníonn siad isteach tar éis clárú (is féidir é a scipeáil, leid aonuaire)',
  prompt_at_sign_in_and_sign_up_mandatory:
    'Iarr ar úsáideoirí MFA a shocrú le linn clárúcháin (ní féidir é a scipeáil)',
  prompt_only_at_sign_in_mandatory:
    'Iarr ar úsáideoirí MFA a shocrú an chéad uair eile a shíníonn siad isteach tar éis clárú (ní féidir é a scipeáil)',
  set_up_organization_required_mfa_prompt:
    "Leid socraithe MFA d'úsáideoirí tar éis don eagraíocht MFA a chumasú",
  prompt_at_sign_in_non_skippable:
    'Iarr ar úsáideoirí MFA a shocrú an chéad uair eile a shíníonn siad isteach (ní féidir é a scipeáil)',
  email_primary_method_tip:
    'Is é an cód fíoraithe ríomhphoist do phríomh-mhodh sínithe isteach cheana féin. Ar mhaithe le slándáil, ní féidir é a athúsáid do MFA.',
  phone_primary_method_tip:
    'Is é an cód fíoraithe SMS do phríomh-mhodh sínithe isteach cheana féin. Ar mhaithe le slándáil, ní féidir é a athúsáid do MFA.',
  no_email_connector_warning:
    'Níl aon nascóir ríomhphoist socraithe fós. Go dtí go mbeidh an chumraíocht críochnaithe, ní bheidh úsáideoirí in ann cóid fíoraithe ríomhphoist a úsáid do MFA. <a>{{link}}</a> in "Nascóirí".',
  no_sms_connector_warning:
    'Níl aon nascóir SMS socraithe fós. Go dtí go mbeidh an chumraíocht críochnaithe, ní bheidh úsáideoirí in ann cóid fíoraithe SMS a úsáid do MFA. <a>{{link}}</a> in "Nascóirí".',
  no_email_connector_error:
    'Ní féidir MFA le cód fíoraithe ríomhphoist a chumasú gan nascóir ríomhphoist. Cumraigh nascóir ríomhphoist ar dtús.',
  no_sms_connector_error:
    'Ní féidir MFA le cód fíoraithe SMS a chumasú gan nascóir SMS. Cumraigh nascóir SMS ar dtús.',
  setup_link: 'Socraigh',
  trusted_device: {
    title: 'Gléasanna iontaofa',
    description:
      'Lig do bhrabhsálaithe iontaofa fíorú MFA a chríochnú go huathoibríoch nuair a éilíonn an sreabhadh MFA reatha é.',
    enable_title: 'Cumasaigh gléasanna iontaofa',
    enable_description:
      "Lig d'úsáideoirí muinín a bheith acu as an mbrabhsálaí seo tar éis dóibh fachtóir MFA incháilithe a chríochnú.",
    duration_title: 'Fad na muiníne (laethanta)',
    duration_error: 'Cuir isteach slánuimhir idir {{min}} agus {{max}}.',
    duration_note:
      'Ní bhaineann athruithe ar fhad na muiníne ach le gléasanna a ndéantar iontaofa iad ina dhiaidh sin.',
    organization_allow_title: 'Ceadaigh gléasanna iontaofa',
    organization_allow_tip:
      'Ní féidir le heagraíocht ach polasaí gléasanna iontaofa an tionónta a shrianadh; ní féidir léi an ghné a chumasú nuair atá polasaí an tionónta múchta.',
    organization_allow_description:
      'Ceadaigh fíorú trí ghléasanna iontaofa do bhaill na heagraíochta seo.',
    organization_global_disabled:
      'Cumasaigh gléasanna iontaofa i socruithe MFA an tionónta sula gceadaíonn tú iad don eagraíocht seo.',
    management_description:
      'Bainistigh na brabhsálaithe a ndearna an t-úsáideoir seo iontaofa iad tar éis MFA. Má bhaintear ceann, beidh MFA ag teastáil arís ar an mbrabhsálaí sin an chéad uair eile a shínítear isteach.',
    management_hint: 'Is le haghaidh eolais amháin an suíomh is déanaí.',
    management_empty: 'Níl aon ghléas iontaofa gníomhach ag an úsáideoir seo.',
    management_deletion_confirmation:
      '{{name}} a bhaint? Éileoidh an brabhsálaí seo MFA arís an chéad uair eile a shínítear isteach.',
    management_removed: 'Baineadh an gléas iontaofa.',
  },
};

export default Object.freeze(mfa);
