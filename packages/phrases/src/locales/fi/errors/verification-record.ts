/* GetCertus addition (MPL-2.0, see GETCERTUS.md): admin console phrases. */
const verification_record = {
  not_found: 'Vahvistustietuetta ei löytynyt.',
  permission_denied: 'Ei oikeutta, tunnistaudu uudelleen.',
  not_supported_for_google_one_tap: 'Tämä API ei tue Google One Tapia.',
  social_verification: {
    invalid_target: 'Virheellinen vahvistustietue. Odotettiin {{expected}}, saatiin {{actual}}.',
    token_response_not_found:
      'Tunnusvastausta ei löytynyt. Tarkista, että tunnusten tallennusta tuetaan ja se on käytössä sosiaaliselle liittimelle.',
  },
};

export default Object.freeze(verification_record);
