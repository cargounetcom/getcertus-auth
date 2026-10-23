/* GetCertus addition (MPL-2.0, see GETCERTUS.md): admin console phrases. */
const signing_keys = {
  title: 'Chei de semnare',
  description: 'Gestionează în siguranță cheile de semnare folosite de aplicațiile tale.',
  private_key: 'Chei private OIDC',
  private_keys_description: 'Cheile private OIDC sunt folosite pentru semnarea tokenurilor JWT.',
  cookie_key: 'Chei de cookie OIDC',
  cookie_keys_description: 'Cheile de cookie OIDC sunt folosite pentru semnarea cookie-urilor.',
  private_keys_in_use: 'Chei private în uz',
  cookie_keys_in_use: 'Chei de cookie în uz',
  rotate_private_keys: 'Rotește cheile private',
  rotate_cookie_keys: 'Rotește cheile de cookie',
  rotate_private_keys_description:
    'Această acțiune creează o nouă cheie privată de semnare, rotește cheia curentă și elimină cheia anterioară. Tokenurile JWT semnate cu cheia curentă rămân valide până la ștergere sau până la o nouă rotire.',
  rotate_cookie_keys_description:
    'Această acțiune creează o nouă cheie de cookie, rotește cheia curentă și elimină cheia anterioară. Cookie-urile cu cheia curentă rămân valide până la ștergere sau până la o nouă rotire.',
  select_private_key_algorithm: 'Alege algoritmul de semnare pentru noua cheie privată',
  rotate_button: 'Rotește',
  table_column: {
    id: 'ID',
    status: 'Stare',
    algorithm: 'Algoritm de semnare',
    effective_at: 'Valabilă de la',
  },
  status: {
    next: 'Următoarea',
    current: 'Curentă',
    previous: 'Anterioară',
    effective_in: 'Valabilă peste {{time}}',
  },
  reminder: {
    rotate_private_key:
      'Sigur vrei să rotești <strong>cheile private OIDC</strong>? Tokenurile JWT nou emise vor fi semnate cu noua cheie. Tokenurile JWT existente rămân valide până la următoarea rotire.',
    rotate_cookie_key:
      'Sigur vrei să rotești <strong>cheile de cookie OIDC</strong>? Cookie-urile noi generate în sesiunile de autentificare vor fi semnate cu noua cheie. Cookie-urile existente rămân valide până la următoarea rotire.',
    delete_private_key:
      'Sigur vrei să ștergi <strong>cheia privată OIDC</strong>? Tokenurile JWT existente semnate cu această cheie nu vor mai fi valide.',
    delete_cookie_key:
      'Sigur vrei să ștergi <strong>cheia de cookie OIDC</strong>? Sesiunile de autentificare mai vechi, cu cookie-uri semnate cu această cheie, nu vor mai fi valide. Acești utilizatori trebuie să se autentifice din nou.',
  },
  messages: {
    rotate_key_success: 'Cheile de semnare au fost rotite.',
    delete_key_success: 'Cheia a fost ștearsă.',
  },
};

export default Object.freeze(signing_keys);
