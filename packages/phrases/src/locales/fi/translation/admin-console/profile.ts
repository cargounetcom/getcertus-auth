/* GetCertus addition (MPL-2.0, see GETCERTUS.md): admin console phrases. */
const profile = {
  link_account: {
    anonymous: 'Anonyymi',
  },
  delete_account: {
    title: 'POISTA TILI',
    label: 'Poista tili',
    description:
      'Tilin poistaminen poistaa kaikki henkilötietosi, käyttäjätietosi ja asetuksesi. Toimintoa ei voi perua.',
    button: 'Poista tili',
    p: {
      has_issue:
        'Ikävää, että haluat poistaa tilisi. Ennen kuin voit poistaa tilin, sinun on ratkaistava seuraavat ongelmat.',
      after_resolved:
        'Kun ongelmat on ratkaistu, voit poistaa tilisi. Ota rohkeasti yhteyttä, jos tarvitset apua.',
      check_information:
        'Ikävää, että haluat poistaa tilisi. Tarkista seuraavat tiedot huolellisesti ennen kuin jatkat.',
      remove_all_data:
        'Tilin poistaminen poistaa pysyvästi kaikki sinua koskevat tiedot GetCertus Cloudista. Varmuuskopioi tärkeät tiedot ennen kuin jatkat.',
      confirm_information:
        'Vahvista, että yllä olevat tiedot ovat odotetut. Kun tili on poistettu, emme voi palauttaa sitä.',
      has_admin_role:
        'Koska sinulla on ylläpitäjän rooli seuraavassa tenantissa, se poistetaan tilisi mukana:',
      has_admin_role_other:
        'Koska sinulla on ylläpitäjän rooli seuraavissa tenanteissa, ne poistetaan tilisi mukana:',
      quit_tenant: 'Olet poistumassa seuraavasta tenantista:',
      quit_tenant_other: 'Olet poistumassa seuraavista tenanteista:',
    },
    issues: {
      paid_plan: 'Seuraavalla tenantilla on maksullinen paketti, peru ensin tilaus:',
      paid_plan_other: 'Seuraavilla tenanteilla on maksullisia paketteja, peru ensin tilaukset:',
      subscription_status: 'Seuraavalla tenantilla on ongelma tilauksen tilassa:',
      subscription_status_other: 'Seuraavilla tenanteilla on ongelmia tilauksen tilassa:',
      open_invoice: 'Seuraavalla tenantilla on avoin lasku:',
      open_invoice_other: 'Seuraavilla tenanteilla on avoimia laskuja:',
    },
    error_occurred: 'Tapahtui virhe',
    error_occurred_description: 'Tilisi poistamisessa tapahtui virhe:',
    request_id: 'Pyynnön tunnus: {{requestId}}',
    try_again_later:
      'Yritä myöhemmin uudelleen. Jos ongelma jatkuu, ota yhteyttä GetCertus-tiimiin ja kerro pyynnön tunnus.',
    final_confirmation: 'Lopullinen vahvistus',
    about_to_start_deletion: 'Olet aloittamassa poistoprosessia, eikä toimintoa voi perua.',
    permanently_delete: 'Poista pysyvästi',
  },
  fields: {
    name: 'Nimi',
    name_description:
      'Käyttäjän koko nimi näytettävässä muodossa kaikkine nimen osineen (esim. “Matti Meikäläinen”).',
    avatar: 'Avatar',
    avatar_description: 'Käyttäjän avatar-kuvan URL-osoite.',
    familyName: 'Sukunimi',
    familyName_description: 'Käyttäjän sukunimi tai -nimet (esim. "Meikäläinen").',
    givenName: 'Etunimi',
    givenName_description: 'Käyttäjän etunimi tai -nimet (esim. "Matti").',
    middleName: 'Toinen nimi',
    middleName_description: 'Käyttäjän toinen nimi tai muut nimet (esim. "Juhani").',
    nickname: 'Lempinimi',
    nickname_description:
      'Käyttäjän epävirallinen tai tuttavallinen nimi, joka voi poiketa virallisesta nimestä.',
    preferredUsername: 'Ensisijainen käyttäjänimi',
    preferredUsername_description: 'Lyhyt tunniste, jolla käyttäjä haluaa itseään kutsuttavan.',
    profile: 'Profiili',
    profile_description:
      'Käyttäjän luettavan profiilisivun URL-osoite (esim. sosiaalisen median profiili).',
    website: 'Verkkosivusto',
    website_description: 'Käyttäjän henkilökohtaisen verkkosivuston tai blogin URL-osoite.',
    gender: 'Sukupuoli',
    gender_description:
      'Käyttäjän itse ilmoittama sukupuoli (esim. "Nainen", "Mies", "Muunsukupuolinen")',
    birthdate: 'Syntymäaika',
    birthdate_description: 'Käyttäjän syntymäaika määritetyssä muodossa (esim. "MM-dd-yyyy").',
    zoneinfo: 'Aikavyöhyke',
    zoneinfo_description:
      'Käyttäjän aikavyöhyke IANA-muodossa (esim. "America/New_York" tai "Europe/Paris").',
    locale: 'Kieli',
    locale_description: 'Käyttäjän kieli IETF BCP 47 -muodossa (esim. "en-US" tai "zh-CN").',
    address: {
      formatted: 'Osoite',
      streetAddress: 'Katuosoite',
      locality: 'Paikkakunta',
      region: 'Alue',
      postalCode: 'Postinumero',
      country: 'Maa',
    },
    address_description:
      'Käyttäjän koko osoite näytettävässä muodossa kaikkine osineen (esim. "123 Main St, Anytown, USA 12345").',
    fullname: 'Koko nimi',
    fullname_description:
      'Yhdistää joustavasti familyName-, givenName- ja middleName-kentät asetusten mukaan.',
  },
};

export default Object.freeze(profile);
