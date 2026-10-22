/* GetCertus addition (MPL-2.0, see GETCERTUS.md): admin console phrases. */
const protected_app = {
  name: 'Skyddad app',
  title: 'Skapa en skyddad app: lägg till autentisering enkelt och blixtsnabbt',
  fast_create: 'Snabbskapa',
  modal_title: 'Skapa skyddad app',
  modal_subtitle:
    'Aktivera säkert och snabbt skydd med några klick. Lägg enkelt till autentisering i din befintliga webbapp.',
  form: {
    url_field_label: 'Din ursprungs-URL',
    url_field_placeholder: 'https://domain.com/',
    url_field_description: 'Ange adressen till appen som behöver autentiseringsskydd.',
    url_field_modification_notice:
      'Det kan ta 1–2 minuter innan ändringar av ursprungs-URL:en gäller på alla nätverksplatser globalt.',
    url_field_tooltip:
      "Ange adressen till din applikation, utan '/sökväg'. När appen har skapats kan du anpassa autentiseringsregler per route.\n\nObs! Själva ursprungs-URL:en kräver ingen autentisering; skyddet gäller bara åtkomst via den angivna appdomänen.",
    domain_field_label: 'Appdomän',
    domain_field_placeholder: 'your-domain',
    domain_field_description:
      'Den här URL:en fungerar som proxy för autentiseringsskydd av den ursprungliga URL:en. En anpassad domän kan läggas till efter att appen skapats.',
    domain_field_description_short:
      'Den här URL:en fungerar som proxy för autentiseringsskydd av den ursprungliga URL:en.',
    domain_field_tooltip:
      "Appar som skyddas av GetCertus hostas som standard på 'your-domain.{{domain}}'. En anpassad domän kan läggas till efter att appen skapats.",
    create_application: 'Skapa applikation',
    create_protected_app: 'Snabbskapa',
    errors: {
      domain_required: 'Domän krävs.',
      domain_in_use: 'Underdomänen används redan.',
      invalid_domain_format:
        "Ogiltigt format på underdomänen: använd bara gemener, siffror och bindestreck '-'.",
      url_required: 'Ursprungs-URL krävs.',
      invalid_url:
        "Ogiltigt format på ursprungs-URL:en: använd http:// eller https://. Obs! '/sökväg' stöds inte för närvarande.",
      localhost:
        'Gör först din lokala server tillgänglig på internet. Läs mer om <a>lokal utveckling</a>.',
    },
  },
  id_token_claims: {
    card_title: 'Claims i ID-token',
    card_description:
      'Begär ytterligare användarscopes vid inloggning i den skyddade appen för att ta med aktiverade utökade claims i den vidarebefordrade ID-token.',
    field_title: 'Ytterligare scopes',
    field_description:
      'Claims tas bara med om de är aktiverade i <a>Anpassad JWT > ID-token</a> och motsvarande scope begärs här.',
    table_column_scope: 'Scope',
    table_column_claims_forwarded: 'Vidarebefordrade claims',
    disabled_claims_hint:
      'Gråtonade claims vidarebefordras inte ännu. Aktivera dem i <a>Anpassad JWT > ID-token</a> för att ta med dem i ID-token.',
  },
  success_message:
    '🎉 Appautentisering har aktiverats! Upptäck den nya upplevelsen på din webbplats.',
};

export default Object.freeze(protected_app);
