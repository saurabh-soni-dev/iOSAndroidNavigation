import { useNavigation } from '@react-navigation/native';
import React, { FC, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  Button,
  BackHandler,
  Platform,
  Alert,
} from 'react-native';

const Profile: FC = () => {
  const navigation = useNavigation();

  useEffect(() => {
    if (Platform.OS === 'android') {
      const backAction = () => {
        Alert.alert('Hold on!', 'Are you sure you want to exit?', [
          { text: 'Cancel', style: 'cancel' },
          { text: 'YES', onPress: () => BackHandler.exitApp() },
        ]);
        return true;
      };

      const backHandler = BackHandler.addEventListener(
        'hardwareBackPress',
        backAction,
      );

      return backHandler.remove();
    }
  }, []);

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#ffffff" />
      <Text style={styles.title}>Profile Screen</Text>
      <Button title="Go to Profile" onPress={() => navigation.goBack()} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    color: '#333',
  },
});

export default Profile;
