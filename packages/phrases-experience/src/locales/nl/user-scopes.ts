/* GetCertus addition (MPL-2.0, see GETCERTUS.md): sign-in experience phrases. */
const user_scopes = {
  descriptions: {
    custom_data: 'Je aangepaste gegevens',
    email: 'Je e-mailadres',
    phone: 'Je telefoonnummer',
    profile: 'Je naam, gebruikersnaam, avatar en andere profielgegevens',
    roles: 'Je rollen',
    identities: 'Je gekoppelde sociale identiteiten',
    'urn:logto:scope:organizations': 'Gegevens over je organisaties',
    'urn:logto:scope:organization_roles': 'Je rollen in organisaties',
    address: 'Je adres',
    'urn:logto:scope:sessions': 'Je actieve sessies',
    'urn:logto:scope:trusted_devices': 'Je vertrouwde apparaten',
  },
};

export default Object.freeze(user_scopes);
