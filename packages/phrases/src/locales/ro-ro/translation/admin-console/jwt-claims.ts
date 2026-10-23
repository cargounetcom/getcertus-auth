/* GetCertus addition (MPL-2.0, see GETCERTUS.md): admin console phrases. */
const jwt_claims = {
  title: 'JWT personalizat',
  description:
    'Personalizează tokenul de acces sau tokenul ID pentru a oferi informații suplimentare aplicației.',
  access_token: {
    card_title: 'Token de acces',
    card_description:
      'Tokenul de acces este credențialul folosit de API-uri pentru a autoriza cererile și conține doar claim-urile necesare deciziilor de acces.',
  },
  user_jwt: {
    card_field: 'Token de acces pentru utilizator',
    card_description: 'Adaugă date specifice utilizatorului la emiterea tokenului de acces.',
    for: 'pentru utilizator',
  },
  machine_to_machine_jwt: {
    card_field: 'Token de acces mașină la mașină',
    card_description: 'Adaugă date suplimentare la emiterea tokenurilor mașină la mașină.',
    for: 'pentru M2M',
  },
  id_token: {
    card_title: 'Token ID',
    card_description:
      'Tokenul ID este o declarație de identitate primită după autentificare, cu claim-uri de identitate pe care clientul le poate folosi pentru afișare sau pentru crearea sesiunii.',
    card_field: 'Token ID pentru utilizator',
    card_field_description:
      "Claim-urile 'sub', 'email', 'phone', 'profile' și 'address' sunt mereu disponibile. Celelalte claim-uri trebuie activate mai întâi aici. În toate cazurile, aplicația trebuie să solicite scopurile corespunzătoare la integrare pentru a le primi.",
  },
  code_editor_title: 'Personalizează claim-urile pentru {{token}}',
  custom_jwt_create_button: 'Adaugă claim-uri personalizate',
  custom_jwt_item: 'Claim-uri personalizate {{for}}',
  delete_modal_title: 'Șterge claim-urile personalizate',
  delete_modal_content: 'Sigur vrei să ștergi claim-urile personalizate?',
  clear: 'Ia de la capăt',
  cleared: 'Golit',
  restore: 'Restabilește valorile implicite',
  restored: 'Restabilit',
  data_source_tab: 'Sursă de date',
  error_handling_tab: 'Gestionarea erorilor',
  test_tab: 'Context de test',
  jwt_claims_description:
    'Claim-urile implicite sunt incluse automat în  și nu pot fi suprascrise.',
  user_data: {
    title: 'Context utilizator',
    subtitle:
      'Folosește parametrul de intrare `context.user` pentru informațiile esențiale despre utilizator.',
  },
  grant_data: {
    title: 'Context grant',
    subtitle:
      'Folosește parametrul de intrare `context.grant` pentru informațiile esențiale despre grant; disponibil doar la token exchange.',
  },
  interaction_data: {
    title: 'Contextul interacțiunii utilizatorului',
    subtitle:
      'Folosește parametrul `context.interaction` pentru detaliile interacțiunii utilizatorului în sesiunea de autentificare curentă.',
  },
  application_data: {
    title: 'Context aplicație',
    subtitle:
      'Folosește parametrul de intrare `context.application` pentru informațiile aplicației asociate tokenului.',
  },
  organization_data: {
    title: 'Context organizație',
    subtitle:
      'Folosește parametrul de intrare `context.organization` pentru informațiile organizației țintă; disponibil doar pentru tokenurile de organizație.',
  },
  token_data: {
    title: 'Payload-ul tokenului',
    subtitle:
      'Folosește parametrul de intrare `token` pentru payload-ul tokenului de acces curent. ',
  },
  api_context: {
    title: 'Context API: controlul accesului',
    subtitle: 'Folosește metoda `api.denyAccess` pentru a respinge cererea de token.',
  },
  error_handling: {
    title: 'Gestionarea erorilor',
    subtitle: 'Stabilește dacă emiterea tokenului trebuie blocată când scriptul eșuează.',
    input_field_title: 'Comportamentul emiterii tokenului la eroare de script',
    block_issuance_switch: 'Blochează emiterea tokenului când scriptul dă eroare',
    default_hint_create:
      'Scripturile noi de claim-uri personalizate blochează implicit emiterea tokenului când scriptul eșuează. Dacă API-ul furnizează deja o valoare, se folosește valoarea salvată.',
    default_hint_edit:
      'Scripturile existente de claim-uri personalizate fără această setare păstrează vechea valoare implicită (dezactivat) până când salvezi explicit o valoare.',
    warning:
      'Când este activată, erorile de execuție ale scriptului resping cererea de token cu `invalid_request` (400) și un `error_description` localizat. Apelurile către `api.denyAccess` returnează în continuare `access_denied`.',
  },
  fetch_external_data: {
    title: 'Preia date externe',
    subtitle: 'Include date din API-urile externe direct în claim-uri.',
    description:
      'Folosește funcția `fetch` pentru a apela API-urile externe și a include datele în claim-urile personalizate. Exemplu: ',
  },
  environment_variables: {
    title: 'Setează variabile de mediu',
    subtitle: 'Folosește variabile de mediu pentru a stoca informații sensibile.',
    input_field_title: 'Adaugă variabile de mediu',
    sample_code:
      'Accesarea variabilelor de mediu în handlerul de claim-uri personalizate ale tokenului. Exemplu: ',
  },
  jwt_claims_hint:
    'Păstrează claim-urile personalizate sub 50 KB. Claim-urile implicite sunt incluse automat în token și nu pot fi suprascrise.',
  tester: {
    subtitle: 'Ajustează tokenul și datele de utilizator de test.',
    run_button: 'Rulează testul',
    result_title: 'Rezultatul testului',
  },
  sandbox_warning: {
    title: 'Scripturile rulează cu privilegii de server',
    description:
      'În GetCertus self-hosted, acest script rulează în același mediu ca GetCertus: poate citi variabilele de mediu ale serverului și poate accesa servicii din rețeaua internă. Nu rulează într-un sandbox. Oferă acces la această pagină doar persoanelor cărora le-ai încredința accesul la server.',
  },
  form_error: {
    invalid_json: 'Format JSON nevalid',
  },
};

export default Object.freeze(jwt_claims);
