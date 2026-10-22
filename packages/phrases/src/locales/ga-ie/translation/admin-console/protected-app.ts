/* GetCertus addition (MPL-2.0, see GETCERTUS.md): admin console phrases. */
const protected_app = {
  name: 'Aip chosanta',
  title: 'Cruthaigh aip chosanta: cuir fíordheimhniú leis go simplí agus go han-tapa',
  fast_create: 'Cruthú tapa',
  modal_title: 'Cruthaigh aip chosanta',
  modal_subtitle:
    "Cumasaigh cosaint shlán agus thapa le cúpla cliceáil. Cuir fíordheimhniú le d'aip ghréasáin atá ann cheana go héasca.",
  form: {
    url_field_label: 'Do URL bunaidh',
    url_field_placeholder: 'https://domain.com/',
    url_field_description: "Tabhair seoladh d'aipe a dteastaíonn cosaint fhíordheimhnithe uaithi.",
    url_field_modification_notice:
      "D'fhéadfadh sé suas le 1-2 nóiméad a thógáil sula dtiocfaidh athruithe ar an URL bunaidh i bhfeidhm ar fud láithreacha uile an líonra dhomhanda.",
    url_field_tooltip:
      "Tabhair seoladh d'fheidhmchláir, gan '/cosán' ar bith. Tar éis é a chruthú, is féidir leat rialacha fíordheimhnithe a shaincheapadh do bhealaí.\n\nNóta: Ní éilíonn an URL bunaidh féin fíordheimhniú; ní chuirtear cosaint i bhfeidhm ach ar rochtain trí fhearann ainmnithe na haipe.",
    domain_field_label: 'Fearann na haipe',
    domain_field_placeholder: 'your-domain',
    domain_field_description:
      'Feidhmíonn an URL seo mar sheachfhreastalaí cosanta fíordheimhnithe don URL bunaidh. Is féidir fearann saincheaptha a chur i bhfeidhm tar éis é a chruthú.',
    domain_field_description_short:
      'Feidhmíonn an URL seo mar sheachfhreastalaí cosanta fíordheimhnithe don URL bunaidh.',
    domain_field_tooltip:
      "Óstáiltear aipeanna atá cosanta ag GetCertus ag 'your-domain.{{domain}}' de réir réamhshocraithe. Is féidir fearann saincheaptha a chur i bhfeidhm tar éis é a chruthú.",
    create_application: 'Cruthaigh feidhmchlár',
    create_protected_app: 'Cruthú tapa',
    errors: {
      domain_required: "Tá d'fhearann riachtanach.",
      domain_in_use: 'Tá an t-ainm fofhearainn seo in úsáid cheana.',
      invalid_domain_format:
        "Formáid fofhearainn neamhbhailí: ná húsáid ach litreacha beaga, uimhreacha agus fleiscíní '-'.",
      url_required: 'Tá an URL bunaidh riachtanach.',
      invalid_url:
        "Formáid URL bunaidh neamhbhailí: úsáid http:// nó https://. Nóta: ní thacaítear le '/cosán' faoi láthair.",
      localhost:
        'Nocht do fhreastalaí áitiúil don idirlíon ar dtús. Tuilleadh eolais faoi <a>fhorbairt áitiúil</a>.',
    },
  },
  id_token_claims: {
    card_title: 'Éilimh an chomhartha ID',
    card_description:
      'Iarr scóip úsáideora bhreise le linn síniú isteach san aip chosanta chun éilimh leathnaithe chumasaithe a áireamh sa chomhartha ID a chuirtear ar aghaidh.',
    field_title: 'Scóip bhreise',
    field_description:
      'Ní áirítear éilimh ach amháin má tá siad cumasaithe in <a>JWT saincheaptha > Comhartha ID</a> agus má iarrtar an scóip chomhfhreagrach anseo.',
    table_column_scope: 'Scóip',
    table_column_claims_forwarded: 'Éilimh curtha ar aghaidh',
    disabled_claims_hint:
      'Níl na héilimh liathaithe á gcur ar aghaidh fós. Cumasaigh iad in <a>JWT saincheaptha > Comhartha ID</a> chun iad a áireamh sa chomhartha ID.',
  },
  success_message:
    '🎉 Cumasaíodh fíordheimhniú na haipe! Bain triail as an eispéireas nua ar do shuíomh gréasáin.',
};

export default Object.freeze(protected_app);
