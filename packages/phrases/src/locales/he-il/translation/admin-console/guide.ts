/* GetCertus addition (MPL-2.0, see GETCERTUS.md): admin console phrases. */
const guide = {
  start_building: 'להתחיל לבנות',
  get_started: 'מתחילים',
  categories: {
    featured: 'פופולרי ובשבילך',
    Traditional: 'אפליקציית אינטרנט מסורתית',
    SPA: 'אפליקציית עמוד יחיד',
    Native: 'נייטיב',
    MachineToMachine: 'מכונה למכונה',
    Protected: 'אינטגרציה ללא SDK',
    ThirdParty: 'אפליקציית צד שלישי',
    SAML: 'אפליקציית SAML',
  },
  filter: {
    title: 'סינון framework',
    placeholder: 'חיפוש framework',
  },
  checkout_tutorial: 'למדריך של {{name}}',
  do_not_need_tutorial: 'אם אין צורך במדריך, אפשר להמשיך בלי מדריך framework',
  finish_and_done: 'סיום',
  cannot_find_guide: 'לא מוצא/ת את המדריך?',
  describe_guide_looking_for: 'תיאור המדריך שאת/ה מחפש/ת',
  request_guide_successfully: 'הבקשה נשלחה בהצלחה. תודה!',
  app: {
    select_framework_or_tutorial: 'בחירת framework או מדריך',
    guide_modal_title: 'מתחילים עם SDK ומדריכים',
    modal_subtitle: 'האצת פיתוח האפליקציה עם ה-SDK והמדריכים המוכנים שלנו.',
    select_a_framework: 'בחירת framework',
    continue_without_framework: 'יצירת אפליקציה ללא framework',
    describe_guide_looking_for_placeholder:
      'לדוגמה: אני רוצה לשלב את GetCertus באפליקציית Angular שלי.',
  },
  api: {
    modal_title: 'מתחילים עם מדריכים',
    modal_subtitle: 'האצת פיתוח האפליקציה עם המדריכים המוכנים שלנו.',
    select_a_tutorial: 'בחירת מדריך',
    continue_without_tutorial: 'להמשיך בלי מדריך',
    describe_guide_looking_for_placeholder: 'לדוגמה: אני רוצה להגן על ה-API שלי באמצעות Deno.',
  },
};

export default Object.freeze(guide);
