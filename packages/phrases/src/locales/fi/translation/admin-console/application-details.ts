/* GetCertus addition (MPL-2.0, see GETCERTUS.md): admin console phrases. */
const application_details = {
  page_title: 'Sovelluksen tiedot',
  back_to_applications: 'Takaisin sovelluksiin',
  check_guide: 'Katso opas',
  settings: 'Asetukset',
  settings_description:
    '"Sovellus" on rekisteröity ohjelmisto tai palvelu, joka voi lukea käyttäjätietoja tai toimia käyttäjän puolesta. Sovellusten avulla tunnistetaan, kuka pyytää GetCertusilta mitäkin, ja hoidetaan kirjautuminen ja oikeudet. Täytä tunnistautumisen pakolliset kentät.',
  integration: 'Integraatio',
  integration_description:
    'Ota käyttöön GetCertusin suojatuilla workereilla Cloudflaren reunaverkossa: huippusuorituskyky ja 0 ms kylmäkäynnistykset kaikkialla maailmassa.',
  service_configuration: 'Palvelun määritys',
  service_configuration_description: 'Viimeistele tarvittavat määritykset palvelussasi.',
  session: 'Istunto',
  endpoints_and_credentials: 'Päätepisteet ja tunnistetiedot',
  endpoints_and_credentials_description:
    'Määritä OIDC-yhteys sovelluksessasi seuraavilla päätepisteillä ja tunnistetiedoilla.',
  refresh_token_settings: 'Päivitystunnus',
  refresh_token_settings_description: 'Hallitse tämän sovelluksen päivitystunnusten sääntöjä.',
  machine_logs: 'Konelokit',
  application_name: 'Sovelluksen nimi',
  application_name_placeholder: 'Oma sovellus',
  description: 'Kuvaus',
  description_placeholder: 'Kirjoita sovelluksen kuvaus',
  config_endpoint: 'OpenID-palveluntarjoajan määrityspäätepiste',
  issuer_endpoint: 'Myöntäjän päätepiste',
  jwks_uri: 'JWKS-URI',
  authorization_endpoint: 'Valtuutuspäätepiste',
  authorization_endpoint_tip:
    'Päätepiste tunnistautumiseen ja valtuutukseen. Sitä käytetään OpenID Connectin <a>tunnistautumisessa</a>.',
  show_endpoint_details: 'Näytä päätepisteiden tiedot',
  hide_endpoint_details: 'Piilota päätepisteiden tiedot',
  logto_endpoint: 'GetCertus-päätepiste',
  application_id: 'Sovellustunnus',
  application_id_tip:
    'Sovelluksen yksilöllinen tunniste, jonka GetCertus yleensä luo. Se on myös OpenID Connectin “<a>client_id</a>”.',
  application_secret: 'Sovellussalaisuus',
  application_secret_other: 'Sovellussalaisuudet',
  redirect_uri: 'Uudelleenohjaus-URI',
  redirect_uris: 'Uudelleenohjaus-URI:t',
  redirect_uri_placeholder: 'https://your.website.com/app',
  redirect_uri_placeholder_native: 'io.logto://callback',
  redirect_uri_tip:
    'URI, johon käyttäjä ohjataan kirjautumisen jälkeen (onnistui se tai ei). Katso lisätietoja OpenID Connectin kohdasta <a>AuthRequest</a>.',
  mixed_redirect_uri_warning:
    'Sovellustyyppisi ei sovi yhteen vähintään yhden uudelleenohjaus-URI:n kanssa. Se ei noudata hyviä käytäntöjä, ja suosittelemme vahvasti pitämään uudelleenohjaus-URI:t yhdenmukaisina.',
  wildcard_redirect_uri_warning:
    'Jokerimerkkejä sisältävät uudelleenohjaus-URI:t eivät ole standardin mukaista OIDC:tä ja voivat laajentaa hyökkäyspintaa. Käytä niitä varoen ja suosi tarkkoja URI:ta aina kun voit.',
  post_sign_out_redirect_uri: 'Uloskirjautumisen jälkeinen uudelleenohjaus-URI',
  post_sign_out_redirect_uris: 'Uloskirjautumisen jälkeiset uudelleenohjaus-URI:t',
  post_sign_out_redirect_uri_placeholder: 'https://your.website.com/home',
  post_sign_out_redirect_uri_tip:
    'URI, johon käyttäjä ohjataan uloskirjautumisen jälkeen (valinnainen). Joissakin sovellustyypeissä sillä ei ole käytännön vaikutusta.',
  cors_allowed_origins: 'Sallitut CORS-alkuperät',
  cors_allowed_origins_placeholder: 'https://your.website.com',
  cors_allowed_origins_tip:
    'Oletuksena kaikki uudelleenohjaus-URI:ien alkuperät sallitaan. Yleensä tähän kenttään ei tarvitse koskea. Katso lisätietoja <a>MDN-dokumentaatiosta</a>.',
  token_endpoint: 'Tunnuspäätepiste',
  user_info_endpoint: 'Userinfo-päätepiste',
  enable_admin_access: 'Ota ylläpitäjän pääsy käyttöön',
  enable_admin_access_label:
    'Ota käyttöön tai poista käytöstä pääsy Management API:in. Kun se on käytössä, voit kutsua Management API:a tämän sovelluksen puolesta käyttöoikeustunnuksilla.',
  always_issue_refresh_token: 'Myönnä aina päivitystunnus',
  always_issue_refresh_token_label:
    'Kun tämä on käytössä, GetCertus myöntää aina päivitystunnuksia riippumatta siitä, onko tunnistautumispyynnössä `prompt=consent`. Käytä tätä vain tarvittaessa: se ei ole yhteensopiva OpenID Connectin kanssa ja voi aiheuttaa ongelmia.',
  refresh_token_ttl: 'Päivitystunnuksen elinaika (TTL) päivinä',
  refresh_token_ttl_tip:
    'Kuinka kauan päivitystunnuksella voi pyytää uusia käyttöoikeustunnuksia ennen kuin se vanhenee. Jokainen tunnuspyyntö pidentää elinaikaa tähän arvoon.',
  rotate_refresh_token: 'Kierrätä päivitystunnus',
  rotate_refresh_token_label:
    'Kun tämä on käytössä, GetCertus myöntää tunnuspyynnöissä uuden päivitystunnuksen, kun 70 % alkuperäisestä elinajasta (TTL) on kulunut tai tietyt ehdot täyttyvät. <a>Lisätietoja</a>',
  rotate_refresh_token_label_for_public_clients:
    'Kun tämä on käytössä, GetCertus myöntää uuden päivitystunnuksen jokaisessa tunnuspyynnössä. <a>Lisätietoja</a>',
  backchannel_logout: 'Taustakanavan uloskirjautuminen',
  backchannel_logout_description:
    'Määritä OpenID Connectin taustakanavan uloskirjautumisen päätepiste ja se, vaatiiko tämä sovellus istunnon.',
  backchannel_logout_uri: 'Taustakanavan uloskirjautumisen URI',
  backchannel_logout_uri_session_required: 'Vaaditaanko istunto?',
  backchannel_logout_uri_session_required_description:
    'Kun tämä on käytössä, RP edellyttää, että uloskirjautumistunnus sisältää `sid`-väitteen (istuntotunnus), joka yksilöi RP:n istunnon OP:ssä, kun `backchannel_logout_uri` on käytössä.',
  token_exchange: 'Tunnusten vaihto',
  token_exchange_description: 'Hallitse tämän sovelluksen tunnusten vaihdon asetuksia.',
  allow_token_exchange: 'Salli tunnusten vaihto',
  allow_token_exchange_description:
    'Salli tämän sovelluksen aloittaa tunnusten vaihtopyyntöjä. Tätä tarvitaan <impersonationLink>käyttäjänä esiintymiseen</impersonationLink> ja <patLink>henkilökohtaisiin käyttöoikeustunnuksiin</patLink>.',
  allow_token_exchange_public_client_warning:
    'Tunnusten vaihdon käyttöönottoa julkisille asiakkaille (yhden sivun sovellus / natiivisovellus) ei suositella. Julkiset asiakkaat eivät voi säilyttää tunnistetietoja turvallisesti, mikä voi altistaa sovelluksesi tunnusten väärinkäytölle.',
  device_flow_tag: 'Laitevirta',
  device_flow_notification:
    "Tämä sovellus käyttää OAuth 2.0 Device Authorization Flow'ta laitteille, joissa syöttö on rajallinen, tai headless-sovelluksille (esim. televisiot, CLI). Käyttäjä viimeistelee kirjautumisen toisella laitteella syöttämällä laitekoodin tai skannaamalla QR-koodin. <a>Lisätietoja</a>",
  device_flow_try_demo: 'Kokeile demoa',
  delete_description:
    'Toimintoa ei voi kumota. Sovellus poistetaan pysyvästi. Vahvista kirjoittamalla sovelluksen nimi <span>{{name}}</span>.',
  enter_your_application_name: 'Kirjoita sovelluksen nimi',
  application_deleted: 'Sovellus {{name}} on poistettu',
  redirect_uri_required: 'Anna vähintään yksi uudelleenohjaus-URI',
  app_domain_description_1:
    'Voit käyttää verkkotunnustasi {{domain}} GetCertusin kautta; se on pysyvästi voimassa.',
  app_domain_description_2:
    'Voit käyttää verkkotunnustasi <domain>{{domain}}</domain>; se on pysyvästi voimassa.',
  custom_rules: 'Mukautetut tunnistautumissäännöt',
  custom_rules_placeholder: '^/(admin|privacy)/.+$',
  custom_rules_description:
    'Määritä säännöllisillä lausekkeilla säännöt reiteille, jotka vaativat tunnistautumisen. Oletus: koko sivusto suojataan, jos kenttä jätetään tyhjäksi.',
  authentication_routes: 'Tunnistautumisreitit',
  custom_rules_tip:
    "Kaksi esimerkkiä:<ol><li>Suojaa vain reitit '/admin' ja '/privacy' tunnistautumisella: ^/(admin|privacy)/.*</li><li>Jätä JPG-kuvat tunnistautumisen ulkopuolelle: ^(?!.*\\.jpg$).*$</li></ol>",
  authentication_routes_description:
    'Ohjaa tunnistautumispainike annettujen reittien kautta. Huomaa: näitä reittejä ei voi korvata.',
  protect_origin_server: 'Suojaa alkuperäpalvelimesi',
  protect_origin_server_description:
    'Varmista, ettei alkuperäpalvelimeesi pääse suoraan. Katso oppaasta <a>tarkemmat ohjeet</a>.',
  third_party_settings_description:
    'Integroi kolmannen osapuolen sovelluksia käyttäen GetCertusta identiteetintarjoajana (IdP) OIDC:n / OAuth 2.0:n kautta, suostumusnäkymän kera käyttäjän valtuutusta varten.',
  session_duration: 'Istunnon kesto (päivää)',
  try_it: 'Kokeile',
  no_organization_placeholder: 'Organisaatiota ei löytynyt. <a>Siirry organisaatioihin</a>',
  field_custom_data: 'Mukautetut tiedot',
  field_custom_data_tip:
    'Lisätietoja sovelluksesta, joita ei ole valmiissa ominaisuuksissa, kuten liiketoimintakohtaiset asetukset ja määritykset.',
  custom_data_invalid: 'Mukautettujen tietojen on oltava kelvollinen JSON-objekti',
  access_control: {
    name: 'Säännöt',
    title: 'Pääsynhallinta',
    description: 'Mukauta sovellustason pääsynhallinnan sääntöjä.',
    enable: 'Ota sovellustason pääsynhallinta käyttöön',
    enable_description:
      'Ota käyttöön tarkka pääsynhallinta ja rajaa, ketkä käyttäjät voivat käyttää tätä sovellusta. Jos se ei ole käytössä, kaikilla rekisteröityneillä käyttäjillä on pääsy.',
    enable_without_rules_notice:
      'Lisää vähintään yksi pääsysääntö ennen pääsynhallinnan käyttöönottoa.',
    load_error: 'Pääsysääntöjen lataus epäonnistui.',
    custom_allow_rules: 'Mukautetut sallintasäännöt',
    custom_allow_rules_description:
      'Luo sääntöjä, joilla tietyt ominaisuudet omaavat käyttäjät saavat pääsyn automaattisesti. Käytössä ollessa tarvitaan vähintään yksi sääntö.',
    rules: 'Pääsysäännöt',
    add_rules: 'Lisää sääntöjä',
    rules_description:
      'Käyttäjät pääsevät sovellukseen, jos he täyttävät minkä tahansa määritetyistä säännöistä.',
    empty_rules_description: 'Sääntöjä ei ole vielä määritetty.',
    delete_rule_confirmation: 'Haluatko varmasti poistaa tämän säännön?',
    rule_table_rules: 'Säännöt',
    rule_table_description: 'Kuvaus',
    rule_table_users: 'Käyttäjät',
    rule_table_members: 'Jäsenet',
    rule_table_user_id: 'Käyttäjätunnus',
    rule_count: '{{count}} sääntö',
    rule_count_other: '{{count}} sääntöä',
    rule_users: 'Käyttäjät',
    rule_users_description: 'Tietyt käyttäjät pääsevät tähän sovellukseen.',
    rule_roles: 'Roolit',
    rule_user_roles: 'Käyttäjäroolit',
    rule_user_roles_description:
      'Käyttäjät, joilla on valitut käyttäjäroolit, pääsevät tähän sovellukseen.',
    rule_organizations: 'Organisaatiot',
    rule_organizations_description:
      'Valittujen organisaatioiden kaikki nykyiset ja tulevat jäsenet pääsevät tähän sovellukseen.',
    rule_organization_roles: 'Organisaatioroolit',
    rule_organization_roles_description:
      'Jäsenet, joilla on valitut organisaatioroolit valituissa organisaatioissa, pääsevät tähän sovellukseen.',
  },
  branding: {
    name: 'Brändäys',
    description: 'Mukauta sovelluksen logo ja brändiväri sovellustason kokemusta varten.',
    description_third_party: 'Mukauta sovelluksen näyttönimi ja logo suostumusnäkymässä.',
    app_logo: 'Sovelluksen logo',
    app_level_sie: 'Sovellustason kirjautumiskokemus',
    app_level_sie_switch:
      'Ota käyttöön sovellustason kirjautumiskokemus ja määritä sovelluskohtainen brändäys. Jos se ei ole käytössä, käytetään yhteistä kirjautumiskokemusta.',
    more_info: 'Lisätietoja',
    more_info_description: 'Kerro käyttäjille suostumusnäkymässä enemmän sovelluksestasi.',
    display_name: 'Näyttönimi',
    application_logo: 'Sovelluksen logo',
    application_logo_dark: 'Sovelluksen logo (tumma)',
    brand_color: 'Brändiväri',
    brand_color_dark: 'Brändiväri (tumma)',
    terms_of_use_url: 'Sovelluksen käyttöehtojen URL',
    privacy_policy_url: 'Sovelluksen tietosuojaselosteen URL',
  },
  permissions: {
    name: 'Oikeudet',
    description:
      'Valitse oikeudet, joita kolmannen osapuolen sovellus tarvitsee päästäkseen käyttäjän valtuutuksella tiettyihin tietotyyppeihin.',
    user_permissions: 'Henkilökohtaiset käyttäjätiedot',
    organization_permissions: 'Pääsy organisaatioon',
    table_name: 'Myönnä oikeuksia',
    field_name: 'Oikeus',
    field_description: 'Näytetään suostumusnäkymässä',
    delete_text: 'Poista oikeus',
    permission_delete_confirm:
      'Kolmannen osapuolen sovellukselle myönnetyt oikeudet perutaan, eikä se voi enää pyytää käyttäjän valtuutusta tiettyihin tietotyyppeihin. Haluatko varmasti jatkaa?',
    permissions_assignment_description:
      'Valitse oikeudet, joita kolmannen osapuolen sovellus pyytää päästäkseen käyttäjän valtuutuksella tiettyihin tietotyyppeihin.',
    user_profile: 'Käyttäjätiedot',
    api_permissions: 'API-oikeudet',
    organization: 'Organisaatio-oikeudet',
    user_permissions_assignment_form_title: 'Lisää käyttäjäprofiilin oikeudet',
    organization_permissions_assignment_form_title: 'Lisää organisaatio-oikeudet',
    api_resource_permissions_assignment_form_title: 'Lisää API-resurssien oikeudet',
    user_data_permission_description_tips:
      'Voit muokata henkilökohtaisten käyttäjätietojen oikeuksien kuvausta kohdassa "Kirjautumiskokemus > Sisältö > Hallitse kieltä"',
    permission_description_tips:
      'Kun GetCertus toimii identiteetintarjoajana (IdP) kolmannen osapuolen sovellusten tunnistautumisessa ja käyttäjiltä pyydetään valtuutusta, tämä kuvaus näkyy suostumusnäkymässä.',
    user_title: 'Käyttäjä',
    user_description:
      'Valitse oikeudet, joita kolmannen osapuolen sovellus pyytää tiettyjen käyttäjätietojen käyttöön.',
    grant_user_level_permissions: 'Myönnä käyttäjätietojen oikeuksia',
    organization_title: 'Organisaatio',
    organization_description:
      'Valitse oikeudet, joita kolmannen osapuolen sovellus pyytää tiettyjen organisaatiotietojen käyttöön.',
    grant_organization_level_permissions: 'Myönnä organisaatiotietojen oikeuksia',
    oidc_title: 'OIDC',
    oidc_description:
      'OIDC:n perusoikeudet määritetään sovelluksellesi automaattisesti. Nämä scopet ovat välttämättömiä tunnistautumiselle, eikä niitä näytetä suostumusnäkymässä.',
    default_oidc_permissions: 'OIDC:n oletusoikeudet',
    permission_column: 'Oikeus',
    guide_column: 'Ohje',
    openid_permission: 'openid',
    openid_permission_guide:
      "Valinnainen OAuth-resurssien käytössä.\nPakollinen OIDC-tunnistautumisessa. Antaa ID-tunnuksen ja pääsyn 'userinfo_endpoint'-päätepisteeseen.",
    offline_access_permission: 'offline_access',
    offline_access_permission_guide:
      'Valinnainen. Hakee päivitystunnuksia pitkäaikaiseen käyttöön tai taustatehtäviin.',
  },
  roles: {
    assign_button: 'Määritä rooleja',
    delete_description:
      'Rooli poistetaan tästä koneiden välisestä sovelluksesta. Rooli itse säilyy, mutta sitä ei enää liitetä tähän sovellukseen.',
    deleted: '{{name}} poistettiin tältä käyttäjältä.',
    assign_title: 'Määritä rooleja: {{name}}',
    assign_subtitle:
      'Koneiden välisillä sovelluksilla on oltava koneiden välisen tyypin rooleja, jotta ne pääsevät niihin liittyviin API-resursseihin.',
    assign_role_field: 'Määritä rooleja',
    role_search_placeholder: 'Hae roolin nimellä',
    added_text: '{{value, number}} lisätty',
    assigned_app_count: '{{value, number}} sovellusta',
    confirm_assign: 'Määritä rooleja',
    role_assigned: 'Rooli(t) määritetty',
    search: 'Hae roolin nimellä, kuvauksella tai tunnuksella',
    empty: 'Rooleja ei ole saatavilla',
  },
  secrets: {
    value: 'Arvo',
    empty: 'Sovelluksella ei ole salaisuuksia.',
    created_at: 'Luotu',
    expires_at: 'Vanhenee',
    never: 'Ei koskaan',
    create_new_secret: 'Luo uusi salaisuus',
    delete_confirmation: 'Toimintoa ei voi kumota. Haluatko varmasti poistaa tämän salaisuuden?',
    deleted: 'Salaisuus poistettiin.',
    activated: 'Salaisuus aktivoitiin.',
    deactivated: 'Salaisuuden aktivointi poistettiin.',
    legacy_secret: 'Vanha salaisuus',
    expired: 'Vanhentunut',
    expired_tooltip: 'Tämä salaisuus vanheni {{date}}.',
    create_modal: {
      title: 'Luo sovellussalaisuus',
      expiration: 'Voimassaolo',
      expiration_description: 'Salaisuus vanhenee {{date}}.',
      expiration_description_never:
        'Salaisuus ei vanhene koskaan. Suosittelemme vanhenemispäivää paremman turvallisuuden vuoksi.',
      days: '{{count}} päivä',
      days_other: '{{count}} päivää',
      years: '{{count}} vuosi',
      years_other: '{{count}} vuotta',
      created: 'Salaisuus {{name}} luotiin.',
    },
    edit_modal: {
      title: 'Muokkaa sovellussalaisuutta',
      edited: 'Salaisuutta {{name}} muokattiin.',
    },
  },
  saml_idp_config: {
    title: 'SAML IdP -metatiedot',
    description: 'Määritä SAML IdP sovelluksessasi seuraavien metatietojen ja varmenteen avulla.',
    metadata_url_label: 'IdP-metatietojen URL',
    single_sign_on_service_url_label: 'Kertakirjautumispalvelun URL',
    idp_entity_id_label: 'IdP:n entiteettitunnus',
  },
  saml_idp_certificates: {
    title: 'SAML-allekirjoitusvarmenne',
    expires_at: 'Vanhenee',
    finger_print: 'Sormenjälki',
    status: 'Tila',
    active: 'Aktiivinen',
    inactive: 'Ei aktiivinen',
  },
  saml_idp_name_id_format: {
    title: 'Name ID -muoto',
    description: 'Valitse SAML IdP:n Name ID -muoto.',
    persistent: 'Pysyvä',
    persistent_description: 'Käytä GetCertusin käyttäjätunnusta Name ID:nä',
    transient: 'Tilapäinen',
    transient_description: 'Käytä kertakäyttöistä käyttäjätunnusta Name ID:nä',
    unspecified: 'Määrittämätön',
    unspecified_description: 'Käytä GetCertusin käyttäjätunnusta Name ID:nä',
    email_address: 'Sähköpostiosoite',
    email_address_description: 'Käytä sähköpostiosoitetta Name ID:nä',
  },
  saml_idp_authentication: {
    always_force_authn: 'Pakota aina tunnistautuminen',
    always_force_authn_description:
      'Vaadi käyttäjiä kirjautumaan uudelleen joka kerta, kun he avaavat tämän sovelluksen, vaikka heillä olisi jo GetCertus-istunto.',
    always_force_authn_tip:
      'Kun tämä on käytössä, GetCertus pyytää käyttäjiä aina kirjautumaan uudelleen tähän sovellukseen. Muuten olemassa olevaa GetCertus-istuntoa käytetään uudelleen, ellei palveluntarjoaja pyydä uutta tunnistautumista ForceAuthn-asetuksella.',
  },
  saml_encryption_config: {
    encrypt_assertion: 'Salaa SAML-väite',
    encrypt_assertion_description: 'Tällä asetuksella SAML-väite salataan.',
    encrypt_then_sign: 'Salaa ja sitten allekirjoita',
    encrypt_then_sign_description:
      'Tällä asetuksella SAML-väite ensin salataan ja sitten allekirjoitetaan; muuten se ensin allekirjoitetaan ja sitten salataan.',
    certificate: 'Varmenne',
    certificate_tooltip:
      'Kopioi ja liitä palveluntarjoajalta saamasi x509-varmenne SAML-väitteen salaamiseksi.',
    certificate_placeholder:
      '-----BEGIN CERTIFICATE-----\nMIICYDCCAcmgAwIBA...\n-----END CERTIFICATE-----\n',
    certificate_missing_error: 'Varmenne vaaditaan.',
    certificate_invalid_format_error:
      'Varmenteen muoto on virheellinen. Tarkista muoto ja yritä uudelleen.',
  },
  saml_app_attribute_mapping: {
    name: 'Attribuuttien yhdistämiset',
    title: 'Perusattribuuttien yhdistämiset',
    description:
      'Lisää attribuuttien yhdistämisiä synkronoidaksesi käyttäjäprofiilin GetCertusista sovellukseesi.',
    col_logto_claims: 'Arvo GetCertusissa',
    col_sp_claims: 'Arvon nimi sovelluksessasi',
    add_button: 'Lisää toinen',
  },
  concurrent_device_limit: {
    title: 'Samanaikaisten laitteiden raja',
    enable: 'Ota samanaikaisten laitteiden raja käyttöön',
    enable_description:
      'Kun tämä on käytössä, GetCertus valvoo aktiivisten myöntöjen enimmäismäärää käyttäjää kohden tässä sovelluksessa.',
    field: 'Samanaikaisten laitteiden raja sovellusta kohden',
    field_description:
      'Rajaa, kuinka monella laitteella käyttäjä voi olla kirjautuneena samanaikaisesti. GetCertus rajaa aktiivisia myöntöjä ja peruu automaattisesti vanhimman, kun raja ylittyy.',
    field_placeholder: 'Jätä tyhjäksi, jos rajaa ei ole',
    should_be_greater_than_zero: 'On oltava suurempi kuin 0.',
  },
};

export default Object.freeze(application_details);
