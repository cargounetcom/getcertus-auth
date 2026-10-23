/* GetCertus addition (MPL-2.0, see GETCERTUS.md): admin console phrases. */
const password = {
  unsupported_encryption_method: 'Salausmenetelmää {{name}} ei tueta.',
  pepper_not_found: 'Salasanan pepperiä ei löytynyt. Tarkista coren ympäristömuuttujat.',
  rejected: 'Salasana hylättiin. Tarkista, että salasanasi täyttää vaatimukset.',
  invalid_legacy_password_format: 'Vanhan salasanan muoto on virheellinen.',
  unsupported_legacy_hash_algorithm: 'Vanhaa tiivistealgoritmia ei tueta: {{algorithm}}.',
  expired: 'Salasanasi on vanhentunut. Vaihda salasana jatkaaksesi.',
};

export default Object.freeze(password);
