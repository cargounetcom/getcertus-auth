/* GetCertus addition (MPL-2.0, see GETCERTUS.md): admin console phrases. */
const user_identity_details = {
  social_identity_page_title: 'Detaljer for social identitet',
  back_to_user_details: 'Tilbage til brugerdetaljer',
  delete_identity: 'Fjern identitetsforbindelse',
  social_account: {
    title: 'Social konto',
    description:
      'Se brugerdata og profiloplysninger, der er synkroniseret fra den tilknyttede {{connectorName}}-konto.',
    provider_name: 'Navn på den sociale identitetsudbyder',
    identity_id: 'ID for social identitet',
    user_profile: 'Brugerprofil synkroniseret fra den sociale identitetsudbyder',
  },
  sso_account: {
    title: 'Enterprise SSO-konto',
    description:
      'Se brugerdata og profiloplysninger, der er synkroniseret fra den tilknyttede {{connectorName}}-konto.',
    provider_name: 'Navn på enterprise SSO-identitetsudbyderen',
    identity_id: 'Enterprise SSO-identitets-ID',
    user_profile: 'Brugerprofil synkroniseret fra enterprise SSO-identitetsudbyderen',
  },
  token_storage: {
    title: 'Adgangstoken',
    description:
      'Gem adgangs- og opdateringstokens fra {{connectorName}} i Secret Vault. Giver mulighed for automatiserede API-kald uden gentaget brugersamtykke.',
  },
  access_token: {
    title: 'Adgangstoken',
    description_active:
      "Adgangstokenet er aktivt og gemt sikkert i Secret Vault. Dit produkt kan bruge det til at tilgå {{connectorName}}'s API'er.",
    description_inactive:
      'Dette adgangstoken er inaktivt (f.eks. tilbagekaldt). Brugere skal give adgang igen for at genoprette funktionaliteten.',
    description_expired:
      'Dette adgangstoken er udløbet. Det fornyes automatisk ved næste API-anmodning med opdateringstokenet. Hvis der ikke er et opdateringstoken, skal brugeren godkende sig igen.',
  },
  refresh_token: {
    available:
      'Opdateringstoken er tilgængeligt. Hvis adgangstokenet udløber, fornyes det automatisk med opdateringstokenet.',
    not_available:
      'Opdateringstoken er ikke tilgængeligt. Når adgangstokenet er udløbet, skal brugere godkende sig igen for at få nye tokens.',
  },
  token_status: 'Tokenstatus',
  created_at: 'Oprettet',
  updated_at: 'Opdateret',
  expires_at: 'Udløber',
  scopes: 'Scopes',
  delete_tokens: {
    title: 'Slet tokens',
    description:
      'Slet de gemte tokens. Brugere skal give adgang igen for at genoprette funktionaliteten.',
    confirmation_message:
      'Er du sikker på, at du vil slette tokens? GetCertus Secret Vault fjerner de gemte adgangs- og opdateringstokens fra {{connectorName}}. Brugeren skal give adgang igen for at genoprette API-adgangen til {{connectorName}}.',
  },
  token_storage_disabled: {
    title: 'Tokenlagring er slået fra for denne connector',
    description:
      "Brugere kan i øjeblikket kun bruge {{connectorName}} til at logge ind, tilknytte konti eller synkronisere profiler under hvert samtykkeflow. For at tilgå {{connectorName}}'s API'er og udføre handlinger på vegne af brugere skal du slå tokenlagring til i",
  },
};

export default Object.freeze(user_identity_details);
