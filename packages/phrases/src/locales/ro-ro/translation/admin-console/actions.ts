/* GetCertus addition (MPL-2.0, see GETCERTUS.md): admin console phrases. */
const actions = {
  page_title: 'Acțiuni',
  title: 'Acțiuni',
  subtitle:
    'Rulează cod personalizat în anumite puncte ale fluxului de autentificare pentru a extinde comportamentul GetCertus.',
  status: {
    not_configured: 'Neconfigurată',
    configured: 'Configurată',
    enabled: 'Activată',
    disabled: 'Dezactivată',
  },
  types: {
    post_first_factor_verification: {
      name: 'După verificarea primului factor',
      description:
        'Rulează logică personalizată după ce verificarea locală a parolei eșuează la autentificare.',
    },
    post_sign_in: {
      name: 'După autentificare',
      description: 'Rulează logică personalizată după ce un utilizator se autentifică cu succes.',
    },
  },
  data_source_tab: 'Sursă de date',
  test_tab: 'Context de test',
  settings_tab: 'Setări',
  event_data: {
    title: 'Payload-ul evenimentului',
    subtitle:
      'Folosește parametrul de intrare `event` pentru datele evenimentului de autentificare.',
  },
  result_data: {
    title: 'Rezultatul acțiunii',
    subtitle:
      'Returnează un obiect rezultat pe care GetCertus îl înțelege pentru acest tip de acțiune.',
  },
  environment_variables: {
    title: 'Setează variabile de mediu',
    subtitle: 'Folosește variabile de mediu pentru a stoca informații sensibile.',
    input_field_title: 'Adaugă variabile de mediu',
    sample_code: 'Accesarea variabilelor de mediu în handlerul acțiunii. Exemplu:',
  },
  fetch_external_data: {
    title: 'Preia date externe',
    subtitle: 'Apelează API-uri externe din scriptul acțiunii.',
    description:
      'Folosește funcția `fetch` pentru a apela API-urile externe și a include datele în rezultatul acțiunii. Exemplu:',
  },
  settings: {
    title: 'Setări',
    subtitle: 'Stabilește dacă acțiunea este activă și cum sunt gestionate erorile de execuție.',
    enabled: {
      title: 'Activează acțiunea',
      description: 'Rulează acest script când este declanșat evenimentul de autentificare.',
    },
    on_execution_error: {
      title: 'La eroare de script',
      description: 'Alege cum trebuie să se comporte GetCertus când scriptul eșuează la execuție.',
      block: 'Blochează fluxul de autentificare',
      allow: 'Permite continuarea fluxului de autentificare',
      post_first_factor_description:
        'Când acest script eșuează, GetCertus respinge întotdeauna credențialele nevalide, astfel încât verificarea parolei să nu poată fi ocolită.',
    },
  },
  test_context: {
    subtitle: 'Ajustează payload-ul de test al evenimentului folosit la rularea testelor.',
    input_field_title: 'JSON exemplu pentru eveniment',
  },
  script: {
    title: 'Script',
    restore: 'Restabilește valorile implicite',
    restored: 'Restabilit',
  },
  tester: {
    run_button: 'Rulează testul',
    result_title: 'Rezultatul testului',
  },
  form_error: {
    invalid_json: 'Format JSON nevalid',
  },
  sandbox_and_security_warning: {
    title: 'Scripturile rulează cu privilegii de server',
    description:
      'În GetCertus self-hosted, acest script rulează în același mediu ca GetCertus: poate citi variabilele de mediu ale serverului și poate accesa servicii din rețeaua internă. Nu rulează într-un sandbox. Oferă acces la această pagină doar persoanelor cărora le-ai încredința accesul la server. Această acțiune rulează doar după ce verificarea locală a parolei eșuează — returnează `passwordVerified: true` doar după ce ai verificat independent parola trimisă. Utilizatorii creați de această acțiune ocolesc verificările valabile doar la înregistrare, inclusiv lista de blocare a e-mailurilor, domeniile doar SSO, modul cu înregistrarea dezactivată și verificările de profil obligatoriu la înregistrare. Modificările de profil și parolă ale utilizatorilor existenți au loc și ele înainte de finalizarea MFA.',
  },
  sandbox_warning: {
    title: 'Scripturile rulează cu privilegii de server',
    description:
      'În GetCertus self-hosted, acest script rulează în același mediu ca GetCertus: poate citi variabilele de mediu ale serverului și poate accesa servicii din rețeaua internă. Nu rulează într-un sandbox. Oferă acces la această pagină doar persoanelor cărora le-ai încredința accesul la server.',
  },
  security_warning: {
    title: 'Avertisment de securitate',
    description:
      'Această acțiune rulează doar după ce verificarea locală a parolei eșuează. Returnează `passwordVerified: true` doar după ce ai verificat independent parola trimisă. Utilizatorii creați de această acțiune ocolesc verificările valabile doar la înregistrare, inclusiv lista de blocare a e-mailurilor, domeniile doar SSO, modul cu înregistrarea dezactivată și verificările de profil obligatoriu la înregistrare. Modificările de profil și parolă ale utilizatorilor existenți au loc și ele înainte de finalizarea MFA.',
  },
  delete_modal_title: 'Șterge acțiunea',
  delete_modal_content:
    'Sigur vrei să ștergi această acțiune? Fluxul de autentificare nu va mai rula acest script.',
  deleted: 'Acțiunea a fost ștearsă',
  created: 'Acțiunea a fost creată',
  saved: 'Acțiunea a fost salvată',
};

export default Object.freeze(actions);
