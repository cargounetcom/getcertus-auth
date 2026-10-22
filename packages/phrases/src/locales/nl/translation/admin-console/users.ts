/* GetCertus addition (MPL-2.0, see GETCERTUS.md): admin console phrases. */
const users = {
  page_title: 'Gebruikersbeheer',
  title: 'Gebruikersbeheer',
  subtitle:
    'Beheer gebruikersidentiteiten: gebruikers aanmaken, gegevens bewerken, logboeken bekijken, wachtwoorden opnieuw instellen en gebruikers verwijderen.',
  create: 'Gebruiker toevoegen',
  create_subtitle: 'Vul minstens een van de volgende velden in om verder te gaan.',
  error_missing_identifier:
    'Je moet minstens één identifier opgeven om een gebruiker aan te maken.',
  user_name: 'Gebruiker',
  application_name: 'Via applicatie',
  latest_sign_in: 'Laatst ingelogd',
  create_form_username: 'Gebruikersnaam',
  create_form_password: 'Wachtwoord',
  create_form_name: 'Volledige naam',
  placeholder_name: 'Jan Jansen',
  placeholder_email: 'jdoe@example.com',
  placeholder_username: 'user123',
  placeholder_phone: '+1 (555) 555-5555',
  unnamed: 'Naamloos',
  search: 'Zoeken op naam, e-mail, telefoon of gebruikersnaam',
  check_user_detail: 'Gebruikersdetails bekijken',
  placeholder_title: 'Gebruikersbeheer',
  placeholder_description:
    'Elke gebruiker heeft een profiel met alle gebruikersgegevens: basisgegevens, sociale identiteiten en aangepaste gegevens.',
  dev_tenant_data_retention_notice:
    'In ontwikkeltenants worden gebruikersaccounts ouder dan 90 dagen automatisch verwijderd. <a>Meer informatie</a>',
};

export default Object.freeze(users);
