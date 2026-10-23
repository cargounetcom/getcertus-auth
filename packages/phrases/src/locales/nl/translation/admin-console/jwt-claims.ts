/* GetCertus addition (MPL-2.0, see GETCERTUS.md): admin console phrases. */
const jwt_claims = {
  title: 'Aangepaste JWT',
  description: 'Pas het toegangstoken of ID-token aan om je applicatie extra informatie te geven.',
  access_token: {
    card_title: 'Toegangstoken',
    card_description:
      "Het toegangstoken is de referentie die API's gebruiken om verzoeken te autoriseren; het bevat alleen de claims die nodig zijn voor toegangsbeslissingen.",
  },
  user_jwt: {
    card_field: 'Toegangstoken voor gebruikers',
    card_description:
      'Voeg gebruikersspecifieke gegevens toe bij het uitgeven van het toegangstoken.',
    for: 'voor gebruiker',
  },
  machine_to_machine_jwt: {
    card_field: 'Machine-to-machine-toegangstoken',
    card_description: 'Voeg extra gegevens toe bij het uitgeven van machine-to-machine-tokens.',
    for: 'voor M2M',
  },
  id_token: {
    card_title: 'ID-token',
    card_description:
      'Het ID-token is een identiteitsverklaring die na het inloggen wordt ontvangen, met identiteitsclaims die de client kan gebruiken voor weergave of het aanmaken van een sessie.',
    card_field: 'ID-token voor gebruikers',
    card_field_description:
      "De claims 'sub', 'email', 'phone', 'profile' en 'address' zijn altijd beschikbaar. Andere claims moet je hier eerst inschakelen. In alle gevallen moet je app bij de integratie de bijbehorende scopes aanvragen om ze te ontvangen.",
  },
  code_editor_title: 'Claims van het {{token}} aanpassen',
  custom_jwt_create_button: 'Aangepaste claims toevoegen',
  custom_jwt_item: 'Aangepaste claims {{for}}',
  delete_modal_title: 'Aangepaste claims verwijderen',
  delete_modal_content: 'Weet je zeker dat je de aangepaste claims wilt verwijderen?',
  clear: 'Opnieuw beginnen',
  cleared: 'Gewist',
  restore: 'Standaardwaarden herstellen',
  restored: 'Hersteld',
  data_source_tab: 'Gegevensbron',
  error_handling_tab: 'Foutafhandeling',
  test_tab: 'Testcontext',
  jwt_claims_description:
    'Standaardclaims worden automatisch opgenomen in het  en kunnen niet worden overschreven.',
  user_data: {
    title: 'Gebruikerscontext',
    subtitle: 'Gebruik de invoerparameter `context.user` voor belangrijke gebruikersgegevens.',
  },
  grant_data: {
    title: 'Grantcontext',
    subtitle:
      'Gebruik de invoerparameter `context.grant` voor belangrijke grantgegevens; alleen beschikbaar bij token exchange.',
  },
  interaction_data: {
    title: 'Context van gebruikersinteractie',
    subtitle:
      'Gebruik de parameter `context.interaction` voor de interactiegegevens van de gebruiker in de huidige authenticatiesessie.',
  },
  application_data: {
    title: 'Applicatiecontext',
    subtitle:
      'Gebruik de invoerparameter `context.application` voor de applicatiegegevens die bij het token horen.',
  },
  organization_data: {
    title: 'Organisatiecontext',
    subtitle:
      'Gebruik de invoerparameter `context.organization` voor de gegevens van de doelorganisatie; alleen beschikbaar voor organisatietokens.',
  },
  token_data: {
    title: 'Token-payload',
    subtitle: 'Gebruik de invoerparameter `token` voor de payload van het huidige toegangstoken. ',
  },
  api_context: {
    title: 'API-context: toegangsbeheer',
    subtitle: 'Gebruik de methode `api.denyAccess` om het tokenverzoek te weigeren.',
  },
  error_handling: {
    title: 'Foutafhandeling',
    subtitle: 'Bepaal of het uitgeven van tokens moet worden geblokkeerd als het script mislukt.',
    input_field_title: 'Gedrag bij tokenuitgifte als het script een fout geeft',
    block_issuance_switch: 'Tokenuitgifte blokkeren als het script een fout geeft',
    default_hint_create:
      'Nieuwe scripts voor aangepaste claims blokkeren standaard de tokenuitgifte als het script mislukt. Als de API al een waarde levert, wordt de opgeslagen waarde gebruikt.',
    default_hint_edit:
      'Bestaande scripts voor aangepaste claims zonder deze instelling houden de oude standaard (uit) totdat je expliciet een waarde opslaat.',
    warning:
      'Als dit is ingeschakeld, weigeren runtimefouten in het script het tokenverzoek met `invalid_request` (400) en een gelokaliseerde `error_description`. Aanroepen van `api.denyAccess` geven nog steeds `access_denied` terug.',
  },
  fetch_external_data: {
    title: 'Externe gegevens ophalen',
    subtitle: "Neem gegevens uit je externe API's direct op in claims.",
    description:
      "Gebruik de functie `fetch` om je externe API's aan te roepen en de gegevens op te nemen in je aangepaste claims. Voorbeeld: ",
  },
  environment_variables: {
    title: 'Omgevingsvariabelen instellen',
    subtitle: 'Gebruik omgevingsvariabelen om gevoelige informatie op te slaan.',
    input_field_title: 'Omgevingsvariabelen toevoegen',
    sample_code:
      'Omgevingsvariabelen gebruiken in je handler voor aangepaste tokenclaims. Voorbeeld: ',
  },
  jwt_claims_hint:
    'Houd aangepaste claims onder de 50 KB. Standaard tokenclaims worden automatisch in het token opgenomen en kunnen niet worden overschreven.',
  tester: {
    subtitle: 'Pas het testtoken en de testgebruikersgegevens aan.',
    run_button: 'Test uitvoeren',
    result_title: 'Testresultaat',
  },
  sandbox_warning: {
    title: 'Scripts draaien met serverrechten',
    description:
      'Bij self-hosted GetCertus draait dit script in dezelfde omgeving als GetCertus zelf: het kan omgevingsvariabelen van de server lezen en services op je interne netwerk bereiken. Het draait niet in een sandbox. Geef alleen toegang tot deze pagina aan mensen die je ook toegang tot de server zou toevertrouwen.',
  },
  form_error: {
    invalid_json: 'Ongeldige JSON-notatie',
  },
};

export default Object.freeze(jwt_claims);
