/* GetCertus addition (MPL-2.0, see GETCERTUS.md): admin console phrases. */
const profile = {
  link_account: {
    anonymous: 'Anonym',
  },
  delete_account: {
    title: 'RADERA KONTO',
    label: 'Radera konto',
    description:
      'Om du raderar kontot tas all din personliga information, användardata och konfiguration bort. Åtgärden kan inte ångras.',
    button: 'Radera konto',
    p: {
      has_issue:
        'Vi beklagar att du vill radera ditt konto. Innan du kan radera kontot måste du lösa följande problem.',
      after_resolved:
        'När problemen är lösta kan du radera kontot. Tveka inte att kontakta oss om du behöver hjälp.',
      check_information:
        'Vi beklagar att du vill radera ditt konto. Kontrollera följande information noga innan du fortsätter.',
      remove_all_data:
        'Om du raderar kontot tas alla uppgifter om dig i GetCertus Cloud bort permanent. Säkerhetskopiera viktig data innan du fortsätter.',
      confirm_information:
        'Bekräfta att informationen ovan stämmer. När kontot har raderats kan vi inte återställa det.',
      has_admin_role:
        'Eftersom du har administratörsrollen i följande tenant raderas den tillsammans med ditt konto:',
      has_admin_role_other:
        'Eftersom du har administratörsrollen i följande tenants raderas de tillsammans med ditt konto:',
      quit_tenant: 'Du är på väg att lämna följande tenant:',
      quit_tenant_other: 'Du är på väg att lämna följande tenants:',
    },
    issues: {
      paid_plan: 'Följande tenant har en betald plan, säg först upp prenumerationen:',
      paid_plan_other: 'Följande tenants har betalda planer, säg först upp prenumerationerna:',
      subscription_status: 'Följande tenant har ett problem med prenumerationsstatus:',
      subscription_status_other: 'Följande tenants har problem med prenumerationsstatus:',
      open_invoice: 'Följande tenant har en obetald faktura:',
      open_invoice_other: 'Följande tenants har obetalda fakturor:',
    },
    error_occurred: 'Ett fel uppstod',
    error_occurred_description: 'Något gick fel när ditt konto skulle raderas:',
    request_id: 'Begäran-ID: {{requestId}}',
    try_again_later:
      'Försök igen senare. Om problemet kvarstår, kontakta GetCertus-teamet och ange begäran-ID:t.',
    final_confirmation: 'Slutlig bekräftelse',
    about_to_start_deletion: 'Du är på väg att starta raderingen, och åtgärden kan inte ångras.',
    permanently_delete: 'Radera permanent',
  },
  fields: {
    name: 'Namn',
    name_description:
      'Användarens fullständiga namn i visningsbar form med alla namndelar (t.ex. “Anna Andersson”).',
    avatar: 'Avatar',
    avatar_description: 'URL till användarens avatarbild.',
    familyName: 'Efternamn',
    familyName_description: 'Användarens efternamn (t.ex. "Andersson").',
    givenName: 'Förnamn',
    givenName_description: 'Användarens förnamn (t.ex. "Anna").',
    middleName: 'Mellannamn',
    middleName_description: 'Användarens mellannamn (t.ex. "Marie").',
    nickname: 'Smeknamn',
    nickname_description:
      'Vardagligt eller informellt namn för användaren, som kan skilja sig från det juridiska namnet.',
    preferredUsername: 'Önskat användarnamn',
    preferredUsername_description: 'Kort identifierare som användaren vill bli kallad.',
    profile: 'Profil',
    profile_description:
      'URL till användarens läsbara profilsida (t.ex. en profil i sociala medier).',
    website: 'Webbplats',
    website_description: 'URL till användarens personliga webbplats eller blogg.',
    gender: 'Kön',
    gender_description: 'Användarens självidentifierade kön (t.ex. "Kvinna", "Man", "Icke-binär")',
    birthdate: 'Födelsedatum',
    birthdate_description: 'Användarens födelsedatum i angivet format (t.ex. "MM-dd-yyyy").',
    zoneinfo: 'Tidszon',
    zoneinfo_description:
      'Användarens tidszon i IANA-format (t.ex. "America/New_York" eller "Europe/Paris").',
    locale: 'Språk',
    locale_description: 'Användarens språk i IETF BCP 47-format (t.ex. "en-US" eller "zh-CN").',
    address: {
      formatted: 'Adress',
      streetAddress: 'Gatuadress',
      locality: 'Ort',
      region: 'Län',
      postalCode: 'Postnummer',
      country: 'Land',
    },
    address_description:
      'Användarens fullständiga adress i visningsbar form med alla adressdelar (t.ex. "123 Main St, Anytown, USA 12345").',
    fullname: 'Fullständigt namn',
    fullname_description:
      'Kombinerar flexibelt familyName, givenName och middleName utifrån konfigurationen.',
  },
};

export default Object.freeze(profile);
