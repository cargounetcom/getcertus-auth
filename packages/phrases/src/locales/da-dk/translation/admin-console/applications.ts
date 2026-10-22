/* GetCertus addition (MPL-2.0, see GETCERTUS.md): admin console phrases. */
const applications = {
  page_title: 'Applikationer',
  title: 'Applikationer',
  subtitle: 'Opret og administrer applikationer til OIDC-godkendelse.',
  subtitle_with_app_type: 'Konfigurer GetCertus-godkendelse til din {{name}}-applikation',
  create_device_flow_description:
    'Opret en native-applikation, der bruger OAuth 2.0 Device Authorization Grant til enheder med begrænset input eller headless-apps.',
  create: 'Opret applikation',
  create_third_party: 'Opret tredjepartsapplikation',
  create_thrid_party_modal_title: 'Opret en tredjepartsapp ({{type}})',
  application_name: 'Applikationens navn',
  application_name_placeholder: 'Min app',
  application_description: 'Applikationens beskrivelse',
  application_description_placeholder: 'Indtast en beskrivelse af applikationen',
  select_application_type: 'Vælg en applikationstype',
  no_application_type_selected: 'Du har ikke valgt en applikationstype endnu',
  application_created: 'Applikationen er oprettet.',
  tab: {
    my_applications: 'Mine apps',
    third_party_applications: 'Tredjepartsapps',
  },
  app_id: 'App-ID',
  type: {
    native: {
      title: 'Native-app',
      subtitle: 'En app, der kører i et native miljø',
      description: 'F.eks. iOS-app, Android-app, desktopapp, tv, CLI',
    },
    spa: {
      title: 'Single page-app',
      subtitle: 'En app, der kører i browseren og opdaterer data på stedet',
      description: 'F.eks. React DOM-app, Vue-app',
    },
    traditional: {
      title: 'Traditionelt web',
      subtitle: 'En app, hvor webserveren alene gengiver og opdaterer siderne',
      description: 'F.eks. Next.js, PHP',
    },
    machine_to_machine: {
      title: 'Maskine-til-maskine',
      subtitle: 'En app (oftest en tjeneste), der kommunikerer direkte med ressourcer',
      description: 'F.eks. backendtjeneste',
    },
    protected: {
      title: 'Beskyttet app',
      subtitle: 'En app, der beskyttes af GetCertus',
      description: 'Ikke relevant',
    },
    saml: {
      title: 'SAML-app',
      subtitle: 'En app, der bruges som SAML IdP-connector',
      description: 'F.eks. SAML',
    },
    third_party: {
      title: 'Tredjepartsapp',
      subtitle: 'En app, der bruges som IdP-connector for tredjepart',
      description: 'F.eks. OIDC',
    },
  },
  authorization_flow: {
    title: 'Autorisationsflow',
    tooltip:
      'Vælg autorisationsflowet for applikationen. Det kan ikke ændres, når det først er valgt.',
    authorization_code: {
      title: 'Autorisationskode',
      description:
        'Standardtypen og den mest almindelige. Brugere sendes til en loginside for at give adgang direkte.',
    },
    device_flow: {
      title: 'Enhedsflow',
      description:
        'Til enheder med begrænset input eller headless-apps (f.eks. tv, CLI). Brugere fuldfører login på en anden enhed ved at indtaste en enhedskode eller scanne en QR-kode.',
    },
  },
  placeholder_title: 'Vælg en applikationstype for at fortsætte',
  placeholder_description:
    'GetCertus bruger en applikationsenhed til OIDC, blandt andet til at genkende dine apps, styre login og oprette revisionslogs.',
  third_party_application_placeholder_description:
    'Brug GetCertus som identitetsudbyder til at give OAuth-autorisation til tredjepartstjenester, med en færdig samtykkeskærm til adgang til ressourcer. <a>Læs mere</a>',
  dynamic_app: {
    title: 'Dynamisk app',
    subtitle: 'CIMD',
    description: 'En dynamisk app lader OAuth-klienter forbinde uden forudgående registrering.',
    settings_description:
      'En dynamisk app lader OAuth-klienter forbinde uden forudgående registrering. Bruger specifikationen OAuth Client ID Metadata Document (CIMD).',
    beta_notice:
      'Dynamiske apps er i beta. Prøv det gerne, og <ContactLink>del din feedback</ContactLink>.',
    app_id_placeholder: 'Angives dynamisk af hver klient',
    enable_confirm_modal: {
      title: 'Slå dynamisk klientadgang til?',
      content:
        'Enhver OAuth-klient med en gyldig offentlig HTTPS-klient-ID-URL kan starte autorisation for denne tenant uden registrering. Adgangen begrænses stadig af dine maksimale tilladelser og brugerens samtykke.',
      beta_pricing_notice:
        'Dynamiske apps er gratis i betaperioden. Derefter kan der komme en pris for tilføjelsen. Vi giver besked i god tid, og du kan slå det fra når som helst.',
    },
    enabled: 'Dynamisk app er slået til.',
    disable_confirm_modal: {
      title: 'Slå dynamisk app fra?',
      content:
        'CIMD-klienter kan ikke længere starte nye autorisationsanmodninger. Eksisterende tildelinger bevares, og udstedte adgangstokens kan være gyldige, indtil de udløber.',
    },
    disabled: 'Dynamisk app er slået fra.',
    permissions: {
      user_title: 'Bruger',
      user_description:
        'Vælg de tilladelser, som OAuth-klienter anmoder om for at få adgang til bestemte brugerdata.',
      grant_user_level_permissions: 'Giv brugertilladelser',
      organization_title: 'Organisation',
      organization_description:
        'Vælg de tilladelser, som OAuth-klienter anmoder om for at få adgang til bestemte organisationsdata.',
      grant_organization_level_permissions: 'Giv organisationstilladelser',
      permission_delete_confirm:
        'Tilladelsen fjernes fra den dynamiske app, så OAuth-klienter ikke længere kan anmode om brugerens autorisation til den. Vil du fortsætte?',
    },
    client_compatibility: {
      title: 'Klientkompatibilitet',
      description:
        'Juster, hvordan GetCertus håndterer autorisationsanmodninger fra OAuth-klienter, der endnu ikke fuldt understøtter OpenID Connect. Indstillingerne er eksperimentelle og kan ændres eller fjernes.',
      add_consent_prompt_for_offline_access: 'Tilføj samtykkeprompt for offlineadgang',
      add_consent_prompt_for_offline_access_description:
        'Når en OAuth-klient anmoder om `offline_access` uden `prompt=consent`, tilføjer GetCertus samtykkeprompten, så klienten kan modtage et opdateringstoken. Anbefales til klienter som ChatGPT og Codex.',
    },
  },
  guide: {
    third_party: {
      title: 'Integrer en tredjepartsapplikation',
      description:
        'Brug GetCertus som identitetsudbyder til at give OAuth-autorisation til tredjepartstjenester, med en færdig samtykkeskærm til sikker adgang til ressourcer. <a>Læs mere</a>',
    },
  },
};

export default Object.freeze(applications);
