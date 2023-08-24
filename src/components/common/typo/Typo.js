import styles from './Typo.module.scss';

export const TitleBig = ({children}) => (
  <span className={`${styles.TitleBig} TypoTitleBig`}>
    {children}
  </span>
);

export const Title = ({children}) => (
  <span className={`${styles.Title} TypoTitle`}>
    {children}
  </span>
);

export const TitleSmall = ({children}) => (
  <span className={`${styles.TitleSmall} TypoTitleSmall`}>
    {children}
  </span>
);

export const Contents = ({children}) => (
  <span className={`${styles.Contents} TypoContents`}>
    {children}
  </span>
);