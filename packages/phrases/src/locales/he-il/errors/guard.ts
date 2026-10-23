/* GetCertus addition (MPL-2.0, see GETCERTUS.md): admin console phrases. */
const guard = {
  invalid_input: 'ה-{{type}} של הבקשה אינו תקין.',
  invalid_pagination: 'ערך העימוד של הבקשה אינו תקין.',
  can_not_get_tenant_id: 'לא ניתן לקבל את מזהה ה-tenant מהבקשה.',
  file_size_exceeded: 'חריגה מגודל הקובץ.',
  mime_type_not_allowed: 'סוג ה-MIME אינו מותר.',
  not_allowed_for_admin_tenant: 'אינו מותר עבור ה-tenant של הניהול.',
};

export default Object.freeze(guard);
