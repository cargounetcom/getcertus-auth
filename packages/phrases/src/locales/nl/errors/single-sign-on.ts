/* GetCertus addition (MPL-2.0, see GETCERTUS.md): admin console phrases. */
const single_sign_on = {
  forbidden_domains: 'Publieke e-maildomeinen zijn niet toegestaan.',
  duplicated_domains: 'Er zijn dubbele domeinen.',
  invalid_domain_format: 'Ongeldige domeinnotatie.',
  duplicate_connector_name: 'Er bestaat al een connector met deze naam. Kies een andere naam.',
  idp_initiated_authentication_not_supported:
    'Door de IdP gestarte authenticatie wordt alleen ondersteund voor SAML-connectoren.',
  idp_initiated_authentication_invalid_application_type:
    'Ongeldig applicatietype. Alleen {{type}}-applicaties zijn toegestaan.',
  idp_initiated_authentication_redirect_uri_not_registered:
    'De redirect_uri is niet geregistreerd. Controleer de applicatie-instellingen.',
  idp_initiated_authentication_client_callback_uri_not_found:
    'De callback-URI van de client voor door de IdP gestarte authenticatie is niet gevonden. Controleer de connectorinstellingen.',
  sso_signing_unavailable:
    'We konden het inloggen bij je identiteitsprovider niet voltooien. Neem contact op met je beheerder.',
  can_not_delete_active_signing_key:
    'De actieve ondertekeningssleutel kan niet worden verwijderd. Activeer eerst een andere sleutel of deactiveer deze sleutel.',
  can_not_deactivate_signing_key_in_use:
    'De ondertekeningssleutel kan niet worden gedeactiveerd zolang ondertekende authenticatieverzoeken zijn ingeschakeld. Schakel ondertekende authenticatieverzoeken eerst uit.',
  active_signing_key_required:
    'Geen actieve ondertekeningssleutel gevonden. Genereer en activeer een ondertekeningssleutel voordat je ondertekende authenticatieverzoeken inschakelt.',
};

export default Object.freeze(single_sign_on);
