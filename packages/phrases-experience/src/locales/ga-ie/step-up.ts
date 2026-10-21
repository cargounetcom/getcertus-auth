/* GetCertus addition (MPL-2.0, see GETCERTUS.md): sign-in experience phrases. */
const step_up = {
  verify_your_identity: 'Fíoraigh d’aitheantas',
  choose_method_description:
    'Chun leanúint ar aghaidh, deimhnigh gur tusa atá ann le ceann de na modhanna seo a leanas.',
  password: 'Pasfhocal',
  password_description: 'Cuir isteach pasfhocal do chuntais',
  enter_password_description: 'Cuir isteach pasfhocal do chuntais chun leanúint ar aghaidh.',
  enter_verification_code_description:
    'Cuir isteach an cód fíoraithe a seoladh chuig {{identifier}}.',
  subject_proof_description:
    'Chun leanúint ar aghaidh, deimhnigh gur tusa atá ann trí chuntas atá nasctha le do chuntas féin. Ansin is féidir leat modh fíoraithe a shocrú.',
  no_method_available: 'Níl aon mhodh fíoraithe ar fáil',
  no_method_available_description:
    'Níl aon mhodh ag do chuntas chun an fíorú seo a chur i gcrích. Déan teagmháil le do riarthóir chun cabhair a fháil.',
};

export default Object.freeze(step_up);
