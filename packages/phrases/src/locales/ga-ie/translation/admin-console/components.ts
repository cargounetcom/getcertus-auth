/* GetCertus addition (MPL-2.0, see GETCERTUS.md): admin console phrases. */
const components = {
  uploader: {
    action_description: 'Tarraing agus scaoil nó brabhsáil',
    uploading: 'Á uaslódáil...',
    image_limit:
      'Uaslódáil íomhá faoi {{size, number}} KB, {{extensions, list(style: narrow; type: conjunction;)}} amháin.',
    error_upload: 'Chuaigh rud éigin amú. Theip ar uaslódáil an chomhaid.',
    error_file_size: 'Tá an comhad rómhór. Uaslódáil comhad faoi {{limitWithUnit}}.',
    error_file_type:
      'Ní thacaítear leis an gcineál comhaid seo. {{extensions, list(style: narrow; type: conjunction;)}} amháin.',
    error_file_count: 'Ní féidir leat ach 1 chomhad a uaslódáil.',
  },
};

export default Object.freeze(components);
