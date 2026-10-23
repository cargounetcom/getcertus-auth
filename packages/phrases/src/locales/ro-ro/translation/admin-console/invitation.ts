/* GetCertus addition (MPL-2.0, see GETCERTUS.md): admin console phrases. */
const invitation = {
  find_your_tenants: 'Găsește-ți tenanții',
  find_tenants_description:
    'Adresa ta de e-mail poate fi deja înregistrată la mai mulți tenanți. Poți alege să te alături celor existenți sau să creezi unul nou.',
  create_new_tenant: 'Creează un tenant nou',
  email_not_match_title: 'Ești autentificat în prezent ca\n{{email}}',
  email_not_match_description:
    'Autentifică-te cu contul corect pentru a accepta invitația și a deveni membru al organizației.',
  switch_account: 'Autentifică-te cu alt cont',
  invalid_invitation_status: 'Invitație nevalidă. Contactează administratorul și încearcă din nou.',
  invitation_not_found: 'Invitația nu a fost găsită. Contactează administratorul.',
};

export default Object.freeze(invitation);
