/* GetCertus addition (MPL-2.0, see GETCERTUS.md): admin console phrases. */
const user_identity_details = {
  social_identity_page_title: 'Sosiaalisen identiteetin tiedot',
  back_to_user_details: 'Takaisin käyttäjän tietoihin',
  delete_identity: 'Poista identiteettiyhteys',
  social_account: {
    title: 'Sosiaalisen median tili',
    description:
      'Näytä käyttäjätiedot ja profiilitiedot, jotka on synkronoitu yhdistetystä {{connectorName}}-tilistä.',
    provider_name: 'Sosiaalisen identiteetin tarjoajan nimi',
    identity_id: 'Sosiaalisen identiteetin tunnus',
    user_profile: 'Sosiaalisen identiteetin tarjoajalta synkronoitu käyttäjäprofiili',
  },
  sso_account: {
    title: 'Enterprise SSO -tili',
    description:
      'Näytä käyttäjätiedot ja profiilitiedot, jotka on synkronoitu yhdistetystä {{connectorName}}-tilistä.',
    provider_name: 'Enterprise SSO -identiteetin tarjoajan nimi',
    identity_id: 'Enterprise SSO -identiteetin tunnus',
    user_profile: 'Enterprise SSO -identiteetin tarjoajalta synkronoitu käyttäjäprofiili',
  },
  token_storage: {
    title: 'Käyttötunnus',
    description:
      'Tallenna {{connectorName}}-palvelun käyttö- ja päivitystunnukset Secret Vaultiin. Mahdollistaa automaattiset API-kutsut ilman käyttäjän toistuvaa suostumusta.',
  },
  access_token: {
    title: 'Käyttötunnus',
    description_active:
      'Käyttötunnus on aktiivinen ja tallennettu turvallisesti Secret Vaultiin. Tuotteesi voi käyttää sitä {{connectorName}}-palvelun API:iden käyttämiseen.',
    description_inactive:
      'Tämä käyttötunnus ei ole aktiivinen (esim. mitätöity). Käyttäjien on valtuutettava pääsy uudelleen toiminnallisuuden palauttamiseksi.',
    description_expired:
      'Tämä käyttötunnus on vanhentunut. Se uusitaan automaattisesti seuraavan API-pyynnön yhteydessä päivitystunnuksella. Jos päivitystunnusta ei ole, käyttäjän on tunnistauduttava uudelleen.',
  },
  refresh_token: {
    available:
      'Päivitystunnus on saatavilla. Jos käyttötunnus vanhenee, se uusitaan automaattisesti päivitystunnuksella.',
    not_available:
      'Päivitystunnusta ei ole saatavilla. Kun käyttötunnus vanhenee, käyttäjien on tunnistauduttava uudelleen saadakseen uudet tunnukset.',
  },
  token_status: 'Tunnuksen tila',
  created_at: 'Luotu',
  updated_at: 'Päivitetty',
  expires_at: 'Vanhenee',
  scopes: 'Scopet',
  delete_tokens: {
    title: 'Poista tunnukset',
    description:
      'Poista tallennetut tunnukset. Käyttäjien on valtuutettava pääsy uudelleen toiminnallisuuden palauttamiseksi.',
    confirmation_message:
      'Haluatko varmasti poistaa tunnukset? GetCertus Secret Vault poistaa tallennetut {{connectorName}}-palvelun käyttö- ja päivitystunnukset. Käyttäjän on valtuutettava uudelleen {{connectorName}}-API-pääsyn palauttamiseksi.',
  },
  token_storage_disabled: {
    title: 'Tunnusten tallennus on pois käytöstä tälle liittimelle',
    description:
      'Käyttäjät voivat tällä hetkellä käyttää {{connectorName}}-palvelua vain kirjautumiseen, tilien yhdistämiseen tai profiilien synkronointiin jokaisessa suostumuskulussa. Jotta voit käyttää {{connectorName}}-palvelun API:ita ja toimia käyttäjien puolesta, ota tunnusten tallennus käyttöön kohdassa',
  },
};

export default Object.freeze(user_identity_details);
