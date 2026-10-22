import type { LanguageTag } from '@logto/language-kit';
import { languages, findSupportedLanguageTag } from '@logto/language-kit';
import type { DeepPartial, NormalizeKeyPaths } from '@silverhand/essentials';
import { z } from 'zod';

import ar from './locales/ar/index.js';
import daDK from './locales/da-dk/index.js';
import de from './locales/de/index.js';
import elementGR from './locales/el-gr/index.js';
import en from './locales/en/index.js';
import es from './locales/es/index.js';
import faIR from './locales/fa-ir/index.js';
import fi from './locales/fi/index.js';
import fr from './locales/fr/index.js';
import gaIE from './locales/ga-ie/index.js';
import heIL from './locales/he-il/index.js';
import it from './locales/it/index.js';
import ja from './locales/ja/index.js';
import ko from './locales/ko/index.js';
import nl from './locales/nl/index.js';
import plPL from './locales/pl-pl/index.js';
import ptBR from './locales/pt-br/index.js';
import ptPT from './locales/pt-pt/index.js';
import roRO from './locales/ro-ro/index.js';
import sv from './locales/sv/index.js';
import th from './locales/th/index.js';
import trTR from './locales/tr-tr/index.js';
import zhCN from './locales/zh-cn/index.js';
import zhHK from './locales/zh-hk/index.js';
import zhTW from './locales/zh-tw/index.js';
import type { LocalePhrase } from './types.js';

export type { LocalePhrase } from './types.js';

export type DefaultLocale = 'en';
export type I18nKey = NormalizeKeyPaths<typeof en.translation>;

export const builtInLanguages = [
  'ar',
  'da-DK',
  'de',
  'el-GR',
  'en',
  'es',
  'fa-IR',
  'fi',
  'fr',
  'ga-IE',
  'he-IL',
  'it',
  'ja',
  'ko',
  'nl',
  'pl-PL',
  'pt-BR',
  'pt-PT',
  'ro-RO',
  'sv',
  'th',
  'tr-TR',
  'zh-CN',
  'zh-HK',
  'zh-TW',
] as const;

export const builtInLanguageOptions = builtInLanguages.map((languageTag) => ({
  value: languageTag,
  title: languages[languageTag],
}));

export const builtInLanguageTagGuard = z.enum(builtInLanguages);

export type BuiltInLanguageTag = z.infer<typeof builtInLanguageTagGuard>;

export type Errors = typeof en.errors;
export type LogtoErrorCode = NormalizeKeyPaths<Errors>;
export type LogtoErrorI18nKey = `errors:${LogtoErrorCode}`;

export type AdminConsoleKey = NormalizeKeyPaths<typeof en.translation.admin_console>;

export const getDefaultLanguageTag = (language: string): LanguageTag =>
  builtInLanguageTagGuard.parse(
    findSupportedLanguageTag(language ? [language] : [], builtInLanguages)
  );

export const isBuiltInLanguageTag = (language: string): language is BuiltInLanguageTag =>
  builtInLanguageTagGuard.safeParse(language).success;

export type Resource = Record<
  Exclude<BuiltInLanguageTag, DefaultLocale>,
  DeepPartial<LocalePhrase>
> & {
  [key in DefaultLocale]: LocalePhrase;
};

const resource: Resource = {
  ar,
  'da-DK': daDK,
  de,
  'el-GR': elementGR,
  en,
  es,
  'fa-IR': faIR,
  fi,
  fr,
  'ga-IE': gaIE,
  'he-IL': heIL,
  it,
  ja,
  ko,
  nl,
  'pl-PL': plPL,
  'pt-BR': ptBR,
  'pt-PT': ptPT,
  'ro-RO': roRO,
  sv,
  th,
  'tr-TR': trTR,
  'zh-CN': zhCN,
  'zh-HK': zhHK,
  'zh-TW': zhTW,
};

export default resource;
