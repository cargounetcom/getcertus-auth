/* GetCertus addition (MPL-2.0, see GETCERTUS.md): admin console phrases. */
const organizations = {
  organization: 'Organisation',
  page_title: 'Organisationer',
  title: 'Organisationer',
  subtitle:
    'Organisationer används oftast i SaaS- eller liknande multi-tenant-appar och representerar dina kunder, som kan vara team, organisationer eller hela företag. Organisationer är grunden för B2B-autentisering och auktorisering.',
  organization_template: 'Organisationsmall',
  organization_id: 'Organisations-ID',
  members: 'Medlemmar',
  machine_to_machine: 'Maskin-till-maskin-appar',
  branding: 'Varumärke',
  create_organization: 'Skapa organisation',
  setup_organization: 'Konfigurera din organisation',
  organization_list_placeholder_title: 'Organisation',
  organization_list_placeholder_text:
    'Organisationer används ofta i SaaS- eller liknande multi-tenant-appar som bästa praxis. Med dem kan du bygga appar där kunder skapar och hanterar organisationer, bjuder in medlemmar och tilldelar roller.',
  organization_name_placeholder: 'Min organisation',
  organization_description_placeholder: 'En kort beskrivning av organisationen',
  organization_permission: 'Organisationsbehörighet',
  organization_permission_other: 'Organisationsbehörigheter',
  create_permission_placeholder: 'Läs bokningshistorik',
  organization_role: 'Organisationsroll',
  organization_role_other: 'Organisationsroller',
  organization_role_description:
    'En organisationsroll är en grupp behörigheter som kan tilldelas användare. Behörigheterna måste komma från de fördefinierade organisationsbehörigheterna.',
  role: 'Roll',
  search_placeholder: 'Sök på organisationsnamn eller ID',
  search_role_placeholder: 'Skriv för att söka och välja roller',
  empty_placeholder: '🤔 Du har inte konfigurerat någon {{entity}} ännu.',
  organization_and_member: 'Organisation och medlem',
  organization_and_member_description:
    'En organisation är en grupp användare och kan representera team, företagskunder och partnerföretag, där varje användare är en "medlem". Det kan vara grundläggande enheter för dina multi-tenant-behov.',
  guide: {
    title: 'Börja med guider',
    subtitle: 'Kickstarta dina organisationsinställningar med våra guider',
    introduction: {
      title: 'Så fungerar organisationer i GetCertus',
      section_1: {
        title: 'En organisation är en grupp användare (identiteter)',
      },
      section_2: {
        title: 'Organisationsmallen är utformad för åtkomstkontroll i multi-tenant-appar',
        description:
          'I multi-tenant SaaS-applikationer delar flera organisationer ofta samma mall för åtkomstkontroll, med behörigheter och roller. I GetCertus kallar vi den "organisationsmall".',
        permission_description:
          'En organisationsbehörighet är rätten att komma åt en resurs inom ramen för en organisation.',
        role_description_deprecated:
          'En organisationsroll är en grupp organisationsbehörigheter som kan tilldelas medlemmar.',
        role_description:
          'En organisationsroll är en grupp organisationsbehörigheter eller API-behörigheter som kan tilldelas medlemmar.',
      },
      section_3: {
        title: 'Kan jag tilldela API-behörigheter till organisationsroller?',
        description:
          'Ja, du kan tilldela API-behörigheter till organisationsroller. GetCertus ger dig flexibiliteten att hantera organisationens roller effektivt, så att du kan ta med både organisationsbehörigheter och API-behörigheter i rollerna.',
      },
      section_4: {
        title: 'Använd illustrationen för att se hur allt hänger ihop',
        description:
          'Ett exempel: John och Sarah finns i olika organisationer och har olika roller beroende på organisation. För muspekaren över de olika modulerna och se vad som händer.',
      },
    },
    organization_permissions: 'Organisationsbehörigheter',
    organization_roles: 'Organisationsroller',
    admin: 'Administratör',
    member: 'Medlem',
    guest: 'Gäst',
    role_description: 'Rollen "{{role}}" delar samma organisationsmall i olika organisationer.',
    john: 'John',
    john_tip:
      'John tillhör två organisationer med e-postadressen "john@email.com" som enda identifierare. Han är administratör i organisation A och gäst i organisation B.',
    sarah: 'Sarah',
    sarah_tip:
      'Sarah tillhör en organisation med e-postadressen "sarah@email.com" som enda identifierare. Hon är administratör i organisation B.',
  },
};

export default Object.freeze(organizations);
