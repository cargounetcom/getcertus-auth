/* GetCertus addition (MPL-2.0, see GETCERTUS.md): admin console phrases. */
const domain = {
  not_configured: 'Er is geen provider voor domeinhostnamen geconfigureerd.',
  cloudflare_data_missing: 'cloudflare_data ontbreekt; controleer dit.',
  cloudflare_unknown_error: 'Onbekende fout bij het aanroepen van de Cloudflare API',
  cloudflare_response_error: 'Onverwacht antwoord van Cloudflare ontvangen.',
  limit_to_one_domain: 'Je kunt maar één eigen domein hebben.',
  hostname_already_exists: 'Dit domein bestaat al op onze server.',
  cloudflare_not_found: 'Hostnaam niet gevonden in Cloudflare',
  domain_is_not_allowed: 'Dit domein is niet toegestaan.',
  domain_in_use: 'Het domein {{domain}} is al in gebruik',
  exceed_domain_limit: 'Je kunt maximaal {{limit}} eigen domeinen hebben.',
};

export default Object.freeze(domain);
