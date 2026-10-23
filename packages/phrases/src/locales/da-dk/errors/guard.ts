/* GetCertus addition (MPL-2.0, see GETCERTUS.md): admin console phrases. */
const guard = {
  invalid_input: 'Anmodningens {{type}} er ugyldig.',
  invalid_pagination: 'Anmodningens pagineringsværdi er ugyldig.',
  can_not_get_tenant_id: 'Kan ikke hente tenant-ID fra anmodningen.',
  file_size_exceeded: 'Filstørrelsen er overskredet.',
  mime_type_not_allowed: 'MIME-typen er ikke tilladt.',
  not_allowed_for_admin_tenant: 'Ikke tilladt for admin-tenanten.',
};

export default Object.freeze(guard);
