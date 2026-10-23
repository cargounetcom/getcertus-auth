/* GetCertus addition (MPL-2.0, see GETCERTUS.md): admin console phrases. */
const verification_record = {
  not_found: 'Înregistrarea de verificare nu a fost găsită.',
  permission_denied: 'Permisiune refuzată; autentifică-te din nou.',
  not_supported_for_google_one_tap: 'Acest API nu acceptă Google One Tap.',
  social_verification: {
    invalid_target:
      'Înregistrare de verificare nevalidă. Se aștepta {{expected}}, dar s-a primit {{actual}}.',
    token_response_not_found:
      'Răspunsul cu tokenul nu a fost găsit. Verifică dacă stocarea tokenurilor este acceptată și activată pentru conectorul social.',
  },
};

export default Object.freeze(verification_record);
