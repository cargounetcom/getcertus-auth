/* GetCertus addition (MPL-2.0, see GETCERTUS.md): admin console phrases. */
const sign_in_exp = {
  page_title: 'Loginoplevelse',
  page_title_with_account: 'Login & konto',
  title: 'Login & konto',
  description: 'Tilpas godkendelsesflows og brugerflade, og se den færdige oplevelse i realtid.',
  tabs: {
    branding: 'Branding',
    sign_up_and_sign_in: 'Tilmelding og login',
    collect_user_profile: 'Indsaml brugerprofil',
    account_center: 'Kontocenter',
    content: 'Indhold',
    password_policy: 'Adgangskodepolitik',
  },
  welcome: {
    title: 'Tilpas loginoplevelsen',
    description:
      'Kom hurtigt i gang med din første loginopsætning. Guiden fører dig gennem alle nødvendige indstillinger.',
    get_started: 'Kom i gang',
    apply_remind: 'Bemærk, at loginoplevelsen gælder for alle applikationer under denne konto.',
  },
  color: {
    title: 'FARVE',
    primary_color: 'Brandfarve',
    dark_primary_color: 'Brandfarve (mørk)',
    dark_mode: 'Aktivér mørk tilstand',
    dark_mode_description:
      "Din app får et automatisk genereret mørkt tema baseret på brandfarven og GetCertus' algoritme. Du kan frit tilpasse det.",
    dark_mode_reset_tip: 'Genberegn farven til mørk tilstand ud fra brandfarven.',
    reset: 'Genberegn',
  },
  branding: {
    title: 'BRANDING',
    ui_style: 'Stil',
    with_light: '{{value}}',
    with_dark: '{{value}} (mørk)',
    app_logo_and_favicon: 'App-logo og favicon',
    company_logo_and_favicon: 'Virksomhedslogo og favicon',
    organization_logo_and_favicon: 'Organisationslogo og favicon',
    hide_logto_branding: 'Skjul GetCertus-branding',
    hide_logto_branding_description:
      'Fjern "Powered by GetCertus". Fremhæv kun dit eget brand med en ren og professionel loginoplevelse.',
    hide_logto_branding_oss_note:
      "Det kræver GetCertus' <a>Branding-tilføjelse</a> at skjule signaturen.",
  },
  branding_uploads: {
    app_logo: {
      title: 'App-logo',
      url: 'URL til app-logo',
      url_placeholder: 'https://your.cdn.domain/logo.png',
      error: 'App-logo: {{error}}',
    },
    company_logo: {
      title: 'Virksomhedslogo',
      url: 'URL til virksomhedslogo',
      url_placeholder: 'https://your.cdn.domain/logo.png',
      error: 'Virksomhedslogo: {{error}}',
    },
    organization_logo: {
      title: 'Upload billede',
      url: 'URL til organisationslogo',
      url_placeholder: 'https://your.cdn.domain/logo.png',
      error: 'Organisationslogo: {{error}}',
    },
    connector_logo: {
      title: 'Upload billede',
      url: 'URL til connector-logo',
      url_placeholder: 'https://your.cdn.domain/logo.png',
      error: 'Connector-logo: {{error}}',
    },
    favicon: {
      title: 'Favicon',
      url: 'URL til favicon',
      url_placeholder: 'https://your.cdn.domain/favicon.ico',
      error: 'Favicon: {{error}}',
    },
  },
  custom_ui: {
    title: 'Tilpasset brugerflade',
    cloud_tag: 'Cloud',
    css_code_editor_title: 'Tilpasset CSS',
    css_code_editor_field_title: 'CSS-tilsidesættelser',
    css_code_editor_description1: 'Se eksemplet på tilpasset CSS.',
    css_code_editor_description2: '<a>{{link}}</a>',
    css_code_editor_description_link_content: 'Læs mere',
    css_code_editor_content_placeholder:
      'Indtast dine CSS-tilsidesættelser her for at tilpasse stilen af alt præcis, som du ønsker. Slip kreativiteten løs, og få din brugerflade til at skille sig ud.',
    bring_your_ui_title: 'Bring your UI',
    bring_your_ui_upload_title: 'Upload egne UI-filer',
    bring_your_ui_description:
      "Upload en komprimeret pakke (.zip) for at erstatte GetCertus' færdige brugerflade med din egen kode. <a>Læs mere</a>",
    bring_your_ui_oss_description: 'Tilpas loginbrugerfladen med din egen kode.',
    bring_your_ui_oss_card_description:
      "Upload af egen brugerflade er endnu ikke en del af GetCertus' planer. <a>Se planer og tilføjelser</a>.",
    bring_your_ui_oss_try_cloud: 'Se planer',
    preview_with_bring_your_ui_description:
      'Dine egne UI-filer er uploadet og bruges nu. Derfor er det indbyggede forhåndsvisningsvindue deaktiveret.\nFor at teste din tilpassede loginbrugerflade skal du klikke på knappen "Live-forhåndsvisning" for at åbne den i en ny fane.',
    csp_description:
      'Tillad yderligere kildeudtryk for din tilpassede loginbrugerflade. Værdierne gælder kun, når egne UI-filer bruges.',
    csp_script_src: 'Tilladt script-src',
    csp_script_src_tip:
      'Tillad HTTPS-kildeudtryk for scripts, som din tilpassede brugerflade indlæser, f.eks. https://scripts.example.com eller https://*.example.com.',
    csp_connect_src: 'Tilladt connect-src',
    csp_connect_src_tip:
      'Tillad HTTPS- eller WSS-kildeudtryk for netværksanmodninger fra din tilpassede brugerflade, f.eks. https://api.example.com eller wss://events.example.com.',
    csp_source_invalid_error:
      "Indtast et gyldigt kildeudtryk. Brug https://-URL'er; connect-src understøtter også wss://. CSP-nøgleord og semikoloner understøttes ikke.",
    csp_source_duplicate_error: 'Dette kildeudtryk er allerede på listen.',
  },
  account_center: {
    title: 'KONTOCENTER',
    description:
      'Giv slutbrugere et kontocenter, hvor de kan administrere kontosikkerhed og profiloplysninger.',
    enable_account_api: 'Aktivér kontocenter og Account API',
    enable_account_api_description:
      "Slå både Account API til brugere og GetCertus' færdige kontocenter til. Når det er slået fra, er begge funktioner utilgængelige.",
    field_options: {
      off: 'Fra',
      edit: 'Redigér',
      read_only: 'Skrivebeskyttet',
      enabled: 'Aktiveret',
      disabled: 'Deaktiveret',
    },
    sections: {
      account_security: {
        title: 'KONTOSIKKERHED',
        description:
          'Administrér adgangen til Account API, så brugere efter login kan se eller redigere deres identitetsoplysninger og godkendelsesfaktorer.',
        security_verification: {
          title: 'Sikkerhedsbekræftelse',
          description:
            'Før sikkerhedsindstillinger ændres, skal brugeren bekræfte sin identitet for at få et bekræftelses-ID, der gælder i 10 minutter. For at aktivere en bekræftelsesmetode (e-mail, telefon, adgangskode) skal du sætte Account API-tilladelsen nedenfor til <strong>Skrivebeskyttet</strong> (mindst) eller <strong>Redigér</strong>, så systemet kan se, om brugeren har den konfigureret. <a>Læs mere</a>',
        },
        groups: {
          identifiers: {
            title: 'Identifikatorer',
          },
          authentication_factors: {
            title: 'Godkendelsesfaktorer',
          },
          session_management: {
            title: 'Sessionsstyring',
          },
        },
      },
      user_profile: {
        title: 'BRUGERPROFIL',
        description:
          'Administrér adgangen til Account API, så brugere efter login kan se eller redigere grundlæggende eller brugerdefinerede profildata.',
        groups: {
          profile_data: {
            title: 'Profildata',
          },
        },
      },
      secret_vault: {
        title: 'SECRET VAULT',
        description:
          "Gem sikkert tredjeparters adgangstokens for sociale connectorer og virksomheds-connectorer for at kalde deres API'er (f.eks. tilføje begivenheder i Google Kalender).",
        third_party_token_storage: {
          title: 'Tredjepartstoken',
          third_party_access_token_retrieval: 'Hentning af tredjepartsadgangstoken',
          third_party_token_tooltip:
            'For at gemme tokens skal du aktivere det i indstillingerne for den pågældende sociale connector eller virksomheds-connector.',
          third_party_token_description:
            'Når Account API er aktiveret, aktiveres hentning af tredjepartstokens automatisk.',
        },
      },
    },
    fields: {
      email: 'E-mailadresse',
      phone: 'Telefonnummer',
      social: 'Sociale identiteter',
      password: 'Adgangskode',
      mfa: 'Multifaktorgodkendelse',
      mfa_description: 'Lad brugere administrere deres MFA-metoder fra kontocentret.',
      passkey: 'Passkey',
      username: 'Brugernavn',
      name: 'Navn',
      avatar: 'Avatar',
      profile: 'Profil',
      profile_description: 'Styr adgangen til strukturerede profilattributter.',
      custom_data: 'Brugerdefinerede data',
      custom_data_description:
        'Styr adgangen til brugerdefinerede JSON-data, der er gemt på brugeren.',
      sessions: 'Sessioner',
      trusted_devices: 'Betroede enheder',
    },
    profile_fields: {
      title: 'Profilfelter til det færdige kontocenter',
      add_profile_fields: 'Tilføj profilfelter',
      hint: {
        not_in_list: 'Ikke på listen?',
        set_up: 'Opsæt',
        go_to: 'andre profilfelter nu.',
      },
      disabled_hint: {
        name: "For at tilføje feltet skal du først sætte tilladelsen 'Navn' til 'Redigér / Skrivebeskyttet' i afsnittet Brugerprofil nedenfor.",
        avatar:
          "For at tilføje feltet skal du først sætte tilladelsen 'Avatar' til 'Redigér / Skrivebeskyttet' i afsnittet Brugerprofil nedenfor.",
        profile:
          "For at tilføje feltet skal du først sætte tilladelsen 'Profil' til 'Redigér / Skrivebeskyttet' i afsnittet Brugerprofil nedenfor.",
        custom_data:
          "For at tilføje feltet skal du først sætte tilladelsen 'Brugerdefinerede data' til 'Redigér / Skrivebeskyttet' i afsnittet Brugerprofil nedenfor.",
      },
    },
    webauthn_related_origins: 'Relaterede WebAuthn-oprindelser',
    webauthn_related_origins_description:
      'Tilføj domænerne for dine frontend-applikationer, der må registrere passkeys via Account API.',
    webauthn_related_origins_error: 'Oprindelsen skal starte med https:// eller http://',
    delete_account_url: 'Slet konto',
    delete_account_url_description:
      "Angiv URL'en til dit eget endpoint, der håndterer sletning af konti med egen logik.",
    prebuilt_ui: {
      title: 'INTEGRÉR FÆRDIG BRUGERFLADE',
      description:
        'Integrér hurtigt det færdige kontocenter, sikkerhedsbekræftelsen eller et enkelt flow til profilopdatering med færdig brugerflade. Kombinér dit domæne med ruten for at få kontocentrets URL (f.eks. https://auth.foo.com/account/email).',
      permission_notice:
        'For at integrere disse færdige flows skal du sætte de relaterede Account API-tilladelser til <strong>Redigér</strong> i indstillingerne nedenfor.',
      account_center_title: 'Integrér det færdige kontocenter',
      account_center_description:
        'Send brugere til kontocentret for at administrere sikkerhedsindstillinger som e-mail, telefon, brugernavn, adgangskode, MFA og tilknyttede konti.',
      flows_title: 'Integrér færdige flows til sikkerhedsindstillinger',
      single_task_flows_title: 'Integrér et færdigt flow til en enkelt opgave',
      flows_description:
        "Kombinér dit domæne med ruten for at få URL'en til kontoindstillingen (f.eks. https://auth.foo.com/account/email). Tilføj eventuelt `redirect=` for at sende brugere tilbage til din app efter en vellykket opdatering, `show_success=true` for at beholde bekræftelsessiden, `ui_locales=` for at tilsidesætte standardsproget eller `identifier=` for at udfylde identifikatorfeltet på forhånd.",
      single_task_flows_description:
        'Send brugere direkte til et bestemt flow (f.eks. tilknytning af e-mail). Tilføj eventuelt `redirect=` for at sende brugere tilbage til din app efter en vellykket opdatering, `show_success=true` for at beholde bekræftelsessiden, `ui_locales=` for at tilsidesætte standardsproget eller `identifier=` for at udfylde identifikatorfeltet på forhånd.',
      tooltips: {
        email: 'Opdatér din primære e-mailadresse',
        phone: 'Opdatér dit primære telefonnummer',
        username: 'Opdatér dit brugernavn',
        password: 'Angiv en ny adgangskode',
        social: 'Tilknyt en social konto til login',
        social_change: 'Skift til en anden tilknyttet social konto',
        social_remove: 'Fjern en tilknyttet social konto',
        authenticator_app: 'Opsæt en ny godkendelsesapp til multifaktorgodkendelse',
        authenticator_app_replace: 'Erstat din eksisterende godkendelsesapp med en ny',
        passkey_add: 'Registrér en ny passkey',
        passkey_manage: 'Administrér dine eksisterende passkeys, eller tilføj nye',
        backup_codes_generate: 'Generér et nyt sæt med 10 backupkoder',
        backup_codes_manage: 'Se dine tilgængelige backupkoder, eller generér nye',
        account_center:
          'Gå til kontocentret for at administrere sikkerhedsindstillinger som e-mail, telefon, brugernavn, adgangskode, MFA og tilknyttede konti',
        profile:
          'Det centrale sted til at administrere dine personlige oplysninger (f.eks. navn, avatar)',
        sessions: 'Se og administrér dine aktive sessioner på alle enheder',
      },
      customize_note: 'Vil du ikke bruge den færdige oplevelse? Du kan',
      customize_link: 'i stedet tilpasse dine flows helt med Account API.',
    },
    custom_css: {
      title: 'TILPASSET CSS',
      description: 'Tilpas kontocentrets udseende med egen CSS.',
    },
  },
  sign_up_and_sign_in: {
    identifiers_email: 'E-mailadresse',
    identifiers_phone: 'Telefonnummer',
    identifiers_username: 'Brugernavn',
    identifiers_email_or_sms: 'E-mailadresse eller telefonnummer',
    identifiers_none: 'Ikke relevant',
    and: 'og',
    or: 'eller',
    sign_up: {
      title: 'TILMELDING',
      sign_up_identifier: 'Identifikatorer til tilmelding',
      identifier_description: 'Alle valgte identifikatorer er påkrævede, når en ny konto oprettes.',
      sign_up_authentication: 'Godkendelsesindstilling for tilmelding',
      verification_tip:
        'Brugere skal bekræfte den e-mail eller det telefonnummer, du har konfigureret, ved at indtaste en bekræftelseskode under tilmeldingen.',
      authentication_description:
        'Alle valgte handlinger er obligatoriske for at gennemføre flowet.',
      set_a_password_option: 'Opret din adgangskode',
      verify_at_sign_up_option: 'Bekræft ved tilmelding',
      social_only_creation_description: '(Gælder konti, der kun oprettes via socialt login)',
      collect_user_profile: 'Indsaml brugerprofil',
      add_profile_fields: 'Tilføj profilfelter',
      profile_fields_hint: {
        not_in_list: 'Ikke på listen?',
        set_up: 'Opsæt',
        go_to: 'andre profilfelter nu.',
      },
    },
    sign_in: {
      title: 'LOGIN',
      sign_in_identifier_and_auth: 'Identifikator- og godkendelsesindstillinger for login',
      description: 'Brugere kan logge ind med en hvilken som helst af de tilgængelige muligheder.',
      add_sign_in_method: 'Tilføj loginmetode',
      add_sign_up_method: 'Tilføj tilmeldingsmetode',
      password_auth: 'Adgangskode',
      verification_code_auth: 'Bekræftelseskode',
      auth_swap_tip:
        'Byt rundt på mulighederne nedenfor for at bestemme, hvilken der vises først i flowet.',
      require_auth_factor: 'Du skal vælge mindst én godkendelsesfaktor.',
      forgot_password: 'Glemt adgangskode',
      forgot_password_description:
        'Brugere kan nulstille deres adgangskode med enhver tilgængelig bekræftelsesmetode.',
      add_verification_method: 'Tilføj bekræftelsesmetode',
      email_verification_code: 'Bekræftelseskode via e-mail',
      phone_verification_code: 'Bekræftelseskode via telefon',
    },
    social_sign_in: {
      title: 'SOCIALT LOGIN',
      social_sign_in: 'Socialt login',
      description:
        'Afhængigt af den obligatoriske identifikator, du har opsat, kan brugeren blive bedt om at angive en identifikator ved tilmelding via en social connector.',
      add_social_connector: 'Tilføj social connector',
      set_up_hint: {
        not_in_list: 'Ikke på listen?',
        set_up_more: 'Opsæt',
        go_to: 'andre sociale connectorer nu.',
      },
      settings_title: 'Oplevelse for socialt login',
      automatic_account_linking: 'Tilknyt automatisk konti med samme identifikator',
      automatic_account_linking_tip:
        'Når det er aktiveret, og en bruger logger ind med en ny social identitet, mens der findes præcis én eksisterende konto med samme identifikator (f.eks. en e-mailadresse), tilknytter GetCertus automatisk den sociale identitet til den konto. Brugeren bliver ikke bedt om at vælge, om kontiene skal tilknyttes.',
      required_sign_up_identifiers: 'Kræv, at brugere angiver manglende tilmeldingsidentifikatorer',
      required_sign_up_identifiers_tip:
        'Når det er aktiveret, skal brugere, der logger ind via sociale udbydere, udfylde manglende påkrævede identifikatorer (f.eks. e-mail), før login gennemføres. \n\nHvis det er deaktiveret, kan brugere fortsætte uden at angive manglende identifikatorer, selv hvis den sociale konto ikke synkroniserede dem.',
    },
    passkey_sign_in: {
      title: 'LOGIN MED PASSKEY',
      passkey_sign_in: 'Login med passkey',
      enable_passkey_sign_in_description:
        'Lad brugere hurtigt og sikkert få adgang til applikationen via passkey (WebAuthn) med biometri, sikkerhedsnøgle osv.',
      prompts: 'Passkey-prompter',
      show_passkey_button: 'Vis knappen “Fortsæt med passkey” på loginsiden',
      show_passkey_button_tip:
        'Uden knappen “Fortsæt med passkey” starter loginflowet med identifikatoren og viser muligheder for adgangskode og passkey i næste trin.',
      allow_autofill:
        'Tillad forslag og autoudfyldning af registrerede passkeys i identifikatorfelter',
    },
    tip: {
      set_a_password: 'En unik adgangskode til dit brugernavn er et must.',
      verify_at_sign_up:
        'Vi understøtter i øjeblikket kun bekræftet e-mail og telefon. Uden validering kan din brugerbase indeholde mange e-mailadresser eller telefonnumre af dårlig kvalitet.',
      password_auth:
        'Dette er nødvendigt, da du har aktiveret muligheden for at angive en adgangskode under tilmeldingen.',
      verification_code_auth:
        'Dette er nødvendigt, da du kun har aktiveret muligheden for at angive bekræftelseskode ved tilmelding. Du kan fjerne markeringen, når det er tilladt at angive adgangskode ved tilmeldingen.',
      email_mfa_enabled:
        'Bekræftelseskode via e-mail er allerede aktiveret til MFA og kan af sikkerhedshensyn ikke genbruges som primær loginmetode.',
      phone_mfa_enabled:
        'Bekræftelseskode via telefon er allerede aktiveret til MFA og kan af sikkerhedshensyn ikke genbruges som primær loginmetode.',
      delete_sign_in_method:
        'Dette er nødvendigt, da du har valgt {{identifier}} som påkrævet identifikator.',
      password_disabled_notification:
        'Muligheden "Opret din adgangskode" er deaktiveret for tilmelding med brugernavn, hvilket kan forhindre brugere i at logge ind. Bekræft for at gemme alligevel.',
    },
    advanced_options: {
      title: 'AVANCEREDE INDSTILLINGER',
      enable_single_sign_on: 'Aktivér single sign-on (SSO) for virksomheder',
      enable_single_sign_on_description:
        'Lad brugere logge ind i applikationen med single sign-on via deres virksomhedsidentiteter.',
      single_sign_on_hint: {
        prefix: 'Gå til afsnittet ',
        link: '"Enterprise SSO"',
        suffix: 'for at opsætte flere virksomheds-connectorer.',
      },
      enable_user_registration: 'Aktivér brugerregistrering',
      enable_user_registration_description:
        'Tillad eller forhindr brugerregistrering. Når det er deaktiveret, kan brugere stadig tilføjes i administrationskonsollen, men brugere kan ikke længere oprette konti via loginbrugerfladen.',
      unknown_session_redirect_url: 'Omdirigerings-URL ved ukendt session',
      unknown_session_redirect_url_tip:
        'Nogle gange genkender GetCertus ikke brugerens session på loginsiden, f.eks. når en session er udløbet, eller brugeren har bogmærket eller delt loginlinket. Som standard vises en 404-fejl “ukendt session”. For en bedre oplevelse kan du angive en reserve-URL, der sender brugeren tilbage til din app og genstarter godkendelsen.',
    },
    username_policy: {
      title: 'Politik for brugernavne',
      description:
        'Tilpas kravene til brugernavne, herunder længde, tilladte tegn og forskel på store og små bogstaver.',
      manage_button: 'Administrér',
      modal_title: 'Politik for brugernavne',
      modal_description: 'Tilpas kravene til brugernavne for dine slutbrugere.',
      length: {
        title: 'Brugernavnets længde',
        minimum: 'Minimum',
        maximum: 'Maksimum',
        min_greater_than_max: 'Minimumslængden må ikke være større end maksimumslængden.',
      },
      allowed_chars: {
        title: 'Tilladte tegntyper',
        uppercase: 'Store bogstaver (A-Z)',
        lowercase: 'Små bogstaver (a-z)',
        numbers: 'Tal (0-9)',
        underscore: 'Understregninger (_)',
        no_valid_leading_char:
          'Kun tal er ikke tilladt. Aktivér mindst én af store bogstaver, små bogstaver eller understregninger.',
        no_char_selected: 'Vælg mindst én tegntype.',
      },
      case_sensitive: {
        title: 'Brugernavne med forskel på store og små bogstaver',
        description:
          'Behandl store og små bogstaver som forskellige. ‘user123’ og ‘User123’ bliver så forskellige brugernavne.',
      },
      case_conflicts: {
        title: 'Konflikter mellem eksisterende brugernavne fundet',
        description:
          'Nogle brugernavne vil kollidere, hvis forskellen på store og små bogstaver slås fra. Løs de {{count}} gruppe(r) med konflikter nedenfor, før du gemmer.',
        sample_title: 'Brugernavne i konflikt',
      },
    },
  },
  content: {
    terms_of_use: {
      title: 'VILKÅR',
      description: 'Tilføj vilkår og privatlivspolitik for at opfylde compliancekrav.',
      terms_of_use: 'URL til brugsvilkår',
      terms_of_use_placeholder: 'https://your.terms.of.use/',
      privacy_policy: 'URL til privatlivspolitik',
      privacy_policy_placeholder: 'https://your.privacy.policy/',
      agree_to_terms: 'Acceptér vilkårene',
      agree_policies: {
        automatic: 'Acceptér automatisk vilkårene ved at fortsætte',
        manual_registration_only: 'Kræv accept via afkrydsningsfelt kun ved registrering',
        manual: 'Kræv accept via afkrydsningsfelt ved både registrering og login',
      },
    },
    languages: {
      title: 'SPROG',
      enable_auto_detect: 'Aktivér automatisk registrering',
      description:
        'Din software registrerer brugerens sprogindstilling og skifter til det lokale sprog. Du kan tilføje nye sprog ved at oversætte brugerfladen fra engelsk.',
      manage_language: 'Administrér sprog',
      default_language: 'Standardsprog',
      default_language_description_auto:
        'Standardsproget bruges, når brugerens registrerede sprog ikke findes i det aktuelle sprogbibliotek.',
      default_language_description_fixed:
        'Når automatisk registrering er slået fra, er standardsproget det eneste sprog, din software viser. Slå automatisk registrering til for flere sprog.',
    },
    support: {
      title: 'SUPPORT',
      subtitle: 'Vis dine supportkanaler på fejlsider, så brugere hurtigt får hjælp.',
      support_email: 'Support-e-mail',
      support_email_placeholder: 'support@email.com',
      support_website: 'Supportwebsted',
      support_website_placeholder: 'https://your.website/support',
    },
    manage_language: {
      title: 'Administrér sprog',
      subtitle:
        'Lokalisér produktoplevelsen ved at tilføje sprog og oversættelser. Dit bidrag kan angives som standardsprog.',
      add_language: 'Tilføj sprog',
      logto_provided: 'Leveret af GetCertus',
      key: 'Nøgle',
      logto_source_values: "GetCertus' kildeværdier",
      custom_values: 'Brugerdefinerede værdier',
      clear_all_tip: 'Ryd alle værdier',
      unsaved_description: 'Ændringer gemmes ikke, hvis du forlader siden uden at gemme.',
      deletion_tip: 'Slet sproget',
      deletion_title: 'Vil du slette det tilføjede sprog?',
      deletion_description: 'Efter sletning kan dine brugere ikke længere bruge det sprog.',
      default_language_deletion_title: 'Standardsproget kan ikke slettes.',
      default_language_deletion_description:
        '{{language}} er angivet som dit standardsprog og kan ikke slettes. ',
    },
  },
  setup_warning: {
    no_connector_sms:
      'Der er endnu ikke opsat en sms-connector. Indtil konfigurationen er færdig, kan brugere ikke logge ind med denne metode. <a>{{link}}</a> under "Connectorer"',
    no_connector_email:
      'Der er endnu ikke opsat en e-mail-connector. Indtil konfigurationen er færdig, kan brugere ikke logge ind med denne metode. <a>{{link}}</a> under "Connectorer"',
    no_connector_social:
      'Du har endnu ikke opsat nogen social connector. Tilføj først connectorer for at bruge sociale loginmetoder. <a>{{link}}</a> under "Connectorer".',
    no_connector_email_account_center:
      'Der er endnu ikke opsat en e-mail-connector. Opsæt den under <a>"E-mail- og sms-connectorer"</a>.',
    no_connector_sms_account_center:
      'Der er endnu ikke opsat en sms-connector. Opsæt den under <a>"E-mail- og sms-connectorer"</a>.',
    no_connector_social_account_center:
      'Der er endnu ikke opsat en social connector. Opsæt den under <a>"Sociale connectorer"</a>.',
    no_mfa_factor: 'Der er endnu ikke opsat en MFA-faktor. Opsæt den under <a>{{link}}</a>.',
    setup_link: 'Opsæt',
  },
  save_alert: {
    description:
      'Du indfører nye procedurer for login og tilmelding. Alle dine brugere kan blive påvirket af den nye opsætning. Er du sikker på, at du vil gennemføre ændringen?',
    before: 'Før',
    after: 'Efter',
    sign_up: 'Tilmelding',
    sign_in: 'Login',
    social: 'Socialt',
    forgot_password_migration_notice:
      'Vi har opgraderet bekræftelsen ved glemt adgangskode, så den understøtter brugerdefinerede metoder. Tidligere blev dette bestemt automatisk af dine e-mail- og sms-connectorer. Klik på <strong>Bekræft</strong> for at fuldføre opgraderingen.',
  },
  preview: {
    title: 'Forhåndsvisning af login',
    live_preview: 'Live-forhåndsvisning',
    live_preview_tip: 'Gem for at se ændringerne',
    native: 'Native',
    desktop_web: 'Web på computer',
    mobile_web: 'Mobilweb',
    desktop: 'Computer',
    mobile: 'Mobil',
  },
  custom_profile_fields: {
    table: {
      add_button: 'Tilføj profilfelt',
      title: {
        field_label: 'Feltetiket',
        type: 'Type',
        user_data_key: 'Nøgle til brugerdata',
      },
      placeholder: {
        title: 'Indsaml brugerprofil',
        description:
          'Tilpas felter for at indsamle flere profiloplysninger om brugere ved tilmelding.',
      },
    },
    type: {
      Text: 'Tekst',
      Number: 'Tal',
      Date: 'Dato',
      Checkbox: 'Afkrydsningsfelt (boolesk)',
      Select: 'Rullemenu (ét valg)',
      Url: 'URL',
      Regex: 'Regulært udtryk',
      Address: 'Adresse (sammensat)',
      Fullname: 'Fulde navn (sammensat)',
    },
    modal: {
      title: 'Tilføj profilfelt',
      subtitle: 'Tilpas felter for at indsamle flere profiloplysninger om brugere ved tilmelding.',
      built_in_properties: 'Grundlæggende brugerdata',
      custom_properties: 'Brugerdefinerede brugerdata',
      custom_data_field_name: 'Nøgle til brugerdata',
      custom_data_field_input_placeholder:
        'Indtast nøglen til brugerdata, f.eks. `myFavoriteFieldName`',
      custom_field: {
        title: 'Brugerdefinerede data',
        description:
          'Yderligere brugeregenskaber, du kan definere til din applikations særlige krav.',
      },
      type_required: 'Vælg en egenskabstype',
      create_button: 'Opret profilfelt',
      avatar: {
        description:
          "Lad brugere uploade deres profilbillede ved tilmelding. URL'en til det uploadede billede gemmes som brugerens avatar.",
        storage_not_configured:
          'Upload af avatar kræver en konfigureret lagerudbyder. Konfigurér lager, før du tilføjer feltet.',
      },
    },
    details: {
      page_title: 'Detaljer for profilfelt',
      back_to_sie: 'Tilbage til loginoplevelsen',
      enter_field_name: 'Indtast profilfeltets navn',
      delete_description:
        'Handlingen kan ikke fortrydes. Er du sikker på, at du vil slette dette profilfelt?',
      field_deleted: 'Profilfeltet {{name}} er slettet.',
      key: 'Nøgle til brugerdata',
      field_name: 'Feltnavn',
      field_type: 'Felttype',
      settings: 'Indstillinger',
      settings_description:
        'Tilpas felter for at indsamle flere profiloplysninger om brugere ved tilmelding.',
      address_format: 'Adresseformat',
      single_line_address: 'Adresse på én linje',
      multi_line_address: 'Adresse på flere linjer (f.eks. gade, by, region, postnummer, land)',
      components: 'Komponenter',
      components_tip: 'Vælg de komponenter, som det sammensatte felt består af.',
      label: 'Feltetiket',
      label_placeholder: 'Etiket',
      label_tip: 'Brug for lokalisering? Tilføj sprog under <a>Loginoplevelse > Indhold</a>',
      label_tooltip:
        'Flydende etiket, der viser, hvad feltet bruges til. Den vises inde i feltet og flytter op over feltet, når det har fokus eller en værdi.',
      placeholder: 'Pladsholder for feltet',
      placeholder_placeholder: 'Pladsholder',
      placeholder_tooltip:
        'Eksempel eller formattip vist inde i feltet. Vises typisk, efter etiketten er flyttet op, og bør være kort (f.eks. DD-MM-ÅÅÅÅ).',
      description: 'Feltbeskrivelse',
      description_placeholder: 'Beskrivelse',
      description_tooltip:
        'Hjælpetekst under tekstfeltet. Brug den til længere instruktioner eller tilgængelighedsnoter.',
      options: 'Valgmuligheder',
      options_tip:
        'Indtast hver valgmulighed på en ny linje. Brug værdi:etiket (f.eks. red:Rød). Du kan også kun indtaste en værdi; uden etiket vises værdien som etiket.',
      options_placeholder: 'value1:label1\nvalue2:label2\nvalue3:label3',
      regex: 'Regulært udtryk',
      regex_tip: 'Definér et regulært udtryk til at validere input.',
      regex_placeholder: '^[a-zA-Z0-9]+$',
      date_format: 'Datoformat',
      date_format_us: 'MM/dd/yyyy (f.eks. USA)',
      date_format_uk: 'dd/MM/yyyy (f.eks. Storbritannien og Europa)',
      date_format_iso: 'yyyy-MM-dd (international standard)',
      custom_date_format: 'Brugerdefineret datoformat',
      custom_date_format_placeholder:
        'Indtast det brugerdefinerede datoformat, f.eks. "MM-dd-yyyy"',
      custom_date_format_tip: 'Se dokumentationen for <a>date-fns</a> for gyldige formatkoder.',
      input_length: 'Inputlængde',
      value_range: 'Værdiinterval',
      min: 'Minimum',
      max: 'Maksimum',
      default_value: 'Standardværdi',
      checkbox_checked: 'Markeret (sand)',
      checkbox_unchecked: 'Ikke markeret (falsk)',
      required: 'Påkrævet',
      required_description:
        'Når det er aktiveret, skal brugerne udfylde feltet. Ellers er det valgfrit.',
      avatar_upload_description:
        "Slutbrugere uploader deres avatar ved tilmelding. Den gemte værdi er URL'en til det uploadede billede.",
    },
  },
};

export default Object.freeze(sign_in_exp);
