/* GetCertus addition (MPL-2.0, see GETCERTUS.md): admin console phrases. */
const organization = {
  require_membership: 'Användaren måste vara medlem i organisationen för att fortsätta.',
  role_names_not_found:
    'Ogiltiga rollnamn hittades: {{names,list(type:conjunction)}}. Skapa rollerna först innan du fortsätter.',
};

export default Object.freeze(organization);
