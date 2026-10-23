/* GetCertus addition (MPL-2.0, see GETCERTUS.md): admin console phrases. */
const verification_record = {
  not_found: 'Níor aimsíodh an taifead fíoraithe.',
  permission_denied: 'Diúltaíodh cead; fíordheimhnigh arís.',
  not_supported_for_google_one_tap: 'Ní thacaíonn an API seo le Google One Tap.',
  social_verification: {
    invalid_target:
      'Taifead fíoraithe neamhbhailí. Bhíothas ag súil le {{expected}} ach fuarthas {{actual}}.',
    token_response_not_found:
      'Níor aimsíodh freagra an chomhartha. Seiceáil go dtacaítear le stóráil comharthaí agus go bhfuil sí cumasaithe don nascóir sóisialta.',
  },
};

export default Object.freeze(verification_record);
