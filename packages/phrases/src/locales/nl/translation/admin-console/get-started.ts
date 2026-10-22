/* GetCertus addition (MPL-2.0, see GETCERTUS.md): admin console phrases. */
const get_started = {
  page_title: 'Aan de slag',
  title: 'Iets om je op weg te helpen',
  subtitle: 'Een paar dingen die je kunt doen om snel waarde uit GetCertus te halen',
  develop: {
    title: 'Ontwikkelen: integreer je app in 5 minuten',
    title_cloud: 'Ontwikkelen: integreer je app in een paar minuten veilig',
    subtitle_cloud: "Of integreer je app in 5 minuten met onze kant-en-klare SDK's en tutorials.",
    try_mcp: 'Probeer integratie met één prompt via MCP',
  },
  customize: {
    title: 'Aanpassen: bied een geweldige inlogervaring',
    preview: {
      title: 'Bekijk de live preview van de inlogervaring die je net hebt aangepast',
      subtitle: 'Probeer de inlogervaring van GetCertus nu en zie hoe het werkt',
    },
    connector: {
      title: 'Voeg meer connectors toe voor meer manieren van sociaal inloggen',
      subtitle:
        'Probeer wachtwoordloos inloggen en bied je klanten een veilige en soepele ervaring',
    },
    continue_customizing: 'Verder aanpassen',
    try_now: 'Nu proberen',
    add_more: 'Meer toevoegen',
  },
  secure: {
    title: 'Beveiligen: bescherm je resources',
  },
  manage: {
    title: 'Beheren: bepaal de toegang tot je product en voor je gebruikers',
    rbac: {
      title: 'Voeg op rollen gebaseerd toegangsbeheer toe om je resources te beschermen',
      subtitle:
        'Beheer je resources met schaalbare autorisatie op basis van rollen voor uiteenlopende toepassingen.',
    },
    create_roles: 'Rollen maken',
  },
  convert_to_production: {
    card_title: 'Klaar om live te gaan? Vergeet niet je productieomgeving te starten!',
    title: 'Laat je project niet in ontwikkelmodus hangen',
    subtitle:
      'Je gebruikt een ontwikkeltenant om gratis te testen. Om live te gaan, maak je een productietenant aan of zet je deze om. Iets op maat nodig? <a>Neem contact met ons op</a>',
    convert_button: 'Omzetten naar productietenant',
  },
  oss_cloud: {
    try: {
      title: 'Geen beheerwerk — probeer GetCertus Cloud gratis',
      badge: 'Aanbevolen',
      description:
        'Een volledig beheerde GetCertus zonder onderhoud — met snelle integratie via MCP, ondersteuning voor meerdere tenants, samenwerking in teams en alle premiumfuncties. Gratis starten, geen creditcard nodig.',
      action: 'GetCertus Cloud verkennen',
    },
    private_cloud: {
      title: 'Compliance of een eigen implementatie nodig?',
      card_title: 'Private cloud',
      description:
        'Een eigen GetCertus-instantie met volledige gegevensscheiding, een eigen domein en SLA-garanties. Ideaal voor organisaties met strikte eisen aan gegevensopslag of compliance. Wij regelen de infrastructuur, zodat jij je op je product kunt richten.',
    },
    sidebar: {
      title: 'Focus op bouwen, niet op hosten.',
      description: 'Laat GetCertus Cloud de authenticatie-infrastructuur voor je regelen.',
      action: 'Probeer GetCertus Cloud',
    },
  },
  view_all: 'Alles bekijken →',
};

export default Object.freeze(get_started);
