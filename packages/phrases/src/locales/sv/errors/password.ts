/* GetCertus addition (MPL-2.0, see GETCERTUS.md): admin console phrases. */
const password = {
  unsupported_encryption_method: 'Krypteringsmetoden {{name}} stöds inte.',
  pepper_not_found: 'Lösenordets pepper hittades inte. Kontrollera core-miljövariablerna.',
  rejected: 'Lösenordet avvisades. Kontrollera att lösenordet uppfyller kraven.',
  invalid_legacy_password_format: 'Ogiltigt format på äldre lösenord.',
  unsupported_legacy_hash_algorithm: 'Äldre hashalgoritm stöds inte: {{algorithm}}.',
  expired: 'Ditt lösenord har gått ut. Återställ lösenordet för att fortsätta.',
};

export default Object.freeze(password);
