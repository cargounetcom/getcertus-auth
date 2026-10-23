/* GetCertus addition (MPL-2.0, see GETCERTUS.md): admin console phrases. */
const request = {
  invalid_input: 'Tá an t-ionchur neamhbhailí. {{details}}',
  general: 'Tharla earráid san iarratas.',
  range_not_satisfiable: 'Ní féidir an raon a iarradh a sholáthar.',
  feature_not_supported: 'Ní thacaítear leis an ngné seo sa timpeallacht reatha.',
  rate_limited: 'An iomarca iarratas. Bain triail eile as ar ball.',
  message_rate_limited:
    'Seoladh an iomarca teachtaireachtaí chuig an bhfaighteoir seo. Bain triail eile as ar ball.',
};

export default Object.freeze(request);
