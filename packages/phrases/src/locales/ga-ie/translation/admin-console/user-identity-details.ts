/* GetCertus addition (MPL-2.0, see GETCERTUS.md): admin console phrases. */
const user_identity_details = {
  social_identity_page_title: 'Sonraí an aitheantais shóisialta',
  back_to_user_details: 'Ar ais chuig sonraí an úsáideora',
  delete_identity: 'Bain an nasc aitheantais',
  social_account: {
    title: 'Cuntas sóisialta',
    description:
      'Féach ar shonraí úsáideora agus ar fhaisnéis phróifíle a sioncronaíodh ón gcuntas {{connectorName}} nasctha.',
    provider_name: 'Ainm sholáthraí an aitheantais shóisialta',
    identity_id: 'Aitheantas an aitheantais shóisialta',
    user_profile: 'Próifíl úsáideora sioncronaithe ó sholáthraí an aitheantais shóisialta',
  },
  sso_account: {
    title: 'Cuntas enterprise SSO',
    description:
      'Féach ar shonraí úsáideora agus ar fhaisnéis phróifíle a sioncronaíodh ón gcuntas {{connectorName}} nasctha.',
    provider_name: 'Ainm sholáthraí aitheantais enterprise SSO',
    identity_id: 'Aitheantas enterprise SSO',
    user_profile: 'Próifíl úsáideora sioncronaithe ó sholáthraí aitheantais enterprise SSO',
  },
  token_storage: {
    title: 'Comhartha rochtana',
    description:
      'Stóráil comharthaí rochtana agus athnuachana ó {{connectorName}} sa Secret Vault. Ceadaíonn sé seo glaonna API uathoibrithe gan toiliú arís agus arís eile ón úsáideoir.',
  },
  access_token: {
    title: 'Comhartha rochtana',
    description_active:
      'Tá an comhartha rochtana gníomhach agus stóráilte go slán sa Secret Vault. Is féidir le do tháirge é a úsáid chun rochtain a fháil ar APIanna {{connectorName}}.',
    description_inactive:
      "Tá an comhartha rochtana seo neamhghníomhach (m.sh., cúlghairthe). Ní mór d'úsáideoirí rochtain a athúdarú chun feidhmiúlacht a athbhunú.",
    description_expired:
      'Tá an comhartha rochtana seo imithe in éag. Athnuaitear é go huathoibríoch ag an gcéad iarratas API eile ag baint úsáide as an gcomhartha athnuachana. Mura bhfuil comhartha athnuachana ar fáil, beidh ar an úsáideoir fíordheimhniú arís.',
  },
  refresh_token: {
    available:
      'Tá comhartha athnuachana ar fáil. Má théann an comhartha rochtana in éag, athnuafar é go huathoibríoch leis an gcomhartha athnuachana.',
    not_available:
      'Níl comhartha athnuachana ar fáil. Tar éis don chomhartha rochtana dul in éag, beidh ar úsáideoirí fíordheimhniú arís chun comharthaí nua a fháil.',
  },
  token_status: 'Stádas an chomhartha',
  created_at: 'Cruthaithe ar',
  updated_at: 'Nuashonraithe ar',
  expires_at: 'Rachaidh in éag ar',
  scopes: 'Scóip',
  delete_tokens: {
    title: 'Scrios comharthaí',
    description:
      "Scrios na comharthaí stóráilte. Ní mór d'úsáideoirí rochtain a athúdarú chun feidhmiúlacht a athbhunú.",
    confirmation_message:
      'An bhfuil tú cinnte gur mian leat na comharthaí a scriosadh? Bainfidh GetCertus Secret Vault na comharthaí rochtana agus athnuachana {{connectorName}} atá stóráilte. Beidh ar an úsáideoir seo athúdarú chun rochtain API {{connectorName}} a athbhunú.',
  },
  token_storage_disabled: {
    title: 'Tá stóráil comharthaí díchumasaithe don nascóir seo',
    description:
      'Faoi láthair, ní féidir le húsáideoirí {{connectorName}} a úsáid ach chun síniú isteach, cuntais a nascadh nó próifílí a shioncronú le linn gach sreafa toilithe. Chun rochtain a fháil ar APIanna {{connectorName}} agus gníomhartha a dhéanamh thar ceann úsáideoirí, cumasaigh stóráil comharthaí in',
  },
};

export default Object.freeze(user_identity_details);
