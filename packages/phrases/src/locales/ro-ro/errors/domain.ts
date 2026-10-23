/* GetCertus addition (MPL-2.0, see GETCERTUS.md): admin console phrases. */
const domain = {
  not_configured: 'Furnizorul de nume de gazdă pentru domenii nu este configurat.',
  cloudflare_data_missing: 'cloudflare_data lipsește, verifică.',
  cloudflare_unknown_error: 'Eroare necunoscută la apelarea API-ului Cloudflare',
  cloudflare_response_error: 'Răspuns neașteptat de la Cloudflare.',
  limit_to_one_domain: 'Poți avea un singur domeniu personalizat.',
  hostname_already_exists: 'Acest domeniu există deja pe serverul nostru.',
  cloudflare_not_found: 'Numele de gazdă nu a fost găsit în Cloudflare',
  domain_is_not_allowed: 'Acest domeniu nu este permis.',
  domain_in_use: 'Domeniul {{domain}} este deja folosit',
  exceed_domain_limit: 'Poți avea cel mult {{limit}} domenii personalizate.',
};

export default Object.freeze(domain);
