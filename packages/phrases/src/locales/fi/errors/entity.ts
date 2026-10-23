/* GetCertus addition (MPL-2.0, see GETCERTUS.md): admin console phrases. */
const entity = {
  invalid_input: 'Virheellinen syöte. Arvoluettelo ei voi olla tyhjä.',
  value_too_long: 'Arvo on liian pitkä ja ylittää rajan.',
  create_failed: 'Kohteen {{name}} luominen epäonnistui.',
  db_constraint_violated: 'Tietokantarajoitetta rikottiin.',
  not_exists: 'Kohdetta {{name}} ei ole olemassa.',
  not_exists_with_id: 'Kohdetta {{name}} tunnuksella `{{id}}` ei ole olemassa.',
  not_found: 'Resurssia ei ole olemassa.',
  relation_foreign_key_not_found:
    'Yhtä tai useampaa viiteavainta ei löytynyt. Tarkista syöte ja varmista, että kaikki viitatut kohteet ovat olemassa.',
  unique_integrity_violation: 'Kohde on jo olemassa. Tarkista syöte ja yritä uudelleen.',
};

export default Object.freeze(entity);
