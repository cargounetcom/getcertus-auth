/* GetCertus addition (MPL-2.0, see GETCERTUS.md): admin console phrases. */
const oss_onboarding = {
  page_title: 'Onboarding',
  title: 'Iets over jou',
  description:
    'Vertel ons iets over jezelf en je project. Zo kunnen we GetCertus voor iedereen beter maken.',
  email: {
    label: 'E-mailadres',
    description: 'We gebruiken dit adres als we contact met je moeten opnemen over je account.',
    placeholder: 'email@example.com',
  },
  newsletter:
    'Ontvang productupdates, beveiligingsadviezen en geselecteerde content van GetCertus.',
  project: {
    label: 'Ik gebruik GetCertus voor',
    personal: 'Persoonlijk project',
    company: 'Bedrijfsproject',
  },
  project_name: {
    label: 'Projectnaam',
    placeholder: 'Mijn project',
  },
  company_name: {
    label: 'Bedrijfsnaam',
    placeholder: 'Acme.co',
  },
  company_size: {
    label: 'Hoe groot is je bedrijf?',
  },
  errors: {
    email_required: 'E-mailadres is verplicht',
    email_invalid: 'Voer een geldig e-mailadres in',
    project_name_too_long: 'De projectnaam mag maximaal 200 tekens lang zijn',
  },
};

export default Object.freeze(oss_onboarding);
