/* GetCertus addition (MPL-2.0, see GETCERTUS.md): admin console phrases. */
const tenant_members = {
  members: 'Membri',
  invitations: 'Invitații',
  invite_members: 'Invită membri',
  user: 'Utilizator',
  roles: 'Roluri',
  admin: 'Administrator',
  collaborator: 'Colaborator',
  invitation_status: 'Starea invitației',
  inviter: 'Invitat de',
  expiration_date: 'Data expirării',
  invite_modal: {
    title: 'Invită persoane în GetCertus Cloud',
    subtitle: 'Pentru a deveni membri ai unei organizații, invitații trebuie să accepte invitația.',
    subtitle_oss:
      'Membrii invitați primesc acces complet de administrator la această instanță GetCertus.',
    to: 'Către',
    added_as: 'Adăugați cu rolurile',
    email_input_placeholder: 'johndoe@example.com',
  },
  invitation_statuses: {
    pending: 'În așteptare',
    accepted: 'Acceptată',
    expired: 'Expirată',
    revoked: 'Revocată',
  },
  invitation_empty_placeholder: {
    title: 'Invită membri ai echipei',
    description:
      'Nu ai invitat încă niciun membru în tenant.\nPentru a te ajuta cu integrarea, ia în considerare adăugarea mai multor membri sau administratori.',
  },
  menu_options: {
    edit: 'Editează rolul în tenant',
    delete: 'Elimină utilizatorul din tenant',
    resend_invite: 'Retrimite invitația',
    revoke: 'Revocă invitația',
    delete_invitation_record: 'Șterge această invitație',
  },
  edit_modal: {
    title: 'Modifică rolurile lui {{name}}',
  },
  delete_user_confirm: 'Sigur vrei să elimini acest utilizator din tenant?',
  assign_admin_confirm:
    'Sigur vrei să faci administratori utilizatorii selectați? Accesul de administrator le oferă următoarele permisiuni.<ul><li>Modificarea planului de facturare al tenantului</li><li>Adăugarea sau eliminarea colaboratorilor</li><li>Ștergerea tenantului</li></ul>',
  revoke_invitation_confirm: 'Sigur vrei să revoci această invitație?',
  delete_invitation_confirm: 'Sigur vrei să ștergi această invitație?',
  messages: {
    invitation_sent: 'Invitația a fost trimisă.',
    invitation_revoked: 'Invitația a fost revocată.',
    invitation_resend: 'Invitația a fost retrimisă.',
    invitation_deleted: 'Invitația a fost ștearsă.',
  },
  errors: {
    email_required: 'Adresa de e-mail a invitatului este obligatorie.',
    email_exists: 'Adresa de e-mail există deja.',
    member_exists: 'Acest utilizator este deja membru al organizației.',
    pending_invitation_exists:
      'Există deja o invitație în așteptare. Șterge adresa de e-mail respectivă sau revocă invitația.',
    invalid_email: 'Adresa de e-mail nu este validă. Verifică formatul.',
    max_member_limit: 'Ai atins numărul maxim de membri ({{limit}}) pentru acest tenant.',
  },
};

export default Object.freeze(tenant_members);
