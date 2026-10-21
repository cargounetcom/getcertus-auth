import { getCertusLimitForKey, getCertusPlan } from './getcertus-plan.js';

const keys = ['GETCERTUS_MAX_APPS', 'GETCERTUS_MAX_USERS', 'GETCERTUS_MAX_SSO', 'GETCERTUS_BRANDING'];

describe('getCertusPlan', () => {
  afterEach(() => {
    for (const key of keys) {
      // eslint-disable-next-line @silverhand/fp/no-delete
      delete process.env[key];
    }
  });

  it('is unlimited without variables', () => {
    expect(getCertusPlan()).toEqual({
      maxApplications: undefined,
      maxUsers: undefined,
      maxEnterpriseSso: undefined,
      branding: false,
    });
    expect(getCertusLimitForKey('applicationsLimit')).toBeUndefined();
  });

  it('reads limits and the branding flag', () => {
    process.env.GETCERTUS_MAX_APPS = '10';
    process.env.GETCERTUS_MAX_USERS = '1000';
    process.env.GETCERTUS_MAX_SSO = '0';
    process.env.GETCERTUS_BRANDING = '1';
    expect(getCertusPlan()).toEqual({
      maxApplications: 10,
      maxUsers: 1000,
      maxEnterpriseSso: 0,
      branding: true,
    });
    expect(getCertusLimitForKey('applicationsLimit')).toBe(10);
    expect(getCertusLimitForKey('enterpriseSsoLimit')).toBe(0);
    expect(getCertusLimitForKey('hooksLimit')).toBeUndefined();
  });

  it('ignores values that are not whole non-negative numbers', () => {
    process.env.GETCERTUS_MAX_APPS = 'ten';
    process.env.GETCERTUS_MAX_USERS = '-1';
    process.env.GETCERTUS_MAX_SSO = '2.5';
    expect(getCertusPlan().maxApplications).toBeUndefined();
    expect(getCertusPlan().maxUsers).toBeUndefined();
    expect(getCertusPlan().maxEnterpriseSso).toBeUndefined();
  });
});
