/* GetCertus addition (MPL-2.0, see GETCERTUS.md): admin console phrases. */
const domain = {
  not_configured: 'Verkkotunnusten isäntänimipalvelua ei ole määritetty.',
  cloudflare_data_missing: 'cloudflare_data puuttuu, tarkista.',
  cloudflare_unknown_error: 'Tuntematon virhe Cloudflare API:n kutsussa',
  cloudflare_response_error: 'Cloudflarelta saatiin odottamaton vastaus.',
  limit_to_one_domain: 'Sinulla voi olla vain yksi mukautettu verkkotunnus.',
  hostname_already_exists: 'Tämä verkkotunnus on jo palvelimellamme.',
  cloudflare_not_found: 'Isäntänimeä ei löytynyt Cloudflaresta',
  domain_is_not_allowed: 'Tämä verkkotunnus ei ole sallittu.',
  domain_in_use: 'Verkkotunnus {{domain}} on jo käytössä',
  exceed_domain_limit: 'Sinulla voi olla enintään {{limit}} mukautettua verkkotunnusta.',
};

export default Object.freeze(domain);
