/* GetCertus addition (MPL-2.0, see GETCERTUS.md): admin console phrases. */
const profile = {
  link_account: {
    anonymous: 'Anonim',
  },
  delete_account: {
    title: 'ȘTERGE CONTUL',
    label: 'Șterge contul',
    description:
      'Ștergerea contului elimină toate informațiile personale, datele de utilizator și configurația. Acțiunea nu poate fi anulată.',
    button: 'Șterge contul',
    p: {
      has_issue:
        'Ne pare rău că vrei să îți ștergi contul. Înainte de a-l putea șterge, trebuie să rezolvi următoarele probleme.',
      after_resolved:
        'După ce problemele sunt rezolvate, îți poți șterge contul. Nu ezita să ne contactezi dacă ai nevoie de ajutor.',
      check_information:
        'Ne pare rău că vrei să îți ștergi contul. Verifică cu atenție următoarele informații înainte de a continua.',
      remove_all_data:
        'Ștergerea contului elimină definitiv toate datele despre tine din GetCertus Cloud. Fă o copie de rezervă a datelor importante înainte de a continua.',
      confirm_information:
        'Confirmă că informațiile de mai sus sunt cele așteptate. După ștergere, nu îți vom putea recupera contul.',
      has_admin_role:
        'Deoarece ai rolul de administrator în următorul tenant, acesta va fi șters împreună cu contul tău:',
      has_admin_role_other:
        'Deoarece ai rolul de administrator în următorii tenanți, aceștia vor fi șterși împreună cu contul tău:',
      quit_tenant: 'Ești pe cale să părăsești următorul tenant:',
      quit_tenant_other: 'Ești pe cale să părăsești următorii tenanți:',
    },
    issues: {
      paid_plan: 'Următorul tenant are un plan plătit; anulează mai întâi abonamentul:',
      paid_plan_other: 'Următorii tenanți au planuri plătite; anulează mai întâi abonamentele:',
      subscription_status: 'Următorul tenant are o problemă cu starea abonamentului:',
      subscription_status_other: 'Următorii tenanți au probleme cu starea abonamentului:',
      open_invoice: 'Următorul tenant are o factură neachitată:',
      open_invoice_other: 'Următorii tenanți au facturi neachitate:',
    },
    error_occurred: 'A apărut o eroare',
    error_occurred_description: 'A apărut o problemă la ștergerea contului:',
    request_id: 'ID cerere: {{requestId}}',
    try_again_later:
      'Încearcă din nou mai târziu. Dacă problema persistă, contactează echipa GetCertus și menționează ID-ul cererii.',
    final_confirmation: 'Confirmare finală',
    about_to_start_deletion:
      'Ești pe cale să începi procesul de ștergere, iar acțiunea nu poate fi anulată.',
    permanently_delete: 'Șterge definitiv',
  },
  fields: {
    name: 'Nume',
    name_description:
      'Numele complet al utilizatorului în formă afișabilă, cu toate părțile numelui (de ex., „Ion Popescu”).',
    avatar: 'Avatar',
    avatar_description: 'URL-ul imaginii de avatar a utilizatorului.',
    familyName: 'Nume de familie',
    familyName_description: 'Numele de familie al utilizatorului (de ex., "Popescu").',
    givenName: 'Prenume',
    givenName_description: 'Prenumele utilizatorului (de ex., "Ion").',
    middleName: 'Al doilea prenume',
    middleName_description: 'Al doilea prenume al utilizatorului (de ex., "Mihai").',
    nickname: 'Poreclă',
    nickname_description:
      'Numele informal sau familiar al utilizatorului, care poate diferi de numele legal.',
    preferredUsername: 'Nume de utilizator preferat',
    preferredUsername_description:
      'Identificator scurt după care utilizatorul preferă să fie numit.',
    profile: 'Profil',
    profile_description:
      'URL-ul paginii de profil a utilizatorului (de ex., un profil de rețea socială).',
    website: 'Site web',
    website_description: 'URL-ul site-ului web personal sau al blogului utilizatorului.',
    gender: 'Gen',
    gender_description:
      'Genul cu care se identifică utilizatorul (de ex., "Femeie", "Bărbat", "Non-binar")',
    birthdate: 'Data nașterii',
    birthdate_description:
      'Data nașterii utilizatorului într-un format specificat (de ex., "MM-dd-yyyy").',
    zoneinfo: 'Fus orar',
    zoneinfo_description:
      'Fusul orar al utilizatorului în format IANA (de ex., "America/New_York" sau "Europe/Paris").',
    locale: 'Limbă',
    locale_description: 'Limba utilizatorului în format IETF BCP 47 (de ex., "en-US" sau "zh-CN").',
    address: {
      formatted: 'Adresă',
      streetAddress: 'Stradă și număr',
      locality: 'Localitate',
      region: 'Județ',
      postalCode: 'Cod poștal',
      country: 'Țară',
    },
    address_description:
      'Adresa completă a utilizatorului în formă afișabilă, cu toate părțile adresei (de ex., "123 Main St, Anytown, USA 12345").',
    fullname: 'Nume complet',
    fullname_description:
      'Combină flexibil familyName, givenName și middleName în funcție de configurație.',
  },
};

export default Object.freeze(profile);
