# GetCertus

GetCertus is an open-source identity platform: a fork of [Logto](https://github.com/logto-io/logto)
v1.45.0 with its own name, logo and colours.

## Licence

Logto is licensed under the Mozilla Public License 2.0 (`LICENSE`). This fork keeps that licence for
every file that came from Logto, including the files we changed. The source of this fork, with all
changes, is published in this repository. "Logto" is a trademark of Silverhand Inc.; GetCertus is
not affiliated with or endorsed by Logto or Silverhand.

## What GetCertus changes

| Area | Change |
|---|---|
| Name in the UI | "Logto" → "GetCertus" in console and sign-in texts (`packages/phrases*`) |
| Logo, favicons | GetCertus mark and wordmark (console, sign-in pages, sign-out page) |
| Colours | Console and sign-in palette from GetCertus pine (`#385C47`), accent clay (`#AB5A3C`) |
| Sign-in signature | "Secured by GetCertus" instead of "Powered by Logto" (`LogtoSignature`) |
| Default sign-in experience | GetCertus colour; no logo hosted on logto.io |
| Console links | Support, Discord, GitHub, website and pricing links go to GetCertus; plan and feature notices point to the GetCertus plans page; no Logto Cloud upsell and no Logto License tab (`console/src/consts/external-links.ts`, `utils/oss-upsell.ts`) |
| Languages | Russian and Ukrainian removed; sign-in pages and admin console added in Danish, Dutch, Finnish, Greek, Hebrew (right-to-left), Irish, Romanian and Swedish (`packages/phrases-experience/src/locales`, `packages/phrases/src/locales`). The console's Cloud-only billing, subscription and upsell pages are not translated in these eight languages and fall back to English |

Code identifiers, package names (`@logto/*`), database schema and APIs are unchanged, so upstream
Logto releases can still be merged.

## Plan limits (hosted instances)

Set by the customer portal on each customer's instance; unset means unlimited.

| Variable | Limits | Error when reached |
|---|---|---|
| `GETCERTUS_MAX_APPS` | applications of any type | 403 `subscription.limit_exceeded` |
| `GETCERTUS_MAX_USERS` | end users (Management API and sign-up) | 403 `subscription.limit_exceeded` |
| `GETCERTUS_MAX_SSO` | enterprise SSO connectors | 403 `subscription.limit_exceeded` |
| `GETCERTUS_BRANDING=1` | allows hiding the "Secured by GetCertus" signature | otherwise the setting is refused |

Code: `packages/core/src/utils/getcertus-plan.ts`, used in `libraries/quota.ts`, `libraries/user.ts`
and `libraries/subscription.ts`. The admin tenant is never limited.

## Not changed yet

- Documentation links in the console still open the Logto documentation (`docs.logto.io`), which describes the same software, until GetCertus has its own docs site.
