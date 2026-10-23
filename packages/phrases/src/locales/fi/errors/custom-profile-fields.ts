/* GetCertus addition (MPL-2.0, see GETCERTUS.md): admin console phrases. */
const custom_profile_fields = {
  entity_not_exists_with_names: 'Annetuilla nimillä ei löytynyt kohteita: {{names}}',
  invalid_min_max_input: 'Virheellinen vähimmäis- ja enimmäisarvo.',
  invalid_default_value: 'Virheellinen oletusarvo.',
  invalid_options: 'Virheelliset kentän vaihtoehdot.',
  invalid_regex_format: 'Virheellinen regex-muoto.',
  invalid_address_components: 'Virheelliset osoitteen osat.',
  invalid_fullname_components: 'Virheelliset koko nimen osat.',
  invalid_sub_component_type: 'Virheellinen alikomponentin tyyppi.',
  name_exists: 'Kenttä tällä nimellä on jo olemassa.',
  conflicted_sie_order: 'Ristiriitainen kenttien järjestys kirjautumiskokemuksessa.',
  invalid_name:
    'Virheellinen kentän nimi; vain kirjaimet ja numerot ovat sallittuja, kirjainkoolla on merkitystä.',
  name_conflict_sign_in_identifier:
    'Virheellinen kentän nimi. Varatut kirjautumistunnisteet: {{name}}.',
  name_conflict_built_in_prop:
    'Virheellinen kentän nimi. Varatut sisäänrakennettujen profiiliominaisuuksien nimet: {{name}}.',
  name_conflict_custom_data:
    'Virheellinen kentän nimi. Varatut mukautettujen tietojen avaimet: {{name}}.',
  name_required: 'Kentän nimi vaaditaan.',
};

export default Object.freeze(custom_profile_fields);
