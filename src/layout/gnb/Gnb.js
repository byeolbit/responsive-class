import React from 'react';

import GnbLogo from '../../components/gnb-logo/GnbLogo';
import {ICON_NAME} from '../../components/common/icon/constants';
import MenuItem from '../../components/gnb-menu-item/GnbMenuItem';

const Gnb = () => {
  const menuItems = [
    {icon: ICON_NAME.HOME, label: 'Home'},
    {icon: ICON_NAME.STATISTIC, label: 'Statistic'},
    {icon: ICON_NAME.FRIENDS, label: 'Friends'},
    {icon: ICON_NAME.PROFILE, label: 'Profile'},
    {icon: ICON_NAME.SETTING, label: 'Setting'}
  ]

  return (
    <div>
      <GnbLogo />
      <div>
        {menuItems.map((item, index) => (
          <React.Fragment key={index}>
            <MenuItem iconName={item.icon} itemName={item.label}/>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default Gnb;
