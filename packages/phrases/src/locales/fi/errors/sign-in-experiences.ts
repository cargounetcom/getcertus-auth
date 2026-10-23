/* GetCertus addition (MPL-2.0, see GETCERTUS.md): admin console phrases. */
const sign_in_experiences = {
  empty_content_url_of_terms_of_use:
    '"Käyttöehtojen" sisällön URL-osoite puuttuu. Lisää sisällön URL-osoite, jos "Käyttöehdot" ovat käytössä.',
  empty_social_connectors:
    'Ei sosiaalisia liittimiä. Lisää käytössä olevia sosiaalisia liittimiä, kun sosiaalinen kirjautuminen on käytössä.',
  enabled_connector_not_found: 'Käytössä olevaa {{type}}-liitintä ei löytynyt.',
  not_one_and_only_one_primary_sign_in_method:
    'Ensisijaisia kirjautumistapoja on oltava täsmälleen yksi. Tarkista syöttämäsi tiedot.',
  username_requires_password:
    'Käyttäjänimi-rekisteröintitunnisteelle on otettava käyttöön salasanan asettaminen.',
  passwordless_requires_verify:
    'Sähköposti- tai puhelin-rekisteröintitunnisteelle on otettava käyttöön vahvistus.',
  miss_sign_up_identifier_in_sign_in: 'Kirjautumistapojen on sisällettävä rekisteröitymistunniste.',
  password_sign_in_must_be_enabled:
    'Salasanalla kirjautumisen on oltava käytössä, kun salasanan asettaminen on pakollista rekisteröitymisessä.',
  code_sign_in_must_be_enabled:
    'Vahvistuskoodilla kirjautumisen on oltava käytössä, kun salasanan asettaminen ei ole pakollista rekisteröitymisessä.',
  unsupported_default_language: 'Kieltä {{language}} ei tueta tällä hetkellä.',
  at_least_one_authentication_factor: 'Valitse vähintään yksi tunnistautumistekijä.',
  backup_code_cannot_be_enabled_alone: 'Varakoodia ei voi ottaa käyttöön yksinään.',
  duplicated_mfa_factors: 'Päällekkäisiä MFA-tekijöitä.',
  email_verification_code_cannot_be_used_for_mfa:
    'Sähköpostin vahvistuskoodia ei voi käyttää MFA:ssa, kun sähköpostivahvistus on käytössä kirjautumisessa.',
  phone_verification_code_cannot_be_used_for_mfa:
    'Tekstiviestin vahvistuskoodia ei voi käyttää MFA:ssa, kun tekstiviestivahvistus on käytössä kirjautumisessa.',
  email_verification_code_cannot_be_used_for_sign_in:
    'Sähköpostin vahvistuskoodia ei voi käyttää kirjautumiseen, kun se on käytössä MFA:ssa.',
  phone_verification_code_cannot_be_used_for_sign_in:
    'Tekstiviestin vahvistuskoodia ei voi käyttää kirjautumiseen, kun se on käytössä MFA:ssa.',
  adaptive_mfa_requires_mfa: 'MFA:n on oltava käytössä ennen mukautuvan MFA:n käyttöönottoa.',
  adaptive_mfa_requires_non_skippable_policy:
    'Mukautuva MFA edellyttää MFA-kehotekäytäntöä, jota ei voi ohittaa. Käytä PromptOnlyAtSignInMandatory- tai PromptAtSignInAndSignUpMandatory-käytäntöä.',
  non_adaptive_mfa_requires_skippable_policy:
    'Kun mukautuva MFA ei ole käytössä, MFA-kehotekäytännön on oltava ohitettavissa. Älä käytä PromptOnlyAtSignInMandatory- tai PromptAtSignInAndSignUpMandatory-käytäntöä.',
  duplicated_sign_up_identifiers: 'Havaittiin päällekkäisiä rekisteröitymistunnisteita.',
  missing_sign_up_identifiers: 'Ensisijainen rekisteröitymistunniste ei voi olla tyhjä.',
  invalid_custom_email_blocklist_format:
    'Virheellisiä kohteita mukautetussa sähköpostien estolistassa: {{items, list(type:conjunction)}}. Jokaisen kohteen on oltava kelvollinen sähköpostiosoite tai sähköpostin verkkotunnus, esim. foo@example.com tai @example.com.',
  forgot_password_method_requires_connector:
    'Unohtuneen salasanan menetelmä edellyttää määritettyä {{method}}-liitintä.',
  password_expiration_requires_forgot_password:
    'Salasanan vanhentuminen edellyttää vähintään yhtä unohtuneen salasanan menetelmää, jolla on kelvollinen liitin.',
  password_expiration_not_enabled:
    'Salasanan vanhentumiskäytäntö ei ole käytössä. Ota se käyttöön kirjautumiskokemuksen asetuksissa ennen salasanojen vanhentamista.',
  password_expiration_invalid_period_days:
    'Voimassaolon päivien on oltava positiivinen kokonaisluku, kun salasanan vanhentuminen on käytössä.',
  username_policy_case_conflicts_exist:
    'Kirjainkoosta riippumattomiin käyttäjänimiin ei voi siirtyä, kun on käyttäjänimiä, jotka eroavat vain kirjainkoon osalta. Ratkaise ristiriidat ja yritä uudelleen.',
};

export default Object.freeze(sign_in_experiences);
