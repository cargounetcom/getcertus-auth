/* GetCertus addition (MPL-2.0, see GETCERTUS.md): admin console phrases. */
const security = {
  page_title: 'Tietoturva',
  title: 'Tietoturva',
  subtitle: 'Määritä kehittynyt suojaus kehittyneitä hyökkäyksiä vastaan.',
  tabs: {
    captcha: 'CAPTCHA',
    password_policy: 'Salasanakäytäntö',
    blocklist: 'Estolista',
    general: 'Yleiset',
  },
  bot_protection: {
    title: 'Bottisuojaus',
    description:
      'Ota CAPTCHA käyttöön rekisteröitymisessä, kirjautumisessa ja salasanan palautuksessa automaattisten uhkien estämiseksi.',
    captcha: {
      title: 'CAPTCHA',
      placeholder: 'Valitse CAPTCHA-palvelu ja määritä integraatio.',
      add: 'Lisää CAPTCHA',
    },
    settings: 'Asetukset',
    enable_captcha: 'Ota CAPTCHA käyttöön',
    enable_captcha_description:
      'Ota CAPTCHA-vahvistus käyttöön rekisteröitymisessä, kirjautumisessa ja salasanan palautuksessa.',
    custom_ui_captcha_notice:
      'Käytät Bring your UI -toimintoa. CAPTCHA:n käyttöönotto omassa käyttöliittymässäsi vaatii lisämäärityksiä. <a>Katso ohje</a>.',
  },
  create_captcha: {
    setup_captcha: 'Määritä CAPTCHA',
  },
  captcha_providers: {
    recaptcha_enterprise: {
      name: 'reCAPTCHA Enterprise',
      description:
        'Googlen yritystason CAPTCHA-ratkaisu, joka tarjoaa kehittyneen uhkien tunnistuksen ja yksityiskohtaista tietoturva-analytiikkaa verkkosivustosi suojaamiseksi petoksilta.',
    },
    turnstile: {
      name: 'Cloudflare Turnstile',
      description:
        'Cloudflaren älykäs CAPTCHA-vaihtoehto, joka suojaa boteilta huomaamattomasti ja takaa sujuvan käyttökokemuksen ilman kuvatehtäviä.',
    },
    cap: {
      name: 'Cap',
      description:
        'Avoimen lähdekoodin, itse ylläpidettävä proof-of-work-CAPTCHA ilman kuvatehtäviä tai kolmansien osapuolten palveluja – ihanteellinen alueille, joilla muut CAPTCHA-palvelut eivät toimi.',
    },
  },
  captcha_details: {
    back_to_security: 'Takaisin tietoturvaan',
    page_title: 'CAPTCHA:n tiedot',
    check_readme: 'Lue README',
    options_change_captcha: 'Vaihda CAPTCHA-palvelu',
    connection: 'Yhteys',
    description: 'Määritä CAPTCHA-yhteydet.',
    site_key: 'Sivuston avain',
    secret_key: 'Salainen avain',
    project_id: 'Projektin tunnus',
    domain: 'Verkkotunnus (valinnainen)',
    domain_placeholder: 'www.google.com (oletus) tai recaptcha.net',
    recaptcha_key_id: 'reCAPTCHA-avaimen tunnus',
    recaptcha_api_key: 'Projektin API-avain',
    cap_endpoint: 'Cap-päätepiste',
    cap_endpoint_placeholder: 'https://cap.example.com',
    cap_endpoint_http_notice:
      'Tämä päätepiste käyttää HTTP:tä, joka sopii vain paikalliseen kehitykseen. Selaimet estävät HTTP-pyynnöt HTTPS-kirjautumissivulta, ja salainen avain lähetettäisiin salaamattomana. Käytä tuotannossa HTTPS:ää.',
    deletion_description: 'Haluatko varmasti poistaa tämän CAPTCHA-palvelun?',
    captcha_deleted: 'CAPTCHA-palvelu poistettu',
    setup_captcha: 'Määritä CAPTCHA',
    mode: 'Vahvistustila',
    mode_invisible: 'Näkymätön',
    mode_checkbox: 'Valintaruutu',
    mode_notice:
      'Vahvistustila määritetään reCAPTCHA-avaimen asetuksissa Google Cloud Consolessa. Tilan vaihtaminen tässä edellyttää vastaavaa avaintyyppiä.',
    score_threshold: 'Pisteraja',
    score_threshold_description:
      'Rajan alittavat pisteet hylätään. 0.0 sallii kaikki, 1.0 vain täydelliset pisteet. Oletus on 0.5.',
    score_threshold_error: 'Pisterajan on oltava välillä 0–1.',
  },
  password_policy: {
    password_requirements: 'Salasanavaatimukset',
    password_requirements_description:
      'Tiukenna salasanavaatimuksia suojautuaksesi tunnistetietojen täyttöhyökkäyksiltä ja heikkojen salasanojen hyökkäyksiltä. ',
    minimum_length: 'Vähimmäispituus',
    minimum_length_description: 'NIST suosittelee verkkotuotteille <a>vähintään 8 merkkiä</a>.',
    minimum_length_error:
      'Vähimmäispituuden on oltava välillä {{min}}–{{max}} (rajat mukaan lukien).',
    minimum_required_char_types: 'Vaadittujen merkkityyppien vähimmäismäärä',
    minimum_required_char_types_description:
      'Merkkityypit: isot kirjaimet (A-Z), pienet kirjaimet (a-z), numerot (0-9) ja erikoismerkit ({{symbols}}).',
    password_rejection: 'Salasanojen hylkääminen',
    compromised_passwords: 'Hylkää vaarantuneet salasanat',
    breached_passwords: 'Vuotaneet salasanat',
    breached_passwords_description:
      'Hylkää salasanat, jotka on aiemmin löydetty tietovuototietokannoista.',
    restricted_phrases: 'Rajoita heikkoja fraaseja',
    restricted_phrases_tooltip:
      'Salasanassa ei tulisi käyttää näitä fraaseja, ellei niihin yhdistetä vähintään 3 lisämerkkiä.',
    repetitive_or_sequential_characters: 'Toistuvat tai peräkkäiset merkit',
    repetitive_or_sequential_characters_description: 'Esim. "AAAA", "1234" ja "abcd".',
    user_information: 'Käyttäjätiedot',
    user_information_description: 'Esim. sähköpostiosoite, puhelinnumero, käyttäjänimi jne.',
    custom_words: 'Omat sanat',
    custom_words_description:
      'Lisää asiayhteyteen liittyviä sanoja, kirjainkoolla ei ole väliä, yksi sana riville.',
    custom_words_placeholder: 'Palvelusi nimi, yrityksen nimi jne.',
    password_expiration: 'Salasanan vanheneminen',
    password_expiration_description:
      'Vaadi käyttäjiä vaihtamaan salasanansa tietyn päivämäärän jälkeen. Muutos ei koske SSO:lla tai pääsyavaimella kirjautuvia käyttäjiä.',
    enable_password_expiration: 'Ota salasanan vanheneminen käyttöön',
    enable_password_expiration_description:
      'Vaadi käyttäjiä vaihtamaan salasanansa säännöllisesti. Nykyisten käyttäjien, joiden salasanan vaihtopäivää ei ole tallennettu, aika lasketaan käytännön käyttöönottopäivästä.',
    enable_password_expiration_tip:
      'Salasanan vanhenemisen voi ottaa käyttöön vasta, kun kirjautumiskokemukseen on määritetty vähintään yksi salasanan palautustapa kelvollisella liittimellä.',
    expiration_period: 'Salasanan voimassaoloaika (päivää)',
    expiration_period_description: 'Päivien määrä, jonka salasana on voimassa ennen vanhenemista.',
    expiration_period_error: 'Salasanan voimassaoloajan on oltava {{min}}–{{max}} päivää.',
    password_expiration_recovery_reminder:
      'Joillakin käyttäjillä ei ehkä ole sähköpostiosoitetta tai puhelinnumeroa palautuskoodin vastaanottamiseen, joten he eivät voi vaihtaa vanhentunutta salasanaa. Vaadi rekisteröityessä sähköposti tai puhelinnumero, jotta jokainen käyttäjä voi palauttaa salasanansa.',
  },
  verification_code_policy: {
    card_title: 'Vahvistuskoodi',
    card_description:
      'Määritä kirjautumisessa, rekisteröitymisessä ja salasanan palautuksessa käytettävien vahvistuskoodien voimassaoloaika ja yritysten enimmäismäärä.',
    enable: {
      title: 'Mukauta vahvistuskoodien asetuksia',
      description:
        'Salli vahvistuskoodien voimassaoloajan ja yritysten enimmäismäärän mukauttaminen.',
    },
    expiration_duration: {
      title: 'Voimassaoloaika (sekuntia)',
      description: 'Sekuntimäärä, jonka vahvistuskoodi on voimassa lähettämisen jälkeen.',
      error_message: 'Voimassaoloajan on oltava 60–3600 sekuntia.',
    },
    max_retry_attempts: {
      title: 'Yritysten enimmäismäärä',
      description:
        'Epäonnistuneiden vahvistusyritysten enimmäismäärä ennen kuin koodi mitätöidään.',
      error_message: 'Yritysten enimmäismäärän on oltava 1–100.',
    },
  },
  sentinel_policy: {
    card_title: 'Tunnisteen lukitus',
    card_description:
      'Lukitus on kaikkien käyttäjien käytettävissä oletusasetuksin, mutta voit mukauttaa sitä tarkempaa hallintaa varten.\n\nLukitse tunniste tilapäisesti useiden epäonnistuneiden todennusyritysten jälkeen (esim. toistuva väärä salasana tai vahvistuskoodi) estääksesi brute force -hyökkäykset.',
    enable_sentinel_policy: {
      title: 'Mukauta lukitusta',
      description:
        'Salli epäonnistuneiden kirjautumisyritysten enimmäismäärän, lukituksen keston ja välittömän manuaalisen avauksen mukauttaminen.',
    },
    max_attempts: {
      title: 'Epäonnistuneiden yritysten enimmäismäärä',
      description:
        'Lukitse tunniste tilapäisesti, kun epäonnistuneiden kirjautumisyritysten enimmäismäärä tunnin sisällä täyttyy.',
      error_message: 'Epäonnistuneiden yritysten enimmäismäärän on oltava suurempi kuin 0.',
    },
    lockout_duration: {
      title: 'Lukituksen kesto (minuuttia)',
      description:
        'Estä kirjautumiset tietyksi ajaksi, kun epäonnistuneiden yritysten raja on ylitetty.',
      error_message: 'Lukituksen keston on oltava vähintään 1 minuutti.',
    },
    manual_unlock: {
      title: 'Manuaalinen avaus',
      description:
        'Avaa käyttäjien lukitus heti vahvistamalla henkilöllisyys ja syöttämällä tunniste.',
      unblock_by_identifiers: 'Poista esto tunnisteella',
      modal_description_1:
        'Tunniste on lukittu tilapäisesti useiden epäonnistuneiden kirjautumis- tai rekisteröitymisyritysten vuoksi. Tietoturvan vuoksi pääsy palautuu automaattisesti lukitusajan päätyttyä.',
      modal_description_2:
        ' Avaa lukitus manuaalisesti vain, jos olet vahvistanut käyttäjän henkilöllisyyden ja varmistanut, ettei luvattomia yrityksiä ole tehty.',
      placeholder: 'Anna tunnisteet (sähköpostiosoite / puhelinnumero / käyttäjänimi)',
      confirm_button_text: 'Avaa nyt',
      success_toast: 'Lukitus avattu',
      duplicate_identifier_error: 'Tunniste on jo lisätty',
      empty_identifier_error: 'Anna vähintään yksi tunniste',
    },
  },
  blocklist: {
    card_title: 'Sähköpostien estolista',
    card_description:
      'Hallitse käyttäjäkuntaasi estämällä riskialttiit tai ei-toivotut sähköpostiosoitteet.',
    custom_email_allowlist: {
      title: 'Salli mukautetut sähköpostiosoitteet',
      description:
        'Lisää sääntöjä, jotka sallivat vain tietyt sähköpostiverkkotunnukset, sähköpostiosoitteet tai jokerimerkkikuviot uusissa rekisteröitymisissä ja uusissa linkitetyissä osoitteissa. Esimerkkejä: bar@example.com, @example.com, foo*@example.com, *@example.com. Verkkotunnuksia gmail.com ja googlemail.com käsitellään samanarvoisina, ja paikallisen osan pisteet ohitetaan, joten foo.bar@gmail.com vastaa osoitetta foobar@googlemail.com.',
      placeholder: 'Anna sähköpostiosoite, verkkotunnus tai jokerimerkkikuvio',
      duplicate_error: 'Sähköpostiosoite, verkkotunnus tai jokerimerkkikuvio on jo lisätty',
      invalid_format_error:
        'On oltava kelvollinen sähköpostiosoite (bar@example.com), verkkotunnus (@example.com) tai jokerimerkkikuvio (foo*@example.com, *@example.com)',
      warnings: {
        identical_entries:
          'Osa sallittujen listan merkinnöistä on myös estosäännöissä. Vastaavat sähköpostiosoitteet voidaan silti estää.',
        blocked_exact_email:
          'Osa sallittujen listan tarkoista sähköpostiosoitteista vastaa estosääntöä. Vastaavat sähköpostiosoitteet voidaan silti estää.',
        blocked_subaddressing:
          'Osa sallittujen listan merkinnöistä sisältää plusmerkin (+), mutta sähköpostin aliosoitteet on estetty.',
        effectively_unusable:
          'Näiden tarkistusten perusteella nykyinen sallittujen lista ei ehkä päästä läpi yhtään uutta sähköpostiosoitetta.',
      },
    },
    disposable_email: {
      title: 'Estä kertakäyttöiset sähköpostiosoitteet',
      description:
        'Hylkää rekisteröitymiset, joissa käytetään kertakäyttöistä sähköpostiosoitetta; tämä estää roskapostia ja parantaa käyttäjien laatua.',
    },
    email_subaddressing: {
      title: 'Estä sähköpostin aliosoitteet',
      description:
        'Hylkää rekisteröitymiset, joissa käytetään plusmerkillä (+) ja lisämerkeillä muodostettuja aliosoitteita (esim. user+alias@foo.com).',
    },
    custom_email_address: {
      title: 'Estä mukautetut sähköpostiosoitteet',
      description:
        'Lisää sääntöjä, jotka estävät tiettyjä sähköpostiverkkotunnuksia, sähköpostiosoitteita tai jokerimerkkikuvioita rekisteröitymästä tai linkittymästä käyttöliittymän kautta. Esimerkkejä: bar@example.com, @example.com, foo*@example.com, *@example.com. Verkkotunnuksia gmail.com ja googlemail.com käsitellään samanarvoisina, ja paikallisen osan pisteet ohitetaan, joten foo.bar@gmail.com vastaa osoitetta foobar@googlemail.com.',
      placeholder: 'Anna sähköpostiosoite, verkkotunnus tai jokerimerkkikuvio',
      duplicate_error: 'Sähköpostiosoite, verkkotunnus tai jokerimerkkikuvio on jo lisätty',
      invalid_format_error:
        'On oltava kelvollinen sähköpostiosoite (bar@example.com), verkkotunnus (@example.com) tai jokerimerkkikuvio (foo*@example.com, *@example.com)',
    },
  },
};

export default Object.freeze(security);
