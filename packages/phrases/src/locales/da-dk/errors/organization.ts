/* GetCertus addition (MPL-2.0, see GETCERTUS.md): admin console phrases. */
const organization = {
  require_membership: 'Brugeren skal være medlem af organisationen for at fortsætte.',
  role_names_not_found:
    'Der blev fundet ugyldige rollenavne: {{names,list(type:conjunction)}}. Opret disse roller først, før du fortsætter.',
};

export default Object.freeze(organization);
