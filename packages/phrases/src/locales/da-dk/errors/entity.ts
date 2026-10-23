/* GetCertus addition (MPL-2.0, see GETCERTUS.md): admin console phrases. */
const entity = {
  invalid_input: 'Ugyldigt input. Værdilisten må ikke være tom.',
  value_too_long: 'Værdien er for lang og overskrider grænsen.',
  create_failed: '{{name}} kunne ikke oprettes.',
  db_constraint_violated: 'En databasebegrænsning er overtrådt.',
  not_exists: '{{name}} findes ikke.',
  not_exists_with_id: '{{name}} med ID `{{id}}` findes ikke.',
  not_found: 'Ressourcen findes ikke.',
  relation_foreign_key_not_found:
    'En eller flere fremmednøgler blev ikke fundet. Kontrollér inputtet, og sørg for, at alle refererede enheder findes.',
  unique_integrity_violation: 'Enheden findes allerede. Kontrollér inputtet, og prøv igen.',
};

export default Object.freeze(entity);
