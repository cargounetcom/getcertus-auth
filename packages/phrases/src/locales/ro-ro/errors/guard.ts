/* GetCertus addition (MPL-2.0, see GETCERTUS.md): admin console phrases. */
const guard = {
  invalid_input: '{{type}} din cerere nu este valid.',
  invalid_pagination: 'Valoarea de paginare din cerere nu este validă.',
  can_not_get_tenant_id: 'ID-ul tenantului nu poate fi obținut din cerere.',
  file_size_exceeded: 'Dimensiunea fișierului a fost depășită.',
  mime_type_not_allowed: 'Tipul MIME nu este permis.',
  not_allowed_for_admin_tenant: 'Nu este permis pentru tenantul de administrare.',
};

export default Object.freeze(guard);
