/* GetCertus addition (MPL-2.0, see GETCERTUS.md): admin console phrases. */
const one_time_token = {
  token_not_found: 'הטוקן {{token}} לא נמצא.',
  email_mismatch: 'כתובת הדוא"ל אינה תואמת לטוקן שסופק.',
  interaction_event_mismatch: 'לא ניתן להשתמש בטוקן עבור אינטראקציה זו.',
  token_expired: 'תוקף הטוקן פג.',
  token_consumed: 'הטוקן כבר נוצל.',
  token_revoked: 'הטוקן בוטל.',
  cannot_reactivate_token: 'לא ניתן להפעיל מחדש את הטוקן.',
};

export default Object.freeze(one_time_token);
