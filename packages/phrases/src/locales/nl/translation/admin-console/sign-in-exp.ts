/* GetCertus addition (MPL-2.0, see GETCERTUS.md): admin console phrases. */
const sign_in_exp = {
  page_title: 'Inlogervaring',
  page_title_with_account: 'Inloggen & account',
  title: 'Inloggen & account',
  description: 'Pas de authenticatieflows en de UI aan en bekijk de kant-en-klare ervaring live.',
  tabs: {
    branding: 'Huisstijl',
    sign_up_and_sign_in: 'Registreren en inloggen',
    collect_user_profile: 'Gebruikersprofiel verzamelen',
    account_center: 'Accountcentrum',
    content: 'Inhoud',
    password_policy: 'Wachtwoordbeleid',
  },
  welcome: {
    title: 'Inlogervaring aanpassen',
    description:
      'Ga snel aan de slag met je eerste inloginstellingen. Deze handleiding loopt alle benodigde instellingen met je door.',
    get_started: 'Aan de slag',
    apply_remind: 'Let op: de inlogervaring geldt voor alle applicaties onder dit account.',
  },
  color: {
    title: 'KLEUR',
    primary_color: 'Merkkleur',
    dark_primary_color: 'Merkkleur (donker)',
    dark_mode: 'Donkere modus inschakelen',
    dark_mode_description:
      'Je app krijgt een automatisch gegenereerd donker thema op basis van je merkkleur en het algoritme van GetCertus. Je kunt dit vrij aanpassen.',
    dark_mode_reset_tip: 'Kleur voor donkere modus opnieuw berekenen op basis van de merkkleur.',
    reset: 'Opnieuw berekenen',
  },
  branding: {
    title: 'HUISSTIJL',
    ui_style: 'Stijl',
    with_light: '{{value}}',
    with_dark: '{{value}} (donker)',
    app_logo_and_favicon: 'App-logo en favicon',
    company_logo_and_favicon: 'Bedrijfslogo en favicon',
    organization_logo_and_favicon: 'Organisatielogo en favicon',
    hide_logto_branding: 'GetCertus-branding verbergen',
    hide_logto_branding_description:
      'Verwijder "Powered by GetCertus". Zet alleen je eigen merk in de schijnwerpers met een strakke, professionele inlogervaring.',
    hide_logto_branding_oss_note:
      'Voor het verbergen van de signatuur is de GetCertus <a>Branding-add-on</a> nodig.',
  },
  branding_uploads: {
    app_logo: {
      title: 'App-logo',
      url: 'URL van app-logo',
      url_placeholder: 'https://your.cdn.domain/logo.png',
      error: 'App-logo: {{error}}',
    },
    company_logo: {
      title: 'Bedrijfslogo',
      url: 'URL van bedrijfslogo',
      url_placeholder: 'https://your.cdn.domain/logo.png',
      error: 'Bedrijfslogo: {{error}}',
    },
    organization_logo: {
      title: 'Afbeelding uploaden',
      url: 'URL van organisatielogo',
      url_placeholder: 'https://your.cdn.domain/logo.png',
      error: 'Organisatielogo: {{error}}',
    },
    connector_logo: {
      title: 'Afbeelding uploaden',
      url: 'URL van connectorlogo',
      url_placeholder: 'https://your.cdn.domain/logo.png',
      error: 'Connectorlogo: {{error}}',
    },
    favicon: {
      title: 'Favicon',
      url: 'URL van favicon',
      url_placeholder: 'https://your.cdn.domain/favicon.ico',
      error: 'Favicon: {{error}}',
    },
  },
  custom_ui: {
    title: 'Aangepaste UI',
    cloud_tag: 'Cloud',
    css_code_editor_title: 'Aangepaste CSS',
    css_code_editor_field_title: 'CSS-overschrijvingen',
    css_code_editor_description1: 'Bekijk het voorbeeld van aangepaste CSS.',
    css_code_editor_description2: '<a>{{link}}</a>',
    css_code_editor_description_link_content: 'Meer informatie',
    css_code_editor_content_placeholder:
      'Voer hier je CSS-overschrijvingen in om de stijl van alles precies naar wens aan te passen. Laat je creativiteit los en laat je UI opvallen.',
    bring_your_ui_title: 'Bring your UI',
    bring_your_ui_upload_title: 'Eigen UI-bestanden uploaden',
    bring_your_ui_description:
      'Upload een gecomprimeerd pakket (.zip) om de kant-en-klare UI van GetCertus te vervangen door je eigen code. <a>Meer informatie</a>',
    bring_your_ui_oss_description: 'Pas de inlog-UI aan met je eigen code.',
    bring_your_ui_oss_card_description:
      'Het uploaden van een eigen UI zit nog niet in de GetCertus-plannen. <a>Bekijk plannen en add-ons</a>.',
    bring_your_ui_oss_try_cloud: 'Plannen bekijken',
    preview_with_bring_your_ui_description:
      'Je eigen UI-bestanden zijn geüpload en worden nu geserveerd. Daarom is het ingebouwde voorbeeldvenster uitgeschakeld.\nKlik op de knop "Live preview" om je eigen inlog-UI in een nieuw browsertabblad te testen.',
    csp_description:
      'Sta extra bronexpressies toe voor je eigen inlog-UI. Deze waarden gelden alleen als er eigen UI-bestanden worden geserveerd.',
    csp_script_src: 'Toegestane script-src',
    csp_script_src_tip:
      'Sta HTTPS-bronexpressies toe voor scripts die je eigen UI laadt, zoals https://scripts.example.com of https://*.example.com.',
    csp_connect_src: 'Toegestane connect-src',
    csp_connect_src_tip:
      'Sta HTTPS- of WSS-bronexpressies toe voor netwerkverzoeken van je eigen UI, zoals https://api.example.com of wss://events.example.com.',
    csp_source_invalid_error:
      "Voer een geldige bronexpressie in. Gebruik https://-URL's; connect-src ondersteunt ook wss://. CSP-sleutelwoorden en puntkomma's worden niet ondersteund.",
    csp_source_duplicate_error: 'Deze bronexpressie staat al in de lijst.',
  },
  account_center: {
    title: 'ACCOUNTCENTRUM',
    description:
      'Bied eindgebruikers een accountcentrum om hun accountbeveiliging en profielgegevens te beheren.',
    enable_account_api: 'Accountcentrum en Account API inschakelen',
    enable_account_api_description:
      'Schakel zowel de Account API voor gebruikers als het kant-en-klare accountcentrum van GetCertus in. Als dit uit staat, zijn beide functies niet beschikbaar.',
    field_options: {
      off: 'Uit',
      edit: 'Bewerken',
      read_only: 'Alleen lezen',
      enabled: 'Ingeschakeld',
      disabled: 'Uitgeschakeld',
    },
    sections: {
      account_security: {
        title: 'ACCOUNTBEVEILIGING',
        description:
          'Beheer de toegang tot de Account API, zodat gebruikers na het inloggen hun identiteitsgegevens en authenticatiefactoren kunnen bekijken of bewerken.',
        security_verification: {
          title: 'Beveiligingsverificatie',
          description:
            'Voordat ze beveiligingsinstellingen wijzigen, moeten gebruikers hun identiteit verifiëren om een verificatierecord-ID te krijgen dat 10 minuten geldig is. Om een verificatiemethode (e-mail, telefoon, wachtwoord) in te schakelen, stel je het Account API-recht hieronder in op <strong>Alleen lezen</strong> (minimaal) of <strong>Bewerken</strong>, zodat het systeem kan zien of de gebruiker deze heeft ingesteld. <a>Meer informatie</a>',
        },
        groups: {
          identifiers: {
            title: 'Identifiers',
          },
          authentication_factors: {
            title: 'Authenticatiefactoren',
          },
          session_management: {
            title: 'Sessiebeheer',
          },
        },
      },
      user_profile: {
        title: 'GEBRUIKERSPROFIEL',
        description:
          'Beheer de toegang tot de Account API, zodat gebruikers na het inloggen hun basis- of aangepaste profielgegevens kunnen bekijken of bewerken.',
        groups: {
          profile_data: {
            title: 'Profielgegevens',
          },
        },
      },
      secret_vault: {
        title: 'SECRET VAULT',
        description:
          "Sla voor sociale en enterprise-connectors veilig toegangstokens van derden op om hun API's aan te roepen (bijv. afspraken toevoegen aan Google Agenda).",
        third_party_token_storage: {
          title: 'Token van derden',
          third_party_access_token_retrieval: 'Toegangstokens van derden ophalen',
          third_party_token_tooltip:
            'Om tokens op te slaan, schakel je dit in bij de instellingen van de betreffende sociale of enterprise-connector.',
          third_party_token_description:
            'Zodra de Account API is ingeschakeld, wordt het ophalen van tokens van derden automatisch geactiveerd.',
        },
      },
    },
    fields: {
      email: 'E-mailadres',
      phone: 'Telefoonnummer',
      social: 'Sociale identiteiten',
      password: 'Wachtwoord',
      mfa: 'Meervoudige authenticatie',
      mfa_description: 'Laat gebruikers hun MFA-methoden beheren vanuit het accountcentrum.',
      passkey: 'Passkey',
      username: 'Gebruikersnaam',
      name: 'Naam',
      avatar: 'Avatar',
      profile: 'Profiel',
      profile_description: 'Beheer de toegang tot gestructureerde profielattributen.',
      custom_data: 'Aangepaste gegevens',
      custom_data_description: 'Beheer de toegang tot aangepaste JSON-gegevens van de gebruiker.',
      sessions: 'Sessies',
      trusted_devices: 'Vertrouwde apparaten',
    },
    profile_fields: {
      title: 'Profielvelden voor het kant-en-klare accountcentrum',
      add_profile_fields: 'Profielvelden toevoegen',
      hint: {
        not_in_list: 'Staat het er niet bij?',
        set_up: 'Stel nu',
        go_to: 'andere profielvelden in.',
      },
      disabled_hint: {
        name: "Om dit veld toe te voegen, stel je eerst het recht 'Naam' in op 'Bewerken / Alleen lezen' in het onderdeel Gebruikersprofiel hieronder.",
        avatar:
          "Om dit veld toe te voegen, stel je eerst het recht 'Avatar' in op 'Bewerken / Alleen lezen' in het onderdeel Gebruikersprofiel hieronder.",
        profile:
          "Om dit veld toe te voegen, stel je eerst het recht 'Profiel' in op 'Bewerken / Alleen lezen' in het onderdeel Gebruikersprofiel hieronder.",
        custom_data:
          "Om dit veld toe te voegen, stel je eerst het recht 'Aangepaste gegevens' in op 'Bewerken / Alleen lezen' in het onderdeel Gebruikersprofiel hieronder.",
      },
    },
    webauthn_related_origins: 'Gerelateerde WebAuthn-origins',
    webauthn_related_origins_description:
      'Voeg de domeinen toe van je frontend-applicaties die via de Account API passkeys mogen registreren.',
    webauthn_related_origins_error: 'De origin moet beginnen met https:// of http://',
    delete_account_url: 'Account verwijderen',
    delete_account_url_description:
      'Geef de URL van je eigen endpoint op om het verwijderen van accounts met eigen logica af te handelen.',
    prebuilt_ui: {
      title: 'KANT-EN-KLARE UI INTEGREREN',
      description:
        'Integreer snel het kant-en-klare accountcentrum, de beveiligingsverificatie of een losse flow voor profielwijziging met een kant-en-klare UI. Combineer je domein met de route om de URL van je accountcentrum te vormen (bijv. https://auth.foo.com/account/email).',
      permission_notice:
        'Om deze kant-en-klare flows te integreren, stel je de bijbehorende Account API-rechten hieronder in op <strong>Bewerken</strong>.',
      account_center_title: 'Het kant-en-klare accountcentrum integreren',
      account_center_description:
        'Stuur gebruikers naar het accountcentrum om beveiligingsinstellingen te beheren, zoals e-mail, telefoon, gebruikersnaam, wachtwoord, MFA en gekoppelde accounts.',
      flows_title: 'Kant-en-klare flows voor beveiligingsinstellingen integreren',
      single_task_flows_title: 'Een kant-en-klare flow voor één taak integreren',
      flows_description:
        'Combineer je domein met de route om de URL van je accountinstelling te vormen (bijv. https://auth.foo.com/account/email). Voeg eventueel `redirect=` toe om gebruikers na een geslaagde wijziging terug te sturen naar je app, `show_success=true` om de succespagina zichtbaar te houden, `ui_locales=` om de standaardtaal te overschrijven, of `identifier=` om het invoerveld voor de identifier vooraf in te vullen.',
      single_task_flows_description:
        'Stuur gebruikers direct naar een specifieke flow (bijv. e-mail koppelen). Voeg eventueel `redirect=` toe om gebruikers na een geslaagde wijziging terug te sturen naar je app, `show_success=true` om de succespagina zichtbaar te houden, `ui_locales=` om de standaardtaal te overschrijven, of `identifier=` om het invoerveld voor de identifier vooraf in te vullen.',
      tooltips: {
        email: 'Je primaire e-mailadres wijzigen',
        phone: 'Je primaire telefoonnummer wijzigen',
        username: 'Je gebruikersnaam wijzigen',
        password: 'Een nieuw wachtwoord instellen',
        social: 'Een sociaal account koppelen om in te loggen',
        social_change: 'Wisselen naar een ander gekoppeld sociaal account',
        social_remove: 'Een gekoppeld sociaal account verwijderen',
        authenticator_app: 'Een nieuwe authenticator-app instellen voor meervoudige authenticatie',
        authenticator_app_replace: 'Je bestaande authenticator-app vervangen door een nieuwe',
        passkey_add: 'Een nieuwe passkey registreren',
        passkey_manage: 'Je bestaande passkeys beheren of nieuwe toevoegen',
        backup_codes_generate: 'Een nieuwe set van 10 back-upcodes genereren',
        backup_codes_manage: 'Je beschikbare back-upcodes bekijken of nieuwe genereren',
        account_center:
          'Naar het accountcentrum om beveiligingsinstellingen te beheren, zoals e-mail, telefoon, gebruikersnaam, wachtwoord, MFA en gekoppelde accounts',
        profile: 'De centrale plek om je persoonlijke gegevens te beheren (bijv. naam, avatar)',
        sessions: 'Je actieve sessies op alle apparaten bekijken en beheren',
      },
      customize_note: 'Wil je de kant-en-klare ervaring niet? Je kunt ook',
      customize_link: 'je flows volledig zelf vormgeven met de Account API.',
    },
    custom_css: {
      title: 'AANGEPASTE CSS',
      description: 'Pas het uiterlijk van het accountcentrum aan met eigen CSS.',
    },
  },
  sign_up_and_sign_in: {
    identifiers_email: 'E-mailadres',
    identifiers_phone: 'Telefoonnummer',
    identifiers_username: 'Gebruikersnaam',
    identifiers_email_or_sms: 'E-mailadres of telefoonnummer',
    identifiers_none: 'Niet van toepassing',
    and: 'en',
    or: 'of',
    sign_up: {
      title: 'REGISTREREN',
      sign_up_identifier: 'Identifiers voor registratie',
      identifier_description:
        'Alle gekozen identifiers zijn verplicht bij het aanmaken van een nieuw account.',
      sign_up_authentication: 'Authenticatie-instelling voor registratie',
      verification_tip:
        'Gebruikers moeten het ingestelde e-mailadres of telefoonnummer bij registratie verifiëren met een verificatiecode.',
      authentication_description: 'Alle gekozen acties zijn verplicht om de flow te voltooien.',
      set_a_password_option: 'Je wachtwoord aanmaken',
      verify_at_sign_up_option: 'Verifiëren bij registratie',
      social_only_creation_description:
        '(Dit geldt voor accounts die alleen via sociaal inloggen worden aangemaakt)',
      collect_user_profile: 'Gebruikersprofiel verzamelen',
      add_profile_fields: 'Profielvelden toevoegen',
      profile_fields_hint: {
        not_in_list: 'Staat het er niet bij?',
        set_up: 'Stel nu',
        go_to: 'andere profielvelden in.',
      },
    },
    sign_in: {
      title: 'INLOGGEN',
      sign_in_identifier_and_auth: 'Identifier- en authenticatie-instellingen voor inloggen',
      description: 'Gebruikers kunnen inloggen met elk van de beschikbare opties.',
      add_sign_in_method: 'Inlogmethode toevoegen',
      add_sign_up_method: 'Registratiemethode toevoegen',
      password_auth: 'Wachtwoord',
      verification_code_auth: 'Verificatiecode',
      auth_swap_tip:
        'Wissel de opties hieronder om te bepalen welke als eerste in de flow verschijnt.',
      require_auth_factor: 'Je moet minstens één authenticatiefactor kiezen.',
      forgot_password: 'Wachtwoord vergeten',
      forgot_password_description:
        'Gebruikers kunnen hun wachtwoord opnieuw instellen met elke beschikbare verificatiemethode.',
      add_verification_method: 'Verificatiemethode toevoegen',
      email_verification_code: 'Verificatiecode per e-mail',
      phone_verification_code: 'Verificatiecode per telefoon',
    },
    social_sign_in: {
      title: 'SOCIAAL INLOGGEN',
      social_sign_in: 'Sociaal inloggen',
      description:
        'Afhankelijk van de verplichte identifier die je hebt ingesteld, kan je gebruiker gevraagd worden een identifier op te geven bij registratie via een sociale connector.',
      add_social_connector: 'Sociale connector toevoegen',
      set_up_hint: {
        not_in_list: 'Staat het er niet bij?',
        set_up_more: 'Stel nu',
        go_to: 'andere sociale connectors in.',
      },
      settings_title: 'Ervaring van sociaal inloggen',
      automatic_account_linking: 'Accounts met dezelfde identifier automatisch koppelen',
      automatic_account_linking_tip:
        'Als dit is ingeschakeld en een gebruiker inlogt met een nieuwe sociale identiteit terwijl er precies één bestaand account met dezelfde identifier is (bijv. een e-mailadres), koppelt GetCertus de sociale identiteit automatisch aan dat account. De gebruiker hoeft dan niet te kiezen of de accounts gekoppeld worden.',
      required_sign_up_identifiers: 'Gebruikers ontbrekende registratie-identifiers laten opgeven',
      required_sign_up_identifiers_tip:
        'Als dit is ingeschakeld, moeten gebruikers die via een sociale provider inloggen ontbrekende verplichte identifiers (zoals e-mail) invullen voordat het inloggen is voltooid. \n\nAls dit is uitgeschakeld, kunnen gebruikers doorgaan zonder ontbrekende identifiers op te geven, ook als het sociale account ze niet heeft gesynchroniseerd.',
    },
    passkey_sign_in: {
      title: 'INLOGGEN MET PASSKEY',
      passkey_sign_in: 'Inloggen met passkey',
      enable_passkey_sign_in_description:
        'Laat gebruikers snel en veilig toegang krijgen tot de applicatie via een passkey (WebAuthn), met biometrie, een beveiligingssleutel, enz.',
      prompts: 'Passkey-prompts',
      show_passkey_button: 'Knop “Doorgaan met passkey” tonen op de inlogpagina',
      show_passkey_button_tip:
        'Zonder de knop “Doorgaan met passkey” begint de inlogflow met de identifier en verschijnen de opties voor wachtwoord en passkey in de volgende stap.',
      allow_autofill:
        'Geregistreerde passkeys voorstellen en automatisch invullen in identifiervelden',
    },
    tip: {
      set_a_password: 'Een uniek wachtwoord bij je gebruikersnaam is verplicht.',
      verify_at_sign_up:
        'We ondersteunen momenteel alleen geverifieerde e-mail en telefoon. Zonder verificatie kan je gebruikersbestand veel e-mailadressen of telefoonnummers van slechte kwaliteit bevatten.',
      password_auth:
        'Dit is nodig omdat je de optie hebt ingeschakeld om bij registratie een wachtwoord in te stellen.',
      verification_code_auth:
        'Dit is nodig omdat je alleen de optie hebt ingeschakeld om bij registratie een verificatiecode op te geven. Je kunt het vakje uitvinken als het instellen van een wachtwoord bij registratie is toegestaan.',
      email_mfa_enabled:
        'De verificatiecode per e-mail is al ingeschakeld voor MFA en kan om veiligheidsredenen niet ook als primaire inlogmethode worden gebruikt.',
      phone_mfa_enabled:
        'De verificatiecode per telefoon is al ingeschakeld voor MFA en kan om veiligheidsredenen niet ook als primaire inlogmethode worden gebruikt.',
      delete_sign_in_method:
        'Dit is nodig omdat je {{identifier}} als verplichte identifier hebt gekozen.',
      password_disabled_notification:
        'De optie "Je wachtwoord aanmaken" is uitgeschakeld voor registratie met gebruikersnaam, waardoor gebruikers mogelijk niet kunnen inloggen. Bevestig om toch op te slaan.',
    },
    advanced_options: {
      title: 'GEAVANCEERDE OPTIES',
      enable_single_sign_on: 'Enterprise single sign-on (SSO) inschakelen',
      enable_single_sign_on_description:
        'Laat gebruikers met hun identiteit van de organisatie via single sign-on inloggen op de applicatie.',
      single_sign_on_hint: {
        prefix: 'Ga naar het onderdeel ',
        link: '"Enterprise SSO"',
        suffix: 'om meer enterprise-connectors in te stellen.',
      },
      enable_user_registration: 'Gebruikersregistratie inschakelen',
      enable_user_registration_description:
        'Sta gebruikersregistratie toe of niet. Als dit is uitgeschakeld, kun je gebruikers nog steeds toevoegen in de beheerconsole, maar kunnen gebruikers zelf geen account meer aanmaken via de inlog-UI.',
      unknown_session_redirect_url: 'Redirect-URL bij onbekende sessie',
      unknown_session_redirect_url_tip:
        'Soms herkent GetCertus de sessie van een gebruiker op de inlogpagina niet, bijvoorbeeld als een sessie is verlopen of de gebruiker de inloglink als bladwijzer heeft opgeslagen of gedeeld. Standaard verschijnt dan een 404-fout “onbekende sessie”. Stel een terugval-URL in om gebruikers terug te sturen naar je app en de authenticatie opnieuw te starten.',
    },
    username_policy: {
      title: 'Beleid voor gebruikersnamen',
      description:
        'Pas de eisen voor gebruikersnamen aan, zoals lengte, toegestane tekens en hoofdlettergevoeligheid.',
      manage_button: 'Beheren',
      modal_title: 'Beleid voor gebruikersnamen',
      modal_description: 'Pas de eisen voor gebruikersnamen van je eindgebruikers aan.',
      length: {
        title: 'Lengte van gebruikersnaam',
        minimum: 'Minimum',
        maximum: 'Maximum',
        min_greater_than_max: 'De minimale lengte mag niet groter zijn dan de maximale lengte.',
      },
      allowed_chars: {
        title: 'Toegestane tekentypen',
        uppercase: 'Hoofdletters (A-Z)',
        lowercase: 'Kleine letters (a-z)',
        numbers: 'Cijfers (0-9)',
        underscore: 'Underscores (_)',
        no_valid_leading_char:
          'Alleen cijfers zijn niet toegestaan. Schakel minstens hoofdletters, kleine letters of underscores in.',
        no_char_selected: 'Kies minstens één tekentype.',
      },
      case_sensitive: {
        title: 'Hoofdlettergevoelige gebruikersnamen',
        description:
          'Behandel hoofdletters en kleine letters als verschillend. ‘user123’ en ‘User123’ zijn dan verschillende gebruikersnamen.',
      },
      case_conflicts: {
        title: 'Conflicten met bestaande gebruikersnamen gevonden',
        description:
          'Sommige gebruikersnamen botsen als hoofdlettergevoeligheid wordt uitgeschakeld. Los de {{count}} conflicterende groep(en) hieronder op voordat je opslaat.',
        sample_title: 'Conflicterende gebruikersnamen',
      },
    },
  },
  content: {
    terms_of_use: {
      title: 'VOORWAARDEN',
      description: 'Voeg voorwaarden en privacybeleid toe om aan compliance-eisen te voldoen.',
      terms_of_use: 'URL van gebruiksvoorwaarden',
      terms_of_use_placeholder: 'https://your.terms.of.use/',
      privacy_policy: 'URL van privacybeleid',
      privacy_policy_placeholder: 'https://your.privacy.policy/',
      agree_to_terms: 'Akkoord met voorwaarden',
      agree_policies: {
        automatic: 'Bij doorgaan automatisch akkoord met voorwaarden',
        manual_registration_only: 'Akkoord via selectievakje alleen bij registratie',
        manual: 'Akkoord via selectievakje bij registratie en inloggen',
      },
    },
  },
};

export default Object.freeze(sign_in_exp);
