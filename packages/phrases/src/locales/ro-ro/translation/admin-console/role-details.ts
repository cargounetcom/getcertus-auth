/* GetCertus addition (MPL-2.0, see GETCERTUS.md): admin console phrases. */
const role_details = {
  back_to_roles: 'Înapoi la roluri',
  identifier: 'Identificator',
  delete_description:
    'Astfel, permisiunile asociate acestui rol vor fi eliminate de la utilizatorii afectați, iar asocierile dintre roluri, utilizatori și permisiuni vor fi șterse.',
  role_deleted: '{{name}} a fost șters.',
  general_tab: 'General',
  users_tab: 'Utilizatori',
  m2m_apps_tab: 'Aplicații machine-to-machine',
  permissions_tab: 'Permisiuni',
  settings: 'Setări',
  settings_description:
    'Rolurile sunt grupuri de permisiuni care pot fi atribuite utilizatorilor. Ele reunesc și permisiuni definite pentru diferite API-uri, astfel încât adăugarea, eliminarea sau ajustarea permisiunilor este mai eficientă decât atribuirea lor individuală.',
  field_name: 'Nume',
  field_description: 'Descriere',
  field_is_default: 'Rol implicit',
  field_is_default_description:
    'Setați acest rol ca rol implicit pentru utilizatorii noi. Se pot seta mai multe roluri implicite. Aceasta afectează și rolurile implicite ale utilizatorilor creați prin Management API.',
  type_m2m_role_tag: 'Machine-to-machine',
  type_user_role_tag: 'Utilizator',
  m2m_role_notification:
    'Atribuiți acest rol machine-to-machine unei aplicații machine-to-machine pentru a acorda acces la resursele API asociate. <a>Creați mai întâi o aplicație machine-to-machine</a>, dacă nu ați făcut-o deja.',
  permission: {
    assign_button: 'Atribuiți permisiuni',
    assign_title: 'Atribuiți permisiuni',
    assign_subtitle:
      'Atribuiți permisiuni acestui rol. Rolul primește permisiunile adăugate, iar utilizatorii cu acest rol le moștenesc.',
    assign_form_field: 'Atribuiți permisiuni',
    added_text: '{{count, number}} permisiune adăugată',
    added_text_other: '{{count, number}} permisiuni adăugate',
    api_permission_count: '{{count, number}} permisiune',
    api_permission_count_other: '{{count, number}} permisiuni',
    confirm_assign: 'Atribuiți permisiuni',
    permission_assigned: 'Permisiunile selectate au fost atribuite acestui rol',
    deletion_description:
      'Dacă această permisiune este eliminată, utilizatorii cu acest rol vor pierde accesul acordat de ea.',
    permission_deleted: 'Permisiunea "{{name}}" a fost eliminată din acest rol',
    empty: 'Nicio permisiune disponibilă',
  },
  users: {
    assign_button: 'Atribuiți utilizatori',
    name_column: 'Utilizator',
    app_column: 'Aplicație',
    latest_sign_in_column: 'Ultima autentificare',
    delete_description:
      'Utilizatorul rămâne în baza de utilizatori, dar pierde autorizarea pentru acest rol.',
    deleted: '{{name}} a fost eliminat din acest rol',
    assign_title: 'Atribuiți utilizatori pentru {{name}}',
    assign_subtitle:
      'Găsiți utilizatorii potriviți căutând după nume, e-mail, telefon sau ID utilizator.',
    assign_field: 'Atribuiți utilizatori',
    confirm_assign: 'Atribuiți utilizatori',
    assigned_toast_text: 'Utilizatorii selectați au fost atribuiți acestui rol',
    empty: 'Niciun utilizator disponibil',
  },
  applications: {
    assign_button: 'Atribuiți aplicații machine-to-machine',
    name_column: 'Aplicație',
    app_column: 'Aplicație machine-to-machine',
    description_column: 'Descriere',
    delete_description:
      'Aplicația rămâne printre aplicațiile dvs., dar pierde autorizarea pentru acest rol.',
    deleted: '{{name}} a fost eliminată din acest rol',
    assign_title: 'Atribuiți aplicații machine-to-machine pentru {{name}}',
    assign_subtitle:
      'Găsiți aplicațiile machine-to-machine potrivite căutând după nume, descriere sau ID aplicație.',
    assign_field: 'Atribuiți aplicații machine-to-machine',
    confirm_assign: 'Atribuiți aplicații machine-to-machine',
    assigned_toast_text: 'Aplicațiile selectate au fost atribuite acestui rol',
    empty: 'Nicio aplicație disponibilă',
  },
};

export default Object.freeze(role_details);
