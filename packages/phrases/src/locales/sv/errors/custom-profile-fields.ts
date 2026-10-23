/* GetCertus addition (MPL-2.0, see GETCERTUS.md): admin console phrases. */
const custom_profile_fields = {
  entity_not_exists_with_names: 'Det går inte att hitta entiteter med de angivna namnen: {{names}}',
  invalid_min_max_input: 'Ogiltigt min- och maxvärde.',
  invalid_default_value: 'Ogiltigt standardvärde.',
  invalid_options: 'Ogiltiga fältalternativ.',
  invalid_regex_format: 'Ogiltigt regex-format.',
  invalid_address_components: 'Ogiltiga adressdelar.',
  invalid_fullname_components: 'Ogiltiga delar av fullständigt namn.',
  invalid_sub_component_type: 'Ogiltig typ av underkomponent.',
  name_exists: 'Det finns redan ett fält med det namnet.',
  conflicted_sie_order: 'Motstridig fältordning för inloggningsupplevelsen.',
  invalid_name: 'Ogiltigt fältnamn; endast bokstäver och siffror tillåts, skiftlägeskänsligt.',
  name_conflict_sign_in_identifier:
    'Ogiltigt fältnamn. Reserverade inloggningsidentifierare: {{name}}.',
  name_conflict_built_in_prop:
    'Ogiltigt fältnamn. Reserverade namn på inbyggda profilegenskaper: {{name}}.',
  name_conflict_custom_data: 'Ogiltigt fältnamn. Reserverade nycklar i anpassade data: {{name}}.',
  name_required: 'Fältnamn krävs.',
};

export default Object.freeze(custom_profile_fields);
