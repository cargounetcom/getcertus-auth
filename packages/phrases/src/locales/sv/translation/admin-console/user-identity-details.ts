/* GetCertus addition (MPL-2.0, see GETCERTUS.md): admin console phrases. */
const user_identity_details = {
  social_identity_page_title: 'Detaljer för social identitet',
  back_to_user_details: 'Tillbaka till användardetaljer',
  delete_identity: 'Ta bort identitetskoppling',
  social_account: {
    title: 'Socialt konto',
    description:
      'Visa användardata och profilinformation som synkats från det kopplade {{connectorName}}-kontot.',
    provider_name: 'Namn på den sociala identitetsleverantören',
    identity_id: 'ID för social identitet',
    user_profile: 'Användarprofil synkad från den sociala identitetsleverantören',
  },
  sso_account: {
    title: 'Enterprise SSO-konto',
    description:
      'Visa användardata och profilinformation som synkats från det kopplade {{connectorName}}-kontot.',
    provider_name: 'Namn på enterprise SSO-identitetsleverantören',
    identity_id: 'Enterprise SSO-identitets-ID',
    user_profile: 'Användarprofil synkad från enterprise SSO-identitetsleverantören',
  },
  token_storage: {
    title: 'Åtkomsttoken',
    description:
      'Lagra åtkomst- och uppdateringstoken från {{connectorName}} i Secret Vault. Möjliggör automatiserade API-anrop utan att användaren måste ge samtycke upprepade gånger.',
  },
  access_token: {
    title: 'Åtkomsttoken',
    description_active:
      'Åtkomsttoken är aktiv och lagras säkert i Secret Vault. Din produkt kan använda den för att komma åt {{connectorName}}s API:er.',
    description_inactive:
      'Åtkomsttoken är inaktiv (t.ex. återkallad). Användare måste auktorisera åtkomsten igen för att återställa funktionen.',
    description_expired:
      'Åtkomsttoken har gått ut. Den förnyas automatiskt vid nästa API-förfrågan med uppdateringstoken. Om det inte finns någon uppdateringstoken måste användaren autentisera sig igen.',
  },
  refresh_token: {
    available:
      'Uppdateringstoken finns. Om åtkomsttoken går ut förnyas den automatiskt med uppdateringstoken.',
    not_available:
      'Uppdateringstoken saknas. När åtkomsttoken har gått ut måste användare autentisera sig igen för att få nya token.',
  },
  token_status: 'Tokenstatus',
  created_at: 'Skapad',
  updated_at: 'Uppdaterad',
  expires_at: 'Upphör',
  scopes: 'Scopes',
  delete_tokens: {
    title: 'Ta bort token',
    description:
      'Ta bort de lagrade token. Användare måste auktorisera åtkomsten igen för att återställa funktionen.',
    confirmation_message:
      'Vill du verkligen ta bort token? GetCertus Secret Vault tar bort de lagrade åtkomst- och uppdateringstoken från {{connectorName}}. Användaren måste auktorisera igen för att återställa API-åtkomsten till {{connectorName}}.',
  },
  token_storage_disabled: {
    title: 'Tokenlagring är inaktiverad för den här anslutningen',
    description:
      'Användare kan för närvarande bara använda {{connectorName}} för att logga in, koppla konton eller synka profiler vid varje samtyckesflöde. För att komma åt {{connectorName}}s API:er och utföra åtgärder för användarnas räkning, aktivera tokenlagring i',
  },
};

export default Object.freeze(user_identity_details);
