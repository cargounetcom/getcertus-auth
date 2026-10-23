/* GetCertus addition (MPL-2.0, see GETCERTUS.md): admin console phrases. */
const jwt_claims = {
  title: 'Mukautettu JWT',
  description: 'Mukauta käyttötunnusta tai ID-tokenia ja anna sovelluksellesi lisätietoja.',
  access_token: {
    card_title: 'Käyttötunnus',
    card_description:
      'Käyttötunnus on tunniste, jolla API:t valtuuttavat pyyntöjä, ja se sisältää vain pääsypäätöksiin tarvittavat claimit.',
  },
  user_jwt: {
    card_field: 'Käyttäjän käyttötunnus',
    card_description: 'Lisää käyttäjäkohtaisia tietoja käyttötunnusta myönnettäessä.',
    for: 'käyttäjälle',
  },
  machine_to_machine_jwt: {
    card_field: 'Koneelta koneelle -käyttötunnus',
    card_description: 'Lisää lisätietoja koneelta koneelle -tunnuksia myönnettäessä.',
    for: 'M2M:lle',
  },
  id_token: {
    card_title: 'ID-token',
    card_description:
      'ID-token on kirjautumisen jälkeen vastaanotettava identiteettivakuutus, joka sisältää käyttäjän identiteetticlaimit asiakkaan käytettäväksi näyttämiseen tai istunnon luomiseen.',
    card_field: 'Käyttäjän ID-token',
    card_field_description:
      "Claimit 'sub', 'email', 'phone', 'profile' ja 'address' ovat aina saatavilla. Muut claimit on ensin otettava käyttöön täällä. Kaikissa tapauksissa sovelluksesi on pyydettävä vastaavia scopeja integroinnissa saadakseen ne.",
  },
  code_editor_title: 'Mukauta tunnuksen {{token}} claimeja',
  custom_jwt_create_button: 'Lisää mukautettuja claimeja',
  custom_jwt_item: 'Mukautetut claimit {{for}}',
  delete_modal_title: 'Poista mukautetut claimit',
  delete_modal_content: 'Haluatko varmasti poistaa mukautetut claimit?',
  clear: 'Aloita alusta',
  cleared: 'Tyhjennetty',
  restore: 'Palauta oletukset',
  restored: 'Palautettu',
  data_source_tab: 'Tietolähde',
  error_handling_tab: 'Virheenkäsittely',
  test_tab: 'Testikonteksti',
  jwt_claims_description:
    'Oletusclaimit sisällytetään automaattisesti kohteeseen  eikä niitä voi ohittaa.',
  user_data: {
    title: 'Käyttäjäkonteksti',
    subtitle: 'Käytä syöteparametria `context.user` tärkeiden käyttäjätietojen antamiseen.',
  },
  grant_data: {
    title: 'Grant-konteksti',
    subtitle:
      'Käytä syöteparametria `context.grant` tärkeiden grant-tietojen antamiseen; käytettävissä vain token exchangessa.',
  },
  interaction_data: {
    title: 'Käyttäjän vuorovaikutuksen konteksti',
    subtitle:
      'Käytä parametria `context.interaction` käyttäjän vuorovaikutustietoihin nykyisessä tunnistautumisistunnossa.',
  },
  application_data: {
    title: 'Sovelluskonteksti',
    subtitle:
      'Käytä syöteparametria `context.application` tunnukseen liittyvien sovellustietojen antamiseen.',
  },
  organization_data: {
    title: 'Organisaatiokonteksti',
    subtitle:
      'Käytä syöteparametria `context.organization` kohdeorganisaation tietojen antamiseen; käytettävissä vain organisaatiotunnuksille.',
  },
  token_data: {
    title: 'Tunnuksen payload',
    subtitle: 'Käytä syöteparametria `token` nykyisen käyttötunnuksen payloadille. ',
  },
  api_context: {
    title: 'API-konteksti: pääsynhallinta',
    subtitle: 'Käytä metodia `api.denyAccess` tunnuspyynnön hylkäämiseen.',
  },
  error_handling: {
    title: 'Virheenkäsittely',
    subtitle: 'Määritä, estetäänkö tunnuksen myöntäminen, kun skripti epäonnistuu.',
    input_field_title: 'Tunnuksen myöntämisen toiminta skriptivirheessä',
    block_issuance_switch: 'Estä tunnuksen myöntäminen, kun skriptissä on virhe',
    default_hint_create:
      'Uudet mukautettujen claimien skriptit estävät oletuksena tunnuksen myöntämisen, kun skripti epäonnistuu. Jos API antaa jo arvon, käytetään tallennettua arvoa.',
    default_hint_edit:
      'Olemassa olevat mukautettujen claimien skriptit ilman tätä asetusta säilyttävät vanhan oletuksen (pois päältä), kunnes tallennat arvon erikseen.',
    warning:
      'Kun tämä on käytössä, skriptin ajonaikaiset virheet hylkäävät tunnuspyynnön virheellä `invalid_request` (400) ja lokalisoidulla kuvauksella `error_description`. Kutsut metodiin `api.denyAccess` palauttavat edelleen `access_denied`.',
  },
  fetch_external_data: {
    title: 'Hae ulkoisia tietoja',
    subtitle: 'Sisällytä tietoja ulkoisista API:istasi suoraan claimeihin.',
    description:
      'Käytä `fetch`-funktiota ulkoisten API:iesi kutsumiseen ja tietojen sisällyttämiseen mukautettuihin claimeihin. Esimerkki: ',
  },
  environment_variables: {
    title: 'Aseta ympäristömuuttujat',
    subtitle: 'Käytä ympäristömuuttujia arkaluonteisten tietojen tallentamiseen.',
    input_field_title: 'Lisää ympäristömuuttujia',
    sample_code:
      'Ympäristömuuttujien käyttö mukautettujen tunnusclaimien käsittelijässä. Esimerkki: ',
  },
  jwt_claims_hint:
    'Pidä mukautetut claimit alle 50 kt:ssa. Oletusclaimit sisällytetään tunnukseen automaattisesti, eikä niitä voi ohittaa.',
  tester: {
    subtitle: 'Säädä testitunnusta ja testikäyttäjän tietoja.',
    run_button: 'Suorita testi',
    result_title: 'Testin tulos',
  },
  sandbox_warning: {
    title: 'Skriptit suoritetaan palvelimen oikeuksilla',
    description:
      'Itse ylläpidetyssä GetCertusissa tämä skripti suoritetaan samassa ympäristössä kuin GetCertus: se voi lukea palvelimen ympäristömuuttujia ja tavoittaa sisäverkkosi palveluita. Sitä ei suoriteta hiekkalaatikossa. Anna pääsy tälle sivulle vain henkilöille, joille uskoisit myös pääsyn palvelimelle.',
  },
  form_error: {
    invalid_json: 'Virheellinen JSON-muoto',
  },
};

export default Object.freeze(jwt_claims);
