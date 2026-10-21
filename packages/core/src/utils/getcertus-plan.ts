/*
 * GetCertus modification (MPL-2.0, see GETCERTUS.md).
 *
 * Plan limits of a hosted GetCertus instance, read from the environment. The customer portal
 * sets these variables on each customer's instance from the Stripe subscription (plan + add-ons).
 * An unset variable means "no limit", so self-hosters who set nothing get unlimited usage.
 *
 *   GETCERTUS_MAX_APPS   applications of any type (the plan's "projects")
 *   GETCERTUS_MAX_USERS  end users (the plan's users plus +1,000 user packs)
 *   GETCERTUS_MAX_SSO    enterprise SSO connectors (add-on)
 *   GETCERTUS_BRANDING   "1" lets the customer hide the "Secured by GetCertus" signature (add-on)
 */
import { type UsageKey } from '#src/queries/tenant-usage/types.js';

export type GetCertusPlan = {
  maxApplications?: number;
  maxUsers?: number;
  maxEnterpriseSso?: number;
  branding: boolean;
};

const readLimit = (name: string): number | undefined => {
  const raw = process.env[name];
  if (raw === undefined || raw.trim() === '') {
    return undefined;
  }
  const value = Number(raw);
  return Number.isInteger(value) && value >= 0 ? value : undefined;
};

/** Read on every call, so a redeploy with new variables is the only thing needed to change a plan. */
export const getCertusPlan = (): GetCertusPlan => ({
  maxApplications: readLimit('GETCERTUS_MAX_APPS'),
  maxUsers: readLimit('GETCERTUS_MAX_USERS'),
  maxEnterpriseSso: readLimit('GETCERTUS_MAX_SSO'),
  branding: process.env.GETCERTUS_BRANDING === '1',
});

/** The GetCertus limit for a Logto quota key, or undefined when GetCertus sets none for it. */
export const getCertusLimitForKey = (key: UsageKey): number | undefined => {
  const plan = getCertusPlan();
  switch (key) {
    case 'applicationsLimit': {
      return plan.maxApplications;
    }
    case 'enterpriseSsoLimit': {
      return plan.maxEnterpriseSso;
    }
    default: {
      return undefined;
    }
  }
};
