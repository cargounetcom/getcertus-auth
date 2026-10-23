/* GetCertus addition (MPL-2.0, see GETCERTUS.md): admin console phrases. */
const single_sign_on = {
  forbidden_domains: 'Ní cheadaítear fearainn ríomhphoist phoiblí.',
  duplicated_domains: 'Tá fearainn dhúblacha ann.',
  invalid_domain_format: 'Formáid fearainn neamhbhailí.',
  duplicate_connector_name: 'Tá ainm an nascóra ann cheana. Roghnaigh ainm eile.',
  idp_initiated_authentication_not_supported:
    'Ní thacaítear le fíordheimhniú a thionscnaíonn an IdP ach do nascóirí SAML.',
  idp_initiated_authentication_invalid_application_type:
    'Cineál feidhmchláir neamhbhailí. Ní cheadaítear ach feidhmchláir {{type}}.',
  idp_initiated_authentication_redirect_uri_not_registered:
    'Níl an redirect_uri cláraithe. Seiceáil socruithe an fheidhmchláir.',
  idp_initiated_authentication_client_callback_uri_not_found:
    "Níor aimsíodh URI aisghlaoite an chliaint d'fhíordheimhniú a thionscnaíonn an IdP. Seiceáil socruithe an nascóra.",
  sso_signing_unavailable:
    'Níorbh fhéidir linn an síniú isteach le do sholáthraí aitheantais a chríochnú. Déan teagmháil le do riarthóir.',
  can_not_delete_active_signing_key:
    'Ní féidir an eochair shínithe ghníomhach a scriosadh. Gníomhachtaigh eochair eile nó díghníomhachtaigh an eochair seo ar dtús.',
  can_not_deactivate_signing_key_in_use:
    'Ní féidir an eochair shínithe a dhíghníomhachtú fad atá iarratais fhíordheimhnithe shínithe cumasaithe. Díchumasaigh iarratais fhíordheimhnithe shínithe ar dtús.',
  active_signing_key_required:
    'Níor aimsíodh aon eochair shínithe ghníomhach. Gin agus gníomhachtaigh eochair shínithe sula gcumasaíonn tú iarratais fhíordheimhnithe shínithe.',
};

export default Object.freeze(single_sign_on);
