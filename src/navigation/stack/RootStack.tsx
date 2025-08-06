import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { FC } from 'react';
import Home from '../../screens/Home';
import Profile from '../../screens/Profile';
import { Platform } from 'react-native';

type RootStackTypes = {
  Home: undefined;
  Profile: undefined;
};

const Stack = createNativeStackNavigator<RootStackTypes>();

const RootStack: FC = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        presentation: Platform.OS === 'ios' ? 'modal' : 'card',
        animation:
          Platform.OS === 'ios' ? 'slide_from_bottom' : 'fade_from_bottom',
        gestureEnabled: Platform.OS === 'ios',
        ...Platform.select({
          //   ios: TransitionPresets.ModalSlideFromBottomIOS,
          //   android: TransitionPresets.FadeFromBottomAndroid,
        }),
        statusBarStyle: 'dark',
      }}
    >
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Profile" component={Profile} />
    </Stack.Navigator>
  );
};

export default RootStack;
