/* GetCertus addition (MPL-2.0, see GETCERTUS.md): admin console phrases. */
const oidc_configs = {
  sessions_card_title: 'GetCertus-sessies',
  sessions_card_description:
    'Pas het sessiebeleid aan dat door de GetCertus-autorisatieserver wordt opgeslagen. Het legt de globale authenticatiestatus van de gebruiker vast voor SSO en stille herauthenticatie tussen apps.',
  session_max_ttl_in_days: 'Maximale levensduur (TTL) van sessies in dagen',
  session_max_ttl_in_days_tip:
    'Een absolute maximale levensduur vanaf het aanmaken van de sessie. Ongeacht activiteit eindigt de sessie zodra deze vaste duur is verstreken.',
  cloud_private_key_rotation_notice:
    'In GetCertus Cloud wordt het roteren van private sleutels van kracht na een respijtperiode van 4 uur.',
};

export default Object.freeze(oidc_configs);
