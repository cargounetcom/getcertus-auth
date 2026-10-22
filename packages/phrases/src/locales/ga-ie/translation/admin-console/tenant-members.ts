/* GetCertus addition (MPL-2.0, see GETCERTUS.md): admin console phrases. */
const tenant_members = {
  members: 'Baill',
  invitations: 'Cuirí',
  invite_members: 'Tabhair cuireadh do bhaill',
  user: 'Úsáideoir',
  roles: 'Róil',
  admin: 'Riarthóir',
  collaborator: 'Comhoibrí',
  invitation_status: 'Stádas an chuiridh',
  inviter: 'Cuireadh ó',
  expiration_date: 'Dáta éaga',
  invite_modal: {
    title: 'Tabhair cuireadh do dhaoine chuig GetCertus Cloud',
    subtitle:
      "Chun a bheith ina mbaill d'eagraíocht, caithfidh na daoine a fhaigheann cuireadh glacadh leis.",
    subtitle_oss:
      'Faigheann baill a dtugtar cuireadh dóibh rochtain iomlán riarthóra ar an gcás GetCertus seo.',
    to: 'Chuig',
    added_as: 'Curtha leis mar róil',
    email_input_placeholder: 'johndoe@example.com',
  },
  invitation_statuses: {
    pending: 'Ar feitheamh',
    accepted: 'Glactha',
    expired: 'Imithe in éag',
    revoked: 'Cúlghairthe',
  },
  invitation_empty_placeholder: {
    title: 'Tabhair cuireadh do bhaill foirne',
    description:
      "Níor tugadh cuireadh d'aon bhall chuig do thionónta fós.\nChun cabhrú le do chomhtháthú, smaoinigh ar thuilleadh ball nó riarthóirí a chur leis.",
  },
  menu_options: {
    edit: 'Cuir ról an tionónta in eagar',
    delete: 'Bain an t-úsáideoir den tionónta',
    resend_invite: 'Athsheol an cuireadh',
    revoke: 'Cúlghair an cuireadh',
    delete_invitation_record: 'Scrios taifead an chuiridh seo',
  },
  edit_modal: {
    title: 'Athraigh róil {{name}}',
  },
  delete_user_confirm:
    'An bhfuil tú cinnte gur mian leat an t-úsáideoir seo a bhaint den tionónta?',
  assign_admin_confirm:
    'An bhfuil tú cinnte gur mian leat riarthóirí a dhéanamh de na húsáideoirí roghnaithe? Tabharfaidh rochtain riarthóra na ceadanna seo a leanas dóibh.<ul><li>Plean billeála an tionónta a athrú</li><li>Comhoibrithe a chur leis nó a bhaint</li><li>An tionónta a scriosadh</li></ul>',
  revoke_invitation_confirm: 'An bhfuil tú cinnte gur mian leat an cuireadh seo a chúlghairm?',
  delete_invitation_confirm:
    'An bhfuil tú cinnte gur mian leat taifead an chuiridh seo a scriosadh?',
  messages: {
    invitation_sent: 'Seoladh an cuireadh.',
    invitation_revoked: 'Cúlghaireadh an cuireadh.',
    invitation_resend: 'Athsheoladh an cuireadh.',
    invitation_deleted: 'Scriosadh taifead an chuiridh.',
  },
  errors: {
    email_required: 'Tá ríomhphost an duine a bhfuil cuireadh á thabhairt dó riachtanach.',
    email_exists: 'Tá an seoladh ríomhphoist ann cheana.',
    member_exists: 'Is ball den eagraíocht seo an t-úsáideoir seo cheana.',
    pending_invitation_exists:
      'Tá cuireadh ar feitheamh ann cheana. Scrios an ríomhphost gaolmhar nó cúlghair an cuireadh.',
    invalid_email:
      'Tá an seoladh ríomhphoist neamhbhailí. Cinntigh go bhfuil sé san fhormáid cheart.',
    max_member_limit: 'Shroich tú an líon uasta ball ({{limit}}) don tionónta seo.',
  },
};

export default Object.freeze(tenant_members);
