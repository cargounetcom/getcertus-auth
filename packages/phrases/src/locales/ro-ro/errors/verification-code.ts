/* GetCertus addition (MPL-2.0, see GETCERTUS.md): admin console phrases. */
const verification_code = {
  phone_email_empty: 'Atât telefonul, cât și e-mailul sunt goale.',
  not_found: 'Codul de verificare nu a fost găsit. Trimite mai întâi un cod de verificare.',
  phone_mismatch: 'Telefonul nu corespunde. Solicită un cod de verificare nou.',
  email_mismatch: 'E-mailul nu corespunde. Solicită un cod de verificare nou.',
  code_mismatch: 'Cod de verificare nevalid.',
  expired: 'Codul de verificare a expirat. Solicită un cod de verificare nou.',
  exceed_max_try:
    'Numărul maxim de încercări pentru codul de verificare a fost depășit. Solicită un cod de verificare nou.',
};

export default Object.freeze(verification_code);
