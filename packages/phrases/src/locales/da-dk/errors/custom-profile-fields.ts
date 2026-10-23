/* GetCertus addition (MPL-2.0, see GETCERTUS.md): admin console phrases. */
const custom_profile_fields = {
  entity_not_exists_with_names: 'Kan ikke finde enheder med de angivne navne: {{names}}',
  invalid_min_max_input: 'Ugyldig minimums- og maksimumsværdi.',
  invalid_default_value: 'Ugyldig standardværdi.',
  invalid_options: 'Ugyldige feltindstillinger.',
  invalid_regex_format: 'Ugyldigt regex-format.',
  invalid_address_components: 'Ugyldige adressedele.',
  invalid_fullname_components: 'Ugyldige dele af det fulde navn.',
  invalid_sub_component_type: 'Ugyldig type underkomponent.',
  name_exists: 'Der findes allerede et felt med dette navn.',
  conflicted_sie_order: 'Modstridende feltrækkefølge for loginoplevelsen.',
  invalid_name:
    'Ugyldigt feltnavn; kun bogstaver og tal er tilladt, der skelnes mellem store og små bogstaver.',
  name_conflict_sign_in_identifier:
    'Ugyldigt feltnavn. Reserverede loginidentifikatorer: {{name}}.',
  name_conflict_built_in_prop:
    'Ugyldigt feltnavn. Reserverede navne på indbyggede profilegenskaber: {{name}}.',
  name_conflict_custom_data:
    'Ugyldigt feltnavn. Reserverede nøgler i brugerdefinerede data: {{name}}.',
  name_required: 'Feltnavn er påkrævet.',
};

export default Object.freeze(custom_profile_fields);
