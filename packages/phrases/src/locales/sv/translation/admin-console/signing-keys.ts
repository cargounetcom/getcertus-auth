/* GetCertus addition (MPL-2.0, see GETCERTUS.md): admin console phrases. */
const signing_keys = {
  title: 'Signeringsnycklar',
  description: 'Hantera signeringsnycklarna som dina applikationer använder på ett säkert sätt.',
  private_key: 'Privata OIDC-nycklar',
  private_keys_description: 'Privata OIDC-nycklar används för att signera JWT-token.',
  cookie_key: 'OIDC-cookienycklar',
  cookie_keys_description: 'OIDC-cookienycklar används för att signera cookies.',
  private_keys_in_use: 'Privata nycklar som används',
  cookie_keys_in_use: 'Cookienycklar som används',
  rotate_private_keys: 'Rotera privata nycklar',
  rotate_cookie_keys: 'Rotera cookienycklar',
  rotate_private_keys_description:
    'Åtgärden skapar en ny privat signeringsnyckel, roterar den aktuella nyckeln och tar bort din tidigare nyckel. JWT-token som signerats med den aktuella nyckeln förblir giltiga tills de tas bort eller en ny rotation görs.',
  rotate_cookie_keys_description:
    'Åtgärden skapar en ny cookienyckel, roterar den aktuella nyckeln och tar bort din tidigare nyckel. Cookies med den aktuella nyckeln förblir giltiga tills de tas bort eller en ny rotation görs.',
  select_private_key_algorithm: 'Välj signeringsalgoritm för den nya privata nyckeln',
  rotate_button: 'Rotera',
  table_column: {
    id: 'ID',
    status: 'Status',
    algorithm: 'Signeringsalgoritm',
    effective_at: 'Gäller från',
  },
  status: {
    next: 'Nästa',
    current: 'Aktuell',
    previous: 'Föregående',
    effective_in: 'Gäller om {{time}}',
  },
  reminder: {
    rotate_private_key:
      'Vill du verkligen rotera de <strong>privata OIDC-nycklarna</strong>? Nyutfärdade JWT-token signeras med den nya nyckeln. Befintliga JWT-token förblir giltiga tills du roterar igen.',
    rotate_cookie_key:
      'Vill du verkligen rotera <strong>OIDC-cookienycklarna</strong>? Nya cookies i inloggningssessioner signeras med den nya cookienyckeln. Befintliga cookies förblir giltiga tills du roterar igen.',
    delete_private_key:
      'Vill du verkligen ta bort den <strong>privata OIDC-nyckeln</strong>? Befintliga JWT-token som signerats med den här nyckeln blir ogiltiga.',
    delete_cookie_key:
      'Vill du verkligen ta bort <strong>OIDC-cookienyckeln</strong>? Äldre inloggningssessioner med cookies som signerats med nyckeln blir ogiltiga. Dessa användare måste autentisera sig igen.',
  },
  messages: {
    rotate_key_success: 'Signeringsnycklarna har roterats.',
    delete_key_success: 'Nyckeln har tagits bort.',
  },
};

export default Object.freeze(signing_keys);
