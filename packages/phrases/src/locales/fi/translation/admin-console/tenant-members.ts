/* GetCertus addition (MPL-2.0, see GETCERTUS.md): admin console phrases. */
const tenant_members = {
  members: 'Jäsenet',
  invitations: 'Kutsut',
  invite_members: 'Kutsu jäseniä',
  user: 'Käyttäjä',
  roles: 'Roolit',
  admin: 'Ylläpitäjä',
  collaborator: 'Yhteistyökumppani',
  invitation_status: 'Kutsun tila',
  inviter: 'Kutsuja',
  expiration_date: 'Vanhenemispäivä',
  invite_modal: {
    title: 'Kutsu ihmisiä GetCertus Cloudiin',
    subtitle: 'Jotta kutsutut liittyvät organisaatioon, heidän on hyväksyttävä kutsu.',
    subtitle_oss:
      'Kutsutut jäsenet saavat täydet ylläpitäjän oikeudet tähän GetCertus-instanssiin.',
    to: 'Vastaanottaja',
    added_as: 'Lisätään rooleilla',
    email_input_placeholder: 'johndoe@example.com',
  },
  invitation_statuses: {
    pending: 'Odottaa',
    accepted: 'Hyväksytty',
    expired: 'Vanhentunut',
    revoked: 'Peruttu',
  },
  invitation_empty_placeholder: {
    title: 'Kutsu tiimin jäseniä',
    description:
      'Tenanttiisi ei ole vielä kutsuttu jäseniä.\nHarkitse lisäjäsenten tai ylläpitäjien lisäämistä integroinnin avuksi.',
  },
  menu_options: {
    edit: 'Muokkaa tenanttiroolia',
    delete: 'Poista käyttäjä tenantista',
    resend_invite: 'Lähetä kutsu uudelleen',
    revoke: 'Peru kutsu',
    delete_invitation_record: 'Poista tämä kutsu',
  },
  edit_modal: {
    title: 'Muuta käyttäjän {{name}} rooleja',
  },
  delete_user_confirm: 'Haluatko varmasti poistaa tämän käyttäjän tenantista?',
  assign_admin_confirm:
    'Haluatko varmasti tehdä valituista käyttäjistä ylläpitäjiä? Ylläpitäjän oikeudet antavat käyttäjille seuraavat oikeudet.<ul><li>Tenantin laskutuspaketin muuttaminen</li><li>Yhteistyökumppanien lisääminen tai poistaminen</li><li>Tenantin poistaminen</li></ul>',
  revoke_invitation_confirm: 'Haluatko varmasti perua tämän kutsun?',
  delete_invitation_confirm: 'Haluatko varmasti poistaa tämän kutsun?',
  messages: {
    invitation_sent: 'Kutsu lähetetty.',
    invitation_revoked: 'Kutsu peruttu.',
    invitation_resend: 'Kutsu lähetetty uudelleen.',
    invitation_deleted: 'Kutsu poistettu.',
  },
  errors: {
    email_required: 'Kutsuttavan sähköpostiosoite vaaditaan.',
    email_exists: 'Sähköpostiosoite on jo olemassa.',
    member_exists: 'Käyttäjä on jo tämän organisaation jäsen.',
    pending_invitation_exists:
      'Odottava kutsu on jo olemassa. Poista kyseinen sähköpostiosoite tai peru kutsu.',
    invalid_email: 'Sähköpostiosoite on virheellinen. Varmista, että muoto on oikea.',
    max_member_limit: 'Olet saavuttanut tämän tenantin jäsenten enimmäismäärän ({{limit}}).',
  },
};

export default Object.freeze(tenant_members);
