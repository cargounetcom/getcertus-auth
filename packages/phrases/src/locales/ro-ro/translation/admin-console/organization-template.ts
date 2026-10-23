/* GetCertus addition (MPL-2.0, see GETCERTUS.md): admin console phrases. */
const organization_template = {
  title: 'Șablon de organizație',
  subtitle:
    'În aplicațiile SaaS multi-tenant, un șablon de organizație definește politici comune de control al accesului (permisiuni și roluri) pentru mai multe organizații.',
  roles: {
    tab_name: 'Roluri în organizație',
    search_placeholder: 'Caută după numele rolului',
    create_title: 'Creează rol în organizație',
    role_column: 'Rol în organizație',
    permissions_column: 'Permisiuni',
    placeholder_title: 'Rol în organizație',
    placeholder_description:
      'Un rol în organizație este un grup de permisiuni care poate fi atribuit utilizatorilor. Permisiunile trebuie să provină din permisiunile predefinite ale organizației.',
    create_modal: {
      title: 'Creează rol în organizație',
      create: 'Creează rolul',
      name: 'Numele rolului',
      description: 'Descriere',
      type: 'Tipul rolului',
      created: 'Rolul în organizație {{name}} a fost creat.',
    },
  },
  permissions: {
    tab_name: 'Permisiuni în organizație',
    search_placeholder: 'Caută după numele permisiunii',
    create_org_permission: 'Creează permisiune în organizație',
    permission_column: 'Permisiune în organizație',
    description_column: 'Descriere',
    placeholder_title: 'Permisiune în organizație',
    placeholder_description:
      'O permisiune în organizație reprezintă autorizarea de a accesa o resursă în contextul unei organizații.',
    delete_confirm:
      'Dacă această permisiune este ștearsă, toate rolurile din organizație care o includ o vor pierde, iar utilizatorii care o aveau vor pierde accesul acordat de ea.',
    create_title: 'Creează permisiune în organizație',
    edit_title: 'Editează permisiunea din organizație',
    permission_field_name: 'Numele permisiunii',
    description_field_name: 'Descriere',
    description_field_placeholder: 'Citește istoricul programărilor',
    create_permission: 'Creează permisiunea',
    created: 'Permisiunea din organizație {{name}} a fost creată.',
  },
};

export default Object.freeze(organization_template);
