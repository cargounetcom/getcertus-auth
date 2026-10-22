/* GetCertus addition (MPL-2.0, see GETCERTUS.md): admin console phrases. */
const oidc_configs = {
  sessions_card_title: 'סשנים של GetCertus',
  sessions_card_description:
    'התאמה אישית של מדיניות הסשנים שנשמרת בשרת ההרשאות של GetCertus. היא מתעדת את מצב האימות הגלובלי של המשתמש כדי לאפשר SSO ואימות מחדש שקט בין אפליקציות.',
  session_max_ttl_in_days: 'משך החיים המרבי (TTL) של סשן בימים',
  session_max_ttl_in_days_tip:
    'מגבלת משך חיים מוחלטת מרגע יצירת הסשן. ללא קשר לפעילות, הסשן מסתיים כשהמשך הקבוע הזה חולף.',
  cloud_private_key_rotation_notice:
    'ב-GetCertus Cloud, החלפת מפתח פרטי נכנסת לתוקף לאחר תקופת חסד של 4 שעות.',
};

export default Object.freeze(oidc_configs);
