/* GetCertus addition (MPL-2.0, see GETCERTUS.md): admin console phrases. */
const verification_code = {
  phone_email_empty: 'Zowel telefoonnummer als e-mailadres zijn leeg.',
  not_found: 'Verificatiecode niet gevonden. Verstuur eerst een verificatiecode.',
  phone_mismatch: 'Het telefoonnummer komt niet overeen. Vraag een nieuwe verificatiecode aan.',
  email_mismatch: 'Het e-mailadres komt niet overeen. Vraag een nieuwe verificatiecode aan.',
  code_mismatch: 'Ongeldige verificatiecode.',
  expired: 'De verificatiecode is verlopen. Vraag een nieuwe verificatiecode aan.',
  exceed_max_try:
    'Het maximumaantal pogingen voor de verificatiecode is overschreden. Vraag een nieuwe verificatiecode aan.',
};

export default Object.freeze(verification_code);
