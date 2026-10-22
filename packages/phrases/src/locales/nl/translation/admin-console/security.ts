/* GetCertus addition (MPL-2.0, see GETCERTUS.md): admin console phrases. */
const security = {
  page_title: 'Beveiliging',
  title: 'Beveiliging',
  subtitle: 'Configureer geavanceerde bescherming tegen verfijnde aanvallen.',
  tabs: {
    captcha: 'CAPTCHA',
    password_policy: 'Wachtwoordbeleid',
    blocklist: 'Blokkeerlijst',
    general: 'Algemeen',
  },
  bot_protection: {
    title: 'Botbescherming',
    description:
      'Schakel CAPTCHA in voor registratie, inloggen en wachtwoordherstel om geautomatiseerde aanvallen te blokkeren.',
    captcha: {
      title: 'CAPTCHA',
      placeholder: 'Kies een CAPTCHA-provider en stel de integratie in.',
      add: 'CAPTCHA toevoegen',
    },
    settings: 'Instellingen',
    enable_captcha: 'CAPTCHA inschakelen',
    enable_captcha_description:
      'Schakel CAPTCHA-verificatie in voor registratie, inloggen en wachtwoordherstel.',
    custom_ui_captcha_notice:
      'Je gebruikt Bring your UI. Er is extra configuratie nodig om CAPTCHA in je eigen UI in te schakelen. <a>Bekijk de handleiding</a>.',
  },
  create_captcha: {
    setup_captcha: 'CAPTCHA instellen',
  },
  captcha_providers: {
    recaptcha_enterprise: {
      name: 'reCAPTCHA Enterprise',
      description:
        'De CAPTCHA-oplossing van Google voor organisaties, met geavanceerde dreigingsdetectie en uitgebreide beveiligingsanalyses om je website tegen fraude te beschermen.',
    },
    turnstile: {
      name: 'Cloudflare Turnstile',
      description:
        'Het slimme CAPTCHA-alternatief van Cloudflare, dat onopvallend tegen bots beschermt en een soepele gebruikerservaring biedt zonder visuele puzzels.',
    },
    cap: {
      name: 'Cap',
      description:
        "Open-source, zelf gehoste proof-of-work-CAPTCHA zonder visuele puzzels of diensten van derden; ideaal voor regio's waar andere CAPTCHA-diensten onbereikbaar zijn.",
    },
  },
  captcha_details: {
    back_to_security: 'Terug naar beveiliging',
    page_title: 'Details CAPTCHA',
    check_readme: 'README bekijken',
    options_change_captcha: 'CAPTCHA-provider wijzigen',
    connection: 'Verbinding',
    description: 'Configureer je CAPTCHA-verbindingen.',
    site_key: 'Sitesleutel',
    secret_key: 'Geheime sleutel',
    project_id: 'Project-ID',
    domain: 'Domein (optioneel)',
    domain_placeholder: 'www.google.com (standaard) of recaptcha.net',
    recaptcha_key_id: 'reCAPTCHA-sleutel-ID',
    recaptcha_api_key: 'API-sleutel van het project',
    cap_endpoint: 'Cap-endpoint',
    cap_endpoint_placeholder: 'https://cap.example.com',
    cap_endpoint_http_notice:
      'Dit endpoint gebruikt HTTP en is alleen geschikt voor lokale ontwikkeling. Browsers blokkeren HTTP-verzoeken vanaf een HTTPS-inlogpagina, en de geheime sleutel zou onversleuteld worden verzonden. Gebruik HTTPS in productie.',
    deletion_description: 'Weet je zeker dat je deze CAPTCHA-provider wilt verwijderen?',
    captcha_deleted: 'CAPTCHA-provider verwijderd',
    setup_captcha: 'CAPTCHA instellen',
    mode: 'Verificatiemodus',
    mode_invisible: 'Onzichtbaar',
    mode_checkbox: 'Selectievakje',
    mode_notice:
      'De verificatiemodus wordt bepaald in de instellingen van je reCAPTCHA-sleutel in Google Cloud Console. Voor een andere modus hier is een passend sleuteltype nodig.',
    score_threshold: 'Scoredrempel',
    score_threshold_description:
      'Scores onder de drempel worden geweigerd. 0.0 staat alles toe, 1.0 alleen perfecte scores. Standaard is 0.5.',
    score_threshold_error: 'De scoredrempel moet tussen 0 en 1 liggen.',
  },
  password_policy: {
    password_requirements: 'Wachtwoordeisen',
    password_requirements_description:
      'Verscherp de wachtwoordeisen om je te beschermen tegen credential stuffing en aanvallen op zwakke wachtwoorden. ',
    minimum_length: 'Minimale lengte',
    minimum_length_description: 'NIST raadt voor webproducten <a>minstens 8 tekens</a> aan.',
    minimum_length_error: 'De minimale lengte moet tussen {{min}} en {{max}} liggen (inclusief).',
    minimum_required_char_types: 'Minimaal vereiste tekentypen',
    minimum_required_char_types_description:
      'Tekentypen: hoofdletters (A-Z), kleine letters (a-z), cijfers (0-9) en speciale tekens ({{symbols}}).',
    password_rejection: 'Wachtwoorden weigeren',
    compromised_passwords: 'Gecompromitteerde wachtwoorden weigeren',
    breached_passwords: 'Gelekte wachtwoorden',
    breached_passwords_description:
      'Weiger wachtwoorden die eerder in datalekdatabases zijn aangetroffen.',
    restricted_phrases: 'Zwakke woordcombinaties beperken',
    restricted_phrases_tooltip:
      'Vermijd deze combinaties in je wachtwoord, tenzij je ze combineert met 3 of meer extra tekens.',
    repetitive_or_sequential_characters: 'Herhaalde of opeenvolgende tekens',
    repetitive_or_sequential_characters_description: 'Bijv. "AAAA", "1234" en "abcd".',
    user_information: 'Gebruikersgegevens',
    user_information_description: 'Bijv. e-mailadres, telefoonnummer, gebruikersnaam, enz.',
    custom_words: 'Eigen woorden',
    custom_words_description:
      'Voeg contextspecifieke woorden toe, niet hoofdlettergevoelig, één per regel.',
    custom_words_placeholder: 'Naam van je dienst, bedrijfsnaam, enz.',
    password_expiration: 'Verlopen van wachtwoorden',
    password_expiration_description:
      'Laat gebruikers na een ingesteld aantal dagen hun wachtwoord opnieuw instellen. Gebruikers die inloggen via SSO of een passkey worden niet beïnvloed.',
    enable_password_expiration: 'Verlopen van wachtwoorden inschakelen',
    enable_password_expiration_description:
      'Laat gebruikers hun wachtwoord periodiek opnieuw instellen. Voor bestaande gebruikers zonder vastgelegde datum van wachtwoordwijziging telt de datum waarop dit beleid wordt ingeschakeld.',
    enable_password_expiration_tip:
      'Het verlopen van wachtwoorden kan pas worden ingeschakeld nadat je in de inlogervaring minstens één methode voor wachtwoordherstel met een geldige connector hebt ingesteld.',
    expiration_period: 'Geldigheidsduur van wachtwoord (dagen)',
    expiration_period_description:
      'Aantal dagen dat een wachtwoord geldig blijft voordat het verloopt.',
    expiration_period_error:
      'De geldigheidsduur van het wachtwoord moet tussen {{min}} en {{max}} dagen liggen.',
    password_expiration_recovery_reminder:
      'Sommige gebruikers hebben mogelijk geen e-mailadres of telefoonnummer om een herstelcode te ontvangen en kunnen een verlopen wachtwoord dan niet opnieuw instellen. Vereis een e-mailadres of telefoonnummer bij registratie, zodat elke gebruiker zijn wachtwoord kan herstellen.',
  },
  verification_code_policy: {
    card_title: 'Verificatiecode',
    card_description:
      'Configureer de geldigheidsduur en het maximale aantal pogingen voor verificatiecodes bij inloggen, registratie en wachtwoordherstel.',
    enable: {
      title: 'Instellingen voor verificatiecodes aanpassen',
      description:
        'Sta aanpassing toe van de geldigheidsduur en het maximale aantal pogingen voor verificatiecodes.',
    },
    expiration_duration: {
      title: 'Geldigheidsduur (seconden)',
      description: 'Het aantal seconden dat een verificatiecode na verzending geldig blijft.',
      error_message: 'De geldigheidsduur moet tussen 60 en 3600 seconden liggen.',
    },
    max_retry_attempts: {
      title: 'Maximaal aantal pogingen',
      description:
        'Het maximale aantal mislukte verificatiepogingen voordat de code ongeldig wordt.',
      error_message: 'Het maximale aantal pogingen moet tussen 1 en 100 liggen.',
    },
  },
  sentinel_policy: {
    card_title: 'Identifier vergrendelen',
    card_description:
      'Vergrendeling is voor alle gebruikers beschikbaar met standaardinstellingen, maar je kunt dit aanpassen voor meer controle.\n\nVergrendel een identifier tijdelijk na meerdere mislukte authenticatiepogingen (bijv. herhaaldelijk een onjuist wachtwoord of onjuiste verificatiecode) om brute-force-toegang te voorkomen.',
    enable_sentinel_policy: {
      title: 'Vergrendeling aanpassen',
      description:
        'Sta aanpassing toe van het maximale aantal mislukte inlogpogingen vóór vergrendeling, de duur van de vergrendeling en directe handmatige ontgrendeling.',
    },
    max_attempts: {
      title: 'Maximaal aantal mislukte pogingen',
      description:
        'Vergrendel een identifier tijdelijk zodra het maximale aantal mislukte inlogpogingen binnen een uur is bereikt.',
      error_message: 'Het maximale aantal mislukte pogingen moet groter zijn dan 0.',
    },
    lockout_duration: {
      title: 'Duur van vergrendeling (minuten)',
      description:
        'Blokkeer inloggen een tijd lang nadat het maximale aantal mislukte pogingen is overschreden.',
      error_message: 'De duur van de vergrendeling moet minstens 1 minuut zijn.',
    },
    manual_unlock: {
      title: 'Handmatig ontgrendelen',
      description:
        'Ontgrendel gebruikers direct door hun identiteit te bevestigen en hun identifier in te voeren.',
      unblock_by_identifiers: 'Deblokkeren op identifier',
      modal_description_1:
        'Een identifier is tijdelijk vergrendeld na meerdere mislukte pogingen om in te loggen of te registreren. Om veiligheidsredenen wordt de toegang automatisch hersteld na afloop van de vergrendeling.',
      modal_description_2:
        ' Ontgrendel alleen handmatig als je de identiteit van de gebruiker hebt bevestigd en zeker weet dat er geen ongeautoriseerde toegangspogingen zijn.',
      placeholder: 'Voer identifiers in (e-mailadres / telefoonnummer / gebruikersnaam)',
      confirm_button_text: 'Nu ontgrendelen',
      success_toast: 'Ontgrendeld',
      duplicate_identifier_error: 'Identifier al toegevoegd',
      empty_identifier_error: 'Voer minstens één identifier in',
    },
  },
  blocklist: {
    card_title: 'E-mailblokkeerlijst',
    card_description:
      'Houd grip op je gebruikersbestand door riskante of ongewenste e-mailadressen te blokkeren.',
    custom_email_allowlist: {
      title: 'Eigen e-mailadressen toestaan',
      description:
        'Voeg regels toe om alleen specifieke e-maildomeinen, e-mailadressen of jokertekenpatronen toe te staan voor nieuwe registraties en nieuw gekoppelde e-mailadressen. Voorbeelden: bar@example.com, @example.com, foo*@example.com, *@example.com. De domeinen gmail.com en googlemail.com worden als gelijk behandeld en punten in het lokale deel worden genegeerd, dus foo.bar@gmail.com komt overeen met foobar@googlemail.com.',
      placeholder: 'Voer een e-mailadres, domein of jokertekenpatroon in',
      duplicate_error: 'E-mailadres, domein of jokertekenpatroon al toegevoegd',
      invalid_format_error:
        'Moet een geldig e-mailadres (bar@example.com), domein (@example.com) of jokertekenpatroon (foo*@example.com, *@example.com) zijn',
      warnings: {
        identical_entries:
          'Sommige items in de toestaanlijst staan ook in de blokkeerregels. Overeenkomende e-mailadressen kunnen nog steeds worden geblokkeerd.',
        blocked_exact_email:
          'Sommige exacte e-mailadressen in de toestaanlijst komen overeen met een blokkeerregel. Overeenkomende e-mailadressen kunnen nog steeds worden geblokkeerd.',
        blocked_subaddressing:
          'Sommige items in de toestaanlijst bevatten een plusteken (+), maar subadressering van e-mail is geblokkeerd.',
        effectively_unusable:
          'Op basis van deze controles laat de huidige toestaanlijst mogelijk geen enkel nieuw e-mailadres door.',
      },
    },
    disposable_email: {
      title: 'Wegwerp-e-mailadressen blokkeren',
      description:
        'Schakel in om registraties met een wegwerp-e-mailadres te weigeren; dit helpt spam te voorkomen en verbetert de kwaliteit van gebruikers.',
    },
    email_subaddressing: {
      title: 'Subadressering van e-mail blokkeren',
      description:
        'Schakel in om registraties te weigeren met e-mailsubadressen met een plusteken (+) en extra tekens (bijv. user+alias@foo.com).',
    },
    custom_email_address: {
      title: 'Eigen e-mailadressen blokkeren',
      description:
        'Voeg regels toe om specifieke e-maildomeinen, e-mailadressen of jokertekenpatronen te blokkeren voor registreren of koppelen via de UI. Voorbeelden: bar@example.com, @example.com, foo*@example.com, *@example.com. De domeinen gmail.com en googlemail.com worden als gelijk behandeld en punten in het lokale deel worden genegeerd, dus foo.bar@gmail.com komt overeen met foobar@googlemail.com.',
      placeholder: 'Voer een e-mailadres, domein of jokertekenpatroon in',
      duplicate_error: 'E-mailadres, domein of jokertekenpatroon al toegevoegd',
      invalid_format_error:
        'Moet een geldig e-mailadres (bar@example.com), domein (@example.com) of jokertekenpatroon (foo*@example.com, *@example.com) zijn',
    },
  },
};

export default Object.freeze(security);
