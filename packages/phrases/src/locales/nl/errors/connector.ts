/* GetCertus addition (MPL-2.0, see GETCERTUS.md): admin console phrases. */
const connector = {
  general: 'Er is een fout opgetreden in de connector: {{errorDescription}}',
  not_found: 'Er is geen beschikbare connector gevonden voor type: {{type}}.',
  not_enabled: 'De connector is niet ingeschakeld.',
  invalid_metadata: 'De metadata van de connector zijn ongeldig.',
  invalid_config_guard: 'De config guard van de connector is ongeldig.',
  unexpected_type: 'Het type van de connector is onverwacht.',
  invalid_request_parameters: 'Het verzoek bevat onjuiste invoerparameter(s).',
  insufficient_request_parameters: 'Het verzoek mist mogelijk enkele invoerparameters.',
  invalid_config: 'De configuratie van de connector is ongeldig.',
  invalid_certificate:
    'Het certificaat van de connector is ongeldig; zorg dat het certificaat in PEM-codering is.',
  invalid_response: 'Het antwoord van de connector is ongeldig.',
  template_not_found: 'Het juiste sjabloon is niet gevonden in de connectorconfiguratie.',
  template_not_supported: 'De connector ondersteunt dit sjabloontype niet.',
  rate_limit_exceeded: 'Snelheidslimiet bereikt. Probeer het later opnieuw.',
  usage_limit_exceeded: 'De gebruikslimiet van de e-maildienst is bereikt.',
  not_implemented: '{{method}}: is nog niet geïmplementeerd.',
  social_invalid_access_token: 'Het toegangstoken van de connector is ongeldig.',
  invalid_auth_code: 'De autorisatiecode van de connector is ongeldig.',
  social_invalid_id_token: 'Het ID-token van de connector is ongeldig.',
  authorization_failed: 'Het autorisatieproces van de gebruiker is mislukt.',
  social_auth_code_invalid: 'Kan geen toegangstoken ophalen; controleer de autorisatiecode.',
  more_than_one_sms: 'Er is meer dan 1 sms-connector.',
  more_than_one_email: 'Er is meer dan 1 e-mailconnector.',
  more_than_one_connector_factory:
    "Meerdere connector-factory's gevonden (met id {{connectorIds}}); je kunt de overbodige verwijderen.",
  db_connector_type_mismatch:
    'Er staat een connector in de database waarvan het type niet overeenkomt.',
  not_found_with_connector_id:
    'Er is geen connector gevonden met de opgegeven standaard-connector-ID.',
  multiple_instances_not_supported:
    'Met de gekozen standaardconnector kunnen geen meerdere instanties worden gemaakt.',
  invalid_type_for_syncing_profile:
    'Je kunt het gebruikersprofiel alleen synchroniseren met social connectoren.',
  can_not_modify_target: "De 'target' van de connector kan niet worden gewijzigd.",
  should_specify_target: "Je moet een 'target' opgeven.",
  multiple_target_with_same_platform:
    'Je kunt niet meerdere social connectoren hebben met hetzelfde target en platform.',
  cannot_overwrite_metadata_for_non_standard_connector:
    "De 'metadata' van deze connector kunnen niet worden overschreven.",
  email_connector: {
    bulk_deletion_no_filter:
      'Er moet minstens één filtervoorwaarde worden opgegeven om in bulk op eigenschappen te verwijderen. Ondersteunde eigenschappen zijn: {{properties, list(type:conjunction)}}.',
  },
  token_storage_not_supported: 'Deze connector ondersteunt geen tokenopslag. ',
};

export default Object.freeze(connector);
