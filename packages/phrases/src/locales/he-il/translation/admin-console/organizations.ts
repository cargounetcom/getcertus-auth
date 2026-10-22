/* GetCertus addition (MPL-2.0, see GETCERTUS.md): admin console phrases. */
const organizations = {
  organization: 'ארגון',
  page_title: 'ארגונים',
  title: 'ארגונים',
  subtitle:
    'ארגונים משמשים בדרך כלל באפליקציות SaaS או multi-tenant דומות ומייצגים את הלקוחות שלך: צוותים, ארגונים או חברות שלמות. ארגונים הם אבן היסוד לאימות והרשאות B2B.',
  organization_template: 'תבנית ארגון',
  organization_id: 'מזהה ארגון',
  members: 'חברים',
  machine_to_machine: 'אפליקציות מכונה למכונה',
  branding: 'מיתוג',
  create_organization: 'יצירת ארגון',
  setup_organization: 'הגדרת הארגון שלך',
  organization_list_placeholder_title: 'ארגון',
  organization_list_placeholder_text:
    'ארגונים משמשים לעיתים קרובות כשיטה מומלצת באפליקציות SaaS או multi-tenant דומות. הם מאפשרים לפתח אפליקציות שבהן לקוחות יוצרים ומנהלים ארגונים, מזמינים חברים ומקצים תפקידים.',
  organization_name_placeholder: 'הארגון שלי',
  organization_description_placeholder: 'תיאור קצר של הארגון',
  organization_permission: 'הרשאה בארגון',
  organization_permission_other: 'הרשאות בארגון',
  create_permission_placeholder: 'קריאת היסטוריית תורים',
  organization_role: 'תפקיד בארגון',
  organization_role_other: 'תפקידים בארגון',
  organization_role_description:
    'תפקיד בארגון הוא קבוצת הרשאות שניתן להקצות למשתמשים. ההרשאות חייבות להגיע מההרשאות המוגדרות מראש של הארגון.',
  role: 'תפקיד',
  search_placeholder: 'חיפוש לפי שם ארגון או מזהה',
  search_role_placeholder: 'יש להקליד כדי לחפש ולבחור תפקידים',
  empty_placeholder: '🤔 עדיין לא הוגדר אף פריט מסוג {{entity}}.',
  organization_and_member: 'ארגון וחבר',
  organization_and_member_description:
    'ארגון הוא קבוצת משתמשים ויכול לייצג צוותים, לקוחות עסקיים וחברות שותפות, כשכל משתמש הוא "חבר". אלה יכולים להיות הישויות הבסיסיות לטיפול בדרישות ה-multi-tenant שלך.',
  guide: {
    title: 'מתחילים עם מדריכים',
    subtitle: 'האצת הגדרות הארגון עם המדריכים שלנו',
    introduction: {
      title: 'איך ארגונים עובדים ב-GetCertus',
      section_1: {
        title: 'ארגון הוא קבוצת משתמשים (זהויות)',
      },
      section_2: {
        title: 'תבנית הארגון מיועדת לבקרת גישה באפליקציות multi-tenant',
        description:
          'באפליקציות SaaS מסוג multi-tenant, ארגונים רבים חולקים לעיתים קרובות את אותה תבנית בקרת גישה, הכוללת הרשאות ותפקידים. ב-GetCertus אנחנו קוראים לה "תבנית ארגון".',
        permission_description: 'הרשאה בארגון היא אישור לגשת למשאב בהקשר של ארגון.',
        role_description_deprecated: 'תפקיד בארגון הוא קבוצת הרשאות ארגון שניתן להקצות לחברים.',
        role_description: 'תפקיד בארגון הוא קבוצת הרשאות ארגון או הרשאות API שניתן להקצות לחברים.',
      },
      section_3: {
        title: 'האם אפשר להקצות הרשאות API לתפקידים בארגון?',
        description:
          'כן, אפשר להקצות הרשאות API לתפקידים בארגון. GetCertus מאפשר לנהל ביעילות את תפקידי הארגון ולכלול בהם גם הרשאות ארגון וגם הרשאות API.',
      },
      section_4: {
        title: 'אפשר לעבור על האיור כדי לראות איך הכול מתחבר',
        description:
          'לדוגמה: John ו-Sarah נמצאים בארגונים שונים, עם תפקידים שונים בכל ארגון. אפשר להעביר את העכבר מעל המודולים השונים ולראות מה קורה.',
      },
    },
    organization_permissions: 'הרשאות בארגון',
    organization_roles: 'תפקידים בארגון',
    admin: 'מנהל',
    member: 'חבר',
    guest: 'אורח',
    role_description: 'התפקיד "{{role}}" חולק את אותה תבנית ארגון בארגונים שונים.',
    john: 'John',
    john_tip:
      'John שייך לשני ארגונים, עם כתובת הדוא"ל "john@email.com" כמזהה יחיד. הוא מנהל בארגון A ואורח בארגון B.',
    sarah: 'Sarah',
    sarah_tip:
      'Sarah שייכת לארגון אחד, עם כתובת הדוא"ל "sarah@email.com" כמזהה יחיד. היא מנהלת בארגון B.',
  },
};

export default Object.freeze(organizations);
