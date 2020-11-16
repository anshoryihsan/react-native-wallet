import React, {useState} from 'react';
import style from '../../style/auth';
import {View, Text, SafeAreaView, ToastAndroid} from 'react-native';
import InputPin from '../../components/InputText/InputPIN';
import Button from '../../components/Button/BigButton';

function CreatePIN(props) {
  const {route} = props;
  const {params} = route;
  const [pin, setPin] = useState('');
  const [loading, setLoading] = useState(false);

  const data = {...params, pin};

  const onSubmit = () => {
    setLoading(true);
    if (pin) {
      ToastAndroid.show('loading....', ToastAndroid.SHORT);
      props.navigation.navigate('SignUpSuccess', data);
    } else {
      ToastAndroid.show('fill out the form correctly!', ToastAndroid.LONG);
    }
    setLoading(false);
  };

  const isActive = () => {
    if (pin) {
      return true;
    } else {
      return false;
    }
  };

  return (
    <SafeAreaView>
      <SafeAreaView style={style.container}>
        <Text style={style.brandName}>Zwallet</Text>
        <View style={style.content}>
          <View style={style.descript}>
            <Text style={style.header}>Create Security PIN</Text>
            <Text style={style.subHeader}>
              Create a PIN that’s contain 6 digits number for security purpose
              in Zwallet.
            </Text>
          </View>
          <View style={{alignItems: 'center'}}>
            <InputPin pin={pin} setPin={setPin} />
          </View>
          <Button
            isActive={isActive}
            onSubmit={onSubmit}
            name={'Confirm'}
            loading={loading}
          />
        </View>
      </SafeAreaView>
    </SafeAreaView>
  );
}
export default CreatePIN;
