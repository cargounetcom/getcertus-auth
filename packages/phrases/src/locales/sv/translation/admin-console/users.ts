/* GetCertus addition (MPL-2.0, see GETCERTUS.md): admin console phrases. */
const users = {
  page_title: 'Användarhantering',
  title: 'Användarhantering',
  subtitle:
    'Hantera användaridentiteter: skapa användare, redigera användarinformation, visa användarloggar, återställ lösenord och ta bort användare.',
  create: 'Lägg till användare',
  create_subtitle: 'Fyll i minst ett av följande fält för att fortsätta.',
  error_missing_identifier: 'Du måste ange minst en identifierare för att skapa en användare.',
  user_name: 'Användare',
  application_name: 'Från applikation',
  latest_sign_in: 'Senaste inloggning',
  create_form_username: 'Användarnamn',
  create_form_password: 'Lösenord',
  create_form_name: 'Fullständigt namn',
  placeholder_name: 'Anna Andersson',
  placeholder_email: 'jdoe@example.com',
  placeholder_username: 'user123',
  placeholder_phone: '+1 (555) 555-5555',
  unnamed: 'Namnlös',
  search: 'Sök på namn, e-post, telefon eller användarnamn',
  check_user_detail: 'Visa användardetaljer',
  placeholder_title: 'Användarhantering',
  placeholder_description:
    'Varje användare har en profil med all användarinformation: grunddata, sociala identiteter och anpassade data.',
  dev_tenant_data_retention_notice:
    'I utvecklingstenants tas användarkonton som är äldre än 90 dagar bort automatiskt. <a>Läs mer</a>',
};

export default Object.freeze(users);
