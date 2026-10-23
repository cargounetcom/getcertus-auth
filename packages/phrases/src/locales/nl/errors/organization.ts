/* GetCertus addition (MPL-2.0, see GETCERTUS.md): admin console phrases. */
const organization = {
  require_membership: 'De gebruiker moet lid zijn van de organisatie om verder te gaan.',
  role_names_not_found:
    'Ongeldige rolnamen gevonden: {{names,list(type:conjunction)}}. Maak deze rollen eerst aan voordat je verdergaat.',
};

export default Object.freeze(organization);
