/* GetCertus addition (MPL-2.0, see GETCERTUS.md): admin console phrases. */
const password = {
  unsupported_encryption_method: 'Metoda de criptare {{name}} nu este acceptată.',
  pepper_not_found:
    'Pepper-ul parolei nu a fost găsit. Verifică variabilele de mediu ale core-ului.',
  rejected: 'Parola a fost respinsă. Verifică dacă parola îndeplinește cerințele.',
  invalid_legacy_password_format: 'Format nevalid pentru parola veche.',
  unsupported_legacy_hash_algorithm: 'Algoritm de hash vechi neacceptat: {{algorithm}}.',
  expired: 'Parola ta a expirat. Resetează parola pentru a continua.',
};

export default Object.freeze(password);
