/* GetCertus addition (MPL-2.0, see GETCERTUS.md): sign-in experience phrases. */
const step_up = {
  verify_your_identity: 'Vahvista henkilöllisyytesi',
  choose_method_description: 'Vahvista jatkaaksesi, että olet sinä, jollakin seuraavista tavoista.',
  password: 'Salasana',
  password_description: 'Syötä tilisi salasana',
  enter_password_description: 'Syötä tilisi salasana jatkaaksesi.',
  enter_verification_code_description:
    'Syötä vahvistuskoodi, joka lähetettiin kohteeseen {{identifier}}.',
  subject_proof_description:
    'Vahvista jatkaaksesi, että olet sinä, tiliisi liitetyn tilin kautta. Sen jälkeen voit määrittää vahvistustavan.',
  no_method_available: 'Vahvistustapaa ei ole käytettävissä',
  no_method_available_description:
    'Tililläsi ei ole tapaa, jolla tämän vahvistuksen voi suorittaa. Ota yhteyttä ylläpitäjään saadaksesi apua.',
};

export default Object.freeze(step_up);
