/* GetCertus addition (MPL-2.0, see GETCERTUS.md): admin console phrases. */
const mfa = {
  title: 'Autentificare multifactor',
  description:
    'Adaugă autentificarea multifactor pentru a crește securitatea experienței de autentificare.',
  factors: 'Factori',
  multi_factors: 'Factori multipli',
  multi_factors_description:
    'Utilizatorii trebuie să verifice unul dintre factorii activați pentru verificarea în doi pași.',
  totp: 'Aplicație de autentificare',
  otp_description:
    'Conectează Google Authenticator sau o aplicație similară pentru a verifica parole unice.',
  webauthn: 'Passkey-uri',
  webauthn_description:
    'Verificare printr-o metodă acceptată de browser: biometrie, scanare cu telefonul, cheie de securitate etc.',
  webauthn_domain_tip:
    'WebAuthn leagă cheile publice de un anumit domeniu. Dacă modifici domeniul serviciului, utilizatorii nu se vor mai putea autentifica cu passkey-urile existente.',
  backup_code: 'Coduri de rezervă',
  backup_code_description:
    'Generează 10 coduri de rezervă de unică folosință după ce utilizatorii configurează o metodă MFA.',
  backup_code_setup_hint:
    'Când utilizatorii nu pot verifica factorii MFA de mai sus, pot folosi opțiunea de rezervă.',
  backup_code_error_hint:
    'Pentru a folosi un cod de rezervă, este nevoie de cel puțin încă o metodă MFA pentru autentificarea reușită.',
  email_verification_code: 'Cod de verificare prin e-mail',
  email_verification_code_description:
    'Conectează o adresă de e-mail pentru a primi și verifica coduri de verificare.',
  phone_verification_code: 'Cod de verificare prin SMS',
  phone_verification_code_description:
    'Conectează un număr de telefon pentru a primi și verifica coduri de verificare prin SMS.',
  policy: 'Politică',
  policy_description: 'Setează politica MFA pentru fluxurile de autentificare și înregistrare.',
  two_step_sign_in_policy: 'Politica de verificare în doi pași la autentificare',
  user_controlled: 'Utilizatorii pot activa sau dezactiva singuri MFA',
  user_controlled_tip:
    'Utilizatorii pot sări peste configurarea MFA la prima autentificare sau înregistrare ori o pot activa/dezactiva din setările contului.',
  mandatory: 'Utilizatorii trebuie să folosească întotdeauna MFA la autentificare',
  mandatory_tip:
    'Utilizatorii trebuie să configureze MFA la prima autentificare sau înregistrare și să îl folosească la toate autentificările viitoare.',
  require_mfa: 'Impune MFA',
  require_mfa_label:
    'Activează această opțiune pentru a face obligatorie verificarea în doi pași pentru accesul la aplicații. Dacă este dezactivată, utilizatorii pot decide singuri dacă activează MFA.',
  require_mfa_optional:
    'MFA opțional: utilizatorii aleg singuri să activeze MFA pentru securitatea contului',
  require_mfa_adaptive:
    'MFA adaptiv: cere MFA doar când o autentificare pare riscantă (de ex., țară nouă / inactivitate îndelungată)',
  require_mfa_mandatory:
    'MFA obligatoriu: toți utilizatorii trebuie să finalizeze MFA la fiecare autentificare',
  set_up_prompt: 'Solicitare de configurare MFA',
  no_prompt: 'Nu le cere utilizatorilor să configureze MFA',
  prompt_at_sign_in_and_sign_up:
    'Cere utilizatorilor să configureze MFA la înregistrare (se poate sări, solicitare unică)',
  prompt_only_at_sign_in:
    'Cere utilizatorilor să configureze MFA la următoarea autentificare după înregistrare (se poate sări, solicitare unică)',
  prompt_at_sign_in_and_sign_up_mandatory:
    'Cere utilizatorilor să configureze MFA la înregistrare (nu se poate sări)',
  prompt_only_at_sign_in_mandatory:
    'Cere utilizatorilor să configureze MFA la următoarea autentificare după înregistrare (nu se poate sări)',
  set_up_organization_required_mfa_prompt:
    'Solicitare de configurare MFA după ce organizația activează MFA',
  prompt_at_sign_in_non_skippable:
    'Cere utilizatorilor să configureze MFA la următoarea autentificare (nu se poate sări)',
  email_primary_method_tip:
    'Codul de verificare prin e-mail este deja metoda principală de autentificare. Pentru securitate, nu poate fi refolosit pentru MFA.',
  phone_primary_method_tip:
    'Codul de verificare prin SMS este deja metoda principală de autentificare. Pentru securitate, nu poate fi refolosit pentru MFA.',
  no_email_connector_warning:
    'Nu există încă un conector de e-mail configurat. Până la finalizarea configurării, utilizatorii nu vor putea folosi coduri de verificare prin e-mail pentru MFA. <a>{{link}}</a> în "Conectori".',
  no_sms_connector_warning:
    'Nu există încă un conector SMS configurat. Până la finalizarea configurării, utilizatorii nu vor putea folosi coduri de verificare prin SMS pentru MFA. <a>{{link}}</a> în "Conectori".',
  no_email_connector_error:
    'MFA cu cod de verificare prin e-mail nu poate fi activat fără un conector de e-mail. Configurează mai întâi un conector de e-mail.',
  no_sms_connector_error:
    'MFA cu cod de verificare prin SMS nu poate fi activat fără un conector SMS. Configurează mai întâi un conector SMS.',
  setup_link: 'Configurează',
  trusted_device: {
    title: 'Dispozitive de încredere',
    description:
      'Permite browserelor de încredere să finalizeze automat verificarea MFA atunci când fluxul MFA curent o cere.',
    enable_title: 'Activează dispozitivele de încredere',
    enable_description:
      'Permite utilizatorilor să marcheze acest browser ca fiind de încredere după finalizarea unui factor MFA eligibil.',
    duration_title: 'Durata încrederii (zile)',
    duration_error: 'Introdu un număr întreg între {{min}} și {{max}}.',
    duration_note:
      'Modificările duratei încrederii se aplică doar dispozitivelor marcate ulterior ca fiind de încredere.',
    organization_allow_title: 'Permite dispozitivele de încredere',
    organization_allow_tip:
      'O organizație poate doar restricționa politica tenantului privind dispozitivele de încredere; nu poate activa funcția dacă politica tenantului este dezactivată.',
    organization_allow_description:
      'Permite verificarea prin dispozitive de încredere pentru membrii acestei organizații.',
    organization_global_disabled:
      'Activează dispozitivele de încredere în setările MFA ale tenantului înainte de a le permite pentru această organizație.',
    management_description:
      'Gestionează browserele pe care acest utilizator le-a marcat ca fiind de încredere după MFA. Dacă elimini unul, la următoarea autentificare în acel browser se va cere din nou MFA.',
    management_hint: 'Ultima locație este doar informativă.',
    management_empty: 'Acest utilizator nu are dispozitive de încredere active.',
    management_deletion_confirmation:
      'Elimini {{name}}? Acest browser va cere din nou MFA la următoarea autentificare.',
    management_removed: 'Dispozitivul de încredere a fost eliminat.',
  },
};

export default Object.freeze(mfa);
