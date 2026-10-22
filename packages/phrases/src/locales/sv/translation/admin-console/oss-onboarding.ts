/* GetCertus addition (MPL-2.0, see GETCERTUS.md): admin console phrases. */
const oss_onboarding = {
  page_title: 'Introduktion',
  title: 'Lite om dig',
  description:
    'Berätta lite om dig själv och ditt projekt. Det hjälper oss att göra GetCertus bättre för alla.',
  email: {
    label: 'E-postadress',
    description: 'Vi använder den här adressen om vi behöver kontakta dig om ditt konto.',
    placeholder: 'email@example.com',
  },
  newsletter: 'Få produktuppdateringar, säkerhetsmeddelanden och utvalt innehåll från GetCertus.',
  project: {
    label: 'Jag använder GetCertus för',
    personal: 'Personligt projekt',
    company: 'Företagsprojekt',
  },
  project_name: {
    label: 'Projektnamn',
    placeholder: 'Mitt projekt',
  },
  company_name: {
    label: 'Företagsnamn',
    placeholder: 'Acme.co',
  },
  company_size: {
    label: 'Hur stort är ditt företag?',
  },
  errors: {
    email_required: 'E-postadress krävs',
    email_invalid: 'Ange en giltig e-postadress',
    project_name_too_long: 'Projektnamnet får vara högst 200 tecken',
  },
};

export default Object.freeze(oss_onboarding);
