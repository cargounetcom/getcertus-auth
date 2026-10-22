/* GetCertus addition (MPL-2.0, see GETCERTUS.md): admin console phrases. */
const tenant_members = {
  members: 'Leden',
  invitations: 'Uitnodigingen',
  invite_members: 'Leden uitnodigen',
  user: 'Gebruiker',
  roles: 'Rollen',
  admin: 'Beheerder',
  collaborator: 'Medewerker',
  invitation_status: 'Status uitnodiging',
  inviter: 'Uitgenodigd door',
  expiration_date: 'Vervaldatum',
  invite_modal: {
    title: 'Mensen uitnodigen voor GetCertus Cloud',
    subtitle: 'Om lid te worden van een organisatie moeten genodigden de uitnodiging accepteren.',
    subtitle_oss:
      'Uitgenodigde leden krijgen volledige beheerderstoegang tot deze GetCertus-instantie.',
    to: 'Aan',
    added_as: 'Toegevoegd met rollen',
    email_input_placeholder: 'johndoe@example.com',
  },
  invitation_statuses: {
    pending: 'In afwachting',
    accepted: 'Geaccepteerd',
    expired: 'Verlopen',
    revoked: 'Ingetrokken',
  },
  invitation_empty_placeholder: {
    title: 'Teamleden uitnodigen',
    description:
      'Er zijn nog geen leden uitgenodigd voor je tenant.\nOverweeg meer leden of beheerders toe te voegen om te helpen bij je integratie.',
  },
  menu_options: {
    edit: 'Tenantrol bewerken',
    delete: 'Gebruiker uit tenant verwijderen',
    resend_invite: 'Uitnodiging opnieuw versturen',
    revoke: 'Uitnodiging intrekken',
    delete_invitation_record: 'Deze uitnodiging verwijderen',
  },
  edit_modal: {
    title: 'Rollen van {{name}} wijzigen',
  },
  delete_user_confirm: 'Weet je zeker dat je deze gebruiker uit deze tenant wilt verwijderen?',
  assign_admin_confirm:
    'Weet je zeker dat je de geselecteerde gebruiker(s) beheerder wilt maken? Met beheerderstoegang krijgen ze de volgende rechten.<ul><li>Het factureringsplan van de tenant wijzigen</li><li>Medewerkers toevoegen of verwijderen</li><li>De tenant verwijderen</li></ul>',
  revoke_invitation_confirm: 'Weet je zeker dat je deze uitnodiging wilt intrekken?',
  delete_invitation_confirm: 'Weet je zeker dat je deze uitnodiging wilt verwijderen?',
  messages: {
    invitation_sent: 'Uitnodiging verstuurd.',
    invitation_revoked: 'Uitnodiging ingetrokken.',
    invitation_resend: 'Uitnodiging opnieuw verstuurd.',
    invitation_deleted: 'Uitnodiging verwijderd.',
  },
  errors: {
    email_required: 'Het e-mailadres van de genodigde is verplicht.',
    email_exists: 'Dit e-mailadres bestaat al.',
    member_exists: 'Deze gebruiker is al lid van deze organisatie.',
    pending_invitation_exists:
      'Er staat al een uitnodiging open. Verwijder het betreffende e-mailadres of trek de uitnodiging in.',
    invalid_email: 'Het e-mailadres is ongeldig. Controleer of het de juiste notatie heeft.',
    max_member_limit: 'Je hebt het maximumaantal leden ({{limit}}) voor deze tenant bereikt.',
  },
};

export default Object.freeze(tenant_members);
