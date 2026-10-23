/* GetCertus addition (MPL-2.0, see GETCERTUS.md): admin console phrases. */
const signing_keys = {
  title: 'Ondertekeningssleutels',
  description: 'Beheer veilig de ondertekeningssleutels die je applicaties gebruiken.',
  private_key: 'OIDC-privésleutels',
  private_keys_description: 'OIDC-privésleutels worden gebruikt om JWT-tokens te ondertekenen.',
  cookie_key: 'OIDC-cookiesleutels',
  cookie_keys_description: 'OIDC-cookiesleutels worden gebruikt om cookies te ondertekenen.',
  private_keys_in_use: 'Privésleutels in gebruik',
  cookie_keys_in_use: 'Cookiesleutels in gebruik',
  rotate_private_keys: 'Privésleutels roteren',
  rotate_cookie_keys: 'Cookiesleutels roteren',
  rotate_private_keys_description:
    'Deze actie maakt een nieuwe privé-ondertekeningssleutel aan, roteert de huidige sleutel en verwijdert je vorige sleutel. JWT-tokens die met de huidige sleutel zijn ondertekend, blijven geldig tot verwijdering of een volgende rotatie.',
  rotate_cookie_keys_description:
    'Deze actie maakt een nieuwe cookiesleutel aan, roteert de huidige sleutel en verwijdert je vorige sleutel. Cookies met de huidige sleutel blijven geldig tot verwijdering of een volgende rotatie.',
  select_private_key_algorithm: 'Kies het ondertekeningsalgoritme voor de nieuwe privésleutel',
  rotate_button: 'Roteren',
  table_column: {
    id: 'ID',
    status: 'Status',
    algorithm: 'Ondertekeningsalgoritme',
    effective_at: 'Actief vanaf',
  },
  status: {
    next: 'Volgende',
    current: 'Huidige',
    previous: 'Vorige',
    effective_in: 'Actief over {{time}}',
  },
  reminder: {
    rotate_private_key:
      'Weet je zeker dat je de <strong>OIDC-privésleutels</strong> wilt roteren? Nieuw uitgegeven JWT-tokens worden met de nieuwe sleutel ondertekend. Bestaande JWT-tokens blijven geldig tot je opnieuw roteert.',
    rotate_cookie_key:
      'Weet je zeker dat je de <strong>OIDC-cookiesleutels</strong> wilt roteren? Nieuwe cookies in inlogsessies worden met de nieuwe cookiesleutel ondertekend. Bestaande cookies blijven geldig tot je opnieuw roteert.',
    delete_private_key:
      'Weet je zeker dat je de <strong>OIDC-privésleutel</strong> wilt verwijderen? Bestaande JWT-tokens die met deze privésleutel zijn ondertekend, zijn dan niet meer geldig.',
    delete_cookie_key:
      'Weet je zeker dat je de <strong>OIDC-cookiesleutel</strong> wilt verwijderen? Oudere inlogsessies met cookies die met deze sleutel zijn ondertekend, zijn dan niet meer geldig. Deze gebruikers moeten zich opnieuw authenticeren.',
  },
  messages: {
    rotate_key_success: 'De ondertekeningssleutels zijn geroteerd.',
    delete_key_success: 'De sleutel is verwijderd.',
  },
};

export default Object.freeze(signing_keys);
