/* GetCertus addition (MPL-2.0, see GETCERTUS.md): admin console phrases. */
const users = {
  page_title: 'Gestionarea utilizatorilor',
  title: 'Gestionarea utilizatorilor',
  subtitle:
    'Gestionați identitățile utilizatorilor: creați utilizatori, editați informații, vedeți jurnalele, resetați parole și ștergeți utilizatori.',
  create: 'Adăugați utilizator',
  create_subtitle: 'Completați cel puțin unul dintre câmpurile următoare pentru a continua.',
  error_missing_identifier:
    'Trebuie să furnizați cel puțin un identificator pentru a crea un utilizator.',
  user_name: 'Utilizator',
  application_name: 'Din aplicația',
  latest_sign_in: 'Ultima autentificare',
  create_form_username: 'Nume de utilizator',
  create_form_password: 'Parolă',
  create_form_name: 'Nume complet',
  placeholder_name: 'Ion Popescu',
  placeholder_email: 'jdoe@example.com',
  placeholder_username: 'user123',
  placeholder_phone: '+1 (555) 555-5555',
  unnamed: 'Fără nume',
  search: 'Căutați după nume, e-mail, telefon sau nume de utilizator',
  check_user_detail: 'Vedeți detaliile utilizatorului',
  placeholder_title: 'Gestionarea utilizatorilor',
  placeholder_description:
    'Fiecare utilizator are un profil cu toate informațiile sale: date de bază, identități sociale și date personalizate.',
  dev_tenant_data_retention_notice:
    'În tenanții de dezvoltare, conturile de utilizator mai vechi de 90 de zile sunt șterse automat. <a>Aflați mai multe</a>',
};

export default Object.freeze(users);
