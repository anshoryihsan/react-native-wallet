import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import style from './style';

function BigButton(props) {
  const {isActive, onSubmit, name, loading} = props;
  return (
    <TouchableOpacity
      onPress={onSubmit}
      style={!isActive() || loading ? style.loginBtn : style.loginBtnActive}>
      <Text
        style={
          !isActive() || loading ? style.loginText : style.loginTextActive
        }>
        {name}
      </Text>
    </TouchableOpacity>
  );
}

export default BigButton;
