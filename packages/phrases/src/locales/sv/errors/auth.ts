/* GetCertus addition (MPL-2.0, see GETCERTUS.md): admin console phrases. */
const auth = {
  authorization_header_missing: 'Auktoriseringsheadern saknas.',
  authorization_token_type_not_supported: 'Auktoriseringstypen stöds inte.',
  unauthorized: 'Ej behörig. Kontrollera autentiseringsuppgifterna och deras scope.',
  forbidden: 'Åtkomst nekad. Kontrollera dina användarroller och behörigheter.',
  expected_role_not_found:
    'Den förväntade rollen hittades inte. Kontrollera dina användarroller och behörigheter.',
  jwt_sub_missing: '`sub` saknas i JWT.',
  require_re_authentication: 'Ny autentisering krävs för att utföra en skyddad åtgärd.',
  exceed_token_limit: 'Tokengränsen har överskridits. Kontakta din administratör.',
  third_party_application_forbidden:
    'Tredjepartsapplikationer kan inte ändra kontodata via detta API.',
};

export default Object.freeze(auth);
