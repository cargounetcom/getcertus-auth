/* GetCertus addition (MPL-2.0, see GETCERTUS.md): admin console phrases. */
const oidc_configs = {
  sessions_card_title: 'GetCertus-sessioner',
  sessions_card_description:
    'Anpassa sessionspolicyn som lagras av GetCertus auktoriseringsserver. Den registrerar användarens globala autentiseringsstatus för SSO och tyst återautentisering mellan appar.',
  session_max_ttl_in_days: 'Sessionens maximala livslängd (TTL) i dagar',
  session_max_ttl_in_days_tip:
    'En absolut maximal livslängd från att sessionen skapas. Oavsett aktivitet upphör sessionen när den här fasta tiden har gått.',
  cloud_private_key_rotation_notice:
    'I GetCertus Cloud träder rotationen av privata nycklar i kraft efter en respitperiod på 4 timmar.',
};

export default Object.freeze(oidc_configs);
