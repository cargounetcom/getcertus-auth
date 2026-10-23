/* GetCertus addition (MPL-2.0, see GETCERTUS.md): admin console phrases. */
const jwt_claims = {
  title: 'Brugerdefineret JWT',
  description:
    'Tilpas adgangstokenet eller ID-tokenet for at give din applikation ekstra oplysninger.',
  access_token: {
    card_title: 'Adgangstoken',
    card_description:
      "Adgangstokenet er den legitimation, API'er bruger til at autorisere anmodninger, og indeholder kun de claims, der er nødvendige for adgangsbeslutninger.",
  },
  user_jwt: {
    card_field: 'Adgangstoken for brugere',
    card_description: 'Tilføj brugerspecifikke data, når adgangstokenet udstedes.',
    for: 'for bruger',
  },
  machine_to_machine_jwt: {
    card_field: 'Maskine-til-maskine-adgangstoken',
    card_description: 'Tilføj ekstra data, når maskine-til-maskine-tokens udstedes.',
    for: 'for M2M',
  },
  id_token: {
    card_title: 'ID-token',
    card_description:
      'ID-tokenet er en identitetserklæring, der modtages efter login, med identitetsclaims, som klienten kan bruge til visning eller oprettelse af en session.',
    card_field: 'ID-token for brugere',
    card_field_description:
      "Claimsene 'sub', 'email', 'phone', 'profile' og 'address' er altid tilgængelige. Andre claims skal først slås til her. I alle tilfælde skal din app anmode om de tilsvarende scopes ved integrationen for at modtage dem.",
  },
  code_editor_title: 'Tilpas claims for {{token}}',
  custom_jwt_create_button: 'Tilføj brugerdefinerede claims',
  custom_jwt_item: 'Brugerdefinerede claims {{for}}',
  delete_modal_title: 'Slet brugerdefinerede claims',
  delete_modal_content: 'Er du sikker på, at du vil slette de brugerdefinerede claims?',
  clear: 'Start forfra',
  cleared: 'Ryddet',
  restore: 'Gendan standard',
  restored: 'Gendannet',
  data_source_tab: 'Datakilde',
  error_handling_tab: 'Fejlhåndtering',
  test_tab: 'Testkontekst',
  jwt_claims_description: 'Standardclaims medtages automatisk i  og kan ikke tilsidesættes.',
  user_data: {
    title: 'Brugerkontekst',
    subtitle: 'Brug inputparameteren `context.user` til vigtige brugeroplysninger.',
  },
  grant_data: {
    title: 'Grant-kontekst',
    subtitle:
      'Brug inputparameteren `context.grant` til vigtige grant-oplysninger; kun tilgængelig ved token exchange.',
  },
  interaction_data: {
    title: 'Kontekst for brugerinteraktion',
    subtitle:
      'Brug parameteren `context.interaction` til brugerens interaktionsdetaljer i den aktuelle godkendelsessession.',
  },
  application_data: {
    title: 'Applikationskontekst',
    subtitle:
      'Brug inputparameteren `context.application` til applikationsoplysningerne, der hører til tokenet.',
  },
  organization_data: {
    title: 'Organisationskontekst',
    subtitle:
      'Brug inputparameteren `context.organization` til oplysninger om målorganisationen; kun tilgængelig for organisationstokens.',
  },
  token_data: {
    title: 'Token-payload',
    subtitle: 'Brug inputparameteren `token` til det aktuelle adgangstokens payload. ',
  },
  api_context: {
    title: 'API-kontekst: adgangskontrol',
    subtitle: 'Brug metoden `api.denyAccess` til at afvise tokenanmodningen.',
  },
  error_handling: {
    title: 'Fejlhåndtering',
    subtitle: 'Styr, om udstedelse af tokens skal blokeres, når scriptet fejler.',
    input_field_title: 'Adfærd ved tokenudstedelse, når scriptet fejler',
    block_issuance_switch: 'Blokér tokenudstedelse, når scriptet fejler',
    default_hint_create:
      "Nye scripts til brugerdefinerede claims blokerer som standard tokenudstedelsen, når scriptet fejler. Hvis API'et allerede angiver en værdi, bruges den gemte værdi.",
    default_hint_edit:
      'Eksisterende scripts til brugerdefinerede claims uden denne indstilling beholder den gamle standard (slået fra), indtil du udtrykkeligt gemmer en værdi.',
    warning:
      'Når dette er slået til, afviser kørselsfejl i scriptet tokenanmodningen med `invalid_request` (400) og en lokaliseret `error_description`. Kald til `api.denyAccess` returnerer stadig `access_denied`.',
  },
  fetch_external_data: {
    title: 'Hent eksterne data',
    subtitle: "Indsæt data fra dine eksterne API'er direkte i claims.",
    description:
      "Brug funktionen `fetch` til at kalde dine eksterne API'er og medtage dataene i dine brugerdefinerede claims. Eksempel: ",
  },
  environment_variables: {
    title: 'Angiv miljøvariabler',
    subtitle: 'Brug miljøvariabler til at gemme følsomme oplysninger.',
    input_field_title: 'Tilføj miljøvariabler',
    sample_code:
      'Adgang til miljøvariabler i din handler til brugerdefinerede tokenclaims. Eksempel: ',
  },
  jwt_claims_hint:
    'Hold brugerdefinerede claims under 50 KB. Standardclaims medtages automatisk i tokenet og kan ikke tilsidesættes.',
  tester: {
    subtitle: 'Justér testtokenet og testbrugerdataene.',
    run_button: 'Kør test',
    result_title: 'Testresultat',
  },
  sandbox_warning: {
    title: 'Scripts kører med serverrettigheder',
    description:
      'På selvhostet GetCertus kører scriptet i samme miljø som GetCertus selv: det kan læse serverens miljøvariabler og nå tjenester på dit interne netværk. Det kører ikke i en sandkasse. Giv kun adgang til denne side til personer, du også ville betro adgang til serveren.',
  },
  form_error: {
    invalid_json: 'Ugyldigt JSON-format',
  },
};

export default Object.freeze(jwt_claims);
