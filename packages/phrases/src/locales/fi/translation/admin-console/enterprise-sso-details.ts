/* GetCertus addition (MPL-2.0, see GETCERTUS.md): admin console phrases. */
const enterprise_sso_details = {
  back_to_sso_connectors: 'Takaisin yritys-SSO:hon',
  page_title: 'Yritys-SSO-liittimen tiedot',
  readme_drawer_title: 'Yritys-SSO',
  readme_drawer_subtitle:
    'Määritä yritys-SSO-liittimet ottaaksesi kertakirjautumisen käyttöön loppukäyttäjille',
  tab_experience: 'SSO-kokemus',
  tab_connection: 'Yhteys',
  tab_idp_initiated_auth: 'IdP:n aloittama SSO',
  general_settings_title: 'Yleiset',
  general_settings_description:
    'Määritä loppukäyttäjän kokemus ja liitä yrityksen sähköpostiverkkotunnus SP:n aloittamaan SSO-kulkuun.',
  custom_branding_title: 'Näyttö',
  custom_branding_description:
    'Mukauta loppukäyttäjille kertakirjautumisessa näytettävää nimeä ja logoa. Tyhjänä käytetään oletuksia.',
  email_domain_field_name: 'Yrityksen sähköpostiverkkotunnukset',
  email_domain_field_description:
    'Käyttäjät, joilla on näiden verkkotunnusten sähköpostiosoite, voivat kirjautua SSO:lla. Varmista verkkotunnuksen omistajuus ennen lisäämistä.',
  email_domain_field_placeholder:
    'Anna yksi tai useampi sähköpostiverkkotunnus (esim. yrityksesi.fi)',
  sync_profile_field_name: 'Synkronoi profiilitiedot identiteetintarjoajalta',
  sync_profile_option: {
    register_only: 'Synkronoi vain ensimmäisellä kirjautumisella',
    each_sign_in: 'Synkronoi aina jokaisella kirjautumisella',
  },
  connector_name_field_name: 'Liittimen nimi',
  display_name_field_name: 'Näyttönimi',
  connector_logo_field_name: 'Näytettävä logo',
  connector_logo_field_description:
    'Jokaisen kuvan tulee olla alle 500 kt; vain SVG, PNG, JPG ja JPEG.',
  branding_logo_context: 'Lataa logo',
  branding_logo_error: 'Logon lataus epäonnistui: {{error}}',
  branding_light_logo_context: 'Lataa vaalean tilan logo',
  branding_light_logo_error: 'Vaalean tilan logon lataus epäonnistui: {{error}}',
  branding_logo_field_name: 'Logo',
  branding_logo_field_placeholder: 'https://your.domain/logo.png',
  branding_dark_logo_context: 'Lataa tumman tilan logo',
  branding_dark_logo_error: 'Tumman tilan logon lataus epäonnistui: {{error}}',
  branding_dark_logo_field_name: 'Logo (tumma tila)',
  branding_dark_logo_field_placeholder: 'https://your.domain/dark-mode-logo.png',
  check_connection_guide: 'Yhteysopas',
  enterprise_sso_deleted: 'Yritys-SSO-liitin on poistettu',
  delete_confirm_modal_title: 'Poista yritys-SSO-liitin',
  delete_confirm_modal_content:
    'Haluatko varmasti poistaa tämän yritysliittimen? Identiteetintarjoajien käyttäjät eivät enää voi käyttää kertakirjautumista.',
  upload_idp_metadata_title_saml: 'Lataa metatiedot',
  upload_idp_metadata_description_saml: 'Määritä identiteetintarjoajalta kopioidut metatiedot.',
  upload_idp_metadata_title_oidc: 'Lataa tunnistetiedot',
  upload_idp_metadata_description_oidc:
    'Määritä identiteetintarjoajalta kopioidut tunnistetiedot ja OIDC-tunnuksen tiedot.',
  upload_idp_metadata_button_text: 'Lataa metatietojen XML-tiedosto',
  upload_signing_certificate_button_text: 'Lataa allekirjoitusvarmenteen tiedosto',
  configure_domain_field_info_text:
    'Lisää sähköpostiverkkotunnus ohjataksesi yrityksen käyttäjät heidän identiteetintarjoajalleen kertakirjautumista varten.',
  email_domain_field_required: 'Sähköpostiverkkotunnus vaaditaan yritys-SSO:n käyttöönottoon.',
  upload_saml_idp_metadata_info_text_url:
    'Yhdistä liittämällä identiteetintarjoajan metatietojen URL.',
  upload_saml_idp_metadata_info_text_xml: 'Yhdistä liittämällä identiteetintarjoajan metatiedot.',
  upload_saml_idp_metadata_info_text_manual:
    'Yhdistä täyttämällä identiteetintarjoajan metatiedot.',
  upload_oidc_idp_info_text: 'Yhdistä täyttämällä identiteetintarjoajan tiedot.',
  service_provider_property_title: 'Määritä IdP:ssä',
  service_provider_property_description:
    'Luo identiteetintarjoajaasi sovellusintegraatio protokollalla {{protocol}}. Anna GetCertuksen antamat tiedot.',
  attribute_mapping_title: 'Attribuuttien vastaavuudet',
  attribute_mapping_description:
    'Synkronoi käyttäjäprofiilit identiteetintarjoajalta määrittämällä attribuuttien vastaavuudet joko identiteetintarjoajan tai GetCertuksen puolella.',
  saml_preview: {
    sign_on_url: 'Kirjautumisen URL',
    entity_id: 'Myöntäjä',
    x509_certificate: 'Allekirjoitusvarmenne',
    certificate_content: 'Vanhenee {{date}}',
  },
  oidc_preview: {
    authorization_endpoint: 'Valtuutuksen päätepiste',
    token_endpoint: 'Tunnuksen päätepiste',
    userinfo_endpoint: 'Käyttäjätietojen päätepiste',
    jwks_uri: 'JSON Web Key Set -päätepiste',
    issuer: 'Myöntäjä',
  },
  idp_initiated_auth_config: {
    card_title: 'IdP:n aloittama SSO',
    card_description:
      'Käyttäjät aloittavat todennuksen yleensä sovelluksestasi SP:n aloittamalla SSO-kululla. ÄLÄ ota tätä ominaisuutta käyttöön, ellei se ole ehdottoman välttämätöntä.',
    enable_idp_initiated_sso: 'Ota IdP:n aloittama SSO käyttöön',
    enable_idp_initiated_sso_description:
      'Anna yrityksen käyttäjien aloittaa todennus suoraan identiteetintarjoajan portaalista. Ymmärrä mahdolliset tietoturvariskit ennen käyttöönottoa.',
    default_application: 'Oletussovellus',
    default_application_tooltip: 'Kohdesovellus, johon käyttäjä ohjataan todennuksen jälkeen.',
    empty_applications_error:
      'Sovelluksia ei löytynyt. Lisää sovellus kohdassa <a>Sovellukset</a>.',
    empty_applications_placeholder: 'Ei sovelluksia',
    authentication_type: 'Todennuksen tyyppi',
    auto_authentication_disabled_title: 'Ohjaa asiakkaalle SP:n aloittamaa SSO:ta varten',
    auto_authentication_disabled_description:
      'Suositeltu. Ohjaa käyttäjät asiakassovellukseen aloittamaan turvallinen SP:n aloittama OIDC-todennus. Tämä estää CSRF-hyökkäykset.',
    auto_authentication_enabled_title: 'Kirjaudu suoraan IdP:n aloittamalla SSO:lla',
    auto_authentication_enabled_description:
      'Onnistuneen kirjautumisen jälkeen käyttäjät ohjataan määritettyyn uudelleenohjaus-URI:in valtuutuskoodin kanssa (ilman state- ja PKCE-tarkistusta).',
    auto_authentication_disabled_app:
      'Perinteisille verkkosovelluksille ja yhden sivun sovelluksille (SPA)',
    auto_authentication_enabled_app: 'Perinteisille verkkosovelluksille',
    idp_initiated_auth_callback_uri: 'Asiakkaan callback-URI',
    idp_initiated_auth_callback_uri_tooltip:
      'Asiakkaan callback-URI SP:n aloittaman SSO-todennuksen käynnistämiseen. URI:in lisätään kyselyparametriksi ssoConnectorId. (esim. https://your.domain/sso/callback?connectorId={{ssoConnectorId}})',
    redirect_uri: 'Uudelleenohjaus-URI kirjautumisen jälkeen',
    redirect_uri_tooltip:
      'Uudelleenohjaus-URI, johon käyttäjät ohjataan onnistuneen kirjautumisen jälkeen. GetCertus käyttää tätä URI:a OIDC-uudelleenohjaus-URI:na valtuutuspyynnössä. Käytä paremman tietoturvan vuoksi erillistä URI:a IdP:n aloittamalle SSO-kululle.',
    empty_redirect_uris_error:
      'Sovellukselle ei ole rekisteröity uudelleenohjaus-URI:a. Lisää sellainen ensin.',
    redirect_uri_placeholder: 'Valitse uudelleenohjaus-URI kirjautumisen jälkeen',
    auth_params: 'Lisätodennusparametrit',
    auth_params_tooltip:
      'Valtuutuspyyntöön lisättävät parametrit. Oletuksena pyydetään vain scopet (openid profile); voit määrittää tässä lisää scopeja tai oman state-arvon. (esim. { "scope": "organizations email", "state": "secret_state" }).',
  },
  trust_unverified_email: 'Luota vahvistamattomaan sähköpostiin',
  trust_unverified_email_label:
    'Luota aina identiteetintarjoajan palauttamiin vahvistamattomiin sähköpostiosoitteisiin',
  trust_unverified_email_tip:
    'Entra ID (OIDC) -liitin ei palauta `email_verified`-claimia, joten Azuren sähköpostiosoitteiden vahvistusta ei voida taata. Oletuksena GetCertus ei synkronoi vahvistamattomia sähköpostiosoitteita käyttäjäprofiiliin. Ota tämä käyttöön vain, jos luotat kaikkiin Entra ID -hakemiston sähköpostiosoitteisiin.',
  trust_unverified_email_tip_oidc:
    'OIDC-liitin ei välttämättä palauta `email_verified`-claimia, joten identiteetintarjoajan sähköpostiosoitteiden vahvistusta ei voida taata. Oletuksena GetCertus ei synkronoi vahvistamattomia sähköpostiosoitteita käyttäjäprofiiliin. Ota tämä käyttöön vain, jos luotat kaikkiin identiteetintarjoajan sähköpostiosoitteisiin.',
  offline_access: {
    label: 'Päivitä käyttötunnus',
    description:
      'Ota Googlen `offline`-käyttö käyttöön pyytääksesi päivitystunnuksen, jolloin sovelluksesi voi uusia käyttötunnuksen ilman käyttäjän uutta valtuutusta.',
  },
};

export default Object.freeze(enterprise_sso_details);
