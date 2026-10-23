/* GetCertus addition (MPL-2.0, see GETCERTUS.md): admin console phrases. */
const entity = {
  invalid_input: 'Ogiltig indata. Värdelistan får inte vara tom.',
  value_too_long: 'Värdet är för långt och överskrider gränsen.',
  create_failed: 'Det gick inte att skapa {{name}}.',
  db_constraint_violated: 'Ett databasvillkor har överträtts.',
  not_exists: '{{name}} finns inte.',
  not_exists_with_id: '{{name}} med ID `{{id}}` finns inte.',
  not_found: 'Resursen finns inte.',
  relation_foreign_key_not_found:
    'En eller flera främmande nycklar hittades inte. Kontrollera indata och att alla refererade entiteter finns.',
  unique_integrity_violation: 'Entiteten finns redan. Kontrollera indata och försök igen.',
};

export default Object.freeze(entity);
