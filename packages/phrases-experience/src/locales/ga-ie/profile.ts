/* GetCertus addition (MPL-2.0, see GETCERTUS.md): sign-in experience phrases. */
const profile = {
  name: 'Ainm',
  avatar: 'Abhatár',
  givenName: 'Céadainm',
  familyName: 'Sloinne',
  middleName: 'Ainm lár',
  fullname: 'Ainm iomlán',
  nickname: 'Leasainm',
  preferredUsername: 'Ainm úsáideora is fearr leat',
  profile: 'Próifíl',
  website: 'Suíomh gréasáin',
  gender: 'Inscne',
  birthdate: 'Dáta breithe',
  zoneinfo: 'Crios ama',
  locale: 'Teanga agus réigiún',
  address: {
    formatted: 'Seoladh',
    streetAddress: 'Seoladh sráide',
    locality: 'Baile',
    region: 'Contae',
    postalCode: 'Éirchód',
    country: 'Tír',
  },
  gender_options: {
    female: 'Baineann',
    male: 'Fireann',
    prefer_not_to_say: 'B’fhearr liom gan a rá',
  },
  checkbox_value: {
    checked: 'Is ea',
    unchecked: 'Ní hea',
  },
  avatar_upload: {
    upload: 'Uaslódáil',
    remove: 'Bain',
    uploading: 'Á uaslódáil...',
    hint: 'Cóimheas molta 1:1, suas le {{limit}}.',
    error_file_type: 'Caithfidh an cineál comhaid a bheith {{extensions}}.',
    error_file_size: 'Ní féidir leis an gcomhad a bheith níos mó ná {{limit}}.',
    error_storage_not_configured:
      'Ní féidir do ghrianghraf a uaslódáil. Bain triail eile as ar ball.',
    error_upload: 'Theip ar uaslódáil an ghrianghraif. Bain triail eile as.',
    error_save: 'Theip ar shábháil do ghrianghraif. Bain triail eile as.',
    crop_title: 'Bearr do ghrianghraf',
    zoom: 'Súmáil',
    error_crop: 'Theip ar bhearradh na híomhá. Bain triail eile as.',
  },
};

export default Object.freeze(profile);
