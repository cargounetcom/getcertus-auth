/* GetCertus addition (MPL-2.0, see GETCERTUS.md): admin console phrases. */
const connector_details = {
  page_title: 'Details connector',
  back_to_connectors: 'Terug naar connectors',
  check_readme: 'README bekijken',
  settings: 'Algemene instellingen',
  settings_description:
    'Integreer providers van derden voor snel sociaal inloggen en het koppelen van sociale accounts',
  setting_description_with_token_storage_supported:
    'Integreer providers van derden voor snel sociaal inloggen, het koppelen van sociale accounts en API-toegang.',
  email_connector_settings_description:
    'Koppel je e-mailprovider om eindgebruikers wachtwoordloos te laten registreren en inloggen via e-mail.',
  parameter_configuration: 'Parameterconfiguratie',
  test_connection: 'Testen',
  save_error_empty_config: 'Voer een configuratie in',
  send: 'Verzenden',
  send_error_invalid_format: 'Ongeldige invoer',
  edit_config_label: 'Voer hier je JSON in',
  test_email_sender: 'Test je e-mailconnector',
  test_sms_sender: 'Test je sms-connector',
  test_email_placeholder: 'john.doe@example.com',
  test_sms_placeholder: '+1 555-123-4567',
  test_message_sent: 'Testbericht verzonden',
  test_sender_description:
    'GetCertus gebruikt het sjabloon "Generic" om te testen. Je ontvangt een bericht als je connector goed is geconfigureerd.',
  options_change_email: 'E-mailconnector wijzigen',
  options_change_sms: 'Sms-connector wijzigen',
  connector_deleted: 'De connector is verwijderd',
  type_email: 'E-mailconnector',
  type_sms: 'Sms-connector',
  type_social: 'Sociale connector',
  in_used_social_deletion_description:
    'Deze connector wordt gebruikt in je inlogervaring. Als je hem verwijdert, wordt de inlogoptie <name/> uit de instellingen van de inlogervaring verwijderd. Wil je hem later weer toevoegen, dan moet je hem opnieuw configureren.',
  in_used_passwordless_deletion_description:
    'Deze {{name}} wordt gebruikt in je inlogervaring. Als je hem verwijdert, werkt je inlogervaring niet goed totdat je het conflict oplost. Wil je hem later weer toevoegen, dan moet je hem opnieuw configureren.',
  deletion_description:
    'Je verwijdert deze connector. Dit kan niet ongedaan worden gemaakt; als je hem later weer wilt toevoegen, moet je hem opnieuw configureren.',
  logto_email: {
    total_email_sent: 'Totaal verzonden e-mails: {{value, number}}',
    total_email_sent_tip:
      'GetCertus gebruikt SendGrid voor veilige en stabiele ingebouwde e-mail. Gebruik is volledig gratis. <a>Meer informatie</a>',
    hosted_email_usage: {
      daily: 'Dagelijks <value>{{usage, number}}</value> / {{limit, number}}',
      daily_unlimited: 'Dagelijks <value>{{usage, number}}</value>',
      monthly: 'Maandelijks <value>{{usage, number}}</value> / {{limit, number}}',
      monthly_unlimited: 'Maandelijks <value>{{usage, number}}</value>',
      tip: 'Gratis en ontwikkelplannen hebben dagelijkse en maandelijkse limieten voor de ingebouwde e-mailservice.',
      banner: {
        approaching:
          'Je nadert de verzendlimiet van de ingebouwde e-mailservice van GetCertus. <provider>Koppel je eigen e-mailprovider</provider> of <upgrade>upgrade je plan</upgrade> om de ingebouwde e-mailservice te blijven gebruiken.',
        reached:
          'Je hebt de verzendlimiet van de ingebouwde e-mailservice van GetCertus bereikt; inlogmails kunnen hierdoor uitvallen. <provider>Koppel je eigen e-mailprovider</provider> of <upgrade>upgrade je plan</upgrade> om de ingebouwde e-mailservice te blijven gebruiken.',
      },
    },
    email_template_title: 'E-mailsjabloon',
    template_description:
      'Ingebouwde e-mail gebruikt standaardsjablonen voor het versturen van verificatiemails. Configuratie is niet nodig; je kunt basisgegevens van je merk aanpassen.',
    template_description_link_text: 'Sjablonen bekijken',
    description_action_text: 'Sjablonen bekijken',
    from_email_field: 'Afzenderadres',
    sender_name_field: 'Naam afzender',
    sender_name_tip:
      'Pas de naam van de afzender aan. Als je dit leeg laat, wordt "Verification" als standaardnaam gebruikt.',
    sender_name_placeholder: 'Naam van je afzender',
    company_information_field: 'Bedrijfsgegevens',
    company_information_description:
      'Toon je bedrijfsnaam, adres of postcode onderaan e-mails voor meer betrouwbaarheid.',
    company_information_placeholder: 'Basisgegevens van je bedrijf',
    email_logo_field: 'E-maillogo',
    email_logo_tip:
      'Toon je merklogo bovenaan e-mails. Gebruik dezelfde afbeelding voor de lichte en de donkere modus.',
    urls_not_allowed: "URL's zijn niet toegestaan",
    test_notes: 'GetCertus gebruikt het sjabloon “Generic” om te testen.',
  },
  google_one_tap: {
    title: 'Google One Tap',
    description:
      'Google One Tap is een veilige en eenvoudige manier voor gebruikers om in te loggen op je website.',
    enable_google_one_tap: 'Google One Tap inschakelen',
    enable_google_one_tap_description:
      'Schakel Google One Tap in je inlogervaring in: gebruikers die op hun apparaat al zijn ingelogd bij Google, kunnen zich snel registreren of inloggen met hun Google-account.',
    configure_google_one_tap: 'Google One Tap configureren',
    auto_select: 'Indien mogelijk automatisch inloggegevens kiezen',
    close_on_tap_outside: 'De prompt annuleren als de gebruiker erbuiten klikt/tikt',
    itp_support: '<a>Verbeterde One Tap-UX in ITP-browsers</a> inschakelen',
  },
  sign_in_experience: {
    in_use: 'Ingeschakeld voor inloggen ',
    not_in_use: 'Uitgeschakeld voor inloggen ',
  },
  email_logs: {
    title: 'E-maillogboek',
    time: 'Tijd',
    recipient: 'Ontvanger',
    recipient_placeholder: 'Zoeken op volledig adres van de ontvanger',
    template_type: 'Type sjabloon',
    status: 'Status',
    status_sent: 'Verzonden',
    status_failed: 'Mislukt',
    language_tag: 'Taal',
    provider_message_id: 'Bericht-ID van provider',
  },
};

export default Object.freeze(connector_details);
