/* GetCertus addition (MPL-2.0, see GETCERTUS.md): sign-in experience phrases. */
const mfa = {
  totp: 'Cód aonúsáide ó aip fíordheimhnithe',
  webauthn: 'Eochair rochtana',
  backup_code: 'Cód cúltaca',
  email_verification_code: 'Cód fíoraithe ríomhphoist',
  phone_verification_code: 'Cód fíoraithe SMS',
  link_totp_description: 'M.sh. Google Authenticator',
  link_webauthn_description: 'Nasc do ghléas nó eochair USB',
  link_backup_code_description: 'Gin cód cúltaca',
  link_email_verification_code_description: 'Nasc do sheoladh ríomhphoist',
  link_email_2fa_description: 'Nasc do sheoladh ríomhphoist le haghaidh fíoraithe dhá chéim',
  link_phone_verification_code_description: 'Nasc d’uimhir ghutháin',
  link_phone_2fa_description: 'Nasc d’uimhir ghutháin le haghaidh fíoraithe dhá chéim',
  verify_totp_description: 'Cuir isteach an cód aonúsáide ón aip',
  verify_webauthn_description: 'Fíoraigh do ghléas nó d’eochair USB',
  verify_backup_code_description: 'Greamaigh an cód cúltaca a shábháil tú',
  verify_email_verification_code_description: 'Cuir isteach an cód a seoladh chuig do ríomhphost',
  verify_phone_verification_code_description: 'Cuir isteach an cód a seoladh chuig d’fhón',
  send_to_email: 'Seol chuig {{identifier}}',
  send_to_phone: 'Seol chuig {{identifier}}',
  onboarding: 'Cuir fíorú dhá chéim ar siúl',
  onboarding_description:
    'Cosain do chuntas le fíorú dhá chéim. Roghnaigh modh amháin nó níos mó: eochair rochtana, aip fíordheimhnithe (cód aonúsáide), cód fíoraithe SMS nó cóid chúltaca.',
  enable_mfa: 'Cumasaigh fíorú dhá chéim',
  add_mfa_factors: 'Cuir fíorú dhá chéim leis',
  add_mfa_description:
    'Tá fíorú dhá chéim cumasaithe. Roghnaigh do dhara modh fíoraithe chun síniú isteach go slán.',
  add_another_mfa_factor: 'Cuir fíorú dhá chéim eile leis',
  add_another_mfa_description:
    'Roghnaigh bealach eile chun d’aitheantas a fhíorú agus tú ag síniú isteach.',
  verify_mfa_factors: 'Fíorú dhá chéim',
  verify_mfa_description:
    'Tá fíorú dhá chéim cumasaithe don chuntas seo. Roghnaigh an dara bealach chun d’aitheantas a fhíorú.',
  add_authenticator_app: 'Cuir aip fíordheimhnithe leis',
  replace_authenticator_app: 'Athchuir an aip fíordheimhnithe',
  step: 'Céim {{step, number}}: {{content}}',
  scan_qr_code: 'Scan an cód QR seo',
  scan_qr_code_description:
    'Scan an cód QR seo le d’aip fíordheimhnithe, mar shampla Google Authenticator, Duo Mobile nó Authy.',
  qr_code_not_available: 'Ní féidir leat an cód QR a scanadh?',
  copy_and_paste_key: 'Cóipeáil agus greamaigh an eochair',
  copy_and_paste_key_description:
    'Cóipeáil an eochair seo agus greamaigh í i d’aip fíordheimhnithe, mar shampla Google Authenticator, Duo Mobile nó Authy.',
  want_to_scan_qr_code: 'Ar mhaith leat an cód QR a scanadh?',
  enter_one_time_code: 'Cuir isteach an cód aonúsáide',
  enter_one_time_code_link_description:
    'Cuir isteach an cód fíoraithe 6 dhigit a ghin an aip fíordheimhnithe.',
  enter_one_time_code_description:
    'Tá fíorú dhá chéim cumasaithe don chuntas seo. Cuir isteach an cód aonúsáide atá ar taispeáint san aip fíordheimhnithe nasctha.',
  enter_email_verification_code: 'Cuir isteach an cód fíoraithe ríomhphoist',
  enter_email_verification_code_description:
    'Tá fíorú dhá chéim cumasaithe don chuntas seo. Cuir isteach an cód fíoraithe a seoladh chuig {{identifier}}.',
  enter_phone_verification_code: 'Cuir isteach an cód fíoraithe SMS',
  enter_phone_verification_code_description:
    'Tá fíorú dhá chéim cumasaithe don chuntas seo. Cuir isteach an cód fíoraithe SMS a seoladh chuig {{identifier}}.',
  link_another_mfa_factor: 'Athraigh go modh eile',
  save_backup_code: 'Sábháil do chóid chúltaca',
  save_backup_code_description:
    'Mura n-éiríonn le fíorú dhá chéim ar bhealaí eile, is féidir leat ceann de na cóid chúltaca seo a úsáid chun do chuntas a rochtain. Ní féidir gach cód a úsáid ach uair amháin.',
  backup_code_hint: 'Cóipeáil iad agus coinnigh in áit shábháilte iad.',
  new_backup_codes_generated:
    'Tá cóid chúltaca nua in ionad do sheanchód. Coinnigh in áit shábháilte iad a luaithe is féidir.',
  enter_a_backup_code: 'Cuir isteach cód cúltaca',
  enter_backup_code_description:
    'Cuir isteach an cód cúltaca a shábháil tú nuair a cumasaíodh fíorú dhá chéim.',
  create_a_passkey: 'Cruthaigh eochair rochtana',
  create_passkey_description:
    'Cláraigh d’eochair rochtana le bithmhéadracht an ghléis, eochracha slándála (m.sh. YubiKey) nó modhanna eile atá ar fáil.',
  try_another_verification_method: 'Bain triail as modh fíoraithe eile',
  verify_via_passkey: 'Fíoraigh le heochair rochtana',
  verify_via_passkey_description:
    'Fíoraigh le heochair rochtana trí phasfhocal nó bithmhéadracht do ghléis, trí chód QR a scanadh, nó le heochair slándála USB ar nós YubiKey.',
  trust_this_device_title: 'Iontaobhaigh an gléas seo',
  trust_this_device_description:
    'Is féidir leat fíorú MFA a scipeáil ar an ngléas seo agus tú ag síniú isteach amach anseo.',
  trust_this_device_one: 'Iontaobhaigh an gléas seo ar feadh {{count}} lá',
  trust_this_device_two: 'Iontaobhaigh an gléas seo ar feadh {{count}} lá',
  trust_this_device_few: 'Iontaobhaigh an gléas seo ar feadh {{count}} lá',
  trust_this_device_many: 'Iontaobhaigh an gléas seo ar feadh {{count}} lá',
  trust_this_device_other: 'Iontaobhaigh an gléas seo ar feadh {{count}} lá',
  secret_key_copied: 'Cóipeáladh an eochair rúnda.',
  backup_code_copied: 'Cóipeáladh an cód cúltaca.',
  webauthn_not_ready: 'Níl WebAuthn réidh fós. Bain triail eile as ar ball.',
  webauthn_not_supported: 'Ní thacaítear le WebAuthn sa bhrabhsálaí seo.',
  webauthn_failed_to_create: 'Theip ar an gcruthú. Bain triail eile as.',
  webauthn_failed_to_verify: 'Theip ar an bhfíorú. Bain triail eile as.',
};

export default Object.freeze(mfa);
