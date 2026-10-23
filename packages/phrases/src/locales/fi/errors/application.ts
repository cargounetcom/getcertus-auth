/* GetCertus addition (MPL-2.0, see GETCERTUS.md): admin console phrases. */
const application = {
  invalid_type: 'Vain koneelta koneelle -sovelluksilla voi olla liitettyjä rooleja.',
  role_exists: 'Roolitunnus {{roleId}} on jo lisätty tähän sovellukseen.',
  invalid_role_type: 'Käyttäjätyyppistä roolia ei voi määrittää koneelta koneelle -sovellukselle.',
  invalid_third_party_application_type:
    'Vain perinteiset verkko-, yhden sivun ja natiivisovellukset voidaan merkitä kolmannen osapuolen sovelluksiksi.',
  third_party_application_only:
    'Ominaisuus on käytettävissä vain kolmannen osapuolen sovelluksille.',
  third_party_application_cannot_enable_token_exchange:
    'Kolmannen osapuolen sovellukset eivät voi ottaa token exchangea käyttöön.',
  user_consent_scopes_not_found: 'Virheelliset käyttäjän suostumuksen scopet.',
  consent_management_api_scopes_not_allowed: 'Management API -scopet eivät ole sallittuja.',
  device_flow_native_only: 'Device flow on käytettävissä vain natiivisovelluksille.',
  device_flow_not_changeable: 'Device flow -asetusta ei voi muuttaa sovelluksen luomisen jälkeen.',
  protected_app_metadata_is_required: 'Suojatun sovelluksen metatiedot vaaditaan.',
  protected_app_not_configured:
    'Suojattujen sovellusten palvelua ei ole määritetty. Ominaisuus ei ole käytettävissä avoimen lähdekoodin versiossa.',
  cloudflare_unknown_error: 'Tuntematon virhe Cloudflare API:n kutsussa',
  protected_application_only: 'Ominaisuus on käytettävissä vain suojatuille sovelluksille.',
  protected_application_misconfigured: 'Suojattu sovellus on määritetty väärin.',
  protected_application_subdomain_exists: 'Suojatun sovelluksen aliverkkotunnus on jo käytössä.',
  invalid_subdomain: 'Virheellinen aliverkkotunnus.',
  custom_domain_not_found: 'Mukautettua verkkotunnusta ei löytynyt.',
  should_delete_custom_domains_first: 'Poista ensin mukautetut verkkotunnukset.',
  no_legacy_secret_found: 'Sovelluksella ei ole vanhaa salaisuutta.',
  secret_name_exists: 'Salaisuus tällä nimellä on jo olemassa.',
  sync_application_secret_failed: 'Sovelluksen salaisuuden synkronointi epäonnistui.',
  saml: {
    use_saml_app_api:
      'Käytä API:a `[METHOD] /saml-applications(/.*)?` SAML-sovellusten hallintaan.',
    saml_application_only: 'API on käytettävissä vain SAML-sovelluksille.',
    reach_oss_limit:
      'Et VOI luoda enempää SAML-sovelluksia, koska {{limit}} sovelluksen raja on saavutettu.',
    acs_url_binding_not_supported:
      'SAML-assertioiden vastaanottamisessa tuetaan vain HTTP-POST-sidontaa.',
    acs_url_scheme_not_supported:
      'Assertion Consumer Service -URL:lle tuetaan vain HTTP- ja HTTPS-skeemoja.',
    can_not_delete_active_secret: 'Aktiivista salaisuutta ei voi poistaa.',
    no_active_secret: 'Aktiivista salaisuutta ei löytynyt.',
    entity_id_required: 'Entity ID vaaditaan metatietojen luomiseen.',
    name_id_format_required: 'Name ID -muoto vaaditaan.',
    unsupported_name_id_format: 'Name ID -muotoa ei tueta.',
    missing_email_address: 'Käyttäjällä ei ole sähköpostiosoitetta.',
    email_address_unverified: 'Käyttäjän sähköpostiosoitetta ei ole vahvistettu.',
    invalid_certificate_pem_format: 'Varmenteen PEM-muoto on virheellinen',
    acs_url_required: 'Assertion Consumer Service -URL vaaditaan.',
    private_key_required: 'Yksityinen avain vaaditaan.',
    certificate_required: 'Varmenne vaaditaan.',
    invalid_saml_request: 'Virheellinen SAML-tunnistautumispyyntö.',
    auth_request_issuer_not_match:
      'SAML-tunnistautumispyynnön myöntäjä ei vastaa palveluntarjoajan entity ID:tä.',
    sp_initiated_saml_sso_session_not_found_in_cookies:
      'Palveluntarjoajan käynnistämän SAML SSO -istunnon tunnusta ei löytynyt evästeistä.',
    sp_initiated_saml_sso_session_not_found:
      'Palveluntarjoajan käynnistämää SAML SSO -istuntoa ei löytynyt.',
    state_mismatch: '`state` ei täsmää.',
  },
};

export default Object.freeze(application);
