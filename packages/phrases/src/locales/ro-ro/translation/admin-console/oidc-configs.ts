/* GetCertus addition (MPL-2.0, see GETCERTUS.md): admin console phrases. */
const oidc_configs = {
  sessions_card_title: 'Sesiuni GetCertus',
  sessions_card_description:
    'Personalizează politica de sesiune stocată de serverul de autorizare GetCertus. Aceasta înregistrează starea globală de autentificare a utilizatorului pentru SSO și reautentificare silențioasă între aplicații.',
  session_max_ttl_in_days: 'Durata maximă de viață (TTL) a sesiunii, în zile',
  session_max_ttl_in_days_tip:
    'O limită absolută de viață de la crearea sesiunii. Indiferent de activitate, sesiunea se încheie când trece această durată fixă.',
  cloud_private_key_rotation_notice:
    'În GetCertus Cloud, rotirea cheii private intră în vigoare după o perioadă de grație de 4 ore.',
};

export default Object.freeze(oidc_configs);
