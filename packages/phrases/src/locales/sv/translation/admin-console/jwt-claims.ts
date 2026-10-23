/* GetCertus addition (MPL-2.0, see GETCERTUS.md): admin console phrases. */
const jwt_claims = {
  title: 'Anpassad JWT',
  description: 'Anpassa åtkomsttoken eller ID-token för att ge din applikation extra information.',
  access_token: {
    card_title: 'Åtkomsttoken',
    card_description:
      'Åtkomsttoken är den autentiseringsuppgift som API:er använder för att auktorisera förfrågningar och innehåller bara de claims som behövs för åtkomstbeslut.',
  },
  user_jwt: {
    card_field: 'Åtkomsttoken för användare',
    card_description: 'Lägg till användarspecifik data när åtkomsttoken utfärdas.',
    for: 'för användare',
  },
  machine_to_machine_jwt: {
    card_field: 'Åtkomsttoken för maskin-till-maskin',
    card_description: 'Lägg till extra data när maskin-till-maskin-token utfärdas.',
    for: 'för M2M',
  },
  id_token: {
    card_title: 'ID-token',
    card_description:
      'ID-token är ett identitetsintyg som tas emot efter inloggning och innehåller identitetsclaims som klienten kan använda för visning eller för att skapa en session.',
    card_field: 'ID-token för användare',
    card_field_description:
      "Claimsen 'sub', 'email', 'phone', 'profile' och 'address' är alltid tillgängliga. Andra claims måste först aktiveras här. I samtliga fall måste din app begära motsvarande scopes vid integrationen för att ta emot dem.",
  },
  code_editor_title: 'Anpassa claims för {{token}}',
  custom_jwt_create_button: 'Lägg till anpassade claims',
  custom_jwt_item: 'Anpassade claims {{for}}',
  delete_modal_title: 'Ta bort anpassade claims',
  delete_modal_content: 'Vill du verkligen ta bort de anpassade claimsen?',
  clear: 'Börja om',
  cleared: 'Rensat',
  restore: 'Återställ standard',
  restored: 'Återställt',
  data_source_tab: 'Datakälla',
  error_handling_tab: 'Felhantering',
  test_tab: 'Testkontext',
  jwt_claims_description: 'Standardclaims tas automatiskt med i  och kan inte åsidosättas.',
  user_data: {
    title: 'Användarkontext',
    subtitle: 'Använd indataparametern `context.user` för viktig användarinformation.',
  },
  grant_data: {
    title: 'Grant-kontext',
    subtitle:
      'Använd indataparametern `context.grant` för viktig grant-information; endast tillgänglig vid token exchange.',
  },
  interaction_data: {
    title: 'Kontext för användarinteraktion',
    subtitle:
      'Använd parametern `context.interaction` för användarens interaktionsdetaljer i den aktuella autentiseringssessionen.',
  },
  application_data: {
    title: 'Applikationskontext',
    subtitle:
      'Använd indataparametern `context.application` för applikationsinformationen som hör till token.',
  },
  organization_data: {
    title: 'Organisationskontext',
    subtitle:
      'Använd indataparametern `context.organization` för information om målorganisationen; endast tillgänglig för organisationstoken.',
  },
  token_data: {
    title: 'Token-payload',
    subtitle: 'Använd indataparametern `token` för den aktuella åtkomsttokens payload. ',
  },
  api_context: {
    title: 'API-kontext: åtkomstkontroll',
    subtitle: 'Använd metoden `api.denyAccess` för att neka tokenförfrågan.',
  },
  error_handling: {
    title: 'Felhantering',
    subtitle: 'Styr om utfärdandet av token ska blockeras när skriptet misslyckas.',
    input_field_title: 'Beteende vid tokenutfärdande när skriptet får fel',
    block_issuance_switch: 'Blockera tokenutfärdande när skriptet får fel',
    default_hint_create:
      'Nya skript för anpassade claims blockerar som standard tokenutfärdandet när skriptet misslyckas. Om API:et redan anger ett värde används det sparade värdet.',
    default_hint_edit:
      'Befintliga skript för anpassade claims utan den här inställningen behåller den gamla standarden (av) tills du uttryckligen sparar ett värde.',
    warning:
      'När detta är aktiverat nekar körtidsfel i skriptet tokenförfrågan med `invalid_request` (400) och en lokaliserad `error_description`. Anrop till `api.denyAccess` returnerar fortfarande `access_denied`.',
  },
  fetch_external_data: {
    title: 'Hämta extern data',
    subtitle: 'Ta med data från dina externa API:er direkt i claims.',
    description:
      'Använd funktionen `fetch` för att anropa dina externa API:er och ta med datan i dina anpassade claims. Exempel: ',
  },
  environment_variables: {
    title: 'Ange miljövariabler',
    subtitle: 'Använd miljövariabler för att lagra känslig information.',
    input_field_title: 'Lägg till miljövariabler',
    sample_code: 'Åtkomst till miljövariabler i din hanterare för anpassade tokenclaims. Exempel: ',
  },
  jwt_claims_hint:
    'Håll anpassade claims under 50 KB. Standardclaims tas automatiskt med i token och kan inte åsidosättas.',
  tester: {
    subtitle: 'Justera testtoken och testanvändardata.',
    run_button: 'Kör test',
    result_title: 'Testresultat',
  },
  sandbox_warning: {
    title: 'Skript körs med serverbehörigheter',
    description:
      'På självhostad GetCertus körs skriptet i samma miljö som GetCertus: det kan läsa serverns miljövariabler och nå tjänster i ditt interna nätverk. Det körs inte i en sandlåda. Ge bara åtkomst till den här sidan till personer som du skulle anförtro åtkomst till servern.',
  },
  form_error: {
    invalid_json: 'Ogiltigt JSON-format',
  },
};

export default Object.freeze(jwt_claims);
