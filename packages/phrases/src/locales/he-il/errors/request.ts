/* GetCertus addition (MPL-2.0, see GETCERTUS.md): admin console phrases. */
const request = {
  invalid_input: 'הקלט אינו תקין. {{details}}',
  general: 'אירעה שגיאה בבקשה.',
  range_not_satisfiable: 'לא ניתן לספק את הטווח המבוקש.',
  feature_not_supported: 'תכונה זו אינה נתמכת בסביבה הנוכחית.',
  rate_limited: 'יותר מדי בקשות. יש לנסות שוב מאוחר יותר.',
  message_rate_limited: 'נשלחו יותר מדי הודעות לנמען זה. יש לנסות שוב מאוחר יותר.',
};

export default Object.freeze(request);
