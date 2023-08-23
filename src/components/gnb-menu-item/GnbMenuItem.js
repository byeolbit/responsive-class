import Icon from '../common/icon/Icon'
import { Title } from '../common/typo/Typo'

import styles from './GnbMenuItem.module.scss';

const GnbMenuItem = ({iconName, itemName}) => {
  return (
    <div className={styles.MenuItem}>
      <div className={styles.Icon}>
        <Icon iconName={iconName}/>
      </div>
      <div className={styles.Label}>
        <Title>{itemName}</Title>
      </div>
    </div>
  )
}

export default GnbMenuItem;
