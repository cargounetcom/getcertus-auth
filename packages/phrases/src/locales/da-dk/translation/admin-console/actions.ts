/* GetCertus addition (MPL-2.0, see GETCERTUS.md): admin console phrases. */
const actions = {
  page_title: 'Handlinger',
  title: 'Handlinger',
  subtitle:
    "Kør brugerdefineret kode på bestemte punkter i godkendelsesflowet for at udvide GetCertus' adfærd.",
  status: {
    not_configured: 'Ikke konfigureret',
    configured: 'Konfigureret',
    enabled: 'Slået til',
    disabled: 'Slået fra',
  },
  types: {
    post_first_factor_verification: {
      name: 'Efter verificering af første faktor',
      description:
        'Kør brugerdefineret logik, når den lokale adgangskodeverificering fejler under login.',
    },
    post_sign_in: {
      name: 'Efter login',
      description: 'Kør brugerdefineret logik, når en bruger er logget ind.',
    },
  },
  data_source_tab: 'Datakilde',
  test_tab: 'Testkontekst',
  settings_tab: 'Indstillinger',
  event_data: {
    title: 'Hændelses-payload',
    subtitle: 'Brug inputparameteren `event` til data om godkendelseshændelsen.',
  },
  result_data: {
    title: 'Handlingsresultat',
    subtitle: 'Returnér et resultatobjekt, som GetCertus forstår for denne handlingstype.',
  },
  environment_variables: {
    title: 'Angiv miljøvariabler',
    subtitle: 'Brug miljøvariabler til at gemme følsomme oplysninger.',
    input_field_title: 'Tilføj miljøvariabler',
    sample_code: 'Adgang til miljøvariabler i din handlingshandler. Eksempel:',
  },
  fetch_external_data: {
    title: 'Hent eksterne data',
    subtitle: "Kald eksterne API'er fra dit handlingsscript.",
    description:
      "Brug funktionen `fetch` til at kalde dine eksterne API'er og medtage dataene i handlingsresultatet. Eksempel:",
  },
  settings: {
    title: 'Indstillinger',
    subtitle: 'Styr, om handlingen er aktiv, og hvordan kørselsfejl håndteres.',
    enabled: {
      title: 'Slå handling til',
      description: 'Kør dette script, når godkendelseshændelsen udløses.',
    },
    on_execution_error: {
      title: 'Ved scriptfejl',
      description: 'Vælg, hvordan GetCertus skal reagere, når scriptet fejler under kørsel.',
      block: 'Blokér godkendelsesflowet',
      allow: 'Lad godkendelsesflowet fortsætte',
      post_first_factor_description:
        'Når scriptet fejler, afviser GetCertus altid ugyldige loginoplysninger, så adgangskodeverificeringen ikke kan omgås.',
    },
  },
  test_context: {
    subtitle: 'Justér test-payloaden for hændelsen, der bruges ved testkørsler.',
    input_field_title: 'Eksempel-JSON for hændelsen',
  },
  script: {
    title: 'Script',
    restore: 'Gendan standard',
    restored: 'Gendannet',
  },
  tester: {
    run_button: 'Kør test',
    result_title: 'Testresultat',
  },
  form_error: {
    invalid_json: 'Ugyldigt JSON-format',
  },
  sandbox_and_security_warning: {
    title: 'Scripts kører med serverrettigheder',
    description:
      'På selvhostet GetCertus kører scriptet i samme miljø som GetCertus selv: det kan læse serverens miljøvariabler og nå tjenester på dit interne netværk. Det kører ikke i en sandkasse. Giv kun adgang til denne side til personer, du også ville betro adgang til serveren. Handlingen kører kun, efter at den lokale adgangskodeverificering er fejlet – returnér kun `passwordVerified: true`, når du selv har verificeret den indtastede adgangskode. Brugere, der oprettes af handlingen, omgår kontroller, der kun gælder ved registrering, f.eks. e-mailblokeringslisten, domæner med kun SSO, slået-fra-tilmelding og obligatoriske profiloplysninger ved registrering. Ændringer af eksisterende brugeres profil og adgangskode sker også, før MFA er gennemført.',
  },
  sandbox_warning: {
    title: 'Scripts kører med serverrettigheder',
    description:
      'På selvhostet GetCertus kører scriptet i samme miljø som GetCertus selv: det kan læse serverens miljøvariabler og nå tjenester på dit interne netværk. Det kører ikke i en sandkasse. Giv kun adgang til denne side til personer, du også ville betro adgang til serveren.',
  },
  security_warning: {
    title: 'Sikkerhedsadvarsel',
    description:
      'Handlingen kører kun, efter at den lokale adgangskodeverificering er fejlet. Returnér kun `passwordVerified: true`, når du selv har verificeret den indtastede adgangskode. Brugere, der oprettes af handlingen, omgår kontroller, der kun gælder ved registrering, f.eks. e-mailblokeringslisten, domæner med kun SSO, slået-fra-tilmelding og obligatoriske profiloplysninger ved registrering. Ændringer af eksisterende brugeres profil og adgangskode sker også, før MFA er gennemført.',
  },
  delete_modal_title: 'Slet handling',
  delete_modal_content:
    'Er du sikker på, at du vil slette denne handling? Godkendelsesflowet vil så ikke længere køre scriptet.',
  deleted: 'Handlingen er slettet',
  created: 'Handlingen er oprettet',
  saved: 'Handlingen er gemt',
};

export default Object.freeze(actions);
