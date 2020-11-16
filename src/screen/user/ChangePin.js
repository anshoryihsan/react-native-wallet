import React, {useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import style from '../../style/Profile';
import {View, Text, StatusBar, ToastAndroid} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import InputPin from '../../components/InputText/InputPIN';
import Button from '../../components/Button/BigButton';
import {UpdateUserData} from '../../redux/actions/User';

function ChangePin(props) {
  const [pin, setPin] = useState('');
  const {token} = useSelector((state) => state.Auth);
  const {success, message} = useSelector((state) => state.User);
  const dispatch = useDispatch();
  const isActive = () => {
    if (pin) {
      return true;
    } else {
      return false;
    }
  };
  const onSubmit = () => {
    if (pin) {
      dispatch(UpdateUserData(token, {pin: pin}));
      if (success) {
        props.navigation.replace('Profile');
        ToastAndroid.show('PIN updated', ToastAndroid.SHORT);
      }
      if (!success) {
        ToastAndroid.show('PIN failed to UPDATE!', ToastAndroid.SHORT);
      }
    } else {
      ToastAndroid.show('error', ToastAndroid.SHORT);
    }
  };
  return (
    <View style={style.container}>
      <StatusBar barStyle="default" backgroundColor="#6379f4" />
      <View style={style.nav}>
        <Icon
          style={style.iBack}
          name="arrow-left"
          size={25}
          color="black"
          onPress={() => {
            props.navigation.goBack();
          }}
        />
        <Text style={style.textFnd}>Change PIN</Text>
      </View>
      <View style={(style.content, {paddingHorizontal: 10})}>
        <Text style={style.title}>
          Enter your current 6 digits Zwallet PIN below to continue to the next
          steps.
        </Text>
        <InputPin pin={pin} setPin={setPin} />
        <Button isActive={isActive} onSubmit={onSubmit} name={'Change PIN'} />
      </View>
    </View>
  );
}

export default ChangePin;
