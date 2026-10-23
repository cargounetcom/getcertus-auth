/* GetCertus addition (MPL-2.0, see GETCERTUS.md): admin console phrases. */
const domain = {
  not_configured: 'Der er ikke konfigureret nogen udbyder af domæneværtsnavne.',
  cloudflare_data_missing: 'cloudflare_data mangler; kontrollér venligst.',
  cloudflare_unknown_error: 'Ukendt fejl ved kald til Cloudflare API',
  cloudflare_response_error: 'Uventet svar fra Cloudflare.',
  limit_to_one_domain: 'Du kan kun have ét brugerdefineret domæne.',
  hostname_already_exists: 'Domænet findes allerede på vores server.',
  cloudflare_not_found: 'Værtsnavnet blev ikke fundet i Cloudflare',
  domain_is_not_allowed: 'Domænet er ikke tilladt.',
  domain_in_use: 'Domænet {{domain}} er allerede i brug',
  exceed_domain_limit: 'Du kan højst have {{limit}} brugerdefinerede domæner.',
};

export default Object.freeze(domain);
