/* GetCertus addition (MPL-2.0, see GETCERTUS.md): admin console phrases. */
const verification_code = {
  phone_email_empty: 'Tá an guthán agus an ríomhphost araon folamh.',
  not_found: 'Níor aimsíodh an cód fíoraithe. Seol cód fíoraithe ar dtús.',
  phone_mismatch: 'Ní mheaitseálann an guthán. Iarr cód fíoraithe nua.',
  email_mismatch: 'Ní mheaitseálann an ríomhphost. Iarr cód fíoraithe nua.',
  code_mismatch: 'Cód fíoraithe neamhbhailí.',
  expired: 'Tá an cód fíoraithe imithe in éag. Iarr cód fíoraithe nua.',
  exceed_max_try: 'Sáraíodh teorainn na n-iarrachtaí don chód fíoraithe. Iarr cód fíoraithe nua.',
};

export default Object.freeze(verification_code);
