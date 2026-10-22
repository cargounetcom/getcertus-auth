/* GetCertus addition (MPL-2.0, see GETCERTUS.md): admin console phrases. */
const tenants = {
  title: 'Instellingen',
  description: 'Beheer tenantinstellingen efficiënt en pas je domein aan.',
  oss_description:
    'Wijzig hier je accountinstellingen en beheer je persoonlijke gegevens om je account veilig te houden.',
  tabs: {
    settings: 'Instellingen',
    members: 'Leden',
    domains: 'Domeinen',
    oidc_configs: 'OIDC-configuraties',
    subscription: 'Plan en facturering',
    billing_history: 'Factuurgeschiedenis',
    license: 'Licentie',
  },
  license: {
    purchase_title: 'SELF-HOSTED PLANNEN',
    purchase_description:
      'Self-hosted Pro en Enterprise ontgrendelen betaalde functies op je eigen instantie, zoals de GetCertus-branding verbergen, je eigen UI gebruiken, samenwerken in de Console en onbeperkt SAML-applicaties. Koop een plan om je licentiesleutel te krijgen.',
    purchase_button: 'Self-hosted plannen bekijken',
    install_title: 'LICENTIE INSTALLEREN',
    install_description:
      'Plak de licentiesleutel die je hebt ontvangen na aankoop van een self-hosted plan.',
    install_button: 'Licentie installeren',
    key_field: 'Licentiesleutel',
    key_field_description:
      'De sleutel wordt op je instantie geverifieerd en verlaat die nooit. Neem contact op met GetCertus voor een nieuwe sleutel als je huidige sleutel is verlopen.',
    key_placeholder: 'Plak hier je licentiesleutel',
    installed_toast: 'De licentie is geïnstalleerd.',
    details_title: 'LICENTIE',
    details_description: 'De licentie die op deze instantie is geïnstalleerd en wat die toestaat.',
    plan_field: 'Plan',
    environment_field: 'Omgeving',
    environment_production: 'Productie',
    environment_non_production: 'Niet-productie',
    expires_at_field: 'Verloopt op',
    installed_at_field: 'Geïnstalleerd op',
    last_refreshed_at_field: 'Laatst vernieuwd op',
    grace_ends_at_field: 'Respijtperiode eindigt op',
    refresh_expired_description:
      'De licentiesleutel is verlopen op {{expiresAt}}. Gelicentieerde functies blijven beschikbaar tot {{graceEndsAt}} terwijl GetCertus probeert de licentie te vernieuwen.',
    refresh_refused_description:
      'Het vernieuwen van de licentie is geweigerd omdat de licentie {{reason}} is. Gelicentieerde functies blijven beschikbaar tot {{graceEndsAt}}.',
    refusal_reason_canceled: 'opgezegd',
    refusal_reason_unpaid: 'onbetaald',
    refusal_reason_expired: 'verlopen',
    refusal_reason_revoked: 'ingetrokken',
    refusal_reason_unknown: 'niet beschikbaar',
    grace_expired_description:
      'De respijtperiode van de licentie is geëindigd op {{graceEndsAt}}. Deze installatie is teruggezet naar de OSS-standaardinstellingen. Neem contact op met GetCertus voor een nieuwe licentiesleutel en installeer die opnieuw.',
    get_fresh_key_button: 'Nieuwe licentiesleutel aanvragen',
    replace_button: 'Licentie vervangen',
  },
  members: {
    card_title: 'Beheer tenants veiliger met GetCertus Cloud',
    card_description:
      'Voeg beheerders of medewerkers toe aan je tenant zonder één beheerdersaccount te delen.',
    card_action: 'GetCertus Cloud ontdekken',
    self_hosted_card_title: 'Beheer tenants veiliger met self-hosted plannen',
    self_hosted_card_description:
      'Voeg beheerders of medewerkers toe aan je tenant zonder één beheerdersaccount te delen.',
    self_hosted_card_action: 'Self-hosted plannen ontdekken',
  },
  settings: {
    title: 'INSTELLINGEN',
    description:
      'Stel de tenantnaam in en bekijk de regio waar je gegevens worden gehost en het tenanttype.',
    tenant_id: 'Tenant-ID',
    tenant_name: 'Tenantnaam',
    tenant_instance: 'Kies je instantie',
    tenant_instance_description:
      'Kies waar je tenant wordt gehost. Kies GetCertus Cloud voor gedeelde publieke infrastructuur, of een private instantie voor toegewezen resources.',
    tenant_region: 'Gegevensregio',
    tenant_region_description:
      'De fysieke locatie waar je tenantresources (gebruikers, apps enz.) worden gehost. Dit kan na het aanmaken niet worden gewijzigd.',
    tenant_region_tip: 'Je tenantresources worden gehost in {{region}}. <a>Meer informatie</a>',
    environment_tag_development: 'Dev',
    environment_tag_production: 'Prod',
    tenant_type: 'Tenanttype',
    development_description:
      'Alleen voor testen en niet bedoeld voor productie. Er is geen abonnement nodig. Bevat alle Pro-functies, maar met beperkingen zoals een inlogbanner.',
    production_description:
      'Bedoeld voor apps die door eindgebruikers worden gebruikt; hiervoor kan een betaald abonnement nodig zijn.',
    tenant_info_saved: 'De tenantgegevens zijn opgeslagen.',
    tenant_mfa: 'Meervoudige authenticatie',
    tenant_mfa_description:
      'Verplicht leden om meervoudige authenticatie in te stellen voor toegang tot deze tenant.',
    oss_description: 'Beheer hoe leden toegang krijgen tot de Console op deze instantie.',
    tenant_mfa_confirm_title: 'MFA verplichten voor alle leden?',
    tenant_mfa_confirm_description:
      'Deze leden hebben MFA nog niet ingesteld. Ze blijven ingelogd en worden bij hun volgende aanmelding gevraagd het in te stellen:',
    tenant_mfa_confirm_self:
      'Jij hebt MFA ook nog niet ingesteld. Stel het in via je accountinstellingen vóór je volgende aanmelding.',
    tenant_mfa_confirm_button: 'MFA verplichten',
    tenant_mfa_setup_required:
      'Deze tenant vereist meervoudige authenticatie. Stel het nu in, anders wordt het je gevraagd bij je volgende aanmelding.',
    tenant_mfa_setup_action: 'MFA instellen',
    enterprise_sso: 'Enterprise SSO',
    enterprise_sso_description:
      'Beschikbaar in betaalde plannen. Neem contact met ons op om enterprise SSO in te schakelen, zodat alle leden zich bij de GetCertus Cloud Console kunnen aanmelden via de identiteitsprovider van je organisatie.',
  },
  full_env_tag: {
    development: 'Ontwikkeling',
    production: 'Productie',
  },
  deletion_card: {
    title: 'VERWIJDEREN',
    tenant_deletion: 'Tenant verwijderen',
    tenant_deletion_description:
      'Als je de tenant verwijdert, worden alle bijbehorende gebruikersgegevens en configuratie definitief verwijderd. Ga voorzichtig te werk.',
    tenant_deletion_button: 'Tenant verwijderen',
  },
  leave_tenant_card: {
    title: 'VERLATEN',
    leave_tenant: 'Tenant verlaten',
    leave_tenant_description:
      'Alle resources in de tenant blijven bestaan, maar je hebt geen toegang meer tot deze tenant.',
    last_admin_note:
      'Zorg dat minstens één ander lid de beheerdersrol heeft voordat je deze tenant verlaat.',
  },
  create_modal: {
    title: 'Tenant maken',
    subtitle: 'Maak een nieuwe tenant met geïsoleerde resources en gebruikers.',
    tenant_id: 'Tenant-ID',
    tenant_usage_purpose: 'Waarvoor wil je deze tenant gebruiken?',
    development_description:
      'Alleen voor testen en niet bedoeld voor productie. Er is geen abonnement nodig.',
    development_description_for_private_regions:
      'Alleen voor testen en niet bedoeld voor productie.',
    development_hint: 'Bevat alle Pro-functies, maar met beperkingen zoals een inlogbanner.',
    production_description:
      'Voor gebruik door eindgebruikers; hiervoor kan een betaald abonnement nodig zijn.',
    available_plan: 'Beschikbaar plan:',
    create_button: 'Tenant maken',
    tenant_name_placeholder: 'Mijn tenant',
    tenant_created: 'De tenant is aangemaakt.',
    invitation_failed:
      'Sommige uitnodigingen konden niet worden verstuurd. Probeer het later opnieuw via Instellingen -> Leden.',
    tenant_type_description: 'Dit kan na het aanmaken niet worden gewijzigd.',
    tenant_id_invalid:
      'Een tenant-ID mag alleen kleine letters, cijfers en koppeltekens bevatten en mag niet langer zijn dan {{max}} tekens.',
    tenant_id_placeholder: 'Je tenant-ID',
    tenant_id_tip:
      'Pas de tenant-ID aan. Laat je het veld leeg, dan genereert GetCertus een standaard-ID. De tenant-ID kan na het aanmaken niet worden gewijzigd.',
  },
  dev_tenant_migration: {
    title:
      'Je kunt nu onze Pro-functies gratis uitproberen door een nieuwe "ontwikkeltenant" te maken!',
    affect_title: 'Wat betekent dit voor jou?',
    hint_1:
      'We vervangen de oude <strong>omgevingstags</strong> door twee nieuwe tenanttypes: <strong>“Ontwikkeling”</strong> en <strong>“Productie”</strong>.',
    hint_2:
      'Om een soepele overgang en ononderbroken werking te garanderen, worden alle eerder aangemaakte tenants omgezet naar het tenanttype <strong>Productie</strong>, samen met je bestaande abonnement.',
    hint_3: 'Geen zorgen, al je andere instellingen blijven hetzelfde.',
    about_tenant_type: 'Over het tenanttype',
  },
  delete_modal: {
    title: 'Tenant verwijderen',
    description_line1:
      'Weet je zeker dat je je tenant "<span>{{name}}</span>" met omgevingstag "<span>{{tag}}</span>" wilt verwijderen? Dit kan niet ongedaan worden gemaakt en al je gegevens en tenantinformatie worden definitief verwijderd.',
    description_line2:
      'Misschien kunnen we je helpen voordat je de tenant verwijdert. <span><a>Neem contact op per e-mail</a></span>',
    description_line3:
      'Wil je doorgaan? Voer dan de tenantnaam "<span>{{name}}</span>" in om te bevestigen.',
    delete_button: 'Definitief verwijderen',
    cannot_delete_title: 'Deze tenant kan niet worden verwijderd',
    cannot_delete_description:
      'Je kunt deze tenant nu helaas niet verwijderen. Zorg dat je het gratis plan hebt en alle openstaande facturen hebt betaald.',
  },
  leave_tenant_modal: {
    description: 'Weet je zeker dat je deze tenant wilt verlaten?',
    leave_button: 'Verlaten',
  },
  tenant_landing_page: {
    title: 'Je hebt nog geen tenant aangemaakt',
    description:
      'Maak een nieuwe tenant om je project met GetCertus te configureren. Wil je uitloggen of je account verwijderen, klik dan op de avatarknop rechtsboven.',
    create_tenant_button: 'Tenant maken',
  },
  status: {
    mau_exceeded: 'MAU overschreden',
    token_exceeded: 'Tokens overschreden',
    suspended: 'Opgeschort',
    overdue: 'Achterstallig',
  },
  tenant_suspended_page: {
    title: 'Tenant opgeschort. Neem contact met ons op om de toegang te herstellen.',
    description_1:
      'Het spijt ons je te moeten melden dat je tenantaccount tijdelijk is opgeschort wegens oneigenlijk gebruik, zoals het overschrijden van MAU-limieten, achterstallige betalingen of andere ongeautoriseerde handelingen.',
    description_2:
      'Heb je meer uitleg nodig, heb je vragen, of wil je de volledige functionaliteit herstellen en je tenants deblokkeren? Neem dan direct contact met ons op.',
  },
  production_tenant_notification: {
    text: 'Je zit in een ontwikkeltenant om gratis te testen. Maak een productietenant om live te gaan.',
    action: 'Tenant maken',
  },
};

export default Object.freeze(tenants);
