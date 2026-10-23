/* GetCertus addition (MPL-2.0, see GETCERTUS.md): admin console phrases. */
const signing_keys = {
  title: 'Eochracha sínithe',
  description: "Bainistigh go slán na heochracha sínithe a úsáideann d'fheidhmchláir.",
  private_key: 'Eochracha príobháideacha OIDC',
  private_keys_description: 'Úsáidtear eochracha príobháideacha OIDC chun comharthaí JWT a shíniú.',
  cookie_key: 'Eochracha fianán OIDC',
  cookie_keys_description: 'Úsáidtear eochracha fianán OIDC chun fianáin a shíniú.',
  private_keys_in_use: 'Eochracha príobháideacha in úsáid',
  cookie_keys_in_use: 'Eochracha fianán in úsáid',
  rotate_private_keys: 'Rothlaigh eochracha príobháideacha',
  rotate_cookie_keys: 'Rothlaigh eochracha fianán',
  rotate_private_keys_description:
    "Cruthóidh an gníomh seo eochair shínithe phríobháideach nua, rothlóidh sé an eochair reatha agus bainfidh sé d'eochair roimhe seo. Fanfaidh comharthaí JWT atá sínithe leis an eochair reatha bailí go dtí go scriosfar iad nó go dtí an chéad rothlú eile.",
  rotate_cookie_keys_description:
    "Cruthóidh an gníomh seo eochair fianáin nua, rothlóidh sé an eochair reatha agus bainfidh sé d'eochair roimhe seo. Fanfaidh fianáin leis an eochair reatha bailí go dtí go scriosfar iad nó go dtí an chéad rothlú eile.",
  select_private_key_algorithm: 'Roghnaigh algartam sínithe don eochair phríobháideach nua',
  rotate_button: 'Rothlaigh',
  table_column: {
    id: 'Aitheantas',
    status: 'Stádas',
    algorithm: 'Algartam sínithe',
    effective_at: 'I bhfeidhm ó',
  },
  status: {
    next: 'An chéad cheann eile',
    current: 'Reatha',
    previous: 'Roimhe seo',
    effective_in: 'I bhfeidhm i gceann {{time}}',
  },
  reminder: {
    rotate_private_key:
      'An bhfuil tú cinnte gur mian leat na <strong>heochracha príobháideacha OIDC</strong> a rothlú? Síneofar comharthaí JWT nua leis an eochair nua. Fanfaidh comharthaí JWT atá ann cheana bailí go dtí go rothlaíonn tú arís.',
    rotate_cookie_key:
      'An bhfuil tú cinnte gur mian leat na <strong>heochracha fianán OIDC</strong> a rothlú? Síneofar fianáin nua a ghintear i seisiúin sínithe isteach leis an eochair fianáin nua. Fanfaidh fianáin atá ann cheana bailí go dtí go rothlaíonn tú arís.',
    delete_private_key:
      'An bhfuil tú cinnte gur mian leat an <strong>eochair phríobháideach OIDC</strong> a scriosadh? Ní bheidh comharthaí JWT atá sínithe leis an eochair seo bailí a thuilleadh.',
    delete_cookie_key:
      'An bhfuil tú cinnte gur mian leat an <strong>eochair fianáin OIDC</strong> a scriosadh? Ní bheidh seisiúin sínithe isteach níos sine le fianáin sínithe leis an eochair seo bailí a thuilleadh. Beidh ar na húsáideoirí seo fíordheimhniú arís.',
  },
  messages: {
    rotate_key_success: 'Rothlaíodh na heochracha sínithe.',
    delete_key_success: 'Scriosadh an eochair.',
  },
};

export default Object.freeze(signing_keys);
