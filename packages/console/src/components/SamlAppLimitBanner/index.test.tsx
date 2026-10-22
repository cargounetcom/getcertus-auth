import resources from '@logto/phrases';
import { render, screen } from '@testing-library/react';
import i18next from 'i18next';
import type * as React from 'react';
import { MemoryRouter } from 'react-router-dom';

import { resetMockEnv, type EnvTestUtils } from '@/test-utils/env';

import SamlAppLimitBanner from '.';

jest.mock('@/consts/env', () => jest.requireActual<EnvTestUtils>('@/test-utils/env').mockEnvModule);

jest.mock('@/contexts/TenantsProvider', () => {
  const { createContext } = jest.requireActual<typeof React>('react');

  return { TenantsContext: createContext({ currentTenantId: 'default' }) };
});

describe('SamlAppLimitBanner', () => {
  beforeAll(() => {
    i18next.addResourceBundle('en', 'translation', resources.en.translation, true, true);
  });

  beforeEach(resetMockEnv);

  it.each([
    { variant: 'inline', entry: 'saml_app_applications_limit_notice' },
    { variant: 'footer', entry: 'saml_app_create_modal_limit_banner' },
  ] as const)('embeds the plans link in the $variant quota explanation', ({ variant, entry }) => {
    const { rerender } = render(
      <MemoryRouter>
        <SamlAppLimitBanner variant={variant} limit={7} />
      </MemoryRouter>
    );
    const plansLink = screen.getByRole('link', { name: 'GetCertus plans' });
    const plansUrl = `https://www.getcertus.app/?utm_source=getcertus_console&utm_medium=console&utm_campaign=plan_upsell&utm_content=${entry}#plans`;

    expect(plansLink.parentElement?.textContent).toContain('7 SAML applications');
    expect(plansLink.parentElement?.textContent).not.toContain('<selfHostedPlans>');
    expect(plansLink.getAttribute('href')).toBe(plansUrl);
    expect(plansLink.getAttribute('target')).toBe('_blank');
    expect(screen.getByRole('link', { name: 'Try GetCertus now' }).getAttribute('href')).toBe(
      plansUrl
    );

    rerender(
      <MemoryRouter>
        <SamlAppLimitBanner variant={variant} limit={11} />
      </MemoryRouter>
    );
    const licenseLink = screen.getByRole('link', { name: 'GetCertus plans' });

    expect(licenseLink.parentElement?.textContent).toContain('11 SAML applications');
  });
});
