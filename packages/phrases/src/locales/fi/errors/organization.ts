/* GetCertus addition (MPL-2.0, see GETCERTUS.md): admin console phrases. */
const organization = {
  require_membership: 'Käyttäjän on oltava organisaation jäsen jatkaakseen.',
  role_names_not_found:
    'Havaittiin virheellisiä roolinimiä: {{names,list(type:conjunction)}}. Luo nämä roolit ensin ennen kuin jatkat.',
};

export default Object.freeze(organization);
