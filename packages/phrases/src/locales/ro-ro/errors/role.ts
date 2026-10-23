/* GetCertus addition (MPL-2.0, see GETCERTUS.md): admin console phrases. */
const role = {
  name_in_use: 'Numele de rol {{name}} este deja folosit',
  scope_exists: 'ID-ul de scop {{scopeId}} a fost deja adăugat acestui rol',
  management_api_scopes_not_assignable_to_user_role:
    'Scopurile Management API nu pot fi atribuite unui rol de utilizator.',
  user_exists: 'ID-ul de utilizator {{userId}} a fost deja adăugat acestui rol',
  application_exists: 'ID-ul de aplicație {{applicationId}} a fost deja adăugat acestui rol',
  default_role_missing:
    'Unele dintre rolurile implicite (roleNames) nu există în baza de date; creează mai întâi rolurile',
  internal_role_violation:
    'Este posibil să încerci să actualizezi sau să ștergi un rol intern, ceea ce GetCertus nu permite. Dacă creezi un rol nou, alege un nume care nu începe cu "#internal:".',
};

export default Object.freeze(role);
