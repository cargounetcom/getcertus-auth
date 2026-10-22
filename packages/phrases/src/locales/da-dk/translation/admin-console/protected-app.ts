/* GetCertus addition (MPL-2.0, see GETCERTUS.md): admin console phrases. */
const protected_app = {
  name: 'Beskyttet app',
  title: 'Opret en beskyttet app: tilføj godkendelse enkelt og lynhurtigt',
  fast_create: 'Hurtig oprettelse',
  modal_title: 'Opret beskyttet app',
  modal_subtitle:
    'Slå sikker og hurtig beskyttelse til med få klik. Tilføj nemt godkendelse til din eksisterende webapp.',
  form: {
    url_field_label: 'Din oprindelige URL',
    url_field_placeholder: 'https://domain.com/',
    url_field_description: 'Angiv adressen på den app, der skal have godkendelsesbeskyttelse.',
    url_field_modification_notice:
      'Det kan tage 1-2 minutter, før ændringer af den oprindelige URL træder i kraft på alle netværksplaceringer globalt.',
    url_field_tooltip:
      "Angiv adressen på din applikation uden '/sti'. Efter oprettelsen kan du tilpasse godkendelsesregler for hver route.\n\nBemærk: Selve den oprindelige URL kræver ikke godkendelse; beskyttelsen gælder kun adgang via det angivne app-domæne.",
    domain_field_label: 'App-domæne',
    domain_field_placeholder: 'your-domain',
    domain_field_description:
      'Denne URL fungerer som proxy for godkendelsesbeskyttelse af den oprindelige URL. Et brugerdefineret domæne kan tilføjes efter oprettelsen.',
    domain_field_description_short:
      'Denne URL fungerer som proxy for godkendelsesbeskyttelse af den oprindelige URL.',
    domain_field_tooltip:
      "Apps, der beskyttes af GetCertus, hostes som standard på 'your-domain.{{domain}}'. Et brugerdefineret domæne kan tilføjes efter oprettelsen.",
    create_application: 'Opret applikation',
    create_protected_app: 'Hurtig oprettelse',
    errors: {
      domain_required: 'Dit domæne er påkrævet.',
      domain_in_use: 'Dette underdomæne er allerede i brug.',
      invalid_domain_format:
        "Ugyldigt format for underdomænet: brug kun små bogstaver, tal og bindestreger '-'.",
      url_required: 'Den oprindelige URL er påkrævet.',
      invalid_url:
        "Ugyldigt format for den oprindelige URL: brug http:// eller https://. Bemærk: '/sti' understøttes ikke i øjeblikket.",
      localhost:
        'Gør først din lokale server tilgængelig på internettet. Læs mere om <a>lokal udvikling</a>.',
    },
  },
  id_token_claims: {
    card_title: 'Claims i ID-token',
    card_description:
      'Anmod om yderligere brugerscopes ved login i den beskyttede app for at medtage aktiverede udvidede claims i det videresendte ID-token.',
    field_title: 'Yderligere scopes',
    field_description:
      'Claims medtages kun, hvis de er slået til i <a>Brugerdefineret JWT > ID-token</a>, og det tilsvarende scope anmodes om her.',
    table_column_scope: 'Scope',
    table_column_claims_forwarded: 'Videresendte claims',
    disabled_claims_hint:
      'Gråtonede claims videresendes endnu ikke. Slå dem til i <a>Brugerdefineret JWT > ID-token</a> for at medtage dem i ID-tokenet.',
  },
  success_message: '🎉 App-godkendelse er slået til! Udforsk den nye oplevelse på dit websted.',
};

export default Object.freeze(protected_app);
