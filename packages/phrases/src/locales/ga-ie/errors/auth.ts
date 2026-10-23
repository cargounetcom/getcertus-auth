/* GetCertus addition (MPL-2.0, see GETCERTUS.md): admin console phrases. */
const auth = {
  authorization_header_missing: 'Tá an ceanntásc údaraithe ar iarraidh.',
  authorization_token_type_not_supported: 'Ní thacaítear leis an gcineál údaraithe.',
  unauthorized: 'Neamhúdaraithe. Seiceáil na dintiúir agus a scóip.',
  forbidden: "Toirmiscthe. Seiceáil róil agus ceadanna d'úsáideora.",
  expected_role_not_found:
    "Níor aimsíodh an ról a bhíothas ag súil leis. Seiceáil róil agus ceadanna d'úsáideora.",
  jwt_sub_missing: 'Tá `sub` ar iarraidh sa JWT.',
  require_re_authentication: 'Tá athfhíordheimhniú riachtanach chun gníomh cosanta a dhéanamh.',
  exceed_token_limit: 'Sáraíodh teorainn na gcomharthaí. Déan teagmháil le do riarthóir.',
  third_party_application_forbidden:
    'Ní féidir le feidhmchláir tríú páirtí sonraí cuntais a athrú tríd an API seo.',
};

export default Object.freeze(auth);
