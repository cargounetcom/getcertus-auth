/* GetCertus addition (MPL-2.0, see GETCERTUS.md): admin console phrases. */
const oss_onboarding = {
  page_title: 'Introduktion',
  title: 'Lidt om dig',
  description:
    'Fortæl os lidt om dig selv og dit projekt. Det hjælper os med at gøre GetCertus bedre for alle.',
  email: {
    label: 'E-mailadresse',
    description: 'Vi bruger denne adresse, hvis vi skal kontakte dig om din konto.',
    placeholder: 'email@example.com',
  },
  newsletter: 'Modtag produktopdateringer, sikkerhedsmeddelelser og udvalgt indhold fra GetCertus.',
  project: {
    label: 'Jeg bruger GetCertus til',
    personal: 'Personligt projekt',
    company: 'Virksomhedsprojekt',
  },
  project_name: {
    label: 'Projektnavn',
    placeholder: 'Mit projekt',
  },
  company_name: {
    label: 'Virksomhedsnavn',
    placeholder: 'Acme.co',
  },
  company_size: {
    label: 'Hvor stor er din virksomhed?',
  },
  errors: {
    email_required: 'E-mailadresse er påkrævet',
    email_invalid: 'Indtast en gyldig e-mailadresse',
    project_name_too_long: 'Projektnavnet må højst være 200 tegn',
  },
};

export default Object.freeze(oss_onboarding);
