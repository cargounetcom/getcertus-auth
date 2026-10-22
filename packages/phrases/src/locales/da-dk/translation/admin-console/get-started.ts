/* GetCertus addition (MPL-2.0, see GETCERTUS.md): admin console phrases. */
const get_started = {
  page_title: 'Kom i gang',
  title: 'Noget, der hjælper dig til at lykkes',
  subtitle: 'Et par ting, du kan gøre for hurtigt at få værdi af GetCertus',
  develop: {
    title: 'Udvikl: integrér din app på 5 minutter',
    title_cloud: 'Udvikl: integrér din app sikkert på få minutter',
    subtitle_cloud:
      "Eller integrér din app på 5 minutter med vores færdige SDK'er og vejledninger.",
    try_mcp: 'Prøv integration med én prompt via MCP',
  },
  customize: {
    title: 'Tilpas: lever en god loginoplevelse',
    preview: {
      title: 'Se en live-forhåndsvisning af den loginoplevelse, du lige har tilpasset',
      subtitle: "Prøv GetCertus' loginoplevelse nu, og se hvordan den virker",
    },
    connector: {
      title: 'Tilføj flere connectorer for at understøtte flere sociale loginmetoder',
      subtitle: 'Prøv adgangskodefri login, og giv dine kunder en sikker og gnidningsfri oplevelse',
    },
    continue_customizing: 'Fortsæt tilpasning',
    try_now: 'Prøv nu',
    add_more: 'Tilføj flere',
  },
  secure: {
    title: 'Sikr: beskyt dine ressourcer',
  },
  manage: {
    title: 'Administrér: definér adgangskontrol for dit produkt og dine brugere',
    rbac: {
      title: 'Tilføj rollebaseret adgangskontrol for at beskytte dine ressourcer',
      subtitle:
        'Styr dine ressourcer med skalerbar rollebaseret autorisation til forskellige formål.',
    },
    create_roles: 'Opret roller',
  },
  convert_to_production: {
    card_title: 'Klar til at gå live? Glem ikke at starte dit produktionsmiljø!',
    title: 'Lad ikke dit projekt sidde fast i udviklingstilstand',
    subtitle:
      'Du bruger en udviklingstenant til gratis test. For at gå live skal du oprette eller konvertere til en produktionstenant. Brug for noget skræddersyet? <a>Kontakt os</a>',
    convert_button: 'Konvertér til produktionstenant',
  },
  oss_cloud: {
    try: {
      title: 'Spring driftsarbejdet over – prøv GetCertus Cloud gratis',
      badge: 'Anbefalet',
      description:
        'Få et fuldt administreret GetCertus uden vedligeholdelse – plus hurtig integration via MCP, understøttelse af flere tenants, teamsamarbejde og alle premiumfunktioner. Gratis at starte, intet kreditkort påkrævet.',
      action: 'Udforsk GetCertus Cloud',
    },
    private_cloud: {
      title: 'Brug for compliance eller en tilpasset installation?',
      card_title: 'Privat sky',
      description:
        'Få en dedikeret GetCertus-instans med fuld dataisolering, eget domæne og SLA-garantier. Perfekt til virksomheder med strenge krav til dataopbevaring eller compliance. Vi håndterer infrastrukturen, så du kan fokusere på dit produkt.',
    },
    sidebar: {
      title: 'Fokusér på at bygge, ikke på hosting.',
      description: 'Lad GetCertus Cloud håndtere godkendelsesinfrastrukturen for dig.',
      action: 'Prøv GetCertus Cloud',
    },
  },
  view_all: 'Se alle →',
};

export default Object.freeze(get_started);
