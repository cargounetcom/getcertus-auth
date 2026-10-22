/* GetCertus addition (MPL-2.0, see GETCERTUS.md): admin console phrases. */
const applications = {
  page_title: 'Applicaties',
  title: 'Applicaties',
  subtitle: 'Maak en beheer applicaties voor OIDC-authenticatie.',
  subtitle_with_app_type: 'Stel GetCertus-authenticatie in voor je {{name}}-applicatie',
  create_device_flow_description:
    'Maak een native applicatie die de OAuth 2.0 Device Authorization Grant gebruikt voor apparaten met beperkte invoer of headless apps.',
  create: 'Applicatie aanmaken',
  create_third_party: 'Applicatie van derden aanmaken',
  create_thrid_party_modal_title: 'App van derden aanmaken ({{type}})',
  application_name: 'Naam van de applicatie',
  application_name_placeholder: 'Mijn app',
  application_description: 'Beschrijving van de applicatie',
  application_description_placeholder: 'Voer een beschrijving van je applicatie in',
  select_application_type: 'Kies een applicatietype',
  no_application_type_selected: 'Je hebt nog geen applicatietype gekozen',
  application_created: 'Applicatie aangemaakt.',
  tab: {
    my_applications: 'Mijn apps',
    third_party_applications: 'Apps van derden',
  },
  app_id: 'App-ID',
  type: {
    native: {
      title: 'Native app',
      subtitle: 'Een app die in een native omgeving draait',
      description: 'Bijv. iOS-app, Android-app, desktopapp, tv, CLI',
    },
    spa: {
      title: 'Single-page-app',
      subtitle: 'Een app die in een webbrowser draait en gegevens ter plekke bijwerkt',
      description: 'Bijv. React DOM-app, Vue-app',
    },
    traditional: {
      title: 'Traditioneel web',
      subtitle: "Een app waarvan de webserver alleen de pagina's rendert en bijwerkt",
      description: 'Bijv. Next.js, PHP',
    },
    machine_to_machine: {
      title: 'Machine-to-machine',
      subtitle: 'Een app (meestal een service) die rechtstreeks met resources communiceert',
      description: 'Bijv. backendservice',
    },
    protected: {
      title: 'Beschermde app',
      subtitle: 'Een app die door GetCertus wordt beschermd',
      description: 'N.v.t.',
    },
    saml: {
      title: 'SAML-app',
      subtitle: 'Een app die als SAML IdP-connector wordt gebruikt',
      description: 'Bijv. SAML',
    },
    third_party: {
      title: 'App van derden',
      subtitle: 'Een app die als IdP-connector van derden wordt gebruikt',
      description: 'Bijv. OIDC',
    },
  },
  authorization_flow: {
    title: 'Autorisatiestroom',
    tooltip:
      'Kies de autorisatiestroom voor je applicatie. Eenmaal ingesteld kan deze niet meer worden gewijzigd.',
    authorization_code: {
      title: 'Autorisatiecode',
      description:
        'Het standaard en meest gebruikte granttype. Gebruikers worden naar een inlogpagina gestuurd om direct toegang te verlenen.',
    },
    device_flow: {
      title: 'Apparaatstroom',
      description:
        "Voor apparaten met beperkte invoer of headless apps (bijv. tv's, CLI). Gebruikers ronden het inloggen af op een ander apparaat door een apparaatcode in te voeren of een QR-code te scannen.",
    },
  },
  placeholder_title: 'Kies een applicatietype om door te gaan',
  placeholder_description:
    'GetCertus gebruikt een applicatie-entiteit voor OIDC, bijvoorbeeld om je apps te herkennen, het inloggen te beheren en auditlogs te maken.',
  third_party_application_placeholder_description:
    'Gebruik GetCertus als identiteitsprovider om OAuth-autorisatie te bieden aan diensten van derden, met een kant-en-klaar toestemmingsscherm voor toegang tot resources. <a>Meer informatie</a>',
  dynamic_app: {
    title: 'Dynamische app',
    subtitle: 'CIMD',
    description:
      'Met een dynamische app kunnen OAuth-clients verbinding maken zonder vooraf te registreren.',
    settings_description:
      'Met een dynamische app kunnen OAuth-clients verbinding maken zonder vooraf te registreren. Gebruikt de specificatie OAuth Client ID Metadata Document (CIMD).',
    beta_notice:
      'Dynamische apps zijn nog in bèta. Probeer het gerust en <ContactLink>deel je feedback</ContactLink>.',
    app_id_placeholder: 'Wordt dynamisch door elke client opgegeven',
    enable_confirm_modal: {
      title: 'Dynamische clienttoegang inschakelen?',
      content:
        'Elke OAuth-client met een geldige openbare HTTPS-client-ID-URL kan zonder registratie autorisatie voor deze tenant starten. De toegang blijft beperkt door je maximale machtigingen en de toestemming van gebruikers.',
      beta_pricing_notice:
        'Tijdens de bèta zijn dynamische apps gratis. Daarna kunnen er kosten voor een add-on gelden. We laten het je vooraf weten en je kunt het altijd uitschakelen.',
    },
    enabled: 'Dynamische app ingeschakeld.',
    disable_confirm_modal: {
      title: 'Dynamische app uitschakelen?',
      content:
        'CIMD-clients kunnen geen nieuwe autorisatieverzoeken meer starten. Bestaande toekenningen blijven bewaard en uitgegeven toegangstokens kunnen geldig blijven tot ze verlopen.',
    },
    disabled: 'Dynamische app uitgeschakeld.',
    permissions: {
      user_title: 'Gebruiker',
      user_description:
        'Kies de machtigingen die OAuth-clients aanvragen voor toegang tot specifieke gebruikersgegevens.',
      grant_user_level_permissions: 'Gebruikersmachtigingen verlenen',
      organization_title: 'Organisatie',
      organization_description:
        'Kies de machtigingen die OAuth-clients aanvragen voor toegang tot specifieke organisatiegegevens.',
      grant_organization_level_permissions: 'Organisatiemachtigingen verlenen',
      permission_delete_confirm:
        'Hiermee verdwijnt de machtiging uit de dynamische app, zodat OAuth-clients er geen gebruikersautorisatie meer voor kunnen aanvragen. Weet je zeker dat je wilt doorgaan?',
    },
    client_compatibility: {
      title: 'Clientcompatibiliteit',
      description:
        'Bepaal hoe GetCertus omgaat met autorisatieverzoeken van OAuth-clients die OpenID Connect nog niet volledig ondersteunen. Deze instellingen zijn experimenteel en kunnen veranderen of verdwijnen.',
      add_consent_prompt_for_offline_access: 'Toestemmingsvraag toevoegen voor offline toegang',
      add_consent_prompt_for_offline_access_description:
        'Als een OAuth-client `offline_access` aanvraagt zonder `prompt=consent`, voegt GetCertus de toestemmingsvraag toe zodat de client een vernieuwingstoken kan ontvangen. Aanbevolen voor clients zoals ChatGPT en Codex.',
    },
  },
  guide: {
    third_party: {
      title: 'Een applicatie van derden integreren',
      description:
        'Gebruik GetCertus als je identiteitsprovider om OAuth-autorisatie te bieden aan diensten van derden, met een kant-en-klaar toestemmingsscherm voor veilige toegang tot resources. <a>Meer informatie</a>',
    },
  },
};

export default Object.freeze(applications);
