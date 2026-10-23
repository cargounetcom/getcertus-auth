/* GetCertus addition (MPL-2.0, see GETCERTUS.md): admin console phrases. */
const jwt_customizer = {
  general:
    'A apărut o eroare la personalizarea claim-urilor tokenului. Încearcă din nou mai târziu.',
  can_not_create_for_admin_tenant:
    'Nu se poate crea un personalizator de tokenuri pentru tenantul de administrare.',
};

export default Object.freeze(jwt_customizer);
