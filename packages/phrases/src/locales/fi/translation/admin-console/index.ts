/* GetCertus addition (MPL-2.0, see GETCERTUS.md): admin console phrases. */
import admin_user from './admin-user.js';
import api_resource_details from './api-resource-details.js';
import api_resources from './api-resources.js';
import application_details from './application-details.js';
import applications from './applications.js';
import components from './components.js';
import connector_details from './connector-details.js';
import connectors from './connectors.js';
import dashboard from './dashboard.js';
import enterprise_sso_details from './enterprise-sso-details.js';
import enterprise_sso from './enterprise-sso.js';
import errors from './errors.js';
import general from './general.js';
import get_started from './get-started.js';
import guide from './guide.js';
import log_details from './log-details.js';
import logs from './logs.js';
import menu from './menu.js';
import mfa from './mfa.js';
import oidc_configs from './oidc-configs.js';
import organization_details from './organization-details.js';
import organizations from './organizations.js';
import oss_onboarding from './oss-onboarding.js';
import permissions from './permissions.js';
import profile from './profile.js';
import protected_app from './protected-app.js';
import role_details from './role-details.js';
import roles from './roles.js';
import security from './security.js';
import session_expired from './session-expired.js';
import sign_in_exp from './sign-in-exp.js';
import system_app from './system-app.js';
import tab_sections from './tab-sections.js';
import tabs from './tabs.js';
import tenant_members from './tenant-members.js';
import tenants from './tenants.js';
import title from './title.js';
import topbar from './topbar.js';
import user_details from './user-details.js';
import users from './users.js';
import webhook_details from './webhook-details.js';
import webhooks from './webhooks.js';
import welcome from './welcome.js';

const admin_console = {
  title,
  admin_user,
  system_app,
  menu,
  general,
  errors,
  tab_sections,
  tabs,
  applications,
  application_details,
  api_resources,
  api_resource_details,
  connectors,
  connector_details,
  enterprise_sso,
  enterprise_sso_details,
  security,
  get_started,
  users,
  user_details,
  sign_in_exp,
  dashboard,
  logs,
  log_details,
  session_expired,
  welcome,
  roles,
  role_details,
  permissions,
  profile,
  components,
  webhooks,
  webhook_details,
  tenants,
  tenant_members,
  topbar,
  guide,
  mfa,
  organizations,
  oss_onboarding,
  oidc_configs,
  organization_details,
  protected_app,
};

export default Object.freeze(admin_console);
