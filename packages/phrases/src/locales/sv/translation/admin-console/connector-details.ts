/* GetCertus addition (MPL-2.0, see GETCERTUS.md): admin console phrases. */
const connector_details = {
  page_title: 'Detaljer för koppling',
  back_to_connectors: 'Tillbaka till kopplingar',
  check_readme: 'Läs README',
  settings: 'Allmänna inställningar',
  settings_description:
    'Integrera tredjepartsleverantörer för snabb social inloggning och länkning av sociala konton',
  setting_description_with_token_storage_supported:
    'Integrera tredjepartsleverantörer för snabb social inloggning, länkning av sociala konton och API-åtkomst.',
  email_connector_settings_description:
    'Integrera med din e-postleverantör för att slutanvändare ska kunna registrera sig och logga in lösenordsfritt via e-post.',
  parameter_configuration: 'Parameterkonfiguration',
  test_connection: 'Testa',
  save_error_empty_config: 'Ange en konfiguration',
  send: 'Skicka',
  send_error_invalid_format: 'Ogiltig inmatning',
  edit_config_label: 'Ange din JSON här',
  test_email_sender: 'Testa din e-postkoppling',
  test_sms_sender: 'Testa din sms-koppling',
  test_email_placeholder: 'john.doe@example.com',
  test_sms_placeholder: '+1 555-123-4567',
  test_message_sent: 'Testmeddelandet har skickats',
  test_sender_description:
    'GetCertus använder mallen "Generic" för test. Du får ett meddelande om kopplingen är rätt konfigurerad.',
  options_change_email: 'Byt e-postkoppling',
  options_change_sms: 'Byt sms-koppling',
  connector_deleted: 'Kopplingen har tagits bort',
  type_email: 'E-postkoppling',
  type_sms: 'Sms-koppling',
  type_social: 'Social koppling',
  in_used_social_deletion_description:
    'Kopplingen används i din inloggningsupplevelse. Om du tar bort den tas inloggningen med <name/> bort från inställningarna för inloggningsupplevelsen. Du behöver konfigurera om den om du vill lägga till den igen.',
  in_used_passwordless_deletion_description:
    'Denna {{name}} används i din inloggningsupplevelse. Om du tar bort den fungerar inloggningen inte korrekt förrän du löst konflikten. Du behöver konfigurera om den om du vill lägga till den igen.',
  deletion_description:
    'Du tar bort den här kopplingen. Det kan inte ångras, och du behöver konfigurera om den om du vill lägga till den igen.',
  logto_email: {
    total_email_sent: 'Totalt skickade e-postmeddelanden: {{value, number}}',
    total_email_sent_tip:
      'GetCertus använder SendGrid för säker och stabil inbyggd e-post. Den är helt gratis att använda. <a>Läs mer</a>',
    hosted_email_usage: {
      daily: 'Dagligen <value>{{usage, number}}</value> / {{limit, number}}',
      daily_unlimited: 'Dagligen <value>{{usage, number}}</value>',
      monthly: 'Månadsvis <value>{{usage, number}}</value> / {{limit, number}}',
      monthly_unlimited: 'Månadsvis <value>{{usage, number}}</value>',
      tip: 'Gratis- och utvecklingsplanerna har dagliga och månatliga gränser för den inbyggda e-posttjänsten.',
      banner: {
        approaching:
          'Du närmar dig sändningsgränsen för GetCertus inbyggda e-posttjänst. <provider>Anslut din egen e-postleverantör</provider> eller <upgrade>uppgradera din plan</upgrade> för att fortsätta använda den inbyggda e-posttjänsten.',
        reached:
          'Du har nått sändningsgränsen för GetCertus inbyggda e-posttjänst, vilket kan avbryta inloggningsmejl. <provider>Anslut din egen e-postleverantör</provider> eller <upgrade>uppgradera din plan</upgrade> för att fortsätta använda den inbyggda e-posttjänsten.',
      },
    },
    email_template_title: 'E-postmall',
    template_description:
      'Den inbyggda e-posten använder standardmallar för smidig leverans av verifieringsmejl. Ingen konfiguration krävs, och du kan anpassa grundläggande varumärkesinformation.',
    template_description_link_text: 'Visa mallar',
    description_action_text: 'Visa mallar',
    from_email_field: 'Avsändaradress',
    sender_name_field: 'Avsändarnamn',
    sender_name_tip:
      'Anpassa avsändarnamnet för e-post. Lämnas fältet tomt används "Verification" som standardnamn.',
    sender_name_placeholder: 'Ditt avsändarnamn',
    company_information_field: 'Företagsinformation',
    company_information_description:
      'Visa företagsnamn, adress eller postnummer längst ned i e-posten för ökad trovärdighet.',
    company_information_placeholder: 'Grundläggande information om ditt företag',
    email_logo_field: 'E-postlogotyp',
    email_logo_tip:
      'Visa din logotyp högst upp i e-posten. Använd samma bild för ljust och mörkt läge.',
    urls_not_allowed: 'URL:er är inte tillåtna',
    test_notes: 'GetCertus använder mallen “Generic” för test.',
  },
  google_one_tap: {
    title: 'Google One Tap',
    description:
      'Google One Tap är ett säkert och enkelt sätt för användare att logga in på din webbplats.',
    enable_google_one_tap: 'Aktivera Google One Tap',
    enable_google_one_tap_description:
      'Aktivera Google One Tap i din inloggningsupplevelse: låt användare som redan är inloggade på sin enhet snabbt registrera sig eller logga in med sitt Google-konto.',
    configure_google_one_tap: 'Konfigurera Google One Tap',
    auto_select: 'Välj inloggningsuppgifter automatiskt om möjligt',
    close_on_tap_outside: 'Avbryt dialogen om användaren klickar/trycker utanför',
    itp_support: 'Aktivera <a>förbättrad One Tap-UX i ITP-webbläsare</a>',
  },
  sign_in_experience: {
    in_use: 'Aktiverad för inloggning ',
    not_in_use: 'Inaktiverad för inloggning ',
  },
  email_logs: {
    title: 'E-postloggar',
    time: 'Tid',
    recipient: 'Mottagare',
    recipient_placeholder: 'Sök på mottagarens fullständiga adress',
    template_type: 'Malltyp',
    status: 'Status',
    status_sent: 'Skickat',
    status_failed: 'Misslyckades',
    language_tag: 'Språk',
    provider_message_id: 'Leverantörens meddelande-ID',
  },
};

export default Object.freeze(connector_details);
