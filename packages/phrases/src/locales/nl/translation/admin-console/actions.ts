/* GetCertus addition (MPL-2.0, see GETCERTUS.md): admin console phrases. */
const actions = {
  page_title: 'Acties',
  title: 'Acties',
  subtitle:
    'Voer aangepaste code uit op bepaalde punten in het authenticatieproces om het gedrag van GetCertus uit te breiden.',
  status: {
    not_configured: 'Niet geconfigureerd',
    configured: 'Geconfigureerd',
    enabled: 'Ingeschakeld',
    disabled: 'Uitgeschakeld',
  },
  types: {
    post_first_factor_verification: {
      name: 'Na verificatie van de eerste factor',
      description:
        'Voer aangepaste logica uit nadat de lokale wachtwoordverificatie tijdens het inloggen is mislukt.',
    },
    post_sign_in: {
      name: 'Na inloggen',
      description: 'Voer aangepaste logica uit nadat een gebruiker succesvol is ingelogd.',
    },
  },
  data_source_tab: 'Gegevensbron',
  test_tab: 'Testcontext',
  settings_tab: 'Instellingen',
  event_data: {
    title: 'Event-payload',
    subtitle:
      'Gebruik de invoerparameter `event` voor de gegevens van de authenticatiegebeurtenis.',
  },
  result_data: {
    title: 'Actieresultaat',
    subtitle: 'Geef een resultaatobject terug dat GetCertus voor dit actietype begrijpt.',
  },
  environment_variables: {
    title: 'Omgevingsvariabelen instellen',
    subtitle: 'Gebruik omgevingsvariabelen om gevoelige informatie op te slaan.',
    input_field_title: 'Omgevingsvariabelen toevoegen',
    sample_code: 'Omgevingsvariabelen gebruiken in je actie-handler. Voorbeeld:',
  },
  fetch_external_data: {
    title: 'Externe gegevens ophalen',
    subtitle: "Roep externe API's aan vanuit je actiescript.",
    description:
      "Gebruik de functie `fetch` om je externe API's aan te roepen en de gegevens op te nemen in het actieresultaat. Voorbeeld:",
  },
  settings: {
    title: 'Instellingen',
    subtitle: 'Bepaal of de actie actief is en hoe runtimefouten worden afgehandeld.',
    enabled: {
      title: 'Actie inschakelen',
      description: 'Voer dit script uit wanneer de authenticatiegebeurtenis wordt geactiveerd.',
    },
    on_execution_error: {
      title: 'Bij scriptfout',
      description: 'Kies hoe GetCertus moet reageren als het script tijdens het uitvoeren mislukt.',
      block: 'Het authenticatieproces blokkeren',
      allow: 'Het authenticatieproces laten doorgaan',
      post_first_factor_description:
        'Als dit script mislukt, weigert GetCertus altijd ongeldige inloggegevens, zodat de wachtwoordverificatie niet kan worden omzeild.',
    },
  },
  test_context: {
    subtitle: 'Pas de test-payload van de gebeurtenis aan die bij het testen wordt gebruikt.',
    input_field_title: 'Voorbeeld-JSON van de gebeurtenis',
  },
  script: {
    title: 'Script',
    restore: 'Standaardwaarden herstellen',
    restored: 'Hersteld',
  },
  tester: {
    run_button: 'Test uitvoeren',
    result_title: 'Testresultaat',
  },
  form_error: {
    invalid_json: 'Ongeldige JSON-notatie',
  },
  sandbox_and_security_warning: {
    title: 'Scripts draaien met serverrechten',
    description:
      'Bij self-hosted GetCertus draait dit script in dezelfde omgeving als GetCertus zelf: het kan omgevingsvariabelen van de server lezen en services op je interne netwerk bereiken. Het draait niet in een sandbox. Geef alleen toegang tot deze pagina aan mensen die je ook toegang tot de server zou toevertrouwen. Deze actie wordt alleen uitgevoerd nadat de lokale wachtwoordverificatie is mislukt; geef `passwordVerified: true` alleen terug nadat je het ingevoerde wachtwoord zelf hebt geverifieerd. Gebruikers die via deze actie worden aangemaakt, omzeilen controles die alleen bij registratie gelden, zoals de e-mailblokkeerlijst, domeinen met alleen SSO, uitgeschakelde registratie en verplichte profielvelden bij registratie. Wijzigingen in profiel en wachtwoord van bestaande gebruikers vinden ook plaats voordat MFA is voltooid.',
  },
  sandbox_warning: {
    title: 'Scripts draaien met serverrechten',
    description:
      'Bij self-hosted GetCertus draait dit script in dezelfde omgeving als GetCertus zelf: het kan omgevingsvariabelen van de server lezen en services op je interne netwerk bereiken. Het draait niet in een sandbox. Geef alleen toegang tot deze pagina aan mensen die je ook toegang tot de server zou toevertrouwen.',
  },
  security_warning: {
    title: 'Beveiligingswaarschuwing',
    description:
      'Deze actie wordt alleen uitgevoerd nadat de lokale wachtwoordverificatie is mislukt. Geef `passwordVerified: true` alleen terug nadat je het ingevoerde wachtwoord zelf hebt geverifieerd. Gebruikers die via deze actie worden aangemaakt, omzeilen controles die alleen bij registratie gelden, zoals de e-mailblokkeerlijst, domeinen met alleen SSO, uitgeschakelde registratie en verplichte profielvelden bij registratie. Wijzigingen in profiel en wachtwoord van bestaande gebruikers vinden ook plaats voordat MFA is voltooid.',
  },
  delete_modal_title: 'Actie verwijderen',
  delete_modal_content:
    'Weet je zeker dat je deze actie wilt verwijderen? Het authenticatieproces voert dit script dan niet meer uit.',
  deleted: 'Actie verwijderd',
  created: 'Actie aangemaakt',
  saved: 'Actie opgeslagen',
};

export default Object.freeze(actions);
