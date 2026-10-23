/* GetCertus addition (MPL-2.0, see GETCERTUS.md): admin console phrases. */
const organization = {
  require_membership: 'המשתמש חייב להיות חבר בארגון כדי להמשיך.',
  role_names_not_found:
    'זוהו שמות תפקידים לא תקינים: {{names,list(type:conjunction)}}. יש ליצור קודם את התפקידים האלה לפני שממשיכים.',
};

export default Object.freeze(organization);
