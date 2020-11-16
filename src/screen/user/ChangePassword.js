import React, {useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {
  View,
  Text,
  StatusBar,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  ToastAndroid,
} from 'react-native';

import InputIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import {Input} from 'react-native-elements';
// import style from '../../style/changepass';
import Icon from 'react-native-vector-icons/AntDesign';

import {UpdateUserData} from '../../redux/actions/User';

function ChangePassword(props) {
  const [show1, setShow1] = useState(true);
  const [show2, setShow2] = useState(true);
  const [show3, setShow3] = useState(true);
  const [pas1, setPas1] = useState('');
  const [pas2, setPas2] = useState('');
  const [pas3, setPas3] = useState('');
  const dispatch = useDispatch();

  const {token} = useSelector((state) => state.Auth);
  const {success, message} = useSelector((state) => state.User);

  const empty = () => {
    if (pas1 === '' || pas2 === '' || pas3 === '') {
      return true;
    } else {
      return false;
    }
  };
  const onSubmit = () => {
    if (pas1 && pas2 && pas2 === pas3) {
      dispatch(UpdateUserData(token, {password: pas2}));
      if (success) {
        props.navigation.replace('Profile');
        ToastAndroid.show('password updated', ToastAndroid.SHORT);
      }

      if (!success) {
        ToastAndroid.show(message, ToastAndroid.SHORT);
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
          name="arrowleft"
          size={25}
          color="black"
          onPress={() => {
            props.navigation.goBack();
          }}
        />
        <Text style={style.textFnd}>Change Password</Text>
      </View>
      <View style={style.content}>
        <Text style={style.title}>
          You must enter your current password and then type your new password
          twice.
        </Text>
      </View>
      <View style={style.inputContainer}>
        <Input
          placeholder="Enter your password"
          leftIcon={
            <InputIcon
              name="lock-outline"
              size={24}
              color={pas1 === '' ? '#383b40' : '#6379F4'}
            />
          }
          rightIcon={
            <InputIcon
              name={!show1 ? 'eye-outline' : 'eye-off-outline'}
              size={24}
              color="#383b40"
              onPress={() => {
                setShow1(!show1);
              }}
            />
          }
          onChangeText={(text) => {
            setPas1(text);
          }}
          secureTextEntry={show1}
        />
      </View>
      <View style={style.inputContainer}>
        <Input
          placeholder="Enter your password"
          leftIcon={
            <InputIcon
              name="lock-outline"
              size={24}
              color={pas2 === '' ? '#383b40' : '#6379F4'}
            />
          }
          rightIcon={
            <InputIcon
              name={!show2 ? 'eye-outline' : 'eye-off-outline'}
              size={24}
              color="#383b40"
              onPress={() => {
                setShow2(!show2);
              }}
            />
          }
          onChangeText={(text) => {
            setPas2(text);
          }}
          secureTextEntry={show2}
        />
      </View>
      <View style={style.inputContainer}>
        <Input
          placeholder="Enter your password"
          leftIcon={
            <InputIcon
              name="lock-outline"
              size={24}
              color={pas3 === '' ? '#383b40' : '#6379F4'}
            />
          }
          rightIcon={
            <InputIcon
              name={!show3 ? 'eye-outline' : 'eye-off-outline'}
              size={24}
              color="#383b40"
              onPress={() => {
                setShow3(!show3);
              }}
            />
          }
          onChangeText={(text) => {
            setPas3(text);
          }}
          secureTextEntry={show3}
        />
      </View>
      <TouchableOpacity
        onPress={() => {
          onSubmit();
        }}
        style={empty() ? style.loginBtn : style.loginBtnActive}>
        <Text style={empty() ? style.loginText : style.loginTextActive}>
          Change Password
        </Text>
      </TouchableOpacity>
    </View>
  );
}

export default ChangePassword;

const height = Dimensions.get('screen').height;
const style = StyleSheet.create({
  container: {
    height,
    backgroundColor: '#fafcff',
    paddingHorizontal: 10,
    // flex: 1,
  },
  nav: {
    paddingVertical: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 10,
  },
  iBack: {height: 24, width: 24, marginRight: 20},
  textFnd: {fontWeight: 'bold', marginRight: 'auto', fontSize: 18},
  content: {
    padding: 20,
  },
  title: {
    alignItems: 'center',
    textAlign: 'center',
    marginBottom: 40,
    color: '#7A7886',
    fontSize: 16,
  },
  loginBtn: {
    width: '90%',
    backgroundColor: '#E5E8ED',
    padding: 18,
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: 25,
    borderRadius: 12,
  },
  loginBtnActive: {
    width: '90%',
    backgroundColor: '#6379f4',
    padding: 18,
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: 25,
    borderRadius: 12,
  },
  loginText: {
    fontWeight: 'bold',
    color: '#88888F',
    fontSize: 20,
  },
  loginTextActive: {
    fontWeight: 'bold',
    color: '#ffffff',
    fontSize: 20,
  },
});
