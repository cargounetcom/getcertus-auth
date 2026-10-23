/* GetCertus addition (MPL-2.0, see GETCERTUS.md): admin console phrases. */
const verification_record = {
  not_found: 'Verifieringsposten hittades inte.',
  permission_denied: 'Behörighet saknas. Autentisera dig igen.',
  not_supported_for_google_one_tap: 'API:et stöder inte Google One Tap.',
  social_verification: {
    invalid_target: 'Ogiltig verifieringspost. Förväntade {{expected}} men fick {{actual}}.',
    token_response_not_found:
      'Tokensvaret hittades inte. Kontrollera att tokenlagring stöds och är aktiverad för den sociala anslutningen.',
  },
};

export default Object.freeze(verification_record);
