/* GetCertus addition (MPL-2.0, see GETCERTUS.md): admin console phrases. */
const password = {
  unsupported_encryption_method: 'Ní thacaítear leis an modh criptithe {{name}}.',
  pepper_not_found: 'Níor aimsíodh piobar an phasfhocail. Seiceáil athróga timpeallachta an core.',
  rejected: 'Diúltaíodh an pasfhocal. Seiceáil an gcomhlíonann do phasfhocal na riachtanais.',
  invalid_legacy_password_format: 'Formáid sheanphasfhocail neamhbhailí.',
  unsupported_legacy_hash_algorithm: 'Sean-algartam haise nach dtacaítear leis: {{algorithm}}.',
  expired: 'Tá do phasfhocal imithe in éag. Athshocraigh do phasfhocal chun leanúint ar aghaidh.',
};

export default Object.freeze(password);
