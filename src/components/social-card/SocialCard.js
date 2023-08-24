import { Title, Contents, TitleSmall } from '../common/typo/Typo';

import styles from './SocialCard.module.scss';

const SocialCard = ({
  pictureUrl,
  name,
  city,
  stateMsg,
  history
}) => {
  return (
    <div className={styles.SocialCard}>
      <img className={styles.Avatar} src={pictureUrl} alt={name}/>
      <div>
        <Title>{name}</Title>
        <TitleSmall>{city}</TitleSmall>
      </div>
      <div>
        <Contents>{stateMsg}</Contents>
      </div>
      <div>
        <Title>{history}</Title>
      </div>
    </div>
  )
}

export default SocialCard;
