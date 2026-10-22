/* GetCertus addition (MPL-2.0, see GETCERTUS.md): admin console phrases. */
const organizations = {
  organization: 'Organisation',
  page_title: 'Organisationer',
  title: 'Organisationer',
  subtitle:
    'Organisationer bruges typisk i SaaS- eller lignende multi-tenant-apps og repræsenterer dine kunder, som kan være teams, organisationer eller hele virksomheder. Organisationer er grundlaget for B2B-godkendelse og -autorisation.',
  organization_template: 'Organisationsskabelon',
  organization_id: 'Organisations-ID',
  members: 'Medlemmer',
  machine_to_machine: 'Maskine-til-maskine-apps',
  branding: 'Branding',
  create_organization: 'Opret organisation',
  setup_organization: 'Opsæt din organisation',
  organization_list_placeholder_title: 'Organisation',
  organization_list_placeholder_text:
    'Organisationer bruges ofte i SaaS- eller lignende multi-tenant-apps som bedste praksis. Med dem kan du bygge apps, hvor kunder kan oprette og administrere organisationer, invitere medlemmer og tildele roller.',
  organization_name_placeholder: 'Min organisation',
  organization_description_placeholder: 'En kort beskrivelse af organisationen',
  organization_permission: 'Organisationstilladelse',
  organization_permission_other: 'Organisationstilladelser',
  create_permission_placeholder: 'Læs aftalehistorik',
  organization_role: 'Organisationsrolle',
  organization_role_other: 'Organisationsroller',
  organization_role_description:
    'En organisationsrolle er en gruppe tilladelser, der kan tildeles brugere. Tilladelserne skal komme fra de foruddefinerede organisationstilladelser.',
  role: 'Rolle',
  search_placeholder: 'Søg på organisationsnavn eller ID',
  search_role_placeholder: 'Skriv for at søge og vælge roller',
  empty_placeholder: '🤔 Du har ikke opsat nogen {{entity}} endnu.',
  organization_and_member: 'Organisation og medlem',
  organization_and_member_description:
    'En organisation er en gruppe brugere og kan repræsentere teams, erhvervskunder og partnervirksomheder, hvor hver bruger er et "medlem". Det kan være grundlæggende enheder til dine multi-tenant-behov.',
  guide: {
    title: 'Kom i gang med guides',
    subtitle: 'Sæt skub i dine organisationsindstillinger med vores guides',
    introduction: {
      title: 'Sådan fungerer organisationer i GetCertus',
      section_1: {
        title: 'En organisation er en gruppe brugere (identiteter)',
      },
      section_2: {
        title: 'Organisationsskabelonen er designet til adgangskontrol i multi-tenant-apps',
        description:
          'I multi-tenant SaaS-applikationer deler flere organisationer ofte den samme skabelon for adgangskontrol med tilladelser og roller. I GetCertus kalder vi den "organisationsskabelon".',
        permission_description:
          'En organisationstilladelse er retten til at tilgå en ressource i en organisations kontekst.',
        role_description_deprecated:
          'En organisationsrolle er en gruppe organisationstilladelser, der kan tildeles medlemmer.',
        role_description:
          'En organisationsrolle er en gruppe organisationstilladelser eller API-tilladelser, der kan tildeles medlemmer.',
      },
      section_3: {
        title: 'Kan jeg tildele API-tilladelser til organisationsroller?',
        description:
          'Ja, du kan tildele API-tilladelser til organisationsroller. GetCertus giver dig fleksibiliteten til at administrere organisationens roller effektivt, så du kan medtage både organisationstilladelser og API-tilladelser i rollerne.',
      },
      section_4: {
        title: 'Brug illustrationen til at se, hvordan det hele hænger sammen',
        description:
          'Et eksempel: John og Sarah er i forskellige organisationer og har forskellige roller afhængigt af organisationen. Hold musen over de forskellige moduler, og se, hvad der sker.',
      },
    },
    organization_permissions: 'Organisationstilladelser',
    organization_roles: 'Organisationsroller',
    admin: 'Administrator',
    member: 'Medlem',
    guest: 'Gæst',
    role_description:
      'Rollen "{{role}}" deler den samme organisationsskabelon på tværs af organisationer.',
    john: 'John',
    john_tip:
      'John tilhører to organisationer med e-mailadressen "john@email.com" som eneste identifikator. Han er administrator i organisation A og gæst i organisation B.',
    sarah: 'Sarah',
    sarah_tip:
      'Sarah tilhører én organisation med e-mailadressen "sarah@email.com" som eneste identifikator. Hun er administrator i organisation B.',
  },
};

export default Object.freeze(organizations);
