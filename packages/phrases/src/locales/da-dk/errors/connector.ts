/* GetCertus addition (MPL-2.0, see GETCERTUS.md): admin console phrases. */
const connector = {
  general: 'Der opstod en fejl i connectoren: {{errorDescription}}',
  not_found: 'Kan ikke finde nogen tilgængelig connector af typen: {{type}}.',
  not_enabled: 'Connectoren er ikke slået til.',
  invalid_metadata: 'Connectorens metadata er ugyldige.',
  invalid_config_guard: 'Connectorens config guard er ugyldig.',
  unexpected_type: 'Connectorens type er uventet.',
  invalid_request_parameters: 'Anmodningen har forkerte inputparametre.',
  insufficient_request_parameters: 'Anmodningen mangler muligvis nogle inputparametre.',
  invalid_config: 'Connectorens konfiguration er ugyldig.',
  invalid_certificate:
    'Connectorens certifikat er ugyldigt. Sørg for, at certifikatet er PEM-kodet.',
  invalid_response: 'Connectorens svar er ugyldigt.',
  template_not_found: 'Kan ikke finde den rigtige skabelon i connectorens konfiguration.',
  template_not_supported: 'Connectoren understøtter ikke denne skabelontype.',
  rate_limit_exceeded: 'Hastighedsgrænsen er nået. Prøv igen senere.',
  usage_limit_exceeded: 'E-mailtjenestens forbrugsgrænse er nået.',
  not_implemented: '{{method}}: er ikke implementeret endnu.',
  social_invalid_access_token: 'Connectorens adgangstoken er ugyldigt.',
  invalid_auth_code: 'Connectorens autorisationskode er ugyldig.',
  social_invalid_id_token: 'Connectorens ID-token er ugyldigt.',
  authorization_failed: 'Brugerens autorisation mislykkedes.',
  social_auth_code_invalid: 'Kan ikke hente adgangstoken. Kontrollér autorisationskoden.',
  more_than_one_sms: 'Der er mere end 1 sms-connector.',
  more_than_one_email: 'Der er mere end 1 e-mailconnector.',
  more_than_one_connector_factory:
    'Der blev fundet flere connector-factories (med id {{connectorIds}}). Du kan afinstallere de overflødige.',
  db_connector_type_mismatch: 'Der er en connector i databasen, hvis type ikke stemmer overens.',
  not_found_with_connector_id: 'Kan ikke finde en connector med det angivne standard-connector-ID.',
  multiple_instances_not_supported:
    'Kan ikke oprette flere instanser af den valgte standardconnector.',
  invalid_type_for_syncing_profile:
    'Du kan kun synkronisere brugerprofilen med sociale connectorer.',
  can_not_modify_target: "Connectorens 'target' kan ikke ændres.",
  should_specify_target: "Du skal angive 'target'.",
  multiple_target_with_same_platform:
    'Du kan ikke have flere sociale connectorer med samme target og platform.',
  cannot_overwrite_metadata_for_non_standard_connector:
    "Denne connectors 'metadata' kan ikke overskrives.",
  email_connector: {
    bulk_deletion_no_filter:
      'Der skal angives mindst én filterbetingelse for at udføre massesletning efter egenskaber. Understøttede egenskaber er: {{properties, list(type:conjunction)}}.',
  },
  token_storage_not_supported: 'Denne connector understøtter ikke tokenlagring. ',
};

export default Object.freeze(connector);
