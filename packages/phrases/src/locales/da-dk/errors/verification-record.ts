/* GetCertus addition (MPL-2.0, see GETCERTUS.md): admin console phrases. */
const verification_record = {
  not_found: 'Verificeringsposten blev ikke fundet.',
  permission_denied: 'Adgang nægtet. Godkend dig igen.',
  not_supported_for_google_one_tap: "API'et understøtter ikke Google One Tap.",
  social_verification: {
    invalid_target: 'Ugyldig verificeringspost. Forventede {{expected}}, men fik {{actual}}.',
    token_response_not_found:
      'Tokensvaret blev ikke fundet. Kontrollér, at tokenlagring understøttes og er slået til for den sociale connector.',
  },
};

export default Object.freeze(verification_record);
