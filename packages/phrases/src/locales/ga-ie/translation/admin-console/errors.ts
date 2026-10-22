/* GetCertus addition (MPL-2.0, see GETCERTUS.md): admin console phrases. */
const errors = {
  something_went_wrong: 'Úps! Chuaigh rud éigin amú.',
  page_not_found: 'Níor aimsíodh an leathanach',
  unknown_server_error: 'Tharla earráid fhreastalaí anaithnid',
  empty: 'Gan sonraí',
  missing_total_number: 'Níor aimsíodh Total-Number i gceanntáscanna an fhreagra',
  invalid_uri_format: 'Formáid URI neamhbhailí',
  invalid_origin_format: 'Formáid bhunáite URI neamhbhailí',
  invalid_json_format: 'Formáid JSON neamhbhailí',
  invalid_parameters_format: 'Formáid paraiméadar neamhbhailí',
  invalid_regex: 'Slonn ionadaíochta neamhbhailí',
  invalid_error_message_format: 'Tá formáid na teachtaireachta earráide neamhbhailí.',
  required_field_missing: 'Cuir isteach {{field}}',
  required_field_missing_plural: 'Caithfidh tú {{field}} amháin ar a laghad a chur isteach',
  more_details: 'Tuilleadh sonraí',
  username_pattern_error:
    'Ní cheadaítear in ainm úsáideora ach litreacha, uimhreacha nó fostríoca, agus ní féidir leis tosú le huimhir.',
  email_pattern_error: 'Tá an seoladh ríomhphoist neamhbhailí.',
  phone_pattern_error: 'Tá an uimhir ghutháin neamhbhailí.',
  insecure_contexts: 'Ní thacaítear le comhthéacsanna neamhshlána (gan HTTPS).',
  unexpected_error: 'Tharla earráid gan choinne.',
  not_found: '404 gan aimsiú',
  create_internal_role_violation:
    'Tá ról inmheánach nua á chruthú agat, rud nach gceadaíonn GetCertus. Roghnaigh ainm nach dtosaíonn le "#internal:".',
  should_be_an_integer: 'Caithfidh sé a bheith ina shlánuimhir.',
  number_should_be_between_inclusive:
    'Caithfidh an uimhir a bheith idir {{min}} agus {{max}} (an dá cheann san áireamh).',
};

export default Object.freeze(errors);
