/* GetCertus addition (MPL-2.0, see GETCERTUS.md): admin console phrases. */
const organization_details = {
  page_title: 'Organisationsdetaljer',
  delete_confirmation:
    'Når organisationen er slettet, mister alle medlemmer deres medlemskab og roller i den. Handlingen kan ikke fortrydes.',
  organization_id: 'Organisations-ID',
  settings_description:
    'Organisationer repræsenterer de teams, erhvervskunder og partnervirksomheder, der har adgang til dine applikationer.',
  name_placeholder: 'Organisationens navn; behøver ikke være unikt.',
  description_placeholder: 'En beskrivelse af organisationen.',
  member: 'Medlem',
  member_other: 'Medlemmer',
  add_members_to_organization: 'Tilføj medlemmer til organisationen {{name}}',
  add_members_to_organization_description:
    'Find de rette brugere ved at søge på navn, e-mail, telefon eller bruger-ID. Eksisterende medlemmer vises ikke i søgeresultaterne.',
  add_with_organization_role: 'Tilføj med organisationsrolle(r)',
  user: 'Bruger',
  application: 'Applikation',
  application_other: 'Applikationer',
  add_applications_to_organization: 'Tilføj applikationer til organisationen {{name}}',
  add_applications_to_organization_description:
    'Find de rette applikationer ved at søge på app-ID, navn eller beskrivelse. Eksisterende applikationer vises ikke i søgeresultaterne.',
  at_least_one_application: 'Der kræves mindst én applikation.',
  remove_application_from_organization: 'Fjern applikationen fra organisationen',
  remove_application_from_organization_description:
    'Når applikationen er fjernet, mister den sin tilknytning og sine roller i organisationen. Handlingen kan ikke fortrydes.',
  search_application_placeholder: 'Søg på app-ID, navn eller beskrivelse',
  roles: 'Organisationsroller',
  authorize_to_roles: 'Giv {{name}} adgang til følgende roller:',
  edit_organization_roles: 'Redigér organisationsroller',
  edit_organization_roles_title: 'Redigér organisationsroller for {{name}}',
  remove_user_from_organization: 'Fjern brugeren fra organisationen',
  remove_user_from_organization_description:
    'Når brugeren er fjernet, mister vedkommende sit medlemskab og sine roller i organisationen. Handlingen kan ikke fortrydes.',
  search_user_placeholder: 'Søg på navn, e-mail, telefon eller bruger-ID',
  at_least_one_user: 'Der kræves mindst én bruger.',
  organization_roles_tooltip: 'De roller, der er tildelt {{type}} i denne organisation.',
  custom_data: 'Brugerdefinerede data',
  custom_data_tip:
    'Brugerdefinerede data er et JSON-objekt, hvor du kan gemme yderligere data om organisationen.',
  invalid_json_object: 'Ugyldigt JSON-objekt.',
  branding: {
    name: 'branding',
    description: 'Tilpas loginoplevelsen på organisationsniveau.',
    organization_level_sie: 'Loginoplevelse på organisationsniveau',
    organization_level_sie_switch:
      'Slå loginoplevelsen på organisationsniveau til, og opsæt organisationsspecifik branding. Hvis den er slået fra, bruges først loginoplevelsen på applikationsniveau og derefter den samlede loginoplevelse.',
    logo: 'Organisationslogoer',
    logo_tooltip:
      "Du kan sende organisations-ID'et med for at vise logoet i loginoplevelsen; en mørk version af logoet er nødvendig, hvis mørk tilstand er slået til i indstillingerne for den samlede loginoplevelse. <a>Læs mere</a>",
  },
  jit: {
    title: 'Just-in-time-provisionering',
    description:
      'Brugere kan automatisk blive medlem af organisationen og få tildelt roller ved deres første login via visse godkendelsesmetoder. Du kan angive krav til just-in-time-provisionering.',
    email_domain: 'Provisionering via e-maildomæne',
    email_domain_description:
      'Nye brugere, der tilmelder sig med en bekræftet e-mailadresse eller via socialt login med en bekræftet e-mailadresse, bliver automatisk medlem af organisationen. <a>Læs mere</a>',
    email_domain_placeholder: 'Indtast e-maildomæner til just-in-time-provisionering',
    invalid_domain: 'Ugyldigt domæne',
    domain_already_added: 'Domænet er allerede tilføjet',
    sso_enabled_domain_warning:
      'Du har indtastet et eller flere e-maildomæner, der er knyttet til enterprise SSO. Brugere med disse e-mailadresser følger det almindelige SSO-flow og tilføjes ikke til organisationen, medmindre provisionering via enterprise SSO er konfigureret.',
    enterprise_sso: 'Provisionering via enterprise SSO',
    no_enterprise_connector_set:
      'Du har ikke opsat nogen enterprise SSO-connector endnu. Tilføj først connectorer for at slå provisionering via enterprise SSO til. <a>Opsæt</a>',
    add_enterprise_connector: 'Tilføj enterprise-connector',
    enterprise_sso_description:
      'Nye eller eksisterende brugere, der logger ind via enterprise SSO for første gang, bliver automatisk medlem af organisationen. <a>Læs mere</a>',
    organization_roles: 'Standardroller i organisationen',
    organization_roles_description:
      'Tildel roller til brugere, når de bliver medlem af organisationen via just-in-time-provisionering.',
  },
  mfa: {
    title: 'Multifaktorgodkendelse (MFA)',
    tip: 'Når MFA er påkrævet, afvises brugere uden konfigureret MFA, når de forsøger at veksle til et organisationstoken. Indstillingen påvirker ikke brugergodkendelsen.',
    description:
      'Kræv, at brugere konfigurerer multifaktorgodkendelse for at få adgang til denne organisation.',
    no_mfa_warning:
      'Der er ingen metoder til multifaktorgodkendelse slået til for din tenant. Brugere kan ikke få adgang til organisationen, før mindst én <a>metode til multifaktorgodkendelse</a> er slået til.',
  },
};

export default Object.freeze(organization_details);
