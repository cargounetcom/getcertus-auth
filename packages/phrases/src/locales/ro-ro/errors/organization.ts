/* GetCertus addition (MPL-2.0, see GETCERTUS.md): admin console phrases. */
const organization = {
  require_membership: 'Utilizatorul trebuie să fie membru al organizației pentru a continua.',
  role_names_not_found:
    'Au fost detectate nume de rol nevalide: {{names,list(type:conjunction)}}. Creează mai întâi aceste roluri înainte de a continua.',
};

export default Object.freeze(organization);
