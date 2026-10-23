/* GetCertus addition (MPL-2.0, see GETCERTUS.md): admin console phrases. */
const jwt_customizer = {
  general:
    'Er is een fout opgetreden bij het aanpassen van de tokenclaims. Probeer het later opnieuw.',
  can_not_create_for_admin_tenant: 'Voor de admin-tenant kan geen token-customizer worden gemaakt.',
};

export default Object.freeze(jwt_customizer);
