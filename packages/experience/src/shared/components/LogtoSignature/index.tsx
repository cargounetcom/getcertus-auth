/*
 * GetCertus modification of Logto's sign-in signature (MPL-2.0, see LICENSE and GETCERTUS.md).
 * Shows "Secured by GetCertus" instead of the upstream "Powered by Logto" badge.
 */
import { Theme } from '@logto/schemas';

import LogoDark from '@/shared/assets/icons/logto-logo-dark.svg?react';
import LogoLight from '@/shared/assets/icons/logto-logo-light.svg?react';
import LogoShadow from '@/shared/assets/icons/logto-logo-shadow.svg?react';

import styles from './index.module.scss';

type Props = {
  readonly className?: string;
  readonly theme: Theme;
};

const LogtoSignature = ({ className, theme }: Props) => {
  const Logo = theme === Theme.Light ? LogoLight : LogoDark;

  return (
    <div className={className}>
      <span aria-label="Secured by GetCertus" className={styles.signature}>
        <span className={styles.text}>Secured by</span>
        <LogoShadow className={styles.staticIcon} />
        <Logo className={styles.highlightIcon} />
      </span>
    </div>
  );
};

export default LogtoSignature;
