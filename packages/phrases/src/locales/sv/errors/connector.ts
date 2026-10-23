/* GetCertus addition (MPL-2.0, see GETCERTUS.md): admin console phrases. */
const connector = {
  general: 'Ett fel uppstod i anslutningen: {{errorDescription}}',
  not_found: 'Ingen tillgänglig anslutning hittades för typ: {{type}}.',
  not_enabled: 'Anslutningen är inte aktiverad.',
  invalid_metadata: 'Anslutningens metadata är ogiltiga.',
  invalid_config_guard: 'Anslutningens config guard är ogiltig.',
  unexpected_type: 'Anslutningens typ är oväntad.',
  invalid_request_parameters: 'Förfrågan har felaktiga indataparametrar.',
  insufficient_request_parameters: 'Förfrågan saknar kanske några indataparametrar.',
  invalid_config: 'Anslutningens konfiguration är ogiltig.',
  invalid_certificate:
    'Anslutningens certifikat är ogiltigt. Kontrollera att certifikatet är PEM-kodat.',
  invalid_response: 'Anslutningens svar är ogiltigt.',
  template_not_found: 'Det gick inte att hitta rätt mall i anslutningens konfiguration.',
  template_not_supported: 'Anslutningen stöder inte den här malltypen.',
  rate_limit_exceeded: 'Hastighetsgränsen har nåtts. Försök igen senare.',
  usage_limit_exceeded: 'Användningsgränsen för e-posttjänsten har nåtts.',
  not_implemented: '{{method}}: har inte implementerats ännu.',
  social_invalid_access_token: 'Anslutningens åtkomsttoken är ogiltig.',
  invalid_auth_code: 'Anslutningens auktoriseringskod är ogiltig.',
  social_invalid_id_token: 'Anslutningens ID-token är ogiltig.',
  authorization_failed: 'Användarens auktorisering misslyckades.',
  social_auth_code_invalid:
    'Det gick inte att hämta åtkomsttoken. Kontrollera auktoriseringskoden.',
  more_than_one_sms: 'Det finns mer än 1 sms-anslutning.',
  more_than_one_email: 'Det finns mer än 1 e-postanslutning.',
  more_than_one_connector_factory:
    'Flera anslutningsfabriker hittades (med id {{connectorIds}}). Du kan avinstallera de onödiga.',
  db_connector_type_mismatch: 'Det finns en anslutning i databasen vars typ inte stämmer.',
  not_found_with_connector_id:
    'Det går inte att hitta en anslutning med angivet standardanslutnings-ID.',
  multiple_instances_not_supported:
    'Det går inte att skapa flera instanser av den valda standardanslutningen.',
  invalid_type_for_syncing_profile: 'Du kan bara synka användarprofilen med sociala anslutningar.',
  can_not_modify_target: "Anslutningens 'target' kan inte ändras.",
  should_specify_target: "Du måste ange 'target'.",
  multiple_target_with_same_platform:
    'Du kan inte ha flera sociala anslutningar med samma target och plattform.',
  cannot_overwrite_metadata_for_non_standard_connector:
    "Den här anslutningens 'metadata' kan inte skrivas över.",
  email_connector: {
    bulk_deletion_no_filter:
      'Minst ett filtervillkor måste anges för massborttagning efter egenskaper. Egenskaper som stöds: {{properties, list(type:conjunction)}}.',
  },
  token_storage_not_supported: 'Den här anslutningen stöder inte tokenlagring. ',
};

export default Object.freeze(connector);
