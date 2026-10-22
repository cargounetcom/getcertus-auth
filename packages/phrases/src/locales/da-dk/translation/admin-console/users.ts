/* GetCertus addition (MPL-2.0, see GETCERTUS.md): admin console phrases. */
const users = {
  page_title: 'Brugeradministration',
  title: 'Brugeradministration',
  subtitle:
    'Administrér brugeridentiteter: opret brugere, redigér brugeroplysninger, se brugerlogs, nulstil adgangskoder og slet brugere.',
  create: 'Tilføj bruger',
  create_subtitle: 'Udfyld mindst ét af følgende felter for at fortsætte.',
  error_missing_identifier: 'Du skal angive mindst én identifikator for at oprette en bruger.',
  user_name: 'Bruger',
  application_name: 'Fra applikation',
  latest_sign_in: 'Seneste login',
  create_form_username: 'Brugernavn',
  create_form_password: 'Adgangskode',
  create_form_name: 'Fulde navn',
  placeholder_name: 'Jens Jensen',
  placeholder_email: 'jdoe@example.com',
  placeholder_username: 'user123',
  placeholder_phone: '+1 (555) 555-5555',
  unnamed: 'Unavngivet',
  search: 'Søg på navn, e-mail, telefon eller brugernavn',
  check_user_detail: 'Se brugerdetaljer',
  placeholder_title: 'Brugeradministration',
  placeholder_description:
    'Hver bruger har en profil med alle brugeroplysninger: grunddata, sociale identiteter og brugerdefinerede data.',
  dev_tenant_data_retention_notice:
    'I udviklingstenants slettes brugerkonti, der er ældre end 90 dage, automatisk. <a>Læs mere</a>',
};

export default Object.freeze(users);
