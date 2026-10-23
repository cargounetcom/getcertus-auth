/* GetCertus addition (MPL-2.0, see GETCERTUS.md): admin console phrases. */
const guard = {
  invalid_input: 'Το {{type}} του αιτήματος δεν είναι έγκυρο.',
  invalid_pagination: 'Η τιμή σελιδοποίησης του αιτήματος δεν είναι έγκυρη.',
  can_not_get_tenant_id: 'Δεν είναι δυνατή η λήψη του αναγνωριστικού tenant από το αίτημα.',
  file_size_exceeded: 'Έγινε υπέρβαση του μεγέθους αρχείου.',
  mime_type_not_allowed: 'Ο τύπος MIME δεν επιτρέπεται.',
  not_allowed_for_admin_tenant: 'Δεν επιτρέπεται για τον admin tenant.',
};

export default Object.freeze(guard);
