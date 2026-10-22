/*
 * GetCertus modification (MPL-2.0, see GETCERTUS.md): the OSS note points to the GetCertus
 * Branding add-on on the plans page (new tab) instead of Logto Cloud or the License page.
 */
import resources from '@logto/phrases';
import { render, screen } from '@testing-library/react';
import i18next from 'i18next';
import type * as React from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { MemoryRouter } from 'react-router-dom';

import HideLogtoBrandingField from './HideLogtoBrandingField';

jest.mock('@/consts/env', () => ({
  isCloud: false,
  isDevFeaturesEnabled: false,
}));

jest.mock('@/contexts/TenantsProvider', () => {
  const { createContext } = jest.requireActual<typeof React>('react');

  return { TenantsContext: createContext({ currentTenantId: 'default' }) };
});

jest.mock('@/components/FeatureTag', () => ({
  CloudTag: ({ children }: { readonly children: React.ReactNode }) => <span>{children}</span>,
  CombinedAddOnAndFeatureTag: () => null,
}));

jest.mock('@/scss/modal.module.scss', () => ({}));

const entry = 'sign_in_exp_hide_logto_branding_oss_note';

function Editor() {
  const form = useForm({ defaultValues: { name: 'Original name' } });

  return (
    <FormProvider {...form}>
      <HideLogtoBrandingField variant="oss-upsell" isEnabled={false} />
    </FormProvider>
  );
}

describe('hide branding note (GetCertus)', () => {
  beforeAll(() => {
    i18next.addResourceBundle(
      'en',
      'translation',
      { admin_console: { sign_in_exp: resources.en.translation.admin_console.sign_in_exp } },
      true
    );
  });

  it('points to the Branding add-on on the GetCertus plans page in a new tab', () => {
    render(
      <MemoryRouter>
        <Editor />
      </MemoryRouter>
    );
    const link = screen.getByRole('link', { name: 'Branding add-on' });

    expect(link.parentElement?.textContent).toBe(
      'Hiding the signature needs the GetCertus Branding add-on.'
    );
    const url = new URL(link.getAttribute('href') ?? '');
    expect(url.origin).toBe('https://www.getcertus.app');
    expect(url.hash).toBe('#plans');
    expect(url.searchParams.get('utm_content')).toBe(entry);
    expect(link.getAttribute('target')).toBe('_blank');
  });
});
