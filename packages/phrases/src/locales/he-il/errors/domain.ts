/* GetCertus addition (MPL-2.0, see GETCERTUS.md): admin console phrases. */
const domain = {
  not_configured: 'ספק שמות המארח של הדומיין אינו מוגדר.',
  cloudflare_data_missing: 'cloudflare_data חסר, יש לבדוק.',
  cloudflare_unknown_error: 'שגיאה לא ידועה בבקשה ל-Cloudflare API',
  cloudflare_response_error: 'התקבלה תגובה לא צפויה מ-Cloudflare.',
  limit_to_one_domain: 'ניתן להגדיר דומיין מותאם אישית אחד בלבד.',
  hostname_already_exists: 'הדומיין הזה כבר קיים בשרת שלנו.',
  cloudflare_not_found: 'שם המארח לא נמצא ב-Cloudflare',
  domain_is_not_allowed: 'הדומיין הזה אינו מותר.',
  domain_in_use: 'הדומיין {{domain}} כבר בשימוש',
  exceed_domain_limit: 'ניתן להגדיר עד {{limit}} דומיינים מותאמים אישית.',
};

export default Object.freeze(domain);
