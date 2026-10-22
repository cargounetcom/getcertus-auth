/* GetCertus addition (MPL-2.0, see GETCERTUS.md): admin console phrases. */
const connectors = {
  page_title: 'Liittimet',
  title: 'Liittimet',
  subtitle: 'Määritä liittimet salasanatonta ja sosiaalista kirjautumista varten',
  create: 'Lisää sosiaalinen liitin',
  config_sie_notice:
    'Olet määrittänyt liittimiä. Muista määrittää ne myös kohdassa <a>{{link}}</a>.',
  config_sie_link_text: 'kirjautumiskokemus',
  tab_email_sms: 'Sähköposti- ja tekstiviestiliittimet',
  tab_social: 'Sosiaaliset liittimet',
  connector_name: 'Liittimen nimi',
  demo_tip:
    'Tämän demoliittimen viestimäärä on rajattu 100:aan, eikä sitä suositella tuotantokäyttöön.',
  social_demo_tip:
    'Demoliitin on tarkoitettu vain esittelyyn, eikä sitä suositella tuotantokäyttöön.',
  connector_type: 'Tyyppi',
  placeholder_title: 'Sosiaalinen liitin',
  placeholder_description:
    'GetCertus tarjoaa monia yleisiä sosiaalisen kirjautumisen liittimiä, ja voit myös luoda omia standardiprotokollilla.',
  save_and_done: 'Tallenna ja valmis',
  type: {
    email: 'Sähköpostiliitin',
    sms: 'Tekstiviestiliitin',
    social: 'Sosiaalinen liitin',
  },
  setup_title: {
    email: 'Määritä sähköpostiliitin',
    sms: 'Määritä tekstiviestiliitin',
    social: 'Lisää sosiaalinen liitin',
  },
  guide: {
    subtitle: 'Vaiheittainen opas liittimen määrittämiseen',
    general_setting: 'Yleiset asetukset',
    parameter_configuration: 'Parametrien määritys',
    test_connection: 'Testaa yhteys',
    name: 'Sosiaalisen kirjautumispainikkeen nimi',
    name_placeholder: 'Anna sosiaalisen kirjautumispainikkeen nimi',
    name_tip:
      'Liittimen painike näytetään muodossa "Jatka palvelulla {{name}}". Huomioi, ettei nimestä tule liian pitkä.',
    connector_logo: 'Liittimen logo',
    connector_logo_tip: 'Logo näytetään liittimen kirjautumispainikkeessa.',
    target: 'Identiteetintarjoajan nimi',
    target_placeholder: 'Anna liittimen identiteetintarjoajan nimi',
    target_tip:
      '“IdP-nimi” voi olla yksilöllinen tunniste, jolla sosiaaliset identiteettisi erotetaan toisistaan.',
    target_tip_standard:
      '“IdP-nimi” voi olla yksilöllinen tunniste, jolla sosiaaliset identiteettisi erotetaan toisistaan. Asetusta ei voi muuttaa liittimen luomisen jälkeen.',
    target_tooltip:
      'GetCertuksen sosiaalisissa liittimissä "IdP-nimi" tarkoittaa sosiaalisten identiteettiesi "lähdettä". Ristiriitojen välttämiseksi GetCertus ei hyväksy samaa "IdP-nimeä" samalle alustalle kahdesti. Ole huolellinen ennen liittimen lisäämistä, sillä arvoa EI VOI muuttaa luomisen jälkeen. <a>Lue lisää</a>',
    target_conflict:
      'Annettu IdP-nimi vastaa olemassa olevaa liitintä <span>name</span>. Saman IdP-nimen käyttö voi aiheuttaa odottamatonta kirjautumiskäyttäytymistä, jolloin käyttäjät pääsevät samaan tiliin kahden eri liittimen kautta.',
    target_conflict_line2:
      'Jos haluat korvata nykyisen liittimen samalla identiteetintarjoajalla ja antaa aiempien käyttäjien kirjautua ilman uudelleenrekisteröitymistä, poista liitin <span>name</span> ja luo uusi samalla "IdP-nimellä".',
    target_conflict_line3:
      'Jos haluat yhdistää eri identiteetintarjoajaan, muuta "IdP-nimeä" ja jatka.',
    config: 'Anna määritys-JSON',
    sync_profile: 'Synkronoi profiilitiedot',
    sync_profile_only_at_sign_up: 'Synkronoi vain rekisteröityessä',
    sync_profile_each_sign_in: 'Synkronoi aina jokaisella kirjautumisella',
    sync_profile_tip:
      'Synkronoi perusprofiili sosiaalisesta palvelusta, kuten käyttäjien nimet ja avatarit.',
    enable_token_storage: {
      title: 'Tallenna tunnukset pysyvää API-käyttöä varten',
      description:
        'Tallenna käyttö- ja päivitystunnukset Secret Vaultiin. Tämä mahdollistaa automaattiset API-kutsut ilman toistuvaa käyttäjän suostumusta. Esimerkki: anna tekoälyagenttisi lisätä tapahtumia Google-kalenteriin pysyvällä valtuutuksella. <a>Opi kutsumaan kolmansien osapuolten API:ja</a>',
    },
    callback_uri: 'Uudelleenohjaus-URI (callback-URI)',
    callback_uri_description:
      'Uudelleenohjaus-URI:t ovat osoitteita, joihin käyttäjät ohjataan sosiaalisen valtuutuksen jälkeen. Lisää kaikki näytetyt URI:t IdP:si määrityksiin.',
    callback_uri_custom_domain_description:
      'Jos käytät GetCertuksessa useita <a>mukautettuja verkkotunnuksia</a>, lisää kaikki vastaavat callback-URI:t IdP:hesi, jotta sosiaalinen kirjautuminen toimii jokaisella verkkotunnuksella.\n\nGetCertuksen oletusverkkotunnus (*.logto.app) on aina kelvollinen — lisää se vain, jos haluat tukea kirjautumista myös sen kautta.',
    acs_url: 'Assertion Consumer Service -URL',
  },
  platform: {
    universal: 'Yleinen',
    web: 'Verkko',
    native: 'Natiivi',
  },
  add_multi_platform: ' tukee useita alustoja, valitse alusta jatkaaksesi',
  drawer_title: 'Liitinopas',
  drawer_subtitle: 'Integroi liitin ohjeiden mukaan',
  unknown: 'Tuntematon liitin',
  standard_connectors: 'Vakioliittimet',
  create_form: {
    third_party_connectors:
      'Integroi kolmansien osapuolten palvelut nopeaa sosiaalista kirjautumista, sosiaalisten tilien linkitystä ja API-käyttöä varten. <a>Lue lisää</a>',
    email_connector_upsell: {
      title: 'GetCertuksen sisäänrakennettu sähköpostipalvelu',
      description:
        'Sähköpostin lähetys ilman määrityksiä. Lähetä vahvistuskoodeja ja taikalinkkejä heti.',
    },
    standard_connectors: 'Tai mukauta sosiaalista liitintä standardiprotokollalla.',
  },
};

export default Object.freeze(connectors);
