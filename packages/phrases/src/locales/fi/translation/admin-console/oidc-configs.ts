/* GetCertus addition (MPL-2.0, see GETCERTUS.md): admin console phrases. */
const oidc_configs = {
  sessions_card_title: 'GetCertus-istunnot',
  sessions_card_description:
    'Mukauta GetCertus-valtuutuspalvelimen tallentamaa istuntokäytäntöä. Se tallentaa käyttäjän yleisen tunnistautumistilan SSO:ta ja sovellusten välistä huomaamatonta uudelleentunnistautumista varten.',
  session_max_ttl_in_days: 'Istunnon enimmäiselinaika (TTL) päivinä',
  session_max_ttl_in_days_tip:
    'Ehdoton enimmäiselinaika istunnon luomisesta lähtien. Aktiivisuudesta riippumatta istunto päättyy, kun tämä kiinteä aika on kulunut.',
  cloud_private_key_rotation_notice:
    'GetCertus Cloudissa yksityisen avaimen kierrätys tulee voimaan 4 tunnin lisäajan jälkeen.',
};

export default Object.freeze(oidc_configs);
