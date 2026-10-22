/* GetCertus addition (MPL-2.0, see GETCERTUS.md): admin console phrases. */
const roles = {
  page_title: 'Roluri',
  title: 'Roluri',
  subtitle:
    'Rolurile includ permisiuni care stabilesc ce poate face un utilizator. RBAC folosește roluri pentru a le oferi utilizatorilor acces la resurse pentru anumite acțiuni.',
  create: 'Creați rol',
  role_name: 'Numele rolului',
  role_type: 'Tipul rolului',
  type_user: 'Utilizator',
  type_machine_to_machine: 'Machine-to-machine',
  role_description: 'Descriere',
  role_name_placeholder: 'Introduceți numele rolului',
  role_description_placeholder: 'Introduceți descrierea rolului',
  col_roles: 'Roluri',
  col_type: 'Tip',
  col_description: 'Descriere',
  col_assigned_entities: 'Atribuite',
  user_counts: '{{count}} utilizatori',
  application_counts: '{{count}} aplicații',
  user_count: '{{count}} utilizator',
  application_count: '{{count}} aplicație',
  assign_permissions: 'Atribuiți permisiuni',
  create_role_title: 'Creați rol',
  create_role_description:
    'Folosiți rolurile pentru a organiza permisiunile și a le atribui utilizatorilor.',
  create_role_button: 'Creați rol',
  role_created: 'Rolul {{name}} a fost creat.',
  search: 'Căutați după numele rolului, descriere sau ID',
  placeholder_title: 'Roluri',
  placeholder_description:
    'Rolurile sunt grupuri de permisiuni care pot fi atribuite utilizatorilor. Adăugați mai întâi permisiuni înainte de a crea roluri.',
  assign_roles: 'Atribuiți roluri',
  management_api_access_notification:
    'Pentru acces la GetCertus Management API, selectați roluri cu permisiuni Management API <flag/>.',
  with_management_api_access_tip:
    'Acest rol machine-to-machine include permisiuni pentru GetCertus Management API',
  role_creation_hint: 'Nu găsiți rolul potrivit? <a>Creați un rol</a>',
};

export default Object.freeze(roles);
