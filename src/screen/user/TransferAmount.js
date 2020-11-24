import React, {useState} from 'react';
import {
  View,
  Text,
  StatusBar,
  TextInput,
  Image,
  ToastAndroid,
} from 'react-native';
import {Input} from 'react-native-elements';
import {useSelector, useDispatch} from 'react-redux';
import {currency} from '../../helpers/currency';
import style from '../../style/transfer';
import Icon from 'react-native-vector-icons/Feather';
import avatar from '../../assets/img/user_.webp';
import Button from '.././../components/Button/BigButton';

const TransferAmont = (props) => {
  const {userdatatransaction, userdata, loading} = useSelector(
    (state) => state.User,
  );
  const [amount, setAmount] = useState('');
  const [note, setNote] = useState('');
  // console.log(userdata.balance != '');
  const onSubmit = () => {
    if (
      amount &&
      note &&
      userdata.balance != '' &&
      userdata.balance != 0 &&
      !loading
    ) {
      props.navigation.navigate('TransferConfirm', {
        amount: amount,
        note: note,
      });
    } else {
      ToastAndroid.show('fill out the form correctly!', ToastAndroid.LONG);
    }
  };

  const isActive = () => {
    if (
      amount &&
      note &&
      userdata.balance != '' &&
      userdata.balance != 0 &&
      !loading
    ) {
      return true;
    }
    return false;
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
        <Text style={style.textFnd}>Transfer</Text>
      </View>
      <View
        style={{
          marginVertical: 10,
          paddingVertical: 10,
          marginHorizontal: 10,
          flexDirection: 'row',
          borderRadius: 10,
          borderWidth: 1,
          borderColor: '#eeeeee',
          elevation: 1,
        }}>
        <View style={{zIndex: 0}}>
          <Image
            source={
              userdatatransaction.photo
                ? {uri: userdatatransaction.photo}
                : {avatar}
            }
            style={style.imgList}
          />
        </View>
        <View>
          <Text style={{fontWeight: 'bold'}}>
            {userdatatransaction.first_name}
          </Text>
          <Text style={{color: '#383b40', paddingTop: 10}}>
            {userdatatransaction?.phone
              ? `${userdatatransaction?.phone}`
              : 'set your phone'}
          </Text>
        </View>
      </View>
      <View style={{alignItems: 'center', marginHorizontal: 10}}>
        <Text
          style={{
            alignSelf: 'center',
            marginVertical: 30,
            fontWeight: 'bold',
            color: '#383b40',
          }}>
          Rp {currency(userdata.balance)} Available
        </Text>
        <TextInput
          value={amount}
          keyboardType="numeric"
          placeholder="0.00"
          placeholderTextColor="#E5E8ED"
          style={{
            marginTop: 10,
            fontSize: 40,
            marginBottom: 20,
            color: '#6379f4',
          }}
          onChangeText={(num) => {
            setAmount(num);
          }}
        />
        <Input
          placeholder="Add some notes"
          leftIcon={
            <Icon
              name="edit-2"
              size={24}
              color={note === '' ? '#383b40' : '#6379F4'}
            />
          }
          onChangeText={(text) => {
            setNote(text);
          }}
        />
        <Button isActive={isActive} onSubmit={onSubmit} name={'Continue'} />
      </View>
    </View>
  );
};

export default TransferAmont;
