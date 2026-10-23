/* GetCertus addition (MPL-2.0, see GETCERTUS.md): admin console phrases. */
const role = {
  name_in_use: 'Το όνομα ρόλου {{name}} χρησιμοποιείται ήδη',
  scope_exists: 'Το αναγνωριστικό scope {{scopeId}} έχει ήδη προστεθεί σε αυτόν τον ρόλο',
  management_api_scopes_not_assignable_to_user_role:
    'Τα scopes του Management API δεν μπορούν να ανατεθούν σε ρόλο χρήστη.',
  user_exists: 'Το αναγνωριστικό χρήστη {{userId}} έχει ήδη προστεθεί σε αυτόν τον ρόλο',
  application_exists:
    'Το αναγνωριστικό εφαρμογής {{applicationId}} έχει ήδη προστεθεί σε αυτόν τον ρόλο',
  default_role_missing:
    'Ορισμένοι από τους προεπιλεγμένους ρόλους (roleNames) δεν υπάρχουν στη βάση δεδομένων· δημιουργήστε πρώτα τους ρόλους',
  internal_role_violation:
    'Ίσως προσπαθείτε να ενημερώσετε ή να διαγράψετε εσωτερικό ρόλο, κάτι που δεν επιτρέπει το GetCertus. Αν δημιουργείτε νέο ρόλο, δοκιμάστε όνομα που δεν ξεκινά με "#internal:".',
};

export default Object.freeze(role);
