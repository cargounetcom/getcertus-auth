/* GetCertus addition (MPL-2.0, see GETCERTUS.md): admin console phrases. */
const connector_details = {
  page_title: 'Detaljer for connector',
  back_to_connectors: 'Tilbage til connectorer',
  check_readme: 'Se README',
  settings: 'Generelle indstillinger',
  settings_description:
    'Integrér tredjepartsudbydere til hurtig social login og sammenkædning af sociale konti',
  setting_description_with_token_storage_supported:
    'Integrér tredjepartsudbydere til hurtig social login, sammenkædning af sociale konti og API-adgang.',
  email_connector_settings_description:
    'Integrér med din e-mailudbyder, så slutbrugere kan registrere sig og logge ind adgangskodefrit via e-mail.',
  parameter_configuration: 'Parameterkonfiguration',
  test_connection: 'Test',
  save_error_empty_config: 'Indtast en konfiguration',
  send: 'Send',
  send_error_invalid_format: 'Ugyldigt input',
  edit_config_label: 'Indtast din JSON her',
  test_email_sender: 'Test din e-mail-connector',
  test_sms_sender: 'Test din sms-connector',
  test_email_placeholder: 'john.doe@example.com',
  test_sms_placeholder: '+1 555-123-4567',
  test_message_sent: 'Testbesked sendt',
  test_sender_description:
    'GetCertus bruger skabelonen "Generic" til test. Du modtager en besked, hvis din connector er korrekt konfigureret.',
  options_change_email: 'Skift e-mail-connector',
  options_change_sms: 'Skift sms-connector',
  connector_deleted: 'Connectoren er slettet',
  type_email: 'E-mail-connector',
  type_sms: 'Sms-connector',
  type_social: 'Social connector',
  in_used_social_deletion_description:
    'Connectoren bruges i din loginoplevelse. Hvis du sletter den, fjernes login med <name/> fra indstillingerne for loginoplevelsen. Du skal konfigurere den igen, hvis du vil tilføje den igen.',
  in_used_passwordless_deletion_description:
    'Denne {{name}} bruges i din loginoplevelse. Hvis du sletter den, virker loginoplevelsen ikke korrekt, før du har løst konflikten. Du skal konfigurere den igen, hvis du vil tilføje den igen.',
  deletion_description:
    'Du fjerner denne connector. Det kan ikke fortrydes, og du skal konfigurere den igen, hvis du vil tilføje den igen.',
  logto_email: {
    total_email_sent: 'E-mails sendt i alt: {{value, number}}',
    total_email_sent_tip:
      'GetCertus bruger SendGrid til sikker og stabil indbygget e-mail. Den er helt gratis at bruge. <a>Læs mere</a>',
    hosted_email_usage: {
      daily: 'Dagligt <value>{{usage, number}}</value> / {{limit, number}}',
      daily_unlimited: 'Dagligt <value>{{usage, number}}</value>',
      monthly: 'Månedligt <value>{{usage, number}}</value> / {{limit, number}}',
      monthly_unlimited: 'Månedligt <value>{{usage, number}}</value>',
      tip: 'Gratis- og udviklingsplaner har daglige og månedlige grænser for den indbyggede e-mailtjeneste.',
      banner: {
        approaching:
          "Du nærmer dig sendegrænsen for GetCertus' indbyggede e-mailtjeneste. <provider>Forbind din egen e-mailudbyder</provider>, eller <upgrade>opgrader din plan</upgrade> for at blive ved med at bruge den indbyggede e-mailtjeneste.",
        reached:
          "Du har nået sendegrænsen for GetCertus' indbyggede e-mailtjeneste, hvilket kan afbryde login-mails. <provider>Forbind din egen e-mailudbyder</provider>, eller <upgrade>opgrader din plan</upgrade> for at blive ved med at bruge den indbyggede e-mailtjeneste.",
      },
    },
    email_template_title: 'E-mailskabelon',
    template_description:
      'Den indbyggede e-mail bruger standardskabeloner til problemfri levering af bekræftelsesmails. Ingen konfiguration er nødvendig, og du kan tilpasse grundlæggende brandoplysninger.',
    template_description_link_text: 'Se skabeloner',
    description_action_text: 'Se skabeloner',
    from_email_field: 'Afsenderadresse',
    sender_name_field: 'Afsendernavn',
    sender_name_tip:
      'Tilpas afsendernavnet for e-mails. Hvis feltet er tomt, bruges "Verification" som standardnavn.',
    sender_name_placeholder: 'Dit afsendernavn',
    company_information_field: 'Virksomhedsoplysninger',
    company_information_description:
      'Vis virksomhedens navn, adresse eller postnummer nederst i e-mails for øget troværdighed.',
    company_information_placeholder: 'Grundlæggende oplysninger om din virksomhed',
    email_logo_field: 'E-mail-logo',
    email_logo_tip:
      'Vis dit logo øverst i e-mails. Brug det samme billede til lys og mørk tilstand.',
    urls_not_allowed: "URL'er er ikke tilladt",
    test_notes: 'GetCertus bruger skabelonen “Generic” til test.',
  },
  google_one_tap: {
    title: 'Google One Tap',
    description: 'Google One Tap er en sikker og nem måde for brugere at logge ind på dit websted.',
    enable_google_one_tap: 'Aktivér Google One Tap',
    enable_google_one_tap_description:
      'Aktivér Google One Tap i din loginoplevelse: lad brugere, der allerede er logget ind på deres enhed, hurtigt tilmelde sig eller logge ind med deres Google-konto.',
    configure_google_one_tap: 'Konfigurér Google One Tap',
    auto_select: 'Vælg loginoplysninger automatisk, hvis muligt',
    close_on_tap_outside: 'Annullér prompten, hvis brugeren klikker/trykker udenfor',
    itp_support: 'Aktivér <a>forbedret One Tap-UX i ITP-browsere</a>',
  },
  sign_in_experience: {
    in_use: 'Aktiveret til login ',
    not_in_use: 'Deaktiveret til login ',
  },
  email_logs: {
    title: 'E-maillogs',
    time: 'Tidspunkt',
    recipient: 'Modtager',
    recipient_placeholder: 'Søg på modtagerens fulde adresse',
    template_type: 'Skabelontype',
    status: 'Status',
    status_sent: 'Sendt',
    status_failed: 'Mislykkedes',
    language_tag: 'Sprog',
    provider_message_id: 'Udbyderens besked-ID',
  },
};

export default Object.freeze(connector_details);
