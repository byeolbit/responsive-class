import styles from './Layout.module.scss';
import Gnb from './gnb/Gnb';

const Layout = ({ children }) => (
  <div className={styles.Container}>
    <div className={styles.GnbWrapper}>
      <Gnb />
    </div>
    <div className={styles.ContentsWrapper}>
      {children}
    </div>
  </div>
)

export default Layout;
