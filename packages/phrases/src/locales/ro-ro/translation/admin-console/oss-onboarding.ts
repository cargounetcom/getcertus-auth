/* GetCertus addition (MPL-2.0, see GETCERTUS.md): admin console phrases. */
const oss_onboarding = {
  page_title: 'Integrare',
  title: 'Câteva lucruri despre tine',
  description:
    'Spune-ne câteva lucruri despre tine și proiectul tău. Ne ajută să facem GetCertus mai bun pentru toată lumea.',
  email: {
    label: 'Adresă de e-mail',
    description:
      'Vom folosi această adresă dacă trebuie să te contactăm în legătură cu contul tău.',
    placeholder: 'email@example.com',
  },
  newsletter:
    'Primește noutăți despre produs, avertismente de securitate și conținut selectat de la GetCertus.',
  project: {
    label: 'Folosesc GetCertus pentru',
    personal: 'Proiect personal',
    company: 'Proiect de companie',
  },
  project_name: {
    label: 'Numele proiectului',
    placeholder: 'Proiectul meu',
  },
  company_name: {
    label: 'Numele companiei',
    placeholder: 'Acme.co',
  },
  company_size: {
    label: 'Cât de mare este compania ta?',
  },
  errors: {
    email_required: 'Adresa de e-mail este obligatorie',
    email_invalid: 'Introdu o adresă de e-mail validă',
    project_name_too_long: 'Numele proiectului poate avea cel mult 200 de caractere',
  },
};

export default Object.freeze(oss_onboarding);
