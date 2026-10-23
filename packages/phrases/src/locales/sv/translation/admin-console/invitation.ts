/* GetCertus addition (MPL-2.0, see GETCERTUS.md): admin console phrases. */
const invitation = {
  find_your_tenants: 'Hitta dina tenants',
  find_tenants_description:
    'Din e-postadress kan redan vara registrerad hos flera tenants. Du kan välja att gå med i befintliga eller skapa en ny.',
  create_new_tenant: 'Skapa en ny tenant',
  email_not_match_title: 'Du är för närvarande inloggad som\n{{email}}',
  email_not_match_description:
    'Logga in med rätt konto för att acceptera inbjudan och bli medlem i organisationen.',
  switch_account: 'Logga in med ett annat konto',
  invalid_invitation_status: 'Ogiltig inbjudan. Kontakta administratören och försök igen.',
  invitation_not_found: 'Inbjudan hittades inte. Kontakta administratören.',
};

export default Object.freeze(invitation);
