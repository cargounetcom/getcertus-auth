import {
  buildCloudUpsellUrl,
  buildSelfHostedPlansUrl,
  openCloudUpsell,
  openSelfHostedPlansUpsell,
  ossUpsellEntries,
} from './oss-upsell';

describe('upsell helpers (GetCertus plans page)', () => {
  const mockWindowOpen = jest.fn<ReturnType<typeof window.open>, Parameters<typeof window.open>>();

  beforeEach(() => {
    jest.restoreAllMocks();
    jest.spyOn(window, 'open').mockImplementation(mockWindowOpen);
    mockWindowOpen.mockReset();
  });

  it.each(Object.values(ossUpsellEntries))('links %s to the GetCertus plans page', (entry) => {
    for (const href of [buildCloudUpsellUrl(entry), buildSelfHostedPlansUrl(entry)]) {
      const url = new URL(href);

      expect(url.origin).toBe('https://www.getcertus.app');
      expect(url.hash).toBe('#plans');
      expect(url.searchParams.get('utm_source')).toBe('getcertus_console');
      expect(url.searchParams.get('utm_content')).toBe(entry);
    }
  });

  it('opens the plans page in a new tab', () => {
    const targetUrl = openSelfHostedPlansUpsell({
      entry: ossUpsellEntries.tenantSettingsMembersOssUpsell,
    });

    expect(targetUrl).toContain('https://www.getcertus.app/');
    expect(mockWindowOpen).toHaveBeenCalledWith(targetUrl, '_blank', 'noopener,noreferrer');
  });

  it('returns the URL without navigation when window is unavailable', () => {
    jest
      .spyOn(globalThis, 'window', 'get')
      .mockReturnValue(undefined as unknown as Window & typeof globalThis);

    const targetUrl = openCloudUpsell({ entry: ossUpsellEntries.ossSidebarCloudCard });

    expect(targetUrl).toContain('utm_content=oss_sidebar_cloud_card');
    expect(mockWindowOpen).not.toHaveBeenCalled();
  });
});
