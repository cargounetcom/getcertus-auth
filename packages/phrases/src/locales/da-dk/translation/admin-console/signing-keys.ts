/* GetCertus addition (MPL-2.0, see GETCERTUS.md): admin console phrases. */
const signing_keys = {
  title: 'Signeringsnøgler',
  description: 'Administrér sikkert de signeringsnøgler, dine applikationer bruger.',
  private_key: 'Private OIDC-nøgler',
  private_keys_description: 'Private OIDC-nøgler bruges til at signere JWT-tokens.',
  cookie_key: 'OIDC-cookienøgler',
  cookie_keys_description: 'OIDC-cookienøgler bruges til at signere cookies.',
  private_keys_in_use: 'Private nøgler i brug',
  cookie_keys_in_use: 'Cookienøgler i brug',
  rotate_private_keys: 'Rotér private nøgler',
  rotate_cookie_keys: 'Rotér cookienøgler',
  rotate_private_keys_description:
    'Handlingen opretter en ny privat signeringsnøgle, roterer den aktuelle nøgle og fjerner din tidligere nøgle. JWT-tokens, der er signeret med den aktuelle nøgle, forbliver gyldige indtil sletning eller en ny rotation.',
  rotate_cookie_keys_description:
    'Handlingen opretter en ny cookienøgle, roterer den aktuelle nøgle og fjerner din tidligere nøgle. Cookies med den aktuelle nøgle forbliver gyldige indtil sletning eller en ny rotation.',
  select_private_key_algorithm: 'Vælg signeringsalgoritme for den nye private nøgle',
  rotate_button: 'Rotér',
  table_column: {
    id: 'ID',
    status: 'Status',
    algorithm: 'Signeringsalgoritme',
    effective_at: 'Gældende fra',
  },
  status: {
    next: 'Næste',
    current: 'Aktuel',
    previous: 'Forrige',
    effective_in: 'Gældende om {{time}}',
  },
  reminder: {
    rotate_private_key:
      'Er du sikker på, at du vil rotere de <strong>private OIDC-nøgler</strong>? Nyudstedte JWT-tokens signeres med den nye nøgle. Eksisterende JWT-tokens forbliver gyldige, indtil du roterer igen.',
    rotate_cookie_key:
      'Er du sikker på, at du vil rotere <strong>OIDC-cookienøglerne</strong>? Nye cookies i loginsessioner signeres med den nye cookienøgle. Eksisterende cookies forbliver gyldige, indtil du roterer igen.',
    delete_private_key:
      'Er du sikker på, at du vil slette den <strong>private OIDC-nøgle</strong>? Eksisterende JWT-tokens, der er signeret med denne nøgle, bliver ugyldige.',
    delete_cookie_key:
      'Er du sikker på, at du vil slette <strong>OIDC-cookienøglen</strong>? Ældre loginsessioner med cookies, der er signeret med denne nøgle, bliver ugyldige. Disse brugere skal godkende sig igen.',
  },
  messages: {
    rotate_key_success: 'Signeringsnøglerne er roteret.',
    delete_key_success: 'Nøglen er slettet.',
  },
};

export default Object.freeze(signing_keys);
