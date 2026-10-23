/* GetCertus addition (MPL-2.0, see GETCERTUS.md): admin console phrases. */
const connector = {
  general: 'Tharla earráid sa nascóir: {{errorDescription}}',
  not_found: 'Ní féidir nascóir atá ar fáil a aimsiú don chineál: {{type}}.',
  not_enabled: 'Níl an nascóir cumasaithe.',
  invalid_metadata: 'Tá meiteashonraí an nascóra neamhbhailí.',
  invalid_config_guard: 'Tá config guard an nascóra neamhbhailí.',
  unexpected_type: 'Tá cineál an nascóra gan choinne.',
  invalid_request_parameters: 'Tá paraiméadair ionchuir mhíchearta san iarratas.',
  insufficient_request_parameters:
    "D'fhéadfadh roinnt paraiméadar ionchuir a bheith in easnamh ar an iarratas.",
  invalid_config: 'Tá cumraíocht an nascóra neamhbhailí.',
  invalid_certificate:
    'Tá teastas an nascóra neamhbhailí; cinntigh go bhfuil an teastas in ionchódú PEM.',
  invalid_response: 'Tá freagra an nascóra neamhbhailí.',
  template_not_found: 'Ní féidir an teimpléad ceart a aimsiú i gcumraíocht an nascóra.',
  template_not_supported: 'Ní thacaíonn an nascóir leis an gcineál teimpléid seo.',
  rate_limit_exceeded: 'Sroicheadh an teorainn ráta. Bain triail eile as ar ball.',
  usage_limit_exceeded: 'Sroicheadh teorainn úsáide na seirbhíse ríomhphoist.',
  not_implemented: '{{method}}: níl sé curtha i bhfeidhm fós.',
  social_invalid_access_token: 'Tá comhartha rochtana an nascóra neamhbhailí.',
  invalid_auth_code: 'Tá cód údaraithe an nascóra neamhbhailí.',
  social_invalid_id_token: 'Tá comhartha ID an nascóra neamhbhailí.',
  authorization_failed: 'Níor éirigh le próiseas údaraithe an úsáideora.',
  social_auth_code_invalid: 'Ní féidir comhartha rochtana a fháil; seiceáil an cód údaraithe.',
  more_than_one_sms: 'Tá níos mó ná nascóir SMS amháin ann.',
  more_than_one_email: 'Tá níos mó ná nascóir ríomhphoist amháin ann.',
  more_than_one_connector_factory:
    'Aimsíodh roinnt monarchana nascóra (le id {{connectorIds}}); is féidir leat na cinn nach bhfuil ag teastáil a dhíshuiteáil.',
  db_connector_type_mismatch: 'Tá nascóir sa bhunachar sonraí nach meaitseálann a chineál.',
  not_found_with_connector_id:
    'Ní féidir nascóir a aimsiú leis an aitheantas nascóra caighdeánach a tugadh.',
  multiple_instances_not_supported:
    'Ní féidir cásanna iomadúla den nascóir caighdeánach a roghnaíodh a chruthú.',
  invalid_type_for_syncing_profile:
    'Ní féidir leat próifíl úsáideora a shioncronú ach le nascóirí sóisialta.',
  can_not_modify_target: "Ní féidir 'target' an nascóra a athrú.",
  should_specify_target: "Ba cheart duit 'target' a shonrú.",
  multiple_target_with_same_platform:
    'Ní féidir leat roinnt nascóirí sóisialta a bheith agat leis an target agus an t-ardán céanna.',
  cannot_overwrite_metadata_for_non_standard_connector:
    "Ní féidir 'metadata' an nascóra seo a fhorscríobh.",
  email_connector: {
    bulk_deletion_no_filter:
      'Ní mór coinníoll scagaire amháin ar a laghad a thabhairt chun scriosadh mórchóir de réir airíonna a dhéanamh. Is iad seo na hairíonna a dtacaítear leo: {{properties, list(type:conjunction)}}.',
  },
  token_storage_not_supported: 'Ní thacaíonn an nascóir seo le stóráil comharthaí. ',
};

export default Object.freeze(connector);
