import {ICON_BY_NAME} from './constants.js';

const Icon = ({iconName, size=23}) => {
  let iconSrc = ICON_BY_NAME[iconName];

  return (
    <img width={size} src={iconSrc} alt={iconName} />
  )
}

export default Icon;
