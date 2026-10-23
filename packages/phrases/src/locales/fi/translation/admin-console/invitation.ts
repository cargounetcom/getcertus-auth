/* GetCertus addition (MPL-2.0, see GETCERTUS.md): admin console phrases. */
const invitation = {
  find_your_tenants: 'Etsi tenanttisi',
  find_tenants_description:
    'Sähköpostiosoitteesi voi jo olla rekisteröity useaan tenanttiin. Voit liittyä olemassa oleviin tai luoda uuden.',
  create_new_tenant: 'Luo uusi tenant',
  email_not_match_title: 'Olet tällä hetkellä kirjautuneena tilillä\n{{email}}',
  email_not_match_description:
    'Kirjaudu oikealla tilillä hyväksyäksesi kutsun ja liittyäksesi organisaation jäseneksi.',
  switch_account: 'Kirjaudu toisella tilillä',
  invalid_invitation_status: 'Virheellinen kutsu. Ota yhteyttä ylläpitäjään ja yritä uudelleen.',
  invitation_not_found: 'Kutsua ei löytynyt. Ota yhteyttä ylläpitäjään.',
};

export default Object.freeze(invitation);
