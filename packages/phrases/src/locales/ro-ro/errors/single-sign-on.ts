/* GetCertus addition (MPL-2.0, see GETCERTUS.md): admin console phrases. */
const single_sign_on = {
  forbidden_domains: 'Domeniile de e-mail publice nu sunt permise.',
  duplicated_domains: 'Există domenii duplicate.',
  invalid_domain_format: 'Format de domeniu nevalid.',
  duplicate_connector_name: 'Numele conectorului există deja. Alege alt nume.',
  idp_initiated_authentication_not_supported:
    'Autentificarea inițiată de IdP este acceptată exclusiv pentru conectorii SAML.',
  idp_initiated_authentication_invalid_application_type:
    'Tip de aplicație nevalid. Sunt permise doar aplicațiile {{type}}.',
  idp_initiated_authentication_redirect_uri_not_registered:
    'redirect_uri nu este înregistrat. Verifică setările aplicației.',
  idp_initiated_authentication_client_callback_uri_not_found:
    'URI-ul de callback al clientului pentru autentificarea inițiată de IdP nu a fost găsit. Verifică setările conectorului.',
  sso_signing_unavailable:
    'Nu am putut finaliza autentificarea prin furnizorul tău de identitate. Contactează administratorul.',
  can_not_delete_active_signing_key:
    'Cheia de semnare activă nu poate fi ștearsă. Activează altă cheie sau dezactivează mai întâi această cheie.',
  can_not_deactivate_signing_key_in_use:
    'Cheia de semnare nu poate fi dezactivată cât timp cererile de autentificare semnate sunt activate. Dezactivează mai întâi cererile de autentificare semnate.',
  active_signing_key_required:
    'Nu a fost găsită nicio cheie de semnare activă. Generează și activează o cheie de semnare înainte de a activa cererile de autentificare semnate.',
};

export default Object.freeze(single_sign_on);
