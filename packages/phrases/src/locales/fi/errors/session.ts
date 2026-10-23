/* GetCertus addition (MPL-2.0, see GETCERTUS.md): admin console phrases. */
const session = {
  not_found: 'Istuntoa ei löytynyt. Palaa takaisin ja kirjaudu uudelleen.',
  invalid_credentials: 'Väärä tili tai salasana. Tarkista syöttämäsi tiedot.',
  invalid_sign_in_method: 'Nykyinen kirjautumistapa ei ole käytettävissä.',
  invalid_connector_id: 'Käytettävissä olevaa liitintä tunnuksella {{connectorId}} ei löytynyt.',
  insufficient_info: 'Kirjautumistiedot eivät riitä.',
  connector_id_mismatch: 'connectorId ei vastaa istuntotietuetta.',
  connector_session_not_found: 'Liitinistuntoa ei löytynyt. Palaa takaisin ja kirjaudu uudelleen.',
  verification_session_not_found:
    'Vahvistus epäonnistui. Aloita vahvistus alusta ja yritä uudelleen.',
  verification_expired:
    'Yhteys aikakatkaistiin. Vahvista uudelleen tilisi turvallisuuden varmistamiseksi.',
  verification_blocked_too_many_attempts:
    'Liian monta yritystä lyhyessä ajassa. Yritä uudelleen {{relativeTime}}.',
  unauthorized: 'Kirjaudu ensin sisään.',
  unsupported_prompt_name: 'Kehotteen nimeä ei tueta.',
  forgot_password_not_enabled: 'Unohtuneen salasanan palautus ei ole käytössä.',
  verification_failed: 'Vahvistus epäonnistui. Aloita vahvistus alusta ja yritä uudelleen.',
  connector_validation_session_not_found:
    'Tunnuksen vahvistamiseen tarvittavaa liitinistuntoa ei löytynyt.',
  csrf_token_mismatch: 'CSRF-tunnus ei täsmää.',
  identifier_not_found: 'Käyttäjätunnistetta ei löytynyt. Palaa takaisin ja kirjaudu uudelleen.',
  interaction_not_found:
    'Vuorovaikutusistuntoa ei löytynyt. Palaa takaisin ja aloita istunto uudelleen.',
  invalid_interaction_type:
    'Toimintoa ei tueta nykyisessä vuorovaikutuksessa. Aloita uusi istunto.',
  not_supported_for_forgot_password: 'Toimintoa ei tueta unohtuneen salasanan palautuksessa.',
  identity_conflict:
    'Identiteetit eivät täsmää. Aloita uusi istunto jatkaaksesi toisella identiteetillä.',
  identifier_not_verified:
    'Annettua tunnistetta {{identifier}} ei ole vahvistettu. Luo tunnisteelle vahvistustietue ja suorita vahvistus.',
  mfa: {
    require_mfa_verification: 'Kirjautuminen edellyttää MFA-vahvistusta.',
    mfa_sign_in_only: 'MFA on käytettävissä vain kirjautumisessa.',
    pending_info_not_found: 'Odottavia MFA-tietoja ei löytynyt; aloita MFA ensin.',
    invalid_totp_code: 'Virheellinen TOTP-koodi.',
    webauthn_verification_failed: 'WebAuthn-vahvistus epäonnistui.',
    webauthn_verification_not_found: 'WebAuthn-vahvistusta ei löytynyt.',
    bind_mfa_existed: 'MFA on jo olemassa.',
    backup_code_can_not_be_alone: 'Varakoodi ei voi olla ainoa MFA.',
    backup_code_required: 'Varakoodi vaaditaan.',
    invalid_backup_code: 'Virheellinen varakoodi.',
    mfa_policy_not_user_controlled: 'MFA-käytäntö ei ole käyttäjän hallinnassa.',
    mfa_factor_not_enabled: 'MFA-tekijä ei ole käytössä.',
    suggest_additional_mfa:
      'Harkitse toisen MFA-menetelmän lisäämistä vahvempaa suojausta varten. Voit ohittaa tämän vaiheen ja jatkaa.',
  },
  trusted_device_suggest_opt_in: 'Valitse, luotatko tähän laitteeseen.',
  step_up: {
    invalid_interaction_event: 'Step-up-tunnistautuminen on käytettävissä vain kirjautumisessa.',
    subject_not_found:
      'Step-up-tunnistautumista varten ei löytynyt tunnistautunutta istuntoa. Kirjaudu uudelleen.',
    forbidden_route: 'Tämä reitti ei ole sallittu step-up-tunnistautumisen aikana.',
    forbidden_identifier:
      'Tunniste ei ole sallittu step-up-tunnistautumisen aikana. Yritä uudelleen ilman tunnistekenttää.',
    acr_not_satisfied:
      'Suoritettu vahvistus ei täytä pyydettyä tunnistautumiskontekstia. Vahvista toisella menetelmällä.',
    require_verification:
      'Pyydetyn tunnistautumiskontekstin saavuttaminen edellyttää vahvistusta jollakin olemassa olevalla menetelmälläsi.',
  },
  passkey_sign_in: {
    pending_info_not_found:
      'Odottavia pääsyavainkirjautumisen tietoja ei löytynyt. Aloita kirjautuminen uudelleen.',
    conflict_rp_id: 'Relying Party -tunnus ei täsmää. Käytä oikeaa asiakasta kirjautumiseen.',
    sso_users_not_allowed: 'Pääsyavainkirjautuminen ei ole käytettävissä SSO-käyttäjille.',
  },
  password_expiration: {
    reset_not_allowed:
      'Salasanan vaihto on sallittu vain, kun salasana on vanhentunut nykyisessä kirjautumisistunnossa.',
  },
  sso_enabled: 'Kertakirjautuminen on käytössä tälle sähköpostiosoitteelle. Kirjaudu SSO:lla.',
  captcha_required: 'Captcha vaaditaan.',
  captcha_failed: 'Captcha-vahvistus epäonnistui.',
  email_blocklist: {
    disposable_email_validation_failed: 'Sähköpostiosoitteen tarkistus epäonnistui.',
    invalid_email: 'Virheellinen sähköpostiosoite.',
    email_subaddressing_not_allowed: 'Sähköpostin aliosoitteet eivät ole sallittuja.',
    email_not_allowed:
      'Sähköpostiosoitteen "{{email}}" käyttöä on rajoitettu. Valitse toinen osoite.',
  },
  google_one_tap: {
    cookie_mismatch: 'Google One Tap -eväste ei täsmää.',
    invalid_id_token: 'Virheellinen Google ID -token.',
    unverified_email: 'Vahvistamaton sähköpostiosoite.',
  },
};

export default Object.freeze(session);
