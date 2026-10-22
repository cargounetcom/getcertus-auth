/* GetCertus addition (MPL-2.0, see GETCERTUS.md): admin console phrases. */
const tenants = {
  title: 'Asetukset',
  description: 'Hallitse tenantin asetuksia tehokkaasti ja mukauta verkkotunnustasi.',
  oss_description:
    'Muuta tiliasetuksiasi ja hallitse henkilötietojasi täällä tilisi turvallisuuden varmistamiseksi.',
  tabs: {
    settings: 'Asetukset',
    members: 'Jäsenet',
    domains: 'Verkkotunnukset',
    oidc_configs: 'OIDC-määritykset',
    subscription: 'Paketti ja laskutus',
    billing_history: 'Laskutushistoria',
    license: 'Lisenssi',
  },
  license: {
    purchase_title: 'ITSE YLLÄPIDETYT PAKETIT',
    purchase_description:
      'Itse ylläpidetyt Pro ja Enterprise avaavat maksulliset ominaisuudet omassa instanssissasi, kuten GetCertus-brändäyksen piilottamisen, oman käyttöliittymän, Console-yhteistyön ja rajattomasti SAML-sovelluksia. Osta paketti saadaksesi lisenssiavaimen.',
    purchase_button: 'Näytä itse ylläpidetyt paketit',
    install_title: 'ASENNA LISENSSI',
    install_description: 'Liitä lisenssiavain, jonka sait ostettuasi itse ylläpidetyn paketin.',
    install_button: 'Asenna lisenssi',
    key_field: 'Lisenssiavain',
    key_field_description:
      'Avain tarkistetaan instanssissasi, eikä se koskaan poistu sieltä. Ota yhteyttä GetCertusiin saadaksesi uuden avaimen, jos nykyinen on vanhentunut.',
    key_placeholder: 'Liitä lisenssiavaimesi tähän',
    installed_toast: 'Lisenssi asennettiin.',
    details_title: 'LISENSSI',
    details_description: 'Tähän instanssiin asennettu lisenssi ja sen sisältämät oikeudet.',
    plan_field: 'Paketti',
    environment_field: 'Ympäristö',
    environment_production: 'Tuotanto',
    environment_non_production: 'Muu kuin tuotanto',
    expires_at_field: 'Vanhenee',
    installed_at_field: 'Asennettu',
    last_refreshed_at_field: 'Viimeksi uusittu',
    grace_ends_at_field: 'Lisäaika päättyy',
    refresh_expired_description:
      'Lisenssiavain vanheni {{expiresAt}}. Lisensoidut ominaisuudet ovat käytettävissä {{graceEndsAt}} asti, kun GetCertus yrittää uusia sen.',
    refresh_refused_description:
      'Lisenssin uusiminen hylättiin, koska lisenssin tila on: {{reason}}. Lisensoidut ominaisuudet ovat käytettävissä {{graceEndsAt}} asti.',
    refusal_reason_canceled: 'peruttu',
    refusal_reason_unpaid: 'maksamatta',
    refusal_reason_expired: 'vanhentunut',
    refusal_reason_revoked: 'mitätöity',
    refusal_reason_unknown: 'ei saatavilla',
    grace_expired_description:
      'Lisenssin lisäaika päättyi {{graceEndsAt}}. Tämä asennus on palautettu OSS-oletusasetuksiin. Ota yhteyttä GetCertusiin saadaksesi uuden lisenssiavaimen ja asenna se uudelleen.',
    get_fresh_key_button: 'Hanki uusi lisenssiavain',
    replace_button: 'Korvaa lisenssi',
  },
  members: {
    card_title: 'Hallitse tenantteja turvallisemmin GetCertus Cloudilla',
    card_description:
      'Lisää tenanttiisi ylläpitäjiä tai yhteistyökumppaneita jakamatta yhtä ylläpitäjätiliä.',
    card_action: 'Tutustu GetCertus Cloudiin',
    self_hosted_card_title: 'Hallitse tenantteja turvallisemmin itse ylläpidetyillä paketeilla',
    self_hosted_card_description:
      'Lisää tenanttiisi ylläpitäjiä tai yhteistyökumppaneita jakamatta yhtä ylläpitäjätiliä.',
    self_hosted_card_action: 'Tutustu itse ylläpidettyihin paketteihin',
  },
  settings: {
    title: 'ASETUKSET',
    description: 'Aseta tenantin nimi ja tarkastele tietojen sijaintialuetta ja tenantin tyyppiä.',
    tenant_id: 'Tenantin tunnus',
    tenant_name: 'Tenantin nimi',
    tenant_instance: 'Valitse instanssi',
    tenant_instance_description:
      'Valitse, missä tenanttiasi ylläpidetään. Valitse GetCertus Cloud jaettua julkista infrastruktuuria varten tai yksityinen instanssi omistettuja resursseja varten.',
    tenant_region: 'Tietojen alue',
    tenant_region_description:
      'Fyysinen sijainti, jossa tenantin resursseja (käyttäjät, sovellukset jne.) ylläpidetään. Tätä ei voi muuttaa luomisen jälkeen.',
    tenant_region_tip: 'Tenantin resursseja ylläpidetään alueella {{region}}. <a>Lue lisää</a>',
    environment_tag_development: 'Dev',
    environment_tag_production: 'Prod',
    tenant_type: 'Tenantin tyyppi',
    development_description:
      'Vain testaukseen, ei tuotantokäyttöön. Tilausta ei tarvita. Sisältää kaikki Pro-ominaisuudet, mutta rajoituksin, kuten kirjautumisbannerilla.',
    production_description:
      'Tarkoitettu loppukäyttäjien käyttämille sovelluksille, ja se voi vaatia maksullisen tilauksen.',
    tenant_info_saved: 'Tenantin tiedot tallennettiin.',
    tenant_mfa: 'Monivaiheinen tunnistautuminen',
    tenant_mfa_description:
      'Vaadi jäseniä ottamaan monivaiheinen tunnistautuminen käyttöön tämän tenantin käyttämiseksi.',
    oss_description: 'Hallitse, miten jäsenet pääsevät Consoleen tässä instanssissa.',
    tenant_mfa_confirm_title: 'Vaaditaanko MFA kaikilta jäseniltä?',
    tenant_mfa_confirm_description:
      'Nämä jäsenet eivät ole vielä ottaneet MFA:ta käyttöön. He pysyvät kirjautuneina, ja heitä pyydetään ottamaan se käyttöön seuraavalla kirjautumiskerralla:',
    tenant_mfa_confirm_self:
      'Et ole itsekään ottanut MFA:ta käyttöön. Ota se käyttöön tiliasetuksissasi ennen seuraavaa kirjautumista.',
    tenant_mfa_confirm_button: 'Vaadi MFA',
    tenant_mfa_setup_required:
      'Tämä tenant vaatii monivaiheisen tunnistautumisen. Ota se käyttöön nyt, tai sinua pyydetään tekemään se seuraavalla kirjautumiskerralla.',
    tenant_mfa_setup_action: 'Ota MFA käyttöön',
    enterprise_sso: 'Enterprise SSO',
    enterprise_sso_description:
      'Saatavilla maksullisissa paketeissa. Ota meihin yhteyttä enterprise SSO:n käyttöönottamiseksi, jotta kaikki jäsenet voivat kirjautua GetCertus Cloud Consoleen organisaatiosi identiteettipalvelun kautta.',
  },
  full_env_tag: {
    development: 'Kehitys',
    production: 'Tuotanto',
  },
  deletion_card: {
    title: 'POISTA',
    tenant_deletion: 'Poista tenant',
    tenant_deletion_description:
      'Tenantin poistaminen poistaa pysyvästi kaikki siihen liittyvät käyttäjätiedot ja asetukset. Toimi harkiten.',
    tenant_deletion_button: 'Poista tenant',
  },
  leave_tenant_card: {
    title: 'POISTU',
    leave_tenant: 'Poistu tenantista',
    leave_tenant_description:
      'Tenantin resurssit säilyvät, mutta sinulla ei ole enää pääsyä tähän tenanttiin.',
    last_admin_note:
      'Jotta voit poistua tenantista, vähintään yhdellä toisella jäsenellä on oltava ylläpitäjän rooli.',
  },
  create_modal: {
    title: 'Luo tenant',
    subtitle: 'Luo uusi tenant, jolla on eristetyt resurssit ja käyttäjät.',
    tenant_id: 'Tenantin tunnus',
    tenant_usage_purpose: 'Mihin haluat käyttää tätä tenanttia?',
    development_description: 'Vain testaukseen, ei tuotantokäyttöön. Tilausta ei tarvita.',
    development_description_for_private_regions: 'Vain testaukseen, ei tuotantokäyttöön.',
    development_hint:
      'Sisältää kaikki Pro-ominaisuudet, mutta rajoituksin, kuten kirjautumisbannerilla.',
    production_description: 'Loppukäyttäjien käyttöön, ja se voi vaatia maksullisen tilauksen.',
    available_plan: 'Saatavilla oleva paketti:',
    create_button: 'Luo tenant',
    tenant_name_placeholder: 'Oma tenant',
    tenant_created: 'Tenant luotiin.',
    invitation_failed:
      'Joidenkin kutsujen lähetys epäonnistui. Yritä myöhemmin uudelleen kohdassa Asetukset -> Jäsenet.',
    tenant_type_description: 'Tätä ei voi muuttaa luomisen jälkeen.',
    tenant_id_invalid:
      'Tenantin tunnus voi sisältää vain pieniä kirjaimia, numeroita ja yhdysmerkkejä, ja se voi olla enintään {{max}} merkkiä pitkä.',
    tenant_id_placeholder: 'Tenantin tunnus',
    tenant_id_tip:
      'Mukauta tenantin tunnusta. Jos jätät kentän tyhjäksi, GetCertus luo oletustunnuksen. Tenantin tunnusta ei voi muuttaa luomisen jälkeen.',
  },
  dev_tenant_migration: {
    title: 'Voit nyt kokeilla Pro-ominaisuuksia maksutta luomalla uuden "kehitystenantin"!',
    affect_title: 'Miten tämä vaikuttaa sinuun?',
    hint_1:
      'Korvaamme vanhat <strong>ympäristötunnisteet</strong> kahdella uudella tenanttityypillä: <strong>”Kehitys”</strong> ja <strong>”Tuotanto”</strong>.',
    hint_2:
      'Sujuvan siirtymän ja keskeytymättömän toiminnan varmistamiseksi kaikki aiemmin luodut tenantit muutetaan <strong>Tuotanto</strong>-tyyppisiksi aiemman tilauksesi kanssa.',
    hint_3: 'Älä huoli, kaikki muut asetuksesi pysyvät ennallaan.',
    about_tenant_type: 'Tietoa tenantin tyypistä',
  },
  delete_modal: {
    title: 'Poista tenant',
    description_line1:
      'Haluatko varmasti poistaa tenantin "<span>{{name}}</span>", jonka ympäristötunniste on "<span>{{tag}}</span>"? Toimintoa ei voi perua, ja kaikki tietosi ja tenantin tiedot poistetaan pysyvästi.',
    description_line2:
      'Ennen kuin poistat tenantin, voimme ehkä auttaa. <span><a>Ota yhteyttä sähköpostilla</a></span>',
    description_line3:
      'Jos haluat jatkaa, vahvista kirjoittamalla tenantin nimi "<span>{{name}}</span>".',
    delete_button: 'Poista pysyvästi',
    cannot_delete_title: 'Tenanttia ei voi poistaa',
    cannot_delete_description:
      'Valitettavasti et voi poistaa tätä tenanttia juuri nyt. Varmista, että käytössäsi on ilmainen paketti ja että kaikki avoimet laskut on maksettu.',
  },
  leave_tenant_modal: {
    description: 'Haluatko varmasti poistua tästä tenantista?',
    leave_button: 'Poistu',
  },
  tenant_landing_page: {
    title: 'Et ole vielä luonut tenanttia',
    description:
      'Luo uusi tenant aloittaaksesi projektisi määrittämisen GetCertusilla. Jos haluat kirjautua ulos tai poistaa tilisi, napsauta oikeassa yläkulmassa olevaa avatar-painiketta.',
    create_tenant_button: 'Luo tenant',
  },
  status: {
    mau_exceeded: 'MAU ylitetty',
    token_exceeded: 'Tokenit ylitetty',
    suspended: 'Jäädytetty',
    overdue: 'Erääntynyt',
  },
  tenant_suspended_page: {
    title: 'Tenant on jäädytetty. Ota yhteyttä palauttaaksesi pääsyn.',
    description_1:
      'Valitettavasti tenanttitilisi on jäädytetty väliaikaisesti epäasianmukaisen käytön vuoksi, kuten MAU-rajojen ylittämisen, erääntyneiden maksujen tai muiden luvattomien toimien takia.',
    description_2:
      'Jos tarvitset lisäselvitystä, sinulla on kysyttävää tai haluat palauttaa täyden toiminnallisuuden ja avata tenanttiesi eston, ota meihin heti yhteyttä.',
  },
  production_tenant_notification: {
    text: 'Olet kehitystenantissa maksutonta testausta varten. Luo tuotantotenant siirtyäksesi tuotantoon.',
    action: 'Luo tenant',
  },
};

export default Object.freeze(tenants);
