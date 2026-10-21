/* GetCertus addition (MPL-2.0, see GETCERTUS.md): sign-in experience phrases. */
const user_scopes = {
  descriptions: {
    custom_data: 'Datele tale personalizate',
    email: 'Adresa ta de e-mail',
    phone: 'Numărul tău de telefon',
    profile: 'Numele, numele de utilizator, avatarul și alte informații de profil',
    roles: 'Rolurile tale',
    identities: 'Identitățile sociale asociate',
    'urn:logto:scope:organizations': 'Informații despre organizațiile tale',
    'urn:logto:scope:organization_roles': 'Rolurile tale în organizații',
    address: 'Adresa ta',
    'urn:logto:scope:sessions': 'Sesiunile tale active',
    'urn:logto:scope:trusted_devices': 'Dispozitivele tale de încredere',
  },
};

export default Object.freeze(user_scopes);
