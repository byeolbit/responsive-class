import {useCallback, useEffect, useState} from 'react';
import { TitleBig } from '../common/typo/Typo';

const DEFAULT_LOGO = 'Running Mate';
const TABLET_LOGO = 'RM';

const GnbLogo = () => {
  const [logoString, setLogoString] = useState('');

  const tabletMql = window.matchMedia('screen and (min-width: 929px) and (max-width: 1439px)');
  const changeEventHandler = useCallback((e) => {
    if (e.matches) {
      setLogoString(TABLET_LOGO);
    } else {
      setLogoString(DEFAULT_LOGO);
    }
  }, []);
  tabletMql.addEventListener('change', changeEventHandler);

  useEffect(() => {
    // 최초 실행시에 로고의 내용을 초기화
    if (window.innerWidth >= 929 && window.innerWidth < 1440) {
      setLogoString(TABLET_LOGO);
    }

    return () => {
      tabletMql.removeEventListener('change', changeEventHandler);
    }
  }, [changeEventHandler, tabletMql]);

  return (
    <TitleBig>{logoString}</TitleBig>
  )
}

export default GnbLogo;
