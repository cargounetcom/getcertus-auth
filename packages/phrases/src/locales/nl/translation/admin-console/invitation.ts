/* GetCertus addition (MPL-2.0, see GETCERTUS.md): admin console phrases. */
const invitation = {
  find_your_tenants: 'Vind je tenants',
  find_tenants_description:
    'Je e-mailadres is mogelijk al geregistreerd bij meerdere tenants. Je kunt kiezen om lid te worden van bestaande tenants of een nieuwe te maken.',
  create_new_tenant: 'Nieuwe tenant maken',
  email_not_match_title: 'Je bent momenteel aangemeld als\n{{email}}',
  email_not_match_description:
    'Meld je aan met het juiste account om de uitnodiging te accepteren en lid te worden van de organisatie.',
  switch_account: 'Aanmelden met een ander account',
  invalid_invitation_status:
    'Ongeldige uitnodiging. Neem contact op met de beheerder en probeer het opnieuw.',
  invitation_not_found: 'Uitnodiging niet gevonden. Neem contact op met de beheerder.',
};

export default Object.freeze(invitation);
