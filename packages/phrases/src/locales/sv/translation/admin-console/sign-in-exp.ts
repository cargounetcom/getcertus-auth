/* GetCertus addition (MPL-2.0, see GETCERTUS.md): admin console phrases. */
const sign_in_exp = {
  page_title: 'Inloggningsupplevelse',
  page_title_with_account: 'Inloggning & konto',
  title: 'Inloggning & konto',
  description:
    'Anpassa autentiseringsflöden och gränssnitt, och förhandsgranska den färdiga upplevelsen i realtid.',
  tabs: {
    branding: 'Varumärke',
    sign_up_and_sign_in: 'Registrering och inloggning',
    collect_user_profile: 'Samla in användarprofil',
    account_center: 'Kontocenter',
    content: 'Innehåll',
    password_policy: 'Lösenordspolicy',
  },
  welcome: {
    title: 'Anpassa inloggningsupplevelsen',
    description:
      'Kom snabbt igång med din första inloggningskonfiguration. Guiden tar dig igenom alla nödvändiga inställningar.',
    get_started: 'Kom igång',
    apply_remind:
      'Observera att inloggningsupplevelsen gäller för alla applikationer under detta konto.',
  },
  color: {
    title: 'FÄRG',
    primary_color: 'Varumärkesfärg',
    dark_primary_color: 'Varumärkesfärg (mörk)',
    dark_mode: 'Aktivera mörkt läge',
    dark_mode_description:
      'Din app får ett automatiskt genererat mörkt tema baserat på varumärkesfärgen och GetCertus algoritm. Du kan anpassa det fritt.',
    dark_mode_reset_tip: 'Beräkna om färgen för mörkt läge utifrån varumärkesfärgen.',
    reset: 'Beräkna om',
  },
  branding: {
    title: 'VARUMÄRKE',
    ui_style: 'Stil',
    with_light: '{{value}}',
    with_dark: '{{value}} (mörk)',
    app_logo_and_favicon: 'Applogotyp och favicon',
    company_logo_and_favicon: 'Företagslogotyp och favicon',
    organization_logo_and_favicon: 'Organisationslogotyp och favicon',
    hide_logto_branding: 'Dölj GetCertus varumärke',
    hide_logto_branding_description:
      'Ta bort "Powered by GetCertus". Lyft fram enbart ditt varumärke med en ren och professionell inloggningsupplevelse.',
    hide_logto_branding_oss_note:
      'För att dölja signaturen krävs GetCertus <a>tillägg Branding</a>.',
  },
  branding_uploads: {
    app_logo: {
      title: 'Applogotyp',
      url: 'URL till applogotyp',
      url_placeholder: 'https://your.cdn.domain/logo.png',
      error: 'Applogotyp: {{error}}',
    },
    company_logo: {
      title: 'Företagslogotyp',
      url: 'URL till företagslogotyp',
      url_placeholder: 'https://your.cdn.domain/logo.png',
      error: 'Företagslogotyp: {{error}}',
    },
    organization_logo: {
      title: 'Ladda upp bild',
      url: 'URL till organisationslogotyp',
      url_placeholder: 'https://your.cdn.domain/logo.png',
      error: 'Organisationslogotyp: {{error}}',
    },
    connector_logo: {
      title: 'Ladda upp bild',
      url: 'URL till kopplingens logotyp',
      url_placeholder: 'https://your.cdn.domain/logo.png',
      error: 'Kopplingens logotyp: {{error}}',
    },
    favicon: {
      title: 'Favicon',
      url: 'URL till favicon',
      url_placeholder: 'https://your.cdn.domain/favicon.ico',
      error: 'Favicon: {{error}}',
    },
  },
  custom_ui: {
    title: 'Anpassat gränssnitt',
    cloud_tag: 'Cloud',
    css_code_editor_title: 'Anpassad CSS',
    css_code_editor_field_title: 'CSS-åsidosättningar',
    css_code_editor_description1: 'Se exemplet på anpassad CSS.',
    css_code_editor_description2: '<a>{{link}}</a>',
    css_code_editor_description_link_content: 'Läs mer',
    css_code_editor_content_placeholder:
      'Ange dina CSS-åsidosättningar här för att anpassa stilen på allt exakt som du vill. Låt kreativiteten flöda och få ditt gränssnitt att sticka ut.',
    bring_your_ui_title: 'Bring your UI',
    bring_your_ui_upload_title: 'Ladda upp egna gränssnittsfiler',
    bring_your_ui_description:
      'Ladda upp ett komprimerat paket (.zip) för att ersätta GetCertus färdiga gränssnitt med din egen kod. <a>Läs mer</a>',
    bring_your_ui_oss_description: 'Anpassa inloggningsgränssnittet med din egen kod.',
    bring_your_ui_oss_card_description:
      'Uppladdning av eget gränssnitt ingår ännu inte i GetCertus planer. <a>Se planer och tillägg</a>.',
    bring_your_ui_oss_try_cloud: 'Se planer',
    preview_with_bring_your_ui_description:
      'Dina egna gränssnittsfiler har laddats upp och används nu. Därför har det inbyggda förhandsgranskningsfönstret inaktiverats.\nFör att testa ditt anpassade inloggningsgränssnitt klickar du på knappen "Live-förhandsvisning" för att öppna det i en ny flik.',
    csp_description:
      'Tillåt ytterligare källuttryck för ditt anpassade inloggningsgränssnitt. Värdena gäller bara när egna gränssnittsfiler används.',
    csp_script_src: 'Tillåten script-src',
    csp_script_src_tip:
      'Tillåt HTTPS-källuttryck för skript som ditt anpassade gränssnitt laddar, till exempel https://scripts.example.com eller https://*.example.com.',
    csp_connect_src: 'Tillåten connect-src',
    csp_connect_src_tip:
      'Tillåt HTTPS- eller WSS-källuttryck för nätverksanrop från ditt anpassade gränssnitt, till exempel https://api.example.com eller wss://events.example.com.',
    csp_source_invalid_error:
      'Ange ett giltigt källuttryck. Använd https://-URL:er; connect-src stöder även wss://. CSP-nyckelord och semikolon stöds inte.',
    csp_source_duplicate_error: 'Källuttrycket finns redan i listan.',
  },
  account_center: {
    title: 'KONTOCENTER',
    description:
      'Erbjud slutanvändare ett kontocenter där de kan hantera kontosäkerhet och profilinformation.',
    enable_account_api: 'Aktivera kontocenter och Account API',
    enable_account_api_description:
      'Aktivera både Account API för användare och GetCertus färdiga kontocenter. När det är avstängt är båda funktionerna otillgängliga.',
    field_options: {
      off: 'Av',
      edit: 'Redigera',
      read_only: 'Skrivskyddad',
      enabled: 'Aktiverad',
      disabled: 'Inaktiverad',
    },
    sections: {
      account_security: {
        title: 'KONTOSÄKERHET',
        description:
          'Hantera åtkomst till Account API så att användare efter inloggning kan visa eller redigera sin identitetsinformation och sina autentiseringsfaktorer.',
        security_verification: {
          title: 'Säkerhetsverifiering',
          description:
            'Innan säkerhetsinställningar ändras måste användaren verifiera sin identitet för att få ett verifierings-ID som gäller i 10 minuter. För att aktivera en verifieringsmetod (e-post, telefon, lösenord) anger du Account API-behörigheten nedan till <strong>Skrivskyddad</strong> (minst) eller <strong>Redigera</strong>, så att systemet kan se om användaren har konfigurerat den. <a>Läs mer</a>',
        },
        groups: {
          identifiers: {
            title: 'Identifierare',
          },
          authentication_factors: {
            title: 'Autentiseringsfaktorer',
          },
          session_management: {
            title: 'Sessionshantering',
          },
        },
      },
      user_profile: {
        title: 'ANVÄNDARPROFIL',
        description:
          'Hantera åtkomst till Account API så att användare efter inloggning kan visa eller redigera grundläggande eller anpassade profildata.',
        groups: {
          profile_data: {
            title: 'Profildata',
          },
        },
      },
      secret_vault: {
        title: 'SECRET VAULT',
        description:
          'Spara säkert tredjeparts åtkomsttokens för sociala kopplingar och företagskopplingar för att anropa deras API:er (t.ex. lägga till händelser i Google Kalender).',
        third_party_token_storage: {
          title: 'Tredjepartstoken',
          third_party_access_token_retrieval: 'Hämtning av tredjeparts åtkomsttoken',
          third_party_token_tooltip:
            'För att spara tokens aktiverar du det i inställningarna för respektive social koppling eller företagskoppling.',
          third_party_token_description:
            'När Account API är aktiverat aktiveras hämtning av tredjepartstokens automatiskt.',
        },
      },
    },
    fields: {
      email: 'E-postadress',
      phone: 'Telefonnummer',
      social: 'Sociala identiteter',
      password: 'Lösenord',
      mfa: 'Multifaktorautentisering',
      mfa_description: 'Låt användare hantera sina MFA-metoder från kontocentret.',
      passkey: 'Passkey',
      username: 'Användarnamn',
      name: 'Namn',
      avatar: 'Avatar',
      profile: 'Profil',
      profile_description: 'Styr åtkomsten till strukturerade profilattribut.',
      custom_data: 'Anpassade data',
      custom_data_description: 'Styr åtkomsten till anpassade JSON-data som sparas på användaren.',
      sessions: 'Sessioner',
      trusted_devices: 'Betrodda enheter',
    },
    profile_fields: {
      title: 'Profilfält för det färdiga kontocentret',
      add_profile_fields: 'Lägg till profilfält',
      hint: {
        not_in_list: 'Finns det inte i listan?',
        set_up: 'Konfigurera',
        go_to: 'andra profilfält nu.',
      },
      disabled_hint: {
        name: "För att lägga till fältet anger du först behörigheten 'Namn' till 'Redigera / Skrivskyddad' i avsnittet Användarprofil nedan.",
        avatar:
          "För att lägga till fältet anger du först behörigheten 'Avatar' till 'Redigera / Skrivskyddad' i avsnittet Användarprofil nedan.",
        profile:
          "För att lägga till fältet anger du först behörigheten 'Profil' till 'Redigera / Skrivskyddad' i avsnittet Användarprofil nedan.",
        custom_data:
          "För att lägga till fältet anger du först behörigheten 'Anpassade data' till 'Redigera / Skrivskyddad' i avsnittet Användarprofil nedan.",
      },
    },
    webauthn_related_origins: 'Relaterade WebAuthn-ursprung',
    webauthn_related_origins_description:
      'Lägg till domänerna för dina frontend-applikationer som får registrera passkeys via Account API.',
    webauthn_related_origins_error: 'Ursprunget måste börja med https:// eller http://',
    delete_account_url: 'Radera konto',
    delete_account_url_description:
      'Ange URL:en till din egen slutpunkt för att hantera borttagning av konton med egen logik.',
    prebuilt_ui: {
      title: 'INTEGRERA FÄRDIGT GRÄNSSNITT',
      description:
        'Integrera snabbt det färdiga kontocentret, säkerhetsverifieringen eller ett enskilt flöde för profiluppdatering med färdigt gränssnitt. Kombinera din domän med vägen för att få kontocentrets URL (t.ex. https://auth.foo.com/account/email).',
      permission_notice:
        'För att integrera dessa färdiga flöden anger du relaterade Account API-behörigheter till <strong>Redigera</strong> i inställningarna nedan.',
      account_center_title: 'Integrera det färdiga kontocentret',
      account_center_description:
        'Skicka användare till kontocentret för att hantera säkerhetsinställningar som e-post, telefon, användarnamn, lösenord, MFA och anslutna konton.',
      flows_title: 'Integrera färdiga flöden för säkerhetsinställningar',
      single_task_flows_title: 'Integrera ett färdigt flöde för en enskild uppgift',
      flows_description:
        'Kombinera din domän med vägen för att få URL:en till kontoinställningen (t.ex. https://auth.foo.com/account/email). Lägg eventuellt till `redirect=` för att skicka tillbaka användare till din app efter en lyckad uppdatering, `show_success=true` för att behålla bekräftelsesidan, `ui_locales=` för att åsidosätta standardspråket eller `identifier=` för att förifylla fältet för identifierare.',
      single_task_flows_description:
        'Skicka användare direkt till ett specifikt flöde (t.ex. länkning av e-post). Lägg eventuellt till `redirect=` för att skicka tillbaka användare till din app efter en lyckad uppdatering, `show_success=true` för att behålla bekräftelsesidan, `ui_locales=` för att åsidosätta standardspråket eller `identifier=` för att förifylla fältet för identifierare.',
      tooltips: {
        email: 'Uppdatera din primära e-postadress',
        phone: 'Uppdatera ditt primära telefonnummer',
        username: 'Uppdatera ditt användarnamn',
        password: 'Ange ett nytt lösenord',
        social: 'Länka ett socialt konto för inloggning',
        social_change: 'Byt till ett annat länkat socialt konto',
        social_remove: 'Ta bort ett länkat socialt konto',
        authenticator_app: 'Konfigurera en ny autentiseringsapp för multifaktorautentisering',
        authenticator_app_replace: 'Ersätt din befintliga autentiseringsapp med en ny',
        passkey_add: 'Registrera en ny passkey',
        passkey_manage: 'Hantera dina befintliga passkeys eller lägg till nya',
        backup_codes_generate: 'Generera en ny uppsättning med 10 reservkoder',
        backup_codes_manage: 'Visa dina tillgängliga reservkoder eller generera nya',
        account_center:
          'Gå till kontocentret för att hantera säkerhetsinställningar som e-post, telefon, användarnamn, lösenord, MFA och anslutna konton',
        profile:
          'Den centrala platsen för att hantera din personliga information (t.ex. namn, avatar)',
        sessions: 'Visa och hantera dina aktiva sessioner på alla enheter',
      },
      customize_note: 'Vill du inte ha den färdiga upplevelsen? Du kan',
      customize_link: 'anpassa dina flöden helt med Account API i stället.',
    },
    custom_css: {
      title: 'ANPASSAD CSS',
      description: 'Anpassa kontocentrets utseende med egen CSS.',
    },
  },
  sign_up_and_sign_in: {
    identifiers_email: 'E-postadress',
    identifiers_phone: 'Telefonnummer',
    identifiers_username: 'Användarnamn',
    identifiers_email_or_sms: 'E-postadress eller telefonnummer',
    identifiers_none: 'Ej tillämpligt',
    and: 'och',
    or: 'eller',
    sign_up: {
      title: 'REGISTRERING',
      sign_up_identifier: 'Identifierare för registrering',
      identifier_description: 'Alla valda identifierare krävs när ett nytt konto skapas.',
      sign_up_authentication: 'Autentiseringsinställning för registrering',
      verification_tip:
        'Användare måste verifiera den e-post eller det telefonnummer du har konfigurerat genom att ange en verifieringskod vid registreringen.',
      authentication_description: 'Alla valda åtgärder är obligatoriska för att slutföra flödet.',
      set_a_password_option: 'Skapa ditt lösenord',
      verify_at_sign_up_option: 'Verifiera vid registrering',
      social_only_creation_description:
        '(Detta gäller konton som enbart skapas via social inloggning)',
      collect_user_profile: 'Samla in användarprofil',
      add_profile_fields: 'Lägg till profilfält',
      profile_fields_hint: {
        not_in_list: 'Finns det inte i listan?',
        set_up: 'Konfigurera',
        go_to: 'andra profilfält nu.',
      },
    },
    sign_in: {
      title: 'INLOGGNING',
      sign_in_identifier_and_auth: 'Identifierare och autentiseringsinställningar för inloggning',
      description: 'Användare kan logga in med vilket som helst av de tillgängliga alternativen.',
      add_sign_in_method: 'Lägg till inloggningsmetod',
      add_sign_up_method: 'Lägg till registreringsmetod',
      password_auth: 'Lösenord',
      verification_code_auth: 'Verifieringskod',
      auth_swap_tip:
        'Byt plats på alternativen nedan för att bestämma vilket som visas först i flödet.',
      require_auth_factor: 'Du måste välja minst en autentiseringsfaktor.',
      forgot_password: 'Glömt lösenord',
      forgot_password_description:
        'Användare kan återställa sitt lösenord med valfri tillgänglig verifieringsmetod.',
      add_verification_method: 'Lägg till verifieringsmetod',
      email_verification_code: 'Verifieringskod via e-post',
      phone_verification_code: 'Verifieringskod via telefon',
    },
    social_sign_in: {
      title: 'SOCIAL INLOGGNING',
      social_sign_in: 'Social inloggning',
      description:
        'Beroende på den obligatoriska identifierare du konfigurerat kan användaren behöva ange en identifierare vid registrering via en social koppling.',
      add_social_connector: 'Lägg till social koppling',
      set_up_hint: {
        not_in_list: 'Finns det inte i listan?',
        set_up_more: 'Konfigurera',
        go_to: 'andra sociala kopplingar nu.',
      },
      settings_title: 'Upplevelse för social inloggning',
      automatic_account_linking: 'Länka automatiskt konton med samma identifierare',
      automatic_account_linking_tip:
        'När detta är aktiverat och en användare loggar in med en ny social identitet medan det finns exakt ett befintligt konto med samma identifierare (t.ex. en e-postadress), länkar GetCertus automatiskt den sociala identiteten till det kontot. Användaren behöver inte välja om kontona ska länkas.',
      required_sign_up_identifiers:
        'Kräv att användare anger saknade identifierare för registrering',
      required_sign_up_identifiers_tip:
        'När detta är aktiverat måste användare som loggar in via sociala leverantörer fylla i saknade obligatoriska identifierare (som e-post) innan inloggningen slutförs. \n\nOm det är inaktiverat kan användare fortsätta utan att ange saknade identifierare, även om det sociala kontot inte synkroniserade dem.',
    },
    passkey_sign_in: {
      title: 'INLOGGNING MED PASSKEY',
      passkey_sign_in: 'Inloggning med passkey',
      enable_passkey_sign_in_description:
        'Låt användare snabbt och säkert komma åt applikationen via passkey (WebAuthn) med biometri, säkerhetsnyckel osv.',
      prompts: 'Passkey-uppmaningar',
      show_passkey_button: 'Visa knappen “Fortsätt med passkey” på inloggningssidan',
      show_passkey_button_tip:
        'Utan knappen “Fortsätt med passkey” börjar inloggningsflödet med identifieraren och visar alternativ för lösenord och passkey i nästa steg.',
      allow_autofill:
        'Tillåt förslag och autofyll av registrerade passkeys i fält för identifierare',
    },
    tip: {
      set_a_password: 'Ett unikt lösenord till ditt användarnamn är ett måste.',
      verify_at_sign_up:
        'Vi stöder för närvarande bara verifierad e-post och telefon. Utan validering kan användarbasen innehålla många e-postadresser eller telefonnummer av dålig kvalitet.',
      password_auth:
        'Detta krävs eftersom du har aktiverat alternativet att ange ett lösenord vid registreringen.',
      verification_code_auth:
        'Detta krävs eftersom du bara har aktiverat alternativet att ange verifieringskod vid registrering. Du kan avmarkera rutan om det är tillåtet att ange lösenord vid registreringen.',
      email_mfa_enabled:
        'Verifieringskod via e-post är redan aktiverad för MFA och kan av säkerhetsskäl inte återanvändas som primär inloggningsmetod.',
      phone_mfa_enabled:
        'Verifieringskod via telefon är redan aktiverad för MFA och kan av säkerhetsskäl inte återanvändas som primär inloggningsmetod.',
      delete_sign_in_method:
        'Detta krävs eftersom du har valt {{identifier}} som obligatorisk identifierare.',
      password_disabled_notification:
        'Alternativet "Skapa ditt lösenord" är inaktiverat för registrering med användarnamn, vilket kan hindra användare från att logga in. Bekräfta för att spara ändå.',
    },
    advanced_options: {
      title: 'AVANCERADE ALTERNATIV',
      enable_single_sign_on: 'Aktivera enkel inloggning (SSO) för företag',
      enable_single_sign_on_description:
        'Låt användare logga in i applikationen med enkel inloggning med sina företagsidentiteter.',
      single_sign_on_hint: {
        prefix: 'Gå till avsnittet ',
        link: '"Enterprise SSO"',
        suffix: 'för att konfigurera fler företagskopplingar.',
      },
      enable_user_registration: 'Aktivera användarregistrering',
      enable_user_registration_description:
        'Tillåt eller förhindra användarregistrering. När det är inaktiverat kan användare fortfarande läggas till i administrationskonsolen, men användare kan inte längre skapa konton via inloggningsgränssnittet.',
      unknown_session_redirect_url: 'Omdirigerings-URL vid okänd session',
      unknown_session_redirect_url_tip:
        'Ibland känner GetCertus inte igen användarens session på inloggningssidan, till exempel när en session har gått ut eller användaren har bokmärkt eller delat inloggningslänken. Som standard visas då ett 404-fel “okänd session”. För en bättre upplevelse kan du ange en reserv-URL som skickar tillbaka användaren till din app och startar om autentiseringen.',
    },
    username_policy: {
      title: 'Policy för användarnamn',
      description:
        'Anpassa kraven på användarnamn, bland annat längd, tillåtna tecken och skiftlägeskänslighet.',
      manage_button: 'Hantera',
      modal_title: 'Policy för användarnamn',
      modal_description: 'Anpassa kraven på användarnamn för dina slutanvändare.',
      length: {
        title: 'Användarnamnets längd',
        minimum: 'Minsta',
        maximum: 'Högsta',
        min_greater_than_max: 'Minsta längd får inte vara större än högsta längd.',
      },
      allowed_chars: {
        title: 'Tillåtna teckentyper',
        uppercase: 'Versaler (A-Z)',
        lowercase: 'Gemener (a-z)',
        numbers: 'Siffror (0-9)',
        underscore: 'Understreck (_)',
        no_valid_leading_char:
          'Enbart siffror är inte tillåtet. Aktivera minst en av versaler, gemener eller understreck.',
        no_char_selected: 'Välj minst en teckentyp.',
      },
      case_sensitive: {
        title: 'Skiftlägeskänsliga användarnamn',
        description:
          'Behandla versaler och gemener som olika. ‘user123’ och ‘User123’ blir då olika användarnamn.',
      },
      case_conflicts: {
        title: 'Konflikter mellan befintliga användarnamn upptäckta',
        description:
          'Vissa användarnamn skulle krocka om skiftlägeskänsligheten stängs av. Lös de {{count}} grupperna med konflikter nedan innan du sparar.',
        sample_title: 'Användarnamn i konflikt',
      },
    },
  },
  content: {
    terms_of_use: {
      title: 'VILLKOR',
      description: 'Lägg till villkor och integritetspolicy för att uppfylla regelkrav.',
      terms_of_use: 'URL till användarvillkor',
      terms_of_use_placeholder: 'https://your.terms.of.use/',
      privacy_policy: 'URL till integritetspolicy',
      privacy_policy_placeholder: 'https://your.privacy.policy/',
      agree_to_terms: 'Godkänn villkoren',
      agree_policies: {
        automatic: 'Godkänn villkoren automatiskt genom att fortsätta',
        manual_registration_only: 'Kräv godkännande med kryssruta endast vid registrering',
        manual: 'Kräv godkännande med kryssruta vid både registrering och inloggning',
      },
    },
    languages: {
      title: 'SPRÅK',
      enable_auto_detect: 'Aktivera automatisk identifiering',
      description:
        'Programvaran identifierar användarens språkinställning och växlar till det lokala språket. Du kan lägga till nya språk genom att översätta gränssnittet från engelska.',
      manage_language: 'Hantera språk',
      default_language: 'Standardspråk',
      default_language_description_auto:
        'Standardspråket används när användarens identifierade språk inte finns i det aktuella språkbiblioteket.',
      default_language_description_fixed:
        'När automatisk identifiering är av är standardspråket det enda språk som programvaran visar. Aktivera automatisk identifiering för fler språk.',
    },
    support: {
      title: 'SUPPORT',
      subtitle: 'Visa dina supportkanaler på felsidor så att användare snabbt får hjälp.',
      support_email: 'Support-e-post',
      support_email_placeholder: 'support@email.com',
      support_website: 'Supportwebbplats',
      support_website_placeholder: 'https://your.website/support',
    },
    manage_language: {
      title: 'Hantera språk',
      subtitle:
        'Lokalisera produktupplevelsen genom att lägga till språk och översättningar. Ditt bidrag kan anges som standardspråk.',
      add_language: 'Lägg till språk',
      logto_provided: 'Från GetCertus',
      key: 'Nyckel',
      logto_source_values: 'GetCertus källvärden',
      custom_values: 'Anpassade värden',
      clear_all_tip: 'Rensa alla värden',
      unsaved_description: 'Ändringarna sparas inte om du lämnar sidan utan att spara.',
      deletion_tip: 'Ta bort språket',
      deletion_title: 'Vill du ta bort det tillagda språket?',
      deletion_description: 'Efter borttagningen kan användarna inte längre använda det språket.',
      default_language_deletion_title: 'Standardspråket kan inte tas bort.',
      default_language_deletion_description:
        '{{language}} är ditt standardspråk och kan inte tas bort. ',
    },
  },
  setup_warning: {
    no_connector_sms:
      'Ingen sms-koppling har konfigurerats ännu. Tills konfigurationen är klar kan användare inte logga in med den här metoden. <a>{{link}}</a> under "Kopplingar"',
    no_connector_email:
      'Ingen e-postkoppling har konfigurerats ännu. Tills konfigurationen är klar kan användare inte logga in med den här metoden. <a>{{link}}</a> under "Kopplingar"',
    no_connector_social:
      'Du har inte konfigurerat någon social koppling ännu. Lägg först till kopplingar för att använda sociala inloggningsmetoder. <a>{{link}}</a> under "Kopplingar".',
    no_connector_email_account_center:
      'Ingen e-postkoppling har konfigurerats ännu. Konfigurera under <a>"E-post- och sms-kopplingar"</a>.',
    no_connector_sms_account_center:
      'Ingen sms-koppling har konfigurerats ännu. Konfigurera under <a>"E-post- och sms-kopplingar"</a>.',
    no_connector_social_account_center:
      'Ingen social koppling har konfigurerats ännu. Konfigurera under <a>"Sociala kopplingar"</a>.',
    no_mfa_factor: 'Ingen MFA-faktor har konfigurerats ännu. Konfigurera under <a>{{link}}</a>.',
    setup_link: 'Konfigurera',
  },
  save_alert: {
    description:
      'Du inför nya rutiner för inloggning och registrering. Alla dina användare kan påverkas av den nya konfigurationen. Vill du verkligen genomföra ändringen?',
    before: 'Före',
    after: 'Efter',
    sign_up: 'Registrering',
    sign_in: 'Inloggning',
    social: 'Socialt',
    forgot_password_migration_notice:
      'Vi har uppgraderat verifieringen för glömt lösenord så att den stöder anpassade metoder. Tidigare bestämdes detta automatiskt av dina e-post- och sms-kopplingar. Klicka på <strong>Bekräfta</strong> för att slutföra uppgraderingen.',
  },
  preview: {
    title: 'Förhandsvisning av inloggning',
    live_preview: 'Live-förhandsvisning',
    live_preview_tip: 'Spara för att förhandsgranska ändringar',
    native: 'Native',
    desktop_web: 'Webb för dator',
    mobile_web: 'Mobilwebb',
    desktop: 'Dator',
    mobile: 'Mobil',
  },
  custom_profile_fields: {
    table: {
      add_button: 'Lägg till profilfält',
      title: {
        field_label: 'Fältetikett',
        type: 'Typ',
        user_data_key: 'Nyckel för användardata',
      },
      placeholder: {
        title: 'Samla in användarprofil',
        description:
          'Anpassa fält för att samla in mer profilinformation om användare vid registrering.',
      },
    },
    type: {
      Text: 'Text',
      Number: 'Nummer',
      Date: 'Datum',
      Checkbox: 'Kryssruta (boolesk)',
      Select: 'Rullgardinsmeny (ett val)',
      Url: 'URL',
      Regex: 'Reguljärt uttryck',
      Address: 'Adress (sammansatt)',
      Fullname: 'Fullständigt namn (sammansatt)',
    },
    modal: {
      title: 'Lägg till profilfält',
      subtitle:
        'Anpassa fält för att samla in mer profilinformation om användare vid registrering.',
      built_in_properties: 'Grundläggande användardata',
      custom_properties: 'Anpassade användardata',
      custom_data_field_name: 'Nyckel för användardata',
      custom_data_field_input_placeholder:
        'Ange nyckeln för användardata, t.ex. `myFavoriteFieldName`',
      custom_field: {
        title: 'Anpassade data',
        description:
          'Ytterligare användaregenskaper som du kan definiera för din applikations unika krav.',
      },
      type_required: 'Välj en egenskapstyp',
      create_button: 'Skapa profilfält',
      avatar: {
        description:
          'Låt användare ladda upp sin profilbild vid registreringen. URL:en till den uppladdade bilden sparas som användarens avatar.',
        storage_not_configured:
          'Uppladdning av avatar kräver en konfigurerad lagringsleverantör. Konfigurera lagring innan du lägger till fältet.',
      },
    },
    details: {
      page_title: 'Detaljer för profilfält',
      back_to_sie: 'Tillbaka till inloggningsupplevelsen',
      enter_field_name: 'Ange profilfältets namn',
      delete_description:
        'Åtgärden kan inte ångras. Vill du verkligen ta bort det här profilfältet?',
      field_deleted: 'Profilfältet {{name}} har tagits bort.',
      key: 'Nyckel för användardata',
      field_name: 'Fältnamn',
      field_type: 'Fälttyp',
      settings: 'Inställningar',
      settings_description:
        'Anpassa fält för att samla in mer profilinformation om användare vid registrering.',
      address_format: 'Adressformat',
      single_line_address: 'Adress på en rad',
      multi_line_address: 'Adress på flera rader (t.ex. gata, ort, län, postnummer, land)',
      components: 'Komponenter',
      components_tip: 'Välj komponenterna som utgör det sammansatta fältet.',
      label: 'Fältetikett',
      label_placeholder: 'Etikett',
      label_tip:
        'Behöver du lokalisering? Lägg till språk under <a>Inloggningsupplevelse > Innehåll</a>',
      label_tooltip:
        'Flytande etikett som visar vad fältet är till för. Den visas inne i fältet och flyttas ovanför när fältet har fokus eller ett värde.',
      placeholder: 'Platshållare för fältet',
      placeholder_placeholder: 'Platshållare',
      placeholder_tooltip:
        'Exempel eller formattips som visas inne i fältet. Visas vanligtvis efter att etiketten flyttats upp och bör vara kort (t.ex. ÅÅÅÅ-MM-DD).',
      description: 'Fältbeskrivning',
      description_placeholder: 'Beskrivning',
      description_tooltip:
        'Stödtext som visas under textfältet. Använd den för längre instruktioner eller tillgänglighetsanteckningar.',
      options: 'Alternativ',
      options_tip:
        'Ange varje alternativ på en ny rad. Använd värde:etikett (t.ex. red:Röd). Du kan också bara ange ett värde; utan etikett visas värdet som etikett.',
      options_placeholder: 'value1:label1\nvalue2:label2\nvalue3:label3',
      regex: 'Reguljärt uttryck',
      regex_tip: 'Definiera ett reguljärt uttryck för att validera indata.',
      regex_placeholder: '^[a-zA-Z0-9]+$',
      date_format: 'Datumformat',
      date_format_us: 'MM/dd/yyyy (t.ex. USA)',
      date_format_uk: 'dd/MM/yyyy (t.ex. Storbritannien och Europa)',
      date_format_iso: 'yyyy-MM-dd (internationell standard)',
      custom_date_format: 'Anpassat datumformat',
      custom_date_format_placeholder: 'Ange det anpassade datumformatet, t.ex. "MM-dd-yyyy"',
      custom_date_format_tip: 'Se dokumentationen för <a>date-fns</a> för giltiga formatkoder.',
      input_length: 'Indatalängd',
      value_range: 'Värdeintervall',
      min: 'Minsta',
      max: 'Högsta',
      default_value: 'Standardvärde',
      checkbox_checked: 'Markerad (sant)',
      checkbox_unchecked: 'Avmarkerad (falskt)',
      required: 'Obligatoriskt',
      required_description:
        'När det är aktiverat måste användarna fylla i fältet. Annars är det valfritt.',
      avatar_upload_description:
        'Slutanvändare laddar upp sin avatar vid registreringen. Det sparade värdet är URL:en till den uppladdade bilden.',
    },
  },
};

export default Object.freeze(sign_in_exp);
