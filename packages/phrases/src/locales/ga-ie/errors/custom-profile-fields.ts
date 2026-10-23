/* GetCertus addition (MPL-2.0, see GETCERTUS.md): admin console phrases. */
const custom_profile_fields = {
  entity_not_exists_with_names:
    'Ní féidir eintitis leis na hainmneacha a tugadh a aimsiú: {{names}}',
  invalid_min_max_input: 'Luachanna íosta agus uasta neamhbhailí.',
  invalid_default_value: 'Luach réamhshocraithe neamhbhailí.',
  invalid_options: 'Roghanna réimse neamhbhailí.',
  invalid_regex_format: 'Formáid regex neamhbhailí.',
  invalid_address_components: 'Comhpháirteanna seolta neamhbhailí.',
  invalid_fullname_components: 'Comhpháirteanna ainm iomláin neamhbhailí.',
  invalid_sub_component_type: 'Cineál fochomhpháirte neamhbhailí.',
  name_exists: 'Tá réimse leis an ainm seo ann cheana.',
  conflicted_sie_order: 'Ord réimsí contrártha don síniú isteach.',
  invalid_name: 'Ainm réimse neamhbhailí; ní cheadaítear ach litreacha nó uimhreacha, cás-íogair.',
  name_conflict_sign_in_identifier:
    'Ainm réimse neamhbhailí. Eochracha forchoimeádta aitheantóirí sínithe isteach: {{name}}.',
  name_conflict_built_in_prop:
    'Ainm réimse neamhbhailí. Ainmneacha forchoimeádta airíonna ionsuite próifíle: {{name}}.',
  name_conflict_custom_data:
    'Ainm réimse neamhbhailí. Eochracha forchoimeádta sonraí saincheaptha: {{name}}.',
  name_required: 'Tá ainm réimse riachtanach.',
};

export default Object.freeze(custom_profile_fields);
