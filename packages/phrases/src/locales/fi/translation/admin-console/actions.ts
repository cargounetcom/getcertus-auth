/* GetCertus addition (MPL-2.0, see GETCERTUS.md): admin console phrases. */
const actions = {
  page_title: 'Toiminnot',
  title: 'Toiminnot',
  subtitle:
    'Suorita mukautettua koodia tietyissä tunnistautumiskulun vaiheissa laajentaaksesi GetCertusin toimintaa.',
  status: {
    not_configured: 'Ei määritetty',
    configured: 'Määritetty',
    enabled: 'Käytössä',
    disabled: 'Pois käytöstä',
  },
  types: {
    post_first_factor_verification: {
      name: 'Ensimmäisen tekijän vahvistuksen jälkeen',
      description:
        'Suorita mukautettua logiikkaa, kun paikallinen salasanan vahvistus epäonnistuu kirjautumisen aikana.',
    },
    post_sign_in: {
      name: 'Kirjautumisen jälkeen',
      description: 'Suorita mukautettua logiikkaa, kun käyttäjä on kirjautunut onnistuneesti.',
    },
  },
  data_source_tab: 'Tietolähde',
  test_tab: 'Testikonteksti',
  settings_tab: 'Asetukset',
  event_data: {
    title: 'Tapahtuman payload',
    subtitle: 'Käytä syöteparametria `event` tunnistautumistapahtuman tietoihin.',
  },
  result_data: {
    title: 'Toiminnon tulos',
    subtitle: 'Palauta tulosobjekti, jonka GetCertus ymmärtää tälle toimintotyypille.',
  },
  environment_variables: {
    title: 'Aseta ympäristömuuttujat',
    subtitle: 'Käytä ympäristömuuttujia arkaluonteisten tietojen tallentamiseen.',
    input_field_title: 'Lisää ympäristömuuttujia',
    sample_code: 'Ympäristömuuttujien käyttö toimintosi käsittelijässä. Esimerkki:',
  },
  fetch_external_data: {
    title: 'Hae ulkoisia tietoja',
    subtitle: 'Kutsu ulkoisia API:ita toimintoskriptistäsi.',
    description:
      'Käytä `fetch`-funktiota ulkoisten API:iesi kutsumiseen ja tietojen sisällyttämiseen toiminnon tulokseen. Esimerkki:',
  },
  settings: {
    title: 'Asetukset',
    subtitle: 'Määritä, onko toiminto aktiivinen ja miten ajonaikaiset virheet käsitellään.',
    enabled: {
      title: 'Ota toiminto käyttöön',
      description: 'Suorita tämä skripti, kun tunnistautumistapahtuma käynnistyy.',
    },
    on_execution_error: {
      title: 'Skriptivirheen sattuessa',
      description: 'Valitse, miten GetCertus toimii, kun skripti epäonnistuu ajon aikana.',
      block: 'Estä tunnistautumiskulku',
      allow: 'Anna tunnistautumiskulun jatkua',
      post_first_factor_description:
        'Kun tämä skripti epäonnistuu, GetCertus hylkää aina virheelliset tunnistetiedot, jotta salasanan vahvistusta ei voi ohittaa.',
    },
  },
  test_context: {
    subtitle: 'Säädä testeissä käytettävää tapahtuman testipayloadia.',
    input_field_title: 'Tapahtuman esimerkki-JSON',
  },
  script: {
    title: 'Skripti',
    restore: 'Palauta oletukset',
    restored: 'Palautettu',
  },
  tester: {
    run_button: 'Suorita testi',
    result_title: 'Testin tulos',
  },
  form_error: {
    invalid_json: 'Virheellinen JSON-muoto',
  },
  sandbox_and_security_warning: {
    title: 'Skriptit suoritetaan palvelimen oikeuksilla',
    description:
      'Itse ylläpidetyssä GetCertusissa tämä skripti suoritetaan samassa ympäristössä kuin GetCertus: se voi lukea palvelimen ympäristömuuttujia ja tavoittaa sisäverkkosi palveluita. Sitä ei suoriteta hiekkalaatikossa. Anna pääsy tälle sivulle vain henkilöille, joille uskoisit myös pääsyn palvelimelle. Tämä toiminto suoritetaan vain, kun paikallinen salasanan vahvistus on epäonnistunut – palauta `passwordVerified: true` vasta, kun olet itse vahvistanut annetun salasanan. Tämän toiminnon luomat käyttäjät ohittavat vain rekisteröitymistä koskevat tarkistukset, kuten sähköpostien estolistan, vain SSO:ta käyttävät verkkotunnukset, estetyn rekisteröitymisen ja rekisteröitymisen pakolliset profiilikentät. Olemassa olevien käyttäjien profiili- ja salasanamuutokset tehdään myös ennen kuin MFA on suoritettu.',
  },
  sandbox_warning: {
    title: 'Skriptit suoritetaan palvelimen oikeuksilla',
    description:
      'Itse ylläpidetyssä GetCertusissa tämä skripti suoritetaan samassa ympäristössä kuin GetCertus: se voi lukea palvelimen ympäristömuuttujia ja tavoittaa sisäverkkosi palveluita. Sitä ei suoriteta hiekkalaatikossa. Anna pääsy tälle sivulle vain henkilöille, joille uskoisit myös pääsyn palvelimelle.',
  },
  security_warning: {
    title: 'Tietoturvavaroitus',
    description:
      'Tämä toiminto suoritetaan vain, kun paikallinen salasanan vahvistus on epäonnistunut. Palauta `passwordVerified: true` vasta, kun olet itse vahvistanut annetun salasanan. Tämän toiminnon luomat käyttäjät ohittavat vain rekisteröitymistä koskevat tarkistukset, kuten sähköpostien estolistan, vain SSO:ta käyttävät verkkotunnukset, estetyn rekisteröitymisen ja rekisteröitymisen pakolliset profiilikentät. Olemassa olevien käyttäjien profiili- ja salasanamuutokset tehdään myös ennen kuin MFA on suoritettu.',
  },
  delete_modal_title: 'Poista toiminto',
  delete_modal_content:
    'Haluatko varmasti poistaa tämän toiminnon? Tunnistautumiskulku ei enää suorita tätä skriptiä.',
  deleted: 'Toiminto poistettu',
  created: 'Toiminto luotu',
  saved: 'Toiminto tallennettu',
};

export default Object.freeze(actions);
