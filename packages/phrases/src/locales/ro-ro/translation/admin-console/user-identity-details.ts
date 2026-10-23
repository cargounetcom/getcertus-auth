/* GetCertus addition (MPL-2.0, see GETCERTUS.md): admin console phrases. */
const user_identity_details = {
  social_identity_page_title: 'Detalii identitate socială',
  back_to_user_details: 'Înapoi la detaliile utilizatorului',
  delete_identity: 'Elimină conexiunea de identitate',
  social_account: {
    title: 'Cont social',
    description:
      'Vezi datele utilizatorului și informațiile de profil sincronizate din contul {{connectorName}} conectat.',
    provider_name: 'Numele furnizorului de identitate socială',
    identity_id: 'ID identitate socială',
    user_profile: 'Profil de utilizator sincronizat de la furnizorul de identitate socială',
  },
  sso_account: {
    title: 'Cont enterprise SSO',
    description:
      'Vezi datele utilizatorului și informațiile de profil sincronizate din contul {{connectorName}} conectat.',
    provider_name: 'Numele furnizorului de identitate enterprise SSO',
    identity_id: 'ID identitate enterprise SSO',
    user_profile: 'Profil de utilizator sincronizat de la furnizorul de identitate enterprise SSO',
  },
  token_storage: {
    title: 'Token de acces',
    description:
      'Stochează tokenurile de acces și de reîmprospătare de la {{connectorName}} în Secret Vault. Permite apeluri API automate fără acordul repetat al utilizatorului.',
  },
  access_token: {
    title: 'Token de acces',
    description_active:
      'Tokenul de acces este activ și stocat în siguranță în Secret Vault. Produsul tău îl poate folosi pentru a accesa API-urile {{connectorName}}.',
    description_inactive:
      'Acest token de acces este inactiv (de ex., revocat). Utilizatorii trebuie să reautorizeze accesul pentru a restabili funcționalitatea.',
    description_expired:
      'Acest token de acces a expirat. Reînnoirea are loc automat la următoarea cerere API, folosind tokenul de reîmprospătare. Dacă tokenul de reîmprospătare nu este disponibil, utilizatorul trebuie să se autentifice din nou.',
  },
  refresh_token: {
    available:
      'Tokenul de reîmprospătare este disponibil. Dacă tokenul de acces expiră, va fi reîmprospătat automat cu tokenul de reîmprospătare.',
    not_available:
      'Tokenul de reîmprospătare nu este disponibil. După expirarea tokenului de acces, utilizatorii trebuie să se autentifice din nou pentru a obține tokenuri noi.',
  },
  token_status: 'Starea tokenului',
  created_at: 'Creat la',
  updated_at: 'Actualizat la',
  expires_at: 'Expiră la',
  scopes: 'Scopuri',
  delete_tokens: {
    title: 'Șterge tokenurile',
    description:
      'Șterge tokenurile stocate. Utilizatorii trebuie să reautorizeze accesul pentru a restabili funcționalitatea.',
    confirmation_message:
      'Sigur vrei să ștergi tokenurile? GetCertus Secret Vault va elimina tokenurile de acces și de reîmprospătare stocate pentru {{connectorName}}. Acest utilizator trebuie să reautorizeze pentru a restabili accesul la API-ul {{connectorName}}.',
  },
  token_storage_disabled: {
    title: 'Stocarea tokenurilor este dezactivată pentru acest conector',
    description:
      'Momentan, utilizatorii pot folosi {{connectorName}} doar pentru autentificare, conectarea conturilor sau sincronizarea profilurilor în fiecare flux de consimțământ. Pentru a accesa API-urile {{connectorName}} și a efectua acțiuni în numele utilizatorilor, activează stocarea tokenurilor în',
  },
};

export default Object.freeze(user_identity_details);
