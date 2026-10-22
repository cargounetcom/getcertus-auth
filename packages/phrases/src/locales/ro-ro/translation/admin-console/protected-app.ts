/* GetCertus addition (MPL-2.0, see GETCERTUS.md): admin console phrases. */
const protected_app = {
  name: 'Aplicație protejată',
  title: 'Creează o aplicație protejată: adaugă autentificare simplu și foarte rapid',
  fast_create: 'Creare rapidă',
  modal_title: 'Creează aplicație protejată',
  modal_subtitle:
    'Activează protecție sigură și rapidă din câteva clicuri. Adaugă cu ușurință autentificare aplicației web existente.',
  form: {
    url_field_label: 'URL-ul de origine',
    url_field_placeholder: 'https://domain.com/',
    url_field_description: 'Indică adresa aplicației care necesită protecție prin autentificare.',
    url_field_modification_notice:
      'Modificările URL-ului de origine pot dura 1-2 minute până devin active în toate locațiile rețelei globale.',
    url_field_tooltip:
      "Indică adresa aplicației, fără niciun '/cale'. După creare, poți personaliza regulile de autentificare pe rute.\n\nNotă: URL-ul de origine în sine nu necesită autentificare; protecția se aplică doar accesului prin domeniul desemnat al aplicației.",
    domain_field_label: 'Domeniul aplicației',
    domain_field_placeholder: 'your-domain',
    domain_field_description:
      'Acest URL funcționează ca proxy de protecție prin autentificare pentru URL-ul original. Un domeniu personalizat poate fi aplicat după creare.',
    domain_field_description_short:
      'Acest URL funcționează ca proxy de protecție prin autentificare pentru URL-ul original.',
    domain_field_tooltip:
      "Aplicațiile protejate de GetCertus sunt găzduite implicit la 'your-domain.{{domain}}'. Un domeniu personalizat poate fi aplicat după creare.",
    create_application: 'Creează aplicația',
    create_protected_app: 'Creare rapidă',
    errors: {
      domain_required: 'Domeniul este obligatoriu.',
      domain_in_use: 'Acest subdomeniu este deja folosit.',
      invalid_domain_format:
        "Format de subdomeniu nevalid: folosește doar litere mici, cifre și cratime '-'.",
      url_required: 'URL-ul de origine este obligatoriu.',
      invalid_url:
        "Format nevalid pentru URL-ul de origine: folosește http:// sau https://. Notă: '/cale' nu este acceptat momentan.",
      localhost:
        'Expune mai întâi serverul local pe internet. Află mai multe despre <a>dezvoltarea locală</a>.',
    },
  },
  id_token_claims: {
    card_title: 'Claim-uri în tokenul ID',
    card_description:
      'Solicită scopuri suplimentare de utilizator la autentificarea în aplicația protejată pentru a include claim-urile extinse activate în tokenul ID transmis.',
    field_title: 'Scopuri suplimentare',
    field_description:
      'Claim-urile sunt incluse doar dacă sunt activate în <a>JWT personalizat > Token ID</a> și scopul corespunzător este solicitat aici.',
    table_column_scope: 'Scop',
    table_column_claims_forwarded: 'Claim-uri transmise',
    disabled_claims_hint:
      'Claim-urile afișate cu gri nu sunt încă transmise. Activează-le în <a>JWT personalizat > Token ID</a> pentru a le include în tokenul ID.',
  },
  success_message:
    '🎉 Autentificarea aplicației a fost activată! Descoperă noua experiență a site-ului tău.',
};

export default Object.freeze(protected_app);
