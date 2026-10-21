/* GetCertus addition (MPL-2.0, see GETCERTUS.md): sign-in experience phrases. */
const step_up = {
  verify_your_identity: 'Verifiera din identitet',
  choose_method_description:
    'Bekräfta att det är du med någon av följande metoder för att fortsätta.',
  password: 'Lösenord',
  password_description: 'Ange lösenordet till ditt konto',
  enter_password_description: 'Ange lösenordet till ditt konto för att fortsätta.',
  enter_verification_code_description: 'Ange verifieringskoden som skickades till {{identifier}}.',
  subject_proof_description:
    'Bekräfta att det är du via ett konto som är kopplat till ditt för att fortsätta. Därefter kan du konfigurera en verifieringsmetod.',
  no_method_available: 'Ingen verifieringsmetod tillgänglig',
  no_method_available_description:
    'Ditt konto har ingen metod som kan slutföra den här verifieringen. Kontakta din administratör för hjälp.',
};

export default Object.freeze(step_up);
