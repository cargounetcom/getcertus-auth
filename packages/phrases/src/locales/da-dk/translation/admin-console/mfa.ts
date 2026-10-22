/* GetCertus addition (MPL-2.0, see GETCERTUS.md): admin console phrases. */
const mfa = {
  title: 'Multifaktorgodkendelse',
  description: 'Tilføj multifaktorgodkendelse for at øge sikkerheden i din loginoplevelse.',
  factors: 'Faktorer',
  multi_factors: 'Flere faktorer',
  multi_factors_description:
    'Brugere skal verificere en af de aktiverede faktorer for totrinsbekræftelse.',
  totp: 'Godkendelsesapp',
  otp_description:
    'Tilknyt Google Authenticator eller lignende for at verificere engangsadgangskoder.',
  webauthn: 'Passkeys',
  webauthn_description:
    'Verificér via en metode, browseren understøtter: biometri, scanning med telefon, sikkerhedsnøgle osv.',
  webauthn_domain_tip:
    'WebAuthn binder offentlige nøgler til et bestemt domæne. Hvis du ændrer tjenestens domæne, kan brugerne ikke længere godkende sig med eksisterende passkeys.',
  backup_code: 'Backupkoder',
  backup_code_description: 'Generér 10 engangsbackupkoder, når brugerne har opsat en MFA-metode.',
  backup_code_setup_hint:
    'Når brugere ikke kan verificere MFA-faktorerne ovenfor, kan de bruge backupmuligheden.',
  backup_code_error_hint:
    'For at bruge en backupkode skal der være mindst én anden MFA-metode til vellykket godkendelse.',
  email_verification_code: 'Bekræftelseskode via e-mail',
  email_verification_code_description:
    'Tilknyt en e-mailadresse for at modtage og verificere bekræftelseskoder.',
  phone_verification_code: 'Bekræftelseskode via sms',
  phone_verification_code_description:
    'Tilknyt et telefonnummer for at modtage og verificere bekræftelseskoder via sms.',
  policy: 'Politik',
  policy_description: 'Angiv MFA-politikken for login og tilmelding.',
  two_step_sign_in_policy: 'Politik for totrinsbekræftelse ved login',
  user_controlled: 'Brugere kan selv slå MFA til eller fra',
  user_controlled_tip:
    'Brugere kan springe opsætningen af MFA over første gang ved login eller tilmelding, eller slå den til/fra i kontoindstillingerne.',
  mandatory: 'Brugere skal altid bruge MFA ved login',
  mandatory_tip:
    'Brugere skal opsætte MFA første gang ved login eller tilmelding og bruge det ved alle fremtidige login.',
  require_mfa: 'Kræv MFA',
  require_mfa_label:
    'Slå dette til for at gøre totrinsbekræftelse obligatorisk for adgang til dine applikationer. Hvis det er slået fra, kan brugerne selv vælge, om de vil slå MFA til.',
  require_mfa_optional:
    'Valgfri MFA: lad brugerne selv vælge at slå MFA til for at sikre deres konto',
  require_mfa_adaptive:
    'Adaptiv MFA: bed kun om MFA, når et login virker risikabelt (f.eks. nyt land eller lang inaktivitet)',
  require_mfa_mandatory: 'Obligatorisk MFA: alle brugere skal gennemføre MFA ved hvert login',
  set_up_prompt: 'Opfordring til at opsætte MFA',
  no_prompt: 'Bed ikke brugerne om at opsætte MFA',
  prompt_at_sign_in_and_sign_up:
    'Bed brugerne om at opsætte MFA ved registrering (kan springes over, vises én gang)',
  prompt_only_at_sign_in:
    'Bed brugerne om at opsætte MFA ved næste login efter registrering (kan springes over, vises én gang)',
  prompt_at_sign_in_and_sign_up_mandatory:
    'Bed brugerne om at opsætte MFA ved registrering (kan ikke springes over)',
  prompt_only_at_sign_in_mandatory:
    'Bed brugerne om at opsætte MFA ved næste login efter registrering (kan ikke springes over)',
  set_up_organization_required_mfa_prompt:
    'Opfordring til at opsætte MFA, efter at en organisation har slået MFA til',
  prompt_at_sign_in_non_skippable:
    'Bed brugerne om at opsætte MFA ved næste login (kan ikke springes over)',
  email_primary_method_tip:
    'Bekræftelseskode via e-mail er allerede din primære loginmetode. Af sikkerhedshensyn kan den ikke genbruges til MFA.',
  phone_primary_method_tip:
    'Bekræftelseskode via sms er allerede din primære loginmetode. Af sikkerhedshensyn kan den ikke genbruges til MFA.',
  no_email_connector_warning:
    'Der er endnu ikke opsat en e-mailconnector. Indtil konfigurationen er færdig, kan brugerne ikke bruge bekræftelseskoder via e-mail til MFA. <a>{{link}}</a> under "Connectorer".',
  no_sms_connector_warning:
    'Der er endnu ikke opsat en sms-connector. Indtil konfigurationen er færdig, kan brugerne ikke bruge bekræftelseskoder via sms til MFA. <a>{{link}}</a> under "Connectorer".',
  no_email_connector_error:
    'MFA med bekræftelseskode via e-mail kan ikke slås til uden en e-mailconnector. Konfigurér først en e-mailconnector.',
  no_sms_connector_error:
    'MFA med bekræftelseskode via sms kan ikke slås til uden en sms-connector. Konfigurér først en sms-connector.',
  setup_link: 'Opsæt',
  trusted_device: {
    title: 'Betroede enheder',
    description:
      'Lad betroede browsere automatisk gennemføre MFA-verificering, når det aktuelle MFA-flow kræver det.',
    enable_title: 'Slå betroede enheder til',
    enable_description:
      'Lad brugerne stole på denne browser, efter at de har gennemført en godkendt MFA-faktor.',
    duration_title: 'Tillidsperiode (dage)',
    duration_error: 'Indtast et heltal mellem {{min}} og {{max}}.',
    duration_note: 'Ændringer af tillidsperioden gælder kun for enheder, der betros bagefter.',
    organization_allow_title: 'Tillad betroede enheder',
    organization_allow_tip:
      'En organisation kan kun begrænse tenantens politik for betroede enheder; den kan ikke slå funktionen til, når tenantens politik er slået fra.',
    organization_allow_description:
      'Tillad verificering via betroede enheder for medlemmer af denne organisation.',
    organization_global_disabled:
      'Slå betroede enheder til i tenantens MFA-indstillinger, før du tillader dem for denne organisation.',
    management_description:
      'Administrér browsere, som denne bruger har betroet efter MFA. Hvis du fjerner én, kræves MFA igen i den browser ved næste login.',
    management_hint: 'Den seneste placering er kun til orientering.',
    management_empty: 'Denne bruger har ingen aktive betroede enheder.',
    management_deletion_confirmation:
      'Fjern {{name}}? Denne browser kræver MFA igen ved næste login.',
    management_removed: 'Den betroede enhed er fjernet.',
  },
};

export default Object.freeze(mfa);
