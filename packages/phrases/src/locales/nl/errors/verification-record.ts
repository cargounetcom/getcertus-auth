/* GetCertus addition (MPL-2.0, see GETCERTUS.md): admin console phrases. */
const verification_record = {
  not_found: 'Verificatierecord niet gevonden.',
  permission_denied: 'Geen toestemming; authenticeer opnieuw.',
  not_supported_for_google_one_tap: 'Deze API ondersteunt Google One Tap niet.',
  social_verification: {
    invalid_target: 'Ongeldig verificatierecord. Verwacht: {{expected}}, ontvangen: {{actual}}.',
    token_response_not_found:
      'Tokenantwoord niet gevonden. Controleer of tokenopslag wordt ondersteund en is ingeschakeld voor de social connector.',
  },
};

export default Object.freeze(verification_record);
