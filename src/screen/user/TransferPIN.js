import React, {useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import style from '../../style/Profile';
import {View, Text, StatusBar, ToastAndroid} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import InputPin from '../../components/InputText/InputPIN';
import Button from '../../components/Button/BigButton';
import {Transfer} from '../../redux/actions/Transfer';

function TransferPIN(props) {
  const {amount, note} = props.route.params;
  // console.log(amount);
  const [pin, setPin] = useState('');
  const {token} = useSelector((state) => state.Auth);
  const {userdata, userdatatransaction} = useSelector((state) => state.User);
  const {loading} = useSelector((state) => state.Transfer);
  const dispatch = useDispatch();
  const isActive = () => {
    if (pin.length < 6) {
      return false;
    } else {
      return true;
    }
  };
  const onSubmit = () => {
    if (pin.length < 6) {
      ToastAndroid.show('fill out the form correctly!', ToastAndroid.SHORT);
    } else {
      if (pin == userdata.pin) {
        ToastAndroid.show('Proses..', ToastAndroid.SHORT);
        dispatch(
          Transfer(token, {
            receiver_id: userdatatransaction.id,
            amount: amount,
            note: note,
          }),
        );
        if (!loading) {
          props.navigation.navigate('TransferSuccess', {
            amount: amount,
            note: note,
          });
        }
      } else {
        ToastAndroid.show('Your pin is wrong', ToastAndroid.SHORT);
      }
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
        <Text style={style.textFnd}>TransferPIN</Text>
      </View>
      <View style={(style.content, {paddingHorizontal: 10})}>
        <Text style={style.title}>
          Enter your 6 digits PIN for confirmation to continue transferring
          money.
        </Text>
        <InputPin pin={pin} setPin={setPin} />
        <View style={{marginTop: 50}}>
          <Button
            isActive={isActive}
            onSubmit={onSubmit}
            name={'Transfer Now'}
          />
        </View>
      </View>
    </View>
  );
}

export default TransferPIN;
