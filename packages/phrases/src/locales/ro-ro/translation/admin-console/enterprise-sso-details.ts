/* GetCertus addition (MPL-2.0, see GETCERTUS.md): admin console phrases. */
const enterprise_sso_details = {
  back_to_sso_connectors: 'Înapoi la SSO pentru companii',
  page_title: 'Detalii conector SSO pentru companii',
  readme_drawer_title: 'SSO pentru companii',
  readme_drawer_subtitle:
    'Configurați conectori SSO pentru companii pentru a permite SSO utilizatorilor finali',
  tab_experience: 'Experiența SSO',
  tab_connection: 'Conexiune',
  tab_idp_initiated_auth: 'SSO inițiat de IdP',
  general_settings_title: 'General',
  general_settings_description:
    'Configurați experiența utilizatorului final și asociați domeniul de e-mail al companiei pentru fluxul SSO inițiat de SP.',
  custom_branding_title: 'Afișare',
  custom_branding_description:
    'Personalizați numele și logoul afișate utilizatorilor finali în fluxul de autentificare unică. Dacă sunt goale, se folosesc valorile implicite.',
  email_domain_field_name: 'Domenii de e-mail ale companiei',
  email_domain_field_description:
    'Utilizatorii cu aceste domenii de e-mail se pot autentifica prin SSO. Verificați proprietatea domeniului înainte de a-l adăuga.',
  email_domain_field_placeholder:
    'Introduceți unul sau mai multe domenii de e-mail (de ex. compania-ta.ro)',
  sync_profile_field_name: 'Sincronizați informațiile de profil de la furnizorul de identitate',
  sync_profile_option: {
    register_only: 'Sincronizați doar la prima autentificare',
    each_sign_in: 'Sincronizați la fiecare autentificare',
  },
  connector_name_field_name: 'Numele conectorului',
  display_name_field_name: 'Nume afișat',
  connector_logo_field_name: 'Logo afișat',
  connector_logo_field_description:
    'Fiecare imagine trebuie să aibă sub 500 KB; doar SVG, PNG, JPG, JPEG.',
  branding_logo_context: 'Încărcați logoul',
  branding_logo_error: 'Eroare la încărcarea logoului: {{error}}',
  branding_light_logo_context: 'Încărcați logoul pentru modul luminos',
  branding_light_logo_error: 'Eroare la încărcarea logoului pentru modul luminos: {{error}}',
  branding_logo_field_name: 'Logo',
  branding_logo_field_placeholder: 'https://your.domain/logo.png',
  branding_dark_logo_context: 'Încărcați logoul pentru modul întunecat',
  branding_dark_logo_error: 'Eroare la încărcarea logoului pentru modul întunecat: {{error}}',
  branding_dark_logo_field_name: 'Logo (mod întunecat)',
  branding_dark_logo_field_placeholder: 'https://your.domain/dark-mode-logo.png',
  check_connection_guide: 'Ghid de conectare',
  enterprise_sso_deleted: 'Conectorul SSO pentru companii a fost șters',
  delete_confirm_modal_title: 'Ștergeți conectorul SSO pentru companii',
  delete_confirm_modal_content:
    'Sigur doriți să ștergeți acest conector pentru companii? Utilizatorii furnizorilor de identitate nu vor mai putea folosi autentificarea unică.',
  upload_idp_metadata_title_saml: 'Încărcați metadatele',
  upload_idp_metadata_description_saml:
    'Configurați metadatele copiate de la furnizorul de identitate.',
  upload_idp_metadata_title_oidc: 'Încărcați datele de acces',
  upload_idp_metadata_description_oidc:
    'Configurați datele de acces și informațiile despre tokenul OIDC copiate de la furnizorul de identitate.',
  upload_idp_metadata_button_text: 'Încărcați fișierul XML cu metadate',
  upload_signing_certificate_button_text: 'Încărcați fișierul cu certificatul de semnare',
  configure_domain_field_info_text:
    'Adăugați domeniul de e-mail pentru a direcționa utilizatorii companiei către furnizorul lor de identitate pentru autentificare unică.',
  email_domain_field_required:
    'Domeniul de e-mail este necesar pentru a activa SSO pentru companii.',
  upload_saml_idp_metadata_info_text_url:
    'Lipiți URL-ul metadatelor de la furnizorul de identitate pentru a vă conecta.',
  upload_saml_idp_metadata_info_text_xml:
    'Lipiți metadatele de la furnizorul de identitate pentru a vă conecta.',
  upload_saml_idp_metadata_info_text_manual:
    'Completați metadatele de la furnizorul de identitate pentru a vă conecta.',
  upload_oidc_idp_info_text:
    'Completați informațiile de la furnizorul de identitate pentru a vă conecta.',
  service_provider_property_title: 'Configurați în IdP',
  service_provider_property_description:
    'Configurați o integrare de aplicație cu {{protocol}} în furnizorul de identitate. Introduceți detaliile oferite de GetCertus.',
  attribute_mapping_title: 'Mapări de atribute',
  attribute_mapping_description:
    'Sincronizați profilurile utilizatorilor de la furnizorul de identitate configurând maparea atributelor fie la furnizorul de identitate, fie în GetCertus.',
  saml_preview: {
    sign_on_url: 'URL de autentificare',
    entity_id: 'Emitent',
    x509_certificate: 'Certificat de semnare',
    certificate_content: 'Expiră {{date}}',
  },
  oidc_preview: {
    authorization_endpoint: 'Endpoint de autorizare',
    token_endpoint: 'Endpoint pentru tokenuri',
    userinfo_endpoint: 'Endpoint pentru informații despre utilizator',
    jwks_uri: 'Endpoint pentru JSON Web Key Set',
    issuer: 'Emitent',
  },
  idp_initiated_auth_config: {
    card_title: 'SSO inițiat de IdP',
    card_description:
      'De obicei utilizatorii pornesc autentificarea din aplicația dvs. prin fluxul SSO inițiat de SP. NU activați această funcție decât dacă este absolut necesar.',
    enable_idp_initiated_sso: 'Activați SSO inițiat de IdP',
    enable_idp_initiated_sso_description:
      'Permiteți utilizatorilor companiei să pornească autentificarea direct din portalul furnizorului de identitate. Înțelegeți riscurile de securitate posibile înainte de a activa această funcție.',
    default_application: 'Aplicația implicită',
    default_application_tooltip:
      'Aplicația țintă către care utilizatorul va fi redirecționat după autentificare.',
    empty_applications_error:
      'Nu s-au găsit aplicații. Adăugați una în secțiunea <a>Aplicații</a>.',
    empty_applications_placeholder: 'Nicio aplicație',
    authentication_type: 'Tip de autentificare',
    auto_authentication_disabled_title: 'Redirecționați către client pentru SSO inițiat de SP',
    auto_authentication_disabled_description:
      'Recomandat. Redirecționați utilizatorii către aplicația client pentru a porni o autentificare OIDC sigură, inițiată de SP. Astfel se previn atacurile CSRF.',
    auto_authentication_enabled_title: 'Autentificare directă prin SSO inițiat de IdP',
    auto_authentication_enabled_description:
      'După autentificarea reușită, utilizatorii vor fi redirecționați la URI-ul de redirecționare specificat cu codul de autorizare (fără validare state și PKCE).',
    auto_authentication_disabled_app:
      'Pentru aplicații web tradiționale și aplicații cu o singură pagină (SPA)',
    auto_authentication_enabled_app: 'Pentru aplicații web tradiționale',
    idp_initiated_auth_callback_uri: 'URI de callback al clientului',
    idp_initiated_auth_callback_uri_tooltip:
      'URI-ul de callback al clientului pentru pornirea unui flux de autentificare SSO inițiat de SP. Un ssoConnectorId va fi adăugat la URI ca parametru de interogare. (de ex. https://your.domain/sso/callback?connectorId={{ssoConnectorId}})',
    redirect_uri: 'URI de redirecționare după autentificare',
    redirect_uri_tooltip:
      'URI-ul la care sunt redirecționați utilizatorii după autentificarea reușită. GetCertus va folosi acest URI ca URI de redirecționare OIDC în cererea de autorizare. Pentru mai multă securitate, folosiți un URI dedicat pentru fluxul SSO inițiat de IdP.',
    empty_redirect_uris_error:
      'Nu a fost înregistrat niciun URI de redirecționare pentru aplicație. Adăugați unul mai întâi.',
    redirect_uri_placeholder: 'Selectați un URI de redirecționare după autentificare',
    auth_params: 'Parametri suplimentari de autentificare',
    auth_params_tooltip:
      'Parametri suplimentari transmiși în cererea de autorizare. Implicit se solicită doar scopes (openid profile); aici puteți specifica scopes suplimentare sau o valoare state exclusivă. (de ex. { "scope": "organizations email", "state": "secret_state" }).',
  },
  trust_unverified_email: 'Aveți încredere în e-mailurile neverificate',
  trust_unverified_email_label:
    'Aveți mereu încredere în adresele de e-mail neverificate primite de la furnizorul de identitate',
  trust_unverified_email_tip:
    'Conectorul Entra ID (OIDC) nu returnează claim-ul `email_verified`, deci adresele de e-mail din Azure nu sunt garantat verificate. Implicit, GetCertus nu sincronizează adresele de e-mail neverificate în profilul utilizatorului. Activați această opțiune doar dacă aveți încredere în toate adresele de e-mail din directorul Entra ID.',
  trust_unverified_email_tip_oidc:
    'Conectorul OIDC poate să nu returneze claim-ul `email_verified`, deci adresele de e-mail de la furnizorul de identitate nu sunt garantat verificate. Implicit, GetCertus nu sincronizează adresele de e-mail neverificate în profilul utilizatorului. Activați această opțiune doar dacă aveți încredere în toate adresele de e-mail de la furnizorul de identitate.',
  offline_access: {
    label: 'Reîmprospătați tokenul de acces',
    description:
      'Activați accesul Google `offline` pentru a solicita un token de reîmprospătare, astfel încât aplicația să poată reîmprospăta tokenul de acces fără o nouă autorizare din partea utilizatorului.',
  },
};

export default Object.freeze(enterprise_sso_details);
