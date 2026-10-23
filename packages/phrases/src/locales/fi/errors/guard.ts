/* GetCertus addition (MPL-2.0, see GETCERTUS.md): admin console phrases. */
const guard = {
  invalid_input: 'Pyynnön {{type}} on virheellinen.',
  invalid_pagination: 'Pyynnön sivutusarvo on virheellinen.',
  can_not_get_tenant_id: 'Tenantin tunnusta ei saatu pyynnöstä.',
  file_size_exceeded: 'Tiedostokoko ylitetty.',
  mime_type_not_allowed: 'MIME-tyyppi ei ole sallittu.',
  not_allowed_for_admin_tenant: 'Ei sallittu admin-tenantille.',
};

export default Object.freeze(guard);
