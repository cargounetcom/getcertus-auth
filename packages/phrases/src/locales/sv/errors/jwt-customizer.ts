/* GetCertus addition (MPL-2.0, see GETCERTUS.md): admin console phrases. */
const jwt_customizer = {
  general: 'Ett fel uppstod när tokenclaims skulle anpassas. Försök igen senare.',
  can_not_create_for_admin_tenant: 'Det går inte att skapa en tokenanpassning för admin-tenanten.',
};

export default Object.freeze(jwt_customizer);
