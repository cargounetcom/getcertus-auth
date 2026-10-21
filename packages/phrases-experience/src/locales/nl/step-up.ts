/* GetCertus addition (MPL-2.0, see GETCERTUS.md): sign-in experience phrases. */
const step_up = {
  verify_your_identity: 'Verifieer je identiteit',
  choose_method_description:
    'Bevestig met een van de volgende methoden dat jij het bent om door te gaan.',
  password: 'Wachtwoord',
  password_description: 'Voer het wachtwoord van je account in',
  enter_password_description: 'Voer het wachtwoord van je account in om door te gaan.',
  enter_verification_code_description:
    'Voer de verificatiecode in die naar {{identifier}} is verzonden.',
  subject_proof_description:
    'Bevestig dat jij het bent via een account dat aan het jouwe is gekoppeld om door te gaan. Daarna kun je een verificatiemethode instellen.',
  no_method_available: 'Geen verificatiemethode beschikbaar',
  no_method_available_description:
    'Je account heeft geen methode waarmee deze verificatie kan worden voltooid. Neem contact op met je beheerder voor hulp.',
};

export default Object.freeze(step_up);
