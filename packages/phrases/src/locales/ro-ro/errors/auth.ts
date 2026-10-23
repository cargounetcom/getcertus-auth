/* GetCertus addition (MPL-2.0, see GETCERTUS.md): admin console phrases. */
const auth = {
  authorization_header_missing: 'Header-ul de autorizare lipsește.',
  authorization_token_type_not_supported: 'Tipul de autorizare nu este acceptat.',
  unauthorized: 'Neautorizat. Verifică credențialele și scopul acestora.',
  forbidden: 'Acces interzis. Verifică rolurile și permisiunile utilizatorului.',
  expected_role_not_found:
    'Rolul așteptat nu a fost găsit. Verifică rolurile și permisiunile utilizatorului.',
  jwt_sub_missing: 'Lipsește `sub` din JWT.',
  require_re_authentication: 'Este necesară reautentificarea pentru a efectua o acțiune protejată.',
  exceed_token_limit: 'Limita de tokenuri a fost depășită. Contactează administratorul.',
  third_party_application_forbidden:
    'Aplicațiile terțe nu pot modifica datele contului prin acest API.',
};

export default Object.freeze(auth);
