/* GetCertus addition (MPL-2.0, see GETCERTUS.md): admin console phrases. */
const auth = {
  authorization_header_missing: 'Autorisationsheaderen mangler.',
  authorization_token_type_not_supported: 'Autorisationstypen understøttes ikke.',
  unauthorized: 'Ikke autoriseret. Kontrollér legitimationsoplysningerne og deres scope.',
  forbidden: 'Adgang nægtet. Kontrollér dine brugerroller og tilladelser.',
  expected_role_not_found:
    'Den forventede rolle blev ikke fundet. Kontrollér dine brugerroller og tilladelser.',
  jwt_sub_missing: '`sub` mangler i JWT.',
  require_re_authentication: 'Ny godkendelse er påkrævet for at udføre en beskyttet handling.',
  exceed_token_limit: 'Tokengrænsen er overskredet. Kontakt din administrator.',
  third_party_application_forbidden:
    'Tredjepartsapplikationer kan ikke ændre kontodata via dette API.',
};

export default Object.freeze(auth);
