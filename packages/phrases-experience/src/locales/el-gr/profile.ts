/* GetCertus addition (MPL-2.0, see GETCERTUS.md): sign-in experience phrases. */
const profile = {
  name: 'Όνομα',
  avatar: 'Avatar',
  givenName: 'Όνομα',
  familyName: 'Επώνυμο',
  middleName: 'Μεσαίο όνομα',
  fullname: 'Ονοματεπώνυμο',
  nickname: 'Ψευδώνυμο',
  preferredUsername: 'Προτιμώμενο όνομα χρήστη',
  profile: 'Προφίλ',
  website: 'Ιστότοπος',
  gender: 'Φύλο',
  birthdate: 'Ημερομηνία γέννησης',
  zoneinfo: 'Ζώνη ώρας',
  locale: 'Γλώσσα και περιοχή',
  address: {
    formatted: 'Διεύθυνση',
    streetAddress: 'Οδός και αριθμός',
    locality: 'Πόλη',
    region: 'Νομός/Περιφέρεια',
    postalCode: 'Ταχυδρομικός κώδικας',
    country: 'Χώρα',
  },
  gender_options: {
    female: 'Γυναίκα',
    male: 'Άνδρας',
    prefer_not_to_say: 'Προτιμώ να μην το πω',
  },
  checkbox_value: {
    checked: 'Ναι',
    unchecked: 'Όχι',
  },
  avatar_upload: {
    upload: 'Μεταφόρτωση',
    remove: 'Αφαίρεση',
    uploading: 'Μεταφόρτωση...',
    hint: 'Προτεινόμενη αναλογία 1:1, έως {{limit}}.',
    error_file_type: 'Ο τύπος αρχείου πρέπει να είναι {{extensions}}.',
    error_file_size: 'Το μέγεθος αρχείου δεν πρέπει να υπερβαίνει τα {{limit}}.',
    error_storage_not_configured:
      'Δεν είναι δυνατή η μεταφόρτωση της φωτογραφίας. Δοκιμάστε ξανά αργότερα.',
    error_upload: 'Η μεταφόρτωση της φωτογραφίας απέτυχε. Δοκιμάστε ξανά.',
    error_save: 'Η αποθήκευση της φωτογραφίας απέτυχε. Δοκιμάστε ξανά.',
    crop_title: 'Περικοπή φωτογραφίας',
    zoom: 'Ζουμ',
    error_crop: 'Η περικοπή της εικόνας απέτυχε. Δοκιμάστε ξανά.',
  },
};

export default Object.freeze(profile);
