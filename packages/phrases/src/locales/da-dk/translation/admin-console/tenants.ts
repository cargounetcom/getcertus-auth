/* GetCertus addition (MPL-2.0, see GETCERTUS.md): admin console phrases. */
const tenants = {
  title: 'Indstillinger',
  description: 'Administrér tenantindstillinger effektivt, og tilpas dit domæne.',
  oss_description:
    'Ændr dine kontoindstillinger, og administrér dine personlige oplysninger her for at holde kontoen sikker.',
  tabs: {
    settings: 'Indstillinger',
    members: 'Medlemmer',
    domains: 'Domæner',
    oidc_configs: 'OIDC-konfigurationer',
    subscription: 'Plan og fakturering',
    billing_history: 'Faktureringshistorik',
    license: 'Licens',
  },
  license: {
    purchase_title: 'SELVHOSTEDE PLANER',
    purchase_description:
      'Selvhostet Pro og Enterprise låser op for betalte funktioner på din egen instans, f.eks. at skjule GetCertus-brandingen, bruge din egen brugerflade, samarbejde i Console og ubegrænsede SAML-applikationer. Køb en plan for at få din licensnøgle.',
    purchase_button: 'Se selvhostede planer',
    install_title: 'INSTALLÉR LICENS',
    install_description: 'Indsæt den licensnøgle, du fik ved køb af en selvhostet plan.',
    install_button: 'Installér licens',
    key_field: 'Licensnøgle',
    key_field_description:
      'Nøglen verificeres på din instans og forlader den aldrig. Kontakt GetCertus for en ny nøgle, hvis din nuværende er udløbet.',
    key_placeholder: 'Indsæt din licensnøgle her',
    installed_toast: 'Licensen er installeret.',
    details_title: 'LICENS',
    details_description:
      'Licensen, der er installeret på denne instans, og hvad den giver adgang til.',
    plan_field: 'Plan',
    environment_field: 'Miljø',
    environment_production: 'Produktion',
    environment_non_production: 'Ikke-produktion',
    expires_at_field: 'Udløber',
    installed_at_field: 'Installeret',
    last_refreshed_at_field: 'Senest fornyet',
    grace_ends_at_field: 'Henstandsperioden slutter',
    refresh_expired_description:
      'Licensnøglen udløb {{expiresAt}}. Licenserede funktioner er fortsat tilgængelige indtil {{graceEndsAt}}, mens GetCertus forsøger at forny den.',
    refresh_refused_description:
      'Fornyelsen af licensen blev afvist, fordi licensen er {{reason}}. Licenserede funktioner er fortsat tilgængelige indtil {{graceEndsAt}}.',
    refusal_reason_canceled: 'opsagt',
    refusal_reason_unpaid: 'ubetalt',
    refusal_reason_expired: 'udløbet',
    refusal_reason_revoked: 'tilbagekaldt',
    refusal_reason_unknown: 'ikke tilgængelig',
    grace_expired_description:
      'Licensens henstandsperiode sluttede {{graceEndsAt}}. Denne installation er vendt tilbage til OSS-standardindstillingerne. Kontakt GetCertus for en ny licensnøgle, og installér den igen.',
    get_fresh_key_button: 'Få en ny licensnøgle',
    replace_button: 'Erstat licens',
  },
  members: {
    card_title: 'Administrér tenants mere sikkert med GetCertus Cloud',
    card_description:
      'Tilføj administratorer eller samarbejdspartnere til din tenant uden at dele én fælles administratorkonto.',
    card_action: 'Udforsk GetCertus Cloud',
    self_hosted_card_title: 'Administrér tenants mere sikkert med selvhostede planer',
    self_hosted_card_description:
      'Tilføj administratorer eller samarbejdspartnere til din tenant uden at dele én fælles administratorkonto.',
    self_hosted_card_action: 'Udforsk selvhostede planer',
  },
  settings: {
    title: 'INDSTILLINGER',
    description: 'Angiv tenantens navn, og se regionen for datahosting og tenanttypen.',
    tenant_id: 'Tenant-ID',
    tenant_name: 'Tenantnavn',
    tenant_instance: 'Vælg din instans',
    tenant_instance_description:
      'Vælg, hvor din tenant skal hostes. Vælg GetCertus Cloud for delt offentlig infrastruktur eller en privat instans for dedikerede ressourcer.',
    tenant_region: 'Dataregion',
    tenant_region_description:
      'Den fysiske placering, hvor tenantens ressourcer (brugere, apps osv.) hostes. Kan ikke ændres efter oprettelsen.',
    tenant_region_tip: 'Tenantens ressourcer hostes i {{region}}. <a>Læs mere</a>',
    environment_tag_development: 'Dev',
    environment_tag_production: 'Prod',
    tenant_type: 'Tenanttype',
    development_description:
      'Kun til test og bør ikke bruges i produktion. Der kræves intet abonnement. Har alle Pro-funktioner, men med begrænsninger som et login-banner.',
    production_description:
      'Beregnet til apps, der bruges af slutbrugere, og kan kræve et betalt abonnement.',
    tenant_info_saved: 'Tenantoplysningerne er gemt.',
    tenant_mfa: 'Multifaktorgodkendelse',
    tenant_mfa_description:
      'Kræv, at medlemmer opsætter multifaktorgodkendelse for at få adgang til denne tenant.',
    oss_description: 'Administrér, hvordan medlemmer får adgang til Console på denne instans.',
    tenant_mfa_confirm_title: 'Kræv MFA for alle medlemmer?',
    tenant_mfa_confirm_description:
      'Disse medlemmer har endnu ikke opsat MFA. De forbliver logget ind og bliver bedt om at opsætte det, næste gang de logger ind:',
    tenant_mfa_confirm_self:
      'Du har heller ikke opsat MFA. Opsæt det i dine kontoindstillinger før dit næste login.',
    tenant_mfa_confirm_button: 'Kræv MFA',
    tenant_mfa_setup_required:
      'Denne tenant kræver multifaktorgodkendelse. Opsæt det nu, ellers bliver du bedt om det ved dit næste login.',
    tenant_mfa_setup_action: 'Opsæt MFA',
    enterprise_sso: 'Enterprise SSO',
    enterprise_sso_description:
      'Tilgængeligt på betalte planer. Kontakt os for at aktivere enterprise SSO, så alle medlemmer kan logge ind i GetCertus Cloud Console med organisationens identitetsudbyder.',
  },
  full_env_tag: {
    development: 'Udvikling',
    production: 'Produktion',
  },
  deletion_card: {
    title: 'SLET',
    tenant_deletion: 'Slet tenant',
    tenant_deletion_description:
      'Sletning af tenanten fjerner permanent alle tilknyttede brugerdata og al konfiguration. Vær forsigtig.',
    tenant_deletion_button: 'Slet tenant',
  },
  leave_tenant_card: {
    title: 'FORLAD',
    leave_tenant: 'Forlad tenant',
    leave_tenant_description:
      'Alle ressourcer i tenanten bevares, men du har ikke længere adgang til denne tenant.',
    last_admin_note:
      'For at forlade denne tenant skal mindst ét andet medlem have administratorrollen.',
  },
  create_modal: {
    title: 'Opret tenant',
    subtitle: 'Opret en ny tenant med isolerede ressourcer og brugere.',
    tenant_id: 'Tenant-ID',
    tenant_usage_purpose: 'Hvad vil du bruge denne tenant til?',
    development_description:
      'Kun til test og bør ikke bruges i produktion. Der kræves intet abonnement.',
    development_description_for_private_regions: 'Kun til test og bør ikke bruges i produktion.',
    development_hint: 'Har alle Pro-funktioner, men med begrænsninger som et login-banner.',
    production_description: 'Til brug for slutbrugere og kan kræve et betalt abonnement.',
    available_plan: 'Tilgængelig plan:',
    create_button: 'Opret tenant',
    tenant_name_placeholder: 'Min tenant',
    tenant_created: 'Tenanten er oprettet.',
    invitation_failed:
      'Nogle invitationer kunne ikke sendes. Prøv igen senere under Indstillinger -> Medlemmer.',
    tenant_type_description: 'Kan ikke ændres efter oprettelsen.',
    tenant_id_invalid:
      'Tenant-ID må kun indeholde små bogstaver, tal og bindestreger og må højst være {{max}} tegn.',
    tenant_id_placeholder: 'Dit tenant-ID',
    tenant_id_tip:
      "Tilpas tenant-ID'et. Hvis feltet er tomt, genererer GetCertus et standard-ID. Tenant-ID'et kan ikke ændres efter oprettelsen.",
  },
  dev_tenant_migration: {
    title: 'Nu kan du prøve vores Pro-funktioner gratis ved at oprette en ny "udviklingstenant"!',
    affect_title: 'Hvad betyder det for dig?',
    hint_1:
      'Vi erstatter de gamle <strong>miljøtags</strong> med to nye tenanttyper: <strong>”Udvikling”</strong> og <strong>”Produktion”</strong>.',
    hint_2:
      'For at sikre en glidende overgang og uafbrudt funktion opgraderes alle tidligere oprettede tenants til tenanttypen <strong>Produktion</strong> sammen med dit tidligere abonnement.',
    hint_3: 'Bare rolig, alle dine andre indstillinger forbliver de samme.',
    about_tenant_type: 'Om tenanttype',
  },
  delete_modal: {
    title: 'Slet tenant',
    description_line1:
      'Er du sikker på, at du vil slette din tenant "<span>{{name}}</span>" med miljøtagget "<span>{{tag}}</span>"? Handlingen kan ikke fortrydes, og alle dine data og tenantoplysninger slettes permanent.',
    description_line2:
      'Før du sletter tenanten, kan vi måske hjælpe dig. <span><a>Kontakt os via e-mail</a></span>',
    description_line3:
      'Hvis du vil fortsætte, så indtast tenantens navn "<span>{{name}}</span>" for at bekræfte.',
    delete_button: 'Slet permanent',
    cannot_delete_title: 'Denne tenant kan ikke slettes',
    cannot_delete_description:
      'Du kan desværre ikke slette denne tenant lige nu. Sørg for, at du er på gratisplanen og har betalt alle udestående fakturaer.',
  },
  leave_tenant_modal: {
    description: 'Er du sikker på, at du vil forlade denne tenant?',
    leave_button: 'Forlad',
  },
  tenant_landing_page: {
    title: 'Du har ikke oprettet en tenant endnu',
    description:
      'Opret en ny tenant for at begynde at konfigurere dit projekt med GetCertus. Hvis du vil logge ud eller slette din konto, så klik på avatarknappen øverst til højre.',
    create_tenant_button: 'Opret tenant',
  },
  status: {
    mau_exceeded: 'MAU overskredet',
    token_exceeded: 'Tokens overskredet',
    suspended: 'Suspenderet',
    overdue: 'Forfalden',
  },
  tenant_suspended_page: {
    title: 'Tenanten er suspenderet. Kontakt os for at genoprette adgangen.',
    description_1:
      'Vi beklager at måtte meddele, at din tenantkonto midlertidigt er suspenderet på grund af ukorrekt brug, f.eks. overskredne MAU-grænser, forfaldne betalinger eller andre uautoriserede handlinger.',
    description_2:
      'Hvis du har brug for yderligere forklaring, har spørgsmål eller vil genoprette fuld funktion og ophæve blokeringen af dine tenants, så kontakt os endelig med det samme.',
  },
  production_tenant_notification: {
    text: 'Du er i en udviklingstenant til gratis test. Opret en produktionstenant for at gå live.',
    action: 'Opret tenant',
  },
};

export default Object.freeze(tenants);
