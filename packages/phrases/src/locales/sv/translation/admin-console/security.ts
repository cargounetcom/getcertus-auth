/* GetCertus addition (MPL-2.0, see GETCERTUS.md): admin console phrases. */
const security = {
  page_title: 'Säkerhet',
  title: 'Säkerhet',
  subtitle: 'Konfigurera avancerat skydd mot sofistikerade attacker.',
  tabs: {
    captcha: 'CAPTCHA',
    password_policy: 'Lösenordspolicy',
    blocklist: 'Blockeringslista',
    general: 'Allmänt',
  },
  bot_protection: {
    title: 'Botskydd',
    description:
      'Aktivera CAPTCHA för registrering, inloggning och lösenordsåterställning för att blockera automatiserade hot.',
    captcha: {
      title: 'CAPTCHA',
      placeholder: 'Välj en CAPTCHA-leverantör och konfigurera integrationen.',
      add: 'Lägg till CAPTCHA',
    },
    settings: 'Inställningar',
    enable_captcha: 'Aktivera CAPTCHA',
    enable_captcha_description:
      'Aktivera CAPTCHA-verifiering för registrering, inloggning och lösenordsåterställning.',
    custom_ui_captcha_notice:
      'Du använder Bring your UI. Ytterligare konfiguration krävs för att aktivera CAPTCHA i ditt anpassade gränssnitt. <a>Visa guiden</a>.',
  },
  create_captcha: {
    setup_captcha: 'Konfigurera CAPTCHA',
  },
  captcha_providers: {
    recaptcha_enterprise: {
      name: 'reCAPTCHA Enterprise',
      description:
        'Googles CAPTCHA-lösning för företag med avancerad hotdetektering och detaljerad säkerhetsanalys som skyddar din webbplats mot bedrägerier.',
    },
    turnstile: {
      name: 'Cloudflare Turnstile',
      description:
        'Cloudflares smarta CAPTCHA-alternativ som skyddar mot bottar utan att störa och ger en smidig användarupplevelse utan visuella pussel.',
    },
    cap: {
      name: 'Cap',
      description:
        'Öppen källkod, självhostad proof-of-work-CAPTCHA utan visuella pussel eller tredjepartstjänster – perfekt för regioner där andra CAPTCHA-tjänster inte går att nå.',
    },
  },
  captcha_details: {
    back_to_security: 'Tillbaka till säkerhet',
    page_title: 'Detaljer för CAPTCHA',
    check_readme: 'Läs README',
    options_change_captcha: 'Byt CAPTCHA-leverantör',
    connection: 'Anslutning',
    description: 'Konfigurera dina CAPTCHA-anslutningar.',
    site_key: 'Webbplatsnyckel',
    secret_key: 'Hemlig nyckel',
    project_id: 'Projekt-ID',
    domain: 'Domän (valfritt)',
    domain_placeholder: 'www.google.com (standard) eller recaptcha.net',
    recaptcha_key_id: 'reCAPTCHA-nyckel-ID',
    recaptcha_api_key: 'Projektets API-nyckel',
    cap_endpoint: 'Cap-slutpunkt',
    cap_endpoint_placeholder: 'https://cap.example.com',
    cap_endpoint_http_notice:
      'Den här slutpunkten använder HTTP, vilket endast passar för lokal utveckling. Webbläsare blockerar HTTP-förfrågningar från en inloggningssida med HTTPS, och den hemliga nyckeln skulle skickas okrypterad. Använd HTTPS i produktion.',
    deletion_description: 'Vill du verkligen ta bort den här CAPTCHA-leverantören?',
    captcha_deleted: 'CAPTCHA-leverantören har tagits bort',
    setup_captcha: 'Konfigurera CAPTCHA',
    mode: 'Verifieringsläge',
    mode_invisible: 'Osynlig',
    mode_checkbox: 'Kryssruta',
    mode_notice:
      'Verifieringsläget anges i inställningarna för din reCAPTCHA-nyckel i Google Cloud Console. Om du ändrar läget här krävs en matchande nyckeltyp.',
    score_threshold: 'Poänggräns',
    score_threshold_description:
      'Poäng under gränsen avvisas. 0.0 tillåter alla, 1.0 tillåter endast perfekta poäng. Standard är 0.5.',
    score_threshold_error: 'Poänggränsen måste vara mellan 0 och 1.',
  },
  password_policy: {
    password_requirements: 'Lösenordskrav',
    password_requirements_description:
      'Skärp lösenordskraven för att skydda mot credential stuffing och attacker mot svaga lösenord. ',
    minimum_length: 'Minsta längd',
    minimum_length_description: 'NIST rekommenderar <a>minst 8 tecken</a> för webbprodukter.',
    minimum_length_error: 'Minsta längd måste vara mellan {{min}} och {{max}} (inklusive).',
    minimum_required_char_types: 'Minsta antal teckentyper',
    minimum_required_char_types_description:
      'Teckentyper: versaler (A-Z), gemener (a-z), siffror (0-9) och specialtecken ({{symbols}}).',
    password_rejection: 'Avvisning av lösenord',
    compromised_passwords: 'Avvisa komprometterade lösenord',
    breached_passwords: 'Läckta lösenord',
    breached_passwords_description:
      'Avvisa lösenord som tidigare hittats i databaser med dataläckor.',
    restricted_phrases: 'Begränsa svaga fraser',
    restricted_phrases_tooltip:
      'Lösenordet bör undvika dessa fraser om de inte kombineras med 3 eller fler extra tecken.',
    repetitive_or_sequential_characters: 'Upprepade eller sekventiella tecken',
    repetitive_or_sequential_characters_description: 'T.ex. "AAAA", "1234" och "abcd".',
    user_information: 'Användarinformation',
    user_information_description: 'T.ex. e-postadress, telefonnummer, användarnamn osv.',
    custom_words: 'Egna ord',
    custom_words_description:
      'Lägg till sammanhangsspecifika ord, skiftlägesokänsligt, ett per rad.',
    custom_words_placeholder: 'Tjänstens namn, företagets namn osv.',
    password_expiration: 'Lösenordets giltighet',
    password_expiration_description:
      'Kräv att användare återställer sitt lösenord efter ett visst antal dagar. Användare som loggar in via SSO eller passkey påverkas inte.',
    enable_password_expiration: 'Aktivera utgående lösenord',
    enable_password_expiration_description:
      'Kräv att användare regelbundet återställer sitt lösenord. För befintliga användare utan registrerat datum för lösenordsbyte räknas tiden från det datum policyn aktiveras.',
    enable_password_expiration_tip:
      'Utgående lösenord kan bara aktiveras efter att du konfigurerat minst en metod för glömt lösenord med en giltig koppling i inloggningsupplevelsen.',
    expiration_period: 'Lösenordets giltighetstid (dagar)',
    expiration_period_description: 'Antal dagar ett lösenord är giltigt innan det upphör.',
    expiration_period_error:
      'Lösenordets giltighetstid måste vara mellan {{min}} och {{max}} dagar.',
    password_expiration_recovery_reminder:
      'Vissa användare har kanske ingen e-postadress eller telefonnummer för att ta emot en återställningskod och kan då inte återställa ett utgånget lösenord. Kräv e-post eller telefonnummer vid registrering så att alla användare kan återställa sitt lösenord.',
  },
  verification_code_policy: {
    card_title: 'Verifieringskod',
    card_description:
      'Konfigurera giltighetstid och maximalt antal försök för verifieringskoder vid inloggning, registrering och lösenordsåterställning.',
    enable: {
      title: 'Anpassa inställningar för verifieringskoder',
      description:
        'Tillåt anpassning av verifieringskodernas giltighetstid och maximalt antal försök.',
    },
    expiration_duration: {
      title: 'Giltighetstid (sekunder)',
      description: 'Antal sekunder som en verifieringskod är giltig efter att den skickats.',
      error_message: 'Giltighetstiden måste vara mellan 60 och 3600 sekunder.',
    },
    max_retry_attempts: {
      title: 'Maximalt antal försök',
      description: 'Maximalt antal misslyckade verifieringsförsök innan koden blir ogiltig.',
      error_message: 'Maximalt antal försök måste vara mellan 1 och 100.',
    },
  },
  sentinel_policy: {
    card_title: 'Spärr av identifierare',
    card_description:
      'Spärr är tillgänglig för alla användare med standardinställningar, men du kan anpassa den för mer kontroll.\n\nSpärra en identifierare tillfälligt efter flera misslyckade autentiseringsförsök (t.ex. upprepat felaktigt lösenord eller verifieringskod) för att förhindra brute force-åtkomst.',
    enable_sentinel_policy: {
      title: 'Anpassa spärren',
      description:
        'Tillåt anpassning av maximalt antal misslyckade inloggningsförsök före spärr, spärrens längd och omedelbar manuell upplåsning.',
    },
    max_attempts: {
      title: 'Maximalt antal misslyckade försök',
      description:
        'Spärra en identifierare tillfälligt när maximalt antal misslyckade inloggningsförsök inom en timme har nåtts.',
      error_message: 'Maximalt antal misslyckade försök måste vara större än 0.',
    },
    lockout_duration: {
      title: 'Spärrens längd (minuter)',
      description:
        'Blockera inloggningar under en period efter att gränsen för misslyckade försök överskridits.',
      error_message: 'Spärrens längd måste vara minst 1 minut.',
    },
    manual_unlock: {
      title: 'Manuell upplåsning',
      description:
        'Lås upp användare direkt genom att bekräfta deras identitet och ange deras identifierare.',
      unblock_by_identifiers: 'Lås upp med identifierare',
      modal_description_1:
        'En identifierare har spärrats tillfälligt efter flera misslyckade försök att logga in eller registrera sig. Av säkerhetsskäl återställs åtkomsten automatiskt när spärrtiden har löpt ut.',
      modal_description_2:
        ' Lås bara upp manuellt om du har bekräftat användarens identitet och säkerställt att inga obehöriga åtkomstförsök gjorts.',
      placeholder: 'Ange identifierare (e-postadress / telefonnummer / användarnamn)',
      confirm_button_text: 'Lås upp nu',
      success_toast: 'Upplåst',
      duplicate_identifier_error: 'Identifieraren har redan lagts till',
      empty_identifier_error: 'Ange minst en identifierare',
    },
  },
  blocklist: {
    card_title: 'Blockeringslista för e-post',
    card_description:
      'Ta kontroll över din användarbas genom att blockera riskfyllda eller oönskade e-postadresser.',
    custom_email_allowlist: {
      title: 'Tillåt anpassade e-postadresser',
      description:
        'Lägg till regler för att bara tillåta specifika e-postdomäner, e-postadresser eller jokerteckenmönster för nya registreringar och nyligen länkade e-postadresser. Exempel: bar@example.com, @example.com, foo*@example.com, *@example.com. Domänerna gmail.com och googlemail.com behandlas som likvärdiga och punkter i den lokala delen ignoreras, så foo.bar@gmail.com matchar foobar@googlemail.com.',
      placeholder: 'Ange en e-postadress, domän eller ett jokerteckenmönster',
      duplicate_error: 'E-postadressen, domänen eller jokerteckenmönstret har redan lagts till',
      invalid_format_error:
        'Måste vara en giltig e-postadress (bar@example.com), domän (@example.com) eller ett jokerteckenmönster (foo*@example.com, *@example.com)',
      warnings: {
        identical_entries:
          'Vissa poster i tillåtelselistan finns även i blockeringsreglerna. Matchande e-postadresser kan fortfarande blockeras.',
        blocked_exact_email:
          'Vissa exakta e-postadresser i tillåtelselistan matchar en blockeringsregel. Matchande e-postadresser kan fortfarande blockeras.',
        blocked_subaddressing:
          'Vissa poster i tillåtelselistan innehåller ett plustecken (+), men underadressering av e-post är blockerad.',
        effectively_unusable:
          'Utifrån dessa kontroller släpper den nuvarande tillåtelselistan kanske inte igenom några nya e-postadresser.',
      },
    },
    disposable_email: {
      title: 'Blockera engångsadresser',
      description:
        'Aktivera för att avvisa registreringar med engångs- eller slit-och-släng-adresser, vilket kan förhindra spam och förbättra användarkvaliteten.',
    },
    email_subaddressing: {
      title: 'Blockera underadressering av e-post',
      description:
        'Aktivera för att avvisa registreringar med underadresser som innehåller ett plustecken (+) och extra tecken (t.ex. user+alias@foo.com).',
    },
    custom_email_address: {
      title: 'Blockera anpassade e-postadresser',
      description:
        'Lägg till regler för att blockera specifika e-postdomäner, e-postadresser eller jokerteckenmönster från att registrera sig eller länkas via gränssnittet. Exempel: bar@example.com, @example.com, foo*@example.com, *@example.com. Domänerna gmail.com och googlemail.com behandlas som likvärdiga och punkter i den lokala delen ignoreras, så foo.bar@gmail.com matchar foobar@googlemail.com.',
      placeholder: 'Ange en e-postadress, domän eller ett jokerteckenmönster',
      duplicate_error: 'E-postadressen, domänen eller jokerteckenmönstret har redan lagts till',
      invalid_format_error:
        'Måste vara en giltig e-postadress (bar@example.com), domän (@example.com) eller ett jokerteckenmönster (foo*@example.com, *@example.com)',
    },
  },
};

export default Object.freeze(security);
