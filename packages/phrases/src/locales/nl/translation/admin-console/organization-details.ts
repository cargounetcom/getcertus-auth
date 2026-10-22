/* GetCertus addition (MPL-2.0, see GETCERTUS.md): admin console phrases. */
const organization_details = {
  page_title: 'Details organisatie',
  delete_confirmation:
    'Na verwijdering verliezen alle leden hun lidmaatschap en rollen in deze organisatie. Dit kan niet ongedaan worden gemaakt.',
  organization_id: 'Organisatie-ID',
  settings_description:
    'Organisaties vertegenwoordigen de teams, zakelijke klanten en partnerbedrijven die toegang hebben tot je applicaties.',
  name_placeholder: 'De naam van de organisatie; hoeft niet uniek te zijn.',
  description_placeholder: 'Een beschrijving van de organisatie.',
  member: 'Lid',
  member_other: 'Leden',
  add_members_to_organization: 'Leden toevoegen aan organisatie {{name}}',
  add_members_to_organization_description:
    'Zoek de juiste gebruikers op naam, e-mailadres, telefoonnummer of gebruikers-ID. Bestaande leden worden niet in de zoekresultaten getoond.',
  add_with_organization_role: 'Toevoegen met organisatierol(len)',
  user: 'Gebruiker',
  application: 'Applicatie',
  application_other: 'Applicaties',
  add_applications_to_organization: 'Applicaties toevoegen aan organisatie {{name}}',
  add_applications_to_organization_description:
    'Zoek de juiste applicaties op app-ID, naam of beschrijving. Bestaande applicaties worden niet in de zoekresultaten getoond.',
  at_least_one_application: 'Er is minstens één applicatie vereist.',
  remove_application_from_organization: 'Applicatie uit organisatie verwijderen',
  remove_application_from_organization_description:
    'Na verwijdering verliest de applicatie haar koppeling en rollen in deze organisatie. Dit kan niet ongedaan worden gemaakt.',
  search_application_placeholder: 'Zoeken op app-ID, naam of beschrijving',
  roles: 'Organisatierollen',
  authorize_to_roles: '{{name}} toegang geven tot de volgende rollen:',
  edit_organization_roles: 'Organisatierollen bewerken',
  edit_organization_roles_title: 'Organisatierollen van {{name}} bewerken',
  remove_user_from_organization: 'Gebruiker uit organisatie verwijderen',
  remove_user_from_organization_description:
    'Na verwijdering verliest de gebruiker het lidmaatschap en de rollen in deze organisatie. Dit kan niet ongedaan worden gemaakt.',
  search_user_placeholder: 'Zoeken op naam, e-mailadres, telefoonnummer of gebruikers-ID',
  at_least_one_user: 'Er is minstens één gebruiker vereist.',
  organization_roles_tooltip:
    'De rollen die aan de {{type}} binnen deze organisatie zijn toegewezen.',
  custom_data: 'Aangepaste gegevens',
  custom_data_tip:
    'Aangepaste gegevens zijn een JSON-object waarin je extra gegevens over de organisatie kunt opslaan.',
  invalid_json_object: 'Ongeldig JSON-object.',
  branding: {
    name: 'branding',
    description: 'Pas de inlogervaring op organisatieniveau aan.',
    organization_level_sie: 'Inlogervaring op organisatieniveau',
    organization_level_sie_switch:
      'Schakel de inlogervaring op organisatieniveau in en stel organisatiespecifieke branding in. Als dit uit staat, wordt eerst teruggevallen op de inlogervaring op applicatieniveau en daarna op de algemene inlogervaring.',
    logo: "Organisatielogo's",
    logo_tooltip:
      'Je kunt de organisatie-ID doorgeven om dit logo in de inlogervaring te tonen; de donkere versie van het logo is nodig als de donkere modus is ingeschakeld in de instellingen van de algemene inlogervaring. <a>Meer informatie</a>',
  },
  jit: {
    title: 'Just-in-time-provisioning',
    description:
      'Gebruikers kunnen bij hun eerste aanmelding via bepaalde authenticatiemethoden automatisch lid worden van de organisatie en rollen krijgen. Je kunt voorwaarden instellen voor just-in-time-provisioning.',
    email_domain: 'Provisioning op e-maildomein',
    email_domain_description:
      'Nieuwe gebruikers die zich registreren met een geverifieerd e-mailadres, of via social login met een geverifieerd e-mailadres, worden automatisch lid van de organisatie. <a>Meer informatie</a>',
    email_domain_placeholder: 'Voer e-maildomeinen in voor just-in-time-provisioning',
    invalid_domain: 'Ongeldig domein',
    domain_already_added: 'Domein is al toegevoegd',
    sso_enabled_domain_warning:
      'Je hebt een of meer e-maildomeinen ingevoerd die gekoppeld zijn aan enterprise SSO. Gebruikers met deze e-mailadressen volgen de standaard SSO-flow en worden niet aan deze organisatie toegevoegd, tenzij provisioning via enterprise SSO is geconfigureerd.',
    enterprise_sso: 'Provisioning via enterprise SSO',
    no_enterprise_connector_set:
      'Je hebt nog geen enterprise SSO-connector ingesteld. Voeg eerst connectoren toe om provisioning via enterprise SSO in te schakelen. <a>Instellen</a>',
    add_enterprise_connector: 'Enterprise-connector toevoegen',
    enterprise_sso_description:
      'Nieuwe of bestaande gebruikers die zich voor het eerst via enterprise SSO aanmelden, worden automatisch lid van de organisatie. <a>Meer informatie</a>',
    organization_roles: 'Standaard organisatierollen',
    organization_roles_description:
      'Wijs rollen toe aan gebruikers wanneer ze via just-in-time-provisioning lid worden van de organisatie.',
  },
  mfa: {
    title: 'Meervoudige authenticatie (MFA)',
    tip: 'Als MFA verplicht is, worden gebruikers zonder ingestelde MFA geweigerd wanneer ze een organisatietoken proberen in te wisselen. Deze instelling heeft geen invloed op de authenticatie van gebruikers.',
    description:
      'Verplicht gebruikers om meervoudige authenticatie in te stellen voor toegang tot deze organisatie.',
    no_mfa_warning:
      'Er zijn geen methoden voor meervoudige authenticatie ingeschakeld voor je tenant. Gebruikers hebben geen toegang tot deze organisatie totdat minstens één <a>methode voor meervoudige authenticatie</a> is ingeschakeld.',
  },
};

export default Object.freeze(organization_details);
