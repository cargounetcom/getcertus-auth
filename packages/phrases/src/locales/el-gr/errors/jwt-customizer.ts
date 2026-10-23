/* GetCertus addition (MPL-2.0, see GETCERTUS.md): admin console phrases. */
const jwt_customizer = {
  general:
    'Παρουσιάστηκε σφάλμα κατά την προσαρμογή των claims του token. Δοκιμάστε ξανά αργότερα.',
  can_not_create_for_admin_tenant:
    'Δεν είναι δυνατή η δημιουργία προσαρμογής token για τον admin tenant.',
};

export default Object.freeze(jwt_customizer);
