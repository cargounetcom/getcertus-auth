/* GetCertus addition (MPL-2.0, see GETCERTUS.md): sign-in experience phrases. */
const user_scopes = {
  descriptions: {
    custom_data: 'Mukautetut tietosi',
    email: 'Sähköpostiosoitteesi',
    phone: 'Puhelinnumerosi',
    profile: 'Nimesi, käyttäjänimesi, avatarisi ja muut profiilitiedot',
    roles: 'Roolisi',
    identities: 'Liitetyt sosiaaliset identiteettisi',
    'urn:logto:scope:organizations': 'Organisaatioidesi tiedot',
    'urn:logto:scope:organization_roles': 'Roolisi organisaatioissa',
    address: 'Osoitteesi',
    'urn:logto:scope:sessions': 'Aktiiviset istuntosi',
    'urn:logto:scope:trusted_devices': 'Luotetut laitteesi',
  },
};

export default Object.freeze(user_scopes);
