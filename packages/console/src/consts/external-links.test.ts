import {
  buildOfficialWebsiteContactPageUrl,
  contactEmailLink,
  discordLink,
  logtoCloudConsoleUrl,
  selfHostedPlansLink,
} from './external-links';

describe('external links (GetCertus)', () => {
  it('sends upsell and plan links to GetCertus', () => {
    expect(logtoCloudConsoleUrl).toBe('https://id.getcertus.app');
    expect(selfHostedPlansLink).toBe('https://www.getcertus.app/#plans');
  });

  it('uses the GetCertus support address and community', () => {
    expect(contactEmailLink).toBe('mailto:support@getcertus.app');
    expect(buildOfficialWebsiteContactPageUrl('private-cloud')).toBe(
      'mailto:support@getcertus.app'
    );
    expect(discordLink).toBe('https://discord.com/invite/P9EtGjtQy');
  });
});
