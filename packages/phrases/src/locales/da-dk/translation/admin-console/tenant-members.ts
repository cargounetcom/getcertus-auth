/* GetCertus addition (MPL-2.0, see GETCERTUS.md): admin console phrases. */
const tenant_members = {
  members: 'Medlemmer',
  invitations: 'Invitationer',
  invite_members: 'Invitér medlemmer',
  user: 'Bruger',
  roles: 'Roller',
  admin: 'Administrator',
  collaborator: 'Samarbejdspartner',
  invitation_status: 'Invitationsstatus',
  inviter: 'Inviteret af',
  expiration_date: 'Udløbsdato',
  invite_modal: {
    title: 'Invitér personer til GetCertus Cloud',
    subtitle:
      'For at blive medlemmer af en organisation skal de inviterede acceptere invitationen.',
    subtitle_oss: 'Inviterede medlemmer får fuld administratoradgang til denne GetCertus-instans.',
    to: 'Til',
    added_as: 'Tilføjes med roller',
    email_input_placeholder: 'johndoe@example.com',
  },
  invitation_statuses: {
    pending: 'Afventer',
    accepted: 'Accepteret',
    expired: 'Udløbet',
    revoked: 'Tilbagekaldt',
  },
  invitation_empty_placeholder: {
    title: 'Invitér teammedlemmer',
    description:
      'Der er endnu ikke inviteret nogen medlemmer til din tenant.\nOvervej at tilføje flere medlemmer eller administratorer, der kan hjælpe med integrationen.',
  },
  menu_options: {
    edit: 'Redigér tenantrolle',
    delete: 'Fjern bruger fra tenant',
    resend_invite: 'Send invitation igen',
    revoke: 'Tilbagekald invitation',
    delete_invitation_record: 'Slet denne invitation',
  },
  edit_modal: {
    title: 'Skift roller for {{name}}',
  },
  delete_user_confirm: 'Er du sikker på, at du vil fjerne denne bruger fra tenanten?',
  assign_admin_confirm:
    'Er du sikker på, at du vil gøre de valgte brugere til administratorer? Administratoradgang giver brugerne følgende tilladelser.<ul><li>Ændre tenantens faktureringsplan</li><li>Tilføje eller fjerne samarbejdspartnere</li><li>Slette tenanten</li></ul>',
  revoke_invitation_confirm: 'Er du sikker på, at du vil tilbagekalde denne invitation?',
  delete_invitation_confirm: 'Er du sikker på, at du vil slette denne invitation?',
  messages: {
    invitation_sent: 'Invitation sendt.',
    invitation_revoked: 'Invitation tilbagekaldt.',
    invitation_resend: 'Invitation sendt igen.',
    invitation_deleted: 'Invitation slettet.',
  },
  errors: {
    email_required: 'Den inviteredes e-mailadresse er påkrævet.',
    email_exists: 'E-mailadressen findes allerede.',
    member_exists: 'Brugeren er allerede medlem af denne organisation.',
    pending_invitation_exists:
      'Der findes allerede en afventende invitation. Slet den pågældende e-mailadresse, eller tilbagekald invitationen.',
    invalid_email: 'E-mailadressen er ugyldig. Kontrollér, at formatet er korrekt.',
    max_member_limit: 'Du har nået det maksimale antal medlemmer ({{limit}}) for denne tenant.',
  },
};

export default Object.freeze(tenant_members);
