/* GetCertus addition (MPL-2.0, see GETCERTUS.md): admin console phrases. */
const signing_keys = {
  title: 'Allekirjoitusavaimet',
  description: 'Hallitse turvallisesti sovellustesi käyttämiä allekirjoitusavaimia.',
  private_key: 'OIDC:n yksityiset avaimet',
  private_keys_description: 'OIDC:n yksityisillä avaimilla allekirjoitetaan JWT-tunnuksia.',
  cookie_key: 'OIDC:n evästeavaimet',
  cookie_keys_description: 'OIDC:n evästeavaimilla allekirjoitetaan evästeitä.',
  private_keys_in_use: 'Käytössä olevat yksityiset avaimet',
  cookie_keys_in_use: 'Käytössä olevat evästeavaimet',
  rotate_private_keys: 'Kierrätä yksityiset avaimet',
  rotate_cookie_keys: 'Kierrätä evästeavaimet',
  rotate_private_keys_description:
    'Tämä toiminto luo uuden yksityisen allekirjoitusavaimen, kierrättää nykyisen avaimen ja poistaa edellisen avaimesi. Nykyisellä avaimella allekirjoitetut JWT-tunnukset pysyvät voimassa poistoon tai seuraavaan kierrätykseen asti.',
  rotate_cookie_keys_description:
    'Tämä toiminto luo uuden evästeavaimen, kierrättää nykyisen avaimen ja poistaa edellisen avaimesi. Nykyisellä avaimella allekirjoitetut evästeet pysyvät voimassa poistoon tai seuraavaan kierrätykseen asti.',
  select_private_key_algorithm: 'Valitse uuden yksityisen avaimen allekirjoitusalgoritmi',
  rotate_button: 'Kierrätä',
  table_column: {
    id: 'Tunnus',
    status: 'Tila',
    algorithm: 'Allekirjoitusalgoritmi',
    effective_at: 'Voimassa alkaen',
  },
  status: {
    next: 'Seuraava',
    current: 'Nykyinen',
    previous: 'Edellinen',
    effective_in: 'Voimassa {{time}} kuluttua',
  },
  reminder: {
    rotate_private_key:
      'Haluatko varmasti kierrättää <strong>OIDC:n yksityiset avaimet</strong>? Uudet JWT-tunnukset allekirjoitetaan uudella avaimella. Olemassa olevat JWT-tunnukset pysyvät voimassa seuraavaan kierrätykseen asti.',
    rotate_cookie_key:
      'Haluatko varmasti kierrättää <strong>OIDC:n evästeavaimet</strong>? Kirjautumisistunnoissa luotavat uudet evästeet allekirjoitetaan uudella evästeavaimella. Olemassa olevat evästeet pysyvät voimassa seuraavaan kierrätykseen asti.',
    delete_private_key:
      'Haluatko varmasti poistaa <strong>OIDC:n yksityisen avaimen</strong>? Tällä avaimella allekirjoitetut JWT-tunnukset eivät enää ole voimassa.',
    delete_cookie_key:
      'Haluatko varmasti poistaa <strong>OIDC:n evästeavaimen</strong>? Vanhemmat kirjautumisistunnot, joiden evästeet on allekirjoitettu tällä avaimella, eivät enää ole voimassa. Näiden käyttäjien on tunnistauduttava uudelleen.',
  },
  messages: {
    rotate_key_success: 'Allekirjoitusavaimet kierrätettiin.',
    delete_key_success: 'Avain poistettiin.',
  },
};

export default Object.freeze(signing_keys);
