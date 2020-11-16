import React from 'react';
import {View, Text, StyleSheet, StatusBar} from 'react-native';

const SplashScreen = (props) => {
  setTimeout(() => {
    props.navigation.replace('Login');
    // props.navigation.navigate('Login');
  }, 4000);
  return (
    <View style={style.container}>
      <StatusBar barStyle="default" backgroundColor="#6379F4" />
      <Text style={style.logo}>Zwallet</Text>
    </View>
  );
};

export default SplashScreen;

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#6379F4',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    marginTop: -40,
    color: 'white',
    fontWeight: 'bold',
    fontSize: 27,
  },
});
