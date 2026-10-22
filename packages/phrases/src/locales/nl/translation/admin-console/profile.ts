/* GetCertus addition (MPL-2.0, see GETCERTUS.md): admin console phrases. */
const profile = {
  link_account: {
    anonymous: 'Anoniem',
  },
  delete_account: {
    title: 'ACCOUNT VERWIJDEREN',
    label: 'Account verwijderen',
    description:
      'Als je je account verwijdert, worden al je persoonsgegevens, gebruikersgegevens en configuratie verwijderd. Dit kan niet ongedaan worden gemaakt.',
    button: 'Account verwijderen',
    p: {
      has_issue:
        'Jammer dat je je account wilt verwijderen. Voordat je het account kunt verwijderen, moet je de volgende problemen oplossen.',
      after_resolved:
        'Zodra de problemen zijn opgelost, kun je je account verwijderen. Neem gerust contact met ons op als je hulp nodig hebt.',
      check_information:
        'Jammer dat je je account wilt verwijderen. Controleer de volgende informatie zorgvuldig voordat je verdergaat.',
      remove_all_data:
        'Als je je account verwijdert, worden alle gegevens over jou in GetCertus Cloud definitief verwijderd. Maak dus eerst een back-up van belangrijke gegevens.',
      confirm_information:
        'Bevestig dat de bovenstaande informatie klopt. Na verwijdering kunnen we je account niet meer herstellen.',
      has_admin_role:
        'Omdat je de beheerdersrol hebt in de volgende tenant, wordt deze samen met je account verwijderd:',
      has_admin_role_other:
        'Omdat je de beheerdersrol hebt in de volgende tenants, worden deze samen met je account verwijderd:',
      quit_tenant: 'Je staat op het punt de volgende tenant te verlaten:',
      quit_tenant_other: 'Je staat op het punt de volgende tenants te verlaten:',
    },
    issues: {
      paid_plan: 'De volgende tenant heeft een betaald plan; zeg eerst het abonnement op:',
      paid_plan_other: 'De volgende tenants hebben een betaald plan; zeg eerst de abonnementen op:',
      subscription_status: 'De volgende tenant heeft een probleem met de abonnementsstatus:',
      subscription_status_other: 'De volgende tenants hebben problemen met de abonnementsstatus:',
      open_invoice: 'De volgende tenant heeft een openstaande factuur:',
      open_invoice_other: 'De volgende tenants hebben openstaande facturen:',
    },
    error_occurred: 'Er is een fout opgetreden',
    error_occurred_description: 'Er ging iets mis bij het verwijderen van je account:',
    request_id: 'Verzoek-ID: {{requestId}}',
    try_again_later:
      'Probeer het later opnieuw. Blijft het probleem bestaan, neem dan contact op met het GetCertus-team en vermeld het verzoek-ID.',
    final_confirmation: 'Laatste bevestiging',
    about_to_start_deletion:
      'Je staat op het punt het verwijderproces te starten. Dit kan niet ongedaan worden gemaakt.',
    permanently_delete: 'Definitief verwijderen',
  },
  fields: {
    name: 'Naam',
    name_description:
      'De volledige naam van de gebruiker zoals die wordt weergegeven, met alle naamdelen (bijv. “Jan Jansen”).',
    avatar: 'Avatar',
    avatar_description: 'URL van de avatarafbeelding van de gebruiker.',
    familyName: 'Achternaam',
    familyName_description: 'De achternaam of achternamen van de gebruiker (bijv. "Jansen").',
    givenName: 'Voornaam',
    givenName_description: 'De voornaam of voornamen van de gebruiker (bijv. "Jan").',
    middleName: 'Tweede voornaam',
    middleName_description: 'De tweede voornaam of voornamen van de gebruiker (bijv. "Marie").',
    nickname: 'Bijnaam',
    nickname_description:
      'Informele of vertrouwde naam van de gebruiker, die kan afwijken van de officiële naam.',
    preferredUsername: 'Voorkeursgebruikersnaam',
    preferredUsername_description: 'Korte identifier waarmee de gebruiker aangesproken wil worden.',
    profile: 'Profiel',
    profile_description:
      'URL van de leesbare profielpagina van de gebruiker (bijv. een social-mediaprofiel).',
    website: 'Website',
    website_description: 'URL van de persoonlijke website of blog van de gebruiker.',
    gender: 'Gender',
    gender_description:
      'Het gender waarmee de gebruiker zich identificeert (bijv. "Vrouw", "Man", "Non-binair")',
    birthdate: 'Geboortedatum',
    birthdate_description:
      'De geboortedatum van de gebruiker in een bepaald formaat (bijv. "MM-dd-yyyy").',
    zoneinfo: 'Tijdzone',
    zoneinfo_description:
      'De tijdzone van de gebruiker in IANA-formaat (bijv. "America/New_York" of "Europe/Paris").',
    locale: 'Taal',
    locale_description:
      'De taal van de gebruiker in IETF BCP 47-formaat (bijv. "en-US" of "zh-CN").',
    address: {
      formatted: 'Adres',
      streetAddress: 'Straat en huisnummer',
      locality: 'Plaats',
      region: 'Provincie',
      postalCode: 'Postcode',
      country: 'Land',
    },
    address_description:
      'Het volledige adres van de gebruiker zoals het wordt weergegeven, met alle adresdelen (bijv. "123 Main St, Anytown, USA 12345").',
    fullname: 'Volledige naam',
    fullname_description:
      'Combineert familyName, givenName en middleName flexibel op basis van de configuratie.',
  },
};

export default Object.freeze(profile);
