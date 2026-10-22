/* GetCertus addition (MPL-2.0, see GETCERTUS.md): admin console phrases. */
const enterprise_sso = {
  page_title: 'SSO pentru companii',
  title: 'SSO pentru companii',
  subtitle:
    'Conectați furnizorul de identitate al companiei și activați autentificarea unică (SSO).',
  create: 'Adăugați conector pentru companii',
  col_connector_name: 'Numele conectorului',
  col_type: 'Tip',
  col_email_domain: 'Domeniu de e-mail',
  placeholder_title: 'Conector pentru companii',
  placeholder_description:
    'GetCertus oferă mulți furnizori de identitate pentru companii integrați; puteți crea și propriii conectori cu protocoalele SAML și OIDC.',
  create_modal: {
    title: 'Adăugați conector pentru companii',
    text_divider: 'Sau personalizați conectorul cu un protocol standard.',
    connector_name_field_title: 'Numele conectorului',
    connector_name_field_placeholder: 'De ex. {nume companie} - {nume furnizor de identitate}',
    create_button_text: 'Creați conector',
  },
  guide: {
    subtitle: 'Un ghid pas cu pas pentru conectarea furnizorului de identitate al companiei.',
    finish_button_text: 'Continuați',
  },
  basic_info: {
    title: 'Configurați serviciul în IdP',
    description:
      'Creați o nouă integrare de aplicație cu SAML 2.0 în furnizorul de identitate {{name}}. Apoi lipiți în ea valoarea următoare.',
    saml: {
      acs_url_field_name: 'URL Assertion Consumer Service (Reply URL)',
      audience_uri_field_name: 'URI Audience (SP Entity ID)',
      entity_id_field_name: 'Entity ID al furnizorului de servicii (SP)',
      entity_id_field_tooltip:
        'SP Entity ID poate fi orice șir de caractere, de obicei un URI sau URL folosit ca identificator, dar nu este obligatoriu.',
      acs_url_field_placeholder: 'https://your-domain.com/api/saml/callback',
      entity_id_field_placeholder: 'urn:your-domain.com:sp:saml:{serviceProviderId}',
      sign_auth_request: 'Semnați cererea de autentificare',
      sign_auth_request_tooltip:
        'GetCertus semnează cererile de autentificare SAML cu un certificat generat. Activați doar dacă furnizorul de identitate este configurat să verifice cererile semnate.',
      signing_certificate_field_name: 'Certificat pentru semnarea cererilor',
      signing_keys_empty: 'Nu a fost generată nicio cheie de semnare.',
      generate_signing_key: 'Generați cheie nouă',
      signing_key_generated: 'Cheia de semnare a fost generată.',
      signing_key_activated: 'Cheia de semnare a fost activată.',
      signing_key_deactivated: 'Cheia de semnare a fost dezactivată.',
      signing_key_deleted: 'Cheia de semnare a fost ștearsă.',
      sign_auth_request_warning:
        'După activare, generați mai jos o cheie de semnare și înregistrați certificatul ei la furnizorul de identitate (și activați acolo verificarea cererilor semnate). Până la înregistrarea certificatului, autentificarea prin această conexiune va eșua.',
    },
    oidc: {
      redirect_uri_field_name: 'URI de redirecționare (URL de callback)',
      redirect_uri_field_description:
        'URI-ul de redirecționare este adresa la care utilizatorii sunt trimiși după autentificarea SSO. Adăugați acest URI în configurația IdP-ului.',
      redirect_uri_field_custom_domain_description:
        'Dacă folosiți mai multe <a>domenii personalizate</a> în GetCertus, adăugați toate URI-urile de callback corespunzătoare în IdP, ca SSO să funcționeze pe fiecare domeniu.\n\nDomeniul implicit GetCertus (*.logto.app) este mereu valid — includeți-l doar dacă doriți să permiteți și SSO prin acel domeniu.',
    },
  },
  attribute_mapping: {
    title: 'Mapări de atribute',
    description:
      '`id` și `email` sunt necesare pentru sincronizarea profilului utilizatorului din IdP. Introduceți numele și valoarea claim-ului următor în IdP.',
    col_sp_claims: 'Valoarea furnizorului de servicii (GetCertus)',
    col_idp_claims: 'Numele claim-ului furnizorului de identitate',
    idp_claim_tooltip: 'Numele claim-ului furnizorului de identitate',
  },
  metadata: {
    title: 'Configurați metadatele IdP',
    description: 'Configurați metadatele furnizorului de identitate',
    dropdown_trigger_text: 'Folosiți altă metodă de configurare',
    dropdown_title: 'selectați metoda de configurare',
    metadata_format_url: 'Introduceți URL-ul metadatelor',
    metadata_format_xml: 'Încărcați fișierul XML cu metadate',
    metadata_format_manual: 'Introduceți manual metadatele',
    saml: {
      metadata_url_field_name: 'URL metadate',
      metadata_url_description:
        'Preluați dinamic datele de la URL-ul metadatelor și păstrați certificatul actualizat.',
      metadata_xml_field_name: 'Fișier XML cu metadatele IdP',
      metadata_xml_uploader_text: 'Încărcați fișierul XML cu metadate',
      sign_in_endpoint_field_name: 'URL de autentificare',
      idp_entity_id_field_name: 'Entity ID IdP (Issuer)',
      certificate_field_name: 'Certificat de semnare',
      certificate_placeholder: 'Copiați și lipiți certificatul x509',
      certificate_required: 'Certificatul de semnare este obligatoriu.',
    },
    oidc: {
      client_id_field_name: 'ID client',
      client_secret_field_name: 'Secret client',
      issuer_field_name: 'Emitent',
      scope_field_name: 'Scope',
      scope_field_placeholder: 'Introduceți scopes (separate prin spațiu)',
    },
  },
};

export default Object.freeze(enterprise_sso);
