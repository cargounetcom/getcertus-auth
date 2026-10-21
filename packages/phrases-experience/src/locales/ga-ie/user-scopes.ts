/* GetCertus addition (MPL-2.0, see GETCERTUS.md): sign-in experience phrases. */
const user_scopes = {
  descriptions: {
    custom_data: 'Do shonraí saincheaptha',
    email: 'Do sheoladh ríomhphoist',
    phone: 'D’uimhir ghutháin',
    profile: 'D’ainm, d’ainm úsáideora, d’abhatár agus faisnéis phróifíle eile',
    roles: 'Do róil',
    identities: 'D’aitheantais shóisialta nasctha',
    'urn:logto:scope:organizations': 'Faisnéis faoi d’eagraíochtaí',
    'urn:logto:scope:organization_roles': 'Do róil in eagraíochtaí',
    address: 'Do sheoladh',
    'urn:logto:scope:sessions': 'Do sheisiúin ghníomhacha',
    'urn:logto:scope:trusted_devices': 'Do ghléasanna iontaofa',
  },
};

export default Object.freeze(user_scopes);
