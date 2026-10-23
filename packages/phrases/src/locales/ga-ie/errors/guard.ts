/* GetCertus addition (MPL-2.0, see GETCERTUS.md): admin console phrases. */
const guard = {
  invalid_input: 'Tá {{type}} an iarratais neamhbhailí.',
  invalid_pagination: 'Tá luach leathanaigh an iarratais neamhbhailí.',
  can_not_get_tenant_id: 'Ní féidir aitheantas an tionónta a fháil ón iarratas.',
  file_size_exceeded: 'Sáraíodh méid an chomhaid.',
  mime_type_not_allowed: 'Ní cheadaítear an cineál MIME.',
  not_allowed_for_admin_tenant: 'Ní cheadaítear é don tionónta riaracháin.',
};

export default Object.freeze(guard);
