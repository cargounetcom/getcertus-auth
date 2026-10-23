/* GetCertus addition (MPL-2.0, see GETCERTUS.md): admin console phrases. */
const actions = {
  page_title: 'Åtgärder',
  title: 'Åtgärder',
  subtitle:
    'Kör anpassad kod vid specifika punkter i autentiseringsflödet för att utöka GetCertus beteende.',
  status: {
    not_configured: 'Inte konfigurerad',
    configured: 'Konfigurerad',
    enabled: 'Aktiverad',
    disabled: 'Inaktiverad',
  },
  types: {
    post_first_factor_verification: {
      name: 'Efter verifiering av första faktorn',
      description:
        'Kör anpassad logik när den lokala lösenordsverifieringen misslyckas vid inloggning.',
    },
    post_sign_in: {
      name: 'Efter inloggning',
      description: 'Kör anpassad logik när en användare har loggat in.',
    },
  },
  data_source_tab: 'Datakälla',
  test_tab: 'Testkontext',
  settings_tab: 'Inställningar',
  event_data: {
    title: 'Händelse-payload',
    subtitle: 'Använd indataparametern `event` för data om autentiseringshändelsen.',
  },
  result_data: {
    title: 'Åtgärdsresultat',
    subtitle: 'Returnera ett resultatobjekt som GetCertus förstår för den här åtgärdstypen.',
  },
  environment_variables: {
    title: 'Ange miljövariabler',
    subtitle: 'Använd miljövariabler för att lagra känslig information.',
    input_field_title: 'Lägg till miljövariabler',
    sample_code: 'Åtkomst till miljövariabler i din åtgärdshanterare. Exempel:',
  },
  fetch_external_data: {
    title: 'Hämta extern data',
    subtitle: 'Anropa externa API:er från ditt åtgärdsskript.',
    description:
      'Använd funktionen `fetch` för att anropa dina externa API:er och ta med datan i åtgärdsresultatet. Exempel:',
  },
  settings: {
    title: 'Inställningar',
    subtitle: 'Styr om åtgärden är aktiv och hur körtidsfel hanteras.',
    enabled: {
      title: 'Aktivera åtgärd',
      description: 'Kör skriptet när autentiseringshändelsen utlöses.',
    },
    on_execution_error: {
      title: 'Vid skriptfel',
      description: 'Välj hur GetCertus ska agera när skriptet misslyckas vid körning.',
      block: 'Blockera autentiseringsflödet',
      allow: 'Låt autentiseringsflödet fortsätta',
      post_first_factor_description:
        'När skriptet misslyckas nekar GetCertus alltid ogiltiga inloggningsuppgifter så att lösenordsverifieringen inte kan kringgås.',
    },
  },
  test_context: {
    subtitle: 'Justera test-payloaden för händelsen som används vid testkörningar.',
    input_field_title: 'Exempel-JSON för händelsen',
  },
  script: {
    title: 'Skript',
    restore: 'Återställ standard',
    restored: 'Återställt',
  },
  tester: {
    run_button: 'Kör test',
    result_title: 'Testresultat',
  },
  form_error: {
    invalid_json: 'Ogiltigt JSON-format',
  },
  sandbox_and_security_warning: {
    title: 'Skript körs med serverbehörigheter',
    description:
      'På självhostad GetCertus körs skriptet i samma miljö som GetCertus: det kan läsa serverns miljövariabler och nå tjänster i ditt interna nätverk. Det körs inte i en sandlåda. Ge bara åtkomst till den här sidan till personer som du skulle anförtro åtkomst till servern. Åtgärden körs bara efter att den lokala lösenordsverifieringen har misslyckats – returnera `passwordVerified: true` först när du själv har verifierat det angivna lösenordet. Användare som skapas av åtgärden kringgår kontroller som bara gäller vid registrering, som e-postspärrlistan, domäner med enbart SSO, avstängd registrering och obligatoriska profiluppgifter vid registrering. Ändringar av befintliga användares profil och lösenord sker också innan MFA har slutförts.',
  },
  sandbox_warning: {
    title: 'Skript körs med serverbehörigheter',
    description:
      'På självhostad GetCertus körs skriptet i samma miljö som GetCertus: det kan läsa serverns miljövariabler och nå tjänster i ditt interna nätverk. Det körs inte i en sandlåda. Ge bara åtkomst till den här sidan till personer som du skulle anförtro åtkomst till servern.',
  },
  security_warning: {
    title: 'Säkerhetsvarning',
    description:
      'Åtgärden körs bara efter att den lokala lösenordsverifieringen har misslyckats. Returnera `passwordVerified: true` först när du själv har verifierat det angivna lösenordet. Användare som skapas av åtgärden kringgår kontroller som bara gäller vid registrering, som e-postspärrlistan, domäner med enbart SSO, avstängd registrering och obligatoriska profiluppgifter vid registrering. Ändringar av befintliga användares profil och lösenord sker också innan MFA har slutförts.',
  },
  delete_modal_title: 'Ta bort åtgärd',
  delete_modal_content:
    'Vill du verkligen ta bort åtgärden? Autentiseringsflödet kommer då inte längre att köra skriptet.',
  deleted: 'Åtgärden har tagits bort',
  created: 'Åtgärden har skapats',
  saved: 'Åtgärden har sparats',
};

export default Object.freeze(actions);
