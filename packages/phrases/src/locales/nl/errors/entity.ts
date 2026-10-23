/* GetCertus addition (MPL-2.0, see GETCERTUS.md): admin console phrases. */
const entity = {
  invalid_input: 'Ongeldige invoer. De waardelijst mag niet leeg zijn.',
  value_too_long: 'De waarde is te lang en overschrijdt de limiet.',
  create_failed: '{{name}} aanmaken is mislukt.',
  db_constraint_violated: 'Databaseconstraint geschonden.',
  not_exists: '{{name}} bestaat niet.',
  not_exists_with_id: '{{name}} met ID `{{id}}` bestaat niet.',
  not_found: 'De resource bestaat niet.',
  relation_foreign_key_not_found:
    'Een of meer foreign keys zijn niet gevonden. Controleer de invoer en zorg dat alle verwijzende entiteiten bestaan.',
  unique_integrity_violation:
    'De entiteit bestaat al. Controleer de invoer en probeer het opnieuw.',
};

export default Object.freeze(entity);
