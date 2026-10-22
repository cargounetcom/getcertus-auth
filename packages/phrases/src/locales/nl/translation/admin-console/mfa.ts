/* GetCertus addition (MPL-2.0, see GETCERTUS.md): admin console phrases. */
const mfa = {
  title: 'Meervoudige authenticatie',
  description:
    'Voeg meervoudige authenticatie toe om de beveiliging van je inlogervaring te verhogen.',
  factors: 'Factoren',
  multi_factors: 'Meerdere factoren',
  multi_factors_description:
    'Gebruikers moeten een van de ingeschakelde factoren verifiëren voor verificatie in twee stappen.',
  totp: 'Authenticator-app',
  otp_description:
    'Koppel Google Authenticator of een vergelijkbare app om eenmalige wachtwoorden te verifiëren.',
  webauthn: 'Passkeys',
  webauthn_description:
    'Verifieer via een door de browser ondersteunde methode: biometrie, scannen met je telefoon, een beveiligingssleutel enz.',
  webauthn_domain_tip:
    'WebAuthn koppelt publieke sleutels aan een specifiek domein. Als je je servicedomein wijzigt, kunnen gebruikers zich niet meer authenticeren met hun bestaande passkeys.',
  backup_code: 'Back-upcodes',
  backup_code_description:
    'Genereer 10 eenmalige back-upcodes nadat gebruikers een MFA-methode hebben ingesteld.',
  backup_code_setup_hint:
    'Als gebruikers de bovenstaande MFA-factoren niet kunnen verifiëren, kunnen ze de back-upoptie gebruiken.',
  backup_code_error_hint:
    'Om een back-upcode te gebruiken, heb je minstens één andere MFA-methode nodig voor succesvolle authenticatie.',
  email_verification_code: 'Verificatiecode per e-mail',
  email_verification_code_description:
    'Koppel een e-mailadres om verificatiecodes te ontvangen en te verifiëren.',
  phone_verification_code: 'Verificatiecode per sms',
  phone_verification_code_description:
    'Koppel een telefoonnummer om sms-verificatiecodes te ontvangen en te verifiëren.',
  policy: 'Beleid',
  policy_description: 'Stel het MFA-beleid in voor het inlog- en registratieproces.',
  two_step_sign_in_policy: 'Beleid voor verificatie in twee stappen bij inloggen',
  user_controlled: 'Gebruikers kunnen MFA zelf in- of uitschakelen',
  user_controlled_tip:
    'Gebruikers kunnen het instellen van MFA de eerste keer bij inloggen of registreren overslaan, of het in- of uitschakelen in hun accountinstellingen.',
  mandatory: 'Gebruikers moeten altijd MFA gebruiken bij inloggen',
  mandatory_tip:
    'Gebruikers moeten MFA de eerste keer bij inloggen of registreren instellen en het daarna bij elke aanmelding gebruiken.',
  require_mfa: 'MFA verplichten',
  require_mfa_label:
    'Schakel dit in om verificatie in twee stappen verplicht te maken voor toegang tot je applicaties. Als dit uit staat, kunnen gebruikers zelf kiezen of ze MFA inschakelen.',
  require_mfa_optional:
    'Optionele MFA: gebruikers kiezen zelf of ze MFA inschakelen voor de beveiliging van hun account',
  require_mfa_adaptive:
    'Adaptieve MFA: vraag alleen om MFA als een aanmelding riskant lijkt (bijv. nieuw land of lange inactiviteit)',
  require_mfa_mandatory: 'Verplichte MFA: alle gebruikers moeten bij elke aanmelding MFA voltooien',
  set_up_prompt: 'Melding om MFA in te stellen',
  no_prompt: 'Gebruikers niet vragen MFA in te stellen',
  prompt_at_sign_in_and_sign_up:
    'Gebruikers vragen MFA in te stellen tijdens registratie (overslaan mogelijk, eenmalige melding)',
  prompt_only_at_sign_in:
    'Gebruikers vragen MFA in te stellen bij hun volgende aanmelding na registratie (overslaan mogelijk, eenmalige melding)',
  prompt_at_sign_in_and_sign_up_mandatory:
    'Gebruikers vragen MFA in te stellen tijdens registratie (niet over te slaan)',
  prompt_only_at_sign_in_mandatory:
    'Gebruikers vragen MFA in te stellen bij hun volgende aanmelding na registratie (niet over te slaan)',
  set_up_organization_required_mfa_prompt:
    'Melding om MFA in te stellen nadat een organisatie MFA heeft ingeschakeld',
  prompt_at_sign_in_non_skippable:
    'Gebruikers vragen MFA in te stellen bij de volgende aanmelding (niet over te slaan)',
  email_primary_method_tip:
    'Verificatiecode per e-mail is al je primaire inlogmethode. Om de beveiliging te waarborgen kan deze niet opnieuw voor MFA worden gebruikt.',
  phone_primary_method_tip:
    'Verificatiecode per sms is al je primaire inlogmethode. Om de beveiliging te waarborgen kan deze niet opnieuw voor MFA worden gebruikt.',
  no_email_connector_warning:
    'Er is nog geen e-mailconnector ingesteld. Tot de configuratie is voltooid, kunnen gebruikers geen e-mailverificatiecodes voor MFA gebruiken. <a>{{link}}</a> in "Connectoren".',
  no_sms_connector_warning:
    'Er is nog geen sms-connector ingesteld. Tot de configuratie is voltooid, kunnen gebruikers geen sms-verificatiecodes voor MFA gebruiken. <a>{{link}}</a> in "Connectoren".',
  no_email_connector_error:
    'MFA met een verificatiecode per e-mail kan niet worden ingeschakeld zonder e-mailconnector. Configureer eerst een e-mailconnector.',
  no_sms_connector_error:
    'MFA met een verificatiecode per sms kan niet worden ingeschakeld zonder sms-connector. Configureer eerst een sms-connector.',
  setup_link: 'Instellen',
  trusted_device: {
    title: 'Vertrouwde apparaten',
    description:
      'Laat vertrouwde browsers MFA-verificatie automatisch voltooien wanneer de huidige MFA-flow dat vereist.',
    enable_title: 'Vertrouwde apparaten inschakelen',
    enable_description:
      'Sta gebruikers toe deze browser te vertrouwen nadat ze een geschikte MFA-factor hebben voltooid.',
    duration_title: 'Vertrouwensduur (dagen)',
    duration_error: 'Voer een geheel getal in tussen {{min}} en {{max}}.',
    duration_note:
      'Wijzigingen in de vertrouwensduur gelden alleen voor apparaten die daarna worden vertrouwd.',
    organization_allow_title: 'Vertrouwde apparaten toestaan',
    organization_allow_tip:
      'Een organisatie kan het beleid voor vertrouwde apparaten van de tenant alleen beperken; ze kan de functie niet inschakelen als het tenantbeleid uit staat.',
    organization_allow_description:
      'Sta verificatie via vertrouwde apparaten toe voor leden van deze organisatie.',
    organization_global_disabled:
      'Schakel vertrouwde apparaten in de MFA-instellingen van de tenant in voordat je ze voor deze organisatie toestaat.',
    management_description:
      'Beheer browsers die deze gebruiker na MFA heeft vertrouwd. Als je er een verwijdert, is bij de volgende aanmelding in die browser opnieuw MFA nodig.',
    management_hint: 'De laatste locatie is alleen ter informatie.',
    management_empty: 'Deze gebruiker heeft geen actieve vertrouwde apparaten.',
    management_deletion_confirmation:
      '{{name}} verwijderen? Deze browser vereist bij de volgende aanmelding opnieuw MFA.',
    management_removed: 'Vertrouwd apparaat verwijderd.',
  },
};

export default Object.freeze(mfa);
