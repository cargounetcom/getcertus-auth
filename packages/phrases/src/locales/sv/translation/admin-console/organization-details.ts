/* GetCertus addition (MPL-2.0, see GETCERTUS.md): admin console phrases. */
const organization_details = {
  page_title: 'Organisationsdetaljer',
  delete_confirmation:
    'När organisationen har tagits bort förlorar alla medlemmar sitt medlemskap och sina roller i den. Åtgärden kan inte ångras.',
  organization_id: 'Organisations-ID',
  settings_description:
    'Organisationer representerar de team, företagskunder och partnerföretag som har åtkomst till dina applikationer.',
  name_placeholder: 'Organisationens namn, behöver inte vara unikt.',
  description_placeholder: 'En beskrivning av organisationen.',
  member: 'Medlem',
  member_other: 'Medlemmar',
  add_members_to_organization: 'Lägg till medlemmar i organisationen {{name}}',
  add_members_to_organization_description:
    'Hitta rätt användare genom att söka på namn, e-post, telefon eller användar-ID. Befintliga medlemmar visas inte i sökresultaten.',
  add_with_organization_role: 'Lägg till med organisationsroll(er)',
  user: 'Användare',
  application: 'Applikation',
  application_other: 'Applikationer',
  add_applications_to_organization: 'Lägg till applikationer i organisationen {{name}}',
  add_applications_to_organization_description:
    'Hitta rätt applikationer genom att söka på app-ID, namn eller beskrivning. Befintliga applikationer visas inte i sökresultaten.',
  at_least_one_application: 'Minst en applikation krävs.',
  remove_application_from_organization: 'Ta bort applikationen från organisationen',
  remove_application_from_organization_description:
    'När applikationen har tagits bort förlorar den sin koppling och sina roller i organisationen. Åtgärden kan inte ångras.',
  search_application_placeholder: 'Sök på app-ID, namn eller beskrivning',
  roles: 'Organisationsroller',
  authorize_to_roles: 'Ge {{name}} åtkomst till följande roller:',
  edit_organization_roles: 'Redigera organisationsroller',
  edit_organization_roles_title: 'Redigera organisationsroller för {{name}}',
  remove_user_from_organization: 'Ta bort användaren från organisationen',
  remove_user_from_organization_description:
    'När användaren har tagits bort förlorar hen sitt medlemskap och sina roller i organisationen. Åtgärden kan inte ångras.',
  search_user_placeholder: 'Sök på namn, e-post, telefon eller användar-ID',
  at_least_one_user: 'Minst en användare krävs.',
  organization_roles_tooltip: 'De roller som tilldelats {{type}} i den här organisationen.',
  custom_data: 'Anpassade data',
  custom_data_tip:
    'Anpassade data är ett JSON-objekt där du kan lagra ytterligare data om organisationen.',
  invalid_json_object: 'Ogiltigt JSON-objekt.',
  branding: {
    name: 'varumärke',
    description: 'Anpassa inloggningsupplevelsen på organisationsnivå.',
    organization_level_sie: 'Inloggningsupplevelse på organisationsnivå',
    organization_level_sie_switch:
      'Aktivera inloggningsupplevelsen på organisationsnivå och konfigurera organisationsspecifikt varumärke. Om den är inaktiverad används först inloggningsupplevelsen på applikationsnivå och sedan den övergripande inloggningsupplevelsen.',
    logo: 'Organisationslogotyper',
    logo_tooltip:
      'Du kan skicka med organisations-ID:t för att visa logotypen i inloggningsupplevelsen; en mörk version av logotypen behövs om mörkt läge är aktiverat i inställningarna för den övergripande inloggningsupplevelsen. <a>Läs mer</a>',
  },
  jit: {
    title: 'Just-in-time-provisionering',
    description:
      'Användare kan automatiskt gå med i organisationen och tilldelas roller vid sin första inloggning via vissa autentiseringsmetoder. Du kan ställa in krav för just-in-time-provisionering.',
    email_domain: 'Provisionering via e-postdomän',
    email_domain_description:
      'Nya användare som registrerar sig med verifierad e-postadress, eller via social inloggning med verifierad e-postadress, går automatiskt med i organisationen. <a>Läs mer</a>',
    email_domain_placeholder: 'Ange e-postdomäner för just-in-time-provisionering',
    invalid_domain: 'Ogiltig domän',
    domain_already_added: 'Domänen har redan lagts till',
    sso_enabled_domain_warning:
      'Du har angett en eller flera e-postdomäner som är kopplade till enterprise SSO. Användare med dessa e-postadresser följer det vanliga SSO-flödet och läggs inte till i organisationen om inte provisionering via enterprise SSO är konfigurerad.',
    enterprise_sso: 'Provisionering via enterprise SSO',
    no_enterprise_connector_set:
      'Du har inte konfigurerat någon enterprise SSO-anslutning ännu. Lägg först till anslutningar för att aktivera provisionering via enterprise SSO. <a>Konfigurera</a>',
    add_enterprise_connector: 'Lägg till enterprise-anslutning',
    enterprise_sso_description:
      'Nya eller befintliga användare som loggar in via enterprise SSO för första gången går automatiskt med i organisationen. <a>Läs mer</a>',
    organization_roles: 'Standardroller i organisationen',
    organization_roles_description:
      'Tilldela roller till användare när de går med i organisationen via just-in-time-provisionering.',
  },
  mfa: {
    title: 'Multifaktorautentisering (MFA)',
    tip: 'När MFA krävs nekas användare utan konfigurerad MFA när de försöker byta till en organisationstoken. Inställningen påverkar inte användarautentiseringen.',
    description:
      'Kräv att användare konfigurerar multifaktorautentisering för att komma åt den här organisationen.',
    no_mfa_warning:
      'Inga metoder för multifaktorautentisering är aktiverade för din tenant. Användare kommer inte åt organisationen förrän minst en <a>metod för multifaktorautentisering</a> är aktiverad.',
  },
};

export default Object.freeze(organization_details);
