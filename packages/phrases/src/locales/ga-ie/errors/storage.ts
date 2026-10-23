/* GetCertus addition (MPL-2.0, see GETCERTUS.md): admin console phrases. */
const storage = {
  not_configured: 'Níl soláthraí stórála cumraithe.',
  missing_parameter: 'Tá an paraiméadar {{parameter}} ar iarraidh don soláthraí stórála.',
  upload_error: 'Theip ar an gcomhad a uaslódáil chuig an soláthraí stórála.',
  download_error: 'Theip ar an gcomhad a íoslódáil ón soláthraí stórála.',
  invalid_custom_ui_zip:
    'Níorbh fhéidir an chartlann a léamh. Cruthaigh ZIP nach bhfuil folamh le Deflate nó gan chomhbhrú, agus uaslódáil arís í.',
  custom_ui_file_too_large:
    'Caithfidh an comhad bainte amach "{{name}}" a bheith níos lú ná 10 MiB. Laghdaigh méid an chomhaid agus uaslódáil arís.',
  custom_ui_too_many_entries:
    'Tá an iomarca iontrálacha sa ZIP. Ná cuir níos mó ná 200 comhad agus fillteán ann agus uaslódáil arís.',
};

export default Object.freeze(storage);
