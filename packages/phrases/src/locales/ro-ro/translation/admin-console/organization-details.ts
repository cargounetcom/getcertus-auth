/* GetCertus addition (MPL-2.0, see GETCERTUS.md): admin console phrases. */
const organization_details = {
  page_title: 'Detalii organizație',
  delete_confirmation:
    'După ștergere, toți membrii își vor pierde calitatea de membru și rolurile din această organizație. Acțiunea nu poate fi anulată.',
  organization_id: 'ID organizație',
  settings_description:
    'Organizațiile reprezintă echipele, clienții de afaceri și companiile partenere care pot accesa aplicațiile tale.',
  name_placeholder: 'Numele organizației; nu trebuie să fie unic.',
  description_placeholder: 'O descriere a organizației.',
  member: 'Membru',
  member_other: 'Membri',
  add_members_to_organization: 'Adaugă membri în organizația {{name}}',
  add_members_to_organization_description:
    'Găsește utilizatorii potriviți căutând după nume, e-mail, telefon sau ID utilizator. Membrii existenți nu apar în rezultatele căutării.',
  add_with_organization_role: 'Adaugă cu rol(uri) în organizație',
  user: 'Utilizator',
  application: 'Aplicație',
  application_other: 'Aplicații',
  add_applications_to_organization: 'Adaugă aplicații în organizația {{name}}',
  add_applications_to_organization_description:
    'Găsește aplicațiile potrivite căutând după ID-ul, numele sau descrierea aplicației. Aplicațiile existente nu apar în rezultatele căutării.',
  at_least_one_application: 'Este necesară cel puțin o aplicație.',
  remove_application_from_organization: 'Elimină aplicația din organizație',
  remove_application_from_organization_description:
    'După eliminare, aplicația își va pierde asocierea și rolurile din această organizație. Acțiunea nu poate fi anulată.',
  search_application_placeholder: 'Caută după ID-ul, numele sau descrierea aplicației',
  roles: 'Roluri în organizație',
  authorize_to_roles: 'Autorizează {{name}} să acceseze următoarele roluri:',
  edit_organization_roles: 'Editează rolurile din organizație',
  edit_organization_roles_title: 'Editează rolurile din organizație pentru {{name}}',
  remove_user_from_organization: 'Elimină utilizatorul din organizație',
  remove_user_from_organization_description:
    'După eliminare, utilizatorul își va pierde calitatea de membru și rolurile din această organizație. Acțiunea nu poate fi anulată.',
  search_user_placeholder: 'Caută după nume, e-mail, telefon sau ID utilizator',
  at_least_one_user: 'Este necesar cel puțin un utilizator.',
  organization_roles_tooltip: 'Rolurile atribuite pentru {{type}} în această organizație.',
  custom_data: 'Date personalizate',
  custom_data_tip:
    'Datele personalizate sunt un obiect JSON în care poți stoca date suplimentare asociate organizației.',
  invalid_json_object: 'Obiect JSON nevalid.',
  branding: {
    name: 'branding',
    description: 'Personalizează experiența de autentificare la nivel de organizație.',
    organization_level_sie: 'Experiență de autentificare la nivel de organizație',
    organization_level_sie_switch:
      'Activează experiența de autentificare la nivel de organizație și configurează un branding specific organizației. Dacă este dezactivată, se folosește mai întâi experiența de autentificare la nivel de aplicație, apoi experiența de autentificare generală.',
    logo: 'Logourile organizației',
    logo_tooltip:
      'Poți transmite ID-ul organizației pentru a afișa acest logo în experiența de autentificare; versiunea întunecată a logoului este necesară dacă modul întunecat este activat în setările experienței de autentificare generale. <a>Află mai multe</a>',
  },
  jit: {
    title: 'Provizionare just-in-time',
    description:
      'Utilizatorii pot deveni automat membri ai organizației și pot primi roluri la prima autentificare prin anumite metode. Poți seta condiții pentru provizionarea just-in-time.',
    email_domain: 'Provizionare după domeniul de e-mail',
    email_domain_description:
      'Utilizatorii noi care se înregistrează cu adrese de e-mail verificate sau prin autentificare socială cu adrese de e-mail verificate vor deveni automat membri ai organizației. <a>Află mai multe</a>',
    email_domain_placeholder: 'Introdu domeniile de e-mail pentru provizionarea just-in-time',
    invalid_domain: 'Domeniu nevalid',
    domain_already_added: 'Domeniul a fost deja adăugat',
    sso_enabled_domain_warning:
      'Ai introdus unul sau mai multe domenii de e-mail asociate cu enterprise SSO. Utilizatorii cu aceste adrese vor urma fluxul SSO standard și nu vor fi adăugați în această organizație decât dacă provizionarea prin enterprise SSO este configurată.',
    enterprise_sso: 'Provizionare prin enterprise SSO',
    no_enterprise_connector_set:
      'Nu ai configurat încă niciun conector enterprise SSO. Adaugă mai întâi conectori pentru a activa provizionarea prin enterprise SSO. <a>Configurează</a>',
    add_enterprise_connector: 'Adaugă conector enterprise',
    enterprise_sso_description:
      'Utilizatorii noi sau existenți care se autentifică pentru prima dată prin enterprise SSO vor deveni automat membri ai organizației. <a>Află mai multe</a>',
    organization_roles: 'Roluri implicite în organizație',
    organization_roles_description:
      'Atribuie roluri utilizatorilor când devin membri ai organizației prin provizionare just-in-time.',
  },
  mfa: {
    title: 'Autentificare multifactor (MFA)',
    tip: 'Când MFA este obligatoriu, utilizatorii fără MFA configurat vor fi respinși la încercarea de a obține un token de organizație. Această setare nu afectează autentificarea utilizatorilor.',
    description:
      'Cere utilizatorilor să configureze autentificarea multifactor pentru a accesa această organizație.',
    no_mfa_warning:
      'Nu este activată nicio metodă de autentificare multifactor pentru tenantul tău. Utilizatorii nu vor putea accesa această organizație până când nu este activată cel puțin o <a>metodă de autentificare multifactor</a>.',
  },
};

export default Object.freeze(organization_details);
