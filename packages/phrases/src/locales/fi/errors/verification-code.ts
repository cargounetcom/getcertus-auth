/* GetCertus addition (MPL-2.0, see GETCERTUS.md): admin console phrases. */
const verification_code = {
  phone_email_empty: 'Sekä puhelin että sähköposti ovat tyhjiä.',
  not_found: 'Vahvistuskoodia ei löytynyt. Lähetä ensin vahvistuskoodi.',
  phone_mismatch: 'Puhelinnumero ei täsmää. Pyydä uusi vahvistuskoodi.',
  email_mismatch: 'Sähköpostiosoite ei täsmää. Pyydä uusi vahvistuskoodi.',
  code_mismatch: 'Virheellinen vahvistuskoodi.',
  expired: 'Vahvistuskoodi on vanhentunut. Pyydä uusi vahvistuskoodi.',
  exceed_max_try: 'Vahvistuskoodin yritysten enimmäismäärä ylitettiin. Pyydä uusi vahvistuskoodi.',
};

export default Object.freeze(verification_code);
