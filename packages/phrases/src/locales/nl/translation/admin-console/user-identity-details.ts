/* GetCertus addition (MPL-2.0, see GETCERTUS.md): admin console phrases. */
const user_identity_details = {
  social_identity_page_title: 'Details sociale identiteit',
  back_to_user_details: 'Terug naar gebruikersdetails',
  delete_identity: 'Identiteitskoppeling verwijderen',
  social_account: {
    title: 'Social-media-account',
    description:
      'Bekijk gebruikersgegevens en profielinformatie die zijn gesynchroniseerd vanuit het gekoppelde {{connectorName}}-account.',
    provider_name: 'Naam van de sociale identiteitsprovider',
    identity_id: 'ID van de sociale identiteit',
    user_profile: 'Gebruikersprofiel gesynchroniseerd vanuit de sociale identiteitsprovider',
  },
  sso_account: {
    title: 'Enterprise SSO-account',
    description:
      'Bekijk gebruikersgegevens en profielinformatie die zijn gesynchroniseerd vanuit het gekoppelde {{connectorName}}-account.',
    provider_name: 'Naam van de enterprise SSO-identiteitsprovider',
    identity_id: 'Enterprise SSO-identiteits-ID',
    user_profile: 'Gebruikersprofiel gesynchroniseerd vanuit de enterprise SSO-identiteitsprovider',
  },
  token_storage: {
    title: 'Toegangstoken',
    description:
      'Sla toegangs- en verversingstokens van {{connectorName}} op in de Secret Vault. Zo zijn geautomatiseerde API-aanroepen mogelijk zonder herhaalde toestemming van de gebruiker.',
  },
  access_token: {
    title: 'Toegangstoken',
    description_active:
      "Het toegangstoken is actief en veilig opgeslagen in de Secret Vault. Je product kan het gebruiken om de API's van {{connectorName}} aan te roepen.",
    description_inactive:
      'Dit toegangstoken is inactief (bijv. ingetrokken). Gebruikers moeten opnieuw toestemming geven om de functionaliteit te herstellen.',
    description_expired:
      'Dit toegangstoken is verlopen. Het wordt bij het volgende API-verzoek automatisch vernieuwd met het verversingstoken. Als er geen verversingstoken is, moet de gebruiker zich opnieuw authenticeren.',
  },
  refresh_token: {
    available:
      'Er is een verversingstoken beschikbaar. Als het toegangstoken verloopt, wordt het automatisch vernieuwd met het verversingstoken.',
    not_available:
      'Er is geen verversingstoken beschikbaar. Nadat het toegangstoken is verlopen, moeten gebruikers zich opnieuw authenticeren om nieuwe tokens te krijgen.',
  },
  token_status: 'Tokenstatus',
  created_at: 'Aangemaakt op',
  updated_at: 'Bijgewerkt op',
  expires_at: 'Verloopt op',
  scopes: 'Scopes',
  delete_tokens: {
    title: 'Tokens verwijderen',
    description:
      'Verwijder de opgeslagen tokens. Gebruikers moeten opnieuw toestemming geven om de functionaliteit te herstellen.',
    confirmation_message:
      'Weet je zeker dat je de tokens wilt verwijderen? De GetCertus Secret Vault verwijdert de opgeslagen toegangs- en verversingstokens van {{connectorName}}. Deze gebruiker moet opnieuw toestemming geven om de API-toegang tot {{connectorName}} te herstellen.',
  },
  token_storage_disabled: {
    title: 'Tokenopslag is uitgeschakeld voor deze connector',
    description:
      "Gebruikers kunnen {{connectorName}} nu alleen gebruiken om in te loggen, accounts te koppelen of profielen te synchroniseren tijdens elk toestemmingsproces. Om de API's van {{connectorName}} te gebruiken en namens gebruikers acties uit te voeren, schakel je tokenopslag in via",
  },
};

export default Object.freeze(user_identity_details);
