/* GetCertus addition (MPL-2.0, see GETCERTUS.md): admin console phrases. */
const tenants = {
  title: 'Inställningar',
  description: 'Hantera tenantinställningar effektivt och anpassa din domän.',
  oss_description:
    'Ändra dina kontoinställningar och hantera dina personuppgifter här för att hålla kontot säkert.',
  tabs: {
    settings: 'Inställningar',
    members: 'Medlemmar',
    domains: 'Domäner',
    oidc_configs: 'OIDC-konfigurationer',
    subscription: 'Plan och fakturering',
    billing_history: 'Faktureringshistorik',
    license: 'Licens',
  },
  license: {
    purchase_title: 'SJÄLVHOSTADE PLANER',
    purchase_description:
      'Självhostade Pro och Enterprise låser upp betalfunktioner på din egen instans, som att dölja GetCertus-varumärket, använda ditt eget gränssnitt, samarbete i Console och obegränsat antal SAML-applikationer. Köp en plan för att få din licensnyckel.',
    purchase_button: 'Visa självhostade planer',
    install_title: 'INSTALLERA LICENS',
    install_description: 'Klistra in licensnyckeln du fick när du köpte en självhostad plan.',
    install_button: 'Installera licens',
    key_field: 'Licensnyckel',
    key_field_description:
      'Nyckeln verifieras på din instans och lämnar den aldrig. Kontakta GetCertus för en ny nyckel om den du har har gått ut.',
    key_placeholder: 'Klistra in din licensnyckel här',
    installed_toast: 'Licensen har installerats.',
    details_title: 'LICENS',
    details_description:
      'Licensen som är installerad på den här instansen och vad den ger tillgång till.',
    plan_field: 'Plan',
    environment_field: 'Miljö',
    environment_production: 'Produktion',
    environment_non_production: 'Icke-produktion',
    expires_at_field: 'Upphör',
    installed_at_field: 'Installerad',
    last_refreshed_at_field: 'Senast förnyad',
    grace_ends_at_field: 'Respitperioden upphör',
    refresh_expired_description:
      'Licensnyckeln gick ut {{expiresAt}}. Licensierade funktioner är tillgängliga till {{graceEndsAt}} medan GetCertus försöker förnya den.',
    refresh_refused_description:
      'Förnyelsen av licensen nekades eftersom licensen är {{reason}}. Licensierade funktioner är tillgängliga till {{graceEndsAt}}.',
    refusal_reason_canceled: 'uppsagd',
    refusal_reason_unpaid: 'obetald',
    refusal_reason_expired: 'utgången',
    refusal_reason_revoked: 'återkallad',
    refusal_reason_unknown: 'inte tillgänglig',
    grace_expired_description:
      'Licensens respitperiod upphörde {{graceEndsAt}}. Den här installationen har återgått till OSS-standard. Kontakta GetCertus för en ny licensnyckel och installera den igen.',
    get_fresh_key_button: 'Skaffa en ny licensnyckel',
    replace_button: 'Ersätt licens',
  },
  members: {
    card_title: 'Hantera tenants säkrare med GetCertus Cloud',
    card_description:
      'Lägg till administratörer eller medarbetare i din tenant utan att dela ett gemensamt administratörskonto.',
    card_action: 'Utforska GetCertus Cloud',
    self_hosted_card_title: 'Hantera tenants säkrare med självhostade planer',
    self_hosted_card_description:
      'Lägg till administratörer eller medarbetare i din tenant utan att dela ett gemensamt administratörskonto.',
    self_hosted_card_action: 'Utforska självhostade planer',
  },
  settings: {
    title: 'INSTÄLLNINGAR',
    description: 'Ange tenantens namn och se region för datalagring och tenanttyp.',
    tenant_id: 'Tenant-ID',
    tenant_name: 'Tenantnamn',
    tenant_instance: 'Välj din instans',
    tenant_instance_description:
      'Välj var din tenant ska hostas. Välj GetCertus Cloud för delad publik infrastruktur, eller en privat instans för dedikerade resurser.',
    tenant_region: 'Dataregion',
    tenant_region_description:
      'Den fysiska plats där tenantens resurser (användare, appar m.m.) hostas. Det går inte att ändra efter att tenanten skapats.',
    tenant_region_tip: 'Tenantens resurser hostas i {{region}}. <a>Läs mer</a>',
    environment_tag_development: 'Dev',
    environment_tag_production: 'Prod',
    tenant_type: 'Tenanttyp',
    development_description:
      'Endast för testning och ska inte användas i produktion. Ingen prenumeration krävs. Har alla Pro-funktioner men med begränsningar som en inloggningsbanner.',
    production_description:
      'Avsedd för appar som används av slutanvändare och kan kräva en betald prenumeration.',
    tenant_info_saved: 'Tenantinformationen har sparats.',
    tenant_mfa: 'Multifaktorautentisering',
    tenant_mfa_description:
      'Kräv att medlemmar konfigurerar multifaktorautentisering för att komma åt den här tenanten.',
    oss_description: 'Hantera hur medlemmar kommer åt Console på den här instansen.',
    tenant_mfa_confirm_title: 'Kräva MFA för alla medlemmar?',
    tenant_mfa_confirm_description:
      'Dessa medlemmar har inte konfigurerat MFA ännu. De förblir inloggade och ombeds konfigurera det nästa gång de loggar in:',
    tenant_mfa_confirm_self:
      'Du har inte heller konfigurerat MFA. Konfigurera det i dina kontoinställningar före nästa inloggning.',
    tenant_mfa_confirm_button: 'Kräv MFA',
    tenant_mfa_setup_required:
      'Den här tenanten kräver multifaktorautentisering. Konfigurera det nu, annars ombeds du göra det vid nästa inloggning.',
    tenant_mfa_setup_action: 'Konfigurera MFA',
    enterprise_sso: 'Enterprise SSO',
    enterprise_sso_description:
      'Tillgängligt på betalda planer. Kontakta oss för att aktivera enterprise SSO så att alla medlemmar kan logga in i GetCertus Cloud Console med organisationens identitetsleverantör.',
  },
  full_env_tag: {
    development: 'Utveckling',
    production: 'Produktion',
  },
  deletion_card: {
    title: 'TA BORT',
    tenant_deletion: 'Ta bort tenant',
    tenant_deletion_description:
      'Om du tar bort tenanten raderas all tillhörande användardata och konfiguration permanent. Var försiktig.',
    tenant_deletion_button: 'Ta bort tenant',
  },
  leave_tenant_card: {
    title: 'LÄMNA',
    leave_tenant: 'Lämna tenant',
    leave_tenant_description:
      'Alla resurser i tenanten finns kvar, men du har inte längre åtkomst till den här tenanten.',
    last_admin_note: 'För att lämna tenanten måste minst en annan medlem ha administratörsrollen.',
  },
  create_modal: {
    title: 'Skapa tenant',
    subtitle: 'Skapa en ny tenant med isolerade resurser och användare.',
    tenant_id: 'Tenant-ID',
    tenant_usage_purpose: 'Vad vill du använda tenanten till?',
    development_description:
      'Endast för testning och ska inte användas i produktion. Ingen prenumeration krävs.',
    development_description_for_private_regions:
      'Endast för testning och ska inte användas i produktion.',
    development_hint: 'Har alla Pro-funktioner men med begränsningar som en inloggningsbanner.',
    production_description: 'För slutanvändare och kan kräva en betald prenumeration.',
    available_plan: 'Tillgänglig plan:',
    create_button: 'Skapa tenant',
    tenant_name_placeholder: 'Min tenant',
    tenant_created: 'Tenanten har skapats.',
    invitation_failed:
      'Vissa inbjudningar kunde inte skickas. Försök igen senare under Inställningar -> Medlemmar.',
    tenant_type_description: 'Det går inte att ändra efter att tenanten skapats.',
    tenant_id_invalid:
      'Tenant-ID får bara innehålla gemener, siffror och bindestreck och får inte vara längre än {{max}} tecken.',
    tenant_id_placeholder: 'Ditt tenant-ID',
    tenant_id_tip:
      'Anpassa tenant-ID:t. Om fältet lämnas tomt genererar GetCertus ett standard-ID. Tenant-ID:t går inte att ändra efter att tenanten skapats.',
  },
  dev_tenant_migration: {
    title: 'Nu kan du prova våra Pro-funktioner gratis genom att skapa en ny "utvecklingstenant"!',
    affect_title: 'Hur påverkar det dig?',
    hint_1:
      'Vi ersätter de gamla <strong>miljötaggarna</strong> med två nya tenanttyper: <strong>”Utveckling”</strong> och <strong>”Produktion”</strong>.',
    hint_2:
      'För en smidig övergång och oavbruten funktion uppgraderas alla tidigare skapade tenants till tenanttypen <strong>Produktion</strong> tillsammans med din tidigare prenumeration.',
    hint_3: 'Oroa dig inte, alla dina andra inställningar förblir desamma.',
    about_tenant_type: 'Om tenanttyp',
  },
  delete_modal: {
    title: 'Ta bort tenant',
    description_line1:
      'Vill du verkligen ta bort tenanten "<span>{{name}}</span>" med miljötaggen "<span>{{tag}}</span>"? Åtgärden kan inte ångras och all din data och tenantinformation raderas permanent.',
    description_line2:
      'Innan du tar bort tenanten kanske vi kan hjälpa dig. <span><a>Kontakta oss via e-post</a></span>',
    description_line3:
      'Om du vill fortsätta, ange tenantens namn "<span>{{name}}</span>" för att bekräfta.',
    delete_button: 'Ta bort permanent',
    cannot_delete_title: 'Tenanten kan inte tas bort',
    cannot_delete_description:
      'Tyvärr kan du inte ta bort tenanten just nu. Kontrollera att du har gratisplanen och har betalat alla utestående fakturor.',
  },
  leave_tenant_modal: {
    description: 'Vill du verkligen lämna den här tenanten?',
    leave_button: 'Lämna',
  },
  tenant_landing_page: {
    title: 'Du har inte skapat någon tenant ännu',
    description:
      'Skapa en ny tenant för att börja konfigurera ditt projekt med GetCertus. Om du vill logga ut eller radera ditt konto klickar du på avatarknappen uppe till höger.',
    create_tenant_button: 'Skapa tenant',
  },
  status: {
    mau_exceeded: 'MAU överskridet',
    token_exceeded: 'Tokens överskridna',
    suspended: 'Avstängd',
    overdue: 'Förfallen',
  },
  tenant_suspended_page: {
    title: 'Tenanten är avstängd. Kontakta oss för att återställa åtkomsten.',
    description_1:
      'Vi beklagar att behöva meddela att ditt tenantkonto tillfälligt har stängts av på grund av felaktig användning, till exempel överskridna MAU-gränser, förfallna betalningar eller andra otillåtna åtgärder.',
    description_2:
      'Om du behöver ytterligare förklaring, har frågor eller vill återställa full funktion och låsa upp dina tenants, tveka inte att kontakta oss omedelbart.',
  },
  production_tenant_notification: {
    text: 'Du är i en utvecklingstenant för gratis testning. Skapa en produktionstenant för att gå live.',
    action: 'Skapa tenant',
  },
};

export default Object.freeze(tenants);
