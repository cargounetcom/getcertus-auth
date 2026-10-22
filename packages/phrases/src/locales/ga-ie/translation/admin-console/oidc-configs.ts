/* GetCertus addition (MPL-2.0, see GETCERTUS.md): admin console phrases. */
const oidc_configs = {
  sessions_card_title: 'Seisiúin GetCertus',
  sessions_card_description:
    'Saincheap an polasaí seisiúin a stórálann freastalaí údaraithe GetCertus. Taifeadann sé staid fhíordheimhnithe dhomhanda an úsáideora chun SSO agus athfhíordheimhniú ciúin idir aipeanna a chumasú.',
  session_max_ttl_in_days: 'Uasré an tseisiúin (TTL) i laethanta',
  session_max_ttl_in_days_tip:
    'Teorainn shaolré iomlán ó chruthú an tseisiúin. Beag beann ar ghníomhaíocht, críochnaíonn an seisiún nuair a bhíonn an tréimhse sheasta seo caite.',
  cloud_private_key_rotation_notice:
    'In GetCertus Cloud, tagann rothlú na heochrach príobháidí i bhfeidhm tar éis tréimhse chairde 4 uair an chloig.',
};

export default Object.freeze(oidc_configs);
