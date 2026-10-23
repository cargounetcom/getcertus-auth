/* GetCertus addition (MPL-2.0, see GETCERTUS.md): admin console phrases. */
const entity = {
  invalid_input: 'Date de intrare nevalide. Lista de valori nu poate fi goală.',
  value_too_long: 'Valoarea este prea lungă și depășește limita.',
  create_failed: 'Crearea {{name}} a eșuat.',
  db_constraint_violated: 'A fost încălcată o constrângere a bazei de date.',
  not_exists: '{{name}} nu există.',
  not_exists_with_id: '{{name}} cu ID-ul `{{id}}` nu există.',
  not_found: 'Resursa nu există.',
  relation_foreign_key_not_found:
    'Una sau mai multe chei străine nu au fost găsite. Verifică datele introduse și asigură-te că toate entitățile referite există.',
  unique_integrity_violation:
    'Entitatea există deja. Verifică datele introduse și încearcă din nou.',
};

export default Object.freeze(entity);
