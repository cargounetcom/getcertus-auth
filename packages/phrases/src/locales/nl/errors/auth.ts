/* GetCertus addition (MPL-2.0, see GETCERTUS.md): admin console phrases. */
const auth = {
  authorization_header_missing: 'De autorisatieheader ontbreekt.',
  authorization_token_type_not_supported: 'Dit autorisatietype wordt niet ondersteund.',
  unauthorized: 'Niet geautoriseerd. Controleer de inloggegevens en de bijbehorende scope.',
  forbidden: 'Geen toegang. Controleer je gebruikersrollen en rechten.',
  expected_role_not_found:
    'De verwachte rol is niet gevonden. Controleer je gebruikersrollen en rechten.',
  jwt_sub_missing: '`sub` ontbreekt in de JWT.',
  require_re_authentication:
    'Opnieuw authenticeren is vereist om een beveiligde actie uit te voeren.',
  exceed_token_limit: 'De tokenlimiet is overschreden. Neem contact op met je beheerder.',
  third_party_application_forbidden:
    'Applicaties van derden kunnen accountgegevens niet wijzigen via deze API.',
};

export default Object.freeze(auth);
