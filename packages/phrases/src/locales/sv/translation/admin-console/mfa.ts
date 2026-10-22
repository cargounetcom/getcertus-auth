/* GetCertus addition (MPL-2.0, see GETCERTUS.md): admin console phrases. */
const mfa = {
  title: 'Multifaktorautentisering',
  description:
    'Lägg till multifaktorautentisering för att höja säkerheten i din inloggningsupplevelse.',
  factors: 'Faktorer',
  multi_factors: 'Flera faktorer',
  multi_factors_description:
    'Användare måste verifiera en av de aktiverade faktorerna för tvåstegsverifiering.',
  totp: 'Autentiseringsapp',
  otp_description: 'Koppla Google Authenticator eller liknande för att verifiera engångslösenord.',
  webauthn: 'Passkeys',
  webauthn_description:
    'Verifiera med en metod som webbläsaren stöder: biometri, skanning med telefon, säkerhetsnyckel m.m.',
  webauthn_domain_tip:
    'WebAuthn kopplar publika nycklar till en specifik domän. Om du ändrar tjänstens domän kan användare inte längre autentisera sig med befintliga passkeys.',
  backup_code: 'Reservkoder',
  backup_code_description:
    'Generera 10 reservkoder för engångsbruk när användare har konfigurerat en MFA-metod.',
  backup_code_setup_hint:
    'När användare inte kan verifiera MFA-faktorerna ovan kan de använda reservalternativet.',
  backup_code_error_hint:
    'För att använda en reservkod behövs minst en annan MFA-metod för lyckad autentisering.',
  email_verification_code: 'Verifieringskod via e-post',
  email_verification_code_description:
    'Koppla en e-postadress för att ta emot och verifiera verifieringskoder.',
  phone_verification_code: 'Verifieringskod via sms',
  phone_verification_code_description:
    'Koppla ett telefonnummer för att ta emot och verifiera verifieringskoder via sms.',
  policy: 'Policy',
  policy_description: 'Ange MFA-policyn för inloggning och registrering.',
  two_step_sign_in_policy: 'Policy för tvåstegsverifiering vid inloggning',
  user_controlled: 'Användare kan själva aktivera eller inaktivera MFA',
  user_controlled_tip:
    'Användare kan hoppa över MFA-konfigurationen första gången de loggar in eller registrerar sig, eller aktivera/inaktivera den i kontoinställningarna.',
  mandatory: 'Användare måste alltid använda MFA vid inloggning',
  mandatory_tip:
    'Användare måste konfigurera MFA första gången de loggar in eller registrerar sig och använda det vid alla framtida inloggningar.',
  require_mfa: 'Kräv MFA',
  require_mfa_label:
    'Aktivera detta för att göra tvåstegsverifiering obligatorisk för åtkomst till dina applikationer. Om det är inaktiverat kan användarna själva välja om de vill aktivera MFA.',
  require_mfa_optional:
    'Valfri MFA: låt användarna själva välja att aktivera MFA för att skydda sitt konto',
  require_mfa_adaptive:
    'Adaptiv MFA: be bara om MFA när en inloggning verkar riskabel (t.ex. nytt land eller lång inaktivitet)',
  require_mfa_mandatory: 'Obligatorisk MFA: alla användare måste slutföra MFA vid varje inloggning',
  set_up_prompt: 'Uppmaning att konfigurera MFA',
  no_prompt: 'Be inte användare att konfigurera MFA',
  prompt_at_sign_in_and_sign_up:
    'Be användare konfigurera MFA vid registrering (kan hoppas över, visas en gång)',
  prompt_only_at_sign_in:
    'Be användare konfigurera MFA vid nästa inloggning efter registrering (kan hoppas över, visas en gång)',
  prompt_at_sign_in_and_sign_up_mandatory:
    'Be användare konfigurera MFA vid registrering (kan inte hoppas över)',
  prompt_only_at_sign_in_mandatory:
    'Be användare konfigurera MFA vid nästa inloggning efter registrering (kan inte hoppas över)',
  set_up_organization_required_mfa_prompt:
    'Uppmaning att konfigurera MFA efter att en organisation har aktiverat MFA',
  prompt_at_sign_in_non_skippable:
    'Be användare konfigurera MFA vid nästa inloggning (kan inte hoppas över)',
  email_primary_method_tip:
    'Verifieringskod via e-post är redan din primära inloggningsmetod. Av säkerhetsskäl kan den inte återanvändas för MFA.',
  phone_primary_method_tip:
    'Verifieringskod via sms är redan din primära inloggningsmetod. Av säkerhetsskäl kan den inte återanvändas för MFA.',
  no_email_connector_warning:
    'Ingen e-postanslutning har konfigurerats ännu. Innan konfigurationen är klar kan användare inte använda verifieringskoder via e-post för MFA. <a>{{link}}</a> under "Anslutningar".',
  no_sms_connector_warning:
    'Ingen sms-anslutning har konfigurerats ännu. Innan konfigurationen är klar kan användare inte använda verifieringskoder via sms för MFA. <a>{{link}}</a> under "Anslutningar".',
  no_email_connector_error:
    'MFA med verifieringskod via e-post kan inte aktiveras utan en e-postanslutning. Konfigurera först en e-postanslutning.',
  no_sms_connector_error:
    'MFA med verifieringskod via sms kan inte aktiveras utan en sms-anslutning. Konfigurera först en sms-anslutning.',
  setup_link: 'Konfigurera',
  trusted_device: {
    title: 'Betrodda enheter',
    description:
      'Låt betrodda webbläsare automatiskt slutföra MFA-verifiering när det aktuella MFA-flödet kräver det.',
    enable_title: 'Aktivera betrodda enheter',
    enable_description:
      'Låt användare lita på den här webbläsaren efter att de slutfört en godkänd MFA-faktor.',
    duration_title: 'Förtroendeperiod (dagar)',
    duration_error: 'Ange ett heltal mellan {{min}} och {{max}}.',
    duration_note: 'Ändringar av förtroendeperioden gäller bara enheter som betros efteråt.',
    organization_allow_title: 'Tillåt betrodda enheter',
    organization_allow_tip:
      'En organisation kan bara begränsa tenantens policy för betrodda enheter; den kan inte aktivera funktionen när tenantens policy är avstängd.',
    organization_allow_description:
      'Tillåt verifiering via betrodda enheter för medlemmar i den här organisationen.',
    organization_global_disabled:
      'Aktivera betrodda enheter i tenantens MFA-inställningar innan du tillåter dem för den här organisationen.',
    management_description:
      'Hantera webbläsare som den här användaren har betrott efter MFA. Om du tar bort en krävs MFA igen i den webbläsaren vid nästa inloggning.',
    management_hint: 'Den senaste platsen är endast informativ.',
    management_empty: 'Användaren har inga aktiva betrodda enheter.',
    management_deletion_confirmation:
      'Ta bort {{name}}? Den här webbläsaren kräver MFA igen vid nästa inloggning.',
    management_removed: 'Den betrodda enheten har tagits bort.',
  },
};

export default Object.freeze(mfa);
