/* GetCertus addition (MPL-2.0, see GETCERTUS.md): admin console phrases. */
const organization_role_details = {
  page_title: 'Detalii rol în organizație',
  back_to_org_roles: 'Înapoi la rolurile din organizație',
  delete_confirm:
    'Astfel vor fi eliminate permisiunile acestui rol de la utilizatorii afectați și vor fi șterse relațiile dintre rolurile din organizație, membrii organizației și permisiunile organizației.',
  deleted: 'Rolul în organizație {{name}} a fost șters.',
  permissions: {
    tab: 'Permisiuni',
    name_column: 'Permisiune',
    description_column: 'Descriere',
    type_column: 'Tipul permisiunii',
    type: {
      api: 'Permisiune API',
      org: 'Permisiune în organizație',
    },
    assign_permissions: 'Atribuie permisiuni',
    remove_permission: 'Elimină permisiunea',
    remove_confirmation:
      'Dacă această permisiune este eliminată, utilizatorul cu acest rol în organizație va pierde accesul acordat de ea.',
    removed: 'Permisiunea {{name}} a fost eliminată din acest rol în organizație',
    assign_description:
      'Atribuie permisiuni rolurilor din această organizație. Acestea pot include atât permisiuni ale organizației, cât și permisiuni API.',
    organization_permissions: 'Permisiuni în organizație',
    api_permissions: 'Permisiuni API',
    assign_organization_permissions: 'Atribuie permisiuni în organizație',
    assign_api_permissions: 'Atribuie permisiuni API',
  },
  general: {
    tab: 'General',
    settings: 'Setări',
    description:
      'Un rol în organizație este un grup de permisiuni care poate fi atribuit utilizatorilor. Permisiunile pot proveni din permisiunile predefinite ale organizației și din permisiunile API.',
    name_field: 'Nume',
    description_field: 'Descriere',
    description_field_placeholder: 'Utilizatori cu permisiuni doar de vizualizare',
  },
};

export default Object.freeze(organization_role_details);
