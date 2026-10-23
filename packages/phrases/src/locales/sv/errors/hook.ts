/* GetCertus addition (MPL-2.0, see GETCERTUS.md): admin console phrases. */
const hook = {
  missing_events: 'Du måste ange minst en händelse.',
  send_test_payload_failed: 'Det gick inte att skicka test-payload: {{message}}',
  endpoint_responded_with_error: 'Slutpunkten svarade med ett fel.',
};

export default Object.freeze(hook);
