import React from 'react';

import SocialCard from '../social-card/SocialCard';
import styles from './SocialCardList.module.scss';

const SocialCardList = ({socialDataList}) => {
  return (
    <div className={styles.SocialCardList}>
      {
        socialDataList.map(({pictureUrl, name, city, stateMsg, history}, index) => (
          <React.Fragment key={name + index}>
            <SocialCard
              pictureUrl={pictureUrl}
              name={name}
              city={city}
              stateMsg={stateMsg}
              history={history}/>
          </React.Fragment>
        ))
      }
    </div>
  )
}

export default SocialCardList;
