import React from 'react';
import {SafeAreaView, Text} from 'react-native';
import SmootPinCode from 'react-native-smooth-pincode-input';
import style from './style';

function InputPin(props) {
  const {pin, setPin} = props;
  const filled = () => {
    if (pin.length === 6) {
      return true;
    } else {
      return false;
    }
  };
  return (
    <SafeAreaView style={{marginVertical: 50}}>
      <SmootPinCode
        password={true}
        codeLength={6}
        value={pin.toString()}
        cellStyle={filled() ? style.cellPinFilled : style.cellPin}
        onTextChange={(num) => setPin(num)}
        keyboardType="phone-pad"
      />
    </SafeAreaView>
  );
}

export default InputPin;
