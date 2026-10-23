/* GetCertus addition (MPL-2.0, see GETCERTUS.md): admin console phrases. */
const entity = {
  invalid_input: 'Ionchur neamhbhailí. Ní féidir leis an liosta luachanna a bheith folamh.',
  value_too_long: 'Tá an luach rófhada agus sáraíonn sé an teorainn.',
  create_failed: 'Theip ar {{name}} a chruthú.',
  db_constraint_violated: 'Sáraíodh srian bunachar sonraí.',
  not_exists: 'Níl {{name}} ann.',
  not_exists_with_id: 'Níl {{name}} leis an aitheantas `{{id}}` ann.',
  not_found: 'Níl an acmhainn ann.',
  relation_foreign_key_not_found:
    'Ní féidir eochair eachtrach amháin nó níos mó a aimsiú. Seiceáil an t-ionchur agus cinntigh go bhfuil gach eintiteas tagartha ann.',
  unique_integrity_violation:
    'Tá an t-eintiteas ann cheana. Seiceáil an t-ionchur agus bain triail eile as.',
};

export default Object.freeze(entity);
