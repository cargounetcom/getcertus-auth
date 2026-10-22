/* GetCertus addition (MPL-2.0, see GETCERTUS.md): admin console phrases. */
const connectors = {
  page_title: 'Connectors',
  title: 'Connectors',
  subtitle: 'Stel connectors in voor wachtwoordloos en sociaal inloggen',
  create: 'Sociale connector toevoegen',
  config_sie_notice: 'Je hebt connectors ingesteld. Configureer ze ook in <a>{{link}}</a>.',
  config_sie_link_text: 'inlogervaring',
  tab_email_sms: 'E-mail- en sms-connectors',
  tab_social: 'Sociale connectors',
  connector_name: 'Naam van connector',
  demo_tip:
    'Deze demo-connector is beperkt tot maximaal 100 berichten en wordt niet aanbevolen voor gebruik in productie.',
  social_demo_tip:
    'De demo-connector is alleen bedoeld voor demonstraties en wordt niet aanbevolen voor gebruik in productie.',
  connector_type: 'Type',
  placeholder_title: 'Sociale connector',
  placeholder_description:
    'GetCertus biedt veel gebruikte connectors voor sociaal inloggen; je kunt ook je eigen connector maken met standaardprotocollen.',
  save_and_done: 'Opslaan en klaar',
  type: {
    email: 'E-mailconnector',
    sms: 'Sms-connector',
    social: 'Sociale connector',
  },
  setup_title: {
    email: 'E-mailconnector instellen',
    sms: 'Sms-connector instellen',
    social: 'Sociale connector toevoegen',
  },
  guide: {
    subtitle: 'Een stapsgewijze handleiding om je connector te configureren',
    general_setting: 'Algemene instellingen',
    parameter_configuration: 'Parameterconfiguratie',
    test_connection: 'Verbinding testen',
    name: 'Naam voor de knop voor sociaal inloggen',
    name_placeholder: 'Voer een naam in voor de knop voor sociaal inloggen',
    name_tip:
      'De knop van de connector wordt weergegeven als "Doorgaan met {{name}}". Let op dat de naam niet te lang wordt.',
    connector_logo: 'Logo van connector',
    connector_logo_tip: 'Het logo wordt weergegeven op de inlogknop van de connector.',
    target: 'Naam identiteitsprovider',
    target_placeholder: 'Voer de naam van de identiteitsprovider van de connector in',
    target_tip:
      'De waarde van “IdP-naam” kan een unieke identifier zijn om je sociale identiteiten te onderscheiden.',
    target_tip_standard:
      'De waarde van “IdP-naam” kan een unieke identifier zijn om je sociale identiteiten te onderscheiden. Deze instelling kan niet meer worden gewijzigd nadat de connector is gemaakt.',
    target_tooltip:
      '"IdP-naam" in sociale connectors van GetCertus verwijst naar de "bron" van je sociale identiteiten. GetCertus accepteert niet twee keer dezelfde "IdP-naam" voor een platform, om conflicten te voorkomen. Wees voorzichtig voordat je een connector toevoegt, want je KUNT de waarde NIET meer wijzigen nadat je hem hebt gemaakt. <a>Meer informatie</a>',
    target_conflict:
      'De ingevoerde IdP-naam komt overeen met de bestaande connector <span>name</span>. Dezelfde IdP-naam gebruiken kan onverwacht inloggedrag veroorzaken, waarbij gebruikers via twee verschillende connectors toegang krijgen tot hetzelfde account.',
    target_conflict_line2:
      'Wil je de huidige connector vervangen door een met dezelfde identiteitsprovider en bestaande gebruikers laten inloggen zonder opnieuw te registreren? Verwijder dan de connector <span>name</span> en maak een nieuwe met dezelfde "IdP-naam".',
    target_conflict_line3:
      'Wil je verbinden met een andere identiteitsprovider? Wijzig dan de "IdP-naam" en ga verder.',
    config: 'Voer je configuratie-JSON in',
    sync_profile: 'Profielgegevens synchroniseren',
    sync_profile_only_at_sign_up: 'Alleen synchroniseren bij registratie',
    sync_profile_each_sign_in: 'Bij elke aanmelding synchroniseren',
    sync_profile_tip:
      'Synchroniseer het basisprofiel van de sociale provider, zoals namen en avatars van gebruikers.',
    enable_token_storage: {
      title: 'Tokens opslaan voor blijvende API-toegang',
      description:
        "Sla toegangs- en vernieuwingstokens op in de Secret Vault. Hiermee zijn geautomatiseerde API-aanroepen mogelijk zonder steeds opnieuw toestemming te vragen. Voorbeeld: laat je AI-agent met blijvende autorisatie afspraken toevoegen aan Google Agenda. <a>Leer hoe je API's van derden aanroept</a>",
    },
    callback_uri: 'Redirect-URI (callback-URI)',
    callback_uri_description:
      "Redirect-URI's zijn de plekken waar gebruikers na sociale autorisatie naartoe worden gestuurd. Voeg alle weergegeven URI's toe aan de configuratie van je IdP.",
    callback_uri_custom_domain_description:
      "Als je meerdere <a>aangepaste domeinen</a> in GetCertus gebruikt, voeg dan alle bijbehorende callback-URI's toe aan je IdP, zodat sociaal inloggen op elk domein werkt.\n\nHet standaarddomein van GetCertus (*.logto.app) is altijd geldig — voeg het alleen toe als je ook inloggen via dat domein wilt ondersteunen.",
    acs_url: 'Assertion Consumer Service-URL',
  },
  platform: {
    universal: 'Universeel',
    web: 'Web',
    native: 'Native',
  },
  add_multi_platform: ' ondersteunt meerdere platforms; kies een platform om verder te gaan',
  drawer_title: 'Connectorhandleiding',
  drawer_subtitle: 'Volg de instructies om je connector te integreren',
  unknown: 'Onbekende connector',
  standard_connectors: 'Standaardconnectors',
  create_form: {
    third_party_connectors:
      'Integreer providers van derden voor snel sociaal inloggen, het koppelen van sociale accounts en API-toegang. <a>Meer informatie</a>',
    email_connector_upsell: {
      title: 'Ingebouwde e-mailservice van GetCertus',
      description:
        'E-mail versturen zonder configuratie. Verstuur direct verificatiecodes en magic links.',
    },
    standard_connectors: 'Of pas je sociale connector aan met een standaardprotocol.',
  },
};

export default Object.freeze(connectors);
