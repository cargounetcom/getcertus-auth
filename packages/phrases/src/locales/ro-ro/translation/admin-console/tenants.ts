/* GetCertus addition (MPL-2.0, see GETCERTUS.md): admin console phrases. */
const tenants = {
  title: 'Setări',
  description: 'Gestionează eficient setările tenantului și personalizează-ți domeniul.',
  oss_description:
    'Modifică aici setările contului și gestionează-ți informațiile personale pentru a-ți păstra contul în siguranță.',
  tabs: {
    settings: 'Setări',
    members: 'Membri',
    domains: 'Domenii',
    oidc_configs: 'Configurații OIDC',
    subscription: 'Plan și facturare',
    billing_history: 'Istoric facturare',
    license: 'Licență',
  },
  license: {
    purchase_title: 'PLANURI SELF-HOSTED',
    purchase_description:
      'Planurile self-hosted Pro și Enterprise deblochează funcții plătite pe propria instanță, cum ar fi ascunderea brandingului GetCertus, propria interfață, colaborarea în Console și aplicații SAML nelimitate. Cumpără un plan pentru a primi cheia de licență.',
    purchase_button: 'Vezi planurile self-hosted',
    install_title: 'INSTALEAZĂ LICENȚA',
    install_description:
      'Lipește cheia de licență primită după achiziționarea unui plan self-hosted.',
    install_button: 'Instalează licența',
    key_field: 'Cheie de licență',
    key_field_description:
      'Cheia este verificată pe instanța ta și nu o părăsește niciodată. Contactează GetCertus pentru o cheie nouă dacă cea pe care o ai a expirat.',
    key_placeholder: 'Lipește aici cheia de licență',
    installed_toast: 'Licența a fost instalată.',
    details_title: 'LICENȚĂ',
    details_description: 'Licența instalată pe această instanță și ce oferă.',
    plan_field: 'Plan',
    environment_field: 'Mediu',
    environment_production: 'Producție',
    environment_non_production: 'Non-producție',
    expires_at_field: 'Expiră la',
    installed_at_field: 'Instalată la',
    last_refreshed_at_field: 'Reînnoită ultima dată la',
    grace_ends_at_field: 'Perioada de grație se încheie la',
    refresh_expired_description:
      'Cheia de licență a expirat la {{expiresAt}}. Funcțiile licențiate rămân disponibile până la {{graceEndsAt}}, cât timp GetCertus încearcă să o reînnoiască.',
    refresh_refused_description:
      'Reînnoirea licenței a fost refuzată deoarece licența este {{reason}}. Funcțiile licențiate rămân disponibile până la {{graceEndsAt}}.',
    refusal_reason_canceled: 'anulată',
    refusal_reason_unpaid: 'neplătită',
    refusal_reason_expired: 'expirată',
    refusal_reason_revoked: 'revocată',
    refusal_reason_unknown: 'indisponibilă',
    grace_expired_description:
      'Perioada de grație a licenței s-a încheiat la {{graceEndsAt}}. Această instalare a revenit la setările implicite OSS. Contactează GetCertus pentru o cheie de licență nouă și instaleaz-o din nou.',
    get_fresh_key_button: 'Obține o cheie de licență nouă',
    replace_button: 'Înlocuiește licența',
  },
  members: {
    card_title: 'Gestionează tenanții mai sigur cu GetCertus Cloud',
    card_description:
      'Adaugă administratori sau colaboratori în tenant fără a partaja un singur cont de administrator.',
    card_action: 'Descoperă GetCertus Cloud',
    self_hosted_card_title: 'Gestionează tenanții mai sigur cu planurile self-hosted',
    self_hosted_card_description:
      'Adaugă administratori sau colaboratori în tenant fără a partaja un singur cont de administrator.',
    self_hosted_card_action: 'Descoperă planurile self-hosted',
  },
  settings: {
    title: 'SETĂRI',
    description:
      'Setează numele tenantului și vezi regiunea în care sunt găzduite datele și tipul tenantului.',
    tenant_id: 'ID tenant',
    tenant_name: 'Nume tenant',
    tenant_instance: 'Alege instanța',
    tenant_instance_description:
      'Alege unde va fi găzduit tenantul. Alege GetCertus Cloud pentru infrastructură publică partajată sau o instanță privată pentru resurse dedicate.',
    tenant_region: 'Regiune de date',
    tenant_region_description:
      'Locația fizică în care sunt găzduite resursele tenantului (utilizatori, aplicații etc.). Nu poate fi modificată după creare.',
    tenant_region_tip: 'Resursele tenantului sunt găzduite în {{region}}. <a>Află mai multe</a>',
    environment_tag_development: 'Dev',
    environment_tag_production: 'Prod',
    tenant_type: 'Tip tenant',
    development_description:
      'Doar pentru testare, nu pentru producție. Nu este necesar un abonament. Are toate funcțiile Pro, dar cu limitări precum un banner la autentificare.',
    production_description:
      'Destinat aplicațiilor folosite de utilizatori finali; poate necesita un abonament plătit.',
    tenant_info_saved: 'Informațiile tenantului au fost salvate.',
    tenant_mfa: 'Autentificare multifactor',
    tenant_mfa_description:
      'Cere membrilor să configureze autentificarea multifactor pentru a accesa acest tenant.',
    oss_description: 'Gestionează modul în care membrii accesează Console pe această instanță.',
    tenant_mfa_confirm_title: 'Impui MFA pentru toți membrii?',
    tenant_mfa_confirm_description:
      'Acești membri nu au configurat încă MFA. Rămân autentificați și li se va cere să îl configureze la următoarea autentificare:',
    tenant_mfa_confirm_self:
      'Nici tu nu ai configurat MFA. Configurează-l în setările contului înainte de următoarea autentificare.',
    tenant_mfa_confirm_button: 'Impune MFA',
    tenant_mfa_setup_required:
      'Acest tenant necesită autentificare multifactor. Configureaz-o acum sau ți se va cere la următoarea autentificare.',
    tenant_mfa_setup_action: 'Configurează MFA',
    enterprise_sso: 'Enterprise SSO',
    enterprise_sso_description:
      'Disponibil în planurile plătite. Contactează-ne pentru a activa enterprise SSO, astfel încât toți membrii să se poată autentifica în GetCertus Cloud Console prin furnizorul de identitate al organizației.',
  },
  full_env_tag: {
    development: 'Dezvoltare',
    production: 'Producție',
  },
  deletion_card: {
    title: 'ȘTERGERE',
    tenant_deletion: 'Șterge tenantul',
    tenant_deletion_description:
      'Ștergerea tenantului elimină definitiv toate datele de utilizator și configurațiile asociate. Procedează cu atenție.',
    tenant_deletion_button: 'Șterge tenantul',
  },
  leave_tenant_card: {
    title: 'PĂRĂSIRE',
    leave_tenant: 'Părăsește tenantul',
    leave_tenant_description:
      'Toate resursele din tenant rămân, dar nu vei mai avea acces la acest tenant.',
    last_admin_note:
      'Pentru a părăsi acest tenant, asigură-te că cel puțin un alt membru are rolul de administrator.',
  },
  create_modal: {
    title: 'Creează tenant',
    subtitle: 'Creează un tenant nou cu resurse și utilizatori izolați.',
    tenant_id: 'ID tenant',
    tenant_usage_purpose: 'Pentru ce vrei să folosești acest tenant?',
    development_description:
      'Doar pentru testare, nu pentru producție. Nu este necesar un abonament.',
    development_description_for_private_regions: 'Doar pentru testare, nu pentru producție.',
    development_hint: 'Are toate funcțiile Pro, dar cu limitări precum un banner la autentificare.',
    production_description: 'Pentru utilizatori finali; poate necesita un abonament plătit.',
    available_plan: 'Plan disponibil:',
    create_button: 'Creează tenant',
    tenant_name_placeholder: 'Tenantul meu',
    tenant_created: 'Tenantul a fost creat.',
    invitation_failed:
      'Unele invitații nu au putut fi trimise. Încearcă din nou mai târziu din Setări -> Membri.',
    tenant_type_description: 'Nu poate fi modificat după creare.',
    tenant_id_invalid:
      'ID-ul tenantului poate conține doar litere mici, cifre și cratime și nu poate depăși {{max}} caractere.',
    tenant_id_placeholder: 'ID-ul tenantului tău',
    tenant_id_tip:
      'Personalizează ID-ul tenantului. Dacă lași câmpul gol, GetCertus va genera un ID implicit. ID-ul tenantului nu poate fi modificat după creare.',
  },
  dev_tenant_migration: {
    title: 'Acum poți încerca gratuit funcțiile Pro creând un nou „tenant de dezvoltare”!',
    affect_title: 'Cum te afectează?',
    hint_1:
      'Înlocuim vechile <strong>etichete de mediu</strong> cu două tipuri noi de tenant: <strong>„Dezvoltare”</strong> și <strong>„Producție”</strong>.',
    hint_2:
      'Pentru o tranziție lină și o funcționare neîntreruptă, toți tenanții creați anterior vor trece la tipul <strong>Producție</strong>, împreună cu abonamentul existent.',
    hint_3: 'Nu-ți face griji, toate celelalte setări rămân la fel.',
    about_tenant_type: 'Despre tipul de tenant',
  },
  delete_modal: {
    title: 'Șterge tenantul',
    description_line1:
      'Sigur vrei să ștergi tenantul "<span>{{name}}</span>" cu eticheta de mediu "<span>{{tag}}</span>"? Acțiunea nu poate fi anulată și va duce la ștergerea definitivă a tuturor datelor și informațiilor tenantului.',
    description_line2:
      'Înainte de a șterge tenantul, poate te putem ajuta. <span><a>Contactează-ne prin e-mail</a></span>',
    description_line3:
      'Dacă vrei să continui, introdu numele tenantului "<span>{{name}}</span>" pentru confirmare.',
    delete_button: 'Șterge definitiv',
    cannot_delete_title: 'Tenantul nu poate fi șters',
    cannot_delete_description:
      'Ne pare rău, nu poți șterge acest tenant acum. Asigură-te că ești pe planul gratuit și ai achitat toate facturile restante.',
  },
  leave_tenant_modal: {
    description: 'Sigur vrei să părăsești acest tenant?',
    leave_button: 'Părăsește',
  },
  tenant_landing_page: {
    title: 'Nu ai creat încă un tenant',
    description:
      'Pentru a începe configurarea proiectului cu GetCertus, creează un tenant nou. Dacă vrei să te deconectezi sau să îți ștergi contul, apasă pe butonul avatar din colțul din dreapta sus.',
    create_tenant_button: 'Creează tenant',
  },
  status: {
    mau_exceeded: 'MAU depășit',
    token_exceeded: 'Tokeni depășiți',
    suspended: 'Suspendat',
    overdue: 'Restant',
  },
  tenant_suspended_page: {
    title: 'Tenant suspendat. Contactează-ne pentru a restabili accesul.',
    description_1:
      'Regretăm să te informăm că contul tenantului a fost suspendat temporar din cauza utilizării necorespunzătoare, inclusiv depășirea limitelor MAU, plăți restante sau alte acțiuni neautorizate.',
    description_2:
      'Dacă ai nevoie de clarificări, ai întrebări sau vrei să restabilești funcționalitatea completă și să deblochezi tenanții, contactează-ne imediat.',
  },
  production_tenant_notification: {
    text: 'Ești într-un tenant de dezvoltare pentru testare gratuită. Creează un tenant de producție pentru a lansa.',
    action: 'Creează tenant',
  },
};

export default Object.freeze(tenants);
