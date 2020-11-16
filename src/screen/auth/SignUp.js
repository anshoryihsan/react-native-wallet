import React, {useState} from 'react';
import style from '../../style/auth';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
  ToastAndroid,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {Input} from 'react-native-elements';
import Button from '../../components/Button/BigButton';
import {useSelector, useDispatch} from 'react-redux';

function SignUp(props) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [show, setShow] = useState(true);
  const [loading, setLoading] = useState(false);
  //   const dispatch = useDispatch();

  const onSubmit = () => {
    setLoading(true);
    const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (name && email && pass) {
      if (reg.test(email) === false) {
        ToastAndroid.show('email is not properly formatted', ToastAndroid.LONG);
      } else {
        props.navigation.navigate('CreatePIN', {
          first_name: name,
          email,
          password: pass,
        });
        ToastAndroid.show('loading....', ToastAndroid.SHORT);
      }
    } else {
      ToastAndroid.show('fill out the form correctly!', ToastAndroid.LONG);
    }
    setLoading(false);
  };

  const isActive = () => {
    if (email && pass && name) {
      return true;
    }
  };

  return (
    <SafeAreaView>
      <ScrollView style={style.container}>
        <Text style={style.brandName}>Zwallet</Text>
        <View style={style.content}>
          <View style={style.descript}>
            <Text style={style.header}>Sign Up</Text>
            <Text style={style.subHeader}>
              Create your account to access Zwallet.
            </Text>
          </View>
          <View style={style.form}>
            <Input
              placeholder="Enter your username"
              leftIcon={
                <Icon
                  name="account-outline"
                  size={24}
                  color={name === '' ? '#878787' : '#6379F4'}
                />
              }
              onChangeText={(text) => {
                setName(text);
              }}
            />
            <Input
              placeholder="Enter your mail"
              leftIcon={
                <Icon
                  name="email-outline"
                  size={24}
                  color={email === '' ? '#878787' : '#6379F4'}
                />
              }
              onChangeText={(text) => {
                setEmail(text);
              }}
            />
            <Input
              placeholder="Enter your password"
              leftIcon={
                <Icon
                  name="lock-outline"
                  size={24}
                  color={pass === '' ? '#878787' : '#6379F4'}
                />
              }
              rightIcon={
                <Icon
                  name={!show ? 'eye-outline' : 'eye-off-outline'}
                  size={24}
                  color="#878787"
                  onPress={() => {
                    setShow(!show);
                  }}
                />
              }
              onChangeText={(text) => {
                setPass(text);
              }}
              secureTextEntry={show}
            />
          </View>
          <Button isActive={isActive} onSubmit={onSubmit} name={'Sign Up'} />
          <TouchableOpacity
            onPress={() => {
              props.navigation.navigate('Login');
            }}>
            <Text style={style.signup}>
              Already have an account? Let’s
              <Text style={style.signup_}> Login</Text>
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
export default SignUp;
