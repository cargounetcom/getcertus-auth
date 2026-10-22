/* GetCertus addition (MPL-2.0, see GETCERTUS.md): admin console phrases. */
const webhook_details = {
  page_title: 'Sonraí an webhook',
  back_to_webhooks: 'Ar ais chuig webhooks',
  not_in_use: 'Gan úsáid',
  success_rate: 'ráta ratha',
  requests: '{{value, number}} iarratas in 24 u',
  disable_webhook: 'Díchumasaigh an webhook',
  disable_reminder:
    'An bhfuil tú cinnte gur mian leat an webhook a dhíchumasú? Ina dhiaidh sin, ní sheolfar iarratais HTTP chuig URL an chríochphointe.',
  webhook_disabled: 'Díchumasaíodh an webhook.',
  webhook_reactivated: 'Athghníomhaíodh an webhook.',
  reactivate_webhook: 'Athghníomhaigh an webhook',
  delete_webhook: 'Scrios an webhook',
  deletion_reminder:
    'Tá an webhook seo á bhaint agat. Tar éis é a scriosadh, ní sheolfar iarratais HTTP chuig URL an chríochphointe.',
  deleted: 'Scriosadh an webhook.',
  settings_tab: 'Socruithe',
  recent_requests_tab: 'Iarratais le déanaí (24 u)',
  settings: {
    settings: 'Socruithe',
    settings_description:
      'Le webhooks, faigheann tú nuashonruithe fíor-ama faoi imeachtaí áirithe a luaithe a tharlaíonn siad, trí iarratas POST chuig URL do chríochphointe. Is féidir leat gníomhú láithreach bonn ar an bhfaisnéis nua.',
    events: 'Imeachtaí',
    events_description:
      'Roghnaigh na himeachtaí a seolfaidh GetCertus an t-iarratas POST ina leith.',
    name: 'Ainm',
    endpoint_url: 'URL an chríochphointe',
    signing_key: 'Eochair shínithe',
    signing_key_tip:
      'Cuir an eochair rúnda ó GetCertus le do chríochphointe mar cheanntásc iarratais chun barántúlacht payload an webhook a chinntiú.',
    regenerate: 'Athghin',
    regenerate_key_title: 'Athghin an eochair shínithe',
    regenerate_key_reminder:
      'An bhfuil tú cinnte gur mian leat an eochair shínithe a athrú? Beidh an eochair nua i bhfeidhm láithreach. Cuimhnigh an eochair a nuashonrú i do chríochphointe ag an am céanna.',
    regenerated: 'Athghineadh an eochair shínithe.',
    custom_headers: 'Ceanntáisc shaincheaptha',
    custom_headers_tip:
      'Más mian leat, is féidir ceanntáisc shaincheaptha a chur le payload an webhook chun comhthéacs nó meiteashonraí breise faoin imeacht a sholáthar.',
    key_duplicated_error: 'Ní féidir eochair a athdhéanamh.',
    key_missing_error: 'Tá eochair riachtanach.',
    value_missing_error: 'Tá luach riachtanach.',
    invalid_key_error: 'Eochair neamhbhailí',
    invalid_value_error: 'Luach neamhbhailí',
    test: 'Tástáil',
    test_webhook: 'Tástáil do webhook',
    test_webhook_description:
      'Cumraigh an webhook agus tástáil é le payloads samplacha do gach imeacht roghnaithe chun a fhíorú go bhfaightear agus go bpróiseáiltear i gceart iad.',
    send_test_payload: 'Seol payload tástála',
    test_result: {
      endpoint_url: 'URL an chríochphointe: {{url}}',
      message: 'Teachtaireacht: {{message}}',
      response_status: 'Stádas na freagra: {{status, number}}',
      response_body: 'Corp na freagra: {{body}}',
      request_time: 'Am an iarratais: {{time}}',
      test_success: "D'éirigh le tástáil an webhook chuig an gcríochphointe.",
    },
  },
};

export default Object.freeze(webhook_details);
