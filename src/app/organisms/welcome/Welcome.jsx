import React from 'react';
import './Welcome.scss';

import Text from '../../atoms/text/Text';

import CinnySvg from '../../../../public/res/svg/nexus-icon.png';

function Welcome() {
  return (
    <div className="app-welcome flex--center">
      <div>
        <img className="app-welcome__logo noselect" src={CinnySvg} alt="Nexus logo" />
        <Text className="app-welcome__heading" variant="h1" weight="medium" primary>Welcome to Nexus</Text>
        <Text className="app-welcome__subheading" variant="s1">A unified messaging and communication aggegate.</Text>
      </div>
    </div>
  );
}

export default Welcome;
