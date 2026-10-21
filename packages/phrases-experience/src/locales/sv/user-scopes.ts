/* GetCertus addition (MPL-2.0, see GETCERTUS.md): sign-in experience phrases. */
const user_scopes = {
  descriptions: {
    custom_data: 'Dina anpassade data',
    email: 'Din e-postadress',
    phone: 'Ditt telefonnummer',
    profile: 'Ditt namn, användarnamn, din avatar och andra profiluppgifter',
    roles: 'Dina roller',
    identities: 'Dina kopplade sociala identiteter',
    'urn:logto:scope:organizations': 'Information om dina organisationer',
    'urn:logto:scope:organization_roles': 'Dina roller i organisationer',
    address: 'Din adress',
    'urn:logto:scope:sessions': 'Dina aktiva sessioner',
    'urn:logto:scope:trusted_devices': 'Dina betrodda enheter',
  },
};

export default Object.freeze(user_scopes);
