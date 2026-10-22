/* GetCertus addition (MPL-2.0, see GETCERTUS.md): admin console phrases. */
const connectors = {
  page_title: 'Kopplingar',
  title: 'Kopplingar',
  subtitle: 'Konfigurera kopplingar för lösenordsfri och social inloggning',
  create: 'Lägg till social koppling',
  config_sie_notice:
    'Du har konfigurerat kopplingar. Se till att även konfigurera dem i <a>{{link}}</a>.',
  config_sie_link_text: 'inloggningsupplevelsen',
  tab_email_sms: 'E-post- och sms-kopplingar',
  tab_social: 'Sociala kopplingar',
  connector_name: 'Kopplingens namn',
  demo_tip:
    'Demokopplingen är begränsad till högst 100 meddelanden och rekommenderas inte i produktionsmiljö.',
  social_demo_tip:
    'Demokopplingen är endast avsedd för demonstration och rekommenderas inte i produktionsmiljö.',
  connector_type: 'Typ',
  placeholder_title: 'Social koppling',
  placeholder_description:
    'GetCertus erbjuder många vanliga kopplingar för social inloggning, och du kan även skapa egna med standardprotokoll.',
  save_and_done: 'Spara och klar',
  type: {
    email: 'E-postkoppling',
    sms: 'Sms-koppling',
    social: 'Social koppling',
  },
  setup_title: {
    email: 'Konfigurera e-postkoppling',
    sms: 'Konfigurera sms-koppling',
    social: 'Lägg till social koppling',
  },
  guide: {
    subtitle: 'En steg-för-steg-guide för att konfigurera din koppling',
    general_setting: 'Allmänna inställningar',
    parameter_configuration: 'Parameterkonfiguration',
    test_connection: 'Testa anslutningen',
    name: 'Namn på knappen för social inloggning',
    name_placeholder: 'Ange namn på knappen för social inloggning',
    name_tip:
      'Kopplingens knapp visas som "Fortsätt med {{name}}". Tänk på att namnet inte blir för långt.',
    connector_logo: 'Kopplingens logotyp',
    connector_logo_tip: 'Logotypen visas på kopplingens inloggningsknapp.',
    target: 'Identitetsleverantörens namn',
    target_placeholder: 'Ange namnet på kopplingens identitetsleverantör',
    target_tip:
      'Värdet för “IdP-namn” kan vara en unik identifierare som skiljer dina sociala identiteter åt.',
    target_tip_standard:
      'Värdet för “IdP-namn” kan vara en unik identifierare som skiljer dina sociala identiteter åt. Inställningen kan inte ändras efter att kopplingen har skapats.',
    target_tooltip:
      '"IdP-namn" i GetCertus sociala kopplingar avser "källan" till dina sociala identiteter. GetCertus tillåter inte samma "IdP-namn" för en plattform, för att undvika konflikter. Var försiktig innan du lägger till en koppling, eftersom du INTE KAN ändra värdet när den har skapats. <a>Läs mer</a>',
    target_conflict:
      'Det angivna IdP-namnet matchar den befintliga kopplingen <span>name</span>. Samma IdP-namn kan ge oväntat inloggningsbeteende där användare når samma konto via två olika kopplingar.',
    target_conflict_line2:
      'Vill du ersätta den nuvarande kopplingen med samma identitetsleverantör och låta tidigare användare logga in utan att registrera sig igen? Ta då bort kopplingen <span>name</span> och skapa en ny med samma "IdP-namn".',
    target_conflict_line3:
      'Vill du ansluta till en annan identitetsleverantör? Ändra då "IdP-namn" och fortsätt.',
    config: 'Ange din konfigurations-JSON',
    sync_profile: 'Synkronisera profilinformation',
    sync_profile_only_at_sign_up: 'Synkronisera endast vid registrering',
    sync_profile_each_sign_in: 'Synkronisera alltid vid varje inloggning',
    sync_profile_tip:
      'Synkronisera grundprofilen från den sociala leverantören, till exempel användarnas namn och avatarer.',
    enable_token_storage: {
      title: 'Spara tokens för beständig API-åtkomst',
      description:
        'Spara åtkomst- och uppdateringstokens i Secret Vault. Det möjliggör automatiska API-anrop utan att användaren behöver ge samtycke om och om igen. Exempel: låt din AI-agent lägga till händelser i Google Kalender med beständig auktorisering. <a>Lär dig anropa tredjeparts-API:er</a>',
    },
    callback_uri: 'Omdirigerings-URI (callback-URI)',
    callback_uri_description:
      'Omdirigerings-URI:er är dit användare skickas efter social auktorisering. Lägg till alla visade URI:er i din IdP:s konfiguration.',
    callback_uri_custom_domain_description:
      'Om du använder flera <a>anpassade domäner</a> i GetCertus, lägg till alla motsvarande callback-URI:er i din IdP så att social inloggning fungerar på varje domän.\n\nGetCertus standarddomän (*.logto.app) är alltid giltig — lägg bara till den om du även vill stödja inloggning via den domänen.',
    acs_url: 'URL för Assertion Consumer Service',
  },
  platform: {
    universal: 'Universell',
    web: 'Webb',
    native: 'Native',
  },
  add_multi_platform: ' stöder flera plattformar, välj en plattform för att fortsätta',
  drawer_title: 'Guide för koppling',
  drawer_subtitle: 'Följ instruktionerna för att integrera din koppling',
  unknown: 'Okänd koppling',
  standard_connectors: 'Standardkopplingar',
  create_form: {
    third_party_connectors:
      'Integrera tredjepartsleverantörer för snabb social inloggning, länkning av sociala konton och API-åtkomst. <a>Läs mer</a>',
    email_connector_upsell: {
      title: 'GetCertus inbyggda e-posttjänst',
      description:
        'E-postutskick utan konfiguration. Skicka verifieringskoder och magiska länkar direkt.',
    },
    standard_connectors: 'Eller anpassa din sociala koppling med ett standardprotokoll.',
  },
};

export default Object.freeze(connectors);
