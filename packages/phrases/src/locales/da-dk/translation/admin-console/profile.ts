/* GetCertus addition (MPL-2.0, see GETCERTUS.md): admin console phrases. */
const profile = {
  link_account: {
    anonymous: 'Anonym',
  },
  delete_account: {
    title: 'SLET KONTO',
    label: 'Slet konto',
    description:
      'Sletning af kontoen fjerner alle dine personlige oplysninger, brugerdata og konfiguration. Handlingen kan ikke fortrydes.',
    button: 'Slet konto',
    p: {
      has_issue:
        'Vi er kede af, at du vil slette din konto. Før du kan slette kontoen, skal du løse følgende problemer.',
      after_resolved:
        'Når problemerne er løst, kan du slette din konto. Kontakt os endelig, hvis du har brug for hjælp.',
      check_information:
        'Vi er kede af, at du vil slette din konto. Kontrollér følgende oplysninger omhyggeligt, før du fortsætter.',
      remove_all_data:
        'Sletning af kontoen fjerner permanent alle data om dig i GetCertus Cloud. Tag derfor backup af vigtige data, før du fortsætter.',
      confirm_information:
        'Bekræft, at oplysningerne ovenfor er som forventet. Når kontoen er slettet, kan vi ikke gendanne den.',
      has_admin_role:
        'Da du har administratorrollen i følgende tenant, slettes den sammen med din konto:',
      has_admin_role_other:
        'Da du har administratorrollen i følgende tenants, slettes de sammen med din konto:',
      quit_tenant: 'Du er ved at forlade følgende tenant:',
      quit_tenant_other: 'Du er ved at forlade følgende tenants:',
    },
    issues: {
      paid_plan: 'Følgende tenant har en betalt plan. Opsig først abonnementet:',
      paid_plan_other: 'Følgende tenants har betalte planer. Opsig først abonnementerne:',
      subscription_status: 'Følgende tenant har et problem med abonnementsstatus:',
      subscription_status_other: 'Følgende tenants har problemer med abonnementsstatus:',
      open_invoice: 'Følgende tenant har en åben faktura:',
      open_invoice_other: 'Følgende tenants har åbne fakturaer:',
    },
    error_occurred: 'Der opstod en fejl',
    error_occurred_description: 'Der gik noget galt under sletningen af din konto:',
    request_id: 'Anmodnings-ID: {{requestId}}',
    try_again_later:
      "Prøv igen senere. Hvis problemet fortsætter, så kontakt GetCertus-teamet med anmodnings-ID'et.",
    final_confirmation: 'Endelig bekræftelse',
    about_to_start_deletion: 'Du er ved at starte sletningen, og handlingen kan ikke fortrydes.',
    permanently_delete: 'Slet permanent',
  },
  fields: {
    name: 'Navn',
    name_description:
      'Brugerens fulde navn i visningsform med alle navnedele (f.eks. “Jens Jensen”).',
    avatar: 'Avatar',
    avatar_description: 'URL til brugerens avatarbillede.',
    familyName: 'Efternavn',
    familyName_description: 'Brugerens efternavn(e) (f.eks. "Jensen").',
    givenName: 'Fornavn',
    givenName_description: 'Brugerens fornavn(e) (f.eks. "Jens").',
    middleName: 'Mellemnavn',
    middleName_description: 'Brugerens mellemnavn(e) (f.eks. "Marie").',
    nickname: 'Kaldenavn',
    nickname_description: 'Uformelt navn for brugeren, som kan afvige fra det juridiske navn.',
    preferredUsername: 'Foretrukket brugernavn',
    preferredUsername_description: 'Kort identifikator, som brugeren ønsker at blive omtalt med.',
    profile: 'Profil',
    profile_description:
      'URL til brugerens læsbare profilside (f.eks. en profil på sociale medier).',
    website: 'Websted',
    website_description: 'URL til brugerens personlige websted eller blog.',
    gender: 'Køn',
    gender_description: 'Brugerens selvidentificerede køn (f.eks. "Kvinde", "Mand", "Ikke-binær")',
    birthdate: 'Fødselsdato',
    birthdate_description: 'Brugerens fødselsdato i et angivet format (f.eks. "MM-dd-yyyy").',
    zoneinfo: 'Tidszone',
    zoneinfo_description:
      'Brugerens tidszone i IANA-format (f.eks. "America/New_York" eller "Europe/Paris").',
    locale: 'Sprog',
    locale_description: 'Brugerens sprog i IETF BCP 47-format (f.eks. "en-US" eller "zh-CN").',
    address: {
      formatted: 'Adresse',
      streetAddress: 'Gadeadresse',
      locality: 'By',
      region: 'Region',
      postalCode: 'Postnummer',
      country: 'Land',
    },
    address_description:
      'Brugerens fulde adresse i visningsform med alle adressedele (f.eks. "123 Main St, Anytown, USA 12345").',
    fullname: 'Fulde navn',
    fullname_description:
      'Kombinerer fleksibelt familyName, givenName og middleName ud fra konfigurationen.',
  },
};

export default Object.freeze(profile);
