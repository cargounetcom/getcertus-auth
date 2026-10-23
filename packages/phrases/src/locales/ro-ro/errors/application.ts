/* GetCertus addition (MPL-2.0, see GETCERTUS.md): admin console phrases. */
const application = {
  invalid_type: 'Doar aplicațiile mașină la mașină pot avea roluri asociate.',
  role_exists: 'ID-ul de rol {{roleId}} a fost deja adăugat acestei aplicații.',
  invalid_role_type:
    'Un rol de tip utilizator nu poate fi atribuit unei aplicații mașină la mașină.',
  invalid_third_party_application_type:
    'Doar aplicațiile web tradiționale, single-page și native pot fi marcate ca aplicații terțe.',
  third_party_application_only: 'Funcția este disponibilă doar pentru aplicațiile terțe.',
  third_party_application_cannot_enable_token_exchange:
    'Aplicațiile terțe nu au voie să activeze token exchange.',
  user_consent_scopes_not_found: 'Scopuri de consimțământ al utilizatorului nevalide.',
  consent_management_api_scopes_not_allowed: 'Scopurile Management API nu sunt permise.',
  device_flow_native_only: 'Device flow este disponibil doar pentru aplicațiile native.',
  device_flow_not_changeable: 'Device flow nu poate fi modificat după crearea aplicației.',
  protected_app_metadata_is_required: 'Metadatele aplicației protejate sunt obligatorii.',
  protected_app_not_configured:
    'Furnizorul de aplicații protejate nu este configurat. Funcția nu este disponibilă în versiunea open source.',
  cloudflare_unknown_error: 'Eroare necunoscută la apelarea API-ului Cloudflare',
  protected_application_only: 'Funcția este disponibilă doar pentru aplicațiile protejate.',
  protected_application_misconfigured: 'Aplicația protejată este configurată greșit.',
  protected_application_subdomain_exists: 'Subdomeniul aplicației protejate este deja folosit.',
  invalid_subdomain: 'Subdomeniu nevalid.',
  custom_domain_not_found: 'Domeniul personalizat nu a fost găsit.',
  should_delete_custom_domains_first: 'Șterge mai întâi domeniile personalizate.',
  no_legacy_secret_found: 'Aplicația nu are un secret vechi.',
  secret_name_exists: 'Există deja un secret cu acest nume.',
  sync_application_secret_failed: 'Sincronizarea secretului aplicației a eșuat.',
  saml: {
    use_saml_app_api:
      'Folosește API-ul `[METHOD] /saml-applications(/.*)?` pentru a gestiona aplicațiile SAML.',
    saml_application_only: 'API-ul este disponibil doar pentru aplicațiile SAML.',
    reach_oss_limit: 'NU mai poți crea aplicații SAML, deoarece limita de {{limit}} a fost atinsă.',
    acs_url_binding_not_supported:
      'Pentru primirea aserțiunilor SAML este acceptat doar binding-ul HTTP-POST.',
    acs_url_scheme_not_supported:
      'Pentru URL-ul Assertion Consumer Service sunt acceptate doar schemele HTTP și HTTPS.',
    can_not_delete_active_secret: 'Secretul activ nu poate fi șters.',
    no_active_secret: 'Nu a fost găsit niciun secret activ.',
    entity_id_required: 'Entity ID este obligatoriu pentru generarea metadatelor.',
    name_id_format_required: 'Formatul Name ID este obligatoriu.',
    unsupported_name_id_format: 'Format Name ID neacceptat.',
    missing_email_address: 'Utilizatorul nu are o adresă de e-mail.',
    email_address_unverified: 'Adresa de e-mail a utilizatorului nu este verificată.',
    invalid_certificate_pem_format: 'Format PEM nevalid al certificatului',
    acs_url_required: 'URL-ul Assertion Consumer Service este obligatoriu.',
    private_key_required: 'Cheia privată este obligatorie.',
    certificate_required: 'Certificatul este obligatoriu.',
    invalid_saml_request: 'Cerere de autentificare SAML nevalidă.',
    auth_request_issuer_not_match:
      'Emitentul cererii de autentificare SAML nu corespunde cu Entity ID-ul furnizorului de servicii.',
    sp_initiated_saml_sso_session_not_found_in_cookies:
      'ID-ul sesiunii SAML SSO inițiate de furnizorul de servicii nu a fost găsit în cookie-uri.',
    sp_initiated_saml_sso_session_not_found:
      'Sesiunea SAML SSO inițiată de furnizorul de servicii nu a fost găsită.',
    state_mismatch: '`state` nu corespunde.',
  },
};

export default Object.freeze(application);
