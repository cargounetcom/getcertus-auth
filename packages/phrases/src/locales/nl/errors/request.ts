/* GetCertus addition (MPL-2.0, see GETCERTUS.md): admin console phrases. */
const request = {
  invalid_input: 'De invoer is ongeldig. {{details}}',
  general: 'Er is een fout opgetreden in het verzoek.',
  range_not_satisfiable: 'Het gevraagde bereik is niet beschikbaar.',
  feature_not_supported: 'Deze functie wordt niet ondersteund in de huidige omgeving.',
  rate_limited: 'Te veel verzoeken. Probeer het later opnieuw.',
  message_rate_limited:
    'Er zijn te veel berichten naar deze ontvanger verstuurd. Probeer het later opnieuw.',
};

export default Object.freeze(request);
