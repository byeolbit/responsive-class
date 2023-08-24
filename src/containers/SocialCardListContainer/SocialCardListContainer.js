import {useEffect, useState} from 'react';
import SocialCardList from '../../components/social-card-list/SocialCardList';

import socialDataMock from '../../mock/social.json';

const SocialCardListContainer = () => {
  const [socialDataList, setSocialDataList] = useState([]);

  const getData = () => {
    return Promise.resolve(socialDataMock);
  }

  useEffect(() => {
    getData().then((data) => {
      setSocialDataList(data);
    })
  }, [])

  return (
    <SocialCardList socialDataList={socialDataList} />
  )
}

export default SocialCardListContainer;