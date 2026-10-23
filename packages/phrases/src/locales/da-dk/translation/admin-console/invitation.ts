/* GetCertus addition (MPL-2.0, see GETCERTUS.md): admin console phrases. */
const invitation = {
  find_your_tenants: 'Find dine tenants',
  find_tenants_description:
    'Din e-mailadresse er muligvis allerede registreret hos flere tenants. Du kan vælge at blive medlem af eksisterende eller oprette en ny.',
  create_new_tenant: 'Opret en ny tenant',
  email_not_match_title: 'Du er i øjeblikket logget ind som\n{{email}}',
  email_not_match_description:
    'Log ind med den rigtige konto for at acceptere invitationen og blive medlem af organisationen.',
  switch_account: 'Log ind med en anden konto',
  invalid_invitation_status: 'Ugyldig invitation. Kontakt administratoren, og prøv igen.',
  invitation_not_found: 'Invitationen blev ikke fundet. Kontakt administratoren.',
};

export default Object.freeze(invitation);
