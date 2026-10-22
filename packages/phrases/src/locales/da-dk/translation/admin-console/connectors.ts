/* GetCertus addition (MPL-2.0, see GETCERTUS.md): admin console phrases. */
const connectors = {
  page_title: 'Connectorer',
  title: 'Connectorer',
  subtitle: 'Opsæt connectorer til adgangskodefri og social login',
  create: 'Tilføj social connector',
  config_sie_notice:
    'Du har opsat connectorer. Sørg for også at konfigurere dem i <a>{{link}}</a>.',
  config_sie_link_text: 'loginoplevelsen',
  tab_email_sms: 'E-mail- og sms-connectorer',
  tab_social: 'Sociale connectorer',
  connector_name: 'Connectorens navn',
  demo_tip:
    'Demo-connectoren er begrænset til højst 100 beskeder og anbefales ikke i et produktionsmiljø.',
  social_demo_tip:
    'Demo-connectoren er kun beregnet til demonstration og anbefales ikke i et produktionsmiljø.',
  connector_type: 'Type',
  placeholder_title: 'Social connector',
  placeholder_description:
    'GetCertus tilbyder mange udbredte connectorer til social login, og du kan også oprette dine egne med standardprotokoller.',
  save_and_done: 'Gem og færdig',
  type: {
    email: 'E-mail-connector',
    sms: 'Sms-connector',
    social: 'Social connector',
  },
  setup_title: {
    email: 'Opsæt e-mail-connector',
    sms: 'Opsæt sms-connector',
    social: 'Tilføj social connector',
  },
  guide: {
    subtitle: 'En trin-for-trin-guide til at konfigurere din connector',
    general_setting: 'Generelle indstillinger',
    parameter_configuration: 'Parameterkonfiguration',
    test_connection: 'Test forbindelsen',
    name: 'Navn på knappen til social login',
    name_placeholder: 'Indtast navn på knappen til social login',
    name_tip:
      'Connectorens knap vises som "Fortsæt med {{name}}". Vær opmærksom på, at navnet ikke bliver for langt.',
    connector_logo: 'Connectorens logo',
    connector_logo_tip: 'Logoet vises på connectorens loginknap.',
    target: 'Identitetsudbyderens navn',
    target_placeholder: 'Indtast navnet på connectorens identitetsudbyder',
    target_tip:
      'Værdien af “IdP-navn” kan være en unik identifikator, der adskiller dine sociale identiteter.',
    target_tip_standard:
      'Værdien af “IdP-navn” kan være en unik identifikator, der adskiller dine sociale identiteter. Indstillingen kan ikke ændres, når connectoren er oprettet.',
    target_tooltip:
      '"IdP-navn" i GetCertus\' sociale connectorer henviser til "kilden" til dine sociale identiteter. GetCertus accepterer ikke det samme "IdP-navn" for en platform for at undgå konflikter. Vær forsigtig, før du tilføjer en connector, da du IKKE KAN ændre værdien, når den er oprettet. <a>Læs mere</a>',
    target_conflict:
      'Det indtastede IdP-navn svarer til den eksisterende connector <span>name</span>. Samme IdP-navn kan give uventet loginadfærd, hvor brugere får adgang til samme konto via to forskellige connectorer.',
    target_conflict_line2:
      'Vil du erstatte den nuværende connector med samme identitetsudbyder og lade tidligere brugere logge ind uden at registrere sig igen? Så slet connectoren <span>name</span>, og opret en ny med samme "IdP-navn".',
    target_conflict_line3:
      'Vil du forbinde til en anden identitetsudbyder? Så ændr "IdP-navn", og fortsæt.',
    config: 'Indtast din konfigurations-JSON',
    sync_profile: 'Synkronisér profiloplysninger',
    sync_profile_only_at_sign_up: 'Synkronisér kun ved tilmelding',
    sync_profile_each_sign_in: 'Synkronisér altid ved hvert login',
    sync_profile_tip:
      'Synkronisér den grundlæggende profil fra den sociale udbyder, f.eks. brugernes navne og avatarer.',
    enable_token_storage: {
      title: 'Gem tokens til vedvarende API-adgang',
      description:
        "Gem adgangs- og opdateringstokens i Secret Vault. Det muliggør automatiske API-kald uden gentagne samtykker fra brugeren. Eksempel: lad din AI-agent tilføje begivenheder til Google Kalender med vedvarende autorisation. <a>Lær at kalde tredjeparts-API'er</a>",
    },
    callback_uri: 'Omdirigerings-URI (callback-URI)',
    callback_uri_description:
      "Omdirigerings-URI'er er der, hvor brugere sendes hen efter social autorisation. Tilføj alle viste URI'er til din IdP's konfiguration.",
    callback_uri_custom_domain_description:
      "Hvis du bruger flere <a>brugerdefinerede domæner</a> i GetCertus, så tilføj alle tilsvarende callback-URI'er til din IdP, så social login virker på alle domæner.\n\nGetCertus' standarddomæne (*.logto.app) er altid gyldigt — tilføj det kun, hvis du også vil understøtte login via det domæne.",
    acs_url: 'URL til Assertion Consumer Service',
  },
  platform: {
    universal: 'Universel',
    web: 'Web',
    native: 'Native',
  },
  add_multi_platform: ' understøtter flere platforme, vælg en platform for at fortsætte',
  drawer_title: 'Connector-guide',
  drawer_subtitle: 'Følg instruktionerne for at integrere din connector',
  unknown: 'Ukendt connector',
  standard_connectors: 'Standardconnectorer',
  create_form: {
    third_party_connectors:
      'Integrér tredjepartsudbydere til hurtig social login, sammenkædning af sociale konti og API-adgang. <a>Læs mere</a>',
    email_connector_upsell: {
      title: "GetCertus' indbyggede e-mailtjeneste",
      description:
        'E-mailudsendelse uden konfiguration. Send bekræftelseskoder og magiske links med det samme.',
    },
    standard_connectors: 'Eller tilpas din sociale connector med en standardprotokol.',
  },
};

export default Object.freeze(connectors);
