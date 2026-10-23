/* GetCertus addition (MPL-2.0, see GETCERTUS.md): admin console phrases. */
const domain = {
  not_configured: 'Ingen leverantör för domänvärdnamn är konfigurerad.',
  cloudflare_data_missing: 'cloudflare_data saknas, kontrollera.',
  cloudflare_unknown_error: 'Okänt fel vid anrop till Cloudflare API',
  cloudflare_response_error: 'Oväntat svar från Cloudflare.',
  limit_to_one_domain: 'Du kan bara ha en anpassad domän.',
  hostname_already_exists: 'Domänen finns redan på vår server.',
  cloudflare_not_found: 'Värdnamnet hittades inte i Cloudflare',
  domain_is_not_allowed: 'Domänen är inte tillåten.',
  domain_in_use: 'Domänen {{domain}} används redan',
  exceed_domain_limit: 'Du kan ha högst {{limit}} anpassade domäner.',
};

export default Object.freeze(domain);
