/* GetCertus addition (MPL-2.0, see GETCERTUS.md): admin console phrases. */
const users = {
  page_title: 'Käyttäjähallinta',
  title: 'Käyttäjähallinta',
  subtitle:
    'Hallitse käyttäjäidentiteettejä: luo käyttäjiä, muokkaa tietoja, katso käyttäjälokeja, vaihda salasanoja ja poista käyttäjiä.',
  create: 'Lisää käyttäjä',
  create_subtitle: 'Täytä vähintään yksi seuraavista kentistä jatkaaksesi.',
  error_missing_identifier: 'Käyttäjän luomiseen tarvitaan vähintään yksi tunniste.',
  user_name: 'Käyttäjä',
  application_name: 'Sovelluksesta',
  latest_sign_in: 'Viimeisin kirjautuminen',
  create_form_username: 'Käyttäjänimi',
  create_form_password: 'Salasana',
  create_form_name: 'Koko nimi',
  placeholder_name: 'Matti Meikäläinen',
  placeholder_email: 'jdoe@example.com',
  placeholder_username: 'user123',
  placeholder_phone: '+1 (555) 555-5555',
  unnamed: 'Nimetön',
  search: 'Hae nimellä, sähköpostilla, puhelinnumerolla tai käyttäjänimellä',
  check_user_detail: 'Näytä käyttäjän tiedot',
  placeholder_title: 'Käyttäjähallinta',
  placeholder_description:
    'Jokaisella käyttäjällä on profiili, joka sisältää kaikki käyttäjätiedot: perustiedot, sosiaaliset identiteetit ja mukautetut tiedot.',
  dev_tenant_data_retention_notice:
    'Kehitystenanteissa yli 90 päivää vanhat käyttäjätilit poistetaan automaattisesti. <a>Lue lisää</a>',
};

export default Object.freeze(users);
