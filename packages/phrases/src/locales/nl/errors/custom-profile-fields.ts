/* GetCertus addition (MPL-2.0, see GETCERTUS.md): admin console phrases. */
const custom_profile_fields = {
  entity_not_exists_with_names: 'Geen entiteiten gevonden met de opgegeven namen: {{names}}',
  invalid_min_max_input: 'Ongeldige minimum- en maximumwaarde.',
  invalid_default_value: 'Ongeldige standaardwaarde.',
  invalid_options: 'Ongeldige veldopties.',
  invalid_regex_format: 'Ongeldige regex-notatie.',
  invalid_address_components: 'Ongeldige adresonderdelen.',
  invalid_fullname_components: 'Ongeldige onderdelen van de volledige naam.',
  invalid_sub_component_type: 'Ongeldig type subonderdeel.',
  name_exists: 'Er bestaat al een veld met deze naam.',
  conflicted_sie_order: 'Conflicterende veldvolgorde voor de inlogervaring.',
  invalid_name:
    'Ongeldige veldnaam; alleen letters of cijfers zijn toegestaan, hoofdlettergevoelig.',
  name_conflict_sign_in_identifier:
    'Ongeldige veldnaam. Gereserveerde inlogidentifier(s): {{name}}.',
  name_conflict_built_in_prop:
    'Ongeldige veldnaam. Gereserveerde naam/namen van ingebouwde profieleigenschappen: {{name}}.',
  name_conflict_custom_data:
    'Ongeldige veldnaam. Gereserveerde sleutel(s) van aangepaste gegevens: {{name}}.',
  name_required: 'Een veldnaam is verplicht.',
};

export default Object.freeze(custom_profile_fields);
