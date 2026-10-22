/* GetCertus addition (MPL-2.0, see GETCERTUS.md): admin console phrases. */
const protected_app = {
  name: 'Beveiligde app',
  title: 'Maak een beveiligde app: voeg eenvoudig en razendsnel authenticatie toe',
  fast_create: 'Snel maken',
  modal_title: 'Beveiligde app maken',
  modal_subtitle:
    'Schakel met een paar klikken veilige en snelle bescherming in. Voeg eenvoudig authenticatie toe aan je bestaande webapp.',
  form: {
    url_field_label: 'Je oorspronkelijke URL',
    url_field_placeholder: 'https://domain.com/',
    url_field_description: 'Geef het adres op van je app die authenticatiebescherming nodig heeft.',
    url_field_modification_notice:
      'Het kan 1-2 minuten duren voordat wijzigingen in de oorspronkelijke URL op alle netwerklocaties wereldwijd actief zijn.',
    url_field_tooltip:
      "Geef het adres van je applicatie op, zonder '/pad'. Na het aanmaken kun je authenticatieregels per route aanpassen.\n\nLet op: de oorspronkelijke URL zelf vereist geen authenticatie; de bescherming geldt alleen voor toegang via het aangewezen app-domein.",
    domain_field_label: 'App-domein',
    domain_field_placeholder: 'your-domain',
    domain_field_description:
      'Deze URL fungeert als proxy voor authenticatiebescherming van de oorspronkelijke URL. Na het aanmaken kun je een eigen domein toepassen.',
    domain_field_description_short:
      'Deze URL fungeert als proxy voor authenticatiebescherming van de oorspronkelijke URL.',
    domain_field_tooltip:
      "Apps die door GetCertus worden beveiligd, worden standaard gehost op 'your-domain.{{domain}}'. Na het aanmaken kun je een eigen domein toepassen.",
    create_application: 'Applicatie maken',
    create_protected_app: 'Snel maken',
    errors: {
      domain_required: 'Je domein is verplicht.',
      domain_in_use: 'Deze subdomeinnaam is al in gebruik.',
      invalid_domain_format:
        "Ongeldige notatie van het subdomein: gebruik alleen kleine letters, cijfers en koppeltekens '-'.",
      url_required: 'De oorspronkelijke URL is verplicht.',
      invalid_url:
        "Ongeldige notatie van de oorspronkelijke URL: gebruik http:// of https://. Let op: '/pad' wordt momenteel niet ondersteund.",
      localhost:
        'Maak je lokale server eerst bereikbaar via internet. Meer informatie over <a>lokale ontwikkeling</a>.',
    },
  },
  id_token_claims: {
    card_title: 'Claims in het ID-token',
    card_description:
      'Vraag extra gebruikersscopes aan bij het inloggen in de beveiligde app om ingeschakelde uitgebreide claims op te nemen in het doorgestuurde ID-token.',
    field_title: 'Extra scopes',
    field_description:
      'Claims worden alleen opgenomen als ze zijn ingeschakeld in <a>Aangepaste JWT > ID-token</a> en de bijbehorende scope hier wordt aangevraagd.',
    table_column_scope: 'Scope',
    table_column_claims_forwarded: 'Doorgestuurde claims',
    disabled_claims_hint:
      'Grijs weergegeven claims worden nog niet doorgestuurd. Schakel ze in via <a>Aangepaste JWT > ID-token</a> om ze in het ID-token op te nemen.',
  },
  success_message:
    '🎉 App-authenticatie is ingeschakeld! Ontdek de nieuwe ervaring van je website.',
};

export default Object.freeze(protected_app);
