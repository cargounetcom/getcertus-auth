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
| Languages | Russian and Ukrainian removed |

Code identifiers, package names (`@logto/*`), database schema and APIs are unchanged, so upstream
Logto releases can still be merged.

## Not changed yet

- Links to Logto documentation (`docs.logto.io`) in the console.
- Logto Cloud upsell banners in the self-hosted console.
- New languages: Hebrew, Irish, Dutch, Swedish, Danish, Finnish, Romanian, Greek.
- GetCertus plans and limits (Starter, Pro, Studio).
