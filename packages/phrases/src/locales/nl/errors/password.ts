/* GetCertus addition (MPL-2.0, see GETCERTUS.md): admin console phrases. */
const password = {
  unsupported_encryption_method: 'De versleutelingsmethode {{name}} wordt niet ondersteund.',
  pepper_not_found:
    'Wachtwoord-pepper niet gevonden. Controleer de omgevingsvariabelen van de core.',
  rejected: 'Wachtwoord geweigerd. Controleer of je wachtwoord aan de eisen voldoet.',
  invalid_legacy_password_format: 'Ongeldige notatie van het oude wachtwoord.',
  unsupported_legacy_hash_algorithm: 'Niet-ondersteund oud hash-algoritme: {{algorithm}}.',
  expired: 'Je wachtwoord is verlopen. Stel je wachtwoord opnieuw in om verder te gaan.',
};

export default Object.freeze(password);
