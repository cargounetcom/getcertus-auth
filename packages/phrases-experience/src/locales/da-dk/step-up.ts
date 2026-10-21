/* GetCertus addition (MPL-2.0, see GETCERTUS.md): sign-in experience phrases. */
const step_up = {
  verify_your_identity: 'Bekræft din identitet',
  choose_method_description: 'Bekræft, at det er dig, med en af følgende metoder for at fortsætte.',
  password: 'Adgangskode',
  password_description: 'Indtast adgangskoden til din konto',
  enter_password_description: 'Indtast adgangskoden til din konto for at fortsætte.',
  enter_verification_code_description:
    'Indtast bekræftelseskoden, der blev sendt til {{identifier}}.',
  subject_proof_description:
    'Bekræft, at det er dig, via en konto, der er knyttet til din, for at fortsætte. Derefter kan du sætte en bekræftelsesmetode op.',
  no_method_available: 'Ingen bekræftelsesmetode tilgængelig',
  no_method_available_description:
    'Din konto har ingen metode, der kan gennemføre denne bekræftelse. Kontakt din administrator for at få hjælp.',
};

export default Object.freeze(step_up);
