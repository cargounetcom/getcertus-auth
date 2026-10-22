/* GetCertus addition (MPL-2.0, see GETCERTUS.md): admin console phrases. */
const organizations = {
  organization: 'Organizație',
  page_title: 'Organizații',
  title: 'Organizații',
  subtitle:
    'Organizațiile sunt folosite de obicei în aplicații SaaS sau multi-tenant similare și reprezintă clienții tăi: echipe, organizații sau companii întregi. Organizațiile sunt elementul de bază pentru autentificarea și autorizarea B2B.',
  organization_template: 'Șablon de organizație',
  organization_id: 'ID organizație',
  members: 'Membri',
  machine_to_machine: 'Aplicații mașină la mașină',
  branding: 'Branding',
  create_organization: 'Creează organizație',
  setup_organization: 'Configurează organizația',
  organization_list_placeholder_title: 'Organizație',
  organization_list_placeholder_text:
    'Organizațiile sunt folosite des, ca bună practică, în aplicații SaaS sau multi-tenant similare. Îți permit să dezvolți aplicații în care clienții creează și gestionează organizații, invită membri și atribuie roluri.',
  organization_name_placeholder: 'Organizația mea',
  organization_description_placeholder: 'O scurtă descriere a organizației',
  organization_permission: 'Permisiune în organizație',
  organization_permission_other: 'Permisiuni în organizație',
  create_permission_placeholder: 'Citește istoricul programărilor',
  organization_role: 'Rol în organizație',
  organization_role_other: 'Roluri în organizație',
  organization_role_description:
    'Un rol în organizație este un grup de permisiuni care poate fi atribuit utilizatorilor. Permisiunile trebuie să provină din permisiunile predefinite ale organizației.',
  role: 'Rol',
  search_placeholder: 'Caută după numele sau ID-ul organizației',
  search_role_placeholder: 'Scrie pentru a căuta și selecta roluri',
  empty_placeholder: '🤔 Nu ai configurat încă niciun element de tip {{entity}}.',
  organization_and_member: 'Organizație și membru',
  organization_and_member_description:
    'O organizație este un grup de utilizatori și poate reprezenta echipe, clienți de afaceri și companii partenere, fiecare utilizator fiind un "membru". Acestea pot fi entitățile de bază pentru cerințele tale multi-tenant.',
  guide: {
    title: 'Începe cu ghiduri',
    subtitle: 'Accelerează configurarea organizației cu ghidurile noastre',
    introduction: {
      title: 'Cum funcționează organizațiile în GetCertus',
      section_1: {
        title: 'O organizație este un grup de utilizatori (identități)',
      },
      section_2: {
        title:
          'Șablonul de organizație este conceput pentru controlul accesului în aplicații multi-tenant',
        description:
          'În aplicațiile SaaS multi-tenant, mai multe organizații folosesc adesea același șablon de control al accesului, care include permisiuni și roluri. În GetCertus îl numim "șablon de organizație".',
        permission_description:
          'O permisiune în organizație reprezintă autorizarea de a accesa o resursă în contextul unei organizații.',
        role_description_deprecated:
          'Un rol în organizație este un grup de permisiuni ale organizației care poate fi atribuit membrilor.',
        role_description:
          'Un rol în organizație este un grup de permisiuni ale organizației sau permisiuni API care poate fi atribuit membrilor.',
      },
      section_3: {
        title: 'Pot atribui permisiuni API rolurilor din organizație?',
        description:
          'Da, poți atribui permisiuni API rolurilor din organizație. GetCertus îți oferă flexibilitatea de a gestiona eficient rolurile organizației, incluzând în ele atât permisiuni ale organizației, cât și permisiuni API.',
      },
      section_4: {
        title: 'Interacționează cu ilustrația pentru a vedea cum se leagă totul',
        description:
          'Să luăm un exemplu. John și Sarah sunt în organizații diferite și au roluri diferite în funcție de organizație. Trece cu mouse-ul peste diferitele module și vezi ce se întâmplă.',
      },
    },
    organization_permissions: 'Permisiuni în organizație',
    organization_roles: 'Roluri în organizație',
    admin: 'Administrator',
    member: 'Membru',
    guest: 'Invitat',
    role_description:
      'Rolul "{{role}}" folosește același șablon de organizație în organizații diferite.',
    john: 'John',
    john_tip:
      'John aparține de două organizații, cu adresa de e-mail "john@email.com" ca identificator unic. Este administrator în organizația A și invitat în organizația B.',
    sarah: 'Sarah',
    sarah_tip:
      'Sarah aparține de o singură organizație, cu adresa de e-mail "sarah@email.com" ca identificator unic. Este administrator în organizația B.',
  },
};

export default Object.freeze(organizations);
