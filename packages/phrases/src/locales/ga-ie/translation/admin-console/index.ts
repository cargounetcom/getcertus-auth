/* GetCertus addition (MPL-2.0, see GETCERTUS.md): admin console phrases. */
import admin_user from './admin-user.js';
import api_resource_details from './api-resource-details.js';
import api_resources from './api-resources.js';
import application_details from './application-details.js';
import applications from './applications.js';
import connector_details from './connector-details.js';
import connectors from './connectors.js';
import enterprise_sso_details from './enterprise-sso-details.js';
import enterprise_sso from './enterprise-sso.js';
import errors from './errors.js';
import general from './general.js';
import get_started from './get-started.js';
import menu from './menu.js';
import security from './security.js';
import sign_in_exp from './sign-in-exp.js';
import system_app from './system-app.js';
import tab_sections from './tab-sections.js';
import tabs from './tabs.js';
import title from './title.js';
import user_details from './user-details.js';
import users from './users.js';

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
};

export default Object.freeze(admin_console);
