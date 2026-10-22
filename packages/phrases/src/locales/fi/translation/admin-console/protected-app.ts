/* GetCertus addition (MPL-2.0, see GETCERTUS.md): admin console phrases. */
const protected_app = {
  name: 'Suojattu sovellus',
  title: 'Luo suojattu sovellus: lisää tunnistautuminen helposti ja salamannopeasti',
  fast_create: 'Pikaluonti',
  modal_title: 'Luo suojattu sovellus',
  modal_subtitle:
    'Ota turvallinen ja nopea suojaus käyttöön muutamalla napsautuksella. Lisää tunnistautuminen helposti olemassa olevaan verkkosovellukseesi.',
  form: {
    url_field_label: 'Alkuperäinen URL-osoitteesi',
    url_field_placeholder: 'https://domain.com/',
    url_field_description: 'Anna tunnistautumissuojausta tarvitsevan sovelluksesi osoite.',
    url_field_modification_notice:
      'Alkuperäisen URL-osoitteen muutokset voivat tulla voimaan maailmanlaajuisesti kaikissa verkon sijainneissa 1–2 minuutin kuluessa.',
    url_field_tooltip:
      "Anna sovelluksesi osoite ilman '/polku'-osaa. Luomisen jälkeen voit mukauttaa reittikohtaisia tunnistautumissääntöjä.\n\nHuomaa: alkuperäinen URL-osoite ei itsessään vaadi tunnistautumista; suojaus koskee vain pääsyä määritetyn sovelluksen verkkotunnuksen kautta.",
    domain_field_label: 'Sovelluksen verkkotunnus',
    domain_field_placeholder: 'your-domain',
    domain_field_description:
      'Tämä URL toimii alkuperäisen URL-osoitteen tunnistautumissuojauksen välityspalvelimena. Mukautetun verkkotunnuksen voi ottaa käyttöön luomisen jälkeen.',
    domain_field_description_short:
      'Tämä URL toimii alkuperäisen URL-osoitteen tunnistautumissuojauksen välityspalvelimena.',
    domain_field_tooltip:
      "GetCertusin suojaamia sovelluksia ylläpidetään oletuksena osoitteessa 'your-domain.{{domain}}'. Mukautetun verkkotunnuksen voi ottaa käyttöön luomisen jälkeen.",
    create_application: 'Luo sovellus',
    create_protected_app: 'Pikaluonti',
    errors: {
      domain_required: 'Verkkotunnus vaaditaan.',
      domain_in_use: 'Tämä aliverkkotunnus on jo käytössä.',
      invalid_domain_format:
        "Virheellinen aliverkkotunnuksen muoto: käytä vain pieniä kirjaimia, numeroita ja yhdysmerkkejä '-'.",
      url_required: 'Alkuperäinen URL vaaditaan.',
      invalid_url:
        "Virheellinen alkuperäisen URL:n muoto: käytä http:// tai https://. Huomaa: '/polku' ei ole tällä hetkellä tuettu.",
      localhost:
        'Tuo paikallinen palvelimesi ensin internetin saataville. Lue lisää <a>paikallisesta kehityksestä</a>.',
    },
  },
  id_token_claims: {
    card_title: 'ID-tokenin claimit',
    card_description:
      'Pyydä lisää käyttäjäscopeja suojatun sovelluksen kirjautumisessa, jotta käytössä olevat laajennetut claimit sisällytetään välitettyyn ID-tokeniin.',
    field_title: 'Lisäscopet',
    field_description:
      'Claimit sisällytetään vain, jos ne on otettu käyttöön kohdassa <a>Mukautettu JWT > ID-token</a> ja vastaavaa scopea pyydetään tässä.',
    table_column_scope: 'Scope',
    table_column_claims_forwarded: 'Välitetyt claimit',
    disabled_claims_hint:
      'Harmaana näkyviä claimeja ei vielä välitetä. Ota ne käyttöön kohdassa <a>Mukautettu JWT > ID-token</a> sisällyttääksesi ne ID-tokeniin.',
  },
  success_message:
    '🎉 Sovelluksen tunnistautuminen on otettu käyttöön! Tutustu verkkosivustosi uuteen kokemukseen.',
};

export default Object.freeze(protected_app);
