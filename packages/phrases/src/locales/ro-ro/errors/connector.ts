/* GetCertus addition (MPL-2.0, see GETCERTUS.md): admin console phrases. */
const connector = {
  general: 'A apărut o eroare în conector: {{errorDescription}}',
  not_found: 'Nu s-a găsit niciun conector disponibil pentru tipul: {{type}}.',
  not_enabled: 'Conectorul nu este activat.',
  invalid_metadata: 'Metadatele conectorului nu sunt valide.',
  invalid_config_guard: 'Config guard-ul conectorului nu este valid.',
  unexpected_type: 'Tipul conectorului este neașteptat.',
  invalid_request_parameters: 'Cererea are parametri de intrare greșiți.',
  insufficient_request_parameters:
    'Este posibil ca cererii să îi lipsească unii parametri de intrare.',
  invalid_config: 'Configurația conectorului nu este validă.',
  invalid_certificate:
    'Certificatul conectorului nu este valid; asigură-te că certificatul este codificat PEM.',
  invalid_response: 'Răspunsul conectorului nu este valid.',
  template_not_found: 'Nu s-a găsit șablonul corect în configurația conectorului.',
  template_not_supported: 'Conectorul nu acceptă acest tip de șablon.',
  rate_limit_exceeded: 'Limita de frecvență a fost atinsă. Încearcă din nou mai târziu.',
  usage_limit_exceeded: 'Limita de utilizare a serviciului de e-mail a fost atinsă.',
  not_implemented: '{{method}}: nu a fost încă implementat.',
  social_invalid_access_token: 'Tokenul de acces al conectorului nu este valid.',
  invalid_auth_code: 'Codul de autorizare al conectorului nu este valid.',
  social_invalid_id_token: 'Tokenul ID al conectorului nu este valid.',
  authorization_failed: 'Procesul de autorizare al utilizatorului nu a reușit.',
  social_auth_code_invalid: 'Nu s-a putut obține tokenul de acces; verifică codul de autorizare.',
  more_than_one_sms: 'Există mai mult de 1 conector SMS.',
  more_than_one_email: 'Există mai mult de 1 conector de e-mail.',
  more_than_one_connector_factory:
    'S-au găsit mai multe fabrici de conectori (cu id {{connectorIds}}); le poți dezinstala pe cele inutile.',
  db_connector_type_mismatch: 'Există în baza de date un conector al cărui tip nu corespunde.',
  not_found_with_connector_id: 'Nu s-a găsit conectorul cu ID-ul de conector standard indicat.',
  multiple_instances_not_supported:
    'Nu se pot crea mai multe instanțe ale conectorului standard ales.',
  invalid_type_for_syncing_profile:
    'Poți sincroniza profilul utilizatorului doar cu conectori sociali.',
  can_not_modify_target: "'target' al conectorului nu poate fi modificat.",
  should_specify_target: "Trebuie să specifici 'target'.",
  multiple_target_with_same_platform:
    'Nu poți avea mai mulți conectori sociali cu același target și aceeași platformă.',
  cannot_overwrite_metadata_for_non_standard_connector:
    "'metadata' ale acestui conector nu pot fi suprascrise.",
  email_connector: {
    bulk_deletion_no_filter:
      'Pentru ștergerea în masă după proprietăți trebuie furnizată cel puțin o condiție de filtrare. Proprietățile acceptate sunt: {{properties, list(type:conjunction)}}.',
  },
  token_storage_not_supported: 'Acest conector nu acceptă stocarea tokenurilor. ',
};

export default Object.freeze(connector);
