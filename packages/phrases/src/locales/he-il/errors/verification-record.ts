/* GetCertus addition (MPL-2.0, see GETCERTUS.md): admin console phrases. */
const verification_record = {
  not_found: 'רשומת האימות לא נמצאה.',
  permission_denied: 'ההרשאה נדחתה; יש לבצע אימות מחדש.',
  not_supported_for_google_one_tap: 'API זה אינו תומך ב-Google One Tap.',
  social_verification: {
    invalid_target: 'רשומת אימות לא תקינה. היה צפוי {{expected}} אך התקבל {{actual}}.',
    token_response_not_found:
      'תגובת הטוקן לא נמצאה. יש לוודא שאחסון טוקנים נתמך ומופעל עבור המחבר החברתי.',
  },
};

export default Object.freeze(verification_record);
