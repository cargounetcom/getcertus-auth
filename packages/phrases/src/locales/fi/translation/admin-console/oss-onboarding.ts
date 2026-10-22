/* GetCertus addition (MPL-2.0, see GETCERTUS.md): admin console phrases. */
const oss_onboarding = {
  page_title: 'Käyttöönotto',
  title: 'Hieman sinusta',
  description:
    'Kerro meille hieman itsestäsi ja projektistasi. Se auttaa meitä tekemään GetCertusista paremman kaikille.',
  email: {
    label: 'Sähköpostiosoite',
    description: 'Käytämme tätä osoitetta, jos meidän on otettava sinuun yhteyttä tilisi asioissa.',
    placeholder: 'email@example.com',
  },
  newsletter:
    'Vastaanota tuotepäivityksiä, tietoturvatiedotteita ja valikoitua sisältöä GetCertusilta.',
  project: {
    label: 'Käytän GetCertusia',
    personal: 'Henkilökohtainen projekti',
    company: 'Yrityksen projekti',
  },
  project_name: {
    label: 'Projektin nimi',
    placeholder: 'Oma projekti',
  },
  company_name: {
    label: 'Yrityksen nimi',
    placeholder: 'Acme.co',
  },
  company_size: {
    label: 'Kuinka suuri yrityksesi on?',
  },
  errors: {
    email_required: 'Sähköpostiosoite vaaditaan',
    email_invalid: 'Anna kelvollinen sähköpostiosoite',
    project_name_too_long: 'Projektin nimi voi olla enintään 200 merkkiä',
  },
};

export default Object.freeze(oss_onboarding);
