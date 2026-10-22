/* GetCertus addition (MPL-2.0, see GETCERTUS.md): admin console phrases. */
const applications = {
  page_title: 'Sovellukset',
  title: 'Sovellukset',
  subtitle: 'Luo ja hallitse OIDC-tunnistautumisen sovelluksia.',
  subtitle_with_app_type: 'Määritä GetCertus-tunnistautuminen {{name}}-sovelluksellesi',
  create_device_flow_description:
    'Luo natiivisovellus, joka käyttää OAuth 2.0 Device Authorization Grant -menetelmää laitteille, joissa syöttö on rajallinen, tai headless-sovelluksille.',
  create: 'Luo sovellus',
  create_third_party: 'Luo kolmannen osapuolen sovellus',
  create_thrid_party_modal_title: 'Luo kolmannen osapuolen sovellus ({{type}})',
  application_name: 'Sovelluksen nimi',
  application_name_placeholder: 'Oma sovellus',
  application_description: 'Sovelluksen kuvaus',
  application_description_placeholder: 'Kirjoita sovelluksen kuvaus',
  select_application_type: 'Valitse sovellustyyppi',
  no_application_type_selected: 'Et ole vielä valinnut sovellustyyppiä',
  application_created: 'Sovellus luotu.',
  tab: {
    my_applications: 'Omat sovellukset',
    third_party_applications: 'Kolmannen osapuolen sovellukset',
  },
  app_id: 'Sovellustunnus',
  type: {
    native: {
      title: 'Natiivisovellus',
      subtitle: 'Natiiviympäristössä toimiva sovellus',
      description: 'Esim. iOS-sovellus, Android-sovellus, työpöytäsovellus, televisio, CLI',
    },
    spa: {
      title: 'Yhden sivun sovellus',
      subtitle: 'Selaimessa toimiva sovellus, joka päivittää tietoja paikallaan',
      description: 'Esim. React DOM -sovellus, Vue-sovellus',
    },
    traditional: {
      title: 'Perinteinen verkkosovellus',
      subtitle: 'Sovellus, jonka sivut verkkopalvelin yksin luo ja päivittää',
      description: 'Esim. Next.js, PHP',
    },
    machine_to_machine: {
      title: 'Koneiden välinen',
      subtitle: 'Sovellus (yleensä palvelu), joka keskustelee suoraan resurssien kanssa',
      description: 'Esim. taustapalvelu',
    },
    protected: {
      title: 'Suojattu sovellus',
      subtitle: 'GetCertusin suojaama sovellus',
      description: 'Ei sovellu',
    },
    saml: {
      title: 'SAML-sovellus',
      subtitle: 'SAML IdP -liittimenä käytettävä sovellus',
      description: 'Esim. SAML',
    },
    third_party: {
      title: 'Kolmannen osapuolen sovellus',
      subtitle: 'Kolmannen osapuolen IdP-liittimenä käytettävä sovellus',
      description: 'Esim. OIDC',
    },
  },
  authorization_flow: {
    title: 'Valtuutusvirta',
    tooltip: 'Valitse sovelluksen valtuutusvirta. Sitä ei voi muuttaa jälkikäteen.',
    authorization_code: {
      title: 'Valtuutuskoodi',
      description:
        'Oletusarvoinen ja yleisin myöntötyyppi. Käyttäjät ohjataan kirjautumissivulle myöntämään pääsy suoraan.',
    },
    device_flow: {
      title: 'Laitevirta',
      description:
        'Laitteille, joissa syöttö on rajallinen, tai headless-sovelluksille (esim. televisiot, CLI). Käyttäjä viimeistelee kirjautumisen toisella laitteella syöttämällä laitekoodin tai skannaamalla QR-koodin.',
    },
  },
  placeholder_title: 'Valitse sovellustyyppi jatkaaksesi',
  placeholder_description:
    'GetCertus käyttää OIDC:ssä sovellusentiteettiä esimerkiksi sovellustesi tunnistamiseen, kirjautumisen hallintaan ja tarkastuslokien luomiseen.',
  third_party_application_placeholder_description:
    'Käytä GetCertusta identiteetintarjoajana ja anna OAuth-valtuutus kolmannen osapuolen palveluille. Mukana valmis suostumusnäkymä resursseihin pääsylle. <a>Lisätietoja</a>',
  dynamic_app: {
    title: 'Dynaaminen sovellus',
    subtitle: 'CIMD',
    description:
      'Dynaamisen sovelluksen avulla OAuth-asiakkaat voivat muodostaa yhteyden ilman ennakkorekisteröintiä.',
    settings_description:
      'Dynaamisen sovelluksen avulla OAuth-asiakkaat voivat muodostaa yhteyden ilman ennakkorekisteröintiä. Käyttää OAuth Client ID Metadata Document (CIMD) -määritystä.',
    beta_notice:
      'Dynaaminen sovellus on beta-vaiheessa. Kokeile ja <ContactLink>kerro palautteesi</ContactLink>.',
    app_id_placeholder: 'Jokainen asiakas antaa tämän dynaamisesti',
    enable_confirm_modal: {
      title: 'Otetaanko dynaaminen asiakaspääsy käyttöön?',
      content:
        'Mikä tahansa OAuth-asiakas, jolla on kelvollinen julkinen HTTPS-asiakastunnus-URL, voi aloittaa valtuutuksen tälle tenantille ilman rekisteröintiä. Pääsyä rajoittavat edelleen enimmäisoikeutesi ja käyttäjän suostumus.',
      beta_pricing_notice:
        'Dynaaminen sovellus on maksuton beta-vaiheen ajan. Sen jälkeen lisäosasta voidaan veloittaa. Ilmoitamme etukäteen, ja voit poistaa sen käytöstä milloin tahansa.',
    },
    enabled: 'Dynaaminen sovellus otettu käyttöön.',
    disable_confirm_modal: {
      title: 'Poistetaanko dynaaminen sovellus käytöstä?',
      content:
        'CIMD-asiakkaat eivät voi enää aloittaa uusia valtuutuspyyntöjä. Olemassa olevat myönnöt säilyvät, ja myönnetyt käyttöoikeustunnukset voivat olla voimassa, kunnes ne vanhenevat.',
    },
    disabled: 'Dynaaminen sovellus poistettu käytöstä.',
    permissions: {
      user_title: 'Käyttäjä',
      user_description:
        'Valitse oikeudet, joita OAuth-asiakkaat pyytävät tiettyjen käyttäjätietojen käyttöön.',
      grant_user_level_permissions: 'Myönnä käyttäjäoikeuksia',
      organization_title: 'Organisaatio',
      organization_description:
        'Valitse oikeudet, joita OAuth-asiakkaat pyytävät tiettyjen organisaatiotietojen käyttöön.',
      grant_organization_level_permissions: 'Myönnä organisaatio-oikeuksia',
      permission_delete_confirm:
        'Oikeus poistetaan dynaamisesta sovelluksesta, jolloin OAuth-asiakkaat eivät voi enää pyytää käyttäjän valtuutusta sille. Haluatko varmasti jatkaa?',
    },
    client_compatibility: {
      title: 'Asiakasyhteensopivuus',
      description:
        'Säädä, miten GetCertus käsittelee valtuutuspyyntöjä OAuth-asiakkailta, jotka eivät vielä täysin tue OpenID Connectia. Asetukset ovat kokeellisia ja voivat muuttua tai poistua.',
      add_consent_prompt_for_offline_access: 'Lisää suostumuskehote offline-käytölle',
      add_consent_prompt_for_offline_access_description:
        'Kun OAuth-asiakas pyytää `offline_access`-oikeutta ilman `prompt=consent`-parametria, GetCertus lisää suostumuskehotteen, jotta asiakas voi saada päivitystunnuksen. Suositellaan esimerkiksi ChatGPT- ja Codex-asiakkaille.',
    },
  },
  guide: {
    third_party: {
      title: 'Integroi kolmannen osapuolen sovellus',
      description:
        'Käytä GetCertusta identiteetintarjoajana ja anna OAuth-valtuutus kolmannen osapuolen palveluille. Mukana valmis suostumusnäkymä turvalliseen resurssien käyttöön. <a>Lisätietoja</a>',
    },
  },
};

export default Object.freeze(applications);
