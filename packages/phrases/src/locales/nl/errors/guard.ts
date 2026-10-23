/* GetCertus addition (MPL-2.0, see GETCERTUS.md): admin console phrases. */
const guard = {
  invalid_input: 'De {{type}} van het verzoek is ongeldig.',
  invalid_pagination: 'De pagineringswaarde van het verzoek is ongeldig.',
  can_not_get_tenant_id: 'De tenant-ID kan niet uit het verzoek worden gehaald.',
  file_size_exceeded: 'De bestandsgrootte is overschreden.',
  mime_type_not_allowed: 'Dit MIME-type is niet toegestaan.',
  not_allowed_for_admin_tenant: 'Niet toegestaan voor de admin-tenant.',
};

export default Object.freeze(guard);
