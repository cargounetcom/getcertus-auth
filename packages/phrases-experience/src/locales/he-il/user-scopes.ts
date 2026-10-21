/* GetCertus addition (MPL-2.0, see GETCERTUS.md): sign-in experience phrases. */
const user_scopes = {
  descriptions: {
    custom_data: 'הנתונים המותאמים שלך',
    email: 'כתובת האימייל שלך',
    phone: 'מספר הטלפון שלך',
    profile: 'השם, שם המשתמש, תמונת הפרופיל ופרטי פרופיל נוספים',
    roles: 'התפקידים שלך',
    identities: 'הזהויות החברתיות המקושרות שלך',
    'urn:logto:scope:organizations': 'מידע על הארגונים שלך',
    'urn:logto:scope:organization_roles': 'התפקידים שלך בארגונים',
    address: 'הכתובת שלך',
    'urn:logto:scope:sessions': 'הסשנים הפעילים שלך',
    'urn:logto:scope:trusted_devices': 'המכשירים המהימנים שלך',
  },
};

export default Object.freeze(user_scopes);
