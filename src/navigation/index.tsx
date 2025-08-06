import React, { FC } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import RootStack from './stack/RootStack';

const Route: FC = () => {
  return (
    <NavigationContainer>
      <RootStack />
    </NavigationContainer>
  );
};

export default Route;
