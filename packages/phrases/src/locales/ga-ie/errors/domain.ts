/* GetCertus addition (MPL-2.0, see GETCERTUS.md): admin console phrases. */
const domain = {
  not_configured: 'Níl soláthraí óstainmneacha fearainn cumraithe.',
  cloudflare_data_missing: 'Tá cloudflare_data ar iarraidh, seiceáil le do thoil.',
  cloudflare_unknown_error: 'Earráid anaithnid agus API Cloudflare á iarraidh',
  cloudflare_response_error: 'Fuarthas freagra gan choinne ó Cloudflare.',
  limit_to_one_domain: 'Ní féidir leat ach fearann saincheaptha amháin a bheith agat.',
  hostname_already_exists: 'Tá an fearann seo ar ár bhfreastalaí cheana.',
  cloudflare_not_found: 'Ní féidir an t-óstainm a aimsiú in Cloudflare',
  domain_is_not_allowed: 'Ní cheadaítear an fearann seo.',
  domain_in_use: 'Tá an fearann {{domain}} in úsáid cheana',
  exceed_domain_limit: 'Is féidir {{limit}} fearann saincheaptha ar a mhéad a bheith agat.',
};

export default Object.freeze(domain);
