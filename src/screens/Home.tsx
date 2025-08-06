import { useNavigation } from '@react-navigation/native';
import React, { FC } from 'react';
import { View, Text, Button, StatusBar, StyleSheet } from 'react-native';

const Home: FC = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#6200ee" />
      <Text style={styles.title}>Home Screen</Text>
      <Button
        title="Go to Profile"
        onPress={() => navigation.navigate('Profile')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f2f2',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
});

export default Home;
