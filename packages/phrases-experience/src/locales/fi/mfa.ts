/* GetCertus addition (MPL-2.0, see GETCERTUS.md): sign-in experience phrases. */
const mfa = {
  totp: 'Todennussovelluksen kertakäyttökoodi',
  webauthn: 'Pääsyavain',
  backup_code: 'Varakoodi',
  email_verification_code: 'Vahvistuskoodi sähköpostiin',
  phone_verification_code: 'Vahvistuskoodi tekstiviestillä',
  link_totp_description: 'Esim. Google Authenticator',
  link_webauthn_description: 'Liitä laitteesi tai USB-avain',
  link_backup_code_description: 'Luo varakoodi',
  link_email_verification_code_description: 'Liitä sähköpostiosoitteesi',
  link_email_2fa_description: 'Liitä sähköpostiosoitteesi kaksivaiheista vahvistusta varten',
  link_phone_verification_code_description: 'Liitä puhelinnumerosi',
  link_phone_2fa_description: 'Liitä puhelinnumerosi kaksivaiheista vahvistusta varten',
  verify_totp_description: 'Syötä sovelluksen kertakäyttökoodi',
  verify_webauthn_description: 'Vahvista laitteesi tai USB-avain',
  verify_backup_code_description: 'Liitä tallentamasi varakoodi',
  verify_email_verification_code_description: 'Syötä sähköpostiisi lähetetty koodi',
  verify_phone_verification_code_description: 'Syötä puhelimeesi lähetetty koodi',
  send_to_email: 'Lähetä osoitteeseen {{identifier}}',
  send_to_phone: 'Lähetä numeroon {{identifier}}',
  onboarding: 'Ota kaksivaiheinen vahvistus käyttöön',
  onboarding_description:
    'Suojaa tilisi kaksivaiheisella vahvistuksella. Valitse yksi tai useampi tapa: pääsyavain, todennussovellus (kertakäyttökoodi), vahvistuskoodi tekstiviestillä tai varakoodit.',
  enable_mfa: 'Ota kaksivaiheinen vahvistus käyttöön',
  add_mfa_factors: 'Lisää kaksivaiheinen vahvistus',
  add_mfa_description:
    'Kaksivaiheinen vahvistus on käytössä. Valitse toinen vahvistustapa turvallista kirjautumista varten.',
  add_another_mfa_factor: 'Lisää toinen kaksivaiheinen vahvistus',
  add_another_mfa_description: 'Valitse toinen tapa vahvistaa henkilöllisyytesi kirjautuessa.',
  verify_mfa_factors: 'Kaksivaiheinen vahvistus',
  verify_mfa_description:
    'Tällä tilillä on kaksivaiheinen vahvistus käytössä. Valitse toinen tapa vahvistaa henkilöllisyytesi.',
  add_authenticator_app: 'Lisää todennussovellus',
  replace_authenticator_app: 'Vaihda todennussovellus',
  step: 'Vaihe {{step, number}}: {{content}}',
  scan_qr_code: 'Skannaa tämä QR-koodi',
  scan_qr_code_description:
    'Skannaa seuraava QR-koodi todennussovelluksellasi, kuten Google Authenticator, Duo Mobile tai Authy.',
  qr_code_not_available: 'Etkö voi skannata QR-koodia?',
  copy_and_paste_key: 'Kopioi ja liitä avain',
  copy_and_paste_key_description:
    'Kopioi seuraava avain ja liitä se todennussovellukseesi, kuten Google Authenticator, Duo Mobile tai Authy.',
  want_to_scan_qr_code: 'Haluatko skannata QR-koodin?',
  enter_one_time_code: 'Syötä kertakäyttökoodi',
  enter_one_time_code_link_description:
    'Syötä todennussovelluksen luoma 6-numeroinen vahvistuskoodi.',
  enter_one_time_code_description:
    'Tällä tilillä on kaksivaiheinen vahvistus käytössä. Syötä liitetyssä todennussovelluksessa näkyvä kertakäyttökoodi.',
  enter_email_verification_code: 'Syötä sähköpostin vahvistuskoodi',
  enter_email_verification_code_description:
    'Tällä tilillä on kaksivaiheinen vahvistus käytössä. Syötä osoitteeseen {{identifier}} lähetetty vahvistuskoodi.',
  enter_phone_verification_code: 'Syötä tekstiviestin vahvistuskoodi',
  enter_phone_verification_code_description:
    'Tällä tilillä on kaksivaiheinen vahvistus käytössä. Syötä numeroon {{identifier}} lähetetty vahvistuskoodi.',
  link_another_mfa_factor: 'Vaihda toiseen tapaan',
  save_backup_code: 'Tallenna varakoodisi',
  save_backup_code_description:
    'Jos kaksivaiheinen vahvistus ei muilla tavoilla onnistu, voit käyttää jotakin näistä varakoodeista päästäksesi tilillesi. Kutakin koodia voi käyttää vain kerran.',
  backup_code_hint: 'Kopioi ne ja tallenna turvalliseen paikkaan.',
  new_backup_codes_generated:
    'Uudet varakoodit ovat korvanneet vanhat koodisi. Tallenna ne turvalliseen paikkaan mahdollisimman pian.',
  enter_a_backup_code: 'Syötä varakoodi',
  enter_backup_code_description:
    'Syötä varakoodi, jonka tallensit ottaessasi kaksivaiheisen vahvistuksen käyttöön.',
  create_a_passkey: 'Luo pääsyavain',
  create_passkey_description:
    'Rekisteröi pääsyavaimesi laitteen biometriikalla, suojausavaimella (esim. YubiKey) tai muulla käytettävissä olevalla tavalla.',
  try_another_verification_method: 'Kokeile toista vahvistustapaa',
  verify_via_passkey: 'Vahvista pääsyavaimella',
  verify_via_passkey_description:
    'Vahvista pääsyavaimella laitteen salasanalla tai biometriikalla, skannaamalla QR-koodin tai USB-suojausavaimella, kuten YubiKey.',
  trust_this_device_title: 'Luota tähän laitteeseen',
  trust_this_device_description:
    'Voit ohittaa MFA-vahvistuksen tällä laitteella tulevilla kirjautumiskerroilla.',
  trust_this_device_one: 'Luota tähän laitteeseen {{count}} päivän ajan',
  trust_this_device_two: 'Luota tähän laitteeseen {{count}} päivän ajan',
  trust_this_device_few: 'Luota tähän laitteeseen {{count}} päivän ajan',
  trust_this_device_many: 'Luota tähän laitteeseen {{count}} päivän ajan',
  trust_this_device_other: 'Luota tähän laitteeseen {{count}} päivän ajan',
  secret_key_copied: 'Salainen avain kopioitu.',
  backup_code_copied: 'Varakoodi kopioitu.',
  webauthn_not_ready: 'WebAuthn ei ole vielä valmis. Yritä myöhemmin uudelleen.',
  webauthn_not_supported: 'Tämä selain ei tue WebAuthnia.',
  webauthn_failed_to_create: 'Luominen epäonnistui. Yritä uudelleen.',
  webauthn_failed_to_verify: 'Vahvistus epäonnistui. Yritä uudelleen.',
};

export default Object.freeze(mfa);
