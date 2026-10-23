/* GetCertus addition (MPL-2.0, see GETCERTUS.md): admin console phrases. */
const invitation = {
  find_your_tenants: 'Aimsigh do thionóntaí',
  find_tenants_description:
    "D'fhéadfadh do sheoladh ríomhphoist a bheith cláraithe le roinnt tionóntaí cheana. Is féidir leat dul isteach sna cinn atá ann nó ceann nua a chruthú.",
  create_new_tenant: 'Cruthaigh tionónta nua',
  email_not_match_title: 'Tá tú sínithe isteach faoi láthair mar\n{{email}}',
  email_not_match_description:
    'Sínigh isteach leis an gcuntas ceart chun glacadh leis an gcuireadh agus a bheith i do bhall den eagraíocht.',
  switch_account: 'Sínigh isteach le cuntas eile',
  invalid_invitation_status:
    'Cuireadh neamhbhailí. Déan teagmháil leis an riarthóir agus bain triail eile as.',
  invitation_not_found: 'Níor aimsíodh an cuireadh. Déan teagmháil leis an riarthóir.',
};

export default Object.freeze(invitation);
