/* GetCertus addition (MPL-2.0, see GETCERTUS.md): admin console phrases. */
const enterprise_sso = {
  page_title: 'Yritys-SSO',
  title: 'Yritys-SSO',
  subtitle: 'Yhdistä yrityksen identiteetintarjoaja ja ota kertakirjautuminen käyttöön.',
  create: 'Lisää yritysliitin',
  col_connector_name: 'Liittimen nimi',
  col_type: 'Tyyppi',
  col_email_domain: 'Sähköpostin verkkotunnus',
  placeholder_title: 'Yritysliitin',
  placeholder_description:
    'GetCertus tarjoaa monia sisäänrakennettuja yritysten identiteetintarjoajia, ja voit myös luoda omia SAML- ja OIDC-protokollilla.',
  create_modal: {
    title: 'Lisää yritysliitin',
    text_divider: 'Tai mukauta liitintä standardiprotokollalla.',
    connector_name_field_title: 'Liittimen nimi',
    connector_name_field_placeholder: 'Esim. {yrityksen nimi} - {identiteetintarjoajan nimi}',
    create_button_text: 'Luo liitin',
  },
  guide: {
    subtitle: 'Vaiheittainen opas yrityksen identiteetintarjoajan yhdistämiseen.',
    finish_button_text: 'Jatka',
  },
  basic_info: {
    title: 'Määritä palvelusi IdP:ssä',
    description:
      'Luo uusi SAML 2.0 -sovellusintegraatio identiteetintarjoajassa {{name}}. Liitä siihen sitten seuraava arvo.',
    saml: {
      acs_url_field_name: 'Assertion Consumer Service -URL (Reply URL)',
      audience_uri_field_name: 'Audience-URI (SP Entity ID)',
      entity_id_field_name: 'Palveluntarjoajan (SP) Entity ID',
      entity_id_field_tooltip:
        'SP Entity ID voi olla mikä tahansa merkkijono, yleensä tunnisteena käytetty URI tai URL, mutta se ei ole pakollista.',
      acs_url_field_placeholder: 'https://your-domain.com/api/saml/callback',
      entity_id_field_placeholder: 'urn:your-domain.com:sp:saml:{serviceProviderId}',
      sign_auth_request: 'Allekirjoita todennuspyyntö',
      sign_auth_request_tooltip:
        'GetCertus allekirjoittaa SAML-todennuspyynnöt luodulla varmenteella. Ota käyttöön vain, jos identiteetintarjoajasi on määritetty tarkistamaan allekirjoitetut pyynnöt.',
      signing_certificate_field_name: 'Pyyntöjen allekirjoitusvarmenne',
      signing_keys_empty: 'Allekirjoitusavaimia ei ole luotu.',
      generate_signing_key: 'Luo uusi avain',
      signing_key_generated: 'Allekirjoitusavain on luotu.',
      signing_key_activated: 'Allekirjoitusavain on aktivoitu.',
      signing_key_deactivated: 'Allekirjoitusavain on poistettu käytöstä.',
      signing_key_deleted: 'Allekirjoitusavain on poistettu.',
      sign_auth_request_warning:
        'Käyttöönoton jälkeen luo alla allekirjoitusavain ja rekisteröi sen varmenne identiteetintarjoajaasi (ja ota siellä käyttöön allekirjoitettujen pyyntöjen tarkistus). Kirjautuminen tämän yhteyden kautta epäonnistuu, kunnes varmenne on rekisteröity.',
    },
    oidc: {
      redirect_uri_field_name: 'Uudelleenohjaus-URI (callback-URL)',
      redirect_uri_field_description:
        'Uudelleenohjaus-URI on osoite, johon käyttäjät ohjataan SSO-todennuksen jälkeen. Lisää tämä URI IdP:si määrityksiin.',
      redirect_uri_field_custom_domain_description:
        'Jos käytät GetCertuksessa useita <a>mukautettuja verkkotunnuksia</a>, lisää kaikki vastaavat callback-URI:t IdP:hesi, jotta SSO toimii jokaisella verkkotunnuksella.\n\nGetCertuksen oletusverkkotunnus (*.logto.app) on aina kelvollinen — lisää se vain, jos haluat tukea SSO:ta myös sen kautta.',
    },
  },
  attribute_mapping: {
    title: 'Attribuuttien vastaavuudet',
    description:
      '`id` ja `email` vaaditaan käyttäjäprofiilin synkronointiin IdP:stä. Anna seuraava claim-nimi ja arvo IdP:ssäsi.',
    col_sp_claims: 'Palveluntarjoajan arvo (GetCertus)',
    col_idp_claims: 'Identiteetintarjoajan claim-nimi',
    idp_claim_tooltip: 'Identiteetintarjoajan claim-nimi',
  },
  metadata: {
    title: 'Määritä IdP:n metatiedot',
    description: 'Määritä identiteetintarjoajan metatiedot',
    dropdown_trigger_text: 'Käytä toista määritystapaa',
    dropdown_title: 'valitse määritystapa',
    metadata_format_url: 'Anna metatietojen URL',
    metadata_format_xml: 'Lataa metatietojen XML-tiedosto',
    metadata_format_manual: 'Anna metatiedot käsin',
    saml: {
      metadata_url_field_name: 'Metatietojen URL',
      metadata_url_description:
        'Hae tiedot dynaamisesti metatietojen URL-osoitteesta ja pidä varmenne ajan tasalla.',
      metadata_xml_field_name: 'IdP:n metatietojen XML-tiedosto',
      metadata_xml_uploader_text: 'Lataa metatietojen XML-tiedosto',
      sign_in_endpoint_field_name: 'Kirjautumisen URL',
      idp_entity_id_field_name: 'IdP:n Entity ID (Issuer)',
      certificate_field_name: 'Allekirjoitusvarmenne',
      certificate_placeholder: 'Kopioi ja liitä x509-varmenne',
      certificate_required: 'Allekirjoitusvarmenne vaaditaan.',
    },
    oidc: {
      client_id_field_name: 'Asiakastunnus',
      client_secret_field_name: 'Asiakassalaisuus',
      issuer_field_name: 'Myöntäjä',
      scope_field_name: 'Scope',
      scope_field_placeholder: 'Anna scopet (välilyönnillä erotettuina)',
    },
  },
};

export default Object.freeze(enterprise_sso);
