/* GetCertus addition (MPL-2.0, see GETCERTUS.md): admin console phrases. */
const custom_profile_fields = {
  entity_not_exists_with_names: 'Nu s-au găsit entități cu numele date: {{names}}',
  invalid_min_max_input: 'Valori minime și maxime nevalide.',
  invalid_default_value: 'Valoare implicită nevalidă.',
  invalid_options: 'Opțiuni de câmp nevalide.',
  invalid_regex_format: 'Format regex nevalid.',
  invalid_address_components: 'Componente de adresă nevalide.',
  invalid_fullname_components: 'Componente nevalide ale numelui complet.',
  invalid_sub_component_type: 'Tip de subcomponentă nevalid.',
  name_exists: 'Există deja un câmp cu acest nume.',
  conflicted_sie_order: 'Ordine a câmpurilor conflictuală pentru experiența de autentificare.',
  invalid_name:
    'Nume de câmp nevalid; sunt permise doar litere sau cifre, cu diferențiere între majuscule și minuscule.',
  name_conflict_sign_in_identifier:
    'Nume de câmp nevalid. Chei rezervate pentru identificatorii de autentificare: {{name}}.',
  name_conflict_built_in_prop:
    'Nume de câmp nevalid. Nume rezervate ale proprietăților predefinite ale profilului: {{name}}.',
  name_conflict_custom_data:
    'Nume de câmp nevalid. Chei rezervate ale datelor personalizate: {{name}}.',
  name_required: 'Numele câmpului este obligatoriu.',
};

export default Object.freeze(custom_profile_fields);
