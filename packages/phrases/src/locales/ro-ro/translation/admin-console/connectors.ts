/* GetCertus addition (MPL-2.0, see GETCERTUS.md): admin console phrases. */
const connectors = {
  page_title: 'Conectori',
  title: 'Conectori',
  subtitle: 'Configurați conectori pentru autentificare fără parolă și prin rețele sociale',
  create: 'Adăugați conector social',
  config_sie_notice: 'Ați configurat conectori. Nu uitați să îi configurați și în <a>{{link}}</a>.',
  config_sie_link_text: 'experiența de autentificare',
  tab_email_sms: 'Conectori e-mail și SMS',
  tab_social: 'Conectori sociali',
  connector_name: 'Numele conectorului',
  demo_tip:
    'Acest conector demo este limitat la maximum 100 de mesaje și nu este recomandat în producție.',
  social_demo_tip:
    'Conectorul demo este destinat exclusiv demonstrațiilor și nu este recomandat în producție.',
  connector_type: 'Tip',
  placeholder_title: 'Conector social',
  placeholder_description:
    'GetCertus oferă mulți conectori larg folosiți pentru autentificare socială; puteți crea și propriii conectori cu protocoale standard.',
  save_and_done: 'Salvați și gata',
  type: {
    email: 'Conector e-mail',
    sms: 'Conector SMS',
    social: 'Conector social',
  },
  setup_title: {
    email: 'Configurați conectorul de e-mail',
    sms: 'Configurați conectorul SMS',
    social: 'Adăugați conector social',
  },
  guide: {
    subtitle: 'Un ghid pas cu pas pentru configurarea conectorului',
    general_setting: 'Setări generale',
    parameter_configuration: 'Configurarea parametrilor',
    test_connection: 'Testați conexiunea',
    name: 'Numele butonului de autentificare socială',
    name_placeholder: 'Introduceți numele butonului de autentificare socială',
    name_tip:
      'Butonul conectorului va fi afișat ca "Continuați cu {{name}}". Aveți grijă ca numele să nu fie prea lung.',
    connector_logo: 'Logoul conectorului',
    connector_logo_tip: 'Logoul va fi afișat pe butonul de autentificare al conectorului.',
    target: 'Numele furnizorului de identitate',
    target_placeholder: 'Introduceți numele furnizorului de identitate al conectorului',
    target_tip:
      'Valoarea „Nume IdP” poate fi un identificator unic care deosebește identitățile sociale.',
    target_tip_standard:
      'Valoarea „Nume IdP” poate fi un identificator unic care deosebește identitățile sociale. Setarea nu poate fi modificată după crearea conectorului.',
    target_tooltip:
      '"Nume IdP" în conectorii sociali GetCertus se referă la "sursa" identităților sociale. Pentru a evita conflictele, GetCertus nu acceptă același "Nume IdP" pentru o platformă. Fiți foarte atenți înainte de a adăuga un conector, deoarece NU PUTEȚI schimba valoarea după creare. <a>Aflați mai multe</a>',
    target_conflict:
      'Numele IdP introdus corespunde conectorului existent <span>name</span>. Folosirea aceluiași nume IdP poate produce un comportament neașteptat la autentificare, în care utilizatorii accesează același cont prin doi conectori diferiți.',
    target_conflict_line2:
      'Dacă doriți să înlocuiți conectorul actual cu același furnizor de identitate și să permiteți utilizatorilor existenți să se autentifice fără a se înregistra din nou, ștergeți conectorul <span>name</span> și creați unul nou cu același "Nume IdP".',
    target_conflict_line3:
      'Dacă doriți să vă conectați la un alt furnizor de identitate, modificați "Nume IdP" și continuați.',
    config: 'Introduceți JSON-ul de configurare',
    sync_profile: 'Sincronizați informațiile de profil',
    sync_profile_only_at_sign_up: 'Sincronizați doar la înregistrare',
    sync_profile_each_sign_in: 'Sincronizați la fiecare autentificare',
    sync_profile_tip:
      'Sincronizați profilul de bază de la furnizorul social, cum ar fi numele și avatarele utilizatorilor.',
    enable_token_storage: {
      title: 'Stocați tokenuri pentru acces API persistent',
      description:
        'Stocați tokenurile de acces și de reîmprospătare în Secret Vault. Permite apeluri API automate fără consimțământ repetat al utilizatorului. Exemplu: lăsați agentul AI să adauge evenimente în Google Calendar cu autorizare persistentă. <a>Aflați cum să apelați API-uri terțe</a>',
    },
    callback_uri: 'URI de redirecționare (URI de callback)',
    callback_uri_description:
      'URI-urile de redirecționare sunt adresele la care utilizatorii sunt trimiși după autorizarea socială. Adăugați toate URI-urile afișate în configurația IdP-ului.',
    callback_uri_custom_domain_description:
      'Dacă folosiți mai multe <a>domenii personalizate</a> în GetCertus, adăugați toate URI-urile de callback corespunzătoare în IdP, ca autentificarea socială să funcționeze pe fiecare domeniu.\n\nDomeniul implicit GetCertus (*.logto.app) este mereu valid — includeți-l doar dacă doriți să permiteți și autentificarea prin acel domeniu.',
    acs_url: 'URL Assertion Consumer Service',
  },
  platform: {
    universal: 'Universal',
    web: 'Web',
    native: 'Nativ',
  },
  add_multi_platform: ' acceptă mai multe platforme; selectați o platformă pentru a continua',
  drawer_title: 'Ghidul conectorului',
  drawer_subtitle: 'Urmați instrucțiunile pentru a integra conectorul',
  unknown: 'Conector necunoscut',
  standard_connectors: 'Conectori standard',
  create_form: {
    third_party_connectors:
      'Integrați furnizori terți pentru autentificare socială rapidă, conectarea conturilor sociale și acces API. <a>Aflați mai multe</a>',
    email_connector_upsell: {
      title: 'Serviciul de e-mail integrat GetCertus',
      description:
        'Trimitere de e-mail fără configurare. Trimiteți imediat coduri de verificare și linkuri magice.',
    },
    standard_connectors: 'Sau personalizați conectorul social cu un protocol standard.',
  },
};

export default Object.freeze(connectors);
