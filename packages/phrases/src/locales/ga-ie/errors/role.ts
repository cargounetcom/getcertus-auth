/* GetCertus addition (MPL-2.0, see GETCERTUS.md): admin console phrases. */
const role = {
  name_in_use: 'Tá an t-ainm róil {{name}} in úsáid cheana',
  scope_exists: 'Cuireadh an t-aitheantas scóipe {{scopeId}} leis an ról seo cheana',
  management_api_scopes_not_assignable_to_user_role:
    'Ní féidir scóip Management API a shannadh do ról úsáideora.',
  user_exists: 'Cuireadh an t-aitheantas úsáideora {{userId}} leis an ról seo cheana',
  application_exists:
    'Cuireadh an t-aitheantas feidhmchláir {{applicationId}} leis an ról seo cheana',
  default_role_missing:
    'Níl roinnt de na róil réamhshocraithe (roleNames) sa bhunachar sonraí; cruthaigh na róil ar dtús',
  internal_role_violation:
    'B\'fhéidir go bhfuil tú ag iarraidh ról inmheánach a nuashonrú nó a scriosadh, rud nach gceadaíonn GetCertus. Má tá ról nua á chruthú agat, bain triail as ainm nach dtosaíonn le "#internal:".',
};

export default Object.freeze(role);
