/* GetCertus addition (MPL-2.0, see GETCERTUS.md): admin console phrases. */
const applications = {
  page_title: 'Applikationer',
  title: 'Applikationer',
  subtitle: 'Skapa och hantera applikationer för OIDC-autentisering.',
  subtitle_with_app_type: 'Konfigurera GetCertus-autentisering för din {{name}}-applikation',
  create_device_flow_description:
    'Skapa en native-applikation som använder OAuth 2.0 Device Authorization Grant för enheter med begränsad inmatning eller headless-appar.',
  create: 'Skapa applikation',
  create_third_party: 'Skapa tredjepartsapplikation',
  create_thrid_party_modal_title: 'Skapa en tredjepartsapp ({{type}})',
  application_name: 'Applikationens namn',
  application_name_placeholder: 'Min app',
  application_description: 'Applikationens beskrivning',
  application_description_placeholder: 'Ange en beskrivning av applikationen',
  select_application_type: 'Välj en applikationstyp',
  no_application_type_selected: 'Du har inte valt någon applikationstyp än',
  application_created: 'Applikationen har skapats.',
  tab: {
    my_applications: 'Mina appar',
    third_party_applications: 'Tredjepartsappar',
  },
  app_id: 'App-ID',
  type: {
    native: {
      title: 'Native-app',
      subtitle: 'En app som körs i en native-miljö',
      description: 'T.ex. iOS-app, Android-app, datorapp, tv, CLI',
    },
    spa: {
      title: 'Single page-app',
      subtitle: 'En app som körs i webbläsaren och uppdaterar data på plats',
      description: 'T.ex. React DOM-app, Vue-app',
    },
    traditional: {
      title: 'Traditionell webb',
      subtitle: 'En app där webbservern ensam renderar och uppdaterar sidorna',
      description: 'T.ex. Next.js, PHP',
    },
    machine_to_machine: {
      title: 'Maskin-till-maskin',
      subtitle: 'En app (oftast en tjänst) som kommunicerar direkt med resurser',
      description: 'T.ex. backend-tjänst',
    },
    protected: {
      title: 'Skyddad app',
      subtitle: 'En app som skyddas av GetCertus',
      description: 'Ej tillämpligt',
    },
    saml: {
      title: 'SAML-app',
      subtitle: 'En app som används som SAML IdP-koppling',
      description: 'T.ex. SAML',
    },
    third_party: {
      title: 'Tredjepartsapp',
      subtitle: 'En app som används som IdP-koppling för tredje part',
      description: 'T.ex. OIDC',
    },
  },
  authorization_flow: {
    title: 'Auktoriseringsflöde',
    tooltip:
      'Välj auktoriseringsflödet för applikationen. Det kan inte ändras när det väl är valt.',
    authorization_code: {
      title: 'Auktoriseringskod',
      description:
        'Standardtypen och den vanligaste. Användare skickas till en inloggningssida för att ge åtkomst direkt.',
    },
    device_flow: {
      title: 'Enhetsflöde',
      description:
        'För enheter med begränsad inmatning eller headless-appar (t.ex. tv, CLI). Användare slutför inloggningen på en annan enhet genom att ange en enhetskod eller skanna en QR-kod.',
    },
  },
  placeholder_title: 'Välj en applikationstyp för att fortsätta',
  placeholder_description:
    'GetCertus använder en applikationsentitet för OIDC, bland annat för att identifiera dina appar, hantera inloggning och skapa granskningsloggar.',
  third_party_application_placeholder_description:
    'Använd GetCertus som identitetsleverantör för att ge OAuth-auktorisering till tredjepartstjänster, med en färdig samtyckesskärm för åtkomst till resurser. <a>Läs mer</a>',
  dynamic_app: {
    title: 'Dynamisk app',
    subtitle: 'CIMD',
    description: 'Med en dynamisk app kan OAuth-klienter ansluta utan förregistrering.',
    settings_description:
      'Med en dynamisk app kan OAuth-klienter ansluta utan förregistrering. Använder specifikationen OAuth Client ID Metadata Document (CIMD).',
    beta_notice:
      'Dynamiska appar är i beta. Prova gärna och <ContactLink>dela din feedback</ContactLink>.',
    app_id_placeholder: 'Anges dynamiskt av varje klient',
    enable_confirm_modal: {
      title: 'Aktivera dynamisk klientåtkomst?',
      content:
        'Alla OAuth-klienter med en giltig offentlig HTTPS-klient-ID-URL kan starta auktorisering för denna tenant utan förregistrering. Åtkomsten begränsas fortfarande av dina maximala behörigheter och användarens samtycke.',
      beta_pricing_notice:
        'Dynamiska appar är gratis under betan. Därefter kan en avgift för tillägg tillkomma. Vi meddelar dig i förväg och du kan stänga av det när som helst.',
    },
    enabled: 'Dynamisk app aktiverad.',
    disable_confirm_modal: {
      title: 'Inaktivera dynamisk app?',
      content:
        'CIMD-klienter kan inte längre starta nya auktoriseringsbegäranden. Befintliga medgivanden behålls och utfärdade åtkomsttoken kan vara giltiga tills de går ut.',
    },
    disabled: 'Dynamisk app inaktiverad.',
    permissions: {
      user_title: 'Användare',
      user_description:
        'Välj de behörigheter som OAuth-klienter begär för åtkomst till specifika användardata.',
      grant_user_level_permissions: 'Ge användarbehörigheter',
      organization_title: 'Organisation',
      organization_description:
        'Välj de behörigheter som OAuth-klienter begär för åtkomst till specifika organisationsdata.',
      grant_organization_level_permissions: 'Ge organisationsbehörigheter',
      permission_delete_confirm:
        'Behörigheten tas bort från den dynamiska appen, så att OAuth-klienter inte längre kan begära användarens auktorisering för den. Vill du fortsätta?',
    },
    client_compatibility: {
      title: 'Klientkompatibilitet',
      description:
        'Justera hur GetCertus hanterar auktoriseringsbegäranden från OAuth-klienter som ännu inte fullt stöder OpenID Connect. Inställningarna är experimentella och kan ändras eller tas bort.',
      add_consent_prompt_for_offline_access: 'Lägg till samtyckesfråga för offlineåtkomst',
      add_consent_prompt_for_offline_access_description:
        'När en OAuth-klient begär `offline_access` utan `prompt=consent` lägger GetCertus till samtyckesfrågan så att klienten kan få en uppdateringstoken. Rekommenderas för klienter som ChatGPT och Codex.',
    },
  },
  guide: {
    third_party: {
      title: 'Integrera en tredjepartsapplikation',
      description:
        'Använd GetCertus som identitetsleverantör för att ge OAuth-auktorisering till tredjepartstjänster, med en färdig samtyckesskärm för säker åtkomst till resurser. <a>Läs mer</a>',
    },
  },
};

export default Object.freeze(applications);
