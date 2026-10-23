/* GetCertus addition (MPL-2.0, see GETCERTUS.md): admin console phrases. */
const guard = {
  invalid_input: 'Förfrågans {{type}} är ogiltig.',
  invalid_pagination: 'Förfrågans pagineringsvärde är ogiltigt.',
  can_not_get_tenant_id: 'Det går inte att hämta tenant-ID från förfrågan.',
  file_size_exceeded: 'Filstorleken har överskridits.',
  mime_type_not_allowed: 'MIME-typen är inte tillåten.',
  not_allowed_for_admin_tenant: 'Inte tillåtet för admin-tenanten.',
};

export default Object.freeze(guard);
