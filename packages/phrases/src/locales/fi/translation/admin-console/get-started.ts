/* GetCertus addition (MPL-2.0, see GETCERTUS.md): admin console phrases. */
const get_started = {
  page_title: 'Aloitus',
  title: 'Apua onnistumiseen',
  subtitle: 'Muutama asia, joilla saat nopeasti hyötyä GetCertuksesta',
  develop: {
    title: 'Kehitä: integroi sovelluksesi viidessä minuutissa',
    title_cloud: 'Kehitä: integroi sovelluksesi turvallisesti minuuteissa',
    subtitle_cloud:
      'Tai integroi sovelluksesi viidessä minuutissa valmiilla SDK:illamme ja ohjeillamme.',
    try_mcp: 'Kokeile integrointia yhdellä kehotteella MCP:n avulla',
  },
  customize: {
    title: 'Mukauta: tarjoa erinomainen kirjautumiskokemus',
    preview: {
      title: 'Katso juuri mukauttamasi kirjautumiskokemuksen esikatselu',
      subtitle: 'Kokeile GetCertuksen kirjautumiskokemusta nyt ja näe, miten se toimii',
    },
    connector: {
      title: 'Lisää liittimiä tukeaksesi useampia sosiaalisen kirjautumisen tapoja',
      subtitle:
        'Kokeile salasanatonta kirjautumista ja tarjoa asiakkaillesi turvallinen ja vaivaton kokemus',
    },
    continue_customizing: 'Jatka mukauttamista',
    try_now: 'Kokeile nyt',
    add_more: 'Lisää',
  },
  secure: {
    title: 'Suojaa: suojaa resurssisi',
  },
  manage: {
    title: 'Hallitse: määritä pääsynhallinta tuotteellesi ja käyttäjillesi',
    rbac: {
      title: 'Lisää roolipohjainen pääsynhallinta suojaamaan resurssejasi',
      subtitle:
        'Hallitse resurssejasi skaalautuvalla roolipohjaisella valtuutuksella eri käyttötarkoituksiin.',
    },
    create_roles: 'Luo rooleja',
  },
  convert_to_production: {
    card_title: 'Valmis julkaisuun? Muista käynnistää tuotantoympäristösi!',
    title: 'Älä jätä projektia kehitystilaan',
    subtitle:
      'Käytät kehitystenanttia maksuttomaan testaukseen. Julkaistaksesi luo tuotantotenantti tai muunna nykyinen. Tarvitsetko jotain räätälöityä? <a>Ota yhteyttä</a>',
    convert_button: 'Muunna tuotantotenantiksi',
  },
  oss_cloud: {
    try: {
      title: 'Unohda ylläpito – kokeile GetCertus Cloudia maksutta',
      badge: 'Suositeltu',
      description:
        'Täysin hallinnoitu GetCertus ilman ylläpitoa – sekä nopea MCP-integraatio, useiden tenanttien tuki, tiimityöskentely ja kaikki premium-ominaisuudet. Ilmainen aloittaa, luottokorttia ei tarvita.',
      action: 'Tutustu GetCertus Cloudiin',
    },
    private_cloud: {
      title: 'Tarvitsetko vaatimustenmukaisuutta tai räätälöidyn käyttöönoton?',
      card_title: 'Yksityinen pilvi',
      description:
        'Oma GetCertus-instanssi täydellä tietojen eristyksellä, omalla verkkotunnuksella ja SLA-takuilla. Täydellinen yrityksille, joilla on tiukat tietojen sijainti- tai vaatimustenmukaisuusvaatimukset. Hoidamme infrastruktuurin, jotta voit keskittyä tuotteeseesi.',
    },
    sidebar: {
      title: 'Keskity rakentamiseen, älä ylläpitoon.',
      description: 'Anna GetCertus Cloudin hoitaa todennusinfrastruktuuri puolestasi.',
      action: 'Kokeile GetCertus Cloudia',
    },
  },
  view_all: 'Näytä kaikki →',
};

export default Object.freeze(get_started);
