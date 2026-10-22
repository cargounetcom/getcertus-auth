/* GetCertus addition (MPL-2.0, see GETCERTUS.md): admin console phrases. */
const oidc_configs = {
  sessions_card_title: 'GetCertus-sessioner',
  sessions_card_description:
    "Tilpas sessionspolitikken, der gemmes af GetCertus' autorisationsserver. Den registrerer brugerens globale godkendelsestilstand for at muliggøre SSO og lydløs gengodkendelse på tværs af apps.",
  session_max_ttl_in_days: 'Sessionens maksimale levetid (TTL) i dage',
  session_max_ttl_in_days_tip:
    'En absolut maksimal levetid fra sessionens oprettelse. Uanset aktivitet ophører sessionen, når denne faste periode er gået.',
  cloud_private_key_rotation_notice:
    'I GetCertus Cloud træder rotation af private nøgler i kraft efter en henstandsperiode på 4 timer.',
};

export default Object.freeze(oidc_configs);
