/* GetCertus addition (MPL-2.0, see GETCERTUS.md): sign-in experience phrases. */
const user_scopes = {
  descriptions: {
    custom_data: 'Dine brugerdefinerede data',
    email: 'Din e-mailadresse',
    phone: 'Dit telefonnummer',
    profile: 'Dit navn, brugernavn, din avatar og andre profiloplysninger',
    roles: 'Dine roller',
    identities: 'Dine tilknyttede sociale identiteter',
    'urn:logto:scope:organizations': 'Oplysninger om dine organisationer',
    'urn:logto:scope:organization_roles': 'Dine roller i organisationer',
    address: 'Din adresse',
    'urn:logto:scope:sessions': 'Dine aktive sessioner',
    'urn:logto:scope:trusted_devices': 'Dine betroede enheder',
  },
};

export default Object.freeze(user_scopes);
