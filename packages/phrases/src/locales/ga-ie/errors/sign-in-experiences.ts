/* GetCertus addition (MPL-2.0, see GETCERTUS.md): admin console phrases. */
const sign_in_experiences = {
  empty_content_url_of_terms_of_use:
    'Tá URL ábhair na dTéarmaí úsáide ("Terms of use") folamh. Cuir an URL ábhair leis má tá "Terms of use" cumasaithe.',
  empty_social_connectors:
    'Níl aon nascóirí sóisialta ann. Cuir nascóirí sóisialta cumasaithe leis nuair atá an modh sínithe isteach sóisialta cumasaithe.',
  enabled_connector_not_found: 'Níor aimsíodh nascóir {{type}} cumasaithe.',
  not_one_and_only_one_primary_sign_in_method:
    'Caithfidh modh sínithe isteach príomha amháin, agus ceann amháin amháin, a bheith ann. Seiceáil an méid a chuir tú isteach.',
  username_requires_password:
    'Ní mór pasfhocal a shocrú a chumasú don aitheantóir clárúcháin ainm úsáideora.',
  passwordless_requires_verify:
    'Ní mór fíorú a chumasú don aitheantóir clárúcháin ríomhphoist/gutháin.',
  miss_sign_up_identifier_in_sign_in:
    'Caithfidh an t-aitheantóir clárúcháin a bheith sna modhanna sínithe isteach.',
  password_sign_in_must_be_enabled:
    'Ní mór síniú isteach le pasfhocal a chumasú nuair is gá pasfhocal a shocrú le linn clárúcháin.',
  code_sign_in_must_be_enabled:
    'Ní mór síniú isteach le cód fíoraithe a chumasú nuair nach gá pasfhocal a shocrú le linn clárúcháin.',
  unsupported_default_language: 'Ní thacaítear leis an teanga {{language}} faoi láthair.',
  at_least_one_authentication_factor:
    'Caithfidh tú fachtóir fíordheimhnithe amháin ar a laghad a roghnú.',
  backup_code_cannot_be_enabled_alone: 'Ní féidir cód cúltaca a chumasú leis féin.',
  duplicated_mfa_factors: 'Fachtóirí MFA dúblacha.',
  email_verification_code_cannot_be_used_for_mfa:
    'Ní féidir cód fíoraithe ríomhphoist a úsáid do MFA nuair atá fíorú ríomhphoist cumasaithe le haghaidh síniú isteach.',
  phone_verification_code_cannot_be_used_for_mfa:
    'Ní féidir cód fíoraithe SMS a úsáid do MFA nuair atá fíorú SMS cumasaithe le haghaidh síniú isteach.',
  email_verification_code_cannot_be_used_for_sign_in:
    'Ní féidir cód fíoraithe ríomhphoist a úsáid le haghaidh síniú isteach nuair atá sé cumasaithe do MFA.',
  phone_verification_code_cannot_be_used_for_sign_in:
    'Ní féidir cód fíoraithe SMS a úsáid le haghaidh síniú isteach nuair atá sé cumasaithe do MFA.',
  adaptive_mfa_requires_mfa: 'Ní mór MFA a chumasú sula gcumasaítear MFA oiriúnaitheach.',
  adaptive_mfa_requires_non_skippable_policy:
    'Éilíonn MFA oiriúnaitheach polasaí leide MFA nach féidir a scipeáil. Úsáid PromptOnlyAtSignInMandatory nó PromptAtSignInAndSignUpMandatory.',
  non_adaptive_mfa_requires_skippable_policy:
    'Nuair atá MFA oiriúnaitheach díchumasaithe, caithfidh sé a bheith indéanta an polasaí leide MFA a scipeáil. Ná húsáid PromptOnlyAtSignInMandatory ná PromptAtSignInAndSignUpMandatory.',
  duplicated_sign_up_identifiers: 'Braitheadh aitheantóirí clárúcháin dúblacha.',
  missing_sign_up_identifiers: 'Ní féidir leis an bpríomh-aitheantóir clárúcháin a bheith folamh.',
  invalid_custom_email_blocklist_format:
    'Míreanna neamhbhailí sa liosta bloc ríomhphoist saincheaptha: {{items, list(type:conjunction)}}. Caithfidh gach mír a bheith ina seoladh ríomhphoist nó ina fearann ríomhphoist bailí, m.sh., foo@example.com nó @example.com.',
  forgot_password_method_requires_connector:
    'Éilíonn an modh pasfhocail dhearmadta nascóir {{method}} cumraithe.',
  password_expiration_requires_forgot_password:
    'Éilíonn dul in éag pasfhocail modh pasfhocail dhearmadta amháin ar a laghad le nascóir bailí.',
  password_expiration_not_enabled:
    'Níl an polasaí dul in éag pasfhocail cumasaithe. Cumasaigh é i socruithe an tsínithe isteach sula gcuireann tú pasfhocail in éag.',
  password_expiration_invalid_period_days:
    'Caithfidh líon laethanta na tréimhse bailíochta a bheith ina shlánuimhir dheimhneach nuair atá dul in éag pasfhocail cumasaithe.',
  username_policy_case_conflicts_exist:
    'Ní féidir aistriú go hainmneacha úsáideora nach bhfuil cás-íogair fad is atá ainmneacha úsáideora ann nach bhfuil difríocht eatarthu ach sa chás. Réitigh na coinbhleachtaí agus bain triail eile as.',
};

export default Object.freeze(sign_in_experiences);
