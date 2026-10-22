/* GetCertus addition (MPL-2.0, see GETCERTUS.md): admin console phrases. */
import admin_user from './admin-user.js';
import application_details from './application-details.js';
import applications from './applications.js';
import errors from './errors.js';
import general from './general.js';
import menu from './menu.js';
import system_app from './system-app.js';
import tab_sections from './tab-sections.js';
import tabs from './tabs.js';
import title from './title.js';

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
};

export default Object.freeze(admin_console);
