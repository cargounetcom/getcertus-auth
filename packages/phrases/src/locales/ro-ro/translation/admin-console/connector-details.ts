/* GetCertus addition (MPL-2.0, see GETCERTUS.md): admin console phrases. */
const connector_details = {
  page_title: 'Detalii conector',
  back_to_connectors: 'Înapoi la conectori',
  check_readme: 'Consultați README',
  settings: 'Setări generale',
  settings_description:
    'Integrați furnizori terți pentru autentificare socială rapidă și conectarea conturilor sociale',
  setting_description_with_token_storage_supported:
    'Integrați furnizori terți pentru autentificare socială rapidă, conectarea conturilor sociale și acces API.',
  email_connector_settings_description:
    'Integrați furnizorul de e-mail pentru a permite utilizatorilor finali înregistrarea și autentificarea fără parolă prin e-mail.',
  parameter_configuration: 'Configurarea parametrilor',
  test_connection: 'Testați',
  save_error_empty_config: 'Introduceți configurația',
  send: 'Trimiteți',
  send_error_invalid_format: 'Date nevalide',
  edit_config_label: 'Introduceți JSON-ul aici',
  test_email_sender: 'Testați conectorul de e-mail',
  test_sms_sender: 'Testați conectorul SMS',
  test_email_placeholder: 'john.doe@example.com',
  test_sms_placeholder: '+1 555-123-4567',
  test_message_sent: 'Mesajul de test a fost trimis',
  test_sender_description:
    'GetCertus folosește șablonul "Generic" pentru teste. Veți primi un mesaj dacă conectorul este configurat corect.',
  options_change_email: 'Schimbați conectorul de e-mail',
  options_change_sms: 'Schimbați conectorul SMS',
  connector_deleted: 'Conectorul a fost șters',
  type_email: 'Conector e-mail',
  type_sms: 'Conector SMS',
  type_social: 'Conector social',
  in_used_social_deletion_description:
    'Acest conector este folosit în experiența de autentificare. Dacă îl ștergeți, autentificarea cu <name/> va fi eliminată din setările experienței de autentificare. Va trebui să îl reconfigurați dacă decideți să îl adăugați din nou.',
  in_used_passwordless_deletion_description:
    'Acest {{name}} este folosit în experiența de autentificare. Dacă îl ștergeți, experiența de autentificare nu va funcționa corect până nu rezolvați conflictul. Va trebui să îl reconfigurați dacă decideți să îl adăugați din nou.',
  deletion_description:
    'Eliminați acest conector. Acțiunea nu poate fi anulată și va trebui să îl reconfigurați dacă decideți să îl adăugați din nou.',
  logto_email: {
    total_email_sent: 'Total e-mailuri trimise: {{value, number}}',
    total_email_sent_tip:
      'GetCertus folosește SendGrid pentru e-mail integrat sigur și stabil. Utilizarea este complet gratuită. <a>Aflați mai multe</a>',
    hosted_email_usage: {
      daily: 'Zilnic <value>{{usage, number}}</value> / {{limit, number}}',
      daily_unlimited: 'Zilnic <value>{{usage, number}}</value>',
      monthly: 'Lunar <value>{{usage, number}}</value> / {{limit, number}}',
      monthly_unlimited: 'Lunar <value>{{usage, number}}</value>',
      tip: 'Planurile gratuit și de dezvoltare includ limite zilnice și lunare pentru serviciul de e-mail integrat.',
      banner: {
        approaching:
          'Vă apropiați de limita de trimitere a serviciului de e-mail integrat GetCertus. <provider>Conectați propriul furnizor de e-mail</provider> sau <upgrade>treceți la un plan superior</upgrade> pentru a folosi în continuare serviciul de e-mail integrat.',
        reached:
          'Ați atins limita de trimitere a serviciului de e-mail integrat GetCertus, ceea ce poate întrerupe e-mailurile de autentificare. <provider>Conectați propriul furnizor de e-mail</provider> sau <upgrade>treceți la un plan superior</upgrade> pentru a folosi în continuare serviciul de e-mail integrat.',
      },
    },
    email_template_title: 'Șablon de e-mail',
    template_description:
      'E-mailul integrat folosește șabloane implicite pentru livrarea fără probleme a e-mailurilor de verificare. Nu este necesară nicio configurare, iar informațiile de bază ale brandului pot fi personalizate.',
    template_description_link_text: 'Vedeți șabloanele',
    description_action_text: 'Vedeți șabloanele',
    from_email_field: 'Adresa expeditorului',
    sender_name_field: 'Numele expeditorului',
    sender_name_tip:
      'Personalizați numele expeditorului pentru e-mailuri. Dacă rămâne gol, se folosește numele implicit "Verification".',
    sender_name_placeholder: 'Numele expeditorului',
    company_information_field: 'Informații despre companie',
    company_information_description:
      'Afișați numele, adresa sau codul poștal al companiei în partea de jos a e-mailurilor pentru mai multă credibilitate.',
    company_information_placeholder: 'Informațiile de bază ale companiei',
    email_logo_field: 'Logo pentru e-mail',
    email_logo_tip:
      'Afișați logoul brandului în partea de sus a e-mailurilor. Folosiți aceeași imagine pentru modul luminos și cel întunecat.',
    urls_not_allowed: 'URL-urile nu sunt permise',
    test_notes: 'GetCertus folosește șablonul „Generic” pentru teste.',
  },
  google_one_tap: {
    title: 'Google One Tap',
    description:
      'Google One Tap este o modalitate sigură și simplă prin care utilizatorii se autentifică pe site-ul dvs.',
    enable_google_one_tap: 'Activați Google One Tap',
    enable_google_one_tap_description:
      'Activați Google One Tap în experiența de autentificare: utilizatorii deja conectați pe dispozitiv se pot înregistra sau autentifica rapid cu contul Google.',
    configure_google_one_tap: 'Configurați Google One Tap',
    auto_select: 'Selectați automat datele de autentificare, dacă este posibil',
    close_on_tap_outside: 'Anulați solicitarea dacă utilizatorul face clic/atinge în afara ei',
    itp_support: 'Activați <a>experiența One Tap îmbunătățită în browserele ITP</a>',
  },
  sign_in_experience: {
    in_use: 'Activat pentru autentificare ',
    not_in_use: 'Dezactivat pentru autentificare ',
  },
  email_logs: {
    title: 'Jurnale de e-mail',
    time: 'Ora',
    recipient: 'Destinatar',
    recipient_placeholder: 'Căutați după adresa completă a destinatarului',
    template_type: 'Tip de șablon',
    status: 'Stare',
    status_sent: 'Trimis',
    status_failed: 'Eșuat',
    language_tag: 'Limbă',
    provider_message_id: 'ID-ul mesajului la furnizor',
  },
};

export default Object.freeze(connector_details);
