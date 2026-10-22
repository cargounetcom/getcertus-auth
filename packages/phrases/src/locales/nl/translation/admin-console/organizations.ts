/* GetCertus addition (MPL-2.0, see GETCERTUS.md): admin console phrases. */
const organizations = {
  organization: 'Organisatie',
  page_title: 'Organisaties',
  title: 'Organisaties',
  subtitle:
    'Organisaties worden meestal gebruikt in SaaS- of vergelijkbare multi-tenant-apps en vertegenwoordigen je klanten: teams, organisaties of hele bedrijven. Organisaties vormen de basis voor B2B-authenticatie en -autorisatie.',
  organization_template: 'Organisatiesjabloon',
  organization_id: 'Organisatie-ID',
  members: 'Leden',
  machine_to_machine: 'Machine-to-machine-apps',
  branding: 'Branding',
  create_organization: 'Organisatie maken',
  setup_organization: 'Je organisatie instellen',
  organization_list_placeholder_title: 'Organisatie',
  organization_list_placeholder_text:
    'Organisaties worden als best practice vaak gebruikt in SaaS- of vergelijkbare multi-tenant-apps. Hiermee bouw je apps waarin klanten organisaties kunnen maken en beheren, leden kunnen uitnodigen en rollen kunnen toewijzen.',
  organization_name_placeholder: 'Mijn organisatie',
  organization_description_placeholder: 'Een korte beschrijving van de organisatie',
  organization_permission: 'Organisatierecht',
  organization_permission_other: 'Organisatierechten',
  create_permission_placeholder: 'Afsprakengeschiedenis lezen',
  organization_role: 'Organisatierol',
  organization_role_other: 'Organisatierollen',
  organization_role_description:
    'Een organisatierol is een groep rechten die aan gebruikers kan worden toegewezen. De rechten moeten afkomstig zijn uit de vooraf gedefinieerde organisatierechten.',
  role: 'Rol',
  search_placeholder: 'Zoeken op organisatienaam of ID',
  search_role_placeholder: 'Typ om rollen te zoeken en te selecteren',
  empty_placeholder: '🤔 Je hebt nog geen {{entity}} ingesteld.',
  organization_and_member: 'Organisatie en lid',
  organization_and_member_description:
    'Een organisatie is een groep gebruikers en kan teams, zakelijke klanten en partnerbedrijven vertegenwoordigen, waarbij elke gebruiker een "lid" is. Dit kunnen de basisentiteiten zijn voor je multi-tenant-vereisten.',
  guide: {
    title: 'Begin met handleidingen',
    subtitle: 'Geef je organisatie-instellingen een vliegende start met onze handleidingen',
    introduction: {
      title: 'Zo werken organisaties in GetCertus',
      section_1: {
        title: 'Een organisatie is een groep gebruikers (identiteiten)',
      },
      section_2: {
        title: 'Het organisatiesjabloon is ontworpen voor toegangsbeheer in multi-tenant-apps',
        description:
          'In multi-tenant SaaS-applicaties delen meerdere organisaties vaak hetzelfde sjabloon voor toegangsbeheer, met rechten en rollen. In GetCertus noemen we dit het "organisatiesjabloon".',
        permission_description:
          'Een organisatierecht is de autorisatie om een resource te gebruiken binnen de context van een organisatie.',
        role_description_deprecated:
          'Een organisatierol is een groep organisatierechten die aan leden kan worden toegewezen.',
        role_description:
          'Een organisatierol is een groep organisatierechten of API-rechten die aan leden kan worden toegewezen.',
      },
      section_3: {
        title: 'Kan ik API-rechten toewijzen aan organisatierollen?',
        description:
          'Ja, je kunt API-rechten toewijzen aan organisatierollen. GetCertus biedt de flexibiliteit om de rollen van je organisatie effectief te beheren, zodat je zowel organisatierechten als API-rechten in die rollen kunt opnemen.',
      },
      section_4: {
        title: 'Gebruik de illustratie om te zien hoe alles samenhangt',
        description:
          'Een voorbeeld: John en Sarah zitten in verschillende organisaties, met verschillende rollen per organisatie. Beweeg over de verschillende modules en kijk wat er gebeurt.',
      },
    },
    organization_permissions: 'Organisatierechten',
    organization_roles: 'Organisatierollen',
    admin: 'Beheerder',
    member: 'Lid',
    guest: 'Gast',
    role_description:
      'De rol "{{role}}" gebruikt hetzelfde organisatiesjabloon in verschillende organisaties.',
    john: 'John',
    john_tip:
      'John hoort bij twee organisaties, met het e-mailadres "john@email.com" als enige identifier. Hij is beheerder van organisatie A en gast in organisatie B.',
    sarah: 'Sarah',
    sarah_tip:
      'Sarah hoort bij één organisatie, met het e-mailadres "sarah@email.com" als enige identifier. Zij is beheerder van organisatie B.',
  },
};

export default Object.freeze(organizations);
