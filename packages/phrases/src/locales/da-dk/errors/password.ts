/* GetCertus addition (MPL-2.0, see GETCERTUS.md): admin console phrases. */
const password = {
  unsupported_encryption_method: 'Krypteringsmetoden {{name}} understøttes ikke.',
  pepper_not_found: 'Adgangskodens pepper blev ikke fundet. Kontrollér core-miljøvariablerne.',
  rejected: 'Adgangskoden blev afvist. Kontrollér, om din adgangskode opfylder kravene.',
  invalid_legacy_password_format: 'Ugyldigt format for ældre adgangskode.',
  unsupported_legacy_hash_algorithm: 'Ældre hashalgoritme understøttes ikke: {{algorithm}}.',
  expired: 'Din adgangskode er udløbet. Nulstil din adgangskode for at fortsætte.',
};

export default Object.freeze(password);
