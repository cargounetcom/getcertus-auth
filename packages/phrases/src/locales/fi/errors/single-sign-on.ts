/* GetCertus addition (MPL-2.0, see GETCERTUS.md): admin console phrases. */
const single_sign_on = {
  forbidden_domains: 'Julkiset sähköpostin verkkotunnukset eivät ole sallittuja.',
  duplicated_domains: 'Verkkotunnuksissa on päällekkäisyyksiä.',
  invalid_domain_format: 'Virheellinen verkkotunnuksen muoto.',
  duplicate_connector_name: 'Liittimen nimi on jo olemassa. Valitse toinen nimi.',
  idp_initiated_authentication_not_supported:
    'IdP:n käynnistämää tunnistautumista tuetaan vain SAML-liittimille.',
  idp_initiated_authentication_invalid_application_type:
    'Virheellinen sovellustyyppi. Vain {{type}}-sovellukset ovat sallittuja.',
  idp_initiated_authentication_redirect_uri_not_registered:
    'redirect_uri-osoitetta ei ole rekisteröity. Tarkista sovelluksen asetukset.',
  idp_initiated_authentication_client_callback_uri_not_found:
    'Asiakkaan callback-URI:a IdP:n käynnistämälle tunnistautumiselle ei löytynyt. Tarkista liittimen asetukset.',
  sso_signing_unavailable:
    'Emme voineet suorittaa kirjautumista identiteettipalvelusi kautta. Ota yhteyttä ylläpitäjään.',
  can_not_delete_active_signing_key:
    'Aktiivista allekirjoitusavainta ei voi poistaa. Aktivoi ensin toinen avain tai poista tämä avain käytöstä.',
  can_not_deactivate_signing_key_in_use:
    'Allekirjoitusavainta ei voi poistaa käytöstä, kun allekirjoitetut tunnistautumispyynnöt ovat käytössä. Poista ensin allekirjoitetut tunnistautumispyynnöt käytöstä.',
  active_signing_key_required:
    'Aktiivista allekirjoitusavainta ei löytynyt. Luo ja aktivoi allekirjoitusavain ennen kuin otat allekirjoitetut tunnistautumispyynnöt käyttöön.',
};

export default Object.freeze(single_sign_on);
