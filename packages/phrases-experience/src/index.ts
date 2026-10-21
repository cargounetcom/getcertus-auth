import type { LanguageTag } from '@logto/language-kit';
import { languages, findSupportedLanguageTag } from '@logto/language-kit';
import type { NormalizeKeyPaths } from '@silverhand/essentials';
import { z } from 'zod';

import ar from './locales/ar/index.js';
import cs from './locales/cs/index.js';
import daDK from './locales/da-dk/index.js';
import de from './locales/de/index.js';
import elementGR from './locales/el-gr/index.js';
import en from './locales/en/index.js';
import es from './locales/es/index.js';
import esMX from './locales/es-mx/index.js';
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

export type I18nKey = NormalizeKeyPaths<typeof en.translation>;

export const builtInLanguages = [
  'ar',
  'cs',
  'de',
  'en',
  'es',
  'es-MX',
  'fa-IR',
  'fr',
  'it',
  'ja',
  'ko',
  'nl',
  'pl-PL',
  'pt-PT',
  'pt-BR',
  'th',
  'tr-TR',
  'zh-CN',
  'zh-HK',
  'zh-TW',
  'da-DK',
  'el-GR',
  'fi',
  'ga-IE',
  'he-IL',
  'ro-RO',
  'sv',
] as const;

export const builtInLanguageOptions = builtInLanguages.map((languageTag) => ({
  value: languageTag,
  title: languages[languageTag],
}));

export const builtInLanguageTagGuard = z.enum(builtInLanguages);

export type BuiltInLanguageTag = z.infer<typeof builtInLanguageTagGuard>;

export type Resource = Record<BuiltInLanguageTag, LocalePhrase>;

const resource: Resource = {
  ar,
  cs,
  de,
  en,
  es,
  'es-MX': esMX,
  'fa-IR': faIR,
  fr,
  it,
  ja,
  ko,
  nl,
  'pl-PL': plPL,
  'pt-PT': ptPT,
  'pt-BR': ptBR,
  th,
  'tr-TR': trTR,
  'zh-CN': zhCN,
  'zh-HK': zhHK,
  'zh-TW': zhTW,
  'da-DK': daDK,
  'el-GR': elementGR,
  fi,
  'ga-IE': gaIE,
  'he-IL': heIL,
  'ro-RO': roRO,
  sv,
};

export const getDefaultLanguageTag = (language: string): LanguageTag =>
  builtInLanguageTagGuard.parse(
    findSupportedLanguageTag(language ? [language] : [], builtInLanguages, 'en')
  );

export const isBuiltInLanguageTag = (language: string): language is BuiltInLanguageTag =>
  builtInLanguageTagGuard.safeParse(language).success;

export default resource;
