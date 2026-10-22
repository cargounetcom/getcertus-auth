/* GetCertus addition (MPL-2.0, see GETCERTUS.md): admin console phrases. */
const get_started = {
  page_title: 'Primii pași',
  title: 'Ceva care să vă ajute să reușiți',
  subtitle: 'Câteva lucruri pe care le puteți face pentru a obține rapid valoare din GetCertus',
  develop: {
    title: 'Dezvoltare: integrați aplicația în 5 minute',
    title_cloud: 'Dezvoltare: integrați aplicația în siguranță în câteva minute',
    subtitle_cloud:
      'Sau integrați aplicația în 5 minute cu SDK-urile și tutorialele noastre gata făcute.',
    try_mcp: 'Încercați integrarea dintr-un singur prompt cu MCP',
  },
  customize: {
    title: 'Personalizare: oferiți o experiență de autentificare excelentă',
    preview: {
      title:
        'Vedeți previzualizarea live a experienței de autentificare pe care tocmai ați personalizat-o',
      subtitle:
        'Încercați acum experiența de autentificare GetCertus pentru a vedea cum funcționează',
    },
    connector: {
      title: 'Adăugați mai mulți conectori pentru mai multe metode de autentificare socială',
      subtitle:
        'Încercați autentificarea fără parolă și oferiți clienților o experiență sigură și fără efort',
    },
    continue_customizing: 'Continuați personalizarea',
    try_now: 'Încercați acum',
    add_more: 'Adăugați mai mulți',
  },
  secure: {
    title: 'Securizare: protejați-vă resursele',
  },
  manage: {
    title: 'Administrare: definiți controlul accesului pentru produs și utilizatori',
    rbac: {
      title: 'Adăugați control al accesului bazat pe roluri pentru a vă proteja resursele',
      subtitle:
        'Controlați resursele prin autorizare scalabilă pe roluri, pentru diverse cazuri de utilizare.',
    },
    create_roles: 'Creați roluri',
  },
  convert_to_production: {
    card_title: 'Gata de lansare? Nu uitați să porniți configurația de producție!',
    title: 'Nu lăsați proiectul blocat în modul de dezvoltare',
    subtitle:
      'Folosiți un tenant de dezvoltare pentru teste gratuite. Pentru lansare, creați sau convertiți la un tenant de producție. Aveți nevoie de ceva personalizat? <a>Contactați-ne</a>',
    convert_button: 'Convertiți la tenant de producție',
  },
  oss_cloud: {
    try: {
      title: 'Renunțați la munca operațională — încercați gratuit GetCertus Cloud',
      badge: 'Recomandat',
      description:
        'Obțineți un GetCertus complet administrat, fără întreținere — plus integrare rapidă prin MCP, suport multi-tenant, colaborare în echipă și toate funcțiile premium. Gratuit la început, fără card de credit.',
      action: 'Explorați GetCertus Cloud',
    },
    private_cloud: {
      title: 'Aveți nevoie de conformitate sau de o implementare personalizată?',
      card_title: 'Cloud privat',
      description:
        'Obțineți o instanță GetCertus dedicată, cu izolare completă a datelor, domeniu personalizat și garanții SLA. Ideal pentru companii cu cerințe stricte de rezidență a datelor sau de conformitate. Ne ocupăm noi de infrastructură, ca dvs. să vă concentrați pe produs.',
    },
    sidebar: {
      title: 'Concentrați-vă pe dezvoltare, nu pe găzduire.',
      description: 'Lăsați GetCertus Cloud să se ocupe de infrastructura de autentificare.',
      action: 'Încercați GetCertus Cloud',
    },
  },
  view_all: 'Vedeți tot →',
};

export default Object.freeze(get_started);
