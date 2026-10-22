/* GetCertus addition (MPL-2.0, see GETCERTUS.md): admin console phrases. */
const applications = {
  page_title: 'Aplicații',
  title: 'Aplicații',
  subtitle: 'Creează și gestionează aplicații pentru autentificarea OIDC.',
  subtitle_with_app_type: 'Configurează autentificarea GetCertus pentru aplicația ta {{name}}',
  create_device_flow_description:
    'Creează o aplicație nativă care folosește OAuth 2.0 Device Authorization Grant pentru dispozitive cu introducere limitată sau aplicații fără interfață.',
  create: 'Creează aplicație',
  create_third_party: 'Creează aplicație terță',
  create_thrid_party_modal_title: 'Creează o aplicație terță ({{type}})',
  application_name: 'Numele aplicației',
  application_name_placeholder: 'Aplicația mea',
  application_description: 'Descrierea aplicației',
  application_description_placeholder: 'Introdu descrierea aplicației',
  select_application_type: 'Alege un tip de aplicație',
  no_application_type_selected: 'Nu ai ales încă un tip de aplicație',
  application_created: 'Aplicația a fost creată.',
  tab: {
    my_applications: 'Aplicațiile mele',
    third_party_applications: 'Aplicații terțe',
  },
  app_id: 'ID aplicație',
  type: {
    native: {
      title: 'Aplicație nativă',
      subtitle: 'O aplicație care rulează într-un mediu nativ',
      description: 'De ex. aplicație iOS, Android, desktop, TV, CLI',
    },
    spa: {
      title: 'Aplicație cu o singură pagină',
      subtitle: 'O aplicație care rulează în browser și actualizează datele pe loc',
      description: 'De ex. aplicație React DOM, aplicație Vue',
    },
    traditional: {
      title: 'Web tradițional',
      subtitle: 'O aplicație ale cărei pagini sunt generate și actualizate doar de serverul web',
      description: 'De ex. Next.js, PHP',
    },
    machine_to_machine: {
      title: 'Mașină la mașină',
      subtitle: 'O aplicație (de obicei un serviciu) care comunică direct cu resursele',
      description: 'De ex. serviciu backend',
    },
    protected: {
      title: 'Aplicație protejată',
      subtitle: 'O aplicație protejată de GetCertus',
      description: 'Nu se aplică',
    },
    saml: {
      title: 'Aplicație SAML',
      subtitle: 'O aplicație folosită drept conector SAML IdP',
      description: 'De ex. SAML',
    },
    third_party: {
      title: 'Aplicație terță',
      subtitle: 'O aplicație folosită drept conector IdP terț',
      description: 'De ex. OIDC',
    },
  },
  authorization_flow: {
    title: 'Flux de autorizare',
    tooltip: 'Alege fluxul de autorizare al aplicației. După setare nu mai poate fi schimbat.',
    authorization_code: {
      title: 'Cod de autorizare',
      description:
        'Tipul implicit și cel mai des folosit. Utilizatorii sunt redirecționați spre o pagină de conectare pentru a acorda accesul direct.',
    },
    device_flow: {
      title: 'Flux pentru dispozitive',
      description:
        'Pentru dispozitive cu introducere limitată sau aplicații fără interfață (de ex. TV, CLI). Utilizatorii finalizează conectarea pe alt dispozitiv, introducând un cod sau scanând un cod QR.',
    },
  },
  placeholder_title: 'Alege un tip de aplicație pentru a continua',
  placeholder_description:
    'GetCertus folosește o entitate de aplicație pentru OIDC, de exemplu pentru a-ți identifica aplicațiile, a gestiona conectarea și a crea jurnale de audit.',
  third_party_application_placeholder_description:
    'Folosește GetCertus ca furnizor de identitate pentru a oferi autorizare OAuth serviciilor terțe, cu un ecran de consimțământ gata făcut pentru accesul la resurse. <a>Află mai multe</a>',
  dynamic_app: {
    title: 'Aplicație dinamică',
    subtitle: 'CIMD',
    description:
      'O aplicație dinamică permite clienților OAuth să se conecteze fără înregistrare prealabilă.',
    settings_description:
      'O aplicație dinamică permite clienților OAuth să se conecteze fără înregistrare prealabilă. Folosește specificația OAuth Client ID Metadata Document (CIMD).',
    beta_notice:
      'Aplicațiile dinamice sunt în beta. Te invităm să le încerci și să <ContactLink>ne trimiți feedback</ContactLink>.',
    app_id_placeholder: 'Furnizat dinamic de fiecare client',
    enable_confirm_modal: {
      title: 'Activezi accesul dinamic al clienților?',
      content:
        'Orice client OAuth cu un URL public HTTPS valid ca ID de client poate porni autorizarea pentru acest tenant fără înregistrare. Accesul rămâne limitat de permisiunile maxime și de consimțământul utilizatorului.',
      beta_pricing_notice:
        'Aplicațiile dinamice sunt gratuite cât timp sunt în beta. După aceea se poate aplica un preț de supliment. Te anunțăm din timp și poți dezactiva oricând.',
    },
    enabled: 'Aplicația dinamică a fost activată.',
    disable_confirm_modal: {
      title: 'Dezactivezi aplicația dinamică?',
      content:
        'Clienții CIMD nu vor mai putea porni cereri noi de autorizare. Acordurile existente se păstrează, iar tokenurile de acces emise pot rămâne valabile până expiră.',
    },
    disabled: 'Aplicația dinamică a fost dezactivată.',
    permissions: {
      user_title: 'Utilizator',
      user_description:
        'Alege permisiunile cerute de clienții OAuth pentru acces la anumite date ale utilizatorului.',
      grant_user_level_permissions: 'Acordă permisiuni de utilizator',
      organization_title: 'Organizație',
      organization_description:
        'Alege permisiunile cerute de clienții OAuth pentru acces la anumite date ale organizației.',
      grant_organization_level_permissions: 'Acordă permisiuni de organizație',
      permission_delete_confirm:
        'Permisiunea va fi eliminată din aplicația dinamică, iar clienții OAuth nu vor mai putea cere autorizarea utilizatorului pentru ea. Sigur vrei să continui?',
    },
    client_compatibility: {
      title: 'Compatibilitatea clienților',
      description:
        'Ajustează modul în care GetCertus tratează cererile de autorizare de la clienții OAuth care nu acceptă încă pe deplin OpenID Connect. Aceste setări sunt experimentale și se pot schimba sau pot dispărea.',
      add_consent_prompt_for_offline_access:
        'Adaugă solicitarea de consimțământ pentru acces offline',
      add_consent_prompt_for_offline_access_description:
        'Când un client OAuth cere `offline_access` fără `prompt=consent`, GetCertus adaugă solicitarea de consimțământ ca clientul să poată primi un token de reîmprospătare. Recomandat pentru clienți precum ChatGPT și Codex.',
    },
  },
  guide: {
    third_party: {
      title: 'Integrează o aplicație terță',
      description:
        'Folosește GetCertus ca furnizor de identitate pentru a oferi autorizare OAuth serviciilor terțe, cu un ecran de consimțământ gata făcut pentru acces sigur la resurse. <a>Află mai multe</a>',
    },
  },
};

export default Object.freeze(applications);
