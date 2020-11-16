import React, {useState} from 'react';
import {View, Text, StatusBar} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import style from '../../style/Profile';

const Notification = (props) => {
  return (
    <View style={style.container}>
      <StatusBar barStyle="default" backgroundColor="#6379f4" />
      <View style={style.nav}>
        <Icon
          style={style.iBack}
          name="arrowleft"
          size={25}
          color="black"
          onPress={() => {
            props.navigation.goBack();
          }}
        />
        <Text style={style.textFnd}>Notification</Text>
      </View>
      <View style={style.content}>
        <Text style={style.title}>
          You must enter your current password and then type your new password
          twice.
        </Text>
      </View>
    </View>
  );
};

export default Notification;
