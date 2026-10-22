/* GetCertus addition (MPL-2.0, see GETCERTUS.md): admin console phrases. */
const tenant_members = {
  members: 'Medlemmar',
  invitations: 'Inbjudningar',
  invite_members: 'Bjud in medlemmar',
  user: 'Användare',
  roles: 'Roller',
  admin: 'Administratör',
  collaborator: 'Medarbetare',
  invitation_status: 'Inbjudningsstatus',
  inviter: 'Inbjuden av',
  expiration_date: 'Utgångsdatum',
  invite_modal: {
    title: 'Bjud in personer till GetCertus Cloud',
    subtitle: 'För att bli medlemmar i en organisation måste de inbjudna acceptera inbjudan.',
    subtitle_oss:
      'Inbjudna medlemmar får full administratörsåtkomst till den här GetCertus-instansen.',
    to: 'Till',
    added_as: 'Läggs till med roller',
    email_input_placeholder: 'johndoe@example.com',
  },
  invitation_statuses: {
    pending: 'Väntar',
    accepted: 'Accepterad',
    expired: 'Utgången',
    revoked: 'Återkallad',
  },
  invitation_empty_placeholder: {
    title: 'Bjud in teammedlemmar',
    description:
      'Inga medlemmar har bjudits in till din tenant ännu.\nÖverväg att lägga till fler medlemmar eller administratörer som kan hjälpa till med integrationen.',
  },
  menu_options: {
    edit: 'Redigera tenantroll',
    delete: 'Ta bort användaren från tenanten',
    resend_invite: 'Skicka inbjudan igen',
    revoke: 'Återkalla inbjudan',
    delete_invitation_record: 'Ta bort den här inbjudan',
  },
  edit_modal: {
    title: 'Ändra roller för {{name}}',
  },
  delete_user_confirm: 'Vill du verkligen ta bort användaren från den här tenanten?',
  assign_admin_confirm:
    'Vill du verkligen göra de valda användarna till administratörer? Administratörsåtkomst ger användarna följande behörigheter.<ul><li>Ändra tenantens faktureringsplan</li><li>Lägga till eller ta bort medarbetare</li><li>Ta bort tenanten</li></ul>',
  revoke_invitation_confirm: 'Vill du verkligen återkalla inbjudan?',
  delete_invitation_confirm: 'Vill du verkligen ta bort den här inbjudan?',
  messages: {
    invitation_sent: 'Inbjudan har skickats.',
    invitation_revoked: 'Inbjudan har återkallats.',
    invitation_resend: 'Inbjudan har skickats igen.',
    invitation_deleted: 'Inbjudan har tagits bort.',
  },
  errors: {
    email_required: 'Den inbjudnas e-postadress krävs.',
    email_exists: 'E-postadressen finns redan.',
    member_exists: 'Användaren är redan medlem i organisationen.',
    pending_invitation_exists:
      'Det finns redan en väntande inbjudan. Ta bort e-postadressen eller återkalla inbjudan.',
    invalid_email: 'E-postadressen är ogiltig. Kontrollera att formatet är rätt.',
    max_member_limit: 'Du har nått maxantalet medlemmar ({{limit}}) för den här tenanten.',
  },
};

export default Object.freeze(tenant_members);
