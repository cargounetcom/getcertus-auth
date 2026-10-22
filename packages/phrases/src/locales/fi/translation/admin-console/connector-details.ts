/* GetCertus addition (MPL-2.0, see GETCERTUS.md): admin console phrases. */
const connector_details = {
  page_title: 'Liittimen tiedot',
  back_to_connectors: 'Takaisin liittimiin',
  check_readme: 'Lue README',
  settings: 'Yleiset asetukset',
  settings_description:
    'Integroi kolmansien osapuolten palvelut nopeaa sosiaalista kirjautumista ja sosiaalisten tilien linkitystä varten',
  setting_description_with_token_storage_supported:
    'Integroi kolmansien osapuolten palvelut nopeaa sosiaalista kirjautumista, sosiaalisten tilien linkitystä ja API-käyttöä varten.',
  email_connector_settings_description:
    'Integroi sähköpostipalvelusi, jotta loppukäyttäjät voivat rekisteröityä ja kirjautua salasanatta sähköpostilla.',
  parameter_configuration: 'Parametrien määritys',
  test_connection: 'Testaa',
  save_error_empty_config: 'Anna määritys',
  send: 'Lähetä',
  send_error_invalid_format: 'Virheellinen syöte',
  edit_config_label: 'Anna JSON tähän',
  test_email_sender: 'Testaa sähköpostiliitintä',
  test_sms_sender: 'Testaa tekstiviestiliitintä',
  test_email_placeholder: 'john.doe@example.com',
  test_sms_placeholder: '+1 555-123-4567',
  test_message_sent: 'Testiviesti lähetetty',
  test_sender_description:
    'GetCertus käyttää testaukseen "Generic"-mallia. Saat viestin, jos liitin on määritetty oikein.',
  options_change_email: 'Vaihda sähköpostiliitin',
  options_change_sms: 'Vaihda tekstiviestiliitin',
  connector_deleted: 'Liitin on poistettu',
  type_email: 'Sähköpostiliitin',
  type_sms: 'Tekstiviestiliitin',
  type_social: 'Sosiaalinen liitin',
  in_used_social_deletion_description:
    'Liitin on käytössä kirjautumiskokemuksessasi. Jos poistat sen, kirjautuminen palvelulla <name/> poistetaan kirjautumiskokemuksen asetuksista. Sinun on määritettävä se uudelleen, jos haluat lisätä sen takaisin.',
  in_used_passwordless_deletion_description:
    'Tämä {{name}} on käytössä kirjautumiskokemuksessasi. Jos poistat sen, kirjautuminen ei toimi oikein ennen kuin ristiriita on ratkaistu. Sinun on määritettävä se uudelleen, jos haluat lisätä sen takaisin.',
  deletion_description:
    'Olet poistamassa tätä liitintä. Toimintoa ei voi kumota, ja sinun on määritettävä liitin uudelleen, jos haluat lisätä sen takaisin.',
  logto_email: {
    total_email_sent: 'Lähetettyjä sähköposteja yhteensä: {{value, number}}',
    total_email_sent_tip:
      'GetCertus käyttää SendGridiä turvalliseen ja vakaaseen sisäänrakennettuun sähköpostiin. Käyttö on täysin maksutonta. <a>Lue lisää</a>',
    hosted_email_usage: {
      daily: 'Päivittäin <value>{{usage, number}}</value> / {{limit, number}}',
      daily_unlimited: 'Päivittäin <value>{{usage, number}}</value>',
      monthly: 'Kuukausittain <value>{{usage, number}}</value> / {{limit, number}}',
      monthly_unlimited: 'Kuukausittain <value>{{usage, number}}</value>',
      tip: 'Ilmais- ja kehityspaketeissa sisäänrakennetulla sähköpostipalvelulla on päivittäiset ja kuukausittaiset rajat.',
      banner: {
        approaching:
          'Lähestyt GetCertuksen sisäänrakennetun sähköpostipalvelun lähetysrajaa. <provider>Yhdistä oma sähköpostipalvelusi</provider> tai <upgrade>päivitä pakettisi</upgrade> jatkaaksesi sisäänrakennetun sähköpostipalvelun käyttöä.',
        reached:
          'Olet saavuttanut GetCertuksen sisäänrakennetun sähköpostipalvelun lähetysrajan, mikä voi keskeyttää kirjautumissähköpostit. <provider>Yhdistä oma sähköpostipalvelusi</provider> tai <upgrade>päivitä pakettisi</upgrade> jatkaaksesi sisäänrakennetun sähköpostipalvelun käyttöä.',
      },
    },
    email_template_title: 'Sähköpostimalli',
    template_description:
      'Sisäänrakennettu sähköposti käyttää oletusmalleja vahvistusviestien sujuvaan toimitukseen. Määrityksiä ei tarvita, ja voit mukauttaa brändin perustietoja.',
    template_description_link_text: 'Näytä mallit',
    description_action_text: 'Näytä mallit',
    from_email_field: 'Lähettäjän osoite',
    sender_name_field: 'Lähettäjän nimi',
    sender_name_tip:
      'Mukauta sähköpostien lähettäjän nimeä. Jos kenttä jätetään tyhjäksi, oletusnimenä käytetään "Verification".',
    sender_name_placeholder: 'Lähettäjän nimi',
    company_information_field: 'Yrityksen tiedot',
    company_information_description:
      'Näytä yrityksen nimi, osoite tai postinumero sähköpostien alaosassa luotettavuuden lisäämiseksi.',
    company_information_placeholder: 'Yrityksesi perustiedot',
    email_logo_field: 'Sähköpostin logo',
    email_logo_tip:
      'Näytä brändisi logo sähköpostien yläosassa. Käytä samaa kuvaa vaalealle ja tummalle tilalle.',
    urls_not_allowed: 'URL-osoitteet eivät ole sallittuja',
    test_notes: 'GetCertus käyttää testaukseen “Generic”-mallia.',
  },
  google_one_tap: {
    title: 'Google One Tap',
    description: 'Google One Tap on turvallinen ja helppo tapa kirjautua verkkosivustollesi.',
    enable_google_one_tap: 'Ota Google One Tap käyttöön',
    enable_google_one_tap_description:
      'Ota Google One Tap käyttöön kirjautumiskokemuksessasi: laitteellaan jo kirjautuneet käyttäjät voivat rekisteröityä tai kirjautua nopeasti Google-tilillään.',
    configure_google_one_tap: 'Määritä Google One Tap',
    auto_select: 'Valitse kirjautumistiedot automaattisesti, jos mahdollista',
    close_on_tap_outside: 'Peruuta kehote, jos käyttäjä napsauttaa/napauttaa sen ulkopuolelle',
    itp_support: 'Ota käyttöön <a>parannettu One Tap -käyttökokemus ITP-selaimissa</a>',
  },
  sign_in_experience: {
    in_use: 'Käytössä kirjautumisessa ',
    not_in_use: 'Ei käytössä kirjautumisessa ',
  },
  email_logs: {
    title: 'Sähköpostilokit',
    time: 'Aika',
    recipient: 'Vastaanottaja',
    recipient_placeholder: 'Hae vastaanottajan koko osoitteella',
    template_type: 'Mallin tyyppi',
    status: 'Tila',
    status_sent: 'Lähetetty',
    status_failed: 'Epäonnistui',
    language_tag: 'Kieli',
    provider_message_id: 'Palveluntarjoajan viestitunnus',
  },
};

export default Object.freeze(connector_details);
