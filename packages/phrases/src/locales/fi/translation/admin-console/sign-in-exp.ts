/* GetCertus addition (MPL-2.0, see GETCERTUS.md): admin console phrases. */
const sign_in_exp = {
  page_title: 'Kirjautumiskokemus',
  page_title_with_account: 'Kirjautuminen & tili',
  title: 'Kirjautuminen & tili',
  description:
    'Mukauta todennuskulkuja ja käyttöliittymää ja esikatsele valmista kokemusta reaaliajassa.',
  tabs: {
    branding: 'Brändäys',
    sign_up_and_sign_in: 'Rekisteröityminen ja kirjautuminen',
    collect_user_profile: 'Käyttäjäprofiilin keruu',
    account_center: 'Tilikeskus',
    content: 'Sisältö',
    password_policy: 'Salasanakäytäntö',
  },
  welcome: {
    title: 'Mukauta kirjautumiskokemusta',
    description:
      'Pääse nopeasti alkuun ensimmäisen kirjautumismäärityksen kanssa. Opas käy läpi kaikki tarvittavat asetukset.',
    get_started: 'Aloita',
    apply_remind: 'Huomaa, että kirjautumiskokemus koskee kaikkia tämän tilin sovelluksia.',
  },
  color: {
    title: 'VÄRI',
    primary_color: 'Brändiväri',
    dark_primary_color: 'Brändiväri (tumma)',
    dark_mode: 'Ota tumma tila käyttöön',
    dark_mode_description:
      'Sovelluksesi saa automaattisesti luodun tumman teeman brändivärisi ja GetCertuksen algoritmin perusteella. Voit mukauttaa sitä vapaasti.',
    dark_mode_reset_tip: 'Laske tumman tilan väri uudelleen brändivärin perusteella.',
    reset: 'Laske uudelleen',
  },
  branding: {
    title: 'BRÄNDÄYS',
    ui_style: 'Tyyli',
    with_light: '{{value}}',
    with_dark: '{{value}} (tumma)',
    app_logo_and_favicon: 'Sovelluksen logo ja favicon',
    company_logo_and_favicon: 'Yrityksen logo ja favicon',
    organization_logo_and_favicon: 'Organisaation logo ja favicon',
    hide_logto_branding: 'Piilota GetCertus-brändäys',
    hide_logto_branding_description:
      'Poista "Powered by GetCertus". Nosta esiin vain oma brändisi siistillä ja ammattimaisella kirjautumiskokemuksella.',
    hide_logto_branding_oss_note:
      'Allekirjoituksen piilottaminen edellyttää GetCertuksen <a>Branding-lisäosaa</a>.',
  },
  branding_uploads: {
    app_logo: {
      title: 'Sovelluksen logo',
      url: 'Sovelluksen logon URL',
      url_placeholder: 'https://your.cdn.domain/logo.png',
      error: 'Sovelluksen logo: {{error}}',
    },
    company_logo: {
      title: 'Yrityksen logo',
      url: 'Yrityksen logon URL',
      url_placeholder: 'https://your.cdn.domain/logo.png',
      error: 'Yrityksen logo: {{error}}',
    },
    organization_logo: {
      title: 'Lataa kuva',
      url: 'Organisaation logon URL',
      url_placeholder: 'https://your.cdn.domain/logo.png',
      error: 'Organisaation logo: {{error}}',
    },
    connector_logo: {
      title: 'Lataa kuva',
      url: 'Liittimen logon URL',
      url_placeholder: 'https://your.cdn.domain/logo.png',
      error: 'Liittimen logo: {{error}}',
    },
    favicon: {
      title: 'Favicon',
      url: 'Faviconin URL',
      url_placeholder: 'https://your.cdn.domain/favicon.ico',
      error: 'Favicon: {{error}}',
    },
  },
  custom_ui: {
    title: 'Mukautettu käyttöliittymä',
    cloud_tag: 'Cloud',
    css_code_editor_title: 'Mukautettu CSS',
    css_code_editor_field_title: 'CSS-ohitukset',
    css_code_editor_description1: 'Katso esimerkki mukautetusta CSS:stä.',
    css_code_editor_description2: '<a>{{link}}</a>',
    css_code_editor_description_link_content: 'Lue lisää',
    css_code_editor_content_placeholder:
      'Anna tähän CSS-ohitukset, joilla muokkaat minkä tahansa tyyliä juuri haluamaksesi. Käytä luovuuttasi ja tee käyttöliittymästäsi erottuva.',
    bring_your_ui_title: 'Bring your UI',
    bring_your_ui_upload_title: 'Lataa omat käyttöliittymätiedostot',
    bring_your_ui_description:
      'Lataa pakattu paketti (.zip), joka korvaa GetCertuksen valmiin käyttöliittymän omalla koodillasi. <a>Lue lisää</a>',
    bring_your_ui_oss_description: 'Mukauta kirjautumisen käyttöliittymää omalla koodillasi.',
    bring_your_ui_oss_card_description:
      'Oman käyttöliittymän lataus ei vielä sisälly GetCertuksen paketteihin. <a>Katso paketit ja lisäosat</a>.',
    bring_your_ui_oss_try_cloud: 'Katso paketit',
    preview_with_bring_your_ui_description:
      'Omat käyttöliittymätiedostosi on ladattu ja niitä tarjoillaan nyt. Siksi sisäänrakennettu esikatseluikkuna on poistettu käytöstä.\nTestaa omaa kirjautumiskäyttöliittymääsi napsauttamalla "Live-esikatselu"-painiketta, joka avaa sen uuteen välilehteen.',
    csp_description:
      'Salli lisälähdelausekkeita omalle kirjautumiskäyttöliittymällesi. Arvoja käytetään vain, kun omia käyttöliittymätiedostoja tarjoillaan.',
    csp_script_src: 'Sallittu script-src',
    csp_script_src_tip:
      'Salli HTTPS-lähdelausekkeet oman käyttöliittymäsi lataamille skripteille, esim. https://scripts.example.com tai https://*.example.com.',
    csp_connect_src: 'Sallittu connect-src',
    csp_connect_src_tip:
      'Salli HTTPS- tai WSS-lähdelausekkeet oman käyttöliittymäsi verkkopyynnöille, esim. https://api.example.com tai wss://events.example.com.',
    csp_source_invalid_error:
      'Anna kelvollinen lähdelauseke. Käytä https://-osoitteita; connect-src tukee myös wss://. CSP-avainsanoja ja puolipisteitä ei tueta.',
    csp_source_duplicate_error: 'Tämä lähdelauseke on jo listalla.',
  },
  account_center: {
    title: 'TILIKESKUS',
    description:
      'Tarjoa loppukäyttäjille tilikeskus, jossa he voivat hallita tilinsä tietoturvaa ja profiilitietoja.',
    enable_account_api: 'Ota tilikeskus ja Account API käyttöön',
    enable_account_api_description:
      'Ota käyttöön sekä käyttäjille tarkoitettu Account API että GetCertuksen valmis tilikeskus. Kun tämä on pois päältä, kumpikaan ominaisuus ei ole käytettävissä.',
    field_options: {
      off: 'Pois',
      edit: 'Muokkaus',
      read_only: 'Vain luku',
      enabled: 'Käytössä',
      disabled: 'Ei käytössä',
    },
    sections: {
      account_security: {
        title: 'TILIN TIETOTURVA',
        description:
          'Hallitse pääsyä Account API:in, jotta käyttäjät voivat kirjauduttuaan tarkastella tai muokata identiteettitietojaan ja todennustekijöitään.',
        security_verification: {
          title: 'Tietoturvavahvistus',
          description:
            'Ennen tietoturva-asetusten muuttamista käyttäjän on vahvistettava henkilöllisyytensä ja saatava 10 minuuttia voimassa oleva vahvistustunnus. Ottaaksesi vahvistustavan (sähköposti, puhelin, salasana) käyttöön aseta alla Account API -käyttöoikeudeksi <strong>Vain luku</strong> (vähintään) tai <strong>Muokkaus</strong>, jotta järjestelmä voi tunnistaa, onko käyttäjä määrittänyt sen. <a>Lue lisää</a>',
        },
        groups: {
          identifiers: {
            title: 'Tunnisteet',
          },
          authentication_factors: {
            title: 'Todennustekijät',
          },
          session_management: {
            title: 'Istuntojen hallinta',
          },
        },
      },
      user_profile: {
        title: 'KÄYTTÄJÄPROFIILI',
        description:
          'Hallitse pääsyä Account API:in, jotta käyttäjät voivat kirjauduttuaan tarkastella tai muokata perus- tai mukautettuja profiilitietojaan.',
        groups: {
          profile_data: {
            title: 'Profiilitiedot',
          },
        },
      },
      secret_vault: {
        title: 'SECRET VAULT',
        description:
          'Tallenna sosiaalisten ja yritysliittimien kolmansien osapuolten käyttötunnukset turvallisesti niiden API:en kutsumista varten (esim. tapahtumien lisääminen Google-kalenteriin).',
        third_party_token_storage: {
          title: 'Kolmannen osapuolen tunnus',
          third_party_access_token_retrieval: 'Kolmannen osapuolen käyttötunnuksen haku',
          third_party_token_tooltip:
            'Tunnusten tallennuksen voit ottaa käyttöön vastaavan sosiaalisen tai yritysliittimen asetuksissa.',
          third_party_token_description:
            'Kun Account API on käytössä, kolmansien osapuolten tunnusten haku aktivoituu automaattisesti.',
        },
      },
    },
    fields: {
      email: 'Sähköpostiosoite',
      phone: 'Puhelinnumero',
      social: 'Sosiaaliset identiteetit',
      password: 'Salasana',
      mfa: 'Monivaiheinen todennus',
      mfa_description: 'Anna käyttäjien hallita MFA-tapojaan tilikeskuksessa.',
      passkey: 'Pääsyavain',
      username: 'Käyttäjänimi',
      name: 'Nimi',
      avatar: 'Avatar',
      profile: 'Profiili',
      profile_description: 'Hallitse pääsyä jäsenneltyihin profiiliattribuutteihin.',
      custom_data: 'Mukautetut tiedot',
      custom_data_description:
        'Hallitse pääsyä käyttäjään tallennettuihin mukautettuihin JSON-tietoihin.',
      sessions: 'Istunnot',
      trusted_devices: 'Luotetut laitteet',
    },
    profile_fields: {
      title: 'Valmiin tilikeskuksen profiilikentät',
      add_profile_fields: 'Lisää profiilikenttiä',
      hint: {
        not_in_list: 'Eikö listalla?',
        set_up: 'Määritä',
        go_to: 'muita profiilikenttiä nyt.',
      },
      disabled_hint: {
        name: "Lisätäksesi tämän kentän aseta ensin 'Nimi'-käyttöoikeudeksi 'Muokkaus / Vain luku' alla olevassa Käyttäjäprofiili-osiossa.",
        avatar:
          "Lisätäksesi tämän kentän aseta ensin 'Avatar'-käyttöoikeudeksi 'Muokkaus / Vain luku' alla olevassa Käyttäjäprofiili-osiossa.",
        profile:
          "Lisätäksesi tämän kentän aseta ensin 'Profiili'-käyttöoikeudeksi 'Muokkaus / Vain luku' alla olevassa Käyttäjäprofiili-osiossa.",
        custom_data:
          "Lisätäksesi tämän kentän aseta ensin 'Mukautetut tiedot' -käyttöoikeudeksi 'Muokkaus / Vain luku' alla olevassa Käyttäjäprofiili-osiossa.",
      },
    },
    webauthn_related_origins: 'WebAuthn-alkuperät',
    webauthn_related_origins_description:
      'Lisää niiden frontend-sovellusten verkkotunnukset, jotka saavat rekisteröidä pääsyavaimia Account API:n kautta.',
    webauthn_related_origins_error: 'Alkuperän on alettava https:// tai http://',
    delete_account_url: 'Poista tili',
    delete_account_url_description:
      'Anna oman päätepisteesi URL tilin poiston käsittelyyn omalla logiikalla.',
    prebuilt_ui: {
      title: 'INTEGROI VALMIS KÄYTTÖLIITTYMÄ',
      description:
        'Integroi nopeasti valmis tilikeskus, tietoturvavahvistus tai yksittäinen profiilin päivityskulku valmiilla käyttöliittymällä. Yhdistä verkkotunnuksesi ja reitti tilikeskuksen URL-osoitteeksi (esim. https://auth.foo.com/account/email).',
      permission_notice:
        'Integroidaksesi nämä valmiit kulut aseta niihin liittyvät Account API -käyttöoikeudet alla olevissa asetuksissa tilaan <strong>Muokkaus</strong>.',
      account_center_title: 'Integroi valmis tilikeskus',
      account_center_description:
        'Ohjaa käyttäjät tilikeskukseen hallitsemaan tietoturva-asetuksia, kuten sähköpostia, puhelinta, käyttäjänimeä, salasanaa, MFA:ta ja yhdistettyjä tilejä.',
      flows_title: 'Integroi valmiit tietoturva-asetusten kulut',
      single_task_flows_title: 'Integroi valmis yksittäisen tehtävän kulku',
      flows_description:
        'Yhdistä verkkotunnuksesi ja reitti tiliasetuksen URL-osoitteeksi (esim. https://auth.foo.com/account/email). Voit lisätä `redirect=` palauttaaksesi käyttäjät sovellukseesi onnistuneen päivityksen jälkeen, `show_success=true` pitääksesi onnistumissivun näkyvissä, `ui_locales=` ohittaaksesi oletuskielen tai `identifier=` esitäyttääksesi tunnistekentän.',
      single_task_flows_description:
        'Ohjaa käyttäjät suoraan tiettyyn kulkuun (esim. sähköpostin linkitys). Voit lisätä `redirect=` palauttaaksesi käyttäjät sovellukseesi onnistuneen päivityksen jälkeen, `show_success=true` pitääksesi onnistumissivun näkyvissä, `ui_locales=` ohittaaksesi oletuskielen tai `identifier=` esitäyttääksesi tunnistekentän.',
      tooltips: {
        email: 'Päivitä ensisijainen sähköpostiosoitteesi',
        phone: 'Päivitä ensisijainen puhelinnumerosi',
        username: 'Päivitä käyttäjänimesi',
        password: 'Aseta uusi salasana',
        social: 'Linkitä sosiaalinen tili kirjautumista varten',
        social_change: 'Vaihda toiseen linkitettyyn sosiaaliseen tiliin',
        social_remove: 'Poista linkitetty sosiaalinen tili',
        authenticator_app: 'Määritä uusi todennussovellus monivaiheista todennusta varten',
        authenticator_app_replace: 'Korvaa nykyinen todennussovelluksesi uudella',
        passkey_add: 'Rekisteröi uusi pääsyavain',
        passkey_manage: 'Hallitse nykyisiä pääsyavaimiasi tai lisää uusia',
        backup_codes_generate: 'Luo uusi 10 varakoodin sarja',
        backup_codes_manage: 'Näytä käytettävissä olevat varakoodit tai luo uusia',
        account_center:
          'Avaa tilikeskus hallitaksesi tietoturva-asetuksia, kuten sähköpostia, puhelinta, käyttäjänimeä, salasanaa, MFA:ta ja yhdistettyjä tilejä',
        profile: 'Keskitetty paikka henkilötietojesi hallintaan (esim. nimi, avatar)',
        sessions: 'Näytä ja hallitse aktiivisia istuntojasi kaikilla laitteilla',
      },
      customize_note: 'Etkö halua valmista kokemusta? Voit',
      customize_link: 'sen sijaan mukauttaa kulkusi täysin Account API:lla.',
    },
    custom_css: {
      title: 'MUKAUTETTU CSS',
      description: 'Mukauta tilikeskuksen ulkoasua omalla CSS:llä.',
    },
  },
  sign_up_and_sign_in: {
    identifiers_email: 'Sähköpostiosoite',
    identifiers_phone: 'Puhelinnumero',
    identifiers_username: 'Käyttäjänimi',
    identifiers_email_or_sms: 'Sähköpostiosoite tai puhelinnumero',
    identifiers_none: 'Ei sovellettavissa',
    and: 'ja',
    or: 'tai',
    sign_up: {
      title: 'REKISTERÖITYMINEN',
      sign_up_identifier: 'Rekisteröitymisen tunnisteet',
      identifier_description: 'Kaikki valitut tunnisteet vaaditaan uutta tiliä luotaessa.',
      sign_up_authentication: 'Rekisteröitymisen todennusasetus',
      verification_tip:
        'Käyttäjien on vahvistettava määrittämäsi sähköposti tai puhelinnumero syöttämällä vahvistuskoodi rekisteröityessään.',
      authentication_description: 'Kaikki valitut toiminnot ovat pakollisia kulun suorittamiseksi.',
      set_a_password_option: 'Luo salasana',
      verify_at_sign_up_option: 'Vahvista rekisteröityessä',
      social_only_creation_description:
        '(Koskee vain sosiaalisella kirjautumisella luotuja tilejä)',
      collect_user_profile: 'Käyttäjäprofiilin keruu',
      add_profile_fields: 'Lisää profiilikenttiä',
      profile_fields_hint: {
        not_in_list: 'Eikö listalla?',
        set_up: 'Määritä',
        go_to: 'muita profiilikenttiä nyt.',
      },
    },
    sign_in: {
      title: 'KIRJAUTUMINEN',
      sign_in_identifier_and_auth: 'Kirjautumisen tunniste- ja todennusasetukset',
      description: 'Käyttäjät voivat kirjautua millä tahansa käytettävissä olevalla tavalla.',
      add_sign_in_method: 'Lisää kirjautumistapa',
      add_sign_up_method: 'Lisää rekisteröitymistapa',
      password_auth: 'Salasana',
      verification_code_auth: 'Vahvistuskoodi',
      auth_swap_tip:
        'Vaihda alla olevien vaihtoehtojen järjestystä valitaksesi, kumpi näkyy kulussa ensin.',
      require_auth_factor: 'Sinun on valittava vähintään yksi todennustekijä.',
      forgot_password: 'Unohtunut salasana',
      forgot_password_description:
        'Käyttäjät voivat vaihtaa salasanansa millä tahansa käytettävissä olevalla vahvistustavalla.',
      add_verification_method: 'Lisää vahvistustapa',
      email_verification_code: 'Sähköpostin vahvistuskoodi',
      phone_verification_code: 'Puhelimen vahvistuskoodi',
    },
    social_sign_in: {
      title: 'SOSIAALINEN KIRJAUTUMINEN',
      social_sign_in: 'Sosiaalinen kirjautuminen',
      description:
        'Määrittämästäsi pakollisesta tunnisteesta riippuen käyttäjää voidaan pyytää antamaan tunniste, kun hän rekisteröityy sosiaalisella liittimellä.',
      add_social_connector: 'Lisää sosiaalinen liitin',
      set_up_hint: {
        not_in_list: 'Eikö listalla?',
        set_up_more: 'Määritä',
        go_to: 'muita sosiaalisia liittimiä nyt.',
      },
      settings_title: 'Sosiaalisen kirjautumisen kokemus',
      automatic_account_linking: 'Linkitä automaattisesti tilit, joilla on sama tunniste',
      automatic_account_linking_tip:
        'Kun tämä on käytössä ja käyttäjä kirjautuu uudella sosiaalisella identiteetillä, ja olemassa on täsmälleen yksi tili samalla tunnisteella (esim. sähköpostiosoitteella), GetCertus linkittää sosiaalisen identiteetin siihen tiliin automaattisesti. Käyttäjältä ei kysytä, linkitetäänkö tilit.',
      required_sign_up_identifiers: 'Vaadi käyttäjiä antamaan puuttuvat rekisteröitymistunnisteet',
      required_sign_up_identifiers_tip:
        'Kun tämä on käytössä, sosiaalisten palvelujen kautta kirjautuvien käyttäjien on täytettävä puuttuvat pakolliset tunnisteet (kuten sähköposti) ennen kirjautumisen valmistumista. \n\nJos tämä ei ole käytössä, käyttäjät voivat jatkaa ilman puuttuvia tunnisteita, vaikka sosiaalinen tili ei olisi synkronoinut niitä.',
    },
    passkey_sign_in: {
      title: 'KIRJAUTUMINEN PÄÄSYAVAIMELLA',
      passkey_sign_in: 'Kirjautuminen pääsyavaimella',
      enable_passkey_sign_in_description:
        'Anna käyttäjien käyttää sovellusta nopeasti ja turvallisesti pääsyavaimella (WebAuthn), biometriikalla, suojausavaimella jne.',
      prompts: 'Pääsyavainkehotteet',
      show_passkey_button: 'Näytä “Jatka pääsyavaimella” -painike kirjautumissivulla',
      show_passkey_button_tip:
        'Ilman “Jatka pääsyavaimella” -painiketta kirjautuminen alkaa tunnisteesta, ja salasana- ja pääsyavainvaihtoehdot näytetään seuraavassa vaiheessa.',
      allow_autofill:
        'Salli rekisteröityjen pääsyavainten ehdottaminen ja automaattinen täyttö tunnistekentissä',
    },
    tip: {
      set_a_password: 'Käyttäjänimelle on asetettava yksilöllinen salasana.',
      verify_at_sign_up:
        'Tuemme tällä hetkellä vain vahvistettua sähköpostia ja puhelinta. Ilman vahvistusta käyttäjäkantaasi voi kertyä paljon heikkolaatuisia sähköpostiosoitteita tai puhelinnumeroita.',
      password_auth:
        'Tämä on välttämätön, koska olet ottanut käyttöön salasanan asettamisen rekisteröitymisen aikana.',
      verification_code_auth:
        'Tämä on välttämätön, koska olet ottanut käyttöön vain vahvistuskoodin antamisen rekisteröityessä. Voit poistaa valinnan, kun salasanan asettaminen on sallittu rekisteröitymisessä.',
      email_mfa_enabled:
        'Sähköpostin vahvistuskoodi on jo käytössä MFA:ssa, joten sitä ei tietoturvasyistä voi käyttää myös ensisijaisena kirjautumistapana.',
      phone_mfa_enabled:
        'Puhelimen vahvistuskoodi on jo käytössä MFA:ssa, joten sitä ei tietoturvasyistä voi käyttää myös ensisijaisena kirjautumistapana.',
      delete_sign_in_method:
        'Tämä on välttämätön, koska olet valinnut {{identifier}} pakolliseksi tunnisteeksi.',
      password_disabled_notification:
        'Vaihtoehto "Luo salasana" ei ole käytössä käyttäjänimellä rekisteröidyttäessä, mikä voi estää käyttäjiä kirjautumasta. Vahvista tallentaaksesi silti.',
    },
    advanced_options: {
      title: 'LISÄASETUKSET',
      enable_single_sign_on: 'Ota yrityksen kertakirjautuminen (SSO) käyttöön',
      enable_single_sign_on_description:
        'Anna käyttäjien kirjautua sovellukseen kertakirjautumisella yritysidentiteeteillään.',
      single_sign_on_hint: {
        prefix: 'Siirry osioon ',
        link: '"Yritys-SSO"',
        suffix: 'määrittääksesi lisää yritysliittimiä.',
      },
      enable_user_registration: 'Ota käyttäjien rekisteröityminen käyttöön',
      enable_user_registration_description:
        'Salli tai estä käyttäjien rekisteröityminen. Kun se ei ole käytössä, käyttäjiä voi yhä lisätä hallintakonsolissa, mutta käyttäjät eivät voi enää luoda tilejä kirjautumiskäyttöliittymän kautta.',
      unknown_session_redirect_url: 'Uudelleenohjaus-URL tuntemattomalle istunnolle',
      unknown_session_redirect_url_tip:
        'Joskus GetCertus ei tunnista käyttäjän istuntoa kirjautumissivulla, esimerkiksi kun istunto on vanhentunut tai käyttäjä on tallentanut tai jakanut kirjautumislinkin. Oletuksena näytetään 404-virhe “tuntematon istunto”. Paremman käyttökokemuksen saat asettamalla varaosoitteen, joka palauttaa käyttäjät sovellukseesi ja käynnistää todennuksen uudelleen.',
    },
    username_policy: {
      title: 'Käyttäjänimikäytäntö',
      description:
        'Mukauta käyttäjänimen vaatimuksia, kuten pituutta, sallittuja merkkejä ja kirjainkoon merkitystä.',
      manage_button: 'Hallitse',
      modal_title: 'Käyttäjänimikäytäntö',
      modal_description: 'Mukauta loppukäyttäjien käyttäjänimien vaatimuksia.',
      length: {
        title: 'Käyttäjänimen pituus',
        minimum: 'Vähintään',
        maximum: 'Enintään',
        min_greater_than_max: 'Vähimmäispituus ei voi olla suurempi kuin enimmäispituus.',
      },
      allowed_chars: {
        title: 'Sallitut merkkityypit',
        uppercase: 'Isot kirjaimet (A-Z)',
        lowercase: 'Pienet kirjaimet (a-z)',
        numbers: 'Numerot (0-9)',
        underscore: 'Alaviivat (_)',
        no_valid_leading_char:
          'Pelkät numerot eivät ole sallittuja. Ota käyttöön vähintään isot kirjaimet, pienet kirjaimet tai alaviivat.',
        no_char_selected: 'Valitse vähintään yksi merkkityyppi.',
      },
      case_sensitive: {
        title: 'Kirjainkoon erottelevat käyttäjänimet',
        description:
          'Käsittele isot ja pienet kirjaimet eri merkkeinä. ‘user123’ ja ‘User123’ ovat silloin eri käyttäjänimiä.',
      },
      case_conflicts: {
        title: 'Olemassa olevissa käyttäjänimissä havaittiin ristiriitoja',
        description:
          'Jotkin käyttäjänimet törmäisivät, jos kirjainkoon erottelu poistetaan. Ratkaise alla olevat {{count}} ristiriitaista ryhmää ennen tallentamista.',
        sample_title: 'Ristiriitaiset käyttäjänimet',
      },
    },
  },
  content: {
    terms_of_use: {
      title: 'EHDOT',
      description: 'Lisää käyttöehdot ja tietosuojaseloste vaatimustenmukaisuutta varten.',
      terms_of_use: 'Käyttöehtojen URL',
      terms_of_use_placeholder: 'https://your.terms.of.use/',
      privacy_policy: 'Tietosuojaselosteen URL',
      privacy_policy_placeholder: 'https://your.privacy.policy/',
      agree_to_terms: 'Hyväksy ehdot',
      agree_policies: {
        automatic: 'Hyväksy ehdot automaattisesti jatkamalla',
        manual_registration_only: 'Vaadi hyväksyntä valintaruudulla vain rekisteröityessä',
        manual: 'Vaadi hyväksyntä valintaruudulla sekä rekisteröityessä että kirjautuessa',
      },
    },
  },
};

export default Object.freeze(sign_in_exp);
