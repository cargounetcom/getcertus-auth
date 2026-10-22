/* GetCertus addition (MPL-2.0, see GETCERTUS.md): admin console phrases. */
const get_started = {
  page_title: 'Kom igång',
  title: 'Något som hjälper dig att lyckas',
  subtitle: 'Några saker du kan göra för att snabbt få nytta av GetCertus',
  develop: {
    title: 'Utveckla: integrera din app på 5 minuter',
    title_cloud: 'Utveckla: integrera din app säkert på några minuter',
    subtitle_cloud: 'Eller integrera din app på 5 minuter med våra färdiga SDK:er och guider.',
    try_mcp: 'Prova integration med en enda prompt via MCP',
  },
  customize: {
    title: 'Anpassa: erbjud en bra inloggningsupplevelse',
    preview: {
      title: 'Se en live-förhandsvisning av inloggningsupplevelsen du just anpassat',
      subtitle: 'Prova GetCertus inloggningsupplevelse nu och se hur den fungerar',
    },
    connector: {
      title: 'Lägg till fler kopplingar för fler sätt att logga in socialt',
      subtitle:
        'Prova lösenordsfri inloggning och ge dina kunder en säker och friktionsfri upplevelse',
    },
    continue_customizing: 'Fortsätt anpassa',
    try_now: 'Prova nu',
    add_more: 'Lägg till fler',
  },
  secure: {
    title: 'Säkra: skydda dina resurser',
  },
  manage: {
    title: 'Hantera: definiera åtkomstkontroll för din produkt och dina användare',
    rbac: {
      title: 'Lägg till rollbaserad åtkomstkontroll för att skydda dina resurser',
      subtitle:
        'Styr dina resurser med skalbar rollbaserad auktorisering för olika användningsfall.',
    },
    create_roles: 'Skapa roller',
  },
  convert_to_production: {
    card_title: 'Redo att gå live? Glöm inte att starta din produktionsmiljö!',
    title: 'Låt inte projektet fastna i utvecklingsläge',
    subtitle:
      'Du använder en utvecklingstenant för gratis testning. För att gå live, skapa eller konvertera till en produktionstenant. Behöver du något anpassat? <a>Kontakta oss</a>',
    convert_button: 'Konvertera till produktionstenant',
  },
  oss_cloud: {
    try: {
      title: 'Slipp driftarbetet – prova GetCertus Cloud gratis',
      badge: 'Rekommenderas',
      description:
        'Få ett fullt hanterat GetCertus utan underhåll – plus snabb integration via MCP, stöd för flera tenants, teamsamarbete och alla premiumfunktioner. Gratis att börja, inget kreditkort krävs.',
      action: 'Utforska GetCertus Cloud',
    },
    private_cloud: {
      title: 'Behöver du regelefterlevnad eller en anpassad driftsättning?',
      card_title: 'Privat moln',
      description:
        'Få en dedikerad GetCertus-instans med fullständig dataisolering, egen domän och SLA-garantier. Perfekt för företag med strikta krav på datalagring eller regelefterlevnad. Vi sköter infrastrukturen så att du kan fokusera på din produkt.',
    },
    sidebar: {
      title: 'Fokusera på att bygga, inte på drift.',
      description: 'Låt GetCertus Cloud sköta autentiseringsinfrastrukturen åt dig.',
      action: 'Prova GetCertus Cloud',
    },
  },
  view_all: 'Visa alla →',
};

export default Object.freeze(get_started);
