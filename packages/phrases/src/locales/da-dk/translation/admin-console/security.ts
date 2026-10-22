/* GetCertus addition (MPL-2.0, see GETCERTUS.md): admin console phrases. */
const security = {
  page_title: 'Sikkerhed',
  title: 'Sikkerhed',
  subtitle: 'Konfigurér avanceret beskyttelse mod sofistikerede angreb.',
  tabs: {
    captcha: 'CAPTCHA',
    password_policy: 'Adgangskodepolitik',
    blocklist: 'Blokeringsliste',
    general: 'Generelt',
  },
  bot_protection: {
    title: 'Botbeskyttelse',
    description:
      'Aktivér CAPTCHA ved tilmelding, login og gendannelse af adgangskode for at blokere automatiserede trusler.',
    captcha: {
      title: 'CAPTCHA',
      placeholder: 'Vælg en CAPTCHA-udbyder, og opsæt integrationen.',
      add: 'Tilføj CAPTCHA',
    },
    settings: 'Indstillinger',
    enable_captcha: 'Aktivér CAPTCHA',
    enable_captcha_description:
      'Aktivér CAPTCHA-verificering ved tilmelding, login og gendannelse af adgangskode.',
    custom_ui_captcha_notice:
      'Du bruger Bring your UI. Der kræves yderligere konfiguration for at aktivere CAPTCHA i din egen brugerflade. <a>Se guiden</a>.',
  },
  create_captcha: {
    setup_captcha: 'Opsæt CAPTCHA',
  },
  captcha_providers: {
    recaptcha_enterprise: {
      name: 'reCAPTCHA Enterprise',
      description:
        'Googles CAPTCHA-løsning til virksomheder med avanceret trusselsdetektion og detaljeret sikkerhedsanalyse, der beskytter dit websted mod svindel.',
    },
    turnstile: {
      name: 'Cloudflare Turnstile',
      description:
        'Cloudflares smarte CAPTCHA-alternativ, der beskytter mod bots uden at forstyrre og giver en gnidningsfri brugeroplevelse uden visuelle opgaver.',
    },
    cap: {
      name: 'Cap',
      description:
        'Open source, selvhostet proof-of-work-CAPTCHA uden visuelle opgaver eller tredjepartstjenester – ideel til regioner, hvor andre CAPTCHA-tjenester ikke kan nås.',
    },
  },
  captcha_details: {
    back_to_security: 'Tilbage til sikkerhed',
    page_title: 'Detaljer for CAPTCHA',
    check_readme: 'Se README',
    options_change_captcha: 'Skift CAPTCHA-udbyder',
    connection: 'Forbindelse',
    description: 'Konfigurér dine CAPTCHA-forbindelser.',
    site_key: 'Webstedsnøgle',
    secret_key: 'Hemmelig nøgle',
    project_id: 'Projekt-ID',
    domain: 'Domæne (valgfrit)',
    domain_placeholder: 'www.google.com (standard) eller recaptcha.net',
    recaptcha_key_id: 'reCAPTCHA-nøgle-ID',
    recaptcha_api_key: 'Projektets API-nøgle',
    cap_endpoint: 'Cap-endpoint',
    cap_endpoint_placeholder: 'https://cap.example.com',
    cap_endpoint_http_notice:
      'Dette endpoint bruger HTTP, som kun er egnet til lokal udvikling. Browsere blokerer HTTP-anmodninger fra en loginside med HTTPS, og den hemmelige nøgle ville blive sendt ukrypteret. Brug HTTPS i produktion.',
    deletion_description: 'Er du sikker på, at du vil slette denne CAPTCHA-udbyder?',
    captcha_deleted: 'CAPTCHA-udbyderen er slettet',
    setup_captcha: 'Opsæt CAPTCHA',
    mode: 'Verificeringstilstand',
    mode_invisible: 'Usynlig',
    mode_checkbox: 'Afkrydsningsfelt',
    mode_notice:
      'Verificeringstilstanden angives i indstillingerne for din reCAPTCHA-nøgle i Google Cloud Console. Hvis du ændrer tilstanden her, kræves en matchende nøgletype.',
    score_threshold: 'Scoregrænse',
    score_threshold_description:
      'Scorer under grænsen afvises. 0.0 tillader alle, 1.0 tillader kun perfekte scorer. Standard er 0.5.',
    score_threshold_error: 'Scoregrænsen skal være mellem 0 og 1.',
  },
  password_policy: {
    password_requirements: 'Krav til adgangskode',
    password_requirements_description:
      'Skærp kravene til adgangskoder for at beskytte mod credential stuffing og angreb på svage adgangskoder. ',
    minimum_length: 'Minimumslængde',
    minimum_length_description: 'NIST anbefaler <a>mindst 8 tegn</a> til webprodukter.',
    minimum_length_error: 'Minimumslængden skal være mellem {{min}} og {{max}} (begge inklusive).',
    minimum_required_char_types: 'Mindste antal tegntyper',
    minimum_required_char_types_description:
      'Tegntyper: store bogstaver (A-Z), små bogstaver (a-z), tal (0-9) og specialtegn ({{symbols}}).',
    password_rejection: 'Afvisning af adgangskoder',
    compromised_passwords: 'Afvis kompromitterede adgangskoder',
    breached_passwords: 'Lækkede adgangskoder',
    breached_passwords_description:
      'Afvis adgangskoder, der tidligere er fundet i databaser med datalæk.',
    restricted_phrases: 'Begræns svage fraser',
    restricted_phrases_tooltip:
      'Adgangskoden bør undgå disse fraser, medmindre de kombineres med 3 eller flere ekstra tegn.',
    repetitive_or_sequential_characters: 'Gentagne eller fortløbende tegn',
    repetitive_or_sequential_characters_description: 'F.eks. "AAAA", "1234" og "abcd".',
    user_information: 'Brugeroplysninger',
    user_information_description: 'F.eks. e-mailadresse, telefonnummer, brugernavn osv.',
    custom_words: 'Egne ord',
    custom_words_description:
      'Tilføj kontekstspecifikke ord, uden skelnen mellem store og små bogstaver, ét pr. linje.',
    custom_words_placeholder: 'Navnet på din tjeneste, virksomhedens navn osv.',
    password_expiration: 'Udløb af adgangskode',
    password_expiration_description:
      'Kræv, at brugere nulstiller deres adgangskode efter et bestemt antal dage. Brugere, der logger ind via SSO eller passkey, påvirkes ikke.',
    enable_password_expiration: 'Aktivér udløb af adgangskode',
    enable_password_expiration_description:
      'Kræv, at brugere jævnligt nulstiller deres adgangskode. For eksisterende brugere uden registreret dato for ændring af adgangskode regnes der fra den dato, politikken aktiveres.',
    enable_password_expiration_tip:
      'Udløb af adgangskode kan først aktiveres, når du har konfigureret mindst én metode til glemt adgangskode med en gyldig connector i loginoplevelsen.',
    expiration_period: 'Adgangskodens gyldighedsperiode (dage)',
    expiration_period_description: 'Antal dage en adgangskode er gyldig, før den udløber.',
    expiration_period_error:
      'Adgangskodens gyldighedsperiode skal være mellem {{min}} og {{max}} dage.',
    password_expiration_recovery_reminder:
      'Nogle brugere har måske ingen e-mailadresse eller telefonnummer til at modtage en gendannelseskode og kan derfor ikke nulstille en udløbet adgangskode. Kræv e-mail eller telefonnummer ved tilmelding, så alle brugere kan gendanne deres adgangskode.',
  },
  verification_code_policy: {
    card_title: 'Bekræftelseskode',
    card_description:
      'Konfigurér gyldighedsperiode og maksimalt antal forsøg for bekræftelseskoder ved login, tilmelding og nulstilling af adgangskode.',
    enable: {
      title: 'Tilpas indstillinger for bekræftelseskoder',
      description:
        'Tillad tilpasning af bekræftelseskodernes gyldighedsperiode og maksimale antal forsøg.',
    },
    expiration_duration: {
      title: 'Gyldighedsperiode (sekunder)',
      description: 'Antal sekunder, en bekræftelseskode er gyldig efter afsendelse.',
      error_message: 'Gyldighedsperioden skal være mellem 60 og 3600 sekunder.',
    },
    max_retry_attempts: {
      title: 'Maksimalt antal forsøg',
      description: 'Maksimalt antal mislykkede bekræftelsesforsøg, før koden bliver ugyldig.',
      error_message: 'Maksimalt antal forsøg skal være mellem 1 og 100.',
    },
  },
  sentinel_policy: {
    card_title: 'Spærring af identifikator',
    card_description:
      'Spærring er tilgængelig for alle brugere med standardindstillinger, men du kan tilpasse den for mere kontrol.\n\nSpær midlertidigt en identifikator efter flere mislykkede godkendelsesforsøg (f.eks. gentagne forkerte adgangskoder eller bekræftelseskoder) for at forhindre brute force-adgang.',
    enable_sentinel_policy: {
      title: 'Tilpas spærringen',
      description:
        'Tillad tilpasning af maksimalt antal mislykkede loginforsøg før spærring, spærringens varighed og øjeblikkelig manuel oplåsning.',
    },
    max_attempts: {
      title: 'Maksimalt antal mislykkede forsøg',
      description:
        'Spær midlertidigt en identifikator, når det maksimale antal mislykkede loginforsøg inden for en time er nået.',
      error_message: 'Maksimalt antal mislykkede forsøg skal være større end 0.',
    },
    lockout_duration: {
      title: 'Spærringens varighed (minutter)',
      description: 'Blokér login i en periode, efter grænsen for mislykkede forsøg er overskredet.',
      error_message: 'Spærringens varighed skal være mindst 1 minut.',
    },
    manual_unlock: {
      title: 'Manuel oplåsning',
      description:
        'Lås brugere op med det samme ved at bekræfte deres identitet og indtaste deres identifikator.',
      unblock_by_identifiers: 'Fjern blokering via identifikator',
      modal_description_1:
        'En identifikator er midlertidigt spærret efter flere mislykkede forsøg på at logge ind eller tilmelde sig. Af sikkerhedshensyn gendannes adgangen automatisk, når spærringen udløber.',
      modal_description_2:
        ' Lås kun manuelt op, hvis du har bekræftet brugerens identitet og sikret, at der ikke er sket uautoriserede adgangsforsøg.',
      placeholder: 'Indtast identifikatorer (e-mailadresse / telefonnummer / brugernavn)',
      confirm_button_text: 'Lås op nu',
      success_toast: 'Låst op',
      duplicate_identifier_error: 'Identifikatoren er allerede tilføjet',
      empty_identifier_error: 'Indtast mindst én identifikator',
    },
  },
  blocklist: {
    card_title: 'Blokeringsliste for e-mail',
    card_description:
      'Tag kontrol over din brugerbase ved at blokere risikable eller uønskede e-mailadresser.',
    custom_email_allowlist: {
      title: 'Tillad brugerdefinerede e-mailadresser',
      description:
        'Tilføj regler for kun at tillade bestemte e-maildomæner, e-mailadresser eller jokertegnsmønstre ved nye tilmeldinger og nyligt tilknyttede e-mails. Eksempler: bar@example.com, @example.com, foo*@example.com, *@example.com. Domænerne gmail.com og googlemail.com behandles som ens, og punktummer i den lokale del ignoreres, så foo.bar@gmail.com matcher foobar@googlemail.com.',
      placeholder: 'Indtast en e-mailadresse, et domæne eller et jokertegnsmønster',
      duplicate_error: 'E-mailadressen, domænet eller jokertegnsmønstret er allerede tilføjet',
      invalid_format_error:
        'Skal være en gyldig e-mailadresse (bar@example.com), et domæne (@example.com) eller et jokertegnsmønster (foo*@example.com, *@example.com)',
      warnings: {
        identical_entries:
          'Nogle poster på tilladelseslisten findes også i blokeringsreglerne. Matchende e-mails kan stadig blive blokeret.',
        blocked_exact_email:
          'Nogle præcise e-mails på tilladelseslisten matcher en blokeringsregel. Matchende e-mails kan stadig blive blokeret.',
        blocked_subaddressing:
          'Nogle poster på tilladelseslisten indeholder et plustegn (+), men underadressering af e-mail er blokeret.',
        effectively_unusable:
          'Ud fra disse kontroller tillader den nuværende tilladelsesliste muligvis ingen nye e-mails.',
      },
    },
    disposable_email: {
      title: 'Blokér engangs-e-mailadresser',
      description:
        'Aktivér for at afvise tilmeldinger med engangs-e-mailadresser, hvilket kan forhindre spam og forbedre brugerkvaliteten.',
    },
    email_subaddressing: {
      title: 'Blokér underadressering af e-mail',
      description:
        'Aktivér for at afvise tilmeldinger med e-mailunderadresser, der indeholder et plustegn (+) og ekstra tegn (f.eks. user+alias@foo.com).',
    },
    custom_email_address: {
      title: 'Blokér brugerdefinerede e-mailadresser',
      description:
        'Tilføj regler for at blokere bestemte e-maildomæner, e-mailadresser eller jokertegnsmønstre fra at tilmelde sig eller blive tilknyttet via brugerfladen. Eksempler: bar@example.com, @example.com, foo*@example.com, *@example.com. Domænerne gmail.com og googlemail.com behandles som ens, og punktummer i den lokale del ignoreres, så foo.bar@gmail.com matcher foobar@googlemail.com.',
      placeholder: 'Indtast en e-mailadresse, et domæne eller et jokertegnsmønster',
      duplicate_error: 'E-mailadressen, domænet eller jokertegnsmønstret er allerede tilføjet',
      invalid_format_error:
        'Skal være en gyldig e-mailadresse (bar@example.com), et domæne (@example.com) eller et jokertegnsmønster (foo*@example.com, *@example.com)',
    },
  },
};

export default Object.freeze(security);
